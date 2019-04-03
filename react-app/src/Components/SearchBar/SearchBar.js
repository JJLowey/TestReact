import React from 'react';
import { debounce } from 'lodash';

import './SearchBar.css';

class SearchBar extends React.Component
{
    state = {term: ''};

    onSearchSubmit = (event) =>
    {
        // Stop enter button refreshing page
        event.preventDefault();    
        // Use the passed in callback function to respond to parent component   
        //this.props.onSubmit(this.state.term);
    }

    // onChange fires this event (debounced to reduce load on server)
    onSearchChange = debounce((text) =>
    {   
        this.setState({term: text});

        // Use the passed in callback function to respond to parent component  
        this.props.onChange(text);
    }, 500);

    render()
    {
        return (
            <div className="col-xs-12">
                <form onSubmit={this.onSearchSubmit} className="col-xs-12">
                    <div className="field">
                        <label htmlFor="pickUpInput">Pick-up Location</label>
                        <input className={`form-control col-xs-12 ${this.props.loading ? 'loading' : ''}`} id="pickUpInput" 
                                autoComplete="off"
                                type="text"
                                placeholder="city, airport, station, region and district..." 
                                onChange={event => this.onSearchChange(event.target.value)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;