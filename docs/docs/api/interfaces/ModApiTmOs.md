# Interface: ModApiTmOs

interface defining `tm.os`

OS-level functionality. Everything to do with files and general mod systems

## Methods

### DoFile()

> **DoFile**(`filename`): `unknown`

Higher-level function to load and run chunk of code from specified filename. Equivalent to the native 'dofile' function in Lua. The file must be directly inside the `data_static folder`, subfolders aren't supported

#### Parameters

• **filename**: `string`

Name of the file without the `.lua` extension

#### Returns

`unknown`

Whatever the file returned when executed as a module

#### Defined in

[os.d.ts:16](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L16)

***

### GetModDeltaTime()

> **GetModDeltaTime**(): `number`

Get the time since the last update

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)

#### Returns

`number`

#### Defined in

[os.d.ts:72](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L72)

***

### GetModTargetDeltaTime()

> **GetModTargetDeltaTime**(): `number`

Returns the target delta time for the mod

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)

#### Returns

`number`

#### Defined in

[os.d.ts:86](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L86)

***

### GetRealtimeSinceStartup()

> **GetRealtimeSinceStartup**(): `number`

Get time game has been playing in seconds. Updates within a single mod update cycle

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)

#### Returns

`number`

#### Defined in

[os.d.ts:65](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L65)

***

### GetTime()

> **GetTime**(): `number`

Get time game has been playing in seconds. Equivalent to `UnityEngine.Time.time`. Doesn't update within a single mod update cycle

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)

#### Returns

`number`

#### Defined in

[os.d.ts:58](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L58)

***

### Log()

> **Log**(`message`): `void`

Emit a log message

#### Parameters

• **message**: [`PrintableValue`](../type-aliases/PrintableValue.md)

#### Returns

`void`

#### See

[PrintableValue](../type-aliases/PrintableValue.md) type

#### Defined in

[os.d.ts:51](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L51)

***

### ReadAllText\_Dynamic()

> **ReadAllText\_Dynamic**(`path`): `string`

Read all text of a file in the mods dynamic data directory. Files in the dynamic data directory can be both read and written to. The dynamic data directory will NOT be uploaded to the steam workshop when you upload your mod. When a mod is run through the steam workshop, the dynamic data, unlike static data, is not located in the steam workshop directory but is located in the steam user data directory instead

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Files)

#### Parameters

• **path**: `string`

#### Returns

`string`

Content of the file

#### Defined in

[os.d.ts:34](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L34)

***

### ReadAllText\_Static()

> **ReadAllText\_Static**(`path`): `string`

Read all text of a file in the mods static data directory. Files in the static data directory can only be read and NOT written to

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Files)

#### Parameters

• **path**: `string`

Relative file path

#### Returns

`string`

Contents of the file

#### Defined in

[os.d.ts:25](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L25)

***

### SetModTargetDeltaTime()

> **SetModTargetDeltaTime**(`targetDeltaTime`): `void`

Determines how often the mod gets updated. `1/60` means 60 times per second. Can't update faster than the game (maximum is 60 times per second)

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)

#### Parameters

• **targetDeltaTime**: `number`

#### Returns

`void`

#### Defined in

[os.d.ts:79](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L79)

***

### WriteAllText\_Dynamic()

> **WriteAllText\_Dynamic**(`path`, `stringToWrite`): `void`

Create or overwrite a file in the mods dynamic data directory. Files in the dynamic data directory can be both read and written to. The dynamic data directory will NOT be uploaded to the steam workshop when you upload your mod. When a mod is run through the steam workshop, the dynamic data, unlike static data, is not located in the steam workshop directory, but is located in the steam user data directory instead

[View documents](https://trailmakers.wiki.gg/wiki/Modding:Files)

#### Parameters

• **path**: `string`

Relative file path

• **stringToWrite**: `string`

Data to write in the file

#### Returns

`void`

#### Defined in

[os.d.ts:43](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/os.d.ts#L43)
