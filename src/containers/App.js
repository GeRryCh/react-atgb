import React, { Component } from 'react';
import './App.css';
import Answer from '../components/Answer'
import Dropdown from 'react-select'
import 'tachyons'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.fetchCountries()
  }

  async fetchCountries() {
    async function _fetchCountries() {
      const response = await fetch('https://api.covid19api.com/countries', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      return response.json()
    }

    const result = await _fetchCountries()
    this.log('countries', result)
    if (result.length === 0) {
      throw new Error('Unable to retrieve countries')
    }

    this.setState({
      countries: result
        .sort((lhs, rhs) => {
          if (lhs.Country > rhs.Country) {
            return 1
          }
          if (lhs.Country < rhs.Country) {
            return -1
          }
          return 0
        })
        .map(c => {
          return {
            label: c.Country,
            value: c.Slug
          }
        })
    })
  }

  async fetchStatistics(country) {
    async function _fetchStatistics(country) {
      const formatDate = function (date) {
        //getMonth() range is [0:11]
        const rawMonth = date.getMonth() + 1
        const rawDate = date.getDate()
        const month = (rawMonth < 10 && `0${rawMonth}`) || rawMonth
        const day = (rawDate < 10 && `0${rawDate}`) || rawDate
        const year = date.getFullYear()
        return `${year}-${month}-${day}T00:00:00Z`
      }

      const toDate = new Date()
      const fromDate = new Date(toDate)
      //3 days back
      fromDate.setDate(toDate.getDate() - 3)
      //fetch confirmed cases
      const params = `from=${formatDate(fromDate)}&to=${formatDate(toDate)}`
      const response = await fetch(`https://api.covid19api.com/country/${country}/status/confirmed?${params}`, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      return response.json()
    };

    function calculateGrowth(statistics) {
      var reduceProperty = function (xs, groupBy, prop) {
        return xs.reduce(function (rv, x) {
          rv[x[groupBy]] = rv[x[groupBy]] || 0
          rv[x[groupBy]] += x[prop];
          return rv;
        }, {});
      };
      const processed = reduceProperty(statistics, 'Date', 'Cases')
      return Object.values(processed)
        .reduce((acc, curr) => {
          if (acc.prev === 0) {
            acc.prev = curr
            return acc
          }
          //growth in percent
          acc.growth.push((curr - acc.prev) / curr)
          acc.prev = curr
          return acc
        }, {
          growth: [],
          prev: 0
        }).growth
    }

    function isBetter(growth) {
      if (growth.count < 2) {
        throw new Error('Unable to retrieve statistics')
      }

      return growth[1] < growth[0]
    }

    const result = _fetchStatistics(country)
    if (result.length === 0) {
      throw new Error('Unable to retrieve statistics')
    }

    result
      .then(s => this.log('statistics', s))
      .then(calculateGrowth)
      .then(g => this.log('growth', g))
      .then(isBetter)
      .then(ib => this.log('isBetter', ib))
      .catch(error => this.setState({ error: error }))
      .then(result => {
        this.setState({ isBetter: result })
      });
  }

  log(title, obj) {
    console.log(title, obj)
    return obj
  }

  onCountrySelect = (country) => {
    console.log('selected', country)
  }

  render() {
    const { countries, isBetter, error } = this.state
    return (
      <div className='main tc mt5 pl3 pr3'>
        <header className='f2'>Are things getting better in your country?</header>
        <Dropdown
          className='tl mt4 measure center black-color'
          placeholderClassName='mv1-l black-color'
          arrowClassName='mv1-l'
          options={countries}
          onChange={this.onCountrySelect}
          placeholder="Select a country"
        />
        {/* {error
          ? <h2 className='error-color i'>Oops. An error has occured 🤷🏻‍♀️<br />{error.message}</h2>
          : <Answer isBetter={isBetter} />
        } */}
        <p className='f3 fw4'>Aren't all the information and news about COVID-19 situation in the world make you anxious, sad or intimidated,
        while the only information you are looking for is if the situation has improved or not?
        Then this site is for you! It displays an answer, based on a statistics updated every day, to the only question you have.
          </p>
        <footer className='fw'>
          For more information check <a href='https://www.worldometers.info/coronavirus/'>Corona Virus Updates</a> for your country
        </footer>
      </div>
    );
  }
}

export default App;