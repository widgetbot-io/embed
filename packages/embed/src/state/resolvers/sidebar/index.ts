import { ClientStateConfig } from 'apollo-link-state'
import { SidebarVisibility } from '@queries/__generated__/SidebarVisibility'
import SIDEBAR_VISIBILITY from '@queries/SidebarVisibility.graphql'

const sidebar: ClientStateConfig = {
  defaults: {
    sidebar: {
      open: window.innerWidth > 520,
      __typename: 'Sidebar'
    }
  },
  resolvers: {
    Mutation: {
      toggleSidebar(_, { open } = <any>{}, { cache }) {
        const { sidebar }: SidebarVisibility = cache.readQuery({
          query: SIDEBAR_VISIBILITY
        })
        const nextState = typeof open === 'boolean' ? open : !sidebar.open

        cache.writeData({
          id: '$ROOT_QUERY.sidebar',
          data: {
            ...sidebar,
            open: nextState
          }
        })
        return nextState
      }
    }
  }
}

export default sidebar
