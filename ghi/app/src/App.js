import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './inventory/ManufacturerForm';
import VehicleModelForm from './inventory/VehicleModelForm';
import AutomobileForm from './inventory/AutomobileForm';
import VehicleModelList from './inventory/VehicleModelList';
import Manufacturerlist from './inventory/ManufacturerList';
import AutomobileList from './inventory/AutomobileList';
import CustomerForm from './sales/CustomerForm';
import SalesPersonForm from './sales/SalesPersonForm';
import CreateSaleForm from './sales/CreateSaleForm';
import SalesList from './sales/SalesList';
import SalesPersonHistory from './sales/SalespersonHistory';
import TechnicianForm from './service/TechnicianForm';
import ServiceAppointmentForm from './service/ServiceAppointmentForm';
import ServiceAppointmentList from './service/ServiceAppointmentsList';
import ServiceHistory from './service/ServiceHistory';




function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers" element={<Manufacturerlist manufacturers={props.models} />} />
          <Route path="manufacturers">
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models" element={<VehicleModelList models={props.models} />} />
          <Route path="models">
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles" element={<AutomobileList automobiles={props.automobiles} /> } />
          <Route path="automobiles">
            <Route path="new" element={<AutomobileForm />} />
          </Route>

          <Route path="customers">
            <Route path="new" element={<CustomerForm /> } />
          </Route>

          <Route path="salesperson">
            <Route path="new" element={<SalesPersonForm /> } />
            <Route path="history" element={<SalesPersonHistory /> } />
          </Route>


          <Route path="sales" element={<SalesList /> } />

          <Route path="sales">
            <Route path="new" element={<CreateSaleForm /> } />
          </Route>


          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route path="new" element={<ServiceAppointmentForm />} />
          </Route>
          <Route path="appointments">
            <Route path="" element={<ServiceAppointmentList />} />
          </Route>
          <Route path="search">
            <Route path="" element={<ServiceHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
