// import { createContext, useCallback, useState } from 'react';
// import axios from 'axios';


// const TransContext = createContext();


// function Provider({ children }) {
//     const [trans, setTrans] = useState([]);

//     const fetchTrans = useCallback(async () => {
//         const response = await axios.get('http://localhost:3005/trans');

//         setTrans(response.data);
//         // console.log(response.data);
//     }, []);

//     // useEffect(() => {
//     //     fetchTrans();
//     // }, []);



//     const transValue = async (title, amount) => {
//         const response = await axios.post('http://localhost:3005/trans', {
//             title: title, amount: amount
//         })
//         const updatedTrans = [...trans, response.data];
//         setTrans(updatedTrans);
//     }
//     const transDeleteById = async (id) => {
//         const response = await axios.delete(`http://localhost:3005/trans/${id}`);
//         const updatedTrans = trans.filter((tran) => {
//             return tran.id !== id;
//         })
//         setTrans(updatedTrans);
//     }
//     const value = {
//         fetchTrans,
//         transValue,
//         transDeleteById

//     }




//     return (
//         <TransContext.Provider value={value}>
//             {children}
//         </TransContext.Provider>

//     );

// }

// export { Provider };
// export default TransContext;

