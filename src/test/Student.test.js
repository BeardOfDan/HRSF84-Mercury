import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Student from '../components/Student';

Enzyme.configure({ adapter: new Adapter() });

describe('Student', () => {
  it('should render correctly', () => {
    const studentData = {};
    const output = shallow(
      <Student studentData={studentData} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
