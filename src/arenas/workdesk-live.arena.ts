import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader, FrontSide } from "three";
import { Arena } from "../components/arena";

export class WorkdeskLiveArena extends Arena {
    focus = false;

    private textureSrc = 'assets/static/images/scenery/';
    private targetCamera: Vector3;

    private scenery = {
        world : {
            flatScene : {
                TextureImg : this.textureSrc + 'flatScene-live.webp'
            }
        },
        time : {
            prevTime : performance.now(),
            currentTime: 0
        }
    };

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
        const scene = new Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        const camera = new PerspectiveCamera(75, aspectRatio, 1, 10000 );
        const renderer = new WebGLRenderer({ antialias: true})
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 1);
        renderer.setAnimationLoop( this.gameLoop );
        camera.position.z = this.viewer.z;
        camera.position.y = this.viewer.y;

        this.targetCamera = scene.position.clone();
        camera.lookAt(this.targetCamera);
        scene.add( camera );

        // Painting...
        this.firstPaint(scene);

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

    needsLoading = true;

    firstPaint = (scene: Scene): void => {
        const flatSceneGeometry = new PlaneGeometry(700, 500);
        const flatSceneTexture = new TextureLoader().load( this.scenery.world.flatScene.TextureImg );

        const flatSceneMaterial = new MeshBasicMaterial({map: flatSceneTexture, side: FrontSide});
        const flatScenePlane = new Mesh( flatSceneGeometry, flatSceneMaterial );
        flatScenePlane.rotation.x = Math.PI/64.0 ;
        flatScenePlane.rotation.y = Math.PI ;
        flatScenePlane.receiveShadow = true;
        flatScenePlane.position.y = 100;
        scene.add( flatScenePlane );
    };

    update = (): void => {

        // Move viewer with mouse...
        this.targetCamera.x += (-this.mouse.percentage.x * 5 - this.targetCamera.x) / 10;
        this.targetCamera.y += (-(this.mouse.percentage.y *5) + 40 - this.targetCamera.y) / 10;

        this.camera.lookAt(this.targetCamera);
    };

    gameLoop = (time: number): void => {
        super.gameLoop(time);
    };
}