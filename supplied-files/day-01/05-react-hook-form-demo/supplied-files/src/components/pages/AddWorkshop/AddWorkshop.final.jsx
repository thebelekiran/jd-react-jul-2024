import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { postWorkshop } from "../../../services/workshops";
import Select from "react-select";

const categories = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "database", label: "Database" },
    { value: "language", label: "Language" },
    { value: "mobile", label: "Mobile" },
    { value: "devops", label: "Devops" },
];

const AddSession = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all", // 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all' -> 'all' = 'onChange' | 'onBlur'
        criteriaMode: "all", // 'firstError' | 'all'
        defaultValues: {
            name: "",
            // category: {},
        },
    });

    // console.log("render : ", new Date());
    console.log("errors = ", errors);

    const addWorkshop = async (values) => {
        console.log("values = ", values);

        try {
            const addedWorkshop = await postWorkshop({
                ...values,
                category: values.category.value,
            });
            alert(
                `A new workshop with title ${addedWorkshop.name} and id=${addedWorkshop.id} has been created`
            );
        } catch (error) {
            alert((error).message);
        }
    };

    const csvValidator = (value) => {
        return /^[A-Za-z ]+(,[A-Za-z ]+)*$/.test(value);
    };

    /**
     * EXERCISE
     * @todo Convert the UI elements using React Bootstrap
     */
    return (
        <div className="container my-4">
            <h2>Add a workshop</h2>
            <hr />
            <form onSubmit={handleSubmit(addWorkshop)} noValidate>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        {...register("name", {
                            required: "Name is required",
                            pattern: {
                                value: /^[A-Za-z0-9][A-Za-z0-9 ]+$/,
                                message:
                                    "Name should be alphanumeric and can have spaces",
                            },
                            minLength: {
                                value: 3,
                                message:
                                    "Name should have at least 3 characters",
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => (
                            <p>
                                <small className="text-danger">{message}</small>
                            </p>
                        )}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <Controller
                        name="category"
                        control={control}
                        rules={{ required: "Category is required" }}
                        render={({ field }) => {
                            console.log("field= ", field);
                            return <Select {...field} options={categories} />;
                        }}
                    />

                    <ErrorMessage
                        errors={errors}
                        name="category"
                        render={({ message }) => (
                            <p>
                                <small className="text-danger">{message}</small>
                            </p>
                        )}
                    />
                </div>

                <button className="btn btn-primary">Add workshop</button>
            </form>
        </div>
    );
};

export default AddSession;
