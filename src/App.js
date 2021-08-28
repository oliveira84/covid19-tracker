import {Card, CardContent} from "@material-ui/core";
import {getCountries, getCountryInfo} from "./api";
import {useEffect, useState} from "react";
// styles
import {GlobalStyles} from "./GlobalStyles";
import {LeftContent, RightContent, Stats, Wrapper} from "./AppStyles";
// components
import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";
import Table from "./components/Table/Table";
import Graph from "./components/Graph/Graph";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({})
  const [sortedCountries, setSortedCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({lat: 48, lng: 9});
  const [mapZoom, setMapZoom] = useState(4);

  // get country info
  useEffect(() => {
    const apiCall = async () => {
      setCountryInfo(await getCountryInfo(country));
    }
    apiCall().then();
  }, [country])

  // get list of countries
  useEffect(() => {
    const apiCall = async () => {
      const data = await getCountries();
      setCountries(data);
      setSortedCountries([...data].sort((a, b) => b.cases - a.cases));
    }
    apiCall().then();
  }, []);

  // set Map position an zoom
  useEffect(() => {
    if (country === "worldwide") {
      setMapCenter({lat: 48, lng: 9})
      setMapZoom(4)
    } else {
      const res = countries.filter(elem => elem.countryInfo.iso2 === country)
      setMapCenter({lat: res[0]?.countryInfo.lat, lng: res[0]?.countryInfo.long})
      setMapZoom(6);
    }

  }, [country, countries])

  console.log(mapCenter);

  return (
    <div className="App">
      <Wrapper>
        <LeftContent>
          <Header countries={countries} country={country} setCountry={setCountry}/>
          <Stats>
            <InfoBox title={"Cases"} cases={countryInfo.todayCases} total={countryInfo.cases}/>
            <InfoBox title={"Recovered"} cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
            <InfoBox title={"Deaths"} cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
          </Stats>
          <Graph country={country} days={180}/>
          <Map center={mapCenter} zoom={mapZoom} countries={countries}/>
        </LeftContent>
        <RightContent>
          <Card className={"card"}>
            <CardContent className={"cardContent"}>
              <h3>Total Cases by Country</h3>
              <Table countries={sortedCountries}/>
              <h3>Worldwide new cases</h3>
              <Graph country={"worldwide"} days={90}/>
            </CardContent>
          </Card>
        </RightContent>
      </Wrapper>
      <GlobalStyles/>
    </div>
  );
}

export default App;
