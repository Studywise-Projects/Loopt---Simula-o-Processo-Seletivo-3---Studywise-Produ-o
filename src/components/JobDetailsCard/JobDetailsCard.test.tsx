import { fireEvent, render } from '@testing-library/react';
import JobDetailsCard from './JobDetailsCard';

describe('JobDetailsCard', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(
      <JobDetailsCard
        job={{
          id: 1,
          label: 'Desenvolvedor Front-End',
          requirements: ['ReactJs', 'NextJs', 'React Native'],
          differentials: ['Python', 'Figma'],
        }}
        value={''}
        handleChange={() => undefined}
      />,
    );

    const element = getByText('ReactJs');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByText } = render(
      <JobDetailsCard
        job={{
          id: 1,
          label: 'Desenvolvedor Front-End',
          requirements: ['ReactJs', 'NextJs', 'React Native'],
          differentials: ['Python', 'Figma'],
        }}
        value={''}
        handleChange={() => undefined}
      />,
    );

    const element = getByText('Figma');
    expect(element).toBeInTheDocument();
  });

  it('Should call handleChangeMock function once', () => {
    const handleChangeMock = jest.fn();

    const { getByLabelText } = render(
      <JobDetailsCard
        job={{
          id: 1,
          label: 'Desenvolvedor Front-End',
          requirements: ['ReactJs', 'NextJs', 'React Native'],
          differentials: ['Python', 'Figma'],
        }}
        value={''}
        handleChange={handleChangeMock}
      />,
    );

    const element = getByLabelText('Buscar candidato pelo nome');
    fireEvent.change(element, { target: { value: 'value changed' } });
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });
});
