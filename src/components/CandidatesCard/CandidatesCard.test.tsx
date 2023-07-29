import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CandidatesCard from './CandidatesCard';

describe('CandidatesCard', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <CandidatesCard
        candidates={[
          {
            id: 0,
            name: 'test',
            age: 32,
            jobId: 1,
            picture: '',
            skills: [''],
            approved: false,
          },
        ]}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
