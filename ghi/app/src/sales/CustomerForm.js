import React, { useState } from "react";

function CustomerForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      address: address,
      phone_number: phone_number,
    };

    const customerUrl = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(customerUrl, fetchConfig);

    if (response.ok) {
      setName("");
      setAddress("");
      setPhoneNumber("");
      setShowSuccessMessage(true);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a New Customer</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={address}
                onChange={handleAddressChange}
                placeholder="Address"
                maxLength={30}
                required
                type="text"
                name="address"
                id="address"
                className="form-control"
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={phone_number}
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number"
                required
                type="text"
                maxLength={20}
                name="phone_number"
                id="phone_number"
                className="form-control"
              />
              <label htmlFor="phone_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          {showSuccessMessage && (
            <div className="alert alert-success mt-3" role="alert">
              Customer created successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
