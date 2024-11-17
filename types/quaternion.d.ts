/** @noSelfInFile */

import { ModVector3 } from "./vector3";

/**
 * Quaternion object. Quaternions are for rotations, they get rid of gimbal lock that a vector3 rotation runs into. Quaternions can store 4 numbers
 *
 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion)
 */
export interface ModQuaternion {
	/**
	 * X value of the quaternion (i coefficient)
	 */
	x: number;

	/**
	 * Y value of the quaternion (j coefficient)
	 */
	y: number;

	/**
	 * Z value of the quaternion (k coefficient)
	 */
	z: number;

	/**
	 * W value of the quaternion (real part)
	 */
	w: number;

	/**
	 * Always returns `Trailmakers.Mods.Api.Proxies.ModQuaternion`
	 */
	ToString(): string;

	/**
	 * Always returns `Trailmakers.Mods.Api.Proxies.ModQuaternion`
	 */
	toString(): string;

	/**
	 * Creates a quaternion by manually defining its components
	 *
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)
	 */
	Create(x: number, y: number, z: number, w: number): ModQuaternion;

	/**
	 * Create a quaternion using euler angle components
	 *
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)
	 */
	Create(x: number, y: number, z: number): ModQuaternion;

	/**
	 * Creates a quaternion using an euler angle vector3
	 *
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)
	 */
	Create(eulerAngle: ModVector3): ModQuaternion;

	/**
	 * Creates a quaternion using an angle and an axis to rotate around
	 *
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)
	 */
	Create(angle: number, axis: ModVector3): ModQuaternion;

	/**
	 * Returns a vector3 representing the euler angles of the quaternion
	 */
	GetEuler(): ModVector3;

	/**
	 * Multiplies two quaternions and returns the result
	 */
	Multiply(otherQuaternion: ModQuaternion): ModQuaternion;

	/**
	 * Returns the resulting quaternion from a slerp between two quaternions
	 *
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Working_with_ModQuaternion)
	 *
	 * @param firstQuaternion
	 * @param secondQuaterion
	 * @param t Position in the interpolation (0=firstQuaternion, 1=secondQuaternion)
	 */
	Slerp(
		firstQuaternion: ModQuaternion,
		secondQuaterion: ModQuaternion,
		t: number
	): ModQuaternion;
}
