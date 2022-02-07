import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, PointLight, HemisphereLight, DirectionalLight, sRGBEncoding, Mesh, MeshStandardMaterial, Group } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Arena } from "../components/arena";

export class OfficeArena extends Arena {

    private targetCamera: Vector3;
    needsLoading = true;
    focus = false;
    private skydome: Group[];
    private loader = new GLTFLoader();

    constructor( container: HTMLElement ) {
        super(container);
    }

    init(): void {
        if(this.isInitialized) {
            return;
        }else{
            super.initialize();
        }
        const scene = new Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        const camera = new PerspectiveCamera(75, aspectRatio, 1, 10000 );
        const renderer = new WebGLRenderer({ antialias: true});
        
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMap.enabled = true;
		renderer.outputEncoding = sRGBEncoding;
        renderer.setAnimationLoop( this.gameLoop );

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.target.set( -1, 0, -1 );
        controls.update();
        controls.enabled = this.focus;
        

        this.targetCamera = scene.position.clone();
        this.targetCamera.set(-1, -0.125, -1)
        camera.lookAt(this.targetCamera);
        scene.add( camera );

        this.setCamera(camera);
        this.setScene(scene);
        this.setRenderer(renderer);
        this.placeRenderer();

        this.lighting(scene);
        this.sky(scene);
        this.office(scene);


        // Declare Event Listeners to override base class
        // Here we can void or override any events we don't want to see...
        this.onMouseDown = 
        this.onKeyDown = 
        this.onKeyUp = () => null

        // Setup Event Listeners in base class
        this.setEventListeners();
    }

    office = (scene: Scene): void => {
        this.loader.load( 'assets/static/models/living_room.glb', function ( gltf ) {

            scene.add( gltf.scene );
            gltf.scene.position.set(-450, -90, -200);
            // gltf.scene.position.set(-450, -100, -220);
            const meshes = gltf.scene.children[0].children;
            const transparent = [
                "flltgrey"
            ];
            // Cause transparency of appropriate mesh materials...
            meshes.map(n => {
                const material = ((n as Mesh).material as MeshStandardMaterial);
                if(transparent.includes(material.name))
                {
                    material.transparent = true;
                    material.opacity = 0.125;
                }
            });

        }, undefined, function ( error ) {

            console.error( error );

        } );
    }

    sky = (scene: Scene): void => {
        const skydome: Group[] = [];

        this.loader.load( 'assets/static/models/hdSky.glb', function ( gltf ) {

            scene.add( gltf.scene );
            gltf.scene.position.set(0, 0, 0);
            gltf.scene.scale.set(80, 80, 80);
            skydome.push(gltf.scene);
        }, undefined, function ( error ) {

            console.error( error );

        } );
        this.skydome = skydome;
    }

    lighting = (scene: Scene): void => {
        // const pointLight = new PointLight(0x553311);
        const pointLight = new PointLight(0xaaccff);
            pointLight.position.set(-1000, 250, -1000);
            scene.add(pointLight);
            scene.visible = true;

        const hemiLight = new HemisphereLight( 0xeeeeff, 0x444444 );
            hemiLight.position.set( 0, 20, 0 );
            hemiLight.intensity = 0.33;
            scene.add( hemiLight );

        const dirLight = new DirectionalLight( 0xffeeff );
            dirLight.intensity = 0.5;
            dirLight.position.set( 3, 100, 10 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 2;
            dirLight.shadow.camera.bottom = - 2;
            dirLight.shadow.camera.left = - 2;
            dirLight.shadow.camera.right = 2;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 40;
            scene.add( dirLight );
    }

    update = (): void => {
    // update = (time: number): void => {
        // this.scenery.world.steam.animate();
        // this.scenery.time.currentTime = time;
        if(this.skydome.length) {
            this.skydome[0].rotation.y += 0.00005;
        }
        if(!this.focus) {
            // Move viewer with mouse...
            this.targetCamera.x += (this.mouse.percentage.x * 5 - this.targetCamera.x) / 500;
            this.targetCamera.y += (-(this.mouse.percentage.y *5) - this.targetCamera.y) / 500;
            // this.targetCamera.y += (-(this.mouse.percentage.y *5) + 40 - this.targetCamera.y) / 10;

            this.camera.lookAt(this.targetCamera);
        }
    };

    gameLoop = (time: number): void => {
        super.gameLoop(time);
    };
}