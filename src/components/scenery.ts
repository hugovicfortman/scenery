import { DefaultLoadingManager } from 'three';
import { Arena } from '../arena';
import Detector from './three-detector';

export class Scenery {
    private container: HTMLElement;
    public components: {[key: string]: never};
    private currentArena: Arena;
    private incomingArena: Arena;
    private outgoingArena: Arena;
    private loadingArena = false;
    private arenaCache: Arena[] = [];
    private preloadStyleContent = 'canvas.preload{position:fixed;top:0;left:0;z-index:-1}';

    init( container: HTMLElement ): void {
        this.container = container;
        this.setup();
    }

    private initialize(): void {
        this.currentArena = undefined;
    }

    setup(): void {
        // Startup...
        if(Detector.webgl)
        {
            // Styling preloads
            const preloadStyle = document.createElement('style');
            preloadStyle.innerHTML = this.preloadStyleContent;
            document.body.appendChild(preloadStyle);

            // Loading...
            DefaultLoadingManager.onProgress = ( item, loaded, total ) => {
                // All textures are done loading when loaded === total...
                if(loaded === total)
                {
                    console.log('we got here...');
                    this.loadingArena = false;
                } else {
                    this.loadingArena = true;
                }
            };
            this.initialize();
        } else {
            // If WebGL is not supported...
            const warning = Detector.getWebGLErrorMessage();
            this.container.appendChild(warning);
        }
    }

    // Receives an Arena Name and an Arena Object to create within the scenery
    // Objects are stored in a dictionary with the name, and retreived if called
    // again during runtime.
    setArena(arenaIndex: number, arena: Arena): void {
        if(this.arenaCache[arenaIndex] == undefined) {
            this.incomingArena = arena;
            this.arenaCache[arenaIndex] = arena;
        } else {
            this.incomingArena = this.arenaCache[arenaIndex];
            console.log('retrieval');
        }
        
        if(this.currentArena !== undefined) {
            this.currentArena.packup();
            console.log('positive');
        }
    }

    transition(): void {
        if(this.incomingArena !== undefined) {
            console.log('transition called on incoming Arena');
            this.outgoingArena = this.currentArena;
            this.currentArena = this.incomingArena;
            console.log(this.currentArena);
            this.currentArena.init();
            this.currentArena.canvas.classList.add('preload');
            // Execute whatever transition was meant to move us to the next screen.
            this.fadeOutArena(this.outgoingArena, 1)
                .then( () => {
                    console.log('transition fadeout happened');
                    this.outgoingArena.destroy();
                    this.currentArena.canvas.classList.remove('preload');
                });
        }
    }

    private fadeOutArena(e: Arena, time: number): Promise<void> {
        if(e != undefined) {
            return this.fadeOut(e.canvas, time);
        }else {
            return new Promise(() => null)
        }
    }

    fadeOut(e: HTMLElement, time: number): Promise<void> {
        const InitialOpacity = Number(e.style.opacity) || 1;
        return new Promise((resolve) => {
            let opacity = InitialOpacity;
            const fading = setInterval(() => {
                if(opacity > 0) {
                    opacity -= InitialOpacity / 60;
                    e.style.opacity = `${opacity}`;
                } else {
                    clearInterval(fading);
                    e.style.opacity = "0";
                    resolve();
                }
            }, time / 60);
        });
    }
}
