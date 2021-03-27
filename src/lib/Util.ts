const EPOCH = 1420070400000;
let INCREMENT = 0;

export class Util {
	constructor() { throw new Error('This is a static class.') }

	static craftAvatarUrl(snowflake: string, avatar: string): string {
		return `https://cdn.discordapp.com/avatars/${snowflake}/${avatar}.webp`
	}

	static craftServerUrl(snowflake: string, icon: string): string {
		return `https://cdn.discordapp.com/icons/${snowflake}/${icon}.webp`
	}

	static craftBannerUrl(snowflake: string, banner: string) {
		return `https://cdn.discordapp.com/banners/${snowflake}/${banner}.webp?size=512`
	}

	// https://github.com/discordjs/discord.js/blob/master/src/util/Snowflake.js#L35
	static generateSnowflake(timestamp = Date.now()) {
		if (typeof timestamp !== 'number' || isNaN(timestamp)) {
			throw new TypeError(
				`"timestamp" argument must be a number (received ${isNaN(timestamp) ? 'NaN' : typeof timestamp})`,
			);
		}
		if (INCREMENT >= 4095) INCREMENT = 0;
		const BINARY = `${(timestamp - EPOCH).toString(2).padStart(42, '0')}0000100000${(INCREMENT++)
			.toString(2)
			.padStart(12, '0')}`;
		return Util.binaryToID(BINARY);
	}

	// https://github.com/discordjs/discord.js/blob/master/src/util/Util.js#L498
	static binaryToID(str: string) {
		let dec = '';
	
		while (str.length > 50) {
			const high = parseInt(str.slice(0, -32), 2);
			const low = parseInt((high % 10).toString(2) + str.slice(-32), 2);
		
			dec = (low % 10).toString() + dec;
			str =
				Math.floor(high / 10).toString(2) +
				Math.floor(low / 10)
				.toString(2)
				.padStart(32, '0');
		}
	
		let num = parseInt(str, 2);
		while (num > 0) {
			dec = (num % 10).toString() + dec;
			num = Math.floor(num / 10);
		}
	
		return dec;
	}
}
