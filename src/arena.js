import { PerspectiveCamera } from "three";
export class Arena {
    // Constructor setup with crucial objects for every canvas
    constructor(_container) {
        this._container = _container;
        // Motion for a perspective
        this.moveBackward = false;
        this.moveForward = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.canJump = false;
        this.velocity = { x: 0, y: 0 };
        this.mouse = {
            coordinates: {
                x: 0,
                y: 0
            },
            percentage: {
                x: 0,
                y: 0
            }
        };
        this.viewer = {
            rho: 0,
            phi: 0,
            x: 0,
            y: 50,
            z: -200
        };
        this.setScene = (scene) => {
            this.scene = scene;
        };
        this.setRenderer = (renderer) => {
            this.renderer = renderer;
        };
        this.setCamera = (camera) => {
            this.camera = camera;
        };
        this.placeRenderer = () => {
            this._container.appendChild(this.renderer.domElement);
        };
        // Draws on Scene...
        this.render = () => {
            this.renderer.render(this.scene, this.camera);
        };
        // Maintains size of renderer...
        this.onWindowResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            this.renderer.setSize(width, height);
            if (this.camera instanceof PerspectiveCamera) {
                this.camera.aspect = (width / height);
                this.camera.updateProjectionMatrix();
            }
        };
        this.onKeyDown = (event) => {
            switch (event.key) {
                case "Space": // space
                    if (this.canJump === true)
                        this.velocity.y += 350;
                    this.canJump = false;
                    break;
                case "Up": // up
                case "w": // w
                    this.moveForward = true;
                    break;
                case "Left": // left
                case "a": // a
                    this.moveLeft = true;
                    break;
                case "Down": // down
                case "s": // s
                    this.moveBackward = true;
                    break;
                case "Right": // right
                case "d": // d
                    this.moveRight = true;
                    break;
            }
        };
        this.onKeyUp = (event) => {
            switch (event.key) {
                case "Up": // up
                case "w": // w
                    this.moveForward = false;
                    break;
                case "Left": // left
                case "a": // a
                    this.moveLeft = false;
                    break;
                case "Down": // down
                case "s": // s
                    this.moveBackward = false;
                    break;
                case "Right": // right
                case "d": // d
                    this.moveRight = false;
                    break;
            }
        };
        this.onMouseDown = (event) => {
            event.preventDefault();
        };
        this.onMouseMove = (event) => {
            const windowHalfX = window.innerWidth >> 1;
            const windowHalfY = window.innerHeight >> 1;
            this.mouse.coordinates.x = (event.clientX - windowHalfX);
            this.mouse.coordinates.y = (event.clientY - windowHalfY);
            this.mouse.percentage.x = this.mouse.coordinates.x / (window.innerWidth / 2);
            this.mouse.percentage.y = this.mouse.coordinates.x / (window.innerHeight / 2);
        };
        this.onTouchStart = (event) => {
            event.preventDefault();
        };
        this.onTouchMove = (event) => {
            event.preventDefault();
            this.onMouseMove(event.touches[0]);
        };
        this.onTouchEnd = (event) => {
            event.preventDefault();
            this.onMouseMove(event.touches[0]);
        };
        this.setEventListeners = () => {
            document.addEventListener('touchstart', this.onTouchStart, false);
            document.addEventListener('touchmove', this.onTouchMove, false);
            document.addEventListener('touchend', this.onTouchEnd, false);
            document.addEventListener('mousedown', this.onMouseDown, false);
            document.addEventListener('mousemove', this.onMouseMove, false);
            document.addEventListener('keydown', this.onKeyDown, false);
            document.addEventListener('keyup', this.onKeyUp, false);
            window.addEventListener('resize', this.onWindowResize, false);
        };
        this.clearEventListeners = () => {
            document.removeEventListener('touchstart', this.onTouchStart, false);
            document.removeEventListener('touchmove', this.onTouchMove, false);
            document.removeEventListener('touchend', this.onTouchEnd, false);
            document.removeEventListener('mousedown', this.onMouseDown, false);
            document.removeEventListener('mousemove', this.onMouseMove, false);
            document.removeEventListener('keydown', this.onKeyDown, false);
            document.removeEventListener('keyup', this.onKeyUp, false);
            window.removeEventListener('resize', this.onWindowResize, false);
        };
    }
    get canvas() {
        return this.renderer.domElement;
    }
    get container() {
        return this._container;
    }
    // Game Loop Logic [update, render, repeat]...
    gameLoop(time) {
        this.update(time);
        this.render();
    }
    packup() {
        this.clearEventListeners();
    }
    destroy() {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
}
