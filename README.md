# Scenery

A dynamic 3D environment loader built with Webpack 5 + TypeScript + Jest + Sass + ESLint + Threejs.


## Installation:

#### Step By Step
1. Clone the repository using

        git clone https://github.com/hugovicfortman/scenery.git

2. Navigate into the scenery folder using `cd scenery`

3. Install the dependencies using `npm i`

4. Start the project using `npm start`

#### 
You can simply paste this into your terminal

    git clone https://github.com/hugovicfortman/scenery.git
    cd scenery
    npm i
    npm start

## How It Works

### Overview

The base container wrapper is called a `Scenery`. 

This is an abstraction layer that wraps around and manages loading and transition between renderings within your chosen viewport or container. Not to be confused with the `Scene` object from Threejs.

Each Threejs render is called an `Arena`.

Each `Arena` has its `scene`, `camera`, and `renderer`, and runs its separate `loop`, `update` and `render` methods which are independent of other Arenas in the scenery.

`ArenaFactory` is a static class that helps us load an `Arena`, given its numerical index in a collection of Arenas.

`Arena` can be loaded directly into the scenery, but it is advisable to use the `ArenaFactory` in order to unbundle the main package from the Arenas packages, which may be heavy, depending on the complexity and size of your render and resources.

#### Process

1. Import the scenery class.

2. Create a `Scenery` object.

3. Run the `Setup()` method on scenery to asynchronously import `ArenaFactory` when you need it.

4. `ArenaFactory` loads the `Arena` libraries into memory

5. Run `setArena()`, passing a number which represents the zero base index of the arena to load into the scenery. e.g. `setArena(1)`

When you set an Arena,  the Scenery loads the assets for that arena before transitioning by fading into the new arena.


### Creating your own Arenas

To add an Arena, 

1. Create the Typescript file in the **arenas** directory. The convention of using *.arena.ts filename is not important at this time, but may be maintained.

2. The class should extend `Arena` in order to gain the important wrapper properties with which the scenery intracts with it.

3. Implement the recommended methods and properties from the base class.


The new class would take the following form;


    import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
    import { Arena } from "../components/arena";

    export class MyNewArena extends Arena {
        needsLoading: boolean;
        init(): void {
            if(this.isInitialized) {
                return;
            }else{
                super.initialize();
            }
            const scene = new Scene();
            const aspectRatio = window.innerWidth /     window.innerHeight;
            const camera = new PerspectiveCamera(75, aspectRatio, 1, 10000 );
            const renderer = new WebGLRenderer({ antialias: true})

            this.setCamera(camera);
            this.setScene(scene);
            this.setRenderer(renderer);
            this.placeRenderer();


            // Declare Event Listeners to override base class
            // Here we can void or override any events we don't want to see...
            this.onKeyDown = 
            this.onMouseDown = 
            this.onKeyUp = () => null

            // Setup Event Listeners in base class
            this.setEventListeners();
        }
        update(time: number): void {
            // replace with your own implementation of the update logic...
            throw new Error(`Method not implemented.${time}`);
        }

        gameLoop = (time: number): void => {
            super.gameLoop(time);
        };
    }



### Loading New Arenas

To make the your new arena loadable, simply import and add it to the static `arenaMap` dictionary variable in **/components/dynamicmap.ts** with its unique key.

`ArenaFactory` uses the literal key => value arangement to index all arenas, therefore, to load it into your scenery, you can simply call that index as follows;

    scenery.setArena(2)

where **2** is the index of your `Arena` in the `arenaMap`.

To access the index of arenas, you can use the `getArenaIndex()` method exposed by the scenery. This returns a string array containing the keys for `arenaMap` in the order which they are declared in the dictionary literal.

This method would return an empty string array if the arena factory has not yet been loaded by the `setup()` method.