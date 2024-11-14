/** @noSelfInFile */
export {};

declare global {
	/**
	 * Represents a color
	 */
	interface ModColor {
		/**
		 * Returns a formatted string of a color in the form `RGBA(r, g, b, a)`
		 */
		ToString(): string;

		/**
		 * Returns a formatted string of a color in the form `RGBA(r, g, b, a)`
		 */
		toString(): string;

		/**
		 * Returns the red channel value of the color
		 */
		R(): number;

		/**
		 * Returns the green channel value of the color
		 */
		G(): number;

		/**
		 * Returns the blue channel value of the color
		 */
		B(): number;
	}
}
