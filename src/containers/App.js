import React, { Component } from 'react';
import '../style/App.css';
import CountryStatus from '../components/CountryStatus';
import Dropdown from '../components/Dropdown';
import 'tachyons';
import NetworkClient from '../networking/NetworkClient';
import * as Statistics from '../domain/Statistics';
import by from '../utils/sort';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    NetworkClient.fetchCountries()
      .catch(error => this.setState({ error: error }))
      .then(result =>
        this.setState({
          countries: result
            .sort(by('Country'))
            .map(c => {
              return {
                label: c.Country,
                value: c.Slug
              };
            })
        })
      );
  }

  onCountrySelect = (country) => {
    this.setState({
      selectedCountry: country,
      status: null,
      error: null
    });

    NetworkClient.fetchStatistics(country)
      .then(stats => Statistics.getStatus(stats))
      .catch(error => this.setState({ error: error }))
      .then(result => {
        this.setState({ status: result });
      });
  };

  render() {
    const {
      countries,
      selectedCountry,
      status,
      error } = this.state;
    return (
      <div className='main tc mt5 pl3 pr3'>
        <header className='f2'>Are things getting better in your country?</header>
        <Dropdown
          data={countries}
          onSelect={this.onCountrySelect}
          error={error}
        />
        <CountryStatus
          country={selectedCountry}
          status={status}
          error={error}
        />
        <p className='f3 fw4'>
          Do the news regarding COVID-19 situation
          in the world make you anxious, sad or intimidated,
          while the only information you've been looking is to know if the situation has improved? <br /><br />
          Then this site is for you. It produces an answer based on a daily statistics.
          </p>
        <footer className='mv5'>
          For more information check <a href='https://www.worldometers.info/coronavirus/'>Corona Virus Updates</a> for your country
        </footer>
      </div>
    );
  }
}

export default App;