/** @noSelfInFile */
export type {};

declare global {
	/**
	 * Global function executed on each mod update cycle. Should be redefined to use it
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)
	 */
	export function update(): void;

	export namespace tm {
		/**
		 * OS-level functionality. Everything to do with files and general mod systems
		 */
		const os: ModApiTmOs;

		/**
		 * Everything that can effect physics, like gravity, spawning objects, and importing meshes. Environment, Physics, Time, Assets and Objects
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218169403/Physics)
		 */
		const physics: ModApiPhysics;

		/**
		 * Everything to do with players actions and info
		 */
		const players: ModApiPlayers;

		/**
		 * For adding UI to your mod
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI)
		 */
		const playerUI: ModApiPlayerUI;

		/**
		 * Lets you play audio and effect audio
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/219185167/Audio)
		 */
		const audio: ModApiAudio;

		/**
		 * Lets you trigger functions on key press/release by players
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267762/Input)
		 */
		const input: ModApiInput;

		/**
		 * Contains the vector `(0, 0, 0)`
		 */
		const vector3: ModVector3;

		/**
		 * Contains the quaternion `(0, 0, 0, 0)`
		 */
		const quaternion: ModQuaternion;

		/**
		 * Represents the current world
		 */
		const world: ModApiWorld;

		/**
		 * Generates official Trailmakers Mods API Lua Docs
		 */
		function GetDocs(): string;
	}
}
