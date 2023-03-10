import { useEffect, useState } from "react";

function SalesList() {
    // LIST----------------------------------------------------------------
    const [sales, setSale] = useState([]);
    const fetchData = async () => {
        const saleUrl = `http://localhost:8090/api/sales/`;
        const response = await fetch(saleUrl);

        if (response.ok) {
        const data = await response.json();
        setSale(data.sales);
        }
    };

    useEffect(() => {
        fetchData();

    }, []);

    const handleClick = () => {
        window.location.href = '/sales/new'
    }

    return (
        <div className="container">
        <h1 className="card display-5 text-dark fw-bold text-center my-3">
            ALL SALES HISTORY
        </h1>

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
            {sales.map((sale, id) => {
                return (
                <tr key={id}>
                    <td>{sale.salesperson}</td>
                    <td>{sale.employee_number}</td>
                    <td>{sale.customer}</td>
                    <td>{sale.vin}</td>
                    <td>{sale.sale_price}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        <div className="text-center">
        <button onClick={handleClick} className="btn btn-primary">Create a Sale</button>
        </div>
        </div>
    );
}

export default SalesList;
