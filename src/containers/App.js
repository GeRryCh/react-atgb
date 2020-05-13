import React, { Component } from 'react';
import './App.css';
import Answer from '../components/Answer'
import 'tachyons'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    async function fetchStatistics() {
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
      const response = await fetch(`https://api.covid19api.com/country/israel/status/confirmed?${params}`, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      const result = await response.json()
      if (result.length === 0) {
        throw new Error('Unable to retrieve statistics')
      }
      return result
    };

    function log(title, obj) {
      console.log(title, obj)
      return obj
    }

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
        throw 'Unable to retrieve statistics'
      }

      return growth[1] < growth[0]
    }

    fetchStatistics()
      .then(s => log('statistics', s))
      .then(calculateGrowth)
      .then(g => log('growth', g))
      .then(isBetter)
      .then(ib => log('isBetter', ib))
      .catch(error => this.setState({ error: error }))
      .then(result => {
        this.setState({ isBetter: result })
      });

  }

  render() {
    const { isBetter, error } = this.state
    return (
      <div className='main tc mt3 pl3 pr3'>
        <header className='f2'>Are things getting better in your country?</header>
        {error ? <h2 className='error-color i'>Oops. An error has occured 🤷🏻‍♀️<br />{error.message}</h2> :
          <Answer isBetter={isBetter} />
        }
        <p className='f3 fw4'>Aren't all the information and news regarding COVID-19 situation make you anxious and probably sad and intimidated,
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