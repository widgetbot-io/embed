import { useMatch } from '@hooks'

export const useRouter = () => {
  let match: {guild: string, channel?: string};

  match = useMatch<{ guild: string; channel: string }>(
    '/channels/:guild/:channel',
    { relative: false }
  );

  if (!match) {
    match = useMatch<{ guild: string }>(
        '/channels/:guild',
        { relative: false }
    );
  }

  return match
};
