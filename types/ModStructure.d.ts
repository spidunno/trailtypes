/** @noSelfInFile */
import { PlayerID } from "./players";

export {};

declare global {
	/**
	 * Represents a creation in the game
	 *
	 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218103875/ModStructure)
	 * 
	 * @notExported
	 */
	interface ModStructure {
		/**
		 * Gets the position of the Transform (world space)
		 */
		GetPosition(): ModVector3;

		/**
		 * Gets the rotation of the Transform (local space)
		 */
		GetRotation(): ModVector3;

		/**
		 * Gets the scale of the Transform (local space)
		 */
		GetScale(): ModVector3;

		/**
		 * Returns the point's position in world space (Adds the current pos with input vector)
		 */
		TransformPoint(point: ModVector3): ModVector3;

		/**
		 * Returns the direction's world space direction
		 */
		TransformDirection(direction: ModVector3): ModVector3;

		/**
		 * Returns a normalized vector Forward (world space)
		 */
		Forward(): ModVector3;

		/**
		 * Returns a normalized vector Back (world space)
		 */
		Back(): ModVector3;

		/**
		 * Returns a normalized vector Left (world space)
		 */
		Left(): ModVector3;

		/**
		 * Returns a normalized vector Right (world space)
		 */
		Right(): ModVector3;

		/**
		 * Destroy the structure
		 */
		Destroy(): void;

		/**
		 * Gets all blocks in the
		 */
		GetBlocks(): ModBlock[];

		/**
		 * Add a force to the given structure as an impulse. Units are `5kg * m/s²`
		 *
		 * [View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddForce(x: number, y: number, z: number): void;

		/**
		 * Always returns `Trailmakers.Mods.Api.Proxies.ModStructure`
		 */
		ToString(): string;

		/**
		 * Always returns `Trailmakers.Mods.Api.Proxies.ModStructure`
		 */
		toString(): string;

		/**
		 * Gets the velocity of the player inside of the structure
		 */
		GetVelocity(): ModVector3;

		/**
		 * Gets the speed of the player inside of the structure. Units are `m/s`
		 */
		GetSpeed(): number;

		/**
		 * Get player index who owns this structure. Returns `-1` if player is gone
		 */
		GetOwnedByPlayerId(): PlayerID | -1;

		/**
		 * Returns the number of power cores of the structure
		 */
		GetPowerCores(): number;

		/**
		 * Despawn the structure. Similar to `ModStructure.Destroy()` but the creation is removed instantly without playing the destruction animation
		 */
		Dispose(): void;
	}
}
