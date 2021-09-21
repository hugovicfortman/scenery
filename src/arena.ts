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

    // Maintains size of renderer...
    onWindowResize = (): void => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize( width, height );
        if ( this.camera instanceof PerspectiveCamera) {
            this.camera.aspect = (width / height);
            this.camera.updateProjectionMatrix();
        }
    };

    onKeyDown = ( event: KeyboardEvent ): void => {
        switch ( event.key ) {
            case "Space": // space
                if ( this.canJump === true ) this.velocity.y += 350;
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

    onMouseDown = ( event: MouseEvent ): void => { 
        event.preventDefault();
    };

    onMouseMove = ( event: Touch | MouseEvent ): void => {

        const windowHalfX = window.innerWidth >> 1;
        const windowHalfY = window.innerHeight >> 1;

        this.mouse.coordinates.x = ( event.clientX - windowHalfX );
        this.mouse.coordinates.y = ( event.clientY - windowHalfY );

        this.mouse.percentage.x = this.mouse.coordinates.x / (window.innerWidth / 2);
        this.mouse.percentage.y = this.mouse.coordinates.x / (window.innerHeight / 2);

    };

    onTouchStart = ( event: TouchEvent ): void => { 
        event.preventDefault();
    };
    onTouchMove = ( event: TouchEvent ): void => { 
        event.preventDefault();
        this.onMouseMove(event.touches[0]);
    };
    onTouchEnd = ( event: TouchEvent ): void => { 
        event.preventDefault();
        this.onMouseMove(event.touches[0]);
    };

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

    packup(): void {
        this.clearEventListeners();
    }
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