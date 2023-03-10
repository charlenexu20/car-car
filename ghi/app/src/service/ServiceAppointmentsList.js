import { useEffect, useState } from "react";

function ServiceAppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const fetchAppointments = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }

    useEffect(() => {
        fetchAppointments();
    }, []);

    const handleCancel = async (id) => {
        const response = await fetch(`http://localhost:8080/api/appointments/${id}`, {
            method: "delete",
        })
        if (response.ok) {
            fetchAppointments();
        }
    };

    const handleFinished = async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/`;
        const fetchConfig = {
            method: "put",
            body: JSON.stringify({ is_finished: true }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            fetchAppointments();
        }
    };

    if (appointments === undefined) {
        return null;
    }

    return (
        <div className="container">
            <h1 className="display-5 fw-bold">Service Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer name</th>
                        <th>VIP</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.filter(appointment => !appointment.is_finished).map(appointment => {
                        return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer_name}</td>
                            <td>
                                {appointment.is_vip ? "Yes" : "No"}
                            </td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.technician.technician_name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                                <button
                                className="btn btn-danger"
                                onClick={() => handleCancel(appointment.id)}
                                type="button">
                                Cancel
                                </button>
                                <button
                                className="btn btn-success"
                                onClick={() => handleFinished(appointment.id)}
                                type="button">
                                Finished
                                </button>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceAppointmentList;
