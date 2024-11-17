/** @noSelfInFile */
import { ModBlock } from "./ModBlock";
import { ModGameObject } from "./ModGameObject";
import { ModStructure } from "./ModStructure";
import { ModTransform } from "./ModTransform";
import type { TextureName } from "./physics";
import { ModVector3 } from "./vector3";

/**
 * Object representing a player in the game
 */
export interface Player {
	playerId: PlayerID;

	/**
	 * Always returns `Trailmakers.Mods.Api.ModApiPlayers+Player`
	 */
	ToString(): string; //'Trailmakers.Mods.Api.ModApiPlayers+Player';

	/**
	 * Always returns `Trailmakers.Mods.Api.ModApiPlayers+Player`
	 */
	toString(): string; //'Trailmakers.Mods.Api.ModApiPlayers+Player';
}

export interface OnPlayerEvent {
	/**
	 * Add function to event
	 */
	add(fun: (player: Player) => void): void;

	/**
	 * Remove function from event. The same function object must have been registered with `OnPlayerEvent.add()` first
	 */
	remove(fun: (player: Player) => void): void;
}

/**
 * interface defining `tm.players`
 *
 * Everything to do with players actions and info
 */
export interface ModApiPlayers {
	/**
	 * Event triggered when a player joins the server
	 */
	OnPlayerJoined: OnPlayerEvent;

	/**
	 * Event triggered when a player joins the server
	 */
	onPlayerJoined: ModApiPlayers["OnPlayerJoined"];

	/**
	 * Event triggered when a player leaves the server
	 */
	OnPlayerLeft: OnPlayerEvent;

	/**
	 * Event triggered when a player leaves the server
	 */
	onPlayerLeft: ModApiPlayers["OnPlayerLeft"];

	/**
	 * Get all players currently connected to the server
	 */
	CurrentPlayers(): Player[];

	/**
	 * Forcefully disconnect a given player
	 */
	Kick(playerId: PlayerID): void;

	/**
	 * Get the Transform of a player
	 */
	GetPlayerTransform(playerId: PlayerID): ModTransform;

	/**
	 * Get the GameObject of a player
	 */
	GetPlayerGameObject(playerId: PlayerID): ModGameObject;

	/**
	 * Returns true if the player is in a seat
	 */
	IsPlayerInSeat(playerId: PlayerID): boolean;

	/**
	 * Kills a player
	 */
	KillPlayer(playerId: PlayerID): void;

	/**
	 * Checks if player can be killed
	 */
	CanKillPlayer(playerId: PlayerID): boolean;

	/**
	 * Sets the invincibility status of a player
	 */
	SetPlayerIsInvincible(playerId: PlayerID, enabled: boolean): void;

	/**
	 * Enables and disables teh jetpack
	 */
	SetJetpackEnabled(playerId: PlayerID, enabled: boolean): void;

	/**
	 * Get all structure(s) owned by that player
	 */
	GetPlayerStructures(playerId: PlayerID): ModStructure[];

	/**
	 * Get structure by ID. Can only get structures spawned through `tm.players.SpawnStructure()`
	 */
	GetSpawnedStructureById(structureId: StructureID): ModStructure[];

	/**
	 * Get the structure(s) currently in build mode for a player
	 */
	GetPlayerStructuresInBuild(playerId: PlayerID): ModStructure[];

	/**
	 * Get the last selected block in the builder for that player. Returns `nil` if the player hasn't selected a block in the current session
	 *
	 * Dragging blocks doesn't count as selecting them. When multiple blocks are selected, only the first selected block is returned
	 */
	GetPlayerSelectBlockInBuild(playerId: PlayerID): ModBlock | undefined;

	/**
	 * Get the player's name
	 */
	GetPlayerName(playerId: PlayerID): string;

	/**
	 * Get the player's team index
	 */
	GetPlayerTeam(playerId: PlayerID): TeamID;

	/**
	 * Sets the player's team index
	 */
	SetPlayerTeam(playerId: PlayerID, teamID: TeamID): void;

	/**
	 * Returns the highest team index allowed (always returns `7`)
	 */
	GetMaxTeamIndex(): TeamID;

	/**
	 * Returns true if the player is in build mode
	 */
	GetPlayerIsInBuildMode(playerId: PlayerID): boolean;

	/**
	 * Add a camera. THERE CAN ONLY BE 1 CAMERA PER PLAYER!
	 */
	AddCamera(
		playerId: PlayerID,
		position: ModVector3,
		rotation: ModVector3
	): void;

