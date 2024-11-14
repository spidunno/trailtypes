/** @noSelfInFile */
export type {};

declare global {
	/**
	 * interface defining `tm.physics`
	 *
	 * Everything that can effect physics, like gravity, spawning objects, and importing meshes. Environment, Physics, Time, Assets and Objects
	 *
	 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218169403/Physics)
	 */
	interface ModApiPhysics {
		/**
		 * Set the physics timescale relative to the default speed (acts as a multiplier of the normal time speed)
		 */
		SetTimeScale(speed: number): void;

		/**
		 * Get the physics timescale relative to the default speed (acts as a multiplier of the normal time speed)
		 */
		GetTimeScale(): number;

		/**
		 * Set the physics gravity in the down direction. Units are `m/s²`, default is `14 m/s²`
		 *
		 * @deprecated USE `.SetGravityMultiplier()` INSTEAD
		 */
		SetGravity(strength: number): void;

		/**
		 * Set the gravity multiplier. Has no effect in zero G locations. For example, setting the multiplier to 2 doubles gravity
		 */
		SetGravityMultiplier(multiplier: number): void;

		/**
		 * Set the physics gravity as per the provided vector. Units are `m/s²`, default is `(0, -14, 0) m/s²`
		 *
		 * @deprecated FUNCTIONALITY MIGHT NOT WORK AS INTENDED
		 */
		SetGravity(gravity: ModVector3): void;

		/**
		 * Get the physics gravity. Units are `m/s²`, default is `(0, 14, 0) m/s²`
		 *
		 * @deprecated FUNCTIONALITY MIGHT NOT WORK AS INTENDED
		 */
		GetGravity(): ModVector3;

		/**
		 * Get the gravity multiplier
		 */
		GetGravityMultiplier(): number;

		/**
		 * Spawn a spawnable, e.g. PFB_Barrel, at the position
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:ModGameObject#Example_-_Spawning_a_built-in_object)
		 * @param position Position of the object
		 * @param name Name of the object. Can only be a default asset name (from the list returned by `tm.physics.SpawnableNames()`)
		 */
		SpawnObject(position: ModVector3, name: Spawnable): ModGameObject;

		/**
		 * Despawn all objects spawned by this mod
		 */
		ClearAllSpawns(): void;

		/**
		 * Despawn a spawnable, e.g. PFB_Barrel. Same as `gameObject.Despawn()`
		 */
		DespawnObject(gameObject: ModGameObject): void;

		/**
		 * Get a list of all possible spawnable object names
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267747/Spawnables)
		 *
		 * TODO: MAKE SURE THE `Spawnable`/`Spawnables` TYPE IS UP TO DATE.
		 */
		SpawnableNames(): Spawnables;

		/**
		 * Resets the physics timescale
		 */
		RemoveTimeScale(): void;

		/**
		 * Add a mesh to all clients, note this mesh will have to be sent to the client when they join (handled automatically)
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Custom_Assets)
		 * @param filename The name of the mesh in the mod files (Must use the `.obj` format)
		 * @param resourceName The name that the mesh will use.
		 */
		AddMesh(filename: string, resourceName: MeshName): void;

		/**
		 * Add a texture to all clients, note this texture will have to be sent to the client when they join (handled automatically)
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Custom_Assets)
		 * @param filename The name of the texture in the mod files (Must use the `.png` or `.jpg` format)
		 * @param resourceName The name that the texture will use.
		 */
		AddTexture(filename: string, resourceName: TextureName): void;

		/**
		 * Spawn a custom physics object
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Custom_Assets)
		 * @param position The position to spawn the object at
		 * @param meshName The name of the mesh that the object will use
		 * @param textureName The name of the texture that the object will use
		 * @param isKinematic Whether the object will be affected by physics or not
		 * @param mass The mass of the object. Units are `5kg`
		 * @return Game object spawned
		 */
		SpawnCustomObjectRigidbody(
			position: ModVector3,
			meshName: MeshName,
			textureName: TextureName,
			isKinematic: boolean,
			mass: number
		): ModGameObject;

		/**
		 * Spawn a custom object
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Custom_Assets)
		 * @param position The position to spawn the object at
		 * @param meshName The name of the mesh that the object will use
		 * @param textureName TextureName The name of the texture that the object will use
		 *
		 * @return Game object spawned
		 */
		SpawnCustomObject(
			position: ModVector3,
			meshName: MeshName,
			textureName: TextureName
		): ModGameObject;

		/**
		 * Spawn a custom object with concave collision support
		 *
		 * [View documents](https://trailmakers.wiki.gg/wiki/Modding:Custom_Assets)
		 * @param position The position to spawn the object at
		 * @param meshName The name of the mesh that the object will use
		 * @param textureName The name of the texture that the object will use
		 * @return Game object spawned
		 */
		SpawnCustomObjectConcave(
			position: ModVector3,
			meshName: MeshName,
			textureName: TextureName
		): ModGameObject;

		/**
		 * Spawn a box trigger that will detect overlap but will not interact with physics
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218267704/ModGameObject#Example---Spawning-a-trigger)
		 * @param position The position to spawn the Box Trigger at
		 * @param size The Box Trigger' size
		 * @return Game object spawned
		 */
		SpawnBoxTrigger(position: ModVector3, size: ModVector3): ModGameObject;

		/**
		 * Sets the build complexity value. Default value is `700` and values above it can make the game unstable
		 */
		SetBuildComplexity(value: number): void;

		/**
		 * Registers a function to the collision enter callback of a game object
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218169403/Physics#Collision-Callbacks)
		 * @param targetObject Object for which the callback will be registered
		 * @param functionName Name of the function to register. Must be in the global scope. This function will be executed with the `PlayerID` of the player who triggered it as its only parameter
		 *
		 */
		RegisterFunctionToCollisionEnterCallback(
			targetObject: ModGameObject,
			functionName: string
		): void;

		/**
		 * Registers a function to the collision exit callback of a game object
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218169403/Physics#Collision-Callbacks)
		 * @param targetObject Object for which the callback will be registered
		 * @param functionName Name of the function to register. Must be in the global scope. This function will be executed with the `PlayerID` of the player who triggered it as its only parameter
		 *
		 */
		RegisterFunctionToCollisionExitCallback(
			targetObject: ModGameObject,
			functionName: string
		): void;

		/**
		 * Returns a bool if raycast hit something. Hit argument gets overwritten with raycast data
		 *
		 * [View documents](https://flashbulb.atlassian.net/wiki/spaces/TMMOD/pages/218169403/Physics#Raycast)
		 * @param origin Origin of the raycast
		 * @param direction Direction of the raycast in euler angles
		 * @param hitPositionOut Reference to the vector in which the hit position will be stored (only modified if the raycast hit an object)
		 * @param maxDistance Max distance from the origin to check for hits. If undefined, the distance is infinite
		 * @param ignoreTriggers Whether to ignore tgrigger objects
		 *
		 * @returns Whether an object has been hit
		 */
		Raycast(
			origin: ModVector3,
			direction: ModVector3,
			hitPositionOut: ModVector3,
			maxDistance?: number,
			ignoreTriggers?: boolean
		): boolean;

		/**
		 * Casts a ray with the specific settings and returns a `ModRaycastHit`
		 *
		 * @param origin Origin of the raycast
		 * @param direction Direction of the raycast in euler angles
		 * @param maxDistance Max distance from the origin to check for hits
		 * @param ignoreTriggers Whether to ignore trigger objects
		 */
		RaycastData(
			origin: ModVector3,
			direction: ModVector3,
			maxDistance: number,
			ignoreTriggers?: boolean
		): ModRaycastHit;

		/**
		 * Returns the internal name for the current map
		 */
		GetMapName(): string;

		/**
		 * Returns the wind velocity at a position
		 */
		GetWindVelocityAtPosition(position: ModVector3): ModVector3;
	}
}

