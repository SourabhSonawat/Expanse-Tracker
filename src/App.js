import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import Transaction from './components/TransactionList.js';
import AddTrans from './components/AddTrans';


function App() {
  const [trans, setTrans] = useState([]);

  const fetchTrans = async () => {
    const response = await axios.get('http://localhost:3005/trans');

    setTrans(response.data);
  };

  useEffect(() => {
    fetchTrans();
  }, []);



  const transValue = async (title, amount) => {
    const response = await axios.post('http://localhost:3005/trans', {
      title: title, amount: amount
    })
    const updatedTrans = [...trans, response.data];
    setTrans(updatedTrans);
  }
  const transDeleteById = async (id) => {
    const response = await axios.delete(`http://localhost:3005/trans/${id}`);
    const updatedTrans = trans.filter((tran) => {
      return tran.id !== id;
    })
    setTrans(updatedTrans);
  }




  return (
    <div className='App'>
      <Header />
      <Balance transactions={trans} />
      <Income transactions={trans} />
      <Transaction Transactions={trans} onDelete={transDeleteById} />
      <AddTrans OnMake={transValue} />
    </div>
  );
}

export default App;
