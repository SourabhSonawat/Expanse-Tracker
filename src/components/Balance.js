import React from 'react';

const Balance = ({ transactions }) => {


    const amounts = transactions.map(transaction => parseInt(transaction.amount));
    // const sign = amounts < 0 ? '-' : '';
    const Total = amounts.reduce((acc, item) => (acc += item), 0);
    // const sign = (Total < 0).replace('-', '');

    return (
        <div className='balance'>
            <h5>Your Balance</h5>
            <h3> ${Total}</h3>
        </div>
    );
};

export default Balance;