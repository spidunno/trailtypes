/** @noSelfInFile */
import { ModBlock } from "./ModBlock";
import { ModColor } from "./ModColor";
import { ModGameObject } from "./ModGameObject";
import { ModRaycastHit } from "./ModRaycastHit";
import { ModStructure } from "./ModStructure";
import { ModTransform } from "./ModTransform";
import { UICallbackData } from "./playerui";
import { ModQuaternion } from "./quaternion";
import { ModVector3 } from "./vector3";

/**
 * Types which can be implicitly converted to a string for logging/displaying on the UI. API types are converted using their `.ToString()` method. If `undefined`, the empty string is used
 */
export type PrintableValue =
	| string
	| number
	| boolean
	| ModVector3
	| ModQuaternion
	| ModGameObject
	| ModTransform
	| ModStructure
	| ModBlock
	| ModRaycastHit
	| ModColor
	| UICallbackData<any>
	| undefined;
