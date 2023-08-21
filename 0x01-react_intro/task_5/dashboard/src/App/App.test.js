import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './App';

describe('<App />', () => {
    it("renders without crashing", () => {
        const wrapper = render(<App />);
        expect(wrapper).not.toBeNull();
    });

    it("renders a div with the class App-header", () => {
        const wrapper = render(<App />);
        expect(wrapper.find("div.App-header").length).toBe(1);
    });

    it("renders a div with the class App-body", () => {
        const wrapper = render(<App />);
        expect(wrapper.find("div.App-body").length).toBe(1);
    });

    it("renders a div with the class App-footer", () => {
        const wrapper = render(<App />);
        expect(wrapper.find("div.App-footer").length).toBe(1);
    });
});
