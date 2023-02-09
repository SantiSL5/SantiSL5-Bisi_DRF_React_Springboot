import { ErrorMessage } from "@hookform/error-message";
import { useForm } from 'react-hook-form';

interface IFormInputs {
    number: string,
    station: string,
    bike: string,
    warning: boolean,
    disabled: boolean,
}

const List = ({ createSlot, operation, updateData, updateSlot, changeForm }: any) => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm<IFormInputs>({
        criteriaMode: "all"
    });

    if (updateData) {
        setValue("number", updateData.number)
        setValue("station", updateData.station.id)
        updateData.bike ? setValue("bike", updateData.bike.id) : setValue("bike", "")
        setValue("warning", updateData.warning)
        setValue("disabled", updateData.disabled)
    }

    if (operation === "create" && updateData !== undefined) {
        setValue("number", "")
        setValue("station", "")
        setValue("bike", "")
        setValue("warning", false)
        setValue("disabled", false)
    }

    const onSubmit = (data: IFormInputs) => {
        operation === "create" ? createSlot(data) : updateSlot({ data: data, id: updateData.id });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label htmlFor="Number" className="form-label text-white">Number:
                        <input id="Number" type="number" className="form-control mt-2"
                            {...register("number", {
                                required: "This input is required.",
                                maxLength: {
                                    value: 4,
                                    message: "This input exceed maxLength."
                                }
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="number"
                            render={({ messages }) => {
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </label>
                </div>

                <div className="mb-2">
                    <label htmlFor="Number" className="form-label text-white">Station ID:
                        <input id="Number" type="number" className="form-control mt-2"
                            {...register("station", {
                                required: "This input is required.",
                                maxLength: {
                                    value: 4,
                                    message: "This input exceed maxLength."
                                }
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="station"
                            render={({ messages }) => {
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </label>
                </div>

                <div className="mb-2">
                    <label htmlFor="Number" className="form-label text-white">Bike ID:
                        <input id="Number" type="number" className="form-control mt-2"
                            {...register("bike", {
                                maxLength: {
                                    value: 4,
                                    message: "This input exceed maxLength."
                                }
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="bike"
                            render={({ messages }) => {
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <p key={type}>{message}</p>
                                    ))
                                    : null;
                            }}
                        />
                    </label>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="warning" {...register("warning", {})} />
                    <label className="form-check-label text-white" htmlFor="warning">Warning</label>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="disabled" {...register("disabled", {})} />
                    <label className="form-check-label text-white" htmlFor="disabled">Disabled</label>
                </div>

                {operation === "create"
                    ? <button type="submit" className="btn btn-success">Create</button>
                    : <div>
                        <button type="submit" className="btn btn-info">Update</button>
                        <button type="button" className="btn btn-success ms-3" onClick={
                            () => changeForm(null, "create")
                        }>Back to create</button>
                    </div>}
            </form>

        </div>
    );
}

export default List;