import { render, fireEvent } from '@testing-library/react';
import AlertDialog from './AlertDialog';

describe('AlertDialog', () => {
  it('Should match the snapshot', () => {
    const { getByText } = render(
      <AlertDialog
        buttonText='Open Dialog'
        dialogTitle='title'
        dialogText='body'
        disagreeButtonText='disagree'
        agreeButtonText='agree'
        handleClickDisagree={undefined}
        handleClickAgree={undefined}
      />,
    );
    const element = getByText('Open Dialog');

    expect(element).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    const { getByText } = render(
      <AlertDialog
        buttonText='Open Dialog'
        dialogTitle='title'
        dialogText='body'
        disagreeButtonText='disagree'
        agreeButtonText='agree'
        handleClickDisagree={undefined}
        handleClickAgree={undefined}
      />,
    );

    const element = getByText('Open Dialog');
    expect(element).toBeInTheDocument();
  });
});
