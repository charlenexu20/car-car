import { useEffect, useState } from "react";

function SalesPersonHistory() {
const [salesperson, setSalesperson] = useState([]);
const [selectedSalesperson, setSelectedSalesperson] = useState("");
const fetchPerson = async () => {
    const personUrl = `http://localhost:8090/api/salespeople/`;
    const response = await fetch(personUrl);

    if (response.ok) {
    const data = await response.json();
    setSalesperson(data.salespersons);
    }
};

useEffect(() => {
    fetchPerson();
}, []);

const handleSalespersonChange = (event) => {
    setSelectedSalesperson(event.target.value);
};


const [sales, setSale] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const saleUrl = `http://localhost:8090/api/salesperson/${selectedSalesperson}/sales/`;
        const response = await fetch(saleUrl);

        if (response.ok) {
        const data = await response.json();
        setSale(data);
        }
    };

    if (selectedSalesperson) {
    fetchData();
    }
}, [selectedSalesperson]); //***Change */

return (
    <div className="container">
    <h1>
        Sales person history
    </h1>
    <div className="mb-3">
        <select
        onChange={handleSalespersonChange}
        required
        name="salesperson"
        id="salesperson"
        className="form-select"
        >
        <option value="">Choose a Salesperson</option>
        {salesperson.map((person) => {
            return (
            <option key={person.id} value={person.id}>
                {person.name}
            </option>
            );
        })}
        </select>
    </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Salesperson Name</th>
            <th>Employee Number</th>
            <th>Customer Name</th>
            <th>Automobile VIN</th>
            <th>Sale Price</th>
        </tr>
        </thead>
        <tbody>
        {sales.map((sale, id) => (
    <tr key={id}>
        <td>{sale.salesperson}</td>
        <td>{sale.employee_number}</td>
        <td>{sale.customer}</td>
        <td>{sale.vin}</td>
        <td>{sale.sale_price}</td>
    </tr>
))}
        </tbody>
    </table>
    </div>
);
}

export default SalesPersonHistory;
