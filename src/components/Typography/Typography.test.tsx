import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Typography from './Typography';

describe('Typography', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Typography variant='body' text='Body' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render with the correctly text', () => {
    const wrapper = shallow(<Typography variant='title' text='title' />);

    expect(wrapper.text()).toBe('title');
  });
});
