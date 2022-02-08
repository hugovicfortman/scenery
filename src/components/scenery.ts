import { DefaultLoadingManager } from 'three';
import { Arena } from '../components/arena';
import Detector from './three-detector';

export class Scenery {
    private container: HTMLElement;
    public components: {[key: string]: never};
    private currentArena: Arena;
    private incomingArena: Arena;
    private outgoingArena: Arena;
    private arenaCache: Arena[] = [];
    private preloadStyleContent = 'canvas.preload{position:fixed;top:0;left:0;z-index:-1}';

    init( container: HTMLElement ): void {
        this.container = container;
        this.initialize();
    }

    private initialize(): void {
        // Startup...
        if(Detector.webgl)
        {
            // Styling preloads
            const preloadStyle = document.createElement('style');
            preloadStyle.innerHTML = this.preloadStyleContent;
            document.body.appendChild(preloadStyle);

            // Loading...
            DefaultLoadingManager.onProgress = ( item, loaded, total ) => {
                console.log('loading manager progress triggered');
                // All textures are done loading when loaded === total...
                this.incomingArena.loaded = (loaded === total);
            };
            this.currentArena = undefined;
        } else {
            // If WebGL is not supported...
            const warning = Detector.getWebGLErrorMessage();
            this.container.appendChild(warning);
        }
    }

    setArena = (sceneIndex: number): void => console.log(sceneIndex)

    setup(): Promise<void> {
        return new Promise((resolve, reject) => {
            import("./arenafactory").then(factory => {
                    let currentArenaIndex = 0;
                    this.loadArena(currentArenaIndex, factory.getArena(currentArenaIndex, this.container));
                    this.transition();
                    const arenas = Array.from(Array(factory.getArenaCount()).keys())
                    this.setArena = (arenaIndex: number) => {
                        if(arenaIndex in arenas && arenaIndex != currentArenaIndex) {
                            this.loadArena(arenaIndex, factory.getArena(arenaIndex, this.container));
                            this.transition();
                            currentArenaIndex = arenaIndex;
                        }
                    };
                    this.getArenaIndex = (): string[] => {
                        return factory.getArenaIndex();
                    }
                })
            .then(() => resolve())
            .catch(() => reject());
        });
    }

    getArenaIndex = (): string[] => []

    private finishLoading(arena: Arena): Promise<void> {
        return new Promise((resolve, reject) => {
            if(arena.needsLoading) {
                let loadingTime = 0;
                const intervalTime = 500;
                const wait = setInterval(() => {
                    if(arena.loaded){
                        clearInterval(wait);
                        resolve()
                    } else {
                        loadingTime += intervalTime;
                        if(loadingTime >= arena.loadingTimeout) {
                            clearInterval(wait);
                            reject(); // Took too long to load
                        }
                    }
                }, intervalTime);
            } else {
                resolve();
            }
        });
    }

    // Receives an Arena Name and an Arena Object to create within the scenery
    // Objects are stored in a dictionary with the name, and retreived if called
    // again during runtime.
    loadArena(arenaIndex: number, arena: Arena): void {
        if(this.arenaCache[arenaIndex] == undefined) {
            this.incomingArena = arena;
            this.arenaCache[arenaIndex] = arena;
        } else {
            this.incomingArena = this.arenaCache[arenaIndex];
            console.log('retrieval');
        }
    }

    /// Transition from an existing arena to the newly declared incoming arena
    private transition(): void {
        if(this.incomingArena !== undefined) {
            if(this.currentArena !== undefined) {
                this.outgoingArena = this.currentArena;
            }
            this.currentArena = this.incomingArena;
            this.currentArena.init();
            console.log(this.currentArena);
            this.currentArena.canvas().classList.add('preload');
            this.finishLoading(this.incomingArena)
                .then(() => {
                    if(this.outgoingArena !== undefined) {
                        this.outgoingArena.packup();
                    }
                    // Execute whatever transition was meant to move us to the next screen.
                    this.fadeOutArena(this.outgoingArena, 1)
                        .then( (canDestroy) => { // If fadeout returns true, destroy old arena
                            if(canDestroy) {
                                this.outgoingArena.destroy();
                            }
                            this.currentArena.canvas().classList.remove('preload');
                        });
                })
                .catch((e) => console.log(e));
        }
    }

    private fadeOutArena(e: Arena, time: number): Promise<boolean> {
        console.log('fadeout called on outgoing Arena');
        if(e != undefined) {
            return this.fadeOut(e.canvas(), time);
        }else {
            console.log('no outgoing Arena');
            return new Promise((resolve) => resolve(false))
        }
    }

    private fadeOut(e: HTMLElement, time: number): Promise<boolean> {
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
                    console.log('outgoing Arena faded out');
                    resolve(true);
                }
            }, time / 60);
        });
    }
}
