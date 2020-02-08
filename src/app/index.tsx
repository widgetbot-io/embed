import * as React from 'react'
import Modal from '@ui/Modal'
import Sidebar from '@ui/Sidebar'
import ChooseChannel from '@views/ChooseChannel'
import { MessagesView } from '@views/Messages'
import Notifications from 'notify'
import { Redirect, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from './ThemeProvider'
import { observer } from 'mobx-react'
import { store } from '@models'
import { useCacheLoaded } from '@hooks'
import Authenticate from "@ui/Modal/screens/Authenticate";
import {Locale} from "@lib/Locale";

const App = observer(() => {
  const cacheLoaded = useCacheLoaded()
  if (!cacheLoaded) return null

  return (
    <Locale>
      <ThemeProvider>
        <Switch>
          <Route path="/:guild">
            <React.Fragment>
              <Authenticate />
              <Modal />
              <Notifications />
              <Sidebar />
              <Switch>
                <Route path="/:guild/:channel" component={MessagesView} />
                <Route component={ChooseChannel} />
              </Switch>
            </React.Fragment>
          </Route>

          <Redirect to="/299881420891881473" />
        </Switch>
      </ThemeProvider>
    </Locale>
  )
});
// class App extends React.PureComponent<
//   ChildProps<RouteComponentProps<any>, Locale>
// > {
//   state = {
//     catalogs: null
//   }

//   async componentDidMount() {
//     await this.getCatalogs()
//   }

//   async componentWillReceiveProps(nextProps) {
//     if (
//       nextProps.data.locale.language !== this.props.data.locale.language ||
//       nextProps.data.locale.translations !== this.props.data.locale.translations
//     ) {
//       await this.getCatalogs(nextProps)
//     }
//   }

//   async getCatalogs(props = this.props) {
//     const { language, translations } = props.data.locale
// const $catalog = await loadCatalog(language)

//     const catalog = produce($catalog, draftState => {
//       translations.forEach(
//         ([id, translation]) => (draftState.messages[id] = translation)
//       )
//     })

//     this.setState({ catalogs: { [language]: catalog } })
//   }

//   render() {
//     const { language } = this.props.data.locale

//     return (
//       <I18nProvider
//         language={language}
//         i18n={i18n}
//         catalogs={this.state.catalogs || undefined}
//       >
//         <ThemeProvider>
//           <this.app />
//         </ThemeProvider>
//       </I18nProvider>
//     )
//   }
// }

process.on('unhandledRejection', (err: any) => {
  console.error(err);
});

process.on('uncaughtException', (err: any) => {
  console.error(err);
});

export default App
