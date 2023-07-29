import '@testing-library/jest-dom';
import { shallow, render } from 'enzyme';
import Select from './Select';

describe('Select', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <Select
        id='test-select'
        label='teste'
        options={undefined}
        value={undefined}
        handleChange={undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const wrapper = shallow(
      <Select
        id='test-select'
        label='teste'
        options={undefined}
        value={undefined}
        handleChange={undefined}
      />,
    );

    expect(wrapper.text()).toEqual('teste');
  });

  it('Should call handleChangeMock with the value = test', () => {
    const handleClickMock = jest.fn();

    const wrapper = shallow(
      <Select
        id='test-select'
        label='teste'
        options={undefined}
        value={undefined}
        handleChange={handleClickMock}
      />,
    );

    wrapper.find('[data-testid="select"]').simulate('change', 'Test');

    expect(handleClickMock).toBeCalledWith('Test');
  });
});
