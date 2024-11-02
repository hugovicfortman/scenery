var Ve = Object.defineProperty;
var Ye = (h, e, t) => e in h ? Ve(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var p = (h, e, t) => Ye(h, typeof e != "symbol" ? e + "" : e, t);
import { P as U, M as z, S as Q, B as We, a as Ze, W as J, b as de, T as te, c as N, F as Te, A as qe, R as Qe, d as Je, V as b, C as $e, e as K, f as G, Q as se, g as ye, h as L, i as Ne, j as et, k as pe, l as Oe, L as tt, m as Z, n as ke, o as j, p as O, q as st, r as ve, D as Fe, s as X, t as I, I as nt, u as it, O as He, v as ot, w as oe, x as rt, y as fe, z as je, E as me, N as Ue, G as at, H as re, J as ct, K as Ge, U as ht, X as lt, Y as ut, Z as dt, _ as pt, $ as ft, a0 as mt, a1 as gt, a2 as ae, a3 as _t, a4 as Tt, a5 as At, a6 as yt, a7 as Ke, a8 as we, a9 as ne, aa as wt, ab as Et, ac as xt, ad as Rt, ae as bt, af as St, ag as Lt, ah as Ee, ai as xe, aj as Re, ak as be, al as Mt, am as Pt, an as Dt, ao as It } from "./main-Dc6W8i1A.js";
class $ {
  // Constructor setup with crucial objects for every canvas
  constructor(e) {
    // Initialization monitor
    p(this, "isInitialized", !1);
    p(this, "_isReinitialized", !1);
    p(this, "loaded", !1);
    p(this, "loadingTimeout", 3e4);
    // Motion for a perspective
    p(this, "moveBackward", !1);
    p(this, "moveForward", !1);
    p(this, "moveRight", !1);
    p(this, "moveLeft", !1);
    p(this, "canJump", !1);
    p(this, "velocity", { x: 0, y: 0 });
    p(this, "mouse", {
      coordinates: {
        x: 0,
        y: 0
      },
      percentage: {
        x: 0,
        y: 0
      }
    });
    p(this, "viewer", {
      rho: 0,
      phi: 0,
      x: 0,
      y: 50,
      z: -200
    });
    p(this, "player", {
      jumpSpeed: 350
    });
    p(this, "scene");
    p(this, "renderer");
    p(this, "camera");
    p(this, "setScene", (e) => {
      this.scene = e;
    });
    p(this, "setRenderer", (e) => {
      this.renderer = e;
    });
    p(this, "setCamera", (e) => {
      this.camera = e;
    });
    p(this, "placeRenderer", () => {
      this._container.appendChild(this.renderer.domElement);
    });
    // Draws on Scene...
    p(this, "render", () => {
      this.renderer.render(this.scene, this.camera);
    });
    /**
     * Maintains size of renderer
     * Defaults to window size
     * Override this method to choose your custom size
     */
    p(this, "onWindowResize", () => {
      const e = window.innerWidth, t = window.innerHeight;
      this.renderer.setSize(e, t), this.camera instanceof U && (this.camera.aspect = e / t, this.camera.updateProjectionMatrix());
    });
    /**
     * Action to take when a key is pressed,
     *  uses WASD and cursor keys settings by default
     *  also sets a boolean for jumping action using space in fp games
     * @param event the keyboard event
     */
    p(this, "onKeyDown", (e) => {
      switch (e.key) {
        case "Space":
          this.canJump === !0 && (this.velocity.y += this.player.jumpSpeed), this.canJump = !1;
          break;
        case "Up":
        case "w":
          this.moveForward = !0;
          break;
        case "Left":
        case "a":
          this.moveLeft = !0;
          break;
        case "Down":
        case "s":
          this.moveBackward = !0;
          break;
        case "Right":
        case "d":
          this.moveRight = !0;
          break;
      }
    });
    /**
     * Action to take when a key is debounced,
     *  uses WASD and cursor keys settings by default
     * @param event the keyboard event
     */
    p(this, "onKeyUp", (e) => {
      switch (e.key) {
        case "Up":
        case "w":
          this.moveForward = !1;
          break;
        case "Left":
        case "a":
          this.moveLeft = !1;
          break;
        case "Down":
        case "s":
          this.moveBackward = !1;
          break;
        case "Right":
        case "d":
          this.moveRight = !1;
          break;
      }
    });
    /**
     * Action to take when a mouse is clicked, or screen tapped
     * @param event the event object
     */
    p(this, "onMouseDown", (e) => {
      e.preventDefault();
    });
    /**
     * Action to take when a mouse moves on the sreen
     * @param event the event object for either a touch or mouse movement
     */
    p(this, "onMouseMove", (e) => {
      const t = window.innerWidth >> 1, n = window.innerHeight >> 1;
      this.mouse.coordinates.x = e.clientX - t, this.mouse.coordinates.y = e.clientY - n, this.mouse.percentage.x = this.mouse.coordinates.x / (window.innerWidth / 2), this.mouse.percentage.y = this.mouse.coordinates.y / (window.innerHeight / 2);
    });
    /**
     * Action to take at the beginning of touch/swipe of device screen
     * @param event the event object
     */
    p(this, "onTouchStart", (e) => {
      e.preventDefault();
    });
    /**
     * Action to take during a swipe of the device screen
     * @param event the event object
     */
    p(this, "onTouchMove", (e) => {
      e.preventDefault(), this.onMouseMove(e.touches[0]);
    });
    /**
     * Action to take when a device screen is released after a swipe/touch
     * @param event the event object
     */
    p(this, "onTouchEnd", (e) => {
      e.preventDefault(), this.onMouseMove(e.touches[0]);
    });
    /**
     * Sets and activates any default eventlisteners on arena
     */
    p(this, "setEventListeners", () => {
      document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1), document.addEventListener("mousedown", this.onMouseDown, !1), document.addEventListener("mousemove", this.onMouseMove, !1), document.addEventListener("keydown", this.onKeyDown, !1), document.addEventListener("keyup", this.onKeyUp, !1), window.addEventListener("resize", this.onWindowResize, !1);
    });
    /**
     * Clears off any active default eventlisteners on arena
     */
    p(this, "clearEventListeners", () => {
      document.removeEventListener("touchstart", this.onTouchStart, !1), document.removeEventListener("touchmove", this.onTouchMove, !1), document.removeEventListener("touchend", this.onTouchEnd, !1), document.removeEventListener("mousedown", this.onMouseDown, !1), document.removeEventListener("mousemove", this.onMouseMove, !1), document.removeEventListener("keydown", this.onKeyDown, !1), document.removeEventListener("keyup", this.onKeyUp, !1), window.removeEventListener("resize", this.onWindowResize, !1);
    });
    this._container = e;
  }
  isReinitialized() {
    return this._isReinitialized;
  }
  initialize() {
    this.isInitialized = !0;
  }
  canvas() {
    return this.renderer.domElement;
  }
  container() {
    return this._container;
  }
  // Game Loop Logic [update, render, repeat]...
  gameLoop(e) {
    this.update(e), this.render();
  }
  /**
   * Runs a pre-disposal sequence for an arena, disposing off eventlisteners
   */
  packup() {
    this.clearEventListeners();
  }
  /**
   * Destroys an arena by disposing its renderer, mesh geometry materials
   */
  destroy() {
    var e;
    this.renderer.dispose(), this.scene.traverse((t) => {
      if (t instanceof z)
        if (t.geometry.dispose(), t.material.isMaterial)
          t.material.dispose();
        else
          for (const n of t.material)
            n.dispose();
    }), this.renderer.forceContextLoss(), this.scene.clear(), (e = this.renderer.domElement.parentNode) == null || e.removeChild(this.renderer.domElement), this.isInitialized = !1, this._isReinitialized = !0, console.log("arena destroyed");
  }
}
class Ct extends $ {
  constructor(t) {
    super(t);
    p(this, "geometry");
    p(this, "material");
    p(this, "mesh");
    // Initialize required threejs components...
    p(this, "init", () => {
      if (this.isInitialized)
        return;
      super.initialize();
      const t = window.innerWidth / window.innerHeight, n = new U(70, t, 0.01, 10);
      n.position.z = 1;
      const s = new Q();
      this.geometry = new We(0.2, 0.2, 0.2), this.material = new Ze(), this.mesh = new z(this.geometry, this.material), s.add(this.mesh);
      const i = new J({ antialias: !0 });
      i.setSize(window.innerWidth, window.innerHeight), i.setAnimationLoop(this.gameLoop), this.setCamera(n), this.setScene(s), this.setRenderer(i), this.placeRenderer(), this.onMouseDown = this.onKeyDown = this.onKeyUp = () => null, this.setEventListeners();
    });
    p(this, "needsLoading", !1);
    p(this, "focus", !0);
    // Updates scene...
    p(this, "update", (t) => {
      this.mesh.rotation.x = t / 2e3, this.mesh.rotation.y = t / 1e3;
    });
    p(this, "gameLoop", (t) => {
      super.gameLoop(t);
    });
  }
  packup() {
    super.packup();
  }
}
class Nt extends $ {
  constructor(t) {
    super(t);
    p(this, "focus", !1);
    p(this, "textureSrc", "/images/scenery/");
    p(this, "targetCamera");
    p(this, "scenery", {
      world: {
        flatScene: {
          TextureImg: this.textureSrc + "flatScene.webp"
        },
        steam: {
          current: 0,
          last: 4,
          TextureImg: this.textureSrc + "steam-x.webp",
          incident: new Array(),
          reflected: new Array(),
          wafting: !0,
          animate: () => {
          }
        }
      },
      time: {
        prevTime: performance.now(),
        currentTime: 0
      }
    });
    // Initialize required threejs components...
    p(this, "init", () => {
      if (this.isInitialized)
        return;
      super.initialize();
      const t = new Q(), n = window.innerWidth / window.innerHeight, s = new U(75, n, 1, 1e4), i = new J({ antialias: !0 });
      i.setPixelRatio(window.devicePixelRatio), i.setSize(window.innerWidth, window.innerHeight), i.setClearColor(0, 1), i.setAnimationLoop(this.gameLoop), s.position.z = this.viewer.z, s.position.y = this.viewer.y, this.targetCamera = t.position.clone(), s.lookAt(this.targetCamera), t.add(s), this.firstPaint(t), this.drawSteam(t), this.isReinitialized || (this.scenery.world.steam.animate = this.animateSteam), this.setCamera(s), this.setScene(t), this.setRenderer(i), this.placeRenderer(), this.onMouseDown = this.onKeyDown = this.onKeyUp = () => null, this.setEventListeners();
    });
    p(this, "needsLoading", !0);
    p(this, "firstPaint", (t) => {
      const n = new de(700, 500), s = new te().load(this.scenery.world.flatScene.TextureImg), i = new N({ map: s, side: Te }), o = new z(n, i);
      o.rotation.x = Math.PI / 64, o.rotation.y = Math.PI, o.receiveShadow = !0, o.position.y = 100, t.add(o);
    });
    p(this, "drawSteam", (t) => {
      this.scenery.world.steam.incident = [], this.scenery.world.steam.reflected = [];
      for (let n = 0; n < 5; n++) {
        const s = this.getSteam(n), i = s.clone();
        s.position.y = 160, s.position.x = 75, s.rotation.x = Math.PI / 64, s.rotation.y = Math.PI, this.scenery.world.steam.incident.push(s), i.position.y = 95, i.position.x = 300, i.rotation.x = Math.PI / 64, i.rotation.y = Math.PI, i.rotation.z = Math.PI / 4, i.position.z = -10, this.scenery.world.steam.reflected.push(i), t.add(s), t.add(i);
      }
      this.resetSteam();
    });
    p(this, "getSteam", (t) => {
      const n = new de(100, 100), s = new te().load(this.scenery.world.steam.TextureImg.replace("x", t.toString())), i = new N({ map: s, transparent: !0, color: 10066329, blending: qe });
      return new z(n, i);
    });
    p(this, "clearSteam", () => {
      this.scenery.world.steam.incident = [], this.scenery.world.steam.reflected = [];
    });
    p(this, "resetSteam", () => {
      for (let t = 0; t < 5; t++) {
        const n = this.scenery.world.steam.incident[t].material;
        n instanceof N && (n.opacity = 0);
      }
    });
    p(this, "animateSteam", () => {
      let t = this.scenery.world.steam.current, n = this.scenery.world.steam.last;
      const s = this.scenery.world.steam.incident[t], i = this.scenery.world.steam.incident[n];
      let o = s.material.opacity, a = i.material.opacity;
      o += 0.025, o >= 1 && (o = 1, n = t, t = t == 4 ? 0 : t + 1, this.resetSteam()), a -= 0.025, a <= 0 && (a = 0), s.material.opacity = o, i.material.opacity = a, this.scenery.world.steam.current = t, this.scenery.world.steam.last = n;
    });
    p(this, "update", (t) => {
      var n;
      this.scenery.world.steam.animate(), this.scenery.time.currentTime = t, this.targetCamera.x += (-this.mouse.percentage.x * 5 - this.targetCamera.x) / 10, this.targetCamera.y += (-(this.mouse.percentage.y * 5) + 40 - this.targetCamera.y) / 10, (n = this.camera) == null || n.lookAt(this.targetCamera);
    });
    p(this, "gameLoop", (t) => {
      super.gameLoop(t);
    });
  }
}
class Ot extends $ {
  constructor(t) {
    super(t);
    p(this, "focus", !1);
    p(this, "textureSrc", "/images/scenery/");
    p(this, "targetCamera");
    p(this, "scenery", {
      world: {
        flatScene: {
          TextureImg: this.textureSrc + "flatScene-live.webp"
        }
      },
      time: {
        prevTime: performance.now(),
        currentTime: 0
      }
    });
    // Initialize required threejs components...
    p(this, "init", () => {
      if (this.isInitialized)
        return;
      super.initialize();
      const t = new Q(), n = window.innerWidth / window.innerHeight, s = new U(75, n, 1, 1e4), i = new J({ antialias: !0 });
      i.setPixelRatio(window.devicePixelRatio), i.setSize(window.innerWidth, window.innerHeight), i.setClearColor(0, 1), i.setAnimationLoop(this.gameLoop), s.position.z = this.viewer.z, s.position.y = this.viewer.y, this.targetCamera = t.position.clone(), s.lookAt(this.targetCamera), t.add(s), this.firstPaint(t), this.setCamera(s), this.setScene(t), this.setRenderer(i), this.placeRenderer(), this.onMouseDown = this.onKeyDown = this.onKeyUp = () => null, this.setEventListeners();
    });
    p(this, "needsLoading", !0);
    p(this, "firstPaint", (t) => {
      const n = new de(700, 500), s = new te().load(this.scenery.world.flatScene.TextureImg), i = new N({ map: s, side: Te }), o = new z(n, i);
      o.rotation.x = Math.PI / 64, o.rotation.y = Math.PI, o.receiveShadow = !0, o.position.y = 100, t.add(o);
    });
    p(this, "update", () => {
      var t;
      this.targetCamera.x += (-this.mouse.percentage.x * 5 - this.targetCamera.x) / 10, this.targetCamera.y += (-(this.mouse.percentage.y * 5) + 40 - this.targetCamera.y) / 10, (t = this.camera) == null || t.lookAt(this.targetCamera);
    });
    p(this, "gameLoop", (t) => {
      super.gameLoop(t);
    });
  }
}
class kt extends $ {
  constructor(t) {
    super(t);
    p(this, "needsLoading", !1);
    p(this, "focus", !1);
    p(this, "gameLoop", (t) => {
      super.gameLoop(t);
    });
  }
  init() {
    if (this.isInitialized)
      return;
    super.initialize();
    const t = new Q(), n = window.innerWidth / window.innerHeight, s = new U(75, n, 1, 1e4), i = new J({ antialias: !0 });
    this.setCamera(s), this.setScene(t), this.setRenderer(i), this.placeRenderer(), this.onMouseDown = this.onKeyDown = this.onKeyUp = () => null, this.setEventListeners();
  }
  update(t) {
    throw new Error(`Method not implemented.${t}`);
  }
}
const Se = { type: "change" }, Ae = { type: "start" }, Be = { type: "end" }, ee = new Qe(), Le = new Je(), vt = Math.cos(70 * Ne.DEG2RAD), x = new b(), S = 2 * Math.PI, w = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, ce = 1e-6;
class Ft extends $e {
  constructor(e, t = null) {
    super(e, t), this.state = w.NONE, this.enabled = !0, this.target = new b(), this.cursor = new b(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: K.ROTATE, MIDDLE: K.DOLLY, RIGHT: K.PAN }, this.touches = { ONE: G.ROTATE, TWO: G.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new b(), this._lastQuaternion = new se(), this._lastTargetPosition = new b(), this._quat = new se().setFromUnitVectors(e.up, new b(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new ye(), this._sphericalDelta = new ye(), this._scale = 1, this._panOffset = new b(), this._rotateStart = new L(), this._rotateEnd = new L(), this._rotateDelta = new L(), this._panStart = new L(), this._panEnd = new L(), this._panDelta = new L(), this._dollyStart = new L(), this._dollyEnd = new L(), this._dollyDelta = new L(), this._dollyDirection = new b(), this._mouse = new L(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = jt.bind(this), this._onPointerDown = Ht.bind(this), this._onPointerUp = Ut.bind(this), this._onContextMenu = Yt.bind(this), this._onMouseWheel = Bt.bind(this), this._onKeyDown = zt.bind(this), this._onTouchStart = Xt.bind(this), this._onTouchMove = Vt.bind(this), this._onMouseDown = Gt.bind(this), this._onMouseMove = Kt.bind(this), this._interceptControlDown = Wt.bind(this), this._interceptControlUp = Zt.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Se), this.update(), this.state = w.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    x.copy(t).sub(this.target), x.applyQuaternion(this._quat), this._spherical.setFromVector3(x), this.autoRotate && this.state === w.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += S : n > Math.PI && (n -= S), s < -Math.PI ? s += S : s > Math.PI && (s -= S), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let i = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = o != this._spherical.radius;
    }
    if (x.setFromSpherical(this._spherical), x.applyQuaternion(this._quatInverse), t.copy(this.target).add(x), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = x.length();
        o = this._clampDistance(a * this._scale);
        const r = a - o;
        this.object.position.addScaledVector(this._dollyDirection, r), this.object.updateMatrixWorld(), i = !!r;
      } else if (this.object.isOrthographicCamera) {
        const a = new b(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const r = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = r !== this.object.zoom;
        const c = new b(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = x.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (ee.origin.copy(this.object.position), ee.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ee.direction)) < vt ? this.object.lookAt(this.target) : (Le.setFromNormalAndCoplanarPoint(this.object.up, this.target), ee.intersectPlane(Le, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > ce || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > ce || this._lastTargetPosition.distanceToSquared(this.target) > ce ? (this.dispatchEvent(Se), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? S / 60 * this.autoRotateSpeed * e : S / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    x.setFromMatrixColumn(t, 0), x.multiplyScalar(-e), this._panOffset.add(x);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? x.setFromMatrixColumn(t, 1) : (x.setFromMatrixColumn(t, 0), x.crossVectors(this.object.up, x)), x.multiplyScalar(e), this._panOffset.add(x);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      x.copy(s).sub(this.target);
      let i = x.length();
      i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), s = e - n.left, i = t - n.top, o = n.width, a = n.height;
    this._mouse.x = s / o * 2 - 1, this._mouse.y = -(i / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(S * this._rotateDelta.x / t.clientHeight), this._rotateUp(S * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(S * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-S * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(S * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-S * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, i = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, i);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + n.x), i = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(s, i);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(S * this._rotateDelta.x / t.clientHeight), this._rotateUp(S * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, i = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, i), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (e.pageX + t.x) * 0.5, a = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  // pointers
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new L(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  //
  _customWheelEvent(e) {
    const t = e.deltaMode, n = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Ht(h) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(h.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(h) && (this._addPointer(h), h.pointerType === "touch" ? this._onTouchStart(h) : this._onMouseDown(h)));
}
function jt(h) {
  this.enabled !== !1 && (h.pointerType === "touch" ? this._onTouchMove(h) : this._onMouseMove(h));
}
function Ut(h) {
  switch (this._removePointer(h), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(h.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Be), this.state = w.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function Gt(h) {
  let e;
  switch (h.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case K.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(h), this.state = w.DOLLY;
      break;
    case K.ROTATE:
      if (h.ctrlKey || h.metaKey || h.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(h), this.state = w.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(h), this.state = w.ROTATE;
      }
      break;
    case K.PAN:
      if (h.ctrlKey || h.metaKey || h.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(h), this.state = w.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(h), this.state = w.PAN;
      }
      break;
    default:
      this.state = w.NONE;
  }
  this.state !== w.NONE && this.dispatchEvent(Ae);
}
function Kt(h) {
  switch (this.state) {
    case w.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(h);
      break;
    case w.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(h);
      break;
    case w.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(h);
      break;
  }
}
function Bt(h) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== w.NONE || (h.preventDefault(), this.dispatchEvent(Ae), this._handleMouseWheel(this._customWheelEvent(h)), this.dispatchEvent(Be));
}
function zt(h) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(h);
}
function Xt(h) {
  switch (this._trackPointer(h), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case G.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(h), this.state = w.TOUCH_ROTATE;
          break;
        case G.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(h), this.state = w.TOUCH_PAN;
          break;
        default:
          this.state = w.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case G.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(h), this.state = w.TOUCH_DOLLY_PAN;
          break;
        case G.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(h), this.state = w.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = w.NONE;
      }
      break;
    default:
      this.state = w.NONE;
  }
  this.state !== w.NONE && this.dispatchEvent(Ae);
}
function Vt(h) {
  switch (this._trackPointer(h), this.state) {
    case w.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(h), this.update();
      break;
    case w.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(h), this.update();
      break;
    case w.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(h), this.update();
      break;
    case w.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(h), this.update();
      break;
    default:
      this.state = w.NONE;
  }
}
function Yt(h) {
  this.enabled !== !1 && h.preventDefault();
}
function Wt(h) {
  h.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function Zt(h) {
  h.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function Me(h, e) {
  if (e === et)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), h;
  if (e === pe || e === Oe) {
    let t = h.getIndex();
    if (t === null) {
      const o = [], a = h.getAttribute("position");
      if (a !== void 0) {
        for (let r = 0; r < a.count; r++)
          o.push(r);
        h.setIndex(o), t = h.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), h;
    }
    const n = t.count - 2, s = [];
    if (e === pe)
      for (let o = 1; o <= n; o++)
        s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = h.clone();
    return i.setIndex(s), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), h;
}
class qt extends tt {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ts(t);
    }), this.register(function(t) {
      return new ss(t);
    }), this.register(function(t) {
      return new us(t);
    }), this.register(function(t) {
      return new ds(t);
    }), this.register(function(t) {
      return new ps(t);
    }), this.register(function(t) {
      return new is(t);
    }), this.register(function(t) {
      return new os(t);
    }), this.register(function(t) {
      return new rs(t);
    }), this.register(function(t) {
      return new as(t);
    }), this.register(function(t) {
      return new es(t);
    }), this.register(function(t) {
      return new cs(t);
    }), this.register(function(t) {
      return new ns(t);
    }), this.register(function(t) {
      return new ls(t);
    }), this.register(function(t) {
      return new hs(t);
    }), this.register(function(t) {
      return new Jt(t);
    }), this.register(function(t) {
      return new fs(t);
    }), this.register(function(t) {
      return new ms(t);
    });
  }
  load(e, t, n, s) {
    const i = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = Z.extractUrlBase(e);
      o = Z.resolveURL(c, this.path);
    } else
      o = Z.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      s ? s(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }, r = new ke(this.manager);
    r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, function(c) {
      try {
        i.parse(c, o, function(u) {
          t(u), i.manager.itemEnd(e);
        }, a);
      } catch (u) {
        a(u);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, s) {
    let i;
    const o = {}, a = {}, r = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (r.decode(new Uint8Array(e, 0, 4)) === ze) {
        try {
          o[_.KHR_BINARY_GLTF] = new gs(e);
        } catch (l) {
          s && s(l);
          return;
        }
        i = JSON.parse(o[_.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(r.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Ps(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const l = this.pluginCallbacks[u](c);
      l.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[l.name] = l, o[l.name] = !0;
    }
    if (i.extensionsUsed)
      for (let u = 0; u < i.extensionsUsed.length; ++u) {
        const l = i.extensionsUsed[u], d = i.extensionsRequired || [];
        switch (l) {
          case _.KHR_MATERIALS_UNLIT:
            o[l] = new $t();
            break;
          case _.KHR_DRACO_MESH_COMPRESSION:
            o[l] = new _s(i, this.dracoLoader);
            break;
          case _.KHR_TEXTURE_TRANSFORM:
            o[l] = new Ts();
            break;
          case _.KHR_MESH_QUANTIZATION:
            o[l] = new As();
            break;
          default:
            d.indexOf(l) >= 0 && a[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
        }
      }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, t, s, i);
    });
  }
}
function Qt() {
  let h = {};
  return {
    get: function(e) {
      return h[e];
    },
    add: function(e, t) {
      h[e] = t;
    },
    remove: function(e) {
      delete h[e];
    },
    removeAll: function() {
      h = {};
    }
  };
}
const _ = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Jt {
  constructor(e) {
    this.parser = e, this.name = _.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s) return s;
    const i = t.json, r = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new j(16777215);
    r.color !== void 0 && u.setRGB(r.color[0], r.color[1], r.color[2], O);
    const l = r.range !== void 0 ? r.range : 0;
    switch (r.type) {
      case "directional":
        c = new Fe(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new ve(u), c.distance = l;
        break;
      case "spot":
        c = new st(u), c.distance = l, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, c.angle = r.spot.outerConeAngle, c.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, C(c, r), r.intensity !== void 0 && (c.intensity = r.intensity), c.name = t.createUniqueName(r.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(r) {
      return n._getNodeRef(t.cache, a, r);
    });
  }
}
class $t {
  constructor() {
    this.name = _.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return N;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new j(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const o = i.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], O), e.opacity = o[3];
      }
      i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, X));
    }
    return Promise.all(s);
  }
}
class es {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class ts {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new L(a, a);
    }
    return Promise.all(i);
  }
}
class ss {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class ns {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class is {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new j(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], O);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, X)), o.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
  }
}
class os {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
  }
}
class rs {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new j().setRGB(a[0], a[1], a[2], O), Promise.all(i);
  }
}
class as {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class cs {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new j().setRGB(a[0], a[1], a[2], O), o.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, X)), Promise.all(i);
  }
}
class hs {
  constructor(e) {
    this.parser = e, this.name = _.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(i);
  }
}
class ls {
  constructor(e) {
    this.parser = e, this.name = _.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : I;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(i);
  }
}
class us {
  constructor(e) {
    this.parser = e, this.name = _.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, o);
  }
}
class ds {
  constructor(e) {
    this.parser = e, this.name = _.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], a = s.images[o.source];
    let r = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (r = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, r);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class ps {
  constructor(e) {
    this.parser = e, this.name = _.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], a = s.images[o.source];
    let r = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (r = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, r);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class fs {
  constructor(e) {
    this.name = _.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(a) {
        const r = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, l = s.byteStride, d = new Uint8Array(a, r, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, l, d, s.mode, s.filter).then(function(f) {
          return f.buffer;
        }) : o.ready.then(function() {
          const f = new ArrayBuffer(u * l);
          return o.decodeGltfBuffer(new Uint8Array(f), u, l, d, s.mode, s.filter), f;
        });
      });
    } else
      return null;
  }
}
class ms {
  constructor(e) {
    this.name = _.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives)
      if (c.mode !== M.TRIANGLES && c.mode !== M.TRIANGLE_STRIP && c.mode !== M.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], r = {};
    for (const c in o)
      a.push(this.parser.getDependency("accessor", o[c]).then((u) => (r[c] = u, r[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const u = c.pop(), l = u.isGroup ? u.children : [u], d = c[0].count, f = [];
      for (const g of l) {
        const A = new ne(), m = new b(), T = new se(), E = new b(1, 1, 1), R = new nt(g.geometry, g.material, d);
        for (let y = 0; y < d; y++)
          r.TRANSLATION && m.fromBufferAttribute(r.TRANSLATION, y), r.ROTATION && T.fromBufferAttribute(r.ROTATION, y), r.SCALE && E.fromBufferAttribute(r.SCALE, y), R.setMatrixAt(y, A.compose(m, T, E));
        for (const y in r)
          if (y === "_COLOR_0") {
            const D = r[y];
            R.instanceColor = new it(D.array, D.itemSize, D.normalized);
          } else y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && g.geometry.setAttribute(y, r[y]);
        He.prototype.copy.call(R, g), this.parser.assignFinalMaterial(R), f.push(R);
      }
      return u.isGroup ? (u.clear(), u.add(...f), u) : f[0];
    }));
  }
}
const ze = "glTF", W = 12, Pe = { JSON: 1313821514, BIN: 5130562 };
class gs {
  constructor(e) {
    this.name = _.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, W), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== ze)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - W, i = new DataView(e, W);
    let o = 0;
    for (; o < s; ) {
      const a = i.getUint32(o, !0);
      o += 4;
      const r = i.getUint32(o, !0);
      if (o += 4, r === Pe.JSON) {
        const c = new Uint8Array(e, W + o, a);
        this.content = n.decode(c);
      } else if (r === Pe.BIN) {
        const c = W + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class _s {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = _.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, r = {}, c = {};
    for (const u in o) {
      const l = ge[u] || u.toLowerCase();
      a[l] = o[u];
    }
    for (const u in e.attributes) {
      const l = ge[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], f = B[d.componentType];
        c[l] = f.name, r[l] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(u) {
      return new Promise(function(l, d) {
        s.decodeDracoFile(u, function(f) {
          for (const g in f.attributes) {
            const A = f.attributes[g], m = r[g];
            m !== void 0 && (A.normalized = m);
          }
          l(f);
        }, a, c, O, d);
      });
    });
  }
}
class Ts {
  constructor() {
    this.name = _.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class As {
  constructor() {
    this.name = _.KHR_MESH_QUANTIZATION;
  }
}
class Xe extends Dt {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
    for (let o = 0; o !== s; o++)
      t[o] = n[i + o];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, r = a * 2, c = a * 3, u = s - t, l = (n - t) / u, d = l * l, f = d * l, g = e * c, A = g - c, m = -2 * f + 3 * d, T = f - d, E = 1 - m, R = T - d + l;
    for (let y = 0; y !== a; y++) {
      const D = o[A + y + a], k = o[A + y + r] * u, P = o[g + y + a], Y = o[g + y] * u;
      i[y] = E * D + R * k + m * P + T * Y;
    }
    return i;
  }
}
const ys = new se();
class ws extends Xe {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return ys.fromArray(i).normalize().toArray(i), i;
  }
}
const M = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, B = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, De = {
  9728: Ue,
  9729: fe,
  9984: wt,
  9985: Et,
  9986: xt,
  9987: je
}, Ie = {
  33071: Rt,
  33648: bt,
  10497: me
}, he = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ge = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, F = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Es = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ke,
  STEP: St
}, le = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function xs(h) {
  return h.DefaultMaterial === void 0 && (h.DefaultMaterial = new Ge({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Te
  })), h.DefaultMaterial;
}
function H(h, e, t) {
  for (const n in t.extensions)
    h[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function C(h, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(h.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Rs(h, e, t) {
  let n = !1, s = !1, i = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const l = e[c];
    if (l.POSITION !== void 0 && (n = !0), l.NORMAL !== void 0 && (s = !0), l.COLOR_0 !== void 0 && (i = !0), n && s && i) break;
  }
  if (!n && !s && !i) return Promise.resolve(h);
  const o = [], a = [], r = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const l = e[c];
    if (n) {
      const d = l.POSITION !== void 0 ? t.getDependency("accessor", l.POSITION) : h.attributes.position;
      o.push(d);
    }
    if (s) {
      const d = l.NORMAL !== void 0 ? t.getDependency("accessor", l.NORMAL) : h.attributes.normal;
      a.push(d);
    }
    if (i) {
      const d = l.COLOR_0 !== void 0 ? t.getDependency("accessor", l.COLOR_0) : h.attributes.color;
      r.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(r)
  ]).then(function(c) {
    const u = c[0], l = c[1], d = c[2];
    return n && (h.morphAttributes.position = u), s && (h.morphAttributes.normal = l), i && (h.morphAttributes.color = d), h.morphTargetsRelative = !0, h;
  });
}
function bs(h, e) {
  if (h.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      h.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (h.morphTargetInfluences.length === t.length) {
      h.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        h.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ss(h) {
  let e;
  const t = h.extensions && h.extensions[_.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ue(t.attributes) : e = h.indices + ":" + ue(h.attributes) + ":" + h.mode, h.targets !== void 0)
    for (let n = 0, s = h.targets.length; n < s; n++)
      e += ":" + ue(h.targets[n]);
  return e;
}
function ue(h) {
  let e = "";
  const t = Object.keys(h).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + h[t[n]] + ";";
  return e;
}
function _e(h) {
  switch (h) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Ls(h) {
  return h.search(/\.jpe?g($|\?)/i) > 0 || h.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : h.search(/\.webp($|\?)/i) > 0 || h.search(/^data\:image\/webp/) === 0 ? "image/webp" : h.search(/\.ktx2($|\?)/i) > 0 || h.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Ms = new ne();
class Ps {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Qt(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, s = -1, i = !1, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const r = a.match(/Version\/(\d+)/);
      s = n && r ? parseInt(r[1], 10) : -1, i = a.indexOf("Firefox") > -1, o = i ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && s < 17 || i && o < 98 ? this.textureLoader = new te(this.options.manager) : this.textureLoader = new ot(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ke(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][s.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      return H(i, a, s), C(a, s), Promise.all(n._invokeAll(function(r) {
        return r.afterRoot && r.afterRoot(a);
      })).then(function() {
        for (const r of a.scenes)
          r.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const o = t[s].joints;
      for (let a = 0, r = o.length; a < r; a++)
        e[o[a]].isBone = !0;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const o = e[s];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const s = n.clone(), i = (o, a) => {
      const r = this.associations.get(o);
      r != null && this.associations.set(a, r);
      for (const [c, u] of o.children.entries())
        i(u, a.children[c]);
    };
    return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(i, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[_.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, o) {
      n.load(Z.resolveURL(t.uri, s.path), i, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = he[s.type], a = B[s.componentType], r = s.normalized === !0, c = new a(s.count * o);
      return Promise.resolve(new oe(c, o, r));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(o) {
      const a = o[0], r = he[s.type], c = B[s.componentType], u = c.BYTES_PER_ELEMENT, l = u * r, d = s.byteOffset || 0, f = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, g = s.normalized === !0;
      let A, m;
      if (f && f !== l) {
        const T = Math.floor(d / f), E = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + T + ":" + s.count;
        let R = t.cache.get(E);
        R || (A = new c(a, T * f, s.count * f / u), R = new rt(A, f / u), t.cache.add(E, R)), m = new Lt(R, r, d % f / u, g);
      } else
        a === null ? A = new c(s.count * r) : A = new c(a, d, s.count * r), m = new oe(A, r, g);
      if (s.sparse !== void 0) {
        const T = he.SCALAR, E = B[s.sparse.indices.componentType], R = s.sparse.indices.byteOffset || 0, y = s.sparse.values.byteOffset || 0, D = new E(o[1], R, s.sparse.count * T), k = new c(o[2], y, s.sparse.count * r);
        a !== null && (m = new oe(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let P = 0, Y = D.length; P < Y; P++) {
          const v = D[P];
          if (m.setX(v, k[P * r]), r >= 2 && m.setY(v, k[P * r + 1]), r >= 3 && m.setZ(v, k[P * r + 2]), r >= 4 && m.setW(v, k[P * r + 3]), r >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, o = t.images[i];
    let a = this.textureLoader;
    if (o.uri) {
      const r = n.manager.getHandler(o.uri);
      r !== null && (a = r);
    }
    return this.loadTextureImage(e, i, a);
  }
  loadTextureImage(e, t, n) {
    const s = this, i = this.json, o = i.textures[e], a = i.images[t], r = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[r])
      return this.textureCache[r];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (u.name = a.uri);
      const d = (i.samplers || {})[o.sampler] || {};
      return u.magFilter = De[d.magFilter] || fe, u.minFilter = De[d.minFilter] || je, u.wrapS = Ie[d.wrapS] || me, u.wrapT = Ie[d.wrapT] || me, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== Ue && u.minFilter !== fe, s.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[r] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((l) => l.clone());
    const o = s.images[e], a = self.URL || self.webkitURL;
    let r = o.uri || "", c = !1;
    if (o.bufferView !== void 0)
      r = n.getDependency("bufferView", o.bufferView).then(function(l) {
        c = !0;
        const d = new Blob([l], { type: o.mimeType });
        return r = a.createObjectURL(d), r;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(r).then(function(l) {
      return new Promise(function(d, f) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(A) {
          const m = new Ee(A);
          m.needsUpdate = !0, d(m);
        }), t.load(Z.resolveURL(l, i.path), g, void 0, f);
      });
    }).then(function(l) {
      return c === !0 && a.revokeObjectURL(r), C(l, o), l.userData.mimeType = o.mimeType || Ls(o.uri), l;
    }).catch(function(l) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", r), l;
    });
    return this.sourceCache[e] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), i.extensions[_.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[_.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const r = i.associations.get(o);
          o = i.extensions[_.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), i.associations.set(o, r);
        }
      }
      return s !== void 0 && (o.colorSpace = s), e[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let r = this.cache.get(a);
      r || (r = new at(), re.prototype.copy.call(r, n), r.color.copy(n.color), r.map = n.map, r.sizeAttenuation = !1, this.cache.add(a, r)), n = r;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let r = this.cache.get(a);
      r || (r = new ct(), re.prototype.copy.call(r, n), r.color.copy(n.color), r.map = n.map, this.cache.add(a, r)), n = r;
    }
    if (s || i || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let r = this.cache.get(a);
      r || (r = n.clone(), i && (r.vertexColors = !0), o && (r.flatShading = !0), s && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(n))), n = r;
    }
    e.material = n;
  }
  getMaterialType() {
    return Ge;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, i = n.materials[e];
    let o;
    const a = {}, r = i.extensions || {}, c = [];
    if (r[_.KHR_MATERIALS_UNLIT]) {
      const l = s[_.KHR_MATERIALS_UNLIT];
      o = l.getMaterialType(), c.push(l.extendParams(a, i, t));
    } else {
      const l = i.pbrMetallicRoughness || {};
      if (a.color = new j(1, 1, 1), a.opacity = 1, Array.isArray(l.baseColorFactor)) {
        const d = l.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], O), a.opacity = d[3];
      }
      l.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", l.baseColorTexture, X)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    i.doubleSided === !0 && (a.side = ht);
    const u = i.alphaMode || le.OPAQUE;
    if (u === le.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === le.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== N && (c.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new L(1, 1), i.normalTexture.scale !== void 0)) {
      const l = i.normalTexture.scale;
      a.normalScale.set(l, l);
    }
    if (i.occlusionTexture !== void 0 && o !== N && (c.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== N) {
      const l = i.emissiveFactor;
      a.emissive = new j().setRGB(l[0], l[1], l[2], O);
    }
    return i.emissiveTexture !== void 0 && o !== N && c.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, X)), Promise.all(c).then(function() {
      const l = new o(a);
      return i.name && (l.name = i.name), C(l, i), t.associations.set(l, { materials: e }), i.extensions && H(s, l, i), l;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = lt.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function i(a) {
      return n[_.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(r) {
        return Ce(r, a, t);
      });
    }
    const o = [];
    for (let a = 0, r = e.length; a < r; a++) {
      const c = e[a], u = Ss(c), l = s[u];
      if (l)
        o.push(l.promise);
      else {
        let d;
        c.extensions && c.extensions[_.KHR_DRACO_MESH_COMPRESSION] ? d = i(c) : d = Ce(new ut(), c, t), s[u] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, i = n.meshes[e], o = i.primitives, a = [];
    for (let r = 0, c = o.length; r < c; r++) {
      const u = o[r].material === void 0 ? xs(this.cache) : this.getDependency("material", o[r].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(r) {
      const c = r.slice(0, r.length - 1), u = r[r.length - 1], l = [];
      for (let f = 0, g = u.length; f < g; f++) {
        const A = u[f], m = o[f];
        let T;
        const E = c[f];
        if (m.mode === M.TRIANGLES || m.mode === M.TRIANGLE_STRIP || m.mode === M.TRIANGLE_FAN || m.mode === void 0)
          T = i.isSkinnedMesh === !0 ? new dt(A, E) : new z(A, E), T.isSkinnedMesh === !0 && T.normalizeSkinWeights(), m.mode === M.TRIANGLE_STRIP ? T.geometry = Me(T.geometry, Oe) : m.mode === M.TRIANGLE_FAN && (T.geometry = Me(T.geometry, pe));
        else if (m.mode === M.LINES)
          T = new pt(A, E);
        else if (m.mode === M.LINE_STRIP)
          T = new ft(A, E);
        else if (m.mode === M.LINE_LOOP)
          T = new mt(A, E);
        else if (m.mode === M.POINTS)
          T = new gt(A, E);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(T.geometry.morphAttributes).length > 0 && bs(T, i), T.name = t.createUniqueName(i.name || "mesh_" + e), C(T, i), m.extensions && H(s, T, m), t.assignFinalMaterial(T), l.push(T);
      }
      for (let f = 0, g = l.length; f < g; f++)
        t.associations.set(l[f], {
          meshes: e,
          primitives: f
        });
      if (l.length === 1)
        return i.extensions && H(s, l[0], i), l[0];
      const d = new ae();
      i.extensions && H(s, d, i), t.associations.set(d, { meshes: e });
      for (let f = 0, g = l.length; f < g; f++)
        d.add(l[f]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new U(Ne.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new _t(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), C(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const i = s.pop(), o = s, a = [], r = [];
      for (let c = 0, u = o.length; c < u; c++) {
        const l = o[c];
        if (l) {
          a.push(l);
          const d = new ne();
          i !== null && d.fromArray(i.array, c * 16), r.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Tt(a, r);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, s = t.animations[e], i = s.name ? s.name : "animation_" + e, o = [], a = [], r = [], c = [], u = [];
    for (let l = 0, d = s.channels.length; l < d; l++) {
      const f = s.channels[l], g = s.samplers[f.sampler], A = f.target, m = A.node, T = s.parameters !== void 0 ? s.parameters[g.input] : g.input, E = s.parameters !== void 0 ? s.parameters[g.output] : g.output;
      A.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", T)), r.push(this.getDependency("accessor", E)), c.push(g), u.push(A));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(r),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(l) {
      const d = l[0], f = l[1], g = l[2], A = l[3], m = l[4], T = [];
      for (let E = 0, R = d.length; E < R; E++) {
        const y = d[E], D = f[E], k = g[E], P = A[E], Y = m[E];
        if (y === void 0) continue;
        y.updateMatrix && y.updateMatrix();
        const v = n._createAnimationTracks(y, D, k, P, Y);
        if (v)
          for (let ie = 0; ie < v.length; ie++)
            T.push(v[ie]);
      }
      return new At(i, void 0, T);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
      const o = n._getNodeRef(n.meshCache, s.mesh, i);
      return s.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let r = 0, c = s.weights.length; r < c; r++)
            a.morphTargetInfluences[r] = s.weights[r];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), o = [], a = s.children || [];
    for (let c = 0, u = a.length; c < u; c++)
      o.push(n.getDependency("node", a[c]));
    const r = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([
      i,
      Promise.all(o),
      r
    ]).then(function(c) {
      const u = c[0], l = c[1], d = c[2];
      d !== null && u.traverse(function(f) {
        f.isSkinnedMesh && f.bind(d, Ms);
      });
      for (let f = 0, g = l.length; f < g; f++)
        u.add(l[f]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], o = i.name ? s.createUniqueName(i.name) : "", a = [], r = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return r && a.push(r), i.camera !== void 0 && a.push(s.getDependency("camera", i.camera).then(function(c) {
      return s._getNodeRef(s.cameraCache, i.camera, c);
    })), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let u;
      if (i.isBone === !0 ? u = new yt() : c.length > 1 ? u = new ae() : c.length === 1 ? u = c[0] : u = new He(), u !== c[0])
        for (let l = 0, d = c.length; l < d; l++)
          u.add(c[l]);
      if (i.name && (u.userData.name = i.name, u.name = o), C(u, i), i.extensions && H(n, u, i), i.matrix !== void 0) {
        const l = new ne();
        l.fromArray(i.matrix), u.applyMatrix4(l);
      } else
        i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
      return s.associations.has(u) || s.associations.set(u, {}), s.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, i = new ae();
    n.name && (i.name = s.createUniqueName(n.name)), C(i, n), n.extensions && H(t, i, n);
    const o = n.nodes || [], a = [];
    for (let r = 0, c = o.length; r < c; r++)
      a.push(s.getDependency("node", o[r]));
    return Promise.all(a).then(function(r) {
      for (let u = 0, l = r.length; u < l; u++)
        i.add(r[u]);
      const c = (u) => {
        const l = /* @__PURE__ */ new Map();
        for (const [d, f] of s.associations)
          (d instanceof re || d instanceof Ee) && l.set(d, f);
        return u.traverse((d) => {
          const f = s.associations.get(d);
          f != null && l.set(d, f);
        }), l;
      };
      return s.associations = c(i), i;
    });
  }
  _createAnimationTracks(e, t, n, s, i) {
    const o = [], a = e.name ? e.name : e.uuid, r = [];
    F[i.path] === F.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && r.push(d.name ? d.name : d.uuid);
    }) : r.push(a);
    let c;
    switch (F[i.path]) {
      case F.weights:
        c = Re;
        break;
      case F.rotation:
        c = be;
        break;
      case F.position:
      case F.scale:
        c = xe;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Re;
            break;
          case 2:
          case 3:
          default:
            c = xe;
            break;
        }
        break;
    }
    const u = s.interpolation !== void 0 ? Es[s.interpolation] : Ke, l = this._getArrayFromAccessor(n);
    for (let d = 0, f = r.length; d < f; d++) {
      const g = new c(
        r[d] + "." + F[i.path],
        t.array,
        l,
        u
      );
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = _e(t.constructor), s = new Float32Array(t.length);
      for (let i = 0, o = t.length; i < o; i++)
        s[i] = t[i] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof be ? ws : Xe;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Ds(h, e, t) {
  const n = e.attributes, s = new Mt();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], r = a.min, c = a.max;
    if (r !== void 0 && c !== void 0) {
      if (s.set(
        new b(r[0], r[1], r[2]),
        new b(c[0], c[1], c[2])
      ), a.normalized) {
        const u = _e(B[a.componentType]);
        s.min.multiplyScalar(u), s.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const a = new b(), r = new b();
    for (let c = 0, u = i.length; c < u; c++) {
      const l = i[c];
      if (l.POSITION !== void 0) {
        const d = t.json.accessors[l.POSITION], f = d.min, g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (r.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), r.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), r.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) {
            const A = _e(B[d.componentType]);
            r.multiplyScalar(A);
          }
          a.max(r);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  h.boundingBox = s;
  const o = new Pt();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, h.boundingSphere = o;
}
function Ce(h, e, t) {
  const n = e.attributes, s = [];
  function i(o, a) {
    return t.getDependency("accessor", o).then(function(r) {
      h.setAttribute(a, r);
    });
  }
  for (const o in n) {
    const a = ge[o] || o.toLowerCase();
    a in h.attributes || s.push(i(n[o], a));
  }
  if (e.indices !== void 0 && !h.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      h.setIndex(a);
    });
    s.push(o);
  }
  return we.workingColorSpace !== O && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${we.workingColorSpace}" not supported.`), C(h, e), Ds(h, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? Rs(h, e.targets, t) : h;
  });
}
class Is extends $ {
  constructor(t) {
    super(t);
    p(this, "targetCamera");
    p(this, "needsLoading", !0);
    p(this, "focus", !1);
    p(this, "skydome");
    p(this, "loader", new qt());
    p(this, "office", (t) => {
      this.loader.load("/models/living_room.glb", function(n) {
        t.add(n.scene), n.scene.position.set(-450, -90, -200);
        const s = n.scene.children[0].children, i = [
          "flltgrey"
        ];
        s.map((o) => {
          const a = o.material;
          i.includes(a.name) && (a.transparent = !0, a.opacity = 0.125);
        });
      }, void 0, function(n) {
        console.error(n);
      });
    });
    p(this, "sky", (t) => {
      const n = [];
      this.loader.load("/models/hdSky.glb", function(s) {
        t.add(s.scene), s.scene.position.set(0, 0, 0), s.scene.scale.set(80, 80, 80), n.push(s.scene);
      }, void 0, function(s) {
        console.error(s);
      }), this.skydome = n;
    });
    p(this, "lighting", (t) => {
      const n = new ve(11193599);
      n.position.set(-1e3, 250, -1e3), t.add(n), t.visible = !0;
      const s = new It(15658751, 4473924);
      s.position.set(0, 20, 0), s.intensity = 0.33, t.add(s);
      const i = new Fe(16772863);
      i.intensity = 0.5, i.position.set(3, 100, 10), i.castShadow = !0, i.shadow.camera.top = 2, i.shadow.camera.bottom = -2, i.shadow.camera.left = -2, i.shadow.camera.right = 2, i.shadow.camera.near = 0.1, i.shadow.camera.far = 40, t.add(i);
    });
    p(this, "update", () => {
      var t;
      this.skydome.length && (this.skydome[0].rotation.y += 5e-5), this.focus || (this.targetCamera.x += (this.mouse.percentage.x * 5 - this.targetCamera.x) / 500, this.targetCamera.y += (-(this.mouse.percentage.y * 5) - this.targetCamera.y) / 500, (t = this.camera) == null || t.lookAt(this.targetCamera));
    });
    p(this, "gameLoop", (t) => {
      super.gameLoop(t);
    });
    this.skydome = [];
  }
  init() {
    if (this.isInitialized)
      return;
    super.initialize();
    const t = new Q(), n = window.innerWidth / window.innerHeight, s = new U(75, n, 1, 1e4), i = new J({ antialias: !0 });
    i.setPixelRatio(window.devicePixelRatio), i.setSize(window.innerWidth, window.innerHeight), i.shadowMap.enabled = !0, i.outputColorSpace = X, i.setAnimationLoop(this.gameLoop);
    const o = new Ft(s, i.domElement);
    o.enablePan = !1, o.enableZoom = !1, o.target.set(-1, 0, -1), o.update(), o.enabled = this.focus, this.targetCamera = t.position.clone(), this.targetCamera.set(-1, -0.125, -1), s.lookAt(this.targetCamera), t.add(s), this.setCamera(s), this.setScene(t), this.setRenderer(i), this.placeRenderer(), this.lighting(t), this.sky(t), this.office(t), this.onMouseDown = this.onKeyDown = this.onKeyUp = () => null, this.setEventListeners();
  }
}
const q = class q {
};
p(q, "arenaMap", {
  workdesklive: Ot,
  officearena: Is,
  cube: Ct,
  workdesk: Nt,
  newarena: kt
}), p(q, "indices", Object.keys(q.arenaMap));
let V = q;
class Cs {
  static getArena(e, t) {
    return new V.arenaMap[e](t);
  }
}
function ks(h, e) {
  return Cs.getArena(V.indices[h], e);
}
function vs() {
  return V.indices.length;
}
function Fs() {
  return V.indices;
}
export {
  Cs as ArenaFactory,
  ks as getArena,
  vs as getArenaCount,
  Fs as getArenaIndex
};
