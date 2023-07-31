import { render } from '@testing-library/react';
import Header from './Header';

jest.mock('next/router', () => require('next-router-mock'));

describe('Header', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(<Header text='Header' variant='main' />);

    const element = getByText('Header');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByText } = render(<Header text='Header' variant='main' />);

    const element = getByText('Header');
    expect(element).toBeInTheDocument();
  });
});
