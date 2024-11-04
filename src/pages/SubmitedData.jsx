// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ServiceTable = () => {
//     const [requests, setRequests] = useState([]);
//     const [newStatus, setNewStatus] = useState('');

//     useEffect(() => {
//         fetchRequests();
//     }, []);

//     const fetchRequests = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/requests');
//             setRequests(response.data);
//         } catch (error) {
//             console.error('Error fetching requests:', error);
//         }
//     };

//     const updateStatus = async (id, status) => {
//         try {
//             await axios.put(`http://localhost:5000/requests/${id}/status`, { status });
//             fetchRequests();
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }
//     };

//     const deleteRequest = async (id) => {
//         try {
//             await axios.delete(`http://localhost:5000/requests/${id}`);
//             fetchRequests();
//         } catch (error) {
//             console.error('Error deleting request:', error);
//         }
//     };

//     return (
//         <div className="table-container">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Number</th>
//                         <th>Address</th>
//                         <th>Service Type</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {requests.map((request) => (
//                         <tr key={request._id}>
//                             <td>{request._id}</td>
//                             <td>{request.name}</td>
//                             <td>{request.mobile}</td>
//                             <td>{request.address}</td>
//                             <td>{request.serviceType}</td>
//                             <td>
//                                 <select 
//                                     value={request.status} 
//                                     onChange={(e) => updateStatus(request._id, e.target.value)}
//                                 >
//                                     <option value="Pending">Pending</option>
//                                     <option value="In Progress">In Progress</option>
//                                     <option value="Completed">Completed</option>
//                                 </select>
//                             </td>
//                             <td>
//                                 <button onClick={() => deleteRequest(request._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ServiceTable;
