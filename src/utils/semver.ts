export class Semver {
	private static split(ver: string): string[] {
		const c = ver.replace(/^v/, '');
		const index = c.indexOf('-') === -1 ? c.length : c.indexOf('-');

		return [
			...c.substring(0, index).split('.'),
			...c.substring(index + 1)
		];
	}

	public static sameMinor(oldVersion: string, newVersion: string): boolean {
		const s1 = Semver.split(oldVersion);
		const s2 = Semver.split(newVersion);

		return s1[1] === s2[1];
	}

	public static newMinor(oldVersion: string, newVersion: string): boolean {
		const s1 = Semver.split(oldVersion);
		const s2 = Semver.split(newVersion);

		return !s1[1] || s1[1] < s2[1];
	}

	public static newMinorOrMajor(oldVersion: string, newVersion: string): boolean {
		const s1 = Semver.split(oldVersion);
		const s2 = Semver.split(newVersion);

		return (s1[1] < s2[1]) || (s1[2] < s2[1]);
	}
}
