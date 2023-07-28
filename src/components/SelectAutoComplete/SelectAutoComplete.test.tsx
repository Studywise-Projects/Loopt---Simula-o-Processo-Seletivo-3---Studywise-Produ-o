import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import SelectAutoComplete from './SelectAutoComplete';

describe('SelectAutoComplete', () => {
  const options = [
    {
      id: 1,
      label: 'Desenvolvedor Front-End',
    },
    { id: 2, label: 'Desenvolvedor Back-End' },
  ];

  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <SelectAutoComplete
        options={options}
        label='Vaga'
        value={null}
        handleChange={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render with the correctly prop: options = options (object)', () => {
    const wrapper = shallow(
      <SelectAutoComplete
        options={options}
        label='Vaga'
        value={null}
        handleChange={() => undefined}
      />,
    );

    expect(wrapper.prop('options')).toEqual(options);
  });

  it('Should capture the selected value', () => {
    const onSelectMock = jest.fn();

    const options = [
      {
        id: 1,
        label: 'Desenvolvedor Front-End',
      },
      { id: 2, label: 'Desenvolvedor Back-End' },
    ];

    const wrapper = shallow(
      <SelectAutoComplete
        options={options}
        label='Vaga'
        value={null}
        handleChange={onSelectMock}
      />,
    );

    wrapper
      .find('[data-test-id="selectautocomplete"]')
      .simulate('change', 'Desenvolvedor Front-End');

    expect(onSelectMock).toHaveBeenCalledWith('Desenvolvedor Front-End');
  });
});
