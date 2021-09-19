import './styles.scss';
import { Scenery } from './components/scenery';

const container = document.body;
const scenery = new Scenery();
scenery.init(container);

// document.querySelector('#transition')
//     .addEventListener('click', () => { 
//         scenery.setArena(new WorkdeskArena(container));
//         scenery.transition();
//     });

// create unique id
// "id" + Math.random().toString(16).slice(2);

document.querySelector('#reverse')
    .addEventListener('click', () => { 
        let currentArenaIndex = 0;
        const maxArenaIndex = 1;
        import("./components/arenafactory").then(factory => {
                setInterval(() => {
                    scenery.setArena(currentArenaIndex, factory.getArena(currentArenaIndex, container));
                    scenery.transition();
                    currentArenaIndex++;
                    if( currentArenaIndex > maxArenaIndex) {
                        currentArenaIndex = 0;
                    }
                }, 20000); // Toggle Arena every 20 seconds
            });
    });
