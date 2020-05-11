import React, { Component } from 'react';
import './App.css';
import 'tachyons'

class App extends Component {
  constructor() {
    super()
    this.state = {
      statistics: []
    }
  }

  componentDidMount() {
    async function fetchStatistics(that) {
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
      const params = `from=${formatDate(fromDate)}&to=${formatDate(toDate)}`
      const response = await fetch(`https://api.covid19api.com/country/israel?${params}`, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      const statistics = await response.json()
      console.log(statistics)
      that.setState({ statistics: statistics })
    };

    fetchStatistics(this);
  }

  render() {
    const { statistics } = this.state
    console.log(statistics)
    return (
      <div className='tc'>
        <header>Are things getting any better?</header>
        <h1>YES</h1>
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