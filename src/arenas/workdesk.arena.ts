import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader, FrontSide, AdditiveBlending } from "three";
import { Arena } from "../components/arena";

export class WorkdeskArena extends Arena {
    focus = false;

    private textureSrc = 'assets/static/images/scenery/';
    private targetCamera: Vector3;

    private scenery = {
        world : {
            flatScene : {
                TextureImg : this.textureSrc + 'flatScene.webp'
            },
            steam : {
                current: 0,
                last: 4,
                TextureImg : this.textureSrc + 'steam-x.webp',
                incident: new Array<Mesh>(),
                reflected: new Array<Mesh>(),
                wafting: true,
                animate: ():void => null
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
        this.drawSteam(scene);
        // drawSteamReflection(scene);

        if(!this.isReinitialized) {
            this.scenery.world.steam.animate = this.animateSteam;
        }

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

    drawSteam = (scene: Scene): void => {
        this.scenery.world.steam.incident = [];
        this.scenery.world.steam.reflected = [];
        for(let i = 0; i < 5; i++)
        {
            const steam = this.getSteam(i);
            const reflection = steam.clone();
            steam.position.y = 160;
            steam.position.x = 75;
            steam.rotation.x = Math.PI/64.0 ;
            steam.rotation.y = Math.PI;
            this.scenery.world.steam.incident.push(steam);
            reflection.position.y = 95;
            reflection.position.x = 300;
            reflection.rotation.x = Math.PI/64.0 ;
            reflection.rotation.y = Math.PI;
            reflection.rotation.z = Math.PI/4.0;
            reflection.position.z = -10;
            this.scenery.world.steam.reflected.push(reflection);
            scene.add( steam );
            scene.add( reflection );
        }
        this.resetSteam();
    };

    getSteam = (index: number): Mesh => {
        const steamGeometry = new PlaneGeometry(100,100);
        const steamTexture = new TextureLoader().load( this.scenery.world.steam.TextureImg.replace('x', index.toString()) );
        const steamMaterial = new MeshBasicMaterial({map: steamTexture, transparent: true, color: 0x999999, blending: AdditiveBlending});

        return new Mesh( steamGeometry, steamMaterial );
    };

    clearSteam = (): void => {
        this.scenery.world.steam.incident = [];
        this.scenery.world.steam.reflected = [];
    }

    resetSteam = (): void => {
        for(let j = 0; j < 5; j++)
        {
            const material = this.scenery.world.steam.incident[j].material;
            if (material instanceof MeshBasicMaterial) {
                material.opacity = 0;
            }
        }
    }

    animateSteam = (): void => {
        // Animate the steam effect...
        let sc = this.scenery.world.steam.current, sl = this.scenery.world.steam.last;
        const steam = this.scenery.world.steam.incident[sc], lastSteam = this.scenery.world.steam.incident[sl];
        
        let cop = (steam.material as MeshBasicMaterial).opacity, lop = (lastSteam.material as MeshBasicMaterial).opacity;

        cop += 0.025;
        if(cop >= 1)
        {
            cop = 1;
            // switch the steam...
            sl = sc;
            sc = sc== 4? 0 : sc + 1;
            this.resetSteam();
        }

        lop -= 0.025;
        if(lop <= 0)
        {
            lop = 0;
        }
        (steam.material as MeshBasicMaterial).opacity = cop;
        (lastSteam.material as MeshBasicMaterial).opacity = lop;
        
        this.scenery.world.steam.current = sc;
        this.scenery.world.steam.last = sl;
    };

    update = (time: number): void => {
        this.scenery.world.steam.animate();
        this.scenery.time.currentTime = time;

        // Move viewer with mouse...
        this.targetCamera.x += (-this.mouse.percentage.x * 5 - this.targetCamera.x) / 10;
        this.targetCamera.y += (-(this.mouse.percentage.y *5) + 40 - this.targetCamera.y) / 10;

        this.camera.lookAt(this.targetCamera);
    };

    gameLoop = (time: number): void => {
        super.gameLoop(time);
    };
}