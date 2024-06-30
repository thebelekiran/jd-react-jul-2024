import { Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postSession } from '../../../../services/api/sessions';

const RequestSession = () => {
    const { register, getValues, formState: { errors }, handleSubmit } = useForm({
        mode: 'all' // any kind of supported events will trigger validation
    });

    // console.log('errors = ', errors);

    const { id } = useParams();
    const navigate = useNavigate();

    const checkDurationLevel = () => {
        const { duration, level } = getValues();
        const numDuration = +duration;

        if (level === 'Basic' && numDuration < 1) {
            return "Basic level requires at least 1 hour duration";
        }

        if (level === 'Intermediate' && numDuration < 2) {
            return "Intermediate level requires at least 2 hour duration";
        }

        if (level === 'Advanced' && numDuration < 3) {
            return "Advanced level requires at least 3 hour duration";
        }

        return true;
    };

    // Becuase we wrap this in handleSubmit, this function is called on submit only when the form is valid
    const sendNewSessionRequest = async (values) => {
        console.log(values);

        const newSession = await postSession({
            workshopId: +id,
            upvoteCount: 0,
            ...values,
            sequenceId: +values.sequenceId,
            duration: +values.duration
        });

        console.log(newSession);

        navigate(`/workshops/${id}`);
    };

    return (
        <>
            <h2 className="h3">Request a New Session</h2>
            <hr />

            <Form onSubmit={handleSubmit(sendNewSessionRequest)}>
                <Form.Group className="mb-3" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1"
                        {...register('sequenceId', {
                            required: true
                        })}
                    />
                    {
                        errors.sequenceId && (
                            <div className="text-danger">
                                {
                                    errors.sequenceId.type === 'required' && (
                                        <div>This field must be filled in</div>
                                    )
                                }
                            </div>
                        )
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Getting started"
                        {...register('name', {
                            required: true,
                        })}
                    />
                    {
                        errors.name && (
                            <div className="text-danger">
                                {
                                    errors.name.type === 'required' && (
                                        <div>This field must be filled in</div>
                                    )
                                }
                            </div>
                        )
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        {...register('speaker', {
                            required: true,
                            pattern: /^[A-Za-z][A-Za-z ]+(,[A-Za-z ]+)*$/
                        })}
                    />
                    {
                        errors.speaker && (
                            <div className="text-danger">
                                {
                                    errors.speaker.type === 'required' && (
                                        <div>This field must be filled in</div>
                                    )
                                }
                                {
                                    errors.speaker.type === 'pattern' && (
                                        <div>You can supply names separated by commas</div>
                                    )
                                }
                            </div>
                        )
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="2.5"
                        {...register('duration', {
                            validate: checkDurationLevel
                        })}
                    />
                    {
                        errors.duration && (
                            <div className="text-danger">
                                {
                                    errors.duration.type === 'validate' && (
                                        <div>{errors.duration.message}</div>
                                    )
                                }
                            </div>
                        )
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        aria-label="Choose the level of the session"
                        {...register('level')}
                    >
                        <option>Open this select menu</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="abstract">
                    <Form.Label>Describe the session</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send Request
                </Button>
            </Form>
        </>
    );
}

export default RequestSession;