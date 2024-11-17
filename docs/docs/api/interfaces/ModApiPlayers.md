# Interface: ModApiPlayers

interface defining `tm.players`

Everything to do with players actions and info

## Properties

### onPlayerJoined

> **onPlayerJoined**: [`OnPlayerEvent`](OnPlayerEvent.md)

Event triggered when a player joins the server

#### Defined in

[players.d.ts:52](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L52)

***

### OnPlayerJoined

> **OnPlayerJoined**: [`OnPlayerEvent`](OnPlayerEvent.md)

Event triggered when a player joins the server

#### Defined in

[players.d.ts:47](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L47)

***

### onPlayerLeft

> **onPlayerLeft**: [`OnPlayerEvent`](OnPlayerEvent.md)

Event triggered when a player leaves the server

#### Defined in

[players.d.ts:62](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L62)

***

### OnPlayerLeft

> **OnPlayerLeft**: [`OnPlayerEvent`](OnPlayerEvent.md)

Event triggered when a player leaves the server

#### Defined in

[players.d.ts:57](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L57)

## Methods

### ActivateCamera()

> **ActivateCamera**(`playerId`, `fadeInDuration`): `void`

Activate a camera with fade-in

#### Parameters

• **playerId**: `number`

• **fadeInDuration**: `number`

#### Returns

`void`

#### Defined in

[players.d.ts:185](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L185)

***

### AddCamera()

> **AddCamera**(`playerId`, `position`, `rotation`): `void`

Add a camera. THERE CAN ONLY BE 1 CAMERA PER PLAYER!

#### Parameters

• **playerId**: `number`

• **position**: [`ModVector3`](ModVector3.md)

• **rotation**: [`ModVector3`](ModVector3.md)

#### Returns

`void`

#### Defined in

[players.d.ts:159](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L159)

***

### CanKillPlayer()

> **CanKillPlayer**(`playerId`): `boolean`

Checks if player can be killed

#### Parameters

• **playerId**: `number`

#### Returns

`boolean`

#### Defined in

[players.d.ts:97](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L97)

***

### CurrentPlayers()

> **CurrentPlayers**(): [`Player`](Player.md)[]

Get all players currently connected to the server

#### Returns

[`Player`](Player.md)[]

#### Defined in

[players.d.ts:67](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L67)

***

### DeactivateCamera()

> **DeactivateCamera**(`playerId`, `fadeOutDuration`): `void`

Deactivate a camera with fade-out

#### Parameters

• **playerId**: `number`

• **fadeOutDuration**: `number`

#### Returns

`void`

#### Defined in

[players.d.ts:190](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L190)

***

### DespawnStructure()

> **DespawnStructure**(`structureId`): `void`

Despawn a structure

#### Parameters

• **structureId**: `string`

#### Returns

`void`

#### Defined in

[players.d.ts:211](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L211)

***

### GetBuilderEnabled()

> **GetBuilderEnabled**(`playerId`): `boolean`

Checks if building is enabled for a player

#### Parameters

• **playerId**: `number`

#### Returns

`boolean`

#### Defined in

[players.d.ts:231](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L231)

***

### GetMaxTeamIndex()

> **GetMaxTeamIndex**(): `number`

Returns the highest team index allowed (always returns `7`)

#### Returns

`number`

#### Defined in

[players.d.ts:149](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L149)

***

### GetPlayerGameObject()

> **GetPlayerGameObject**(`playerId`): [`ModGameObject`](ModGameObject.md)

Get the GameObject of a player

#### Parameters

• **playerId**: `number`

#### Returns

[`ModGameObject`](ModGameObject.md)

#### Defined in

[players.d.ts:82](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L82)

***

### GetPlayerIsInBuildMode()

> **GetPlayerIsInBuildMode**(`playerId`): `boolean`

Returns true if the player is in build mode

#### Parameters

• **playerId**: `number`

#### Returns

`boolean`

#### Defined in

[players.d.ts:154](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L154)

***

### GetPlayerName()

> **GetPlayerName**(`playerId`): `string`

Get the player's name

#### Parameters

• **playerId**: `number`

#### Returns

`string`

#### Defined in

[players.d.ts:134](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L134)

***

### GetPlayerSeatBlock()

> **GetPlayerSeatBlock**(`playerId`): [`ModBlock`](ModBlock.md)

Returns the block the player is seated in

#### Parameters

• **playerId**: `number`

#### Returns

[`ModBlock`](ModBlock.md)

#### Defined in

[players.d.ts:241](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L241)

