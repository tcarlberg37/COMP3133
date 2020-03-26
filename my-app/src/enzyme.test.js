import React from 'react';
import { shallow } from 'enzyme';

const sum = (x, y) => {
    return <h1>{x + y}</h1>;
}

Enzyme.configure({adapter: new Adapter()});

describe("When testing with Enzyme", () => {
    it("renders a h1", () => {
        const wrapper = shallow(sum(1, 2));
        expect(wrapper.find("h1").length).toBe(1);
    })
});
