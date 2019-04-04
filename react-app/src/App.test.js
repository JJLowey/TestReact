import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom';
import App from './App';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

// Will not recognise setupTests.js :(
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Has not changed?', () => 
{
  // Check if the component has changed? Snapshot is deep, not shallow
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check App Component Renders', () => 
{
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Testing App Component', () => 
{
  it('I should see a Search Widget', () => 
  {
    const rootComponent = mount(<App/>)
    expect(rootComponent.find('SearchBar').exists()).toBeTruthy();
  })
})