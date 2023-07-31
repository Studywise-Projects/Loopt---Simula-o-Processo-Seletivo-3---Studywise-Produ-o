import { fireEvent, render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Should match the snapshot', () => {
    const { getByLabelText } = render(
      <SearchBar
        id='search-bar-test'
        label='test'
        value=''
        handleChange={() => undefined}
      />,
    );

    const element = getByLabelText('test');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByLabelText } = render(
      <SearchBar
        id='search-bar-test'
        label='test'
        value=''
        handleChange={() => undefined}
      />,
    );

    const element = getByLabelText('test');
    expect(element).toBeInTheDocument();
  });

  it('Should call handleChangeMock function call', () => {
    const handleChangeMock = jest.fn();

    const { getByLabelText } = render(
      <SearchBar
        id='search-bar-test'
        label='test'
        value=''
        handleChange={handleChangeMock}
      />,
    );

    const element = getByLabelText('test');
    fireEvent.change(element, { target: { value: 'search bar changed' } });
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });
});
