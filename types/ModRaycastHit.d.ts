/** @noSelfInFile */
export {};

declare global {
	/**
	 * Object containing the information of a raycast hit
	 * 
	 * @notExported
	 */
	interface ModRaycastHit {
		/**
		 * Returns true if the raycast hit something, false otherwise
		 */
		DidHit(): boolean;

		/**
		 * Returns the hit normal
		 */
		GetHitNormal(): ModVector3;

		/**
		 * Returns the hit position
		 */
		GetHitPosition(): ModVector3;

		/**
		 * Returns the distance to the hit
		 */
		GetHitDistance(): number;

		/**
		 * Always returns `Trailmakers.Mods.Api.Proxies.ModRaycastHit`
		 */
		ToString(): string;

		/**
		 * Always returns `Trailmakers.Mods.Api.Proxies.ModRaycastHit`
		 */
		toString(): string;
	}
}
