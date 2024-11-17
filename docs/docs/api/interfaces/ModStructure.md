# Interface: ModStructure

Represents a creation in the game

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218103875/ModStructure)

## Methods

### AddForce()

> **AddForce**(`x`, `y`, `z`): `void`

Add a force to the given structure as an impulse. Units are `5kg * m/s²`

[View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModStructure.d.ts:72](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L72)

***

### Back()

> **Back**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Back (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:45](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L45)

***

### Destroy()

> **Destroy**(): `void`

Destroy the structure

#### Returns

`void`

#### Defined in

[ModStructure.d.ts:60](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L60)

***

### Dispose()

> **Dispose**(): `void`

Despawn the structure. Similar to `ModStructure.Destroy()` but the creation is removed instantly without playing the destruction animation

#### Returns

`void`

#### Defined in

[ModStructure.d.ts:107](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L107)

***

### Forward()

> **Forward**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Forward (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:40](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L40)

***

### GetBlocks()

> **GetBlocks**(): [`ModBlock`](ModBlock.md)[]

Gets all blocks in the

#### Returns

[`ModBlock`](ModBlock.md)[]

#### Defined in

[ModStructure.d.ts:65](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L65)

***

### GetOwnedByPlayerId()

> **GetOwnedByPlayerId**(): `number`

Get player index who owns this structure. Returns `-1` if player is gone

#### Returns

`number`

#### Defined in

[ModStructure.d.ts:97](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L97)

***

### GetPosition()

> **GetPosition**(): [`ModVector3`](ModVector3.md)

Gets the position of the Transform (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:15](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L15)

***

### GetPowerCores()

> **GetPowerCores**(): `number`

Returns the number of power cores of the structure

#### Returns

`number`

#### Defined in

[ModStructure.d.ts:102](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L102)

***

### GetRotation()

> **GetRotation**(): [`ModVector3`](ModVector3.md)

Gets the rotation of the Transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:20](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L20)

***

### GetScale()

> **GetScale**(): [`ModVector3`](ModVector3.md)

Gets the scale of the Transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:25](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L25)

***

### GetSpeed()

> **GetSpeed**(): `number`

Gets the speed of the player inside of the structure. Units are `m/s`

#### Returns

`number`

#### Defined in

[ModStructure.d.ts:92](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L92)

***

### GetVelocity()

> **GetVelocity**(): [`ModVector3`](ModVector3.md)

Gets the velocity of the player inside of the structure

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:87](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L87)

***

### Left()

> **Left**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Left (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:50](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L50)

***

### Right()

> **Right**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Right (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:55](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L55)

***

### toString()

> **toString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModStructure`

#### Returns

`string`

#### Defined in

[ModStructure.d.ts:82](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L82)

***

### ToString()

> **ToString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModStructure`

#### Returns

`string`

#### Defined in

[ModStructure.d.ts:77](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L77)

***

### TransformDirection()

> **TransformDirection**(`direction`): [`ModVector3`](ModVector3.md)

Returns the direction's world space direction

#### Parameters

• **direction**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:35](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L35)

***

### TransformPoint()

> **TransformPoint**(`point`): [`ModVector3`](ModVector3.md)

Returns the point's position in world space (Adds the current pos with input vector)

#### Parameters

• **point**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModStructure.d.ts:30](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModStructure.d.ts#L30)
