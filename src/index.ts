import './styles.scss';
import { Scenery } from './components/scenery';

const container = document.body;
const scenery = new Scenery();
scenery.init(container);

// create unique id
// "id" + Math.random().toString(16).slice(2);

let setScene = (sceneIndex: number): void => console.log(sceneIndex)
const setup = (): void => {
        import("./components/arenafactory").then(factory => {
                let currentArenaIndex = 0;
                scenery.setArena(currentArenaIndex, factory.getArena(currentArenaIndex, container));
                scenery.transition();
                const arenas = Array.from(Array(factory.getArenaCount()).keys())
                setScene = (arenaIndex: number) => {
                    if(arenaIndex in arenas && arenaIndex != currentArenaIndex) {
                        scenery.setArena(arenaIndex, factory.getArena(arenaIndex, container));
                        scenery.transition();
                        currentArenaIndex = arenaIndex;
                    }
                };
            });
    };

document.querySelector('#transition')
    .addEventListener('click', () => setScene(1), false);
document.querySelector('#setup')
    .addEventListener('click', setup, false);

