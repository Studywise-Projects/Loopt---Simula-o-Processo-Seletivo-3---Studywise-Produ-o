interface IFormatArrayToString {
  value: Array<string>;
  min: number;
  max: number;
}

function formatArrayToString({ value, min, max }: IFormatArrayToString) {
  // enforce value to string and replace "," to " | "
  let newValue = value.toString().replaceAll(',', ' | ');

  // verify max length and return formated value
  if (newValue.length > max) {
    newValue = newValue.substring(min, max) + '...';
  } else {
    newValue;
  }

  return newValue;
}

export default formatArrayToString;
