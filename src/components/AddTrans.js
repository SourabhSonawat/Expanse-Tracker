// import { useState } from "react";
import React, { useState } from 'react';

const AddTrans = ({ OnMake }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    // const handleChange = (event) => {
    //     setAmount(event.target.value);
    //     setTitle(event.target.value);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        OnMake(title, amount);
        setTitle('');
        setAmount(0)
    }

    return (
        <>
            <h2>Add new transaction</h2>

            <form className='form' onSubmit={handleSubmit}>
                <div className='form-x'>
                    <label className='label'>Text</label><br />
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter text..." className='input' />
                </div>
                <div className='form-x'>
                    <label className='label' >Amount <br /> (negative-expanse, positive-income) <br /></label>
                    <input type="number" placeholder='Enter Amount' value={(amount)} onChange={(e) => setAmount(e.target.value)} className='input' />
                </div>


                <button className='Add-btn'> Add Transaction</button>


            </form>
        </>
    );
};

export default AddTrans;