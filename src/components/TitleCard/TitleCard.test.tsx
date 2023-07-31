import { fireEvent, render } from '@testing-library/react';
import TitleCard from './TitleCard';

describe('Select', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(
      <TitleCard
        title='Desenvolvedor Front-End'
        caption='9 candidatos, 1 aprovado'
        actionButtonText='Embaralhar'
        handleClick={() => undefined}
      />,
    );

    const element = getByText('Desenvolvedor Front-End');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByText } = render(
      <TitleCard
        title='Desenvolvedor Front-End'
        caption='9 candidatos, 1 aprovado'
        actionButtonText='Embaralhar'
        handleClick={() => undefined}
      />,
    );

    const element = getByText('9 candidatos, 1 aprovado');
    expect(element).toBeInTheDocument();
  });

  it('Should call handleClickMock function once', () => {
    const handleClickMock = jest.fn();

    const { getByText } = render(
      <TitleCard
        title='Desenvolvedor Front-End'
        caption='9 candidatos, 1 aprovado'
        actionButtonText='Embaralhar'
        handleClick={handleClickMock}
      />,
    );
    const element = getByText('Embaralhar');
    fireEvent.click(element);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