export type MeshName = string;
export type TextureName = string;

// TODO: MAKE SURE THE `Spawnable`/`Spawnables` TYPE IS UP TO DATE.
export type Spawnables = [
	"PFB_SpikyCanyon_1",
	"PFB_PlateCanyon_01",
	"PFB_CharredBush",
	"PFB_CharredStump",
	"PFB_CharredTree",
	"PFB_CharredTree2",
	"PFB_GoldNugget_Small",
	"PFB_NuggetThief",
	"PFB_Runner",
	"PFB_Runner-Monkey",
	"PFB_Whale",
	"PFB_PoisonCloud_Explosion",
	"PFB_KungfuFlaglol",
	"PFB_Cliff_Bottom_Desert",
	"PFB_Cliff_Bottom_Desert_Grass",
	"PFB_Cliff_Bottom_Mud",
	"PFB_Cliff_Bottom_Mud_Grass",
	"PFB_Cliff_Med_Desert",
	"PFB_Cliff_Med_Desert_Grass",
	"PFB_Cliff_Med_Mud",
	"PFB_Cliff_Med_Mud_Grass",
	"PFB_Cliff_Top_Desert",
	"PFB_Cliff_Top_Desert_Grass",
	"PFB_Cliff_Top_Desert_Trees",
	"PFB_Cliff_Top_Mud",
	"PFB_Cliff_Top_Mud_Grass",
	"PFB_Cliff_Top_Mud_Trees",
	"PFB_Rock_Detail_Bush",
	"PFB_Rock_Detail_Med_Desert_00",
	"PFB_Rock_Detail_Med_Desert_00_Grass",
	"PFB_Rock_Detail_Med_Desert_01",
	"PFB_Rock_Detail_Med_Desert_01_Grass",
	"PFB_Rock_Detail_Med_Mud_00",
	"PFB_Rock_Detail_Med_Mud_00_Grass",
	"PFB_Rock_Detail_Med_Mud_01",
	"PFB_Rock_Detail_Med_Mud_01_Grass",
	"PFB_Rock_Detail_Med_Mud_01Test",
	"PFB_Rock_Detail_Top_Desert",
	"PFB_Rock_Detail_Top_Mud",
	"PFB_Rock_Detail_Top_Mud1",
	"PFB_Rock_Desert_Arc",
	"PFB_Rock_Desert_Med",
	"PFB_Rock_Desert_VerySmall",
	"PFB_Rock_Mud_Large",
	"PFB_Palm1",
	"PFB_Palm2",
	"PFB_PalmFern_Big",
	"PFB_PalmFern_Medium",
	"PFB_BulkyPineTree_FBX",
	"PFB_SlenderPineTree-Final_FBX",
	"PFB_Tall__Lush_FatPine_1",
	"PFB_Tall__Pruny_SlenderPine_2",
	"PFB_Tall__Pruny_SlenderPine_Impostor",
	"PFB_Tall_SlenderPine_1",
	"PFB_BlueBerryShrub_01",
	"PFB_BlueBerryShrub_02_Noco",
	"PFB_BasketBallHoop",
	"PFB_SquareCannon",
	"PFB_Catapult",
	"PFB_CatapultStraight",
	"PFB_Grinderv2",
	"PFB_Hammer",
	"PFB_Heightjump",
	"PFB_Pusher",
	"PFB_Pushersx5",
	"PFB_Pushersx5_Below",
	"PFB_Spinner",
	"PFB_Tube3-NoHoles2",
	"PFB_ArkCollected",
	"PFB_BigWindMill",
	"PFB_Container_Blue",
	"PFB_Container_Blue_Dynamic",
	"PFB_Container_Orange",
	"PFB_Container_Orange_Dynamic",
	"PFB_Container_Red",
	"PFB_Container_Red_Dynamic",
	"PFB_CoralReef1",
	"PFB_CoralReef2",
	"PFB_CoralReef3",
	"PFB_ShipWreck",
	"PFB_WavyBottomPlantGreenBubbleWeed",
	"PFB_WavyBottomPlantGreenCactus",
	"PFB_WavyBottomPlantGreenLadder",
	"PFB_WavyBottomPlantGreenLeafy",
	"PFB_WavyBottomPlantGreenRedGrass",
	"PFB_WavyBottomPlantPurpleSquareEnd",
	"PFB_WavyBottomPlantRedBubbleEnds",
	"PFB_WavyBottomPlantRedShredded",
	"PFB_TreasureBeacon",
	"PFB_RacingCheckPoint",
	"PFB_RacingCheckPoint_Halfcircle",
	"PFB_PropWheelStack",
	"PFB_RacePropTyre-Blue",
	"PFB_RacePropTyre-Blue_LOWRES",
	"PFB_RacePropTyre-Yellow",
	"PFB_ChillbitchRoad",
	"PFB_RingofFire",
	"PFB_Scaffolding_Section",
	"PFB_FlagTwin",
	"PFB_Windmill3",
	"PFB_ChaserAI",
	"PFB_ChaserAIBall",
	"PFB_ChaserAIDead",
	"PFB_ExplosiveCrate",
	"PFB_IronCrate",
	"PFB_PowerCoreCrate",
	"PFB_WoodCrate",
	"PFB_WoodCrate_Not_Empty",
	"PFB_Explosion_Large",
	"PFB_Explosion_Medium",
	"PFB_Explosion_Micro",
	"PFB_Explosion_SeatDeath",
	"PFB_Explosion_Small",
	"PFB_Explosion_XL",
	"PFB_Dispensable-BeachBall",
	"PFB_Dispensable-ConcreteWall",
	"PFB_Dispensable-Cone",
	"PFB_Dispensable-MetalCrate",
	"PFB_Dispensable-Mine",
	"PFB_Dispensable-Present",
	"PFB_Dispensable-Torpedo",
	"PFB_DispensableBall",
	"PFB_DispensableBoulder",
	"PFB_DispensableCube",
	"PFB_DispensableSnowball",
	"PFB_DispensableSphere",
	"PFB_Barrel",
	"PFB_ExplosiveBarrel",
	"PFB_MagneticCube",
	"PFB_ChallengeLimitedBlockTag",
	"PFB_ChallengeCheckpoint",
	"PFB_ChallengeCheckpoint_HalfCircle",
	"PFB_ChallengeCheckpoint_Round",
	"PFB_ChallengeCheckPointEnd_Flat",
	"PFB_ChallengeCheckpointEnd_Round",
	"PFB_ChallengeCheckPointStart",
	"PFB_ChallengeCheckpoint_Expedition2",
	"PFB_ChallengeCheckpoint_Floating_Expedition2",
	"PFB_ChallengeCheckpoint_Flying_Expedition2",
	"PFB_ChallengeCheckPointEnd_Floating_Expedition2",
	"PFB_ChallengeSignUpExpedition",
	"PFB_ChallengeSignUpExpedition_Floating_Expedition2",
	"PFB_KingOfTheHill_CrownPickup",
	"PFB_Beacon",
	"PFB_BlockHunt",
	"PFB_EpicJumpSequence",
	"PFB_GoldPickup",
	"PFB_TimeOfDayTrigger",
	"PFB_Waypoint",
	"PFB_WindBoxTrigger",
	"PFB_MovePuzzleBall",
	"PFB_MovePuzzleBounds",
	"PFB_MovePuzzleStart",
	"PFB_MovePuzzleTarget",
	"PFB_Cactus_Ball",
	"PFB_Cactus_Bush",
	"PFB_Cactus_Bush_Populate",
	"PFB_Cactus_Mini",
	"PFB_Cactus_Mushroom_Tree",
	"PFB_Cactus_Small",
	"PFB_Cactus_Star_Plant",
	"PFB_Cactus_Tree",
	"PFB_SmallRock_Spawner_01",
	"PFB_Desert_Bush_Fir",
	"PFB_Mine",
	"PFB_Bushy",
	"PFB_INS_Savannah_Bush_Small",
	"PFB_INS_Savannah_Tree_Short",
	"PFB_INS_Savannah_Tree_Short_brown",
	"PFB_INS_Savannah_Tree_Short_Purple",
	"PFB_INS_Savannah_Tree_Short_Yellow",
	"PFB_INS_Savannah_Tree_Tall",
	"PFB_INS_Savannah_Tree_Tall_Brown",
	"PFB_INS_Savannah_Tree_Tall_Purple",
	"PFB_INS_Savannah_Tree_Tall_Yellow",
	"PFB_Pine_Bush",
	"PFB_Pine_Bush_TEST",
	"PFB_Savannah_Tree",
	"PFB_SalvageItem_Ball",
	"PFB_SalvageItem_Ball_L",
	"PFB_SalvageItem_Ball_M",
	"PFB_SalvageItem_Compound_3",
	"PFB_SalvageItem_Compound_Variant_1",
	"PFB_SalvageItem_Compound_Variant_2",
	"PFB_SalvageItem_Explosive",
	"PFB_SalvageItem_Explosive_M",
	"PFB_SalvageItem_L Variant",
	"PFB_SalvageItem_M Variant",
	"PFB_SalvageItem_Small",
	"PFB_SalvageItem_Timed",
	"PFB_SalvageItem_XL Variant",
	"PFB_TimeOfDay_Trailmakers",
	"PFB_TimeOfDay_Trailmakers_Exploration",
	"PFB_TimeOfDay_TrailmakersSpacey",
	"PFB_TestCollisionTimeline",
	"PFB_Whale",
	"PFB_Tooth_Big_01",
	"PFB_Tooth_Big_02",
	"PFB_Tooth_Big_03",
	"PFB_Tooth_Small_01",
	"PFB_Tooth_Small_02",
	"PFB_Tooth_Small_03",
	"PFB_Mushroom_5m_01",
	"PFB_Mushroom_5m_02",
	"PFB_Mushroom_5m_03",
	"PFB_Mushroom_30m_01",
	"PFB_Mushroom_30m_02",
	"PFB_Mushroom_30m_03",
	"PFB_Mushroom_60m_01",
	"PFB_Mushroom_60m_02",
	"PFB_Mushroom_60m_03",
	"PFB_IceHarbour_Pipe",
	"PFB_IceHarbour_Pipe_and_BlueLights",
	"PFB_IceHarbour_Pipe_and_YellowLights",
	"PFB_IceHarbour_Pipe_Corner",
	"PFB_IceHarbour_Pipe_Corner_and_BlueLights",
	"PFB_IceHarbour_Pipe_Corner_and_YellowLights",
	"PFB_IceHarbour_Pipe_GroundPiece",
	"PFB_IceHarbour_Pipe_GroundPiece_and_BlueLights",
	"PFB_IceHarbour_Pipe_GroundPiece_and_YellowLights",
	"PFB_IceHarbour_Antenna_01",
	"PFB_IceHarbour_Antenna_02",
	"PFB_IceHarbour_Antenna_03",
	"PFB_IceHarbour_Base",
	"PFB_IceHarbour_Platform",
	"PFB_IceHarbour_Platform_End_01",
	"PFB_IceHarbour_Platform_End_02",
	"PFB_IceHarbour_Platform_End_03",
	"PFB_IceHarbour_Platform_End_04",
	"PFB_IceHarbour_Platform_Pole",
	"PFB_IceHarbour_Platform_Stairs_01",
	"PFB_IceHarbour_Platform_Stairs_02",
	"PFB_IceHarbour_Ramp_01",
	"PFB_IceHarbour_Ramp_02",
	"PFB_Iceberg_01",
	"PFB_IceCaveLidLong",
	"PFB_IceCaveLidRound",
	"PFB_IceCliffFlat_02",
	"PFB_IceCliffFlat_03",
	"PFB_LongCaveICE",
	"PFB_coralAnemoneA01",
	"PFB_coralAnemoneA02",
	"PFB_coralAnemoneB01",
	"PFB_coralAnemoneB02",
	"PFB_coralEggA01",
	"PFB_coralEggA02",
	"PFB_coralEggB01",
	"PFB_coralEggB02",
	"PFB_coralFormation01",
	"PFB_coralFormation02",
	"PFB_coralRockA01",
	"PFB_coralRockA02",
	"PFB_coralRockB01",
	"PFB_coralRockB02",
	"PFB_coralRockC01",
	"PFB_coralRockC02",
	"PFB_coralRockD01",
	"PFB_coralRockD02",
	"PFB_coralRockE01",
	"PFB_coralRockE02",
	"PFB_coralRockPlatform01",
	"PFB_coralRockPlatform02",
	"PFB_coralRockPlatform03",
	"PFB_coralRockPlatform04",
	"PFB_coralRockPlatform05",
	"PFB_coralRockPlatform06",
	"PFB_coralTuberA01",
	"PFB_coralTuberA02",
	"PFB_GiantPearl",
	"PFB_VolcanoHarbour_Base",
	"PFB_VolcanoHarbour_Chain_01",
	"PFB_VolcanoHarbour_Chain_02",
	"PFB_VolcanoHarbour_Mooring_01",
	"PFB_VolcanoHarbour_Mooring_02",
	"PFB_VolcanoHarbour_Rope",
	"PFB_VolcanoHarbour_Tire",
	"PFB_VolcanoHarbour_Tire_Dynamic",
	"PFB_VolcanoHarbour_WoodPlank_01",
	"PFB_VolcanoHarbour_WoodPlank_02",
	"PFB_cliffs01_volcano",
	"PFB_cliffs02_volcano",
	"PFB_cliffs03_volcano",
	"PFB_spikes01_volcano",
	"PFB_StoneCliff_01",
	"PFB_StoneCliff_04",
	"PFB_StoneCliff_FlatTopAngle",
	"PFB_StoneCliffFlat_01",
	"PFB_StoneCliffFlat_02",
	"PFB_StoneCliffFlat_03",
	"PFB_SimpleStoneHighSeas",
	"PFB_StoneWall_Large",
	"PFB_AlgarveCliff_Tiki",
	"PFB_AlgarveCliff_Tiki_2",
	"PFB_AlgarveCliff_Tiki_3",
	"PFB_Cliff_Bottom_Tiki",
	"PFB_Rock_Med_Tiki",
	"PFB_Rock_VerySmall_Tiki",
	"PFB_SkullCliff",
	"PFB_WoodPlank_01",
	"PFB_WoodPlank_04",
	"PFB_WoodPlank_Dark_01",
	"PFB_WoodPlank_Dark_04",
	"PFB_WoodPole_01",
	"PFB_WoodPole_Dark_01",
	"PFB_Bones_Flipper",
	"PFB_Bones_GiantRibcage",
	"PFB_Bones_Rib",
	"PFB_Bones_Skeleton_01",
	"PFB_Bones_Skeleton_02",
	"PFB_Bones_Skeleton_01",
	"PFB_Bones_Skeleton_02",
	"PFB_Bones_Spine_01",
	"PFB_Bones_Spine_02",
	"PFB_vikingStatue_01",
	"PFB_VikingHarbour_HelmetSkull",
	"PFB_VikingHarbour_Shield_01",
	"PFB_VikingHarbour_Shield_02",
	"PFB_VikingHarbour_Shield_03",
	"PFB_VikingHarbour_Shield_04",
	"PFB_VikingHarbour_Gate",
	"PFB_VikingHarbour",
	"PFB_ShipWreck",
	"PFB_HS_Clam",
	"PFB_HS_ClamClosed",
	"PFB_VolcanoHarbour_Silo_01_Blue",
	"PFB_VolcanoHarbour_Silo_01_Green",
	"PFB_VolcanoHarbour_Silo_01_Red",
	"PFB_VolcanoHarbour_Silo_02_Blue",
	"PFB_VolcanoHarbour_Silo_02_Green",
	"PFB_VolcanoHarbour_Silo_02_Red",
	"PFB_Lava",
	"PFB_Lava_Underwater",
	"PFB_WoodPole",
	"PFB_WoodPole_Dark",
	"PFB_GoldChest",
	"PFB_SpaceShipHighseas",
	"PFB_GiantSpaceCraftRuin",
	"PFB_SpaceWreckage2",
	"PFB_Carrier",
	"PFB_BearingBeams",
	"PFB_BearingBeamSingle",
	"PFB_Modular90DegreeTurn",
	"PFB_ModularBigSlope",
	"PFB_ModularPillar",
	"PFB_ModularSlopeUp-Angled",
	"PFB_ModularSlopeUp",
	"PFB_ModularSlopeUpEnd",
	"PFB_ModularSmallSlope",
	"PFB_ModularStraightRoad_Guards-2x",
	"PFB_ModularStraightRoad_Guards",
	"PFB_ModularStraightRoad_NoGuards-2x",
	"PFB_ModularStraightRoad_NoGuards",
	"PFB_ModularT-Cross",
	"PFB_SmallBeamSingle",
	"PFB_Modular_90DegreeWall",
	"PFB_Modular_90DegreeWallMIRROR",
	"PFB_Modular_BigWall",
	"PFB_Modular_Entrance",
	"PFB_Modular_PillarLight",
	"PFB_Modular_Ramp",
	"PFB_Modular_SmallWall",
	"PFB_SpinnerArena",
	"PFB_CrashedMayorPlane",
	"PFB_CrashedPlaneWing",
	"PFB_Palm_1",
	"PFB_Palm_2",
	"PFB_TropicalFlower_1",
	"PFB_TropicalFlower_2",
	"PFB_TropicalFlower_3",
	"PFB_TropicalFlower_4",
	"PFB_BoneRing",
	"PFB_GiantBone_1",
	"PFB_GiantBone_2",
	"PFB_GiantBone_3",
	"PFB_Pike_Cliff_Med",
	"PFB_Pike_Cliff_1",
	"PFB_Pike_Cliff_2",
	"PFB_Pike_Cliff_3",
	"PFB_Pike_Cliff_4",
	"PFB_Pike_Cliff_5",
	"PFB_Pike_Floating",
	"PFB_Pike_Rock_1",
	"PFB_Pike_Rock_2",
	"PFB_Pike_Donut",
	"PFB_Sky_Cliff_1",
	"PFB_Sky_Cliff_2",
	"PFB_Sky_Cliff_3",
	"PFB_Sky_Cliff_4",
	"PFB_Sky_Cliff_5",
	"PFB_Sky_Float_1",
	"PFB_Sky_Float_2",
	"PFB_Sky_Float_3",
	"PFB_Sky_Float_4",
	"PFB_Sky_Float_5",
	"PFB_Sky_Arc",
	"PFB_Pipe_Corner_1",
	"PFB_Pipe_Corner_2",
	"PFB_Pipe_Corner_3",
	"PFB_Pipe_Long",
	"PFB_Pipe_Short",
	"PFB_Pipe_Valve",
	"PFB_Sheep",
	"PFB_Red_EnergyShield",
	"PFB_FlameThrowerEffect",
	"PFB_TimelinePodLandingClimbIsland"
];
export type Spawnable = Spawnables[number];
