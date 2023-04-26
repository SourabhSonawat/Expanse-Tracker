import React from 'react';
import TransactionShow from './TranscationShow';

const TransactionList = ({ Transactions, onDelete }) => {
    const renderList = Transactions.map((list, id) => {
        return <TransactionShow list={list} key={list.id} onDelete={onDelete} />
    })



    return (
        <div className='history'>
            <h1>History</h1>

            <div className='render'>{renderList}</div>
        </div>
    );
};

export default TransactionList;