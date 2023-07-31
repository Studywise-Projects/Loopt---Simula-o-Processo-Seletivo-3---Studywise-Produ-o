import { render } from '@testing-library/react';
import CandidatesCard from './CandidatesCard';

jest.mock('next/router', () => require('next-router-mock'));

describe('CandidatesCard', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(
      <CandidatesCard
        candidates={[
          {
            id: 0,
            name: 'test1',
            age: 0,
            picture: '',
            skills: [''],
            jobId: 0,
            approved: false,
          },
          {
            id: 1,
            name: 'test2',
            age: 1,
            picture: '',
            skills: [''],
            jobId: 1,
            approved: true,
          },
        ]}
      />,
    );

    const element = getByText('test1');
    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByText } = render(
      <CandidatesCard
        candidates={[
          {
            id: 0,
            name: 'test1',
            age: 0,
            picture: '',
            skills: [''],
            jobId: 0,
            approved: false,
          },
          {
            id: 1,
            name: 'test2',
            age: 1,
            picture: '',
            skills: [''],
            jobId: 1,
            approved: true,
          },
        ]}
      />,
    );

    const element = getByText('test2');
    expect(element).toBeInTheDocument();
  });
});
