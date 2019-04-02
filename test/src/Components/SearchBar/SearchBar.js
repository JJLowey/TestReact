import React from 'react';

class SearchBar extends React.Component
{
    state = {term: ''};

    onSearchSubmit = (event) =>
    {
        // Stop enter button refreshing page
        event.preventDefault();    
        // Use the passed in callback function to respond to parent component   
        this.props.onSubmit(this.state.term);
    }

    onSearchChange = (event) =>
    {   
        var value = event.target.value;
        this.setState({term: value});

        // State is 1 step behind...
        // Use the passed in callback function to respond to parent component  
        this.props.onChange(value);
    }

    render()
    {
        return (
            <div className="col-xs-12">
                <form onSubmit={this.onSearchSubmit} className="col-xs-12">
                    <div className="field">
                    <label className="col-xs-12" htmlFor="pickUpInput">Pick-up Location</label>
                        <input  id="pickUpInput" 
                                className="form-control col-xs-12" 
                                type="text"
                                placeholder="city, airport, station, region and district..."
                                value={this.state.term} 
                                onChange={this.onSearchChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;