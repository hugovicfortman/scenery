import './styles.scss';
import { Scenery } from './components/scenery';

const container = document.body;
const scenery = new Scenery();
scenery.init(container);

// create unique id
// "id" + Math.random().toString(16).slice(2);

document.querySelector('#transition')
    .addEventListener('click', () => scenery.setScene(1), false);
document.querySelector('#setup')
    .addEventListener('click', () => scenery.setup(), false);

