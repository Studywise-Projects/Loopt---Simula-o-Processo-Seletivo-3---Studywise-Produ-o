import { fireEvent, getByText, render } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
  it('Should match the snapshot', () => {
    const { getByLabelText } = render(
      <Select
        id='select-test'
        label='test'
        options={undefined}
        value={undefined}
        handleChange={undefined}
      />,
    );

    const element = getByLabelText('test');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByLabelText } = render(
      <Select
        id='select-test'
        label='test'
        options={undefined}
        value={undefined}
        handleChange={undefined}
      />,
    );

    const element = getByLabelText('test');
    expect(element).toBeInTheDocument();
  });
});
