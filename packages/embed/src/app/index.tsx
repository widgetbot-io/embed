import { compose } from 'recompose'
import { I18nProvider } from '@lingui/react'
import Modal from '@ui/Modal'
import Sidebar from '@ui/Sidebar'
import ChooseChannel from '@views/ChooseChannel'
import MessagesView from '@views/Messages'
import Notifications from 'notify'
import * as React from 'react'
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router'

import ThemeProvider from './ThemeProvider'
import i18n, { loadCatalog } from '@lib/i18n'
import { graphql, ChildProps } from 'react-apollo'
import gql from 'graphql-tag'
import { Locale } from './__generated__/Locale'
import produce from 'immer'

class App extends React.PureComponent<
  ChildProps<RouteComponentProps<any>, Locale>
> {
  state = {
    catalogs: null
  }

  app = () => (
    <Switch>
      <Route path="/:server">
        <React.Fragment>
          <Modal />
          <Notifications />
          <Sidebar />
          <Switch>
            <Route path="/:server/:channel" component={MessagesView} />
            <Route component={ChooseChannel} />
          </Switch>
        </React.Fragment>
      </Route>

      <Redirect to="/299881420891881473" />
    </Switch>
  )

  async componentDidMount() {
    await this.getCatalogs()
  }

  async componentWillReceiveProps(nextProps) {
    if (
      nextProps.data.locale.language !== this.props.data.locale.language ||
      nextProps.data.locale.translations !== this.props.data.locale.translations
    ) {
      await this.getCatalogs(nextProps)
    }
  }

  async getCatalogs(props = this.props) {
    const { language, translations } = props.data.locale
    const $catalog = await loadCatalog(language)

    const catalog = produce($catalog, draftState => {
      translations.forEach(
        ([id, translation]) => (draftState.messages[id] = translation)
      )
    })

    this.setState({ catalogs: { [language]: catalog } })
  }

  render() {
    const { language } = this.props.data.locale

    return (
      <I18nProvider
        language={language}
        i18n={i18n}
        catalogs={this.state.catalogs || undefined}
      >
        <ThemeProvider>
          <this.app />
        </ThemeProvider>
      </I18nProvider>
    )
  }
}

export default compose(
  withRouter,
  graphql(gql`
    query Locale {
      locale @client {
        language
        translations
      }
    }
  `)
)(App)
