function formatCandidateName(name: string) {
  const names = name.trim().split(' ');
  if (names.length === 1) {
    return name;
  } else {
    return `${names[0]} ${names[1][0]}.`;
  }
}

export default formatCandidateName;
