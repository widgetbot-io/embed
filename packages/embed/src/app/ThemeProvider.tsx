import { Theme as ThemeContext } from '@lib/emotion'
import Color from 'color'
import { ThemeProvider as Provider } from 'emotion-theming'
import * as React from 'react'
import { Query } from 'react-apollo'
import { Route } from 'react-router'
import { GlobalStyles } from './elements'
import GET_THEME from './Theme.graphql'
import {
  Theme,
  ThemeVariables,
  Theme_server_theme
} from './__generated__/Theme'

class ThemeProvider extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <Route path="/:server">
        {({
          match: {
            params: { server }
          }
        }) => (
          <Query<Theme, ThemeVariables>
            query={GET_THEME}
            variables={{ server }}
          >
            {({ loading, error, data }) => {
              let theme: Theme_server_theme = {
                __typename: 'Theme',
                colors: {
                  __typename: 'Colors',
                  primary: '#fff',
                  accent: '#7289da',
                  background: '#36393E'
                },
                css: ``
              }

              if (!error && !loading && data.server.theme) {
                theme = {
                  ...theme,
                  ...data.server.theme
                }
              }

              const themeContext: ThemeContext = {
                ...theme,
                colors: {
                  ...theme.colors,
                  _primary: Color(theme.colors.primary),
                  _background: Color(theme.colors.background),
                  _accent: Color(theme.colors.accent)
                },
                url: {} // TODO: Fix
              }

              GlobalStyles.inject(themeContext)

              return <Provider theme={themeContext}>{children}</Provider>
            }}
          </Query>
        )}
      </Route>
    )
  }
}

export default ThemeProvider
