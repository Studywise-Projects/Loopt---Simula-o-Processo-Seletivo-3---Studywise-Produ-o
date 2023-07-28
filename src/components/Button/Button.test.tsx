import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <Button
        variant='contained'
        isAuxButton={false}
        text='Button'
        handleClick={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const wrapper = shallow(
      <Button
        variant='contained'
        isAuxButton={false}
        text='Button'
        handleClick={() => undefined}
      />,
    );

    expect(wrapper.text()).toEqual('Button');
  });

  it('Should call handleClickMock function once', () => {
    const handleClickMock = jest.fn();

    const wrapper = shallow(
      <Button text='Button' handleClick={handleClickMock} />,
    );

    wrapper.find('[data-test-id="button"]').simulate('click');

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
