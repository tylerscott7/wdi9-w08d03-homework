import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import SearchBar from './SearchBar/SearchBar'
import GifList from './GifList/GifList'

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      gifList: []
    }
  }
  getGifs = async (e) => {
    e.preventDefault()

    const api_key = "Et7ONDN96z97DRG5JST90GCtOq51tQlJ";
    const api_endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.state.searchText}&limit=10&offset=0&rating=G&lang=en`;
    
    try {
      const gifData = await fetch(api_endpoint);
      if (!gifData.ok){
        throw Error(gifData.statusText)
      }

      const gifDataParsed = await gifData.json();
      console.log(`We just pulled this data: ${JSON.stringify(gifDataParsed)}`);

      this.setState({
        gifList: gifDataParsed.data,
      })

    } catch (err) {
      console.log(err,'error');
      return err;
    }
  }
  handleInput = (e) => {
    console.log(`We should be updating the state with: ${e.target.value}`)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Grid container columns={1} textAlign='center' verticalAlign='top'>
          <Grid.Column>
            <SearchBar getGifs={this.getGifs} handleInput={this.handleInput} />
            <GifList gifs={this.state.gifList}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
