import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper).not.toBeNull();
    });

    it('renders the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).length).toBe(1);
      });
    
      it('renders the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).length).toBe(1);
      });
    
      it('renders the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).length).toBe(1);
      });
    
      it('renders the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).length).toBe(1);
      });
});
