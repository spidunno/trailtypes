# Interface: ModApiWorld

interface defining `tm.world`

Represents the current world

## Methods

### GetTimeOfDay()

> **GetTimeOfDay**(): `number`

Get time of day (0-100)

#### Returns

`number`

#### Defined in

[world.d.ts:17](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/world.d.ts#L17)

***

### IsTimeOfDayPaused()

> **IsTimeOfDayPaused**(): `boolean`

Returns if the time of day is currently paused

#### Returns

`boolean`

#### Defined in

[world.d.ts:32](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/world.d.ts#L32)

***

### SetCycleDurationTimeOfDay()

> **SetCycleDurationTimeOfDay**(`duration`): `void`

Set the cycle duration (seconds how fast a day goes by) for time of day

#### Parameters

• **duration**: `number`

#### Returns

`void`

#### Defined in

[world.d.ts:27](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/world.d.ts#L27)

***

### SetPausedTimeOfDay()

> **SetPausedTimeOfDay**(`isPaused`): `void`

Set if time of day should be paused or not

#### Parameters

• **isPaused**: `boolean`

#### Returns

`void`

#### Defined in

[world.d.ts:22](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/world.d.ts#L22)

***

### SetTimeOfDay()

> **SetTimeOfDay**(`percentage`): `void`

Set time of day (0-100). No effect if time is paused

#### Parameters

• **percentage**: `number`

#### Returns

`void`

#### Defined in

[world.d.ts:12](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/world.d.ts#L12)
