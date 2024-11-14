/** @noSelfInFile */
import { UICallbackData } from "./playerui";

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
