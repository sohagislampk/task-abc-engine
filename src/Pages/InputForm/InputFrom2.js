import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const InputFrom2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    return (
        <div className='md:w-1/2 mx-auto my-10 card shadow-2xl bg-base-100 px-10 pb-10 pt-4'>
            <p className='text-xl font-bold text-center'>Input Data</p>
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
                    <label className="label">
                        <span className="label-text">Upload File (CSV file only)</span>
                    </label>
                    <input type="file" {...register("file")} className="file-input file-input-bordered w-full" />
                </div>
                <div className='md:flex md:justify-between'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">max_X</span>
                        </label>
                        <input type="number" placeholder="max_x" {...register("max_x", {
                            required: "max_x is Required"
                        })} className="input input-bordered" />
                        {errors.max_x && <p className='text-red-500'>{errors.max_x.message}</p>}
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">min_X</span>
                        </label>
                        <input type="number" placeholder="max_x" {...register("min_x", {
                            required: "min_x is Required"
                        })} className="input input-bordered" />
                        {errors.min_x && <p className='text-red-500'>{errors.min_x.message}</p>}
                    </div>
                </div>
                <div className='md:flex md:justify-between'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">max_Y</span>
                        </label>
                        <input type="number" placeholder="max_y" {...register("max_y", {
                            required: "max_y is Required"
                        })} className="input input-bordered" />
                        {errors.max_y && <p className='text-red-500'>{errors.max_y.message}</p>}
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">min_Y</span>
                        </label>
                        <input type="number" placeholder="max_y" {...register("min_y", {
                            required: "min_y is Required"
                        })} className="input input-bordered" />
                        {errors.min_y && <p className='text-red-500'>{errors.min_y.message}</p>}
                    </div>
                </div>

                <div className='md:flex md:justify-between'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">max_Z</span>
                        </label>
                        <input type="number" placeholder="max_z" {...register("max_z", {
                            required: "max_z is Required"
                        })} className="input input-bordered" />
                        {errors.max_z && <p className='text-red-500'>{errors.max_z.message}</p>}
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">min_Z</span>
                        </label>
                        <input type="number" placeholder="max_z" {...register("min_z", {
                            required: "min_z is Required"
                        })} className="input input-bordered" />
                        {errors.min_z && <p className='text-red-500'>{errors.min_z.message}</p>}
                    </div>
                </div>

                <div className="form-control">
                    <button type='submit' className="btn btn-accent text-white mt-6">Submit</button>
                    {error && <p className='text-red-500'>{setError}</p>}
                </div>
            </form>
        </div>
    );
};

export default InputFrom2;