	/**
	 * Remove a camera. THERE CAN ONLY BE 1 CAMERA PER PLAYER!
	 */
	RemoveCamera(playerId: PlayerID): void;

	/**
	 * Set camera position
	 */
	SetCameraPosition(playerId: PlayerID, position: ModVector3): void;

	/**
	 * Set camera rotation
	 *
	 * @param rotation Direction vector the camera will point in
	 */
	SetCameraRotation(playerId: PlayerID, rotation: ModVector3): void;

	/**
	 * Activate a camera with fade-in
	 */
	ActivateCamera(playerId: PlayerID, fadeInDuration: number): void;

	/**
	 * Deactivate a camera with fade-out
	 */
	DeactivateCamera(playerId: PlayerID, fadeOutDuration: number): void;

	/**
	 * Spawn a structure for a player with given blueprint, position and rotation
	 * @param playerId Player to which the blueprint will belong
	 * @param blueprint Name of the blueprint to spawn
	 * @param structureId ID that will be used to reference the structure
	 * @param position Position of the spawned structure
	 * @param rotation Rotation of the spawned structure
	 */
	SpawnStructure(
		playerId: PlayerID,
		blueprint: TextureName,
		structureId: StructureID,
		position: ModVector3,
		rotation: ModVector3
	): void;

	/**
	 * Despawn a structure
	 */
	DespawnStructure(structureId: StructureID): void;

	/**
	 * Places the player in the seat of a structure
	 */
	PlacePlayerInSeat(playerId: PlayerID, structureId: StructureID): void;

	/**
	 * Set if the builder for a player should be enabled
	 */
	SetBuilderEnabled(playerId: PlayerID, isEnabled: boolean): void;

	/**
	 * Set if repairing for a player should be enabled. Also enables/disables transform
	 */
	SetRepairEnabled(playerId: PlayerID, isEnabled: boolean): void;

	/**
	 * Checks if building is enabled for a player
	 */
	GetBuilderEnabled(playerId: PlayerID): boolean;

	/**
	 * Checks if repairing is enabled for a player
	 */
	GetRepairEnabled(playerId: PlayerID): boolean;

	/**
	 * Returns the block the player is seated in
	 */
	GetPlayerSeatBlock(playerId: PlayerID): ModBlock;

	/**
	 * Sets the spawn location the player should use when respawning. Will be overwritten if another spawn location is set, e.g. checkpoints on the map
	 */
	SetPlayerSpawnLocation(
		playerId: PlayerID,
		spawnLocationId: SpawnLocationID
	): void;

	/**
	 * Sets the position and rotation of the spawn point for a player ID at a given spawn location. Each spawn location is a group of spawn points, one for each player ID. spawnLocationId = id of the spawn location. playerId = player ID for which the spawn point will be used when respawning at the location
	 */
	SetSpawnPoint(
		playerIndex: PlayerID,
		spawnLocationId: SpawnLocationID,
		position: ModVector3,
		rotation: ModVector3
	): void;

	/**
	 * Teleports a player to the selected spawn point location. To teleport all players use `tm.players.TeleportAllPlayersToSpawnPoint()`. Set `keepStructure` to true and it will try to keep their structure after teleporting (will be repaired)
	 *
	 * @param playerId
	 * @param spawnLocationId
	 * @param keepStructure Whether it should try to keep the players' structure after teleporting (will be repaired)
	 */
	TeleportPlayerToSpawnPoint(
		playerId: PlayerID,
		spawnLocationId: SpawnLocationID,
		keepStructure: boolean
	): void;

	/**
	 * Teleports ALL players to the selected spawn point location. Use this to move up to 8 players to their spawn position. Set `keepStructure` to true and it will try to their structure after teleporting (will be repaired)
	 *
	 * @param spawnLocationId
	 * @param keepStructure Whether it should try to keep the players' structure after teleporting (will be repaired)
	 */
	TeleportAllPlayersToSpawnPoint(
		spawnLocationId: SpawnLocationID,
		keepStructure: boolean
	): void;
}

/**
 * ID of a player. Goes from 0 to 7, and the ID 0 is guaranteed to be the host
 */
export type PlayerID = number;

/**
 * ID of a team. Goes from 0 to 7, with the value selected through the session settings UI being `TeamID + 1`
 */
export type TeamID = number;

/**
 * ID referencing a structure spawned with `tm.players.SpawnStructure()`
 */
export type StructureID = string;

/**
 * ID referencing a spawn point location created with `tm.players.SetSpawnPoint()`
 */
export type SpawnLocationID = string;
