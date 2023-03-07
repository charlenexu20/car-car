import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './inventory/ManufacturerForm';
import VehicleModelForm from './inventory/VehicleModelForm';
import AutomobileForm from './inventory/AutomobileForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="new" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
