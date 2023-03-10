import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function CreateSaleForm() {
  const navigate = useNavigate();


  const [sales, setSales] = useState('');
  const fetchSales = async () => {
    const response = await fetch("http://localhost:8090/api/sales/");
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  }

  useEffect(() => {
    fetchSales();
  }, []);


  const [automobile, setAutomobile] = useState('');
  const [automobiles, setAutomobiles] = useState([]);


  const handleAutomobileChange = (event) => {
    const data = event.target.value;
    setAutomobile(data);
  };

  const fetchAutomobiles = async () => {
    const response = await fetch("http://localhost:8100/api/automobiles/");
    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.autos);
    }
  };

  useEffect(() => {
    fetchAutomobiles();
  }, []);

  const [salesperson, setSalesperson] = useState('');
  const [salespeople, setSalespeople] = useState([]);

  const handleSalespersonChange = (event) => {
    const data = event.target.value;
    setSalesperson(data);
  };

  const fetchSalespeople = async () => {
    const response = await fetch("http://localhost:8090/api/salespeople/");
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespersons);
    }
  };

  useEffect(() => {
    fetchSalespeople();
  }, []);


  const [customer, setCustomer] = useState('');
  const [customers, setCustomers] = useState([]);


  const handleCustomerChange = (event) => {
    const data = event.target.value;
    setCustomer(data);
  };

  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:8090/api/customers/");
    if (response.ok) {
      const data = await response.json();
      setCustomers(data);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);


  const [salesPrice, setSalesPrice] = useState("");

  const handleSalesPriceChange = (event) => {
    const value = event.target.value;
    setSalesPrice(value);
  };


  const filteredAutos = automobiles && automobiles.filter(auto => {
    return sales && !sales.some(sale => sale.vin === auto.vin);
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.vin = automobile;
    data.salesperson = salesperson;
    data.customer = customer;
    data.sale_price = salesPrice;
    const saleUrl = 'http://localhost:8090/api/sales/';

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const response = await fetch(saleUrl, fetchConfig);
    if (response.ok) {
      setAutomobiles([]);
      setSalespeople([]);
      setCustomers([]);
      setSalesPrice('');
      navigate('/sales');
    }
  }

return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1 className="text-center">Create a new Sale</h1>
                    <form
                        onSubmit={handleSubmit}
                        id="create-sale-form">
                        <div className="mb-3">
                        <select
                            onChange={handleAutomobileChange}
                            required name="vin"
                            id="vin"
                            className="form-select">
                            <option value="">Choose an Automobile</option>
                            {filteredAutos && filteredAutos
                                .map((auto, idx) => (
                                <option key={idx} value={auto.vin}>
                                    {auto.vin}
                                </option>
                                ))
                            }
                        </select>
                        </div>
                        <div className="mb-3">
                            <select
                                onChange={handleSalespersonChange}
                                required name="salesperson"
                                id="salesperson"
                                className="form-select">
                                <option value="">Choose a Salesperson</option>
                                {salespeople && salespeople.map(person => {
                                    return (
                                        <option key={person.id} value={person.id}>
                                            {person.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select
                                onChange={handleCustomerChange}
                                required name="customers"
                                id="customers"
                                className="form-select">
                                <option value="">Choose a Customer</option>
                                {customers && customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={salesPrice}
                                onChange={handleSalesPriceChange}
                                placeholder="salesPrice"
                                required type="text"
                                name='sale_price' id="sale_price"
                                className="form-control" />
                            <label htmlFor="sale_price">Sale Price(USD)</label>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default CreateSaleForm;
