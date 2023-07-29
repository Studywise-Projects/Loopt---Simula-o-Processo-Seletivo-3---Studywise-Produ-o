import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import LeftDrawer from './LeftDrawer';

describe('LeftDrawer', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <LeftDrawer
        optionsSelect={undefined}
        valueSelect={null}
        handleChangeSelect={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
