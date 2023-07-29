import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CandidatesCard from './CandidatesCard';

const candidates = [
  {
    id: 0,
    name: 'test',
    age: 32,
    jobId: 1,
    picture: '',
    skills: [''],
    approved: false,
  },
];

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
        handleClick={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleClickMock function once', () => {
    const handleClickMock = jest.fn();

    const wrapper = shallow(
      <CandidatesCard candidates={candidates} handleClick={handleClickMock} />,
    );

    wrapper.find('[data-testid="candidates-card"]').simulate('click');

    expect(handleClickMock).toBeCalledTimes(1);
  });
});
