import React, { useEffect, useState} from 'react';

function TechnicianForm() {
    const [name, setName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleEmployeeNumberChange = (event) => {
        const value = event.target.value
        setEmployeeNumber(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.technician_name = name
        data.employee_number = employeeNumber

        const url = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {

            setName('');
            setEmployeeNumber('');
        }
    };

    useEffect(() => {
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Enter a technician</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input
                            placeholder="Technician name"
                            type="text"
                            name="technician_name"
                            id="technician_name"
                            value={name}
                            onChange={handleNameChange}
                            required
                            className="form-control"
                            />
                            <label htmlFor="technician_name">Technician Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            placeholder="Employee Number"
                            type="number"
                            name="employee_number"
                            id="employee_number"
                            value={employeeNumber}
                            onChange={handleEmployeeNumberChange}
                            required
                            className="form-control"
                            />
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TechnicianForm;
