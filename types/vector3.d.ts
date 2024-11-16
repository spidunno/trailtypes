/** @noSelfInFile */
export type {};

declare global {
	/**
	 * A 3-axis vector (position, rotation, scale, etc.), can store 3 numbers
	 *
	 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3)
	 * 
	 * @notExported
	 */
	interface ModVector3 {
		/**
		 * X value of the vector
		 */
		x: number;

		/**
		 * Y value of the vector
		 */
		y: number;

		/**
		 * Z value of the vector
		 */
		z: number;

		//#region operators
		/**
		 * Vector-scalar multiplication
		 */
		mul: LuaMultiplicationMethod<number, ModVector3>;

		/**
		 * Vector-scalar division
		 */
		div: LuaDivisionMethod<number, ModVector3>;

		/**
		 * Vector addition
		 */
		add: LuaAdditionMethod<ModVector3, ModVector3>;

		/**
		 * Vector subtraction
		 */
		sub: LuaAdditionMethod<ModVector3, ModVector3>;

		/**
		 * Vector negation
		 */
		neg: LuaNegationMethod<ModVector3>;

		/**
		 * Flips all the signs
		 */
		op_UnaryNegation(vector3: ModVector3): ModVector3;

		/**
		 * Adds first and second together
		 */
		op_Addition(first: ModVector3, second: ModVector3): ModVector3;

		/**
		 * Subtracts second from first
		 */
		op_Subtraction(first: ModVector3, second: ModVector3): ModVector3;

		/**
		 * Multiplies the vector by the scalar
		 */
		op_Multiply(vector3: ModVector3, scalar: number): ModVector3;

		/**
		 * Divides the vector by the divisor
		 */
		op_Division(vector3: ModVector3, divisor: number): ModVector3;

		/**
		 * Returns true if both vectors are the same, false if not (can be done with the normal `===`/`==`)
		 */
		op_Equality(first: ModVector3, second: ModVector3): boolean;

		/**
		 * Returns true if both vectors are not the same, false if they are (can be done with `!==`/`!=`)
		 */
		op_Inequality(first: ModVector3, second: ModVector3): boolean;
		//#endregion operators

		/**
		 * Creates a vector3 from a string. String should be formatted as "(x, y, z)". Example input: "(4.5, 6, 10.8)"
		 */
		Create(input: string): ModVector3;

		/**
		 * Creates a vector3 with specified values
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Create(x: number, y: number, z: number): ModVector3;

		/**
		 * Creates a vector3 with values defaulted to zero
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Create(): ModVector3;

		/**
		 * Creates a vector3 pointing right (1, 0, 0)
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Right(): ModVector3;

		/**
		 * Creates a vector3 pointing left (-1, 0, 0)
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Left(): ModVector3;

		/**
		 * Creates a vector3 pointing up (0, 1, 0)
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Up(): ModVector3;

		/**
		 * Creates a vector3 pointing down (0, -1, 0)
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Down(): ModVector3;

		/**
		 * Creates a vector3 pointing forward (0, 0, 1)
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Forward(): ModVector3;

		/**
		 * Creates a vector3 pointing back (0, 0, -1)
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)
		 */
		Back(): ModVector3;

		/**
		 * Returns true if both vectors are the same, false if not (can be done with `===`/`==`)
		 */
		Equals(otherVector: ModVector3): boolean;

		/**
		 * Returns the hash code of the vector
		 */
		GetHashCode(): number;

		/**
		 * Returns a formatted string of a vector in the form `(x, y, z)`
		 */
		ToString(): string;

		/**
		 * Returns a formatted string of a vector in the form `(x, y, z)`
		 */
		toString(): string;

		/**
		 * Returns the dot product of two vector3
		 */
		Dot(otherVector: ModVector3): number;

		/**
		 * Returns the cross product of two vector3
		 */
		Cross(otherVector: ModVector3): ModVector3;

		/**
		 * Returns the magnitude/length
		 */
		Magnitude(): number;

		/**
		 * Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta
		 */
		MoveTowards(
			vector: ModVector3,
			otherVector: ModVector3,
			maxDistanceDelta: number
		): ModVector3;

		/**
		 * Calculates the angle in degrees between the vector from and another vector
		 */
		Angle(vector: ModVector3, otherVector: ModVector3): number;

		/**
		 * Returns the distance between the ModVector and another vector
		 */
		Distance(vector: ModVector3, otherVector: ModVector3): number;

		/**
		 * Linearly interpolates between two vectors
		 *
		 * @param vector
		 * @param otherVector
		 * @param t Position in the interpolation (0=vector, 1=otherVector)
		 */
		Lerp(vector: ModVector3, otherVector: ModVector3, t: number): ModVector3;
	}
}
