# Interface: ModVector3

A 3-axis vector (position, rotation, scale, etc.), can store 3 numbers

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3)

## Properties

### add

> **add**: `LuaAdditionMethod`\<[`ModVector3`](ModVector3.md), [`ModVector3`](ModVector3.md)\>

Vector addition

#### Defined in

[vector3.d.ts:39](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L39)

***

### div

> **div**: `LuaDivisionMethod`\<`number`, [`ModVector3`](ModVector3.md)\>

Vector-scalar division

#### Defined in

[vector3.d.ts:34](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L34)

***

### mul

> **mul**: `LuaMultiplicationMethod`\<`number`, [`ModVector3`](ModVector3.md)\>

Vector-scalar multiplication

#### Defined in

[vector3.d.ts:29](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L29)

***

### neg

> **neg**: `LuaNegationMethod`\<[`ModVector3`](ModVector3.md)\>

Vector negation

#### Defined in

[vector3.d.ts:49](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L49)

***

### sub

> **sub**: `LuaAdditionMethod`\<[`ModVector3`](ModVector3.md), [`ModVector3`](ModVector3.md)\>

Vector subtraction

#### Defined in

[vector3.d.ts:44](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L44)

***

### x

> **x**: `number`

X value of the vector

#### Defined in

[vector3.d.ts:13](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L13)

***

### y

> **y**: `number`

Y value of the vector

#### Defined in

[vector3.d.ts:18](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L18)

***

### z

> **z**: `number`

Z value of the vector

#### Defined in

[vector3.d.ts:23](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L23)

## Methods

### Angle()

> **Angle**(`vector`, `otherVector`): `number`

Calculates the angle in degrees between the vector from and another vector

#### Parameters

• **vector**: [`ModVector3`](ModVector3.md)

• **otherVector**: [`ModVector3`](ModVector3.md)

#### Returns

`number`

#### Defined in

[vector3.d.ts:195](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L195)

***

### Back()

> **Back**(): [`ModVector3`](ModVector3.md)

Creates a vector3 pointing back (0, 0, -1)

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:146](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L146)

***

### Create()

#### Create(input)

> **Create**(`input`): [`ModVector3`](ModVector3.md)

Creates a vector3 from a string. String should be formatted as "(x, y, z)". Example input: "(4.5, 6, 10.8)"

##### Parameters

• **input**: `string`

##### Returns

[`ModVector3`](ModVector3.md)

##### Defined in

[vector3.d.ts:90](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L90)

#### Create(x, y, z)

> **Create**(`x`, `y`, `z`): [`ModVector3`](ModVector3.md)

Creates a vector3 with specified values

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

##### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

##### Returns

[`ModVector3`](ModVector3.md)

##### Defined in

[vector3.d.ts:97](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L97)

#### Create()

> **Create**(): [`ModVector3`](ModVector3.md)

Creates a vector3 with values defaulted to zero

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

##### Returns

[`ModVector3`](ModVector3.md)

##### Defined in

[vector3.d.ts:104](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L104)

***

### Cross()

> **Cross**(`otherVector`): [`ModVector3`](ModVector3.md)

Returns the cross product of two vector3

#### Parameters

• **otherVector**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:176](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L176)

***

### Distance()

> **Distance**(`vector`, `otherVector`): `number`

Returns the distance between the ModVector and another vector

#### Parameters

• **vector**: [`ModVector3`](ModVector3.md)

• **otherVector**: [`ModVector3`](ModVector3.md)

#### Returns

`number`

#### Defined in

[vector3.d.ts:200](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L200)

***

### Dot()

> **Dot**(`otherVector`): `number`

Returns the dot product of two vector3

#### Parameters

• **otherVector**: [`ModVector3`](ModVector3.md)

#### Returns

`number`

#### Defined in

[vector3.d.ts:171](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L171)

***

### Down()

> **Down**(): [`ModVector3`](ModVector3.md)

Creates a vector3 pointing down (0, -1, 0)

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:132](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L132)

***

### Equals()

> **Equals**(`otherVector`): `boolean`

Returns true if both vectors are the same, false if not (can be done with `===`/`==`)

#### Parameters

• **otherVector**: [`ModVector3`](ModVector3.md)

#### Returns

`boolean`

#### Defined in

[vector3.d.ts:151](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L151)

***

### Forward()

> **Forward**(): [`ModVector3`](ModVector3.md)

