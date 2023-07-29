import { render, shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
