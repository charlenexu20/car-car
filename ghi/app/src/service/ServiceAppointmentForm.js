import React, { useEffect, useState} from 'react';

function ServiceAppointmentForm() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }

    const [vin, setVin] = useState('');
    const [owner, setOwner] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [technician, setTechnician] = useState('');
    const [reason, setReason] = useState('');

    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }

    const handleOwnerChange = (event) => {
        const value = event.target.value
        setOwner(value)
    }

    const handleDateChange = (event) => {
        const value = event.target.value
        setDate(value)
    }

    const handleTimeChange = (event) => {
        const value = event.target.value
        setTime(value)
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value
        setTechnician(value)
    }

    const handleReasonChange = (event) => {
        const value = event.target.value
        setReason(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.customer_name = owner;
        data.date = date;
        data.time = time;
        data.technician = technician;
        data.reason = reason;


        const url = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {

            setVin('');
            setOwner('');
            setDate('');
            setTime('');
            setTechnician('');
            setReason('');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Service Appointment</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input
                            placeholder="VIN"
                            type="text"
                            name="vin"
                            id="vin"
                            value={vin}
                            onChange={handleVinChange}
                            required
                            className="form-control"
                            />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            placeholder="Owner"
                            type="text"
                            name="customer_name"
                            id="customer_name"
                            value={owner}
                            onChange={handleOwnerChange}
                            required
                            className="form-control"
                            />
                            <label htmlFor="customer_name">Owner</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            placeholder="Date"
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={handleDateChange}
                            required
                            className="form-control"
                            />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            placeholder="Time"
                            type="time"
                            name="time"
                            id="time"
                            value={time}
                            onChange={handleTimeChange}
                            required
                            className="form-control"
                            />
                            <label htmlFor="time">Time</label>
                        </div>
                        <div className="mb-3">
                            <select
                                name="technician"
                                id="technician"
                                required
                                value={technician}
                                onChange={handleTechnicianChange}
                                className="form-select">
                                <option value="">Choose a technician</option>
                                {technicians.map(technician => {
                                    return (
                                        <option key={technician.id} value={technician.id}>
                                        {technician.technician_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                            placeholder="Reason"
                            name="reason"
                            id="reason"
                            value={reason}
                            onChange={handleReasonChange}
                            required
                            className="form-control"
                            />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ServiceAppointmentForm;