***

### GetPlayerSelectBlockInBuild()

> **GetPlayerSelectBlockInBuild**(`playerId`): `undefined` \| [`ModBlock`](ModBlock.md)

Get the last selected block in the builder for that player. Returns `nil` if the player hasn't selected a block in the current session

Dragging blocks doesn't count as selecting them. When multiple blocks are selected, only the first selected block is returned

#### Parameters

• **playerId**: `number`

#### Returns

`undefined` \| [`ModBlock`](ModBlock.md)

#### Defined in

[players.d.ts:129](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L129)

***

### GetPlayerStructures()

> **GetPlayerStructures**(`playerId`): [`ModStructure`](ModStructure.md)[]

Get all structure(s) owned by that player

#### Parameters

• **playerId**: `number`

#### Returns

[`ModStructure`](ModStructure.md)[]

#### Defined in

[players.d.ts:112](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L112)

***

### GetPlayerStructuresInBuild()

> **GetPlayerStructuresInBuild**(`playerId`): [`ModStructure`](ModStructure.md)[]

Get the structure(s) currently in build mode for a player

#### Parameters

• **playerId**: `number`

#### Returns

[`ModStructure`](ModStructure.md)[]

#### Defined in

[players.d.ts:122](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L122)

***

### GetPlayerTeam()

> **GetPlayerTeam**(`playerId`): `number`

Get the player's team index

#### Parameters

• **playerId**: `number`

#### Returns

`number`

#### Defined in

[players.d.ts:139](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L139)

***

### GetPlayerTransform()

> **GetPlayerTransform**(`playerId`): [`ModTransform`](ModTransform.md)

Get the Transform of a player

#### Parameters

• **playerId**: `number`

#### Returns

[`ModTransform`](ModTransform.md)

#### Defined in

[players.d.ts:77](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L77)

***

### GetRepairEnabled()

> **GetRepairEnabled**(`playerId`): `boolean`

Checks if repairing is enabled for a player

#### Parameters

• **playerId**: `number`

#### Returns

`boolean`

#### Defined in

[players.d.ts:236](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L236)

***

### GetSpawnedStructureById()

> **GetSpawnedStructureById**(`structureId`): [`ModStructure`](ModStructure.md)[]

Get structure by ID. Can only get structures spawned through `tm.players.SpawnStructure()`

#### Parameters

• **structureId**: `string`

#### Returns

[`ModStructure`](ModStructure.md)[]

#### Defined in

[players.d.ts:117](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L117)

***

### IsPlayerInSeat()

> **IsPlayerInSeat**(`playerId`): `boolean`

Returns true if the player is in a seat

#### Parameters

• **playerId**: `number`

#### Returns

`boolean`

#### Defined in

[players.d.ts:87](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L87)

***

### Kick()

> **Kick**(`playerId`): `void`

Forcefully disconnect a given player

#### Parameters

• **playerId**: `number`

#### Returns

`void`

#### Defined in

[players.d.ts:72](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L72)

***

### KillPlayer()

> **KillPlayer**(`playerId`): `void`

Kills a player

#### Parameters

• **playerId**: `number`

#### Returns

`void`

#### Defined in

[players.d.ts:92](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L92)

***

### PlacePlayerInSeat()

> **PlacePlayerInSeat**(`playerId`, `structureId`): `void`

Places the player in the seat of a structure

#### Parameters

• **playerId**: `number`

• **structureId**: `string`

#### Returns

`void`

#### Defined in

[players.d.ts:216](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L216)

***

### RemoveCamera()

> **RemoveCamera**(`playerId`): `void`

Remove a camera. THERE CAN ONLY BE 1 CAMERA PER PLAYER!

#### Parameters

• **playerId**: `number`

#### Returns

`void`

#### Defined in

[players.d.ts:168](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L168)

***

### SetBuilderEnabled()

> **SetBuilderEnabled**(`playerId`, `isEnabled`): `void`

Set if the builder for a player should be enabled

#### Parameters

• **playerId**: `number`

• **isEnabled**: `boolean`

#### Returns

`void`

#### Defined in

[players.d.ts:221](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L221)

***

### SetCameraPosition()

> **SetCameraPosition**(`playerId`, `position`): `void`

Set camera position

#### Parameters

• **playerId**: `number`

• **position**: [`ModVector3`](ModVector3.md)

#### Returns

`void`

#### Defined in

[players.d.ts:173](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L173)

***

### SetCameraRotation()

> **SetCameraRotation**(`playerId`, `rotation`): `void`

