/*
	In the Trailmakers modding API, the update function is
	a global function you define that runs every tick.
	If you define that function with a simple function
	definition, it wouldn't work since that would go against
	how JS (and by extension TS) modules work. All function
	definitions are local by default.
	Therefore we have to define it by overwriting globalThis.update.

	It feels slightly annoying at first, but it actually
	prevents certain classes of bugs where you might
	accidentally define the update function twice.
*/
globalThis.update = function update() {
	
	// |----- Try hovering over this in your editor!
	// v
	tm.os.Log("Hello, world!");
}

// Add a . after this and enjoy the autocomplete!
tm