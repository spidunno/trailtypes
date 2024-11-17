/** @noSelfInFile */

import { ModQuaternion } from "./quaternion";
import { ModVector3 } from "./vector3";

/**
 * Represents a Transform (position, rotation, scale) of a GameObject
 *
 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModTransform)
 */
export interface ModTransform {
	/**
	 * Sets the position of the Transform (world space)
	 */
	SetPosition(position: ModVector3): void;

	/**
	 * Sets the position of the Transform (world space)
	 */
	SetPosition(x: number, y: number, z: number): void;

	/**
	 * Gets the position of the Transform (world space)
	 */
	GetPosition(): ModVector3;

	/**
	 * Sets the rotation of the Transform (world space)
	 */
	SetRotation(rotation: ModVector3): void;

	/**
	 * Sets the rotation of the Transform (world space)
	 */
	SetRotation(x: number, y: number, z: number): void;
	/**
	 * Gets the rotation of the Transform (local space)
	 */
	GetRotation(): ModVector3;

	/**
	 * Sets the rotation of the Transform using a quaternion (world space)
	 */
	SetRotation(rotation: ModQuaternion): void;

	/**
	 * Gets the rotation quaternions of the Transform (world space)
	 */
	GetRotationQuaternion(): ModQuaternion;

	/**
	 * Sets the scale of the Transform (local space). Setting a non-uniform scale may, among other things, break the objects' physics
	 */
	SetScale(scale: ModVector3): void;

	/**
	 * Sets the scale of the Transform (local space). Setting a non-uniform scale may, among other things, break the objects' physics
	 */
	SetScale(x: number, y: number, z: number): void;

	/**
	 * Sets the scale of the Transform (local space)
	 */
	SetScale(scale: number): void;

	/**
	 * Gets the scale of the Transform (local space)
	 */
	GetScale(): ModVector3;

	/**
	 * Returns the point's local position (world space). Adds the current pos with input vector
	 */
	TransformPoint(point: ModVector3): ModVector3;

	/**
	 * Returns the direction's world space direction
	 */
	TransformDirection(direction: ModVector3): ModVector3;

	/**
	 * Always returns `Trailmakers.Mods.Api.Proxies.ModTransform`
	 */
	ToString(): string;

	/**
	 * Always returns `Trailmakers.Mods.Api.Proxies.ModTransform`
	 */
	toString(): string;

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
	 * Gets the position of the Transform (world space)
	 */
	GetPositionWorld(): ModVector3;

	/**
	 * Gets the euler angles rotation of the Transform (world space)
	 */
	GetEulerAnglesWorld(): ModVector3;

	/**
	 * Gets the quaternion rotation of the Transform (world space)
	 */
	GetRotationWorld(): ModQuaternion;

	/**
	 * Sets the position of the Transform (world space)
	 */
	SetPositionWorld(position: ModVector3): void;

	/**
	 * Sets the position of the Transform (world space)
	 */
	SetPositionWorld(x: number, y: number, z: number): void;

	/**
	 * Sets the euler angles rotation of the Transform (world space)
	 */
	SetEulerAnglesWorld(eulerAngles: ModVector3): void;

	/**
	 * Sets the euler angles rotation of the Transform (world space)
	 */
	SetEulerAnglesWorld(x: number, y: number, z: number): void;

	/**
	 * Sets the quaternion rotation of the Transform (world space)
	 */
	SetRotationWorld(rotation: ModQuaternion): void;

	/**
	 * Sets the quaternion rotation of the Transform (world space)
	 */
	SetRotationWorld(x: number, y: number, z: number, w: number): void;

	/**
	 * Gets the position of the Transform (local space)
	 */
	GetPositionLocal(): ModVector3;

	/**
	 * Gets the euler angles rotation of the Transform (local space)
	 */
	GetEulerAnglesLocal(): ModVector3;

	/**
	 * Gets the quaternion rotation of the Transform (local space)
	 */
	GetRotationLocal(): ModQuaternion;

	/**
	 * Gets the scale of the Transform (local space)
	 */
	GetScaleLocal(): ModVector3;

	/**
	 * Sets the position of the Transform (local space)
	 */
	SetPositionLocal(position: ModVector3): void;

	/**
	 * Sets the position of the Transform (local space)
	 */
	SetPositionLocal(x: number, y: number, z: number): void;

	/**
	 * Sets the euler angles rotation of the Transform (local space)
	 */
	SetEulerAnglesLocal(eulerAngles: ModVector3): void;

	/**
	 * Sets the euler angles rotation of the Transform (local space)
	 */
	SetEulerAnglesLocal(x: number, y: number, z: number): void;

	/**
	 * Sets the quaternion rotation of the Transform (local space)
	 */
	SetRotationLocal(rotation: ModQuaternion): void;

	/**
	 * Sets the quaternion rotation of the Transform (local space)
	 */
	SetRotationLocal(x: number, y: number, z: number, w: number): void;

	/**
	 * Sets the scale of the Transform (local space)
	 */
	SetScaleLocal(scale: ModVector3): void;

	/**
	 * Sets the scale of the Transform (local space)
	 */
	SetScaleLocal(x: number, y: number, z: number): void;
}
