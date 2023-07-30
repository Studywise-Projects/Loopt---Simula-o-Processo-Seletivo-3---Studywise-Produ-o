import useCandidatesStore from '@/stores/candidates';

function verifyRoutePath(route: string) {
  const selectedCandidate = useCandidatesStore(
    (state) => state.selectedCandidate,
  );

  const routeReplaced = route.replace(
    `/candidates/${selectedCandidate.id}#`,
    '',
  );

  switch (routeReplaced) {
    case '':
      return 5;
    case 'all':
      return 'all';
  }
}

export default verifyRoutePath;
