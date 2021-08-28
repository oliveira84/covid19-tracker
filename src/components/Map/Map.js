import React, {useEffect, useState} from 'react';
import {Wrapper} from "./MapStyles";
import {Circle, Map as MapContainer, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import numeral from "numeral"

const Map = ({center, zoom, countries}) => {
  const [state, setState] = useState([])

  useEffect(() => {
    const max = Math.max.apply(Math, countries.map(elem => elem.cases))
    console.log(max);
    setState(countries.map(country => {
      return (
        country?.countryInfo?.iso2 && <Circle
          key={country.countryInfo.iso2}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          fillOpacity={0.5}
          color={"none"}
          fillColor={"#CC1034"}
          radius={Math.max((country.cases / max) * 1700000, 40000)}>
          <Popup>
            <h3>{country.country}</h3>
            <div><strong>Cases</strong>: {numeral(country.cases).format("0,0")}</div>
            <div><strong>Recovered</strong>: {numeral(country.recovered).format("0,0")}</div>
            <div><strong>Deaths</strong>: {numeral(country.deaths).format("0,0")}</div>
          </Popup>
        </Circle>)
    }))
  }, [countries])

  console.log(state);

  return (
    <Wrapper>
      <MapContainer className="map-container" center={center} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        {state}
      </MapContainer>
    </Wrapper>
  );
}

export default Map;