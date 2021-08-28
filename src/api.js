import axios from "axios";

const countriesUrl = "https://disease.sh/v3/covid-19/countries";
const allUrl = "https://disease.sh/v3/covid-19/all";
const historyUrl = "https://disease.sh/v3/covid-19/historical/[iso]?lastdays=[days]"


const apiCall = async (url) => {
  if (!url) return [];
  let response = []
  await axios.get(url).then(res => response = res.data).catch((e) => response = null);
  return response;
}

export const getCountries = () => {
  return apiCall(countriesUrl);
}

export const getCountryInfo = (country) => {
  if (country === "worldwide")
    return apiCall(allUrl)
  else
    return apiCall(`${countriesUrl}/${country}`)
}

export const getHistory = (country, days = 90) => {
  const url = historyUrl.replace("[iso]", country !== "worldwide" ? country : "all").replace("[days]", days);
  return apiCall(url);
}

