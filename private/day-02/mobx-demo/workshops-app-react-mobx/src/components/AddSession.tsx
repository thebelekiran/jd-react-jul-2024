import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';

type Props = {
    id: number | string
};

// similar to ISession but without id, description and upvoteCount
type Values = Omit<ISession, 'id' | 'workshopId' | 'upvoteCount'>;

// mapped types
type FixedValueType<T, U> = {
    [P in keyof T]: U;
};

type Errors = FixedValueType<Values, string[]>;

const AddSession = ( { id } : Props ) => {
    const initialState : Values = {
        sequenceId: 0,
        name: '',
        speaker: '',
        duration: 0,
        level: 'Basic',
        abstract: ''
    };

    const initialErrorState : Errors = {
        sequenceId: [],
        name: [],
        speaker: [],
        duration: [],
        level: [],
        abstract: []
    }

    const [ values, setValues ] = useState<Values>( initialState );
    const [ errors, setErrors ] = useState<Errors>( initialErrorState );
    const [ isValid, setValid ] = useState<boolean>( false );

    const {
        sequenceId,
        name,
        speaker,
        duration,
        level,
        abstract
    } = values;
   
    const {
        sequenceId : sequenceIdErrors,
        name : nameErrors,
        speaker : speakerErrors,
        duration : durationErrors,
        level : levelErrors,
        abstract : abstractErrors
    } = errors || {};

    const updateValue = ( event : ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> ) => {
        const { name, value } = event.target;

        setValues(values => {
            return {
                ...values,
                [name]: value
            };
        });
    };

    const clearForm = ( event : MouseEvent<HTMLButtonElement> ) => {
        setValues( initialState );
    };

    useEffect(
        () => {
            // sequenceId must be a number
            const sequenceIdPat = /^\d+$/;

            const errors : Errors = {
                sequenceId: [],
                name: [],
                speaker: [],
                duration: [],
                level: [],
                abstract: []
            };

            let isValid = true;

            if( !sequenceIdPat.test( '' + sequenceId ) ) {
                errors.sequenceId.push( 'SequenceID must be a number' );
                isValid = false;
            }
            
            // similarly make other checks and push to errors arrays

            setErrors( errors );
            setValid( isValid );
        },
        [ values ]
    );

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-12">
                    <h3>
                        Details of new session
                    </h3>
                    <hr />
                </div>
            </div>
            <div className="col-12">
                <form>
                    <div className="form-group row">
                        <label htmlFor="sequenceId" className="col-sm-3 col-form-label">Sequence ID</label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                className="form-control"
                                name="sequenceId"
                                id="sequenceId"
                                placeholder=""
                                aria-describedby="sequenceHelpId" 
                                value={sequenceId}
                                onChange={updateValue}
                            />
                            <small id="sequenceHelpId" className="text-muted">Sequence ID is the serial number of the session in the workshop</small>
                            <div>
                                {
                                    sequenceIdErrors?.map(
                                        error => <small key={error}>{error}</small>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                            <input 
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="" 
                                aria-describedby="NameHelpId"
                                value={name}
                                onChange={updateValue}
                            />
                            <small id="NameHelpId" className="text-muted">The title of the session</small>
                            <div>
                                {
                                    nameErrors?.map(
                                        error => <small key={error}>{error}</small>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="speaker" className="col-sm-3 col-form-label">Speaker(s)</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="speaker" id="speaker" placeholder="" aria-describedby="speakerHelpId" value={speaker} onChange={updateValue}/>
                            <small id="speakerHelpId" className="text-muted">The name of the speaker(s) for this session. Separate speaker names by a comma. Example <strong>John Doe, Jane Doe</strong>.</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="duration" className="col-sm-3 col-form-label">Duration</label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control" name="duration" id="duration" placeholder="" aria-describedby="durationHelpId" value={duration} onChange={updateValue} />
                            <small id="durationHelpId" className="text-muted">The length of the session in hours</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="level" className="col-sm-3 col-form-label">Level</label>
                        <div className="col-sm-9">
                            <select className="form-control" name="level" id="level" value={level} onChange={updateValue}>
                                <option value="">-- Select the level of the session --</option>
                                <option value="Basic">Basic</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="duration" className="col-sm-3 col-form-label">Abstract</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" name="abstract" id="abstract"
                            aria-describedby="abstractHelpId" value={abstract} onChange={updateValue}></textarea>
                            <small id="abstractHelpId" className="text-muted">A brief description of the session topics</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-sm-3 col-sm-9">
                            <button type="submit" disabled={!isValid} className="btn btn-primary mr-2">Add session</button>
                            <button type="button" className="btn btn-danger">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={clearForm}>Clear the form</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSession;