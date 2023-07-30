import useCandidatesStore from '@/stores/candidates';

function verifyRoutePath(route: string) {
  const selectedCandidate = useCandidatesStore(
    (state) => state.selectedCandidate,
  );

  const routeReplaced = route.replace(
    `/candidates/${selectedCandidate.id}#`,
    '',
  );

  if (routeReplaced === '') {
    return 5;
  } else {
    return 'all';
  }
}

export default verifyRoutePath;
