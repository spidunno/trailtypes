/** @noSelfInFile */
export {};

declare global {
	/**
	 * interface defining `tm.world`
	 *
	 * Represents the current world
	 * 
	 * @notExported
	 */
	interface ModApiWorld {
		/**
		 * Set time of day (0-100). No effect if time is paused
		 */
		SetTimeOfDay(percentage: number): void;

		/**
		 * Get time of day (0-100)
		 */
		GetTimeOfDay(): number;

		/**
		 * Set if time of day should be paused or not
		 */
		SetPausedTimeOfDay(isPaused: boolean): void;

		/**
		 * Set the cycle duration (seconds how fast a day goes by) for time of day
		 */
		SetCycleDurationTimeOfDay(duration: number): void;

		/**
		 * Returns if the time of day is currently paused
		 */
		IsTimeOfDayPaused(): boolean;
	}
}
