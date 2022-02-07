import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { Arena } from "../components/arena";

export class MyNewArena extends Arena {
    needsLoading: boolean;
    focus = false;

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
        const renderer = new WebGLRenderer({ antialias: true})

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
    }
    update(time: number): void {
        // replace with your own implementation of the update logic...
        throw new Error(`Method not implemented.${time}`);
    }

    gameLoop = (time: number): void => {
        super.gameLoop(time);
    };
}