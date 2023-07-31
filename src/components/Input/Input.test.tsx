import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('Should match the snapshot', () => {
    const { getByLabelText } = render(
      <Input
        id='text-input'
        label='text-label'
        type='text'
        value=''
        handleChange={() => undefined}
        handleKeyPress={undefined}
      />,
    );

    const element = getByLabelText('text-label');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByLabelText } = render(
      <Input
        id='text-input'
        label='text-label'
        type='text'
        value=''
        handleChange={() => undefined}
        handleKeyPress={undefined}
      />,
    );

    const element = getByLabelText('text-label');
    expect(element).toBeInTheDocument();
  });

  it('Should render correctly with type = password', () => {
    const { getByLabelText } = render(
      <Input
        id='password-input'
        label='password-label'
        type='password'
        value=''
        handleChange={() => undefined}
        handleKeyPress={undefined}
      />,
    );

    const element = getByLabelText('password-label');
    expect(element).toHaveAttribute('type', 'password');
  });

  it('Should call handleChangeMock function once', () => {
    const handleChangeMock = jest.fn();

    const { getByLabelText } = render(
      <Input
        id='text-input'
        label='text-label'
        type='text'
        value=''
        handleChange={handleChangeMock}
        handleKeyPress={undefined}
      />,
    );

    const element = getByLabelText('text-label');
    fireEvent.change(element, { target: { value: 'input changed' } });
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });

  it('Should call handlePressKeyMock function once', () => {
    const handlePressKeyMock = jest.fn();

    const { getByLabelText } = render(
      <Input
        id='text-input'
        label='text-label'
        type='text'
        value=''
        handleChange={() => undefined}
        handleKeyPress={handlePressKeyMock}
      />,
    );

    const element = getByLabelText('text-label');
    fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' });

    expect(handlePressKeyMock).toHaveBeenCalledTimes(1);
  });
});
