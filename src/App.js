import React, { Component } from 'react';
import './App.css';
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
        throw 'Unable to retrieve statistics'
      }
      return result
    };

    function log(title, obj) {
      console.log(title, obj)
      return obj
    }

    function calculateGrowth(statistics) {
      const growth = statistics
        .map(s => s.Cases)
        .reduce((acc, curr, idx, cases) => {
          if (idx === cases.length - 1) { return acc }
          const next = cases[idx + 1]
          //growth in percent
          acc.push((next - curr) / next)
          return acc
        }, [])
      return growth
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
      .then(result => {
        this.setState({ isBetter: result ? 'YES' : 'NO' })
      });
  }

  render() {
    const { isBetter } = this.state

    return (
      <div className='tc'>
        <header>Are things getting any better?</header>
        <h1>{isBetter}</h1>
        <h2>Aren't all the information and news regarding COVID-19 situation make you anxious and probably sad and intimidated,
        while the only information you are looking for is if the situation has improved or not?
        Then this site is for you! It shows yes/no answer to the only question we have. Is it going ot be better?
          </h2>
        <footer>
          For more information check <a href='https://www.worldometers.info/coronavirus/'>Corona Virus Updates</a> for your country
        </footer>
      </div>
    );
  }
}

export default App;