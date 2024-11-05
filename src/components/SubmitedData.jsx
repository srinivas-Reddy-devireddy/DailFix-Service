import React, { useEffect, useState } from 'react';


const DataPage = () => {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/get-customer-data')
            .then(response => response.json())
            .then(data => setCustomerData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="data-page">
            <h2>Customer Data</h2>
            <ul>
                {customerData.map((customer, index) => (
                    <li key={index}>
                        <p>Name: {customer.name}</p>
                        <p>Mobile: {customer.mobile}</p>
                        <p>Address: {customer.address}</p>
                        <p>Service Type: {customer.serviceType}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataPage;
