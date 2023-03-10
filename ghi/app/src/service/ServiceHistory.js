import React from "react";
import { useState, useEffect } from "react";

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    };

    const [search, setSearch] = useState('');
    const [buttonClick, setButtonClick] = useState(false);
    const [filterAppts, setFilterAppts] = useState([]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    }

    const handleButton = (event) => {
        event.preventDefault();
        setButtonClick(true);

        const filteredAppts = appointments.map(appointment => {
            if (appointment.vin === search) {
                return {...appointment};
            }
            return appointments;
        });
        setFilterAppts(filteredAppts);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div className="container">
            <form onSubmit={handleButton} id="search-by-vin-form">
                <div className="input-group mb-3 mt-5">
                    <input
                    placeholder="Search appointment by VIN"
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleSearchChange}
                    required
                    className="form-control"
                    />
                    <button
                    type="submit"
                    className="btn btn-secondary input-group-append"
                    >
                        Search VIN
                    </button>
                </div>
            </form>
        </div>
        <div className="container">
            <h1>Service Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {filterAppts.map(appointment => {
                        if (appointment.vin === search && buttonClick) {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.technician.technician_name}</td>
                                    <td>{appointment.reason}</td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ServiceHistory;
