import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



function App() {
  const position = {lat: 53.54992, lng: 10.00678};
  return (
    <div>
      <APIProvider apiKey={'AIzaSyCgw0Lkpnlly-HoUNMa_4rWhkyZVYKeiMI'}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
      
    </div>
  );
}

export default App;
