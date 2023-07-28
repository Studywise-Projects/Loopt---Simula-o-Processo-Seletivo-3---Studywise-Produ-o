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

    wrapper.find('[data-test-id="input"]').simulate('change', 'Test');

    expect(handleChangeMock).toBeCalledWith('Test');
  });
});
