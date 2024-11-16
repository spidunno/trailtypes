/** @noSelfInFile */
import type { PrintableValue } from "./utilTypes";

declare global {
	/**
	 * interface defining `tm.os`
	 *
	 * OS-level functionality. Everything to do with files and general mod systems
	 * 
	 * @notExported
	 */
	interface ModApiTmOs {
		/**
		 * Higher-level function to load and run chunk of code from specified filename. Equivalent to the native 'dofile' function in Lua. The file must be directly inside the `data_static folder`, subfolders aren't supported
		 *
		 * @param filename Name of the file without the `.lua` extension
		 * @returns Whatever the file returned when executed as a module
		 */
		DoFile(filename: string): unknown;

		/**
		 * Read all text of a file in the mods static data directory. Files in the static data directory can only be read and NOT written to
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Files)
		 * @param path Relative file path
		 * @return Contents of the file
		 */
		ReadAllText_Static(path: string): string;

		/**
		 * Read all text of a file in the mods dynamic data directory. Files in the dynamic data directory can be both read and written to. The dynamic data directory will NOT be uploaded to the steam workshop when you upload your mod. When a mod is run through the steam workshop, the dynamic data, unlike static data, is not located in the steam workshop directory but is located in the steam user data directory instead
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Files)
		 * @param path
		 * @return Content of the file
		 */
		ReadAllText_Dynamic(path: string): string;

		/**
		 * Create or overwrite a file in the mods dynamic data directory. Files in the dynamic data directory can be both read and written to. The dynamic data directory will NOT be uploaded to the steam workshop when you upload your mod. When a mod is run through the steam workshop, the dynamic data, unlike static data, is not located in the steam workshop directory, but is located in the steam user data directory instead
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Files)
		 * @param path Relative file path
		 * @param stringToWrite Data to write in the file
		 */
		WriteAllText_Dynamic(path: string, stringToWrite: string): void;

		/**
		 * Emit a log message
		 *
		 * @param message
		 * @see {@link PrintableValue} type
		 */
		Log(message: PrintableValue): void;

		/**
		 * Get time game has been playing in seconds. Equivalent to `UnityEngine.Time.time`. Doesn't update within a single mod update cycle
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)
		 */
		GetTime(): number;

		/**
		 * Get time game has been playing in seconds. Updates within a single mod update cycle
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)
		 */
		GetRealtimeSinceStartup(): number;

		/**
		 * Get the time since the last update
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)
		 */
		GetModDeltaTime(): number;

		/**
		 * Determines how often the mod gets updated. `1/60` means 60 times per second. Can't update faster than the game (maximum is 60 times per second)
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)
		 */
		SetModTargetDeltaTime(targetDeltaTime: number): void;

		/**
		 * Returns the target delta time for the mod
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Game_Loop_and_Tick)
		 */
		GetModTargetDeltaTime(): number;
	}
}
