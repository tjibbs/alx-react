import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  // Check that it renders CourseList component without crashing
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  // Check that it renders the 5 different rows
  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find('CourseListRow');
    expect(rows).toHaveLength(5);

    // Check the props of each row
    expect(rows.at(0).props()).toEqual({ isHeader: true, textFirstCell: 'Available courses' });
    expect(rows.at(1).props()).toEqual({ isHeader: true, textFirstCell: 'Course name', textSecondCell: 'Credit' });
    expect(rows.at(2).props()).toEqual({ isHeader: false, textFirstCell: 'ES6', textSecondCell: '60' });
    expect(rows.at(3).props()).toEqual({ isHeader: false, textFirstCell: 'Webpack', textSecondCell: '20' });
    expect(rows.at(4).props()).toEqual({ isHeader: false, textFirstCell: 'React', textSecondCell: '40' });
  });
});
