import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Header from './Header';
import LeftDrawer from '../LeftDrawer/LeftDrawer';

describe('Header', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <Header
        icon={
          <LeftDrawer
            optionsSelect={undefined}
            valueSelect={null}
            handleChangeSelect={() => undefined}
          />
        }
        text='Header'
        handleClick={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleClickMock function once', () => {
    const handleClickMock = jest.fn();

    const wrapper = shallow(
      <Header
        icon={
          <LeftDrawer
            optionsSelect={undefined}
            valueSelect={null}
            handleChangeSelect={() => undefined}
          />
        }
        text='Header'
        handleClick={handleClickMock}
      />,
    );

    wrapper.find('[data-test-id="header"]').simulate('click');

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
