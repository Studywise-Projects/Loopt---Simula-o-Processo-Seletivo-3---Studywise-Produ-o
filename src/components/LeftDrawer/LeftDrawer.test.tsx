import { render } from '@testing-library/react';
import LeftDrawer from './LeftDrawer';

describe('JobDetailsCard', () => {
  it('Should match the snapshot', () => {
    const { getByLabelText } = render(
      <LeftDrawer
        optionsSelect={[{ id: 1, label: 'Desenvolvedor Front-End' }]}
        valueSelect={null}
        handleChangeSelect={undefined}
      />,
    );

    const element = getByLabelText('Vaga');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByLabelText } = render(
      <LeftDrawer
        optionsSelect={[{ id: 1, label: 'Desenvolvedor Front-End' }]}
        valueSelect={null}
        handleChangeSelect={undefined}
      />,
    );

    const element = getByLabelText('Vaga');
    expect(element).toBeInTheDocument();
  });
});
