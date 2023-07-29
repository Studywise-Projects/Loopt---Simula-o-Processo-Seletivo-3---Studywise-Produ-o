function formatArrayToString(value: Array<any>, min: number, max: number) {
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
