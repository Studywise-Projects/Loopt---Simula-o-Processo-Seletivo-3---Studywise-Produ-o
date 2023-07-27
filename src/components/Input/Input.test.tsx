import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <Input
        id='1'
        label='Input'
        type='text'
        value=''
        handleChange={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const wrapper = shallow(
      <Input
        id='2'
        label='Input'
        type='text'
        value=''
        handleChange={() => undefined}
      />,
    );

    expect(wrapper.find('Input')).toBeTruthy();
  });

  it('Should call handleChangeMock function once', () => {
    const handleChangeMock = jest.fn();

    const wrapper = shallow(
      <Input
        id='2'
        label='Input'
        type='text'
        value=''
        handleChange={handleChangeMock}
      />,
    );

    wrapper.find('[data-testId="input"]').simulate('change', 'Test');

    expect(handleChangeMock).toBeCalledWith('Test');
  });
});
