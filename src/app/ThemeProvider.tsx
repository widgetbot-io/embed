import { Theme as ThemeContext } from '@lib/emotion'
import Color from 'color'
import { ThemeProvider as Provider } from 'emotion-theming'
import * as React from 'react'
import * as _ from 'lodash'
import { GlobalStyles } from './elements'
import GET_SETTINGS from './Settings.graphql'

import { Theme_guild_theme } from '@generated'
import * as Constants from '@constants'
import { useQuery } from 'react-apollo-hooks'
import {useCacheLoaded, useRouter} from '@hooks'
import {generalStore} from '@store';
import {addNotification} from 'notify';
import {Locale} from '@lib/Locale';
import categorise from '@ui/Sidebar/Channels/categorise';

export const ThemeProvider = ({ children }) => {
  let guild;
  const use = useRouter();

  if (!use) {
    guild = null;
  } else {
    guild = use.guild;
  }

  const { data, loading, refetch, error } = useQuery(GET_SETTINGS, { variables: { guild }, fetchPolicy: 'network-only' });
  generalStore.fetchGuild = refetch;

  if (loading) return null;
  if (error) return null;
  if (!data || !data.guild) {
    addNotification({
      level: 'error',
      title: Locale.translate('frontend.notif.serverunavailable'),
      message: Locale.translate('frontend.notif.serverunavailable.desc'),
      autoDismiss: 0,
    });
    return null;
  }


  let theme: Theme_guild_theme = {
    __typename: 'Theme',
    colors: {
      __typename: 'ThemeColors',
      primary: data.guild && data.guild.settings.theme && data.guild.settings.theme.colors && data.guild.settings.theme.colors.primary || Constants.THEME_COLOR_PRIMARY,
      accent: data.guild && data.guild.settings.theme && data.guild.settings.theme.colors && data.guild.settings.theme.colors.accent || Constants.THEME_COLOR_ACCENT,
      background: data.guild && data.guild.settings.theme && data.guild.settings.theme.colors && data.guild.settings.theme.colors.background || Constants.THEME_BACKGROUND
    },
    css: data.guild && data.guild.settings.theme && data.guild.settings.theme.css || ``
  };

  // if (data.guild && data.guild.theme) _.merge(theme, data.guild.theme);
  try {
    generalStore.setGuild(data.guild);
  } catch (_) {
    // noop
  }
  try {
    generalStore.channels = categorise((data.guild.channels as any).sort((a, b) => { return a.position - b.position }));
  } catch (_) {
    generalStore.channels = [];
  }

  generalStore.toggleGuest(data.guild && data.guild.settings.guestMode);
  generalStore.toggleRead(data.guild && data.guild.settings.readonly);

  const themeContext: ThemeContext = {
    ...theme,
    readonly: data.guild && data.guild.settings.readonly || false,
    guestMode: data.guild && data.guild.settings.guestMode || false,
    singleChannel: data.guild && data.guild.settings.singleChannel || false,
    colors: {
      ...theme.colors,
      _primary: Color(theme.colors.primary),
      _background: Color(theme.colors.background),
      _accent: Color(theme.colors.accent)
    },
    url: {} // TODO: Fix
  };
  // TODO: I found why the URL parsing doesn't work l m a o.

  GlobalStyles.inject(themeContext);

  return <Provider theme={themeContext}>{children}</Provider>
};
