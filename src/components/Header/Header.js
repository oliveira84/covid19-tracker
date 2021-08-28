import {FormControl, MenuItem, Select} from "@material-ui/core";
import {Wrapper} from "./HeaderStyles";


const Header = ({countries, country, setCountry}) => {

  return (
    <Wrapper>
      <h1>COVID-19</h1>
      <FormControl className={"drop-down"}>
        <Select variant={"outlined"} value={country}
                onChange={(e) => setCountry(e.target.value)}>
          <MenuItem value={"worldwide"}>Worldwide</MenuItem>
          {countries?.map((country) => (country.countryInfo.iso2 &&
            <MenuItem
              key={country.countryInfo.iso2}
              value={country.countryInfo.iso2}>
              {country.country}
            </MenuItem>))}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

export default Header;