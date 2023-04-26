import React from 'react';

const TranscationShow = ({ list, onDelete }) => {
    const sign = list.amount < 0 ? '-' : '+'
    const color = list.amount < 0 ? 'red' : 'green';

    const handleDelete = () => {
        onDelete(list.id);
    }
    return (
        <>
            <ul className='list'>
                <div className='flex'>

                    <li>{list.title}</li>
                    <div className='box'>

                        <span className={color} amount> {sign}${Math.abs(list.amount)}</span>
                        <button className='delete-btn' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </ul>
        </>
    );
};

export default TranscationShow;