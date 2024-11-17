# Interface: ModGameObject

Represents a game object in the game environment

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModGameObject)

## Methods

### AddForce()

> **AddForce**(`x`, `y`, `z`): `void`

Add a force to the GameObject as a force

[View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:83](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L83)

***

### AddForceAcceleration()

> **AddForceAcceleration**(`x`, `y`, `z`): `void`

Add a force to the GameObject as an Acceleration

[View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:90](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L90)

***

### AddForceImpulse()

> **AddForceImpulse**(`x`, `y`, `z`): `void`

Add a force to the GameObject as an impulse

[View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:76](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L76)

***

### AddForceVelocityChange()

> **AddForceVelocityChange**(`x`, `y`, `z`): `void`

Add a force to the GameObject as a VelocityChange

[View documents](https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:97](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L97)

***

### AddTorqueAcceleration()

> **AddTorqueAcceleration**(`x`, `y`, `z`): `void`

Add a torque to the GameObject as an Acceleration

[View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:118](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L118)

***

### AddTorqueForce()

> **AddTorqueForce**(`x`, `y`, `z`): `void`

Add a torque to the GameObject as a force

[View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:111](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L111)

***

### AddTorqueImpulse()

> **AddTorqueImpulse**(`x`, `y`, `z`): `void`

Add a torque to the GameObject as an impulse

[View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:104](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L104)

***

### AddTorqueVelocityChange()

> **AddTorqueVelocityChange**(`x`, `y`, `z`): `void`

Add a torque to the GameObject as a VelocityChange

[View documents](See https://docs.unity3d.com/ScriptReference/ForceMode.html)

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:125](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L125)

***

### Despawn()

> **Despawn**(): `void`

Despawns the object. This cannot be done on players

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:14](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L14)

***

### Exists()

> **Exists**(): `boolean`

Returns true if the GameObject exists

#### Returns

`boolean`

#### Defined in

[ModGameObject.d.ts:54](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L54)

***

### GetIsRigidbody()

> **GetIsRigidbody**(): `boolean`

Returns true if the GameObject or any of its children are rigidbodies

#### Returns

`boolean`

#### Defined in

[ModGameObject.d.ts:34](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L34)

***

### GetIsStatic()

> **GetIsStatic**(): `boolean`

Returns true if the GameObject, and all of its children, are static

#### Returns

`boolean`

#### Defined in

[ModGameObject.d.ts:44](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L44)

***

### GetIsVisible()

> **GetIsVisible**(): `boolean`

Gets the visibility of the GameObject

#### Returns

`boolean`

#### Defined in

[ModGameObject.d.ts:29](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L29)

***

### GetTransform()

> **GetTransform**(): [`ModTransform`](ModTransform.md)

Returns the GameObject's Transform

#### Returns

[`ModTransform`](ModTransform.md)

#### Defined in

[ModGameObject.d.ts:19](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L19)

***

### SetIsStatic()

> **SetIsStatic**(`isStatic`): `void`

Sets the GameObject and its children's rigidbodies to be static or not

#### Parameters

• **isStatic**: `boolean`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:39](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L39)

***

### SetIsTrigger()

> **SetIsTrigger**(`isTrigger`): `void`

Sets whether the GameObject lets other GameObjects pass through its colliders or not

#### Parameters

• **isTrigger**: `boolean`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:49](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L49)

***

### SetIsVisible()

> **SetIsVisible**(`isVisible`): `void`

Sets the visibility of the GameObject

#### Parameters

• **isVisible**: `boolean`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:24](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L24)

***

### SetTexture()

> **SetTexture**(`textureName`): `void`

Sets the texture on the GameObject (Custom meshes only)

#### Parameters

• **textureName**: `string`

#### Returns

`void`

#### Defined in

[ModGameObject.d.ts:69](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L69)

***

### toString()

> **toString**(): `string`

Always returns `PFB_ModGameObject [Server] (ModGameObject_Server)`

#### Returns

`string`

#### Defined in

[ModGameObject.d.ts:64](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L64)

***

### ToString()

> **ToString**(): `string`

Always returns `PFB_ModGameObject [Server] (ModGameObject_Server)`

#### Returns

`string`

#### Defined in

[ModGameObject.d.ts:59](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/ModGameObject.d.ts#L59)
