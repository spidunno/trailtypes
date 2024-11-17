# Type Alias: PrintableValue

> **PrintableValue**: `string` \| `number` \| `boolean` \| [`ModVector3`](../interfaces/ModVector3.md) \| [`ModQuaternion`](../interfaces/ModQuaternion.md) \| [`ModGameObject`](../interfaces/ModGameObject.md) \| [`ModTransform`](../interfaces/ModTransform.md) \| [`ModStructure`](../interfaces/ModStructure.md) \| [`ModBlock`](../interfaces/ModBlock.md) \| [`ModRaycastHit`](../interfaces/ModRaycastHit.md) \| [`ModColor`](../interfaces/ModColor.md) \| [`UICallbackData`](../interfaces/UICallbackData.md)\<`any`\> \| `undefined`

Types which can be implicitly converted to a string for logging/displaying on the UI. API types are converted using their `.ToString()` method. If `undefined`, the empty string is used

## Defined in

[utilTypes.d.ts:15](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/utilTypes.d.ts#L15)
