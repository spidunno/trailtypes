/** @noSelfInFile */
import { PlayerID } from "./players";

/**
 * interface defining `tm.input`
 *
 * Lets you trigger functions on key press/release by players
 *
 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267762/Input)
 */
export interface ModApiInput {
	/**
	 * Registers a function to the callback of when the given player presses the given key
	 *
	 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267762/Input)
	 * @param playerId Player for which the function will be registered
	 * @param functionName Name of the function to register. Must be in the global scope. This function will be executed with the `PlayerID` of the player who triggered it as its only parameter
	 * @param keyName Name of the key to use
	 */
	RegisterFunctionToKeyDownCallback(
		playerId: PlayerID,
		functionName: string,
		keyName: InputKey
	): void;

	/**
	 * Registers a function to the callback of when the given player releases the given key
	 *
	 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267762/Input)
	 * @param playerId Player for which the function will be registered
	 * @param functionName Name of the function to register. Must be in the global scope. This function will be executed with the `PlayerID` of the player who triggered it as its only parameter
	 * @param keyName Name of the key to use
	 */
	RegisterFunctionToKeyUpCallback(
		playerId: PlayerID,
		functionName: string,
		keyName: InputKey
	): void;
}

export type InputKey =
	| "`"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "0"
	| "-"
	| "="
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z"
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z"
	| "["
	| "]"
	| ";"
	| "'"
	| "\\"
	| ","
	| "."
	| "/"
	| "backspace"
	| "tab"
	| "enter"
	| "left shift"
	| "right shift"
	| "left control"
	| "left alt"
	| "space"
	| "right alt"
	| "right control"
	| "insert"
	| "home"
	| "page up"
	| "delete"
	| "end"
	| "page down"
	| "up"
	| "down"
	| "left"
	| "right"
	| "numlock"
	| "[/]"
	| "[*]"
	| "[-]"
	| "[+]"
	| "[enter]"
	| "[,]"
	| "[1]"
	| "[2]"
	| "[3]"
	| "[4]"
	| "[5]"
	| "[6]"
	| "[7]"
	| "[8]"
	| "[9]"
	| "[0]";
