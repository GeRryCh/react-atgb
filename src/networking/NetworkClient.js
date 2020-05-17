const formatDate = function (date) {
  //getMonth() range is [0:11]
  const rawMonth = date.getMonth() + 1;
  const rawDate = date.getDate();
  const month = (rawMonth < 10 && `0${rawMonth}`) || rawMonth;
  const day = (rawDate < 10 && `0${rawDate}`) || rawDate;
  const year = date.getFullYear();
  return `${year}-${month}-${day}T00:00:00Z`;
};


class NetworkClient {
  static async fetchCountries() {
    const response = await fetch('https://api.covid19api.com/countries', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });

    const result = await response.json();
    console.log('countries', result);
    if (result.length === 0) {
      throw new Error('Unable to retrieve countries');
    }
    return result;
  }

  static async fetchStatistics(country) {
    const toDate = new Date();
    const fromDate = new Date(toDate);
    //3 days back
    fromDate.setDate(toDate.getDate() - 3);
    //fetch confirmed cases
    const params = `from=${formatDate(fromDate)}&to=${formatDate(toDate)}`;
    const requestURL = `https://api.covid19api.com/country/${country.value}/status/confirmed?${params}`;
    console.log('requestURL', requestURL);
    const response = await fetch(requestURL, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });

    const result = await response.json();
    if (result.length === 0) {
      throw new Error('Unable to retrieve statistics');
    }

    return result;
  };
}

export default NetworkClient;