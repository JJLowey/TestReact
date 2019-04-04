import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';

// Will not recognise setupTests.js :(
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Check SearchBar Component Renders', () => 
{
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
});

describe('Testing SearchBar Component', () => 
{
    it('Should be a label for the search', () => 
    {
      const rootComponent = shallow(<SearchBar/>)
      expect(rootComponent.find('label')).toBeTruthy();
    })

    it('Label should equal "Pick-up Location"', () => 
    {
        const rootComponent = shallow(<SearchBar/>);
        expect(rootComponent.find('label').text()).toEqual('Pick-up Location');
    })

    it('Placeholder of input box should equal "city, airport, station, region and district..."', () => 
    {
        const rootComponent = shallow(<SearchBar/>);
        expect(rootComponent.find('input').prop('placeholder')).toEqual('city, airport, station, region and district...');
    })

})