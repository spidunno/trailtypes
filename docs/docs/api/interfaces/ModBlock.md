# Interface: ModBlock

Represents a block in a structure

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218562585/ModBlock)

## Methods

### AddForce()

> **AddForce**(`x`, `y`, `z`): `void`

Add a force to the block as an impulse. Units are `5kg * m/s²`

[View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:142](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L142)

***

### AddTorque()

> **AddTorque**(`x`, `y`, `z`): `void`

Add a torque to the block as an impulse

View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:149](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L149)

***

### Back()

> **Back**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Back (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:46](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L46)

***

### Exists()

> **Exists**(): `boolean`

Returns true if the block exists. Keep in mind that when you repair your structure, your destroyed blocks will be replaced with different ones, making the old ones useless

#### Returns

`boolean`

#### Defined in

[ModBlock.d.ts:219](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L219)

***

### Forward()

> **Forward**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Forward (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:41](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L41)

***

### GetBuoyancy()

> **GetBuoyancy**(): `number`

Get the block's buoyancy

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:103](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L103)

***

### GetCurrentHealth()

> **GetCurrentHealth**(): `number`

Get the block's current health

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:118](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L118)

***

### GetEnginePower()

> **GetEnginePower**(): `number`

Gets engine power (only works on engine blocks)

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:159](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L159)

***

### GetGyroPower()

> **GetGyroPower**(): `number`

Gets gyro power (only works on gyro blocks)

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:189](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L189)

***

### GetJetPower()

> **GetJetPower**(): `number`

Gets jet power (only works on jet block)

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:169](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L169)

***

### GetMass()

> **GetMass**(): `number`

Get the block's mass. Units are `5kg`

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:83](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L83)

***

### GetName()

> **GetName**(): `string`

Get the name of the block's type

#### Returns

`string`

#### Defined in

[ModBlock.d.ts:123](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L123)

***

### GetPosition()

> **GetPosition**(): [`ModVector3`](ModVector3.md)

Gets the position of the ModBlock (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:16](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L16)

***

### GetPrimaryColor()

> **GetPrimaryColor**(): [`ModColor`](ModColor.md)

Get the block's primary color

#### Returns

[`ModColor`](ModColor.md)

#### Defined in

[ModBlock.d.ts:88](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L88)

***

### GetPropellerPower()

> **GetPropellerPower**(): `number`

Gets propeller power (only works on propeller blocks)

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:179](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L179)

***

### GetRotation()

> **GetRotation**(): [`ModVector3`](ModVector3.md)

Gets the rotation of the ModBlock (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:21](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L21)

***

### GetScale()

> **GetScale**(): [`ModVector3`](ModVector3.md)

Gets the scale of the transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:26](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L26)

***

### GetSecondaryColor()

> **GetSecondaryColor**(): [`ModColor`](ModColor.md)

Get the block's secondary color

#### Returns

[`ModColor`](ModColor.md)

#### Defined in

[ModBlock.d.ts:93](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L93)

***

### GetStartHealth()

> **GetStartHealth**(): `number`

Get the block's start heath

#### Returns

`number`

#### Defined in

[ModBlock.d.ts:113](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L113)

***

### GetStructure()

> **GetStructure**(): [`ModStructure`](ModStructure.md)

Returns the structure a block belongs to

#### Returns

[`ModStructure`](ModStructure.md)

#### Defined in

[ModBlock.d.ts:224](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L224)

***

### IsEngineBlock()

> **IsEngineBlock**(): `boolean`

Whether a block is an engine Block or not

#### Returns

`boolean`

#### Defined in

[ModBlock.d.ts:194](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L194)

***

### IsGyroBlock()

> **IsGyroBlock**(): `boolean`

Whether a block is a gyro block or not

#### Returns

`boolean`

#### Defined in

[ModBlock.d.ts:214](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L214)

***

### IsJetBlock()

> **IsJetBlock**(): `boolean`

Whether a block is a eet block or not

