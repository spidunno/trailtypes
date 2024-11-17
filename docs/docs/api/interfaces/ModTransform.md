# Interface: ModTransform

Represents a Transform (position, rotation, scale) of a GameObject

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModTransform)

## Methods

### Back()

> **Back**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Back (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:99](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L99)

***

### Forward()

> **Forward**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Forward (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:94](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L94)

***

### GetEulerAnglesLocal()

> **GetEulerAnglesLocal**(): [`ModVector3`](ModVector3.md)

Gets the euler angles rotation of the Transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:164](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L164)

***

### GetEulerAnglesWorld()

> **GetEulerAnglesWorld**(): [`ModVector3`](ModVector3.md)

Gets the euler angles rotation of the Transform (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:119](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L119)

***

### GetPosition()

> **GetPosition**(): [`ModVector3`](ModVector3.md)

Gets the position of the Transform (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:25](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L25)

***

### GetPositionLocal()

> **GetPositionLocal**(): [`ModVector3`](ModVector3.md)

Gets the position of the Transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:159](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L159)

***

### GetPositionWorld()

> **GetPositionWorld**(): [`ModVector3`](ModVector3.md)

Gets the position of the Transform (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:114](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L114)

***

### GetRotation()

> **GetRotation**(): [`ModVector3`](ModVector3.md)

Gets the rotation of the Transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:39](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L39)

***

### GetRotationLocal()

> **GetRotationLocal**(): [`ModQuaternion`](ModQuaternion.md)

Gets the quaternion rotation of the Transform (local space)

#### Returns

[`ModQuaternion`](ModQuaternion.md)

#### Defined in

[ModTransform.d.ts:169](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L169)

***

### GetRotationQuaternion()

> **GetRotationQuaternion**(): [`ModQuaternion`](ModQuaternion.md)

Gets the rotation quaternions of the Transform (world space)

#### Returns

[`ModQuaternion`](ModQuaternion.md)

#### Defined in

[ModTransform.d.ts:49](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L49)

***

### GetRotationWorld()

> **GetRotationWorld**(): [`ModQuaternion`](ModQuaternion.md)

Gets the quaternion rotation of the Transform (world space)

#### Returns

[`ModQuaternion`](ModQuaternion.md)

#### Defined in

[ModTransform.d.ts:124](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L124)

***

### GetScale()

> **GetScale**(): [`ModVector3`](ModVector3.md)

Gets the scale of the Transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:69](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L69)

***

### GetScaleLocal()

> **GetScaleLocal**(): [`ModVector3`](ModVector3.md)

Gets the scale of the Transform (local space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:174](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L174)

***

### Left()

> **Left**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Left (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:104](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L104)

***

### Right()

> **Right**(): [`ModVector3`](ModVector3.md)

Returns a normalized vector Right (world space)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:109](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L109)

***

### SetEulerAnglesLocal()

#### SetEulerAnglesLocal(eulerAngles)

> **SetEulerAnglesLocal**(`eulerAngles`): `void`

Sets the euler angles rotation of the Transform (local space)

##### Parameters

• **eulerAngles**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:189](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L189)

#### SetEulerAnglesLocal(x, y, z)

> **SetEulerAnglesLocal**(`x`, `y`, `z`): `void`

Sets the euler angles rotation of the Transform (local space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:194](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L194)

***

### SetEulerAnglesWorld()

#### SetEulerAnglesWorld(eulerAngles)

> **SetEulerAnglesWorld**(`eulerAngles`): `void`

Sets the euler angles rotation of the Transform (world space)

##### Parameters

• **eulerAngles**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:139](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L139)

#### SetEulerAnglesWorld(x, y, z)

> **SetEulerAnglesWorld**(`x`, `y`, `z`): `void`

Sets the euler angles rotation of the Transform (world space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:144](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L144)

***

### SetPosition()

#### SetPosition(position)

> **SetPosition**(`position`): `void`

Sets the position of the Transform (world space)

##### Parameters

• **position**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:15](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L15)

#### SetPosition(x, y, z)

> **SetPosition**(`x`, `y`, `z`): `void`

Sets the position of the Transform (world space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:20](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L20)

***

### SetPositionLocal()

