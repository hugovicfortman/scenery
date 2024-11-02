import { describe } from "@jest/globals";
import { Scenery } from "../src/components/scenery";

let item: Scenery;
let container: HTMLElement;

describe('Scenery', function () {
    beforeEach(() => {
        item = new Scenery();
        container = document.createElement('div');
    });

    it('Initializes with no components', function () {
        item.init(container);

        console.log(item.components);

        expect(item.components).toStrictEqual({});
    });
});