
// Auth
// const LoginServiceUser = async (userEmail, userPassword) => {
//     const user = fetch('http://localhost:8080/api/v1/user/login', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//           },
//         body: JSON.stringify({email: userEmail, password: userPassword})
//     }).then(res => {
//         return res.json();
//     }).then(data => {
//         console.log(data);
//         return data;
//     });

//     return user;
//   };

// const RegisterService = (userData) => {
//     return axios.post('/api/register', userData);
// }

// // Order user
// const getCartService = (token) => {
//     return axios.get('/api/get-cart', {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// };
// const updateCartService = (data, token) => {
//     return axios.put('/api/update-cart', data, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// };
// const orderService = (data, token) => {
//     return axios.post('/api/order', data, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// };

// // Info account
// const getInforAccountService = (token) => {
//     return axios.post('/api/get-info-account', {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// };
// const updateInforAccountService = (data, token) => {
//     return axios.put('/api/update-info-account', data, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// };


// export default {
//     LoginServiceUser, 
//     // RegisterService, getCartService, updateCartService, orderService,
//     // getInforAccountService, updateInforAccountService
// }