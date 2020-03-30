import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  const [cities, setCities] = React.useState([]);
  const [filter, setFilter] = React.useState({});
  const [data, setData] = React.useState({ popular: [], others: [] })

  React.useEffect(() => {
    fetch("https://api.zoomcar.com/v4/cities?platform=web")
      .then(response => response.json())
      .then(response => {
        const popular = [];
        const others = [];
        response.cities.forEach(city => {
          (city.popular) ? popular.push(city) : others.push(city)
        })
        setData({ popular, others })
        setCities(response.cities)
      })
      .catch(err => setCities([]))
  }, [])

  const handleFilter = (filter) => {
    setFilter(filter)
    const popular = [];
    const others = [];
    cities.forEach(city => {
      if (filter.hdEnabled && filter.oneWayEnabled && filter.search) {
        city = (city.hd_enabled === filter.hdEnabled && city.one_way_enabled === filter.oneWayEnabled && city.name.toLowerCase().includes(filter.search.toLowerCase())) ? city : null
      } else if (filter.hdEnabled && filter.search) {
        city = (city.hd_enabled === filter.hdEnabled && city.name.toLowerCase().includes(filter.search.toLowerCase())) ? city : null
      } else if (filter.oneWayEnabled && filter.search) {
        city = (city.one_way_enabled === filter.oneWayEnabled && city.name.toLowerCase().includes(filter.search.toLowerCase())) ? city : null
      } else if (filter.hdEnabled && filter.oneWayEnabled) {
        city = (city.hd_enabled === filter.hdEnabled && city.one_way_enabled === filter.oneWayEnabled) ? city : null
      } else if (filter.hdEnabled) {
        city = (city.hd_enabled === filter.hdEnabled) ? city : null
      } else if (filter.oneWayEnabled) {
        city = (city.one_way_enabled === filter.oneWayEnabled) ? city : null
      } else if (filter.search) {
        city = (city.name.toLowerCase().includes(filter.search.toLowerCase())) ? city : null
      }
      (city) && ((city.popular) ? popular.push(city) : others.push(city))
    })
    setData({ popular, others })
  }

  return (
    <div className="App">
      <div>
        <h1>CITIES</h1>
        <Header handleFilter={handleFilter} />
        <Content data={data} filter={filter} />
      </div>
    </div>
  );
}

export default App;