Creates a vector3 pointing forward (0, 0, 1)

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:139](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L139)

***

### GetHashCode()

> **GetHashCode**(): `number`

Returns the hash code of the vector

#### Returns

`number`

#### Defined in

[vector3.d.ts:156](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L156)

***

### Left()

> **Left**(): [`ModVector3`](ModVector3.md)

Creates a vector3 pointing left (-1, 0, 0)

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:118](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L118)

***

### Lerp()

> **Lerp**(`vector`, `otherVector`, `t`): [`ModVector3`](ModVector3.md)

Linearly interpolates between two vectors

#### Parameters

• **vector**: [`ModVector3`](ModVector3.md)

• **otherVector**: [`ModVector3`](ModVector3.md)

• **t**: `number`

Position in the interpolation (0=vector, 1=otherVector)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:209](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L209)

***

### Magnitude()

> **Magnitude**(): `number`

Returns the magnitude/length

#### Returns

`number`

#### Defined in

[vector3.d.ts:181](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L181)

***

### MoveTowards()

> **MoveTowards**(`vector`, `otherVector`, `maxDistanceDelta`): [`ModVector3`](ModVector3.md)

Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta

#### Parameters

• **vector**: [`ModVector3`](ModVector3.md)

• **otherVector**: [`ModVector3`](ModVector3.md)

• **maxDistanceDelta**: `number`

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:186](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L186)

***

### op\_Addition()

> **op\_Addition**(`first`, `second`): [`ModVector3`](ModVector3.md)

Adds first and second together

#### Parameters

• **first**: [`ModVector3`](ModVector3.md)

• **second**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:59](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L59)

***

### op\_Division()

> **op\_Division**(`vector3`, `divisor`): [`ModVector3`](ModVector3.md)

Divides the vector by the divisor

#### Parameters

• **vector3**: [`ModVector3`](ModVector3.md)

• **divisor**: `number`

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:74](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L74)

***

### op\_Equality()

> **op\_Equality**(`first`, `second`): `boolean`

Returns true if both vectors are the same, false if not (can be done with the normal `===`/`==`)

#### Parameters

• **first**: [`ModVector3`](ModVector3.md)

• **second**: [`ModVector3`](ModVector3.md)

#### Returns

`boolean`

#### Defined in

[vector3.d.ts:79](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L79)

***

### op\_Inequality()

> **op\_Inequality**(`first`, `second`): `boolean`

Returns true if both vectors are not the same, false if they are (can be done with `!==`/`!=`)

#### Parameters

• **first**: [`ModVector3`](ModVector3.md)

• **second**: [`ModVector3`](ModVector3.md)

#### Returns

`boolean`

#### Defined in

[vector3.d.ts:84](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L84)

***

### op\_Multiply()

> **op\_Multiply**(`vector3`, `scalar`): [`ModVector3`](ModVector3.md)

Multiplies the vector by the scalar

#### Parameters

• **vector3**: [`ModVector3`](ModVector3.md)

• **scalar**: `number`

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:69](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L69)

***

### op\_Subtraction()

> **op\_Subtraction**(`first`, `second`): [`ModVector3`](ModVector3.md)

Subtracts second from first

#### Parameters

• **first**: [`ModVector3`](ModVector3.md)

• **second**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:64](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L64)

***

### op\_UnaryNegation()

> **op\_UnaryNegation**(`vector3`): [`ModVector3`](ModVector3.md)

Flips all the signs

#### Parameters

• **vector3**: [`ModVector3`](ModVector3.md)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:54](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L54)

***

### Right()

> **Right**(): [`ModVector3`](ModVector3.md)

Creates a vector3 pointing right (1, 0, 0)

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:111](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L111)

***

### toString()

> **toString**(): `string`

Returns a formatted string of a vector in the form `(x, y, z)`

#### Returns

`string`

#### Defined in

[vector3.d.ts:166](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L166)

***

### ToString()

> **ToString**(): `string`

Returns a formatted string of a vector in the form `(x, y, z)`

#### Returns

`string`

#### Defined in

[vector3.d.ts:161](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L161)

***

### Up()

> **Up**(): [`ModVector3`](ModVector3.md)

Creates a vector3 pointing up (0, 1, 0)

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218595371/ModVector3#Creating-ModVector3)

#### Returns

[`ModVector3`](ModVector3.md)

#### Defined in

[vector3.d.ts:125](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/vector3.d.ts#L125)
