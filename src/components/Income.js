import React from 'react';

const Income = ({ transactions }) => {
    const amounts = transactions.map(transaction => parseInt(transaction.amount));
    const income = amounts.filter(item => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2)
    const expanse = (amounts.filter(item => item < 0).reduce((acc, item) => acc += item, 0) * -1).toFixed(2)

    return (
        <div className="income">
            <div className='income-in'>
                <h5>INCOME</h5>
                <p>${income}</p>
            </div>
            <div className='income-out'>
                <h5>EXPANSE</h5>
                <p>${expanse}</p>
            </div>

        </div>
    );
};

export default Income;