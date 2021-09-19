import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader, FrontSide, AdditiveBlending } from "three";
import { Arena } from "../arena";
export class WorkdeskArena extends Arena {
    constructor(container) {
        super(container);
        this.textureSrc = 'assets/static/images/scenery/';
        this.scenery = {
            world: {
                flatScene: {
                    TextureImg: this.textureSrc + 'flatScene.webp'
                },
                steam: {
                    current: 0,
                    last: 4,
                    TextureImg: this.textureSrc + 'steam-x.webp',
                    incident: new Array(),
                    reflected: new Array(),
                    wafting: true,
                    animate: () => null
                }
            },
            time: {
                prevTime: performance.now(),
                currentTime: 0
            }
        };
        // Initialize required threejs components...
        this.init = () => {
            const scene = new Scene();
            const aspectRatio = window.innerWidth / window.innerHeight;
            const camera = new PerspectiveCamera(75, aspectRatio, 1, 10000);
            const renderer = new WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 1);
            renderer.setAnimationLoop(this.gameLoop);
            camera.position.z = this.viewer.z;
            camera.position.y = this.viewer.y;
            this.targetCamera = scene.position.clone();
            camera.lookAt(this.targetCamera);
            scene.add(camera);
            // Painting...
            this.firstPaint(scene);
            this.drawSteam(scene);
            // drawSteamReflection(scene);
            this.scenery.world.steam.animate = this.animateSteam;
            this.setCamera(camera);
            this.setScene(scene);
            this.setRenderer(renderer);
            this.placeRenderer();
            // Declare Event Listeners to override base class
            // Here we can void or override any events we don't want to see...
            this.onMouseDown =
                this.onKeyDown =
                    this.onKeyUp = () => null;
            // Setup Event Listeners in base class
            this.setEventListeners();
        };
        this.firstPaint = (scene) => {
            const flatSceneGeometry = new PlaneGeometry(700, 500);
            const flatSceneTexture = new TextureLoader().load(this.scenery.world.flatScene.TextureImg);
            const flatSceneMaterial = new MeshBasicMaterial({ map: flatSceneTexture, side: FrontSide });
            const flatScenePlane = new Mesh(flatSceneGeometry, flatSceneMaterial);
            flatScenePlane.rotation.x = Math.PI / 64.0;
            flatScenePlane.rotation.y = Math.PI;
            flatScenePlane.receiveShadow = true;
            flatScenePlane.position.y = 100;
            scene.add(flatScenePlane);
        };
        this.drawSteam = (scene) => {
            for (let i = 0; i < 5; i++) {
                const steam = this.getSteam(i);
                const reflection = steam.clone();
                steam.position.y = 160;
                steam.position.x = 75;
                steam.rotation.x = Math.PI / 64.0;
                steam.rotation.y = Math.PI;
                this.scenery.world.steam.incident.push(steam);
                reflection.position.y = 95;
                reflection.position.x = 300;
                reflection.rotation.x = Math.PI / 64.0;
                reflection.rotation.y = Math.PI;
                reflection.rotation.z = Math.PI / 4.0;
                reflection.position.z = -10;
                this.scenery.world.steam.reflected.push(reflection);
                scene.add(steam);
                scene.add(reflection);
            }
            this.resetSteam();
        };
        this.getSteam = (index) => {
            const steamGeometry = new PlaneGeometry(100, 100);
            const steamTexture = new TextureLoader().load(this.scenery.world.steam.TextureImg.replace('x', index.toString()));
            const steamMaterial = new MeshBasicMaterial({ map: steamTexture, transparent: true, color: 0x999999, blending: AdditiveBlending });
            return new Mesh(steamGeometry, steamMaterial);
        };
        this.resetSteam = () => {
            for (let j = 0; j < 5; j++) {
                const material = this.scenery.world.steam.incident[j].material;
                if (material instanceof MeshBasicMaterial) {
                    material.opacity = 0;
                }
            }
        };
        this.animateSteam = () => {
            const time = performance.now();
            this.scenery.time.prevTime = time;
            // Animate the steam effect...
            let sc = this.scenery.world.steam.current, sl = this.scenery.world.steam.last;
            const steam = this.scenery.world.steam.incident[sc], lastSteam = this.scenery.world.steam.incident[sl];
            // let reflection = scenery.world.steam.reflected[st];
            let cop = steam.material.opacity, lop = lastSteam.material.opacity;
            cop += 0.025;
            if (cop >= 1) {
                cop = 1;
                // switch the steam...
                sl = sc;
                sc = sc == 4 ? 0 : sc + 1;
                this.resetSteam();
                //console.log(`steam:${sc}, op:${cop}`);
            }
            lop -= 0.025;
            if (lop <= 0) {
                lop = 0;
            }
            steam.material.opacity = cop;
            lastSteam.material.opacity = lop;
            // reflection.material.opacity = op;
            // scenery.world.steam.wafting = wafting;
            this.scenery.world.steam.current = sc;
            this.scenery.world.steam.last = sl;
        };
        this.update = (time) => {
            this.scenery.world.steam.animate();
            this.scenery.time.currentTime = time;
            // Move viewer with mouse...
            this.targetCamera.x += (-this.mouse.percentage.x * 5 - this.targetCamera.x) / 10;
            this.targetCamera.y += (-(this.mouse.percentage.y * 5) + 40 - this.targetCamera.y) / 10;
            this.camera.lookAt(this.targetCamera);
        };
        this.gameLoop = (time) => {
            super.gameLoop(time);
        };
    }
    packup() {
        super.packup();
    }
}
