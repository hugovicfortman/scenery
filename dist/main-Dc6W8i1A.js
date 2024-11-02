var zl = Object.defineProperty;
var Vl = (i, e, t) => e in i ? zl(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var kt = (i, e, t) => Vl(i, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const oa = "170", Fm = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Om = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Hl = 0, Pa = 1, kl = 2, Jo = 1, Gl = 2, tn = 3, yn = 0, xt = 1, nn = 2, Mn = 0, si = 1, La = 2, Da = 3, Ia = 4, Wl = 5, Nn = 100, Xl = 101, ql = 102, Yl = 103, Kl = 104, Zl = 200, $l = 201, jl = 202, Jl = 203, _s = 204, vs = 205, Ql = 206, ec = 207, tc = 208, nc = 209, ic = 210, rc = 211, sc = 212, ac = 213, oc = 214, xs = 0, Ms = 1, Ss = 2, li = 3, ys = 4, Es = 5, Ts = 6, bs = 7, Qo = 0, lc = 1, cc = 2, Sn = 0, hc = 1, uc = 2, dc = 3, fc = 4, pc = 5, mc = 6, gc = 7, Ua = "attached", _c = "detached", el = 300, ci = 301, hi = 302, As = 303, ws = 304, Rr = 306, Rs = 1e3, On = 1001, Cs = 1002, Tt = 1003, vc = 1004, Hi = 1005, Wt = 1006, Or = 1007, Bn = 1008, on = 1009, tl = 1010, nl = 1011, Ui = 1012, la = 1013, zn = 1014, zt = 1015, Fi = 1016, ca = 1017, ha = 1018, ui = 1020, il = 35902, rl = 1021, sl = 1022, Ct = 1023, al = 1024, ol = 1025, ai = 1026, di = 1027, ua = 1028, da = 1029, ll = 1030, fa = 1031, pa = 1033, gr = 33776, _r = 33777, vr = 33778, xr = 33779, Ps = 35840, Ls = 35841, Ds = 35842, Is = 35843, Us = 36196, Ns = 37492, Fs = 37496, Os = 37808, Bs = 37809, zs = 37810, Vs = 37811, Hs = 37812, ks = 37813, Gs = 37814, Ws = 37815, Xs = 37816, qs = 37817, Ys = 37818, Ks = 37819, Zs = 37820, $s = 37821, Mr = 36492, js = 36494, Js = 36495, cl = 36283, Qs = 36284, ea = 36285, ta = 36286, yr = 2300, na = 2301, Br = 2302, Na = 2400, Fa = 2401, Oa = 2402, xc = 2500, Bm = 0, zm = 1, Vm = 2, Mc = 3200, Sc = 3201, ma = 0, yc = 1, vn = "", Rt = "srgb", mi = "srgb-linear", Cr = "linear", Ze = "srgb", Gn = 7680, Ba = 519, Ec = 512, Tc = 513, bc = 514, hl = 515, Ac = 516, wc = 517, Rc = 518, Cc = 519, ia = 35044, za = "300 es", rn = 2e3, Er = 2001;
class Hn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Va = 1234567;
const Di = Math.PI / 180, fi = 180 / Math.PI;
function Vt() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ft[i & 255] + ft[i >> 8 & 255] + ft[i >> 16 & 255] + ft[i >> 24 & 255] + "-" + ft[e & 255] + ft[e >> 8 & 255] + "-" + ft[e >> 16 & 15 | 64] + ft[e >> 24 & 255] + "-" + ft[t & 63 | 128] + ft[t >> 8 & 255] + "-" + ft[t >> 16 & 255] + ft[t >> 24 & 255] + ft[n & 255] + ft[n >> 8 & 255] + ft[n >> 16 & 255] + ft[n >> 24 & 255]).toLowerCase();
}
function ut(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ga(i, e) {
  return (i % e + e) % e;
}
function Pc(i, e, t, n, r) {
  return n + (i - e) * (r - n) / (t - e);
}
function Lc(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function Ii(i, e, t) {
  return (1 - t) * i + t * e;
}
function Dc(i, e, t, n) {
  return Ii(i, e, 1 - Math.exp(-t * n));
}
function Ic(i, e = 1) {
  return e - Math.abs(ga(i, e * 2) - e);
}
function Uc(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function Nc(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function Fc(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function Oc(i, e) {
  return i + Math.random() * (e - i);
}
function Bc(i) {
  return i * (0.5 - Math.random());
}
function zc(i) {
  i !== void 0 && (Va = i);
  let e = Va += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Vc(i) {
  return i * Di;
}
function Hc(i) {
  return i * fi;
}
function kc(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Gc(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Wc(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Xc(i, e, t, n, r) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), l = a(t / 2), c = s((e + n) / 2), h = a((e + n) / 2), f = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), g = a((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(o * h, l * f, l * d, o * c);
      break;
    case "YZY":
      i.set(l * d, o * h, l * f, o * c);
      break;
    case "ZXZ":
      i.set(l * f, l * d, o * h, o * c);
      break;
    case "XZX":
      i.set(o * h, l * g, l * p, o * c);
      break;
    case "YXY":
      i.set(l * p, o * h, l * g, o * c);
      break;
    case "ZYZ":
      i.set(l * g, l * p, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function Ot(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ke(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Hm = {
  DEG2RAD: Di,
  RAD2DEG: fi,
  generateUUID: Vt,
  clamp: ut,
  euclideanModulo: ga,
  mapLinear: Pc,
  inverseLerp: Lc,
  lerp: Ii,
  damp: Dc,
  pingpong: Ic,
  smoothstep: Uc,
  smootherstep: Nc,
  randInt: Fc,
  randFloat: Oc,
  randFloatSpread: Bc,
  seededRandom: zc,
  degToRad: Vc,
  radToDeg: Hc,
  isPowerOfTwo: kc,
  ceilPowerOfTwo: Gc,
  floorPowerOfTwo: Wc,
  setQuaternionFromProperEuler: Xc,
  normalize: Ke,
  denormalize: Ot
};
class ke {
  constructor(e = 0, t = 0) {
    ke.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ut(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ce {
  constructor(e, t, n, r, s, a, o, l, c) {
    Ce.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], f = n[7], d = n[2], p = n[5], g = n[8], x = r[0], m = r[3], u = r[6], b = r[1], T = r[4], S = r[7], B = r[2], A = r[5], w = r[8];
    return s[0] = a * x + o * b + l * B, s[3] = a * m + o * T + l * A, s[6] = a * u + o * S + l * w, s[1] = c * x + h * b + f * B, s[4] = c * m + h * T + f * A, s[7] = c * u + h * S + f * w, s[2] = d * x + p * b + g * B, s[5] = d * m + p * T + g * A, s[8] = d * u + p * S + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * s * h + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = h * a - o * c, d = o * l - h * s, p = c * s - a * l, g = t * f + n * d + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return e[0] = f * x, e[1] = (r * c - h * n) * x, e[2] = (o * n - r * a) * x, e[3] = d * x, e[4] = (h * t - r * l) * x, e[5] = (r * s - o * t) * x, e[6] = p * x, e[7] = (n * l - c * t) * x, e[8] = (a * t - n * s) * x, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(zr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(zr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(zr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const zr = /* @__PURE__ */ new Ce();
function ul(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Ni(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function qc() {
  const i = Ni("canvas");
  return i.style.display = "block", i;
}
const Ha = {};
function Pi(i) {
  i in Ha || (Ha[i] = !0, console.warn(i));
}
function Yc(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function Kc(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Zc(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const He = {
  enabled: !0,
  workingColorSpace: mi,
  /**
   * Implementations of supported color spaces.
   *
   * Required:
   *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
   *	- whitePoint: reference white [ x y ]
   *	- transfer: transfer function (pre-defined)
   *	- toXYZ: Matrix3 RGB to XYZ transform
   *	- fromXYZ: Matrix3 XYZ to RGB transform
   *	- luminanceCoefficients: RGB luminance coefficients
   *
   * Optional:
   *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
   *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
   *
   * Reference:
   * - https://www.russellcottrell.com/photo/matrixCalculator.htm
   */
  spaces: {},
  convert: function(i, e, t) {
    return this.enabled === !1 || e === t || !e || !t || (this.spaces[e].transfer === Ze && (i.r = sn(i.r), i.g = sn(i.g), i.b = sn(i.b)), this.spaces[e].primaries !== this.spaces[t].primaries && (i.applyMatrix3(this.spaces[e].toXYZ), i.applyMatrix3(this.spaces[t].fromXYZ)), this.spaces[t].transfer === Ze && (i.r = oi(i.r), i.g = oi(i.g), i.b = oi(i.b))), i;
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this.workingColorSpace);
  },
  getPrimaries: function(i) {
    return this.spaces[i].primaries;
  },
  getTransfer: function(i) {
    return i === vn ? Cr : this.spaces[i].transfer;
  },
  getLuminanceCoefficients: function(i, e = this.workingColorSpace) {
    return i.fromArray(this.spaces[e].luminanceCoefficients);
  },
  define: function(i) {
    Object.assign(this.spaces, i);
  },
  // Internal APIs
  _getMatrix: function(i, e, t) {
    return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ);
  },
  _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  }
};
function sn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function oi(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const ka = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], Ga = [0.2126, 0.7152, 0.0722], Wa = [0.3127, 0.329], Xa = /* @__PURE__ */ new Ce().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), qa = /* @__PURE__ */ new Ce().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
He.define({
  [mi]: {
    primaries: ka,
    whitePoint: Wa,
    transfer: Cr,
    toXYZ: Xa,
    fromXYZ: qa,
    luminanceCoefficients: Ga,
    workingColorSpaceConfig: { unpackColorSpace: Rt },
    outputColorSpaceConfig: { drawingBufferColorSpace: Rt }
  },
  [Rt]: {
    primaries: ka,
    whitePoint: Wa,
    transfer: Ze,
    toXYZ: Xa,
    fromXYZ: qa,
    luminanceCoefficients: Ga,
    outputColorSpaceConfig: { drawingBufferColorSpace: Rt }
  }
});
let Wn;
class $c {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Wn === void 0 && (Wn = Ni("canvas")), Wn.width = e.width, Wn.height = e.height;
      const n = Wn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Wn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ni("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = sn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(sn(t[n] / 255) * 255) : t[n] = sn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let jc = 0;
class dl {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: jc++ }), this.uuid = Vt(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Vr(r[a].image)) : s.push(Vr(r[a]));
      } else
        s = Vr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Vr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? $c.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Jc = 0;
class mt extends Hn {
  constructor(e = mt.DEFAULT_IMAGE, t = mt.DEFAULT_MAPPING, n = On, r = On, s = Wt, a = Bn, o = Ct, l = on, c = mt.DEFAULT_ANISOTROPY, h = vn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Jc++ }), this.uuid = Vt(), this.name = "", this.source = new dl(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ke(0, 0), this.repeat = new ke(1, 1), this.center = new ke(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ce(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== el) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Rs:
          e.x = e.x - Math.floor(e.x);
          break;
        case On:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Cs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Rs:
          e.y = e.y - Math.floor(e.y);
          break;
        case On:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Cs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
mt.DEFAULT_IMAGE = null;
mt.DEFAULT_MAPPING = el;
mt.DEFAULT_ANISOTROPY = 1;
class We {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    We.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], h = l[4], f = l[8], d = l[1], p = l[5], g = l[9], x = l[2], m = l[6], u = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(f - x) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(f + x) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + p + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (c + 1) / 2, S = (p + 1) / 2, B = (u + 1) / 2, A = (h + d) / 4, w = (f + x) / 4, U = (g + m) / 4;
      return T > S && T > B ? T < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), r = A / n, s = w / n) : S > B ? S < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(S), n = A / r, s = U / r) : B < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(B), n = w / s, r = U / s), this.set(n, r, s, t), this;
    }
    let b = Math.sqrt((m - g) * (m - g) + (f - x) * (f - x) + (d - h) * (d - h));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (m - g) / b, this.y = (f - x) / b, this.z = (d - h) / b, this.w = Math.acos((c + p + u - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Qc extends Hn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new We(0, 0, e, t), this.scissorTest = !1, this.viewport = new We(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Wt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new mt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, r = e.textures.length; n < r; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new dl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Vn extends Qc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class fl extends mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Tt, this.minFilter = Tt, this.wrapR = On, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class eh extends mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Tt, this.minFilter = Tt, this.wrapR = On, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class gi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], f = n[r + 3];
    const d = s[a + 0], p = s[a + 1], g = s[a + 2], x = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = x;
      return;
    }
    if (f !== x || l !== d || c !== p || h !== g) {
      let m = 1 - o;
      const u = l * d + c * p + h * g + f * x, b = u >= 0 ? 1 : -1, T = 1 - u * u;
      if (T > Number.EPSILON) {
        const B = Math.sqrt(T), A = Math.atan2(B, u * b);
        m = Math.sin(m * A) / B, o = Math.sin(o * A) / B;
      }
      const S = o * b;
      if (l = l * m + d * S, c = c * m + p * S, h = h * m + g * S, f = f * m + x * S, m === 1 - o) {
        const B = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= B, c *= B, h *= B, f *= B;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], f = s[a], d = s[a + 1], p = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * f + l * p - c * d, e[t + 1] = l * g + h * d + c * f - o * p, e[t + 2] = c * g + h * p + o * d - l * f, e[t + 3] = h * g - o * f - l * d - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(r / 2), f = o(s / 2), d = l(n / 2), p = l(r / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * f + c * p * g, this._y = c * p * f - d * h * g, this._z = c * h * g + d * p * f, this._w = c * h * f - d * p * g;
        break;
      case "YXZ":
        this._x = d * h * f + c * p * g, this._y = c * p * f - d * h * g, this._z = c * h * g - d * p * f, this._w = c * h * f + d * p * g;
        break;
      case "ZXY":
        this._x = d * h * f - c * p * g, this._y = c * p * f + d * h * g, this._z = c * h * g + d * p * f, this._w = c * h * f - d * p * g;
        break;
      case "ZYX":
        this._x = d * h * f - c * p * g, this._y = c * p * f + d * h * g, this._z = c * h * g - d * p * f, this._w = c * h * f + d * p * g;
        break;
      case "YZX":
        this._x = d * h * f + c * p * g, this._y = c * p * f + d * h * g, this._z = c * h * g - d * p * f, this._w = c * h * f - d * p * g;
        break;
      case "XZY":
        this._x = d * h * f - c * p * g, this._y = c * p * f - d * h * g, this._z = c * h * g + d * p * f, this._w = c * h * f + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], f = t[10], d = n + o + f;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (s - c) * p, this._z = (a - r) * p;
    } else if (n > o && n > f) {
      const p = 2 * Math.sqrt(1 + n - o - f);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (r + a) / p, this._z = (s + c) / p;
    } else if (o > f) {
      const p = 2 * Math.sqrt(1 + o - n - f);
      this._w = (s - c) / p, this._x = (r + a) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + f - n - o);
      this._w = (a - r) / p, this._x = (s + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ut(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + r * c - s * l, this._y = r * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - r * o, this._w = a * h - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), f = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = a * f + this._w * d, this._x = n * f + this._x * d, this._y = r * f + this._y * d, this._z = s * f + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(e = 0, t = 0, n = 0) {
    I.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ya.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ya.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), h = 2 * (o * t - s * r), f = 2 * (s * n - a * t);
    return this.x = t + l * c + a * f - o * h, this.y = n + l * h + o * c - s * f, this.z = r + l * f + s * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Hr.copy(this).projectOnVector(e), this.sub(Hr);
  }
  reflect(e) {
    return this.sub(Hr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ut(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Hr = /* @__PURE__ */ new I(), Ya = /* @__PURE__ */ new gi();
class Tn {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ut.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ut.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ut.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Ut) : Ut.fromBufferAttribute(s, a), Ut.applyMatrix4(e.matrixWorld), this.expandByPoint(Ut);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ki.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ki.copy(n.boundingBox)), ki.applyMatrix4(e.matrixWorld), this.union(ki);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Ut), Ut.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(yi), Gi.subVectors(this.max, yi), Xn.subVectors(e.a, yi), qn.subVectors(e.b, yi), Yn.subVectors(e.c, yi), dn.subVectors(qn, Xn), fn.subVectors(Yn, qn), wn.subVectors(Xn, Yn);
    let t = [
      0,
      -dn.z,
      dn.y,
      0,
      -fn.z,
      fn.y,
      0,
      -wn.z,
      wn.y,
      dn.z,
      0,
      -dn.x,
      fn.z,
      0,
      -fn.x,
      wn.z,
      0,
      -wn.x,
      -dn.y,
      dn.x,
      0,
      -fn.y,
      fn.x,
      0,
      -wn.y,
      wn.x,
      0
    ];
    return !kr(t, Xn, qn, Yn, Gi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !kr(t, Xn, qn, Yn, Gi)) ? !1 : (Wi.crossVectors(dn, fn), t = [Wi.x, Wi.y, Wi.z], kr(t, Xn, qn, Yn, Gi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ut).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ut).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Zt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Zt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Zt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Zt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Zt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Zt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Zt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Zt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Zt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Zt = [
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], Ut = /* @__PURE__ */ new I(), ki = /* @__PURE__ */ new Tn(), Xn = /* @__PURE__ */ new I(), qn = /* @__PURE__ */ new I(), Yn = /* @__PURE__ */ new I(), dn = /* @__PURE__ */ new I(), fn = /* @__PURE__ */ new I(), wn = /* @__PURE__ */ new I(), yi = /* @__PURE__ */ new I(), Gi = /* @__PURE__ */ new I(), Wi = /* @__PURE__ */ new I(), Rn = /* @__PURE__ */ new I();
function kr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Rn.fromArray(i, s);
    const o = r.x * Math.abs(Rn.x) + r.y * Math.abs(Rn.y) + r.z * Math.abs(Rn.z), l = e.dot(Rn), c = t.dot(Rn), h = n.dot(Rn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const th = /* @__PURE__ */ new Tn(), Ei = /* @__PURE__ */ new I(), Gr = /* @__PURE__ */ new I();
class ln {
  constructor(e = new I(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : th.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Ei.subVectors(e, this.center);
    const t = Ei.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ei, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Gr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ei.copy(e.center).add(Gr)), this.expandByPoint(Ei.copy(e.center).sub(Gr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $t = /* @__PURE__ */ new I(), Wr = /* @__PURE__ */ new I(), Xi = /* @__PURE__ */ new I(), pn = /* @__PURE__ */ new I(), Xr = /* @__PURE__ */ new I(), qi = /* @__PURE__ */ new I(), qr = /* @__PURE__ */ new I();
class Pr {
  constructor(e = new I(), t = new I(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, $t)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = $t.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : ($t.copy(this.origin).addScaledVector(this.direction, t), $t.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Wr.copy(e).add(t).multiplyScalar(0.5), Xi.copy(t).sub(e).normalize(), pn.copy(this.origin).sub(Wr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Xi), o = pn.dot(this.direction), l = -pn.dot(Xi), c = pn.lengthSq(), h = Math.abs(1 - a * a);
    let f, d, p, g;
    if (h > 0)
      if (f = a * l - o, d = a * o - l, g = s * h, f >= 0)
        if (d >= -g)
          if (d <= g) {
            const x = 1 / h;
            f *= x, d *= x, p = f * (f + a * d + 2 * o) + d * (a * f + d + 2 * l) + c;
          } else
            d = s, f = Math.max(0, -(a * d + o)), p = -f * f + d * (d + 2 * l) + c;
        else
          d = -s, f = Math.max(0, -(a * d + o)), p = -f * f + d * (d + 2 * l) + c;
      else
        d <= -g ? (f = Math.max(0, -(-a * s + o)), d = f > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -f * f + d * (d + 2 * l) + c) : d <= g ? (f = 0, d = Math.min(Math.max(-s, -l), s), p = d * (d + 2 * l) + c) : (f = Math.max(0, -(a * s + o)), d = f > 0 ? s : Math.min(Math.max(-s, -l), s), p = -f * f + d * (d + 2 * l) + c);
    else
      d = a > 0 ? -s : s, f = Math.max(0, -(a * d + o)), p = -f * f + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Wr).addScaledVector(Xi, d), p;
  }
  intersectSphere(e, t) {
    $t.subVectors(e.center, this.origin);
    const n = $t.dot(this.direction), r = $t.dot($t) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), f >= 0 ? (o = (e.min.z - d.z) * f, l = (e.max.z - d.z) * f) : (o = (e.max.z - d.z) * f, l = (e.min.z - d.z) * f), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, $t) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Xr.subVectors(t, e), qi.subVectors(n, e), qr.crossVectors(Xr, qi);
    let a = this.direction.dot(qr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    pn.subVectors(this.origin, e);
    const l = o * this.direction.dot(qi.crossVectors(pn, qi));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Xr.cross(pn));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * pn.dot(qr);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ne {
  constructor(e, t, n, r, s, a, o, l, c, h, f, d, p, g, x, m) {
    Ne.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, h, f, d, p, g, x, m);
  }
  set(e, t, n, r, s, a, o, l, c, h, f, d, p, g, x, m) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = l, u[2] = c, u[6] = h, u[10] = f, u[14] = d, u[3] = p, u[7] = g, u[11] = x, u[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ne().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Kn.setFromMatrixColumn(e, 0).length(), s = 1 / Kn.setFromMatrixColumn(e, 1).length(), a = 1 / Kn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * h, p = a * f, g = o * h, x = o * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = p + g * c, t[5] = d - x * c, t[9] = -o * l, t[2] = x - d * c, t[6] = g + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * h, p = l * f, g = c * h, x = c * f;
      t[0] = d + x * o, t[4] = g * o - p, t[8] = a * c, t[1] = a * f, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = x + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * h, p = l * f, g = c * h, x = c * f;
      t[0] = d - x * o, t[4] = -a * f, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = x - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * h, p = a * f, g = o * h, x = o * f;
      t[0] = l * h, t[4] = g * c - p, t[8] = d * c + x, t[1] = l * f, t[5] = x * c + d, t[9] = p * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, p = a * c, g = o * l, x = o * c;
      t[0] = l * h, t[4] = x - d * f, t[8] = g * f + p, t[1] = f, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = p * f + g, t[10] = d - x * f;
    } else if (e.order === "XZY") {
      const d = a * l, p = a * c, g = o * l, x = o * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = d * f + x, t[5] = a * h, t[9] = p * f - g, t[2] = g * f - p, t[6] = o * h, t[10] = x * f + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(nh, e, ih);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return St.subVectors(e, t), St.lengthSq() === 0 && (St.z = 1), St.normalize(), mn.crossVectors(n, St), mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? St.x += 1e-4 : St.z += 1e-4, St.normalize(), mn.crossVectors(n, St)), mn.normalize(), Yi.crossVectors(St, mn), r[0] = mn.x, r[4] = Yi.x, r[8] = St.x, r[1] = mn.y, r[5] = Yi.y, r[9] = St.y, r[2] = mn.z, r[6] = Yi.z, r[10] = St.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], f = n[5], d = n[9], p = n[13], g = n[2], x = n[6], m = n[10], u = n[14], b = n[3], T = n[7], S = n[11], B = n[15], A = r[0], w = r[4], U = r[8], y = r[12], M = r[1], R = r[5], q = r[9], z = r[13], W = r[2], $ = r[6], k = r[10], Q = r[14], H = r[3], ie = r[7], ce = r[11], xe = r[15];
    return s[0] = a * A + o * M + l * W + c * H, s[4] = a * w + o * R + l * $ + c * ie, s[8] = a * U + o * q + l * k + c * ce, s[12] = a * y + o * z + l * Q + c * xe, s[1] = h * A + f * M + d * W + p * H, s[5] = h * w + f * R + d * $ + p * ie, s[9] = h * U + f * q + d * k + p * ce, s[13] = h * y + f * z + d * Q + p * xe, s[2] = g * A + x * M + m * W + u * H, s[6] = g * w + x * R + m * $ + u * ie, s[10] = g * U + x * q + m * k + u * ce, s[14] = g * y + x * z + m * Q + u * xe, s[3] = b * A + T * M + S * W + B * H, s[7] = b * w + T * R + S * $ + B * ie, s[11] = b * U + T * q + S * k + B * ce, s[15] = b * y + T * z + S * Q + B * xe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], f = e[6], d = e[10], p = e[14], g = e[3], x = e[7], m = e[11], u = e[15];
    return g * (+s * l * f - r * c * f - s * o * d + n * c * d + r * o * p - n * l * p) + x * (+t * l * p - t * c * d + s * a * d - r * a * p + r * c * h - s * l * h) + m * (+t * c * f - t * o * p - s * a * f + n * a * p + s * o * h - n * c * h) + u * (-r * o * h - t * l * f + t * o * d + r * a * f - n * a * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = e[9], d = e[10], p = e[11], g = e[12], x = e[13], m = e[14], u = e[15], b = f * m * c - x * d * c + x * l * p - o * m * p - f * l * u + o * d * u, T = g * d * c - h * m * c - g * l * p + a * m * p + h * l * u - a * d * u, S = h * x * c - g * f * c + g * o * p - a * x * p - h * o * u + a * f * u, B = g * f * l - h * x * l - g * o * d + a * x * d + h * o * m - a * f * m, A = t * b + n * T + r * S + s * B;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / A;
    return e[0] = b * w, e[1] = (x * d * s - f * m * s - x * r * p + n * m * p + f * r * u - n * d * u) * w, e[2] = (o * m * s - x * l * s + x * r * c - n * m * c - o * r * u + n * l * u) * w, e[3] = (f * l * s - o * d * s - f * r * c + n * d * c + o * r * p - n * l * p) * w, e[4] = T * w, e[5] = (h * m * s - g * d * s + g * r * p - t * m * p - h * r * u + t * d * u) * w, e[6] = (g * l * s - a * m * s - g * r * c + t * m * c + a * r * u - t * l * u) * w, e[7] = (a * d * s - h * l * s + h * r * c - t * d * c - a * r * p + t * l * p) * w, e[8] = S * w, e[9] = (g * f * s - h * x * s - g * n * p + t * x * p + h * n * u - t * f * u) * w, e[10] = (a * x * s - g * o * s + g * n * c - t * x * c - a * n * u + t * o * u) * w, e[11] = (h * o * s - a * f * s - h * n * c + t * f * c + a * n * p - t * o * p) * w, e[12] = B * w, e[13] = (h * x * r - g * f * r + g * n * d - t * x * d - h * n * m + t * f * m) * w, e[14] = (g * o * r - a * x * r - g * n * l + t * x * l + a * n * m - t * o * m) * w, e[15] = (a * f * r - h * o * r + h * n * l - t * f * l - a * n * d + t * o * d) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      h * o + n,
      h * l - r * a,
      0,
      c * l - r * o,
      h * l + r * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, f = o + o, d = s * c, p = s * h, g = s * f, x = a * h, m = a * f, u = o * f, b = l * c, T = l * h, S = l * f, B = n.x, A = n.y, w = n.z;
    return r[0] = (1 - (x + u)) * B, r[1] = (p + S) * B, r[2] = (g - T) * B, r[3] = 0, r[4] = (p - S) * A, r[5] = (1 - (d + u)) * A, r[6] = (m + b) * A, r[7] = 0, r[8] = (g + T) * w, r[9] = (m - b) * w, r[10] = (1 - (d + x)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Kn.set(r[0], r[1], r[2]).length();
    const a = Kn.set(r[4], r[5], r[6]).length(), o = Kn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Nt.copy(this);
    const c = 1 / s, h = 1 / a, f = 1 / o;
    return Nt.elements[0] *= c, Nt.elements[1] *= c, Nt.elements[2] *= c, Nt.elements[4] *= h, Nt.elements[5] *= h, Nt.elements[6] *= h, Nt.elements[8] *= f, Nt.elements[9] *= f, Nt.elements[10] *= f, t.setFromRotationMatrix(Nt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, r, s, a, o = rn) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - r), f = (t + e) / (t - e), d = (n + r) / (n - r);
    let p, g;
    if (o === rn)
      p = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Er)
      p = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = rn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - r), f = 1 / (a - s), d = (t + e) * c, p = (n + r) * h;
    let g, x;
    if (o === rn)
      g = (a + s) * f, x = -2 * f;
    else if (o === Er)
      g = s * f, x = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Kn = /* @__PURE__ */ new I(), Nt = /* @__PURE__ */ new Ne(), nh = /* @__PURE__ */ new I(0, 0, 0), ih = /* @__PURE__ */ new I(1, 1, 1), mn = /* @__PURE__ */ new I(), Yi = /* @__PURE__ */ new I(), St = /* @__PURE__ */ new I(), Ka = /* @__PURE__ */ new Ne(), Za = /* @__PURE__ */ new gi();
class Xt {
  constructor(e = 0, t = 0, n = 0, r = Xt.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], h = r[9], f = r[2], d = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ut(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ut(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ut(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-f, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ut(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(ut(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-ut(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ka.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ka, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Za.setFromEuler(this), this.setFromQuaternion(Za, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Xt.DEFAULT_ORDER = "XYZ";
class pl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let rh = 0;
const $a = /* @__PURE__ */ new I(), Zn = /* @__PURE__ */ new gi(), jt = /* @__PURE__ */ new Ne(), Ki = /* @__PURE__ */ new I(), Ti = /* @__PURE__ */ new I(), sh = /* @__PURE__ */ new I(), ah = /* @__PURE__ */ new gi(), ja = /* @__PURE__ */ new I(1, 0, 0), Ja = /* @__PURE__ */ new I(0, 1, 0), Qa = /* @__PURE__ */ new I(0, 0, 1), eo = { type: "added" }, oh = { type: "removed" }, $n = { type: "childadded", child: null }, Yr = { type: "childremoved", child: null };
class st extends Hn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: rh++ }), this.uuid = Vt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = st.DEFAULT_UP.clone();
    const e = new I(), t = new Xt(), n = new gi(), r = new I(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new Ne()
      },
      normalMatrix: {
        value: new Ce()
      }
    }), this.matrix = new Ne(), this.matrixWorld = new Ne(), this.matrixAutoUpdate = st.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new pl(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Zn.setFromAxisAngle(e, t), this.quaternion.multiply(Zn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Zn.setFromAxisAngle(e, t), this.quaternion.premultiply(Zn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ja, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ja, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Qa, e);
  }
  translateOnAxis(e, t) {
    return $a.copy(e).applyQuaternion(this.quaternion), this.position.add($a.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ja, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ja, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Qa, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(jt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ki.copy(e) : Ki.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Ti.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? jt.lookAt(Ti, Ki, this.up) : jt.lookAt(Ki, Ti, this.up), this.quaternion.setFromRotationMatrix(jt), r && (jt.extractRotation(r.matrixWorld), Zn.setFromRotationMatrix(jt), this.quaternion.premultiply(Zn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(eo), $n.child = e, this.dispatchEvent($n), $n.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(oh), Yr.child = e, this.dispatchEvent(Yr), Yr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), jt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), jt.multiply(e.parent.matrixWorld)), e.applyMatrix4(jt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(eo), $n.child = e, this.dispatchEvent($n), $n.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ti, e, sh), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ti, ah, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), f = a(e.shapes), d = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
st.DEFAULT_UP = /* @__PURE__ */ new I(0, 1, 0);
st.DEFAULT_MATRIX_AUTO_UPDATE = !0;
st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ft = /* @__PURE__ */ new I(), Jt = /* @__PURE__ */ new I(), Kr = /* @__PURE__ */ new I(), Qt = /* @__PURE__ */ new I(), jn = /* @__PURE__ */ new I(), Jn = /* @__PURE__ */ new I(), to = /* @__PURE__ */ new I(), Zr = /* @__PURE__ */ new I(), $r = /* @__PURE__ */ new I(), jr = /* @__PURE__ */ new I(), Jr = /* @__PURE__ */ new We(), Qr = /* @__PURE__ */ new We(), es = /* @__PURE__ */ new We();
class Bt {
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ft.subVectors(e, t), r.cross(Ft);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Ft.subVectors(r, t), Jt.subVectors(n, t), Kr.subVectors(e, t);
    const a = Ft.dot(Ft), o = Ft.dot(Jt), l = Ft.dot(Kr), c = Jt.dot(Jt), h = Jt.dot(Kr), f = a * c - o * o;
    if (f === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / f, p = (c * l - o * h) * d, g = (a * h - o * l) * d;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Qt) === null ? !1 : Qt.x >= 0 && Qt.y >= 0 && Qt.x + Qt.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, Qt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Qt.x), l.addScaledVector(a, Qt.y), l.addScaledVector(o, Qt.z), l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return Jr.setScalar(0), Qr.setScalar(0), es.setScalar(0), Jr.fromBufferAttribute(e, t), Qr.fromBufferAttribute(e, n), es.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Jr, s.x), a.addScaledVector(Qr, s.y), a.addScaledVector(es, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return Ft.subVectors(n, t), Jt.subVectors(e, t), Ft.cross(Jt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ft.subVectors(this.c, this.b), Jt.subVectors(this.a, this.b), Ft.cross(Jt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Bt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Bt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Bt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Bt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Bt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    jn.subVectors(r, n), Jn.subVectors(s, n), Zr.subVectors(e, n);
    const l = jn.dot(Zr), c = Jn.dot(Zr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    $r.subVectors(e, r);
    const h = jn.dot($r), f = Jn.dot($r);
    if (h >= 0 && f <= h)
      return t.copy(r);
    const d = l * f - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(jn, a);
    jr.subVectors(e, s);
    const p = jn.dot(jr), g = Jn.dot(jr);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const x = p * c - l * g;
    if (x <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Jn, o);
    const m = h * g - p * f;
    if (m <= 0 && f - h >= 0 && p - g >= 0)
      return to.subVectors(s, r), o = (f - h) / (f - h + (p - g)), t.copy(r).addScaledVector(to, o);
    const u = 1 / (m + x + d);
    return a = x * u, o = d * u, t.copy(n).addScaledVector(jn, a).addScaledVector(Jn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const ml = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, gn = { h: 0, s: 0, l: 0 }, Zi = { h: 0, s: 0, l: 0 };
function ts(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ue {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Rt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, He.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = He.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, He.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = He.workingColorSpace) {
    if (e = ga(e, 1), t = ut(t, 0, 1), n = ut(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = ts(a, s, e + 1 / 3), this.g = ts(a, s, e), this.b = ts(a, s, e - 1 / 3);
    }
    return He.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Rt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Rt) {
    const n = ml[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = sn(e.r), this.g = sn(e.g), this.b = sn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = oi(e.r), this.g = oi(e.g), this.b = oi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Rt) {
    return He.fromWorkingColorSpace(pt.copy(this), e), Math.round(ut(pt.r * 255, 0, 255)) * 65536 + Math.round(ut(pt.g * 255, 0, 255)) * 256 + Math.round(ut(pt.b * 255, 0, 255));
  }
  getHexString(e = Rt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = He.workingColorSpace) {
    He.fromWorkingColorSpace(pt.copy(this), t);
    const n = pt.r, r = pt.g, s = pt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const f = a - o;
      switch (c = h <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = He.workingColorSpace) {
    return He.fromWorkingColorSpace(pt.copy(this), t), e.r = pt.r, e.g = pt.g, e.b = pt.b, e;
  }
  getStyle(e = Rt) {
    He.fromWorkingColorSpace(pt.copy(this), e);
    const t = pt.r, n = pt.g, r = pt.b;
    return e !== Rt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(gn), this.setHSL(gn.h + e, gn.s + t, gn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(gn), e.getHSL(Zi);
    const n = Ii(gn.h, Zi.h, t), r = Ii(gn.s, Zi.s, t), s = Ii(gn.l, Zi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const pt = /* @__PURE__ */ new Ue();
Ue.NAMES = ml;
let lh = 0;
class bn extends Hn {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(e) {
  }
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: lh++ }), this.uuid = Vt(), this.name = "", this.blending = si, this.side = yn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = _s, this.blendDst = vs, this.blendEquation = Nn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ue(0, 0, 0), this.blendAlpha = 0, this.depthFunc = li, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ba, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gn, this.stencilZFail = Gn, this.stencilZPass = Gn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== si && (n.blending = this.blending), this.side !== yn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== _s && (n.blendSrc = this.blendSrc), this.blendDst !== vs && (n.blendDst = this.blendDst), this.blendEquation !== Nn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== li && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ba && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Gn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Gn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Gn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class gl extends bn {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.color = new Ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Xt(), this.combine = Qo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ot = /* @__PURE__ */ new I(), $i = /* @__PURE__ */ new ke();
class Lt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ia, this.updateRanges = [], this.gpuType = zt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        $i.fromBufferAttribute(this, t), $i.applyMatrix3(e), this.setXY(t, $i.x, $i.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t), ot.applyMatrix3(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyMatrix4(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyNormalMatrix(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.transformDirection(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Ot(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ke(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), r = Ke(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), r = Ke(r, this.array), s = Ke(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== ia && (e.usage = this.usage), e;
  }
}
class _l extends Lt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class vl extends Lt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class an extends Lt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ch = 0;
const wt = /* @__PURE__ */ new Ne(), ns = /* @__PURE__ */ new st(), Qn = /* @__PURE__ */ new I(), yt = /* @__PURE__ */ new Tn(), bi = /* @__PURE__ */ new Tn(), ht = /* @__PURE__ */ new I();
class cn extends Hn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ch++ }), this.uuid = Vt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ul(e) ? vl : _l)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ce().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return wt.makeRotationFromQuaternion(e), this.applyMatrix4(wt), this;
  }
  rotateX(e) {
    return wt.makeRotationX(e), this.applyMatrix4(wt), this;
  }
  rotateY(e) {
    return wt.makeRotationY(e), this.applyMatrix4(wt), this;
  }
  rotateZ(e) {
    return wt.makeRotationZ(e), this.applyMatrix4(wt), this;
  }
  translate(e, t, n) {
    return wt.makeTranslation(e, t, n), this.applyMatrix4(wt), this;
  }
  scale(e, t, n) {
    return wt.makeScale(e, t, n), this.applyMatrix4(wt), this;
  }
  lookAt(e) {
    return ns.lookAt(e), ns.updateMatrix(), this.applyMatrix4(ns.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Qn).negate(), this.translate(Qn.x, Qn.y, Qn.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new an(n, 3));
    } else {
      for (let n = 0, r = t.count; n < r; n++) {
        const s = e[n];
        t.setXYZ(n, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Tn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new I(-1 / 0, -1 / 0, -1 / 0),
        new I(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          yt.setFromBufferAttribute(s), this.morphTargetsRelative ? (ht.addVectors(this.boundingBox.min, yt.min), this.boundingBox.expandByPoint(ht), ht.addVectors(this.boundingBox.max, yt.max), this.boundingBox.expandByPoint(ht)) : (this.boundingBox.expandByPoint(yt.min), this.boundingBox.expandByPoint(yt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ln());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (yt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          bi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ht.addVectors(yt.min, bi.min), yt.expandByPoint(ht), ht.addVectors(yt.max, bi.max), yt.expandByPoint(ht)) : (yt.expandByPoint(bi.min), yt.expandByPoint(bi.max));
        }
      yt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        ht.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(ht));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            ht.fromBufferAttribute(o, c), l && (Qn.fromBufferAttribute(e, c), ht.add(Qn)), r = Math.max(r, n.distanceToSquared(ht));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Lt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let U = 0; U < n.count; U++)
      o[U] = new I(), l[U] = new I();
    const c = new I(), h = new I(), f = new I(), d = new ke(), p = new ke(), g = new ke(), x = new I(), m = new I();
    function u(U, y, M) {
      c.fromBufferAttribute(n, U), h.fromBufferAttribute(n, y), f.fromBufferAttribute(n, M), d.fromBufferAttribute(s, U), p.fromBufferAttribute(s, y), g.fromBufferAttribute(s, M), h.sub(c), f.sub(c), p.sub(d), g.sub(d);
      const R = 1 / (p.x * g.y - g.x * p.y);
      isFinite(R) && (x.copy(h).multiplyScalar(g.y).addScaledVector(f, -p.y).multiplyScalar(R), m.copy(f).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(R), o[U].add(x), o[y].add(x), o[M].add(x), l[U].add(m), l[y].add(m), l[M].add(m));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: e.count
    }]);
    for (let U = 0, y = b.length; U < y; ++U) {
      const M = b[U], R = M.start, q = M.count;
      for (let z = R, W = R + q; z < W; z += 3)
        u(
          e.getX(z + 0),
          e.getX(z + 1),
          e.getX(z + 2)
        );
    }
    const T = new I(), S = new I(), B = new I(), A = new I();
    function w(U) {
      B.fromBufferAttribute(r, U), A.copy(B);
      const y = o[U];
      T.copy(y), T.sub(B.multiplyScalar(B.dot(y))).normalize(), S.crossVectors(A, y);
      const R = S.dot(l[U]) < 0 ? -1 : 1;
      a.setXYZW(U, T.x, T.y, T.z, R);
    }
    for (let U = 0, y = b.length; U < y; ++U) {
      const M = b[U], R = M.start, q = M.count;
      for (let z = R, W = R + q; z < W; z += 3)
        w(e.getX(z + 0)), w(e.getX(z + 1)), w(e.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Lt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const r = new I(), s = new I(), a = new I(), o = new I(), l = new I(), c = new I(), h = new I(), f = new I();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const g = e.getX(d + 0), x = e.getX(d + 1), m = e.getX(d + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, x), a.fromBufferAttribute(t, m), h.subVectors(a, s), f.subVectors(r, s), h.cross(f), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), f.subVectors(r, s), h.cross(f), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ht.fromBufferAttribute(e, t), ht.normalize(), e.setXYZ(t, ht.x, ht.y, ht.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, f = o.normalized, d = new c.constructor(l.length * h);
      let p = 0, g = 0;
      for (let x = 0, m = l.length; x < m; x++) {
        o.isInterleavedBufferAttribute ? p = l[x] * o.data.stride + o.offset : p = l[x] * h;
        for (let u = 0; u < h; u++)
          d[g++] = c[p++];
      }
      return new Lt(d, h, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new cn(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, f = c.length; h < f; h++) {
        const d = c[h], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let f = 0, d = c.length; f < d; f++) {
        const p = c[f];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], f = s[c];
      for (let d = 0, p = f.length; d < p; d++)
        h.push(f[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const no = /* @__PURE__ */ new Ne(), Cn = /* @__PURE__ */ new Pr(), ji = /* @__PURE__ */ new ln(), io = /* @__PURE__ */ new I(), Ji = /* @__PURE__ */ new I(), Qi = /* @__PURE__ */ new I(), er = /* @__PURE__ */ new I(), is = /* @__PURE__ */ new I(), tr = /* @__PURE__ */ new I(), ro = /* @__PURE__ */ new I(), nr = /* @__PURE__ */ new I();
class Pt extends st {
  constructor(e = new cn(), t = new gl()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      tr.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], f = s[l];
        h !== 0 && (is.fromBufferAttribute(f, e), a ? tr.addScaledVector(is, h) : tr.addScaledVector(is.sub(t), h));
      }
      t.add(tr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ji.copy(n.boundingSphere), ji.applyMatrix4(s), Cn.copy(e.ray).recast(e.near), !(ji.containsPoint(Cn.origin) === !1 && (Cn.intersectSphere(ji, io) === null || Cn.origin.distanceToSquared(io) > (e.far - e.near) ** 2)) && (no.copy(s).invert(), Cn.copy(e.ray).applyMatrix4(no), !(n.boundingBox !== null && Cn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Cn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, f = s.attributes.normal, d = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, x = d.length; g < x; g++) {
          const m = d[g], u = a[m.materialIndex], b = Math.max(m.start, p.start), T = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let S = b, B = T; S < B; S += 3) {
            const A = o.getX(S), w = o.getX(S + 1), U = o.getX(S + 2);
            r = ir(this, u, e, n, c, h, f, A, w, U), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), x = Math.min(o.count, p.start + p.count);
        for (let m = g, u = x; m < u; m += 3) {
          const b = o.getX(m), T = o.getX(m + 1), S = o.getX(m + 2);
          r = ir(this, a, e, n, c, h, f, b, T, S), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, x = d.length; g < x; g++) {
          const m = d[g], u = a[m.materialIndex], b = Math.max(m.start, p.start), T = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
          for (let S = b, B = T; S < B; S += 3) {
            const A = S, w = S + 1, U = S + 2;
            r = ir(this, u, e, n, c, h, f, A, w, U), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), x = Math.min(l.count, p.start + p.count);
        for (let m = g, u = x; m < u; m += 3) {
          const b = m, T = m + 1, S = m + 2;
          r = ir(this, a, e, n, c, h, f, b, T, S), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
  }
}
function hh(i, e, t, n, r, s, a, o) {
  let l;
  if (e.side === xt ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === yn, o), l === null) return null;
  nr.copy(o), nr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(nr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: nr.clone(),
    object: i
  };
}
function ir(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, Ji), i.getVertexPosition(l, Qi), i.getVertexPosition(c, er);
  const h = hh(i, e, t, n, Ji, Qi, er, ro);
  if (h) {
    const f = new I();
    Bt.getBarycoord(ro, Ji, Qi, er, f), r && (h.uv = Bt.getInterpolatedAttribute(r, o, l, c, f, new ke())), s && (h.uv1 = Bt.getInterpolatedAttribute(s, o, l, c, f, new ke())), a && (h.normal = Bt.getInterpolatedAttribute(a, o, l, c, f, new I()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: l,
      c,
      normal: new I(),
      materialIndex: 0
    };
    Bt.getNormal(Ji, Qi, er, d.normal), h.face = d, h.barycoord = f;
  }
  return h;
}
class Oi extends cn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], f = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new an(c, 3)), this.setAttribute("normal", new an(h, 3)), this.setAttribute("uv", new an(f, 2));
    function g(x, m, u, b, T, S, B, A, w, U, y) {
      const M = S / w, R = B / U, q = S / 2, z = B / 2, W = A / 2, $ = w + 1, k = U + 1;
      let Q = 0, H = 0;
      const ie = new I();
      for (let ce = 0; ce < k; ce++) {
        const xe = ce * R - z;
        for (let De = 0; De < $; De++) {
          const je = De * M - q;
          ie[x] = je * b, ie[m] = xe * T, ie[u] = W, c.push(ie.x, ie.y, ie.z), ie[x] = 0, ie[m] = 0, ie[u] = A > 0 ? 1 : -1, h.push(ie.x, ie.y, ie.z), f.push(De / w), f.push(1 - ce / U), Q += 1;
        }
      }
      for (let ce = 0; ce < U; ce++)
        for (let xe = 0; xe < w; xe++) {
          const De = d + xe + $ * ce, je = d + xe + $ * (ce + 1), X = d + (xe + 1) + $ * (ce + 1), ee = d + (xe + 1) + $ * ce;
          l.push(De, je, ee), l.push(je, X, ee), H += 6;
        }
      o.addGroup(p, H, y), p += H, d += Q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Oi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function pi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function _t(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = pi(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function uh(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function xl(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : He.workingColorSpace;
}
const dh = { clone: pi, merge: _t };
var fh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ph = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends bn {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = fh, this.fragmentShader = ph, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = pi(e.uniforms), this.uniformsGroups = uh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ml extends st {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ne(), this.projectionMatrix = new Ne(), this.projectionMatrixInverse = new Ne(), this.coordinateSystem = rn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _n = /* @__PURE__ */ new I(), so = /* @__PURE__ */ new ke(), ao = /* @__PURE__ */ new ke();
class Et extends Ml {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = fi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Di * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return fi * 2 * Math.atan(
      Math.tan(Di * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    _n.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(_n.x, _n.y).multiplyScalar(-e / _n.z), _n.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(_n.x, _n.y).multiplyScalar(-e / _n.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, so, ao), t.subVectors(ao, so);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Di * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ei = -90, ti = 1;
class mh extends st {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Et(ei, ti, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Et(ei, ti, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Et(ei, ti, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Et(ei, ti, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Et(ei, ti, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Et(ei, ti, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === rn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Er)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, h] = this.children, f = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = x, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(f, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Sl extends mt {
  constructor(e, t, n, r, s, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ci, super(e, t, n, r, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class gh extends Vn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Sl(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Wt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new Oi(5, 5, 5), s = new En({
      name: "CubemapFromEquirect",
      uniforms: pi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: xt,
      blending: Mn
    });
    s.uniforms.tEquirect.value = t;
    const a = new Pt(r, s), o = t.minFilter;
    return t.minFilter === Bn && (t.minFilter = Wt), new mh(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const rs = /* @__PURE__ */ new I(), _h = /* @__PURE__ */ new I(), vh = /* @__PURE__ */ new Ce();
class In {
  constructor(e = new I(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = rs.subVectors(n, t).cross(_h.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(rs), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || vh.getNormalMatrix(e), r = this.coplanarPoint(rs).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pn = /* @__PURE__ */ new ln(), rr = /* @__PURE__ */ new I();
class _a {
  constructor(e = new In(), t = new In(), n = new In(), r = new In(), s = new In(), a = new In()) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = rn) {
    const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], h = r[5], f = r[6], d = r[7], p = r[8], g = r[9], x = r[10], m = r[11], u = r[12], b = r[13], T = r[14], S = r[15];
    if (n[0].setComponents(l - s, d - c, m - p, S - u).normalize(), n[1].setComponents(l + s, d + c, m + p, S + u).normalize(), n[2].setComponents(l + a, d + h, m + g, S + b).normalize(), n[3].setComponents(l - a, d - h, m - g, S - b).normalize(), n[4].setComponents(l - o, d - f, m - x, S - T).normalize(), t === rn)
      n[5].setComponents(l + o, d + f, m + x, S + T).normalize();
    else if (t === Er)
      n[5].setComponents(o, f, x, T).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Pn);
  }
  intersectsSprite(e) {
    return Pn.center.set(0, 0, 0), Pn.radius = 0.7071067811865476, Pn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Pn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (rr.x = r.normal.x > 0 ? e.max.x : e.min.x, rr.y = r.normal.y > 0 ? e.max.y : e.min.y, rr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(rr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function yl() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function xh(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, f = c.byteLength, d = i.createBuffer();
    i.bindBuffer(l, d), i.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = i.SHORT;
    else if (c instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = i.INT;
    else if (c instanceof Int8Array)
      p = i.BYTE;
    else if (c instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: d,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: f
    };
  }
  function n(o, l, c) {
    const h = l.array, f = l.updateRanges;
    if (i.bindBuffer(c, o), f.length === 0)
      i.bufferSubData(c, 0, h);
    else {
      f.sort((p, g) => p.start - g.start);
      let d = 0;
      for (let p = 1; p < f.length; p++) {
        const g = f[d], x = f[p];
        x.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          x.start + x.count - g.start
        ) : (++d, f[d] = x);
      }
      f.length = d + 1;
      for (let p = 0, g = f.length; p < g; p++) {
        const x = f[p];
        i.bufferSubData(
          c,
          x.start * h.BYTES_PER_ELEMENT,
          h,
          x.start,
          x.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
class Lr extends cn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, h = l + 1, f = e / o, d = t / l, p = [], g = [], x = [], m = [];
    for (let u = 0; u < h; u++) {
      const b = u * d - a;
      for (let T = 0; T < c; T++) {
        const S = T * f - s;
        g.push(S, -b, 0), x.push(0, 0, 1), m.push(T / o), m.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let b = 0; b < o; b++) {
        const T = b + c * u, S = b + c * (u + 1), B = b + 1 + c * (u + 1), A = b + 1 + c * u;
        p.push(T, S, A), p.push(S, B, A);
      }
    this.setIndex(p), this.setAttribute("position", new an(g, 3)), this.setAttribute("normal", new an(x, 3)), this.setAttribute("uv", new an(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Lr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Mh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Sh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, yh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Eh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Th = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, bh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ah = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, wh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Rh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Ch = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ph = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Lh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Dh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Ih = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Uh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Nh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Fh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Oh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Bh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, zh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Vh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Hh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, kh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Gh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Wh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Xh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, qh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Yh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Kh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Zh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, $h = "gl_FragColor = linearToOutputTexel( gl_FragColor );", jh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Jh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Qh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, eu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, tu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, nu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, iu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, ru = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, su = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, au = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, ou = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, lu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, cu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, hu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, uu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, du = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, fu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, pu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, mu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, gu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, _u = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, vu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, xu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Mu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Su = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, yu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Eu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Tu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, bu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Au = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, wu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ru = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Cu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Pu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Lu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Du = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Iu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Uu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Nu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Fu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ou = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Bu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, zu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Vu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ku = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Gu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Wu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Xu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, qu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Yu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ku = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Zu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, $u = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, ju = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Ju = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Qu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, ed = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, td = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, nd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, id = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, rd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, sd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ad = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, od = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ld = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, cd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, hd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ud = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, dd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, fd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, pd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, md = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, gd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, _d = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, vd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Md = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Sd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, yd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ed = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Td = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Ad = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, wd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Rd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Cd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Pd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ld = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Dd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Id = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Ud = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Od = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Bd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Vd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Hd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Wd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, qd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Kd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Zd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $d = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, jd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Jd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Le = {
  alphahash_fragment: Mh,
  alphahash_pars_fragment: Sh,
  alphamap_fragment: yh,
  alphamap_pars_fragment: Eh,
  alphatest_fragment: Th,
  alphatest_pars_fragment: bh,
  aomap_fragment: Ah,
  aomap_pars_fragment: wh,
  batching_pars_vertex: Rh,
  batching_vertex: Ch,
  begin_vertex: Ph,
  beginnormal_vertex: Lh,
  bsdfs: Dh,
  iridescence_fragment: Ih,
  bumpmap_pars_fragment: Uh,
  clipping_planes_fragment: Nh,
  clipping_planes_pars_fragment: Fh,
  clipping_planes_pars_vertex: Oh,
  clipping_planes_vertex: Bh,
  color_fragment: zh,
  color_pars_fragment: Vh,
  color_pars_vertex: Hh,
  color_vertex: kh,
  common: Gh,
  cube_uv_reflection_fragment: Wh,
  defaultnormal_vertex: Xh,
  displacementmap_pars_vertex: qh,
  displacementmap_vertex: Yh,
  emissivemap_fragment: Kh,
  emissivemap_pars_fragment: Zh,
  colorspace_fragment: $h,
  colorspace_pars_fragment: jh,
  envmap_fragment: Jh,
  envmap_common_pars_fragment: Qh,
  envmap_pars_fragment: eu,
  envmap_pars_vertex: tu,
  envmap_physical_pars_fragment: du,
  envmap_vertex: nu,
  fog_vertex: iu,
  fog_pars_vertex: ru,
  fog_fragment: su,
  fog_pars_fragment: au,
  gradientmap_pars_fragment: ou,
  lightmap_pars_fragment: lu,
  lights_lambert_fragment: cu,
  lights_lambert_pars_fragment: hu,
  lights_pars_begin: uu,
  lights_toon_fragment: fu,
  lights_toon_pars_fragment: pu,
  lights_phong_fragment: mu,
  lights_phong_pars_fragment: gu,
  lights_physical_fragment: _u,
  lights_physical_pars_fragment: vu,
  lights_fragment_begin: xu,
  lights_fragment_maps: Mu,
  lights_fragment_end: Su,
  logdepthbuf_fragment: yu,
  logdepthbuf_pars_fragment: Eu,
  logdepthbuf_pars_vertex: Tu,
  logdepthbuf_vertex: bu,
  map_fragment: Au,
  map_pars_fragment: wu,
  map_particle_fragment: Ru,
  map_particle_pars_fragment: Cu,
  metalnessmap_fragment: Pu,
  metalnessmap_pars_fragment: Lu,
  morphinstance_vertex: Du,
  morphcolor_vertex: Iu,
  morphnormal_vertex: Uu,
  morphtarget_pars_vertex: Nu,
  morphtarget_vertex: Fu,
  normal_fragment_begin: Ou,
  normal_fragment_maps: Bu,
  normal_pars_fragment: zu,
  normal_pars_vertex: Vu,
  normal_vertex: Hu,
  normalmap_pars_fragment: ku,
  clearcoat_normal_fragment_begin: Gu,
  clearcoat_normal_fragment_maps: Wu,
  clearcoat_pars_fragment: Xu,
  iridescence_pars_fragment: qu,
  opaque_fragment: Yu,
  packing: Ku,
  premultiplied_alpha_fragment: Zu,
  project_vertex: $u,
  dithering_fragment: ju,
  dithering_pars_fragment: Ju,
  roughnessmap_fragment: Qu,
  roughnessmap_pars_fragment: ed,
  shadowmap_pars_fragment: td,
  shadowmap_pars_vertex: nd,
  shadowmap_vertex: id,
  shadowmask_pars_fragment: rd,
  skinbase_vertex: sd,
  skinning_pars_vertex: ad,
  skinning_vertex: od,
  skinnormal_vertex: ld,
  specularmap_fragment: cd,
  specularmap_pars_fragment: hd,
  tonemapping_fragment: ud,
  tonemapping_pars_fragment: dd,
  transmission_fragment: fd,
  transmission_pars_fragment: pd,
  uv_pars_fragment: md,
  uv_pars_vertex: gd,
  uv_vertex: _d,
  worldpos_vertex: vd,
  background_vert: xd,
  background_frag: Md,
  backgroundCube_vert: Sd,
  backgroundCube_frag: yd,
  cube_vert: Ed,
  cube_frag: Td,
  depth_vert: bd,
  depth_frag: Ad,
  distanceRGBA_vert: wd,
  distanceRGBA_frag: Rd,
  equirect_vert: Cd,
  equirect_frag: Pd,
  linedashed_vert: Ld,
  linedashed_frag: Dd,
  meshbasic_vert: Id,
  meshbasic_frag: Ud,
  meshlambert_vert: Nd,
  meshlambert_frag: Fd,
  meshmatcap_vert: Od,
  meshmatcap_frag: Bd,
  meshnormal_vert: zd,
  meshnormal_frag: Vd,
  meshphong_vert: Hd,
  meshphong_frag: kd,
  meshphysical_vert: Gd,
  meshphysical_frag: Wd,
  meshtoon_vert: Xd,
  meshtoon_frag: qd,
  points_vert: Yd,
  points_frag: Kd,
  shadow_vert: Zd,
  shadow_frag: $d,
  sprite_vert: jd,
  sprite_frag: Jd
}, te = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ue(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ce() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ce() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ce() },
    normalScale: { value: /* @__PURE__ */ new ke(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ce() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ce() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ue(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ue(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ce() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ue(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ke(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ce() },
    alphaTest: { value: 0 }
  }
}, Gt = {
  basic: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.fog
    ]),
    vertexShader: Le.meshbasic_vert,
    fragmentShader: Le.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ue(0) }
      }
    ]),
    vertexShader: Le.meshlambert_vert,
    fragmentShader: Le.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ue(0) },
        specular: { value: /* @__PURE__ */ new Ue(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Le.meshphong_vert,
    fragmentShader: Le.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.roughnessmap,
      te.metalnessmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ue(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Le.meshphysical_vert,
    fragmentShader: Le.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.gradientmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ue(0) }
      }
    ]),
    vertexShader: Le.meshtoon_vert,
    fragmentShader: Le.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Le.meshmatcap_vert,
    fragmentShader: Le.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ _t([
      te.points,
      te.fog
    ]),
    vertexShader: Le.points_vert,
    fragmentShader: Le.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Le.linedashed_vert,
    fragmentShader: Le.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.displacementmap
    ]),
    vertexShader: Le.depth_vert,
    fragmentShader: Le.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Le.meshnormal_vert,
    fragmentShader: Le.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ _t([
      te.sprite,
      te.fog
    ]),
    vertexShader: Le.sprite_vert,
    fragmentShader: Le.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ce() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Le.background_vert,
    fragmentShader: Le.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ce() }
    },
    vertexShader: Le.backgroundCube_vert,
    fragmentShader: Le.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Le.cube_vert,
    fragmentShader: Le.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Le.equirect_vert,
    fragmentShader: Le.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ _t([
      te.common,
      te.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new I() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Le.distanceRGBA_vert,
    fragmentShader: Le.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ _t([
      te.lights,
      te.fog,
      {
        color: { value: /* @__PURE__ */ new Ue(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Le.shadow_vert,
    fragmentShader: Le.shadow_frag
  }
};
Gt.physical = {
  uniforms: /* @__PURE__ */ _t([
    Gt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ce() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ce() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ke(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ce() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ce() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ce() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ue(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ce() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ce() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ce() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ke() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ce() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ue(0) },
      specularColor: { value: /* @__PURE__ */ new Ue(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ce() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ce() },
      anisotropyVector: { value: /* @__PURE__ */ new ke() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ce() }
    }
  ]),
  vertexShader: Le.meshphysical_vert,
  fragmentShader: Le.meshphysical_frag
};
const sr = { r: 0, b: 0, g: 0 }, Ln = /* @__PURE__ */ new Xt(), Qd = /* @__PURE__ */ new Ne();
function ef(i, e, t, n, r, s, a) {
  const o = new Ue(0);
  let l = s === !0 ? 0 : 1, c, h, f = null, d = 0, p = null;
  function g(b) {
    let T = b.isScene === !0 ? b.background : null;
    return T && T.isTexture && (T = (b.backgroundBlurriness > 0 ? t : e).get(T)), T;
  }
  function x(b) {
    let T = !1;
    const S = g(b);
    S === null ? u(o, l) : S && S.isColor && (u(S, 1), T = !0);
    const B = i.xr.getEnvironmentBlendMode();
    B === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : B === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || T) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(b, T) {
    const S = g(T);
    S && (S.isCubeTexture || S.mapping === Rr) ? (h === void 0 && (h = new Pt(
      new Oi(1, 1, 1),
      new En({
        name: "BackgroundCubeMaterial",
        uniforms: pi(Gt.backgroundCube.uniforms),
        vertexShader: Gt.backgroundCube.vertexShader,
        fragmentShader: Gt.backgroundCube.fragmentShader,
        side: xt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(B, A, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), Ln.copy(T.backgroundRotation), Ln.x *= -1, Ln.y *= -1, Ln.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (Ln.y *= -1, Ln.z *= -1), h.material.uniforms.envMap.value = S, h.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qd.makeRotationFromEuler(Ln)), h.material.toneMapped = He.getTransfer(S.colorSpace) !== Ze, (f !== S || d !== S.version || p !== i.toneMapping) && (h.material.needsUpdate = !0, f = S, d = S.version, p = i.toneMapping), h.layers.enableAll(), b.unshift(h, h.geometry, h.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new Pt(
      new Lr(2, 2),
      new En({
        name: "BackgroundMaterial",
        uniforms: pi(Gt.background.uniforms),
        vertexShader: Gt.background.vertexShader,
        fragmentShader: Gt.background.fragmentShader,
        side: yn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = S, c.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, c.material.toneMapped = He.getTransfer(S.colorSpace) !== Ze, S.matrixAutoUpdate === !0 && S.updateMatrix(), c.material.uniforms.uvTransform.value.copy(S.matrix), (f !== S || d !== S.version || p !== i.toneMapping) && (c.material.needsUpdate = !0, f = S, d = S.version, p = i.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function u(b, T) {
    b.getRGB(sr, xl(i)), n.buffers.color.setClear(sr.r, sr.g, sr.b, T, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(b, T = 1) {
      o.set(b), l = T, u(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(b) {
      l = b, u(o, l);
    },
    render: x,
    addToRenderList: m
  };
}
function tf(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = d(null);
  let s = r, a = !1;
  function o(M, R, q, z, W) {
    let $ = !1;
    const k = f(z, q, R);
    s !== k && (s = k, c(s.object)), $ = p(M, z, q, W), $ && g(M, z, q, W), W !== null && e.update(W, i.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, S(M, R, q, z), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(W).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(M) {
    return i.bindVertexArray(M);
  }
  function h(M) {
    return i.deleteVertexArray(M);
  }
  function f(M, R, q) {
    const z = q.wireframe === !0;
    let W = n[M.id];
    W === void 0 && (W = {}, n[M.id] = W);
    let $ = W[R.id];
    $ === void 0 && ($ = {}, W[R.id] = $);
    let k = $[z];
    return k === void 0 && (k = d(l()), $[z] = k), k;
  }
  function d(M) {
    const R = [], q = [], z = [];
    for (let W = 0; W < t; W++)
      R[W] = 0, q[W] = 0, z[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: R,
      enabledAttributes: q,
      attributeDivisors: z,
      object: M,
      attributes: {},
      index: null
    };
  }
  function p(M, R, q, z) {
    const W = s.attributes, $ = R.attributes;
    let k = 0;
    const Q = q.getAttributes();
    for (const H in Q)
      if (Q[H].location >= 0) {
        const ce = W[H];
        let xe = $[H];
        if (xe === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (xe = M.instanceMatrix), H === "instanceColor" && M.instanceColor && (xe = M.instanceColor)), ce === void 0 || ce.attribute !== xe || xe && ce.data !== xe.data) return !0;
        k++;
      }
    return s.attributesNum !== k || s.index !== z;
  }
  function g(M, R, q, z) {
    const W = {}, $ = R.attributes;
    let k = 0;
    const Q = q.getAttributes();
    for (const H in Q)
      if (Q[H].location >= 0) {
        let ce = $[H];
        ce === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (ce = M.instanceMatrix), H === "instanceColor" && M.instanceColor && (ce = M.instanceColor));
        const xe = {};
        xe.attribute = ce, ce && ce.data && (xe.data = ce.data), W[H] = xe, k++;
      }
    s.attributes = W, s.attributesNum = k, s.index = z;
  }
  function x() {
    const M = s.newAttributes;
    for (let R = 0, q = M.length; R < q; R++)
      M[R] = 0;
  }
  function m(M) {
    u(M, 0);
  }
  function u(M, R) {
    const q = s.newAttributes, z = s.enabledAttributes, W = s.attributeDivisors;
    q[M] = 1, z[M] === 0 && (i.enableVertexAttribArray(M), z[M] = 1), W[M] !== R && (i.vertexAttribDivisor(M, R), W[M] = R);
  }
  function b() {
    const M = s.newAttributes, R = s.enabledAttributes;
    for (let q = 0, z = R.length; q < z; q++)
      R[q] !== M[q] && (i.disableVertexAttribArray(q), R[q] = 0);
  }
  function T(M, R, q, z, W, $, k) {
    k === !0 ? i.vertexAttribIPointer(M, R, q, W, $) : i.vertexAttribPointer(M, R, q, z, W, $);
  }
  function S(M, R, q, z) {
    x();
    const W = z.attributes, $ = q.getAttributes(), k = R.defaultAttributeValues;
    for (const Q in $) {
      const H = $[Q];
      if (H.location >= 0) {
        let ie = W[Q];
        if (ie === void 0 && (Q === "instanceMatrix" && M.instanceMatrix && (ie = M.instanceMatrix), Q === "instanceColor" && M.instanceColor && (ie = M.instanceColor)), ie !== void 0) {
          const ce = ie.normalized, xe = ie.itemSize, De = e.get(ie);
          if (De === void 0) continue;
          const je = De.buffer, X = De.type, ee = De.bytesPerElement, ge = X === i.INT || X === i.UNSIGNED_INT || ie.gpuType === la;
          if (ie.isInterleavedBufferAttribute) {
            const re = ie.data, Ee = re.stride, Ae = ie.offset;
            if (re.isInstancedInterleavedBuffer) {
              for (let Ie = 0; Ie < H.locationSize; Ie++)
                u(H.location + Ie, re.meshPerAttribute);
              M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let Ie = 0; Ie < H.locationSize; Ie++)
                m(H.location + Ie);
            i.bindBuffer(i.ARRAY_BUFFER, je);
            for (let Ie = 0; Ie < H.locationSize; Ie++)
              T(
                H.location + Ie,
                xe / H.locationSize,
                X,
                ce,
                Ee * ee,
                (Ae + xe / H.locationSize * Ie) * ee,
                ge
              );
          } else {
            if (ie.isInstancedBufferAttribute) {
              for (let re = 0; re < H.locationSize; re++)
                u(H.location + re, ie.meshPerAttribute);
              M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let re = 0; re < H.locationSize; re++)
                m(H.location + re);
            i.bindBuffer(i.ARRAY_BUFFER, je);
            for (let re = 0; re < H.locationSize; re++)
              T(
                H.location + re,
                xe / H.locationSize,
                X,
                ce,
                xe * ee,
                xe / H.locationSize * re * ee,
                ge
              );
          }
        } else if (k !== void 0) {
          const ce = k[Q];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                i.vertexAttrib2fv(H.location, ce);
                break;
              case 3:
                i.vertexAttrib3fv(H.location, ce);
                break;
              case 4:
                i.vertexAttrib4fv(H.location, ce);
                break;
              default:
                i.vertexAttrib1fv(H.location, ce);
            }
        }
      }
    }
    b();
  }
  function B() {
    U();
    for (const M in n) {
      const R = n[M];
      for (const q in R) {
        const z = R[q];
        for (const W in z)
          h(z[W].object), delete z[W];
        delete R[q];
      }
      delete n[M];
    }
  }
  function A(M) {
    if (n[M.id] === void 0) return;
    const R = n[M.id];
    for (const q in R) {
      const z = R[q];
      for (const W in z)
        h(z[W].object), delete z[W];
      delete R[q];
    }
    delete n[M.id];
  }
  function w(M) {
    for (const R in n) {
      const q = n[R];
      if (q[M.id] === void 0) continue;
      const z = q[M.id];
      for (const W in z)
        h(z[W].object), delete z[W];
      delete q[M.id];
    }
  }
  function U() {
    y(), a = !0, s !== r && (s = r, c(s.object));
  }
  function y() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: U,
    resetDefaultState: y,
    dispose: B,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: w,
    initAttributes: x,
    enableAttribute: m,
    disableUnusedAttributes: b
  };
}
function nf(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, h) {
    i.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, h, f), t.update(h, n, f));
  }
  function o(c, h, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, f);
    let p = 0;
    for (let g = 0; g < f; g++)
      p += h[g];
    t.update(p, n, 1);
  }
  function l(c, h, f, d) {
    if (f === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], h[g], d[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, f);
      let g = 0;
      for (let x = 0; x < f; x++)
        g += h[x] * d[x];
      t.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function rf(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(w) {
    return !(w !== Ct && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const U = w === Fi && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== on && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== zt && !U);
  }
  function l(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const f = t.logarithmicDepthBuffer === !0, d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), u = i.getParameter(i.MAX_VERTEX_ATTRIBS), b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), B = g > 0, A = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: d,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: x,
    maxCubemapSize: m,
    maxAttributes: u,
    maxVertexUniforms: b,
    maxVaryings: T,
    maxFragmentUniforms: S,
    vertexTextures: B,
    maxSamples: A
  };
}
function sf(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new In(), o = new Ce(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, d) {
    const p = f.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = d, n = f.length, p;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(f, d) {
    t = h(f, d, 0);
  }, this.setState = function(f, d, p) {
    const g = f.clippingPlanes, x = f.clipIntersection, m = f.clipShadows, u = i.get(f);
    if (!r || g === null || g.length === 0 || s && !m)
      s ? h(null) : c();
    else {
      const b = s ? 0 : n, T = b * 4;
      let S = u.clippingState || null;
      l.value = S, S = h(g, d, T, p);
      for (let B = 0; B !== T; ++B)
        S[B] = t[B];
      u.clippingState = S, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(f, d, p, g) {
    const x = f !== null ? f.length : 0;
    let m = null;
    if (x !== 0) {
      if (m = l.value, g !== !0 || m === null) {
        const u = p + x * 4, b = d.matrixWorldInverse;
        o.getNormalMatrix(b), (m === null || m.length < u) && (m = new Float32Array(u));
        for (let T = 0, S = p; T !== x; ++T, S += 4)
          a.copy(f[T]).applyMatrix4(b, o), a.normal.toArray(m, S), m[S + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = x, e.numIntersection = 0, m;
  }
}
function af(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === As ? a.mapping = ci : o === ws && (a.mapping = hi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === As || o === ws)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new gh(l.height);
            return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class El extends Ml {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ri = 4, oo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Fn = 20, ss = /* @__PURE__ */ new El(), lo = /* @__PURE__ */ new Ue();
let as = null, os = 0, ls = 0, cs = !1;
const Un = (1 + Math.sqrt(5)) / 2, ni = 1 / Un, co = [
  /* @__PURE__ */ new I(-Un, ni, 0),
  /* @__PURE__ */ new I(Un, ni, 0),
  /* @__PURE__ */ new I(-ni, 0, Un),
  /* @__PURE__ */ new I(ni, 0, Un),
  /* @__PURE__ */ new I(0, Un, -ni),
  /* @__PURE__ */ new I(0, Un, ni),
  /* @__PURE__ */ new I(-1, 1, -1),
  /* @__PURE__ */ new I(1, 1, -1),
  /* @__PURE__ */ new I(-1, 1, 1),
  /* @__PURE__ */ new I(1, 1, 1)
];
class ho {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    as = this._renderer.getRenderTarget(), os = this._renderer.getActiveCubeFace(), ls = this._renderer.getActiveMipmapLevel(), cs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = po(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = fo(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(as, os, ls), this._renderer.xr.enabled = cs, e.scissorTest = !1, ar(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ci || e.mapping === hi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), as = this._renderer.getRenderTarget(), os = this._renderer.getActiveCubeFace(), ls = this._renderer.getActiveMipmapLevel(), cs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Wt,
      minFilter: Wt,
      generateMipmaps: !1,
      type: Fi,
      format: Ct,
      colorSpace: mi,
      depthBuffer: !1
    }, r = uo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = uo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = of(s)), this._blurMaterial = lf(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Pt(this._lodPlanes[0], e);
    this._renderer.compile(t, ss);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Et(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, d = h.toneMapping;
    h.getClearColor(lo), h.toneMapping = Sn, h.autoClear = !1;
    const p = new gl({
      name: "PMREM.Background",
      side: xt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Pt(new Oi(), p);
    let x = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, x = !0) : (p.color.copy(lo), x = !0);
    for (let u = 0; u < 6; u++) {
      const b = u % 3;
      b === 0 ? (o.up.set(0, l[u], 0), o.lookAt(c[u], 0, 0)) : b === 1 ? (o.up.set(0, 0, l[u]), o.lookAt(0, c[u], 0)) : (o.up.set(0, l[u], 0), o.lookAt(0, 0, c[u]));
      const T = this._cubeSize;
      ar(r, b * T, u > 2 ? T : 0, T, T), h.setRenderTarget(r), x && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = f, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === ci || e.mapping === hi;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = po()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = fo());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Pt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    ar(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, ss);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = co[(r - s - 1) % co.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, f = new Pt(this._lodPlanes[r], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Fn - 1), x = s / g, m = isFinite(s) ? 1 + Math.floor(h * x) : Fn;
    m > Fn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);
    const u = [];
    let b = 0;
    for (let w = 0; w < Fn; ++w) {
      const U = w / x, y = Math.exp(-U * U / 2);
      u.push(y), w === 0 ? b += y : w < m && (b += 2 * y);
    }
    for (let w = 0; w < u.length; w++)
      u[w] = u[w] / b;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = u, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: T } = this;
    d.dTheta.value = g, d.mipInt.value = T - n;
    const S = this._sizeLods[r], B = 3 * S * (r > T - ri ? r - T + ri : 0), A = 4 * (this._cubeSize - S);
    ar(t, B, A, 3 * S, 2 * S), l.setRenderTarget(t), l.render(f, ss);
  }
}
function of(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - ri + 1 + oo.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i - ri ? l = oo[a - i + ri - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, f = 1 + c, d = [h, h, f, h, f, f, h, h, f, f, h, f], p = 6, g = 6, x = 3, m = 2, u = 1, b = new Float32Array(x * g * p), T = new Float32Array(m * g * p), S = new Float32Array(u * g * p);
    for (let A = 0; A < p; A++) {
      const w = A % 3 * 2 / 3 - 1, U = A > 2 ? 0 : -1, y = [
        w,
        U,
        0,
        w + 2 / 3,
        U,
        0,
        w + 2 / 3,
        U + 1,
        0,
        w,
        U,
        0,
        w + 2 / 3,
        U + 1,
        0,
        w,
        U + 1,
        0
      ];
      b.set(y, x * g * A), T.set(d, m * g * A);
      const M = [A, A, A, A, A, A];
      S.set(M, u * g * A);
    }
    const B = new cn();
    B.setAttribute("position", new Lt(b, x)), B.setAttribute("uv", new Lt(T, m)), B.setAttribute("faceIndex", new Lt(S, u)), e.push(B), r > ri && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function uo(i, e, t) {
  const n = new Vn(i, e, t);
  return n.texture.mapping = Rr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ar(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function lf(i, e, t) {
  const n = new Float32Array(Fn), r = new I(0, 1, 0);
  return new En({
    name: "SphericalGaussianBlur",
    defines: {
      n: Fn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Mn,
    depthTest: !1,
    depthWrite: !1
  });
}
function fo() {
  return new En({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Mn,
    depthTest: !1,
    depthWrite: !1
  });
}
function po() {
  return new En({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Mn,
    depthTest: !1,
    depthWrite: !1
  });
}
function va() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function cf(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === As || l === ws, h = l === ci || l === hi;
      if (c || h) {
        let f = e.get(o);
        const d = f !== void 0 ? f.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return t === null && (t = new ho(i)), f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), f.texture;
        if (f !== void 0)
          return f.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || h && p && r(p) ? (t === null && (t = new ho(i)), f = c ? t.fromEquirectangular(o) : t.fromCubemap(o), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), o.addEventListener("dispose", s), f.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function hf(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && Pi("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function uf(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const x = d.morphAttributes[g];
      for (let m = 0, u = x.length; m < u; m++)
        e.remove(x[m]);
    }
    d.removeEventListener("dispose", a), delete r[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(f, d) {
    return r[d.id] === !0 || (d.addEventListener("dispose", a), r[d.id] = !0, t.memory.geometries++), d;
  }
  function l(f) {
    const d = f.attributes;
    for (const g in d)
      e.update(d[g], i.ARRAY_BUFFER);
    const p = f.morphAttributes;
    for (const g in p) {
      const x = p[g];
      for (let m = 0, u = x.length; m < u; m++)
        e.update(x[m], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const d = [], p = f.index, g = f.attributes.position;
    let x = 0;
    if (p !== null) {
      const b = p.array;
      x = p.version;
      for (let T = 0, S = b.length; T < S; T += 3) {
        const B = b[T + 0], A = b[T + 1], w = b[T + 2];
        d.push(B, A, A, w, w, B);
      }
    } else if (g !== void 0) {
      const b = g.array;
      x = g.version;
      for (let T = 0, S = b.length / 3 - 1; T < S; T += 3) {
        const B = T + 0, A = T + 1, w = T + 2;
        d.push(B, A, A, w, w, B);
      }
    } else
      return;
    const m = new (ul(d) ? vl : _l)(d, 1);
    m.version = x;
    const u = s.get(f);
    u && e.remove(u), s.set(f, m);
  }
  function h(f) {
    const d = s.get(f);
    if (d) {
      const p = f.index;
      p !== null && d.version < p.version && c(f);
    } else
      c(f);
    return s.get(f);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function df(i, e, t) {
  let n;
  function r(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    i.drawElements(n, p, s, d * a), t.update(p, n, 1);
  }
  function c(d, p, g) {
    g !== 0 && (i.drawElementsInstanced(n, p, s, d * a, g), t.update(p, n, g));
  }
  function h(d, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, d, 0, g);
    let m = 0;
    for (let u = 0; u < g; u++)
      m += p[u];
    t.update(m, n, 1);
  }
  function f(d, p, g, x) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let u = 0; u < d.length; u++)
        c(d[u] / a, p[u], x[u]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, d, 0, x, 0, g);
      let u = 0;
      for (let b = 0; b < g; b++)
        u += p[b] * x[b];
      t.update(u, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = f;
}
function ff(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function pf(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new We();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== f) {
      let y = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      d !== void 0 && d.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, x = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], u = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let T = 0;
      p === !0 && (T = 1), g === !0 && (T = 2), x === !0 && (T = 3);
      let S = o.attributes.position.count * T, B = 1;
      S > e.maxTextureSize && (B = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
      const A = new Float32Array(S * B * 4 * f), w = new fl(A, S, B, f);
      w.type = zt, w.needsUpdate = !0;
      const U = T * 4;
      for (let M = 0; M < f; M++) {
        const R = m[M], q = u[M], z = b[M], W = S * B * 4 * M;
        for (let $ = 0; $ < R.count; $++) {
          const k = $ * U;
          p === !0 && (r.fromBufferAttribute(R, $), A[W + k + 0] = r.x, A[W + k + 1] = r.y, A[W + k + 2] = r.z, A[W + k + 3] = 0), g === !0 && (r.fromBufferAttribute(q, $), A[W + k + 4] = r.x, A[W + k + 5] = r.y, A[W + k + 6] = r.z, A[W + k + 7] = 0), x === !0 && (r.fromBufferAttribute(z, $), A[W + k + 8] = r.x, A[W + k + 9] = r.y, A[W + k + 10] = r.z, A[W + k + 11] = z.itemSize === 4 ? r.w : 1);
        }
      }
      d = {
        count: f,
        texture: w,
        size: new ke(S, B)
      }, n.set(o, d), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let x = 0; x < c.length; x++)
        p += c[x];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size);
  }
  return {
    update: s
  };
}
function mf(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, f = e.get(l, h);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return f;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class Tl extends mt {
  constructor(e, t, n, r, s, a, o, l, c, h = ai) {
    if (h !== ai && h !== di)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === ai && (n = zn), n === void 0 && h === di && (n = ui), super(null, r, s, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Tt, this.minFilter = l !== void 0 ? l : Tt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const bl = /* @__PURE__ */ new mt(), mo = /* @__PURE__ */ new Tl(1, 1), Al = /* @__PURE__ */ new fl(), wl = /* @__PURE__ */ new eh(), Rl = /* @__PURE__ */ new Sl(), go = [], _o = [], vo = new Float32Array(16), xo = new Float32Array(9), Mo = new Float32Array(4);
function _i(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = go[r];
  if (s === void 0 && (s = new Float32Array(r), go[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function lt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function ct(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Dr(i, e) {
  let t = _o[e];
  t === void 0 && (t = new Int32Array(e), _o[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function gf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function _f(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    i.uniform2fv(this.addr, e), ct(t, e);
  }
}
function vf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (lt(t, e)) return;
    i.uniform3fv(this.addr, e), ct(t, e);
  }
}
function xf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    i.uniform4fv(this.addr, e), ct(t, e);
  }
}
function Mf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), ct(t, e);
  } else {
    if (lt(t, n)) return;
    Mo.set(n), i.uniformMatrix2fv(this.addr, !1, Mo), ct(t, n);
  }
}
function Sf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), ct(t, e);
  } else {
    if (lt(t, n)) return;
    xo.set(n), i.uniformMatrix3fv(this.addr, !1, xo), ct(t, n);
  }
}
function yf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), ct(t, e);
  } else {
    if (lt(t, n)) return;
    vo.set(n), i.uniformMatrix4fv(this.addr, !1, vo), ct(t, n);
  }
}
function Ef(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Tf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    i.uniform2iv(this.addr, e), ct(t, e);
  }
}
function bf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (lt(t, e)) return;
    i.uniform3iv(this.addr, e), ct(t, e);
  }
}
function Af(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    i.uniform4iv(this.addr, e), ct(t, e);
  }
}
function wf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Rf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    i.uniform2uiv(this.addr, e), ct(t, e);
  }
}
function Cf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (lt(t, e)) return;
    i.uniform3uiv(this.addr, e), ct(t, e);
  }
}
function Pf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    i.uniform4uiv(this.addr, e), ct(t, e);
  }
}
function Lf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (mo.compareFunction = hl, s = mo) : s = bl, t.setTexture2D(e || s, r);
}
function Df(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || wl, r);
}
function If(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Rl, r);
}
function Uf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Al, r);
}
function Nf(i) {
  switch (i) {
    case 5126:
      return gf;
    case 35664:
      return _f;
    case 35665:
      return vf;
    case 35666:
      return xf;
    case 35674:
      return Mf;
    case 35675:
      return Sf;
    case 35676:
      return yf;
    case 5124:
    case 35670:
      return Ef;
    case 35667:
    case 35671:
      return Tf;
    case 35668:
    case 35672:
      return bf;
    case 35669:
    case 35673:
      return Af;
    case 5125:
      return wf;
    case 36294:
      return Rf;
    case 36295:
      return Cf;
    case 36296:
      return Pf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Lf;
    case 35679:
    case 36299:
    case 36307:
      return Df;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return If;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Uf;
  }
}
function Ff(i, e) {
  i.uniform1fv(this.addr, e);
}
function Of(i, e) {
  const t = _i(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Bf(i, e) {
  const t = _i(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function zf(i, e) {
  const t = _i(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Vf(i, e) {
  const t = _i(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Hf(i, e) {
  const t = _i(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function kf(i, e) {
  const t = _i(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Gf(i, e) {
  i.uniform1iv(this.addr, e);
}
function Wf(i, e) {
  i.uniform2iv(this.addr, e);
}
function Xf(i, e) {
  i.uniform3iv(this.addr, e);
}
function qf(i, e) {
  i.uniform4iv(this.addr, e);
}
function Yf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Kf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Zf(i, e) {
  i.uniform3uiv(this.addr, e);
}
function $f(i, e) {
  i.uniform4uiv(this.addr, e);
}
function jf(i, e, t) {
  const n = this.cache, r = e.length, s = Dr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2D(e[a] || bl, s[a]);
}
function Jf(i, e, t) {
  const n = this.cache, r = e.length, s = Dr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || wl, s[a]);
}
function Qf(i, e, t) {
  const n = this.cache, r = e.length, s = Dr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || Rl, s[a]);
}
function ep(i, e, t) {
  const n = this.cache, r = e.length, s = Dr(t, r);
  lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || Al, s[a]);
}
function tp(i) {
  switch (i) {
    case 5126:
      return Ff;
    case 35664:
      return Of;
    case 35665:
      return Bf;
    case 35666:
      return zf;
    case 35674:
      return Vf;
    case 35675:
      return Hf;
    case 35676:
      return kf;
    case 5124:
    case 35670:
      return Gf;
    case 35667:
    case 35671:
      return Wf;
    case 35668:
    case 35672:
      return Xf;
    case 35669:
    case 35673:
      return qf;
    case 5125:
      return Yf;
    case 36294:
      return Kf;
    case 36295:
      return Zf;
    case 36296:
      return $f;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jf;
    case 35679:
    case 36299:
    case 36307:
      return Jf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ep;
  }
}
class np {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Nf(t.type);
  }
}
class ip {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = tp(t.type);
  }
}
class rp {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const hs = /(\w+)(\])?(\[|\.)?/g;
function So(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function sp(i, e, t) {
  const n = i.name, r = n.length;
  for (hs.lastIndex = 0; ; ) {
    const s = hs.exec(n), a = hs.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      So(t, c === void 0 ? new np(o, i, e) : new ip(o, i, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && (f = new rp(o), So(t, f)), t = f;
    }
  }
}
class Sr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      sp(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function yo(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const ap = 37297;
let op = 0;
function lp(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Eo = /* @__PURE__ */ new Ce();
function cp(i) {
  He._getMatrix(Eo, He.workingColorSpace, i);
  const e = `mat3( ${Eo.elements.map((t) => t.toFixed(4))} )`;
  switch (He.getTransfer(i)) {
    case Cr:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function To(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + lp(i.getShaderSource(e), a);
  } else
    return r;
}
function hp(i, e) {
  const t = cp(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function up(i, e) {
  let t;
  switch (e) {
    case hc:
      t = "Linear";
      break;
    case uc:
      t = "Reinhard";
      break;
    case dc:
      t = "Cineon";
      break;
    case fc:
      t = "ACESFilmic";
      break;
    case mc:
      t = "AgX";
      break;
    case gc:
      t = "Neutral";
      break;
    case pc:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const or = /* @__PURE__ */ new I();
function dp() {
  He.getLuminanceCoefficients(or);
  const i = or.x.toFixed(4), e = or.y.toFixed(4), t = or.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function fp(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Li).join(`
`);
}
function pp(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function mp(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Li(i) {
  return i !== "";
}
function bo(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ao(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const gp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ra(i) {
  return i.replace(gp, vp);
}
const _p = /* @__PURE__ */ new Map();
function vp(i, e) {
  let t = Le[e];
  if (t === void 0) {
    const n = _p.get(e);
    if (n !== void 0)
      t = Le[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return ra(t);
}
const xp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function wo(i) {
  return i.replace(xp, Mp);
}
function Mp(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ro(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Sp(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Jo ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Gl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === tn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function yp(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ci:
      case hi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Rr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Ep(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case hi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Tp(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Qo:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case lc:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case cc:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function bp(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Ap(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Sp(t), c = yp(t), h = Ep(t), f = Tp(t), d = bp(t), p = fp(t), g = pp(s), x = r.createProgram();
  let m, u, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Li).join(`
`), m.length > 0 && (m += `
`), u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Li).join(`
`), u.length > 0 && (u += `
`)) : (m = [
    Ro(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Li).join(`
`), u = [
    Ro(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + f : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Sn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Sn ? Le.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Sn ? up("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Le.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    hp("linearToOutputTexel", t.outputColorSpace),
    dp(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Li).join(`
`)), a = ra(a), a = bo(a, t), a = Ao(a, t), o = ra(o), o = bo(o, t), o = Ao(o, t), a = wo(a), o = wo(o), t.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, u = [
    "#define varying in",
    t.glslVersion === za ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === za ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + u);
  const T = b + m + a, S = b + u + o, B = yo(r, r.VERTEX_SHADER, T), A = yo(r, r.FRAGMENT_SHADER, S);
  r.attachShader(x, B), r.attachShader(x, A), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function w(R) {
    if (i.debug.checkShaderErrors) {
      const q = r.getProgramInfoLog(x).trim(), z = r.getShaderInfoLog(B).trim(), W = r.getShaderInfoLog(A).trim();
      let $ = !0, k = !0;
      if (r.getProgramParameter(x, r.LINK_STATUS) === !1)
        if ($ = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, x, B, A);
        else {
          const Q = To(r, B, "vertex"), H = To(r, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + R.name + `
Material Type: ` + R.type + `

Program Info Log: ` + q + `
` + Q + `
` + H
          );
        }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (z === "" || W === "") && (k = !1);
      k && (R.diagnostics = {
        runnable: $,
        programLog: q,
        vertexShader: {
          log: z,
          prefix: m
        },
        fragmentShader: {
          log: W,
          prefix: u
        }
      });
    }
    r.deleteShader(B), r.deleteShader(A), U = new Sr(r, x), y = mp(r, x);
  }
  let U;
  this.getUniforms = function() {
    return U === void 0 && w(this), U;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && w(this), y;
  };
  let M = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = r.getProgramParameter(x, ap)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = op++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = B, this.fragmentShader = A, this;
}
let wp = 0;
class Rp {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Cp(e), t.set(e, n)), n;
  }
}
class Cp {
  constructor(e) {
    this.id = wp++, this.code = e, this.usedTimes = 0;
  }
}
function Pp(i, e, t, n, r, s, a) {
  const o = new pl(), l = new Rp(), c = /* @__PURE__ */ new Set(), h = [], f = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let p = r.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function x(y) {
    return c.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function m(y, M, R, q, z) {
    const W = q.fog, $ = z.geometry, k = y.isMeshStandardMaterial ? q.environment : null, Q = (y.isMeshStandardMaterial ? t : e).get(y.envMap || k), H = Q && Q.mapping === Rr ? Q.image.height : null, ie = g[y.type];
    y.precision !== null && (p = r.getMaxPrecision(y.precision), p !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", p, "instead."));
    const ce = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, xe = ce !== void 0 ? ce.length : 0;
    let De = 0;
    $.morphAttributes.position !== void 0 && (De = 1), $.morphAttributes.normal !== void 0 && (De = 2), $.morphAttributes.color !== void 0 && (De = 3);
    let je, X, ee, ge;
    if (ie) {
      const Ye = Gt[ie];
      je = Ye.vertexShader, X = Ye.fragmentShader;
    } else
      je = y.vertexShader, X = y.fragmentShader, l.update(y), ee = l.getVertexShaderID(y), ge = l.getFragmentShaderID(y);
    const re = i.getRenderTarget(), Ee = i.state.buffers.depth.getReversed(), Ae = z.isInstancedMesh === !0, Ie = z.isBatchedMesh === !0, it = !!y.map, ze = !!y.matcap, at = !!Q, D = !!y.aoMap, bt = !!y.lightMap, Fe = !!y.bumpMap, Oe = !!y.normalMap, Se = !!y.displacementMap, et = !!y.emissiveMap, Me = !!y.metalnessMap, E = !!y.roughnessMap, _ = y.anisotropy > 0, N = y.clearcoat > 0, Y = y.dispersion > 0, Z = y.iridescence > 0, G = y.sheen > 0, _e = y.transmission > 0, se = _ && !!y.anisotropyMap, he = N && !!y.clearcoatMap, Ve = N && !!y.clearcoatNormalMap, j = N && !!y.clearcoatRoughnessMap, ue = Z && !!y.iridescenceMap, ye = Z && !!y.iridescenceThicknessMap, Te = G && !!y.sheenColorMap, de = G && !!y.sheenRoughnessMap, Be = !!y.specularMap, Pe = !!y.specularColorMap, Je = !!y.specularIntensityMap, C = _e && !!y.transmissionMap, ne = _e && !!y.thicknessMap, V = !!y.gradientMap, K = !!y.alphaMap, le = y.alphaTest > 0, ae = !!y.alphaHash, we = !!y.extensions;
    let rt = Sn;
    y.toneMapped && (re === null || re.isXRRenderTarget === !0) && (rt = i.toneMapping);
    const dt = {
      shaderID: ie,
      shaderType: y.type,
      shaderName: y.name,
      vertexShader: je,
      fragmentShader: X,
      defines: y.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: ge,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: p,
      batching: Ie,
      batchingColor: Ie && z._colorsTexture !== null,
      instancing: Ae,
      instancingColor: Ae && z.instanceColor !== null,
      instancingMorph: Ae && z.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: re === null ? i.outputColorSpace : re.isXRRenderTarget === !0 ? re.texture.colorSpace : mi,
      alphaToCoverage: !!y.alphaToCoverage,
      map: it,
      matcap: ze,
      envMap: at,
      envMapMode: at && Q.mapping,
      envMapCubeUVHeight: H,
      aoMap: D,
      lightMap: bt,
      bumpMap: Fe,
      normalMap: Oe,
      displacementMap: d && Se,
      emissiveMap: et,
      normalMapObjectSpace: Oe && y.normalMapType === yc,
      normalMapTangentSpace: Oe && y.normalMapType === ma,
      metalnessMap: Me,
      roughnessMap: E,
      anisotropy: _,
      anisotropyMap: se,
      clearcoat: N,
      clearcoatMap: he,
      clearcoatNormalMap: Ve,
      clearcoatRoughnessMap: j,
      dispersion: Y,
      iridescence: Z,
      iridescenceMap: ue,
      iridescenceThicknessMap: ye,
      sheen: G,
      sheenColorMap: Te,
      sheenRoughnessMap: de,
      specularMap: Be,
      specularColorMap: Pe,
      specularIntensityMap: Je,
      transmission: _e,
      transmissionMap: C,
      thicknessMap: ne,
      gradientMap: V,
      opaque: y.transparent === !1 && y.blending === si && y.alphaToCoverage === !1,
      alphaMap: K,
      alphaTest: le,
      alphaHash: ae,
      combine: y.combine,
      //
      mapUv: it && x(y.map.channel),
      aoMapUv: D && x(y.aoMap.channel),
      lightMapUv: bt && x(y.lightMap.channel),
      bumpMapUv: Fe && x(y.bumpMap.channel),
      normalMapUv: Oe && x(y.normalMap.channel),
      displacementMapUv: Se && x(y.displacementMap.channel),
      emissiveMapUv: et && x(y.emissiveMap.channel),
      metalnessMapUv: Me && x(y.metalnessMap.channel),
      roughnessMapUv: E && x(y.roughnessMap.channel),
      anisotropyMapUv: se && x(y.anisotropyMap.channel),
      clearcoatMapUv: he && x(y.clearcoatMap.channel),
      clearcoatNormalMapUv: Ve && x(y.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: j && x(y.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ue && x(y.iridescenceMap.channel),
      iridescenceThicknessMapUv: ye && x(y.iridescenceThicknessMap.channel),
      sheenColorMapUv: Te && x(y.sheenColorMap.channel),
      sheenRoughnessMapUv: de && x(y.sheenRoughnessMap.channel),
      specularMapUv: Be && x(y.specularMap.channel),
      specularColorMapUv: Pe && x(y.specularColorMap.channel),
      specularIntensityMapUv: Je && x(y.specularIntensityMap.channel),
      transmissionMapUv: C && x(y.transmissionMap.channel),
      thicknessMapUv: ne && x(y.thicknessMap.channel),
      alphaMapUv: K && x(y.alphaMap.channel),
      //
      vertexTangents: !!$.attributes.tangent && (Oe || _),
      vertexColors: y.vertexColors,
      vertexAlphas: y.vertexColors === !0 && !!$.attributes.color && $.attributes.color.itemSize === 4,
      pointsUvs: z.isPoints === !0 && !!$.attributes.uv && (it || K),
      fog: !!W,
      useFog: y.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: y.flatShading === !0,
      sizeAttenuation: y.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: Ee,
      skinning: z.isSkinnedMesh === !0,
      morphTargets: $.morphAttributes.position !== void 0,
      morphNormals: $.morphAttributes.normal !== void 0,
      morphColors: $.morphAttributes.color !== void 0,
      morphTargetsCount: xe,
      morphTextureStride: De,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: i.shadowMap.enabled && R.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: rt,
      decodeVideoTexture: it && y.map.isVideoTexture === !0 && He.getTransfer(y.map.colorSpace) === Ze,
      decodeVideoTextureEmissive: et && y.emissiveMap.isVideoTexture === !0 && He.getTransfer(y.emissiveMap.colorSpace) === Ze,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === nn,
      flipSided: y.side === xt,
      useDepthPacking: y.depthPacking >= 0,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionClipCullDistance: we && y.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (we && y.extensions.multiDraw === !0 || Ie) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: y.customProgramCacheKey()
    };
    return dt.vertexUv1s = c.has(1), dt.vertexUv2s = c.has(2), dt.vertexUv3s = c.has(3), c.clear(), dt;
  }
  function u(y) {
    const M = [];
    if (y.shaderID ? M.push(y.shaderID) : (M.push(y.customVertexShaderID), M.push(y.customFragmentShaderID)), y.defines !== void 0)
      for (const R in y.defines)
        M.push(R), M.push(y.defines[R]);
    return y.isRawShaderMaterial === !1 && (b(M, y), T(M, y), M.push(i.outputColorSpace)), M.push(y.customProgramCacheKey), M.join();
  }
  function b(y, M) {
    y.push(M.precision), y.push(M.outputColorSpace), y.push(M.envMapMode), y.push(M.envMapCubeUVHeight), y.push(M.mapUv), y.push(M.alphaMapUv), y.push(M.lightMapUv), y.push(M.aoMapUv), y.push(M.bumpMapUv), y.push(M.normalMapUv), y.push(M.displacementMapUv), y.push(M.emissiveMapUv), y.push(M.metalnessMapUv), y.push(M.roughnessMapUv), y.push(M.anisotropyMapUv), y.push(M.clearcoatMapUv), y.push(M.clearcoatNormalMapUv), y.push(M.clearcoatRoughnessMapUv), y.push(M.iridescenceMapUv), y.push(M.iridescenceThicknessMapUv), y.push(M.sheenColorMapUv), y.push(M.sheenRoughnessMapUv), y.push(M.specularMapUv), y.push(M.specularColorMapUv), y.push(M.specularIntensityMapUv), y.push(M.transmissionMapUv), y.push(M.thicknessMapUv), y.push(M.combine), y.push(M.fogExp2), y.push(M.sizeAttenuation), y.push(M.morphTargetsCount), y.push(M.morphAttributeCount), y.push(M.numDirLights), y.push(M.numPointLights), y.push(M.numSpotLights), y.push(M.numSpotLightMaps), y.push(M.numHemiLights), y.push(M.numRectAreaLights), y.push(M.numDirLightShadows), y.push(M.numPointLightShadows), y.push(M.numSpotLightShadows), y.push(M.numSpotLightShadowsWithMaps), y.push(M.numLightProbes), y.push(M.shadowMapType), y.push(M.toneMapping), y.push(M.numClippingPlanes), y.push(M.numClipIntersection), y.push(M.depthPacking);
  }
  function T(y, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), y.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), y.push(o.mask);
  }
  function S(y) {
    const M = g[y.type];
    let R;
    if (M) {
      const q = Gt[M];
      R = dh.clone(q.uniforms);
    } else
      R = y.uniforms;
    return R;
  }
  function B(y, M) {
    let R;
    for (let q = 0, z = h.length; q < z; q++) {
      const W = h[q];
      if (W.cacheKey === M) {
        R = W, ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && (R = new Ap(i, M, y, s), h.push(R)), R;
  }
  function A(y) {
    if (--y.usedTimes === 0) {
      const M = h.indexOf(y);
      h[M] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function w(y) {
    l.remove(y);
  }
  function U() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: u,
    getUniforms: S,
    acquireProgram: B,
    releaseProgram: A,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: U
  };
}
function Lp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function Dp(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Co(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Po() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(f, d, p, g, x, m) {
    let u = i[e];
    return u === void 0 ? (u = {
      id: f.id,
      object: f,
      geometry: d,
      material: p,
      groupOrder: g,
      renderOrder: f.renderOrder,
      z: x,
      group: m
    }, i[e] = u) : (u.id = f.id, u.object = f, u.geometry = d, u.material = p, u.groupOrder = g, u.renderOrder = f.renderOrder, u.z = x, u.group = m), e++, u;
  }
  function o(f, d, p, g, x, m) {
    const u = a(f, d, p, g, x, m);
    p.transmission > 0 ? n.push(u) : p.transparent === !0 ? r.push(u) : t.push(u);
  }
  function l(f, d, p, g, x, m) {
    const u = a(f, d, p, g, x, m);
    p.transmission > 0 ? n.unshift(u) : p.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function c(f, d) {
    t.length > 1 && t.sort(f || Dp), n.length > 1 && n.sort(d || Co), r.length > 1 && r.sort(d || Co);
  }
  function h() {
    for (let f = e, d = i.length; f < d; f++) {
      const p = i[f];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Ip() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Po(), i.set(n, [a])) : r >= s.length ? (a = new Po(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Up() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new I(),
            color: new Ue()
          };
          break;
        case "SpotLight":
          t = {
            position: new I(),
            direction: new I(),
            color: new Ue(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new I(),
            color: new Ue(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new I(),
            skyColor: new Ue(),
            groundColor: new Ue()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ue(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Np() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ke()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ke()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ke(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Fp = 0;
function Op(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Bp(i) {
  const e = new Up(), t = Np(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new I());
  const r = new I(), s = new Ne(), a = new Ne();
  function o(c) {
    let h = 0, f = 0, d = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let p = 0, g = 0, x = 0, m = 0, u = 0, b = 0, T = 0, S = 0, B = 0, A = 0, w = 0;
    c.sort(Op);
    for (let y = 0, M = c.length; y < M; y++) {
      const R = c[y], q = R.color, z = R.intensity, W = R.distance, $ = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
      if (R.isAmbientLight)
        h += q.r * z, f += q.g * z, d += q.b * z;
      else if (R.isLightProbe) {
        for (let k = 0; k < 9; k++)
          n.probe[k].addScaledVector(R.sh.coefficients[k], z);
        w++;
      } else if (R.isDirectionalLight) {
        const k = e.get(R);
        if (k.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow) {
          const Q = R.shadow, H = t.get(R);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, n.directionalShadow[p] = H, n.directionalShadowMap[p] = $, n.directionalShadowMatrix[p] = R.shadow.matrix, b++;
        }
        n.directional[p] = k, p++;
      } else if (R.isSpotLight) {
        const k = e.get(R);
        k.position.setFromMatrixPosition(R.matrixWorld), k.color.copy(q).multiplyScalar(z), k.distance = W, k.coneCos = Math.cos(R.angle), k.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), k.decay = R.decay, n.spot[x] = k;
        const Q = R.shadow;
        if (R.map && (n.spotLightMap[B] = R.map, B++, Q.updateMatrices(R), R.castShadow && A++), n.spotLightMatrix[x] = Q.matrix, R.castShadow) {
          const H = t.get(R);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, n.spotShadow[x] = H, n.spotShadowMap[x] = $, S++;
        }
        x++;
      } else if (R.isRectAreaLight) {
        const k = e.get(R);
        k.color.copy(q).multiplyScalar(z), k.halfWidth.set(R.width * 0.5, 0, 0), k.halfHeight.set(0, R.height * 0.5, 0), n.rectArea[m] = k, m++;
      } else if (R.isPointLight) {
        const k = e.get(R);
        if (k.color.copy(R.color).multiplyScalar(R.intensity), k.distance = R.distance, k.decay = R.decay, R.castShadow) {
          const Q = R.shadow, H = t.get(R);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, H.shadowCameraNear = Q.camera.near, H.shadowCameraFar = Q.camera.far, n.pointShadow[g] = H, n.pointShadowMap[g] = $, n.pointShadowMatrix[g] = R.shadow.matrix, T++;
        }
        n.point[g] = k, g++;
      } else if (R.isHemisphereLight) {
        const k = e.get(R);
        k.skyColor.copy(R.color).multiplyScalar(z), k.groundColor.copy(R.groundColor).multiplyScalar(z), n.hemi[u] = k, u++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = te.LTC_FLOAT_1, n.rectAreaLTC2 = te.LTC_FLOAT_2) : (n.rectAreaLTC1 = te.LTC_HALF_1, n.rectAreaLTC2 = te.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = d;
    const U = n.hash;
    (U.directionalLength !== p || U.pointLength !== g || U.spotLength !== x || U.rectAreaLength !== m || U.hemiLength !== u || U.numDirectionalShadows !== b || U.numPointShadows !== T || U.numSpotShadows !== S || U.numSpotMaps !== B || U.numLightProbes !== w) && (n.directional.length = p, n.spot.length = x, n.rectArea.length = m, n.point.length = g, n.hemi.length = u, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = S + B - A, n.spotLightMap.length = B, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = w, U.directionalLength = p, U.pointLength = g, U.spotLength = x, U.rectAreaLength = m, U.hemiLength = u, U.numDirectionalShadows = b, U.numPointShadows = T, U.numSpotShadows = S, U.numSpotMaps = B, U.numLightProbes = w, n.version = Fp++);
  }
  function l(c, h) {
    let f = 0, d = 0, p = 0, g = 0, x = 0;
    const m = h.matrixWorldInverse;
    for (let u = 0, b = c.length; u < b; u++) {
      const T = c[u];
      if (T.isDirectionalLight) {
        const S = n.directional[f];
        S.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(m), f++;
      } else if (T.isSpotLight) {
        const S = n.spot[p];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), S.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(m), p++;
      } else if (T.isRectAreaLight) {
        const S = n.rectArea[g];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), a.identity(), s.copy(T.matrixWorld), s.premultiply(m), a.extractRotation(s), S.halfWidth.set(T.width * 0.5, 0, 0), S.halfHeight.set(0, T.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), g++;
      } else if (T.isPointLight) {
        const S = n.point[d];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), d++;
      } else if (T.isHemisphereLight) {
        const S = n.hemi[x];
        S.direction.setFromMatrixPosition(T.matrixWorld), S.direction.transformDirection(m), x++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Lo(i) {
  const e = new Bp(i), t = [], n = [];
  function r(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function zp(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Lo(i), e.set(r, [o])) : s >= a.length ? (o = new Lo(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Vp extends bn {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.depthPacking = Mc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Hp extends bn {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const kp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Wp(i, e, t) {
  let n = new _a();
  const r = new ke(), s = new ke(), a = new We(), o = new Vp({ depthPacking: Sc }), l = new Hp(), c = {}, h = t.maxTextureSize, f = { [yn]: xt, [xt]: yn, [nn]: nn }, d = new En({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ke() },
      radius: { value: 4 }
    },
    vertexShader: kp,
    fragmentShader: Gp
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new cn();
  g.setAttribute(
    "position",
    new Lt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new Pt(g, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Jo;
  let u = this.type;
  this.render = function(A, w, U) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0) return;
    const y = i.getRenderTarget(), M = i.getActiveCubeFace(), R = i.getActiveMipmapLevel(), q = i.state;
    q.setBlending(Mn), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(!0), q.setScissorTest(!1);
    const z = u !== tn && this.type === tn, W = u === tn && this.type !== tn;
    for (let $ = 0, k = A.length; $ < k; $++) {
      const Q = A[$], H = Q.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      r.copy(H.mapSize);
      const ie = H.getFrameExtents();
      if (r.multiply(ie), s.copy(H.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / ie.x), r.x = s.x * ie.x, H.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / ie.y), r.y = s.y * ie.y, H.mapSize.y = s.y)), H.map === null || z === !0 || W === !0) {
        const xe = this.type !== tn ? { minFilter: Tt, magFilter: Tt } : {};
        H.map !== null && H.map.dispose(), H.map = new Vn(r.x, r.y, xe), H.map.texture.name = Q.name + ".shadowMap", H.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(H.map), i.clear();
      const ce = H.getViewportCount();
      for (let xe = 0; xe < ce; xe++) {
        const De = H.getViewport(xe);
        a.set(
          s.x * De.x,
          s.y * De.y,
          s.x * De.z,
          s.y * De.w
        ), q.viewport(a), H.updateMatrices(Q, xe), n = H.getFrustum(), S(w, U, H.camera, Q, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === tn && b(H, U), H.needsUpdate = !1;
    }
    u = this.type, m.needsUpdate = !1, i.setRenderTarget(y, M, R);
  };
  function b(A, w) {
    const U = e.update(x);
    d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, p.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Vn(r.x, r.y)), d.uniforms.shadow_pass.value = A.map.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(w, null, U, d, x, null), p.uniforms.shadow_pass.value = A.mapPass.texture, p.uniforms.resolution.value = A.mapSize, p.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(w, null, U, p, x, null);
  }
  function T(A, w, U, y) {
    let M = null;
    const R = U.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (R !== void 0)
      M = R;
    else if (M = U.isPointLight === !0 ? l : o, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const q = M.uuid, z = w.uuid;
      let W = c[q];
      W === void 0 && (W = {}, c[q] = W);
      let $ = W[z];
      $ === void 0 && ($ = M.clone(), W[z] = $, w.addEventListener("dispose", B)), M = $;
    }
    if (M.visible = w.visible, M.wireframe = w.wireframe, y === tn ? M.side = w.shadowSide !== null ? w.shadowSide : w.side : M.side = w.shadowSide !== null ? w.shadowSide : f[w.side], M.alphaMap = w.alphaMap, M.alphaTest = w.alphaTest, M.map = w.map, M.clipShadows = w.clipShadows, M.clippingPlanes = w.clippingPlanes, M.clipIntersection = w.clipIntersection, M.displacementMap = w.displacementMap, M.displacementScale = w.displacementScale, M.displacementBias = w.displacementBias, M.wireframeLinewidth = w.wireframeLinewidth, M.linewidth = w.linewidth, U.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const q = i.properties.get(M);
      q.light = U;
    }
    return M;
  }
  function S(A, w, U, y, M) {
    if (A.visible === !1) return;
    if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && M === tn) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, A.matrixWorld);
      const z = e.update(A), W = A.material;
      if (Array.isArray(W)) {
        const $ = z.groups;
        for (let k = 0, Q = $.length; k < Q; k++) {
          const H = $[k], ie = W[H.materialIndex];
          if (ie && ie.visible) {
            const ce = T(A, ie, y, M);
            A.onBeforeShadow(i, A, w, U, z, ce, H), i.renderBufferDirect(U, null, z, ce, A, H), A.onAfterShadow(i, A, w, U, z, ce, H);
          }
        }
      } else if (W.visible) {
        const $ = T(A, W, y, M);
        A.onBeforeShadow(i, A, w, U, z, $, null), i.renderBufferDirect(U, null, z, $, A, null), A.onAfterShadow(i, A, w, U, z, $, null);
      }
    }
    const q = A.children;
    for (let z = 0, W = q.length; z < W; z++)
      S(q[z], w, U, y, M);
  }
  function B(A) {
    A.target.removeEventListener("dispose", B);
    for (const U in c) {
      const y = c[U], M = A.target.uuid;
      M in y && (y[M].dispose(), delete y[M]);
    }
  }
}
const Xp = {
  [xs]: Ms,
  [Ss]: Ts,
  [ys]: bs,
  [li]: Es,
  [Ms]: xs,
  [Ts]: Ss,
  [bs]: ys,
  [Es]: li
};
function qp(i, e) {
  function t() {
    let C = !1;
    const ne = new We();
    let V = null;
    const K = new We(0, 0, 0, 0);
    return {
      setMask: function(le) {
        V !== le && !C && (i.colorMask(le, le, le, le), V = le);
      },
      setLocked: function(le) {
        C = le;
      },
      setClear: function(le, ae, we, rt, dt) {
        dt === !0 && (le *= rt, ae *= rt, we *= rt), ne.set(le, ae, we, rt), K.equals(ne) === !1 && (i.clearColor(le, ae, we, rt), K.copy(ne));
      },
      reset: function() {
        C = !1, V = null, K.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let C = !1, ne = !1, V = null, K = null, le = null;
    return {
      setReversed: function(ae) {
        if (ne !== ae) {
          const we = e.get("EXT_clip_control");
          ne ? we.clipControlEXT(we.LOWER_LEFT_EXT, we.ZERO_TO_ONE_EXT) : we.clipControlEXT(we.LOWER_LEFT_EXT, we.NEGATIVE_ONE_TO_ONE_EXT);
          const rt = le;
          le = null, this.setClear(rt);
        }
        ne = ae;
      },
      getReversed: function() {
        return ne;
      },
      setTest: function(ae) {
        ae ? re(i.DEPTH_TEST) : Ee(i.DEPTH_TEST);
      },
      setMask: function(ae) {
        V !== ae && !C && (i.depthMask(ae), V = ae);
      },
      setFunc: function(ae) {
        if (ne && (ae = Xp[ae]), K !== ae) {
          switch (ae) {
            case xs:
              i.depthFunc(i.NEVER);
              break;
            case Ms:
              i.depthFunc(i.ALWAYS);
              break;
            case Ss:
              i.depthFunc(i.LESS);
              break;
            case li:
              i.depthFunc(i.LEQUAL);
              break;
            case ys:
              i.depthFunc(i.EQUAL);
              break;
            case Es:
              i.depthFunc(i.GEQUAL);
              break;
            case Ts:
              i.depthFunc(i.GREATER);
              break;
            case bs:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          K = ae;
        }
      },
      setLocked: function(ae) {
        C = ae;
      },
      setClear: function(ae) {
        le !== ae && (ne && (ae = 1 - ae), i.clearDepth(ae), le = ae);
      },
      reset: function() {
        C = !1, V = null, K = null, le = null, ne = !1;
      }
    };
  }
  function r() {
    let C = !1, ne = null, V = null, K = null, le = null, ae = null, we = null, rt = null, dt = null;
    return {
      setTest: function(Ye) {
        C || (Ye ? re(i.STENCIL_TEST) : Ee(i.STENCIL_TEST));
      },
      setMask: function(Ye) {
        ne !== Ye && !C && (i.stencilMask(Ye), ne = Ye);
      },
      setFunc: function(Ye, Dt, Yt) {
        (V !== Ye || K !== Dt || le !== Yt) && (i.stencilFunc(Ye, Dt, Yt), V = Ye, K = Dt, le = Yt);
      },
      setOp: function(Ye, Dt, Yt) {
        (ae !== Ye || we !== Dt || rt !== Yt) && (i.stencilOp(Ye, Dt, Yt), ae = Ye, we = Dt, rt = Yt);
      },
      setLocked: function(Ye) {
        C = Ye;
      },
      setClear: function(Ye) {
        dt !== Ye && (i.clearStencil(Ye), dt = Ye);
      },
      reset: function() {
        C = !1, ne = null, V = null, K = null, le = null, ae = null, we = null, rt = null, dt = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, x = !1, m = null, u = null, b = null, T = null, S = null, B = null, A = null, w = new Ue(0, 0, 0), U = 0, y = !1, M = null, R = null, q = null, z = null, W = null;
  const $ = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let k = !1, Q = 0;
  const H = i.getParameter(i.VERSION);
  H.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(H)[1]), k = Q >= 1) : H.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), k = Q >= 2);
  let ie = null, ce = {};
  const xe = i.getParameter(i.SCISSOR_BOX), De = i.getParameter(i.VIEWPORT), je = new We().fromArray(xe), X = new We().fromArray(De);
  function ee(C, ne, V, K) {
    const le = new Uint8Array(4), ae = i.createTexture();
    i.bindTexture(C, ae), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let we = 0; we < V; we++)
      C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY ? i.texImage3D(ne, 0, i.RGBA, 1, 1, K, 0, i.RGBA, i.UNSIGNED_BYTE, le) : i.texImage2D(ne + we, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, le);
    return ae;
  }
  const ge = {};
  ge[i.TEXTURE_2D] = ee(i.TEXTURE_2D, i.TEXTURE_2D, 1), ge[i.TEXTURE_CUBE_MAP] = ee(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ge[i.TEXTURE_2D_ARRAY] = ee(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), ge[i.TEXTURE_3D] = ee(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), re(i.DEPTH_TEST), a.setFunc(li), Fe(!1), Oe(Pa), re(i.CULL_FACE), D(Mn);
  function re(C) {
    h[C] !== !0 && (i.enable(C), h[C] = !0);
  }
  function Ee(C) {
    h[C] !== !1 && (i.disable(C), h[C] = !1);
  }
  function Ae(C, ne) {
    return f[C] !== ne ? (i.bindFramebuffer(C, ne), f[C] = ne, C === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = ne), C === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = ne), !0) : !1;
  }
  function Ie(C, ne) {
    let V = p, K = !1;
    if (C) {
      V = d.get(ne), V === void 0 && (V = [], d.set(ne, V));
      const le = C.textures;
      if (V.length !== le.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let ae = 0, we = le.length; ae < we; ae++)
          V[ae] = i.COLOR_ATTACHMENT0 + ae;
        V.length = le.length, K = !0;
      }
    } else
      V[0] !== i.BACK && (V[0] = i.BACK, K = !0);
    K && i.drawBuffers(V);
  }
  function it(C) {
    return g !== C ? (i.useProgram(C), g = C, !0) : !1;
  }
  const ze = {
    [Nn]: i.FUNC_ADD,
    [Xl]: i.FUNC_SUBTRACT,
    [ql]: i.FUNC_REVERSE_SUBTRACT
  };
  ze[Yl] = i.MIN, ze[Kl] = i.MAX;
  const at = {
    [Zl]: i.ZERO,
    [$l]: i.ONE,
    [jl]: i.SRC_COLOR,
    [_s]: i.SRC_ALPHA,
    [ic]: i.SRC_ALPHA_SATURATE,
    [tc]: i.DST_COLOR,
    [Ql]: i.DST_ALPHA,
    [Jl]: i.ONE_MINUS_SRC_COLOR,
    [vs]: i.ONE_MINUS_SRC_ALPHA,
    [nc]: i.ONE_MINUS_DST_COLOR,
    [ec]: i.ONE_MINUS_DST_ALPHA,
    [rc]: i.CONSTANT_COLOR,
    [sc]: i.ONE_MINUS_CONSTANT_COLOR,
    [ac]: i.CONSTANT_ALPHA,
    [oc]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function D(C, ne, V, K, le, ae, we, rt, dt, Ye) {
    if (C === Mn) {
      x === !0 && (Ee(i.BLEND), x = !1);
      return;
    }
    if (x === !1 && (re(i.BLEND), x = !0), C !== Wl) {
      if (C !== m || Ye !== y) {
        if ((u !== Nn || S !== Nn) && (i.blendEquation(i.FUNC_ADD), u = Nn, S = Nn), Ye)
          switch (C) {
            case si:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case La:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Da:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ia:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case si:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case La:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Da:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ia:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        b = null, T = null, B = null, A = null, w.set(0, 0, 0), U = 0, m = C, y = Ye;
      }
      return;
    }
    le = le || ne, ae = ae || V, we = we || K, (ne !== u || le !== S) && (i.blendEquationSeparate(ze[ne], ze[le]), u = ne, S = le), (V !== b || K !== T || ae !== B || we !== A) && (i.blendFuncSeparate(at[V], at[K], at[ae], at[we]), b = V, T = K, B = ae, A = we), (rt.equals(w) === !1 || dt !== U) && (i.blendColor(rt.r, rt.g, rt.b, dt), w.copy(rt), U = dt), m = C, y = !1;
  }
  function bt(C, ne) {
    C.side === nn ? Ee(i.CULL_FACE) : re(i.CULL_FACE);
    let V = C.side === xt;
    ne && (V = !V), Fe(V), C.blending === si && C.transparent === !1 ? D(Mn) : D(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), a.setFunc(C.depthFunc), a.setTest(C.depthTest), a.setMask(C.depthWrite), s.setMask(C.colorWrite);
    const K = C.stencilWrite;
    o.setTest(K), K && (o.setMask(C.stencilWriteMask), o.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), o.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), et(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? re(i.SAMPLE_ALPHA_TO_COVERAGE) : Ee(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Fe(C) {
    M !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = C);
  }
  function Oe(C) {
    C !== Hl ? (re(i.CULL_FACE), C !== R && (C === Pa ? i.cullFace(i.BACK) : C === kl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ee(i.CULL_FACE), R = C;
  }
  function Se(C) {
    C !== q && (k && i.lineWidth(C), q = C);
  }
  function et(C, ne, V) {
    C ? (re(i.POLYGON_OFFSET_FILL), (z !== ne || W !== V) && (i.polygonOffset(ne, V), z = ne, W = V)) : Ee(i.POLYGON_OFFSET_FILL);
  }
  function Me(C) {
    C ? re(i.SCISSOR_TEST) : Ee(i.SCISSOR_TEST);
  }
  function E(C) {
    C === void 0 && (C = i.TEXTURE0 + $ - 1), ie !== C && (i.activeTexture(C), ie = C);
  }
  function _(C, ne, V) {
    V === void 0 && (ie === null ? V = i.TEXTURE0 + $ - 1 : V = ie);
    let K = ce[V];
    K === void 0 && (K = { type: void 0, texture: void 0 }, ce[V] = K), (K.type !== C || K.texture !== ne) && (ie !== V && (i.activeTexture(V), ie = V), i.bindTexture(C, ne || ge[C]), K.type = C, K.texture = ne);
  }
  function N() {
    const C = ce[ie];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function Y() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function G() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function se() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function he() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ve() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function j() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ue() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ye() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Te(C) {
    je.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w), je.copy(C));
  }
  function de(C) {
    X.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w), X.copy(C));
  }
  function Be(C, ne) {
    let V = c.get(ne);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), c.set(ne, V));
    let K = V.get(C);
    K === void 0 && (K = i.getUniformBlockIndex(ne, C.name), V.set(C, K));
  }
  function Pe(C, ne) {
    const K = c.get(ne).get(C);
    l.get(ne) !== K && (i.uniformBlockBinding(ne, K, C.__bindingPointIndex), l.set(ne, K));
  }
  function Je() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, ie = null, ce = {}, f = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, x = !1, m = null, u = null, b = null, T = null, S = null, B = null, A = null, w = new Ue(0, 0, 0), U = 0, y = !1, M = null, R = null, q = null, z = null, W = null, je.set(0, 0, i.canvas.width, i.canvas.height), X.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: re,
    disable: Ee,
    bindFramebuffer: Ae,
    drawBuffers: Ie,
    useProgram: it,
    setBlending: D,
    setMaterial: bt,
    setFlipSided: Fe,
    setCullFace: Oe,
    setLineWidth: Se,
    setPolygonOffset: et,
    setScissorTest: Me,
    activeTexture: E,
    bindTexture: _,
    unbindTexture: N,
    compressedTexImage2D: Y,
    compressedTexImage3D: Z,
    texImage2D: ue,
    texImage3D: ye,
    updateUBOMapping: Be,
    uniformBlockBinding: Pe,
    texStorage2D: Ve,
    texStorage3D: j,
    texSubImage2D: G,
    texSubImage3D: _e,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: he,
    scissor: Te,
    viewport: de,
    reset: Je
  };
}
function Do(i, e, t, n) {
  const r = Yp(n);
  switch (t) {
    case rl:
      return i * e;
    case al:
      return i * e;
    case ol:
      return i * e * 2;
    case ua:
      return i * e / r.components * r.byteLength;
    case da:
      return i * e / r.components * r.byteLength;
    case ll:
      return i * e * 2 / r.components * r.byteLength;
    case fa:
      return i * e * 2 / r.components * r.byteLength;
    case sl:
      return i * e * 3 / r.components * r.byteLength;
    case Ct:
      return i * e * 4 / r.components * r.byteLength;
    case pa:
      return i * e * 4 / r.components * r.byteLength;
    case gr:
    case _r:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case vr:
    case xr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ls:
    case Is:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case Ps:
    case Ds:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case Us:
    case Ns:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Fs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Os:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Bs:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case zs:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Vs:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Hs:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case ks:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Gs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ws:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Xs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case qs:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ys:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ks:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Zs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case $s:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Mr:
    case js:
    case Js:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case cl:
    case Qs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case ea:
    case ta:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Yp(i) {
  switch (i) {
    case on:
    case tl:
      return { byteLength: 1, components: 1 };
    case Ui:
    case nl:
    case Fi:
      return { byteLength: 2, components: 1 };
    case ca:
    case ha:
      return { byteLength: 2, components: 4 };
    case zn:
    case la:
    case zt:
      return { byteLength: 4, components: 1 };
    case il:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function Kp(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ke(), h = /* @__PURE__ */ new WeakMap();
  let f;
  const d = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, _) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, _)
    ) : Ni("canvas");
  }
  function x(E, _, N) {
    let Y = 1;
    const Z = Me(E);
    if ((Z.width > N || Z.height > N) && (Y = N / Math.max(Z.width, Z.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const G = Math.floor(Y * Z.width), _e = Math.floor(Y * Z.height);
        f === void 0 && (f = g(G, _e));
        const se = _ ? g(G, _e) : f;
        return se.width = G, se.height = _e, se.getContext("2d").drawImage(E, 0, 0, G, _e), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + G + "x" + _e + ")."), se;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function u(E) {
    i.generateMipmap(E);
  }
  function b(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(E, _, N, Y, Z = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let G = _;
    if (_ === i.RED && (N === i.FLOAT && (G = i.R32F), N === i.HALF_FLOAT && (G = i.R16F), N === i.UNSIGNED_BYTE && (G = i.R8)), _ === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.R8UI), N === i.UNSIGNED_SHORT && (G = i.R16UI), N === i.UNSIGNED_INT && (G = i.R32UI), N === i.BYTE && (G = i.R8I), N === i.SHORT && (G = i.R16I), N === i.INT && (G = i.R32I)), _ === i.RG && (N === i.FLOAT && (G = i.RG32F), N === i.HALF_FLOAT && (G = i.RG16F), N === i.UNSIGNED_BYTE && (G = i.RG8)), _ === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.RG8UI), N === i.UNSIGNED_SHORT && (G = i.RG16UI), N === i.UNSIGNED_INT && (G = i.RG32UI), N === i.BYTE && (G = i.RG8I), N === i.SHORT && (G = i.RG16I), N === i.INT && (G = i.RG32I)), _ === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.RGB8UI), N === i.UNSIGNED_SHORT && (G = i.RGB16UI), N === i.UNSIGNED_INT && (G = i.RGB32UI), N === i.BYTE && (G = i.RGB8I), N === i.SHORT && (G = i.RGB16I), N === i.INT && (G = i.RGB32I)), _ === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.RGBA8UI), N === i.UNSIGNED_SHORT && (G = i.RGBA16UI), N === i.UNSIGNED_INT && (G = i.RGBA32UI), N === i.BYTE && (G = i.RGBA8I), N === i.SHORT && (G = i.RGBA16I), N === i.INT && (G = i.RGBA32I)), _ === i.RGB && N === i.UNSIGNED_INT_5_9_9_9_REV && (G = i.RGB9_E5), _ === i.RGBA) {
      const _e = Z ? Cr : He.getTransfer(Y);
      N === i.FLOAT && (G = i.RGBA32F), N === i.HALF_FLOAT && (G = i.RGBA16F), N === i.UNSIGNED_BYTE && (G = _e === Ze ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (G = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (G = i.RGB5_A1);
    }
    return (G === i.R16F || G === i.R32F || G === i.RG16F || G === i.RG32F || G === i.RGBA16F || G === i.RGBA32F) && e.get("EXT_color_buffer_float"), G;
  }
  function S(E, _) {
    let N;
    return E ? _ === null || _ === zn || _ === ui ? N = i.DEPTH24_STENCIL8 : _ === zt ? N = i.DEPTH32F_STENCIL8 : _ === Ui && (N = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === zn || _ === ui ? N = i.DEPTH_COMPONENT24 : _ === zt ? N = i.DEPTH_COMPONENT32F : _ === Ui && (N = i.DEPTH_COMPONENT16), N;
  }
  function B(E, _) {
    return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== Tt && E.minFilter !== Wt ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function A(E) {
    const _ = E.target;
    _.removeEventListener("dispose", A), U(_), _.isVideoTexture && h.delete(_);
  }
  function w(E) {
    const _ = E.target;
    _.removeEventListener("dispose", w), M(_);
  }
  function U(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const N = E.source, Y = d.get(N);
    if (Y) {
      const Z = Y[_.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && y(E), Object.keys(Y).length === 0 && d.delete(N);
    }
    n.remove(E);
  }
  function y(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const N = E.source, Y = d.get(N);
    delete Y[_.__cacheKey], a.memory.textures--;
  }
  function M(E) {
    const _ = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(_.__webglFramebuffer[Y]))
          for (let Z = 0; Z < _.__webglFramebuffer[Y].length; Z++) i.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[Y]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let Y = 0; Y < _.__webglFramebuffer.length; Y++) i.deleteFramebuffer(_.__webglFramebuffer[Y]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let Y = 0; Y < _.__webglColorRenderbuffer.length; Y++)
          _.__webglColorRenderbuffer[Y] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const N = E.textures;
    for (let Y = 0, Z = N.length; Y < Z; Y++) {
      const G = n.get(N[Y]);
      G.__webglTexture && (i.deleteTexture(G.__webglTexture), a.memory.textures--), n.remove(N[Y]);
    }
    n.remove(E);
  }
  let R = 0;
  function q() {
    R = 0;
  }
  function z() {
    const E = R;
    return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), R += 1, E;
  }
  function W(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function $(E, _) {
    const N = n.get(E);
    if (E.isVideoTexture && Se(E), E.isRenderTargetTexture === !1 && E.version > 0 && N.__version !== E.version) {
      const Y = E.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(N, E, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function k(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      X(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + _);
  }
  function Q(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      X(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function H(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      ee(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + _);
  }
  const ie = {
    [Rs]: i.REPEAT,
    [On]: i.CLAMP_TO_EDGE,
    [Cs]: i.MIRRORED_REPEAT
  }, ce = {
    [Tt]: i.NEAREST,
    [vc]: i.NEAREST_MIPMAP_NEAREST,
    [Hi]: i.NEAREST_MIPMAP_LINEAR,
    [Wt]: i.LINEAR,
    [Or]: i.LINEAR_MIPMAP_NEAREST,
    [Bn]: i.LINEAR_MIPMAP_LINEAR
  }, xe = {
    [Ec]: i.NEVER,
    [Cc]: i.ALWAYS,
    [Tc]: i.LESS,
    [hl]: i.LEQUAL,
    [bc]: i.EQUAL,
    [Rc]: i.GEQUAL,
    [Ac]: i.GREATER,
    [wc]: i.NOTEQUAL
  };
  function De(E, _) {
    if (_.type === zt && e.has("OES_texture_float_linear") === !1 && (_.magFilter === Wt || _.magFilter === Or || _.magFilter === Hi || _.magFilter === Bn || _.minFilter === Wt || _.minFilter === Or || _.minFilter === Hi || _.minFilter === Bn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, ie[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, ie[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, ie[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ce[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ce[_.minFilter]), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, xe[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === Tt || _.minFilter !== Hi && _.minFilter !== Bn || _.type === zt && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function je(E, _) {
    let N = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, _.addEventListener("dispose", A));
    const Y = _.source;
    let Z = d.get(Y);
    Z === void 0 && (Z = {}, d.set(Y, Z));
    const G = W(_);
    if (G !== E.__cacheKey) {
      Z[G] === void 0 && (Z[G] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, N = !0), Z[G].usedTimes++;
      const _e = Z[E.__cacheKey];
      _e !== void 0 && (Z[E.__cacheKey].usedTimes--, _e.usedTimes === 0 && y(_)), E.__cacheKey = G, E.__webglTexture = Z[G].texture;
    }
    return N;
  }
  function X(E, _, N) {
    let Y = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Y = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (Y = i.TEXTURE_3D);
    const Z = je(E, _), G = _.source;
    t.bindTexture(Y, E.__webglTexture, i.TEXTURE0 + N);
    const _e = n.get(G);
    if (G.version !== _e.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const se = He.getPrimaries(He.workingColorSpace), he = _.colorSpace === vn ? null : He.getPrimaries(_.colorSpace), Ve = _.colorSpace === vn || se === he ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ve);
      let j = x(_.image, !1, r.maxTextureSize);
      j = et(_, j);
      const ue = s.convert(_.format, _.colorSpace), ye = s.convert(_.type);
      let Te = T(_.internalFormat, ue, ye, _.colorSpace, _.isVideoTexture);
      De(Y, _);
      let de;
      const Be = _.mipmaps, Pe = _.isVideoTexture !== !0, Je = _e.__version === void 0 || Z === !0, C = G.dataReady, ne = B(_, j);
      if (_.isDepthTexture)
        Te = S(_.format === di, _.type), Je && (Pe ? t.texStorage2D(i.TEXTURE_2D, 1, Te, j.width, j.height) : t.texImage2D(i.TEXTURE_2D, 0, Te, j.width, j.height, 0, ue, ye, null));
      else if (_.isDataTexture)
        if (Be.length > 0) {
          Pe && Je && t.texStorage2D(i.TEXTURE_2D, ne, Te, Be[0].width, Be[0].height);
          for (let V = 0, K = Be.length; V < K; V++)
            de = Be[V], Pe ? C && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, de.width, de.height, ue, ye, de.data) : t.texImage2D(i.TEXTURE_2D, V, Te, de.width, de.height, 0, ue, ye, de.data);
          _.generateMipmaps = !1;
        } else
          Pe ? (Je && t.texStorage2D(i.TEXTURE_2D, ne, Te, j.width, j.height), C && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, j.width, j.height, ue, ye, j.data)) : t.texImage2D(i.TEXTURE_2D, 0, Te, j.width, j.height, 0, ue, ye, j.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Pe && Je && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, Te, Be[0].width, Be[0].height, j.depth);
          for (let V = 0, K = Be.length; V < K; V++)
            if (de = Be[V], _.format !== Ct)
              if (ue !== null)
                if (Pe) {
                  if (C)
                    if (_.layerUpdates.size > 0) {
                      const le = Do(de.width, de.height, _.format, _.type);
                      for (const ae of _.layerUpdates) {
                        const we = de.data.subarray(
                          ae * le / de.data.BYTES_PER_ELEMENT,
                          (ae + 1) * le / de.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, ae, de.width, de.height, 1, ue, we);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, de.width, de.height, j.depth, ue, de.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, V, Te, de.width, de.height, j.depth, 0, de.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Pe ? C && t.texSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, de.width, de.height, j.depth, ue, ye, de.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, V, Te, de.width, de.height, j.depth, 0, ue, ye, de.data);
        } else {
          Pe && Je && t.texStorage2D(i.TEXTURE_2D, ne, Te, Be[0].width, Be[0].height);
          for (let V = 0, K = Be.length; V < K; V++)
            de = Be[V], _.format !== Ct ? ue !== null ? Pe ? C && t.compressedTexSubImage2D(i.TEXTURE_2D, V, 0, 0, de.width, de.height, ue, de.data) : t.compressedTexImage2D(i.TEXTURE_2D, V, Te, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pe ? C && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, de.width, de.height, ue, ye, de.data) : t.texImage2D(i.TEXTURE_2D, V, Te, de.width, de.height, 0, ue, ye, de.data);
        }
      else if (_.isDataArrayTexture)
        if (Pe) {
          if (Je && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, Te, j.width, j.height, j.depth), C)
            if (_.layerUpdates.size > 0) {
              const V = Do(j.width, j.height, _.format, _.type);
              for (const K of _.layerUpdates) {
                const le = j.data.subarray(
                  K * V / j.data.BYTES_PER_ELEMENT,
                  (K + 1) * V / j.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, K, j.width, j.height, 1, ue, ye, le);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, ue, ye, j.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Te, j.width, j.height, j.depth, 0, ue, ye, j.data);
      else if (_.isData3DTexture)
        Pe ? (Je && t.texStorage3D(i.TEXTURE_3D, ne, Te, j.width, j.height, j.depth), C && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, ue, ye, j.data)) : t.texImage3D(i.TEXTURE_3D, 0, Te, j.width, j.height, j.depth, 0, ue, ye, j.data);
      else if (_.isFramebufferTexture) {
        if (Je)
          if (Pe)
            t.texStorage2D(i.TEXTURE_2D, ne, Te, j.width, j.height);
          else {
            let V = j.width, K = j.height;
            for (let le = 0; le < ne; le++)
              t.texImage2D(i.TEXTURE_2D, le, Te, V, K, 0, ue, ye, null), V >>= 1, K >>= 1;
          }
      } else if (Be.length > 0) {
        if (Pe && Je) {
          const V = Me(Be[0]);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, V.width, V.height);
        }
        for (let V = 0, K = Be.length; V < K; V++)
          de = Be[V], Pe ? C && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, ue, ye, de) : t.texImage2D(i.TEXTURE_2D, V, Te, ue, ye, de);
        _.generateMipmaps = !1;
      } else if (Pe) {
        if (Je) {
          const V = Me(j);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, V.width, V.height);
        }
        C && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ue, ye, j);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Te, ue, ye, j);
      m(_) && u(Y), _e.__version = G.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function ee(E, _, N) {
    if (_.image.length !== 6) return;
    const Y = je(E, _), Z = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + N);
    const G = n.get(Z);
    if (Z.version !== G.__version || Y === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const _e = He.getPrimaries(He.workingColorSpace), se = _.colorSpace === vn ? null : He.getPrimaries(_.colorSpace), he = _.colorSpace === vn || _e === se ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, he);
      const Ve = _.isCompressedTexture || _.image[0].isCompressedTexture, j = _.image[0] && _.image[0].isDataTexture, ue = [];
      for (let K = 0; K < 6; K++)
        !Ve && !j ? ue[K] = x(_.image[K], !0, r.maxCubemapSize) : ue[K] = j ? _.image[K].image : _.image[K], ue[K] = et(_, ue[K]);
      const ye = ue[0], Te = s.convert(_.format, _.colorSpace), de = s.convert(_.type), Be = T(_.internalFormat, Te, de, _.colorSpace), Pe = _.isVideoTexture !== !0, Je = G.__version === void 0 || Y === !0, C = Z.dataReady;
      let ne = B(_, ye);
      De(i.TEXTURE_CUBE_MAP, _);
      let V;
      if (Ve) {
        Pe && Je && t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Be, ye.width, ye.height);
        for (let K = 0; K < 6; K++) {
          V = ue[K].mipmaps;
          for (let le = 0; le < V.length; le++) {
            const ae = V[le];
            _.format !== Ct ? Te !== null ? Pe ? C && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, ae.width, ae.height, Te, ae.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, Be, ae.width, ae.height, 0, ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, ae.width, ae.height, Te, de, ae.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, Be, ae.width, ae.height, 0, Te, de, ae.data);
          }
        }
      } else {
        if (V = _.mipmaps, Pe && Je) {
          V.length > 0 && ne++;
          const K = Me(ue[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Be, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (j) {
            Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, ue[K].width, ue[K].height, Te, de, ue[K].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Be, ue[K].width, ue[K].height, 0, Te, de, ue[K].data);
            for (let le = 0; le < V.length; le++) {
              const we = V[le].image[K].image;
              Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, we.width, we.height, Te, de, we.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, Be, we.width, we.height, 0, Te, de, we.data);
            }
          } else {
            Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Te, de, ue[K]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Be, Te, de, ue[K]);
            for (let le = 0; le < V.length; le++) {
              const ae = V[le];
              Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, Te, de, ae.image[K]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, Be, Te, de, ae.image[K]);
            }
          }
      }
      m(_) && u(i.TEXTURE_CUBE_MAP), G.__version = Z.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function ge(E, _, N, Y, Z, G) {
    const _e = s.convert(N.format, N.colorSpace), se = s.convert(N.type), he = T(N.internalFormat, _e, se, N.colorSpace), Ve = n.get(_), j = n.get(N);
    if (j.__renderTarget = _, !Ve.__hasExternalTextures) {
      const ue = Math.max(1, _.width >> G), ye = Math.max(1, _.height >> G);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, G, he, ue, ye, _.depth, 0, _e, se, null) : t.texImage2D(Z, G, he, ue, ye, 0, _e, se, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), Oe(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, Z, j.__webglTexture, 0, Fe(_)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, Y, Z, j.__webglTexture, G), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function re(E, _, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer) {
      const Y = _.depthTexture, Z = Y && Y.isDepthTexture ? Y.type : null, G = S(_.stencilBuffer, Z), _e = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, se = Fe(_);
      Oe(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, se, G, _.width, _.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, se, G, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, G, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, _e, i.RENDERBUFFER, E);
    } else {
      const Y = _.textures;
      for (let Z = 0; Z < Y.length; Z++) {
        const G = Y[Z], _e = s.convert(G.format, G.colorSpace), se = s.convert(G.type), he = T(G.internalFormat, _e, se, G.colorSpace), Ve = Fe(_);
        N && Oe(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Ve, he, _.width, _.height) : Oe(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Ve, he, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, he, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ee(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Y = n.get(_.depthTexture);
    Y.__renderTarget = _, (!Y.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), $(_.depthTexture, 0);
    const Z = Y.__webglTexture, G = Fe(_);
    if (_.depthTexture.format === ai)
      Oe(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0, G) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else if (_.depthTexture.format === di)
      Oe(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0, G) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ae(E) {
    const _ = n.get(E), N = E.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== E.depthTexture) {
      const Y = E.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), Y) {
        const Z = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, Y.removeEventListener("dispose", Z);
        };
        Y.addEventListener("dispose", Z), _.__depthDisposeCallback = Z;
      }
      _.__boundDepthTexture = Y;
    }
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      Ee(_.__webglFramebuffer, E);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[Y]), _.__webglDepthbuffer[Y] === void 0)
          _.__webglDepthbuffer[Y] = i.createRenderbuffer(), re(_.__webglDepthbuffer[Y], E, !1);
        else {
          const Z = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, G = _.__webglDepthbuffer[Y];
          i.bindRenderbuffer(i.RENDERBUFFER, G), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, G);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
      _.__webglDepthbuffer = i.createRenderbuffer(), re(_.__webglDepthbuffer, E, !1);
    else {
      const Y = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Z = _.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, Z), i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, Z);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ie(E, _, N) {
    const Y = n.get(E);
    _ !== void 0 && ge(Y.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Ae(E);
  }
  function it(E) {
    const _ = E.texture, N = n.get(E), Y = n.get(_);
    E.addEventListener("dispose", w);
    const Z = E.textures, G = E.isWebGLCubeRenderTarget === !0, _e = Z.length > 1;
    if (_e || (Y.__webglTexture === void 0 && (Y.__webglTexture = i.createTexture()), Y.__version = _.version, a.memory.textures++), G) {
      N.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          N.__webglFramebuffer[se] = [];
          for (let he = 0; he < _.mipmaps.length; he++)
            N.__webglFramebuffer[se][he] = i.createFramebuffer();
        } else
          N.__webglFramebuffer[se] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let se = 0; se < _.mipmaps.length; se++)
          N.__webglFramebuffer[se] = i.createFramebuffer();
      } else
        N.__webglFramebuffer = i.createFramebuffer();
      if (_e)
        for (let se = 0, he = Z.length; se < he; se++) {
          const Ve = n.get(Z[se]);
          Ve.__webglTexture === void 0 && (Ve.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && Oe(E) === !1) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let se = 0; se < Z.length; se++) {
          const he = Z[se];
          N.__webglColorRenderbuffer[se] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[se]);
          const Ve = s.convert(he.format, he.colorSpace), j = s.convert(he.type), ue = T(he.internalFormat, Ve, j, he.colorSpace, E.isXRRenderTarget === !0), ye = Fe(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ye, ue, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + se, i.RENDERBUFFER, N.__webglColorRenderbuffer[se]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), re(N.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (G) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, Y.__webglTexture), De(i.TEXTURE_CUBE_MAP, _);
      for (let se = 0; se < 6; se++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let he = 0; he < _.mipmaps.length; he++)
            ge(N.__webglFramebuffer[se][he], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, he);
        else
          ge(N.__webglFramebuffer[se], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      m(_) && u(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (_e) {
      for (let se = 0, he = Z.length; se < he; se++) {
        const Ve = Z[se], j = n.get(Ve);
        t.bindTexture(i.TEXTURE_2D, j.__webglTexture), De(i.TEXTURE_2D, Ve), ge(N.__webglFramebuffer, E, Ve, i.COLOR_ATTACHMENT0 + se, i.TEXTURE_2D, 0), m(Ve) && u(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (se = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(se, Y.__webglTexture), De(se, _), _.mipmaps && _.mipmaps.length > 0)
        for (let he = 0; he < _.mipmaps.length; he++)
          ge(N.__webglFramebuffer[he], E, _, i.COLOR_ATTACHMENT0, se, he);
      else
        ge(N.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, se, 0);
      m(_) && u(se), t.unbindTexture();
    }
    E.depthBuffer && Ae(E);
  }
  function ze(E) {
    const _ = E.textures;
    for (let N = 0, Y = _.length; N < Y; N++) {
      const Z = _[N];
      if (m(Z)) {
        const G = b(E), _e = n.get(Z).__webglTexture;
        t.bindTexture(G, _e), u(G), t.unbindTexture();
      }
    }
  }
  const at = [], D = [];
  function bt(E) {
    if (E.samples > 0) {
      if (Oe(E) === !1) {
        const _ = E.textures, N = E.width, Y = E.height;
        let Z = i.COLOR_BUFFER_BIT;
        const G = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, _e = n.get(E), se = _.length > 1;
        if (se)
          for (let he = 0; he < _.length; he++)
            t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, _e.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer);
        for (let he = 0; he < _.length; he++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), se) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, _e.__webglColorRenderbuffer[he]);
            const Ve = n.get(_[he]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Ve, 0);
          }
          i.blitFramebuffer(0, 0, N, Y, 0, 0, N, Y, Z, i.NEAREST), l === !0 && (at.length = 0, D.length = 0, at.push(i.COLOR_ATTACHMENT0 + he), E.depthBuffer && E.resolveDepthBuffer === !1 && (at.push(G), D.push(G), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, D)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, at));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), se)
          for (let he = 0; he < _.length; he++) {
            t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.RENDERBUFFER, _e.__webglColorRenderbuffer[he]);
            const Ve = n.get(_[he]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.TEXTURE_2D, Ve, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const _ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Fe(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function Oe(E) {
    const _ = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function Se(E) {
    const _ = a.render.frame;
    h.get(E) !== _ && (h.set(E, _), E.update());
  }
  function et(E, _) {
    const N = E.colorSpace, Y = E.format, Z = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || N !== mi && N !== vn && (He.getTransfer(N) === Ze ? (Y !== Ct || Z !== on) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), _;
  }
  function Me(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = q, this.setTexture2D = $, this.setTexture2DArray = k, this.setTexture3D = Q, this.setTextureCube = H, this.rebindTextures = Ie, this.setupRenderTarget = it, this.updateRenderTargetMipmap = ze, this.updateMultisampleRenderTarget = bt, this.setupDepthRenderbuffer = Ae, this.setupFrameBufferTexture = ge, this.useMultisampledRTT = Oe;
}
function Zp(i, e) {
  function t(n, r = vn) {
    let s;
    const a = He.getTransfer(r);
    if (n === on) return i.UNSIGNED_BYTE;
    if (n === ca) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === ha) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === il) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === tl) return i.BYTE;
    if (n === nl) return i.SHORT;
    if (n === Ui) return i.UNSIGNED_SHORT;
    if (n === la) return i.INT;
    if (n === zn) return i.UNSIGNED_INT;
    if (n === zt) return i.FLOAT;
    if (n === Fi) return i.HALF_FLOAT;
    if (n === rl) return i.ALPHA;
    if (n === sl) return i.RGB;
    if (n === Ct) return i.RGBA;
    if (n === al) return i.LUMINANCE;
    if (n === ol) return i.LUMINANCE_ALPHA;
    if (n === ai) return i.DEPTH_COMPONENT;
    if (n === di) return i.DEPTH_STENCIL;
    if (n === ua) return i.RED;
    if (n === da) return i.RED_INTEGER;
    if (n === ll) return i.RG;
    if (n === fa) return i.RG_INTEGER;
    if (n === pa) return i.RGBA_INTEGER;
    if (n === gr || n === _r || n === vr || n === xr)
      if (a === Ze)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === gr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === _r) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === vr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === xr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === gr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === _r) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === vr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === xr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Ps || n === Ls || n === Ds || n === Is)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === Ps) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ls) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ds) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Is) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Us || n === Ns || n === Fs)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Us || n === Ns) return a === Ze ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Fs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Os || n === Bs || n === zs || n === Vs || n === Hs || n === ks || n === Gs || n === Ws || n === Xs || n === qs || n === Ys || n === Ks || n === Zs || n === $s)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === Os) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Bs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === zs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Vs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Hs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === ks) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Gs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ws) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Xs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === qs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ys) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ks) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Zs) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === $s) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Mr || n === js || n === Js)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Mr) return a === Ze ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === js) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Js) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === cl || n === Qs || n === ea || n === ta)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Mr) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Qs) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ea) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === ta) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === ui ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class $p extends Et {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class lr extends st {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const jp = { type: "move" };
class us {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new lr(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new lr(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new lr(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const x of e.hand.values()) {
          const m = t.getJointPose(x, n), u = this._getHandJoint(c, x);
          m !== null && (u.matrix.fromArray(m.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = m.radius), u.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], d = h.position.distanceTo(f.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && d > p + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(jp)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new lr();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Jp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Qp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class em {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new mt(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new En({
        vertexShader: Jp,
        fragmentShader: Qp,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Pt(new Lr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class tm extends Hn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, f = null, d = null, p = null, g = null;
    const x = new em(), m = t.getContextAttributes();
    let u = null, b = null;
    const T = [], S = [], B = new ke();
    let A = null;
    const w = new Et();
    w.viewport = new We();
    const U = new Et();
    U.viewport = new We();
    const y = [w, U], M = new $p();
    let R = null, q = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
      let ee = T[X];
      return ee === void 0 && (ee = new us(), T[X] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let ee = T[X];
      return ee === void 0 && (ee = new us(), T[X] = ee), ee.getGripSpace();
    }, this.getHand = function(X) {
      let ee = T[X];
      return ee === void 0 && (ee = new us(), T[X] = ee), ee.getHandSpace();
    };
    function z(X) {
      const ee = S.indexOf(X.inputSource);
      if (ee === -1)
        return;
      const ge = T[ee];
      ge !== void 0 && (ge.update(X.inputSource, X.frame, c || a), ge.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function W() {
      r.removeEventListener("select", z), r.removeEventListener("selectstart", z), r.removeEventListener("selectend", z), r.removeEventListener("squeeze", z), r.removeEventListener("squeezestart", z), r.removeEventListener("squeezeend", z), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", $);
      for (let X = 0; X < T.length; X++) {
        const ee = S[X];
        ee !== null && (S[X] = null, T[X].disconnect(ee));
      }
      R = null, q = null, x.reset(), e.setRenderTarget(u), p = null, d = null, f = null, r = null, b = null, je.stop(), n.isPresenting = !1, e.setPixelRatio(A), e.setSize(B.width, B.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(X) {
      c = X;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(X) {
      if (r = X, r !== null) {
        if (u = e.getRenderTarget(), r.addEventListener("select", z), r.addEventListener("selectstart", z), r.addEventListener("selectend", z), r.addEventListener("squeeze", z), r.addEventListener("squeezestart", z), r.addEventListener("squeezeend", z), r.addEventListener("end", W), r.addEventListener("inputsourceschange", $), m.xrCompatible !== !0 && await t.makeXRCompatible(), A = e.getPixelRatio(), e.getSize(B), r.renderState.layers === void 0) {
          const ee = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, ee), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), b = new Vn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: Ct,
              type: on,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let ee = null, ge = null, re = null;
          m.depth && (re = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ee = m.stencil ? di : ai, ge = m.stencil ? ui : zn);
          const Ee = {
            colorFormat: t.RGBA8,
            depthFormat: re,
            scaleFactor: s
          };
          f = new XRWebGLBinding(r, t), d = f.createProjectionLayer(Ee), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), b = new Vn(
            d.textureWidth,
            d.textureHeight,
            {
              format: Ct,
              type: on,
              depthTexture: new Tl(d.textureWidth, d.textureHeight, ge, void 0, void 0, void 0, void 0, void 0, void 0, ee),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        b.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), je.setContext(r), je.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return x.getDepthTexture();
    };
    function $(X) {
      for (let ee = 0; ee < X.removed.length; ee++) {
        const ge = X.removed[ee], re = S.indexOf(ge);
        re >= 0 && (S[re] = null, T[re].disconnect(ge));
      }
      for (let ee = 0; ee < X.added.length; ee++) {
        const ge = X.added[ee];
        let re = S.indexOf(ge);
        if (re === -1) {
          for (let Ae = 0; Ae < T.length; Ae++)
            if (Ae >= S.length) {
              S.push(ge), re = Ae;
              break;
            } else if (S[Ae] === null) {
              S[Ae] = ge, re = Ae;
              break;
            }
          if (re === -1) break;
        }
        const Ee = T[re];
        Ee && Ee.connect(ge);
      }
    }
    const k = new I(), Q = new I();
    function H(X, ee, ge) {
      k.setFromMatrixPosition(ee.matrixWorld), Q.setFromMatrixPosition(ge.matrixWorld);
      const re = k.distanceTo(Q), Ee = ee.projectionMatrix.elements, Ae = ge.projectionMatrix.elements, Ie = Ee[14] / (Ee[10] - 1), it = Ee[14] / (Ee[10] + 1), ze = (Ee[9] + 1) / Ee[5], at = (Ee[9] - 1) / Ee[5], D = (Ee[8] - 1) / Ee[0], bt = (Ae[8] + 1) / Ae[0], Fe = Ie * D, Oe = Ie * bt, Se = re / (-D + bt), et = Se * -D;
      if (ee.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(et), X.translateZ(Se), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Ee[10] === -1)
        X.projectionMatrix.copy(ee.projectionMatrix), X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const Me = Ie + Se, E = it + Se, _ = Fe - et, N = Oe + (re - et), Y = ze * it / E * Me, Z = at * it / E * Me;
        X.projectionMatrix.makePerspective(_, N, Y, Z, Me, E), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function ie(X, ee) {
      ee === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ee.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (r === null) return;
      let ee = X.near, ge = X.far;
      x.texture !== null && (x.depthNear > 0 && (ee = x.depthNear), x.depthFar > 0 && (ge = x.depthFar)), M.near = U.near = w.near = ee, M.far = U.far = w.far = ge, (R !== M.near || q !== M.far) && (r.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), R = M.near, q = M.far), w.layers.mask = X.layers.mask | 2, U.layers.mask = X.layers.mask | 4, M.layers.mask = w.layers.mask | U.layers.mask;
      const re = X.parent, Ee = M.cameras;
      ie(M, re);
      for (let Ae = 0; Ae < Ee.length; Ae++)
        ie(Ee[Ae], re);
      Ee.length === 2 ? H(M, w, U) : M.projectionMatrix.copy(w.projectionMatrix), ce(X, M, re);
    };
    function ce(X, ee, ge) {
      ge === null ? X.matrix.copy(ee.matrixWorld) : (X.matrix.copy(ge.matrixWorld), X.matrix.invert(), X.matrix.multiply(ee.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(ee.projectionMatrix), X.projectionMatrixInverse.copy(ee.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = fi * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && p === null))
        return l;
    }, this.setFoveation = function(X) {
      l = X, d !== null && (d.fixedFoveation = X), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return x.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return x.getMesh(M);
    };
    let xe = null;
    function De(X, ee) {
      if (h = ee.getViewerPose(c || a), g = ee, h !== null) {
        const ge = h.views;
        p !== null && (e.setRenderTargetFramebuffer(b, p.framebuffer), e.setRenderTarget(b));
        let re = !1;
        ge.length !== M.cameras.length && (M.cameras.length = 0, re = !0);
        for (let Ae = 0; Ae < ge.length; Ae++) {
          const Ie = ge[Ae];
          let it = null;
          if (p !== null)
            it = p.getViewport(Ie);
          else {
            const at = f.getViewSubImage(d, Ie);
            it = at.viewport, Ae === 0 && (e.setRenderTargetTextures(
              b,
              at.colorTexture,
              d.ignoreDepthValues ? void 0 : at.depthStencilTexture
            ), e.setRenderTarget(b));
          }
          let ze = y[Ae];
          ze === void 0 && (ze = new Et(), ze.layers.enable(Ae), ze.viewport = new We(), y[Ae] = ze), ze.matrix.fromArray(Ie.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(Ie.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(it.x, it.y, it.width, it.height), Ae === 0 && (M.matrix.copy(ze.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), re === !0 && M.cameras.push(ze);
        }
        const Ee = r.enabledFeatures;
        if (Ee && Ee.includes("depth-sensing")) {
          const Ae = f.getDepthInformation(ge[0]);
          Ae && Ae.isValid && Ae.texture && x.init(e, Ae, r.renderState);
        }
      }
      for (let ge = 0; ge < T.length; ge++) {
        const re = S[ge], Ee = T[ge];
        re !== null && Ee !== void 0 && Ee.update(re, ee, c || a);
      }
      xe && xe(X, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null;
    }
    const je = new yl();
    je.setAnimationLoop(De), this.setAnimationLoop = function(X) {
      xe = X;
    }, this.dispose = function() {
    };
  }
}
const Dn = /* @__PURE__ */ new Xt(), nm = /* @__PURE__ */ new Ne();
function im(i, e) {
  function t(m, u) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), u.value.copy(m.matrix);
  }
  function n(m, u) {
    u.color.getRGB(m.fogColor.value, xl(i)), u.isFog ? (m.fogNear.value = u.near, m.fogFar.value = u.far) : u.isFogExp2 && (m.fogDensity.value = u.density);
  }
  function r(m, u, b, T, S) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(m, u) : u.isMeshToonMaterial ? (s(m, u), f(m, u)) : u.isMeshPhongMaterial ? (s(m, u), h(m, u)) : u.isMeshStandardMaterial ? (s(m, u), d(m, u), u.isMeshPhysicalMaterial && p(m, u, S)) : u.isMeshMatcapMaterial ? (s(m, u), g(m, u)) : u.isMeshDepthMaterial ? s(m, u) : u.isMeshDistanceMaterial ? (s(m, u), x(m, u)) : u.isMeshNormalMaterial ? s(m, u) : u.isLineBasicMaterial ? (a(m, u), u.isLineDashedMaterial && o(m, u)) : u.isPointsMaterial ? l(m, u, b, T) : u.isSpriteMaterial ? c(m, u) : u.isShadowMaterial ? (m.color.value.copy(u.color), m.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(m, u) {
    m.opacity.value = u.opacity, u.color && m.diffuse.value.copy(u.color), u.emissive && m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (m.map.value = u.map, t(u.map, m.mapTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.bumpMap && (m.bumpMap.value = u.bumpMap, t(u.bumpMap, m.bumpMapTransform), m.bumpScale.value = u.bumpScale, u.side === xt && (m.bumpScale.value *= -1)), u.normalMap && (m.normalMap.value = u.normalMap, t(u.normalMap, m.normalMapTransform), m.normalScale.value.copy(u.normalScale), u.side === xt && m.normalScale.value.negate()), u.displacementMap && (m.displacementMap.value = u.displacementMap, t(u.displacementMap, m.displacementMapTransform), m.displacementScale.value = u.displacementScale, m.displacementBias.value = u.displacementBias), u.emissiveMap && (m.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, m.emissiveMapTransform)), u.specularMap && (m.specularMap.value = u.specularMap, t(u.specularMap, m.specularMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
    const b = e.get(u), T = b.envMap, S = b.envMapRotation;
    T && (m.envMap.value = T, Dn.copy(S), Dn.x *= -1, Dn.y *= -1, Dn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (Dn.y *= -1, Dn.z *= -1), m.envMapRotation.value.setFromMatrix4(nm.makeRotationFromEuler(Dn)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = u.reflectivity, m.ior.value = u.ior, m.refractionRatio.value = u.refractionRatio), u.lightMap && (m.lightMap.value = u.lightMap, m.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, m.lightMapTransform)), u.aoMap && (m.aoMap.value = u.aoMap, m.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, m.aoMapTransform));
  }
  function a(m, u) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, u.map && (m.map.value = u.map, t(u.map, m.mapTransform));
  }
  function o(m, u) {
    m.dashSize.value = u.dashSize, m.totalSize.value = u.dashSize + u.gapSize, m.scale.value = u.scale;
  }
  function l(m, u, b, T) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, m.size.value = u.size * b, m.scale.value = T * 0.5, u.map && (m.map.value = u.map, t(u.map, m.uvTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
  }
  function c(m, u) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, m.rotation.value = u.rotation, u.map && (m.map.value = u.map, t(u.map, m.mapTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
  }
  function h(m, u) {
    m.specular.value.copy(u.specular), m.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function f(m, u) {
    u.gradientMap && (m.gradientMap.value = u.gradientMap);
  }
  function d(m, u) {
    m.metalness.value = u.metalness, u.metalnessMap && (m.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, m.metalnessMapTransform)), m.roughness.value = u.roughness, u.roughnessMap && (m.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, m.roughnessMapTransform)), u.envMap && (m.envMapIntensity.value = u.envMapIntensity);
  }
  function p(m, u, b) {
    m.ior.value = u.ior, u.sheen > 0 && (m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), m.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (m.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, m.sheenColorMapTransform)), u.sheenRoughnessMap && (m.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, m.sheenRoughnessMapTransform))), u.clearcoat > 0 && (m.clearcoat.value = u.clearcoat, m.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (m.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, m.clearcoatMapTransform)), u.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (m.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === xt && m.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (m.dispersion.value = u.dispersion), u.iridescence > 0 && (m.iridescence.value = u.iridescence, m.iridescenceIOR.value = u.iridescenceIOR, m.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (m.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, m.iridescenceMapTransform)), u.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), u.transmission > 0 && (m.transmission.value = u.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), u.transmissionMap && (m.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, m.transmissionMapTransform)), m.thickness.value = u.thickness, u.thicknessMap && (m.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = u.attenuationDistance, m.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (m.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (m.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = u.specularIntensity, m.specularColor.value.copy(u.specularColor), u.specularColorMap && (m.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, m.specularColorMapTransform)), u.specularIntensityMap && (m.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, u) {
    u.matcap && (m.matcap.value = u.matcap);
  }
  function x(m, u) {
    const b = e.get(u).light;
    m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function rm(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, T) {
    const S = T.program;
    n.uniformBlockBinding(b, S);
  }
  function c(b, T) {
    let S = r[b.id];
    S === void 0 && (g(b), S = h(b), r[b.id] = S, b.addEventListener("dispose", m));
    const B = T.program;
    n.updateUBOMapping(b, B);
    const A = e.render.frame;
    s[b.id] !== A && (d(b), s[b.id] = A);
  }
  function h(b) {
    const T = f();
    b.__bindingPointIndex = T;
    const S = i.createBuffer(), B = b.__size, A = b.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, B, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, S), S;
  }
  function f() {
    for (let b = 0; b < o; b++)
      if (a.indexOf(b) === -1)
        return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(b) {
    const T = r[b.id], S = b.uniforms, B = b.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let A = 0, w = S.length; A < w; A++) {
      const U = Array.isArray(S[A]) ? S[A] : [S[A]];
      for (let y = 0, M = U.length; y < M; y++) {
        const R = U[y];
        if (p(R, A, y, B) === !0) {
          const q = R.__offset, z = Array.isArray(R.value) ? R.value : [R.value];
          let W = 0;
          for (let $ = 0; $ < z.length; $++) {
            const k = z[$], Q = x(k);
            typeof k == "number" || typeof k == "boolean" ? (R.__data[0] = k, i.bufferSubData(i.UNIFORM_BUFFER, q + W, R.__data)) : k.isMatrix3 ? (R.__data[0] = k.elements[0], R.__data[1] = k.elements[1], R.__data[2] = k.elements[2], R.__data[3] = 0, R.__data[4] = k.elements[3], R.__data[5] = k.elements[4], R.__data[6] = k.elements[5], R.__data[7] = 0, R.__data[8] = k.elements[6], R.__data[9] = k.elements[7], R.__data[10] = k.elements[8], R.__data[11] = 0) : (k.toArray(R.__data, W), W += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, q, R.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(b, T, S, B) {
    const A = b.value, w = T + "_" + S;
    if (B[w] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? B[w] = A : B[w] = A.clone(), !0;
    {
      const U = B[w];
      if (typeof A == "number" || typeof A == "boolean") {
        if (U !== A)
          return B[w] = A, !0;
      } else if (U.equals(A) === !1)
        return U.copy(A), !0;
    }
    return !1;
  }
  function g(b) {
    const T = b.uniforms;
    let S = 0;
    const B = 16;
    for (let w = 0, U = T.length; w < U; w++) {
      const y = Array.isArray(T[w]) ? T[w] : [T[w]];
      for (let M = 0, R = y.length; M < R; M++) {
        const q = y[M], z = Array.isArray(q.value) ? q.value : [q.value];
        for (let W = 0, $ = z.length; W < $; W++) {
          const k = z[W], Q = x(k), H = S % B, ie = H % Q.boundary, ce = H + ie;
          S += ie, ce !== 0 && B - ce < Q.storage && (S += B - ce), q.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = S, S += Q.storage;
        }
      }
    }
    const A = S % B;
    return A > 0 && (S += B - A), b.__size = S, b.__cache = {}, this;
  }
  function x(b) {
    const T = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof b == "number" || typeof b == "boolean" ? (T.boundary = 4, T.storage = 4) : b.isVector2 ? (T.boundary = 8, T.storage = 8) : b.isVector3 || b.isColor ? (T.boundary = 16, T.storage = 12) : b.isVector4 ? (T.boundary = 16, T.storage = 16) : b.isMatrix3 ? (T.boundary = 48, T.storage = 48) : b.isMatrix4 ? (T.boundary = 64, T.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), T;
  }
  function m(b) {
    const T = b.target;
    T.removeEventListener("dispose", m);
    const S = a.indexOf(T.__bindingPointIndex);
    a.splice(S, 1), i.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id];
  }
  function u() {
    for (const b in r)
      i.deleteBuffer(r[b]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: u
  };
}
class km {
  constructor(e = {}) {
    const {
      canvas: t = qc(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: f = !1,
      reverseDepthBuffer: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const g = new Uint32Array(4), x = new Int32Array(4);
    let m = null, u = null;
    const b = [], T = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Rt, this.toneMapping = Sn, this.toneMappingExposure = 1;
    const S = this;
    let B = !1, A = 0, w = 0, U = null, y = -1, M = null;
    const R = new We(), q = new We();
    let z = null;
    const W = new Ue(0);
    let $ = 0, k = t.width, Q = t.height, H = 1, ie = null, ce = null;
    const xe = new We(0, 0, k, Q), De = new We(0, 0, k, Q);
    let je = !1;
    const X = new _a();
    let ee = !1, ge = !1;
    const re = new Ne(), Ee = new Ne(), Ae = new I(), Ie = new We(), it = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ze = !1;
    function at() {
      return U === null ? H : 1;
    }
    let D = n;
    function bt(v, P) {
      return t.getContext(v, P);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${oa}`), t.addEventListener("webglcontextlost", K, !1), t.addEventListener("webglcontextrestored", le, !1), t.addEventListener("webglcontextcreationerror", ae, !1), D === null) {
        const P = "webgl2";
        if (D = bt(P, v), D === null)
          throw bt(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Fe, Oe, Se, et, Me, E, _, N, Y, Z, G, _e, se, he, Ve, j, ue, ye, Te, de, Be, Pe, Je, C;
    function ne() {
      Fe = new hf(D), Fe.init(), Pe = new Zp(D, Fe), Oe = new rf(D, Fe, e, Pe), Se = new qp(D, Fe), Oe.reverseDepthBuffer && d && Se.buffers.depth.setReversed(!0), et = new ff(D), Me = new Lp(), E = new Kp(D, Fe, Se, Me, Oe, Pe, et), _ = new af(S), N = new cf(S), Y = new xh(D), Je = new tf(D, Y), Z = new uf(D, Y, et, Je), G = new mf(D, Z, Y, et), Te = new pf(D, Oe, E), j = new sf(Me), _e = new Pp(S, _, N, Fe, Oe, Je, j), se = new im(S, Me), he = new Ip(), Ve = new zp(Fe), ye = new ef(S, _, N, Se, G, p, l), ue = new Wp(S, G, Oe), C = new rm(D, et, Oe, Se), de = new nf(D, Fe, et), Be = new df(D, Fe, et), et.programs = _e.programs, S.capabilities = Oe, S.extensions = Fe, S.properties = Me, S.renderLists = he, S.shadowMap = ue, S.state = Se, S.info = et;
    }
    ne();
    const V = new tm(S, D);
    this.xr = V, this.getContext = function() {
      return D;
    }, this.getContextAttributes = function() {
      return D.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Fe.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Fe.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return H;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (H = v, this.setSize(k, Q, !1));
    }, this.getSize = function(v) {
      return v.set(k, Q);
    }, this.setSize = function(v, P, F = !0) {
      if (V.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      k = v, Q = P, t.width = Math.floor(v * H), t.height = Math.floor(P * H), F === !0 && (t.style.width = v + "px", t.style.height = P + "px"), this.setViewport(0, 0, v, P);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(k * H, Q * H).floor();
    }, this.setDrawingBufferSize = function(v, P, F) {
      k = v, Q = P, H = F, t.width = Math.floor(v * F), t.height = Math.floor(P * F), this.setViewport(0, 0, v, P);
    }, this.getCurrentViewport = function(v) {
      return v.copy(R);
    }, this.getViewport = function(v) {
      return v.copy(xe);
    }, this.setViewport = function(v, P, F, O) {
      v.isVector4 ? xe.set(v.x, v.y, v.z, v.w) : xe.set(v, P, F, O), Se.viewport(R.copy(xe).multiplyScalar(H).round());
    }, this.getScissor = function(v) {
      return v.copy(De);
    }, this.setScissor = function(v, P, F, O) {
      v.isVector4 ? De.set(v.x, v.y, v.z, v.w) : De.set(v, P, F, O), Se.scissor(q.copy(De).multiplyScalar(H).round());
    }, this.getScissorTest = function() {
      return je;
    }, this.setScissorTest = function(v) {
      Se.setScissorTest(je = v);
    }, this.setOpaqueSort = function(v) {
      ie = v;
    }, this.setTransparentSort = function(v) {
      ce = v;
    }, this.getClearColor = function(v) {
      return v.copy(ye.getClearColor());
    }, this.setClearColor = function() {
      ye.setClearColor.apply(ye, arguments);
    }, this.getClearAlpha = function() {
      return ye.getClearAlpha();
    }, this.setClearAlpha = function() {
      ye.setClearAlpha.apply(ye, arguments);
    }, this.clear = function(v = !0, P = !0, F = !0) {
      let O = 0;
      if (v) {
        let L = !1;
        if (U !== null) {
          const J = U.texture.format;
          L = J === pa || J === fa || J === da;
        }
        if (L) {
          const J = U.texture.type, oe = J === on || J === zn || J === Ui || J === ui || J === ca || J === ha, fe = ye.getClearColor(), pe = ye.getClearAlpha(), be = fe.r, Re = fe.g, me = fe.b;
          oe ? (g[0] = be, g[1] = Re, g[2] = me, g[3] = pe, D.clearBufferuiv(D.COLOR, 0, g)) : (x[0] = be, x[1] = Re, x[2] = me, x[3] = pe, D.clearBufferiv(D.COLOR, 0, x));
        } else
          O |= D.COLOR_BUFFER_BIT;
      }
      P && (O |= D.DEPTH_BUFFER_BIT), F && (O |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), D.clear(O);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", K, !1), t.removeEventListener("webglcontextrestored", le, !1), t.removeEventListener("webglcontextcreationerror", ae, !1), he.dispose(), Ve.dispose(), Me.dispose(), _.dispose(), N.dispose(), G.dispose(), Je.dispose(), C.dispose(), _e.dispose(), V.dispose(), V.removeEventListener("sessionstart", ya), V.removeEventListener("sessionend", Ea), An.stop();
    };
    function K(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), B = !0;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), B = !1;
      const v = et.autoReset, P = ue.enabled, F = ue.autoUpdate, O = ue.needsUpdate, L = ue.type;
      ne(), et.autoReset = v, ue.enabled = P, ue.autoUpdate = F, ue.needsUpdate = O, ue.type = L;
    }
    function ae(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function we(v) {
      const P = v.target;
      P.removeEventListener("dispose", we), rt(P);
    }
    function rt(v) {
      dt(v), Me.remove(v);
    }
    function dt(v) {
      const P = Me.get(v).programs;
      P !== void 0 && (P.forEach(function(F) {
        _e.releaseProgram(F);
      }), v.isShaderMaterial && _e.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, P, F, O, L, J) {
      P === null && (P = it);
      const oe = L.isMesh && L.matrixWorld.determinant() < 0, fe = Fl(v, P, F, O, L);
      Se.setMaterial(O, oe);
      let pe = F.index, be = 1;
      if (O.wireframe === !0) {
        if (pe = Z.getWireframeAttribute(F), pe === void 0) return;
        be = 2;
      }
      const Re = F.drawRange, me = F.attributes.position;
      let Ge = Re.start * be, Qe = (Re.start + Re.count) * be;
      J !== null && (Ge = Math.max(Ge, J.start * be), Qe = Math.min(Qe, (J.start + J.count) * be)), pe !== null ? (Ge = Math.max(Ge, 0), Qe = Math.min(Qe, pe.count)) : me != null && (Ge = Math.max(Ge, 0), Qe = Math.min(Qe, me.count));
      const tt = Qe - Ge;
      if (tt < 0 || tt === 1 / 0) return;
      Je.setup(L, O, fe, F, pe);
      let vt, Xe = de;
      if (pe !== null && (vt = Y.get(pe), Xe = Be, Xe.setIndex(vt)), L.isMesh)
        O.wireframe === !0 ? (Se.setLineWidth(O.wireframeLinewidth * at()), Xe.setMode(D.LINES)) : Xe.setMode(D.TRIANGLES);
      else if (L.isLine) {
        let ve = O.linewidth;
        ve === void 0 && (ve = 1), Se.setLineWidth(ve * at()), L.isLineSegments ? Xe.setMode(D.LINES) : L.isLineLoop ? Xe.setMode(D.LINE_LOOP) : Xe.setMode(D.LINE_STRIP);
      } else L.isPoints ? Xe.setMode(D.POINTS) : L.isSprite && Xe.setMode(D.TRIANGLES);
      if (L.isBatchedMesh)
        if (L._multiDrawInstances !== null)
          Xe.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
        else if (Fe.get("WEBGL_multi_draw"))
          Xe.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
        else {
          const ve = L._multiDrawStarts, Kt = L._multiDrawCounts, qe = L._multiDrawCount, It = pe ? Y.get(pe).bytesPerElement : 1, kn = Me.get(O).currentProgram.getUniforms();
          for (let Mt = 0; Mt < qe; Mt++)
            kn.setValue(D, "_gl_DrawID", Mt), Xe.render(ve[Mt] / It, Kt[Mt]);
        }
      else if (L.isInstancedMesh)
        Xe.renderInstances(Ge, tt, L.count);
      else if (F.isInstancedBufferGeometry) {
        const ve = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, Kt = Math.min(F.instanceCount, ve);
        Xe.renderInstances(Ge, tt, Kt);
      } else
        Xe.render(Ge, tt);
    };
    function Ye(v, P, F) {
      v.transparent === !0 && v.side === nn && v.forceSinglePass === !1 ? (v.side = xt, v.needsUpdate = !0, Vi(v, P, F), v.side = yn, v.needsUpdate = !0, Vi(v, P, F), v.side = nn) : Vi(v, P, F);
    }
    this.compile = function(v, P, F = null) {
      F === null && (F = v), u = Ve.get(F), u.init(P), T.push(u), F.traverseVisible(function(L) {
        L.isLight && L.layers.test(P.layers) && (u.pushLight(L), L.castShadow && u.pushShadow(L));
      }), v !== F && v.traverseVisible(function(L) {
        L.isLight && L.layers.test(P.layers) && (u.pushLight(L), L.castShadow && u.pushShadow(L));
      }), u.setupLights();
      const O = /* @__PURE__ */ new Set();
      return v.traverse(function(L) {
        if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite))
          return;
        const J = L.material;
        if (J)
          if (Array.isArray(J))
            for (let oe = 0; oe < J.length; oe++) {
              const fe = J[oe];
              Ye(fe, F, L), O.add(fe);
            }
          else
            Ye(J, F, L), O.add(J);
      }), T.pop(), u = null, O;
    }, this.compileAsync = function(v, P, F = null) {
      const O = this.compile(v, P, F);
      return new Promise((L) => {
        function J() {
          if (O.forEach(function(oe) {
            Me.get(oe).currentProgram.isReady() && O.delete(oe);
          }), O.size === 0) {
            L(v);
            return;
          }
          setTimeout(J, 10);
        }
        Fe.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let Dt = null;
    function Yt(v) {
      Dt && Dt(v);
    }
    function ya() {
      An.stop();
    }
    function Ea() {
      An.start();
    }
    const An = new yl();
    An.setAnimationLoop(Yt), typeof self < "u" && An.setContext(self), this.setAnimationLoop = function(v) {
      Dt = v, V.setAnimationLoop(v), v === null ? An.stop() : An.start();
    }, V.addEventListener("sessionstart", ya), V.addEventListener("sessionend", Ea), this.render = function(v, P) {
      if (P !== void 0 && P.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (B === !0) return;
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), V.enabled === !0 && V.isPresenting === !0 && (V.cameraAutoUpdate === !0 && V.updateCamera(P), P = V.getCamera()), v.isScene === !0 && v.onBeforeRender(S, v, P, U), u = Ve.get(v, T.length), u.init(P), T.push(u), Ee.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), X.setFromProjectionMatrix(Ee), ge = this.localClippingEnabled, ee = j.init(this.clippingPlanes, ge), m = he.get(v, b.length), m.init(), b.push(m), V.enabled === !0 && V.isPresenting === !0) {
        const J = S.xr.getDepthSensingMesh();
        J !== null && Fr(J, P, -1 / 0, S.sortObjects);
      }
      Fr(v, P, 0, S.sortObjects), m.finish(), S.sortObjects === !0 && m.sort(ie, ce), ze = V.enabled === !1 || V.isPresenting === !1 || V.hasDepthSensing() === !1, ze && ye.addToRenderList(m, v), this.info.render.frame++, ee === !0 && j.beginShadows();
      const F = u.state.shadowsArray;
      ue.render(F, v, P), ee === !0 && j.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const O = m.opaque, L = m.transmissive;
      if (u.setupLights(), P.isArrayCamera) {
        const J = P.cameras;
        if (L.length > 0)
          for (let oe = 0, fe = J.length; oe < fe; oe++) {
            const pe = J[oe];
            ba(O, L, v, pe);
          }
        ze && ye.render(v);
        for (let oe = 0, fe = J.length; oe < fe; oe++) {
          const pe = J[oe];
          Ta(m, v, pe, pe.viewport);
        }
      } else
        L.length > 0 && ba(O, L, v, P), ze && ye.render(v), Ta(m, v, P);
      U !== null && (E.updateMultisampleRenderTarget(U), E.updateRenderTargetMipmap(U)), v.isScene === !0 && v.onAfterRender(S, v, P), Je.resetDefaultState(), y = -1, M = null, T.pop(), T.length > 0 ? (u = T[T.length - 1], ee === !0 && j.setGlobalState(S.clippingPlanes, u.state.camera)) : u = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null;
    };
    function Fr(v, P, F, O) {
      if (v.visible === !1) return;
      if (v.layers.test(P.layers)) {
        if (v.isGroup)
          F = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(P);
        else if (v.isLight)
          u.pushLight(v), v.castShadow && u.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || X.intersectsSprite(v)) {
            O && Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ee);
            const oe = G.update(v), fe = v.material;
            fe.visible && m.push(v, oe, fe, F, Ie.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || X.intersectsObject(v))) {
          const oe = G.update(v), fe = v.material;
          if (O && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Ie.copy(v.boundingSphere.center)) : (oe.boundingSphere === null && oe.computeBoundingSphere(), Ie.copy(oe.boundingSphere.center)), Ie.applyMatrix4(v.matrixWorld).applyMatrix4(Ee)), Array.isArray(fe)) {
            const pe = oe.groups;
            for (let be = 0, Re = pe.length; be < Re; be++) {
              const me = pe[be], Ge = fe[me.materialIndex];
              Ge && Ge.visible && m.push(v, oe, Ge, F, Ie.z, me);
            }
          } else fe.visible && m.push(v, oe, fe, F, Ie.z, null);
        }
      }
      const J = v.children;
      for (let oe = 0, fe = J.length; oe < fe; oe++)
        Fr(J[oe], P, F, O);
    }
    function Ta(v, P, F, O) {
      const L = v.opaque, J = v.transmissive, oe = v.transparent;
      u.setupLightsView(F), ee === !0 && j.setGlobalState(S.clippingPlanes, F), O && Se.viewport(R.copy(O)), L.length > 0 && zi(L, P, F), J.length > 0 && zi(J, P, F), oe.length > 0 && zi(oe, P, F), Se.buffers.depth.setTest(!0), Se.buffers.depth.setMask(!0), Se.buffers.color.setMask(!0), Se.setPolygonOffset(!1);
    }
    function ba(v, P, F, O) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      u.state.transmissionRenderTarget[O.id] === void 0 && (u.state.transmissionRenderTarget[O.id] = new Vn(1, 1, {
        generateMipmaps: !0,
        type: Fe.has("EXT_color_buffer_half_float") || Fe.has("EXT_color_buffer_float") ? Fi : on,
        minFilter: Bn,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: He.workingColorSpace
      }));
      const J = u.state.transmissionRenderTarget[O.id], oe = O.viewport || R;
      J.setSize(oe.z, oe.w);
      const fe = S.getRenderTarget();
      S.setRenderTarget(J), S.getClearColor(W), $ = S.getClearAlpha(), $ < 1 && S.setClearColor(16777215, 0.5), S.clear(), ze && ye.render(F);
      const pe = S.toneMapping;
      S.toneMapping = Sn;
      const be = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), u.setupLightsView(O), ee === !0 && j.setGlobalState(S.clippingPlanes, O), zi(v, F, O), E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J), Fe.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Re = !1;
        for (let me = 0, Ge = P.length; me < Ge; me++) {
          const Qe = P[me], tt = Qe.object, vt = Qe.geometry, Xe = Qe.material, ve = Qe.group;
          if (Xe.side === nn && tt.layers.test(O.layers)) {
            const Kt = Xe.side;
            Xe.side = xt, Xe.needsUpdate = !0, Aa(tt, F, O, vt, Xe, ve), Xe.side = Kt, Xe.needsUpdate = !0, Re = !0;
          }
        }
        Re === !0 && (E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J));
      }
      S.setRenderTarget(fe), S.setClearColor(W, $), be !== void 0 && (O.viewport = be), S.toneMapping = pe;
    }
    function zi(v, P, F) {
      const O = P.isScene === !0 ? P.overrideMaterial : null;
      for (let L = 0, J = v.length; L < J; L++) {
        const oe = v[L], fe = oe.object, pe = oe.geometry, be = O === null ? oe.material : O, Re = oe.group;
        fe.layers.test(F.layers) && Aa(fe, P, F, pe, be, Re);
      }
    }
    function Aa(v, P, F, O, L, J) {
      v.onBeforeRender(S, P, F, O, L, J), v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), L.onBeforeRender(S, P, F, O, v, J), L.transparent === !0 && L.side === nn && L.forceSinglePass === !1 ? (L.side = xt, L.needsUpdate = !0, S.renderBufferDirect(F, P, O, L, v, J), L.side = yn, L.needsUpdate = !0, S.renderBufferDirect(F, P, O, L, v, J), L.side = nn) : S.renderBufferDirect(F, P, O, L, v, J), v.onAfterRender(S, P, F, O, L, J);
    }
    function Vi(v, P, F) {
      P.isScene !== !0 && (P = it);
      const O = Me.get(v), L = u.state.lights, J = u.state.shadowsArray, oe = L.state.version, fe = _e.getParameters(v, L.state, J, P, F), pe = _e.getProgramCacheKey(fe);
      let be = O.programs;
      O.environment = v.isMeshStandardMaterial ? P.environment : null, O.fog = P.fog, O.envMap = (v.isMeshStandardMaterial ? N : _).get(v.envMap || O.environment), O.envMapRotation = O.environment !== null && v.envMap === null ? P.environmentRotation : v.envMapRotation, be === void 0 && (v.addEventListener("dispose", we), be = /* @__PURE__ */ new Map(), O.programs = be);
      let Re = be.get(pe);
      if (Re !== void 0) {
        if (O.currentProgram === Re && O.lightsStateVersion === oe)
          return Ra(v, fe), Re;
      } else
        fe.uniforms = _e.getUniforms(v), v.onBeforeCompile(fe, S), Re = _e.acquireProgram(fe, pe), be.set(pe, Re), O.uniforms = fe.uniforms;
      const me = O.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (me.clippingPlanes = j.uniform), Ra(v, fe), O.needsLights = Bl(v), O.lightsStateVersion = oe, O.needsLights && (me.ambientLightColor.value = L.state.ambient, me.lightProbe.value = L.state.probe, me.directionalLights.value = L.state.directional, me.directionalLightShadows.value = L.state.directionalShadow, me.spotLights.value = L.state.spot, me.spotLightShadows.value = L.state.spotShadow, me.rectAreaLights.value = L.state.rectArea, me.ltc_1.value = L.state.rectAreaLTC1, me.ltc_2.value = L.state.rectAreaLTC2, me.pointLights.value = L.state.point, me.pointLightShadows.value = L.state.pointShadow, me.hemisphereLights.value = L.state.hemi, me.directionalShadowMap.value = L.state.directionalShadowMap, me.directionalShadowMatrix.value = L.state.directionalShadowMatrix, me.spotShadowMap.value = L.state.spotShadowMap, me.spotLightMatrix.value = L.state.spotLightMatrix, me.spotLightMap.value = L.state.spotLightMap, me.pointShadowMap.value = L.state.pointShadowMap, me.pointShadowMatrix.value = L.state.pointShadowMatrix), O.currentProgram = Re, O.uniformsList = null, Re;
    }
    function wa(v) {
      if (v.uniformsList === null) {
        const P = v.currentProgram.getUniforms();
        v.uniformsList = Sr.seqWithValue(P.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function Ra(v, P) {
      const F = Me.get(v);
      F.outputColorSpace = P.outputColorSpace, F.batching = P.batching, F.batchingColor = P.batchingColor, F.instancing = P.instancing, F.instancingColor = P.instancingColor, F.instancingMorph = P.instancingMorph, F.skinning = P.skinning, F.morphTargets = P.morphTargets, F.morphNormals = P.morphNormals, F.morphColors = P.morphColors, F.morphTargetsCount = P.morphTargetsCount, F.numClippingPlanes = P.numClippingPlanes, F.numIntersection = P.numClipIntersection, F.vertexAlphas = P.vertexAlphas, F.vertexTangents = P.vertexTangents, F.toneMapping = P.toneMapping;
    }
    function Fl(v, P, F, O, L) {
      P.isScene !== !0 && (P = it), E.resetTextureUnits();
      const J = P.fog, oe = O.isMeshStandardMaterial ? P.environment : null, fe = U === null ? S.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : mi, pe = (O.isMeshStandardMaterial ? N : _).get(O.envMap || oe), be = O.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, Re = !!F.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), me = !!F.morphAttributes.position, Ge = !!F.morphAttributes.normal, Qe = !!F.morphAttributes.color;
      let tt = Sn;
      O.toneMapped && (U === null || U.isXRRenderTarget === !0) && (tt = S.toneMapping);
      const vt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, Xe = vt !== void 0 ? vt.length : 0, ve = Me.get(O), Kt = u.state.lights;
      if (ee === !0 && (ge === !0 || v !== M)) {
        const At = v === M && O.id === y;
        j.setState(O, v, At);
      }
      let qe = !1;
      O.version === ve.__version ? (ve.needsLights && ve.lightsStateVersion !== Kt.state.version || ve.outputColorSpace !== fe || L.isBatchedMesh && ve.batching === !1 || !L.isBatchedMesh && ve.batching === !0 || L.isBatchedMesh && ve.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && ve.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && ve.instancing === !1 || !L.isInstancedMesh && ve.instancing === !0 || L.isSkinnedMesh && ve.skinning === !1 || !L.isSkinnedMesh && ve.skinning === !0 || L.isInstancedMesh && ve.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && ve.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && ve.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && ve.instancingMorph === !1 && L.morphTexture !== null || ve.envMap !== pe || O.fog === !0 && ve.fog !== J || ve.numClippingPlanes !== void 0 && (ve.numClippingPlanes !== j.numPlanes || ve.numIntersection !== j.numIntersection) || ve.vertexAlphas !== be || ve.vertexTangents !== Re || ve.morphTargets !== me || ve.morphNormals !== Ge || ve.morphColors !== Qe || ve.toneMapping !== tt || ve.morphTargetsCount !== Xe) && (qe = !0) : (qe = !0, ve.__version = O.version);
      let It = ve.currentProgram;
      qe === !0 && (It = Vi(O, P, L));
      let kn = !1, Mt = !1, Mi = !1;
      const nt = It.getUniforms(), Ht = ve.uniforms;
      if (Se.useProgram(It.program) && (kn = !0, Mt = !0, Mi = !0), O.id !== y && (y = O.id, Mt = !0), kn || M !== v) {
        Se.buffers.depth.getReversed() ? (re.copy(v.projectionMatrix), Kc(re), Zc(re), nt.setValue(D, "projectionMatrix", re)) : nt.setValue(D, "projectionMatrix", v.projectionMatrix), nt.setValue(D, "viewMatrix", v.matrixWorldInverse);
        const hn = nt.map.cameraPosition;
        hn !== void 0 && hn.setValue(D, Ae.setFromMatrixPosition(v.matrixWorld)), Oe.logarithmicDepthBuffer && nt.setValue(
          D,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && nt.setValue(D, "isOrthographic", v.isOrthographicCamera === !0), M !== v && (M = v, Mt = !0, Mi = !0);
      }
      if (L.isSkinnedMesh) {
        nt.setOptional(D, L, "bindMatrix"), nt.setOptional(D, L, "bindMatrixInverse");
        const At = L.skeleton;
        At && (At.boneTexture === null && At.computeBoneTexture(), nt.setValue(D, "boneTexture", At.boneTexture, E));
      }
      L.isBatchedMesh && (nt.setOptional(D, L, "batchingTexture"), nt.setValue(D, "batchingTexture", L._matricesTexture, E), nt.setOptional(D, L, "batchingIdTexture"), nt.setValue(D, "batchingIdTexture", L._indirectTexture, E), nt.setOptional(D, L, "batchingColorTexture"), L._colorsTexture !== null && nt.setValue(D, "batchingColorTexture", L._colorsTexture, E));
      const Si = F.morphAttributes;
      if ((Si.position !== void 0 || Si.normal !== void 0 || Si.color !== void 0) && Te.update(L, F, It), (Mt || ve.receiveShadow !== L.receiveShadow) && (ve.receiveShadow = L.receiveShadow, nt.setValue(D, "receiveShadow", L.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Ht.envMap.value = pe, Ht.flipEnvMap.value = pe.isCubeTexture && pe.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && P.environment !== null && (Ht.envMapIntensity.value = P.environmentIntensity), Mt && (nt.setValue(D, "toneMappingExposure", S.toneMappingExposure), ve.needsLights && Ol(Ht, Mi), J && O.fog === !0 && se.refreshFogUniforms(Ht, J), se.refreshMaterialUniforms(Ht, O, H, Q, u.state.transmissionRenderTarget[v.id]), Sr.upload(D, wa(ve), Ht, E)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (Sr.upload(D, wa(ve), Ht, E), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && nt.setValue(D, "center", L.center), nt.setValue(D, "modelViewMatrix", L.modelViewMatrix), nt.setValue(D, "normalMatrix", L.normalMatrix), nt.setValue(D, "modelMatrix", L.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const At = O.uniformsGroups;
        for (let hn = 0, un = At.length; hn < un; hn++) {
          const Ca = At[hn];
          C.update(Ca, It), C.bind(Ca, It);
        }
      }
      return It;
    }
    function Ol(v, P) {
      v.ambientLightColor.needsUpdate = P, v.lightProbe.needsUpdate = P, v.directionalLights.needsUpdate = P, v.directionalLightShadows.needsUpdate = P, v.pointLights.needsUpdate = P, v.pointLightShadows.needsUpdate = P, v.spotLights.needsUpdate = P, v.spotLightShadows.needsUpdate = P, v.rectAreaLights.needsUpdate = P, v.hemisphereLights.needsUpdate = P;
    }
    function Bl(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return A;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(v, P, F) {
      Me.get(v.texture).__webglTexture = P, Me.get(v.depthTexture).__webglTexture = F;
      const O = Me.get(v);
      O.__hasExternalTextures = !0, O.__autoAllocateDepthBuffer = F === void 0, O.__autoAllocateDepthBuffer || Fe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(v, P) {
      const F = Me.get(v);
      F.__webglFramebuffer = P, F.__useDefaultFramebuffer = P === void 0;
    }, this.setRenderTarget = function(v, P = 0, F = 0) {
      U = v, A = P, w = F;
      let O = !0, L = null, J = !1, oe = !1;
      if (v) {
        const pe = Me.get(v);
        if (pe.__useDefaultFramebuffer !== void 0)
          Se.bindFramebuffer(D.FRAMEBUFFER, null), O = !1;
        else if (pe.__webglFramebuffer === void 0)
          E.setupRenderTarget(v);
        else if (pe.__hasExternalTextures)
          E.rebindTextures(v, Me.get(v.texture).__webglTexture, Me.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const me = v.depthTexture;
          if (pe.__boundDepthTexture !== me) {
            if (me !== null && Me.has(me) && (v.width !== me.image.width || v.height !== me.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(v);
          }
        }
        const be = v.texture;
        (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (oe = !0);
        const Re = Me.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Re[P]) ? L = Re[P][F] : L = Re[P], J = !0) : v.samples > 0 && E.useMultisampledRTT(v) === !1 ? L = Me.get(v).__webglMultisampledFramebuffer : Array.isArray(Re) ? L = Re[F] : L = Re, R.copy(v.viewport), q.copy(v.scissor), z = v.scissorTest;
      } else
        R.copy(xe).multiplyScalar(H).floor(), q.copy(De).multiplyScalar(H).floor(), z = je;
      if (Se.bindFramebuffer(D.FRAMEBUFFER, L) && O && Se.drawBuffers(v, L), Se.viewport(R), Se.scissor(q), Se.setScissorTest(z), J) {
        const pe = Me.get(v.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + P, pe.__webglTexture, F);
      } else if (oe) {
        const pe = Me.get(v.texture), be = P || 0;
        D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, pe.__webglTexture, F || 0, be);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(v, P, F, O, L, J, oe) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let fe = Me.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && oe !== void 0 && (fe = fe[oe]), fe) {
        Se.bindFramebuffer(D.FRAMEBUFFER, fe);
        try {
          const pe = v.texture, be = pe.format, Re = pe.type;
          if (!Oe.textureFormatReadable(be)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Oe.textureTypeReadable(Re)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= v.width - O && F >= 0 && F <= v.height - L && D.readPixels(P, F, O, L, Pe.convert(be), Pe.convert(Re), J);
        } finally {
          const pe = U !== null ? Me.get(U).__webglFramebuffer : null;
          Se.bindFramebuffer(D.FRAMEBUFFER, pe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, P, F, O, L, J, oe) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let fe = Me.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && oe !== void 0 && (fe = fe[oe]), fe) {
        const pe = v.texture, be = pe.format, Re = pe.type;
        if (!Oe.textureFormatReadable(be))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Oe.textureTypeReadable(Re))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (P >= 0 && P <= v.width - O && F >= 0 && F <= v.height - L) {
          Se.bindFramebuffer(D.FRAMEBUFFER, fe);
          const me = D.createBuffer();
          D.bindBuffer(D.PIXEL_PACK_BUFFER, me), D.bufferData(D.PIXEL_PACK_BUFFER, J.byteLength, D.STREAM_READ), D.readPixels(P, F, O, L, Pe.convert(be), Pe.convert(Re), 0);
          const Ge = U !== null ? Me.get(U).__webglFramebuffer : null;
          Se.bindFramebuffer(D.FRAMEBUFFER, Ge);
          const Qe = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return D.flush(), await Yc(D, Qe, 4), D.bindBuffer(D.PIXEL_PACK_BUFFER, me), D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, J), D.deleteBuffer(me), D.deleteSync(Qe), J;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(v, P = null, F = 0) {
      v.isTexture !== !0 && (Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."), P = arguments[0] || null, v = arguments[1]);
      const O = Math.pow(2, -F), L = Math.floor(v.image.width * O), J = Math.floor(v.image.height * O), oe = P !== null ? P.x : 0, fe = P !== null ? P.y : 0;
      E.setTexture2D(v, 0), D.copyTexSubImage2D(D.TEXTURE_2D, F, 0, 0, oe, fe, L, J), Se.unbindTexture();
    }, this.copyTextureToTexture = function(v, P, F = null, O = null, L = 0) {
      v.isTexture !== !0 && (Pi("WebGLRenderer: copyTextureToTexture function signature has changed."), O = arguments[0] || null, v = arguments[1], P = arguments[2], L = arguments[3] || 0, F = null);
      let J, oe, fe, pe, be, Re, me, Ge, Qe;
      const tt = v.isCompressedTexture ? v.mipmaps[L] : v.image;
      F !== null ? (J = F.max.x - F.min.x, oe = F.max.y - F.min.y, fe = F.isBox3 ? F.max.z - F.min.z : 1, pe = F.min.x, be = F.min.y, Re = F.isBox3 ? F.min.z : 0) : (J = tt.width, oe = tt.height, fe = tt.depth || 1, pe = 0, be = 0, Re = 0), O !== null ? (me = O.x, Ge = O.y, Qe = O.z) : (me = 0, Ge = 0, Qe = 0);
      const vt = Pe.convert(P.format), Xe = Pe.convert(P.type);
      let ve;
      P.isData3DTexture ? (E.setTexture3D(P, 0), ve = D.TEXTURE_3D) : P.isDataArrayTexture || P.isCompressedArrayTexture ? (E.setTexture2DArray(P, 0), ve = D.TEXTURE_2D_ARRAY) : (E.setTexture2D(P, 0), ve = D.TEXTURE_2D), D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, P.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, P.unpackAlignment);
      const Kt = D.getParameter(D.UNPACK_ROW_LENGTH), qe = D.getParameter(D.UNPACK_IMAGE_HEIGHT), It = D.getParameter(D.UNPACK_SKIP_PIXELS), kn = D.getParameter(D.UNPACK_SKIP_ROWS), Mt = D.getParameter(D.UNPACK_SKIP_IMAGES);
      D.pixelStorei(D.UNPACK_ROW_LENGTH, tt.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, tt.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, pe), D.pixelStorei(D.UNPACK_SKIP_ROWS, be), D.pixelStorei(D.UNPACK_SKIP_IMAGES, Re);
      const Mi = v.isDataArrayTexture || v.isData3DTexture, nt = P.isDataArrayTexture || P.isData3DTexture;
      if (v.isRenderTargetTexture || v.isDepthTexture) {
        const Ht = Me.get(v), Si = Me.get(P), At = Me.get(Ht.__renderTarget), hn = Me.get(Si.__renderTarget);
        Se.bindFramebuffer(D.READ_FRAMEBUFFER, At.__webglFramebuffer), Se.bindFramebuffer(D.DRAW_FRAMEBUFFER, hn.__webglFramebuffer);
        for (let un = 0; un < fe; un++)
          Mi && D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Me.get(v).__webglTexture, L, Re + un), v.isDepthTexture ? (nt && D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Me.get(P).__webglTexture, L, Qe + un), D.blitFramebuffer(pe, be, J, oe, me, Ge, J, oe, D.DEPTH_BUFFER_BIT, D.NEAREST)) : nt ? D.copyTexSubImage3D(ve, L, me, Ge, Qe + un, pe, be, J, oe) : D.copyTexSubImage2D(ve, L, me, Ge, Qe + un, pe, be, J, oe);
        Se.bindFramebuffer(D.READ_FRAMEBUFFER, null), Se.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else
        nt ? v.isDataTexture || v.isData3DTexture ? D.texSubImage3D(ve, L, me, Ge, Qe, J, oe, fe, vt, Xe, tt.data) : P.isCompressedArrayTexture ? D.compressedTexSubImage3D(ve, L, me, Ge, Qe, J, oe, fe, vt, tt.data) : D.texSubImage3D(ve, L, me, Ge, Qe, J, oe, fe, vt, Xe, tt) : v.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, L, me, Ge, J, oe, vt, Xe, tt.data) : v.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, L, me, Ge, tt.width, tt.height, vt, tt.data) : D.texSubImage2D(D.TEXTURE_2D, L, me, Ge, J, oe, vt, Xe, tt);
      D.pixelStorei(D.UNPACK_ROW_LENGTH, Kt), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, qe), D.pixelStorei(D.UNPACK_SKIP_PIXELS, It), D.pixelStorei(D.UNPACK_SKIP_ROWS, kn), D.pixelStorei(D.UNPACK_SKIP_IMAGES, Mt), L === 0 && P.generateMipmaps && D.generateMipmap(ve), Se.unbindTexture();
    }, this.copyTextureToTexture3D = function(v, P, F = null, O = null, L = 0) {
      return v.isTexture !== !0 && (Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."), F = arguments[0] || null, O = arguments[1] || null, v = arguments[2], P = arguments[3], L = arguments[4] || 0), Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(v, P, F, O, L);
    }, this.initRenderTarget = function(v) {
      Me.get(v).__webglFramebuffer === void 0 && E.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? E.setTextureCube(v, 0) : v.isData3DTexture ? E.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? E.setTexture2DArray(v, 0) : E.setTexture2D(v, 0), Se.unbindTexture();
    }, this.resetState = function() {
      A = 0, w = 0, U = null, Se.reset(), Je.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return rn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = He._getDrawingBufferColorSpace(e), t.unpackColorSpace = He._getUnpackColorSpace();
  }
}
class Gm extends st {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Xt(), this.environmentIntensity = 1, this.environmentRotation = new Xt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Wm {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = ia, this.updateRanges = [], this.version = 0, this.uuid = Vt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const gt = /* @__PURE__ */ new I();
class Cl {
  constructor(e, t, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      gt.fromBufferAttribute(this, t), gt.applyMatrix4(e), this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      gt.fromBufferAttribute(this, t), gt.applyNormalMatrix(e), this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      gt.fromBufferAttribute(this, t), gt.transformDirection(e), this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Ot(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ke(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Ot(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), r = Ke(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), r = Ke(r, this.array), s = Ke(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return new Lt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Cl(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Io = /* @__PURE__ */ new I(), Uo = /* @__PURE__ */ new We(), No = /* @__PURE__ */ new We(), sm = /* @__PURE__ */ new I(), Fo = /* @__PURE__ */ new Ne(), cr = /* @__PURE__ */ new I(), ds = /* @__PURE__ */ new ln(), Oo = /* @__PURE__ */ new Ne(), fs = /* @__PURE__ */ new Pr();
class Xm extends Pt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Ua, this.bindMatrix = new Ne(), this.bindMatrixInverse = new Ne(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Tn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, cr), this.boundingBox.expandByPoint(cr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new ln()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, cr), this.boundingSphere.expandByPoint(cr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, r = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ds.copy(this.boundingSphere), ds.applyMatrix4(r), e.ray.intersectsSphere(ds) !== !1 && (Oo.copy(r).invert(), fs.copy(e.ray).applyMatrix4(Oo), !(this.boundingBox !== null && fs.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, fs)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new We(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, r = t.count; n < r; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Ua ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === _c ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, r = this.geometry;
    Uo.fromBufferAttribute(r.attributes.skinIndex, e), No.fromBufferAttribute(r.attributes.skinWeight, e), Io.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = No.getComponent(s);
      if (a !== 0) {
        const o = Uo.getComponent(s);
        Fo.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(sm.copy(Io).applyMatrix4(Fo), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class am extends st {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Pl extends mt {
  constructor(e = null, t = 1, n = 1, r, s, a, o, l, c = Tt, h = Tt, f, d) {
    super(null, a, o, l, c, h, r, s, f, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Bo = /* @__PURE__ */ new Ne(), om = /* @__PURE__ */ new Ne();
class Ll {
  constructor(e = [], t = []) {
    this.uuid = Vt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, r = this.bones.length; n < r; n++)
        this.boneInverses.push(new Ne());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ne();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : om;
      Bo.multiplyMatrices(o, t[s]), Bo.toArray(n, s * 16);
    }
    r !== null && (r.needsUpdate = !0);
  }
  clone() {
    return new Ll(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Pl(t, e, e, Ct, zt);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const r = this.bones[t];
      if (r.name === e)
        return r;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, r = e.bones.length; n < r; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new am()), this.bones.push(a), this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let r = 0, s = t.length; r < s; r++) {
      const a = t[r];
      e.bones.push(a.uuid);
      const o = n[r];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class zo extends Lt {
  constructor(e, t, n, r = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const ii = /* @__PURE__ */ new Ne(), Vo = /* @__PURE__ */ new Ne(), hr = [], Ho = /* @__PURE__ */ new Tn(), lm = /* @__PURE__ */ new Ne(), Ai = /* @__PURE__ */ new Pt(), wi = /* @__PURE__ */ new ln();
class qm extends Pt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new zo(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let r = 0; r < n; r++)
      this.setMatrixAt(r, lm);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Tn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ii), Ho.copy(e.boundingBox).applyMatrix4(ii), this.boundingBox.union(Ho);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new ln()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ii), wi.copy(e.boundingSphere).applyMatrix4(ii), this.boundingSphere.union(wi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, s = n.length + 1, a = e * s + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = r[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, r = this.count;
    if (Ai.geometry = this.geometry, Ai.material = this.material, Ai.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), wi.copy(this.boundingSphere), wi.applyMatrix4(n), e.ray.intersectsSphere(wi) !== !1))
      for (let s = 0; s < r; s++) {
        this.getMatrixAt(s, ii), Vo.multiplyMatrices(n, ii), Ai.matrixWorld = Vo, Ai.raycast(e, hr);
        for (let a = 0, o = hr.length; a < o; a++) {
          const l = hr[a];
          l.instanceId = s, l.object = this, t.push(l);
        }
        hr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new zo(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, r = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Pl(new Float32Array(r * this.count), r, this.count, ua, zt));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++)
      a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = r * e;
    s[l] = o, s.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class cm extends bn {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.color = new Ue(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Tr = /* @__PURE__ */ new I(), br = /* @__PURE__ */ new I(), ko = /* @__PURE__ */ new Ne(), Ri = /* @__PURE__ */ new Pr(), ur = /* @__PURE__ */ new ln(), ps = /* @__PURE__ */ new I(), Go = /* @__PURE__ */ new I();
class Dl extends st {
  constructor(e = new cn(), t = new cm()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Tr.fromBufferAttribute(t, r - 1), br.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Tr.distanceTo(br);
      e.setAttribute("lineDistance", new an(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ur.copy(n.boundingSphere), ur.applyMatrix4(r), ur.radius += s, e.ray.intersectsSphere(ur) === !1) return;
    ko.copy(r).invert(), Ri.copy(e.ray).applyMatrix4(ko);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let x = p, m = g - 1; x < m; x += c) {
        const u = h.getX(x), b = h.getX(x + 1), T = dr(this, e, Ri, l, u, b);
        T && t.push(T);
      }
      if (this.isLineLoop) {
        const x = h.getX(g - 1), m = h.getX(p), u = dr(this, e, Ri, l, x, m);
        u && t.push(u);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let x = p, m = g - 1; x < m; x += c) {
        const u = dr(this, e, Ri, l, x, x + 1);
        u && t.push(u);
      }
      if (this.isLineLoop) {
        const x = dr(this, e, Ri, l, g - 1, p);
        x && t.push(x);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function dr(i, e, t, n, r, s) {
  const a = i.geometry.attributes.position;
  if (Tr.fromBufferAttribute(a, r), br.fromBufferAttribute(a, s), t.distanceSqToSegment(Tr, br, ps, Go) > n) return;
  ps.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(ps);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Go.clone().applyMatrix4(i.matrixWorld),
      index: r,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Wo = /* @__PURE__ */ new I(), Xo = /* @__PURE__ */ new I();
class Ym extends Dl {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Wo.fromBufferAttribute(t, r), Xo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Wo.distanceTo(Xo);
      e.setAttribute("lineDistance", new an(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Km extends Dl {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class hm extends bn {
  static get type() {
    return "PointsMaterial";
  }
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.color = new Ue(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const qo = /* @__PURE__ */ new Ne(), sa = /* @__PURE__ */ new Pr(), fr = /* @__PURE__ */ new ln(), pr = /* @__PURE__ */ new I();
class Zm extends st {
  constructor(e = new cn(), t = new hm()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), fr.copy(n.boundingSphere), fr.applyMatrix4(r), fr.radius += s, e.ray.intersectsSphere(fr) === !1) return;
    qo.copy(r).invert(), sa.copy(e.ray).applyMatrix4(qo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, f = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let g = d, x = p; g < x; g++) {
        const m = c.getX(g);
        pr.fromBufferAttribute(f, m), Yo(pr, m, l, r, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(f.count, a.start + a.count);
      for (let g = d, x = p; g < x; g++)
        pr.fromBufferAttribute(f, g), Yo(pr, g, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Yo(i, e, t, n, r, s, a) {
  const o = sa.distanceSqToPoint(i);
  if (o < t) {
    const l = new I();
    sa.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class um extends bn {
  static get type() {
    return "MeshStandardMaterial";
  }
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.color = new Ue(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ma, this.normalScale = new ke(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Xt(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class $m extends um {
  static get type() {
    return "MeshPhysicalMaterial";
  }
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ke(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return ut(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ue(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ue(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ue(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class jm extends bn {
  static get type() {
    return "MeshNormalMaterial";
  }
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ma, this.normalScale = new ke(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
function mr(i, e, t) {
  return !i || // let 'undefined' and 'null' pass
  !t && i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i);
}
function dm(i) {
  return ArrayBuffer.isView(i) && !(i instanceof DataView);
}
function fm(i) {
  function e(r, s) {
    return i[r] - i[s];
  }
  const t = i.length, n = new Array(t);
  for (let r = 0; r !== t; ++r) n[r] = r;
  return n.sort(e), n;
}
function Ko(i, e, t) {
  const n = i.length, r = new i.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l)
      r[a++] = i[o + l];
  }
  return r;
}
function Il(i, e, t, n) {
  let r = 1, s = i[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = i[r++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = i[r++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = i[r++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = i[r++];
      while (s !== void 0);
}
class Ir {
  constructor(e, t, n, r) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, r = t[n], s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < r)) {
            for (let o = n + 2; ; ) {
              if (r === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = r, r = t[++n], e < r)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (r = s, s = t[--n - 1], e >= s)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (r = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (r === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, r);
    }
    return this.interpolate_(n, s, e, r);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, s = e * r;
    for (let a = 0; a !== r; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class pm extends Ir {
  constructor(e, t, n, r) {
    super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Na,
      endingEnd: Na
    };
  }
  intervalChanged_(e, t, n) {
    const r = this.parameterPositions;
    let s = e - 2, a = e + 1, o = r[s], l = r[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Fa:
          s = e, o = 2 * t - n;
          break;
        case Oa:
          s = r.length - 2, o = t + r[s] - r[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case Fa:
          a = e, l = 2 * n - t;
          break;
        case Oa:
          a = 1, l = n + r[1] - r[0];
          break;
        default:
          a = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, r) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, f = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (r - t), x = g * g, m = x * g, u = -d * m + 2 * d * x - d * g, b = (1 + d) * m + (-1.5 - 2 * d) * x + (-0.5 + d) * g + 1, T = (-1 - p) * m + (1.5 + p) * x + 0.5 * g, S = p * m - p * x;
    for (let B = 0; B !== o; ++B)
      s[B] = u * a[h + B] + b * a[c + B] + T * a[l + B] + S * a[f + B];
    return s;
  }
}
class mm extends Ir {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (r - t), f = 1 - h;
    for (let d = 0; d !== o; ++d)
      s[d] = a[c + d] * f + a[l + d] * h;
    return s;
  }
}
class gm extends Ir {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class qt {
  constructor(e, t, n, r) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = mr(t, this.TimeBufferType), this.values = mr(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: mr(e.times, Array),
        values: mr(e.values, Array)
      };
      const r = e.getInterpolation();
      r !== e.DefaultInterpolation && (n.interpolation = r);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new gm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new mm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new pm(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case yr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case na:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Br:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return yr;
      case this.InterpolantFactoryMethodLinear:
        return na;
      case this.InterpolantFactoryMethodSmooth:
        return Br;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, r = t.length; n !== r; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, r = n.length;
    let s = 0, a = r - 1;
    for (; s !== r && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== r) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, r = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1;
        break;
      }
      a = l;
    }
    if (r !== void 0 && dm(r))
      for (let o = 0, l = r.length; o !== l; ++o) {
        const c = r[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Br, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (r)
          l = !0;
        else {
          const f = o * n, d = f - n, p = f + n;
          for (let g = 0; g !== n; ++g) {
            const x = t[f + g];
            if (x !== t[d + g] || x !== t[p + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const f = o * n, d = a * n;
          for (let p = 0; p !== n; ++p)
            t[d + p] = t[f + p];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
    return r.createInterpolant = this.createInterpolant, r;
  }
}
qt.prototype.TimeBufferType = Float32Array;
qt.prototype.ValueBufferType = Float32Array;
qt.prototype.DefaultInterpolation = na;
class vi extends qt {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
vi.prototype.ValueTypeName = "bool";
vi.prototype.ValueBufferType = Array;
vi.prototype.DefaultInterpolation = yr;
vi.prototype.InterpolantFactoryMethodLinear = void 0;
vi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ul extends qt {
}
Ul.prototype.ValueTypeName = "color";
class Ar extends qt {
}
Ar.prototype.ValueTypeName = "number";
class _m extends Ir {
  constructor(e, t, n, r) {
    super(e, t, n, r);
  }
  interpolate_(e, t, n, r) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (r - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4)
      gi.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class Ur extends qt {
  InterpolantFactoryMethodLinear(e) {
    return new _m(this.times, this.values, this.getValueSize(), e);
  }
}
Ur.prototype.ValueTypeName = "quaternion";
Ur.prototype.InterpolantFactoryMethodSmooth = void 0;
class xi extends qt {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
xi.prototype.ValueTypeName = "string";
xi.prototype.ValueBufferType = Array;
xi.prototype.DefaultInterpolation = yr;
xi.prototype.InterpolantFactoryMethodLinear = void 0;
xi.prototype.InterpolantFactoryMethodSmooth = void 0;
class wr extends qt {
}
wr.prototype.ValueTypeName = "vector";
class Jm {
  constructor(e = "", t = -1, n = [], r = xc) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = r, this.uuid = Vt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, r = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(xm(n[a]).scale(r));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, r = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(qt.toJSON(n[s]));
    return r;
  }
  static CreateFromMorphTargetSequence(e, t, n, r) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const h = fm(l);
      l = Ko(l, 1, h), c = Ko(c, 1, h), !r && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(
        new Ar(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const r = e;
      n = r.geometry && r.geometry.animations || r.animations;
    }
    for (let r = 0; r < n.length; r++)
      if (n[r].name === t)
        return n[r];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const r = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(s);
      if (h && h.length > 1) {
        const f = h[1];
        let d = r[f];
        d || (r[f] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in r)
      a.push(this.CreateFromMorphTargetSequence(o, r[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(f, d, p, g, x) {
      if (p.length !== 0) {
        const m = [], u = [];
        Il(p, m, u, g), m.length !== 0 && x.push(new f(d, m, u));
      }
    }, r = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let f = 0; f < c.length; f++) {
      const d = c[f].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let x = 0; x < d[g].morphTargets.length; x++)
                p[d[g].morphTargets[x]] = -1;
          for (const x in p) {
            const m = [], u = [];
            for (let b = 0; b !== d[g].morphTargets.length; ++b) {
              const T = d[g];
              m.push(T.time), u.push(T.morphTarget === x ? 1 : 0);
            }
            r.push(new Ar(".morphTargetInfluence[" + x + "]", m, u));
          }
          l = p.length * a;
        } else {
          const p = ".bones[" + t[f].name + "]";
          n(
            wr,
            p + ".position",
            d,
            "pos",
            r
          ), n(
            Ur,
            p + ".quaternion",
            d,
            "rot",
            r
          ), n(
            wr,
            p + ".scale",
            d,
            "scl",
            r
          );
        }
    }
    return r.length === 0 ? null : new this(s, l, r, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, r = e.length; n !== r; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function vm(i) {
  switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ar;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return wr;
    case "color":
      return Ul;
    case "quaternion":
      return Ur;
    case "bool":
    case "boolean":
      return vi;
    case "string":
      return xi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i);
}
function xm(i) {
  if (i.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = vm(i.type);
  if (i.times === void 0) {
    const t = [], n = [];
    Il(i.keys, t, n, "value"), i.times = t, i.values = n;
  }
  return e.parse !== void 0 ? e.parse(i) : new e(i.name, i.times, i.values, i.interpolation);
}
const xn = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class Mm {
  constructor(e, t, n) {
    const r = this;
    let s = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && r.onStart !== void 0 && r.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, r.onProgress !== void 0 && r.onProgress(h, a, o), a === o && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(h) {
      r.onError !== void 0 && r.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, f) {
      return c.push(h, f), this;
    }, this.removeHandler = function(h) {
      const f = c.indexOf(h);
      return f !== -1 && c.splice(f, 2), this;
    }, this.getHandler = function(h) {
      for (let f = 0, d = c.length; f < d; f += 2) {
        const p = c[f], g = c[f + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return g;
      }
      return null;
    };
  }
}
const Nl = /* @__PURE__ */ new Mm();
class Bi {
  constructor(e) {
    this.manager = e !== void 0 ? e : Nl, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Bi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const en = {};
class Sm extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Qm extends Bi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = xn.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (en[e] !== void 0) {
      en[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      return;
    }
    en[e] = [], en[e].push({
      onLoad: t,
      onProgress: n,
      onError: r
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const h = en[e], f = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0;
        let x = 0;
        const m = new ReadableStream({
          start(u) {
            b();
            function b() {
              f.read().then(({ done: T, value: S }) => {
                if (T)
                  u.close();
                else {
                  x += S.byteLength;
                  const B = new ProgressEvent("progress", { lengthComputable: g, loaded: x, total: p });
                  for (let A = 0, w = h.length; A < w; A++) {
                    const U = h[A];
                    U.onProgress && U.onProgress(B);
                  }
                  u.enqueue(S), b();
                }
              }, (T) => {
                u.error(T);
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new Sm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const f = /charset="?([^;"\s]*)"?/i.exec(o), d = f && f[1] ? f[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((c) => {
      xn.add(e, c);
      const h = en[e];
      delete en[e];
      for (let f = 0, d = h.length; f < d; f++) {
        const p = h[f];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = en[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete en[e];
      for (let f = 0, d = h.length; f < d; f++) {
        const p = h[f];
        p.onError && p.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class ym extends Bi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = xn.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = Ni("img");
    function l() {
      h(), xn.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(f) {
      h(), r && r(f), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class eg extends Bi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new mt(), a = new ym(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class Nr extends st {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ue(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class tg extends Nr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(st.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ue(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const ms = /* @__PURE__ */ new Ne(), Zo = /* @__PURE__ */ new I(), $o = /* @__PURE__ */ new I();
class xa {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ke(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ne(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new _a(), this._frameExtents = new ke(1, 1), this._viewportCount = 1, this._viewports = [
      new We(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Zo.setFromMatrixPosition(e.matrixWorld), t.position.copy(Zo), $o.setFromMatrixPosition(e.target.matrixWorld), t.lookAt($o), t.updateMatrixWorld(), ms.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ms), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(ms);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Em extends xa {
  constructor() {
    super(new Et(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = fi * 2 * e.angle * this.focus, r = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || r !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = r, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class ng extends Nr {
  constructor(e, t, n = 0, r = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(st.DEFAULT_UP), this.updateMatrix(), this.target = new st(), this.distance = n, this.angle = r, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new Em();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const jo = /* @__PURE__ */ new Ne(), Ci = /* @__PURE__ */ new I(), gs = /* @__PURE__ */ new I();
class Tm extends xa {
  constructor() {
    super(new Et(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ke(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new We(2, 1, 1, 1),
      // negative X
      new We(0, 1, 1, 1),
      // positive Z
      new We(3, 1, 1, 1),
      // negative Z
      new We(1, 1, 1, 1),
      // positive Y
      new We(3, 0, 1, 1),
      // negative Y
      new We(1, 0, 1, 1)
    ], this._cubeDirections = [
      new I(1, 0, 0),
      new I(-1, 0, 0),
      new I(0, 0, 1),
      new I(0, 0, -1),
      new I(0, 1, 0),
      new I(0, -1, 0)
    ], this._cubeUps = [
      new I(0, 1, 0),
      new I(0, 1, 0),
      new I(0, 1, 0),
      new I(0, 1, 0),
      new I(0, 0, 1),
      new I(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, r = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ci.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ci), gs.copy(n.position), gs.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(gs), n.updateMatrixWorld(), r.makeTranslation(-Ci.x, -Ci.y, -Ci.z), jo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(jo);
  }
}
class ig extends Nr {
  constructor(e, t, n = 0, r = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Tm();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class bm extends xa {
  constructor() {
    super(new El(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class rg extends Nr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(st.DEFAULT_UP), this.updateMatrix(), this.target = new st(), this.shadow = new bm();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class sg {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, r = e.length; n < r; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class ag extends Bi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = xn.get(e);
    if (a !== void 0) {
      if (s.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), s.manager.itemEnd(e);
        }).catch((c) => {
          r && r(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return xn.add(e, c), t && t(c), s.manager.itemEnd(e), c;
    }).catch(function(c) {
      r && r(c), xn.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    xn.add(e, l), s.manager.itemStart(e);
  }
}
const Ma = "\\[\\]\\.:\\/", Am = new RegExp("[" + Ma + "]", "g"), Sa = "[^" + Ma + "]", wm = "[^" + Ma.replace("\\.", "") + "]", Rm = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Sa), Cm = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", wm), Pm = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Sa), Lm = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Sa), Dm = new RegExp(
  "^" + Rm + Cm + Pm + Lm + "$"
), Im = ["material", "materials", "bones", "map"];
class Um {
  constructor(e, t, n) {
    const r = n || $e.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, r);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
    r !== void 0 && r.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let r = this._targetGroup.nCachedObjects_, s = n.length; r !== s; ++r)
      n[r].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class $e {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || $e.parseTrackName(t), this.node = $e.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new $e.Composite(e, t, n) : new $e(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Am, "");
  }
  static parseTrackName(e) {
    const t = Dm.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      const s = n.nodeName.substring(r + 1);
      Im.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, r = n(e.children);
      if (r)
        return r;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      e[t++] = n[r];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      n[r] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      n[r] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      n[r] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, r = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = $e.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const a = e[r];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
$e.Composite = Um;
$e.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
$e.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
$e.prototype.GetterByBindingType = [
  $e.prototype._getValue_direct,
  $e.prototype._getValue_array,
  $e.prototype._getValue_arrayElement,
  $e.prototype._getValue_toArray
];
$e.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    $e.prototype._setValue_direct,
    $e.prototype._setValue_direct_setNeedsUpdate,
    $e.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    $e.prototype._setValue_array,
    $e.prototype._setValue_array_setNeedsUpdate,
    $e.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    $e.prototype._setValue_arrayElement,
    $e.prototype._setValue_arrayElement_setNeedsUpdate,
    $e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    $e.prototype._setValue_fromArray,
    $e.prototype._setValue_fromArray_setNeedsUpdate,
    $e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class og {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ut(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class lg extends Hn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: oa
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = oa);
const aa = {
  canvas: !!window.CanvasRenderingContext2D,
  webgl: function() {
    try {
      const i = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (i.getContext("webgl") || i.getContext("experimental-webgl")));
    } catch {
      return !1;
    }
  }(),
  workers: !!window.Worker,
  fileapi: window.File && window.FileReader && window.FileList && window.Blob,
  getWebGLErrorMessage: function() {
    const i = document.createElement("div");
    return i.id = "webgl-error-message", i.style.fontFamily = "monospace", i.style.fontSize = "13px", i.style.fontWeight = "normal", i.style.textAlign = "center", i.style.background = "#fff", i.style.color = "#000", i.style.padding = "1.5em", i.style.width = "400px", i.style.margin = "5em auto 0", this.webgl || (i.innerHTML = window.WebGLRenderingContext ? [
      'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
      'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
    ].join(`
`) : [
      'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
      'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
    ].join(`
`)), i;
  },
  addGetWebGLMessage: function(i) {
    i = i || {};
    const e = i.parent !== void 0 ? i.parent : document.body, t = i.id !== void 0 ? i.id : "oldie", n = aa.getWebGLErrorMessage();
    n.id = t, e.appendChild(n);
  }
};
class cg {
  constructor() {
    kt(this, "container");
    kt(this, "components");
    kt(this, "currentArena");
    kt(this, "incomingArena");
    kt(this, "outgoingArena");
    kt(this, "arenaCache", []);
    kt(this, "preloadStyleContent", "canvas.preload{position:fixed;top:0;left:0;z-index:-1}");
    kt(this, "setArena", (e) => console.log(e));
    kt(this, "getArenaIndex", () => []);
    this.components = {};
  }
  init(e) {
    this.container = e, this.initialize();
  }
  initialize() {
    if (aa.webgl) {
      const e = document.createElement("style");
      e.innerHTML = this.preloadStyleContent, document.body.appendChild(e), Nl.onProgress = (t, n, r) => {
        console.log("loading manager progress triggered"), this.incomingArena.loaded = n === r;
      }, this.currentArena = void 0;
    } else {
      const e = aa.getWebGLErrorMessage();
      this.container.appendChild(e);
    }
  }
  setup() {
    return new Promise((e, t) => {
      import("./arenafactory-6PsTnOtI.js").then((n) => {
        let r = 0;
        this.loadArena(r, n.getArena(r, this.container)), this.transition();
        const s = Array.from(Array(n.getArenaCount()).keys());
        this.setArena = (a) => {
          a in s && a != r && (this.loadArena(a, n.getArena(a, this.container)), this.transition(), r = a);
        }, this.getArenaIndex = () => n.getArenaIndex();
      }).then(() => e()).catch(() => t());
    });
  }
  finishLoading(e) {
    return new Promise((t, n) => {
      if (e.needsLoading) {
        let r = 0;
        const s = 500, a = setInterval(() => {
          e.loaded ? (clearInterval(a), t()) : (r += s, r >= e.loadingTimeout && (clearInterval(a), n()));
        }, s);
      } else
        t();
    });
  }
  // Receives an Arena Name and an Arena Object to create within the scenery
  // Objects are stored in a dictionary with the name, and retreived if called
  // again during runtime.
  loadArena(e, t) {
    this.arenaCache[e] == null ? (this.incomingArena = t, this.arenaCache[e] = t) : (this.incomingArena = this.arenaCache[e], console.log("retrieval"));
  }
  /// Transition from an existing arena to the newly declared incoming arena
  transition() {
    this.incomingArena !== void 0 && (this.currentArena !== void 0 && (this.outgoingArena = this.currentArena), this.currentArena = this.incomingArena, this.currentArena.init(), console.log(this.currentArena), this.currentArena.canvas().classList.add("preload"), this.finishLoading(this.incomingArena).then(() => {
      this.outgoingArena !== void 0 && this.outgoingArena.packup(), this.fadeOutArena(this.outgoingArena, 1).then((e) => {
        var t;
        e && this.outgoingArena.destroy(), (t = this.currentArena) == null || t.canvas().classList.remove("preload");
      });
    }).catch((e) => console.log(e)));
  }
  fadeOutArena(e, t) {
    return console.log("fadeout called on outgoing Arena"), e != null ? this.fadeOut(e.canvas(), t) : (console.log("no outgoing Arena"), new Promise((n) => n(!1)));
  }
  fadeOut(e, t) {
    const n = Number(e.style.opacity) || 1;
    return new Promise((r) => {
      let s = n;
      const a = setInterval(() => {
        s > 0 ? (s -= n / 60, e.style.opacity = `${s}`) : (clearInterval(a), e.style.opacity = "0", console.log("outgoing Arena faded out"), r(!0));
      }, t / 60);
    });
  }
}
export {
  Dl as $,
  La as A,
  Oi as B,
  lg as C,
  rg as D,
  Rs as E,
  yn as F,
  hm as G,
  bn as H,
  qm as I,
  cm as J,
  um as K,
  Bi as L,
  Pt as M,
  Tt as N,
  st as O,
  Et as P,
  gi as Q,
  Pr as R,
  Gm as S,
  eg as T,
  nn as U,
  I as V,
  km as W,
  $e as X,
  cn as Y,
  Xm as Z,
  Ym as _,
  jm as a,
  Km as a0,
  Zm as a1,
  lr as a2,
  El as a3,
  Ll as a4,
  Jm as a5,
  am as a6,
  na as a7,
  He as a8,
  Ne as a9,
  vc as aa,
  Or as ab,
  Hi as ac,
  On as ad,
  Cs as ae,
  yr as af,
  Cl as ag,
  mt as ah,
  wr as ai,
  Ar as aj,
  Ur as ak,
  Tn as al,
  ln as am,
  Ir as an,
  tg as ao,
  cg as ap,
  Lr as b,
  gl as c,
  In as d,
  Fm as e,
  Om as f,
  og as g,
  ke as h,
  Hm as i,
  Bm as j,
  Vm as k,
  zm as l,
  sg as m,
  Qm as n,
  Ue as o,
  mi as p,
  ng as q,
  ig as r,
  Rt as s,
  $m as t,
  zo as u,
  ag as v,
  Lt as w,
  Wm as x,
  Wt as y,
  Bn as z
};
