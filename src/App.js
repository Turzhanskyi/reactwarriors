import React from 'react';
import './App.css'

const country = {
  name:"Afghanistan",
  alpha3Code:"AFG",
  capital:"Kabul",
  region:"Asia",
  population:27657145,
  flag:"https://restcountries.eu/data/afg.svg"
};

function Flag(props) {
  console.log("Flag props = ", props);
  return(
      <img src={props.src} alt={props.alt} />
  )
}

// переписано function CountryList (props) як class CountryList
class CountryList extends React.Component {
  render() {
        // деструктуризація констани, щоб повертати обєкти так {name}
    const {data: {name, alpha3Code, capital,  population, flag }} = this.props;
    console.log(this);
     return (
        <div>
          <p>Країна: {name}, {alpha3Code}</p>
          <p>Столиця: {capital}</p>
          <p>Населення: {population} чол.</p>
          <Flag src={flag} alt={name} />
        </div>
    );
  }
}


// function CountryList (props) {
//   console.log("CountryList props = ", props);
//
//   // деструктуризація констани, щоб повертати обєкти так {name}
//   const {data: {name, alpha3Code, capital,  population, flag }} = props;
//
//   return(
//       <div>
//         <p>Країна: {name}, {alpha3Code}</p>
//         <p>Столиця: {capital}</p>
//         <p>Населення: {population} чол.</p>
//         <Flag src={flag} alt={name} />
//       </div>
//   )
// }

function App() {
  return(
      <div className="div">
        <CountryList data={country} />
      </div>
      )
}

export default App;
