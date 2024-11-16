/** @noSelfInFile */
export {};

declare global {
	/**
	 * Represents a block in a structure
	 *
	 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218562585/ModBlock)
	 * 
	 * @notExported
	 */
	interface ModBlock {
		/**
		 * Gets the position of the ModBlock (world space)
		 */
		GetPosition(): ModVector3;

		/**
		 * Gets the rotation of the ModBlock (local space)
		 */
		GetRotation(): ModVector3;

		/**
		 * Gets the scale of the transform (local space)
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
		 * [In buildmode only] Set the block's primary color
		 *
		 * @deprecated USE `.SetPrimaryColor()` INSTEAD
		 */
		SetColor(r: number, g: number, b: number): void;

		/**
		 * [In buildmode only] Set the block's primary color
		 */
		SetPrimaryColor(r: number, g: number, b: number): void;

		/**
		 * [In buildmode only] Set the block's secondary color
		 */
		SetSecondaryColor(r: number, g: number, b: number): void;

		/**
		 * [In buildmode only] Set the block's mass. Units are `5kg`
		 */
		SetMass(mass: number): void;

		/**
		 * Get the block's mass. Units are `5kg`
		 */
		GetMass(): number;

		/**
		 * Get the block's primary color
		 */
		GetPrimaryColor(): ModColor;

		/**
		 * Get the block's secondary color
		 */
		GetSecondaryColor(): ModColor;

		/**
		 * [In buildmode only] Set the block's buoyancy
		 */
		SetBuoyancy(buoyancy: number): void;

		/**
		 * Get the block's buoyancy
		 */
		GetBuoyancy(): number;

		/**
		 * Set the block's health
		 */
		SetHealth(hp: number): void;

		/**
		 * Get the block's start heath
		 */
		GetStartHealth(): number;

		/**
		 * Get the block's current health
		 */
		GetCurrentHealth(): number;

		/**
		 * Get the name of the block's type
		 */
		GetName(): string;

		/**
		 * Set the drag value in all directions, front, back, up, down, left, right
		 */
		SetDragAll(
			front: number,
			back: number,
			up: number,
			down: number,
			left: number,
			right: number
		): void;

		/**
		 * Add a force to the block as an impulse. Units are `5kg * m/s²`
		 *
		 * [View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddForce(x: number, y: number, z: number): void;

		/**
		 * Add a torque to the block as an impulse
		 *
		 * View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)
		 */
		AddTorque(x: number, y: number, z: number): void;

		/**
		 * Sets engine power (only works on engine blocks)
		 */
		SetEnginePower(power: number): void;

		/**
		 * Gets engine power (only works on engine blocks)
		 */
		GetEnginePower(): number;

		/**
		 * Sets jet power (only works on jet blocks)
		 */
		SetJetPower(power: number): void;

		/**
		 * Gets jet power (only works on jet block)
		 */
		GetJetPower(): number;

		/**
		 * Sets propeller power (only works on propeller blocks)
		 */
		SetPropellerPower(power: number): void;

		/**
		 * Gets propeller power (only works on propeller blocks)
		 */
		GetPropellerPower(): number;

		/**
		 * Sets gyro power (only works on gyro blocks)
		 */
		SetGyroPower(power: number): void;

		/**
		 * Gets gyro power (only works on gyro blocks)
		 */
		GetGyroPower(): number;

		/**
		 * Whether a block is an engine Block or not
		 */
		IsEngineBlock(): boolean;

		/**
		 * Whether a block is a eet block or not
		 */
		IsJetBlock(): boolean;

		/**
		 * Whether a block is a propeller block or not
		 */
		IsPropellerBlock(): boolean;

		/**
		 * Whether a block is a seat block or not
		 */
		IsPlayerSeatBlock(): boolean;

		/**
		 * Whether a block is a gyro block or not
		 */
		IsGyroBlock(): boolean;

		/**
		 * Returns true if the block exists. Keep in mind that when you repair your structure, your destroyed blocks will be replaced with different ones, making the old ones useless
		 */
		Exists(): boolean;

		/**
		 * Returns the structure a block belongs to
		 */
		GetStructure(): ModStructure;

		/**
		 * Always returns `Trailmakers.Mods.Api.Proxies.ModBlock`
		 */
		ToString(): string;

		/**
		 * Always returns `Trailmakers.Mods.Api.Proxies.ModBlock`
		 */
		toString(): string;
	}
}