Set camera rotation

#### Parameters

• **playerId**: `number`

• **rotation**: [`ModVector3`](ModVector3.md)

Direction vector the camera will point in

#### Returns

`void`

#### Defined in

[players.d.ts:180](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L180)

***

### SetJetpackEnabled()

> **SetJetpackEnabled**(`playerId`, `enabled`): `void`

Enables and disables teh jetpack

#### Parameters

• **playerId**: `number`

• **enabled**: `boolean`

#### Returns

`void`

#### Defined in

[players.d.ts:107](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L107)

***

### SetPlayerIsInvincible()

> **SetPlayerIsInvincible**(`playerId`, `enabled`): `void`

Sets the invincibility status of a player

#### Parameters

• **playerId**: `number`

• **enabled**: `boolean`

#### Returns

`void`

#### Defined in

[players.d.ts:102](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L102)

***

### SetPlayerSpawnLocation()

> **SetPlayerSpawnLocation**(`playerId`, `spawnLocationId`): `void`

Sets the spawn location the player should use when respawning. Will be overwritten if another spawn location is set, e.g. checkpoints on the map

#### Parameters

• **playerId**: `number`

• **spawnLocationId**: `string`

#### Returns

`void`

#### Defined in

[players.d.ts:246](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L246)

***

### SetPlayerTeam()

> **SetPlayerTeam**(`playerId`, `teamID`): `void`

Sets the player's team index

#### Parameters

• **playerId**: `number`

• **teamID**: `number`

#### Returns

`void`

#### Defined in

[players.d.ts:144](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L144)

***

### SetRepairEnabled()

> **SetRepairEnabled**(`playerId`, `isEnabled`): `void`

Set if repairing for a player should be enabled. Also enables/disables transform

#### Parameters

• **playerId**: `number`

• **isEnabled**: `boolean`

#### Returns

`void`

#### Defined in

[players.d.ts:226](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L226)

***

### SetSpawnPoint()

> **SetSpawnPoint**(`playerIndex`, `spawnLocationId`, `position`, `rotation`): `void`

Sets the position and rotation of the spawn point for a player ID at a given spawn location. Each spawn location is a group of spawn points, one for each player ID. spawnLocationId = id of the spawn location. playerId = player ID for which the spawn point will be used when respawning at the location

#### Parameters

• **playerIndex**: `number`

• **spawnLocationId**: `string`

• **position**: [`ModVector3`](ModVector3.md)

• **rotation**: [`ModVector3`](ModVector3.md)

#### Returns

`void`

#### Defined in

[players.d.ts:254](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L254)

***

### SpawnStructure()

> **SpawnStructure**(`playerId`, `blueprint`, `structureId`, `position`, `rotation`): `void`

Spawn a structure for a player with given blueprint, position and rotation

#### Parameters

• **playerId**: `number`

Player to which the blueprint will belong

• **blueprint**: `string`

Name of the blueprint to spawn

• **structureId**: `string`

ID that will be used to reference the structure

• **position**: [`ModVector3`](ModVector3.md)

Position of the spawned structure

• **rotation**: [`ModVector3`](ModVector3.md)

Rotation of the spawned structure

#### Returns

`void`

#### Defined in

[players.d.ts:200](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L200)

***

### TeleportAllPlayersToSpawnPoint()

> **TeleportAllPlayersToSpawnPoint**(`spawnLocationId`, `keepStructure`): `void`

Teleports ALL players to the selected spawn point location. Use this to move up to 8 players to their spawn position. Set `keepStructure` to true and it will try to their structure after teleporting (will be repaired)

#### Parameters

• **spawnLocationId**: `string`

• **keepStructure**: `boolean`

Whether it should try to keep the players' structure after teleporting (will be repaired)

#### Returns

`void`

#### Defined in

[players.d.ts:280](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L280)

***

### TeleportPlayerToSpawnPoint()

> **TeleportPlayerToSpawnPoint**(`playerId`, `spawnLocationId`, `keepStructure`): `void`

Teleports a player to the selected spawn point location. To teleport all players use `tm.players.TeleportAllPlayersToSpawnPoint()`. Set `keepStructure` to true and it will try to keep their structure after teleporting (will be repaired)

#### Parameters

• **playerId**: `number`

• **spawnLocationId**: `string`

• **keepStructure**: `boolean`

Whether it should try to keep the players' structure after teleporting (will be repaired)

#### Returns

`void`

#### Defined in

[players.d.ts:268](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/players.d.ts#L268)
