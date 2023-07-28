import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { ChangeEvent } from 'react';

describe('SearchBar', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <SearchBar
        id='1'
        label='Search'
        value=''
        handleChange={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleChangeMock function once', () => {
    const handleChangeMock = jest.fn();

    const wrapper = shallow(
      <SearchBar
        id='1'
        label='Search'
        value=''
        handleChange={handleChangeMock}
      />,
    );

    wrapper.find('[data-test-id="searchbar"]').simulate('change', 'Test');

    expect(handleChangeMock).toBeCalledWith('Test');
  });
});
