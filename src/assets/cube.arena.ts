import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, MeshNormalMaterial } from "three";
import { Arena } from "../arena";

export class CubeArena extends Arena {

    private scenery = {};

    private geometry: BoxGeometry;
    private material: MeshNormalMaterial;
    private mesh: Mesh;

    constructor( container: HTMLElement ) {
        super(container);
    }

    // Initialize required threejs components...
    init = (): void => {
        if(this.isInitialized) {
            return;
        }else{
            super.initialize();
        }
        const aspectRatio = window.innerWidth / window.innerHeight;
        const camera = new PerspectiveCamera( 70, aspectRatio, 0.01, 10 );
        camera.position.z = 1;

        const scene = new Scene();

        this.geometry = new BoxGeometry( 0.2, 0.2, 0.2 );
        this.material = new MeshNormalMaterial();

        this.mesh = new Mesh( this.geometry, this.material );
        scene.add( this.mesh );

        const renderer = new WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setAnimationLoop( this.gameLoop );

        this.setCamera(camera);
        this.setScene(scene);
        this.setRenderer(renderer);
        this.placeRenderer();

        // Declare Event Listeners to override base class
        // Here we can void or override any events we don't want to see...
        this.onMouseDown = 
        this.onKeyDown = 
        this.onKeyUp = () => null

        // Setup Event Listeners in base class
        this.setEventListeners();
    };

    needsLoading = false;

    // Updates scene...
    update = ( time: number ): void => {

        this.mesh.rotation.x = time / 2000;
        this.mesh.rotation.y = time / 1000;
    };

    gameLoop = (time: number): void => {
        super.gameLoop(time);
    }

    packup(): void {
        super.packup();
    }
}