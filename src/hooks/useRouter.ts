/* eslint-disable */

import { useMatch } from '../hooks'

export const useRouter = () => {
  let match: {guild: string, channel?: string};

  match = useMatch<{ guild: string; channel: string }>(
    '/:guild/:channel',
    { relative: false }
  );

  if (!match) {
    match = useMatch<{ guild: string }>(
        '/:guild',
        { relative: false }
    );
  }

  return match
};
