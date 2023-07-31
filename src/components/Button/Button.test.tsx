import { render, fireEvent, getByTestId } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(
      <Button text='Button' handleClick={undefined} />,
    );

    const element = getByText('Button');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByText } = render(
      <Button text='Button' handleClick={undefined} />,
    );

    const element = getByText('Button');
    expect(element).toBeInTheDocument();
  });

  it('Should call handleClickMock function once', () => {
    const handleClickMock = jest.fn();

    const { getByText } = render(
      <Button text='Button' handleClick={handleClickMock} />,
    );

    const element = getByText('Button');
    fireEvent.click(element);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
