# Interface: ModApiPlayerUI

interface defining `tm.playerUI`

For adding UI to your mod

[View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI)

## Methods

### AddSubtleMessageForAllPlayers()

> **AddSubtleMessageForAllPlayers**(`header`, `message`, `duration`?, `spriteAssetName`?): `string`

Adds a subtle message for ALL players

#### Parameters

• **header**: [`PrintableValue`](../type-aliases/PrintableValue.md)

Title of the message. Only the first 32 characters will be displayed

• **message**: [`PrintableValue`](../type-aliases/PrintableValue.md)

Content of the message. Only the first 32 characters will be displayed

• **duration?**: `number`

Duration of the message in seconds. If undefined, uses a default duration

• **spriteAssetName?**: `string`

Icon of the message

#### Returns

`string`

#### Defined in

[playerui.d.ts:122](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L122)

***

### AddSubtleMessageForPlayer()

> **AddSubtleMessageForPlayer**(`playerId`, `header`, `message`, `duration`?, `spriteAssetName`?): `string`

Adds a subtle message for a specific player

#### Parameters

• **playerId**: `number`

ID of the player for which the message will be displayed

• **header**: [`PrintableValue`](../type-aliases/PrintableValue.md)

Title of the message. Only the first 32 characters will be displayed

• **message**: [`PrintableValue`](../type-aliases/PrintableValue.md)

Content of the message. Only the first 32 characters will be displayed

• **duration?**: `number`

Duration of the message in seconds. If undefined, uses a default duration

• **spriteAssetName?**: `string`

Icon of the message

#### Returns

`string`

#### Defined in

[playerui.d.ts:106](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L106)

***

### AddUIButton()

> **AddUIButton**\<`T`\>(`playerId`, `id`, `defaultValue`, `callback`, `data`): `void`

Add a button to the client's mod UI

