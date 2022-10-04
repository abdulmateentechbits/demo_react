import React from 'react'
import Header from '../layout/Header'
import { useFieldArray, useForm } from 'react-hook-form'

let renderCounter = 0;

const BasicForm = () => {
    renderCounter++;
    const { handleSubmit, register } = useForm({
        defaultValues: {
            firstName: 'Abdul',
            lastNae: 'Mateen'
        }
    });

    register("firstName");
    register("lastNae");
    register("test2.0");

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
            <input placeholder='First Name' />
            <input type="submit" />

        </form>
    )
}

export default BasicForm