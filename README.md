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

Each `Arena` has its `scene`, `camera`, and `renderer`, and runs its separate `loop`, `update` and `render` functions which are independent of other Arenas in the scenery.

`ArenaFactory` is a static class that helps us load an `Arena`, given its numerical index in a collection of Arenas.

`Arena` can be loaded directly into the scenery, but it is advisable to use the `ArenaFactory` in order to unbundle the main package from the Arenas packages, which may be heavy, depending on the complexity and size of your render and resources.

#### Process

1. Import the scenery class.
2. Create a `Scenery` object.
3. Run the `Setup()` to asynchronously import `ArenaFactory` when you need it.
4. `ArenaFactory` loads the `Arena` libraries into memory
5. Run `setArena()`, passing a number which represents the index of the arena to load the current Arena.

When you set an `Arena`,  the `Scenery` loads the assets for that arena before transitioning by fading into the new arena.