#### Returns

`boolean`

#### Defined in

[ModBlock.d.ts:199](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L199)

***

### IsPlayerSeatBlock()

> **IsPlayerSeatBlock**(): `boolean`

Whether a block is a seat block or not

#### Returns

`boolean`

#### Defined in

[ModBlock.d.ts:209](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L209)

***

### IsPropellerBlock()

> **IsPropellerBlock**(): `boolean`

Whether a block is a propeller block or not

#### Returns

`boolean`

#### Defined in

[ModBlock.d.ts:204](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L204)

***

### Left()

> **Left**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Left (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:51](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L51)

***

### Right()

> **Right**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Right (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:56](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L56)

***

### SetBuoyancy()

> **SetBuoyancy**(`buoyancy`): `void`

[In buildmode only] Set the block's buoyancy

#### Parameters

• **buoyancy**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:98](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L98)

***

### ~~SetColor()~~

> **SetColor**(`r`, `g`, `b`): `void`

[In buildmode only] Set the block's primary color

#### Parameters

• **r**: `number`

• **g**: `number`

• **b**: `number`

#### Returns

`void`

#### Deprecated

USE `.SetPrimaryColor()` INSTEAD

#### Defined in

[ModBlock.d.ts:63](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L63)

***

### SetDragAll()

> **SetDragAll**(`front`, `back`, `up`, `down`, `left`, `right`): `void`

Set the drag value in all directions, front, back, up, down, left, right

#### Parameters

• **front**: `number`

• **back**: `number`

• **up**: `number`

• **down**: `number`

• **left**: `number`

• **right**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:128](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L128)

***

### SetEnginePower()

> **SetEnginePower**(`power`): `void`

Sets engine power (only works on engine blocks)

#### Parameters

• **power**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:154](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L154)

***

### SetGyroPower()

> **SetGyroPower**(`power`): `void`

Sets gyro power (only works on gyro blocks)

#### Parameters

• **power**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:184](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L184)

***

### SetHealth()

> **SetHealth**(`hp`): `void`

Set the block's health

#### Parameters

• **hp**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:108](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L108)

***

### SetJetPower()

> **SetJetPower**(`power`): `void`

Sets jet power (only works on jet blocks)

#### Parameters

• **power**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:164](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L164)

***

### SetMass()

> **SetMass**(`mass`): `void`

[In buildmode only] Set the block's mass. Units are `5kg`

#### Parameters

• **mass**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:78](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L78)

***

### SetPrimaryColor()

> **SetPrimaryColor**(`r`, `g`, `b`): `void`

[In buildmode only] Set the block's primary color

#### Parameters

• **r**: `number`

• **g**: `number`

• **b**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:68](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L68)

***

### SetPropellerPower()

> **SetPropellerPower**(`power`): `void`

Sets propeller power (only works on propeller blocks)

#### Parameters

• **power**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:174](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L174)

***

### SetSecondaryColor()

> **SetSecondaryColor**(`r`, `g`, `b`): `void`

[In buildmode only] Set the block's secondary color

#### Parameters

• **r**: `number`

• **g**: `number`

• **b**: `number`

#### Returns

`void`

#### Defined in

[ModBlock.d.ts:73](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L73)

***

### toString()

> **toString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModBlock`

#### Returns

`string`

#### Defined in

[ModBlock.d.ts:234](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L234)

***

### ToString()

> **ToString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModBlock`

#### Returns

`string`

#### Defined in

[ModBlock.d.ts:229](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L229)

***

### TransformDirection()

> **TransformDirection**(`direction`): [`ModVector3`](ModVector3.md)

Returns the direction's world space direction

#### Parameters

• **direction**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:36](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L36)

***

### TransformPoint()

> **TransformPoint**(`point`): [`ModVector3`](ModVector3.md)

Returns the point's position in world space (Adds the current pos with input vector)

#### Parameters

• **point**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModBlock.d.ts:31](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModBlock.d.ts#L31)
