# Interface: ModQuaternion

Quaternion object. Quaternions are for rotations, they get rid of gimbal lock that a vector3 rotation runs into. Quaternions can store 4 numbers

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion)

## Properties

### w

> **w**: `number`

W value of the quaternion (real part)

#### Defined in

[quaternion.d.ts:29](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L29)

***

### x

> **x**: `number`

X value of the quaternion (i coefficient)

#### Defined in

[quaternion.d.ts:14](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L14)

***

### y

> **y**: `number`

Y value of the quaternion (j coefficient)

#### Defined in

[quaternion.d.ts:19](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L19)

***

### z

> **z**: `number`

Z value of the quaternion (k coefficient)

#### Defined in

[quaternion.d.ts:24](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L24)

## Methods

### Create()

#### Create(x, y, z, w)

> **Create**(`x`, `y`, `z`, `w`): [`ModQuaternion`](ModQuaternion.md)

Creates a quaternion by manually defining its components

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

• **w**: `number`

##### Returns

[`ModQuaternion`](ModQuaternion.md)

##### Defined in

[quaternion.d.ts:46](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L46)

#### Create(x, y, z)

> **Create**(`x`, `y`, `z`): [`ModQuaternion`](ModQuaternion.md)

Create a quaternion using euler angle components

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

[`ModQuaternion`](ModQuaternion.md)

##### Defined in

[quaternion.d.ts:53](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L53)

#### Create(eulerAngle)

> **Create**(`eulerAngle`): [`ModQuaternion`](ModQuaternion.md)

Creates a quaternion using an euler angle vector3

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)

##### Parameters

• **eulerAngle**: [`ModVector3`](ModVector3.md)

##### Returns

[`ModQuaternion`](ModQuaternion.md)

##### Defined in

[quaternion.d.ts:60](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L60)

#### Create(angle, axis)

> **Create**(`angle`, `axis`): [`ModQuaternion`](ModQuaternion.md)

Creates a quaternion using an angle and an axis to rotate around

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Creating_Quaternions)

##### Parameters

• **angle**: `number`

• **axis**: [`ModVector3`](ModVector3.md)

##### Returns

[`ModQuaternion`](ModQuaternion.md)

##### Defined in

[quaternion.d.ts:67](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L67)

***

### GetEuler()

> **GetEuler**(): [`ModVector3`](ModVector3.md)

Returns a vector3 representing the euler angles of the quaternion

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[quaternion.d.ts:72](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L72)

***

### Multiply()

> **Multiply**(`otherQuaternion`): [`ModQuaternion`](ModQuaternion.md)

Multiplies two quaternions and returns the result

#### Parameters

• **otherQuaternion**: [`ModQuaternion`](ModQuaternion.md)

#### Returns

[`ModQuaternion`](ModQuaternion.md)

#### Defined in

[quaternion.d.ts:77](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L77)

***

### Slerp()

> **Slerp**(`firstQuaternion`, `secondQuaterion`, `t`): [`ModQuaternion`](ModQuaternion.md)

Returns the resulting quaternion from a slerp between two quaternions

[View documents](https://trailmakers.wiki.gg/wiki/Modding:ModQuaternion#Working_with_ModQuaternion)

#### Parameters

• **firstQuaternion**: [`ModQuaternion`](ModQuaternion.md)

• **secondQuaterion**: [`ModQuaternion`](ModQuaternion.md)

• **t**: `number`

Position in the interpolation (0=firstQuaternion, 1=secondQuaternion)

#### Returns

[`ModQuaternion`](ModQuaternion.md)

#### Defined in

[quaternion.d.ts:88](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L88)

***

### toString()

> **toString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModQuaternion`

#### Returns

`string`

#### Defined in

[quaternion.d.ts:39](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L39)

***

### ToString()

> **ToString**(): `string`

Always returns `Trailmakers.Mods.Api.Proxies.ModQuaternion`

#### Returns

`string`

#### Defined in

[quaternion.d.ts:34](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/quaternion.d.ts#L34)
