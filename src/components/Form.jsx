import React from 'react';
import Input from './Input';

const Form = () => {
    return (
        <form className='form'>
            <Input type='text' placeholder='Username' />
            <Input type='text' placeholder='Password' />
            <button>Submit</button>

        </form>
    )
}


export default Form;