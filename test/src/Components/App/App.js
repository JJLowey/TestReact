import React from 'react';
import axios from 'axios';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component
{
    // Set State, defining results as an empty array
    state = { results: [] };

    // Called on change of SearchBar component input change
    onSearchChange = async (term) =>
    {
        if(term.length >= 2)
        {
            // Make Get Request using axios.
            const response = await axios.get('https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?', 
            {
                // Append required params
                params:
                {
                    solrIndex: "fts_en",
                    solrRows: 6,
                    solrTerm: term
                }
            });

            // Declare array to be populated
            var responseItemArray = [];

            if(response.data.results.numFound > 0)
            {
                // Objective: Return raw data/search results but without any styling
                // Assumption made to display a basic list without any styling
                responseItemArray = response.data.results.docs.map((result) => 
                {
                    // Create LI elements with some basic information
                    return (
                        <li>
                            {(result.placeType === "A" ? "Airport" : (result.placeType === "S") ? "Station" : "City")}
                             - {result.name} {typeof result.iata !== 'undefined' ? '(' + result.iata + ')' : ''}
                        </li>
                    )
                });
            }
            else
            {
                // No results found, return basic string (results.name)
                responseItemArray = <li>No Results Found</li>
            }
            

            // Set the state of the results from async request. 
            // SetState calls render() to show results
            this.setState({results: responseItemArray});
        }
    }

    render()
    {
        return (
            <div className="container">
                <h2 className="title col-xs-12">Car Hire – Search, Compare & Save</h2>
                <h5 className="sub-title col-xs-12">Compare 900 companies at over 60,000 locations. Best price guaranteed</h5>
                <div className="searchContainer"> 
                    <h1> Where are you going?</h1>
                    <SearchBar onChange={this.onSearchChange} onSubmit={this.onSearchChange}/>
                    <ul>
                        {this.state.results}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;