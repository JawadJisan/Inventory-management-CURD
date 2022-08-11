import React from 'react';
import { useParams } from 'react-router-dom';
import App from '../HookForm/HookForm';
import HookForm from '../HookForm/HookForm';

const Checkout = () => {
    const {name} = useParams();
    return (
        <div>
            {/* <p>ID: {id} </p> */}

            <h1 className=' text-center mt-5 font-bold text-3xl text-sky-700'>Congrats for Choosing The : <span className='text-red-900 text-4xl'>{name}</span> service</h1>

            <p className=' text-center mt-5 font-bold text-3xl text-rose-600'>Please Fil up this Form 😃</p>
            <p className='text-center mt-3 mb-5 text-2xl'>Let me know what you think about my services </p>
        
        <HookForm></HookForm>
        {/* <App></App> */}
        
        </div>
    );
};

export default Checkout;