[View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI#How_to_work_with_buttons)

#### Type Parameters

• **T**

#### Parameters

• **playerId**: `number`

Player for which the UI element will be created.

• **id**: [`UIElementID`](../type-aliases/UIElementID.md)

• **defaultValue**: [`PrintableValue`](../type-aliases/PrintableValue.md)

Text of the button

• **callback**

Function to execute when the button is pressed

• **data**: `T`

Arbitrary data passed to the callback function

#### Returns

`void`

#### Defined in

[playerui.d.ts:34](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L34)

***

### AddUILabel()

> **AddUILabel**(`playerId`, `id`, `defaultValue`): `void`

Add a label to the client's mod UI

[View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI#How_to_display_values)

#### Parameters

• **playerId**: `number`

Player for which the UI element will be created

• **id**: [`UIElementID`](../type-aliases/UIElementID.md)

• **defaultValue**: [`PrintableValue`](../type-aliases/PrintableValue.md)

Text of the label

#### Returns

`void`

#### Defined in

[playerui.d.ts:68](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L68)

***

### AddUIText()

> **AddUIText**\<`T`\>(`playerId`, `id`, `defaultValue`, `callback`, `data`): `void`

Add a text field to the client's mod UI

[View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI#How_to_work_with_buttons)

#### Type Parameters

• **T**

#### Parameters

• **playerId**: `number`

Player for which the UI element will be created.

• **id**: [`UIElementID`](../type-aliases/UIElementID.md)

• **defaultValue**: [`PrintableValue`](../type-aliases/PrintableValue.md)

Default text of the Field

• **callback**

Function to execute when the text is changed

• **data**: `T`

Arbitrary data passed to the callback function

#### Returns

`void`

#### Defined in

[playerui.d.ts:52](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L52)

***

### ClearUI()

> **ClearUI**(`playerId`): `void`

Remove all UI elements for a player

#### Parameters

• **playerId**: `number`

Player for which the UI elements will be cleared

#### Returns

`void`

#### Defined in

[playerui.d.ts:95](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L95)

***

### DeregisterMouseDownPositionCallback()

> **DeregisterMouseDownPositionCallback**(`playerId`, `callback`): `void`

Deregisters a function callback to get the world position of the cursor when left mouse button is clicked

#### Parameters

• **playerId**: `number`

• **callback**

Function to remove. The same function object must have been registered with `tm.playerUI.RegisterMouseDownPositionCallback()` first

#### Returns

`void`

#### Defined in

[playerui.d.ts:204](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L204)

***

### HideCursorWorldPosition()

> **HideCursorWorldPosition**(): `void`

hide the cursor world position in the UI

#### Returns

`void`

#### Defined in

[playerui.d.ts:217](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L217)

***

### RegisterMouseDownPositionCallback()

> **RegisterMouseDownPositionCallback**(`playerId`, `callback`): `void`

Registers a function callback to get the world position of the cursor when left mouse button is clicked

#### Parameters

• **playerId**: `number`

• **callback**

Function to execute when the button is pressed. Data is inside `UICallbackData.value` as a `string` with the form `"(x, y, z)"`

#### Returns

`void`

#### Defined in

[playerui.d.ts:193](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L193)

***

### RemoveSubtleMessageForAll()

> **RemoveSubtleMessageForAll**(`id`): `void`

Removes a subtle message for ALL players

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Defined in

[playerui.d.ts:137](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L137)

***

### RemoveSubtleMessageForPlayer()

> **RemoveSubtleMessageForPlayer**(`playerId`, `id`): `void`

Removes a subtle message for a player

#### Parameters

• **playerId**: `number`

• **id**: `string`

#### Returns

`void`

#### Defined in

[playerui.d.ts:132](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L132)

***

### RemoveUI()

> **RemoveUI**(`playerId`, `id`): `void`

Remove a UI element

#### Parameters

• **playerId**: `number`

ID of the player for which the UI element will be removed

• **id**: [`UIElementID`](../type-aliases/UIElementID.md)

#### Returns

`void`

#### Defined in

[playerui.d.ts:80](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L80)

***

### SetUIValue()

> **SetUIValue**(`playerId`, `id`, `value`): `void`

Set the value of a client's UI element

#### Parameters

• **playerId**: [`Player`](Player.md)

Player for which the UI element will be changed.

• **id**: [`UIElementID`](../type-aliases/UIElementID.md)

If `undefined`, the element will become the same as creating the element from scratch with a `nil` default value

• **value**: [`PrintableValue`](../type-aliases/PrintableValue.md)

New value of the UI element (text shown on the UI element)

#### Returns

`void`

#### Defined in

[playerui.d.ts:89](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L89)

***

### ShowCursorWorldPosition()

> **ShowCursorWorldPosition**(): `void`

Show cursor world position in the UI. The value updates automatically

#### Returns

`void`

#### Defined in

[playerui.d.ts:212](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L212)

***

### SubtleMessageUpdateHeaderForAll()

> **SubtleMessageUpdateHeaderForAll**(`id`, `newHeader`): `void`

Update the header of a subtle message for all players

#### Parameters

• **id**: `string`

• **newHeader**: [`PrintableValue`](../type-aliases/PrintableValue.md)

New title of the message. Only the first 32 characters will be displayed

#### Returns

`void`

#### Defined in

[playerui.d.ts:158](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L158)

***

### SubtleMessageUpdateHeaderForPlayer()

> **SubtleMessageUpdateHeaderForPlayer**(`playerId`, `id`, `newHeader`): `void`

Update the header of a subtle message for a player

#### Parameters

• **playerId**: `number`

• **id**: `string`

• **newHeader**: [`PrintableValue`](../type-aliases/PrintableValue.md)

New title of the message. Only the first 32 characters will be displayed

#### Returns

`void`

#### Defined in

[playerui.d.ts:146](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L146)

***

### SubtleMessageUpdateMessageForAll()

> **SubtleMessageUpdateMessageForAll**(`id`, `newMessage`): `void`

Update the message of a subtle message for all players

#### Parameters

• **id**: `string`

• **newMessage**: [`PrintableValue`](../type-aliases/PrintableValue.md)

New content of the message. Only the first 32 characters will be displayed

#### Returns

`void`

#### Defined in

[playerui.d.ts:182](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L182)

***

### SubtleMessageUpdateMessageForPlayer()

> **SubtleMessageUpdateMessageForPlayer**(`playerId`, `id`, `newMessage`): `void`

Update the message of a subtle message for a player

#### Parameters

• **playerId**: `number`

• **id**: `string`

• **newMessage**: [`PrintableValue`](../type-aliases/PrintableValue.md)

New content of the message. Only the first 32 characters will be displayed

#### Returns

`void`

#### Defined in

[playerui.d.ts:170](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/playerui.d.ts#L170)
