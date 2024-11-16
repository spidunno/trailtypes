/** @noSelfInFile */
import { TextureName } from "./physics";
import type { PlayerID } from "./players";
import type { PrintableValue } from "./utilTypes";

/**
 * ID of a UI element
 */
export type UIElementID = string | number | boolean;

/**
 * ID of a subtle message, only exists for the players for which the subtle message was created and is different for each one
 */
export type SubtleMessageID = string;

declare global {
	/**
	 * interface defining `tm.playerUI`
	 *
	 * For adding UI to your mod
	 *
	 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI)
	 * 
	 * @notExported
	 */
	interface ModApiPlayerUI {
		/**
		 * Add a button to the client's mod UI
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI#How_to_work_with_buttons)
		 * @param playerId Player for which the UI element will be created.
		 * @param id
		 * @param defaultValue Text of the button
		 * @param callback Function to execute when the button is pressed
		 * @param data Arbitrary data passed to the callback function
		 */
		AddUIButton<T>(
			playerId: PlayerID,
			id: UIElementID,
			defaultValue: PrintableValue,
			callback: (data: UICallbackData<T>) => void,
			data: T
		): void;

		/**
		 * Add a text field to the client's mod UI
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI#How_to_work_with_buttons)
		 * @param playerId Player for which the UI element will be created.
		 * @param id
		 * @param defaultValue Default text of the Field
		 * @param callback Function to execute when the text is changed
		 * @param data Arbitrary data passed to the callback function
		 */
		AddUIText<T>(
			playerId: PlayerID,
			id: UIElementID,
			defaultValue: PrintableValue,
			callback: (data: UICallbackData<T>) => void,
			data: T
		): void;

		/**
		 * Add a label to the client's mod UI
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:PlayerUI#How_to_display_values)
		 * @param playerId Player for which the UI element will be created
		 * @param id
		 * @param defaultValue Text of the label
		 */
		AddUILabel(
			playerId: PlayerID,
			id: UIElementID,
			defaultValue: PrintableValue
		): void;

		/**
		 * Remove a UI element
		 *
		 * @param playerId ID of the player for which the UI element will be removed
		 * @param id
		 */
		RemoveUI(playerId: PlayerID, id: UIElementID): void;

		/**
		 * Set the value of a client's UI element
		 *
		 * @param playerId Player for which the UI element will be changed.
		 * @param id If `undefined`, the element will become the same as creating the element from scratch with a `nil` default value
		 * @param value New value of the UI element (text shown on the UI element)
		 */
		SetUIValue(playerId: Player, id: UIElementID, value: PrintableValue): void;

		/**
		 * Remove all UI elements for a player
		 * @param playerId Player for which the UI elements will be cleared
		 */
		ClearUI(playerId: PlayerID): void;

		/**
		 * Adds a subtle message for a specific player
		 *
		 * @param playerId ID of the player for which the message will be displayed
		 * @param header Title of the message. Only the first 32 characters will be displayed
		 * @param message Content of the message. Only the first 32 characters will be displayed
		 * @param duration Duration of the message in seconds. If undefined, uses a default duration
		 * @param spriteAssetName Icon of the message
		 */
		AddSubtleMessageForPlayer(
			playerId: PlayerID,
			header: PrintableValue,
			message: PrintableValue,
			duration?: number,
			spriteAssetName?: TextureName
		): SubtleMessageID;

		/**
		 * Adds a subtle message for ALL players
		 *
		 * @param header Title of the message. Only the first 32 characters will be displayed
		 * @param message Content of the message. Only the first 32 characters will be displayed
		 * @param duration Duration of the message in seconds. If undefined, uses a default duration
		 * @param spriteAssetName Icon of the message
		 */
		AddSubtleMessageForAllPlayers(
			header: PrintableValue,
			message: PrintableValue,
			duration?: number,
			spriteAssetName?: TextureName
		): SubtleMessageID;

		/**
		 * Removes a subtle message for a player
		 */
		RemoveSubtleMessageForPlayer(playerId: PlayerID, id: SubtleMessageID): void;

		/**
		 * Removes a subtle message for ALL players
		 */
		RemoveSubtleMessageForAll(id: SubtleMessageID): void;

		/**
		 * Update the header of a subtle message for a player
		 *
		 * @param playerId
		 * @param id
		 * @param newHeader New title of the message. Only the first 32 characters will be displayed
		 */
		SubtleMessageUpdateHeaderForPlayer(
			playerId: PlayerID,
			id: SubtleMessageID,
			newHeader: PrintableValue
		): void;

		/**
		 * Update the header of a subtle message for all players
		 *
		 * @param id
		 * @param newHeader New title of the message. Only the first 32 characters will be displayed
		 */
		SubtleMessageUpdateHeaderForAll(
			id: SubtleMessageID,
			newHeader: PrintableValue
		): void;

		/**
		 * Update the message of a subtle message for a player
		 *
		 * @param playerId
		 * @param id
		 * @param newMessage New content of the message. Only the first 32 characters will be displayed
		 */
		SubtleMessageUpdateMessageForPlayer(
			playerId: PlayerID,
			id: SubtleMessageID,
			newMessage: PrintableValue
		): void;

		/**
		 * Update the message of a subtle message for all players
		 *
		 * @param id
		 * @param newMessage New content of the message. Only the first 32 characters will be displayed
		 */
		SubtleMessageUpdateMessageForAll(
			id: SubtleMessageID,
			newMessage: PrintableValue
		): void;

		/**
		 * Registers a function callback to get the world position of the cursor when left mouse button is clicked
		 *
		 * @param playerId
		 * @param callback Function to execute when the button is pressed. Data is inside `UICallbackData.value` as a `string` with the form `"(x, y, z)"`
		 */
		RegisterMouseDownPositionCallback(
			playerId: PlayerID,
			callback: (data: UICallbackData<void>) => void
		): void;

		/**
		 * Deregisters a function callback to get the world position of the cursor when left mouse button is clicked
		 *
		 * @param playerId
		 * @param callback Function to remove. The same function object must have been registered with `tm.playerUI.RegisterMouseDownPositionCallback()` first
		 */
		DeregisterMouseDownPositionCallback(
			playerId: PlayerID,
			callback: (data: UICallbackData<void>) => void
		): void;

		/**
		 * Show cursor world position in the UI. The value updates automatically
		 */
		ShowCursorWorldPosition(): void;

		/**
		 * hide the cursor world position in the UI
		 */
		HideCursorWorldPosition(): void;
	}
}

export interface UICallbackData<T> {
	/**
	 * Gives you the player that interacted with the element.
	 */
	playerId: PlayerID;

	/**
	 * Gives you the ID of the interacted element.
	 */
	id: UIElementID;

	/**
	 * Gives you the type of the interacted element
	 */
	type: string;

	/**
	 * Gives you the value of the interacted element (text shown for text fields, and a string representation of a vector that can be parsed with `tm.vector3.Create()` for mouse position callbacks)
	 */
	value: string;

	data: T;

	/**
	 * Always returns `Trailmakers.Mods.Api.ModApiPlayerUI+UICallbackData`
	 */
	ToString(): string;

	/**
	 * Always returns `Trailmakers.Mods.Api.ModApiPlayerUI+UICallbackData`
	 */
	toString(): string;
}
