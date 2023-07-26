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

  it('Should render with default prop: variant = contained', () => {
    const wrapper = shallow(
      <Button text='Button' handleClick={() => undefined} />,
    );

    expect(wrapper.prop('variant')).toEqual('contained');
  });

  it('Should render with default prop: isAuxButton = false', () => {
    const handleClickMock = jest.fn();

    const wrapper = shallow(
      <Button text='Button' handleClick={handleClickMock} />,
    );

    wrapper.find('[data-testid="button"]').simulate('click');

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
