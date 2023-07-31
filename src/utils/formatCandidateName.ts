function formatCandidateName(name: string) {
  // formats the candidate's name to display the first name and only the first letter of the second
  const names = name.trim().split(' ');
  if (names.length === 1) {
    return name;
  } else {
    return `${names[0]} ${names[1][0]}.`;
  }
}

export default formatCandidateName;
