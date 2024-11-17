# Interface: ModApiInput

interface defining `tm.input`

Lets you trigger functions on key press/release by players

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267762/Input)

## Methods

### RegisterFunctionToKeyDownCallback()

> **RegisterFunctionToKeyDownCallback**(`playerId`, `functionName`, `keyName`): `void`

Registers a function to the callback of when the given player presses the given key

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267762/Input)

#### Parameters

• **playerId**: `number`

Player for which the function will be registered

• **functionName**: `string`

Name of the function to register. Must be in the global scope. This function will be executed with the `PlayerID` of the player who triggered it as its only parameter

• **keyName**: [`InputKey`](../type-aliases/InputKey.md)

Name of the key to use

#### Returns

`void`

#### Defined in

[input.d.ts:20](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/input.d.ts#L20)

***

### RegisterFunctionToKeyUpCallback()

> **RegisterFunctionToKeyUpCallback**(`playerId`, `functionName`, `keyName`): `void`

Registers a function to the callback of when the given player releases the given key

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267762/Input)

#### Parameters

• **playerId**: `number`

Player for which the function will be registered

• **functionName**: `string`

Name of the function to register. Must be in the global scope. This function will be executed with the `PlayerID` of the player who triggered it as its only parameter

• **keyName**: [`InputKey`](../type-aliases/InputKey.md)

Name of the key to use

#### Returns

`void`

#### Defined in

[input.d.ts:34](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/input.d.ts#L34)
