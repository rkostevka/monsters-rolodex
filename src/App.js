import './App.css';
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ cats: users }));
  }

  render () {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat =>
        cat.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
        <div className='App'>
          <SearchBox placeholder='Search cats' handleChange={e => this.setState({ searchField: e.target.value })}/>
          <CardList cats={ filteredCats }/>
        </div>
    );
  }
}

export default App;
