import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const InputForm1 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    return (
        <div className='md:w-1/2 mx-auto mt-6 card shadow-2xl bg-base-100 p-10'>
            <h1 className='text-3xl font-bold text-center'>ABC Engine Prototype</h1>
            <p className='text-xl font-semibold text-center mt-6'>Input Project Details</p>
            <form >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Name</span>
                    </label>
                    <input type="text" placeholder="project name" {...register("projectName", {
                        required: "Project Name is Required"
                    })} className="input input-bordered" />
                    {errors.projectName && <p className='text-red-500'>{errors.projectName.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Description</span>
                    </label>
                    <input type="text" placeholder="project description" {...register("projectDescription", {
                        required: "Project Description is Required"
                    })} className="input input-bordered" />
                    {errors.projectDescription && <p className='text-red-500'>{errors.projectDescription.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Client</span>
                    </label>
                    <input type="text" placeholder="client" {...register("client", {
                        required: "Client is Required"
                    })} className="input input-bordered" />
                    {errors.client && <p className='text-red-500'>{errors.client.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Contractor</span>
                    </label>
                    <input type="text" placeholder="contractor" {...register("client", {
                        required: "Contractor is Required"
                    })} className="input input-bordered" />
                    {errors.contractor && <p className='text-red-500'>{errors.contractor.message}</p>}
                </div>
                <div className="form-control">
                    <button type='submit' className="btn btn-accent text-white mt-6">Next</button>
                    {error && <p className='text-red-500'>{setError}</p>}
                </div>
            </form>
        </div>
    );
};

export default InputForm1;