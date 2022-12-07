import React, { useState } from 'react';

const InputForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [registerError, setRegisterError] = useState('');
    return (
        <div>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register("email", {
                        required: "Email is Required"
                    })} className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
            </form>
        </div>
    );
};

export default InputForm;