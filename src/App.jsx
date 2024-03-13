import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importa Leaflet y react-leaflet para poder usarlo
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


// App.jsx

//import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('');//'selectedOption' almacenará el valor seleccionado del selector.
  //se ejecutará cuando cambie el valor del selector
  const handleChange = (e) => {
    setSelectedOption(e.target.value);//se actuliza el estado 'selectedOption' con el valor seleccionado.
  };

  return (
    <>
      <div>
        {/* opciones del selector */}
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Seleccione un lugar</option>
          <option value="Bacalar">Bacalar</option>
          <option value="Cancún">Cancún</option>
          <option value="Merida">Merida</option>
          <option value="Cozumel">Cozumel</option>
          <option value="Mexico">Mexico</option>
        </select>
        <p>Seleccionaste: {selectedOption}</p>
      </div>

      <MapContainer center={[18.6709817, -88.4199386]} zoom={30} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </>
  );
}

export default App;
