export interface Suggestion<Payload> {
  getSuggestions(query: string): Promise<Payload[]> | Payload[]
  extract(query: string, state: HTMLTextAreaElement): string | false
  toString(payload: Payload): string

  description(query: string): any
  suggestion(payload: Payload): any
}
