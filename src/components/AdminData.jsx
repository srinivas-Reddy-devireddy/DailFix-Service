import { useEffect, useState } from 'react';
import '../styles/contact.css';

const AdminData = () => {
    const [customerData, setCustomerData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Helper function to add date and time fields
    const addDateAndTimeFields = (data) => {
        return data.map((customer) => {
            return {
                ...customer,
            };
        });
    };

    useEffect(() => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(data => setCustomerData(addDateAndTimeFields(data)))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredData = customerData
        .filter(customer => {
            // Search logic for multiple fields (name, mobile, address, service type, date, month, year)
            const nameMatch = customer.name.toLowerCase().includes(searchTerm.toLowerCase());
            const mobileMatch = customer.mobile && customer.mobile.toString().includes(searchTerm);
            const addressMatch = customer.address && customer.address.toLowerCase().includes(searchTerm.toLowerCase());
            const serviceTypeMatch = customer.serviceType && customer.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
            const dateMatch = customer.date && customer.date.toString().includes(searchTerm);
            const monthMatch = customer.month && customer.month.toString().includes(searchTerm);
            const yearMatch = customer.year && customer.year.toString().includes(searchTerm);

            return (
                (nameMatch || mobileMatch || addressMatch || serviceTypeMatch || dateMatch || monthMatch || yearMatch) &&
                (!startDate || new Date(customer.dateAdded) >= new Date(startDate)) &&
                (!endDate || new Date(customer.dateAdded) <= new Date(endDate))
            );
        })
        .sort((a, b) => b.name.toLowerCase().includes(searchTerm.toLowerCase()) - 
                         a.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="data-page">
            <h2>Customer Data</h2>

            <input
                type="text"
                placeholder="Search by Name, Mobile, Address, Service Type, Date, Month, or Year"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '10px', padding: '10px', width: '100%' }}
            />

               <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Service Type</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.address}</td>
                            <td>{customer.serviceType}</td>
                            <td>{customer.date}/{customer.month}/{customer.year}</td>
                          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminData;
