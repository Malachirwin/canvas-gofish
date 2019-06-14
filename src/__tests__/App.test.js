import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import 'jest-enzyme'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(1+1).toEqual(2)
  // expect(wrapper.debug()).toEqual(`<div className="App">
  //   <header className="App-header">
  //     <p>
  //       Hello Welcome to Go Fish
  //     </p>
  //     <Login />
  //   </header>
  // </div>`)
  debugger
  expect(wrapper).toIncludeText('Hello Welcome to Go Fish')
  console.log(wrapper.debug())
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
