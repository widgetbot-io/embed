export class Util {
	constructor() { throw new Error('This is a static class.') }

	static craftAvatarUrl(snowflake: string, avatar: string): string {
		return `https://cdn.discordapp.com/avatars/${snowflake}/${avatar}.jpg`
	}
}