#### SetPositionLocal(position)

> **SetPositionLocal**(`position`): `void`

Sets the position of the Transform (local space)

##### Parameters

• **position**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:179](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L179)

#### SetPositionLocal(x, y, z)

> **SetPositionLocal**(`x`, `y`, `z`): `void`

Sets the position of the Transform (local space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:184](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L184)

***

### SetPositionWorld()

#### SetPositionWorld(position)

> **SetPositionWorld**(`position`): `void`

Sets the position of the Transform (world space)

##### Parameters

• **position**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:129](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L129)

#### SetPositionWorld(x, y, z)

> **SetPositionWorld**(`x`, `y`, `z`): `void`

Sets the position of the Transform (world space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:134](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L134)

***

### SetRotation()

#### SetRotation(rotation)

> **SetRotation**(`rotation`): `void`

Sets the rotation of the Transform (world space)

##### Parameters

• **rotation**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:30](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L30)

#### SetRotation(x, y, z)

> **SetRotation**(`x`, `y`, `z`): `void`

Sets the rotation of the Transform (world space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:35](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L35)

#### SetRotation(rotation)

> **SetRotation**(`rotation`): `void`

Sets the rotation of the Transform using a quaternion (world space)

##### Parameters

• **rotation**: [`ModQuaternion`](ModQuaternion.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:44](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L44)

***

### SetRotationLocal()

#### SetRotationLocal(rotation)

> **SetRotationLocal**(`rotation`): `void`

Sets the quaternion rotation of the Transform (local space)

##### Parameters

• **rotation**: [`ModQuaternion`](ModQuaternion.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:199](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L199)

#### SetRotationLocal(x, y, z, w)

> **SetRotationLocal**(`x`, `y`, `z`, `w`): `void`

Sets the quaternion rotation of the Transform (local space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

• **w**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:204](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L204)

***

### SetRotationWorld()

#### SetRotationWorld(rotation)

> **SetRotationWorld**(`rotation`): `void`

Sets the quaternion rotation of the Transform (world space)

##### Parameters

• **rotation**: [`ModQuaternion`](ModQuaternion.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:149](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L149)

#### SetRotationWorld(x, y, z, w)

> **SetRotationWorld**(`x`, `y`, `z`, `w`): `void`

Sets the quaternion rotation of the Transform (world space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

• **w**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:154](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L154)

***

### SetScale()

#### SetScale(scale)

> **SetScale**(`scale`): `void`

Sets the scale of the Transform (local space). Setting a non-uniform scale may, among other things, break the objects' physics

##### Parameters

• **scale**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:54](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L54)

#### SetScale(x, y, z)

> **SetScale**(`x`, `y`, `z`): `void`

Sets the scale of the Transform (local space). Setting a non-uniform scale may, among other things, break the objects' physics

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:59](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L59)

#### SetScale(scale)

> **SetScale**(`scale`): `void`

Sets the scale of the Transform (local space)

##### Parameters

• **scale**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:64](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L64)

***

### SetScaleLocal()

#### SetScaleLocal(scale)

> **SetScaleLocal**(`scale`): `void`

Sets the scale of the Transform (local space)

##### Parameters

• **scale**: [`ModVector3`](ModVector3.md)

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:209](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L209)

#### SetScaleLocal(x, y, z)

> **SetScaleLocal**(`x`, `y`, `z`): `void`

Sets the scale of the Transform (local space)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

`void`

##### Defined in

[ModTransform.d.ts:214](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L214)

***

### toString()

> **toString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModTransform`

#### Returns

`string`

#### Defined in

[ModTransform.d.ts:89](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L89)

***

### ToString()

> **ToString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModTransform`

#### Returns

`string`

#### Defined in

[ModTransform.d.ts:84](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L84)

***

### TransformDirection()

> **TransformDirection**(`direction`): [`ModVector3`](ModVector3.md)

Returns the direction's world space direction

#### Parameters

• **direction**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:79](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L79)

***

### TransformPoint()

> **TransformPoint**(`point`): [`ModVector3`](ModVector3.md)

Returns the point's local position (world space). Adds the current pos with input vector

#### Parameters

• **point**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[ModTransform.d.ts:74](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModTransform.d.ts#L74)
