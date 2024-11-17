# Interface: ModApiAudio

interface defining `tm.audio`

Lets you play audio and effect audio

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/219185167/Audio)

## Methods

### GetAudioNames()

> **GetAudioNames**(): `string`[]

Returns a list of all playable audio names

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/219185167/Audio#List-of-Audio-Event-names)

#### Returns

`string`[]

#### Defined in

[audio.d.ts:50](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/audio.d.ts#L50)

***

### PlayAudioAtGameobject()

> **PlayAudioAtGameobject**(`audioName`, `modGameObject`): `void`

Play audio on a GameObject

#### Parameters

• **audioName**: [`AudioName`](../type-aliases/AudioName.md)

Name of the audio to play

• **modGameObject**: [`ModGameObject`](ModGameObject.md)

GameObject on which the audio should be played

#### Returns

`void`

#### Defined in

[audio.d.ts:35](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/audio.d.ts#L35)

***

### PlayAudioAtPosition()

> **PlayAudioAtPosition**(`audioName`, `position`, `keepObjectDuration`): `void`

Play audio at a position. This is more cost friendly but you can not stop or move the sound

[View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/219185167/Audio#Example---Play-an-explosion-sound-at-players-position-every-second)

#### Parameters

• **audioName**: [`AudioName`](../type-aliases/AudioName.md)

Name of the audio to play

• **position**: [`ModVector3`](ModVector3.md)

Position of the audio

• **keepObjectDuration**: `number`

Duration of the audio

#### Returns

`void`

#### Defined in

[audio.d.ts:23](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/audio.d.ts#L23)

***

### StopAllAudioAtGameobject()

> **StopAllAudioAtGameobject**(`modGameObject`): `void`

Stops all audio on a GameObject

#### Parameters

• **modGameObject**: [`ModGameObject`](ModGameObject.md)

#### Returns

`void`

#### Defined in

[audio.d.ts:43](https://github.com/trailtypes/trailtypes/blob/d937f1d958c278d7992fcdc0bff4efed599850d4/types/audio.d.ts#L43)
