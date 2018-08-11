const gql = String.raw

const schema = gql`
  type Modal {
    open: Boolean!
    type: ID
    data: String
  }

  type Sidebar {
    open: Boolean!
  }

  type Locale {
    translations: [[String!]]!
    language: String!
  }

  extend type Query {
    modal: Modal!
    sidebar: Sidebar!
    locale: Locale!
  }

  extend type Mutation {
    closeModal: Boolean
    openModal(type: ID!, data: String): Boolean

    toggleSidebar(open: Boolean): Boolean!

    setLanguage(name: String): Boolean
    addTranslation(id: String!, translation: String!): Boolean
    removeTranslation(id: String!): Boolean
  }
`

export default schema.replace(/extend type /g, 'type ')
