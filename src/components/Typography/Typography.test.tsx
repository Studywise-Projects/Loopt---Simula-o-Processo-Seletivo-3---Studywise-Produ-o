import { fireEvent, render } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(<Typography variant='body' text='test' />);

    const element = getByText('test');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByText } = render(<Typography variant='body' text='test' />);

    const element = getByText('test');
    expect(element).toBeInTheDocument();
  });
});
