# Interface: UICallbackData\<T\>

## Type Parameters

• **T**

## Properties

### data

> **data**: `T`

#### Defined in

[playerui.d.ts:241](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L241)

***

### id

> **id**: [`UIElementID`](../type-aliases/UIElementID.md)

Gives you the ID of the interacted element.

#### Defined in

[playerui.d.ts:229](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L229)

***

### playerId

> **playerId**: `number`

Gives you the player that interacted with the element.

#### Defined in

[playerui.d.ts:224](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L224)

***

### type

> **type**: `string`

Gives you the type of the interacted element

#### Defined in

[playerui.d.ts:234](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L234)

***

### value

> **value**: `string`

Gives you the value of the interacted element (text shown for text fields, and a string representation of a vector that can be parsed with `tm.vector3.Create()` for mouse position callbacks)

#### Defined in

[playerui.d.ts:239](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L239)

## Methods

### toString()

> **toString**(): `string`

Always returns `Trailmakers.Mods.Api.ModApiPlayerUI+UICallbackData`

#### Returns

`string`

#### Defined in

[playerui.d.ts:251](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L251)

***

### ToString()

> **ToString**(): `string`

Always returns `Trailmakers.Mods.Api.ModApiPlayerUI+UICallbackData`

#### Returns

`string`

#### Defined in

[playerui.d.ts:246](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L246)
