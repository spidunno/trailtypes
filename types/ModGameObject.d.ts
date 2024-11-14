/** @noSelfInFile */
import { TextureName } from "./physics";

export {};

declare global {
	/**
	 * Represents a game object in the game environment
	 *
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModGameObject)
	 */
	interface ModGameObject {
		/**
		 * Despawns the object. This cannot be done on players
		 */
		Despawn(): void;

		/**
		 * Returns the GameObject's Transform
		 */
		GetTransform(): ModTransform;

		/**
		 * Sets the visibility of the GameObject
		 */
		SetIsVisible(isVisible: boolean): void;

		/**
		 * Gets the visibility of the GameObject
		 */
		GetIsVisible(): boolean;

		/**
		 * Returns true if the GameObject or any of its children are rigidbodies
		 */
		GetIsRigidbody(): boolean;

		/**
		 * Sets the GameObject and its children's rigidbodies to be static or not
		 */
		SetIsStatic(isStatic: boolean): void;

		/**
		 * Returns true if the GameObject, and all of its children, are static
		 */
		GetIsStatic(): boolean;

		/**
		 * Sets whether the GameObject lets other GameObjects pass through its colliders or not
		 */
		SetIsTrigger(isTrigger: boolean): void;

		/**
		 * Returns true if the GameObject exists
		 */
		Exists(): boolean;

		/**
		 * Always returns `PFB_ModGameObject [Server] (ModGameObject_Server)`
		 */
		ToString(): string;

		/**
		 * Always returns `PFB_ModGameObject [Server] (ModGameObject_Server)`
		 */
		toString(): string;

		/**
		 * Sets the texture on the GameObject (Custom meshes only)
		 */
		SetTexture(textureName: TextureName): void;

		/**
		 * Add a force to the GameObject as an impulse
		 *
		 * [View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddForceImpulse(x: number, y: number, z: number): void;

		/**
		 * Add a force to the GameObject as a force
		 *
		 * [View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddForce(x: number, y: number, z: number): void;

		/**
		 * Add a force to the GameObject as an Acceleration
		 *
		 * [View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddForceAcceleration(x: number, y: number, z: number): void;

		/**
		 * Add a force to the GameObject as a VelocityChange
		 *
		 * [View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddForceVelocityChange(x: number, y: number, z: number): void;

		/**
		 * Add a torque to the GameObject as an impulse
		 *
		 * [View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddTorqueImpulse(x: number, y: number, z: number): void;

		/**
		 * Add a torque to the GameObject as a force
		 *
		 * [View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddTorqueForce(x: number, y: number, z: number): void;

		/**
		 * Add a torque to the GameObject as an Acceleration
		 *
		 * [View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddTorqueAcceleration(x: number, y: number, z: number): void;

		/**
		 * Add a torque to the GameObject as a VelocityChange
		 *
		 * [View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddTorqueVelocityChange(x: number, y: number, z: number): void;
	}
}
