import { Camera, WebGLRenderer, Scene, PerspectiveCamera, Mesh, } from "three";

export abstract class Arena {

    // Initialization monitor
    public isInitialized = false;
    private _isReinitialized: boolean;
    public get isReinitialized(): boolean {
        return this._isReinitialized
    }

    abstract needsLoading: boolean;
    loaded = false;
    loadingTimeout = 30000;

    // Motion for a perspective
    moveBackward = false;
    moveForward = false;
    moveRight = false;
    moveLeft = false;
    canJump = false;
    velocity = { x: 0, y: 0 };
    mouse = { 
        coordinates : { 
            x: 0,
            y: 0 
        },
        percentage : { 
            x: 0,
            y: 0 
        } 
    };
    viewer = {
        rho : 0,
        phi: 0,
        x:0,
        y:50,
        z:-200
    };
    player = {
        jumpSpeed: 350
    }

    scene: Scene;
    renderer: WebGLRenderer;
    camera: Camera;

    // Constructor setup with crucial objects for every canvas
    constructor( private _container: HTMLElement ) {}


    // Initializes this scene
    abstract init(): void;
    
    initialize(): void {
        this.isInitialized = true;
    }

    // Updates scene...
    abstract update(time: number): void;

    setScene = (scene: Scene): void => {
        this.scene = scene;
    }
    setRenderer = (renderer: WebGLRenderer): void => {
        this.renderer = renderer;
    }
    setCamera = (camera: Camera): void => {
        this.camera = camera;
    }
    placeRenderer = (): void => {
        this._container.appendChild( this.renderer.domElement );
    }

    get canvas(): HTMLCanvasElement {
        return this.renderer.domElement
    }

    get container(): HTMLElement {
        return this._container;
    }

    // Draws on Scene...
    render = (): void => {
        this.renderer.render( this.scene, this.camera );
    };


    // Game Loop Logic [update, render, repeat]...
    gameLoop( time: number ): void {
        this.update(time);
        this.render();
    }

    /**
     * Maintains size of renderer
     * Defaults to window size
     * Override this method to choose your custom size
     */
    onWindowResize = (): void => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize( width, height );
        if ( this.camera instanceof PerspectiveCamera) {
            this.camera.aspect = (width / height);
            this.camera.updateProjectionMatrix();
        }
    };

    /**
     * Action to take when a key is pressed,
     *  uses WASD and cursor keys settings by default
     *  also sets a boolean for jumping action using space in fp games
     * @param event the keyboard event
     */
    onKeyDown = ( event: KeyboardEvent ): void => {
        switch ( event.key ) {
            case "Space": // space
                if ( this.canJump === true ) this.velocity.y += this.player.jumpSpeed;
                this.canJump = false;
                break;
            case "Up": // up
            case "w": // w
                this.moveForward = true;
                break;
            case "Left": // left
            case "a": // a
                this.moveLeft = true;
                break;
            case "Down": // down
            case "s": // s
                this.moveBackward = true;
                break;
            case "Right": // right
            case "d": // d
                this.moveRight = true;
                break;
        }
    };

    /**
     * Action to take when a key is debounced,
     *  uses WASD and cursor keys settings by default
     * @param event the keyboard event
     */
    onKeyUp = ( event: KeyboardEvent ): void => {
        switch ( event.key ) {
            case "Up": // up
            case "w": // w
                this.moveForward = false;
                break;
            case "Left": // left
            case "a": // a
                this.moveLeft = false;
                break;
            case "Down": // down
            case "s": // s
                this.moveBackward = false;
                break;
            case "Right": // right
            case "d": // d
                this.moveRight = false;
                break;
        }
    };

    /**
     * Action to take when a mouse is clicked, or screen tapped
     * @param event the event object
     */
    onMouseDown = ( event: MouseEvent ): void => { 
        event.preventDefault();
    };

    /**
     * Action to take when a mouse moves on the sreen
     * @param event the event object for either a touch or mouse movement
     */
    onMouseMove = ( event: Touch | MouseEvent ): void => {

        const windowHalfX = window.innerWidth >> 1;
        const windowHalfY = window.innerHeight >> 1;

        this.mouse.coordinates.x = ( event.clientX - windowHalfX );
        this.mouse.coordinates.y = ( event.clientY - windowHalfY );

        this.mouse.percentage.x = this.mouse.coordinates.x / (window.innerWidth / 2);
        this.mouse.percentage.y = this.mouse.coordinates.y / (window.innerHeight / 2);

    };

    /**
     * Action to take at the beginning of touch/swipe of device screen
     * @param event the event object
     */
    onTouchStart = ( event: TouchEvent ): void => { 
        event.preventDefault();
    };

    /**
     * Action to take during a swipe of the device screen
     * @param event the event object
     */
    onTouchMove = ( event: TouchEvent ): void => { 
        event.preventDefault();
        this.onMouseMove(event.touches[0]);
    };

    /**
     * Action to take when a device screen is released after a swipe/touch
     * @param event the event object
     */
    onTouchEnd = ( event: TouchEvent ): void => { 
        event.preventDefault();
        this.onMouseMove(event.touches[0]);
    };

    /**
     * Sets and activates any default eventlisteners on arena
     */
    setEventListeners = (): void => {
        document.addEventListener( 'touchstart', this.onTouchStart, false );
        document.addEventListener( 'touchmove', this.onTouchMove, false );
        document.addEventListener( 'touchend', this.onTouchEnd, false );
        document.addEventListener( 'mousedown', this.onMouseDown, false );
        document.addEventListener( 'mousemove', this.onMouseMove, false );
        document.addEventListener( 'keydown', this.onKeyDown, false );
        document.addEventListener( 'keyup', this.onKeyUp, false );
        window.addEventListener('resize', this.onWindowResize, false);
    }

    /**
     * Clears off any active default eventlisteners on arena
     */
    clearEventListeners = (): void => {
        document.removeEventListener( 'touchstart', this.onTouchStart, false );
        document.removeEventListener( 'touchmove', this.onTouchMove, false );
        document.removeEventListener( 'touchend', this.onTouchEnd, false );
        document.removeEventListener( 'mousedown', this.onMouseDown, false );
        document.removeEventListener( 'mousemove', this.onMouseMove, false );
        document.removeEventListener( 'keydown', this.onKeyDown, false );
        document.removeEventListener( 'keyup', this.onKeyUp, false );
        window.removeEventListener('resize', this.onWindowResize, false);
    }

    /**
     * Runs a pre-disposal sequence for an arena, disposing off eventlisteners
     */
    packup(): void {
        this.clearEventListeners();
    }

    /**
     * Destroys an arena by disposing its renderer, mesh geometry materials
     */
    destroy(): void {
        this.renderer.dispose()

        // dispose all geometry as well to kill persistance
        this.scene.traverse(object => {
            if(object instanceof Mesh) {
                object.geometry.dispose();
                if (object.material.isMaterial) {
                    object.material.dispose();
                } else {
                    // an array of materials
                    for (const material of object.material) {
                        material.dispose()
                    }
                }
            }
        })

        this.renderer.forceContextLoss(); // Save on GL resources across Arenas
        this.scene.clear();
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
        this.isInitialized = false;
        this._isReinitialized = true;
        console.log('arena destroyed');
    }
}