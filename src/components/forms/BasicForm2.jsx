import React from 'react'
import Header from '../layout/Header'
import { useForm } from 'react-hook-form'

let renderCounter = 0;

const BasicForm = () => {
    renderCounter++;
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Header
                description="Performant, flexible and extensible forms with easy-to-use validation."
                renderCount={renderCounter}
            />
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" {...register('firstName', { required: "Field is required.." })} />
            {errors.firstName && <span>{errors.firstName.message}</span>}
            <label htmlFor="lastName">Last Name:</label>
            <input name='lastName' {...register('lastName', { maxLength: {value: 4, message:'Max 4 character needed'} })} />
            {errors.lastName && <span>{errors.lastName.message}</span>}

            <label htmlFor="age">Age</label>
            <input type="number" name="age" {...register('age', { valueAsNumber: true })} />
            {errors.age && <span>{errors.age.message}</span>}
            <label htmlFor="gender"></label>
            <select name="gender" {...register('gender')}>
                <option value="">Select...</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            {errors.gender && <span>{errors.gender.message}</span>}
            <label htmlFor="developer">Are you a developer?</label>
            <input value="yes" name='developer' type="checkbox" {...register('developer')} />
            {errors.developer && <span>{errors.developer.message}</span>}
            <input type="submit" />
        </form>
    )
}

export default BasicForm