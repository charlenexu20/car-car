import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleModelList from './inventory/VehicleModelList';
import Manufacturerlist from './inventory/ManufacturerList';
import AutomobileList from './inventory/AutomobileList';




function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers" element={<Manufacturerlist manufacturers={props.models} />} />
          <Route path="models" element={<VehicleModelList models={props.models} />} />
          <Route path="automobiles" element={<AutomobileList automobiles={props.automobiles} /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
