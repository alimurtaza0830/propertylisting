import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtrr } from '../../utils';


describe('Header Component', () => {

	it('Should render without errors', () => {
		const wrapper = findByTestAtrr(component, 'headerComponent');
		expect(wrapper.length).toBe(1);
	});
	
})