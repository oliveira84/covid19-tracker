import React from 'react';
import {Countries, Wrapper} from "./TableStyles";
import numeral from "numeral";

const Table = ({countries}) => {
  return (
    <Wrapper>
      <Countries>
        <table>
          <tbody>
          {countries.map(country => (country.countryInfo.iso2 &&
            <tr key={country.countryInfo.iso2}>
              <td>{country.country}</td>
              <td>{numeral(country.cases).format("0,0")}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </Countries>
    </Wrapper>
  );
}
export default Table;