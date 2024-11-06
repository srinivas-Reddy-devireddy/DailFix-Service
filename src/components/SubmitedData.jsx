import React, { useEffect, useState } from 'react';
import '../styles/contact.css'
const DataPage = () => {
    const [customerData, setCustomerData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(data => setCustomerData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredData = customerData.filter(customer => 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        customer.mobile.includes(searchTerm)
    );

    return (
        <div className="data-page">
            <h2>Customer Data</h2>
            
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search by Name or Mobile"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
            
            {/* Data Table */}
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Service Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.address}</td>
                            <td>{customer.serviceType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataPage;
