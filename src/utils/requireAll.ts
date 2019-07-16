class RequireAll<Module = { default: any }> {
  static REGEX = /\.\/([^\/\.])+(\.ts|\/index)$/
  public entries = []

  constructor(private context: __WebpackModuleApi.RequireContext) {
    context.keys().forEach(m => this.entries.push([m, this.context(m)]))
  }

  public modules = () => this.entries.map(([, m]: [string, Module]) => m)
  public paths = () => this.entries.map(([n]) => n)

  public exports<Export extends keyof Module>(
    exportName = 'default' as Export
  ): Module[Export][] {
    const exports = this.entries.map(
      ([, m]) => (exportName ? m[exportName] : m)
    )

    return exports.filter(Boolean)
  }

  public get(path: string) {
    const module = this.entries.find(([p]) => p === path)

    return module && module[1]
  }

  public getMatch(query: string, exportName = 'default') {
    if (!query) return null

    query = query.toLowerCase()

    const module = this.entries.find(([p]: [string]) =>
      p.toLowerCase().includes(query)
    )

    return module ? module[1][exportName] : null
  }
}

export default RequireAll
