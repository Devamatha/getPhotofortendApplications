import {
  __commonJS,
  __export,
  __require
} from "./chunk-EHLZM3EC.js";

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node-fetch
var require_node_fetch = __commonJS({
  "browser-external:node-fetch"(exports, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node-fetch" has been externalized for browser compatibility. Cannot access "node-fetch.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:util
var require_util = __commonJS({
  "browser-external:util"(exports, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "util" has been externalized for browser compatibility. Cannot access "util.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_2, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js
var tf_core_esm_exports = {};
__export(tf_core_esm_exports, {
  AdadeltaOptimizer: () => bd,
  AdagradOptimizer: () => wd,
  AdamOptimizer: () => Cd,
  AdamaxOptimizer: () => Ed,
  DataStorage: () => xo,
  ENV: () => s,
  Environment: () => o,
  KernelBackend: () => bo,
  MomentumOptimizer: () => Id,
  Optimizer: () => xd,
  RMSPropOptimizer: () => kd,
  Rank: () => Ct,
  Reduction: () => ch,
  SGDOptimizer: () => Rd,
  Tensor: () => wt,
  TensorBuffer: () => gt,
  Variable: () => St,
  abs: () => ru,
  acos: () => ou,
  acosh: () => au,
  add: () => rc,
  addN: () => oc,
  addStrict: () => ac,
  all: () => Cl,
  any: () => El,
  argMax: () => Rl,
  argMin: () => Il,
  asin: () => iu,
  asinh: () => su,
  atan: () => uu,
  atan2: () => ic,
  atanh: () => cu,
  avgPool: () => fl,
  avgPool3d: () => vl,
  backend: () => hn,
  backend_util: () => Uo,
  basicLSTMCell: () => zl,
  batchNorm: () => ju,
  batchNorm2d: () => Xu,
  batchNorm3d: () => Yu,
  batchNorm4d: () => $u,
  batchNormalization: () => Ku,
  batchNormalization2d: () => Gu,
  batchNormalization3d: () => Hu,
  batchNormalization4d: () => qu,
  batchToSpaceND: () => vr,
  booleanMaskAsync: () => Uc,
  broadcastTo: () => mr,
  browser: () => id,
  buffer: () => dr,
  cast: () => gr,
  ceil: () => lu,
  clipByValue: () => hu,
  clone: () => yr,
  complex: () => Dn,
  concat: () => Yn,
  concat1d: () => $n,
  concat2d: () => Qn,
  concat3d: () => Jn,
  concat4d: () => Zn,
  conv1d: () => Hc,
  conv2d: () => qc,
  conv2dTranspose: () => Zc,
  conv3d: () => Kc,
  conv3dTranspose: () => tl,
  cos: () => fu,
  cosh: () => du,
  cumsum: () => xr,
  customGrad: () => vo,
  deprecationWarn: () => Xe,
  depthToSpace: () => br,
  depthwiseConv2d: () => Yc,
  diag: () => eh,
  disableDeprecationWarnings: () => je,
  dispose: () => tn,
  disposeVariables: () => Ye,
  div: () => sc,
  divNoNan: () => uc,
  divStrict: () => cc,
  dot: () => nl,
  dropout: () => nh,
  elu: () => _l,
  enableDebugMode: () => Ke,
  enableProdMode: () => qe,
  engine: () => $e,
  env: () => i,
  equal: () => Rc,
  equalStrict: () => Ic,
  erf: () => pu,
  exp: () => vu,
  expandDims: () => wr,
  expm1: () => mu,
  eye: () => Cr,
  fft: () => Xl,
  fill: () => Hn,
  findBackend: () => un,
  findBackendFactory: () => cn,
  floor: () => gu,
  floorDiv: () => lc,
  frame: () => ih,
  fused: () => zh,
  gather: () => Lc,
  gatherND: () => th,
  gather_util: () => Xr,
  getBackend: () => an,
  getGradient: () => h,
  getKernel: () => l,
  getKernelsForBackend: () => f,
  grad: () => co,
  grads: () => lo,
  greater: () => kc,
  greaterEqual: () => Sc,
  greaterEqualStrict: () => Ac,
  greaterStrict: () => Dc,
  hammingWindow: () => ah,
  hannWindow: () => oh,
  ifft: () => Yl,
  imag: () => Nn,
  image: () => Oh,
  inTopKAsync: () => lh,
  io: () => ed,
  irfft: () => Ql,
  isFinite: () => Du,
  isInf: () => Au,
  isNaN: () => Su,
  keep: () => en,
  leakyRelu: () => Ol,
  less: () => Tc,
  lessEqual: () => Nc,
  lessEqualStrict: () => Fc,
  lessStrict: () => _c,
  linalg: () => Ih,
  linspace: () => qn,
  localResponseNormalization: () => Ul,
  log: () => yu,
  log1p: () => xu,
  logSigmoid: () => bu,
  logSoftmax: () => yo,
  logSumExp: () => kl,
  logicalAnd: () => Qu,
  logicalNot: () => Ju,
  logicalOr: () => Zu,
  logicalXor: () => tc,
  losses: () => bh,
  matMul: () => el,
  math: () => od,
  max: () => Sl,
  maxPool: () => hl,
  maxPool3d: () => pl,
  maximum: () => hc,
  maximumStrict: () => fc,
  mean: () => Al,
  memory: () => Qe,
  min: () => Dl,
  minimum: () => dc,
  minimumStrict: () => pc,
  mod: () => vc,
  modStrict: () => mc,
  moments: () => Tl,
  movingAverage: () => Hl,
  mul: () => gc,
  mulStrict: () => yc,
  multiRNNCell: () => Gl,
  multinomial: () => Er,
  neg: () => wu,
  nextFrame: () => Td,
  norm: () => Vl,
  notEqual: () => Oc,
  notEqualStrict: () => Mc,
  oneHot: () => Rr,
  ones: () => zn,
  onesLike: () => jn,
  op: () => An,
  outerProduct: () => rl,
  pad: () => Ir,
  pad1d: () => kr,
  pad2d: () => Sr,
  pad3d: () => Ar,
  pad4d: () => Dr,
  pool: () => dl,
  pow: () => xc,
  powStrict: () => bc,
  prelu: () => Ml,
  print: () => pr,
  prod: () => Fl,
  profile: () => Je,
  rand: () => Tr,
  randomGamma: () => Fr,
  randomNormal: () => Nr,
  randomUniform: () => _r,
  range: () => Kn,
  ready: () => on,
  real: () => Tn,
  reciprocal: () => Cu,
  registerBackend: () => ln,
  registerGradient: () => p,
  registerKernel: () => d,
  relu: () => Bl,
  relu6: () => Pl,
  removeBackend: () => sn,
  reshape: () => Or,
  reverse: () => ol,
  reverse1d: () => al,
  reverse2d: () => il,
  reverse3d: () => sl,
  reverse4d: () => ul,
  rfft: () => $l,
  round: () => Eu,
  rsqrt: () => Ru,
  scalar: () => On,
  scatterND: () => jl,
  scatter_util: () => to,
  selu: () => Ll,
  separableConv2d: () => Jc,
  serialization: () => ld,
  setBackend: () => rn,
  setPlatform: () => fn,
  setdiff1dAsync: () => Vr,
  sigmoid: () => Iu,
  sign: () => ku,
  signal: () => uh,
  sin: () => Tu,
  sinh: () => Nu,
  slice: () => ml,
  slice1d: () => gl,
  slice2d: () => yl,
  slice3d: () => xl,
  slice4d: () => bl,
  slice_util: () => uo,
  softmax: () => go,
  softplus: () => Fu,
  spaceToBatchND: () => Mr,
  sparseToDense: () => Zl,
  spectral: () => Jl,
  split: () => tr,
  sqrt: () => _u,
  square: () => tu,
  squaredDifference: () => nu,
  squaredDifferenceStrict: () => wc,
  squeeze: () => Br,
  stack: () => Pr,
  step: () => Ou,
  stft: () => sh,
  stridedSlice: () => ql,
  sub: () => Cc,
  subStrict: () => Ec,
  sum: () => Nl,
  sumOutType: () => Tt,
  tan: () => Mu,
  tanh: () => Bu,
  tensor: () => Fn,
  tensor1d: () => Mn,
  tensor2d: () => Bn,
  tensor3d: () => Pn,
  tensor4d: () => Ln,
  tensor5d: () => Wn,
  tensor6d: () => Un,
  tensor_util: () => Mt,
  test_util: () => md,
  tidy: () => Ze,
  tile: () => Lr,
  time: () => nn,
  topk: () => Kl,
  train: () => Ad,
  transpose: () => Wl,
  truncatedNormal: () => Wr,
  unregisterGradient: () => m,
  unregisterKernel: () => v,
  unsortedSegmentSum: () => Wc,
  unstack: () => Ur,
  util: () => st,
  valueAndGrad: () => ho,
  valueAndGrads: () => fo,
  variable: () => Vn,
  variableGrads: () => po,
  version_core: () => gd,
  webgl: () => yd,
  where: () => ec,
  whereAsync: () => nc,
  zeros: () => Gn,
  zerosLike: () => Xn
});
var t = function(e2, n2) {
  return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t2, e3) {
    t2.__proto__ = e3;
  } || function(t2, e3) {
    for (var n3 in e3)
      e3.hasOwnProperty(n3) && (t2[n3] = e3[n3]);
  })(e2, n2);
};
function e(e2, n2) {
  function r2() {
    this.constructor = e2;
  }
  t(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
}
function n(t2, e2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(o2, a2) {
    function i2(t3) {
      try {
        u2(r2.next(t3));
      } catch (t4) {
        a2(t4);
      }
    }
    function s2(t3) {
      try {
        u2(r2.throw(t3));
      } catch (t4) {
        a2(t4);
      }
    }
    function u2(t3) {
      t3.done ? o2(t3.value) : new n2(function(e3) {
        e3(t3.value);
      }).then(i2, s2);
    }
    u2((r2 = r2.apply(t2, e2 || [])).next());
  });
}
function r(t2, e2) {
  var n2, r2, o2, a2, i2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return a2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
    return this;
  }), a2;
  function s2(a3) {
    return function(s3) {
      return function(a4) {
        if (n2)
          throw new TypeError("Generator is already executing.");
        for (; i2; )
          try {
            if (n2 = 1, r2 && (o2 = 2 & a4[0] ? r2.return : a4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, a4[1])).done)
              return o2;
            switch (r2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
              case 0:
              case 1:
                o2 = a4;
                break;
              case 4:
                return i2.label++, { value: a4[1], done: false };
              case 5:
                i2.label++, r2 = a4[1], a4 = [0];
                continue;
              case 7:
                a4 = i2.ops.pop(), i2.trys.pop();
                continue;
              default:
                if (!(o2 = (o2 = i2.trys).length > 0 && o2[o2.length - 1]) && (6 === a4[0] || 2 === a4[0])) {
                  i2 = 0;
                  continue;
                }
                if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                  i2.label = a4[1];
                  break;
                }
                if (6 === a4[0] && i2.label < o2[1]) {
                  i2.label = o2[1], o2 = a4;
                  break;
                }
                if (o2 && i2.label < o2[2]) {
                  i2.label = o2[2], i2.ops.push(a4);
                  break;
                }
                o2[2] && i2.ops.pop(), i2.trys.pop();
                continue;
            }
            a4 = e2.call(t2, i2);
          } catch (t3) {
            a4 = [6, t3], r2 = 0;
          } finally {
            n2 = o2 = 0;
          }
        if (5 & a4[0])
          throw a4[1];
        return { value: a4[0] ? a4[1] : void 0, done: true };
      }([a3, s3]);
    };
  }
}
var o = function() {
  function t2(t3) {
    this.global = t3, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.populateURLFlags();
  }
  return t2.prototype.setPlatform = function(t3, e2) {
    null != this.platform && console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + e2 + "."), this.platformName = t3, this.platform = e2;
  }, t2.prototype.registerFlag = function(t3, e2, n2) {
    if (this.flagRegistry[t3] = { evaluationFn: e2, setHook: n2 }, null != this.urlFlags[t3]) {
      var r2 = this.urlFlags[t3];
      console.warn("Setting feature override from URL " + t3 + ": " + r2 + "."), this.set(t3, r2);
    }
  }, t2.prototype.get = function(t3) {
    return t3 in this.flags ? this.flags[t3] : (this.flags[t3] = this.evaluateFlag(t3), this.flags[t3]);
  }, t2.prototype.getNumber = function(t3) {
    return this.get(t3);
  }, t2.prototype.getBool = function(t3) {
    return this.get(t3);
  }, t2.prototype.getFlags = function() {
    return this.flags;
  }, Object.defineProperty(t2.prototype, "features", { get: function() {
    return this.flags;
  }, enumerable: true, configurable: true }), t2.prototype.set = function(t3, e2) {
    if (null == this.flagRegistry[t3])
      throw new Error("Cannot set flag " + t3 + " as it has not been registered.");
    this.flags[t3] = e2, null != this.flagRegistry[t3].setHook && this.flagRegistry[t3].setHook(e2);
  }, t2.prototype.evaluateFlag = function(t3) {
    if (null == this.flagRegistry[t3])
      throw new Error("Cannot evaluate flag '" + t3 + "': no evaluation function found.");
    return this.flagRegistry[t3].evaluationFn();
  }, t2.prototype.setFlags = function(t3) {
    this.flags = Object.assign({}, t3);
  }, t2.prototype.reset = function() {
    this.flags = {}, this.urlFlags = {}, this.populateURLFlags();
  }, t2.prototype.populateURLFlags = function() {
    var t3 = this;
    if (void 0 !== this.global && void 0 !== this.global.location && void 0 !== this.global.location.search) {
      var e2, n2, r2 = (e2 = this.global.location.search, n2 = {}, e2.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function(t4) {
        for (var e3 = [], r3 = 1; r3 < arguments.length; r3++)
          e3[r3 - 1] = arguments[r3];
        return a(n2, e3[0], e3[1]), e3.join("=");
      }), n2);
      if ("tfjsflags" in r2)
        r2.tfjsflags.split(",").forEach(function(e3) {
          var n3 = e3.split(":"), r3 = n3[0], o2 = n3[1];
          t3.urlFlags[r3] = function(t4, e4) {
            if ("true" === (e4 = e4.toLowerCase()) || "false" === e4)
              return "true" === e4;
            if ("" + +e4 === e4)
              return +e4;
            throw new Error("Could not parse value flag value " + e4 + " for flag " + t4 + ".");
          }(r3, o2);
        });
    }
  }, t2;
}();
function a(t2, e2, n2) {
  t2[decodeURIComponent(e2)] = decodeURIComponent(n2 || "");
}
function i() {
  return s;
}
var s = null;
var u = /* @__PURE__ */ new Map();
var c = /* @__PURE__ */ new Map();
function l(t2, e2) {
  var n2 = g(t2, e2);
  return u.get(n2);
}
function h(t2) {
  return c.get(t2);
}
function f(t2) {
  for (var e2 = u.entries(), n2 = []; ; ) {
    var r2 = e2.next(), o2 = r2.done, a2 = r2.value;
    if (o2)
      break;
    var i2 = a2[0], s2 = a2[1];
    i2.split("_")[0] === t2 && n2.push(s2);
  }
  return n2;
}
function d(t2) {
  var e2 = t2.kernelName, n2 = t2.backendName, r2 = g(e2, n2);
  if (u.has(r2))
    throw new Error("The kernel '" + e2 + "' for backend '" + n2 + "' is already registered");
  u.set(r2, t2);
}
function p(t2) {
  var e2 = t2.kernelName;
  c.has(e2) && console.warn("Overriding the gradient for '" + e2 + "'"), c.set(e2, t2);
}
function v(t2, e2) {
  var n2 = g(t2, e2);
  if (!u.has(n2))
    throw new Error("The kernel '" + t2 + "' for backend '" + e2 + "' is not registered");
  u.delete(n2);
}
function m(t2) {
  if (!c.has(t2))
    throw new Error("The gradient '" + t2 + "' for backend is not registered");
  c.delete(t2);
}
function g(t2, e2) {
  return e2 + "_" + t2;
}
function y(t2) {
  for (var e2 = t2.length, n2 = 0, r2 = 0; e2 > 0; )
    r2 = Math.random() * e2 | 0, n2 = t2[--e2], t2[e2] = t2[r2], t2[r2] = n2;
}
function x(t2, e2, n2) {
  return Math.max(t2, Math.min(e2, n2));
}
function b(t2) {
  return t2 % 2 == 0 ? t2 : t2 + 1;
}
function w(t2) {
  for (var e2 = 0, n2 = 0; n2 < t2.length; n2++)
    e2 += t2[n2];
  return e2;
}
function C(t2, e2) {
  if (!t2)
    throw new Error("string" == typeof e2 ? e2 : e2());
}
function E(t2, e2, n2) {
  void 0 === n2 && (n2 = ""), C(S(t2, e2), function() {
    return n2 + " Shapes " + t2 + " and " + e2 + " must match";
  });
}
function R(t2) {
  C(null != t2, function() {
    return "The input to the tensor constructor must be a non-null value.";
  });
}
function I(t2, e2, n2) {
  if (void 0 === e2 && (e2 = []), void 0 === n2 && (n2 = false), null == e2 && (e2 = []), Array.isArray(t2) || V(t2) && !n2)
    for (var r2 = 0; r2 < t2.length; ++r2)
      I(t2[r2], e2, n2);
  else
    e2.push(t2);
  return e2;
}
function k(t2) {
  if (0 === t2.length)
    return 1;
  for (var e2 = t2[0], n2 = 1; n2 < t2.length; n2++)
    e2 *= t2[n2];
  return e2;
}
function S(t2, e2) {
  if (t2 === e2)
    return true;
  if (null == t2 || null == e2)
    return false;
  if (t2.length !== e2.length)
    return false;
  for (var n2 = 0; n2 < t2.length; n2++)
    if (t2[n2] !== e2[n2])
      return false;
  return true;
}
function A(t2) {
  return t2 % 1 == 0;
}
function D(t2) {
  if (null != Math.tanh)
    return Math.tanh(t2);
  if (t2 === 1 / 0)
    return 1;
  if (t2 === -1 / 0)
    return -1;
  var e2 = Math.exp(2 * t2);
  return (e2 - 1) / (e2 + 1);
}
function T(t2) {
  var e2 = Math.ceil(Math.sqrt(t2));
  return [e2, Math.ceil(t2 / e2)];
}
function N(t2, e2) {
  return e2 <= t2.length ? t2 : t2 + " ".repeat(e2 - t2.length);
}
function F(t2, e2, n2) {
  return void 0 === e2 && (e2 = function(t3) {
    return 0;
  }), new Promise(function(r2, o2) {
    var a2 = 0, i2 = function() {
      if (t2())
        r2();
      else {
        a2++;
        var s2 = e2(a2);
        null != n2 && a2 >= n2 ? o2() : setTimeout(i2, s2);
      }
    };
    i2();
  });
}
function _(t2, e2) {
  for (var n2 = 1, r2 = -1, o2 = 0; o2 < t2.length; ++o2)
    if (t2[o2] >= 0)
      n2 *= t2[o2];
    else if (-1 === t2[o2]) {
      if (-1 !== r2)
        throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r2 + " and dim " + o2);
      r2 = o2;
    } else if (t2[o2] < 0)
      throw Error("Shapes can not be < 0. Found " + t2[o2] + " at dim " + o2);
  if (-1 === r2) {
    if (e2 > 0 && e2 !== n2)
      throw Error("Size(" + e2 + ") must match the product of shape " + t2);
    return t2;
  }
  if (0 === n2)
    throw Error("Cannot infer the missing size in [" + t2 + "] when there are 0 elements");
  if (e2 % n2 != 0)
    throw Error("The implicit shape can't be a fractional number. Got " + e2 + " / " + n2);
  var a2 = t2.slice();
  return a2[r2] = e2 / n2, a2;
}
function O(t2, e2) {
  var n2 = e2.length;
  return C((t2 = null == t2 ? e2.map(function(t3, e3) {
    return e3;
  }) : [].concat(t2)).every(function(t3) {
    return t3 >= -n2 && t3 < n2;
  }), function() {
    return "All values in axis param must be in range [-" + n2 + ", " + n2 + ") but got axis " + t2;
  }), C(t2.every(function(t3) {
    return A(t3);
  }), function() {
    return "All values in axis param must be integers but got axis " + t2;
  }), t2.map(function(t3) {
    return t3 < 0 ? n2 + t3 : t3;
  });
}
function M(t2, e2) {
  for (var n2 = [], r2 = [], o2 = null != e2 && Array.isArray(e2) && 0 === e2.length, a2 = null == e2 || o2 ? null : O(e2, t2).sort(), i2 = 0, s2 = 0; s2 < t2.length; ++s2) {
    if (null != a2) {
      if (a2[i2] === s2 && 1 !== t2[s2])
        throw new Error("Can't squeeze axis " + s2 + " since its dim '" + t2[s2] + "' is not 1");
      (null == a2[i2] || a2[i2] > s2) && 1 === t2[s2] && (n2.push(t2[s2]), r2.push(s2)), a2[i2] <= s2 && i2++;
    }
    1 !== t2[s2] && (n2.push(t2[s2]), r2.push(s2));
  }
  return { newShape: n2, keptDims: r2 };
}
function B(t2, e2) {
  var n2 = null;
  if (null == t2 || "float32" === t2)
    n2 = new Float32Array(e2);
  else if ("int32" === t2)
    n2 = new Int32Array(e2);
  else {
    if ("bool" !== t2)
      throw new Error("Unknown data type " + t2);
    n2 = new Uint8Array(e2);
  }
  return n2;
}
function P(t2, e2) {
  var n2 = null;
  if (null == t2 || "float32" === t2)
    n2 = new Float32Array(e2);
  else if ("int32" === t2)
    n2 = new Int32Array(e2);
  else if ("bool" === t2)
    n2 = new Uint8Array(e2);
  else {
    if ("string" !== t2)
      throw new Error("Unknown data type " + t2);
    n2 = new Array(e2);
  }
  return n2;
}
function L(t2, e2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    if (isNaN(r2) || !isFinite(r2))
      throw Error("A tensor of type " + e2 + " being uploaded contains " + r2 + ".");
  }
}
function W(t2) {
  return "bool" === t2 || "complex64" === t2 || "float32" === t2 || "int32" === t2 || "string" === t2;
}
function U(t2, e2) {
  return "complex64" !== e2 && (("float32" !== e2 || "complex64" === t2) && (("int32" !== e2 || "float32" === t2 || "complex64" === t2) && ("bool" !== e2 || "bool" !== t2)));
}
function V(t2) {
  return t2 instanceof Float32Array || t2 instanceof Int32Array || t2 instanceof Uint8Array;
}
function z(t2) {
  if ("float32" === t2 || "int32" === t2)
    return 4;
  if ("complex64" === t2)
    return 8;
  if ("bool" === t2)
    return 1;
  throw new Error("Unknown dtype " + t2);
}
function G(t2) {
  if (null == t2)
    return 0;
  var e2 = 0;
  return t2.forEach(function(t3) {
    return e2 += t3.length;
  }), e2;
}
function H(t2) {
  return "string" == typeof t2 || t2 instanceof String;
}
function q(t2) {
  return "boolean" == typeof t2;
}
function K(t2) {
  return "number" == typeof t2;
}
function j(t2) {
  return Array.isArray(t2) ? j(t2[0]) : t2 instanceof Float32Array ? "float32" : t2 instanceof Int32Array || t2 instanceof Uint8Array ? "int32" : K(t2) ? "float32" : H(t2) ? "string" : q(t2) ? "bool" : "float32";
}
function X(t2) {
  return !!(t2 && t2.constructor && t2.call && t2.apply);
}
function Y(t2, e2) {
  for (var n2 = e2; n2 < t2; ++n2)
    if (t2 % n2 == 0)
      return n2;
  return t2;
}
function $(t2) {
  var e2 = t2.length;
  if (e2 < 2)
    return [];
  var n2 = new Array(e2 - 1);
  n2[e2 - 2] = t2[e2 - 1];
  for (var r2 = e2 - 3; r2 >= 0; --r2)
    n2[r2] = n2[r2 + 1] * t2[r2 + 1];
  return n2;
}
function Q(t2, e2, n2) {
  if ("string" === e2)
    throw new Error("Cannot convert a string[] to a TypedArray");
  if (Array.isArray(t2) && (t2 = I(t2)), n2 && L(t2, e2), function(t3, e3) {
    return t3 instanceof Float32Array && "float32" === e3 || t3 instanceof Int32Array && "int32" === e3 || t3 instanceof Uint8Array && "bool" === e3;
  }(t2, e2))
    return t2;
  if (null == e2 || "float32" === e2 || "complex64" === e2)
    return new Float32Array(t2);
  if ("int32" === e2)
    return new Int32Array(t2);
  if ("bool" === e2) {
    for (var r2 = new Uint8Array(t2.length), o2 = 0; o2 < r2.length; ++o2)
      0 !== Math.round(t2[o2]) && (r2[o2] = 1);
    return r2;
  }
  throw new Error("Unknown data type " + e2);
}
function J(t2, e2) {
  if (0 === t2.length)
    return e2[0];
  var n2 = t2.reduce(function(t3, e3) {
    return t3 * e3;
  });
  if (0 === n2)
    return [];
  if (n2 !== e2.length)
    throw new Error("[" + t2 + "] does not match the input size.");
  return function t3(e3, n3, r2) {
    var o2 = new Array();
    if (1 === n3.length)
      for (var a2 = n3[0], i2 = 0; i2 < a2; i2++)
        o2[i2] = r2[e3 + i2];
    else {
      a2 = n3[0];
      var s2 = n3.slice(1), u2 = s2.reduce(function(t4, e4) {
        return t4 * e4;
      });
      for (i2 = 0; i2 < a2; i2++)
        o2[i2] = t3(e3 + i2 * u2, s2, r2);
    }
    return o2;
  }(0, t2, e2);
}
function Z(t2, e2) {
  for (var n2 = tt(t2, e2), r2 = 0; r2 < n2.length; r2++)
    n2[r2] = 1;
  return n2;
}
function tt(t2, e2) {
  if (null == e2 || "float32" === e2 || "complex64" === e2)
    return new Float32Array(t2);
  if ("int32" === e2)
    return new Int32Array(t2);
  if ("bool" === e2)
    return new Uint8Array(t2);
  throw new Error("Unknown data type " + e2);
}
function et() {
  return i().platform.now();
}
function nt(t2) {
  t2.forEach(function(e2) {
    C(Number.isInteger(e2) && e2 >= 0, function() {
      return "Tensor must have a shape comprised of positive integers but got shape [" + t2 + "].";
    });
  });
}
function rt(t2, e2) {
  return void 0 === e2 && (e2 = "utf-8"), e2 = e2 || "utf-8", i().platform.encode(t2, e2);
}
function ot(t2, e2) {
  return void 0 === e2 && (e2 = "utf-8"), e2 = e2 || "utf-8", i().platform.decode(t2, e2);
}
function at(t2, e2, n2) {
  if (0 === e2)
    return 0;
  if (1 === e2)
    return t2[0];
  for (var r2 = t2[t2.length - 1], o2 = 0; o2 < t2.length - 1; ++o2)
    r2 += n2[o2] * t2[o2];
  return r2;
}
function it(t2, e2, n2) {
  if (0 === e2)
    return [];
  if (1 === e2)
    return [t2];
  for (var r2 = new Array(e2), o2 = 0; o2 < r2.length - 1; ++o2)
    r2[o2] = Math.floor(t2 / n2[o2]), t2 -= r2[o2] * n2[o2];
  return r2[r2.length - 1] = t2, r2;
}
var st = Object.freeze({ shuffle: y, clamp: x, nearestLargerEven: b, sum: w, randUniform: function(t2, e2) {
  var n2 = Math.random();
  return e2 * n2 + (1 - n2) * t2;
}, distSquared: function(t2, e2) {
  for (var n2 = 0, r2 = 0; r2 < t2.length; r2++) {
    var o2 = Number(t2[r2]) - Number(e2[r2]);
    n2 += o2 * o2;
  }
  return n2;
}, assert: C, assertShapesMatch: E, assertNonNull: R, flatten: I, sizeFromShape: k, isScalarShape: function(t2) {
  return 0 === t2.length;
}, arraysEqual: S, isInt: A, tanh: D, sizeToSquarishShape: T, createShuffledIndices: function(t2) {
  for (var e2 = new Uint32Array(t2), n2 = 0; n2 < t2; ++n2)
    e2[n2] = n2;
  return y(e2), e2;
}, rightPad: N, repeatedTry: F, inferFromImplicitShape: _, parseAxisParam: O, squeezeShape: M, getTypedArrayFromDType: B, getArrayFromDType: P, checkConversionForErrors: L, isValidDtype: W, hasEncodingLoss: U, isTypedArray: V, bytesPerElement: z, bytesFromStringArray: G, isString: H, isBoolean: q, isNumber: K, inferDtype: j, isFunction: X, nearestDivisor: Y, computeStrides: $, toTypedArray: Q, toNestedArray: J, makeOnesTypedArray: Z, makeZerosTypedArray: tt, now: et, assertNonNegativeIntegerDimensions: nt, fetch: function(t2, e2) {
  return i().platform.fetch(t2, e2);
}, encodeString: rt, decodeString: ot, locToIndex: at, indexToLoc: it });
var ut = function() {
  function t2(t3, e2) {
    this.backendTimer = t3, this.logger = e2, null == e2 && (this.logger = new ct());
  }
  return t2.prototype.profileKernel = function(t3, e2, n2) {
    var r2, o2 = this, a2 = this.backendTimer.time(function() {
      r2 = n2();
    });
    return r2.forEach(function(n3) {
      n3.data().then(function(r3) {
        !function(t4, e3, n4) {
          if ("float32" !== e3)
            return false;
          for (var r4 = 0; r4 < t4.length; r4++) {
            var o3 = t4[r4];
            if (isNaN(o3) || !isFinite(o3))
              return console.warn("Found " + o3 + " in the result of '" + n4 + "'"), true;
          }
        }(r3, n3.dtype, t3), a2.then(function(a3) {
          var i2 = "";
          null != a3.getExtraProfileInfo && (i2 = a3.getExtraProfileInfo()), o2.logger.logKernelProfile(t3, n3, r3, a3.kernelMs, e2, i2);
        });
      });
    }), r2;
  }, t2;
}();
var ct = function() {
  function t2() {
  }
  return t2.prototype.logKernelProfile = function(t3, e2, n2, r2, o2, a2) {
    var i2 = "number" == typeof r2 ? N(r2 + "ms", 9) : r2.error, s2 = N(t3, 25), u2 = e2.rank, c2 = e2.size, l2 = N(e2.shape.toString(), 14), h2 = "";
    for (var f2 in o2) {
      var d2 = o2[f2].shape || e2.shape, p2 = d2.length;
      h2 += f2 + ": " + p2 + "D " + (p2 > 0 ? d2 : "") + " ";
    }
    console.log("%c" + s2 + "	%c" + i2 + "	%c" + u2 + "D " + l2 + "	%c" + c2 + "	%c" + h2 + "	%c" + a2, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue");
  }, t2;
}();
var lt = 20;
var ht = 3;
var ft = 7;
function dt(t2, e2, n2, r2) {
  var o2 = $(e2), a2 = function(t3, e3, n3, r3) {
    var o3 = k(e3), a3 = r3[r3.length - 1], i3 = new Array(a3).fill(0), s3 = e3.length, u3 = "complex64" === n3 ? mt(t3) : t3;
    if (s3 > 1)
      for (var c2 = 0; c2 < o3 / a3; c2++)
        for (var l2 = c2 * a3, h2 = 0; h2 < a3; h2++)
          i3[h2] = Math.max(i3[h2], pt(u3[l2 + h2], 0, n3).length);
    return i3;
  }(t2, e2, n2, o2), i2 = e2.length, s2 = function t3(e3, n3, r3, o3, a3, i3) {
    void 0 === i3 && (i3 = true);
    var s3 = "complex64" === r3 ? 2 : 1, u3 = n3[0], c2 = n3.length;
    if (0 === c2) {
      return "complex64" === r3 ? [pt(mt(e3)[0], 0, r3)] : "bool" === r3 ? [vt(e3[0])] : [e3[0].toString()];
    }
    if (1 === c2) {
      if (u3 > lt) {
        var l2 = ht * s3, h2 = Array.from(e3.slice(0, l2)), f2 = Array.from(e3.slice((u3 - ht) * s3, u3 * s3));
        return "complex64" === r3 && (h2 = mt(h2), f2 = mt(f2)), ["[" + h2.map(function(t4, e4) {
          return pt(t4, a3[e4], r3);
        }).join(", ") + ", ..., " + f2.map(function(t4, e4) {
          return pt(t4, a3[u3 - ht + e4], r3);
        }).join(", ") + "]"];
      }
      return ["[" + ("complex64" === r3 ? mt(e3) : Array.from(e3)).map(function(t4, e4) {
        return pt(t4, a3[e4], r3);
      }).join(", ") + "]"];
    }
    var d2 = n3.slice(1), p2 = o3.slice(1), v2 = o3[0] * s3, m2 = [];
    if (u3 > lt) {
      for (var g2 = 0; g2 < ht; g2++) {
        var y2 = (x2 = g2 * v2) + v2;
        m2.push.apply(m2, t3(e3.slice(x2, y2), d2, r3, p2, a3, false));
      }
      m2.push("...");
      for (g2 = u3 - ht; g2 < u3; g2++) {
        y2 = (x2 = g2 * v2) + v2;
        m2.push.apply(m2, t3(e3.slice(x2, y2), d2, r3, p2, a3, g2 === u3 - 1));
      }
    } else
      for (g2 = 0; g2 < u3; g2++) {
        var x2;
        y2 = (x2 = g2 * v2) + v2;
        m2.push.apply(m2, t3(e3.slice(x2, y2), d2, r3, p2, a3, g2 === u3 - 1));
      }
    var b2 = 2 === c2 ? "," : "";
    m2[0] = "[" + m2[0] + b2;
    for (g2 = 1; g2 < m2.length - 1; g2++)
      m2[g2] = " " + m2[g2] + b2;
    var w2 = ",\n";
    for (g2 = 2; g2 < c2; g2++)
      w2 += "\n";
    return m2[m2.length - 1] = " " + m2[m2.length - 1] + "]" + (i3 ? "" : w2), m2;
  }(t2, e2, n2, o2, a2), u2 = ["Tensor"];
  return r2 && (u2.push("  dtype: " + n2), u2.push("  rank: " + i2), u2.push("  shape: [" + e2 + "]"), u2.push("  values:")), u2.push(s2.map(function(t3) {
    return "    " + t3;
  }).join("\n")), u2.join("\n");
}
function pt(t2, e2, n2) {
  return N(Array.isArray(t2) ? parseFloat(t2[0].toFixed(ft)) + " + " + parseFloat(t2[1].toFixed(ft)) + "j" : H(t2) ? "'" + t2 + "'" : "bool" === n2 ? vt(t2) : parseFloat(t2.toFixed(ft)).toString(), e2);
}
function vt(t2) {
  return 0 === t2 ? "false" : "true";
}
function mt(t2) {
  for (var e2 = [], n2 = 0; n2 < t2.length; n2 += 2)
    e2.push([t2[n2], t2[n2 + 1]]);
  return e2;
}
var gt = function() {
  function t2(t3, e2, n2) {
    var r2 = this;
    if (this.dtype = e2, this.shape = t3.slice(), this.size = k(t3), null != n2) {
      var o2 = n2.length;
      C(o2 === this.size, function() {
        return "Length of values '" + o2 + "' does not match the size inferred by the shape '" + r2.size + "'.";
      });
    }
    if ("complex64" === e2)
      throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
    this.values = n2 || P(e2, this.size), this.strides = $(t3);
  }
  return t2.prototype.set = function(t3) {
    for (var e2 = this, n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    0 === n2.length && (n2 = [0]), C(n2.length === this.rank, function() {
      return "The number of provided coordinates (" + n2.length + ") must match the rank (" + e2.rank + ")";
    });
    var o2 = this.locToIndex(n2);
    this.values[o2] = t3;
  }, t2.prototype.get = function() {
    for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
      t3[e2] = arguments[e2];
    0 === t3.length && (t3 = [0]);
    for (var n2 = 0, r2 = 0, o2 = t3; r2 < o2.length; r2++) {
      var a2 = o2[r2];
      if (a2 < 0 || a2 >= this.shape[n2]) {
        var i2 = "Requested out of range element at " + t3 + ".   Buffer shape=" + this.shape;
        throw new Error(i2);
      }
      n2++;
    }
    for (var s2 = t3[t3.length - 1], u2 = 0; u2 < t3.length - 1; ++u2)
      s2 += this.strides[u2] * t3[u2];
    return this.values[s2];
  }, t2.prototype.locToIndex = function(t3) {
    if (0 === this.rank)
      return 0;
    if (1 === this.rank)
      return t3[0];
    for (var e2 = t3[t3.length - 1], n2 = 0; n2 < t3.length - 1; ++n2)
      e2 += this.strides[n2] * t3[n2];
    return e2;
  }, t2.prototype.indexToLoc = function(t3) {
    if (0 === this.rank)
      return [];
    if (1 === this.rank)
      return [t3];
    for (var e2 = new Array(this.shape.length), n2 = 0; n2 < e2.length - 1; ++n2)
      e2[n2] = Math.floor(t3 / this.strides[n2]), t3 -= e2[n2] * this.strides[n2];
    return e2[e2.length - 1] = t3, e2;
  }, Object.defineProperty(t2.prototype, "rank", { get: function() {
    return this.shape.length;
  }, enumerable: true, configurable: true }), t2.prototype.toTensor = function() {
    return yt().makeTensor(this.values, this.shape, this.dtype);
  }, t2;
}();
var yt = null;
var xt = null;
var bt = null;
var wt = function() {
  function t2(t3, e2, n2, r2) {
    this.kept = false, this.isDisposedInternal = false, this.shape = t3.slice(), this.dtype = e2 || "float32", this.size = k(t3), this.strides = $(t3), this.dataId = n2, this.id = r2, this.rankType = this.rank < 5 ? this.rank.toString() : "higher";
  }
  return t2.prototype.flatten = function() {
    return this.throwIfDisposed(), this.as1D();
  }, t2.prototype.asScalar = function() {
    return this.throwIfDisposed(), C(1 === this.size, function() {
      return "The array must have only 1 element.";
    }), this.reshape([]);
  }, t2.prototype.as1D = function() {
    return this.throwIfDisposed(), this.reshape([this.size]);
  }, t2.prototype.as2D = function(t3, e2) {
    return this.throwIfDisposed(), this.reshape([t3, e2]);
  }, t2.prototype.as3D = function(t3, e2, n2) {
    return this.throwIfDisposed(), this.reshape([t3, e2, n2]);
  }, t2.prototype.as4D = function(t3, e2, n2, r2) {
    return this.throwIfDisposed(), this.reshape([t3, e2, n2, r2]);
  }, t2.prototype.as5D = function(t3, e2, n2, r2, o2) {
    return this.throwIfDisposed(), this.reshape([t3, e2, n2, r2, o2]);
  }, t2.prototype.asType = function(t3) {
    return this.throwIfDisposed(), xt.cast(this, t3);
  }, Object.defineProperty(t2.prototype, "rank", { get: function() {
    return this.shape.length;
  }, enumerable: true, configurable: true }), t2.prototype.buffer = function() {
    return n(this, void 0, void 0, function() {
      var t3;
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.data()];
          case 1:
            return t3 = e2.sent(), [2, xt.buffer(this.shape, this.dtype, t3)];
        }
      });
    });
  }, t2.prototype.bufferSync = function() {
    return xt.buffer(this.shape, this.dtype, this.dataSync());
  }, t2.prototype.array = function() {
    return n(this, void 0, void 0, function() {
      var t3;
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.data()];
          case 1:
            return t3 = e2.sent(), [2, J(this.shape, t3)];
        }
      });
    });
  }, t2.prototype.arraySync = function() {
    return J(this.shape, this.dataSync());
  }, t2.prototype.data = function() {
    return n(this, void 0, void 0, function() {
      var t3, e2;
      return r(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.throwIfDisposed(), t3 = yt().read(this.dataId), "string" !== this.dtype ? [3, 2] : [4, t3];
          case 1:
            e2 = n2.sent();
            try {
              return [2, e2.map(function(t4) {
                return ot(t4);
              })];
            } catch (t4) {
              throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
            }
            n2.label = 2;
          case 2:
            return [2, t3];
        }
      });
    });
  }, t2.prototype.dataSync = function() {
    this.throwIfDisposed();
    var t3 = yt().readSync(this.dataId);
    if ("string" === this.dtype)
      try {
        return t3.map(function(t4) {
          return ot(t4);
        });
      } catch (t4) {
        throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().");
      }
    return t3;
  }, t2.prototype.bytes = function() {
    return n(this, void 0, void 0, function() {
      var t3;
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return this.throwIfDisposed(), [4, yt().read(this.dataId)];
          case 1:
            return t3 = e2.sent(), "string" === this.dtype ? [2, t3] : [2, new Uint8Array(t3.buffer)];
        }
      });
    });
  }, t2.prototype.dispose = function() {
    this.isDisposed || (yt().disposeTensor(this), this.isDisposedInternal = true);
  }, Object.defineProperty(t2.prototype, "isDisposed", { get: function() {
    return this.isDisposedInternal;
  }, enumerable: true, configurable: true }), t2.prototype.throwIfDisposed = function() {
    if (this.isDisposed)
      throw new Error("Tensor is disposed.");
  }, t2.prototype.toFloat = function() {
    return this.asType("float32");
  }, t2.prototype.toInt = function() {
    return this.asType("int32");
  }, t2.prototype.toBool = function() {
    return this.asType("bool");
  }, t2.prototype.print = function(t3) {
    return void 0 === t3 && (t3 = false), xt.print(this, t3);
  }, t2.prototype.reshape = function(t3) {
    return this.throwIfDisposed(), xt.reshape(this, t3);
  }, t2.prototype.reshapeAs = function(t3) {
    return this.throwIfDisposed(), this.reshape(t3.shape);
  }, t2.prototype.expandDims = function(t3) {
    return void 0 === t3 && (t3 = 0), xt.expandDims(this, t3);
  }, t2.prototype.cumsum = function(t3, e2, n2) {
    return void 0 === t3 && (t3 = 0), void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = false), xt.cumsum(this, t3, e2, n2);
  }, t2.prototype.squeeze = function(t3) {
    return this.throwIfDisposed(), xt.squeeze(this, t3);
  }, t2.prototype.clone = function() {
    return this.throwIfDisposed(), xt.clone(this);
  }, t2.prototype.oneHot = function(t3, e2, n2) {
    return this.throwIfDisposed(), xt.oneHot(this, t3, e2, n2);
  }, t2.prototype.toString = function(t3) {
    return void 0 === t3 && (t3 = false), dt(this.dataSync(), this.shape, this.dtype, t3);
  }, t2.prototype.tile = function(t3) {
    return this.throwIfDisposed(), xt.tile(this, t3);
  }, t2.prototype.gather = function(t3, e2) {
    return void 0 === e2 && (e2 = 0), this.throwIfDisposed(), xt.gather(this, t3, e2);
  }, t2.prototype.matMul = function(t3, e2, n2) {
    return void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = false), this.throwIfDisposed(), xt.matMul(this, t3, e2, n2);
  }, t2.prototype.dot = function(t3) {
    return this.throwIfDisposed(), xt.dot(this, t3);
  }, t2.prototype.norm = function(t3, e2, n2) {
    return void 0 === t3 && (t3 = "euclidean"), void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false), this.throwIfDisposed(), xt.norm(this, t3, e2, n2);
  }, t2.prototype.slice = function(t3, e2) {
    return this.throwIfDisposed(), xt.slice(this, t3, e2);
  }, t2.prototype.reverse = function(t3) {
    return this.throwIfDisposed(), xt.reverse(this, t3);
  }, t2.prototype.concat = function(e2, n2) {
    return void 0 === n2 && (n2 = 0), this.throwIfDisposed(), e2 instanceof t2 && (e2 = [e2]), xt.concat([this].concat(e2), n2);
  }, t2.prototype.split = function(t3, e2) {
    return void 0 === e2 && (e2 = 0), this.throwIfDisposed(), xt.split(this, t3, e2);
  }, t2.prototype.stack = function(t3, e2) {
    return void 0 === e2 && (e2 = 0), xt.stack([this, t3], e2);
  }, t2.prototype.unstack = function(t3) {
    return void 0 === t3 && (t3 = 0), xt.unstack(this, t3);
  }, t2.prototype.pad = function(t3, e2) {
    return void 0 === e2 && (e2 = 0), xt.pad(this, t3, e2);
  }, t2.prototype.batchNormalization = function(t3, e2, n2, r2, o2) {
    return void 0 === n2 && (n2 = 1e-3), bt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"), this.batchNorm(t3, e2, o2, r2, n2);
  }, t2.prototype.batchNorm = function(t3, e2, n2, r2, o2) {
    return void 0 === o2 && (o2 = 1e-3), this.throwIfDisposed(), xt.batchNorm(this, t3, e2, n2, r2, o2);
  }, t2.prototype.all = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.all(this, t3, e2);
  }, t2.prototype.any = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.any(this, t3, e2);
  }, t2.prototype.logSumExp = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.logSumExp(this, t3, e2);
  }, t2.prototype.sum = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.sum(this, t3, e2);
  }, t2.prototype.prod = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.prod(this, t3, e2);
  }, t2.prototype.mean = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.mean(this, t3, e2);
  }, t2.prototype.min = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.min(this, t3, e2);
  }, t2.prototype.max = function(t3, e2) {
    return void 0 === t3 && (t3 = null), void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.max(this, t3, e2);
  }, t2.prototype.argMin = function(t3) {
    return void 0 === t3 && (t3 = null), this.throwIfDisposed(), xt.argMin(this, t3);
  }, t2.prototype.argMax = function(t3) {
    return void 0 === t3 && (t3 = null), this.throwIfDisposed(), xt.argMax(this, t3);
  }, t2.prototype.cast = function(t3) {
    return this.throwIfDisposed(), xt.cast(this, t3);
  }, t2.prototype.add = function(t3) {
    return this.throwIfDisposed(), xt.add(this, t3);
  }, t2.prototype.addStrict = function(t3) {
    return this.throwIfDisposed(), xt.addStrict(this, t3);
  }, t2.prototype.atan2 = function(t3) {
    return this.throwIfDisposed(), xt.atan2(this, t3);
  }, t2.prototype.sub = function(t3) {
    return this.throwIfDisposed(), xt.sub(this, t3);
  }, t2.prototype.subStrict = function(t3) {
    return this.throwIfDisposed(), xt.subStrict(this, t3);
  }, t2.prototype.pow = function(t3) {
    return this.throwIfDisposed(), xt.pow(this, t3);
  }, t2.prototype.powStrict = function(t3) {
    return this.throwIfDisposed(), xt.powStrict(this, t3);
  }, t2.prototype.mul = function(t3) {
    return this.throwIfDisposed(), xt.mul(this, t3);
  }, t2.prototype.mulStrict = function(t3) {
    return this.throwIfDisposed(), xt.mulStrict(this, t3);
  }, t2.prototype.div = function(t3) {
    return this.throwIfDisposed(), xt.div(this, t3);
  }, t2.prototype.divNoNan = function(t3) {
    return this.throwIfDisposed(), xt.divNoNan(this, t3);
  }, t2.prototype.floorDiv = function(t3) {
    return this.throwIfDisposed(), xt.floorDiv(this, t3);
  }, t2.prototype.divStrict = function(t3) {
    return this.throwIfDisposed(), xt.divStrict(this, t3);
  }, t2.prototype.minimum = function(t3) {
    return this.throwIfDisposed(), xt.minimum(this, t3);
  }, t2.prototype.minimumStrict = function(t3) {
    return this.throwIfDisposed(), xt.minimumStrict(this, t3);
  }, t2.prototype.maximum = function(t3) {
    return this.throwIfDisposed(), xt.maximum(this, t3);
  }, t2.prototype.maximumStrict = function(t3) {
    return this.throwIfDisposed(), xt.maximumStrict(this, t3);
  }, t2.prototype.mod = function(t3) {
    return this.throwIfDisposed(), xt.mod(this, t3);
  }, t2.prototype.modStrict = function(t3) {
    return this.throwIfDisposed(), xt.modStrict(this, t3);
  }, t2.prototype.squaredDifferenceStrict = function(t3) {
    return this.throwIfDisposed(), xt.squaredDifferenceStrict(this, t3);
  }, t2.prototype.transpose = function(t3) {
    return this.throwIfDisposed(), xt.transpose(this, t3);
  }, t2.prototype.notEqual = function(t3) {
    return this.throwIfDisposed(), xt.notEqual(this, t3);
  }, t2.prototype.notEqualStrict = function(t3) {
    return this.throwIfDisposed(), xt.notEqualStrict(this, t3);
  }, t2.prototype.less = function(t3) {
    return this.throwIfDisposed(), xt.less(this, t3);
  }, t2.prototype.lessStrict = function(t3) {
    return this.throwIfDisposed(), xt.lessStrict(this, t3);
  }, t2.prototype.equal = function(t3) {
    return this.throwIfDisposed(), xt.equal(this, t3);
  }, t2.prototype.equalStrict = function(t3) {
    return this.throwIfDisposed(), xt.equalStrict(this, t3);
  }, t2.prototype.lessEqual = function(t3) {
    return this.throwIfDisposed(), xt.lessEqual(this, t3);
  }, t2.prototype.lessEqualStrict = function(t3) {
    return this.throwIfDisposed(), xt.lessEqualStrict(this, t3);
  }, t2.prototype.greater = function(t3) {
    return this.throwIfDisposed(), xt.greater(this, t3);
  }, t2.prototype.greaterStrict = function(t3) {
    return this.throwIfDisposed(), xt.greaterStrict(this, t3);
  }, t2.prototype.greaterEqual = function(t3) {
    return this.throwIfDisposed(), xt.greaterEqual(this, t3);
  }, t2.prototype.greaterEqualStrict = function(t3) {
    return this.throwIfDisposed(), xt.greaterEqualStrict(this, t3);
  }, t2.prototype.logicalAnd = function(t3) {
    return this.throwIfDisposed(), xt.logicalAnd(this, t3);
  }, t2.prototype.logicalOr = function(t3) {
    return this.throwIfDisposed(), xt.logicalOr(this, t3);
  }, t2.prototype.logicalNot = function() {
    return this.throwIfDisposed(), xt.logicalNot(this);
  }, t2.prototype.logicalXor = function(t3) {
    return this.throwIfDisposed(), xt.logicalXor(this, t3);
  }, t2.prototype.where = function(t3, e2) {
    return this.throwIfDisposed(), xt.where(t3, this, e2);
  }, t2.prototype.neg = function() {
    return this.throwIfDisposed(), xt.neg(this);
  }, t2.prototype.ceil = function() {
    return this.throwIfDisposed(), xt.ceil(this);
  }, t2.prototype.floor = function() {
    return this.throwIfDisposed(), xt.floor(this);
  }, t2.prototype.sign = function() {
    return this.throwIfDisposed(), xt.sign(this);
  }, t2.prototype.isNaN = function() {
    return this.throwIfDisposed(), xt.isNaN(this);
  }, t2.prototype.isInf = function() {
    return this.throwIfDisposed(), xt.isInf(this);
  }, t2.prototype.isFinite = function() {
    return this.throwIfDisposed(), xt.isFinite(this);
  }, t2.prototype.exp = function() {
    return this.throwIfDisposed(), xt.exp(this);
  }, t2.prototype.expm1 = function() {
    return this.throwIfDisposed(), xt.expm1(this);
  }, t2.prototype.log = function() {
    return this.throwIfDisposed(), xt.log(this);
  }, t2.prototype.log1p = function() {
    return this.throwIfDisposed(), xt.log1p(this);
  }, t2.prototype.sqrt = function() {
    return this.throwIfDisposed(), xt.sqrt(this);
  }, t2.prototype.rsqrt = function() {
    return this.throwIfDisposed(), xt.rsqrt(this);
  }, t2.prototype.square = function() {
    return this.throwIfDisposed(), xt.square(this);
  }, t2.prototype.reciprocal = function() {
    return this.throwIfDisposed(), xt.reciprocal(this);
  }, t2.prototype.abs = function() {
    return this.throwIfDisposed(), xt.abs(this);
  }, t2.prototype.clipByValue = function(t3, e2) {
    return this.throwIfDisposed(), xt.clipByValue(this, t3, e2);
  }, t2.prototype.relu = function() {
    return this.throwIfDisposed(), xt.relu(this);
  }, t2.prototype.relu6 = function() {
    return this.throwIfDisposed(), xt.relu6(this);
  }, t2.prototype.elu = function() {
    return this.throwIfDisposed(), xt.elu(this);
  }, t2.prototype.selu = function() {
    return this.throwIfDisposed(), xt.selu(this);
  }, t2.prototype.leakyRelu = function(t3) {
    return void 0 === t3 && (t3 = 0.2), this.throwIfDisposed(), xt.leakyRelu(this, t3);
  }, t2.prototype.prelu = function(t3) {
    return this.throwIfDisposed(), xt.prelu(this, t3);
  }, t2.prototype.sigmoid = function() {
    return this.throwIfDisposed(), xt.sigmoid(this);
  }, t2.prototype.logSigmoid = function() {
    return this.throwIfDisposed(), xt.logSigmoid(this);
  }, t2.prototype.softplus = function() {
    return this.throwIfDisposed(), xt.softplus(this);
  }, t2.prototype.zerosLike = function() {
    return this.throwIfDisposed(), xt.zerosLike(this);
  }, t2.prototype.onesLike = function() {
    return this.throwIfDisposed(), xt.onesLike(this);
  }, t2.prototype.sin = function() {
    return this.throwIfDisposed(), xt.sin(this);
  }, t2.prototype.cos = function() {
    return this.throwIfDisposed(), xt.cos(this);
  }, t2.prototype.tan = function() {
    return this.throwIfDisposed(), xt.tan(this);
  }, t2.prototype.asin = function() {
    return this.throwIfDisposed(), xt.asin(this);
  }, t2.prototype.acos = function() {
    return this.throwIfDisposed(), xt.acos(this);
  }, t2.prototype.atan = function() {
    return this.throwIfDisposed(), xt.atan(this);
  }, t2.prototype.sinh = function() {
    return this.throwIfDisposed(), xt.sinh(this);
  }, t2.prototype.cosh = function() {
    return this.throwIfDisposed(), xt.cosh(this);
  }, t2.prototype.tanh = function() {
    return this.throwIfDisposed(), xt.tanh(this);
  }, t2.prototype.asinh = function() {
    return this.throwIfDisposed(), xt.asinh(this);
  }, t2.prototype.acosh = function() {
    return this.throwIfDisposed(), xt.acosh(this);
  }, t2.prototype.atanh = function() {
    return this.throwIfDisposed(), xt.atanh(this);
  }, t2.prototype.erf = function() {
    return this.throwIfDisposed(), xt.erf(this);
  }, t2.prototype.round = function() {
    return this.throwIfDisposed(), xt.round(this);
  }, t2.prototype.step = function(t3) {
    return void 0 === t3 && (t3 = 0), this.throwIfDisposed(), xt.step(this, t3);
  }, t2.prototype.softmax = function(t3) {
    return void 0 === t3 && (t3 = -1), this.throwIfDisposed(), xt.softmax(this, t3);
  }, t2.prototype.logSoftmax = function(t3) {
    return void 0 === t3 && (t3 = -1), this.throwIfDisposed(), xt.logSoftmax(this, t3);
  }, t2.prototype.resizeBilinear = function(t3, e2) {
    return void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.image.resizeBilinear(this, t3, e2);
  }, t2.prototype.resizeNearestNeighbor = function(t3, e2) {
    return void 0 === e2 && (e2 = false), this.throwIfDisposed(), xt.image.resizeNearestNeighbor(this, t3, e2);
  }, t2.prototype.conv1d = function(t3, e2, n2, r2, o2, a2) {
    return void 0 === r2 && (r2 = "NWC"), void 0 === o2 && (o2 = 1), this.throwIfDisposed(), xt.conv1d(this, t3, e2, n2, r2, o2, a2);
  }, t2.prototype.conv2d = function(t3, e2, n2, r2, o2, a2) {
    return void 0 === r2 && (r2 = "NHWC"), void 0 === o2 && (o2 = [1, 1]), this.throwIfDisposed(), xt.conv2d(this, t3, e2, n2, r2, o2, a2);
  }, t2.prototype.conv2dTranspose = function(t3, e2, n2, r2, o2) {
    return this.throwIfDisposed(), xt.conv2dTranspose(this, t3, e2, n2, r2, o2);
  }, t2.prototype.depthwiseConv2D = function(t3, e2, n2, r2, o2, a2) {
    return void 0 === r2 && (r2 = "NHWC"), void 0 === o2 && (o2 = [1, 1]), this.throwIfDisposed(), xt.depthwiseConv2d(this, t3, e2, n2, r2, o2, a2);
  }, t2.prototype.separableConv2d = function(t3, e2, n2, r2, o2, a2) {
    return void 0 === o2 && (o2 = [1, 1]), void 0 === a2 && (a2 = "NHWC"), this.throwIfDisposed(), xt.separableConv2d(this, t3, e2, n2, r2, o2, a2);
  }, t2.prototype.avgPool = function(t3, e2, n2, r2) {
    return this.throwIfDisposed(), xt.avgPool(this, t3, e2, n2, r2);
  }, t2.prototype.maxPool = function(t3, e2, n2, r2) {
    return this.throwIfDisposed(), xt.maxPool(this, t3, e2, n2, r2);
  }, t2.prototype.localResponseNormalization = function(t3, e2, n2, r2) {
    return void 0 === t3 && (t3 = 5), void 0 === e2 && (e2 = 1), void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = 0.5), xt.localResponseNormalization(this, t3, e2, n2, r2);
  }, t2.prototype.pool = function(t3, e2, n2, r2, o2) {
    return this.throwIfDisposed(), xt.pool(this, t3, e2, n2, r2, o2);
  }, t2.prototype.variable = function(t3, e2, n2) {
    return void 0 === t3 && (t3 = true), this.throwIfDisposed(), yt().makeVariable(this, t3, e2, n2);
  }, t2.prototype.unsortedSegmentSum = function(t3, e2) {
    return this.throwIfDisposed(), xt.unsortedSegmentSum(this, t3, e2);
  }, t2.prototype.batchToSpaceND = function(t3, e2) {
    return this.throwIfDisposed(), xt.batchToSpaceND(this, t3, e2);
  }, t2.prototype.spaceToBatchND = function(t3, e2) {
    return this.throwIfDisposed(), xt.spaceToBatchND(this, t3, e2);
  }, t2.prototype.topk = function(t3, e2) {
    return void 0 === t3 && (t3 = 1), void 0 === e2 && (e2 = true), this.throwIfDisposed(), xt.topk(this, t3, e2);
  }, t2.prototype.stridedSlice = function(t3, e2, n2, r2, o2, a2, i2, s2) {
    return void 0 === r2 && (r2 = 0), void 0 === o2 && (o2 = 0), void 0 === a2 && (a2 = 0), void 0 === i2 && (i2 = 0), void 0 === s2 && (s2 = 0), this.throwIfDisposed(), xt.stridedSlice(this, t3, e2, n2, r2, o2, a2, i2, s2);
  }, t2.prototype.depthToSpace = function(t3, e2) {
    return this.throwIfDisposed(), xt.depthToSpace(this, t3, e2);
  }, t2.prototype.fft = function() {
    return this.throwIfDisposed(), xt.spectral.fft(this);
  }, t2.prototype.ifft = function() {
    return this.throwIfDisposed(), xt.spectral.ifft(this);
  }, t2.prototype.rfft = function() {
    return this.throwIfDisposed(), xt.spectral.rfft(this);
  }, t2.prototype.irfft = function() {
    return this.throwIfDisposed(), xt.spectral.irfft(this);
  }, t2;
}();
Object.defineProperty(wt, Symbol.hasInstance, { value: function(t2) {
  return !!t2 && null != t2.dataId && null != t2.shape && null != t2.dtype;
} });
var Ct;
var Et;
var Rt;
var It;
var kt;
var St = function(t2) {
  function n2(e2, n3, r2, o2) {
    var a2 = t2.call(this, e2.shape, e2.dtype, e2.dataId, o2) || this;
    return a2.trainable = n3, a2.name = r2, a2;
  }
  return e(n2, t2), n2.prototype.assign = function(t3) {
    if (t3.dtype !== this.dtype)
      throw new Error("dtype of the new value (" + t3.dtype + ") and previous value (" + this.dtype + ") must match");
    if (!S(t3.shape, this.shape))
      throw new Error("shape of the new value (" + t3.shape + ") and previous value (" + this.shape + ") must match");
    yt().disposeTensor(this), this.dataId = t3.dataId, yt().incRef(this, null);
  }, n2.prototype.dispose = function() {
    yt().disposeVariable(this), this.isDisposedInternal = true;
  }, n2;
}(wt);
Object.defineProperty(St, Symbol.hasInstance, { value: function(t2) {
  return t2 instanceof wt && null != t2.assign && t2.assign instanceof Function;
} }), function(t2) {
  t2.R0 = "R0", t2.R1 = "R1", t2.R2 = "R2", t2.R3 = "R3", t2.R4 = "R4", t2.R5 = "R5", t2.R6 = "R6";
}(Ct || (Ct = {})), function(t2) {
  t2.float32 = "float32", t2.int32 = "int32", t2.bool = "int32", t2.complex64 = "complex64";
}(Et || (Et = {})), function(t2) {
  t2.float32 = "float32", t2.int32 = "int32", t2.bool = "bool", t2.complex64 = "complex64";
}(Rt || (Rt = {})), function(t2) {
  t2.float32 = "float32", t2.int32 = "float32", t2.bool = "float32", t2.complex64 = "complex64";
}(It || (It = {})), function(t2) {
  t2.float32 = "complex64", t2.int32 = "complex64", t2.bool = "complex64", t2.complex64 = "complex64";
}(kt || (kt = {}));
var At = { float32: It, int32: Et, bool: Rt, complex64: kt };
function Dt(t2, e2) {
  if ("string" === t2 || "string" === e2) {
    if ("string" === t2 && "string" === e2)
      return "string";
    throw new Error("Can not upcast " + t2 + " with " + e2);
  }
  return At[t2][e2];
}
function Tt(t2) {
  return Dt(t2, "int32");
}
function Nt(t2, e2) {
  if (t2.dtype === e2.dtype)
    return [t2, e2];
  var n2 = Dt(t2.dtype, e2.dtype);
  return [t2.cast(n2), e2.cast(n2)];
}
function Ft(t2, e2) {
  C(t2.dtype === e2.dtype, function() {
    return "The dtypes of the first(" + t2.dtype + ") and second(" + e2.dtype + ") input must match";
  });
}
function _t(t2) {
  var e2 = [];
  return function t3(e3, n2, r2) {
    if (null == e3)
      return;
    if (e3 instanceof wt)
      return void n2.push(e3);
    if (o2 = e3, !Array.isArray(o2) && "object" != typeof o2)
      return;
    var o2;
    var a2 = e3;
    for (var i2 in a2) {
      var s2 = a2[i2];
      r2.has(s2) || (r2.add(s2), t3(s2, n2, r2));
    }
  }(t2, e2, /* @__PURE__ */ new Set()), e2;
}
var Ot;
var Mt = Object.freeze({ makeTypesMatch: Nt, assertTypesMatch: Ft, isTensorInList: function(t2, e2) {
  return e2.some(function(e3) {
    return e3.id === t2.id;
  });
}, getTensorsInContainer: _t });
var Bt = function() {
  function t2() {
    this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0, this.tensorInfo = /* @__PURE__ */ new WeakMap(), this.profiling = false, this.activeProfile = { newBytes: 0, newTensors: 0, peakBytes: 0, kernels: [], result: null };
  }
  return t2.prototype.dispose = function() {
    for (var t3 in this.registeredVariables)
      this.registeredVariables[t3].dispose();
  }, t2;
}();
var Pt = function() {
  function t2(t3) {
    this.ENV = t3, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this.state = new Bt();
  }
  return t2.prototype.ready = function() {
    return n(this, void 0, void 0, function() {
      var t3, e2, n2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (null != this.pendingBackendInit)
              return [2, this.pendingBackendInit.then(function() {
              })];
            if (null != this.backendInstance)
              return [2];
            t3 = this.getSortedBackends(), e2 = 0, r2.label = 1;
          case 1:
            return e2 < t3.length ? (n2 = t3[e2], [4, this.initializeBackend(n2).success]) : [3, 5];
          case 2:
            return r2.sent() ? [4, this.setBackend(n2)] : [3, 4];
          case 3:
            return r2.sent(), [2];
          case 4:
            return e2++, [3, 1];
          case 5:
            throw new Error("Could not initialize any backends, all backend initializations failed.");
        }
      });
    });
  }, Object.defineProperty(t2.prototype, "backend", { get: function() {
    if (null != this.pendingBackendInit)
      throw new Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
    if (null == this.backendInstance) {
      var t3 = this.initializeBackendsAndReturnBest(), e2 = t3.name;
      if (t3.asyncInit)
        throw new Error("The highest priority backend '" + e2 + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
      this.setBackend(e2);
    }
    return this.backendInstance;
  }, enumerable: true, configurable: true }), t2.prototype.backendNames = function() {
    return Object.keys(this.registryFactory);
  }, t2.prototype.findBackend = function(t3) {
    if (!(t3 in this.registry)) {
      if (!(t3 in this.registryFactory))
        return null;
      if (this.initializeBackend(t3).asyncInit)
        return null;
    }
    return this.registry[t3];
  }, t2.prototype.findBackendFactory = function(t3) {
    return t3 in this.registryFactory ? this.registryFactory[t3].factory : null;
  }, t2.prototype.registerBackend = function(t3, e2, n2) {
    return void 0 === n2 && (n2 = 1), t3 in this.registryFactory ? (console.warn(t3 + " backend was already registered. Reusing existing backend factory."), false) : (this.registryFactory[t3] = { factory: e2, priority: n2 }, true);
  }, t2.prototype.setBackend = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (null == this.registryFactory[t3])
              throw new Error("Backend name '" + t3 + "' not found in registry");
            return this.backendName = t3, null != this.registry[t3] ? [3, 4] : (this.backendInstance = null, e2 = this.initializeBackend(t3), n2 = e2.success, e2.asyncInit ? [4, n2] : [3, 2]);
          case 1:
            return o2 = r2.sent(), [3, 3];
          case 2:
            o2 = n2, r2.label = 3;
          case 3:
            if (!o2)
              return [2, false];
            r2.label = 4;
          case 4:
            return this.backendInstance = this.registry[t3], this.setupRegisteredKernels(), this.profiler = new ut(this.backendInstance), [2, true];
        }
      });
    });
  }, t2.prototype.setupRegisteredKernels = function() {
    var t3 = this;
    f(this.backendName).forEach(function(e2) {
      null != e2.setupFunc && e2.setupFunc(t3.backendInstance);
    });
  }, t2.prototype.disposeRegisteredKernels = function(t3) {
    var e2 = this;
    f(t3).forEach(function(n2) {
      null != n2.disposeFunc && n2.disposeFunc(e2.registry[t3]);
    });
  }, t2.prototype.initializeBackend = function(t3) {
    var e2 = this, n2 = this.registryFactory[t3];
    if (null == n2)
      throw new Error("Cannot initialize backend " + t3 + ", no registration found.");
    try {
      var r2 = n2.factory();
      if (Promise.resolve(r2) === r2) {
        var o2 = ++this.pendingBackendInitId, a2 = r2.then(function(n3) {
          return !(o2 < e2.pendingBackendInitId) && (e2.registry[t3] = n3, e2.pendingBackendInit = null, true);
        }).catch(function(n3) {
          return !(o2 < e2.pendingBackendInitId) && (e2.pendingBackendInit = null, console.warn("Initialization of backend " + t3 + " failed"), console.warn(n3.stack || n3.message), false);
        });
        return this.pendingBackendInit = a2, { success: a2, asyncInit: true };
      }
      return this.registry[t3] = r2, { success: true, asyncInit: false };
    } catch (e3) {
      return console.warn("Initialization of backend " + t3 + " failed"), console.warn(e3.stack || e3.message), { success: false, asyncInit: false };
    }
  }, t2.prototype.removeBackend = function(t3) {
    if (!(t3 in this.registryFactory))
      throw new Error(t3 + " backend not found in registry");
    this.backendName === t3 && null != this.pendingBackendInit && this.pendingBackendInitId++, t3 in this.registry && (this.disposeRegisteredKernels(t3), this.registry[t3].dispose(), delete this.registry[t3]), delete this.registryFactory[t3], this.backendName === t3 && (this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null);
  }, t2.prototype.getSortedBackends = function() {
    var t3 = this;
    if (0 === Object.keys(this.registryFactory).length)
      throw new Error("No backend found in registry.");
    return Object.keys(this.registryFactory).sort(function(e2, n2) {
      return t3.registryFactory[n2].priority - t3.registryFactory[e2].priority;
    });
  }, t2.prototype.initializeBackendsAndReturnBest = function() {
    for (var t3 = this.getSortedBackends(), e2 = 0; e2 < t3.length; e2++) {
      var n2 = t3[e2], r2 = this.initializeBackend(n2), o2 = r2.success, a2 = r2.asyncInit;
      if (a2 || o2)
        return { name: n2, asyncInit: a2 };
    }
    throw new Error("Could not initialize any backends, all backend initializations failed.");
  }, t2.prototype.moveData = function(t3, e2) {
    var n2 = this.state.tensorInfo.get(e2), r2 = n2.backend, o2 = this.readSync(e2);
    r2.disposeData(e2), n2.backend = t3, t3.move(e2, o2, n2.shape, n2.dtype), this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++;
  }, t2.prototype.tidy = function(t3, e2) {
    var n2, r2 = this, o2 = null;
    if (null == e2) {
      if ("function" != typeof t3)
        throw new Error("Please provide a function to tidy()");
      e2 = t3;
    } else {
      if ("string" != typeof t3 && !(t3 instanceof String))
        throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
      if ("function" != typeof e2)
        throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
      o2 = t3;
    }
    return this.scopedRun(function() {
      return r2.startScope(o2);
    }, function() {
      return r2.endScope(n2);
    }, function() {
      return (n2 = e2()) instanceof Promise && console.error("Cannot return a Promise inside of tidy."), n2;
    });
  }, t2.prototype.scopedRun = function(t3, e2, n2) {
    t3();
    try {
      var r2 = n2();
      return e2(), r2;
    } catch (t4) {
      throw e2(), t4;
    }
  }, t2.prototype.nextTensorId = function() {
    return t2.nextTensorId++;
  }, t2.prototype.nextVariableId = function() {
    return t2.nextVariableId++;
  }, t2.prototype.clone = function(t3) {
    var e2 = this.makeTensorFromDataId(t3.dataId, t3.shape, t3.dtype), n2 = { x: t3 };
    return this.addTapeNode(this.state.activeScope.name, n2, [e2], function(t4) {
      return { x: function() {
        return t4.toFloat();
      } };
    }, []), e2;
  }, t2.prototype.runKernel = function(t3, e2, n2, r2, o2) {
    return this.runKernelFunc(null, e2, null, t3, n2, r2, o2);
  }, t2.prototype.shouldCheckForMemLeaks = function() {
    return this.ENV.getBool("IS_TEST");
  }, t2.prototype.checkKernelForMemLeak = function(t3, e2, n2) {
    var r2 = this.backend.numDataIds(), o2 = 0;
    n2.forEach(function(t4) {
      o2 += "complex64" === t4.dtype ? 3 : 1;
    });
    var a2 = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1], i2 = r2 - e2 - o2 - a2;
    if (i2 > 0)
      throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + i2 + " data ids) after running '" + t3 + "'");
  }, t2.prototype.runKernelFunc = function(t3, e2, n2, r2, o2, a2, i2) {
    var s2, u2 = this;
    void 0 === a2 && (a2 = []), void 0 === i2 && (i2 = []);
    var c2 = [], h2 = this.isTapeOn();
    null == r2 && (r2 = null != this.state.activeScope ? this.state.activeScope.name : "");
    var f2, d2 = function(t4) {
      h2 && (c2 = t4.map(function(t5) {
        return u2.keep(u2.clone(t5));
      }));
    }, p2 = this.state.numBytes, v2 = this.state.numTensors;
    this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
    var m2, g2 = l(r2, this.backendName);
    return f2 = null != g2 ? function() {
      var t4 = u2.backend.numDataIds();
      m2 = g2.kernelFunc({ inputs: e2, attrs: o2, backend: u2.backend });
      var n3 = Array.isArray(m2) ? m2 : [m2];
      u2.shouldCheckForMemLeaks() && u2.checkKernelForMemLeak(r2, t4, n3);
      var s3 = n3.map(function(t5) {
        var e3 = t5.dataId, n4 = t5.shape, r3 = t5.dtype;
        return u2.makeTensorFromDataId(e3, n4, r3);
      }), c3 = s3.filter(function(t5, e3) {
        return i2[e3];
      });
      return d2((a2 || []).slice().concat(c3)), s3;
    } : function() {
      var e3 = u2.backend.numDataIds();
      m2 = u2.tidy(function() {
        return t3(u2.backend, d2);
      });
      var n3 = Array.isArray(m2) ? m2 : [m2];
      return u2.shouldCheckForMemLeaks() && u2.checkKernelForMemLeak(r2, e3, n3), n3;
    }, this.scopedRun(function() {
      return u2.state.kernelDepth++;
    }, function() {
      return u2.state.kernelDepth--;
    }, function() {
      s2 = u2.ENV.getBool("DEBUG") ? u2.profiler.profileKernel(r2, e2, function() {
        return f2();
      }) : f2();
    }), h2 && this.addTapeNode(r2, e2, s2, n2, c2), this.state.profiling && this.state.activeProfile.kernels.push({ name: r2, bytesAdded: this.state.numBytes - p2, totalBytesSnapshot: this.state.numBytes, tensorsAdded: this.state.numTensors - v2, totalTensorsSnapshot: this.state.numTensors, inputShapes: Object.keys(e2).map(function(t4) {
      return e2[t4].shape;
    }), outputShapes: s2.map(function(t4) {
      return t4.shape;
    }) }), Array.isArray(m2) ? s2 : s2[0];
  }, t2.prototype.makeTensor = function(t3, e2, n2, r2) {
    if (null == t3)
      throw new Error("Values passed to engine.makeTensor() are null");
    n2 = n2 || "float32", r2 = r2 || this.backend;
    var o2 = t3;
    "string" === n2 && H(t3[0]) && (o2 = t3.map(function(t4) {
      return rt(t4);
    }));
    var a2 = r2.write(o2, e2, n2), i2 = new wt(e2, n2, a2, this.nextTensorId());
    if (this.incRef(i2, r2), "string" === n2) {
      var s2 = this.state.tensorInfo.get(a2), u2 = G(o2);
      this.state.numBytes += u2 - s2.bytes, s2.bytes = u2;
    }
    return i2;
  }, t2.prototype.makeTensorFromDataId = function(t3, e2, n2, r2) {
    var o2 = new wt(e2, n2 = n2 || "float32", t3, this.nextTensorId());
    return this.incRef(o2, r2), o2;
  }, t2.prototype.makeVariable = function(t3, e2, n2, r2) {
    void 0 === e2 && (e2 = true), n2 = n2 || this.nextVariableId().toString(), null != r2 && r2 !== t3.dtype && (t3 = t3.asType(r2));
    var o2 = new St(t3, e2, n2, this.nextTensorId());
    if (null != this.state.registeredVariables[o2.name])
      throw new Error("Variable with name " + o2.name + " was already registered");
    return this.state.registeredVariables[o2.name] = o2, this.incRef(o2, this.backend), o2;
  }, t2.prototype.incRef = function(t3, e2) {
    var n2 = this.state.tensorInfo.has(t3.dataId) ? this.state.tensorInfo.get(t3.dataId).refCount : 0;
    if (this.state.numTensors++, "string" === t3.dtype && this.state.numStringTensors++, 0 === n2) {
      this.state.numDataBuffers++;
      var r2 = 0;
      "complex64" !== t3.dtype && "string" !== t3.dtype && (r2 = t3.size * z(t3.dtype)), this.state.tensorInfo.set(t3.dataId, { backend: e2 || this.backend, dtype: t3.dtype, shape: t3.shape, bytes: r2, refCount: 0 }), this.state.numBytes += r2;
    }
    this.state.tensorInfo.get(t3.dataId).refCount++, t3 instanceof St || this.track(t3);
  }, t2.prototype.disposeTensor = function(t3) {
    if (this.state.tensorInfo.has(t3.dataId)) {
      this.state.numTensors--, "string" === t3.dtype && this.state.numStringTensors--;
      var e2 = this.state.tensorInfo.get(t3.dataId);
      e2.refCount <= 1 ? ("complex64" !== t3.dtype && (this.state.numBytes -= e2.bytes), this.state.numDataBuffers--, e2.backend.disposeData(t3.dataId), this.state.tensorInfo.delete(t3.dataId)) : this.state.tensorInfo.get(t3.dataId).refCount--;
    }
  }, t2.prototype.disposeVariables = function() {
    for (var t3 in this.state.registeredVariables) {
      var e2 = this.state.registeredVariables[t3];
      this.disposeVariable(e2);
    }
  }, t2.prototype.disposeVariable = function(t3) {
    this.disposeTensor(t3), null != this.state.registeredVariables[t3.name] && delete this.state.registeredVariables[t3.name];
  }, t2.prototype.memory = function() {
    var t3 = this.backend.memory();
    return t3.numTensors = this.state.numTensors, t3.numDataBuffers = this.state.numDataBuffers, t3.numBytes = this.state.numBytes, this.state.numStringTensors > 0 && (t3.unreliable = true, null == t3.reasons && (t3.reasons = []), t3.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")), t3;
  }, t2.prototype.profile = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2;
      return r(this, function(r2) {
        return this.state.profiling = true, e2 = this.state.numBytes, n2 = this.state.numTensors, this.state.activeProfile.kernels = [], this.state.activeProfile.result = t3(), this.state.profiling = false, this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map(function(t4) {
          return t4.totalBytesSnapshot;
        })), this.state.activeProfile.newBytes = this.state.numBytes - e2, this.state.activeProfile.newTensors = this.state.numTensors - n2, [2, this.state.activeProfile];
      });
    });
  }, t2.prototype.isTapeOn = function() {
    return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth;
  }, t2.prototype.addTapeNode = function(t3, e2, n2, r2, o2) {
    var a2 = this, i2 = { id: this.state.nextTapeNodeId++, kernelName: t3, inputs: e2, outputs: n2, saved: o2 }, s2 = h(t3);
    null != s2 && (r2 = s2.gradFunc), null != r2 && (i2.gradient = function(t4) {
      return t4 = t4.map(function(t5, e3) {
        if (null == t5) {
          var r3 = n2[e3], o3 = tt(r3.size, r3.dtype);
          return a2.makeTensor(o3, r3.shape, r3.dtype);
        }
        return t5;
      }), r2(t4.length > 1 ? t4 : t4[0], o2);
    }), this.state.activeTape.push(i2);
  }, t2.prototype.keep = function(t3) {
    return t3.kept = true, t3;
  }, t2.prototype.startTape = function() {
    0 === this.state.gradientDepth && (this.state.activeTape = []), this.state.gradientDepth++;
  }, t2.prototype.endTape = function() {
    this.state.gradientDepth--;
  }, t2.prototype.startScope = function(t3) {
    var e2 = { track: [], name: "unnamed scope", id: this.state.nextScopeId++ };
    t3 && (e2.name = t3), this.state.scopeStack.push(e2), this.state.activeScope = e2;
  }, t2.prototype.endScope = function(t3) {
    for (var e2 = this, n2 = _t(t3), r2 = new Set(n2.map(function(t4) {
      return t4.id;
    })), o2 = 0; o2 < this.state.activeScope.track.length; o2++) {
      var a2 = this.state.activeScope.track[o2];
      a2.kept || r2.has(a2.id) || a2.dispose();
    }
    var i2 = this.state.scopeStack.pop();
    this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1], n2.forEach(function(t4) {
      t4.kept || t4.scopeId !== i2.id || e2.track(t4);
    });
  }, t2.prototype.gradients = function(t3, e2, n2, r2) {
    var o2 = this;
    if (void 0 === r2 && (r2 = false), C(e2.length > 0, function() {
      return "gradients() received an empty list of xs.";
    }), null != n2 && "float32" !== n2.dtype)
      throw new Error("dy must have 'float32' dtype, but has '" + n2.dtype + "'");
    var a2 = this.scopedRun(function() {
      return o2.startTape();
    }, function() {
      return o2.endTape();
    }, function() {
      return o2.tidy("forward", t3);
    });
    C(a2 instanceof wt, function() {
      return "The result y returned by f() must be a tensor.";
    });
    var i2 = function(t4, e3, n3) {
      for (var r3 = {}, o3 = {}, a3 = 0; a3 < e3.length; a3++)
        r3[e3[a3].id] = true;
      for (a3 = 0; a3 < t4.length; a3++) {
        var i3 = (p2 = t4[a3]).inputs;
        for (var s2 in i3) {
          for (var u2 = i3[s2], c2 = false, l2 = 0; l2 < e3.length; l2++)
            if (r3[u2.id]) {
              p2.outputs.forEach(function(t5) {
                return r3[t5.id] = true;
              }), c2 = true, o3[p2.id] = true;
              break;
            }
          if (c2)
            break;
        }
      }
      var h2 = {};
      h2[n3.id] = true;
      var f2 = {};
      for (a3 = t4.length - 1; a3 >= 0; a3--)
        for (i3 = (p2 = t4[a3]).inputs, l2 = 0; l2 < p2.outputs.length; l2++)
          if (h2[p2.outputs[l2].id]) {
            for (var s2 in i3)
              h2[i3[s2].id] = true, f2[p2.id] = true;
            break;
          }
      var d2 = [];
      for (a3 = 0; a3 < t4.length; a3++) {
        var p2;
        if (o3[(p2 = t4[a3]).id] && f2[p2.id]) {
          var v2 = {};
          for (var s2 in p2.inputs) {
            var m2 = p2.inputs[s2];
            r3[m2.id] && (v2[s2] = m2);
          }
          var g2 = Object.assign({}, p2);
          g2.inputs = v2, g2.outputs = p2.outputs, d2.push(g2);
        }
      }
      return d2;
    }(this.state.activeTape, e2, a2);
    if (!r2 && 0 === i2.length && e2.length > 0)
      throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
    return this.tidy("backward", function() {
      var t4, r3, s2 = {};
      s2[a2.id] = null == n2 ? (t4 = a2.shape, r3 = Z(k(t4), "float32"), Lt.makeTensor(r3, t4, "float32")) : n2, function(t5, e3, n3) {
        for (var r4 = function(r5) {
          var o4 = e3[r5], a3 = [];
          if (o4.outputs.forEach(function(e4) {
            var n4 = t5[e4.id];
            null != n4 ? a3.push(n4) : a3.push(null);
          }), null == o4.gradient)
            throw new Error("Cannot compute gradient: gradient function not found for " + o4.kernelName + ".");
          var i3 = o4.gradient(a3), s3 = function(e4) {
            if (!(e4 in i3))
              throw new Error("Cannot backprop through input " + e4 + ". Available gradients found: " + Object.keys(i3) + ".");
            var r6 = n3(function() {
              return i3[e4]();
            });
            if ("float32" !== r6.dtype)
              throw new Error("Error in gradient for op " + o4.kernelName + ". The gradient of input " + e4 + " must have 'float32' dtype, but has '" + r6.dtype + "'");
            var a4 = o4.inputs[e4];
            if (!S(r6.shape, a4.shape))
              throw new Error("Error in gradient for op " + o4.kernelName + ". The gradient of input '" + e4 + "' has shape '" + r6.shape + "', which does not match the shape of the input '" + a4.shape + "'");
            if (null == t5[a4.id])
              t5[a4.id] = r6;
            else {
              var s4 = t5[a4.id];
              t5[a4.id] = s4.add(r6), s4.dispose();
            }
          };
          for (var u3 in o4.inputs)
            s3(u3);
        }, o3 = e3.length - 1; o3 >= 0; o3--)
          r4(o3);
      }(s2, i2, function(t5) {
        return o2.tidy(t5);
      });
      var u2 = e2.map(function(t5) {
        return s2[t5.id];
      });
      return 0 === o2.state.gradientDepth && (o2.state.activeTape.forEach(function(t5) {
        for (var e3 = 0, n3 = t5.saved; e3 < n3.length; e3++) {
          n3[e3].dispose();
        }
      }), o2.state.activeTape = null), { value: a2, grads: u2 };
    });
  }, t2.prototype.customGrad = function(t3) {
    var e2 = this;
    return C(X(t3), function() {
      return "The f passed in customGrad(f) must be a function.";
    }), function() {
      for (var n2, r2 = [], o2 = 0; o2 < arguments.length; o2++)
        r2[o2] = arguments[o2];
      C(r2.every(function(t4) {
        return t4 instanceof wt;
      }), function() {
        return "The args passed in customGrad(f)(x1, x2,...) must all be tensors";
      });
      var a2 = {};
      return r2.forEach(function(t4, e3) {
        a2[e3] = t4;
      }), e2.runKernelFunc(function(e3, o3) {
        return C((n2 = t3.apply(void 0, r2.concat([o3]))).value instanceof wt, function() {
          return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor";
        }), C(X(n2.gradFunc), function() {
          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.";
        }), n2.value;
      }, a2, function(t4, e3) {
        var o3 = n2.gradFunc(t4, e3), a3 = Array.isArray(o3) ? o3 : [o3];
        C(a3.length === r2.length, function() {
          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).";
        }), C(a3.every(function(t5) {
          return t5 instanceof wt;
        }), function() {
          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.";
        });
        var i2 = {};
        return a3.forEach(function(t5, e4) {
          i2[e4] = function() {
            return t5;
          };
        }), i2;
      });
    };
  }, t2.prototype.readSync = function(t3) {
    return this.state.tensorInfo.get(t3).backend.readSync(t3);
  }, t2.prototype.read = function(t3) {
    return this.state.tensorInfo.get(t3).backend.read(t3);
  }, t2.prototype.time = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return e2 = et(), [4, this.backend.time(t3)];
          case 1:
            return (n2 = r2.sent()).wallMs = et() - e2, [2, n2];
        }
      });
    });
  }, t2.prototype.track = function(t3) {
    return null != this.state.activeScope && (t3.scopeId = this.state.activeScope.id, this.state.activeScope.track.push(t3)), t3;
  }, Object.defineProperty(t2.prototype, "registeredVariables", { get: function() {
    return this.state.registeredVariables;
  }, enumerable: true, configurable: true }), t2.prototype.reset = function() {
    for (var t3 in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this.state = new Bt(), this.registry)
      this.disposeRegisteredKernels(t3), this.registry[t3].dispose(), delete this.registry[t3];
    this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null;
  }, t2.nextTensorId = 0, t2.nextVariableId = 0, t2;
}();
var Lt = function() {
  var t2 = function() {
    if (null == Ot) {
      var t3 = void 0;
      if ("undefined" != typeof window)
        t3 = window;
      else if ("undefined" != typeof global)
        t3 = global;
      else if ("undefined" != typeof process)
        t3 = process;
      else {
        if ("undefined" == typeof self)
          throw new Error("Could not find a global object");
        t3 = self;
      }
      Ot = t3;
    }
    return Ot;
  }();
  if (null == t2._tfengine) {
    var e2 = new o(t2);
    t2._tfengine = new Pt(e2);
  }
  return function(t3) {
    s = t3;
  }(t2._tfengine.ENV), yt = function() {
    return t2._tfengine;
  }, t2._tfengine;
}();
function Wt() {
  return "undefined" != typeof window && null != window.document || "undefined" != typeof WorkerGlobalScope;
}
var Ut = i();
Ut.registerFlag("DEBUG", function() {
  return false;
}, function(t2) {
  t2 && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");
}), Ut.registerFlag("IS_BROWSER", function() {
  return Wt();
}), Ut.registerFlag("IS_NODE", function() {
  return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
}), Ut.registerFlag("IS_CHROME", function() {
  return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}), Ut.registerFlag("PROD", function() {
  return false;
}), Ut.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", function() {
  return Ut.getBool("DEBUG");
}), Ut.registerFlag("DEPRECATION_WARNINGS_ENABLED", function() {
  return true;
}), Ut.registerFlag("IS_TEST", function() {
  return false;
});
var Vt;
var zt;
var Gt;
var Ht = {};
var qt = { alpha: false, antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: false, depth: false, stencil: false, failIfMajorPerformanceCaveat: true };
function Kt(t2, e2) {
  Ht[t2] = e2;
}
function jt(t2) {
  t2 in Ht || (Ht[t2] = function(t3) {
    if (1 !== t3 && 2 !== t3)
      throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
    var e3 = function(t4) {
      if ("undefined" != typeof OffscreenCanvas && 2 === t4)
        return new OffscreenCanvas(300, 150);
      if ("undefined" != typeof document)
        return document.createElement("canvas");
      throw new Error("Cannot create a canvas in this context");
    }(t3);
    if (e3.addEventListener("webglcontextlost", function(e4) {
      e4.preventDefault(), delete Ht[t3];
    }, false), 1 === t3)
      return e3.getContext("webgl", qt) || e3.getContext("experimental-webgl", qt);
    return e3.getContext("webgl2", qt);
  }(t2));
  var e2 = Ht[t2];
  return e2.isContextLost() ? (delete Ht[t2], jt(t2)) : (e2.disable(e2.DEPTH_TEST), e2.disable(e2.STENCIL_TEST), e2.disable(e2.BLEND), e2.disable(e2.DITHER), e2.disable(e2.POLYGON_OFFSET_FILL), e2.disable(e2.SAMPLE_COVERAGE), e2.enable(e2.SCISSOR_TEST), e2.enable(e2.CULL_FACE), e2.cullFace(e2.BACK), Ht[t2]);
}
function Xt(t2, e2) {
  return [e2, t2];
}
function Yt(t2) {
  var e2 = k(t2);
  return T(Math.ceil(e2 / 4));
}
function $t(t2, e2) {
  return [Math.max(1, Math.ceil(e2 / 2)), Math.max(1, Math.ceil(t2 / 2))];
}
function Qt(t2, e2) {
  var n2, r2, o2, a2, s2, u2, c2, l2, h2, f2 = t2;
  return 2 === i().getNumber("WEBGL_VERSION") ? (n2 = f2.R32F, r2 = f2.R16F, o2 = f2.RGBA16F, a2 = f2.RGBA32F, s2 = f2.RED, u2 = 4, c2 = 1, l2 = f2.HALF_FLOAT, h2 = f2.FLOAT) : (n2 = t2.RGBA, r2 = t2.RGBA, o2 = t2.RGBA, a2 = f2.RGBA, s2 = t2.RGBA, u2 = 4, c2 = 4, l2 = null != e2 ? e2.HALF_FLOAT_OES : null, h2 = t2.FLOAT), { internalFormatFloat: n2, internalFormatHalfFloat: r2, internalFormatPackedHalfFloat: o2, internalFormatPackedFloat: a2, textureFormatFloat: s2, downloadTextureFormat: t2.RGBA, downloadUnpackNumChannels: u2, defaultNumChannels: c2, textureTypeHalfFloat: l2, textureTypeFloat: h2 };
}
function Jt(t2, e2, n2) {
  var r2 = n2();
  return e2 && function(t3) {
    var e3 = t3.getError();
    if (e3 !== t3.NO_ERROR)
      throw new Error("WebGL Error: " + ne(t3, e3));
  }(t2), r2;
}
!function(t2) {
  t2[t2.DENSE = 0] = "DENSE", t2[t2.SHARED_BATCH = 1] = "SHARED_BATCH";
}(Vt || (Vt = {})), function(t2) {
  t2[t2.RENDER = 0] = "RENDER", t2[t2.UPLOAD = 1] = "UPLOAD", t2[t2.PIXELS = 2] = "PIXELS", t2[t2.DOWNLOAD = 3] = "DOWNLOAD";
}(zt || (zt = {})), function(t2) {
  t2[t2.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", t2[t2.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", t2[t2.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", t2[t2.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", t2[t2.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16";
}(Gt || (Gt = {}));
var Zt = 596e-10;
var te = 65504;
function ee(t2) {
  return !!(i().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === t2 || Zt < Math.abs(t2) && Math.abs(t2) < te);
}
function ne(t2, e2) {
  switch (e2) {
    case t2.NO_ERROR:
      return "NO_ERROR";
    case t2.INVALID_ENUM:
      return "INVALID_ENUM";
    case t2.INVALID_VALUE:
      return "INVALID_VALUE";
    case t2.INVALID_OPERATION:
      return "INVALID_OPERATION";
    case t2.INVALID_FRAMEBUFFER_OPERATION:
      return "INVALID_FRAMEBUFFER_OPERATION";
    case t2.OUT_OF_MEMORY:
      return "OUT_OF_MEMORY";
    case t2.CONTEXT_LOST_WEBGL:
      return "CONTEXT_LOST_WEBGL";
    default:
      return "Unknown error code " + e2;
  }
}
function re(t2, e2, n2) {
  return ke(t2, e2, function() {
    return t2.getExtension(n2);
  }, 'Extension "' + n2 + '" not supported on this browser.');
}
function oe(t2, e2, n2) {
  var r2 = ke(t2, e2, function() {
    return t2.createShader(t2.VERTEX_SHADER);
  }, "Unable to create vertex WebGLShader.");
  if (Jt(t2, e2, function() {
    return t2.shaderSource(r2, n2);
  }), Jt(t2, e2, function() {
    return t2.compileShader(r2);
  }), false === t2.getShaderParameter(r2, t2.COMPILE_STATUS))
    throw console.log(t2.getShaderInfoLog(r2)), new Error("Failed to compile vertex shader.");
  return r2;
}
function ae(t2, e2, n2) {
  var r2 = ke(t2, e2, function() {
    return t2.createShader(t2.FRAGMENT_SHADER);
  }, "Unable to create fragment WebGLShader.");
  if (Jt(t2, e2, function() {
    return t2.shaderSource(r2, n2);
  }), Jt(t2, e2, function() {
    return t2.compileShader(r2);
  }), false === t2.getShaderParameter(r2, t2.COMPILE_STATUS))
    throw function(t3, e3) {
      var n3 = ue.exec(e3);
      if (null == n3)
        return console.log("Couldn't parse line number in error: " + e3), void console.log(t3);
      for (var r3 = +n3[1], o2 = t3.split("\n"), a2 = o2.length.toString().length + 2, i2 = o2.map(function(t4, e4) {
        return N((e4 + 1).toString(), a2) + t4;
      }), s2 = 0, u2 = 0; u2 < i2.length; u2++)
        s2 = Math.max(i2[u2].length, s2);
      var c2 = i2.slice(0, r3 - 1), l2 = i2.slice(r3 - 1, r3), h2 = i2.slice(r3);
      console.log(c2.join("\n")), console.log(e3.split("\n")[0]), console.log("%c " + N(l2[0], s2), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(h2.join("\n"));
    }(n2, t2.getShaderInfoLog(r2)), new Error("Failed to compile fragment shader.");
  return r2;
}
var ie;
var se;
var ue = /ERROR: [0-9]+:([0-9]+):/g;
function ce(t2, e2) {
  return ke(t2, e2, function() {
    return t2.createProgram();
  }, "Unable to create WebGLProgram.");
}
function le(t2, e2, n2) {
  if (Jt(t2, e2, function() {
    return t2.linkProgram(n2);
  }), false === t2.getProgramParameter(n2, t2.LINK_STATUS))
    throw console.log(t2.getProgramInfoLog(n2)), new Error("Failed to link vertex and fragment shaders.");
}
function he(t2, e2, n2) {
  if (Jt(t2, e2, function() {
    return t2.validateProgram(n2);
  }), false === t2.getProgramParameter(n2, t2.VALIDATE_STATUS))
    throw console.log(t2.getProgramInfoLog(n2)), new Error("Shader program validation failed.");
}
function fe(t2, e2, n2) {
  var r2 = ke(t2, e2, function() {
    return t2.createBuffer();
  }, "Unable to create WebGLBuffer");
  return Jt(t2, e2, function() {
    return t2.bindBuffer(t2.ARRAY_BUFFER, r2);
  }), Jt(t2, e2, function() {
    return t2.bufferData(t2.ARRAY_BUFFER, n2, t2.STATIC_DRAW);
  }), r2;
}
function de(t2, e2, n2) {
  var r2 = ke(t2, e2, function() {
    return t2.createBuffer();
  }, "Unable to create WebGLBuffer");
  return Jt(t2, e2, function() {
    return t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, r2);
  }), Jt(t2, e2, function() {
    return t2.bufferData(t2.ELEMENT_ARRAY_BUFFER, n2, t2.STATIC_DRAW);
  }), r2;
}
function pe(t2, e2) {
  return ke(t2, e2, function() {
    return t2.createTexture();
  }, "Unable to create WebGLTexture.");
}
function ve(t2, e2) {
  var n2 = i().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (t2 <= 0 || e2 <= 0) {
    var r2 = "[" + t2 + "x" + e2 + "]";
    throw new Error("Requested texture size " + r2 + " is invalid.");
  }
  if (t2 > n2 || e2 > n2) {
    r2 = "[" + t2 + "x" + e2 + "]";
    throw new Error("Requested texture size " + r2 + " greater than WebGL maximum on this browser / GPU " + ("[" + n2 + "x" + n2 + "]") + ".");
  }
}
function me(t2, e2) {
  return ke(t2, e2, function() {
    return t2.createFramebuffer();
  }, "Unable to create WebGLFramebuffer.");
}
function ge(t2, e2, n2, r2, o2, a2, i2, s2) {
  var u2 = t2.getAttribLocation(n2, r2);
  return -1 !== u2 && (Jt(t2, e2, function() {
    return t2.bindBuffer(t2.ARRAY_BUFFER, o2);
  }), Jt(t2, e2, function() {
    return t2.vertexAttribPointer(u2, a2, t2.FLOAT, false, i2, s2);
  }), Jt(t2, e2, function() {
    return t2.enableVertexAttribArray(u2);
  }), true);
}
function ye(t2, e2, n2, r2) {
  Se(t2, r2), Jt(t2, e2, function() {
    return t2.activeTexture(t2.TEXTURE0 + r2);
  }), Jt(t2, e2, function() {
    return t2.bindTexture(t2.TEXTURE_2D, n2);
  });
}
function xe(t2, e2, n2, r2) {
  return ke(t2, e2, function() {
    return t2.getUniformLocation(n2, r2);
  }, 'uniform "' + r2 + '" not present in program.');
}
function be(t2, e2, n2) {
  return t2.getUniformLocation(e2, n2);
}
function we(t2, e2, n2, r2, o2, a2) {
  Jt(t2, e2, function() {
    return ye(t2, e2, r2, a2);
  }), Jt(t2, e2, function() {
    return t2.uniform1i(o2, a2);
  });
}
function Ce(t2, e2, n2, r2) {
  Jt(t2, e2, function() {
    return t2.bindFramebuffer(t2.FRAMEBUFFER, r2);
  }), Jt(t2, e2, function() {
    return t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, n2, 0);
  });
}
function Ee(t2, e2, n2) {
  Jt(t2, e2, function() {
    return t2.bindFramebuffer(t2.FRAMEBUFFER, n2);
  }), Jt(t2, e2, function() {
    return t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, null, 0);
  });
}
function Re(t2) {
  var e2 = t2.checkFramebufferStatus(t2.FRAMEBUFFER);
  if (e2 !== t2.FRAMEBUFFER_COMPLETE)
    throw new Error("Error binding framebuffer: " + Ie(t2, e2));
}
function Ie(t2, e2) {
  switch (e2) {
    case t2.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case t2.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case t2.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case t2.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    default:
      return "unknown error " + e2;
  }
}
function ke(t2, e2, n2, r2) {
  var o2 = Jt(t2, e2, function() {
    return n2();
  });
  if (null == o2)
    throw new Error(r2);
  return o2;
}
function Se(t2, e2) {
  var n2 = t2.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, r2 = e2 + t2.TEXTURE0;
  if (r2 < t2.TEXTURE0 || r2 > n2)
    throw new Error("textureUnit must be in " + ("[gl.TEXTURE0, gl.TEXTURE" + n2 + "]") + ".");
}
function Ae(t2, e2) {
  return void 0 === e2 && (e2 = 2), k(t2.slice(0, t2.length - e2));
}
function De(t2) {
  if (0 === t2.length)
    throw Error("Cannot get rows and columns of an empty shape array.");
  return [t2.length > 1 ? t2[t2.length - 2] : 1, t2[t2.length - 1]];
}
function Te(t2) {
  var e2 = [1, 1, 1];
  return 0 === t2.length || 1 === t2.length && 1 === t2[0] || (e2 = [Ae(t2)].concat(De(t2))), e2;
}
function Ne(t2, e2) {
  var n2;
  void 0 === e2 && (e2 = false);
  var r2 = i().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (e2 && (r2 *= 2, 1 === (t2 = t2.map(function(e3, n3) {
    return n3 >= t2.length - 2 ? b(t2[n3]) : t2[n3];
  })).length && (t2 = [2, t2[0]])), 2 !== t2.length) {
    var o2 = M(t2);
    t2 = o2.newShape;
  }
  var a2 = k(t2);
  if (t2.length <= 1 && a2 <= r2)
    return [1, a2];
  if (2 === t2.length && t2[0] <= r2 && t2[1] <= r2)
    return t2;
  if (3 === t2.length && t2[0] * t2[1] <= r2 && t2[2] <= r2)
    return [t2[0] * t2[1], t2[2]];
  if (3 === t2.length && t2[0] <= r2 && t2[1] * t2[2] <= r2)
    return [t2[0], t2[1] * t2[2]];
  if (4 === t2.length && t2[0] * t2[1] * t2[2] <= r2 && t2[3] <= r2)
    return [t2[0] * t2[1] * t2[2], t2[3]];
  if (4 === t2.length && t2[0] <= r2 && t2[1] * t2[2] * t2[3] <= r2)
    return [t2[0], t2[1] * t2[2] * t2[3]];
  if (e2) {
    var s2 = Ae(t2), u2 = 2, c2 = 2;
    return t2.length && (u2 = (n2 = De(t2))[0], c2 = n2[1]), T(a2 = s2 * (u2 / 2) * (c2 / 2)).map(function(t3) {
      return 2 * t3;
    });
  }
  return T(a2);
}
function Fe(t2) {
  return t2 % 2 == 0;
}
function _e(t2, e2) {
  if (S(t2 = t2.slice(-2), e2 = e2.slice(-2)))
    return true;
  if (!t2.length || !e2.length)
    return true;
  if (0 === t2[0] || 0 === t2[1] || 0 === e2[0] || 0 === e2[1])
    return true;
  if (t2.length !== e2.length) {
    var n2 = t2.slice(-1)[0], r2 = e2.slice(-1)[0];
    if (n2 === r2)
      return true;
    if (Fe(n2) && Fe(r2) && (1 === t2[0] || 1 === e2[0]))
      return true;
  }
  return t2[1] === e2[1] && Fe(t2[0]) && Fe(e2[0]);
}
function Oe(t2) {
  if (null == ie) {
    var e2 = jt(t2);
    ie = e2.getParameter(e2.MAX_TEXTURE_SIZE);
  }
  return ie;
}
function Me(t2) {
  if (null == se) {
    var e2 = jt(t2);
    se = e2.getParameter(e2.MAX_TEXTURE_IMAGE_UNITS);
  }
  return Math.min(16, se);
}
function Be(t2) {
  if (0 === t2)
    return 0;
  var e2 = jt(t2);
  return Pe(e2, "EXT_disjoint_timer_query_webgl2") && 2 === t2 ? 2 : Pe(e2, "EXT_disjoint_timer_query") ? 1 : 0;
}
function Pe(t2, e2) {
  return null != t2.getExtension(e2);
}
function Le(t2) {
  try {
    if (null != jt(t2))
      return true;
  } catch (t3) {
    return false;
  }
  return false;
}
function We(t2) {
  if (0 === t2)
    return false;
  var e2 = jt(t2);
  if (1 === t2) {
    if (!Pe(e2, "OES_texture_float"))
      return false;
  } else if (!Pe(e2, "EXT_color_buffer_float"))
    return false;
  return Ve(e2);
}
function Ue(t2) {
  if (0 === t2)
    return false;
  var e2 = jt(t2);
  if (1 !== t2) {
    if (Pe(e2, "EXT_color_buffer_float"))
      return Ve(e2);
    if (Pe(e2, "EXT_color_buffer_half_float")) {
      var n2 = e2.getExtension("EXT_color_buffer_half_float");
      return function(t3, e3) {
        var n3 = Qt(t3, e3), r2 = t3.createTexture();
        t3.bindTexture(t3.TEXTURE_2D, r2);
        t3.texImage2D(t3.TEXTURE_2D, 0, n3.internalFormatHalfFloat, 1, 1, 0, n3.textureFormatFloat, n3.textureTypeHalfFloat, null);
        var o2 = t3.createFramebuffer();
        t3.bindFramebuffer(t3.FRAMEBUFFER, o2), t3.framebufferTexture2D(t3.FRAMEBUFFER, t3.COLOR_ATTACHMENT0, t3.TEXTURE_2D, r2, 0);
        var a2 = t3.checkFramebufferStatus(t3.FRAMEBUFFER) === t3.FRAMEBUFFER_COMPLETE;
        return t3.bindTexture(t3.TEXTURE_2D, null), t3.bindFramebuffer(t3.FRAMEBUFFER, null), t3.deleteTexture(r2), t3.deleteFramebuffer(o2), a2;
      }(e2, n2);
    }
    return false;
  }
  return !!Pe(e2, "OES_texture_float") && (!!Pe(e2, "WEBGL_color_buffer_float") && Ve(e2));
}
function Ve(t2) {
  var e2 = Qt(t2), n2 = t2.createTexture();
  t2.bindTexture(t2.TEXTURE_2D, n2);
  t2.texImage2D(t2.TEXTURE_2D, 0, e2.internalFormatFloat, 1, 1, 0, e2.textureFormatFloat, e2.textureTypeFloat, null);
  var r2 = t2.createFramebuffer();
  t2.bindFramebuffer(t2.FRAMEBUFFER, r2), t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, n2, 0);
  var o2 = t2.checkFramebufferStatus(t2.FRAMEBUFFER) === t2.FRAMEBUFFER_COMPLETE;
  return t2.bindTexture(t2.TEXTURE_2D, null), t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.deleteTexture(n2), t2.deleteFramebuffer(r2), o2;
}
function ze(t2) {
  return 2 === t2 && null != jt(t2).fenceSync;
}
var Ge = Object.freeze({ callAndCheck: Jt, canBeRepresented: ee, getWebGLErrorMessage: ne, getExtensionOrThrow: re, createVertexShader: oe, createFragmentShader: ae, createProgram: ce, linkProgram: le, validateProgram: he, createStaticVertexBuffer: fe, createStaticIndexBuffer: de, getNumChannels: function() {
  return 2 === i().getNumber("WEBGL_VERSION") ? 1 : 4;
}, createTexture: pe, validateTextureSize: ve, createFramebuffer: me, bindVertexBufferToProgramAttribute: ge, bindTextureUnit: ye, unbindTextureUnit: function(t2, e2, n2) {
  Se(t2, n2), Jt(t2, e2, function() {
    return t2.activeTexture(t2.TEXTURE0 + n2);
  }), Jt(t2, e2, function() {
    return t2.bindTexture(t2.TEXTURE_2D, null);
  });
}, getProgramUniformLocationOrThrow: xe, getProgramUniformLocation: be, bindTextureToProgramUniformSampler: we, bindCanvasToFramebuffer: function(t2, e2) {
  Jt(t2, e2, function() {
    return t2.bindFramebuffer(t2.FRAMEBUFFER, null);
  }), Jt(t2, e2, function() {
    return t2.viewport(0, 0, t2.canvas.width, t2.canvas.height);
  }), Jt(t2, e2, function() {
    return t2.scissor(0, 0, t2.canvas.width, t2.canvas.height);
  });
}, bindColorTextureToFramebuffer: Ce, unbindColorTextureFromFramebuffer: Ee, validateFramebuffer: Re, getFramebufferErrorMessage: Ie, getBatchDim: Ae, getRowsCols: De, getShapeAs3D: Te, getTextureShapeFromLogicalShape: Ne, isReshapeFree: _e, getWebGLMaxTextureSize: Oe, resetMaxTextureSize: function() {
  ie = null;
}, resetMaxTexturesInShader: function() {
  se = null;
}, getMaxTexturesInShader: Me, getWebGLDisjointQueryTimerVersion: Be, hasExtension: Pe, isWebGLVersionEnabled: Le, isCapableOfRenderingToFloatTexture: We, isDownloadFloatTextureEnabled: Ue, isWebGLFenceEnabled: ze });
var He = i();
function qe() {
  i().set("PROD", true);
}
function Ke() {
  i().set("DEBUG", true);
}
function je() {
  i().set("DEPRECATION_WARNINGS_ENABLED", false), console.warn("TensorFlow.js deprecation warnings have been disabled.");
}
function Xe(t2) {
  i().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(t2 + " You can disable deprecation warnings with tf.disableDeprecationWarnings().");
}
function Ye() {
  Lt.disposeVariables();
}
function $e() {
  return Lt;
}
function Qe() {
  return Lt.memory();
}
function Je(t2) {
  return Lt.profile(t2);
}
function Ze(t2, e2) {
  return Lt.tidy(t2, e2);
}
function tn(t2) {
  _t(t2).forEach(function(t3) {
    return t3.dispose();
  });
}
function en(t2) {
  return Lt.keep(t2);
}
function nn(t2) {
  return Lt.time(t2);
}
function rn(t2) {
  return Lt.setBackend(t2);
}
function on() {
  return Lt.ready();
}
function an() {
  return Lt.backendName;
}
function sn(t2) {
  Lt.removeBackend(t2);
}
function un(t2) {
  return Lt.findBackend(t2);
}
function cn(t2) {
  return Lt.findBackendFactory(t2);
}
function ln(t2, e2, n2) {
  return void 0 === n2 && (n2 = 1), Lt.registerBackend(t2, e2, n2);
}
function hn() {
  return Lt.backend;
}
function fn(t2, e2) {
  i().setPlatform(t2, e2);
}
function dn() {
  for (var t2 = [], e2 = 0; e2 < arguments.length; e2++)
    t2[e2] = arguments[e2];
  i().getBool("IS_TEST") || console.warn.apply(console, t2);
}
function pn(t2, e2) {
  var n2 = t2;
  if (V(t2))
    return "string" === e2 ? [] : [t2.length];
  if (!Array.isArray(t2))
    return [];
  for (var r2 = []; Array.isArray(n2) || V(n2) && "string" !== e2; )
    r2.push(n2.length), n2 = n2[0];
  return Array.isArray(t2) && i().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function t3(e3, n3, r3) {
    if (r3 = r3 || [], !Array.isArray(e3) && !V(e3))
      return void C(0 === n3.length, function() {
        return "Element arr[" + r3.join("][") + "] is a primitive, but should be an array/TypedArray of " + n3[0] + " elements";
      });
    C(n3.length > 0, function() {
      return "Element arr[" + r3.join("][") + "] should be a primitive, but is an array of " + e3.length + " elements";
    }), C(e3.length === n3[0], function() {
      return "Element arr[" + r3.join("][") + "] should have " + n3[0] + " elements, but has " + e3.length + " elements";
    });
    for (var o2 = n3.slice(1), a2 = 0; a2 < e3.length; ++a2)
      t3(e3[a2], o2, r3.concat(a2));
  }(t2, r2, []), r2;
}
function vn(t2, e2, n2, r2) {
  if (null != t2 && ("numeric" !== t2 && t2 !== e2 || "numeric" === t2 && "string" === e2))
    throw new Error("Argument '" + n2 + "' passed to '" + r2 + "' must be " + t2 + " tensor, but got " + e2 + " tensor");
}
function mn(t2, e2, n2, r2) {
  if (void 0 === r2 && (r2 = "numeric"), t2 instanceof wt)
    return vn(r2, t2.dtype, e2, n2), t2;
  var o2 = j(t2);
  if ("string" !== o2 && ["bool", "int32", "float32"].indexOf(r2) >= 0 && (o2 = r2), vn(r2, o2, e2, n2), null == t2 || !V(t2) && !Array.isArray(t2) && "number" != typeof t2 && "boolean" != typeof t2 && "string" != typeof t2) {
    var a2 = null == t2 ? "null" : t2.constructor.name;
    throw new Error("Argument '" + e2 + "' passed to '" + n2 + "' must be a Tensor or TensorLike, but got '" + a2 + "'");
  }
  var s2 = pn(t2, o2);
  V(t2) || Array.isArray(t2) || (t2 = [t2]);
  var u2 = "string" !== o2 ? Q(t2, o2, i().getBool("DEBUG")) : I(t2, [], true);
  return Lt.makeTensor(u2, s2, o2);
}
function gn(t2, e2, n2, r2) {
  if (void 0 === r2 && (r2 = "numeric"), !Array.isArray(t2))
    throw new Error("Argument " + e2 + " passed to " + n2 + " must be a `Tensor[]` or `TensorLike[]`");
  return t2.map(function(t3, r3) {
    return mn(t3, e2 + "[" + r3 + "]", n2);
  }, r2);
}
function yn(t2, e2) {
  for (var n2 = 0; n2 < t2.length; ++n2)
    if (t2[t2.length - n2 - 1] !== e2 - 1 - n2)
      return false;
  return true;
}
function xn(t2, e2, n2) {
  for (var r2 = t2.length + e2.length, o2 = [], a2 = 0, i2 = 0, s2 = 0; s2 < r2; s2++)
    -1 === n2.indexOf(s2) ? o2.push(t2[a2++]) : o2.push(e2[i2++]);
  return o2;
}
function bn(t2, e2) {
  for (var n2 = [], r2 = t2.length, o2 = 0; o2 < r2; o2++)
    -1 === e2.indexOf(o2) && n2.push(t2[o2]);
  return [n2, e2.map(function(e3) {
    return t2[e3];
  })];
}
function wn(t2, e2) {
  return xn(t2, e2.map(function(t3) {
    return 1;
  }), e2);
}
function Cn(t2, e2, n2) {
  C(yn(e2, n2), function() {
    return t2 + " supports only inner-most axes for now. Got axes " + e2 + " and rank-" + n2 + " input.";
  });
}
function En(t2, e2) {
  if (yn(t2, e2))
    return null;
  for (var n2 = [], r2 = 0; r2 < e2; ++r2)
    -1 === t2.indexOf(r2) && n2.push(r2);
  return t2.forEach(function(t3) {
    return n2.push(t3);
  }), n2;
}
function Rn(t2) {
  return t2.map(function(t3, e2) {
    return [e2, t3];
  }).sort(function(t3, e2) {
    return t3[1] - e2[1];
  }).map(function(t3) {
    return t3[0];
  });
}
function In(t2, e2) {
  for (var n2 = [], r2 = e2 - t2; r2 < e2; ++r2)
    n2.push(r2);
  return n2;
}
function kn(t2, e2) {
  var n2 = t2[0].length;
  t2.forEach(function(t3, e3) {
    C(t3.length === n2, function() {
      return "Error in concat" + n2 + "D: rank of tensors[" + e3 + "] must be the same as the rank of the rest (" + n2 + ")";
    });
  }), C(e2 >= 0 && e2 < n2, function() {
    return "Error in concat" + n2 + "D: axis must be between 0 and " + (n2 - 1) + ".";
  });
  var r2 = t2[0];
  t2.forEach(function(t3, o2) {
    for (var a2 = 0; a2 < n2; a2++)
      C(a2 === e2 || t3[a2] === r2[a2], function() {
        return "Error in concat" + n2 + "D: Shape of tensors[" + o2 + "] (" + t3 + ") does not match the shape of the rest (" + r2 + ") along the non-concatenated axis " + o2 + ".";
      });
  });
}
function Sn(t2, e2) {
  for (var n2 = t2[0].slice(), r2 = 1; r2 < t2.length; r2++)
    n2[e2] += t2[r2][e2];
  return n2;
}
function An(t2) {
  var e2 = Object.keys(t2);
  if (1 !== e2.length)
    throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + e2.length + " keys.");
  var n2 = e2[0], r2 = t2[n2];
  n2.endsWith("_") && (n2 = n2.substring(0, n2.length - 1));
  var o2 = function() {
    for (var t3 = [], e3 = 0; e3 < arguments.length; e3++)
      t3[e3] = arguments[e3];
    Lt.startScope(n2);
    try {
      var o3 = r2.apply(void 0, t3);
      return o3 instanceof Promise && console.error("Cannot return a Promise inside of tidy."), Lt.endScope(o3), o3;
    } catch (t4) {
      throw Lt.endScope(null), t4;
    }
  };
  return Object.defineProperty(o2, "name", { value: n2, configurable: true }), o2;
}
He.registerFlag("HAS_WEBGL", function() {
  return He.getNumber("WEBGL_VERSION") > 0;
}), He.registerFlag("WEBGL_VERSION", function() {
  return Le(2) ? 2 : Le(1) ? 1 : 0;
}), He.registerFlag("WEBGL_BUFFER_SUPPORTED", function() {
  return 2 === He.get("WEBGL_VERSION");
}), He.registerFlag("WEBGL_CPU_FORWARD", function() {
  return true;
}), He.registerFlag("WEBGL_FORCE_F16_TEXTURES", function() {
  return false;
}), He.registerFlag("WEBGL_PACK", function() {
  return He.getBool("HAS_WEBGL");
}), He.registerFlag("WEBGL_PACK_NORMALIZATION", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_PACK_CLIP", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_PACK_DEPTHWISECONV", function() {
  return false;
}), He.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_PACK_REDUCE", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_LAZILY_UNPACK", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_CONV_IM2COL", function() {
  return He.getBool("WEBGL_PACK");
}), He.registerFlag("WEBGL_MAX_TEXTURE_SIZE", function() {
  return Oe(He.getNumber("WEBGL_VERSION"));
}), He.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", function() {
  return Me(He.getNumber("WEBGL_VERSION"));
}), He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", function() {
  var t2 = He.getNumber("WEBGL_VERSION");
  return 0 === t2 ? 0 : Be(t2);
}), He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", function() {
  return He.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && (t2 = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t2) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t2.substr(0, 4))));
  var t2;
}), He.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", function() {
  return We(He.getNumber("WEBGL_VERSION"));
}), He.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", function() {
  return !He.getBool("WEBGL_FORCE_F16_TEXTURES") && He.getBool("WEBGL_RENDER_FLOAT32_CAPABLE");
}), He.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", function() {
  return Ue(He.getNumber("WEBGL_VERSION"));
}), He.registerFlag("WEBGL_FENCE_API_ENABLED", function() {
  return ze(He.getNumber("WEBGL_VERSION"));
}), He.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", function() {
  return He.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0;
}), bt = Xe;
var Dn = An({ complex_: function(t2, e2) {
  var n2 = mn(t2, "real", "complex"), r2 = mn(e2, "imag", "complex");
  return E(n2.shape, r2.shape, "real and imag shapes, " + n2.shape + " and " + r2.shape + ", must match in call to tf.complex()."), Lt.runKernelFunc(function(t3) {
    return t3.complex(n2, r2);
  }, { $real: n2, $imag: r2 });
} });
var Tn = An({ real_: function(t2) {
  var e2 = mn(t2, "input", "real");
  return Lt.runKernelFunc(function(t3) {
    return t3.real(e2);
  }, { $input: e2 });
} });
var Nn = An({ imag_: function(t2) {
  var e2 = mn(t2, "input", "imag");
  return Lt.runKernelFunc(function(t3) {
    return t3.imag(e2);
  }, { $input: e2 });
} });
function Fn(t2, e2, n2) {
  return _n(t2, e2, pn(t2, n2), n2);
}
function _n(t2, e2, n2, r2) {
  if (null == r2 && (r2 = j(t2)), "complex64" === r2)
    throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
  if (!V(t2) && !Array.isArray(t2) && "number" != typeof t2 && "boolean" != typeof t2 && "string" != typeof t2)
    throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
  if (null != e2) {
    nt(e2);
    var o2 = k(e2), a2 = k(n2);
    C(o2 === a2, function() {
      return "Based on the provided shape, [" + e2 + "], the tensor should have " + o2 + " values but has " + a2;
    });
    for (var s2 = 0; s2 < n2.length; ++s2) {
      var u2 = n2[s2], c2 = s2 !== n2.length - 1 || u2 !== k(e2.slice(s2));
      C(n2[s2] === e2[s2] || !c2, function() {
        return "Error creating a new Tensor. Inferred shape (" + n2 + ") does not match the provided shape (" + e2 + "). ";
      });
    }
  }
  return V(t2) || Array.isArray(t2) || (t2 = [t2]), e2 = e2 || n2, t2 = "string" !== r2 ? Q(t2, r2, i().getBool("DEBUG")) : I(t2, [], true), Lt.makeTensor(t2, e2, r2);
}
function On(t2, e2) {
  if ((V(t2) && "string" !== e2 || Array.isArray(t2)) && "complex64" !== e2)
    throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
  if ("string" === e2 && V(t2) && !(t2 instanceof Uint8Array))
    throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
  return _n(t2, [], [], e2);
}
function Mn(t2, e2) {
  R(t2);
  var n2 = pn(t2, e2);
  if (1 !== n2.length)
    throw new Error("tensor1d() requires values to be a flat/TypedArray");
  return _n(t2, null, n2, e2);
}
function Bn(t2, e2, n2) {
  if (R(t2), null != e2 && 2 !== e2.length)
    throw new Error("tensor2d() requires shape to have two numbers");
  var r2 = pn(t2, n2);
  if (2 !== r2.length && 1 !== r2.length)
    throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
  if (1 === r2.length && null == e2)
    throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
  return _n(t2, e2, r2, n2);
}
function Pn(t2, e2, n2) {
  if (R(t2), null != e2 && 3 !== e2.length)
    throw new Error("tensor3d() requires shape to have three numbers");
  var r2 = pn(t2, n2);
  if (3 !== r2.length && 1 !== r2.length)
    throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
  if (1 === r2.length && null == e2)
    throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
  return _n(t2, e2, r2, n2);
}
function Ln(t2, e2, n2) {
  if (R(t2), null != e2 && 4 !== e2.length)
    throw new Error("tensor4d() requires shape to have four numbers");
  var r2 = pn(t2, n2);
  if (4 !== r2.length && 1 !== r2.length)
    throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
  if (1 === r2.length && null == e2)
    throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
  return _n(t2, e2, r2, n2);
}
function Wn(t2, e2, n2) {
  if (R(t2), null != e2 && 5 !== e2.length)
    throw new Error("tensor5d() requires shape to have five numbers");
  var r2 = pn(t2, n2);
  if (5 !== r2.length && 1 !== r2.length)
    throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
  if (1 === r2.length && null == e2)
    throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
  return _n(t2, e2, r2, n2);
}
function Un(t2, e2, n2) {
  if (R(t2), null != e2 && 6 !== e2.length)
    throw new Error("tensor6d() requires shape to have six numbers");
  var r2 = pn(t2, n2);
  if (6 !== r2.length && 1 !== r2.length)
    throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
  if (1 === r2.length && null == e2)
    throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
  return _n(t2, e2 = e2 || r2, r2, n2);
}
function Vn(t2, e2, n2, r2) {
  return void 0 === e2 && (e2 = true), Lt.makeVariable(t2, e2, n2, r2);
}
function zn(t2, e2) {
  if (void 0 === e2 && (e2 = "float32"), "complex64" === e2) {
    var n2 = zn(t2, "float32"), r2 = Gn(t2, "float32");
    return Dn(n2, r2);
  }
  var o2 = Z(k(t2), e2);
  return Lt.makeTensor(o2, t2, e2);
}
function Gn(t2, e2) {
  if (void 0 === e2 && (e2 = "float32"), "complex64" === e2) {
    var n2 = Gn(t2, "float32"), r2 = Gn(t2, "float32");
    return Dn(n2, r2);
  }
  var o2 = tt(k(t2), e2);
  return Lt.makeTensor(o2, t2, e2);
}
function Hn(t2, e2, n2) {
  return Lt.runKernelFunc(function(r2) {
    return r2.fill(t2, e2, n2);
  }, {});
}
function qn(t2, e2, n2) {
  if (n2 <= 0)
    throw new Error("The number of values should be positive.");
  return Lt.runKernelFunc(function(r2) {
    return r2.linspace(t2, e2, n2);
  }, {});
}
function Kn(t2, e2, n2, r2) {
  if (void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = "float32"), 0 === n2)
    throw new Error("Cannot have a step of zero");
  if (t2 === e2 || t2 < e2 && n2 < 0 || e2 < t2 && n2 > 1)
    return Gn([0], r2);
  var o2 = tt(Math.abs(Math.ceil((e2 - t2) / n2)), r2);
  e2 < t2 && 1 === n2 && (n2 = -1), o2[0] = t2;
  for (var a2 = 1; a2 < o2.length; a2++)
    o2[a2] = o2[a2 - 1] + n2;
  return Mn(o2, r2);
}
var jn = An({ onesLike_: function(t2) {
  var e2 = mn(t2, "x", "onesLike");
  if ("complex64" === e2.dtype) {
    var n2 = jn(Tn(e2)), r2 = Xn(Nn(e2));
    return Dn(n2, r2);
  }
  return Lt.runKernelFunc(function(t3) {
    return t3.onesLike(e2);
  }, { $x: e2 }, function(t3, e3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Xn = An({ zerosLike_: function(t2) {
  var e2 = mn(t2, "x", "zerosLike");
  return Lt.runKernelFunc(function(t3) {
    return t3.zerosLike(e2);
  }, { $x: e2 }, function(t3, e3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Yn = An({ concat_: function(t2, e2) {
  void 0 === e2 && (e2 = 0), C(t2.length >= 1, function() {
    return "Pass at least one tensor to concat";
  });
  var n2 = gn(t2, "tensors", "concat");
  "complex64" === n2[0].dtype && n2.forEach(function(t3) {
    if ("complex64" !== t3.dtype)
      throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype " + t3.dtype + ". ");
  }), e2 = O(e2, n2[0].shape)[0];
  var r2 = Sn(n2.map(function(t3) {
    return t3.shape;
  }), e2);
  if (0 === k(r2))
    return Fn([], r2);
  if (1 === (n2 = n2.filter(function(t3) {
    return t3.size > 0;
  })).length)
    return n2[0];
  var o2 = n2.map(function(t3) {
    return t3.shape;
  });
  kn(o2, e2);
  var a2 = n2, i2 = { axis: e2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.concat(n2, e2);
  }, a2, function(t3) {
    var n3 = o2.map(function(t4) {
      return t4[e2];
    });
    return tr(t3, n3, e2).map(function(t4) {
      return function() {
        return t4;
      };
    });
  }, "Concat", i2);
} });
var $n = An({ concat1d_: function(t2) {
  return Yn(t2, 0);
} });
var Qn = An({ concat2d_: function(t2, e2) {
  return Yn(t2, e2);
} });
var Jn = An({ concat3d_: function(t2, e2) {
  return Yn(t2, e2);
} });
var Zn = An({ concat4d_: function(t2, e2) {
  return Yn(t2, e2);
} });
var tr = An({ split_: function(t2, e2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2, o2 = mn(t2, "x", "split");
  return n2 = O(n2, o2.shape)[0], "number" == typeof e2 ? (C(o2.shape[n2] % e2 == 0, function() {
    return "Number of splits must evenly divide the axis.";
  }), r2 = new Array(e2).fill(o2.shape[n2] / e2)) : (C(o2.shape[n2] === e2.reduce(function(t3, e3) {
    return t3 + e3;
  }), function() {
    return "The sum of sizes must match the size of the axis dimension.";
  }), r2 = e2), Lt.runKernelFunc(function(t3) {
    return t3.split(o2, r2, n2);
  }, { $x: o2 }, function(t3) {
    return { $x: function() {
      return Yn(t3, n2);
    } };
  });
} });
function er(t2, e2) {
  return t2(e2 = { exports: {} }, e2.exports), e2.exports;
}
var nr = er(function(t2) {
  !function(t3, e2, n2) {
    function r2(t4) {
      var e3, n3 = this, r3 = (e3 = 4022871197, function(t5) {
        t5 = t5.toString();
        for (var n4 = 0; n4 < t5.length; n4++) {
          var r4 = 0.02519603282416938 * (e3 += t5.charCodeAt(n4));
          r4 -= e3 = r4 >>> 0, e3 = (r4 *= e3) >>> 0, e3 += 4294967296 * (r4 -= e3);
        }
        return 23283064365386963e-26 * (e3 >>> 0);
      });
      n3.next = function() {
        var t5 = 2091639 * n3.s0 + 23283064365386963e-26 * n3.c;
        return n3.s0 = n3.s1, n3.s1 = n3.s2, n3.s2 = t5 - (n3.c = 0 | t5);
      }, n3.c = 1, n3.s0 = r3(" "), n3.s1 = r3(" "), n3.s2 = r3(" "), n3.s0 -= r3(t4), n3.s0 < 0 && (n3.s0 += 1), n3.s1 -= r3(t4), n3.s1 < 0 && (n3.s1 += 1), n3.s2 -= r3(t4), n3.s2 < 0 && (n3.s2 += 1), r3 = null;
    }
    function o2(t4, e3) {
      return e3.c = t4.c, e3.s0 = t4.s0, e3.s1 = t4.s1, e3.s2 = t4.s2, e3;
    }
    function a2(t4, e3) {
      var n3 = new r2(t4), a3 = e3 && e3.state, i2 = n3.next;
      return i2.int32 = function() {
        return 4294967296 * n3.next() | 0;
      }, i2.double = function() {
        return i2() + 11102230246251565e-32 * (2097152 * i2() | 0);
      }, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
        return o2(n3, {});
      }), i2;
    }
    e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
      return a2;
    }) : this.alea = a2;
  }(0, t2, false);
});
var rr = er(function(t2) {
  !function(t3, e2, n2) {
    function r2(t4) {
      var e3 = this, n3 = "";
      e3.x = 0, e3.y = 0, e3.z = 0, e3.w = 0, e3.next = function() {
        var t5 = e3.x ^ e3.x << 11;
        return e3.x = e3.y, e3.y = e3.z, e3.z = e3.w, e3.w ^= e3.w >>> 19 ^ t5 ^ t5 >>> 8;
      }, t4 === (0 | t4) ? e3.x = t4 : n3 += t4;
      for (var r3 = 0; r3 < n3.length + 64; r3++)
        e3.x ^= 0 | n3.charCodeAt(r3), e3.next();
    }
    function o2(t4, e3) {
      return e3.x = t4.x, e3.y = t4.y, e3.z = t4.z, e3.w = t4.w, e3;
    }
    function a2(t4, e3) {
      var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
        return (n3.next() >>> 0) / 4294967296;
      };
      return i2.double = function() {
        do {
          var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, i2.int32 = n3.next, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
        return o2(n3, {});
      }), i2;
    }
    e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
      return a2;
    }) : this.xor128 = a2;
  }(0, t2, false);
});
var or = er(function(t2) {
  !function(t3, e2, n2) {
    function r2(t4) {
      var e3 = this, n3 = "";
      e3.next = function() {
        var t5 = e3.x ^ e3.x >>> 2;
        return e3.x = e3.y, e3.y = e3.z, e3.z = e3.w, e3.w = e3.v, (e3.d = e3.d + 362437 | 0) + (e3.v = e3.v ^ e3.v << 4 ^ t5 ^ t5 << 1) | 0;
      }, e3.x = 0, e3.y = 0, e3.z = 0, e3.w = 0, e3.v = 0, t4 === (0 | t4) ? e3.x = t4 : n3 += t4;
      for (var r3 = 0; r3 < n3.length + 64; r3++)
        e3.x ^= 0 | n3.charCodeAt(r3), r3 == n3.length && (e3.d = e3.x << 10 ^ e3.x >>> 4), e3.next();
    }
    function o2(t4, e3) {
      return e3.x = t4.x, e3.y = t4.y, e3.z = t4.z, e3.w = t4.w, e3.v = t4.v, e3.d = t4.d, e3;
    }
    function a2(t4, e3) {
      var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
        return (n3.next() >>> 0) / 4294967296;
      };
      return i2.double = function() {
        do {
          var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, i2.int32 = n3.next, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
        return o2(n3, {});
      }), i2;
    }
    e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
      return a2;
    }) : this.xorwow = a2;
  }(0, t2, false);
});
var ar = er(function(t2) {
  !function(t3, e2, n2) {
    function r2(t4) {
      var e3 = this;
      e3.next = function() {
        var t5, n3, r3 = e3.x, o3 = e3.i;
        return t5 = r3[o3], n3 = (t5 ^= t5 >>> 7) ^ t5 << 24, n3 ^= (t5 = r3[o3 + 1 & 7]) ^ t5 >>> 10, n3 ^= (t5 = r3[o3 + 3 & 7]) ^ t5 >>> 3, n3 ^= (t5 = r3[o3 + 4 & 7]) ^ t5 << 7, t5 = r3[o3 + 7 & 7], n3 ^= (t5 ^= t5 << 13) ^ t5 << 9, r3[o3] = n3, e3.i = o3 + 1 & 7, n3;
      }, function(t5, e4) {
        var n3, r3 = [];
        if (e4 === (0 | e4))
          r3[0] = e4;
        else
          for (e4 = "" + e4, n3 = 0; n3 < e4.length; ++n3)
            r3[7 & n3] = r3[7 & n3] << 15 ^ e4.charCodeAt(n3) + r3[n3 + 1 & 7] << 13;
        for (; r3.length < 8; )
          r3.push(0);
        for (n3 = 0; n3 < 8 && 0 === r3[n3]; ++n3)
          ;
        for (8 == n3 ? r3[7] = -1 : r3[n3], t5.x = r3, t5.i = 0, n3 = 256; n3 > 0; --n3)
          t5.next();
      }(e3, t4);
    }
    function o2(t4, e3) {
      return e3.x = t4.x.slice(), e3.i = t4.i, e3;
    }
    function a2(t4, e3) {
      null == t4 && (t4 = +/* @__PURE__ */ new Date());
      var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
        return (n3.next() >>> 0) / 4294967296;
      };
      return i2.double = function() {
        do {
          var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, i2.int32 = n3.next, i2.quick = i2, a3 && (a3.x && o2(a3, n3), i2.state = function() {
        return o2(n3, {});
      }), i2;
    }
    e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
      return a2;
    }) : this.xorshift7 = a2;
  }(0, t2, false);
});
var ir = er(function(t2) {
  !function(t3, e2, n2) {
    function r2(t4) {
      var e3 = this;
      e3.next = function() {
        var t5, n3, r3 = e3.w, o3 = e3.X, a3 = e3.i;
        return e3.w = r3 = r3 + 1640531527 | 0, n3 = o3[a3 + 34 & 127], t5 = o3[a3 = a3 + 1 & 127], n3 ^= n3 << 13, t5 ^= t5 << 17, n3 ^= n3 >>> 15, t5 ^= t5 >>> 12, n3 = o3[a3] = n3 ^ t5, e3.i = a3, n3 + (r3 ^ r3 >>> 16) | 0;
      }, function(t5, e4) {
        var n3, r3, o3, a3, i2, s2 = [], u2 = 128;
        for (e4 === (0 | e4) ? (r3 = e4, e4 = null) : (e4 += "\0", r3 = 0, u2 = Math.max(u2, e4.length)), o3 = 0, a3 = -32; a3 < u2; ++a3)
          e4 && (r3 ^= e4.charCodeAt((a3 + 32) % e4.length)), 0 === a3 && (i2 = r3), r3 ^= r3 << 10, r3 ^= r3 >>> 15, r3 ^= r3 << 4, r3 ^= r3 >>> 13, a3 >= 0 && (i2 = i2 + 1640531527 | 0, o3 = 0 == (n3 = s2[127 & a3] ^= r3 + i2) ? o3 + 1 : 0);
        for (o3 >= 128 && (s2[127 & (e4 && e4.length || 0)] = -1), o3 = 127, a3 = 512; a3 > 0; --a3)
          r3 = s2[o3 + 34 & 127], n3 = s2[o3 = o3 + 1 & 127], r3 ^= r3 << 13, n3 ^= n3 << 17, r3 ^= r3 >>> 15, n3 ^= n3 >>> 12, s2[o3] = r3 ^ n3;
        t5.w = i2, t5.X = s2, t5.i = o3;
      }(e3, t4);
    }
    function o2(t4, e3) {
      return e3.i = t4.i, e3.w = t4.w, e3.X = t4.X.slice(), e3;
    }
    function a2(t4, e3) {
      null == t4 && (t4 = +/* @__PURE__ */ new Date());
      var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
        return (n3.next() >>> 0) / 4294967296;
      };
      return i2.double = function() {
        do {
          var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, i2.int32 = n3.next, i2.quick = i2, a3 && (a3.X && o2(a3, n3), i2.state = function() {
        return o2(n3, {});
      }), i2;
    }
    e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
      return a2;
    }) : this.xor4096 = a2;
  }(0, t2, false);
});
var sr = er(function(t2) {
  !function(t3, e2, n2) {
    function r2(t4) {
      var e3 = this, n3 = "";
      e3.next = function() {
        var t5 = e3.b, n4 = e3.c, r4 = e3.d, o3 = e3.a;
        return t5 = t5 << 25 ^ t5 >>> 7 ^ n4, n4 = n4 - r4 | 0, r4 = r4 << 24 ^ r4 >>> 8 ^ o3, o3 = o3 - t5 | 0, e3.b = t5 = t5 << 20 ^ t5 >>> 12 ^ n4, e3.c = n4 = n4 - r4 | 0, e3.d = r4 << 16 ^ n4 >>> 16 ^ o3, e3.a = o3 - t5 | 0;
      }, e3.a = 0, e3.b = 0, e3.c = -1640531527, e3.d = 1367130551, t4 === Math.floor(t4) ? (e3.a = t4 / 4294967296 | 0, e3.b = 0 | t4) : n3 += t4;
      for (var r3 = 0; r3 < n3.length + 20; r3++)
        e3.b ^= 0 | n3.charCodeAt(r3), e3.next();
    }
    function o2(t4, e3) {
      return e3.a = t4.a, e3.b = t4.b, e3.c = t4.c, e3.d = t4.d, e3;
    }
    function a2(t4, e3) {
      var n3 = new r2(t4), a3 = e3 && e3.state, i2 = function() {
        return (n3.next() >>> 0) / 4294967296;
      };
      return i2.double = function() {
        do {
          var t5 = ((n3.next() >>> 11) + (n3.next() >>> 0) / 4294967296) / (1 << 21);
        } while (0 === t5);
        return t5;
      }, i2.int32 = n3.next, i2.quick = i2, a3 && ("object" == typeof a3 && o2(a3, n3), i2.state = function() {
        return o2(n3, {});
      }), i2;
    }
    e2 && e2.exports ? e2.exports = a2 : n2 && n2.amd ? n2(function() {
      return a2;
    }) : this.tychei = a2;
  }(0, t2, false);
});
var ur = er(function(t2) {
  !function(e2, n2) {
    var r2, o2 = this, a2 = 256, i2 = 6, s2 = "random", u2 = n2.pow(a2, i2), c2 = n2.pow(2, 52), l2 = 2 * c2, h2 = a2 - 1;
    function f2(t3, h3, f3) {
      var g2 = [], y2 = v2(function t4(e3, n3) {
        var r3, o3 = [], a3 = typeof e3;
        if (n3 && "object" == a3)
          for (r3 in e3)
            try {
              o3.push(t4(e3[r3], n3 - 1));
            } catch (t5) {
            }
        return o3.length ? o3 : "string" == a3 ? e3 : e3 + "\0";
      }((h3 = 1 == h3 ? { entropy: true } : h3 || {}).entropy ? [t3, m2(e2)] : null == t3 ? function() {
        try {
          var t4;
          return r2 && (t4 = r2.randomBytes) ? t4 = t4(a2) : (t4 = new Uint8Array(a2), (o2.crypto || o2.msCrypto).getRandomValues(t4)), m2(t4);
        } catch (t5) {
          var n3 = o2.navigator, i3 = n3 && n3.plugins;
          return [+/* @__PURE__ */ new Date(), o2, i3, o2.screen, m2(e2)];
        }
      }() : t3, 3), g2), x2 = new d2(g2), b2 = function() {
        for (var t4 = x2.g(i2), e3 = u2, n3 = 0; t4 < c2; )
          t4 = (t4 + n3) * a2, e3 *= a2, n3 = x2.g(1);
        for (; t4 >= l2; )
          t4 /= 2, e3 /= 2, n3 >>>= 1;
        return (t4 + n3) / e3;
      };
      return b2.int32 = function() {
        return 0 | x2.g(4);
      }, b2.quick = function() {
        return x2.g(4) / 4294967296;
      }, b2.double = b2, v2(m2(x2.S), e2), (h3.pass || f3 || function(t4, e3, r3, o3) {
        return o3 && (o3.S && p2(o3, x2), t4.state = function() {
          return p2(x2, {});
        }), r3 ? (n2[s2] = t4, e3) : t4;
      })(b2, y2, "global" in h3 ? h3.global : this == n2, h3.state);
    }
    function d2(t3) {
      var e3, n3 = t3.length, r3 = this, o3 = 0, i3 = r3.i = r3.j = 0, s3 = r3.S = [];
      for (n3 || (t3 = [n3++]); o3 < a2; )
        s3[o3] = o3++;
      for (o3 = 0; o3 < a2; o3++)
        s3[o3] = s3[i3 = h2 & i3 + t3[o3 % n3] + (e3 = s3[o3])], s3[i3] = e3;
      (r3.g = function(t4) {
        for (var e4, n4 = 0, o4 = r3.i, i4 = r3.j, s4 = r3.S; t4--; )
          e4 = s4[o4 = h2 & o4 + 1], n4 = n4 * a2 + s4[h2 & (s4[o4] = s4[i4 = h2 & i4 + e4]) + (s4[i4] = e4)];
        return r3.i = o4, r3.j = i4, n4;
      })(a2);
    }
    function p2(t3, e3) {
      return e3.i = t3.i, e3.j = t3.j, e3.S = t3.S.slice(), e3;
    }
    function v2(t3, e3) {
      for (var n3, r3 = t3 + "", o3 = 0; o3 < r3.length; )
        e3[h2 & o3] = h2 & (n3 ^= 19 * e3[h2 & o3]) + r3.charCodeAt(o3++);
      return m2(e3);
    }
    function m2(t3) {
      return String.fromCharCode.apply(0, t3);
    }
    if (n2["seed" + s2] = f2, v2(n2.random(), e2), t2.exports) {
      t2.exports = f2;
      try {
        r2 = require_crypto();
      } catch (t3) {
      }
    }
  }([], Math);
});
ur.alea = nr, ur.xor128 = rr, ur.xorwow = or, ur.xorshift7 = ar, ur.xor4096 = ir, ur.tychei = sr;
var cr = ur.alea;
var lr = function() {
  function t2(t3, e2, n2, r2, o2) {
    this.mean = t3, this.stdDev = e2, this.dtype = n2, this.nextVal = NaN, this.truncated = r2, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
    var a2 = o2 || Math.random();
    this.random = cr(a2.toString());
  }
  return t2.prototype.nextValue = function() {
    if (!isNaN(this.nextVal)) {
      var t3 = this.nextVal;
      return this.nextVal = NaN, t3;
    }
    for (var e2, n2, r2 = false; !r2; ) {
      var o2 = void 0, a2 = void 0, i2 = void 0;
      do {
        i2 = (o2 = 2 * this.random() - 1) * o2 + (a2 = 2 * this.random() - 1) * a2;
      } while (i2 >= 1 || 0 === i2);
      var s2 = Math.sqrt(-2 * Math.log(i2) / i2);
      e2 = this.mean + this.stdDev * o2 * s2, n2 = this.mean + this.stdDev * a2 * s2, this.truncated && !this.isValidTruncated(e2) || (r2 = true);
    }
    return this.truncated && !this.isValidTruncated(n2) || (this.nextVal = this.convertValue(n2)), this.convertValue(e2);
  }, t2.prototype.convertValue = function(t3) {
    return null == this.dtype || "float32" === this.dtype ? t3 : Math.round(t3);
  }, t2.prototype.isValidTruncated = function(t3) {
    return t3 <= this.upper && t3 >= this.lower;
  }, t2;
}();
var hr = function() {
  function t2(t3, e2, n2, r2) {
    this.alpha = t3, this.beta = 1 / e2, this.dtype = n2;
    var o2 = r2 || Math.random();
    this.randu = cr(o2.toString()), this.randn = new lr(0, 1, n2, false, this.randu()), this.d = t3 < 1 ? t3 + 2 / 3 : t3 - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d);
  }
  return t2.prototype.nextValue = function() {
    for (var t3, e2, n2, r2, o2, a2; ; ) {
      do {
        r2 = this.randn.nextValue(), a2 = 1 + this.c * r2;
      } while (a2 <= 0);
      if (a2 *= a2 * a2, e2 = 1 - 0.331 * (t3 = r2 * r2) * t3, n2 = 0.5 * t3 + this.d * (1 - a2 + Math.log(a2)), (o2 = this.randu()) < e2 || Math.log(o2) < n2)
        break;
    }
    return a2 = 1 / this.beta * this.d * a2, this.alpha < 1 && (a2 *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(a2);
  }, t2.prototype.convertValue = function(t3) {
    return "float32" === this.dtype ? t3 : Math.round(t3);
  }, t2;
}();
var fr = function() {
  function t2(t3, e2, n2, r2) {
    var o2 = this;
    if (void 0 === t3 && (t3 = 0), void 0 === e2 && (e2 = 1), this.canReturnFloat = function() {
      return null == o2.dtype || "float32" === o2.dtype;
    }, this.min = t3, this.range = e2 - t3, this.dtype = n2, null == r2 && (r2 = Math.random()), "number" == typeof r2 && (r2 = r2.toString()), !this.canReturnFloat() && this.range <= 1)
      throw new Error("The difference between " + t3 + " - " + e2 + " <= 1 and dtype is not float");
    this.random = cr(r2);
  }
  return t2.prototype.convertValue = function(t3) {
    return this.canReturnFloat() ? t3 : Math.round(t3);
  }, t2.prototype.nextValue = function() {
    return this.convertValue(this.min + this.range * this.random());
  }, t2;
}();
function dr(t2, e2, n2) {
  return void 0 === e2 && (e2 = "float32"), e2 = e2 || "float32", nt(t2), new gt(t2, e2, n2);
}
function pr(t2, e2) {
  void 0 === e2 && (e2 = false), console.log(t2.toString(e2));
}
var vr = An({ batchToSpaceND_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "batchToSpaceND"), o2 = e2.reduce(function(t3, e3) {
    return t3 * e3;
  });
  return C(r2.rank >= 1 + e2.length, function() {
    return "input rank is " + r2.rank + " but should be > than blockShape.length " + e2.length;
  }), C(n2.length === e2.length, function() {
    return "crops.length is " + n2.length + " but should be equal to blockShape.length  " + e2.length;
  }), C(r2.shape[0] % o2 == 0, function() {
    return "input tensor batch is " + r2.shape[0] + " but is not divisible by the product of the elements of blockShape " + e2.join(" * ") + " === " + o2;
  }), Lt.runKernelFunc(function(t3) {
    return t3.batchToSpaceND(r2, e2, n2);
  }, { $x: r2 }, function(t3) {
    return { $x: function() {
      return t3.spaceToBatchND(e2, n2);
    } };
  });
} });
var mr = An({ broadcastTo_: function(t2, e2) {
  var n2 = mn(t2, "broadcastTo", "x"), r2 = n2.shape;
  if (e2.some(function(t3) {
    return !(t3 > 0) || t3 % 1 != 0;
  }))
    throw new Error("broadcastTo(): Invalid broadcast shape [" + e2 + "].");
  if (e2.length < n2.rank)
    throw new Error("broadcastTo(): shape.length=" + e2.length + " < input.rank=" + n2.rank + ".");
  if (e2.length > n2.rank) {
    for (var o2 = n2.shape.slice(); o2.length < e2.length; )
      o2.unshift(1);
    n2 = n2.reshape(o2);
  }
  for (var a2 = Array.from(e2), i2 = e2.length - 1; i2 >= 0; i2--)
    if (n2.shape[i2] === e2[i2])
      a2[i2] = 1;
    else if (1 !== n2.shape[i2])
      throw new Error("broadcastTo(): [" + r2 + "] cannot be broadcast to [" + e2 + "].");
  var s2 = a2.map(function(t3, e3) {
    return t3 > 1 ? e3 : -1;
  }).filter(function(t3) {
    return t3 >= 0;
  });
  return 0 === s2.length ? n2.clone() : Lt.runKernelFunc(function(t3) {
    return t3.tile(n2, a2);
  }, { input: n2 }, function(t3) {
    return { input: function() {
      return t3.sum(s2, true);
    } };
  });
} });
var gr = An({ cast_: function(t2, e2) {
  var n2 = mn(t2, "x", "cast");
  if (!W(e2))
    throw new Error("Failed to cast to unknown dtype " + e2);
  if ("string" === e2 && "string" !== n2.dtype || "string" !== e2 && "string" === n2.dtype)
    throw new Error("Only strings can be casted to strings");
  var r2 = { dtype: e2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.cast(n2, e2);
  }, { x: n2 }, function(t3) {
    return { x: function() {
      return t3.clone();
    } };
  }, "Cast", r2);
} });
var yr = An({ clone_: function(t2) {
  var e2 = mn(t2, "x", "clone", null);
  return Lt.runKernelFunc(function() {
    return Lt.makeTensorFromDataId(e2.dataId, e2.shape, e2.dtype);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return t3.toFloat();
    } };
  });
} });
var xr = An({ cumsum_: function(t2, e2, n2, r2) {
  void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false);
  var o2 = mn(t2, "x", "cumsum"), a2 = En([e2 |= 0], o2.rank), i2 = o2;
  null != a2 && (i2 = o2.transpose(a2));
  var s2 = In(1, o2.rank)[0], u2 = Lt.runKernelFunc(function(t3) {
    return t3.cumsum(i2, s2, n2, r2);
  }, { permutedX: i2 }, function(t3) {
    return { permutedX: function() {
      return t3.cumsum(e2, n2, !r2);
    } };
  });
  return null != a2 && (u2 = u2.transpose(a2)), u2;
} });
var br = An({ depthToSpace_: function(t2, e2, n2) {
  void 0 === n2 && (n2 = "NHWC");
  var r2 = mn(t2, "x", "depthToSpace"), o2 = "NHWC" === n2 ? r2.shape[1] : r2.shape[2], a2 = "NHWC" === n2 ? r2.shape[2] : r2.shape[3], i2 = "NHWC" === n2 ? r2.shape[3] : r2.shape[1];
  return C(o2 * e2 >= 0, function() {
    return "Negative dimension size caused by overflow when multiplying\n      " + o2 + " and " + e2 + "  for depthToSpace with input shape\n      " + r2.shape;
  }), C(a2 * e2 >= 0, function() {
    return "Negative dimension size caused by overflow when multiplying\n      " + a2 + " and " + e2 + " for depthToSpace with input shape\n          " + r2.shape;
  }), C(i2 % (e2 * e2) == 0, function() {
    return "Dimension size must be evenly divisible by " + e2 * e2 + " but is " + i2 + " for depthToSpace with input shape " + r2.shape;
  }), Lt.runKernelFunc(function(t3) {
    return t3.depthToSpace(r2, e2, n2);
  }, { $x: r2 });
} });
var wr = An({ expandDims_: function(t2, e2) {
  void 0 === e2 && (e2 = 0);
  var n2 = mn(t2, "x", "expandDims", null);
  C(e2 <= n2.rank, function() {
    return "Axis must be <= rank of the tensor";
  });
  var r2 = n2.shape.slice();
  return e2 < 0 && (C(-(n2.rank + 1) <= e2, function() {
    return "Axis must be in the interval [" + -(n2.rank + 1) + ", " + n2.rank + "]";
  }), e2 = n2.rank + e2 + 1), r2.splice(e2, 0, 1), Or(n2, r2);
} });
var Cr = An({ eye_: function(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = "float32"), null == e2 && (e2 = t2);
  for (var o2 = dr([t2, e2], r2), a2 = t2 <= e2 ? t2 : e2, i2 = 0; i2 < a2; ++i2)
    o2.set(1, i2, i2);
  var s2 = o2.toTensor().as2D(t2, e2);
  if (null == n2)
    return s2;
  if (1 === n2.length)
    return Lr(wr(s2, 0), [n2[0], 1, 1]);
  if (2 === n2.length)
    return Lr(wr(wr(s2, 0), 0), [n2[0], n2[1], 1, 1]);
  if (3 === n2.length)
    return Lr(wr(wr(wr(s2, 0), 0), 0), [n2[0], n2[1], n2[2], 1, 1]);
  throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n2.length + "D.");
} });
var Er = An({ multinomial_: function(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = false);
  var o2 = mn(t2, "logits", "multinomial"), a2 = o2.size, i2 = o2.rank;
  if (a2 < 2)
    throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + a2 + ".");
  if (i2 > 2)
    throw new Error("Rank of probabilities must be 1 or 2, but is " + i2);
  n2 = n2 || Math.random();
  var s2 = 1 === i2 ? o2.as2D(1, -1) : o2, u2 = Lt.runKernelFunc(function(t3) {
    return t3.multinomial(s2, r2, e2, n2);
  }, { logits2D: s2 });
  return 1 === i2 ? u2.as1D() : u2;
} });
var Rr = An({ oneHot_: function(t2, e2, n2, r2) {
  if (void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = 0), e2 < 2)
    throw new Error("Error in oneHot: depth must be >=2, but it is " + e2);
  var o2 = mn(t2, "indices", "oneHot", "int32"), a2 = o2.shape.concat([e2]);
  return o2 = o2.flatten(), Lt.runKernelFunc(function(t3) {
    return t3.oneHot(o2, e2, n2, r2);
  }, { $indices: o2 }, function(t3) {
    return { $indices: function() {
      return Gn(o2.shape, "float32");
    } };
  }).reshape(a2);
} });
var Ir = An({ pad_: function(t2, e2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2 = mn(t2, "x", "pad");
  if (0 === r2.rank)
    throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
  var o2 = { paddings: e2, constantValue: n2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.pad(r2, e2, n2);
  }, { x: r2 }, function(t3) {
    var n3 = e2.map(function(t4) {
      return t4[0];
    });
    return { x: function() {
      return t3.slice(n3, r2.shape);
    } };
  }, "PadV2", o2);
} });
var kr = An({ pad1d_: function(t2, e2, n2) {
  return void 0 === n2 && (n2 = 0), C(2 === e2.length, function() {
    return "Invalid number of paddings. Must be length of 2.";
  }), Ir(t2, [e2], n2);
} });
var Sr = An({ pad2d_: function(t2, e2, n2) {
  return void 0 === n2 && (n2 = 0), C(2 === e2.length && 2 === e2[0].length && 2 === e2[1].length, function() {
    return "Invalid number of paddings. Must be length of 2 each.";
  }), Ir(t2, e2, n2);
} });
var Ar = An({ pad3d_: function(t2, e2, n2) {
  return void 0 === n2 && (n2 = 0), C(3 === e2.length && 2 === e2[0].length && 2 === e2[1].length && 2 === e2[2].length, function() {
    return "Invalid number of paddings. Must be length of 2 each.";
  }), Ir(t2, e2, n2);
} });
var Dr = An({ pad4d_: function(t2, e2, n2) {
  return void 0 === n2 && (n2 = 0), C(4 === e2.length && 2 === e2[0].length && 2 === e2[1].length && 2 === e2[2].length && 2 === e2[3].length, function() {
    return "Invalid number of paddings. Must be length of 2 each.";
  }), Ir(t2, e2, n2);
} });
var Tr = An({ rand_: function(t2, e2, n2) {
  var r2 = k(t2), o2 = null;
  if (null == n2 || "float32" === n2)
    o2 = new Float32Array(r2);
  else if ("int32" === n2)
    o2 = new Int32Array(r2);
  else {
    if ("bool" !== n2)
      throw new Error("Unknown data type " + n2);
    o2 = new Uint8Array(r2);
  }
  for (var a2 = 0; a2 < r2; a2++)
    o2[a2] = e2();
  return Lt.makeTensor(o2, t2, n2);
} });
var Nr = An({ randomNormal_: function(t2, e2, n2, r2, o2) {
  if (void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 1), null != r2 && "bool" === r2)
    throw new Error("Unsupported data type " + r2);
  for (var a2 = new lr(e2, n2, r2, false, o2), i2 = dr(t2, r2), s2 = 0; s2 < i2.values.length; s2++)
    i2.values[s2] = a2.nextValue();
  return i2.toTensor();
} });
var Fr = An({ randomGamma_: function(t2, e2, n2, r2, o2) {
  if (void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = "float32"), null == n2 && (n2 = 1), null == r2 && (r2 = "float32"), "float32" !== r2 && "int32" !== r2)
    throw new Error("Unsupported data type " + r2);
  for (var a2 = new hr(e2, n2, r2, o2), i2 = dr(t2, r2), s2 = 0; s2 < i2.values.length; s2++)
    i2.values[s2] = a2.nextValue();
  return i2.toTensor();
} });
var _r = An({ randomUniform_: function(t2, e2, n2, r2, o2) {
  void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = "float32");
  for (var a2 = dr(t2, r2), i2 = new fr(e2, n2, null, o2), s2 = 0; s2 < a2.values.length; s2++)
    a2.values[s2] = i2.nextValue();
  return a2.toTensor();
} });
var Or = An({ reshape_: function(t2, e2) {
  var n2 = mn(t2, "x", "reshape", null);
  e2 = _(e2, n2.size), C(n2.size === k(e2), function() {
    return "new shape and old shape must have the same number of elements.";
  });
  var r2 = { shape: e2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.reshape(n2, e2);
  }, { x: n2 }, function(t3) {
    return { x: function() {
      return t3.reshape(n2.shape);
    } };
  }, "Reshape", r2);
} });
var Mr = An({ spaceToBatchND_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "spaceToBatchND");
  return C(r2.rank >= 1 + e2.length, function() {
    return "input rank " + r2.rank + " should be > than [blockShape] " + e2.length;
  }), C(n2.length === e2.length, function() {
    return "paddings.shape[0] " + n2.length + " must be equal to [blockShape] " + e2.length;
  }), C(r2.shape.reduce(function(t3, r3, o2) {
    return o2 > 0 && o2 <= e2.length ? t3 && (r3 + n2[o2 - 1][0] + n2[o2 - 1][1]) % e2[o2 - 1] == 0 : t3;
  }, true), function() {
    return "input spatial dimensions " + r2.shape.slice(1) + " with paddings " + n2.toString() + " must be divisible by blockShapes " + e2.toString();
  }), Lt.runKernelFunc(function(t3) {
    return t3.spaceToBatchND(r2, e2, n2);
  }, { $x: r2 }, function(t3) {
    return { $x: function() {
      return t3.batchToSpaceND(e2, n2);
    } };
  });
} });
var Br = An({ squeeze_: function(t2, e2) {
  var n2 = mn(t2, "x", "squeeze");
  return Or(n2, M(n2.shape, e2).newShape);
} });
var Pr = An({ stack_: function(t2, e2) {
  void 0 === e2 && (e2 = 0);
  var n2 = gn(t2, "tensors", "stack");
  if (C(n2.length >= 1, function() {
    return "Pass at least one tensor to tf.stack";
  }), 1 === n2.length)
    return n2[0].expandDims(e2);
  var r2 = n2[0].rank, o2 = n2[0].shape, a2 = n2[0].dtype;
  C(e2 <= r2, function() {
    return "Axis must be <= rank of the tensor";
  }), n2.forEach(function(t3) {
    E(o2, t3.shape, "All tensors passed to stack must have matching shapes");
  }), n2.forEach(function(t3) {
    C(a2 === t3.dtype, function() {
      return "All tensors passed to stack must have matching dtypes";
    });
  });
  var i2 = n2.map(function(t3) {
    return t3.expandDims(e2);
  });
  return Yn(i2, e2);
} });
var Lr = An({ tile_: function(t2, e2) {
  var n2 = mn(t2, "x", "tile", null);
  C(n2.rank === e2.length, function() {
    return "Error in transpose: rank of input " + n2.rank + " must match length of reps " + e2 + ".";
  });
  var r2 = [n2], o2 = { reps: e2 };
  return Lt.runKernelFunc(function(t3, r3) {
    var o3 = t3.tile(n2, e2);
    return r3([n2]), o3;
  }, { x: n2 }, function(t3, n3) {
    var r3 = n3[0];
    return { x: function() {
      var n4 = Xn(r3);
      if (1 === r3.rank)
        for (var o3 = 0; o3 < e2[0]; ++o3)
          n4 = n4.add(t3.slice([o3 * r3.shape[0]], [r3.shape[0]]));
      else if (2 === r3.rank)
        for (o3 = 0; o3 < e2[0]; ++o3)
          for (var a2 = 0; a2 < e2[1]; ++a2)
            n4 = n4.add(t3.slice([o3 * r3.shape[0], a2 * r3.shape[1]], [r3.shape[0], r3.shape[1]]));
      else if (3 === r3.rank)
        for (o3 = 0; o3 < e2[0]; ++o3)
          for (a2 = 0; a2 < e2[1]; ++a2)
            for (var i2 = 0; i2 < e2[2]; ++i2)
              n4 = n4.add(t3.slice([o3 * r3.shape[0], a2 * r3.shape[1], i2 * r3.shape[2]], [r3.shape[0], r3.shape[1], r3.shape[2]]));
      else {
        if (4 !== r3.rank)
          throw new Error("Gradient for tile operation is not implemented for rank-" + r3.rank + " tensors yet.");
        for (o3 = 0; o3 < e2[0]; ++o3)
          for (a2 = 0; a2 < e2[1]; ++a2)
            for (i2 = 0; i2 < e2[2]; ++i2)
              for (var s2 = 0; s2 < e2[3]; ++s2)
                n4 = n4.add(t3.slice([o3 * r3.shape[0], a2 * r3.shape[1], i2 * r3.shape[2], s2 * r3.shape[3]], [r3.shape[0], r3.shape[1], r3.shape[2], r3.shape[3]]));
      }
      return n4;
    } };
  }, "Tile", o2, r2);
} });
var Wr = An({ truncatedNormal_: function(t2, e2, n2, r2, o2) {
  if (void 0 === e2 && (e2 = 0), void 0 === n2 && (n2 = 1), null != r2 && "bool" === r2)
    throw new Error("Unsupported data type " + r2);
  for (var a2 = new lr(e2, n2, r2, true, o2), i2 = dr(t2, r2), s2 = 0; s2 < i2.values.length; s2++)
    i2.values[s2] = a2.nextValue();
  return i2.toTensor();
} });
var Ur = An({ unstack_: function(t2, e2) {
  void 0 === e2 && (e2 = 0), e2 = e2 || 0;
  var n2 = mn(t2, "x", "unstack");
  C(e2 >= -n2.shape.length && e2 < n2.shape.length, function() {
    return "Axis = " + e2 + " is not in [-" + n2.shape.length + ", " + n2.shape.length + ")";
  }), e2 < 0 && (e2 += n2.shape.length);
  var r2 = { axis: e2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.unstack(n2, e2);
  }, { x: n2 }, function(t3) {
    return { x: function() {
      return Pr(t3, e2);
    } };
  }, "Unpack", r2);
} });
var Vr = function(t2, e2) {
  return n(this, void 0, void 0, function() {
    var n2, o2, a2, i2, s2, u2, c2, l2, h2, f2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          return n2 = mn(t2, "x", "setdiff1d"), o2 = mn(e2, "y", "setdiff1d"), C(n2.dtype === o2.dtype, function() {
            return "x and y should have the same dtype, but got x (" + n2.dtype + ") and y (" + o2.dtype + ").";
          }), C(1 === n2.rank, function() {
            return "x should be 1D tensor, but got x (" + n2.shape + ").";
          }), C(1 === o2.rank, function() {
            return "y should be 1D tensor, but got y (" + o2.shape + ").";
          }), [4, n2.data()];
        case 1:
          return a2 = r2.sent(), [4, o2.data()];
        case 2:
          for (i2 = r2.sent(), s2 = new Set(i2), u2 = 0, h2 = 0; h2 < a2.length; h2++)
            s2.has(a2[h2]) || u2++;
          for (c2 = new gt([u2], n2.dtype), l2 = new gt([u2], "int32"), h2 = 0, f2 = 0; h2 < a2.length; h2++)
            s2.has(a2[h2]) || (c2.values[f2] = a2[h2], l2.values[f2] = h2, f2++);
          return [2, [c2.toTensor(), l2.toTensor()]];
      }
    });
  });
};
function zr(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = true);
  var o2 = [];
  if (r2)
    (o2 = o2.concat(e2.slice(0))).push(t2[0] / n2), o2 = o2.concat(t2.slice(1));
  else {
    o2 = o2.concat(t2[0]);
    for (var a2 = e2.length, i2 = 0; i2 < a2; ++i2)
      o2 = o2.concat([t2[i2 + 1] / e2[i2], e2[i2]]);
    o2 = o2.concat(t2.slice(a2 + 1));
  }
  return o2;
}
function Gr(t2, e2, n2) {
  void 0 === n2 && (n2 = true);
  var r2 = [];
  if (n2) {
    r2.push(e2);
    for (var o2 = e2 + 1; o2 < t2; ++o2)
      o2 <= 2 * e2 ? (r2.push(o2), r2.push(o2 - (e2 + 1))) : r2.push(o2);
  } else {
    var a2 = [], i2 = [];
    for (o2 = 1; o2 < t2; ++o2)
      o2 >= 2 * e2 + 1 || o2 % 2 == 1 ? i2.push(o2) : a2.push(o2);
    r2.push.apply(r2, a2), r2.push(0), r2.push.apply(r2, i2);
  }
  return r2;
}
function Hr(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = true);
  var o2 = [];
  r2 ? o2.push(t2[0] / n2) : o2.push(t2[0] * n2);
  for (var a2 = 1; a2 < t2.length; ++a2)
    a2 <= e2.length ? r2 ? o2.push(e2[a2 - 1] * t2[a2]) : o2.push(t2[a2] / e2[a2 - 1]) : o2.push(t2[a2]);
  return o2;
}
function qr(t2, e2) {
  for (var n2 = [0], r2 = 0; r2 < e2; ++r2)
    n2.push(t2[r2][0]);
  return n2;
}
function Kr(t2, e2, n2) {
  for (var r2 = t2.slice(0, 1), o2 = 0; o2 < n2; ++o2)
    r2.push(t2[o2 + 1] - e2[o2][0] - e2[o2][1]);
  return r2;
}
function jr(t2, e2) {
  if (t2.rank < 1)
    throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t2.rank + ".");
  if (e2.rank < 1)
    throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + e2.rank + ".");
  if ("int32" !== e2.dtype)
    throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + e2.dtype + ".");
  if (e2.shape[e2.rank - 1] > t2.rank)
    throw new Error("index innermost dimension length must be <= tensor rank; saw: " + e2.shape[e2.rank - 1] + " vs. " + t2.rank);
  if (0 === t2.size)
    throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + t2.shape + ".");
  for (var n2 = e2.shape, r2 = n2[n2.length - 1], o2 = 1, a2 = 0; a2 < n2.length - 1; ++a2)
    o2 *= n2[a2];
  var i2 = t2.shape, s2 = n2.slice();
  s2.pop();
  var u2 = 1;
  for (a2 = r2; a2 < t2.rank; ++a2)
    u2 *= i2[a2], s2.push(i2[a2]);
  var c2 = $(t2.shape).map(function(t3) {
    return t3 / u2;
  }).concat([1]).slice(0, r2);
  return [s2, o2, u2, c2];
}
var Xr = Object.freeze({ prepareAndValidate: jr });
var Yr = 30;
function $r(t2) {
  return t2 <= Yr ? t2 : Y(t2, Math.floor(Math.sqrt(t2)));
}
function Qr(t2, e2, n2) {
  var r2 = e2.rank > 1 ? e2.shape[e2.rank - 1] : 1, o2 = e2.rank > 1 ? e2.rank - 1 : 1, a2 = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n2.shape + ", indices.shape: " + e2.shape + ", shape: " + t2 + ", sliceDim: " + r2 + ", and batchDim: " + o2 + ".";
  if (n2.rank < o2)
    throw new Error(a2 + " update.rank < " + o2 + ". ");
  if (t2.length < r2 + (n2.rank - o2))
    throw new Error(a2 + " Output shape length < " + (r2 + (n2.rank - o2)));
  if (n2.rank !== o2 + t2.length - r2)
    throw new Error(a2 + " update.rank != " + (o2 + t2.length - r2));
  for (var i2 = 0; i2 < o2; ++i2)
    if (n2.shape[i2] !== e2.shape[i2])
      throw new Error(a2 + " updates.shape[" + i2 + "] (" + n2.shape[i2] + ") != indices.shape[" + i2 + "] (" + e2.shape[i2] + ").");
  for (i2 = 0; i2 < n2.rank - o2; ++i2)
    if (n2.shape[i2 + o2] !== t2[i2 + r2])
      throw new Error(a2 + " updates.shape[" + (i2 + o2) + "] (" + n2.shape[i2 + o2] + ") != shape[" + (i2 + o2) + "] (" + t2[i2 + o2] + ")");
}
function Jr(t2, e2, n2) {
  if (e2.rank < 1)
    throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + e2.rank + ".");
  if (t2.rank < 1)
    throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t2.rank + ".");
  if ("int32" !== e2.dtype)
    throw new Error("The dtype of 'indices' should be int32, but got dtype: " + e2.dtype);
  if (n2.length < 1)
    throw new Error("Output rank must be greater or equal to 1, but got shape: " + n2);
  if (0 === n2.length) {
    if (0 === e2.size)
      throw new Error("Indices specified for empty output. indices shape: " + e2.shape);
    if (0 === t2.size)
      throw new Error("Updates specified for empty output. updates shape: " + t2.shape);
  }
  Qr(n2, e2, t2);
}
function Zr(t2, e2, n2) {
  for (var r2 = e2.shape.length, o2 = r2 > 1 ? e2.shape[r2 - 1] : 1, a2 = n2.length, i2 = 1, s2 = o2; s2 < a2; ++s2)
    i2 *= n2[s2];
  var u2 = o2 < 1 ? 1 : o2;
  return { sliceRank: o2, numUpdates: k(e2.shape) / u2, sliceSize: i2, strides: $(n2.slice(0, o2)).concat([1]), outputSize: k(n2) };
}
var to = Object.freeze({ validateUpdateShape: Qr, validateInput: Jr, calculateShapes: Zr });
function eo(t2, e2, n2) {
  C(t2.rank === e2.length, function() {
    return "Error in slice" + t2.rank + "D: Length of begin " + e2 + " must match the rank of the array (" + t2.rank + ").";
  }), C(t2.rank === n2.length, function() {
    return "Error in slice" + t2.rank + "D: Length of size " + n2 + " must match the rank of the array (" + t2.rank + ").";
  });
  for (var r2 = function(r3) {
    C(e2[r3] + n2[r3] <= t2.shape[r3], function() {
      return "Error in slice" + t2.rank + "D: begin[" + r3 + "] + size[" + r3 + "] (" + (e2[r3] + n2[r3]) + ") would overflow input.shape[" + r3 + "] (" + t2.shape[r3] + ")";
    });
  }, o2 = 0; o2 < t2.rank; ++o2)
    r2(o2);
}
function no(t2) {
  for (var e2 = [], n2 = 0; t2 > 0; )
    1 & t2 && e2.push(n2), t2 /= 2, n2++;
  return e2;
}
function ro(t2, e2, n2) {
  for (var r2 = [], o2 = 0; o2 < t2.length; o2++)
    r2[o2] = Math.ceil((e2[o2] - t2[o2]) / n2[o2]);
  return r2;
}
function oo(t2, e2, n2, r2, o2) {
  var a2 = e2[o2], i2 = n2[o2] || 1;
  (t2 & 1 << o2 || null == a2) && (a2 = i2 > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
  var s2 = r2[o2];
  return a2 < 0 && (a2 += s2), a2 = x(0, a2, s2 - 1);
}
function ao(t2, e2, n2, r2, o2) {
  var a2 = e2[o2], i2 = n2[o2] || 1;
  (t2 & 1 << o2 || null == a2) && (a2 = i2 > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
  var s2 = r2[o2];
  return a2 < 0 && (a2 += s2), a2 = i2 > 0 ? x(0, a2, s2) : x(-1, a2, s2 - 1);
}
function io(t2, e2, n2) {
  for (var r2 = n2.length, o2 = 0; o2 < n2.length; o2++)
    if (n2[o2] > 1) {
      r2 = o2;
      break;
    }
  for (o2 = r2 + 1; o2 < n2.length; o2++)
    if (e2[o2] > 0 || n2[o2] !== t2[o2])
      return false;
  return true;
}
function so(t2, e2) {
  for (var n2 = t2.length > 0 ? t2[t2.length - 1] : 1, r2 = 0; r2 < t2.length - 1; r2++)
    n2 += t2[r2] * e2[r2];
  return n2;
}
var uo = Object.freeze({ assertParamsValid: eo, maskToAxes: no, computeOutShape: ro, startForAxis: oo, stopForAxis: ao, isSliceContinous: io, computeFlatOffset: so });
function co(t2) {
  return C(X(t2), function() {
    return "The f passed in grad(f) must be a function";
  }), function(e2, n2) {
    var r2 = mn(e2, "x", "tf.grad", null), o2 = null != n2 ? mn(n2, "dy", "tf.grad") : null;
    return Lt.tidy(function() {
      var e3 = Lt.gradients(function() {
        return t2(r2);
      }, [r2], o2), n3 = e3.value, a2 = e3.grads;
      return null != o2 && E(n3.shape, o2.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"), mo(a2), a2[0];
    });
  };
}
function lo(t2) {
  return C(X(t2), function() {
    return "The f passed in grads(f) must be a function";
  }), function(e2, n2) {
    C(Array.isArray(e2), function() {
      return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s";
    });
    var r2 = gn(e2, "args", "tf.grads", null), o2 = null != n2 ? mn(n2, "dy", "tf.grads") : null;
    return Lt.tidy(function() {
      var e3 = Lt.gradients(function() {
        return t2.apply(void 0, r2);
      }, r2, o2), n3 = e3.value, a2 = e3.grads;
      return null != o2 && E(n3.shape, o2.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), mo(a2), a2;
    });
  };
}
function ho(t2) {
  return C(X(t2), function() {
    return "The f passed in valueAndGrad(f) must be a function";
  }), function(e2, n2) {
    C(e2 instanceof wt, function() {
      return "The x passed in valueAndGrad(f)(x) must be a tensor";
    }), C(null == n2 || n2 instanceof wt, function() {
      return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor";
    });
    var r2 = Lt.gradients(function() {
      return t2(e2);
    }, [e2], n2), o2 = r2.grads, a2 = r2.value;
    return mo(o2), { grad: o2[0], value: a2 };
  };
}
function fo(t2) {
  return C(X(t2), function() {
    return "The f passed in valueAndGrads(f) must be a function";
  }), function(e2, n2) {
    C(Array.isArray(e2) && e2.every(function(t3) {
      return t3 instanceof wt;
    }), function() {
      return "The args passed in valueAndGrads(f)(args) must be array of tensors";
    }), C(null == n2 || n2 instanceof wt, function() {
      return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor";
    });
    var r2 = Lt.gradients(function() {
      return t2.apply(void 0, e2);
    }, e2, n2);
    return null != n2 && E(r2.value.shape, n2.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), mo(r2.grads), r2;
  };
}
function po(t2, e2) {
  C(X(t2), function() {
    return "The f passed in variableGrads(f) must be a function";
  }), C(null == e2 || Array.isArray(e2) && e2.every(function(t3) {
    return t3 instanceof St;
  }), function() {
    return "The varList passed in variableGrads(f, varList) must be an array of variables";
  });
  var n2 = null != e2;
  if (!n2)
    for (var r2 in e2 = [], Lt.registeredVariables)
      e2.push(Lt.registeredVariables[r2]);
  var o2 = n2 ? e2.filter(function(t3) {
    return !t3.trainable;
  }) : null, a2 = e2.length;
  C((e2 = e2.filter(function(t3) {
    return t3.trainable;
  })).length > 0, function() {
    return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + a2 + " variables is trainable.";
  });
  var i2 = Lt.gradients(t2, e2, null, true), s2 = i2.value, u2 = i2.grads;
  C(u2.some(function(t3) {
    return null != t3;
  }), function() {
    return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().";
  }), C(0 === s2.rank, function() {
    return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + s2.rank + " tensor";
  });
  var c2 = {};
  return e2.forEach(function(t3, e3) {
    null != u2[e3] && (c2[t3.name] = u2[e3]);
  }), null != o2 && o2.forEach(function(t3) {
    return c2[t3.name] = null;
  }), { value: s2, grads: c2 };
}
function vo(t2) {
  return Lt.customGrad(t2);
}
function mo(t2) {
  if (t2.filter(function(t3) {
    return null == t3;
  }).length > 0)
    throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.");
}
var go = An({ softmax_: function(t2, e2) {
  void 0 === e2 && (e2 = -1);
  var n2 = mn(t2, "logits", "softmax", "float32");
  if (-1 === e2 && (e2 = n2.rank - 1), e2 !== n2.rank - 1)
    throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + n2.rank + " and dim was " + e2);
  return Lt.runKernelFunc(function(t3, r2) {
    var o2 = t3.softmax(n2, e2);
    return r2([o2]), o2;
  }, { logits: n2 }, function(t3, n3) {
    var r2 = n3[0], o2 = t3.mul(r2);
    return { logits: function() {
      return o2.sub(o2.sum([e2], true).mul(r2));
    } };
  }, "Softmax", { dim: e2 }, [], [true]);
} });
var yo = An({ logSoftmax_: function(t2, e2) {
  void 0 === e2 && (e2 = -1);
  var n2 = mn(t2, "logits", "logSoftmax");
  if (-1 === e2 && (e2 = n2.rank - 1), e2 !== n2.rank - 1)
    throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + n2.rank + " and axis was " + e2);
  return vo(function(t3, n3) {
    var r2 = t3.max(e2, true), o2 = t3.sub(r2), a2 = o2.toFloat().sub(o2.exp().sum(e2, true).log());
    n3([a2]);
    return { value: a2, gradFunc: function(t4, n4) {
      var r3 = n4[0].exp();
      return t4.sub(t4.sum(e2, true).mul(r3));
    } };
  })(n2);
} });
var xo = function() {
  function t2(t3, e2) {
    this.backend = t3, this.dataMover = e2, this.data = /* @__PURE__ */ new WeakMap(), this.dataIdsCount = 0;
  }
  return t2.prototype.get = function(t3) {
    return this.data.has(t3) || this.dataMover.moveData(this.backend, t3), this.data.get(t3);
  }, t2.prototype.set = function(t3, e2) {
    this.dataIdsCount++, this.data.set(t3, e2);
  }, t2.prototype.has = function(t3) {
    return this.data.has(t3);
  }, t2.prototype.delete = function(t3) {
    return this.dataIdsCount--, this.data.delete(t3);
  }, t2.prototype.numDataIds = function() {
    return this.dataIdsCount;
  }, t2;
}();
var bo = function() {
  function t2() {
  }
  return t2.prototype.time = function(t3) {
    return wo("time");
  }, t2.prototype.read = function(t3) {
    return wo("read");
  }, t2.prototype.readSync = function(t3) {
    return wo("readSync");
  }, t2.prototype.numDataIds = function() {
    return wo("numDataIds");
  }, t2.prototype.disposeData = function(t3) {
    return wo("disposeData");
  }, t2.prototype.write = function(t3, e2, n2) {
    return wo("write");
  }, t2.prototype.move = function(t3, e2, n2, r2) {
    return wo("move");
  }, t2.prototype.memory = function() {
    return wo("memory");
  }, t2.prototype.floatPrecision = function() {
    return wo("floatPrecision");
  }, t2.prototype.epsilon = function() {
    return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
  }, t2.prototype.batchMatMul = function(t3, e2, n2, r2) {
    return wo("batchMatMul");
  }, t2.prototype.fusedBatchMatMul = function(t3) {
    t3.a, t3.b, t3.transposeA, t3.transposeB, t3.bias, t3.activation, t3.preluActivationWeights;
    return wo("fusedBatchMatMul");
  }, t2.prototype.slice = function(t3, e2, n2) {
    return wo("slice");
  }, t2.prototype.stridedSlice = function(t3, e2, n2, r2) {
    return wo("stridedSlice");
  }, t2.prototype.unstack = function(t3, e2) {
    return wo("unstack");
  }, t2.prototype.reverse = function(t3, e2) {
    return wo("reverse");
  }, t2.prototype.concat = function(t3, e2) {
    return wo("concat");
  }, t2.prototype.neg = function(t3) {
    return wo("neg");
  }, t2.prototype.add = function(t3, e2) {
    return wo("add");
  }, t2.prototype.addN = function(t3) {
    return wo("addN");
  }, t2.prototype.subtract = function(t3, e2) {
    return wo("subtract");
  }, t2.prototype.multiply = function(t3, e2) {
    return wo("multiply");
  }, t2.prototype.realDivide = function(t3, e2) {
    return wo("realDivide");
  }, t2.prototype.floorDiv = function(t3, e2) {
    return wo("floorDiv");
  }, t2.prototype.sum = function(t3, e2) {
    return wo("sum");
  }, t2.prototype.prod = function(t3, e2) {
    return wo("prod");
  }, t2.prototype.unsortedSegmentSum = function(t3, e2, n2) {
    return wo("unsortedSegmentSum");
  }, t2.prototype.argMin = function(t3, e2) {
    return wo("argMin");
  }, t2.prototype.argMax = function(t3, e2) {
    return wo("argMax");
  }, t2.prototype.equal = function(t3, e2) {
    return wo("equal");
  }, t2.prototype.notEqual = function(t3, e2) {
    return wo("notEqual");
  }, t2.prototype.less = function(t3, e2) {
    return wo("less");
  }, t2.prototype.lessEqual = function(t3, e2) {
    return wo("lessEqual");
  }, t2.prototype.greater = function(t3, e2) {
    return wo("greater");
  }, t2.prototype.greaterEqual = function(t3, e2) {
    return wo("greaterEqual");
  }, t2.prototype.logicalNot = function(t3) {
    return wo("logicalNot");
  }, t2.prototype.logicalAnd = function(t3, e2) {
    return wo("logicalAnd");
  }, t2.prototype.logicalOr = function(t3, e2) {
    return wo("logicalOr");
  }, t2.prototype.where = function(t3) {
    return wo("where");
  }, t2.prototype.select = function(t3, e2, n2) {
    return wo("select");
  }, t2.prototype.topk = function(t3, e2, n2) {
    return wo("topk");
  }, t2.prototype.min = function(t3, e2) {
    return wo("min");
  }, t2.prototype.minimum = function(t3, e2) {
    return wo("minimum");
  }, t2.prototype.mod = function(t3, e2) {
    return wo("mod");
  }, t2.prototype.max = function(t3, e2) {
    return wo("max");
  }, t2.prototype.maximum = function(t3, e2) {
    return wo("maximum");
  }, t2.prototype.all = function(t3, e2) {
    return wo("all");
  }, t2.prototype.any = function(t3, e2) {
    return wo("any");
  }, t2.prototype.squaredDifference = function(t3, e2) {
    return wo("squaredDifference");
  }, t2.prototype.ceil = function(t3) {
    return wo("ceil");
  }, t2.prototype.floor = function(t3) {
    return wo("floor");
  }, t2.prototype.round = function(t3) {
    return wo("round");
  }, t2.prototype.sign = function(t3) {
    return wo("sign");
  }, t2.prototype.isNaN = function(t3) {
    return wo("isNaN");
  }, t2.prototype.isInf = function(t3) {
    return wo("isInf");
  }, t2.prototype.isFinite = function(t3) {
    return wo("isFinite");
  }, t2.prototype.pow = function(t3, e2) {
    return wo("pow");
  }, t2.prototype.exp = function(t3) {
    return wo("exp");
  }, t2.prototype.expm1 = function(t3) {
    return wo("expm1");
  }, t2.prototype.softmax = function(t3, e2) {
    return wo("softmax");
  }, t2.prototype.log = function(t3) {
    return wo("log");
  }, t2.prototype.log1p = function(t3) {
    return wo("log1p");
  }, t2.prototype.sqrt = function(t3) {
    return wo("sqrt");
  }, t2.prototype.rsqrt = function(t3) {
    return wo("rsqrt");
  }, t2.prototype.square = function(t3) {
    return wo("square");
  }, t2.prototype.reciprocal = function(t3) {
    return wo("reciprocal");
  }, t2.prototype.relu = function(t3) {
    return wo("relu");
  }, t2.prototype.relu6 = function(t3) {
    return wo("relu6");
  }, t2.prototype.prelu = function(t3, e2) {
    return wo("prelu");
  }, t2.prototype.elu = function(t3) {
    return wo("elu");
  }, t2.prototype.eluDer = function(t3, e2) {
    return wo("eluDer");
  }, t2.prototype.selu = function(t3) {
    return wo("selu");
  }, t2.prototype.int = function(t3) {
    return wo("int");
  }, t2.prototype.clip = function(t3, e2, n2) {
    return wo("clip");
  }, t2.prototype.abs = function(t3) {
    return wo("abs");
  }, t2.prototype.complexAbs = function(t3) {
    return wo("complexAbs");
  }, t2.prototype.sigmoid = function(t3) {
    return wo("sigmoid");
  }, t2.prototype.softplus = function(t3) {
    return wo("softplus");
  }, t2.prototype.sin = function(t3) {
    return wo("sin");
  }, t2.prototype.cos = function(t3) {
    return wo("cos");
  }, t2.prototype.tan = function(t3) {
    return wo("tan");
  }, t2.prototype.asin = function(t3) {
    return wo("asin");
  }, t2.prototype.acos = function(t3) {
    return wo("acos");
  }, t2.prototype.atan = function(t3) {
    return wo("atan");
  }, t2.prototype.atan2 = function(t3, e2) {
    return wo("atan2");
  }, t2.prototype.sinh = function(t3) {
    return wo("sinh");
  }, t2.prototype.cosh = function(t3) {
    return wo("cosh");
  }, t2.prototype.tanh = function(t3) {
    return wo("tanh");
  }, t2.prototype.asinh = function(t3) {
    return wo("asinh");
  }, t2.prototype.acosh = function(t3) {
    return wo("acosh");
  }, t2.prototype.atanh = function(t3) {
    return wo("atanh");
  }, t2.prototype.erf = function(t3) {
    return wo("erf");
  }, t2.prototype.step = function(t3, e2) {
    return wo("step");
  }, t2.prototype.fusedConv2d = function(t3) {
    t3.input, t3.filter, t3.convInfo, t3.bias, t3.activation, t3.preluActivationWeights;
    return wo("fusedConv2d");
  }, t2.prototype.conv2d = function(t3, e2, n2) {
    return wo("conv2d");
  }, t2.prototype.conv2dDerInput = function(t3, e2, n2) {
    return wo("conv2dDerInput");
  }, t2.prototype.conv2dDerFilter = function(t3, e2, n2) {
    return wo("conv2dDerFilter");
  }, t2.prototype.fusedDepthwiseConv2D = function(t3) {
    t3.input, t3.filter, t3.convInfo, t3.bias, t3.activation, t3.preluActivationWeights;
    return wo("fusedDepthwiseConv2D");
  }, t2.prototype.depthwiseConv2D = function(t3, e2, n2) {
    return wo("depthwiseConv2D");
  }, t2.prototype.depthwiseConv2DDerInput = function(t3, e2, n2) {
    return wo("depthwiseConv2DDerInput");
  }, t2.prototype.depthwiseConv2DDerFilter = function(t3, e2, n2) {
    return wo("depthwiseConv2DDerFilter");
  }, t2.prototype.conv3d = function(t3, e2, n2) {
    return wo("conv3d");
  }, t2.prototype.conv3dDerInput = function(t3, e2, n2) {
    return wo("conv3dDerInput");
  }, t2.prototype.conv3dDerFilter = function(t3, e2, n2) {
    return wo("conv3dDerFilter");
  }, t2.prototype.maxPool = function(t3, e2) {
    return wo("maxPool");
  }, t2.prototype.maxPoolBackprop = function(t3, e2, n2, r2) {
    return wo("maxPoolBackprop");
  }, t2.prototype.avgPool = function(t3, e2) {
    return wo("avgPool");
  }, t2.prototype.avgPoolBackprop = function(t3, e2, n2) {
    return wo("avgPoolBackprop");
  }, t2.prototype.avgPool3d = function(t3, e2) {
    return wo("avgPool3d");
  }, t2.prototype.avgPool3dBackprop = function(t3, e2, n2) {
    return wo("avgPool3dBackprop");
  }, t2.prototype.maxPool3d = function(t3, e2) {
    return wo("maxPool3d");
  }, t2.prototype.maxPool3dBackprop = function(t3, e2, n2, r2) {
    return wo("maxPool3dBackprop");
  }, t2.prototype.reshape = function(t3, e2) {
    return wo("reshape");
  }, t2.prototype.cast = function(t3, e2) {
    return wo("cast");
  }, t2.prototype.tile = function(t3, e2) {
    return wo("tile");
  }, t2.prototype.pad = function(t3, e2, n2) {
    return wo("pad");
  }, t2.prototype.transpose = function(t3, e2) {
    return wo("transpose");
  }, t2.prototype.gather = function(t3, e2, n2) {
    return wo("gather");
  }, t2.prototype.gatherND = function(t3, e2) {
    return wo("gatherND");
  }, t2.prototype.scatterND = function(t3, e2, n2) {
    return wo("scatterND");
  }, t2.prototype.batchToSpaceND = function(t3, e2, n2) {
    return wo("batchToSpaceND");
  }, t2.prototype.spaceToBatchND = function(t3, e2, n2) {
    return wo("spaceToBatchND");
  }, t2.prototype.resizeBilinear = function(t3, e2, n2, r2) {
    return wo("resizeBilinear");
  }, t2.prototype.resizeBilinearBackprop = function(t3, e2, n2) {
    return wo("resizeBilinearBackprop");
  }, t2.prototype.resizeNearestNeighbor = function(t3, e2, n2, r2) {
    return wo("resizeNearestNeighbor");
  }, t2.prototype.resizeNearestNeighborBackprop = function(t3, e2, n2) {
    return wo("resizeNearestNeighborBackprop");
  }, t2.prototype.batchNormalization = function(t3, e2, n2, r2, o2, a2) {
    return wo("batchNormalization");
  }, t2.prototype.localResponseNormalization4D = function(t3, e2, n2, r2, o2) {
    return wo("localResponseNormalization4D");
  }, t2.prototype.LRNGrad = function(t3, e2, n2, r2, o2, a2, i2) {
    return wo("LRNGrad");
  }, t2.prototype.multinomial = function(t3, e2, n2, r2) {
    return wo("multinomial");
  }, t2.prototype.oneHot = function(t3, e2, n2, r2) {
    return wo("oneHot");
  }, t2.prototype.cumsum = function(t3, e2, n2, r2) {
    return wo("cumsum");
  }, t2.prototype.nonMaxSuppression = function(t3, e2, n2, r2, o2) {
    return wo("nonMaxSuppression");
  }, t2.prototype.fft = function(t3) {
    return wo("fft");
  }, t2.prototype.ifft = function(t3) {
    return wo("ifft");
  }, t2.prototype.complex = function(t3, e2) {
    return wo("complex");
  }, t2.prototype.real = function(t3) {
    return wo("real");
  }, t2.prototype.imag = function(t3) {
    return wo("imag");
  }, t2.prototype.cropAndResize = function(t3, e2, n2, r2, o2, a2) {
    return wo("cropAndResize");
  }, t2.prototype.depthToSpace = function(t3, e2, n2) {
    return wo("depthToSpace");
  }, t2.prototype.split = function(t3, e2, n2) {
    return wo("split");
  }, t2.prototype.sparseToDense = function(t3, e2, n2, r2) {
    return wo("sparseToDense");
  }, t2.prototype.diag = function(t3) {
    return wo("diag");
  }, t2.prototype.fill = function(t3, e2, n2) {
    return wo("fill");
  }, t2.prototype.onesLike = function(t3) {
    return wo("onesLike");
  }, t2.prototype.zerosLike = function(t3) {
    return wo("zerosLike");
  }, t2.prototype.linspace = function(t3, e2, n2) {
    return wo("linspace");
  }, t2.prototype.dispose = function() {
    return wo("dispose");
  }, t2;
}();
function wo(t2) {
  throw new Error("'" + t2 + "' not yet implemented or not found in the registry. Did you forget to import the kernel?");
}
function Co(t2, e2) {
  for (var n2 = t2.length, r2 = [], o2 = 0; o2 < n2; o2++) {
    var a2 = n2 - 1 - o2, i2 = t2[a2] || 1;
    (e2[e2.length - 1 - o2] || 1) > 1 && 1 === i2 && r2.unshift(a2);
  }
  return r2;
}
function Eo(t2, e2) {
  for (var n2 = [], r2 = 0; r2 < e2.length; r2++) {
    var o2 = t2[t2.length - r2 - 1], a2 = e2.length - r2 - 1, i2 = e2[a2];
    (null == o2 || 1 === o2 && i2 > 1) && n2.unshift(a2);
  }
  return n2;
}
function Ro(t2, e2) {
  for (var n2 = [], r2 = Math.max(t2.length, e2.length), o2 = 0; o2 < r2; o2++) {
    var a2 = t2[t2.length - o2 - 1];
    null == a2 && (a2 = 1);
    var i2 = e2[e2.length - o2 - 1];
    if (null == i2 && (i2 = 1), 1 === a2)
      n2.unshift(i2);
    else if (1 === i2)
      n2.unshift(a2);
    else {
      if (a2 !== i2)
        throw Error("Operands could not be broadcast together with shapes " + t2 + " and " + e2 + ".");
      n2.unshift(a2);
    }
  }
  return n2;
}
function Io(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === i2 && (i2 = "channelsLast");
  var s2, u2 = To(e2), c2 = u2[0], l2 = u2[1];
  if ("channelsLast" === i2)
    s2 = [c2, l2, t2[3], t2[3]];
  else {
    if ("channelsFirst" !== i2)
      throw new Error("Unknown dataFormat " + i2);
    s2 = [c2, l2, t2[1], t2[1]];
  }
  return So(t2, s2, n2, r2, o2, a2, false, i2);
}
function ko(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === i2 && (i2 = "NDHWC");
  var s2, u2, c2 = No(e2), l2 = c2[0], h2 = c2[1], f2 = c2[2];
  if ("NDHWC" === i2)
    u2 = "channelsLast", s2 = [l2, h2, f2, t2[4], t2[4]];
  else {
    if ("NCDHW" !== i2)
      throw new Error("Unknown dataFormat " + i2);
    u2 = "channelsFirst", s2 = [l2, h2, f2, t2[1], t2[1]];
  }
  return Ao(t2, s2, n2, r2, o2, false, u2, a2);
}
function So(t2, e2, n2, r2, o2, a2, i2, s2) {
  void 0 === i2 && (i2 = false), void 0 === s2 && (s2 = "channelsLast");
  var u2 = [-1, -1, -1, -1], c2 = u2[0], l2 = u2[1], h2 = u2[2], f2 = u2[3];
  if ("channelsLast" === s2)
    c2 = t2[0], l2 = t2[1], h2 = t2[2], f2 = t2[3];
  else {
    if ("channelsFirst" !== s2)
      throw new Error("Unknown dataFormat " + s2);
    c2 = t2[0], f2 = t2[1], l2 = t2[2], h2 = t2[3];
  }
  var d2, p2 = e2[0], v2 = e2[1], m2 = e2[3], g2 = To(n2), y2 = g2[0], x2 = g2[1], b2 = To(r2), w2 = b2[0], E2 = b2[1], R2 = Fo(p2, w2), I2 = Fo(v2, E2), k2 = function(t3, e3, n3, r3, o3, a3, i3, s3) {
    var u3, c3, l3;
    if ("number" == typeof t3) {
      u3 = { top: t3, bottom: t3, left: t3, right: t3, type: 0 === t3 ? "VALID" : "NUMBER" };
      var h3 = function(t4, e4, n4, r4, o4) {
        null == r4 && (r4 = Do(t4, e4, n4));
        var a4 = t4[0], i4 = t4[1], s4 = _o((a4 - e4 + 2 * r4) / n4 + 1, o4);
        C(A(s4), function() {
          return "The output # of rows (" + s4 + ") must be an integer. Change the stride and/or zero pad parameters";
        });
        var u4 = _o((i4 - e4 + 2 * r4) / n4 + 1, o4);
        return C(A(u4), function() {
          return "The output # of columns (" + u4 + ") must be an integer. Change the stride and/or zero pad parameters";
        }), [s4, u4];
      }([e3, n3], a3, r3, t3, s3);
      c3 = h3[0], l3 = h3[1];
    } else if ("same" === t3) {
      c3 = Math.ceil(e3 / r3), l3 = Math.ceil(n3 / o3);
      var f3 = Math.max(0, (c3 - 1) * r3 + a3 - e3), d3 = Math.max(0, (l3 - 1) * o3 + i3 - n3), p3 = Math.floor(f3 / 2), v3 = f3 - p3, m3 = Math.floor(d3 / 2);
      u3 = { top: p3, bottom: v3, left: m3, right: d3 - m3, type: "SAME" };
    } else {
      if ("valid" !== t3)
        throw Error("Unknown padding parameter: " + t3);
      u3 = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" }, c3 = Math.ceil((e3 - a3 + 1) / r3), l3 = Math.ceil((n3 - i3 + 1) / o3);
    }
    return { padInfo: u3, outHeight: c3, outWidth: l3 };
  }(o2, l2, h2, y2, x2, R2, I2, a2), S2 = k2.padInfo, D2 = k2.outHeight, T2 = k2.outWidth, N2 = i2 ? m2 * f2 : m2;
  return "channelsFirst" === s2 ? d2 = [c2, N2, D2, T2] : "channelsLast" === s2 && (d2 = [c2, D2, T2, N2]), { batchSize: c2, dataFormat: s2, inHeight: l2, inWidth: h2, inChannels: f2, outHeight: D2, outWidth: T2, outChannels: N2, padInfo: S2, strideHeight: y2, strideWidth: x2, filterHeight: p2, filterWidth: v2, effectiveFilterHeight: R2, effectiveFilterWidth: I2, dilationHeight: w2, dilationWidth: E2, inShape: t2, outShape: d2, filterShape: e2 };
}
function Ao(t2, e2, n2, r2, o2, a2, i2, s2) {
  void 0 === a2 && (a2 = false), void 0 === i2 && (i2 = "channelsLast");
  var u2 = [-1, -1, -1, -1, -1], c2 = u2[0], l2 = u2[1], h2 = u2[2], f2 = u2[3], d2 = u2[4];
  if ("channelsLast" === i2)
    c2 = t2[0], l2 = t2[1], h2 = t2[2], f2 = t2[3], d2 = t2[4];
  else {
    if ("channelsFirst" !== i2)
      throw new Error("Unknown dataFormat " + i2);
    c2 = t2[0], d2 = t2[1], l2 = t2[2], h2 = t2[3], f2 = t2[4];
  }
  var p2, v2 = e2[0], m2 = e2[1], g2 = e2[2], y2 = e2[4], x2 = No(n2), b2 = x2[0], w2 = x2[1], E2 = x2[2], R2 = No(r2), I2 = R2[0], k2 = R2[1], S2 = R2[2], D2 = Fo(v2, I2), T2 = Fo(m2, k2), N2 = Fo(g2, S2), F2 = function(t3, e3, n3, r3, o3, a3, i3, s3, u3, c3, l3) {
    var h3, f3, d3, p3;
    if ("number" == typeof t3) {
      h3 = { top: t3, bottom: t3, left: t3, right: t3, front: t3, back: t3, type: 0 === t3 ? "VALID" : "NUMBER" };
      var v3 = function(t4, e4, n4, r4, o4, a4) {
        null == o4 && (o4 = Do(t4, e4, r4));
        var i4 = t4[0], s4 = t4[1], u4 = t4[2], c4 = _o((i4 - e4 + 2 * o4) / r4 + 1, a4);
        C(A(c4), function() {
          return "The output # of depths (" + c4 + ") must be an integer. Change the stride and/or zero pad parameters";
        });
        var l4 = _o((s4 - e4 + 2 * o4) / r4 + 1, a4);
        C(A(l4), function() {
          return "The output # of rows (" + l4 + ") must be an integer. Change the stride and/or zero pad parameters";
        });
        var h4 = _o((u4 - e4 + 2 * o4) / r4 + 1, a4);
        return C(A(h4), function() {
          return "The output # of columns (" + h4 + ") must be an integer. Change the stride and/or zero pad parameters";
        }), [c4, l4, h4, n4];
      }([e3, n3, r3, 1], s3, 1, o3, t3, l3);
      f3 = v3[0], d3 = v3[1], p3 = v3[2];
    } else if ("same" === t3) {
      f3 = Math.ceil(e3 / o3), d3 = Math.ceil(n3 / a3), p3 = Math.ceil(r3 / i3);
      var m3 = (f3 - 1) * o3 + s3 - e3, g3 = (d3 - 1) * a3 + u3 - n3, y3 = (p3 - 1) * i3 + c3 - r3, x3 = Math.floor(m3 / 2), b3 = m3 - x3, w3 = Math.floor(g3 / 2), E3 = g3 - w3, R3 = Math.floor(y3 / 2);
      h3 = { top: w3, bottom: E3, left: R3, right: y3 - R3, front: x3, back: b3, type: "SAME" };
    } else {
      if ("valid" !== t3)
        throw Error("Unknown padding parameter: " + t3);
      h3 = { top: 0, bottom: 0, left: 0, right: 0, front: 0, back: 0, type: "VALID" }, f3 = Math.ceil((e3 - s3 + 1) / o3), d3 = Math.ceil((n3 - u3 + 1) / a3), p3 = Math.ceil((r3 - c3 + 1) / i3);
    }
    return { padInfo: h3, outDepth: f3, outHeight: d3, outWidth: p3 };
  }(o2, l2, h2, f2, b2, w2, E2, D2, T2, N2, s2), _2 = F2.padInfo, O2 = F2.outDepth, M2 = F2.outHeight, B2 = F2.outWidth, P2 = a2 ? y2 * d2 : y2;
  return "channelsFirst" === i2 ? p2 = [c2, P2, O2, M2, B2] : "channelsLast" === i2 && (p2 = [c2, O2, M2, B2, P2]), { batchSize: c2, dataFormat: i2, inDepth: l2, inHeight: h2, inWidth: f2, inChannels: d2, outDepth: O2, outHeight: M2, outWidth: B2, outChannels: P2, padInfo: _2, strideDepth: b2, strideHeight: w2, strideWidth: E2, filterDepth: v2, filterHeight: m2, filterWidth: g2, effectiveFilterDepth: D2, effectiveFilterHeight: T2, effectiveFilterWidth: N2, dilationDepth: I2, dilationHeight: k2, dilationWidth: S2, inShape: t2, outShape: p2, filterShape: e2 };
}
function Do(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = 1);
  var o2 = Fo(e2, r2);
  return Math.floor((t2[0] * (n2 - 1) - n2 + o2) / 2);
}
function To(t2) {
  return "number" == typeof t2 ? [t2, t2, t2] : 2 === t2.length ? [t2[0], t2[1], 1] : t2;
}
function No(t2) {
  return "number" == typeof t2 ? [t2, t2, t2] : t2;
}
function Fo(t2, e2) {
  return e2 <= 1 ? t2 : t2 + (t2 - 1) * (e2 - 1);
}
function _o(t2, e2) {
  if (!e2)
    return t2;
  switch (e2) {
    case "round":
      return Math.round(t2);
    case "ceil":
      return Math.ceil(t2);
    case "floor":
      return Math.floor(t2);
    default:
      throw new Error("Unknown roundingMode " + e2);
  }
}
function Oo(t2) {
  var e2 = To(t2), n2 = e2[0], r2 = e2[1], o2 = e2[2];
  return 1 === n2 && 1 === r2 && 1 === o2;
}
function Mo(t2, e2) {
  return Oo(t2) || Oo(e2);
}
function Bo(t2) {
  if ("NHWC" === t2)
    return "channelsLast";
  if ("NCHW" === t2)
    return "channelsFirst";
  throw new Error("Unknown dataFormat " + t2);
}
function Po(t2, e2, n2) {
  if ("complex64" === e2) {
    if ("complex64" === t2.dtype)
      return t2.clone();
    var r2 = Gn(t2.shape), o2 = t2.toFloat(), a2 = n2.complex(o2, r2);
    return r2.dispose(), o2.dispose(), a2;
  }
  if (!U(t2.dtype, e2))
    return Lt.makeTensorFromDataId(t2.dataId, t2.shape, e2);
  if ("complex64" === t2.dtype) {
    var i2 = n2.real(t2);
    a2 = i2.cast(e2);
    return i2.dispose(), a2;
  }
  if ("int32" === e2)
    return n2.int(t2);
  if ("bool" === e2) {
    var s2 = On(0, t2.dtype);
    a2 = n2.notEqual(t2, s2);
    return s2.dispose(), a2;
  }
  throw new Error("Error in Cast: failed to cast " + t2.dtype + " to " + e2);
}
function Lo(t2, e2) {
  return Lt.makeTensorFromDataId(t2.dataId, e2, t2.dtype);
}
function Wo(t2, e2, n2) {
  var r2 = (e2 - t2) / (n2 - 1), o2 = tt(n2, "float32");
  o2[0] = t2;
  for (var a2 = 1; a2 < o2.length; a2++)
    o2[a2] = o2[a2 - 1] + r2;
  return Mn(o2, "float32");
}
var Uo = Object.freeze({ castTensor: Po, reshapeTensor: Lo, linspaceImpl: Wo, upcastType: Dt, axesAreInnerMostDims: yn, combineLocations: xn, computeOutAndReduceShapes: bn, expandShapeToKeepDim: wn, assertAxesAreInnerMostDims: Cn, getAxesPermutation: En, getUndoAxesPermutation: Rn, getInnerMostAxes: In, getBroadcastDims: Co, getReductionAxes: Eo, assertAndGetBroadcastShape: Ro, assertParamsConsistent: kn, computeOutShape: Sn, computePool2DInfo: Io, computePool3DInfo: ko, computeConv2DInfo: So, computeConv3DInfo: Ao, computeDefaultPad: Do, tupleValuesAreOne: Oo, eitherStridesOrDilationsAreOne: Mo, convertConv2DDataFormat: Bo, PARALLELIZE_THRESHOLD: Yr, computeOptimalWindowSize: $r });
function Vo(t2, e2) {
  if (t2.length !== e2.length)
    throw new Error("Cannot merge real and imag arrays of different lengths. real:" + t2.length + ", imag: " + e2.length + ".");
  for (var n2 = new Float32Array(2 * t2.length), r2 = 0; r2 < n2.length; r2 += 2)
    n2[r2] = t2[r2 / 2], n2[r2 + 1] = e2[r2 / 2];
  return n2;
}
function zo(t2, e2) {
  return { real: t2[2 * e2], imag: t2[2 * e2 + 1] };
}
function Go(t2, e2, n2, r2) {
  t2[2 * r2] = e2, t2[2 * r2 + 1] = n2;
}
function Ho(t2, e2, n2) {
  var r2 = (n2 ? 2 : -2) * Math.PI * (t2 / e2);
  return { real: Math.cos(r2), imag: Math.sin(r2) };
}
function qo(t2, e2, n2) {
  var r2 = function(t3, e3, n3) {
    return function(t4, e4, n4) {
      var r3 = 0, o3 = t4.length, a2 = 0, i2 = false;
      for (; r3 < o3; ) {
        var s2 = n4(e4, t4[a2 = r3 + (o3 - r3 >>> 1)]);
        s2 > 0 ? r3 = a2 + 1 : (o3 = a2, i2 = !s2);
      }
      return i2 ? r3 : -r3 - 1;
    }(t3, e3, n3 || Ko);
  }(t2, e2, n2), o2 = r2 < 0 ? -(r2 + 1) : r2;
  t2.splice(o2, 0, e2);
}
function Ko(t2, e2) {
  return t2 > e2 ? 1 : t2 < e2 ? -1 : 0;
}
function jo(t2, e2, n2, r2, o2) {
  return Yo(t2, e2, n2, r2, o2, 0).selectedIndices;
}
function Xo(t2, e2, n2, r2, o2, a2) {
  var i2 = Yo(t2, e2, n2, r2, o2, a2, true);
  return i2.numValidOutputs.dispose(), { selectedIndices: i2.selectedIndices, selectedScores: i2.selectedScores };
}
function Yo(t2, e2, n2, r2, o2, a2, i2, s2) {
  void 0 === i2 && (i2 = false), void 0 === s2 && (s2 = false);
  for (var u2 = Array.from(e2).map(function(t3, e3) {
    return { score: t3, boxIndex: e3, suppressBeginIndex: 0 };
  }).filter(function(t3) {
    return t3.score > o2;
  }).sort(Jo), c2 = a2 > 0 ? -0.5 / a2 : 0, l2 = [], h2 = []; l2.length < n2 && u2.length > 0; ) {
    var f2 = u2.pop(), d2 = f2.score, p2 = f2.boxIndex, v2 = f2.suppressBeginIndex;
    if (d2 < o2)
      break;
    for (var m2 = false, g2 = l2.length - 1; g2 >= v2; --g2) {
      var y2 = $o(t2, p2, l2[g2]);
      if (y2 >= r2) {
        m2 = true;
        break;
      }
      if (f2.score = f2.score * Qo(r2, c2, y2), f2.score <= o2)
        break;
    }
    f2.suppressBeginIndex = l2.length, m2 || (f2.score === d2 ? (l2.push(p2), h2.push(f2.score)) : f2.score > o2 && qo(u2, f2, Jo));
  }
  var x2 = l2.length;
  return s2 && (l2.fill(0, x2), h2.fill(0, x2)), { selectedIndices: Mn(l2, "int32"), selectedScores: Mn(h2, "float32"), numValidOutputs: On(x2, "int32") };
}
function $o(t2, e2, n2) {
  var r2 = t2.subarray(4 * e2, 4 * e2 + 4), o2 = t2.subarray(4 * n2, 4 * n2 + 4), a2 = Math.min(r2[0], r2[2]), i2 = Math.min(r2[1], r2[3]), s2 = Math.max(r2[0], r2[2]), u2 = Math.max(r2[1], r2[3]), c2 = Math.min(o2[0], o2[2]), l2 = Math.min(o2[1], o2[3]), h2 = Math.max(o2[0], o2[2]), f2 = Math.max(o2[1], o2[3]), d2 = (s2 - a2) * (u2 - i2), p2 = (h2 - c2) * (f2 - l2);
  if (d2 <= 0 || p2 <= 0)
    return 0;
  var v2 = Math.max(a2, c2), m2 = Math.max(i2, l2), g2 = Math.min(s2, h2), y2 = Math.min(u2, f2), x2 = Math.max(g2 - v2, 0) * Math.max(y2 - m2, 0);
  return x2 / (d2 + p2 - x2);
}
function Qo(t2, e2, n2) {
  var r2 = Math.exp(e2 * n2 * n2);
  return n2 <= t2 ? r2 : 0;
}
function Jo(t2, e2) {
  return t2.score - e2.score || t2.score === e2.score && e2.boxIndex - t2.boxIndex;
}
function Zo(t2, e2, n2) {
  var r2 = new Array(t2.rank).fill(0), o2 = t2.shape.slice();
  return e2.map(function(e3) {
    o2[n2] = e3;
    var a2 = t2.slice(r2, o2);
    return r2[n2] += e3, a2;
  });
}
function ta(t2, e2) {
  for (var n2 = new Array(t2.rank), r2 = 0; r2 < n2.length; r2++)
    n2[r2] = t2.shape[r2] * e2[r2];
  var o2 = dr(n2, t2.dtype);
  for (r2 = 0; r2 < o2.values.length; ++r2) {
    for (var a2 = o2.indexToLoc(r2), i2 = new Array(t2.rank), s2 = 0; s2 < i2.length; s2++)
      i2[s2] = a2[s2] % t2.shape[s2];
    var u2 = t2.locToIndex(i2);
    o2.values[r2] = t2.values[u2];
  }
  return o2.toTensor();
}
function ea(t2, e2, n2, r2, o2) {
  for (var a2 = e2[e2.length - 1], i2 = [t2.length / a2, a2], s2 = i2[0], u2 = i2[1], c2 = B(n2, s2 * r2), l2 = B("int32", s2 * r2), h2 = 0; h2 < s2; h2++) {
    for (var f2 = h2 * u2, d2 = t2.subarray(f2, f2 + u2), p2 = [], v2 = 0; v2 < d2.length; v2++)
      p2.push({ value: d2[v2], index: v2 });
    p2.sort(function(t3, e3) {
      return e3.value - t3.value;
    });
    var m2 = h2 * r2, g2 = c2.subarray(m2, m2 + r2), y2 = l2.subarray(m2, m2 + r2);
    for (v2 = 0; v2 < r2; v2++)
      g2[v2] = p2[v2].value, y2[v2] = p2[v2].index;
  }
  var x2 = e2.slice();
  return x2[x2.length - 1] = r2, [Fn(c2, x2, n2), Fn(l2, x2, "int32")];
}
function na(t2, e2) {
  for (var n2 = [], r2 = 0; r2 < e2.length; r2++)
    e2[r2] && n2.push(r2);
  var o2 = dr(t2, "int32"), a2 = dr([n2.length, t2.length], "int32");
  for (r2 = 0; r2 < n2.length; r2++) {
    var i2 = o2.indexToLoc(n2[r2]), s2 = r2 * t2.length;
    a2.values.set(i2, s2);
  }
  return a2.toTensor();
}
var ra = function(t2, e2) {
  this.outputShape = [], this.outputShape = t2, this.variableNames = e2.map(function(t3, e3) {
    return "T" + e3;
  });
  var n2 = [];
  this.variableNames.forEach(function(t3) {
    n2.push("float v" + t3 + " = get" + t3 + "AtOutCoords();");
  });
  var r2 = this.variableNames.map(function(t3) {
    return "v" + t3;
  }).join(" + ");
  this.userCode = "\n      void main() {\n        " + n2.join("\n        ") + "\n\n        float result = " + r2 + ";\n        setOutput(result);\n      }\n    ";
};
var oa = function(t2, e2) {
  this.outputShape = [], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2, this.variableNames = e2.map(function(t3, e3) {
    return "T" + e3;
  });
  var n2 = [];
  this.variableNames.forEach(function(t3) {
    n2.push("vec4 v" + t3 + " = get" + t3 + "AtOutCoords();");
  });
  var r2 = this.variableNames.map(function(t3) {
    return "v" + t3;
  }).join(" + ");
  this.userCode = "\n      void main() {\n        " + n2.join("\n        ") + "\n\n        vec4 result = " + r2 + ";\n        setOutput(result);\n      }\n    ";
};
var aa = function(t2, e2, n2) {
  this.variableNames = ["A"];
  var r2 = t2.windowSize, o2 = t2.batchSize, a2 = t2.inSize, i2 = Math.ceil(a2 / r2);
  n2 || this.variableNames.push("bestIndicesA"), this.outputShape = [o2, i2];
  var s2 = "max" === e2 ? ">" : "<", u2 = n2 ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
  this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r2 + ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < " + r2 + "; i++) {\n          int inIdx = " + u2 + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + s2 + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";
};
function ia(t2, e2) {
  return ["x", "y", "z", "w", "u", "v"].slice(0, e2).map(function(e3) {
    return t2 + "." + e3;
  });
}
function sa(t2, e2) {
  return 1 === e2 ? [t2] : ia(t2, e2);
}
function ua() {
  var t2, e2, n2, r2, o2, a2, s2, u2, c2, l2;
  return 2 === i().getNumber("WEBGL_VERSION") ? (t2 = "#version 300 es", e2 = "in", n2 = "out", r2 = "in", o2 = "texture", a2 = "outputColor", s2 = "out vec4 outputColor;", u2 = "\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ", c2 = "", l2 = "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ") : (t2 = "", e2 = "attribute", n2 = "varying", r2 = "varying", o2 = "texture2D", a2 = "gl_FragColor", s2 = "", u2 = "\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ", c2 = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ", l2 = "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "), { version: t2, attribute: e2, varyingVs: n2, varyingFs: r2, texture2D: o2, output: a2, defineOutput: s2, defineSpecialNaN: u2, defineSpecialInf: c2, defineRound: l2 };
}
function ca(t2, e2, n2) {
  void 0 === n2 && (n2 = "index");
  var r2 = $(e2);
  return r2.map(function(e3, o2) {
    return "int " + t2[o2] + " = " + n2 + " / " + e3 + "; " + (o2 === r2.length - 1 ? "int " + t2[o2 + 1] + " = " + n2 + " - " + t2[o2] + " * " + e3 : "index -= " + t2[o2] + " * " + e3) + ";";
  }).join("");
}
function la(t2) {
  var e2 = $(t2).map(function(t3) {
    return t3.toString();
  });
  return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * " + e2[0] + " + coords.y * " + e2[1] + " + coords.z;\n  }\n";
}
var ha = "\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";
function fa(t2, e2, n2, r2) {
  var o2 = [];
  t2.forEach(function(t3) {
    var e3 = k(t3.shapeInfo.logicalShape);
    t3.shapeInfo.isUniform ? o2.push("uniform float " + t3.name + (e3 > 1 ? "[" + e3 + "]" : "") + ";") : (o2.push("uniform sampler2D " + t3.name + ";"), o2.push("uniform int offset" + t3.name + ";"));
  });
  var a2, i2, s2 = o2.join("\n"), u2 = t2.map(function(t3) {
    return function(t4, e3, n3) {
      void 0 === n3 && (n3 = false);
      var r3 = "";
      r3 += n3 ? pa(t4) : da(t4);
      var o3 = t4.shapeInfo.logicalShape, a3 = e3.logicalShape;
      o3.length <= a3.length && (r3 += n3 ? function(t5, e4) {
        var n4, r4 = t5.name, o4 = r4.charAt(0).toUpperCase() + r4.slice(1), a4 = "get" + o4 + "AtOutCoords", i3 = t5.shapeInfo.logicalShape.length, s3 = e4.logicalShape.length, u3 = Co(t5.shapeInfo.logicalShape, e4.logicalShape), c3 = wa(s3), l3 = s3 - i3, h3 = ["x", "y", "z", "w", "u", "v"];
        n4 = 0 === i3 ? "" : s3 < 2 && u3.length >= 1 ? "coords = 0;" : u3.map(function(t6) {
          return "coords." + h3[t6 + l3] + " = 0;";
        }).join("\n");
        var f3 = "";
        f3 = s3 < 2 && i3 > 0 ? "coords" : t5.shapeInfo.logicalShape.map(function(t6, e5) {
          return "coords." + h3[e5 + l3];
        }).join(", ");
        var d2 = "return outputValue;", p2 = 1 === k(t5.shapeInfo.logicalShape), v2 = 1 === k(e4.logicalShape);
        if (1 !== i3 || p2 || v2) {
          if (p2 && !v2)
            d2 = 1 === s3 ? "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      " : "\n        return vec4(outputValue.x);\n      ";
          else if (u3.length) {
            var m2 = i3 - 2, g2 = i3 - 1;
            u3.indexOf(m2) > -1 && u3.indexOf(g2) > -1 ? d2 = "return vec4(outputValue.x);" : u3.indexOf(m2) > -1 ? d2 = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : u3.indexOf(g2) > -1 && (d2 = "return vec4(outputValue.xx, outputValue.zz);");
          }
        } else
          d2 = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
        return "\n    vec4 " + a4 + "() {\n      " + c3 + " coords = getOutputCoords();\n      " + n4 + "\n      vec4 outputValue = get" + o4 + "(" + f3 + ");\n      " + d2 + "\n    }\n  ";
      }(t4, e3) : function(t5, e4) {
        var n4 = t5.name, r4 = n4.charAt(0).toUpperCase() + n4.slice(1), o4 = "get" + r4 + "AtOutCoords", a4 = e4.texShape, i3 = t5.shapeInfo.texShape, s3 = t5.shapeInfo.logicalShape.length, u3 = e4.logicalShape.length;
        if (!t5.shapeInfo.isUniform && s3 === u3 && null == t5.shapeInfo.flatOffset && S(i3, a4))
          return "\n      float " + o4 + "() {\n        return sampleTexture(" + n4 + ", resultUV);\n      }\n    ";
        var c3, l3 = wa(u3), h3 = Co(t5.shapeInfo.logicalShape, e4.logicalShape), f3 = u3 - s3, d2 = ["x", "y", "z", "w", "u", "v"];
        c3 = 0 === s3 ? "" : u3 < 2 && h3.length >= 1 ? "coords = 0;" : h3.map(function(t6) {
          return "coords." + d2[t6 + f3] + " = 0;";
        }).join("\n");
        var p2 = "";
        p2 = u3 < 2 && s3 > 0 ? "coords" : t5.shapeInfo.logicalShape.map(function(t6, e5) {
          return "coords." + d2[e5 + f3];
        }).join(", ");
        return "\n    float " + o4 + "() {\n      " + l3 + " coords = getOutputCoords();\n      " + c3 + "\n      return get" + r4 + "(" + p2 + ");\n    }\n  ";
      }(t4, e3));
      return r3;
    }(t3, e2, r2);
  }).join("\n"), c2 = e2.texShape, l2 = ua(), h2 = function(t3) {
    return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return " + t3.texture2D + "(textureSampler, uv).r;\n    }\n  ";
  }(l2), f2 = function(t3) {
    return t3.version + "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    " + t3.varyingFs + " vec2 resultUV;\n    " + t3.defineOutput + "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    " + t3.defineSpecialNaN + "\n    " + t3.defineSpecialInf + "\n    " + t3.defineRound + "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    " + va + "\n    " + ma + "\n    " + ga + "\n  ";
  }(l2);
  return e2.isPacked ? (a2 = function(t3, e3) {
    switch (t3.length) {
      case 0:
        return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
      case 1:
        return function(t4, e4) {
          var n4 = [Math.ceil(e4[0] / 2), Math.ceil(e4[1] / 2)];
          if (1 === n4[0])
            return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * " + n4[1] + ".0);\n      }\n    ";
          if (1 === n4[1])
            return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * " + n4[0] + ".0);\n      }\n    ";
          return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n4[0] + ", " + n4[1] + "));\n      return 2 * (resTexRC.x * " + n4[1] + " + resTexRC.y);\n    }\n  ";
        }(0, e3);
      case 2:
        return function(t4, e4) {
          var n4 = [Math.ceil(e4[0] / 2), Math.ceil(e4[1] / 2)];
          if (S(t4, e4))
            return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(" + n4[0] + ", " + n4[1] + "));\n      }\n    ";
          var r4 = Math.ceil(t4[1] / 2);
          return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n4[0] + ", " + n4[1] + "));\n\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n      int r = 2 * (index / " + r4 + ");\n      int c = imod(index, " + r4 + ") * 2;\n\n      return ivec2(r, c);\n    }\n  ";
        }(t3, e3);
      case 3:
        return n3 = t3, r3 = e3, o3 = [Math.ceil(r3[0] / 2), Math.ceil(r3[1] / 2)], a3 = Math.ceil(n3[2] / 2), i3 = a3 * Math.ceil(n3[1] / 2), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + o3[0] + ", " + o3[1] + "));\n      int index = resTexRC.x * " + o3[1] + " + resTexRC.y;\n\n      int b = index / " + i3 + ";\n      index -= b * " + i3 + ";\n\n      int r = 2 * (index / " + a3 + ");\n      int c = imod(index, " + a3 + ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
      default:
        return function(t4, e4) {
          for (var n4 = [Math.ceil(e4[0] / 2), Math.ceil(e4[1] / 2)], r4 = Math.ceil(t4[t4.length - 1] / 2), o4 = r4 * Math.ceil(t4[t4.length - 2] / 2), a4 = o4, i4 = "", s3 = "b, r, c", u3 = 2; u3 < t4.length - 1; u3++)
            a4 *= t4[t4.length - u3 - 1], i4 = "\n      int b" + u3 + " = index / " + a4 + ";\n      index -= b" + u3 + " * " + a4 + ";\n    " + i4, s3 = "b" + u3 + ", " + s3;
          return "\n    ivec" + t4.length + " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n4[0] + ", " + n4[1] + "));\n      int index = resTexRC.x * " + n4[1] + " + resTexRC.y;\n\n      " + i4 + "\n\n      int b = index / " + o4 + ";\n      index -= b * " + o4 + ";\n\n      int r = 2 * (index / " + r4 + ");\n      int c = imod(index, " + r4 + ") * 2;\n\n      return ivec" + t4.length + "(" + s3 + ");\n    }\n  ";
        }(t3, e3);
    }
    var n3, r3, o3, a3, i3;
  }(e2.logicalShape, c2), i2 = function(t3) {
    return "\n    void setOutput(vec4 val) {\n      " + t3.output + " = val;\n    }\n  ";
  }(l2)) : (a2 = function(t3, e3) {
    switch (t3.length) {
      case 0:
        return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
      case 1:
        return function(t4, e4) {
          if (1 === e4[0])
            return "\n      int getOutputCoords() {\n        return int(resultUV.x * " + e4[1] + ".0);\n      }\n    ";
          if (1 === e4[1])
            return "\n      int getOutputCoords() {\n        return int(resultUV.y * " + e4[0] + ".0);\n      }\n    ";
          return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + e4[0] + ", " + e4[1] + "));\n      return resTexRC.x * " + e4[1] + " + resTexRC.y;\n    }\n  ";
        }(0, e3);
      case 2:
        return function(t4, e4) {
          if (S(t4, e4))
            return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + e4[0] + ", " + e4[1] + "));\n      }\n    ";
          if (1 === t4[1])
            return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + e4[0] + ", " + e4[1] + "));\n        int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";
          if (1 === t4[0])
            return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + e4[0] + ", " + e4[1] + "));\n        int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";
          return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + e4[0] + ", " + e4[1] + "));\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n      int r = index / " + t4[1] + ";\n      int c = index - r * " + t4[1] + ";\n      return ivec2(r, c);\n    }\n  ";
        }(t3, e3);
      case 3:
        return n3 = e3, r3 = ca(["r", "c", "d"], t3), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n3[0] + ", " + n3[1] + "));\n      int index = resTexRC.x * " + n3[1] + " + resTexRC.y;\n      " + r3 + "\n      return ivec3(r, c, d);\n    }\n  ";
      case 4:
        return function(t4, e4) {
          var n4 = ca(["r", "c", "d", "d2"], t4);
          return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + e4[0] + ", " + e4[1] + "));\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n      " + n4 + "\n      return ivec4(r, c, d, d2);\n    }\n  ";
        }(t3, e3);
      case 5:
        return function(t4, e4) {
          var n4 = ca(["r", "c", "d", "d2", "d3"], t4);
          return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(" + e4[0] + ",\n                             " + e4[1] + "));\n\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n\n      " + n4 + "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ";
        }(t3, e3);
      case 6:
        return function(t4, e4) {
          var n4 = ca(["r", "c", "d", "d2", "d3", "d4"], t4);
          return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + e4[0] + ", " + e4[1] + "));\n      int index = resTexRC.x * " + e4[1] + " + resTexRC.y;\n\n      " + n4 + "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ";
        }(t3, e3);
      default:
        throw new Error(t3.length + "-D output sampling is not yet supported");
    }
    var n3, r3;
  }(e2.logicalShape, c2), i2 = function(t3) {
    return "\n    void setOutput(float val) {\n      " + t3.output + " = vec4(val, 0, 0, 0);\n    }\n  ";
  }(l2)), r2 && (f2 += ya), [f2, h2, i2, s2, a2, u2, n2].join("\n");
}
function da(t2) {
  var e2 = t2.shapeInfo.logicalShape;
  switch (e2.length) {
    case 0:
      return function(t3) {
        var e3 = t3.name, n2 = "get" + e3.charAt(0).toUpperCase() + e3.slice(1);
        if (t3.shapeInfo.isUniform)
          return "float " + n2 + "() {return " + e3 + ";}";
        var r2 = t3.shapeInfo.texShape, o2 = r2[0], a2 = r2[1];
        if (1 === o2 && 1 === a2)
          return "\n      float " + n2 + "() {\n        return sampleTexture(" + e3 + ", halfCR);\n      }\n    ";
        var i2 = t3.shapeInfo.texShape, s2 = i2[0], u2 = i2[1], c2 = xa(e3);
        return "\n    float " + n2 + "() {\n      vec2 uv = uvFromFlat(" + s2 + ", " + u2 + ", " + c2 + ");\n      return sampleTexture(" + e3 + ", uv);\n    }\n  ";
      }(t2);
    case 1:
      return function(t3) {
        var e3 = t3.name, n2 = "get" + e3.charAt(0).toUpperCase() + e3.slice(1);
        if (t3.shapeInfo.isUniform)
          return "\n      float " + n2 + "(int index) {\n        " + ba(t3) + "\n      }\n    ";
        var r2 = t3.shapeInfo.texShape, o2 = r2[0], a2 = r2[1];
        if (1 === a2 && 1 === o2)
          return "\n      float " + n2 + "(int index) {\n        return sampleTexture(" + e3 + ", halfCR);\n      }\n    ";
        var i2 = xa(e3);
        if (1 === a2)
          return "\n      float " + n2 + "(int index) {\n        vec2 uv = vec2(0.5, (float(index + " + i2 + ") + 0.5) / " + o2 + ".0);\n        return sampleTexture(" + e3 + ", uv);\n      }\n    ";
        if (1 === o2)
          return "\n      float " + n2 + "(int index) {\n        vec2 uv = vec2((float(index + " + i2 + ") + 0.5) / " + a2 + ".0, 0.5);\n        return sampleTexture(" + e3 + ", uv);\n      }\n    ";
        return "\n    float " + n2 + "(int index) {\n      vec2 uv = uvFromFlat(" + o2 + ", " + a2 + ", index + " + i2 + ");\n      return sampleTexture(" + e3 + ", uv);\n    }\n  ";
      }(t2);
    case 2:
      return function(t3) {
        var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = t3.shapeInfo.texShape;
        if (null != o2 && S(e3, o2)) {
          var a2 = o2[0], i2 = o2[1];
          return "\n    float " + r2 + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + i2 + ".0, " + a2 + ".0);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
        }
        var s2 = M(e3), u2 = s2.newShape, c2 = s2.keptDims, l2 = u2;
        if (l2.length < e3.length) {
          var h2 = Ca(t3, l2);
          return "\n      " + da(h2) + "\n      float " + r2 + "(int row, int col) {\n        return " + r2 + "(" + Ea(["row", "col"], c2) + ");\n      }\n    ";
        }
        if (t3.shapeInfo.isUniform)
          return "\n      float " + r2 + "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(" + e3[1] + ", 1)));\n        " + ba(t3) + "\n      }\n    ";
        var f2 = o2[0], d2 = o2[1], p2 = xa(n2);
        if (1 === d2)
          return "\n    float " + r2 + "(int row, int col) {\n      float index = dot(vec3(row, col, " + p2 + "), vec3(" + e3[1] + ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / " + f2 + ".0);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
        if (1 === f2)
          return "\n    float " + r2 + "(int row, int col) {\n      float index = dot(vec3(row, col, " + p2 + "), vec3(" + e3[1] + ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / " + d2 + ".0, 0.5);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
        return "\n  float " + r2 + "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * " + e3[1] + " + col + " + p2 + ";\n    vec2 uv = uvFromFlat(" + f2 + ", " + d2 + ", index);\n    return sampleTexture(" + n2 + ", uv);\n  }\n";
      }(t2);
    case 3:
      return function(t3) {
        var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = e3[1] * e3[2], a2 = e3[2], i2 = M(e3), s2 = i2.newShape, u2 = i2.keptDims, c2 = s2;
        if (c2.length < e3.length) {
          var l2 = Ca(t3, c2);
          return "\n        " + da(l2) + "\n        float " + r2 + "(int row, int col, int depth) {\n          return " + r2 + "(" + Ea(["row", "col", "depth"], u2) + ");\n        }\n      ";
        }
        if (t3.shapeInfo.isUniform)
          return "\n      float " + r2 + "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(" + o2 + ", " + a2 + ", 1)));\n        " + ba(t3) + "\n      }\n    ";
        var h2 = t3.shapeInfo.texShape, f2 = h2[0], d2 = h2[1], p2 = t3.shapeInfo.flatOffset;
        if (d2 === o2 && null == p2)
          return "\n        float " + r2 + "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(" + a2 + ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + d2 + ".0, " + f2 + ".0);\n          return sampleTexture(" + n2 + ", uv);\n        }\n      ";
        if (d2 === a2 && null == p2)
          return "\n    float " + r2 + "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(" + e3[1] + ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + d2 + ".0, " + f2 + ".0);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
        var v2 = xa(n2);
        return "\n      float " + r2 + "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * " + o2 + " + col * " + a2 + " + depth + " + v2 + ";\n        vec2 uv = uvFromFlat(" + f2 + ", " + d2 + ", index);\n        return sampleTexture(" + n2 + ", uv);\n      }\n  ";
      }(t2);
    case 4:
      return function(t3) {
        var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = e3[3], a2 = e3[2] * o2, i2 = e3[1] * a2, s2 = M(e3), u2 = s2.newShape, c2 = s2.keptDims;
        if (u2.length < e3.length) {
          var l2 = Ca(t3, u2);
          return "\n      " + da(l2) + "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        return " + r2 + "(" + Ea(["row", "col", "depth", "depth2"], c2) + ");\n      }\n    ";
        }
        if (t3.shapeInfo.isUniform)
          return "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(" + i2 + ", " + a2 + ", " + o2 + ", 1)));\n        " + ba(t3) + "\n      }\n    ";
        var h2 = t3.shapeInfo.flatOffset, f2 = t3.shapeInfo.texShape, d2 = f2[0], p2 = f2[1];
        if (p2 === i2 && null == h2)
          return "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(" + a2 + ", " + o2 + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + p2 + ".0, " + d2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
        if (p2 === o2 && null == h2)
          return "\n      float " + r2 + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + e3[1] * e3[2] + ", " + e3[2] + ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + p2 + ".0, " + d2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
        var v2 = xa(n2);
        return "\n    float " + r2 + "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + i2 + " + col * " + a2 + " +\n          depth * " + o2 + " + depth2;\n      vec2 uv = uvFromFlat(" + d2 + ", " + p2 + ", index + " + v2 + ");\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
      }(t2);
    case 5:
      return function(t3) {
        var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = e3[4], a2 = e3[3] * o2, i2 = e3[2] * a2, s2 = e3[1] * i2, u2 = M(e3), c2 = u2.newShape, l2 = u2.keptDims;
        if (c2.length < e3.length) {
          var h2 = Ca(t3, c2);
          return "\n      " + da(h2) + "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        return " + r2 + "(" + Ea(["row", "col", "depth", "depth2", "depth3"], l2) + ");\n      }\n    ";
        }
        if (t3.shapeInfo.isUniform)
          return "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + s2 + ", " + i2 + ", " + a2 + ", " + o2 + ")) +\n          depth3;\n        " + ba(t3) + "\n      }\n    ";
        var f2 = t3.shapeInfo.flatOffset, d2 = t3.shapeInfo.texShape, p2 = d2[0], v2 = d2[1];
        if (v2 === s2 && null == f2)
          return "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(" + i2 + ", " + a2 + ", " + o2 + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + v2 + ".0, " + p2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
        if (v2 === o2 && null == f2)
          return "\n      float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + e3[1] * e3[2] * e3[3] + ",\n               " + e3[2] * e3[3] + ", " + e3[3] + ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + v2 + ".0, " + p2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
        var m2 = xa(n2);
        return "\n    float " + r2 + "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + s2 + " + col * " + i2 + " + depth * " + a2 + " +\n          depth2 * " + o2 + " + depth3 + " + m2 + ";\n      vec2 uv = uvFromFlat(" + p2 + ", " + v2 + ", index);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
      }(t2);
    case 6:
      return function(t3) {
        var e3 = t3.shapeInfo.logicalShape, n2 = t3.name, r2 = "get" + n2.charAt(0).toUpperCase() + n2.slice(1), o2 = M(e3), a2 = o2.newShape, i2 = o2.keptDims;
        if (a2.length < e3.length) {
          var s2 = Ca(t3, a2);
          return "\n      " + da(s2) + "\n      float " + r2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return " + r2 + "(" + Ea(["row", "col", "depth", "depth2", "depth3", "depth4"], i2) + ");\n      }\n    ";
        }
        var u2 = e3[5], c2 = e3[4] * u2, l2 = e3[3] * c2, h2 = e3[2] * l2, f2 = e3[1] * h2;
        if (t3.shapeInfo.isUniform)
          return "\n      float " + r2 + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + f2 + ", " + h2 + ", " + l2 + ", " + c2 + ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(" + u2 + ", 1)));\n        " + ba(t3) + "\n      }\n    ";
        var d2 = t3.shapeInfo.flatOffset, p2 = t3.shapeInfo.texShape, v2 = p2[0], m2 = p2[1];
        if (m2 === f2 && null == d2)
          return "\n      float " + r2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(" + h2 + ", " + l2 + ", " + c2 + ", " + u2 + ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + m2 + ".0, " + v2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
        if (m2 === u2 && null == d2)
          return "\n      float " + r2 + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(" + e3[1] * e3[2] * e3[3] * e3[4] + ",\n               " + e3[2] * e3[3] * e3[4] + ",\n               " + e3[3] * e3[4] + ",\n               " + e3[4] + ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + m2 + ".0, " + v2 + ".0);\n        return sampleTexture(" + n2 + ", uv);\n      }\n    ";
        var g2 = xa(n2);
        return "\n    float " + r2 + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + f2 + " + col * " + h2 + " + depth * " + l2 + " +\n          depth2 * " + c2 + " + depth3 * " + u2 + " + depth4 + " + g2 + ";\n      vec2 uv = uvFromFlat(" + v2 + ", " + m2 + ", index);\n      return sampleTexture(" + n2 + ", uv);\n    }\n  ";
      }(t2);
    default:
      throw new Error(e2.length + "-D input sampling is not yet supported");
  }
}
function pa(t2) {
  var e2, n2, r2;
  switch (t2.shapeInfo.logicalShape.length) {
    case 0:
      return e2 = t2.name, n2 = "get" + e2.charAt(0).toUpperCase() + e2.slice(1), r2 = ua(), "\n    vec4 " + n2 + "() {\n      return " + r2.texture2D + "(" + e2 + ", halfCR);\n    }\n  ";
    case 1:
      return function(t3) {
        var e3 = t3.name, n3 = "get" + e3.charAt(0).toUpperCase() + e3.slice(1), r3 = t3.shapeInfo.texShape, o2 = [Math.ceil(r3[0] / 2), Math.ceil(r3[1] / 2)], a2 = ua();
        return "\n    vec4 " + n3 + "(int index) {\n      vec2 uv = packedUVfrom1D(\n        " + o2[0] + ", " + o2[1] + ", index);\n      return " + a2.texture2D + "(" + e3 + ", uv);\n    }\n  ";
      }(t2);
    case 2:
      return function(t3) {
        var e3 = t3.shapeInfo.logicalShape, n3 = t3.name, r3 = "get" + n3.charAt(0).toUpperCase() + n3.slice(1), o2 = t3.shapeInfo.texShape, a2 = o2[0], i2 = o2[1], s2 = ua();
        if (null != o2 && S(e3, o2))
          return "\n      vec4 " + r3 + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + i2 + ".0, " + a2 + ".0);\n\n        return " + s2.texture2D + "(" + n3 + ", uv);\n      }\n    ";
        var u2 = [Math.ceil(o2[0] / 2), Math.ceil(o2[1] / 2)], c2 = Math.ceil(e3[1] / 2);
        return "\n    vec4 " + r3 + "(int row, int col) {\n      vec2 uv = packedUVfrom2D(" + c2 + ", " + u2[0] + ", " + u2[1] + ", row, col);\n      return " + s2.texture2D + "(" + n3 + ", uv);\n    }\n  ";
      }(t2);
    case 3:
      return function(t3) {
        var e3 = t3.shapeInfo.logicalShape, n3 = t3.name, r3 = "get" + n3.charAt(0).toUpperCase() + n3.slice(1), o2 = t3.shapeInfo.texShape, a2 = [Math.ceil(o2[0] / 2), Math.ceil(o2[1] / 2)];
        if (1 === e3[0]) {
          var i2 = e3.slice(1), s2 = Ca(t3, i2);
          return "\n        " + pa(s2) + "\n        vec4 " + r3 + "(int b, int row, int col) {\n          return " + r3 + "(" + Ea(["b", "row", "col"], [1, 2]) + ");\n        }\n      ";
        }
        var u2 = a2[0], c2 = a2[1], l2 = Math.ceil(e3[2] / 2), h2 = l2 * Math.ceil(e3[1] / 2), f2 = ua();
        return "\n    vec4 " + r3 + "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        " + u2 + ", " + c2 + ", " + h2 + ", " + l2 + ", b, row, col);\n      return " + f2.texture2D + "(" + n3 + ", uv);\n    }\n  ";
      }(t2);
    default:
      return function(t3) {
        for (var e3 = t3.shapeInfo.logicalShape, n3 = e3.length, r3 = t3.name, o2 = "get" + r3.charAt(0).toUpperCase() + r3.slice(1), a2 = t3.shapeInfo.texShape, i2 = [Math.ceil(a2[0] / 2), Math.ceil(a2[1] / 2)], s2 = i2[0], u2 = i2[1], c2 = Math.ceil(e3[n3 - 1] / 2), l2 = c2 * Math.ceil(e3[n3 - 2] / 2), h2 = "int b, int row, int col", f2 = "b * " + l2 + " + (row / 2) * " + c2 + " + (col / 2)", d2 = 2; d2 < n3 - 1; d2++)
          h2 = "int b" + d2 + ", " + h2, l2 *= e3[n3 - d2 - 1], f2 = "b" + d2 + " * " + l2 + " + " + f2;
        var p2 = ua();
        return "\n    vec4 " + o2 + "(" + h2 + ") {\n      int index = " + f2 + ";\n      int texR = index / " + u2 + ";\n      int texC = index - texR * " + u2 + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + u2 + ", " + s2 + ");\n      return " + p2.texture2D + "(" + r3 + ", uv);\n    }\n  ";
      }(t2);
  }
}
var va = "\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var ma = "\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var ga = "\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var ya = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";
function xa(t2) {
  return "offset" + t2;
}
function ba(t2) {
  var e2 = t2.name, n2 = k(t2.shapeInfo.logicalShape);
  return n2 < 2 ? "return " + e2 + ";" : "\n    for (int i = 0; i < " + n2 + "; i++) {\n      if (i == index) {\n        return " + e2 + "[i];\n      }\n    }\n  ";
}
function wa(t2) {
  if (t2 <= 1)
    return "int";
  if (2 === t2)
    return "ivec2";
  if (3 === t2)
    return "ivec3";
  if (4 === t2)
    return "ivec4";
  if (5 === t2)
    return "ivec5";
  if (6 === t2)
    return "ivec6";
  throw Error("GPU for rank " + t2 + " is not yet supported");
}
function Ca(t2, e2) {
  var n2 = JSON.parse(JSON.stringify(t2));
  return n2.shapeInfo.logicalShape = e2, n2;
}
function Ea(t2, e2) {
  return e2.map(function(e3) {
    return t2[e3];
  }).join(", ");
}
var Ra = function(t2, e2, n2, r2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, C(t2.length > 2, function() {
    return "Packed arg" + (n2.charAt(0).toUpperCase() + n2.slice(1)) + " supports only inputs with rank above 2.";
  });
  var o2 = t2[t2.length - 1], a2 = Math.ceil(o2 / e2);
  this.outputShape = t2.slice(0, -1), a2 > 1 && this.outputShape.push(a2), r2 || this.variableNames.push("bestIndicesA");
  var i2, s2, u2 = this.outputShape, c2 = u2.length, l2 = wa(c2), h2 = sa("coords", c2);
  if (1 === a2) {
    var f2 = wa(s2 = c2 + 1);
    i2 = "\n        " + f2 + " sourceLocR = " + f2 + "(" + h2.join() + ", 0);\n        ++" + h2[c2 - 1] + ";\n        " + f2 + " sourceLocG = " + f2 + "(" + h2.join() + ", 0);\n        ++" + h2[c2 - 2] + ";\n        " + f2 + " sourceLocA = " + f2 + "(" + h2.join() + ", 0);\n        --" + h2[c2 - 1] + ";\n        " + f2 + " sourceLocB = " + f2 + "(" + h2.join() + ", 0);\n        --" + h2[c2 - 2] + ";";
  } else
    s2 = c2, i2 = "\n        " + l2 + " sourceLocR = coords;\n        ++" + h2[c2 - 1] + ";\n        " + l2 + " sourceLocG = coords;\n        ++" + h2[c2 - 2] + ";\n        " + l2 + " sourceLocA = coords;\n        --" + h2[c2 - 1] + ";\n        " + l2 + " sourceLocB = coords;\n        --" + h2[c2 - 2] + ";";
  var d2 = ["x", "y", "z", "w", "u", "v"].slice(0, s2), p2 = "." + d2[s2 - 1], v2 = d2.map(function(t3) {
    return "int " + t3;
  }), m2 = sa("sourceLocR", s2 - 1).concat("inIdx.r"), g2 = sa("sourceLocG", s2 - 1).concat("inIdx.g"), y2 = sa("sourceLocB", s2 - 1).concat("inIdx.b"), x2 = sa("sourceLocA", s2 - 1).concat("inIdx.a"), b2 = "max" === n2 ? "greaterThan" : "lessThan", w2 = r2 ? "" : "\n          inIdx = round(vec4(getBestIndicesAChannel(" + m2.join() + "),\n                             getBestIndicesAChannel(" + g2.join() + "),\n                             getBestIndicesAChannel(" + y2.join() + "),\n                             getBestIndicesAChannel(" + x2.join() + ")));", E2 = "vec4(\n            getAChannel(" + m2.join() + "),\n            hasNextCol ? getAChannel(" + g2.join() + ") : 0.,\n            hasNextRow ? getAChannel(" + y2.join() + ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(" + x2.join() + ") : 0.)", R2 = r2 ? "" : "\n      float getBestIndicesAChannel(" + v2.join() + ") {\n        return getChannel(getBestIndicesA(" + d2.join() + "),\n                                          vec2(" + d2.slice(-2).join() + "));\n      }";
  this.userCode = "\n      float getAChannel(" + v2.join() + ") {\n        return getChannel(getA(" + d2.join() + "),\n                               vec2(" + d2.slice(-2).join() + "));\n      }\n      " + R2 + "\n      void main() {\n        " + l2 + " coords = getOutputCoords();\n        bool hasNextCol = " + h2[c2 - 1] + " < " + (u2[c2 - 1] - 1) + ";\n        bool hasNextRow = " + h2[c2 - 2] + " < " + (u2[c2 - 2] - 1) + ";\n        " + i2 + "\n        ivec4 srcIdx = ivec4(sourceLocR" + p2 + ", sourceLocG" + p2 + ",\n          sourceLocB" + p2 + ", sourceLocA" + p2 + ") * " + e2 + ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = " + E2 + ";\n\n        for (int i = 0; i < " + e2 + "; i++) {\n          inIdx = srcIdx;\n          " + w2 + "\n          vec4 candidate = " + E2 + ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(" + b2 + "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ";
};
var Ia = function(t2) {
  this.variableNames = ["dy"], this.outputShape = t2.inShape;
  var e2 = t2.filterHeight, n2 = t2.filterWidth, r2 = t2.strideHeight, o2 = t2.strideWidth, a2 = t2.dilationHeight, i2 = t2.dilationWidth, s2 = t2.effectiveFilterHeight, u2 = t2.effectiveFilterWidth, c2 = s2 - 1 - t2.padInfo.top, l2 = u2 - 1 - t2.padInfo.left, h2 = 1 / (e2 * n2);
  this.userCode = "\n      const ivec2 pads = ivec2(" + c2 + ", " + l2 + ");\n      const float avgMultiplier = float(" + h2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s2 + ";\n            wR += " + a2 + ") {\n          float dyR = float(dyRCorner + wR) / " + r2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + u2 + ";\n            wC+= " + i2 + ") {\n            float dyC = float(dyCCorner + wC) / " + o2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var ka = function(t2) {
  this.variableNames = ["dy"], this.outputShape = t2.inShape;
  var e2 = t2.filterDepth, n2 = t2.filterHeight, r2 = t2.filterWidth, o2 = t2.strideDepth, a2 = t2.strideHeight, i2 = t2.strideWidth, s2 = t2.dilationDepth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.effectiveFilterDepth, h2 = t2.effectiveFilterHeight, f2 = t2.effectiveFilterWidth, d2 = l2 - 1 - t2.padInfo.front, p2 = h2 - 1 - t2.padInfo.top, v2 = f2 - 1 - t2.padInfo.left, m2 = 1 / (e2 * n2 * r2);
  this.userCode = "\n      const ivec3 pads = ivec3(" + d2 + ", " + p2 + ", " + v2 + ");\n      const float avgMultiplier = float(" + m2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + l2 + ";\n            wD += " + s2 + ") {\n          float dyD = float(dyDCorner + wD) / " + o2 + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t2.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + h2 + ";\n              wR += " + u2 + ") {\n            float dyR = float(dyRCorner + wR) / " + a2 + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + f2 + ";\n                wC += " + c2 + ") {\n              float dyC = float(dyCCorner + wC) / " + i2 + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Sa = function(t2, e2, n2, r2, o2, a2) {
  this.outputShape = [], this.variableNames = ["x", "mean", "variance"], Ro(t2, e2), Ro(t2, n2);
  var i2 = "0.0";
  null != r2 && (Ro(t2, r2), this.variableNames.push("offset"), i2 = "getOffsetAtOutCoords()");
  var s2 = "1.0";
  null != o2 && (Ro(t2, o2), this.variableNames.push("scale"), s2 = "getScaleAtOutCoords()"), this.outputShape = t2, this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + i2 + ";\n        float scale = " + s2 + ";\n        float inv = scale * inversesqrt(variance + float(" + a2 + "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ";
};
var Aa = function(t2, e2, n2, r2, o2, a2) {
  this.packedInputs = true, this.packedOutput = true, this.variableNames = ["x", "mean", "variance"], Ro(t2, e2), Ro(t2, n2);
  var i2 = "vec4(0.0)";
  null != r2 && (Ro(t2, r2), this.variableNames.push("offset"), i2 = "getOffsetAtOutCoords()");
  var s2 = "vec4(1.0)";
  null != o2 && (Ro(t2, o2), this.variableNames.push("scale"), s2 = "getScaleAtOutCoords()"), this.outputShape = t2, this.userCode = "\n      void main() {\n        vec4 offset = " + i2 + ";\n        vec4 scale = " + s2 + ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(" + a2 + "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ";
};
var Da = "return areal * breal - aimag * bimag;";
var Ta = "return areal * bimag + aimag * breal;";
var Na = function(t2, e2, n2) {
  this.variableNames = ["AReal", "AImag", "BReal", "BImag"], this.outputShape = Ro(e2, n2), this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        " + t2 + "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ";
};
var Fa = "return a + b;";
var _a = "return a - b;";
var Oa = "return a * b;";
var Ma = "return (a < 0.) ? b * a : a;";
var Ba = function(t2, e2, n2) {
  this.variableNames = ["A", "B"], this.outputShape = Ro(e2, n2), this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + t2 + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";
};
var Pa = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
var La = function(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = false), this.variableNames = ["A", "B"], this.supportsBroadcasting = true, this.packedInputs = true, this.packedOutput = true, this.outputShape = Ro(e2, n2);
  var o2 = this.outputShape.length, a2 = "";
  if (r2)
    if (0 === o2 || 1 === k(this.outputShape))
      a2 = "\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";
    else if (a2 = "\n          " + wa(o2) + " coords = getOutputCoords();\n        ", 1 === o2)
      a2 += "\n            result.y = (coords + 1) >= " + this.outputShape[0] + " ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";
    else {
      var i2 = sa("coords", o2);
      a2 += "\n            bool nextRowOutOfBounds =\n              (" + i2[o2 - 2] + " + 1) >= " + this.outputShape[o2 - 2] + ";\n            bool nextColOutOfBounds =\n              (" + i2[o2 - 1] + " + 1) >= " + this.outputShape[o2 - 1] + ";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ";
    }
  this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        " + t2 + "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        " + a2 + "\n\n        setOutput(result);\n      }\n    ";
};
var Wa = function() {
  function t2(t3) {
    this.variableNames = ["A"], this.outputShape = t3, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3, e2) {
    var n2 = this;
    return function(r2, o2) {
      null == n2.minLoc && (n2.minLoc = r2.getUniformLocationNoThrow(o2, "minVal"), n2.maxLoc = r2.getUniformLocationNoThrow(o2, "maxVal")), r2.gl.uniform1f(n2.minLoc, t3), r2.gl.uniform1f(n2.maxLoc, e2);
    };
  }, t2;
}();
var Ua = function() {
  function t2(t3) {
    this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t3, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3, e2) {
    var n2 = this;
    return function(r2, o2) {
      null == n2.minLoc && (n2.minLoc = r2.getUniformLocationNoThrow(o2, "minVal"), n2.maxLoc = r2.getUniformLocationNoThrow(o2, "maxVal")), r2.gl.uniform1f(n2.minLoc, t3), r2.gl.uniform1f(n2.maxLoc, e2);
    };
  }, t2;
}();
var Va = function(t2) {
  this.variableNames = ["real", "imag"], this.outputShape = t2, this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ";
};
var za = function(t2) {
  this.outputShape = [], this.outputShape = Sn(t2, 1), this.variableNames = t2.map(function(t3, e3) {
    return "T" + e3;
  });
  var e2 = new Array(t2.length - 1);
  e2[0] = t2[0][1];
  for (var n2 = 1; n2 < e2.length; n2++)
    e2[n2] = e2[n2 - 1] + t2[n2][1];
  var r2 = ["if (yC < " + e2[0] + ") setOutput(getT0(yR, yC));"];
  for (n2 = 1; n2 < e2.length; n2++) {
    var o2 = e2[n2 - 1];
    r2.push("else if (yC < " + e2[n2] + ") setOutput(getT" + n2 + "(yR, yC-" + o2 + "));");
  }
  var a2 = e2.length, i2 = e2[e2.length - 1];
  r2.push("else setOutput(getT" + a2 + "(yR, yC-" + i2 + "));"), this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        " + r2.join("\n        ") + "\n      }\n    ";
};
var Ga = function(t2, e2) {
  this.packedInputs = true, this.packedOutput = true, this.outputShape = [], this.outputShape = Sn(t2, e2);
  var n2 = this.outputShape, r2 = n2.length, o2 = wa(r2), a2 = sa("coords", r2), i2 = ["x", "y", "z", "w", "u", "v"].slice(0, r2);
  this.variableNames = t2.map(function(t3, e3) {
    return "T" + e3;
  });
  var s2 = new Array(t2.length - 1);
  s2[0] = t2[0][e2];
  for (var u2 = 1; u2 < s2.length; u2++)
    s2[u2] = s2[u2 - 1] + t2[u2][e2];
  var c2 = i2[e2], l2 = i2.slice(-2), h2 = i2.join(), f2 = "if (" + c2 + " < " + s2[0] + ") {\n        return getChannel(\n            getT0(" + h2 + "), vec2(" + l2.join() + "));\n        }";
  for (u2 = 1; u2 < s2.length; u2++) {
    var d2 = s2[u2 - 1];
    f2 += "\n        if (" + c2 + " < " + s2[u2] + "  && " + c2 + " >= " + s2[u2 - 1] + ") {\n          return getChannel(\n            getT" + u2 + "(" + Ha(i2, c2, d2) + "),\n            vec2(" + Ha(l2, c2, d2) + "));\n        }";
  }
  var p2 = s2.length, v2 = s2[s2.length - 1];
  f2 += "\n        return getChannel(\n          getT" + p2 + "(" + Ha(i2, c2, v2) + "),\n          vec2(" + Ha(l2, c2, v2) + "));", this.userCode = "\n      float getValue(" + i2.map(function(t3) {
    return "int " + t3;
  }) + ") {\n        " + f2 + "\n      }\n\n      void main() {\n        " + o2 + " coords = getOutputCoords();\n        vec4 result = vec4(getValue(" + a2 + "), 0., 0., 0.);\n\n        " + a2[r2 - 1] + " = " + a2[r2 - 1] + " + 1;\n        if (" + a2[r2 - 1] + " < " + n2[r2 - 1] + ") {\n          result.g = getValue(" + a2 + ");\n        }\n\n        " + a2[r2 - 2] + " = " + a2[r2 - 2] + " + 1;\n        if (" + a2[r2 - 2] + " < " + n2[r2 - 2] + ") {\n          result.a = getValue(" + a2 + ");\n        }\n\n        " + a2[r2 - 1] + " = " + a2[r2 - 1] + " - 1;\n        if (" + a2[r2 - 2] + " < " + n2[r2 - 2] + " &&\n            " + a2[r2 - 1] + " < " + n2[r2 - 1] + ") {\n          result.b = getValue(" + a2 + ");\n        }\n        setOutput(result);\n      }\n    ";
};
function Ha(t2, e2, n2) {
  var r2 = t2.indexOf(e2);
  return t2.map(function(t3, e3) {
    return e3 === r2 ? t3 + " - " + n2 : t3;
  }).join();
}
var qa = function(t2) {
  this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape;
  var e2 = t2.strideHeight, n2 = t2.strideWidth, r2 = t2.padInfo.top, o2 = t2.padInfo.left, a2 = "channelsLast" === t2.dataFormat;
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n            int xR = wR + yR * " + e2 + " - " + r2 + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n              int xC = wC + yC * " + n2 + " - " + o2 + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              if (" + a2 + ") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Ka = function(t2) {
  this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
  var e2 = t2.filterHeight, n2 = t2.filterWidth, r2 = t2.strideHeight, o2 = t2.strideWidth, a2 = "channelsLast" === t2.dataFormat, i2 = e2 - 1 - t2.padInfo.top, s2 = n2 - 1 - t2.padInfo.left, u2 = a2 ? 1 : 2, c2 = a2 ? 2 : 3, l2 = a2 ? 3 : 1;
  this.userCode = "\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[" + l2 + "];\n\n        ivec2 dyCorner = ivec2(coords[" + u2 + "], coords[" + c2 + "]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + e2 + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e2 + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n2 + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + t2.outChannels + "; d2++) {\n\n              if (" + a2 + ") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var ja = function(t2) {
  this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape;
  var e2 = t2.strideDepth, n2 = t2.strideHeight, r2 = t2.strideWidth, o2 = t2.padInfo.front, a2 = t2.padInfo.top, i2 = t2.padInfo.left;
  this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yF = 0; yF < " + t2.outDepth + "; yF++) {\n            int xF = wF + yF * " + e2 + " - " + o2 + ";\n\n            if (xF < 0 || xF >= " + t2.inDepth + ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n              int xR = wR + yR * " + n2 + " - " + a2 + ";\n\n              if (xR < 0 || xR >= " + t2.inHeight + ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n                int xC = wC + yC * " + r2 + " - " + i2 + ";\n\n                if (xC < 0 || xC >= " + t2.inWidth + ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Xa = function(t2) {
  this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
  var e2 = t2.filterDepth, n2 = t2.filterHeight, r2 = t2.filterWidth, o2 = t2.strideDepth, a2 = t2.strideHeight, i2 = t2.strideWidth, s2 = e2 - 1 - t2.padInfo.front, u2 = n2 - 1 - t2.padInfo.top, c2 = r2 - 1 - t2.padInfo.left;
  this.userCode = "\n      const ivec3 pads = ivec3(" + s2 + ", " + u2 + ", " + c2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + e2 + "; wF++) {\n          float dyF = float(dyFCorner + wF) / " + o2 + ".0;\n\n          if (dyF < 0.0 || dyF >= " + t2.outDepth + ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = " + e2 + " - 1 - wF;\n\n          for (int wR = 0; wR < " + n2 + "; wR++) {\n            float dyR = float(dyRCorner + wR) / " + a2 + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = " + n2 + " - 1 - wR;\n\n            for (int wC = 0; wC < " + r2 + "; wC++) {\n              float dyC = float(dyCCorner + wC) / " + i2 + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = " + r2 + " - 1 - wC;\n\n              for (int d2 = 0; d2 < " + t2.outChannels + "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Ya = function(t2) {
  this.variableNames = ["x", "dy"], this.outputShape = t2.filterShape;
  var e2 = t2.strideHeight, n2 = t2.strideWidth, r2 = t2.padInfo.top, o2 = t2.padInfo.left, a2 = t2.outChannels / t2.inChannels;
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * " + a2 + " + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < " + t2.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t2.outHeight + "; yR++) {\n            int xR = wR + yR * " + e2 + " - " + r2 + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t2.outWidth + "; yC++) {\n              int xC = wC + yC * " + n2 + " - " + o2 + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var $a = function(t2) {
  this.variableNames = ["dy", "W"], this.outputShape = t2.inShape;
  var e2 = t2.filterHeight, n2 = t2.filterWidth, r2 = t2.strideHeight, o2 = t2.strideWidth, a2 = e2 - 1 - t2.padInfo.top, i2 = n2 - 1 - t2.padInfo.left, s2 = t2.outChannels / t2.inChannels;
  this.userCode = "\n      const ivec2 pads = ivec2(" + a2 + ", " + i2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < " + e2 + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e2 + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n2 + " - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < " + s2 + "; dm++) {\n              int d2 = d1 * " + s2 + " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Qa = function(t2, e2, n2, r2) {
  void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false), this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
  var o2 = t2.padInfo.top, a2 = t2.padInfo.left, i2 = t2.strideHeight, s2 = t2.strideWidth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.filterHeight, h2 = t2.filterWidth, f2 = 4 * Math.floor(t2.inChannels / 4), d2 = t2.inChannels % 4, p2 = "channelsLast" === t2.dataFormat, v2 = p2 ? 1 : 2, m2 = p2 ? 2 : 3, g2 = p2 ? 3 : 1, y2 = "", x2 = "";
  n2 && (y2 = r2 ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + n2 + "\n        }" : "\n          float activation(float x) {\n            " + n2 + "\n          }\n        ", x2 = "result = activation(result);");
  var b2 = e2 ? "result += getBiasAtOutCoords();" : "";
  e2 && this.variableNames.push("bias"), r2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + y2 + "\n\n      const ivec2 strides = ivec2(" + i2 + ", " + s2 + ");\n      const ivec2 pads = ivec2(" + o2 + ", " + a2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[" + g2 + "];\n\n        ivec2 xRCCorner =\n            ivec2(coords[" + v2 + "], coords[" + m2 + "]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + l2 + "; wR++) {\n          int xR = xRCorner + wR * " + u2 + ";\n\n          if (xR < 0 || xR >= " + t2.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + h2 + "; wC++) {\n            int xC = xCCorner + wC * " + c2 + ";\n\n            if (xC < 0 || xC >= " + t2.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + f2 + "; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (" + p2 + ") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (" + (1 === d2) + ") {\n\n              if (" + p2 + ") {\n                dotProd +=\n                    getX(batch, xR, xC, " + f2 + ") *\n                    getW(wR, wC, " + f2 + ", d2);\n              } else {\n                dotProd +=\n                    getX(batch, " + f2 + ", xR, xC) *\n                    getW(wR, wC, " + f2 + ", d2);\n              }\n\n            } else if (" + (2 === d2) + ") {\n              vec2 wValues = vec2(\n                getW(wR, wC, " + f2 + ", d2),\n                getW(wR, wC, " + f2 + " + 1, d2)\n              );\n\n              if (" + p2 + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, " + f2 + "),\n                  getX(batch, xR, xC, " + f2 + " + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, " + f2 + ", xR, xC),\n                  getX(batch, " + f2 + " + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (" + (3 === d2) + ") {\n              vec3 wValues = vec3(\n                getW(wR, wC, " + f2 + ", d2),\n                getW(wR, wC, " + f2 + " + 1, d2),\n                getW(wR, wC, " + f2 + " + 2, d2)\n              );\n\n              if (" + p2 + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, " + f2 + "),\n                  getX(batch, xR, xC, " + f2 + " + 1),\n                  getX(batch, xR, xC, " + f2 + " + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, " + f2 + ", xR, xC),\n                  getX(batch, " + f2 + " + 1, xR, xC),\n                  getX(batch, " + f2 + " + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        " + b2 + "\n        " + x2 + "\n        setOutput(result);\n      }\n    ";
};
var Ja = function(t2) {
  this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
  var e2 = t2.padInfo.front, n2 = t2.padInfo.top, r2 = t2.padInfo.left, o2 = t2.strideDepth, a2 = t2.strideHeight, i2 = t2.strideWidth, s2 = t2.dilationDepth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.filterDepth, h2 = t2.filterHeight, f2 = t2.filterWidth, d2 = 4 * Math.floor(t2.inChannels / 4), p2 = t2.inChannels % 4;
  this.userCode = "\n      const ivec3 strides = ivec3(" + o2 + ", " + a2 + ", " + i2 + ");\n      const ivec3 pads = ivec3(" + e2 + ", " + n2 + ", " + r2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + l2 + "; wF++) {\n          int xF = xFCorner + wF * " + s2 + ";\n\n          if (xF < 0 || xF >= " + t2.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h2 + "; wR++) {\n            int xR = xRCorner + wR * " + u2 + ";\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + f2 + "; wC++) {\n              int xC = xCCorner + wC * " + c2 + ";\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < " + d2 + "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (" + (1 === p2) + ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, " + d2 + ") *\n                  getW(wF, wR, wC, " + d2 + ", d2);\n              } else if (" + (2 === p2) + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, " + d2 + "),\n                  getX(batch, xF, xR, xC, " + d2 + " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, " + d2 + ", d2),\n                  getW(wF, wR, wC, " + d2 + " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (" + (3 === p2) + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, " + d2 + "),\n                  getX(batch, xF, xR, xC, " + d2 + " + 1),\n                  getX(batch, xF, xR, xC, " + d2 + " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, " + d2 + ", d2),\n                  getW(wF, wR, wC, " + d2 + " + 1, d2),\n                  getW(wF, wR, wC, " + d2 + " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Za = function(t2, e2, n2, r2) {
  void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false), this.variableNames = ["x", "W"], this.outputShape = t2.outShape;
  var o2 = t2.inHeight, a2 = t2.inWidth, i2 = t2.padInfo.top, s2 = t2.padInfo.left, u2 = t2.strideHeight, c2 = t2.strideWidth, l2 = t2.dilationHeight, h2 = t2.dilationWidth, f2 = t2.filterHeight, d2 = t2.filterWidth, p2 = t2.outChannels / t2.inChannels, v2 = "", m2 = "";
  n2 && (v2 = r2 ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + n2 + "\n        }" : "\n          float activation(float x) {\n            " + n2 + "\n          }\n        ", m2 = "result = activation(result);");
  var g2 = e2 ? "result += getBiasAtOutCoords();" : "";
  e2 && this.variableNames.push("bias"), r2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + v2 + "\n\n      const ivec2 strides = ivec2(" + u2 + ", " + c2 + ");\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + p2 + ";\n        int q = d2 - d1 * " + p2 + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + f2 + "; wR++) {\n          int xR = xRCorner + wR * " + l2 + ";\n\n          if (xR < 0 || xR >= " + o2 + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + d2 + "; wC++) {\n            int xC = xCCorner + wC * " + h2 + ";\n\n            if (xC < 0 || xC >= " + a2 + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        " + g2 + "\n        " + m2 + "\n        setOutput(result);\n      }\n    ";
};
var ti = function(t2, e2, n2, r2) {
  void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false), this.variableNames = ["x", "W"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2.outShape;
  for (var o2 = t2.inHeight, a2 = t2.inWidth, i2 = t2.padInfo.top, s2 = t2.padInfo.left, u2 = t2.strideHeight, c2 = t2.strideWidth, l2 = t2.dilationHeight, h2 = t2.dilationWidth, f2 = t2.filterHeight, d2 = t2.filterWidth, p2 = d2, v2 = "int xR; int xC; int xCOffset;", m2 = 0; m2 < f2; m2++)
    for (var g2 = 0; g2 < d2; g2++)
      v2 += "\n          vec4 xTexelR" + m2 + "C" + 2 * g2 + " = vec4(0.);\n          vec4 wR" + m2 + "C" + g2 + " = vec4(0.);\n          vec4 xR" + m2 + "C" + g2 + " = vec4(0.);";
  for (m2 = 0; m2 < f2; m2++)
    for (var y2 = 0; y2 < p2; y2++) {
      if (v2 += "\n          xR = xRCorner + " + m2 * l2 + ";\n          xC = xCCorner + " + (g2 = 2 * y2) * h2 + ";\n        ", 1 === c2) {
        if (g2 < d2 && (v2 += s2 % 2 == 1 ? "\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < " + o2 + " && xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  xTexelR" + m2 + "C" + g2 + " = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + a2 + ") {\n                    xTexelR" + m2 + "C" + g2 + ".zw = vec2(0.);\n                  }\n                } else {\n                  xTexelR" + m2 + "C" + g2 + " = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < " + o2 + " && xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + a2 + ") {\n                    previous.zw = vec2(0.);\n                  }\n\n                  xR" + m2 + "C" + g2 + " = vec4(previous.zw, xTexelR" + m2 + "C" + g2 + ".xy);\n                } else {\n                  xR" + m2 + "C" + g2 + " = vec4(0, 0, xTexelR" + m2 + "C" + g2 + ".xy);\n                }\n              " : "\n                if(xR >= 0 && xR < " + o2 + " && xC >= 0 && xC < " + a2 + ") {\n                  xTexelR" + m2 + "C" + g2 + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + m2 + "C" + g2 + " = vec4(0.);\n                }\n\n                xR" + m2 + "C" + g2 + " = xTexelR" + m2 + "C" + g2 + ";\n              ", g2 + 1 < d2)) {
          var x2 = s2 % 2 == 0 ? b(h2) : h2;
          h2 % 2 == 0 && s2 % 2 == 1 || h2 % 2 != 0 && s2 % 2 != 1 ? (v2 += "\n                  xCOffset = xC + " + s2 % 2 + " + " + x2 + ";\n\n                  if(xR >= 0 && xR < " + o2 + " &&\n                    xCOffset >= 0 && xCOffset < " + a2 + ") {\n                    xTexelR" + m2 + "C" + (g2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n                ", h2 > 1 && (v2 += "\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < " + o2 + " &&\n                      xCOffset >= 0 && xCOffset < " + a2 + ") {\n                      xTexelR" + m2 + "C" + g2 + " = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR" + m2 + "C" + g2 + " = vec4(0.);\n                    }\n                  "), v2 += "\n                  xR" + m2 + "C" + (g2 + 1) + " = vec4(\n                    xTexelR" + m2 + "C" + g2 + ".zw, xTexelR" + m2 + "C" + (g2 + 2) + ".xy);\n                ") : v2 += "\n                  xCOffset = xC + " + x2 + ";\n\n                  if(xR >= 0 && xR < " + o2 + " &&\n                    xCOffset >= 0 && xCOffset < " + a2 + ") {\n                    xTexelR" + m2 + "C" + (g2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR" + m2 + "C" + (g2 + 1) + " = xTexelR" + m2 + "C" + (g2 + 2) + ";\n                ";
        }
      } else
        g2 < d2 && (v2 += "\n              if(xR >= 0 && xR < " + o2 + ") {\n            ", s2 % 2 == 1 ? (v2 += "\n                xCOffset = xC + 1 - " + c2 + ";\n                if(xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  xTexelR" + m2 + "C" + g2 + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + m2 + "C" + g2 + " = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < " + a2 + ") {\n                  xTexelR" + m2 + "C" + (g2 + 2) + " = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR" + m2 + "C" + (g2 + 2) + " = vec4(0.);\n                }\n\n                xR" + m2 + "C" + g2 + " = vec4(\n                  xTexelR" + m2 + "C" + g2 + ".zw, xTexelR" + m2 + "C" + (g2 + 2) + ".zw);\n              ", g2 + 1 < d2 && (v2 += "\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + " + c2 + ";\n                  if(xCOffset >= 0 && xCOffset < " + a2 + ") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR" + m2 + "C" + (g2 + 1) + " = vec4(xTexelR" + m2 + "C" + (g2 + 2) + ".xy, final.xy);\n                ")) : (v2 += "\n                if(xC >= 0 && xC < " + a2 + ") {\n                  xTexelR" + m2 + "C" + g2 + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + m2 + "C" + g2 + " = vec4(0.);\n                }\n\n                xCOffset = xC + " + c2 + ";\n                if(xCOffset >= 0 && xCOffset < " + a2 + ") {\n                  xTexelR" + m2 + "C" + (g2 + 2) + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + m2 + "C" + (g2 + 2) + " = vec4(0.);\n                }\n\n                xR" + m2 + "C" + g2 + " = vec4(\n                  xTexelR" + m2 + "C" + g2 + ".xy, xTexelR" + m2 + "C" + (g2 + 2) + ".xy);\n              ", g2 + 1 < d2 && (v2 += "\n                  xR" + m2 + "C" + (g2 + 1) + " = vec4(\n                    xTexelR" + m2 + "C" + g2 + ".zw, xTexelR" + m2 + "C" + (g2 + 2) + ".zw);\n                ")), v2 += "}");
      g2 < d2 && (v2 += "\n            vec4 wTexelR" + m2 + "C" + g2 + " = getW(" + m2 + ", " + g2 + ", d1, q);\n            wR" + m2 + "C" + g2 + " = vec4(wTexelR" + m2 + "C" + g2 + ".xz, wTexelR" + m2 + "C" + g2 + ".xz);\n          ", g2 + 1 < d2 && (v2 += "\n              vec4 wTexelR" + m2 + "C" + (g2 + 1) + " = getW(" + m2 + ", " + (g2 + 1) + ", d1, q);\n              wR" + m2 + "C" + (g2 + 1) + " =\n                vec4(wTexelR" + m2 + "C" + (g2 + 1) + ".xz, wTexelR" + m2 + "C" + (g2 + 1) + ".xz);"));
    }
  for (m2 = 0; m2 < f2; m2++)
    for (g2 = 0; g2 < d2; g2++)
      v2 += "dotProd += xR" + m2 + "C" + g2 + " * wR" + m2 + "C" + g2 + ";";
  var w2 = "", C2 = "";
  n2 && (w2 = r2 ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + n2 + "\n        }" : "vec4 activation(vec4 x) {\n          " + n2 + "\n        }", C2 = "result = activation(result);");
  var E2 = e2 ? "result += getBiasAtOutCoords();" : "";
  e2 && this.variableNames.push("bias"), r2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + w2 + "\n\n      const ivec2 strides = ivec2(" + u2 + ", " + c2 + ");\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        " + v2 + "\n\n        vec4 result = dotProd;\n        " + E2 + "\n        " + C2 + "\n        setOutput(result);\n      }\n    ";
};
var ei = function(t2, e2, n2, r2, o2) {
  this.variableNames = ["Image", "Boxes", "BoxInd"], this.outputShape = [];
  var a2 = t2[0], i2 = t2[1], s2 = t2[2], u2 = t2[3], c2 = e2[0], l2 = n2[0], h2 = n2[1];
  this.outputShape = [c2, l2, h2, u2];
  var f2 = "bilinear" === r2 ? 1 : 0, d2 = [i2 - 1 + ".0", s2 - 1 + ".0"], p2 = d2[0], v2 = d2[1], m2 = l2 > 1 ? ["" + (i2 - 1) / (l2 - 1), "(y2-y1) * height_ratio", "y1*" + p2 + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + p2], g2 = m2[0], y2 = m2[1], x2 = m2[2], b2 = h2 > 1 ? ["" + (s2 - 1) / (h2 - 1), "(x2-x1) * width_ratio", "x1*" + v2 + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + v2], w2 = b2[0], C2 = b2[1], E2 = b2[2];
  this.userCode = "\n      const float height_ratio = float(" + g2 + ");\n      const float width_ratio = float(" + w2 + ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= " + a2 + ") {\n          return;\n        }\n\n        float height_scale = " + y2 + ";\n        float width_scale = " + C2 + ";\n\n        float in_y = " + x2 + ";\n        if( in_y < 0.0 || in_y > " + p2 + " ) {\n          setOutput(float(" + o2 + "));\n          return;\n        }\n        float in_x = " + E2 + ";\n        if( in_x < 0.0 || in_x > " + v2 + " ) {\n          setOutput(float(" + o2 + "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(" + f2 + " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ";
};
var ni = function(t2, e2, n2) {
  this.variableNames = ["x"], this.outputShape = t2;
  var r2 = t2.length, o2 = t2[t2.length - 1], a2 = n2 ? "<" : ">";
  this.userCode = "\n      int getIndex(int i) {\n        " + (n2 ? "return " + o2 + " -i - 1;" : "return i;") + "\n      }\n\n      void main() {\n        " + wa(r2) + " coords = getOutputCoords();\n        int end = " + ri(r2, "coords") + ";\n        float val = 0.0;\n        for (int i = " + o2 + " - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx " + a2 + " end) {\n            continue;\n          }\n          if (idx == end && " + e2 + ") {\n            continue;\n          }\n          " + ri(r2, "coords") + " = idx;\n          val += getX(" + function(t3, e3) {
    if (1 === t3)
      return "" + e3;
    if (2 === t3)
      return e3 + ".x, " + e3 + ".y";
    if (3 === t3)
      return e3 + ".x, " + e3 + ".y, " + e3 + ".z";
    if (4 === t3)
      return e3 + ".x, " + e3 + ".y, " + e3 + ".z, " + e3 + ".w";
    throw Error("Cumulative sum for rank " + t3 + " is not yet supported");
  }(r2, "coords") + ");\n        }\n        setOutput(val);\n      }\n    ";
};
function ri(t2, e2) {
  if (1 === t2)
    return "" + e2;
  if (2 === t2)
    return e2 + ".y";
  if (3 === t2)
    return e2 + ".z";
  if (4 === t2)
    return e2 + ".w";
  throw Error("Cumulative sum for rank " + t2 + " is not yet supported");
}
var oi = function(t2) {
  this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true, this.outPackingScheme = Vt.DENSE;
  var e2 = Yt(t2), n2 = ua();
  this.outputShape = t2, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + ca(["r", "c", "d"], t2) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + e2[0] + ", " + e2[1] + "));\n        int index = 4 * (resTexRC.x * " + e2[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        " + n2.output + " = result;\n      }\n    ";
};
var ai = function(t2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outPackingScheme = Vt.DENSE;
  var e2 = Yt(t2), n2 = ua();
  this.outputShape = t2, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + ca(["r", "c", "d"], t2) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + e2[0] + ", " + e2[1] + "));\n        int index = 4 * (resTexRC.x * " + e2[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        " + n2.output + " = result;\n      }\n    ";
};
var ii = function() {
  function t2(t3, e2, n2) {
    this.variableNames = ["x"], this.outputShape = [], this.outputShape = t3, this.blockSize = e2, this.dataFormat = n2, this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = " + this.getHeightCoordString() + ";\n      int w = " + this.getWidthCoordString() + ";\n      int d = " + this.getDepthCoordString() + ";\n\n      int in_h = h / " + e2 + ";\n      int offset_h = imod(h, " + e2 + ");\n      int in_w = w / " + e2 + ";\n      int offset_w = imod(w, " + e2 + ");\n      int offset_d = (offset_h * " + e2 + " + offset_w) *\n        " + this.getOutputDepthSize() + ";\n      int in_d = d + offset_d;\n\n      float result = " + this.getInputSamplingString() + ";\n      setOutput(result);\n    }\n  ";
  }
  return t2.prototype.getHeightCoordString = function() {
    return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]";
  }, t2.prototype.getWidthCoordString = function() {
    return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]";
  }, t2.prototype.getDepthCoordString = function() {
    return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]";
  }, t2.prototype.getOutputDepthSize = function() {
    return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1];
  }, t2.prototype.getInputSamplingString = function() {
    return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)";
  }, t2;
}();
var si = function(t2) {
  this.variableNames = ["X"], this.outputShape = [t2, t2], this.userCode = "\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ";
};
var ui = function(t2) {
  this.variableNames = ["A"], this.outTexUsage = zt.DOWNLOAD;
  var e2 = ua();
  this.outputShape = t2, this.userCode = "\n      " + ha + "\n\n      void main() {\n        float x = getAAtOutCoords();\n        " + e2.output + " = encode_float(x);\n      }\n    ";
};
var ci = function(t2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = false, this.outTexUsage = zt.DOWNLOAD;
  var e2 = ua();
  this.outputShape = t2, this.userCode = "\n      " + ha + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        " + e2.output + " = encode_float(x);\n      }\n    ";
};
var li = function(t2, e2, n2) {
  void 0 === n2 && (n2 = false), this.variableNames = ["A"];
  var r2 = ua(), o2 = e2[0], a2 = e2[1];
  this.outputShape = t2;
  var i2 = "result";
  n2 && (i2 = "floor(result * 255. + 0.5)"), this.userCode = "\n      " + la(t2) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / " + a2 + ";\n        int c = imod(flatIndex, " + a2 + ");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(" + a2 + ".0, " + o2 + ".0);\n        vec4 values = " + r2.texture2D + "(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        " + r2.output + " = vec4(" + i2 + ", 0., 0., 0.);\n      }\n    ";
};
var hi = function(t2, e2, n2) {
  void 0 === n2 && (n2 = false), this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true;
  var r2 = ua(), o2 = e2[0], a2 = e2[1];
  this.outputShape = t2;
  var i2 = "", s2 = "result";
  n2 && (s2 = "floor(result * 255. + 0.5)");
  for (var u2 = 0; u2 <= 1; u2++)
    for (var c2 = 0; c2 <= 1; c2++) {
      var l2 = 2 * u2 + c2;
      i2 += "\n          localCoords = coords;\n          if(localCoords[2] + " + c2 + " < " + t2[2] + ") {\n            localCoords[2] += " + c2 + ";\n            if(localCoords[1] + " + u2 + " < " + t2[1] + ") {\n              localCoords[1] += " + u2 + ";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / " + a2 + ";\n              c = imod(flatIndex, " + a2 + ");\n              uv = (vec2(c, r) + halfCR) / vec2(" + a2 + ".0, " + o2 + ".0);\n              values = " + r2.texture2D + "(A, uv);\n\n              if(offset == 0) {\n                result[" + l2 + "] = values[0];\n              } else if(offset == 1) {\n                result[" + l2 + "] = values[1];\n              } else if(offset == 2) {\n                result[" + l2 + "] = values[2];\n              } else {\n                result[" + l2 + "] = values[3];\n              }\n            }\n          }\n        ";
    }
  this.userCode = "\n      " + la(t2) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        " + i2 + "\n\n        " + r2.output + " = " + s2 + ";\n      }\n    ";
};
var fi = "return real * expR - imag * expI;";
var di = "return real * expI + imag * expR;";
var pi = function(t2, e2, n2) {
  this.variableNames = ["real", "imag"];
  var r2 = e2[1];
  this.outputShape = e2;
  var o2 = n2 ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI, a2 = n2 ? r2 + ".0" : "1.0";
  this.userCode = "\n      const float exponentMultiplier = " + o2 + ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + t2 + "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(" + r2 + ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < " + r2 + "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / " + a2 + ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ";
};
var vi = function() {
  function t2(t3, e2) {
    this.outputShape = [], this.variableNames = ["x"], this.outputShape = t3, this.userCode = "\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var e2 = this;
    return function(n2, r2) {
      null == e2.valueLoc && (e2.valueLoc = n2.getUniformLocationNoThrow(r2, "value")), n2.gl.uniform1f(e2.valueLoc, t3);
    };
  }, t2;
}();
var mi = function(t2, e2, n2) {
  this.variableNames = ["A", "indices"];
  var r2 = t2.slice();
  r2[n2] = e2, this.outputShape = r2, this.rank = r2.length;
  var o2 = wa(this.rank), a2 = function(t3, e3) {
    var n3 = t3.length;
    if (n3 > 4)
      throw Error("Gather for rank " + n3 + " is not yet supported");
    if (1 === n3)
      return "int(getIndices(resRC))";
    for (var r3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], o3 = [], a3 = 0; a3 < t3.length; a3++)
      a3 === e3 ? o3.push("int(getIndices(" + r3[a3] + "))") : o3.push("" + r3[a3]);
    return o3.join();
  }(t2, n2);
  this.userCode = "\n      void main() {\n        " + o2 + " resRC = getOutputCoords();\n        setOutput(getA(" + a2 + "));\n      }\n    ";
};
var gi = function(t2, e2, n2) {
  this.sliceDim = t2, this.strides = e2, this.variableNames = ["x", "indices"], this.outputShape = n2;
  var r2 = wa(e2.length), o2 = wa(n2.length), a2 = this.sliceDim > 1 ? "strides[j]" : "strides";
  this.userCode = "\n        " + r2 + " strides = " + r2 + "(" + this.strides + ");\n         void main() {\n          " + o2 + " coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < " + this.sliceDim + "; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * " + a2 + ";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      ";
};
function yi(t2, e2) {
  var n2 = ua();
  return oe(t2, e2, n2.version + "\n    precision highp float;\n    " + n2.attribute + " vec3 clipSpacePos;\n    " + n2.attribute + " vec2 uv;\n    " + n2.varyingVs + " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }");
}
function xi(t2, e2) {
  return fe(t2, e2, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]));
}
function bi(t2, e2) {
  return de(t2, e2, new Uint16Array([0, 1, 2, 2, 1, 3]));
}
function wi(t2, e2, n2, r2, o2, a2, i2) {
  ve(n2, r2);
  var s2 = pe(t2, e2), u2 = t2.TEXTURE_2D;
  return Jt(t2, e2, function() {
    return t2.bindTexture(u2, s2);
  }), Jt(t2, e2, function() {
    return t2.texParameteri(u2, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE);
  }), Jt(t2, e2, function() {
    return t2.texParameteri(u2, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE);
  }), Jt(t2, e2, function() {
    return t2.texParameteri(u2, t2.TEXTURE_MIN_FILTER, t2.NEAREST);
  }), Jt(t2, e2, function() {
    return t2.texParameteri(u2, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
  }), Jt(t2, e2, function() {
    return t2.texImage2D(u2, 0, o2, n2, r2, 0, a2, i2, null);
  }), Jt(t2, e2, function() {
    return t2.bindTexture(t2.TEXTURE_2D, null);
  }), s2;
}
function Ci(t2, e2, n2, r2, o2) {
  var a2 = Xt(n2, r2);
  return wi(t2, e2, a2[0], a2[1], o2.internalFormatFloat, o2.textureFormatFloat, t2.FLOAT);
}
function Ei(t2, e2, n2, r2, o2) {
  var a2 = Xt(n2, r2);
  return wi(t2, e2, a2[0], a2[1], o2.internalFormatHalfFloat, o2.textureFormatFloat, o2.textureTypeHalfFloat);
}
function Ri(t2, e2, n2, r2, o2) {
  var a2 = Xt(n2, r2);
  return wi(t2, e2, a2[0], a2[1], t2.RGBA, t2.RGBA, t2.UNSIGNED_BYTE);
}
function Ii(t2, e2, n2, r2, o2) {
  var a2 = $t(n2, r2);
  return wi(t2, e2, a2[0], a2[1], o2.internalFormatPackedFloat, t2.RGBA, t2.FLOAT);
}
function ki(t2, e2, n2, r2, o2) {
  var a2 = $t(n2, r2);
  return wi(t2, e2, a2[0], a2[1], o2.internalFormatPackedHalfFloat, t2.RGBA, o2.textureTypeHalfFloat);
}
function Si(t2, e2, n2, r2) {
  return Jt(t2, e2, function() {
    return t2.bindBuffer(t2.ARRAY_BUFFER, r2);
  }), ge(t2, e2, n2, "clipSpacePos", r2, 3, 20, 0) && ge(t2, e2, n2, "uv", r2, 2, 20, 12);
}
function Ai(t2, e2, n2, r2, o2, a2, i2) {
  var s2, u2, c2;
  Jt(t2, e2, function() {
    return t2.bindTexture(t2.TEXTURE_2D, n2);
  }), a2 instanceof Uint8Array ? (s2 = new Uint8Array(r2 * o2 * 4), u2 = t2.UNSIGNED_BYTE, c2 = t2.RGBA) : (s2 = new Float32Array(r2 * o2 * 4), u2 = t2.FLOAT, c2 = i2.internalFormatPackedFloat), s2.set(a2), Jt(t2, e2, function() {
    return t2.texImage2D(t2.TEXTURE_2D, 0, c2, r2, o2, 0, t2.RGBA, u2, s2);
  }), Jt(t2, e2, function() {
    return t2.bindTexture(t2.TEXTURE_2D, null);
  });
}
function Di(t2, e2, n2, r2) {
  Jt(t2, e2, function() {
    return t2.bindTexture(t2.TEXTURE_2D, n2);
  }), r2.data instanceof Uint8Array ? Jt(t2, e2, function() {
    return t2.texImage2D(t2.TEXTURE_2D, 0, t2.RGBA, r2.width, r2.height, 0, t2.RGBA, t2.UNSIGNED_BYTE, r2.data);
  }) : Jt(t2, e2, function() {
    return t2.texImage2D(t2.TEXTURE_2D, 0, t2.RGBA, t2.RGBA, t2.UNSIGNED_BYTE, r2);
  }), Jt(t2, e2, function() {
    return t2.bindTexture(t2.TEXTURE_2D, null);
  });
}
function Ti(t2, e2, n2, r2, o2) {
  var a2 = t2.createBuffer();
  Jt(t2, e2, function() {
    return t2.bindBuffer(t2.PIXEL_PACK_BUFFER, a2);
  });
  var i2 = 16 * n2 * r2;
  return Jt(t2, e2, function() {
    return t2.bufferData(t2.PIXEL_PACK_BUFFER, i2, t2.STREAM_READ);
  }), Jt(t2, e2, function() {
    return t2.readPixels(0, 0, r2, n2, t2.RGBA, t2.FLOAT, 0);
  }), Jt(t2, e2, function() {
    return t2.bindBuffer(t2.PIXEL_PACK_BUFFER, null);
  }), a2;
}
function Ni(t2, e2, n2) {
  var r2 = t2, o2 = new Float32Array(n2);
  return r2.bindBuffer(r2.PIXEL_PACK_BUFFER, e2), r2.getBufferSubData(r2.PIXEL_PACK_BUFFER, 0, o2), r2.bindBuffer(r2.PIXEL_PACK_BUFFER, null), o2;
}
function Fi(t2, e2, n2, r2, o2) {
  var a2 = Xt(n2, r2), i2 = a2[0], s2 = a2[1], u2 = new Uint8Array(n2 * r2 * 4);
  return Jt(t2, e2, function() {
    return t2.readPixels(0, 0, i2, s2, o2.downloadTextureFormat, t2.UNSIGNED_BYTE, u2);
  }), new Float32Array(u2.buffer);
}
function _i(t2, e2, n2, r2, o2, a2, i2, s2) {
  var u2 = t2, c2 = new Float32Array(function(t3, e3) {
    var n3 = $t(t3, e3);
    return n3[0] * n3[1] * 4;
  }(a2, i2));
  return u2.bindBuffer(u2.PIXEL_PACK_BUFFER, e2), u2.getBufferSubData(u2.PIXEL_PACK_BUFFER, 0, c2), u2.bindBuffer(u2.PIXEL_PACK_BUFFER, null), c2;
}
function Oi(t2, e2, n2, r2) {
  var o2 = new Float32Array(n2 * r2 * 4);
  return Jt(t2, e2, function() {
    return t2.readPixels(0, 0, r2, n2, t2.RGBA, t2.FLOAT, o2);
  }), o2;
}
var Mi = Object.freeze({ createVertexShader: yi, createVertexBuffer: xi, createIndexBuffer: bi, createFloat32MatrixTexture: Ci, createFloat16MatrixTexture: Ei, createUnsignedBytesMatrixTexture: Ri, createPackedMatrixTexture: Ii, createFloat16PackedMatrixTexture: ki, bindVertexProgramAttributeStreams: Si, uploadDenseMatrixToTexture: Ai, uploadPixelDataToTexture: Di, createBufferFromOutputTexture: Ti, downloadFloat32MatrixFromBuffer: Ni, downloadByteEncodedFloatMatrixFromOutputTexture: Fi, downloadPackedMatrixFromBuffer: _i, downloadMatrixFromPackedOutputTexture: Oi });
var Bi = function() {
  function t2(t3) {
    this.outputTexture = null, this.program = null, this.disposed = false, this.vertexAttrsAreBound = false, this.itemsToPoll = [];
    var e2 = i().getNumber("WEBGL_VERSION");
    null != t3 ? (this.gl = t3, Kt(e2, t3)) : this.gl = jt(e2);
    var n2 = "WEBGL_color_buffer_float";
    if (1 === i().getNumber("WEBGL_VERSION")) {
      if (this.textureFloatExtension = re(this.gl, this.debug, "OES_texture_float"), Pe(this.gl, "OES_texture_half_float"))
        this.textureHalfFloatExtension = re(this.gl, this.debug, "OES_texture_half_float");
      else if (i().get("WEBGL_FORCE_F16_TEXTURES"))
        throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      if (this.colorBufferFloatExtension = this.gl.getExtension(n2), Pe(this.gl, "EXT_color_buffer_half_float"))
        this.colorBufferHalfFloatExtension = re(this.gl, this.debug, "EXT_color_buffer_half_float");
      else if (i().get("WEBGL_FORCE_F16_TEXTURES"))
        throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
    } else if (n2 = "EXT_color_buffer_float", Pe(this.gl, n2))
      this.colorBufferFloatExtension = this.gl.getExtension(n2);
    else {
      if (!Pe(this.gl, "EXT_color_buffer_half_float"))
        throw new Error("GL context does not support color renderable floats");
      this.colorBufferHalfFloatExtension = this.gl.getExtension("EXT_color_buffer_half_float");
    }
    this.vertexBuffer = xi(this.gl, this.debug), this.indexBuffer = bi(this.gl, this.debug), this.framebuffer = me(this.gl, this.debug), this.textureConfig = Qt(this.gl, this.textureHalfFloatExtension);
  }
  return Object.defineProperty(t2.prototype, "debug", { get: function() {
    return i().getBool("DEBUG");
  }, enumerable: true, configurable: true }), t2.prototype.dispose = function() {
    var t3 = this;
    if (!this.disposed) {
      null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
      var e2 = this.gl;
      Jt(e2, this.debug, function() {
        return e2.finish();
      }), Jt(e2, this.debug, function() {
        return e2.bindFramebuffer(e2.FRAMEBUFFER, null);
      }), Jt(e2, this.debug, function() {
        return e2.deleteFramebuffer(t3.framebuffer);
      }), Jt(e2, this.debug, function() {
        return e2.bindBuffer(e2.ARRAY_BUFFER, null);
      }), Jt(e2, this.debug, function() {
        return e2.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, null);
      }), Jt(e2, this.debug, function() {
        return e2.deleteBuffer(t3.indexBuffer);
      }), this.disposed = true;
    }
  }, t2.prototype.createFloat32MatrixTexture = function(t3, e2) {
    return this.throwIfDisposed(), Ci(this.gl, this.debug, t3, e2, this.textureConfig);
  }, t2.prototype.createFloat16MatrixTexture = function(t3, e2) {
    return this.throwIfDisposed(), Ei(this.gl, this.debug, t3, e2, this.textureConfig);
  }, t2.prototype.createUnsignedBytesMatrixTexture = function(t3, e2) {
    return this.throwIfDisposed(), Ri(this.gl, this.debug, t3, e2, this.textureConfig);
  }, t2.prototype.uploadPixelDataToTexture = function(t3, e2) {
    this.throwIfDisposed(), Di(this.gl, this.debug, t3, e2);
  }, t2.prototype.uploadDenseMatrixToTexture = function(t3, e2, n2, r2) {
    this.throwIfDisposed(), Ai(this.gl, this.debug, t3, e2, n2, r2, this.textureConfig);
  }, t2.prototype.createFloat16PackedMatrixTexture = function(t3, e2) {
    return this.throwIfDisposed(), ki(this.gl, this.debug, t3, e2, this.textureConfig);
  }, t2.prototype.createPackedMatrixTexture = function(t3, e2) {
    return this.throwIfDisposed(), Ii(this.gl, this.debug, t3, e2, this.textureConfig);
  }, t2.prototype.deleteMatrixTexture = function(t3) {
    var e2 = this;
    this.throwIfDisposed(), this.outputTexture === t3 && (Ee(this.gl, this.debug, this.framebuffer), this.outputTexture = null), Jt(this.gl, this.debug, function() {
      return e2.gl.deleteTexture(t3);
    });
  }, t2.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function(t3, e2, n2) {
    var r2 = this;
    return this.downloadMatrixDriver(t3, function() {
      return Fi(r2.gl, r2.debug, e2, n2, r2.textureConfig);
    });
  }, t2.prototype.downloadPackedMatrixFromBuffer = function(t3, e2, n2, r2, o2, a2) {
    return _i(this.gl, t3, 0, 0, 0, o2, a2, this.textureConfig);
  }, t2.prototype.downloadFloat32MatrixFromBuffer = function(t3, e2) {
    return Ni(this.gl, t3, e2);
  }, t2.prototype.createBufferFromTexture = function(t3, e2, n2) {
    this.bindTextureToFrameBuffer(t3);
    var r2 = Ti(this.gl, this.debug, e2, n2, this.textureConfig);
    return this.unbindTextureToFrameBuffer(), r2;
  }, t2.prototype.createAndWaitForFence = function() {
    var t3 = this.createFence(this.gl);
    return this.pollFence(t3);
  }, t2.prototype.createFence = function(t3) {
    var e2, n2, r2 = this;
    if (i().getBool("WEBGL_FENCE_API_ENABLED")) {
      var o2 = t3, a2 = o2.fenceSync(o2.SYNC_GPU_COMMANDS_COMPLETE, 0);
      t3.flush(), n2 = function() {
        var t4 = o2.clientWaitSync(a2, 0, 0);
        return t4 === o2.ALREADY_SIGNALED || t4 === o2.CONDITION_SATISFIED;
      }, e2 = a2;
    } else
      i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? (e2 = this.beginQuery(), this.endQuery(), n2 = function() {
        return r2.isQueryAvailable(e2, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
      }) : n2 = function() {
        return true;
      };
    return { query: e2, isFencePassed: n2 };
  }, t2.prototype.downloadMatrixFromPackedTexture = function(t3, e2, n2) {
    var r2 = this;
    return this.downloadMatrixDriver(t3, function() {
      return Oi(r2.gl, r2.debug, e2, n2);
    });
  }, t2.prototype.createProgram = function(t3) {
    this.throwIfDisposed();
    var e2 = this.gl, n2 = ae(e2, this.debug, t3), r2 = yi(e2, this.debug), o2 = ce(e2, this.debug);
    return Jt(e2, this.debug, function() {
      return e2.attachShader(o2, r2);
    }), Jt(e2, this.debug, function() {
      return e2.attachShader(o2, n2);
    }), le(e2, this.debug, o2), this.debug && he(e2, this.debug, o2), this.vertexAttrsAreBound || (this.setProgram(o2), this.vertexAttrsAreBound = Si(e2, this.debug, this.program, this.vertexBuffer)), o2;
  }, t2.prototype.deleteProgram = function(t3) {
    var e2 = this;
    this.throwIfDisposed(), t3 === this.program && (this.program = null), null != t3 && Jt(this.gl, this.debug, function() {
      return e2.gl.deleteProgram(t3);
    });
  }, t2.prototype.setProgram = function(t3) {
    var e2 = this;
    this.throwIfDisposed(), this.program = t3, null != this.program && this.debug && he(this.gl, this.debug, this.program), Jt(this.gl, this.debug, function() {
      return e2.gl.useProgram(t3);
    });
  }, t2.prototype.getUniformLocation = function(t3, e2, n2) {
    return void 0 === n2 && (n2 = true), this.throwIfDisposed(), n2 ? xe(this.gl, this.debug, t3, e2) : be(this.gl, t3, e2);
  }, t2.prototype.getAttributeLocation = function(t3, e2) {
    var n2 = this;
    return this.throwIfDisposed(), Jt(this.gl, this.debug, function() {
      return n2.gl.getAttribLocation(t3, e2);
    });
  }, t2.prototype.getUniformLocationNoThrow = function(t3, e2) {
    return this.throwIfDisposed(), this.gl.getUniformLocation(t3, e2);
  }, t2.prototype.setInputMatrixTexture = function(t3, e2, n2) {
    this.throwIfDisposed(), this.throwIfNoProgram(), we(this.gl, this.debug, this.program, t3, e2, n2);
  }, t2.prototype.setOutputMatrixTexture = function(t3, e2, n2) {
    this.setOutputMatrixTextureDriver(t3, n2, e2);
  }, t2.prototype.setOutputPackedMatrixTexture = function(t3, e2, n2) {
    this.throwIfDisposed();
    var r2 = $t(e2, n2), o2 = r2[0], a2 = r2[1];
    this.setOutputMatrixTextureDriver(t3, o2, a2);
  }, t2.prototype.setOutputMatrixWriteRegion = function(t3, e2, n2, r2) {
    this.setOutputMatrixWriteRegionDriver(n2, t3, r2, e2);
  }, t2.prototype.setOutputPackedMatrixWriteRegion = function(t3, e2, n2, r2) {
    throw new Error("setOutputPackedMatrixWriteRegion not implemented.");
  }, t2.prototype.debugValidate = function() {
    null != this.program && he(this.gl, this.debug, this.program), Re(this.gl);
  }, t2.prototype.executeProgram = function() {
    this.throwIfDisposed(), this.throwIfNoProgram();
    var t3 = this.gl;
    this.debug && this.debugValidate(), Jt(t3, this.debug, function() {
      return t3.drawElements(t3.TRIANGLES, 6, t3.UNSIGNED_SHORT, 0);
    });
  }, t2.prototype.blockUntilAllProgramsCompleted = function() {
    var t3 = this;
    this.throwIfDisposed(), Jt(this.gl, this.debug, function() {
      return t3.gl.finish();
    });
  }, t2.prototype.getQueryTimerExtension = function() {
    return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = re(this.gl, this.debug, 2 === i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension;
  }, t2.prototype.getQueryTimerExtensionWebGL2 = function() {
    return this.getQueryTimerExtension();
  }, t2.prototype.getQueryTimerExtensionWebGL1 = function() {
    return this.getQueryTimerExtension();
  }, t2.prototype.beginQuery = function() {
    if (2 === i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
      var t3 = this.gl, e2 = this.getQueryTimerExtensionWebGL2(), n2 = t3.createQuery();
      return t3.beginQuery(e2.TIME_ELAPSED_EXT, n2), n2;
    }
    var r2 = this.getQueryTimerExtensionWebGL1(), o2 = r2.createQueryEXT();
    return r2.beginQueryEXT(r2.TIME_ELAPSED_EXT, o2), o2;
  }, t2.prototype.endQuery = function() {
    if (2 !== i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
      var t3 = this.getQueryTimerExtensionWebGL1();
      t3.endQueryEXT(t3.TIME_ELAPSED_EXT);
    } else {
      var e2 = this.gl, n2 = this.getQueryTimerExtensionWebGL2();
      e2.endQuery(n2.TIME_ELAPSED_EXT);
    }
  }, t2.prototype.waitForQueryAndGetTime = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2 = this;
      return r(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, F(function() {
              return e2.disposed || e2.isQueryAvailable(t3, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
            })];
          case 1:
            return n2.sent(), [2, this.getQueryTime(t3, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))];
        }
      });
    });
  }, t2.prototype.getQueryTime = function(t3, e2) {
    if (0 === e2)
      return null;
    if (2 === e2) {
      var n2 = this.gl;
      return n2.getQueryParameter(t3, n2.QUERY_RESULT) / 1e6;
    }
    var r2 = this.getQueryTimerExtensionWebGL1();
    return r2.getQueryObjectEXT(t3, r2.QUERY_RESULT_EXT) / 1e6;
  }, t2.prototype.isQueryAvailable = function(t3, e2) {
    if (0 === e2)
      return true;
    if (2 === e2) {
      var n2 = this.gl, r2 = this.getQueryTimerExtensionWebGL2(), o2 = n2.getQueryParameter(t3, n2.QUERY_RESULT_AVAILABLE);
      return null == this.disjoint && (this.disjoint = this.gl.getParameter(r2.GPU_DISJOINT_EXT)), o2 && !this.disjoint;
    }
    o2 = (r2 = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t3, r2.QUERY_RESULT_AVAILABLE_EXT);
    return null == this.disjoint && (this.disjoint = this.gl.getParameter(r2.GPU_DISJOINT_EXT)), o2 && !this.disjoint;
  }, t2.prototype.pollFence = function(t3) {
    var e2 = this;
    return new Promise(function(n2) {
      e2.addItemToPoll(function() {
        return t3.isFencePassed();
      }, function() {
        return n2();
      });
    });
  }, t2.prototype.pollItems = function() {
    for (var t3 = function(t4) {
      for (var e3 = 0; e3 < t4.length; ++e3) {
        if (!t4[e3]())
          break;
      }
      return e3 - 1;
    }(this.itemsToPoll.map(function(t4) {
      return t4.isDoneFn;
    })), e2 = 0; e2 <= t3; ++e2) {
      (0, this.itemsToPoll[e2].resolveFn)();
    }
    this.itemsToPoll = this.itemsToPoll.slice(t3 + 1);
  }, t2.prototype.addItemToPoll = function(t3, e2) {
    var n2 = this;
    this.itemsToPoll.push({ isDoneFn: t3, resolveFn: e2 }), this.itemsToPoll.length > 1 || F(function() {
      return n2.pollItems(), 0 === n2.itemsToPoll.length;
    });
  }, t2.prototype.bindTextureToFrameBuffer = function(t3) {
    this.throwIfDisposed(), Ce(this.gl, this.debug, t3, this.framebuffer), this.debug && Re(this.gl);
  }, t2.prototype.unbindTextureToFrameBuffer = function() {
    null != this.outputTexture ? (Ce(this.gl, this.debug, this.outputTexture, this.framebuffer), this.debug && Re(this.gl)) : Ee(this.gl, this.debug, this.framebuffer);
  }, t2.prototype.downloadMatrixDriver = function(t3, e2) {
    this.bindTextureToFrameBuffer(t3);
    var n2 = e2();
    return this.unbindTextureToFrameBuffer(), n2;
  }, t2.prototype.setOutputMatrixTextureDriver = function(t3, e2, n2) {
    this.throwIfDisposed();
    var r2 = this.gl;
    Ce(r2, this.debug, t3, this.framebuffer), this.debug && Re(r2), this.outputTexture = t3, Jt(r2, this.debug, function() {
      return r2.viewport(0, 0, e2, n2);
    }), Jt(r2, this.debug, function() {
      return r2.scissor(0, 0, e2, n2);
    });
  }, t2.prototype.setOutputMatrixWriteRegionDriver = function(t3, e2, n2, r2) {
    var o2 = this;
    this.throwIfDisposed(), Jt(this.gl, this.debug, function() {
      return o2.gl.scissor(t3, e2, n2, r2);
    });
  }, t2.prototype.throwIfDisposed = function() {
    if (this.disposed)
      throw new Error("Attempted to use disposed GPGPUContext.");
  }, t2.prototype.throwIfNoProgram = function() {
    if (null == this.program)
      throw new Error("No GPU program is currently set.");
  }, t2;
}();
function Pi(t2, e2) {
  if (t2.length !== e2.length)
    throw Error("Binary was compiled with " + t2.length + " inputs, but was executed with " + e2.length + " inputs");
  t2.forEach(function(t3, n2) {
    var r2 = t3.logicalShape, o2 = e2[n2], a2 = o2.shape;
    if (!S(r2, a2))
      throw Error("Binary was compiled with different shapes than the current args. Shapes " + r2 + " and " + a2 + " must match");
    if (!t3.isUniform || !o2.isUniform) {
      var i2 = t3.texShape, s2 = o2.isUniform ? null : o2.texData.texShape;
      if (!S(i2, s2))
        throw Error("Binary was compiled with different texture shapes than the current args. Shape " + i2 + " and " + s2 + " must match");
    }
  });
}
var Li = function(t2, e2, n2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2;
  for (var r2 = n2.filterWidth, o2 = n2.inChannels, a2 = n2.strideWidth, i2 = n2.strideHeight, s2 = n2.padInfo, u2 = n2.outWidth, c2 = n2.dilationWidth, l2 = n2.dilationHeight, h2 = n2.dataFormat, f2 = s2.left, d2 = s2.top, p2 = o2 * r2, v2 = ua(), m2 = "channelsLast" === h2, g2 = m2 ? 0 : 1, y2 = m2 ? 1 : 2, x2 = "", b2 = 0; b2 <= 1; b2++)
    for (var w2 = 0; w2 <= 1; w2++)
      x2 += "\n          blockIndex = rc.y + " + w2 + ";\n          pos = rc.x + " + b2 + ";\n\n          if(blockIndex < " + t2[1] + " && pos < " + t2[0] + ") {\n            offsetY = int(blockIndex / (" + u2 + ")) * " + i2 + " - " + d2 + ";\n            d0 = offsetY + " + l2 + " * (pos / " + p2 + ");\n\n            if(d0 < " + e2[g2] + " && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), " + u2 + ".) * " + a2 + ". - " + f2 + ".);\n              d1 = offsetX + " + c2 + " * (int(mod(float(pos), " + p2 + ".) / " + o2 + ".));\n\n              if(d1 < " + e2[y2] + " && d1 >= 0) {\n\n                ch = int(mod(float(pos), " + o2 + ".));\n\n                if (" + m2 + ") {\n                  innerDims = vec2(d1, ch);\n                  result[" + (2 * b2 + w2) + "] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[" + (2 * b2 + w2) + "] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";
  this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        " + x2 + "\n\n        " + v2.output + " = result;\n      }\n    ";
};
var Wi = function(t2, e2, n2, r2, o2) {
  this.variableNames = ["x"], this.outputShape = [];
  var a2, i2 = e2, s2 = t2[3] - 1;
  this.outputShape = t2;
  var u2 = "float(" + n2 + ") + float(" + r2 + ") * sum";
  a2 = 0.5 === o2 ? "inversesqrt(" + u2 + ")" : 1 === o2 ? "1.0/(" + u2 + ")" : "exp(log(" + u2 + ") * float(-" + o2 + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + i2 + "; j <= " + i2 + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + s2 + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + a2 + ";\n        setOutput(val);\n      }\n    ";
};
var Ui = function(t2, e2, n2, r2, o2) {
  this.variableNames = ["inputImage", "outputImage", "dy"], this.outputShape = [], this.outputShape = t2, this.depth = t2[3], this.depthRadius = e2, this.bias = n2, this.alpha = r2, this.beta = o2, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < " + this.depth + "; ++d) {\n          int depthBegin = int(max(0.0, float(d - " + e2 + ")));\n          int depthEnd = int(min(float(" + this.depth + "),\n              float(d + " + e2 + " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = " + this.depth + ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(" + r2 + ") * norm + float(" + n2 + ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(" + r2 + ")\n                * float(" + o2 + ")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * " + o2 + ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ";
};
var Vi = function(t2, e2, n2, r2, o2) {
  this.variableNames = ["x"], this.outputShape = [], this.packedInputs = true, this.packedOutput = true;
  var a2, i2 = e2, s2 = t2[3] - 1;
  this.outputShape = t2;
  var u2 = "float(" + n2 + ") + float(" + r2 + ") * sum";
  a2 = 0.5 === o2 ? "inversesqrt(" + u2 + ")" : 1 === o2 ? "1.0/(" + u2 + ")" : "exp(log(" + u2 + ") * float(-" + o2 + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < " + this.outputShape[3] + ";\n        bool hasNextRow = c < " + this.outputShape[2] + ";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - " + i2 + ";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - " + i2 + "; j <= " + i2 + "; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(" + s2 + "));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * " + a2 + ";\n        setOutput(result);\n      }\n    ";
};
var zi = function(t2) {
  this.variableNames = ["dy", "maxPos"], this.outputShape = t2.inShape;
  var e2 = t2.strideHeight, n2 = t2.strideWidth, r2 = t2.dilationHeight, o2 = t2.effectiveFilterHeight, a2 = t2.effectiveFilterWidth, i2 = o2 - 1 - t2.padInfo.top, s2 = a2 - 1 - t2.padInfo.left, u2 = o2 * a2 - 1;
  this.userCode = "\n      const ivec2 pads = ivec2(" + i2 + ", " + s2 + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + o2 + ";\n          wR += " + r2 + ") {\n          float dyR = float(dyRCorner + wR) / " + e2 + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + a2 + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + n2 + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + u2 + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + a2 + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Gi = function(t2) {
  this.variableNames = ["dy", "maxPos"], this.outputShape = t2.inShape;
  var e2 = t2.strideDepth, n2 = t2.strideHeight, r2 = t2.strideWidth, o2 = t2.dilationDepth, a2 = t2.dilationHeight, i2 = t2.dilationWidth, s2 = t2.effectiveFilterDepth, u2 = t2.effectiveFilterHeight, c2 = t2.effectiveFilterWidth, l2 = s2 - 1 - t2.padInfo.front, h2 = u2 - 1 - t2.padInfo.top, f2 = c2 - 1 - t2.padInfo.left, d2 = s2 * u2 * c2 - 1;
  this.userCode = "\n      const ivec3 pads = ivec3(" + l2 + ", " + h2 + ", " + f2 + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + s2 + ";\n           wD += " + o2 + ") {\n          float dyD = float(dyDCorner + wD) / " + e2 + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t2.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + u2 + ";\n              wR += " + a2 + ") {\n            float dyR = float(dyRCorner + wR) / " + n2 + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t2.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + c2 + ";\n                wC += " + i2 + ") {\n              float dyC = float(dyCCorner + wC) / " + r2 + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t2.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = " + d2 + " -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * " + u2 + " * " + c2 + " +\n                  wR * " + c2 + " + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
};
var Hi = function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false), void 0 === o2 && (o2 = false), void 0 === a2 && (a2 = null), void 0 === i2 && (i2 = false), this.variableNames = ["matrixA", "matrixB"], this.packedInputs = true, this.packedOutput = true, this.outputShape = e2;
  var s2 = n2 ? t2[1] : t2[2], u2 = Math.ceil(s2 / 2), c2 = n2 ? "i * 2, rc.y" : "rc.y, i * 2", l2 = r2 ? "rc.z, i * 2" : "i * 2, rc.z", h2 = n2 ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"], f2 = r2 ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"], d2 = "", p2 = "";
  a2 && (d2 = i2 ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + a2 + "\n        }" : "vec4 activation(vec4 x) {\n          " + a2 + "\n        }", p2 = "result = activation(result);");
  var v2 = o2 ? "result += getBiasAtOutCoords();" : "";
  o2 && this.variableNames.push("bias"), i2 && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + d2 + "\n\n      const float sharedDimension = " + u2 + ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < " + u2 + "; i++) {\n          vec4 a = getMatrixA(rc.x, " + c2 + ");\n          vec4 b = getMatrixB(rc.x, " + l2 + ");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (" + h2[0] + " * " + f2[0] + ");\n          result += (" + h2[1] + " * " + f2[1] + ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        " + v2 + "\n\n        " + p2 + "\n\n        setOutput(result);\n      }\n    ";
};
var qi = function() {
  function t2(t3, e2, n2) {
    this.variableNames = ["probs"], this.outputShape = [t3, n2], this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (e2 - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (e2 - 1) + "));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var e2 = this;
    return function(n2, r2) {
      null == e2.seedLoc && (e2.seedLoc = n2.getUniformLocation(r2, "seed")), n2.gl.uniform1f(e2.seedLoc, t3);
    };
  }, t2;
}();
var Ki = function(t2, e2, n2, r2) {
  this.variableNames = ["indices"], this.outputShape = [t2, e2], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + r2 + "), float(" + n2 + "),\n                      float(index == coords.y)));\n      }\n    ";
};
var ji = function(t2) {
  this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true, this.outputShape = t2;
  var e2 = t2.length;
  if (0 === e2)
    this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";
  else {
    var n2 = sa("rc", e2), r2 = wa(e2), o2 = function(t3, e3, n3) {
      if (1 === t3)
        return "rc > " + e3[0];
      for (var r3 = "", o3 = t3 - 2; o3 < t3; o3++)
        r3 += n3[o3] + " >= " + e3[o3], o3 < t3 - 1 && (r3 += "||");
      return r3;
    }(e2, t2, n2), a2 = function(t3, e3, n3, r3) {
      if (1 === t3)
        return "";
      var o3 = r3.slice(-2);
      return "\n    int r = " + o3[0] + ";\n    int c = " + o3[1] + ";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= " + e3 + ";\n    bool rEdge = rp1 >= " + n3 + ";\n  ";
    }(e2, t2[t2.length - 1], t2[t2.length - 2], n2), i2 = function(t3, e3) {
      var n3 = t3.length, r3 = function(t4, e4) {
        for (var n4 = [], r4 = 0; r4 <= 1; r4++)
          for (var o3 = 0; o3 <= 1; o3++) {
            for (var a3 = (0 === r4 ? "r" : "rp1") + ", " + (0 === o3 ? "c" : "cp1"), i3 = 2; i3 < t4; i3++)
              a3 = e4[e4.length - 1 - i3] + "," + a3;
            n4.push(a3);
          }
        return n4;
      }(n3, e3);
      return 1 === n3 ? "getA(rc),\n            rc + 1 >= " + t3[0] + " ? 0. : getA(rc + 1),\n            0, 0" : "getA(" + r3[0] + "),\n          cEdge ? 0. : getA(" + r3[1] + "),\n          rEdge ? 0. : getA(" + r3[2] + "),\n          rEdge || cEdge ? 0. : getA(" + r3[3] + ")";
    }(t2, n2);
    this.userCode = "\n        void main() {\n          " + r2 + " rc = getOutputCoords();\n\n          if(" + o2 + ") {\n            setOutput(vec4(0));\n          } else {\n            " + a2 + "\n\n            setOutput(vec4(" + i2 + "));\n          }\n        }\n      ";
  }
};
var Xi = function(t2, e2, n2) {
  this.variableNames = ["x"], this.outputShape = e2.map(function(e3, n3) {
    return e3[0] + t2[n3] + e3[1];
  });
  var r2 = t2.length, o2 = wa(r2), a2 = e2.map(function(t3) {
    return t3[0];
  }).join(","), i2 = e2.map(function(e3, n3) {
    return e3[0] + t2[n3];
  }).join(","), s2 = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, r2);
  this.userCode = 1 !== r2 ? "\n      " + o2 + " start = " + o2 + "(" + a2 + ");\n      " + o2 + " end = " + o2 + "(" + i2 + ");\n\n      void main() {\n        " + o2 + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + n2 + "));\n        } else {\n          " + o2 + " coords = outC - start;\n          setOutput(getX(" + s2 + "));\n        }\n      }\n    " : "\n        int start = " + a2 + ";\n        int end = " + i2 + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + n2 + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";
};
var Yi = function(t2, e2, n2) {
  this.variableNames = ["x"], this.packedInputs = true, this.packedOutput = true, this.outputShape = e2.map(function(e3, n3) {
    return e3[0] + t2[n3] + e3[1];
  });
  for (var r2 = t2.length, o2 = wa(r2), a2 = e2.map(function(t3) {
    return t3[0];
  }).join(","), i2 = e2.map(function(e3, n3) {
    return e3[0] + t2[n3];
  }).join(","), s2 = sa("rc", r2), u2 = sa("source", r2), c2 = s2[r2 - 1] + " < " + this.outputShape[r2 - 1], l2 = 1 === r2 ? "source" : "vec2(" + u2.slice(-2).join() + ")", h2 = [o2 + " rc = outputLoc;", s2[r2 - 1] + " += 1;\n       if(" + c2 + ") {\n      ", 1 === r2 ? "" : "}\n       rc = outputLoc;\n       " + s2[r2 - 2] + " += 1;\n       if(" + s2[r2 - 2] + " < " + this.outputShape[r2 - 2] + ") {", 1 === r2 ? "" : "  " + s2[r2 - 1] + " += 1;\n         if(" + c2 + ") {"], f2 = 1 === r2 ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", d2 = "", p2 = 0, v2 = 1 === r2 ? 2 : 4; p2 < v2; p2++)
    d2 += "\n        " + h2[p2] + "\n        if (" + f2 + ") {\n          result[" + p2 + "] = float(" + n2 + ");\n        } else {\n          " + o2 + " source = rc - start;\n          result[" + p2 + "] = getChannel(getX(" + u2.join() + "), " + l2 + ");\n        }\n      ";
  d2 += 1 === r2 ? "} " : "}}", this.userCode = "\n      const " + o2 + " start = " + o2 + "(" + a2 + ");\n      const " + o2 + " end = " + o2 + "(" + i2 + ");\n\n      void main() {\n        " + o2 + " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        " + d2 + "\n        setOutput(result);\n      }\n    ";
};
var $i = function(t2, e2, n2) {
  if (this.variableNames = ["x"], "avg" === e2 && n2)
    throw new Error("Cannot compute positions for average pool.");
  var r2 = t2.filterWidth, o2 = t2.strideHeight, a2 = t2.strideWidth, i2 = t2.dilationHeight, s2 = t2.dilationWidth, u2 = t2.effectiveFilterHeight, c2 = t2.effectiveFilterWidth, l2 = t2.padInfo.top, h2 = t2.padInfo.left;
  this.outputShape = t2.outShape;
  var f2 = "avg" === e2, d2 = "0.0";
  if (f2 || (d2 = "-1.0 / 1e-20"), n2)
    this.userCode = "\n        const ivec2 strides = ivec2(" + o2 + ", " + a2 + ");\n        const ivec2 pads = ivec2(" + l2 + ", " + h2 + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + u2 + ";\n              wR += " + i2 + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + c2 + ";\n                wC += " + s2 + ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + t2.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + c2 + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
  else {
    var p2 = e2 + "(" + e2 + "(" + e2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
    "avg" === e2 && (p2 = "avgValue / count");
    var v2 = 4 * Math.floor(r2 / 4), m2 = r2 % 4, g2 = "\n      if (" + f2 + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
    this.userCode = "\n      const ivec2 strides = ivec2(" + o2 + ", " + a2 + ");\n      const ivec2 pads = ivec2(" + l2 + ", " + h2 + ");\n      const float initializationValue = " + d2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + t2.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + d2 + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + u2 + ";\n            wR += " + i2 + ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + t2.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + v2 + "; wC += 4) {\n            int xC = xCCorner + wC * " + s2 + ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s2 + ", d),\n              getValue(batch, xR, xC + 2 * " + s2 + ", d),\n              getValue(batch, xR, xC + 3 * " + s2 + ", d)\n            );\n\n            " + g2 + "\n          }\n\n          int xC = xCCorner + " + v2 + ";\n          if (" + (1 === m2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + g2 + "\n          } else if (" + (2 === m2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s2 + ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + g2 + "\n          } else if (" + (3 === m2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s2 + ", d),\n              getValue(batch, xR, xC + 2 * " + s2 + ", d),\n              initializationValue\n            );\n\n            " + g2 + "\n          }\n        }\n        setOutput(" + p2 + ");\n      }\n    ";
  }
};
var Qi = function(t2, e2, n2) {
  if (this.variableNames = ["x"], "avg" === e2 && n2)
    throw new Error("Cannot compute positions for average pool.");
  var r2 = t2.filterWidth, o2 = t2.strideDepth, a2 = t2.strideHeight, i2 = t2.strideWidth, s2 = t2.dilationDepth, u2 = t2.dilationHeight, c2 = t2.dilationWidth, l2 = t2.effectiveFilterDepth, h2 = t2.effectiveFilterHeight, f2 = t2.effectiveFilterWidth, d2 = t2.padInfo.front, p2 = t2.padInfo.top, v2 = t2.padInfo.left;
  this.outputShape = t2.outShape;
  var m2 = "avg" === e2, g2 = "0.0";
  if (m2 || (g2 = "-1.0 / 1e-20"), n2)
    this.userCode = "\n        const ivec3 strides =\n            ivec3(" + o2 + ", " + a2 + ", " + i2 + ");\n        const ivec3 pads = ivec3(" + d2 + ", " + p2 + ", " + v2 + ");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < " + l2 + ";\n              wD += " + s2 + ") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= " + t2.inDepth + ") {\n              continue;\n            }\n\n            for (int wR = 0; wR < " + h2 + ";\n                wR += " + u2 + ") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= " + t2.inHeight + ") {\n                continue;\n              }\n\n              for (int wC = 0; wC < " + f2 + ";\n                  wC += " + c2 + ") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= " + t2.inWidth + ") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * " + h2 + " * " + f2 + " +\n                      wR * " + f2 + " + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
  else {
    var y2 = e2 + "(" + e2 + "(" + e2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
    "avg" === e2 && (y2 = "avgValue / count");
    var x2 = 4 * Math.floor(r2 / 4), b2 = r2 % 4, w2 = "\n      if (" + m2 + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
    this.userCode = "\n      const ivec3 strides =\n        ivec3(" + o2 + ", " + a2 + ", " + i2 + ");\n      const ivec3 pads = ivec3(" + d2 + ", " + p2 + ", " + v2 + ");\n      const float initializationValue = " + g2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= " + t2.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + g2 + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < " + l2 + ";\n            wD += " + s2 + ") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= " + t2.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h2 + ";\n            wR += " + u2 + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t2.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + x2 + "; wC += 4) {\n              int xC = xCCorner + wC * " + c2 + ";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c2 + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + c2 + ", ch),\n                getValue(batch, xD, xR, xC + 3 * " + c2 + ", ch)\n              );\n\n              " + w2 + "\n            }\n\n            int xC = xCCorner + " + x2 + ";\n            if (" + (1 === b2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              " + w2 + "\n            } else if (" + (2 === b2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c2 + ", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              " + w2 + "\n            } else if (" + (3 === b2) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c2 + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + c2 + ", ch),\n                initializationValue\n              );\n\n              " + w2 + "\n            }\n          }\n          setOutput(" + y2 + ");\n        }\n      }\n    ";
  }
};
var Ji = function(t2, e2) {
  this.variableNames = ["x"];
  var n2 = t2.windowSize, r2 = t2.batchSize, o2 = t2.inSize, a2 = Math.ceil(o2 / n2);
  this.outputShape = [r2, a2];
  var i2 = "0.0", s2 = "";
  "prod" === e2 ? i2 = "1.0" : "min" === e2 ? (i2 = "1.0 / 1e-20", s2 = "min") : "max" === e2 && (i2 = "-1.0 / 1e-20", s2 = "max");
  var u2 = e2 + "(" + e2 + "(" + e2 + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
  "sum" === e2 ? u2 = "sumValue" : "prod" === e2 ? u2 = "prodValue" : "all" === e2 ? u2 = "allValue" : "any" === e2 && (u2 = "anyValue");
  var c2 = 4 * Math.floor(n2 / 4), l2 = n2 % 4, h2 = "\n      if (" + ("sum" === e2) + ") {\n        sumValue += dot(values, ones);\n      } else if (" + ("prod" === e2) + ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = " + s2 + "(values, minMaxValue);\n      }\n    ", f2 = "vec4";
  "all" === e2 ? (i2 = "1.0", h2 = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ", f2 = "bvec4") : "any" === e2 && (i2 = "0.0", h2 = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ", f2 = "bvec4");
  var d2 = "";
  o2 % n2 > 0 && (d2 = "\n        if (inIdx < 0 || inIdx >= " + o2 + ") {\n          return initializationValue;\n        }\n      "), this.userCode = "\n      const float initializationValue = " + i2 + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + d2 + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + n2 + ";\n\n        vec4 minMaxValue = vec4(" + i2 + ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < " + c2 + "; i += 4) {\n          int inIdx = inOffset + i;\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + h2 + "\n        }\n\n        int inIdx = inOffset + " + c2 + ";\n        if (" + (1 === l2) + ") {\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          " + h2 + "\n        } else if (" + (2 === l2) + ") {\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          " + h2 + "\n        } else if (" + (3 === l2) + ") {\n          " + f2 + " values = " + f2 + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          " + h2 + "\n        }\n        setOutput(" + u2 + ");\n      }\n    ";
};
var Zi = function(t2, e2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2;
  for (var n2 = "", r2 = 0; r2 < 4; r2++) {
    var o2 = "thisRC = rc;";
    r2 % 2 == 1 && (o2 += "thisRC.z += 1;"), r2 > 1 && (o2 += "thisRC.y += 1;"), n2 += "\n        " + o2 + "\n        " + (r2 > 0 ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[" + r2 + "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        " + (r2 > 0 ? "}" : "") + "\n      ";
  }
  this.userCode = "\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      " + ca(["r", "c", "d"], e2) + "\n      return ivec3(r, c, d);\n    }\n  \n      " + la(t2) + "\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = " + t2[1] + ";\n        int cols = " + t2[2] + ";\n\n        " + n2 + "\n\n        setOutput(result);\n      }\n    ";
};
var ts = function(t2, e2, n2) {
  this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e2.shape;
  var r2 = e2.shape, o2 = r2[1], a2 = r2[2], i2 = t2.shape, s2 = i2[1], u2 = i2[2], c2 = [n2 && s2 > 1 ? o2 - 1 : o2, n2 && u2 > 1 ? a2 - 1 : a2], l2 = [n2 && s2 > 1 ? s2 - 1 : s2, n2 && u2 > 1 ? u2 - 1 : u2], h2 = c2[0] / l2[0], f2 = c2[1] / l2[1], d2 = 1 / h2, p2 = 1 / f2, v2 = 2 * Math.ceil(d2) + 2, m2 = 2 * Math.ceil(p2) + 2;
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h2 + ");\n        const float widthScale = float(" + f2 + ");\n\n        const float invHeightScale = float(" + d2 + ");\n        const float invWidthScale = float(" + p2 + ");\n\n        const int winHeight = int(" + v2 + ");\n        const int winWidth = int(" + m2 + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s2 + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u2 + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (o2 - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (a2 - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
};
var es = function(t2, e2, n2, r2) {
  this.variableNames = ["A"], this.outputShape = [];
  var o2 = t2[0], a2 = t2[1], i2 = t2[2], s2 = t2[3];
  this.outputShape = [o2, e2, n2, s2];
  var u2 = [r2 && e2 > 1 ? a2 - 1 : a2, r2 && n2 > 1 ? i2 - 1 : i2], c2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2];
  this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u2[0] / c2[0] + ",\n          " + u2[1] / c2[1] + ");\n      const vec2 inputShapeRC = vec2(" + a2 + ".0, " + i2 + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";
};
var ns = function(t2, e2, n2, r2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = [];
  var o2 = t2[0], a2 = t2[1], i2 = t2[2], s2 = t2[3];
  this.outputShape = [o2, e2, n2, s2];
  var u2 = [r2 && e2 > 1 ? a2 - 1 : a2, r2 && n2 > 1 ? i2 - 1 : i2], c2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2];
  this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          " + u2[0] / c2[0] + ",\n          " + u2[1] / c2[1] + ",\n          " + u2[1] / c2[1] + ");\n      const vec3 inputShapeRC = vec3(" + a2 + ".0, " + i2 + ".0,\n                                     " + i2 + ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < " + (s2 - 1) + ";\n        bool hasNextRow = coords.z < " + (n2 - 1) + ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ";
};
var rs = function(t2, e2, n2) {
  this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e2.shape;
  var r2 = e2.shape, o2 = r2[1], a2 = r2[2], i2 = t2.shape, s2 = i2[1], u2 = i2[2], c2 = [n2 && s2 > 1 ? o2 - 1 : o2, n2 && u2 > 1 ? a2 - 1 : a2], l2 = [n2 && s2 > 1 ? s2 - 1 : s2, n2 && u2 > 1 ? u2 - 1 : u2], h2 = c2[0] / l2[0], f2 = c2[1] / l2[1], d2 = 1 / h2, p2 = 1 / f2, v2 = 2 * Math.ceil(d2) + 2, m2 = 2 * Math.ceil(p2) + 2;
  this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h2 + ");\n        const float widthScale = float(" + f2 + ");\n\n        const float invHeightScale = float(" + d2 + ");\n        const float invWidthScale = float(" + p2 + ");\n\n        const int winHeight = int(" + v2 + ");\n        const int winWidth = int(" + m2 + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s2 + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u2 + ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(" + c2[0] + ") *\n                (float(dyR) / float(" + l2[0] + "));\n\n            float sourceFracCol =\n                float(" + c2[1] + ") *\n                  (float(dyC) / float(" + l2[1] + "));\n\n            int sourceNearestRow = int(min(\n                float(int(" + o2 + ") - 1),\n                " + n2 + " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(" + a2 + ") - 1),\n                " + n2 + " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
};
var os = function(t2, e2, n2, r2) {
  this.variableNames = ["A"], this.outputShape = [];
  var o2 = t2[0], a2 = t2[1], i2 = t2[2], s2 = t2[3];
  this.outputShape = [o2, e2, n2, s2];
  var u2 = [r2 && e2 > 1 ? a2 - 1 : a2, r2 && n2 > 1 ? i2 - 1 : i2], c2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2], l2 = r2 ? "0.5" : "0.0";
  this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u2[0] / c2[0] + ",\n          " + u2[1] / c2[1] + ");\n      const vec2 inputShapeRC = vec2(" + a2 + ".0, " + i2 + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + l2 + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";
};
var as = function(t2, e2) {
  this.variableNames = ["x"];
  var n2 = t2.length;
  if (n2 > 4)
    throw new Error("WebGL backend: Reverse of rank-" + n2 + " tensor is not yet supported");
  if (this.outputShape = t2, 1 !== n2) {
    var r2 = t2.map(function(n3, r3) {
      return function(n4) {
        return -1 !== e2.indexOf(n4) && 1 !== t2[n4] ? t2[n4] + " - coords[" + n4 + "] - 1" : "coords[" + n4 + "]";
      }(r3);
    }).join(","), o2 = wa(n2);
    this.userCode = "\n      void main() {\n        " + o2 + " coords = getOutputCoords();\n        setOutput(getX(" + r2 + "));\n      }\n    ";
  } else
    this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + t2[0] + " - coord - 1));\n        }\n      ";
};
var is = function(t2, e2) {
  this.variableNames = ["x"], this.packedInputs = true, this.packedOutput = true;
  var n2 = t2.length;
  if (n2 > 4)
    throw new Error("WebGL backend: Reverse of rank-" + n2 + " tensor is not yet supported");
  this.outputShape = t2;
  var r2 = sa("rc", n2), o2 = r2[n2 - 1] + " + 1 < " + this.outputShape[n2 - 1], a2 = r2[n2 - 2] + " + 1 < " + this.outputShape[n2 - 2], i2 = wa(n2);
  function s2(n3) {
    var r3 = t2.map(function(r4, o3) {
      return function(n4, r5) {
        return -1 !== e2.indexOf(n4) && 1 !== t2[n4] ? t2[n4] + " - " + r5[n4] + " - 1" : "" + r5[n4];
      }(o3, n3);
    });
    return "getChannel(getX(" + r3.join(",") + "), vec2(" + r3.slice(-2).join(",") + "))";
  }
  this.userCode = 1 === n2 ? "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(" + t2[0] + " - rc - 1),\n            " + t2[0] + " - rc - 1);\n          if(" + o2 + "){\n              result.g = getChannel(getX(" + t2[0] + " - (rc  + 1) - 1),\n                " + t2[0] + " - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      " : "\n        void main() {\n          " + i2 + " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = " + function(t3) {
    return s2(t3);
  }(r2.slice()) + ";\n          if(" + o2 + "){\n            result.g = " + function(t3) {
    return t3[n2 - 1] = "(" + t3[n2 - 1] + " + 1)", s2(t3);
  }(r2.slice()) + ";\n          }\n          if(" + a2 + ") {\n            result.b = " + function(t3) {
    return t3[n2 - 2] = "(" + t3[n2 - 2] + " + 1)", s2(t3);
  }(r2.slice()) + ";\n            if(" + o2 + ") {\n              result.a = " + function(t3) {
    return t3[n2 - 1] = "(" + t3[n2 - 1] + " + 1)", t3[n2 - 2] = "(" + t3[n2 - 2] + " + 1)", s2(t3);
  }(r2.slice()) + ";\n            }\n          }\n          setOutput(result);\n        }\n    ";
};
var ss = function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === i2 && (i2 = true), this.variableNames = ["updates", "indices", "defaultValue"], this.outputShape = a2;
  var s2 = wa(o2.length), u2 = wa(a2.length), c2 = "";
  1 === n2 ? c2 = "i" : 2 === n2 && (c2 = "i, j");
  var l2 = "getIndices(" + c2 + ")", h2 = "";
  1 === r2 ? h2 = "i" : 2 === r2 && (h2 = "i, coords[1]");
  var f2 = "getUpdates(" + h2 + ")", d2 = e2 > 1 ? "strides[j]" : "strides";
  this.userCode = "\n        " + s2 + " strides = " + s2 + "(" + o2 + ");\n\n        void main() {\n          " + u2 + " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < " + t2 + "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < " + e2 + "; j++) {\n              int index = round(" + l2 + ");\n              flattenedIndex += index * " + d2 + ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += " + f2 + ";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      ";
};
var us = function(t2, e2) {
  this.variableNames = ["x", "segmentIds"];
  var n2 = t2.windowSize, r2 = t2.batchSize, o2 = t2.inSize, a2 = t2.numSegments, i2 = a2 * Math.ceil(o2 / n2);
  this.outputShape = [r2, i2];
  var s2 = 4 * Math.floor(n2 / 4), u2 = n2 % 4, c2 = "\n        sumValue += dot(values, segFilter);\n    ", l2 = "";
  o2 % n2 > 0 && (l2 = "\n        if (inIdx < 0 || inIdx >= " + o2 + ") {\n          return initializationValue;\n        }\n      ");
  var h2 = "";
  o2 % n2 > 0 && (h2 = "\n        if (inIdx < 0 || inIdx >= " + o2 + ") {\n          return -1.0;\n        }\n      "), this.userCode = "\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        " + l2 + "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        " + h2 + "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          " + a2 + ")) * float(" + n2 + "));\n        int currentSeg = int(mod(float(outIdx), float(" + a2 + ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + s2 + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          " + c2 + "\n        }\n\n        int inIdx = inOffset + " + s2 + ";\n        if (" + (1 === u2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          " + c2 + "\n        } else if (" + (2 === u2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          " + c2 + "\n        } else if (" + (3 === u2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          " + c2 + "\n        }\n        setOutput(sumValue);\n      }\n    ";
};
var cs = function(t2, e2, n2) {
  var r2, o2;
  if (this.variableNames = ["c", "a", "b"], this.outputShape = e2, n2 > 4)
    throw Error("Where for rank " + n2 + " is not yet supported");
  if (1 === n2)
    o2 = "resRC", r2 = "resRC";
  else {
    for (var a2 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], i2 = [], s2 = [], u2 = 0; u2 < e2.length; u2++)
      s2.push("" + a2[u2]), u2 < t2 && i2.push("" + a2[u2]);
    r2 = i2.join(), o2 = s2.join();
  }
  var c2 = wa(n2);
  this.userCode = "\n      void main() {\n        " + c2 + " resRC = getOutputCoords();\n        float cVal = getC(" + r2 + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + o2 + "));\n        } else {\n          setOutput(getB(" + o2 + "));\n        }\n      }\n    ";
};
var ls = function() {
  function t2(t3) {
    this.variableNames = ["source"], this.outputShape = t3, this.rank = t3.length;
    var e2, n2 = wa(this.rank), r2 = "uniform int start[" + this.rank + "];", o2 = function(t4) {
      if (1 === t4)
        return "sourceLoc";
      if (t4 <= 6)
        return hs.slice(0, t4).map(function(t5) {
          return "sourceLoc." + t5;
        }).join(",");
      throw Error("Slicing for rank " + t4 + " is not yet supported");
    }(this.rank);
    e2 = "\n        " + n2 + " sourceLoc;\n        " + n2 + " coords = getOutputCoords();\n        " + t3.map(function(t4, e3) {
      return "sourceLoc." + hs[e3] + " = start[" + e3 + "] + coords." + hs[e3] + ";";
    }).join("\n") + "\n      ", this.userCode = "\n      " + r2 + "\n      void main() {\n        " + e2 + "\n        setOutput(getSource(" + o2 + "));\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var e2 = this;
    if (t3.length !== this.rank)
      throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t3.length + ")");
    return function(n2, r2) {
      null == e2.startLoc && (e2.startLoc = n2.getUniformLocationNoThrow(r2, "start"), null == e2.startLoc) || n2.gl.uniform1iv(e2.startLoc, t3);
    };
  }, t2;
}();
var hs = ["x", "y", "z", "w", "u", "v"];
var fs = function() {
  function t2(t3) {
    this.variableNames = ["source"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t3, this.rank = t3.length;
    var e2 = wa(this.rank), n2 = sa("coords", this.rank), r2 = sa("sourceLoc", this.rank), o2 = 1 === this.rank ? "sourceLoc" : "vec2(" + r2.slice(-2).join() + ")", a2 = "getChannel(getSource(" + r2.join() + "), " + o2 + ")", i2 = "\n      result.x = " + a2 + ";\n      if (++" + n2[this.rank - 1] + " < " + t3[this.rank - 1] + ") {\n        ++" + r2[this.rank - 1] + ";\n        result.y = " + a2 + ";\n        --" + r2[this.rank - 1] + ";\n      }\n    ", s2 = 1 === this.rank ? "" : "\n      --" + n2[this.rank - 1] + ";\n      if (++" + n2[this.rank - 2] + " < " + t3[this.rank - 2] + ") {\n        ++" + r2[this.rank - 2] + ";\n        result.z = " + a2 + ";\n        if (++" + n2[this.rank - 1] + " < " + t3[this.rank - 1] + ") {\n          ++" + r2[this.rank - 1] + ";\n          result.w = " + a2 + ";\n        }\n      }\n    ", u2 = this.rank <= 4 ? "sourceLoc = coords +\n            " + e2 + "(" + t3.map(function(t4, e3) {
      return "start[" + e3 + "]";
    }).join() + ");" : t3.map(function(t4, e3) {
      return r2[e3] + " = " + n2[e3] + " + start[" + e3 + "];";
    }).join("\n");
    this.userCode = "\n      uniform int start[" + this.rank + "];\n      void main() {\n        " + e2 + " coords = getOutputCoords();\n        " + e2 + " sourceLoc;\n        " + u2 + "\n        vec4 result = vec4(0.);\n        " + i2 + "\n        " + s2 + "\n        setOutput(result);\n      }\n    ";
  }
  return t2.prototype.getCustomSetupFunc = function(t3) {
    var e2 = this;
    if (t3.length !== this.rank)
      throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + t3.length + ")");
    return function(n2, r2) {
      null == e2.startLoc && (e2.startLoc = n2.getUniformLocationNoThrow(r2, "start"), null == e2.startLoc) || n2.gl.uniform1iv(e2.startLoc, t3);
    };
  }, t2;
}();
var ds = function(t2, e2, n2) {
  this.variableNames = ["x"], this.outputShape = n2;
  var r2 = n2.length, o2 = wa(n2.length), a2 = wa(n2.length), i2 = "";
  if (1 === r2)
    i2 = "coords * strides + begin";
  else {
    var s2 = 0;
    i2 = n2.map(function(t3, e3) {
      return s2++, 1 === n2.length ? "coords * strides[" + e3 + "] + begin[" + e3 + "]" : "coords[" + (s2 - 1) + "] * strides[" + e3 + "] + begin[" + e3 + "]";
    }).join(",");
  }
  this.userCode = "\n      " + o2 + " begin = " + o2 + "(" + t2 + ");\n      " + o2 + " strides = " + o2 + "(" + e2 + ");\n\n      void main() {\n        " + a2 + " coords = getOutputCoords();\n        setOutput(getX(" + i2 + "));\n      }\n    ";
};
var ps = function() {
  function t2(t3) {
    this.gpgpu = t3, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = false, this.usedTextures = {};
  }
  return t2.prototype.acquireTexture = function(t3, e2, n2) {
    var r2, o2 = vs(e2, n2), a2 = ms(t3, o2, n2);
    if (a2 in this.freeTextures || (this.freeTextures[a2] = []), a2 in this.usedTextures || (this.usedTextures[a2] = []), this.freeTextures[a2].length > 0) {
      this.numFreeTextures--, this.numUsedTextures++, this.log();
      var i2 = this.freeTextures[a2].shift();
      return this.usedTextures[a2].push(i2), i2;
    }
    return this.numUsedTextures++, this.log(), o2 === Gt.PACKED_2X2_FLOAT32 ? r2 = this.gpgpu.createPackedMatrixTexture(t3[0], t3[1]) : o2 === Gt.PACKED_2X2_FLOAT16 ? r2 = this.gpgpu.createFloat16PackedMatrixTexture(t3[0], t3[1]) : o2 === Gt.UNPACKED_FLOAT32 ? r2 = this.gpgpu.createFloat32MatrixTexture(t3[0], t3[1]) : o2 === Gt.UNPACKED_FLOAT16 ? r2 = this.gpgpu.createFloat16MatrixTexture(t3[0], t3[1]) : o2 === Gt.PACKED_4X1_UNSIGNED_BYTE && (r2 = this.gpgpu.createUnsignedBytesMatrixTexture(t3[0], t3[1])), this.usedTextures[a2].push(r2), r2;
  }, t2.prototype.releaseTexture = function(t3, e2, n2, r2) {
    if (null != this.freeTextures) {
      var o2 = ms(e2, vs(n2, r2), r2);
      o2 in this.freeTextures || (this.freeTextures[o2] = []), this.freeTextures[o2].push(t3), this.numFreeTextures++, this.numUsedTextures--;
      var a2 = this.usedTextures[o2], i2 = a2.indexOf(t3);
      if (i2 < 0)
        throw new Error("Cannot release a texture that was never provided by this texture manager");
      a2.splice(i2, 1), this.log();
    }
  }, t2.prototype.log = function() {
    if (this.logEnabled) {
      var t3 = this.numFreeTextures + this.numUsedTextures;
      console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + t3 + ")");
    }
  }, t2.prototype.getNumUsedTextures = function() {
    return this.numUsedTextures;
  }, t2.prototype.getNumFreeTextures = function() {
    return this.numFreeTextures;
  }, t2.prototype.dispose = function() {
    var t3 = this;
    if (null != this.freeTextures) {
      for (var e2 in this.freeTextures)
        this.freeTextures[e2].forEach(function(e3) {
          t3.gpgpu.deleteMatrixTexture(e3);
        });
      for (var e2 in this.usedTextures)
        this.usedTextures[e2].forEach(function(e3) {
          t3.gpgpu.deleteMatrixTexture(e3);
        });
      this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0;
    }
  }, t2;
}();
function vs(t2, e2) {
  if (t2 === zt.UPLOAD)
    return Gt.PACKED_2X2_FLOAT32;
  if (t2 === zt.RENDER || null == t2)
    return function(t3) {
      return i().getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? t3 ? Gt.PACKED_2X2_FLOAT32 : Gt.UNPACKED_FLOAT32 : t3 ? Gt.PACKED_2X2_FLOAT16 : Gt.UNPACKED_FLOAT16;
    }(e2);
  if (t2 === zt.DOWNLOAD || t2 === zt.PIXELS)
    return Gt.PACKED_4X1_UNSIGNED_BYTE;
  throw new Error("Unknown logical texture type " + t2);
}
function ms(t2, e2, n2) {
  return t2[0] + "_" + t2[1] + "_" + e2 + "_" + n2;
}
var gs = function(t2, e2) {
  this.variableNames = ["A"];
  for (var n2 = new Array(t2.length), r2 = 0; r2 < n2.length; r2++)
    n2[r2] = t2[r2] * e2[r2];
  this.outputShape = n2, this.rank = n2.length;
  var o2 = wa(this.rank), a2 = function(t3) {
    var e3 = t3.length;
    if (e3 > 5)
      throw Error("Tile for rank " + e3 + " is not yet supported");
    if (1 === e3)
      return "imod(resRC, " + t3[0] + ")";
    for (var n3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], r3 = [], o3 = 0; o3 < t3.length; o3++)
      r3.push("imod(" + n3[o3] + ", " + t3[o3] + ")");
    return r3.join();
  }(t2);
  this.userCode = "\n      void main() {\n        " + o2 + " resRC = getOutputCoords();\n        setOutput(getA(" + a2 + "));\n      }\n    ";
};
var ys = function(t2, e2) {
  this.variableNames = ["A"];
  for (var n2 = new Array(t2.length), r2 = 0; r2 < n2.length; r2++)
    n2[r2] = t2[e2[r2]];
  this.outputShape = n2, this.rank = n2.length;
  var o2 = wa(this.rank), a2 = function(t3) {
    var e3 = t3.length;
    if (e3 > 6)
      throw Error("Transpose for rank " + e3 + " is not yet supported");
    for (var n3 = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], r3 = new Array(e3), o3 = 0; o3 < t3.length; o3++)
      r3[t3[o3]] = n3[o3];
    return r3.join();
  }(e2);
  this.userCode = "\n    void main() {\n      " + o2 + " resRC = getOutputCoords();\n      setOutput(getA(" + a2 + "));\n    }\n    ";
};
var xs = function(t2, e2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true;
  for (var n2 = new Array(t2.length), r2 = 0; r2 < n2.length; r2++)
    n2[r2] = t2[e2[r2]];
  if (this.outputShape = n2, this.rank = n2.length, this.rank > 6)
    throw Error("Packed transpose for rank " + this.rank + " is not yet supported.");
  var o2 = wa(this.rank), a2 = ia("rc", this.rank), i2 = new Array(this.rank);
  for (r2 = 0; r2 < e2.length; r2++)
    i2[e2[r2]] = a2[r2];
  var s2 = "vec2(" + i2.slice(-2).join() + ")", u2 = "++" + a2[this.rank - 1] + " < " + n2[this.rank - 1], c2 = "getChannel(getA(" + i2.join() + "), " + s2 + ")";
  this.userCode = "\n    void main() {\n      " + o2 + " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = " + c2 + ";\n      if(" + u2 + ") {\n        result[1] = " + c2 + ";\n      }\n      --" + a2[this.rank - 1] + ";\n      if(++" + a2[this.rank - 2] + " < " + n2[this.rank - 2] + ") {\n        result[2] = " + c2 + ";\n        if(" + u2 + ") {\n          result[3] = " + c2 + ";\n        }\n      }\n      setOutput(result);\n    }\n    ";
};
var bs = 1.7580993408473768;
var ws = 1.0507009873554805;
var Cs = function(t2, e2) {
  this.variableNames = ["A"], this.outputShape = t2, this.userCode = "\n      float unaryOperation(float x) {\n        " + e2 + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
};
var Es = "if (isnan(x)) return x;";
var Rs = "return x;";
var Is = "return abs(x);";
var ks = Es + "\n  return (x < 0.0) ? 0.0 : x;\n";
var Ss = Es + "\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";
var As = "return (x >= 0.0) ? x : (exp(x) - 1.0);";
var Ds = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = " + bs + ";\n  float scale = " + ws + ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";
var Ts = "return -x;";
var Ns = "return ceil(x);";
var Fs = "return floor(x);";
var _s = "return exp(x);";
var Os = "return exp(x) - 1.0;";
var Ms = Es + "\n  return sin(x);\n";
var Bs = Es + "\n  return cos(x);\n";
var Ps = Es + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n";
var Ls = Es + "\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n";
var Ws = Es + "\n  return atan(x);\n";
var Us = Es + "return log(x + sqrt(x * x + 1.0));";
var Vs = Es + "\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));";
var zs = Es + "\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;";
var Gs = "return x;";
var Hs = "return x;";
var qs = "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var Ks = "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";
var js = "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n";
var Xs = function(t2, e2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = true, this.outputShape = t2, this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        " + e2 + "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
};
var Ys = function(t2) {
  this.variableNames = ["A"], this.packedInputs = true, this.packedOutput = false, this.outputShape = t2;
  var e2 = t2.length, n2 = sa("rc", e2), r2 = wa(e2), o2 = function(t3, e3) {
    if (1 === t3)
      return "rc";
    for (var n3 = "", r3 = 0; r3 < t3; r3++)
      n3 += e3[r3], r3 < t3 - 1 && (n3 += ",");
    return n3;
  }(e2, n2), a2 = n2.slice(-2), i2 = e2 <= 1 ? "rc" : "vec2(" + a2.join(",") + ")";
  this.userCode = "\n      void main() {\n        " + r2 + " rc = getOutputCoords();\n        vec4 packedInput = getA(" + o2 + ");\n\n        setOutput(getChannel(packedInput, " + i2 + "));\n      }\n    ";
};
var $s = {};
function Qs(t2, e2) {
  if (void 0 === e2 && (e2 = false), "linear" === t2)
    return e2 ? Hs : Rs;
  if ("relu" === t2)
    return e2 ? qs : ks;
  if ("elu" === t2)
    return e2 ? js : As;
  if ("relu6" === t2)
    return e2 ? Ks : Ss;
  if ("prelu" === t2)
    return e2 ? Pa : Ma;
  throw new Error("Activation " + t2 + " has not been implemented for the WebGL backend.");
}
var Js = 600;
var Zs = function(t2) {
  function o2(e2) {
    var n2, r2 = t2.call(this) || this;
    if (r2.pendingRead = /* @__PURE__ */ new WeakMap(), r2.pendingDisposal = /* @__PURE__ */ new WeakSet(), r2.dataRefCount = /* @__PURE__ */ new WeakMap(), r2.numBytesInGPU = 0, r2.uploadWaitMs = 0, r2.downloadWaitMs = 0, r2.warnedAboutMemory = false, r2.pendingDeletes = 0, r2.disposed = false, !i().getBool("HAS_WEBGL"))
      throw new Error("WebGL is not supported on this device");
    if (null == e2) {
      var o3 = jt(i().getNumber("WEBGL_VERSION"));
      r2.binaryCache = (n2 = i().getNumber("WEBGL_VERSION")) in $s ? $s[n2] : ($s[n2] = {}, $s[n2]), r2.gpgpu = new Bi(o3), r2.canvas = o3.canvas, r2.gpgpuCreatedLocally = true;
    } else
      r2.gpgpu = e2, r2.binaryCache = {}, r2.gpgpuCreatedLocally = false, r2.canvas = e2.gl.canvas;
    return r2.textureManager = new ps(r2.gpgpu), r2.numMBBeforeWarning = null == i().global.screen ? 1024 : i().global.screen.height * i().global.screen.width * window.devicePixelRatio * Js / 1024 / 1024, r2.texData = new xo(r2, Lt), r2;
  }
  return e(o2, t2), o2.prototype.numDataIds = function() {
    return this.texData.numDataIds() + (this.cpuBackend ? this.cpuBackend.numDataIds() : 0) - this.pendingDeletes;
  }, o2.prototype.write = function(t3, e2, n2) {
    if (i().getBool("DEBUG") && this.checkNumericalProblems(t3), "complex64" === n2 && null != t3)
      throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
    var r2 = {};
    return this.texData.set(r2, { shape: e2, dtype: n2, values: t3, usage: zt.UPLOAD }), r2;
  }, o2.prototype.move = function(t3, e2, n2, r2) {
    if (i().getBool("DEBUG") && this.checkNumericalProblems(e2), "complex64" === r2)
      throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
    this.texData.set(t3, { shape: n2, dtype: r2, values: e2, usage: zt.UPLOAD });
  }, o2.prototype.readSync = function(t3) {
    var e2 = this.texData.get(t3), n2 = e2.values, r2 = e2.dtype, o3 = e2.complexTensors, a2 = e2.slice, i2 = e2.shape, s2 = e2.isPacked;
    if (null != a2) {
      var u2 = void 0;
      u2 = s2 ? new Xs(i2, Gs) : new Cs(i2, Gs);
      var c2 = this.runWebGLProgram(u2, [{ dataId: t3, shape: i2, dtype: r2 }], r2), l2 = this.readSync(c2.dataId);
      return this.disposeData(c2.dataId), l2;
    }
    if (null != n2)
      return this.convertAndCacheOnCPU(t3);
    if ("string" === r2)
      return n2;
    var h2, f2, d2 = null != this.activeTimers;
    (d2 && (h2 = et()), "complex64" === r2) ? f2 = Vo(o3.real.dataSync(), o3.imag.dataSync()) : f2 = this.getValuesFromTexture(t3);
    return d2 && (this.downloadWaitMs += et() - h2), this.convertAndCacheOnCPU(t3, f2);
  }, o2.prototype.read = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o3, a2, s2, u2, c2, l2, h2, f2, d2, p2, v2, m2, g2, y2, x2, b2, w2, C2, E2, R2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (this.pendingRead.has(t3))
              return e2 = this.pendingRead.get(t3), [2, new Promise(function(t4) {
                return e2.push(t4);
              })];
            if (n2 = this.texData.get(t3), o3 = n2.values, a2 = n2.shape, s2 = n2.slice, u2 = n2.dtype, c2 = n2.complexTensors, l2 = n2.isPacked, null != s2)
              return h2 = void 0, h2 = l2 ? new Xs(a2, Gs) : new Cs(a2, Gs), f2 = this.runWebGLProgram(h2, [{ dataId: t3, shape: a2, dtype: u2 }], u2), d2 = this.read(f2.dataId), this.disposeData(f2.dataId), [2, d2];
            if (null != o3)
              return [2, this.convertAndCacheOnCPU(t3)];
            if (!i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === i().getNumber("WEBGL_VERSION"))
              throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
            return p2 = null, "complex64" !== u2 && i().get("WEBGL_BUFFER_SUPPORTED") && (v2 = this.decode(t3), m2 = this.texData.get(v2.dataId), p2 = (R2 = this.gpgpu).createBufferFromTexture.apply(R2, [m2.texture].concat(Yt(a2)))), this.pendingRead.set(t3, []), "complex64" === u2 ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
          case 1:
            r2.sent(), r2.label = 2;
          case 2:
            return "complex64" !== u2 ? [3, 4] : [4, Promise.all([c2.real.data(), c2.imag.data()])];
          case 3:
            return y2 = r2.sent(), x2 = y2[0], b2 = y2[1], g2 = Vo(x2, b2), [3, 5];
          case 4:
            null == p2 ? g2 = this.getValuesFromTexture(t3) : (w2 = k(a2), g2 = this.gpgpu.downloadFloat32MatrixFromBuffer(p2, w2)), r2.label = 5;
          case 5:
            return null != v2 && this.disposeData(v2.dataId), C2 = this.convertAndCacheOnCPU(t3, g2), E2 = this.pendingRead.get(t3), this.pendingRead.delete(t3), E2.forEach(function(t4) {
              return t4(C2);
            }), this.pendingDisposal.has(t3) && (this.pendingDisposal.delete(t3), this.disposeData(t3), this.pendingDeletes--), [2, C2];
        }
      });
    });
  }, o2.prototype.checkNumericalProblems = function(t3) {
    if (null != t3)
      for (var e2 = 0; e2 < t3.length; e2++) {
        var n2 = t3[e2];
        if (!ee(n2)) {
          if (i().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))
            throw Error("The value " + n2 + " cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");
          throw Error("The value " + n2 + " cannot be represented on this device.");
        }
      }
  }, o2.prototype.getValuesFromTexture = function(t3) {
    var e2, n2 = this.texData.get(t3), r2 = n2.shape, o3 = n2.dtype, a2 = n2.isPacked, s2 = k(r2);
    if (i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
      var u2 = this.decode(t3), c2 = this.texData.get(u2.dataId), l2 = (e2 = this.gpgpu).downloadMatrixFromPackedTexture.apply(e2, [c2.texture].concat(Yt(r2))).subarray(0, s2);
      return this.disposeData(u2.dataId), l2;
    }
    var h2 = i().getBool("WEBGL_PACK") && true === a2, f2 = h2 ? Te(r2) : r2, d2 = h2 ? new ci(f2) : new ui(f2), p2 = this.runWebGLProgram(d2, [{ shape: f2, dtype: o3, dataId: t3 }], "float32"), v2 = this.texData.get(p2.dataId), m2 = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v2.texture, v2.texShape[0], v2.texShape[1]).subarray(0, s2);
    return this.disposeData(p2.dataId), m2;
  }, o2.prototype.time = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o3, a2, s2, u2, c2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return e2 = this.activeTimers, n2 = [], o3 = false, null == this.programTimersStack ? (this.programTimersStack = n2, o3 = true) : this.activeTimers.push(n2), this.activeTimers = n2, t3(), a2 = I(this.activeTimers.map(function(t4) {
              return t4.query;
            })).filter(function(t4) {
              return null != t4;
            }), s2 = I(this.activeTimers.map(function(t4) {
              return t4.name;
            })).filter(function(t4) {
              return null != t4;
            }), this.activeTimers = e2, o3 && (this.programTimersStack = null), u2 = { uploadWaitMs: this.uploadWaitMs, downloadWaitMs: this.downloadWaitMs, kernelMs: null, wallMs: null }, i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [4, Promise.all(a2)] : [3, 2];
          case 1:
            return c2 = r2.sent(), u2.kernelMs = w(c2), u2.getExtraProfileInfo = function() {
              return c2.map(function(t4, e3) {
                return { name: s2[e3], ms: t4 };
              }).map(function(t4) {
                return t4.name + ": " + t4.ms;
              }).join(", ");
            }, [3, 3];
          case 2:
            u2.kernelMs = { error: "WebGL query timers are not supported in this environment." }, r2.label = 3;
          case 3:
            return this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, u2];
        }
      });
    });
  }, o2.prototype.memory = function() {
    return { unreliable: false, numBytesInGPU: this.numBytesInGPU };
  }, o2.prototype.startTimer = function() {
    return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? this.gpgpu.beginQuery() : { startMs: et(), endMs: null };
  }, o2.prototype.endTimer = function(t3) {
    return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? (this.gpgpu.endQuery(), t3) : (t3.endMs = et(), t3);
  }, o2.prototype.getQueryTime = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2;
      return r(this, function(n2) {
        return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [2, this.gpgpu.waitForQueryAndGetTime(t3)] : [2, (e2 = t3).endMs - e2.startMs];
      });
    });
  }, o2.prototype.disposeData = function(t3) {
    if (!this.pendingDisposal.has(t3)) {
      if (this.pendingRead.has(t3))
        return this.pendingDisposal.add(t3), void this.pendingDeletes++;
      if (this.texData.has(t3)) {
        this.releaseGPUData(t3);
        var e2 = this.texData.get(t3).complexTensors;
        null != e2 && (e2.real.dispose(), e2.imag.dispose()), this.texData.delete(t3);
      }
    }
  }, o2.prototype.releaseGPUData = function(t3) {
    var e2 = this.texData.get(t3), n2 = e2.texture, r2 = e2.dtype, o3 = e2.texShape, a2 = e2.usage, i2 = e2.isPacked, s2 = e2.slice, u2 = s2 && s2.origDataId || t3, c2 = this.dataRefCount.get(u2);
    c2 > 1 ? this.dataRefCount.set(u2, c2 - 1) : (this.dataRefCount.delete(u2), null != n2 && (this.numBytesInGPU -= this.computeBytes(o3, r2), this.textureManager.releaseTexture(n2, o3, a2, i2)));
    var l2 = this.texData.get(t3);
    l2.texture = null, l2.texShape = null, l2.isPacked = false, l2.slice = null;
  }, o2.prototype.getTexture = function(t3) {
    return this.uploadToGPU(t3), this.texData.get(t3).texture;
  }, o2.prototype.getDataInfo = function(t3) {
    return this.texData.get(t3);
  }, o2.prototype.getCPUBackend = function() {
    return i().getBool("WEBGL_CPU_FORWARD") ? (null == this.cpuBackend && (this.cpuBackend = Lt.findBackend("cpu")), this.cpuBackend) : null;
  }, o2.prototype.shouldExecuteOnCPU = function(t3, e2) {
    var n2 = this;
    return void 0 === e2 && (e2 = 128), null != this.getCPUBackend() && t3.every(function(t4) {
      return null == n2.texData.get(t4.dataId).texture && t4.size < e2;
    });
  }, o2.prototype.getGPGPUContext = function() {
    return this.gpgpu;
  }, o2.prototype.complex = function(t3, e2) {
    var n2 = this.makeOutput(t3.shape, "complex64");
    return this.texData.get(n2.dataId).complexTensors = { real: Lt.keep(t3.clone()), imag: Lt.keep(e2.clone()) }, n2;
  }, o2.prototype.real = function(t3) {
    return this.texData.get(t3.dataId).complexTensors.real.clone();
  }, o2.prototype.imag = function(t3) {
    return this.texData.get(t3.dataId).complexTensors.imag.clone();
  }, o2.prototype.slice = function(t3, e2, n2) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.slice(t3, e2, n2);
    if (0 === k(n2))
      return Fn([], n2, t3.dtype);
    var r2 = this.texData.get(t3.dataId).isPacked, o3 = io(t3.shape, e2, n2);
    if (r2 || !o3) {
      var a2 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new fs(n2) : new ls(n2), s2 = a2.getCustomSetupFunc(e2);
      return this.compileAndRun(a2, [t3], null, s2);
    }
    return this.uploadToGPU(t3.dataId), this.shallowSlice(t3, e2, n2);
  }, o2.prototype.shallowSlice = function(t3, e2, n2) {
    var r2 = this.texData.get(t3.dataId), o3 = this.makeOutput(n2, t3.dtype), a2 = this.texData.get(o3.dataId);
    Object.assign(a2, r2), a2.shape = n2, a2.dtype = t3.dtype;
    var i2 = so(e2, t3.strides);
    r2.slice && (i2 += r2.slice.flatOffset), a2.slice = { flatOffset: i2, origDataId: r2.slice && r2.slice.origDataId || t3.dataId };
    var s2 = this.dataRefCount.get(a2.slice.origDataId) || 1;
    return this.dataRefCount.set(a2.slice.origDataId, s2 + 1), o3;
  }, o2.prototype.stridedSlice = function(t3, e2, n2, r2) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.stridedSlice(t3, e2, n2, r2);
    var o3 = ro(e2, n2, r2);
    if (o3.some(function(t4) {
      return 0 === t4;
    }))
      return Fn([], o3);
    var a2 = new ds(e2, r2, o3);
    return this.compileAndRun(a2, [t3]);
  }, o2.prototype.reverse = function(t3, e2) {
    var n2 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new is(t3.shape, e2) : new as(t3.shape, e2);
    return this.compileAndRun(n2, [t3]);
  }, o2.prototype.concat = function(t3, e2) {
    if ("complex64" === t3[0].dtype) {
      var n2 = t3.map(function(t4) {
        return Tn(t4);
      }), r2 = t3.map(function(t4) {
        return Nn(t4);
      });
      return Dn(this.concat(n2, e2), this.concat(r2, e2));
    }
    if (this.shouldExecuteOnCPU(t3))
      return this.cpuBackend.concat(t3, e2);
    if (1 === t3.length)
      return t3[0];
    if (t3.length > i().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
      var o3 = Math.floor(t3.length / 2), a2 = this.concat(t3.slice(0, o3), e2), s2 = this.concat(t3.slice(o3), e2);
      return this.concat([a2, s2], e2);
    }
    if (i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && t3[0].rank > 1) {
      var u2 = new Ga(t3.map(function(t4) {
        return t4.shape;
      }), e2);
      return this.compileAndRun(u2, t3);
    }
    var c2 = Sn(t3.map(function(t4) {
      return t4.shape;
    }), e2), l2 = t3.map(function(t4) {
      return t4.as2D(-1, k(t4.shape.slice(e2)));
    }), h2 = new za(l2.map(function(t4) {
      return t4.shape;
    }));
    return this.compileAndRun(h2, l2).reshape(c2);
  }, o2.prototype.neg = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.neg(t3);
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, Ts, t3.dtype);
    var e2 = new Cs(t3.shape, Ts);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.batchMatMul = function(t3, e2, n2, r2) {
    var o3 = n2 ? t3.shape[2] : t3.shape[1], a2 = r2 ? e2.shape[1] : e2.shape[2], i2 = n2 ? t3.shape[1] : t3.shape[2], s2 = t3.shape[0];
    if ((1 === o3 || 1 === a2) && i2 > 1e3) {
      n2 && (t3 = t3.transpose([0, 2, 1])), r2 && (e2 = e2.transpose([0, 2, 1]));
      var u2 = 1 === a2 ? t3 : t3.as3D(s2, i2, 1), c2 = 1 === a2 ? 2 : 1, l2 = 1 === a2 ? e2.as3D(s2, 1, i2) : e2;
      return this.multiply(u2, l2).sum(c2, true);
    }
    var h2 = Dt(t3.dtype, e2.dtype), f2 = new Hi(t3.shape, [s2, o3, a2], n2, r2);
    return this.compileAndRun(f2, [t3, e2], h2);
  }, o2.prototype.fusedBatchMatMul = function(t3) {
    var e2 = t3.a, n2 = t3.b, r2 = t3.transposeA, o3 = t3.transposeB, a2 = t3.bias, i2 = t3.activation, s2 = t3.preluActivationWeights, u2 = r2 ? e2.shape[2] : e2.shape[1], c2 = o3 ? n2.shape[1] : n2.shape[2], l2 = e2.shape[0], h2 = Dt(e2.dtype, n2.dtype), f2 = null != a2, d2 = null != s2, p2 = i2 ? Qs(i2, true) : null, v2 = new Hi(e2.shape, [l2, u2, c2], r2, o3, f2, p2, d2), m2 = [e2, n2];
    return a2 && m2.push(a2), s2 && m2.push(s2), this.compileAndRun(v2, m2, h2);
  }, o2.prototype.multiply = function(t3, e2) {
    if ("complex64" === t3.dtype) {
      var n2 = this.texData.get(t3.dataId), r2 = this.texData.get(e2.dataId), o3 = new Na(Da, t3.shape, e2.shape), a2 = new Na(Ta, t3.shape, e2.shape), s2 = [this.makeComplexComponentTensorInfo(t3, n2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, n2.complexTensors.imag), this.makeComplexComponentTensorInfo(e2, r2.complexTensors.real), this.makeComplexComponentTensorInfo(e2, r2.complexTensors.imag)], u2 = this.compileAndRun(o3, s2), c2 = this.compileAndRun(a2, s2), l2 = this.complex(u2, c2);
      return u2.dispose(), c2.dispose(), l2;
    }
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.multiply(t3, e2);
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, Oa, t3.dtype);
    var h2 = new Ba(Oa, t3.shape, e2.shape);
    return this.compileAndRun(h2, [t3, e2], t3.dtype);
  }, o2.prototype.batchNormalization = function(t3, e2, n2, r2, o3, a2) {
    var s2 = [t3, e2, n2], u2 = null;
    null != a2 && (u2 = a2.shape, s2.push(a2));
    var c2 = null;
    if (null != o3 && (c2 = o3.shape, s2.push(o3)), i().getBool("WEBGL_PACK_NORMALIZATION")) {
      var l2 = new Aa(t3.shape, e2.shape, n2.shape, u2, c2, r2);
      return this.compileAndRun(l2, s2);
    }
    var h2 = new Sa(t3.shape, e2.shape, n2.shape, u2, c2, r2);
    return this.compileAndRun(h2, s2);
  }, o2.prototype.localResponseNormalization4D = function(t3, e2, n2, r2, o3) {
    var a2 = i().getBool("WEBGL_PACK_NORMALIZATION") ? new Vi(t3.shape, e2, n2, r2, o3) : new Wi(t3.shape, e2, n2, r2, o3);
    return this.compileAndRun(a2, [t3]);
  }, o2.prototype.LRNGrad = function(t3, e2, n2, r2, o3, a2, i2) {
    var s2 = new Ui(e2.shape, r2, o3, a2, i2);
    return this.compileAndRun(s2, [e2, n2, t3]);
  }, o2.prototype.tile = function(t3, e2) {
    if ("string" === t3.dtype) {
      var n2 = this.readSync(t3.dataId).map(function(t4) {
        return ot(t4);
      });
      return ta(dr(t3.shape, t3.dtype, n2), e2);
    }
    var r2 = new gs(t3.shape, e2);
    return this.compileAndRun(r2, [t3]);
  }, o2.prototype.pad = function(t3, e2, n2) {
    var r2 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Yi(t3.shape, e2, n2) : new Xi(t3.shape, e2, n2);
    return this.compileAndRun(r2, [t3]);
  }, o2.prototype.transpose = function(t3, e2) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.transpose(t3, e2);
    var n2 = i().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new xs(t3.shape, e2) : new ys(t3.shape, e2);
    return this.compileAndRun(n2, [t3]);
  }, o2.prototype.gather = function(t3, e2, n2) {
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.gather(t3, e2, n2);
    var r2 = new mi(t3.shape, e2.size, n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.batchToSpaceND = function(t3, e2, n2) {
    C(t3.rank <= 4, function() {
      return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet";
    });
    var r2 = e2.reduce(function(t4, e3) {
      return t4 * e3;
    }), o3 = zr(t3.shape, e2, r2), a2 = Gr(o3.length, e2.length), i2 = Hr(t3.shape, e2, r2), s2 = qr(n2, e2.length), u2 = Kr(i2, n2, e2.length);
    return t3.reshape(o3).transpose(a2).reshape(i2).slice(s2, u2);
  }, o2.prototype.spaceToBatchND = function(t3, e2, n2) {
    C(t3.rank <= 4, function() {
      return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet";
    });
    var r2 = e2.reduce(function(t4, e3) {
      return t4 * e3;
    }), o3 = [[0, 0]];
    o3.push.apply(o3, n2);
    for (var a2 = 1 + e2.length; a2 < t3.shape.length; ++a2)
      o3.push([0, 0]);
    var i2 = t3.pad(o3), s2 = zr(i2.shape, e2, r2, false), u2 = Gr(s2.length, e2.length, false), c2 = Hr(i2.shape, e2, r2, false);
    return i2.reshape(s2).transpose(u2).reshape(c2);
  }, o2.prototype.reduce = function(t3, e2, n2) {
    var r2 = t3.shape[0], o3 = t3.shape[1], a2 = $r(o3), i2 = new Ji({ windowSize: a2, inSize: o3, batchSize: r2 }, e2), s2 = this.compileAndRun(i2, [t3], n2);
    return 1 === s2.shape[1] ? s2 : this.reduce(s2, e2, n2);
  }, o2.prototype.argReduce = function(t3, e2, n2) {
    void 0 === n2 && (n2 = null);
    var r2 = t3.shape[0], o3 = t3.shape[1];
    null != n2 && (r2 = n2.shape[0], o3 = n2.shape[1]);
    var a2 = $r(o3), i2 = new aa({ windowSize: a2, inSize: o3, batchSize: r2 }, e2, null == n2), s2 = [t3];
    null != n2 && s2.push(n2);
    var u2 = this.compileAndRun(i2, s2, "int32");
    return 1 === u2.shape[1] ? u2 : this.argReduce(t3, e2, u2);
  }, o2.prototype.argReducePacked = function(t3, e2, n2) {
    void 0 === n2 && (n2 = null);
    var r2 = null != n2 ? n2.shape : t3.shape, o3 = $r(r2[r2.length - 1]), a2 = new Ra(r2, o3, e2, null == n2), i2 = null == n2 ? [t3] : [t3, n2], s2 = this.compileAndRun(a2, i2, "int32");
    return s2.rank === t3.rank ? this.argReducePacked(t3, e2, s2) : s2;
  }, o2.prototype.sum = function(t3, e2) {
    Cn("sum", e2, t3.rank);
    var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3), i2 = Tt(t3.dtype);
    return this.reduce(a2, "sum", i2).reshape(r2);
  }, o2.prototype.prod = function(t3, e2) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.prod(t3, e2);
    var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3), i2 = Tt(t3.dtype);
    return this.reduce(a2, "prod", i2).reshape(r2);
  }, o2.prototype.unsortedSegmentSum = function(t3, e2, n2) {
    var r2 = 0, o3 = En([r2], t3.rank), a2 = t3;
    null != o3 && (a2 = t3.transpose(o3), r2 = In(1, t3.rank)[0]);
    var i2 = function(t4, e3, n3) {
      for (var r3 = [], o4 = t4.length, a3 = 0; a3 < o4; a3++)
        a3 !== e3 ? r3.push(t4[a3]) : r3.push(n3);
      return r3;
    }(a2.shape, r2, n2), s2 = k([a2.shape[r2]]), u2 = a2.as2D(-1, s2), c2 = Tt(t3.dtype), l2 = this.segOpCompute(u2, "unsortedSegmentSum", e2, c2, n2).reshape(i2);
    return null != o3 && (l2 = l2.transpose(Rn(o3))), l2;
  }, o2.prototype.segOpCompute = function(t3, e2, n2, r2, o3) {
    var a2 = t3.shape[0], i2 = t3.shape[1], s2 = function(t4, e3) {
      var n3, r3 = false;
      for (t4 <= Yr ? (n3 = t4, r3 = true) : n3 = Y(t4, Math.floor(Math.sqrt(t4))); !r3; )
        n3 > e3 || n3 === t4 ? r3 = true : n3 = Y(t4, n3 + 1);
      return n3;
    }(i2, o3), u2 = new us({ windowSize: s2, inSize: i2, batchSize: a2, numSegments: o3 }, e2), c2 = this.compileAndRun(u2, [t3, n2], r2);
    return c2.shape[1] === o3 ? c2 : (n2 = Kn(0, o3).tile([i2 / s2]), this.segOpCompute(c2, e2, n2, r2, o3));
  }, o2.prototype.argMinMaxReduce = function(t3, e2, n2) {
    var r2 = [e2];
    if (Cn("arg" + n2.charAt(0).toUpperCase() + n2.slice(1), r2, t3.rank), !i().getBool("WEBGL_PACK_REDUCE") || t3.rank <= 2) {
      var o3 = bn(t3.shape, r2), a2 = o3[0], s2 = k(o3[1]), u2 = t3.as2D(-1, s2);
      return this.argReduce(u2, n2).reshape(a2);
    }
    return this.argReducePacked(t3, n2);
  }, o2.prototype.argMin = function(t3, e2) {
    return this.argMinMaxReduce(t3, e2, "min");
  }, o2.prototype.argMax = function(t3, e2) {
    return this.argMinMaxReduce(t3, e2, "max");
  }, o2.prototype.cumsum = function(t3, e2, n2, r2) {
    if (e2 !== t3.rank - 1)
      throw new Error("WebGL cumsum shader expects an inner-most axis=" + (t3.rank - 1) + " but got axis=" + e2);
    var o3 = new ni(t3.shape, n2, r2);
    return this.compileAndRun(o3, [t3]);
  }, o2.prototype.equal = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return vec4(equal(a, b));\n", "bool");
    var n2 = new Ba("return float(a == b);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.notEqual = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return vec4(notEqual(a, b));\n", "bool");
    var n2 = new Ba("return float(a != b);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.less = function(t3, e2) {
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.less(t3, e2);
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return vec4(lessThan(a, b));\n", "bool");
    var n2 = new Ba("return float(a < b);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.lessEqual = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return vec4(lessThanEqual(a, b));\n", "bool");
    var n2 = new Ba("return float(a <= b);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.greater = function(t3, e2) {
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.greater(t3, e2);
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return vec4(greaterThan(a, b));\n", "bool");
    var n2 = new Ba("return float(a > b);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.greaterEqual = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return vec4(greaterThanEqual(a, b));\n", "bool");
    var n2 = new Ba("return float(a >= b);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.logicalNot = function(t3) {
    var e2 = new Cs(t3.shape, "return float(!(x >= 1.0));");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.logicalAnd = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n", "bool");
    var n2 = new Ba("return float(a >= 1.0 && b >= 1.0);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.logicalOr = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n", "bool");
    var n2 = new Ba("return float(a >= 1.0 || b >= 1.0);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "bool");
  }, o2.prototype.select = function(t3, e2, n2) {
    var r2 = new cs(t3.rank, e2.shape, e2.rank);
    return this.compileAndRun(r2, [t3, e2, n2], Dt(e2.dtype, n2.dtype));
  }, o2.prototype.where = function(t3) {
    dn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
    var e2 = t3.dataSync();
    return na(t3.shape, e2);
  }, o2.prototype.topk = function(t3, e2, n2) {
    return ea(t3.dataSync(), t3.shape, t3.dtype, e2);
  }, o2.prototype.min = function(t3, e2) {
    Cn("min", e2, t3.rank);
    var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
    return this.reduce(a2, "min", a2.dtype).reshape(r2);
  }, o2.prototype.minimum = function(t3, e2) {
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.minimum(t3, e2);
    var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2]);
  }, o2.prototype.mod = function(t3, e2) {
    var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ba("if (b == 0.0) return NAN;\n  return mod(a, b);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2]);
  }, o2.prototype.max = function(t3, e2) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.max(t3, e2);
    Cn("max", e2, t3.rank);
    var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
    return this.reduce(a2, "max", a2.dtype).reshape(r2);
  }, o2.prototype.maximum = function(t3, e2) {
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.maximum(t3, e2);
    var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2]);
  }, o2.prototype.all = function(t3, e2) {
    Cn("all", e2, t3.rank);
    var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
    return this.reduce(a2, "all", a2.dtype).reshape(r2);
  }, o2.prototype.any = function(t3, e2) {
    Cn("any", e2, t3.rank);
    var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = k(n2[1]), a2 = t3.as2D(-1, o3);
    return this.reduce(a2, "any", a2.dtype).reshape(r2);
  }, o2.prototype.realDivide = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS")) {
      return this.packedBinaryOp(t3, e2, "\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n", "float32", true);
    }
    var n2 = new Ba("\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "float32");
  }, o2.prototype.floorDiv = function(t3, e2) {
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, "\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n", "int32");
    var n2 = new Ba("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2], "int32");
  }, o2.prototype.add = function(t3, e2) {
    if ("complex64" === t3.dtype && "complex64" === e2.dtype)
      return this.complexSeparableBinaryOp(t3, e2, Fa);
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.add(t3, e2);
    var n2 = Dt(t3.dtype, e2.dtype);
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, Fa, n2);
    var r2 = new Ba(Fa, t3.shape, e2.shape);
    return this.compileAndRun(r2, [t3, e2], n2);
  }, o2.prototype.packedUnaryOp = function(t3, e2, n2) {
    var r2 = new Xs(t3.shape, e2);
    return this.compileAndRun(r2, [t3], n2);
  }, o2.prototype.packedBinaryOp = function(t3, e2, n2, r2, o3) {
    void 0 === o3 && (o3 = false);
    var a2 = new La(n2, t3.shape, e2.shape, o3);
    return this.compileAndRun(a2, [t3, e2], r2);
  }, o2.prototype.complexSeparableBinaryOp = function(t3, e2, n2) {
    var r2 = this, o3 = this.texData.get(t3.dataId), a2 = this.texData.get(e2.dataId), i2 = [[o3.complexTensors.real, a2.complexTensors.real], [o3.complexTensors.imag, a2.complexTensors.imag]].map(function(o4) {
      var a3 = o4[0], i3 = o4[1], s3 = r2.makeComplexComponentTensorInfo(t3, a3), u3 = r2.makeComplexComponentTensorInfo(e2, i3), c3 = new Ba(n2, t3.shape, e2.shape);
      return r2.compileAndRun(c3, [s3, u3], Dt(a3.dtype, i3.dtype));
    }), s2 = i2[0], u2 = i2[1], c2 = this.complex(s2, u2);
    return s2.dispose(), u2.dispose(), c2;
  }, o2.prototype.makeComplexComponentTensorInfo = function(t3, e2) {
    return { dataId: e2.dataId, dtype: e2.dtype, shape: t3.shape };
  }, o2.prototype.addN = function(t3) {
    if (1 === t3.length)
      return t3[0];
    if (t3.length > i().get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
      var e2 = Math.floor(t3.length / 2), n2 = this.addN(t3.slice(0, e2)), r2 = this.addN(t3.slice(e2));
      return this.addN([n2, r2]);
    }
    var o3 = t3.map(function(t4) {
      return t4.dtype;
    }).reduce(function(t4, e3) {
      return Dt(t4, e3);
    }), a2 = t3.map(function(t4) {
      return t4.shape;
    }), s2 = i().getBool("WEBGL_PACK") ? new oa(t3[0].shape, a2) : new ra(t3[0].shape, a2);
    return this.compileAndRun(s2, t3, o3);
  }, o2.prototype.subtract = function(t3, e2) {
    if ("complex64" === t3.dtype && "complex64" === e2.dtype)
      return this.complexSeparableBinaryOp(t3, e2, _a);
    if (this.shouldExecuteOnCPU([t3, e2]))
      return this.cpuBackend.subtract(t3, e2);
    var n2 = Dt(t3.dtype, e2.dtype);
    if (i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))
      return this.packedBinaryOp(t3, e2, _a, t3.dtype);
    var r2 = new Ba(_a, t3.shape, e2.shape);
    return this.compileAndRun(r2, [t3, e2], n2);
  }, o2.prototype.pow = function(t3, e2) {
    var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ba("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n", t3.shape, e2.shape), r2 = Dt(t3.dtype, e2.dtype);
    return this.compileAndRun(n2, [t3, e2], r2);
  }, o2.prototype.ceil = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.ceil(t3);
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, Ns, t3.dtype);
    var e2 = new Cs(t3.shape, Ns);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.floor = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.floor(t3);
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, Fs, t3.dtype);
    var e2 = new Cs(t3.shape, Fs);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.sign = function(t3) {
    var e2 = new Cs(t3.shape, "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.isNaN = function(t3) {
    var e2 = new Cs(t3.shape, "return float(isnan(x));");
    return this.compileAndRun(e2, [t3], "bool");
  }, o2.prototype.isInf = function(t3) {
    var e2 = new Cs(t3.shape, "return float(isinf(x));");
    return this.compileAndRun(e2, [t3], "bool");
  }, o2.prototype.isFinite = function(t3) {
    var e2 = new Cs(t3.shape, "return float(!isnan(x) && !isinf(x));");
    return this.compileAndRun(e2, [t3], "bool");
  }, o2.prototype.round = function(t3) {
    var e2 = new Cs(t3.shape, "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.exp = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.exp(t3);
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, _s, t3.dtype);
    var e2 = new Cs(t3.shape, _s);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.expm1 = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.expm1(t3);
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, Os, t3.dtype);
    var e2 = new Cs(t3.shape, Os);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.softmax = function(t3, e2) {
    var n2 = O([e2], t3.shape), r2 = this.max(t3, n2), o3 = wn(r2.shape, n2), a2 = this.subtract(t3, r2.reshape(o3)), i2 = this.exp(a2), s2 = this.sum(i2, n2).reshape(o3);
    return this.realDivide(i2, s2);
  }, o2.prototype.log = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.log(t3);
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, "\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n", t3.dtype);
    var e2 = new Cs(t3.shape, "if (x < 0.0) return NAN;\n  return log(x);");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.log1p = function(t3) {
    var e2 = new Cs(t3.shape, "return log(1.0 + x);");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.sqrt = function(t3) {
    var e2 = new Cs(t3.shape, "return sqrt(x);");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.rsqrt = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.rsqrt(t3);
    var e2 = new Cs(t3.shape, "return inversesqrt(x);");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.reciprocal = function(t3) {
    var e2 = new Cs(t3.shape, "return 1.0 / x;");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.relu = function(t3) {
    var e2;
    return e2 = i().getBool("WEBGL_PACK") ? new Xs(t3.shape, qs) : new Cs(t3.shape, ks), this.compileAndRun(e2, [t3]);
  }, o2.prototype.relu6 = function(t3) {
    var e2;
    return e2 = i().getBool("WEBGL_PACK") ? new Xs(t3.shape, Ks) : new Cs(t3.shape, Ss), this.compileAndRun(e2, [t3]);
  }, o2.prototype.prelu = function(t3, e2) {
    var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La(Pa, t3.shape, e2.shape) : new Ba(Ma, t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2]);
  }, o2.prototype.elu = function(t3) {
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, js, t3.dtype);
    var e2 = new Cs(t3.shape, As);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.eluDer = function(t3, e2) {
    var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n", t3.shape, e2.shape) : new Ba("return (b >= 1.0) ? a : a * (b + 1.0);", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2]);
  }, o2.prototype.selu = function(t3) {
    var e2 = new Cs(t3.shape, Ds);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.int = function(t3) {
    var e2 = new Cs(t3.shape, "return float(int(x));");
    return this.compileAndRun(e2, [t3], "int32");
  }, o2.prototype.clip = function(t3, e2, n2) {
    var r2, o3 = (r2 = i().getBool("WEBGL_PACK_CLIP") ? new Ua(t3.shape) : new Wa(t3.shape)).getCustomSetupFunc(e2, n2);
    return this.compileAndRun(r2, [t3], null, o3);
  }, o2.prototype.abs = function(t3) {
    if (this.shouldExecuteOnCPU([t3]))
      return this.cpuBackend.abs(t3);
    if (i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
      return this.packedUnaryOp(t3, Is, t3.dtype);
    var e2 = new Cs(t3.shape, Is);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.complexAbs = function(t3) {
    var e2 = this.texData.get(t3.dataId), n2 = new Va(t3.shape), r2 = [this.makeComplexComponentTensorInfo(t3, e2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, e2.complexTensors.imag)];
    return this.compileAndRun(n2, r2);
  }, o2.prototype.sigmoid = function(t3) {
    var e2 = new Cs(t3.shape, "return 1.0 / (1.0 + exp(-1.0 * x));");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.softplus = function(t3) {
    var e2 = new Cs(t3.shape, "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.sin = function(t3) {
    var e2 = new Cs(t3.shape, Ms);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.cos = function(t3) {
    var e2 = new Cs(t3.shape, Bs);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.tan = function(t3) {
    var e2 = new Cs(t3.shape, "return tan(x);");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.asin = function(t3) {
    var e2 = new Cs(t3.shape, Ps);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.acos = function(t3) {
    var e2 = new Cs(t3.shape, Ls);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.atan = function(t3) {
    var e2 = new Cs(t3.shape, Ws);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.atan2 = function(t3, e2) {
    var n2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t3.shape, e2.shape) : new Ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n", t3.shape, e2.shape);
    return this.compileAndRun(n2, [t3, e2]);
  }, o2.prototype.sinh = function(t3) {
    var e2 = new Cs(t3.shape, "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.cosh = function(t3) {
    var e2 = new Cs(t3.shape, "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.tanh = function(t3) {
    var e2 = new Cs(t3.shape, "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.asinh = function(t3) {
    var e2 = new Cs(t3.shape, Us);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.acosh = function(t3) {
    var e2 = new Cs(t3.shape, Vs);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.atanh = function(t3) {
    var e2 = new Cs(t3.shape, zs);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.erf = function(t3) {
    var e2 = new Cs(t3.shape, '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n');
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.step = function(t3, e2) {
    var n2 = new Cs(t3.shape, function(t4) {
      return void 0 === t4 && (t4 = 0), Es + "\n    return x > 0.0 ? 1.0 : float(" + t4 + ");\n  ";
    }(e2));
    return this.compileAndRun(n2, [t3]);
  }, o2.prototype.conv2dByMatMul = function(t3, e2, n2, r2, o3, a2) {
    var s2 = t3.shape, u2 = this.texData.get(t3.dataId), c2 = n2.inChannels, l2 = s2[0] * s2[1] * s2[2], h2 = n2.outChannels, f2 = "channelsLast" === n2.dataFormat, d2 = (1 === l2 || 1 === h2) && c2 > 1e3, p2 = s2[2] % 2 != 0 && !!u2.isPacked;
    if (d2 || !i().getBool("WEBGL_LAZILY_UNPACK") || !i().getBool("WEBGL_PACK_BINARY_OPERATIONS") || !p2) {
      var v2 = f2 ? s2[0] * s2[1] * s2[2] : s2[0] * s2[2] * s2[3], m2 = this.reshape(t3, [1, v2, n2.inChannels]), g2 = this.reshape(e2, [1, n2.inChannels, n2.outChannels]);
      return this.reshape(this.fusedBatchMatMul({ a: m2, b: g2, transposeA: false, transposeB: false, bias: r2, activation: o3, preluActivationWeights: a2 }), n2.outShape);
    }
    var y2 = f2 ? s2[0] * s2[1] * (s2[2] + 1) : s2[0] * s2[2] * (s2[3] + 1), x2 = { dataId: t3.dataId, shape: [1, y2, n2.inChannels], dtype: t3.dtype }, b2 = u2.shape;
    u2.shape = u2.shape.slice(), u2.shape[u2.shape.length - 2]++, C(_e(u2.shape, x2.shape), function() {
      return "packed reshape " + u2.shape + " to " + x2.shape + " isn't free";
    });
    var w2 = this.reshape(e2, [1, n2.inChannels, n2.outChannels]), E2 = this.fusedBatchMatMul({ a: x2, b: w2, transposeA: false, transposeB: false, bias: r2, activation: o3, preluActivationWeights: a2 }), R2 = this.texData.get(E2.dataId);
    return C(R2.isPacked, function() {
      return "batchMatMul result is expected to be packed";
    }), u2.shape = b2, R2.shape = n2.outShape, Lt.makeTensorFromDataId(E2.dataId, n2.outShape, E2.dtype);
  }, o2.prototype.conv2dWithIm2Row = function(t3, e2, n2, r2, o3, a2) {
    var i2 = n2.filterWidth, s2 = n2.filterHeight, u2 = n2.inChannels, c2 = n2.outWidth, l2 = n2.outHeight, h2 = "channelsLast" === n2.dataFormat, f2 = i2 * s2 * u2, d2 = l2 * c2, p2 = [f2, d2], v2 = t3.squeeze([0]), m2 = e2.reshape([1, f2, -1]), g2 = new Li(p2, v2.shape, n2), y2 = this.compileAndRun(g2, [v2]).reshape([1, p2[0], p2[1]]), x2 = null != r2, b2 = null != a2, w2 = o3 ? Qs(o3, true) : null, C2 = new Hi(y2.shape, [1, d2, n2.outChannels], true, false, x2, w2, b2), E2 = [y2, m2];
    r2 && E2.push(r2), b2 && E2.push(a2);
    var R2 = this.compileAndRun(C2, E2);
    return h2 ? R2.reshape([1, l2, c2, n2.outChannels]) : R2.reshape([1, n2.outChannels, l2, c2]);
  }, o2.prototype.fusedConv2d = function(t3) {
    var e2 = t3.input, n2 = t3.filter, r2 = t3.convInfo, o3 = t3.bias, a2 = t3.activation, s2 = t3.preluActivationWeights;
    if (1 === r2.filterHeight && 1 === r2.filterWidth && 1 === r2.dilationHeight && 1 === r2.dilationWidth && 1 === r2.strideHeight && 1 === r2.strideWidth && ("SAME" === r2.padInfo.type || "VALID" === r2.padInfo.type))
      return this.conv2dByMatMul(e2, n2, r2, o3, a2, s2);
    if (i().getBool("WEBGL_CONV_IM2COL") && 1 === e2.shape[0])
      return this.conv2dWithIm2Row(e2, n2, r2, o3, a2, s2);
    var u2 = null != o3, c2 = null != s2, l2 = a2 ? Qs(a2, false) : null, h2 = new Qa(r2, u2, l2, c2), f2 = [e2, n2];
    return o3 && f2.push(o3), s2 && f2.push(s2), this.compileAndRun(h2, f2);
  }, o2.prototype.conv2d = function(t3, e2, n2) {
    if (1 === n2.filterHeight && 1 === n2.filterWidth && 1 === n2.dilationHeight && 1 === n2.dilationWidth && 1 === n2.strideHeight && 1 === n2.strideWidth && ("SAME" === n2.padInfo.type || "VALID" === n2.padInfo.type))
      return this.conv2dByMatMul(t3, e2, n2);
    if (i().getBool("WEBGL_CONV_IM2COL") && 1 === t3.shape[0])
      return this.conv2dWithIm2Row(t3, e2, n2);
    var r2 = new Qa(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.conv2dDerInput = function(t3, e2, n2) {
    var r2 = new Ka(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.conv2dDerFilter = function(t3, e2, n2) {
    var r2 = new qa(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.fusedDepthwiseConv2D = function(t3) {
    var e2, n2 = t3.input, r2 = t3.filter, o3 = t3.convInfo, a2 = t3.bias, s2 = t3.activation, u2 = t3.preluActivationWeights, c2 = i().getBool("WEBGL_PACK_DEPTHWISECONV") && o3.strideWidth <= 2 && o3.outChannels / o3.inChannels == 1, l2 = s2 ? Qs(s2, c2) : null, h2 = [n2, r2], f2 = null != a2, d2 = null != u2;
    return f2 && h2.push(a2), d2 && h2.push(u2), c2 ? (e2 = new ti(o3, f2, l2, d2), this.compileAndRun(e2, h2)) : (e2 = new Za(o3, f2, l2, d2), this.compileAndRun(e2, h2));
  }, o2.prototype.depthwiseConv2D = function(t3, e2, n2) {
    var r2;
    return i().getBool("WEBGL_PACK_DEPTHWISECONV") && n2.strideWidth <= 2 && n2.outChannels / n2.inChannels == 1 ? (r2 = new ti(n2), this.compileAndRun(r2, [t3, e2])) : (r2 = new Za(n2), this.compileAndRun(r2, [t3, e2]));
  }, o2.prototype.depthwiseConv2DDerInput = function(t3, e2, n2) {
    var r2 = new $a(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.depthwiseConv2DDerFilter = function(t3, e2, n2) {
    var r2 = new Ya(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.conv3d = function(t3, e2, n2) {
    var r2 = new Ja(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.conv3dDerInput = function(t3, e2, n2) {
    var r2 = new Xa(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.conv3dDerFilter = function(t3, e2, n2) {
    var r2 = new ja(n2);
    return this.compileAndRun(r2, [t3, e2]);
  }, o2.prototype.maxPool = function(t3, e2) {
    var n2 = new $i(e2, "max", false);
    return this.compileAndRun(n2, [t3]);
  }, o2.prototype.avgPool = function(t3, e2) {
    var n2 = new $i(e2, "avg", false);
    return this.compileAndRun(n2, [t3], "float32");
  }, o2.prototype.maxPoolBackprop = function(t3, e2, n2, r2) {
    var o3 = new $i(r2, "max", true), a2 = this.compileAndRun(o3, [e2]), i2 = new zi(r2), s2 = this.compileAndRun(i2, [t3, a2], e2.dtype);
    return a2.dispose(), s2;
  }, o2.prototype.avgPoolBackprop = function(t3, e2, n2) {
    var r2 = new Ia(n2);
    return this.compileAndRun(r2, [t3], e2.dtype);
  }, o2.prototype.cast = function(t3, e2) {
    return Po(t3, e2, this);
  }, o2.prototype.unstack = function(t3, e2) {
    for (var n2 = t3.shape[e2], r2 = new Array(t3.rank - 1), o3 = 0, a2 = 0; a2 < t3.rank; a2++)
      a2 !== e2 && (r2[o3++] = t3.shape[a2]);
    var i2 = new Array(t3.rank).fill(0), s2 = t3.shape.slice();
    s2[e2] = 1;
    var u2 = new Array(n2);
    for (a2 = 0; a2 < u2.length; a2++)
      i2[e2] = a2, u2[a2] = this.slice(t3, i2, s2).reshape(r2);
    return u2;
  }, o2.prototype.avgPool3d = function(t3, e2) {
    var n2 = new Qi(e2, "avg", false);
    return this.compileAndRun(n2, [t3], "float32");
  }, o2.prototype.avgPool3dBackprop = function(t3, e2, n2) {
    var r2 = new ka(n2);
    return this.compileAndRun(r2, [t3], e2.dtype);
  }, o2.prototype.maxPool3d = function(t3, e2) {
    var n2 = new Qi(e2, "max", false);
    return this.compileAndRun(n2, [t3], "float32");
  }, o2.prototype.maxPool3dBackprop = function(t3, e2, n2, r2) {
    var o3 = new Qi(r2, "max", true), a2 = this.compileAndRun(o3, [e2]), i2 = new Gi(r2), s2 = this.compileAndRun(i2, [t3, a2], e2.dtype);
    return a2.dispose(), s2;
  }, o2.prototype.reshape = function(t3, e2) {
    var n2 = this.texData.get(t3.dataId);
    if (n2.isPacked && !_e(t3.shape, e2) && (null === n2.texture || !_e(n2.shape, e2))) {
      var r2 = this.packedReshape(t3, e2);
      return Lt.makeTensorFromDataId(r2.dataId, r2.shape, r2.dtype);
    }
    return Lo(t3, e2);
  }, o2.prototype.resizeBilinear = function(t3, e2, n2, r2) {
    var o3 = i().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new ns(t3.shape, e2, n2, r2) : new es(t3.shape, e2, n2, r2);
    return this.compileAndRun(o3, [t3], "float32");
  }, o2.prototype.resizeBilinearBackprop = function(t3, e2, n2) {
    var r2 = new ts(t3, e2, n2);
    return this.compileAndRun(r2, [t3]);
  }, o2.prototype.resizeNearestNeighbor = function(t3, e2, n2, r2) {
    var o3 = new os(t3.shape, e2, n2, r2);
    return this.compileAndRun(o3, [t3]);
  }, o2.prototype.resizeNearestNeighborBackprop = function(t3, e2, n2) {
    var r2 = new rs(t3, e2, n2);
    return this.compileAndRun(r2, [t3]);
  }, o2.prototype.multinomial = function(t3, e2, n2, r2) {
    var o3 = e2 ? t3 : go(t3), a2 = o3.shape[0], i2 = o3.shape[1], s2 = new qi(a2, i2, n2), u2 = s2.getCustomSetupFunc(r2);
    return this.compileAndRun(s2, [o3], "int32", u2);
  }, o2.prototype.oneHot = function(t3, e2, n2, r2) {
    var o3 = new Ki(t3.size, e2, n2, r2);
    return this.compileAndRun(o3, [t3]);
  }, o2.prototype.diag = function(t3) {
    var e2 = new si(t3.size);
    return this.compileAndRun(e2, [t3]);
  }, o2.prototype.nonMaxSuppression = function(t3, e2, n2, r2, o3) {
    return dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"), jo(t3.dataSync(), e2.dataSync(), n2, r2, o3);
  }, o2.prototype.cropAndResize = function(t3, e2, n2, r2, o3, a2) {
    var i2 = new ei(t3.shape, e2.shape, r2, o3, a2);
    return this.compileAndRun(i2, [t3, e2, n2], "float32");
  }, o2.prototype.depthToSpace = function(t3, e2, n2) {
    C(e2 > 1, function() {
      return "blockSize should be > 1 for depthToSpace, but was: " + e2;
    });
    var r2 = t3.shape[0], o3 = "NHWC" === n2 ? t3.shape[1] : t3.shape[2], a2 = "NHWC" === n2 ? t3.shape[2] : t3.shape[3], i2 = "NHWC" === n2 ? t3.shape[3] : t3.shape[1], s2 = o3 * e2, u2 = a2 * e2, c2 = i2 / (e2 * e2), l2 = new ii("NHWC" === n2 ? [r2, s2, u2, c2] : [r2, c2, s2, u2], e2, n2);
    return this.compileAndRun(l2, [t3]);
  }, o2.prototype.split = function(t3, e2, n2) {
    return Zo(t3, e2, n2);
  }, o2.prototype.scatterND = function(t3, e2, n2) {
    var r2 = Zr(0, t3, n2), o3 = r2.sliceRank, a2 = r2.numUpdates, i2 = r2.sliceSize, s2 = r2.strides, u2 = r2.outputSize, c2 = [u2 / i2, i2], l2 = t3.reshape([a2, o3]), h2 = e2.reshape([a2, i2]);
    if (0 === u2)
      return Lo(Fn([]), n2);
    var f2 = On(0), d2 = new ss(a2, o3, l2.rank, h2.rank, s2, c2);
    return this.compileAndRun(d2, [h2, l2, f2]).reshape(n2);
  }, o2.prototype.sparseToDense = function(t3, e2, n2, r2) {
    var o3 = Zr(0, t3, n2), a2 = o3.sliceRank, i2 = o3.numUpdates, s2 = o3.strides, u2 = o3.outputSize, c2 = new ss(i2, a2, t3.rank, e2.rank, s2, [u2, 1], false);
    return this.compileAndRun(c2, [e2, t3, r2]).reshape(n2);
  }, o2.prototype.fft = function(t3) {
    return this.fftImpl(t3, false);
  }, o2.prototype.ifft = function(t3) {
    return this.fftImpl(t3, true);
  }, o2.prototype.fftImpl = function(t3, e2) {
    var n2 = this.texData.get(t3.dataId), r2 = new pi(fi, t3.shape, e2), o3 = new pi(di, t3.shape, e2), a2 = [this.makeComplexComponentTensorInfo(t3, n2.complexTensors.real), this.makeComplexComponentTensorInfo(t3, n2.complexTensors.imag)], i2 = this.compileAndRun(r2, a2), s2 = this.compileAndRun(o3, a2), u2 = this.complex(i2, s2).as2D(t3.shape[0], t3.shape[1]);
    return i2.dispose(), s2.dispose(), u2;
  }, o2.prototype.gatherND = function(t3, e2) {
    var n2 = e2.shape, r2 = n2[n2.length - 1], o3 = jr(t3, e2), a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3], c2 = e2.reshape([i2, r2]), l2 = t3.reshape([t3.size / s2, s2]), h2 = new gi(r2, u2, [i2, s2]);
    return this.compileAndRun(h2, [l2, c2]).reshape(a2);
  }, o2.prototype.fill = function(t3, e2, n2) {
    if ("string" === (n2 = n2 || j(e2))) {
      var r2 = P(n2, k(t3));
      return r2.fill(e2), Lt.makeTensor(r2, t3, n2, this);
    }
    var o3 = new vi(t3, e2), a2 = o3.getCustomSetupFunc(e2);
    return this.compileAndRun(o3, [], n2, a2);
  }, o2.prototype.onesLike = function(t3) {
    if ("string" === t3.dtype)
      throw new Error("onesLike is not supported under string dtype");
    return this.fill(t3.shape, 1, t3.dtype);
  }, o2.prototype.zerosLike = function(t3) {
    return this.fill(t3.shape, "string" === t3.dtype ? "" : 0, t3.dtype);
  }, o2.prototype.linspace = function(t3, e2, n2) {
    return Wo(t3, e2, n2);
  }, o2.prototype.makeTensorInfo = function(t3, e2) {
    var n2 = this.write(null, t3, e2);
    return this.texData.get(n2).usage = null, { dataId: n2, shape: t3, dtype: e2 };
  }, o2.prototype.makeOutput = function(t3, e2) {
    var n2 = this.makeTensorInfo(t3, e2).dataId;
    return Lt.makeTensorFromDataId(n2, t3, e2, this);
  }, o2.prototype.unpackTensor = function(t3) {
    var e2 = new Ys(t3.shape);
    return this.runWebGLProgram(e2, [t3], t3.dtype);
  }, o2.prototype.packTensor = function(t3) {
    var e2 = new ji(t3.shape);
    return this.runWebGLProgram(e2, [t3], t3.dtype, null, true);
  }, o2.prototype.packedReshape = function(t3, e2) {
    var n2 = [Ae(t3.shape)].concat(De(t3.shape)), r2 = { dtype: t3.dtype, shape: n2, dataId: t3.dataId }, o3 = [Ae(e2)].concat(De(e2)), a2 = new Zi(o3, n2), i2 = this.runWebGLProgram(a2, [r2], t3.dtype, null, true);
    return { dataId: i2.dataId, shape: e2, dtype: i2.dtype };
  }, o2.prototype.decode = function(t3) {
    var e2, n2 = this.texData.get(t3), r2 = n2.isPacked, o3 = n2.shape, a2 = n2.dtype, i2 = Te(o3);
    e2 = r2 ? new ai(i2) : new oi(i2);
    return { dtype: a2, shape: o3, dataId: this.runWebGLProgram(e2, [{ shape: i2, dtype: a2, dataId: t3 }], a2, null, true).dataId };
  }, o2.prototype.runWebGLProgram = function(t3, e2, n2, r2, o3) {
    var a2 = this;
    void 0 === o3 && (o3 = false);
    var s2 = this.makeTensorInfo(t3.outputShape, n2), u2 = this.texData.get(s2.dataId);
    if (t3.packedOutput && (u2.isPacked = true), t3.outPackingScheme === Vt.DENSE) {
      var c2 = Yt(t3.outputShape);
      u2.texShape = c2.map(function(t4) {
        return 2 * t4;
      });
    }
    if (null != t3.outTexUsage && (u2.usage = t3.outTexUsage), 0 === k(s2.shape))
      return u2.values = B(s2.dtype, 0), s2;
    var l2 = [], h2 = e2.map(function(e3) {
      if ("complex64" === e3.dtype)
        throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
      var n3 = a2.texData.get(e3.dataId);
      if (null == n3.texture) {
        if (!t3.packedInputs && k(e3.shape) <= i().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))
          return { shape: e3.shape, texData: null, isUniform: true, uniformValues: n3.values };
        t3.packedInputs && (n3.isPacked = true, n3.shape = e3.shape);
      } else if (!!n3.isPacked != !!t3.packedInputs)
        e3 = n3.isPacked ? a2.unpackTensor(e3) : a2.packTensor(e3), l2.push(e3), n3 = a2.texData.get(e3.dataId);
      else if (n3.isPacked && !_e(n3.shape, e3.shape)) {
        var r3 = e3, o4 = e3.shape;
        e3.shape = n3.shape, e3 = a2.packedReshape(e3, o4), l2.push(e3), n3 = a2.texData.get(e3.dataId), r3.shape = o4;
      }
      return a2.uploadToGPU(e3.dataId), { shape: e3.shape, texData: n3, isUniform: false };
    });
    this.uploadToGPU(s2.dataId);
    var f2, d2 = { shape: s2.shape, texData: u2, isUniform: false }, p2 = function(t4, e3, n3) {
      var r3 = "";
      e3.concat(n3).forEach(function(t5) {
        var e4 = null != t5.texData && null != t5.texData.slice && t5.texData.slice.flatOffset > 0, n4 = t5.isUniform ? "uniform" : t5.texData.texShape;
        r3 += t5.shape + "_" + n4 + "_" + e4;
      });
      var o4 = t4.userCode, a3 = t4.constructor.name;
      return a3 += "_" + r3 + "_" + o4;
    }(t3, h2, d2), v2 = this.getAndSaveBinary(p2, function() {
      return function(t4, e3, n3, r3) {
        var o4 = e3.userCode, a3 = n3.map(function(t5, n4) {
          var r4 = { logicalShape: t5.shape, texShape: t5.isUniform ? null : t5.texData.texShape, isUniform: t5.isUniform, isPacked: !t5.isUniform && t5.texData.isPacked, flatOffset: null };
          return null != t5.texData && null != t5.texData.slice && t5.texData.slice.flatOffset > 0 && (r4.flatOffset = t5.texData.slice.flatOffset), { name: e3.variableNames[n4], shapeInfo: r4 };
        }), s3 = a3.map(function(t5) {
          return t5.shapeInfo;
        }), u3 = { logicalShape: r3.shape, texShape: r3.texData.texShape, isUniform: false, isPacked: r3.texData.isPacked, flatOffset: null }, c3 = fa(a3, u3, o4, e3.packedInputs), l3 = t4.createProgram(c3), h3 = null, f3 = t4.getUniformLocation(l3, "NAN", false);
        1 === i().getNumber("WEBGL_VERSION") && (h3 = t4.getUniformLocation(l3, "INFINITY", false));
        for (var d3 = {}, p3 = 0; p3 < e3.variableNames.length; p3++) {
          var v3 = e3.variableNames[p3];
          d3[v3] = t4.getUniformLocation(l3, v3, false), d3["offset" + v3] = t4.getUniformLocation(l3, "offset" + v3, false);
        }
        return { program: e3, source: c3, webGLProgram: l3, uniformLocations: d3, inShapeInfos: s3, outShapeInfo: u3, infLoc: h3, nanLoc: f3 };
      }(a2.gpgpu, t3, h2, d2);
    }), m2 = null != this.activeTimers;
    if (m2 && (f2 = this.startTimer()), function(t4, e3, n3, r3, o4) {
      Pi(e3.inShapeInfos, n3), Pi([e3.outShapeInfo], [r3]);
      var a3 = r3.texData.texture, s3 = r3.texData.texShape;
      r3.texData.isPacked ? t4.setOutputPackedMatrixTexture(a3, s3[0], s3[1]) : t4.setOutputMatrixTexture(a3, s3[0], s3[1]), t4.setProgram(e3.webGLProgram), 1 === i().getNumber("WEBGL_VERSION") && null !== e3.infLoc && t4.gl.uniform1f(e3.infLoc, 1 / 0), null !== e3.nanLoc && t4.gl.uniform1f(e3.nanLoc, NaN), n3.forEach(function(n4, r4) {
        var o5 = e3.program.variableNames[r4], a4 = e3.uniformLocations[o5], i2 = e3.uniformLocations["offset" + o5];
        if (null != a4)
          if (n4.isUniform)
            if (k(n4.shape) < 2)
              t4.gl.uniform1f(a4, n4.uniformValues[0]);
            else {
              var s4 = n4.uniformValues;
              s4 instanceof Float32Array || (s4 = new Float32Array(s4)), t4.gl.uniform1fv(a4, s4);
            }
          else
            null != n4.texData.slice && null != i2 && t4.gl.uniform1i(i2, n4.texData.slice.flatOffset), t4.setInputMatrixTexture(n4.texData.texture, a4, r4);
      }), null != o4 && o4(t4, e3.webGLProgram), t4.executeProgram();
    }(this.gpgpu, v2, h2, d2, r2), l2.forEach(function(t4) {
      return a2.disposeData(t4.dataId);
    }), m2 && (f2 = this.endTimer(f2), this.activeTimers.push({ name: t3.constructor.name, query: this.getQueryTime(f2) })), !i().getBool("WEBGL_LAZILY_UNPACK") && u2.isPacked && false === o3) {
      var g2 = this.unpackTensor(s2);
      return this.disposeData(s2.dataId), g2;
    }
    return s2;
  }, o2.prototype.compileAndRun = function(t3, e2, n2, r2, o3) {
    void 0 === o3 && (o3 = false), n2 = n2 || e2[0].dtype;
    var a2 = this.runWebGLProgram(t3, e2, n2, r2, o3);
    return Lt.makeTensorFromDataId(a2.dataId, a2.shape, a2.dtype);
  }, o2.prototype.getAndSaveBinary = function(t3, e2) {
    return t3 in this.binaryCache || (this.binaryCache[t3] = e2()), this.binaryCache[t3];
  }, o2.prototype.getTextureManager = function() {
    return this.textureManager;
  }, o2.prototype.dispose = function() {
    var t3 = this;
    if (!this.disposed) {
      if (!i().getBool("IS_TEST"))
        Object.keys(this.binaryCache).forEach(function(e2) {
          t3.gpgpu.deleteProgram(t3.binaryCache[e2].webGLProgram), delete t3.binaryCache[e2];
        });
      this.textureManager.dispose(), null != this.canvas && "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null, this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = true;
    }
  }, o2.prototype.floatPrecision = function() {
    var t3 = this;
    return null == this.floatPrecisionValue && (this.floatPrecisionValue = Ze(function() {
      if (!i().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
        var e2 = i().getBool("DEBUG");
        i().set("DEBUG", false);
        var n2 = t3.abs(On(1e-8)).dataSync()[0];
        if (i().set("DEBUG", e2), n2 > 0)
          return 32;
      }
      return 16;
    })), this.floatPrecisionValue;
  }, o2.prototype.epsilon = function() {
    return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
  }, o2.prototype.uploadToGPU = function(t3) {
    var e2, n2 = this.texData.get(t3), r2 = n2.shape, o3 = n2.dtype, a2 = n2.values, i2 = n2.texture, s2 = n2.usage, u2 = n2.isPacked;
    if (null == i2) {
      var c2, l2 = null != this.activeTimers;
      l2 && (c2 = et());
      var h2 = n2.texShape;
      if (null == h2 && (h2 = Ne(r2, u2), n2.texShape = h2), null != a2) {
        var f2 = Te(r2), d2 = void 0, p2 = h2[1], v2 = h2[0], m2 = a2 instanceof Uint8Array;
        u2 ? (p2 = (e2 = $t(h2[0], h2[1]))[0], v2 = e2[1], d2 = new hi(f2, [v2, p2], m2)) : d2 = new li(f2, [v2, p2], m2);
        var g2 = this.makeTensorInfo([v2, p2], o3);
        this.texData.get(g2.dataId).usage = m2 ? zt.PIXELS : zt.UPLOAD, this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g2.dataId), p2, v2, a2);
        var y2 = this.runWebGLProgram(d2, [g2], o3, null, true), x2 = this.texData.get(y2.dataId);
        n2.texture = x2.texture, n2.texShape = x2.texShape, n2.isPacked = x2.isPacked, n2.usage = x2.usage, this.disposeData(g2.dataId), this.texData.delete(y2.dataId), n2.values = null, l2 && (this.uploadWaitMs += et() - c2);
      } else {
        var b2 = this.acquireTexture(h2, s2, o3, u2);
        n2.texture = b2;
      }
    }
  }, o2.prototype.convertAndCacheOnCPU = function(t3, e2) {
    var n2 = this.texData.get(t3), r2 = n2.dtype;
    return this.releaseGPUData(t3), null != e2 && (n2.values = function(t4, e3) {
      if ("float32" === e3 || "complex64" === e3)
        return t4;
      if ("int32" === e3 || "bool" === e3) {
        for (var n3 = "int32" === e3 ? new Int32Array(t4.length) : new Uint8Array(t4.length), r3 = 0; r3 < n3.length; ++r3)
          n3[r3] = Math.round(t4[r3]);
        return n3;
      }
      throw new Error("Unknown dtype " + e3);
    }(e2, r2)), n2.values;
  }, o2.prototype.acquireTexture = function(t3, e2, n2, r2) {
    if (this.numBytesInGPU += this.computeBytes(t3, n2), !this.warnedAboutMemory && this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024) {
      var o3 = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
      this.warnedAboutMemory = true, console.warn("High memory usage in GPU: " + o3 + " MB, most likely due to a memory leak");
    }
    return this.textureManager.acquireTexture(t3, e2, r2);
  }, o2.prototype.computeBytes = function(t3, e2) {
    return t3[0] * t3[1] * z(e2);
  }, o2;
}(bo);
Wt() && Lt.registerBackend("webgl", function() {
  return new Zs();
}, 2);
var tu = An({ square_: function(t2) {
  var e2 = mn(t2, "x", "square"), n2 = [e2];
  return Lt.runKernelFunc(function(t3, n3) {
    return n3([e2]), t3.square(e2);
  }, { x: e2 }, null, "Square", {}, n2, []);
} });
var eu = "SquaredDifference";
var nu = An({ squaredDifference_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "squaredDifference"), o2 = mn(e2, "b", "squaredDifference");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Ro(r2.shape, o2.shape);
  var a2 = { a: r2, b: o2 }, i2 = [r2, o2];
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.squaredDifference(r2, o2);
    return e3([r2, o2]), n3;
  }, a2, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1], o3 = On(2);
    return { a: function() {
      return t3.mul(n3.sub(r3).mul(o3));
    }, b: function() {
      return t3.mul(r3.sub(n3).mul(o3));
    } };
  }, eu, {}, i2, []);
} });
var ru = An({ abs_: function(t2) {
  var e2 = mn(t2, "x", "abs");
  return "complex64" === e2.dtype ? Lt.runKernelFunc(function(t3) {
    return t3.complexAbs(e2);
  }, { $x: e2 }) : Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.abs(e2);
    return n2([e2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { x: function() {
      return t3.mul(n2.toFloat().step(-1));
    } };
  }, "Abs");
} });
var ou = An({ acos_: function(t2) {
  var e2 = mn(t2, "x", "acos");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.acos(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.divStrict(On(1).sub(n2.toFloat().square()).sqrt()).neg();
    } };
  });
} });
var au = An({ acosh_: function(t2) {
  var e2 = mn(t2, "x", "acosh");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.acosh(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.divStrict(n2.toFloat().square().sub(1).sqrt());
    } };
  });
} });
var iu = An({ asin_: function(t2) {
  var e2 = mn(t2, "x", "asin");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.asin(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.divStrict(On(1).sub(n2.toFloat().square()).sqrt());
    } };
  });
} });
var su = An({ asinh_: function(t2) {
  var e2 = mn(t2, "x", "asinh");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.asinh(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.divStrict(On(1).add(n2.toFloat().square()).sqrt());
    } };
  });
} });
var uu = An({ atan_: function(t2) {
  var e2 = mn(t2, "x", "atan");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.atan(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.div(n2.toFloat().square().add(1));
    } };
  });
} });
var cu = An({ atanh_: function(t2) {
  var e2 = mn(t2, "x", "atanh");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.atanh(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.div(On(1).sub(n2.toFloat().square()));
    } };
  });
} });
var lu = An({ ceil_: function(t2) {
  var e2 = mn(t2, "x", "ceil");
  return Lt.runKernelFunc(function(t3) {
    return t3.ceil(e2);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var hu = An({ clipByValue_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "clipByValue");
  C(e2 <= n2, function() {
    return "Error in clip: min (" + e2 + ") must be less than or equal to max (" + n2 + ").";
  });
  var o2 = [r2], a2 = { min: e2, max: n2 };
  return Lt.runKernelFunc(function(t3, o3) {
    var a3 = t3.clip(r2, e2, n2);
    return o3([r2]), a3;
  }, { x: r2 }, function(t3, r3) {
    var o3 = r3[0];
    return { x: function() {
      return t3.where(o3.greaterEqual(e2).logicalAnd(o3.lessEqual(n2)), Xn(t3));
    } };
  }, "ClipByValue", a2, o2);
} });
var fu = An({ cos_: function(t2) {
  var e2 = mn(t2, "x", "cos"), n2 = [e2];
  return Lt.runKernelFunc(function(t3, n3) {
    var r2 = t3.cos(e2);
    return n3([e2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n3 = e3[0];
    return { x: function() {
      return n3.toFloat().sin().neg().mul(t3);
    } };
  }, "Cos", {}, n2);
} });
var du = An({ cosh_: function(t2) {
  var e2 = mn(t2, "x", "cosh");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.cosh(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return n2.toFloat().sinh().mulStrict(t3);
    } };
  });
} });
var pu = An({ erf_: function(t2) {
  var e2 = mn(t2, "x", "erf");
  return C("int32" === e2.dtype || "float32" === e2.dtype, function() {
    return "Input dtype must be `int32` or `float32`.";
  }), "int32" === e2.dtype && (e2 = e2.toFloat()), Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.erf(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.mul(n2.square().neg().exp().mul(2 / Math.sqrt(Math.PI)));
    } };
  });
} });
var vu = An({ exp_: function(t2) {
  var e2 = mn(t2, "x", "exp");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.exp(e2);
    return n2([r2]), r2;
  }, { x: e2 }, function(t3, e3) {
    return { x: function() {
      return t3.mulStrict(e3[0]);
    } };
  }, "Exp", {}, [], [true]);
} });
var mu = An({ expm1_: function(t2) {
  var e2 = mn(t2, "x", "expm1");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.expm1(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.mul(n2.exp());
    } };
  });
} });
var gu = An({ floor_: function(t2) {
  var e2 = mn(t2, "x", "floor");
  return Lt.runKernelFunc(function(t3) {
    return t3.floor(e2);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var yu = An({ log_: function(t2) {
  var e2 = mn(t2, "x", "log"), n2 = [e2];
  return Lt.runKernelFunc(function(t3, n3) {
    var r2 = t3.log(e2);
    return n3([e2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n3 = e3[0];
    return { x: function() {
      return t3.div(n3.toFloat());
    } };
  }, "Log", {}, n2);
} });
var xu = An({ log1p_: function(t2) {
  var e2 = mn(t2, "x", "log1p");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.log1p(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.div(n2.add(1));
    } };
  });
} });
var bu = An({ logSigmoid_: function(t2) {
  var e2 = mn(t2, "x", "logSigmoid");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.softplus(e2.neg()).neg();
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.mul(n2.neg().sigmoid());
    } };
  });
} });
var wu = An({ neg_: function(t2) {
  var e2 = mn(t2, "x", "neg"), n2 = [e2];
  return Lt.runKernelFunc(function(t3) {
    return t3.neg(e2);
  }, { x: e2 }, function(t3) {
    return { x: function() {
      return t3.neg();
    } };
  }, "Neg", {}, n2);
} });
var Cu = An({ reciprocal_: function(t2) {
  var e2 = mn(t2, "x", "reciprocal");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.reciprocal(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.div(n2.square().neg());
    } };
  });
} });
var Eu = An({ round_: function(t2) {
  var e2 = mn(t2, "x", "round");
  return Lt.runKernelFunc(function(t3) {
    return t3.round(e2);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Ru = An({ rsqrt_: function(t2) {
  var e2 = mn(t2, "x", "rsqrt"), n2 = [e2];
  return Lt.runKernelFunc(function(t3, n3) {
    var r2 = t3.rsqrt(e2);
    return n3([e2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n3 = e3[0];
    return { x: function() {
      return t3.div(n3.pow(1.5).mul(2)).neg();
    } };
  }, "Rsqrt", {}, n2);
} });
var Iu = An({ sigmoid_: function(t2) {
  var e2 = mn(t2, "x", "sigmoid");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.sigmoid(e2);
    return n2([r2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { x: function() {
      return t3.mul(n2.mul(On(1).sub(n2)));
    } };
  }, "Sigmoid");
} });
var ku = An({ sign_: function(t2) {
  var e2 = mn(t2, "x", "sign");
  return Lt.runKernelFunc(function(t3) {
    return t3.sign(e2);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Su = An({ isNaN_: function(t2) {
  var e2 = mn(t2, "x", "isNaN");
  return Lt.runKernelFunc(function(t3) {
    return t3.isNaN(e2);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Au = An({ isInf_: function(t2) {
  var e2 = mn(t2, "x", "isInf");
  return Lt.runKernelFunc(function(t3) {
    return t3.isInf(e2);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Du = An({ isFinite_: function(t2) {
  var e2 = mn(t2, "x", "isFinite");
  return Lt.runKernelFunc(function(t3) {
    return t3.isFinite(e2);
  }, { $x: e2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Tu = An({ sin_: function(t2) {
  var e2 = mn(t2, "x", "sin"), n2 = [e2];
  return Lt.runKernelFunc(function(t3, n3) {
    var r2 = t3.sin(e2);
    return n3([e2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n3 = e3[0];
    return { x: function() {
      return n3.toFloat().cos().mul(t3);
    } };
  }, "Sin", {}, n2);
} });
var Nu = An({ sinh_: function(t2) {
  var e2 = mn(t2, "x", "sinh");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.sinh(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return n2.toFloat().cosh().mulStrict(t3);
    } };
  });
} });
var Fu = An({ softplus_: function(t2) {
  var e2 = mn(t2, "x", "softplus");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.softplus(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.mul(n2.sigmoid());
    } };
  });
} });
var _u = An({ sqrt_: function(t2) {
  var e2 = mn(t2, "x", "sqrt");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.sqrt(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.div(n2.toFloat().sqrt().mul(2));
    } };
  });
} });
var Ou = An({ step_: function(t2, e2) {
  void 0 === e2 && (e2 = 0);
  var n2 = mn(t2, "x", "step");
  return Lt.runKernelFunc(function(t3) {
    return t3.step(n2, e2);
  }, { $x: n2 }, function(t3) {
    return { $x: function() {
      return Xn(t3);
    } };
  });
} });
var Mu = An({ tan_: function(t2) {
  var e2 = mn(t2, "x", "tan");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.tan(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return t3.div(n2.cos().square());
    } };
  });
} });
var Bu = An({ tanh_: function(t2) {
  var e2 = mn(t2, "x", "tanh");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.tanh(e2);
    return n2([r2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { x: function() {
      return On(1).sub(n2.square()).mulStrict(t3);
    } };
  }, "Tanh", {}, null, [true]);
} });
function Pu(t2, e2, n2, r2, o2, a2) {
  var i2, s2, u2 = mn(t2, "x", "batchNorm"), c2 = mn(e2, "mean", "batchNorm"), l2 = mn(n2, "variance", "batchNorm");
  return null != o2 && (i2 = mn(o2, "scale", "batchNorm")), null != r2 && (s2 = mn(r2, "offset", "batchNorm")), C(2 === u2.rank, function() {
    return "Error in batchNorm3D: x must be rank 3 but got rank " + u2.rank + ".";
  }), C(2 === c2.rank || 1 === c2.rank, function() {
    return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + c2.rank + ".";
  }), C(2 === l2.rank || 1 === l2.rank, function() {
    return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l2.rank + ".";
  }), null != i2 && C(2 === i2.rank || 1 === i2.rank, function() {
    return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + i2.rank + ".";
  }), null != s2 && C(2 === s2.rank || 1 === s2.rank, function() {
    return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + s2.rank + ".";
  }), Uu(u2, c2, l2, s2, i2, a2);
}
function Lu(t2, e2, n2, r2, o2, a2) {
  var i2, s2, u2 = mn(t2, "x", "batchNorm"), c2 = mn(e2, "mean", "batchNorm"), l2 = mn(n2, "variance", "batchNorm");
  return null != o2 && (i2 = mn(o2, "scale", "batchNorm")), null != r2 && (s2 = mn(r2, "offset", "batchNorm")), C(3 === u2.rank, function() {
    return "Error in batchNorm3D: x must be rank 3 but got rank " + u2.rank + ".";
  }), C(3 === c2.rank || 1 === c2.rank, function() {
    return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + c2.rank + ".";
  }), C(3 === l2.rank || 1 === l2.rank, function() {
    return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l2.rank + ".";
  }), null != i2 && C(3 === i2.rank || 1 === i2.rank, function() {
    return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + i2.rank + ".";
  }), null != s2 && C(3 === s2.rank || 1 === s2.rank, function() {
    return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + s2.rank + ".";
  }), Uu(u2, c2, l2, s2, i2, a2);
}
function Wu(t2, e2, n2, r2, o2, a2) {
  var i2, s2, u2 = mn(t2, "x", "batchNorm"), c2 = mn(e2, "mean", "batchNorm"), l2 = mn(n2, "variance", "batchNorm");
  return null != o2 && (i2 = mn(o2, "scale", "batchNorm")), null != r2 && (s2 = mn(r2, "offset", "batchNorm")), C(4 === u2.rank, function() {
    return "Error in batchNorm4D: x must be rank 4 but got rank " + u2.rank + ".";
  }), C(4 === c2.rank || 1 === c2.rank, function() {
    return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + c2.rank + ".";
  }), C(4 === l2.rank || 1 === l2.rank, function() {
    return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l2.rank + ".";
  }), null != i2 && C(4 === i2.rank || 1 === i2.rank, function() {
    return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + i2.rank + ".";
  }), null != s2 && C(4 === s2.rank || 1 === s2.rank, function() {
    return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + s2.rank + ".";
  }), Uu(u2, c2, l2, s2, i2, a2);
}
function Uu(t2, e2, n2, r2, o2, a2) {
  null == a2 && (a2 = 1e-3);
  var i2, s2, u2, c2 = mn(t2, "x", "batchNorm"), l2 = mn(e2, "mean", "batchNorm"), h2 = mn(n2, "variance", "batchNorm");
  null != o2 && (i2 = mn(o2, "scale", "batchNorm")), null != r2 && (s2 = mn(r2, "offset", "batchNorm")), C(l2.rank === h2.rank, function() {
    return "Batch normalization gradient requires mean and variance to have equal ranks.";
  }), C(null == s2 || l2.rank === s2.rank, function() {
    return "Batch normalization gradient requires mean and offset to have equal ranks.";
  }), C(null == i2 || l2.rank === i2.rank, function() {
    return "Batch normalization gradient requires mean and scale to have equal ranks.";
  }), u2 = 0 === c2.rank || 1 === c2.rank ? c2.as4D(1, 1, 1, c2.size) : 2 === c2.rank ? c2.as4D(1, 1, c2.shape[0], c2.shape[1]) : 3 === c2.rank ? c2.as4D(1, c2.shape[0], c2.shape[1], c2.shape[2]) : c2;
  var f2 = [c2, l2, h2, i2];
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.batchNormalization(u2, Vu(l2), Vu(h2), a2, Vu(i2), Vu(s2));
    return e3([c2, l2, h2, i2]), n3;
  }, { x: c2, mean: l2, variance: h2, scale: i2, offset: s2 }, function(t3, e3) {
    var n3 = e3, r3 = n3[0], o3 = n3[1], i3 = n3[2], s3 = n3[3], c3 = null == s3 ? On(1) : s3, l3 = Eo(o3.shape, u2.shape), h3 = [];
    if (1 === o3.rank) {
      for (var f3 = 0; f3 < u2.shape.length - 1; ++f3)
        h3.push(u2.shape[f3]);
      h3.push(1);
    }
    var d2 = r3.sub(o3), p2 = t3.mul(c3), v2 = Ru(i3.add(On(a2))), m2 = v2.mul(v2).mul(v2).mul(On(-0.5));
    return { x: function() {
      return 1 === o3.rank ? t3.mul(Lr(v2.as4D(1, 1, 1, o3.shape[0]), h3)).mul(c3).reshape(r3.shape) : t3.mul(v2).mul(c3).reshape(r3.shape);
    }, mean: function() {
      var t4 = v2.mul(On(-1)).mul(p2);
      return 1 === o3.rank && (t4 = t4.sum(l3)), t4.reshape(o3.shape);
    }, variance: function() {
      var t4 = m2.mul(d2).mul(p2);
      return 1 === o3.rank && (t4 = t4.sum(l3)), t4.reshape(o3.shape);
    }, scale: function() {
      var e4 = d2.mul(v2), n4 = t3.mul(e4);
      return 1 === o3.rank && (n4 = n4.sum(l3)), n4.reshape(o3.shape);
    }, offset: function() {
      var e4 = t3;
      return 1 === o3.rank && (e4 = e4.sum(l3)), e4.reshape(o3.shape);
    } };
  }, "BatchNormalization", { varianceEpsilon: a2 }, f2).reshape(c2.shape);
}
function Vu(t2) {
  return null == t2 ? null : 0 === t2.rank ? t2.as1D() : 1 === t2.rank ? t2 : 2 === t2.rank ? t2.as4D(1, 1, t2.shape[0], t2.shape[1]) : 3 === t2.rank ? t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]) : t2;
}
function zu() {
  Xe("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon");
}
var Gu = An({ batchNormalization2d_: function(t2, e2, n2, r2, o2, a2) {
  return void 0 === r2 && (r2 = 1e-3), zu(), Pu(t2, e2, n2, a2, o2, r2);
} });
var Hu = An({ batchNormalization3d_: function(t2, e2, n2, r2, o2, a2) {
  return void 0 === r2 && (r2 = 1e-3), zu(), Lu(t2, e2, n2, a2, o2, r2);
} });
var qu = An({ batchNormalization4d_: function(t2, e2, n2, r2, o2, a2) {
  return void 0 === r2 && (r2 = 1e-3), zu(), Wu(t2, e2, n2, a2, o2, r2);
} });
var Ku = An({ batchNormalization_: function(t2, e2, n2, r2, o2, a2) {
  return void 0 === r2 && (r2 = 1e-3), zu(), Uu(t2, e2, n2, a2, o2, r2);
} });
var ju = An({ batchNorm_: Uu });
var Xu = An({ batchNorm2d_: Pu });
var Yu = An({ batchNorm3d_: Lu });
var $u = An({ batchNorm4d_: Wu });
var Qu = An({ logicalAnd_: function(t2, e2) {
  var n2 = mn(t2, "a", "logicalAnd", "bool"), r2 = mn(e2, "b", "logicalAnd", "bool");
  return Ro(n2.shape, r2.shape), Lt.runKernelFunc(function(t3) {
    return t3.logicalAnd(n2, r2);
  }, { a: n2, b: r2 }, null, "LogicalAnd");
} });
var Ju = An({ logicalNot_: function(t2) {
  var e2 = mn(t2, "x", "logicalNot", "bool");
  return Lt.runKernelFunc(function(t3) {
    return t3.logicalNot(e2);
  }, { $x: e2 });
} });
var Zu = An({ logicalOr_: function(t2, e2) {
  var n2 = mn(t2, "a", "logicalOr", "bool"), r2 = mn(e2, "b", "logicalOr", "bool");
  return Ro(n2.shape, r2.shape), Lt.runKernelFunc(function(t3) {
    return t3.logicalOr(n2, r2);
  }, { $a: n2, $b: r2 });
} });
var tc = An({ logicalXor_: function(t2, e2) {
  var n2 = mn(t2, "a", "logicalXor", "bool"), r2 = mn(e2, "b", "logicalXor", "bool");
  return Ro(n2.shape, r2.shape), Zu(t2, e2).logicalAnd(Qu(t2, e2).logicalNot());
} });
var ec = An({ where_: function(t2, e2, n2) {
  var r2 = mn(e2, "a", "where"), o2 = mn(n2, "b", "where"), a2 = mn(t2, "condition", "where", "bool");
  return E(r2.shape, o2.shape, "Error in where: "), 1 === a2.rank ? C(a2.shape[0] === r2.shape[0], function() {
    return "The first dimension of `a` must match the size of `condition`.";
  }) : E(a2.shape, o2.shape, "Error in where: "), Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.select(a2, r2, o2);
    return e3([a2]), n3;
  }, { $condition: a2, $a: r2, $b: o2 }, function(t3, e3) {
    var n3 = e3[0];
    return { $condition: function() {
      return Xn(n3).toFloat();
    }, $a: function() {
      return t3.mul(n3.cast(t3.dtype));
    }, $b: function() {
      return t3.mul(n3.logicalNot().cast(t3.dtype));
    } };
  });
} });
var nc = function(t2) {
  return n(this, void 0, void 0, function() {
    var e2, n2, o2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          return [4, (e2 = mn(t2, "condition", "whereAsync", "bool")).data()];
        case 1:
          return n2 = r2.sent(), o2 = na(e2.shape, n2), t2 !== e2 && e2.dispose(), [2, o2];
      }
    });
  });
};
var rc = An({ add_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "add"), o2 = mn(e2, "b", "add");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
  var a2 = Ro(r2.shape, o2.shape);
  return Lt.runKernelFunc(function(t3) {
    return t3.add(r2, o2);
  }, { a: r2, b: o2 }, function(t3) {
    return { a: function() {
      var e3 = t3, n3 = Eo(r2.shape, a2);
      return n3.length > 0 && (e3 = e3.sum(n3)), e3.reshape(r2.shape);
    }, b: function() {
      var e3 = t3, n3 = Eo(o2.shape, a2);
      return n3.length > 0 && (e3 = e3.sum(n3)), e3.reshape(o2.shape);
    } };
  }, "Add");
} });
var oc = An({ addN_: function(t2) {
  C(Array.isArray(t2), function() {
    return "The argument passed to tf.addN() must be a list of tensors";
  }), C(t2.length >= 1, function() {
    return "Must pass at least one tensor to tf.addN(), but got " + t2.length;
  });
  var e2 = t2.map(function(t3, e3) {
    return mn(t3, "tensors" + e3, "addN");
  }), n2 = e2[0];
  e2.forEach(function(t3) {
    if (t3.dtype !== n2.dtype)
      throw new Error("All tensors passed to tf.addN() must have the same dtype");
  }), e2.forEach(function(t3) {
    if (!S(t3.shape, n2.shape))
      throw new Error("All tensors passed to tf.addN() must have the same shape");
  });
  var r2 = e2;
  return Lt.runKernelFunc(function(t3) {
    return t3.addN(e2);
  }, r2, function(t3) {
    var n3 = {};
    return e2.forEach(function(e3, r3) {
      n3[r3] = function() {
        return t3.clone();
      };
    }), n3;
  }, "AddN");
} });
var ac = An({ addStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "addStrict"), r2 = mn(e2, "b", "addStrict");
  return E(n2.shape, r2.shape, "Error in addStrict: "), n2.add(r2);
} });
var ic = An({ atan2_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "atan2"), o2 = mn(e2, "b", "atan2");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
  var a2 = Ro(r2.shape, o2.shape);
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.atan2(r2, o2);
    return e3([r2, o2]), n3;
  }, { $a: r2, $b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { $a: function() {
      var e4 = rc(n3.square(), r3.square()), o3 = t3.mul(r3.div(e4)), i2 = Eo(n3.shape, a2);
      return i2.length > 0 && (o3 = o3.sum(i2)), o3.reshape(n3.shape);
    }, $b: function() {
      var e4 = rc(n3.square(), r3.square()), o3 = wu(t3.mul(n3.div(e4))), i2 = Eo(r3.shape, a2);
      return i2.length > 0 && (o3 = o3.sum(i2)), o3.reshape(r3.shape);
    } };
  });
} });
var sc = An({ div_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "div"), o2 = mn(e2, "b", "div");
  if (n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], "int32" === r2.dtype && "int32" === o2.dtype)
    return lc(r2, o2);
  var a2 = Ro(r2.shape, o2.shape);
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.realDivide(r2, o2);
    return e3([r2, o2]), n3;
  }, { a: r2, b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { a: function() {
      var e4 = t3.div(r3.toFloat()), o3 = Eo(n3.shape, a2);
      return o3.length > 0 ? e4.sum(o3).reshape(n3.shape) : e4;
    }, b: function() {
      var e4 = t3.mul(n3.toFloat()), o3 = Eo(r3.shape, a2);
      o3.length > 0 && (e4 = e4.sum(o3).reshape(r3.shape));
      var i2 = r3.square();
      return e4.div(i2.toFloat()).neg();
    } };
  }, "Div");
} });
var uc = An({ divNoNan_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "div"), o2 = mn(e2, "b", "div");
  r2 = (n2 = Nt(r2, o2))[0], o2 = n2[1];
  var a2 = sc(r2, o2), i2 = Xn(a2), s2 = o2.equal(i2);
  return ec(s2, i2, a2);
} });
var cc = An({ divStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "div"), r2 = mn(e2, "b", "div");
  return E(n2.shape, r2.shape, "Error in divideStrict: "), n2.div(r2);
} });
var lc = An({ floorDiv_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "floorDiv"), o2 = mn(e2, "b", "floorDiv");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
  var a2 = Ro(r2.shape, o2.shape);
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.floorDiv(r2, o2);
    return e3([r2, o2]), n3;
  }, { a: r2, b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { a: function() {
      var e4 = t3.div(r3.toFloat()), o3 = Eo(n3.shape, a2);
      return o3.length > 0 ? e4.sum(o3).reshape(n3.shape) : e4;
    }, b: function() {
      var e4 = t3.mul(n3.toFloat()), o3 = Eo(r3.shape, a2);
      o3.length > 0 && (e4 = e4.sum(o3).reshape(r3.shape));
      var i2 = r3.square();
      return e4.div(i2.toFloat()).neg();
    } };
  }, "FloorDiv");
} });
var hc = An({ maximum_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "maximum"), o2 = mn(e2, "b", "maximum");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], "bool" === r2.dtype && (r2 = r2.toInt(), o2 = o2.toInt()), Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.maximum(r2, o2);
    return e3([r2, o2]), n3;
  }, { a: r2, b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { a: function() {
      return t3.mul(n3.greaterEqual(r3).toFloat());
    }, b: function() {
      return t3.mul(n3.less(r3).toFloat());
    } };
  }, "Maximum");
} });
var fc = An({ maximumStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "maximumStrict"), r2 = mn(e2, "b", "maximumStrict");
  return E(n2.shape, r2.shape, "Error in maximumStrict: "), n2.maximum(r2);
} });
var dc = An({ minimum_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "minimum"), o2 = mn(e2, "b", "minimum");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], "bool" === r2.dtype && (r2 = r2.toInt(), o2 = o2.toInt()), Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.minimum(r2, o2);
    return e3([r2, o2]), n3;
  }, { a: r2, b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { a: function() {
      return t3.mul(n3.lessEqual(r3).toFloat());
    }, b: function() {
      return t3.mul(n3.greater(r3).toFloat());
    } };
  }, "Minimum");
} });
var pc = An({ minimumStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "minimumStrict"), r2 = mn(e2, "b", "minimumStrict");
  return E(n2.shape, r2.shape, "Error in minimumStrict: "), n2.minimum(r2);
} });
var vc = An({ mod_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "mod"), o2 = mn(e2, "b", "mod");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
  var a2 = Ro(r2.shape, o2.shape);
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.mod(r2, o2);
    return e3([r2, o2]), n3;
  }, { $a: r2, $b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { $a: function() {
      var e4 = Eo(n3.shape, a2);
      return e4.length > 0 ? t3.sum(e4).reshape(n3.shape) : t3;
    }, $b: function() {
      var e4 = t3.mul(n3.div(r3).floor().neg()), o3 = Eo(r3.shape, a2);
      return o3.length > 0 ? e4.sum(o3).reshape(r3.shape) : e4;
    } };
  });
} });
var mc = An({ modStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "modStrict"), r2 = mn(e2, "b", "modStrict");
  return E(n2.shape, r2.shape, "Error in modStrict: "), n2.mod(r2);
} });
var gc = An({ mul_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "mul"), o2 = mn(e2, "b", "mul");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
  var a2 = Ro(r2.shape, o2.shape);
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.multiply(r2, o2);
    return e3([r2, o2]), n3;
  }, { a: r2, b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { a: function() {
      var e4 = t3.mul(r3.toFloat()), o3 = Eo(n3.shape, a2);
      return o3.length > 0 ? e4.sum(o3).reshape(n3.shape) : e4;
    }, b: function() {
      var e4 = t3.mul(n3.toFloat()), o3 = Eo(r3.shape, a2);
      return o3.length > 0 ? e4.sum(o3).reshape(r3.shape) : e4;
    } };
  }, "Mul");
} });
var yc = An({ mulStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "mul"), r2 = mn(e2, "b", "mul");
  return E(n2.shape, r2.shape, "Error in multiplyStrict: "), n2.mul(r2);
} });
var xc = An({ pow_: function(t2, e2) {
  var n2, r2 = mn(t2, "base", "pow"), o2 = mn(e2, "exp", "pow");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
  var a2 = Ro(r2.shape, o2.shape), i2 = [r2, o2];
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.pow(r2, o2);
    return e3([r2, o2, n3]), n3;
  }, { a: r2, b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1], o3 = e3[2];
    return { a: function() {
      var e4 = r3.toFloat(), o4 = t3.mul(e4.mul(n3.pow(e4.sub(On(1))))), i3 = Eo(n3.shape, a2);
      return i3.length > 0 && (o4 = o4.sum(i3)), o4.reshape(n3.shape);
    }, b: function() {
      var e4 = n3.greater(0), i3 = n3.log().where(e4, Xn(n3)), s2 = t3.mul(o3.mul(i3)), u2 = Eo(r3.shape, a2);
      return u2.length > 0 && (s2 = s2.sum(u2)), s2.reshape(r3.shape);
    } };
  }, "Pow", {}, i2, [true]);
} });
var bc = An({ powStrict_: function(t2, e2) {
  return E(t2.shape, e2.shape, "Error in powStrict: "), t2.pow(e2);
} });
var wc = An({ squaredDifferenceStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "squaredDifferenceStrict"), r2 = mn(e2, "b", "squaredDifferenceStrict");
  return E(n2.shape, r2.shape, "Error in squaredDifferenceStrict: "), n2.squaredDifference(r2);
} });
var Cc = An({ sub_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "sub"), o2 = mn(e2, "b", "sub");
  n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1];
  var a2 = Ro(r2.shape, o2.shape);
  return Lt.runKernelFunc(function(t3) {
    return t3.subtract(r2, o2);
  }, { a: r2, b: o2 }, function(t3) {
    return { a: function() {
      var e3 = t3, n3 = Eo(r2.shape, a2);
      return n3.length > 0 && (e3 = e3.sum(n3)), e3.reshape(r2.shape);
    }, b: function() {
      var e3 = t3, n3 = Eo(o2.shape, a2);
      return n3.length > 0 && (e3 = e3.sum(n3)), e3.neg().reshape(o2.shape);
    } };
  }, "Sub");
} });
var Ec = An({ subStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "subStrict"), r2 = mn(e2, "b", "subStrict");
  return E(n2.shape, r2.shape, "Error in subStrict: "), n2.sub(r2);
} });
var Rc = An({ equal_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "equal"), o2 = mn(e2, "b", "equal");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
    return t3.equal(r2, o2);
  }, { $a: r2, $b: o2 });
} });
var Ic = An({ equalStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "equalStrict"), r2 = mn(e2, "b", "equalStrict");
  return E(n2.shape, r2.shape, "Error in equalStrict: "), n2.equal(r2);
} });
var kc = An({ greater_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "greater"), o2 = mn(e2, "b", "greater");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
    return t3.greater(r2, o2);
  }, { a: r2, b: o2 }, null, "Greater");
} });
var Sc = An({ greaterEqual_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "greaterEqual"), o2 = mn(e2, "b", "greaterEqual");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.greaterEqual(r2, o2);
    return e3([r2, o2]), n3;
  }, { a: r2, b: o2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1];
    return { a: function() {
      return Xn(n3);
    }, b: function() {
      return Xn(r3);
    } };
  }, "GreaterEqual");
} });
var Ac = An({ greaterEqualStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "greaterEqualStrict"), r2 = mn(e2, "b", "greaterEqualStrict");
  return E(n2.shape, r2.shape, "Error in greaterEqualStrict: "), n2.greaterEqual(r2);
} });
var Dc = An({ greaterStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "greaterStrict"), r2 = mn(e2, "b", "greaterStrict");
  return E(n2.shape, r2.shape, "Error in greaterStrict: "), n2.greater(r2);
} });
var Tc = An({ less_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "less"), o2 = mn(e2, "b", "less");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
    return t3.less(r2, o2);
  }, { a: r2, b: o2 }, null, "Less");
} });
var Nc = An({ lessEqual_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "lessEqual"), o2 = mn(e2, "b", "lessEqual");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.lessEqual(r2, o2);
    return e3([r2, o2]), n3;
  }, { a: r2, b: o2 }, null, "LessEqual");
} });
var Fc = An({ lessEqualStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "lessEqualStrict"), r2 = mn(e2, "b", "lessEqualStrict");
  return E(n2.shape, r2.shape, "Error in lessEqualStrict: "), n2.lessEqual(r2);
} });
var _c = An({ lessStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "lessStrict"), r2 = mn(e2, "b", "lessStrict");
  return E(n2.shape, r2.shape, "Error in lessStrict: "), n2.less(r2);
} });
var Oc = An({ notEqual_: function(t2, e2) {
  var n2, r2 = mn(t2, "a", "notEqual"), o2 = mn(e2, "b", "notEqual");
  return n2 = Nt(r2, o2), r2 = n2[0], o2 = n2[1], Ro(r2.shape, o2.shape), Lt.runKernelFunc(function(t3) {
    return t3.notEqual(r2, o2);
  }, { a: r2, b: o2 }, null, "NotEqual");
} });
var Mc = An({ notEqualStrict_: function(t2, e2) {
  var n2 = mn(t2, "a", "notEqualStrict"), r2 = mn(e2, "b", "notEqualStrict");
  return E(n2.shape, r2.shape, "Error in notEqualStrict: "), n2.notEqual(r2);
} });
function Bc(t2, e2) {
  for (var n2 = [], r2 = t2; r2 < e2; ++r2)
    n2.push(r2);
  return n2;
}
function Pc(t2) {
  for (var e2 = [], n2 = 0; n2 < t2.length; ++n2)
    for (var r2 = 0; r2 < t2[n2].length; ++r2)
      e2.push(t2[n2][r2]);
  return e2;
}
var Lc = An({ gather_: function(t2, e2, n2) {
  void 0 === n2 && (n2 = 0);
  var r2 = mn(t2, "x", "gather"), o2 = mn(e2, "indices", "gather", "int32");
  n2 = O(n2, r2.shape)[0];
  var a2 = function(t3, e3, n3) {
    for (var r3 = t3.shape[n3], o3 = [], a3 = 1, i2 = 1, s2 = 0; s2 < n3; s2++)
      o3.push(t3.shape[s2]), a3 *= t3.shape[s2];
    for (s2 = 0; s2 < e3.rank; s2++)
      o3.push(e3.shape[s2]);
    for (s2 = n3 + 1; s2 < t3.rank; s2++)
      o3.push(t3.shape[s2]), i2 *= t3.shape[s2];
    return { batchSize: a3, sliceSize: i2, dimSize: r3, outputShape: o3 };
  }(r2, o2, n2);
  return Lt.runKernelFunc(function(t3, e3) {
    var a3 = t3.gather(r2, o2.flatten(), n2);
    return e3([o2]), a3;
  }, { x: r2, indices: o2 }, function(t3, e3) {
    var o3 = e3[0];
    return { x: function() {
      var e4 = r2.shape, a3 = o3.size, i2 = e4.slice(0, n2), s2 = i2.length, u2 = e4.slice(n2, e4.length).slice(1), c2 = u2.length, l2 = Bc(0, s2), h2 = Bc(s2 + 1, s2 + 1 + c2), f2 = Pc([i2, [a3], u2]), d2 = t3.reshape(f2), p2 = o3.reshape([a3]), v2 = Pc([[s2], l2, h2]), m2 = d2.transpose(v2), g2 = Wc(m2, p2, r2.shape[n2]), y2 = Rn(v2);
      return g2 = g2.transpose(y2);
    }, indices: function() {
      return o3;
    } };
  }, "Gather", { axis: n2 }).reshape(a2.outputShape);
} });
var Wc = An({ unsortedSegmentSum_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "unsortedSegmentSum"), o2 = mn(e2, "segmentIds", "unsortedSegmentSum", "int32");
  return C(A(n2), function() {
    return "numSegments must be of dtype int";
  }), Lt.runKernelFunc(function(t3, e3) {
    var a2 = t3.unsortedSegmentSum(r2, o2, n2);
    return e3([o2]), a2;
  }, { $x: r2 }, function(t3, e3) {
    var n3 = e3[0];
    return { $x: function() {
      return function(t4, e4) {
        for (var n4 = hc(e4, Xn(e4)), r3 = Lc(t4, n4), o3 = Sc(e4, On(0, "int32")), a2 = r3.rank - o3.rank, i2 = 0; i2 < a2; ++i2)
          o3 = wr(o3, i2 + 1);
        o3 = Qu(o3, zn(r3.shape, "bool"));
        var s2 = Xn(r3);
        return ec(o3, r3, s2);
      }(t3, n3);
    } };
  });
} });
var Uc = function(t2, e2, o2) {
  return n(this, void 0, void 0, function() {
    var n2, a2, i2, s2, u2, c2, l2, h2, f2, d2, p2, v2, m2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          for (n2 = mn(t2, "tensor", "boolMask"), a2 = mn(e2, "mask", "boolMask", "bool"), i2 = null == o2 ? 0 : o2, s2 = a2.rank, u2 = n2.shape, C(s2 > 0, function() {
            return "mask cannot be scalar";
          }), E(u2.slice(i2, i2 + s2), a2.shape, "mask's shape must match the first K dimensions of tensor's shape,"), c2 = 1, l2 = i2; l2 < i2 + s2; l2++)
            c2 *= u2[l2];
          return h2 = u2.slice(0, i2).concat([c2], u2.slice(i2 + s2)), f2 = n2.reshape(h2), d2 = a2.reshape([-1]), [4, nc(d2)];
        case 1:
          return p2 = r2.sent(), v2 = p2.squeeze([1]), m2 = Lc(f2, v2, i2), t2 !== n2 && n2.dispose(), e2 !== a2 && a2.dispose(), v2.dispose(), f2.dispose(), d2.dispose(), p2.dispose(), [2, m2];
      }
    });
  });
};
function Vc(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === a2 && (a2 = "NHWC"), C(t2.length === e2.rank, function() {
    return "Length of inShape (" + t2.length + ") and rank of dy (" + e2.rank + ") must match";
  });
  var s2 = t2, u2 = e2, c2 = false;
  3 === e2.rank && (c2 = true, u2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2]), s2 = [1, t2[0], t2[1], t2[2]]), C(4 === s2.length, function() {
    return "Error in conv2dDerInput: inShape must be length 4, but got length " + s2.length + ".";
  }), C(4 === u2.rank, function() {
    return "Error in conv2dDerInput: dy must be rank 4, but got rank " + u2.rank;
  }), C(4 === n2.rank, function() {
    return "Error in conv2dDerInput: filter must be rank 4, but got rank " + n2.rank;
  });
  var l2 = "NHWC" === a2 ? s2[3] : s2[1], h2 = "NHWC" === a2 ? u2.shape[3] : u2.shape[1];
  C(l2 === n2.shape[2], function() {
    return "Error in conv2dDerInput: depth of input (" + l2 + ") must match input depth for filter " + n2.shape[2] + ".";
  }), C(h2 === n2.shape[3], function() {
    return "Error in conv2dDerInput: depth of output (" + h2 + ") must match output depth for filter " + n2.shape[3] + ".";
  }), null != i2 && C(A(o2), function() {
    return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + o2 + ".";
  });
  var f2 = Bo(a2), d2 = So(s2, n2.shape, r2, 1, o2, i2, false, f2), p2 = Lt.runKernelFunc(function(t3, e3) {
    var r3 = t3.conv2dDerInput(u2, n2, d2);
    return e3([n2, u2]), r3;
  }, { dy4D: u2, filter: n2 }, function(t3, e3) {
    var n3 = e3[0], s3 = e3[1];
    return { dy4D: function() {
      return qc(t3, n3, r2, o2, a2, 1, i2);
    }, filter: function() {
      return jc(t3, s3, n3.shape, r2, o2, a2, i2);
    } };
  });
  return c2 ? p2.as3D(p2.shape[1], p2.shape[2], p2.shape[3]) : p2;
}
function zc(t2) {
  var e2 = function(t3) {
    return "number" == typeof t3 ? [t3, t3, t3] : 2 === t3.length ? [t3[0], t3[1], 1] : t3;
  }(t2), n2 = e2[0], r2 = e2[1], o2 = e2[2];
  return 1 === n2 && 1 === r2 && 1 === o2;
}
function Gc(t2, e2, n2, r2, o2) {
  C(t2.length === e2.rank, function() {
    return "Length of inShape (" + t2.length + ") and rank of dy (" + e2.rank + ") must match";
  });
  var a2 = t2, i2 = e2, s2 = false;
  4 === e2.rank && (s2 = true, i2 = e2.as5D(1, e2.shape[0], e2.shape[1], e2.shape[2], e2.shape[3]), a2 = [1, t2[0], t2[1], t2[2], t2[3]]);
  var u2 = a2[4], c2 = i2.shape[4];
  C(5 === a2.length, function() {
    return "Error in conv3dDerInput: inShape must be length 5, but got length " + a2.length + ".";
  }), C(5 === i2.rank, function() {
    return "Error in conv3dDerInput: dy must be rank 5, but got rank " + i2.rank;
  }), C(5 === n2.rank, function() {
    return "Error in conv3dDerInput: filter must be rank 5, but got rank " + n2.rank;
  }), C(u2 === n2.shape[3], function() {
    return "Error in conv3dDerInput: depth of input (" + u2 + ") must match input depth for filter " + n2.shape[3] + ".";
  }), C(c2 === n2.shape[4], function() {
    return "Error in conv3dDerInput: depth of output (" + c2 + ") must match output depth for filter " + n2.shape[4] + ".";
  });
  var l2 = Ao(a2, n2.shape, r2, 1, o2), h2 = Lt.runKernelFunc(function(t3) {
    return t3.conv3dDerInput(i2, n2, l2);
  }, { dy5D: i2 });
  return s2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
}
var Hc = An({ conv1d_: function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === o2 && (o2 = "NWC"), void 0 === a2 && (a2 = 1);
  var s2 = mn(t2, "x", "conv1d"), u2 = mn(e2, "filter", "conv1d"), c2 = s2, l2 = false;
  2 === s2.rank && (l2 = true, c2 = s2.as3D(1, s2.shape[0], s2.shape[1])), C(3 === c2.rank, function() {
    return "Error in conv1d: input must be rank 3, but got rank " + c2.rank + ".";
  }), C(3 === u2.rank, function() {
    return "Error in conv1d: filter must be rank 3, but got rank " + u2.rank + ".";
  }), null != i2 && C(A(r2), function() {
    return "Error in conv1d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + r2 + ".";
  }), C(c2.shape[2] === u2.shape[1], function() {
    return "Error in conv1d: depth of input (" + c2.shape[2] + ") must match input depth for filter " + u2.shape[1] + ".";
  }), C(Mo(n2, a2), function() {
    return "Error in conv1D: Either stride or dilation must be 1. Got stride " + n2 + " and dilation '" + a2 + "'";
  }), C("NWC" === o2, function() {
    return "Error in conv1d: got dataFormat of " + o2 + " but only NWC is currently supported.";
  });
  var h2 = u2.as4D(1, u2.shape[0], u2.shape[1], u2.shape[2]), f2 = c2.as4D(c2.shape[0], 1, c2.shape[1], c2.shape[2]), d2 = qc(f2, h2, [1, n2], r2, "NHWC", [1, a2], i2);
  return l2 ? d2.as2D(d2.shape[2], d2.shape[3]) : d2.as3D(d2.shape[0], d2.shape[2], d2.shape[3]);
} });
var qc = An({ conv2d_: function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === o2 && (o2 = "NHWC"), void 0 === a2 && (a2 = [1, 1]);
  var s2 = mn(t2, "x", "conv2d"), u2 = mn(e2, "filter", "conv2d"), c2 = s2, l2 = false;
  3 === s2.rank && (l2 = true, c2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), C(4 === c2.rank, function() {
    return "Error in conv2d: input must be rank 4, but got rank " + c2.rank + ".";
  }), C(4 === u2.rank, function() {
    return "Error in conv2d: filter must be rank 4, but got rank " + u2.rank + ".";
  }), null != i2 && C(A(r2), function() {
    return "Error in conv2d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + r2 + ".";
  });
  var h2 = "NHWC" === o2 ? c2.shape[3] : c2.shape[1];
  C(h2 === u2.shape[2], function() {
    return "Error in conv2d: depth of input (" + h2 + ") must match input depth for filter " + u2.shape[2] + ".";
  }), C(Mo(n2, a2), function() {
    return "Error in conv2D: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + a2 + "'";
  });
  var f2 = Bo(o2), d2 = So(c2.shape, u2.shape, n2, a2, r2, i2, false, f2), p2 = [u2, c2], v2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.conv2d(c2, u2, d2);
    return e3([u2, c2]), n3;
  }, { x: c2, filter: u2 }, function(t3, e3) {
    var i3 = e3, s3 = i3[0], u3 = i3[1];
    return C(Oo(a2), function() {
      return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a2 + "'";
    }), { x: function() {
      return Xc(u3.shape, t3, s3, n2, r2, o2);
    }, filter: function() {
      return jc(u3, t3, s3.shape, n2, r2, o2);
    } };
  }, "Conv2D", d2, p2);
  return l2 ? v2.as3D(v2.shape[1], v2.shape[2], v2.shape[3]) : v2;
} });
var Kc = An({ conv3d_: function(t2, e2, n2, r2, o2, a2) {
  void 0 === o2 && (o2 = "NDHWC"), void 0 === a2 && (a2 = [1, 1, 1]);
  var i2 = mn(t2, "x", "conv3d"), s2 = mn(e2, "filter", "conv3d"), u2 = i2, c2 = false;
  4 === i2.rank && (c2 = true, u2 = i2.as5D(1, i2.shape[0], i2.shape[1], i2.shape[2], i2.shape[3])), C(5 === u2.rank, function() {
    return "Error in conv3d: input must be rank 5, but got rank " + u2.rank + ".";
  }), C(5 === s2.rank, function() {
    return "Error in conv3d: filter must be rank 5, but got rank " + s2.rank + ".";
  }), C(u2.shape[4] === s2.shape[3], function() {
    return "Error in conv3d: depth of input (" + u2.shape[4] + ") must match input depth for filter " + s2.shape[3] + ".";
  }), C(function(t3, e3) {
    return zc(t3) || zc(e3);
  }(n2, a2), function() {
    return "Error in conv3D: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + a2 + "'";
  }), C("NDHWC" === o2, function() {
    return "Error in conv3d: got dataFormat of " + o2 + " but only NDHWC is currently supported.";
  });
  var l2 = Ao(u2.shape, s2.shape, n2, a2, r2), h2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.conv3d(u2, s2, l2);
    return e3([u2, s2]), n3;
  }, { x: u2, $filter: s2 }, function(t3, e3) {
    C(zc(a2), function() {
      return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a2 + "'";
    });
    var o3 = e3[0], i3 = e3[1];
    return { x: function() {
      return Gc(o3.shape, t3, i3, n2, r2);
    }, $filter: function() {
      return function(t4, e4, n3, r3, o4) {
        var a3 = t4;
        4 === t4.rank && (a3 = t4.as5D(1, t4.shape[0], t4.shape[1], t4.shape[2], t4.shape[3]));
        var i4 = e4;
        4 === i4.rank && (i4 = e4.as5D(1, e4.shape[0], e4.shape[1], e4.shape[2], e4.shape[3]));
        C(5 === a3.rank, function() {
          return "Error in conv3dDerFilter: input must be rank 5, but got shape " + a3.shape + ".";
        }), C(5 === i4.rank, function() {
          return "Error in conv3dDerFilter: dy must be rank 5, but got shape " + i4.shape + ".";
        }), C(5 === n3.length, function() {
          return "Error in conv3dDerFilter: filterShape must be length 5, but got " + n3 + ".";
        }), C(a3.shape[4] === n3[3], function() {
          return "Error in conv3dDerFilter: depth of input " + a3.shape[4] + ") must match input depth in filter (" + n3[3] + ".";
        }), C(i4.shape[4] === n3[4], function() {
          return "Error in conv3dDerFilter: depth of dy (" + i4.shape[4] + ") must match output depth for filter (" + n3[4] + ").";
        });
        var s3 = Ao(a3.shape, n3, r3, 1, o4);
        return Lt.runKernelFunc(function(t5) {
          return t5.conv3dDerFilter(a3, i4, s3);
        }, { x5D: a3, dy5D: i4 });
      }(o3, t3, i3.shape, n2, r2);
    } };
  });
  return c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
} });
var jc = An({ conv2dDerFilter_: function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === a2 && (a2 = "NHWC");
  var s2 = t2;
  3 === t2.rank && (s2 = t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]));
  var u2 = e2;
  3 === u2.rank && (u2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2])), C(4 === s2.rank, function() {
    return "Error in conv2dDerFilter: input must be rank 4, but got shape " + s2.shape + ".";
  }), C(4 === u2.rank, function() {
    return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + u2.shape + ".";
  }), C(4 === n2.length, function() {
    return "Error in conv2dDerFilter: filterShape must be length 4, but got " + n2 + ".";
  });
  var c2 = "NHWC" === a2 ? s2.shape[3] : s2.shape[1], l2 = "NHWC" === a2 ? u2.shape[3] : u2.shape[1];
  C(c2 === n2[2], function() {
    return "Error in conv2dDerFilter: depth of input " + c2 + ") must match input depth in filter (" + n2[2] + ".";
  }), C(l2 === n2[3], function() {
    return "Error in conv2dDerFilter: depth of dy (" + l2 + ") must match output depth for filter (" + n2[3] + ").";
  }), null != i2 && C(A(o2), function() {
    return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + o2 + ".";
  });
  var h2 = Bo(a2), f2 = So(s2.shape, n2, r2, 1, o2, i2, false, h2);
  return Lt.runKernelFunc(function(t3) {
    return t3.conv2dDerFilter(s2, u2, f2);
  }, { x4D: s2, dy4D: u2 });
} });
var Xc = An({ conv2dDerInput_: Vc });
var Yc = An({ depthwiseConv2d_: function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === o2 && (o2 = "NHWC"), void 0 === a2 && (a2 = [1, 1]);
  var s2 = mn(t2, "x", "depthwiseConv2d"), u2 = mn(e2, "filter", "depthwiseConv2d"), c2 = s2, l2 = false;
  3 === s2.rank && (l2 = true, c2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), C(4 === c2.rank, function() {
    return "Error in depthwiseConv2d: input must be rank 4, but got rank " + c2.rank + ".";
  }), C(4 === u2.rank, function() {
    return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u2.rank + ".";
  }), C(c2.shape[3] === u2.shape[2], function() {
    return "Error in depthwiseConv2d: number of input channels (" + c2.shape[3] + ") must match the inChannels dimension in filter " + u2.shape[2] + ".";
  }), null == a2 && (a2 = [1, 1]), C(Mo(n2, a2), function() {
    return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + a2 + "'";
  }), null != i2 && C(A(r2), function() {
    return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + i2 + " but got pad " + r2 + ".";
  });
  var h2 = So(c2.shape, u2.shape, n2, a2, r2, i2, true), f2 = [c2, u2], d2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.depthwiseConv2D(c2, u2, h2);
    return e3([c2, u2]), n3;
  }, { x: c2, filter: u2 }, function(t3, e3) {
    C(Oo(a2), function() {
      return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + a2 + "'";
    });
    var n3 = e3[0], r3 = e3[1];
    return { x: function() {
      return $c(n3.shape, t3, r3, h2);
    }, filter: function() {
      return Qc(n3, t3, r3.shape, h2);
    } };
  }, "DepthwiseConv2dNative", h2, f2);
  return l2 ? d2.as3D(d2.shape[1], d2.shape[2], d2.shape[3]) : d2;
} });
var $c = An({ depthwiseConv2dDerInput_: function(t2, e2, n2, r2) {
  var o2 = e2, a2 = false;
  3 === e2.rank && (a2 = true, o2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2]));
  var i2 = Lt.runKernelFunc(function(t3) {
    return t3.depthwiseConv2DDerInput(o2, n2, r2);
  }, { dy4D: o2 });
  return a2 ? i2.as3D(i2.shape[1], i2.shape[2], i2.shape[3]) : i2;
} });
var Qc = An({ depthwiseConv2dDerFilter_: function(t2, e2, n2, r2) {
  var o2 = t2;
  3 === t2.rank && (o2 = t2.as4D(1, t2.shape[0], t2.shape[1], t2.shape[2]));
  var a2 = e2;
  return 3 === a2.rank && (a2 = e2.as4D(1, e2.shape[0], e2.shape[1], e2.shape[2])), Lt.runKernelFunc(function(t3) {
    return t3.depthwiseConv2DDerFilter(o2, a2, r2);
  }, { x4D: o2, dy4D: a2 });
} });
var Jc = An({ separableConv2d_: function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === a2 && (a2 = [1, 1]), void 0 === i2 && (i2 = "NHWC");
  var s2 = mn(t2, "x", "separableConv2d"), u2 = mn(e2, "depthwiseFilter", "separableConv2d"), c2 = mn(n2, "pointwiseFilter", "separableConv2d"), l2 = s2, h2 = false;
  if (3 === s2.rank && (h2 = true, l2 = s2.as4D(1, s2.shape[0], s2.shape[1], s2.shape[2])), "NCHW" === i2)
    throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
  C(4 === l2.rank, function() {
    return "Error in separableConv2d: input must be rank 4, but got rank " + l2.rank + ".";
  }), C(4 === u2.rank, function() {
    return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u2.rank + ".";
  }), C(4 === c2.rank, function() {
    return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u2.rank + ".";
  }), C(1 === c2.shape[0], function() {
    return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c2.shape[0] + ".";
  }), C(1 === c2.shape[1], function() {
    return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + c2.shape[1] + ".";
  });
  var f2 = u2.shape[2], d2 = u2.shape[3];
  C(c2.shape[2] === f2 * d2, function() {
    return "Error in separableConv2d: the third dimension of pointwise filter must be " + f2 * d2 + ", but got " + c2.shape[2] + ".";
  });
  var p2 = Yc(l2, u2, r2, o2, i2, a2), v2 = qc(p2, c2, 1, "valid", i2);
  return h2 ? v2.as3D(v2.shape[1], v2.shape[2], v2.shape[3]) : v2;
} });
var Zc = An({ conv2dTranspose_: function(t2, e2, n2, r2, o2, a2) {
  return Vc(n2, mn(t2, "x", "conv2dTranspose"), mn(e2, "filter", "conv2dTranspose"), r2, o2, "NHWC", a2);
} });
var tl = An({ conv3dTranspose_: function(t2, e2, n2, r2, o2) {
  return Gc(n2, mn(t2, "x", "conv3dTranspose"), mn(e2, "filter", "conv3dTranspose"), r2, o2);
} });
var el = An({ matMul_: function(t2, e2, n2, r2) {
  var o2;
  void 0 === n2 && (n2 = false), void 0 === r2 && (r2 = false);
  var a2 = mn(t2, "a", "matMul"), i2 = mn(e2, "b", "matMul");
  o2 = Nt(a2, i2), a2 = o2[0], i2 = o2[1];
  var s2 = n2 ? a2.shape[a2.rank - 2] : a2.shape[a2.rank - 1], u2 = r2 ? i2.shape[i2.rank - 1] : i2.shape[i2.rank - 2], c2 = n2 ? a2.shape[a2.rank - 1] : a2.shape[a2.rank - 2], l2 = r2 ? i2.shape[i2.rank - 2] : i2.shape[i2.rank - 1], h2 = a2.shape.slice(0, -2), f2 = i2.shape.slice(0, -2), d2 = k(h2), p2 = k(f2);
  C(a2.rank >= 2 && i2.rank >= 2 && a2.rank === i2.rank, function() {
    return "Error in matMul: inputs must have the same rank of at least 2, got ranks " + a2.rank + " and " + i2.rank + ".";
  }), C(S(h2, f2), function() {
    return "Error in matMul: outer dimensions (" + h2 + ") and (" + f2 + ") of Tensors with shapes " + a2.shape + " and " + i2.shape + " must match.";
  }), C(s2 === u2, function() {
    return "Error in matMul: inner shapes (" + s2 + ") and (" + u2 + ") of Tensors with shapes " + a2.shape + " and " + i2.shape + " and transposeA=" + n2 + " and transposeB=" + r2 + " must match.";
  });
  var v2 = a2.shape.slice(0, -2).concat([c2, l2]), m2 = n2 ? a2.as3D(d2, s2, c2) : a2.as3D(d2, c2, s2), g2 = r2 ? i2.as3D(p2, l2, u2) : i2.as3D(p2, u2, l2), y2 = { transposeA: n2, transposeB: r2 };
  return Lt.runKernelFunc(function(t3, e3) {
    var o3 = t3.batchMatMul(m2, g2, n2, r2);
    return e3([m2, g2]), o3;
  }, { a: m2, b: g2 }, function(t3, e3) {
    var o3 = e3, a3 = o3[0], i3 = o3[1];
    return n2 || r2 ? !n2 && r2 ? { a: function() {
      return t3.matMul(i3, false, false);
    }, b: function() {
      return t3.matMul(a3, true, false);
    } } : n2 && !r2 ? { a: function() {
      return i3.matMul(t3, false, true);
    }, b: function() {
      return a3.matMul(t3, false, false);
    } } : { a: function() {
      return i3.matMul(t3, true, true);
    }, b: function() {
      return t3.matMul(a3, true, true);
    } } : { a: function() {
      return t3.matMul(i3, false, true);
    }, b: function() {
      return a3.matMul(t3, true, false);
    } };
  }, "BatchMatMul", y2).reshape(v2);
} });
var nl = An({ dot_: function(t2, e2) {
  var n2 = mn(t2, "t1", "dot"), r2 = mn(e2, "t2", "dot");
  C(!(1 !== n2.rank && 2 !== n2.rank || 1 !== r2.rank && 2 !== r2.rank), function() {
    return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n2.rank + " and " + r2.rank + ".";
  });
  var o2 = 1 === n2.rank ? n2.size : n2.shape[1], a2 = 1 === r2.rank ? r2.size : r2.shape[0];
  return C(o2 === a2, function() {
    return "Error in dot: inner dimensions of inputs must match, but got " + o2 + " and " + a2 + ".";
  }), 1 === n2.rank && 1 === r2.rank ? n2.as2D(1, -1).matMul(r2.as2D(-1, 1)).asScalar() : 1 === n2.rank && 2 === r2.rank ? n2.as2D(1, -1).matMul(r2.as2D(r2.shape[0], r2.shape[1])).as1D() : 2 === n2.rank && 1 === r2.rank ? n2.matMul(r2.as2D(-1, 1)).as1D() : n2.matMul(r2.as2D(r2.shape[0], r2.shape[1]));
} });
var rl = An({ outerProduct_: function(t2, e2) {
  var n2 = mn(t2, "v1", "outerProduct"), r2 = mn(e2, "v2", "outerProduct");
  return C(1 === n2.rank && 1 === r2.rank, function() {
    return "Error in outerProduct: inputs must be rank 1, but got ranks " + n2.rank + " and " + r2.rank + ".";
  }), n2.as2D(-1, 1).matMul(r2.as2D(1, -1));
} });
var ol = An({ reverse_: function(t2, e2) {
  var n2 = mn(t2, "x", "reverse");
  if (0 === n2.rank)
    return n2.clone();
  var r2 = O(e2, n2.shape);
  return Lt.runKernelFunc(function(t3) {
    return t3.reverse(n2, r2);
  }, { $x: n2 }, function(t3) {
    return { $x: function() {
      return t3.reverse(r2);
    } };
  }).reshapeAs(n2);
} });
var al = An({ reverse1d_: function(t2) {
  var e2 = mn(t2, "x", "reverse");
  return C(1 === e2.rank, function() {
    return "Error in reverse1D: x must be rank 1 but got rank " + e2.rank + ".";
  }), ol(e2, 0);
} });
var il = An({ reverse2d_: function(t2, e2) {
  var n2 = mn(t2, "x", "reverse");
  return C(2 === n2.rank, function() {
    return "Error in reverse2D: x must be rank 2 but got rank " + n2.rank + ".";
  }), ol(n2, e2);
} });
var sl = An({ reverse3d_: function(t2, e2) {
  var n2 = mn(t2, "x", "reverse");
  return C(3 === n2.rank, function() {
    return "Error in reverse3D: x must be rank 3 but got rank " + n2.rank + ".";
  }), ol(n2, e2);
} });
var ul = An({ reverse4d_: function(t2, e2) {
  var n2 = mn(t2, "x", "reverse");
  return C(4 === n2.rank, function() {
    return "Error in reverse4D: x must be rank 4 but got rank " + n2.rank + ".";
  }), ol(n2, e2);
} });
function cl(t2, e2, n2, r2, o2, a2) {
  var i2 = mn(t2, "x", "maxPool"), s2 = i2, u2 = false;
  3 === i2.rank && (u2 = true, s2 = i2.as4D(1, i2.shape[0], i2.shape[1], i2.shape[2])), null == r2 && (r2 = [1, 1]), C(4 === s2.rank, function() {
    return "Error in maxPool: input must be rank 4 but got rank " + s2.rank + ".";
  }), C(Mo(n2, r2), function() {
    return "Error in maxPool: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + r2 + "'";
  }), null != a2 && C(A(o2), function() {
    return "Error in maxPool: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + o2 + ".";
  });
  var c2 = Io(s2.shape, e2, n2, r2, o2, a2);
  if (1 === c2.filterWidth && 1 === c2.filterHeight && S(c2.inShape, c2.outShape))
    return i2.clone();
  var l2 = [s2], h2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.maxPool(s2, c2);
    return e3([s2, n3]), n3;
  }, { x: s2 }, function(t3, a3) {
    var i3 = a3[0], s3 = a3[1];
    return { x: function() {
      return function(t4, e3, n3, r3, o3, a4, i4, s4) {
        var u3 = mn(t4, "dy", "maxPoolBackprop"), c3 = mn(e3, "input", "maxPoolBackprop"), l3 = mn(n3, "output", "maxPoolBackprop");
        C(c3.rank === u3.rank, function() {
          return "Rank of input (" + c3.rank + ") does not match rank of dy (" + u3.rank + ")";
        }), null == a4 && (a4 = [1, 1]);
        C(Mo(o3, a4), function() {
          return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides " + o3 + " and dilations '" + a4 + "'";
        }), C(4 === u3.rank, function() {
          return "Error in maxPoolBackprop: dy must be rank 4 but got rank " + u3.rank + ".";
        }), C(4 === c3.rank, function() {
          return "Error in maxPoolBackprop: input must be rank 4 but got rank " + c3.rank + ".";
        }), null != s4 && C(A(i4), function() {
          return "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode " + s4 + " but got pad " + i4 + ".";
        });
        var h3 = Io(c3.shape, r3, o3, a4, i4, s4);
        return Lt.runKernelFunc(function(t5) {
          return t5.maxPoolBackprop(u3, c3, l3, h3);
        }, { $dy: u3, $input: c3 });
      }(t3, i3, s3, e2, n2, r2, o2);
    } };
  }, "MaxPool", c2, l2);
  return u2 ? h2.as3D(h2.shape[1], h2.shape[2], h2.shape[3]) : h2;
}
function ll(t2, e2, n2, r2, o2, a2) {
  var i2 = mn(t2, "x", "avgPool", "float32");
  null == r2 && (r2 = [1, 1]), C(Mo(n2, r2), function() {
    return "Error in avgPool: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + r2 + "'";
  });
  var s2 = i2, u2 = false;
  3 === i2.rank && (u2 = true, s2 = i2.as4D(1, i2.shape[0], i2.shape[1], i2.shape[2])), C(4 === s2.rank, function() {
    return "Error in avgPool: x must be rank 4 but got rank " + s2.rank + ".";
  }), null != a2 && C(A(o2), function() {
    return "Error in avgPool: pad must be an integer when using, dimRoundingMode " + a2 + " but got pad " + o2 + ".";
  });
  var c2 = Io(s2.shape, e2, n2, r2, o2, a2);
  if (1 === c2.filterWidth && 1 === c2.filterHeight && S(c2.inShape, c2.outShape))
    return i2.clone();
  var l2 = Lt.runKernelFunc(function(t3) {
    return t3.avgPool(s2, c2);
  }, { x: s2 }, function(t3) {
    return { x: function() {
      return function(t4, e3, n3, r3, o3, a3) {
        var i3 = mn(t4, "dy", "avgPoolBackprop"), s3 = mn(e3, "input", "avgPoolBackprop");
        C(s3.rank === i3.rank, function() {
          return "Rank of input (" + s3.rank + ") does not match rank of dy (" + i3.rank + ")";
        }), null == o3 && (o3 = [1, 1]);
        C(Mo(r3, o3), function() {
          return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides " + r3 + " and dilations '" + o3 + "'";
        });
        var u3 = s3, c3 = i3, l3 = false;
        3 === s3.rank && (l3 = true, u3 = s3.as4D(1, s3.shape[0], s3.shape[1], s3.shape[2]), c3 = i3.as4D(1, i3.shape[0], i3.shape[1], i3.shape[2]));
        C(4 === c3.rank, function() {
          return "Error in avgPoolBackprop: dy must be rank 4 but got rank " + c3.rank + ".";
        }), C(4 === u3.rank, function() {
          return "Error in avgPoolBackprop: input must be rank 4 but got rank " + u3.rank + ".";
        });
        var h2 = Io(u3.shape, n3, r3, o3, a3), f2 = Lt.runKernelFunc(function(t5) {
          return t5.avgPoolBackprop(c3, u3, h2);
        }, { dy4D: c3, input4D: u3 });
        if (l3)
          return f2.as3D(f2.shape[1], f2.shape[2], f2.shape[3]);
        return f2;
      }(t3, s2, e2, n2, r2, o2);
    } };
  }, "AvgPool", c2);
  return l2 = l2.cast(i2.dtype), u2 ? l2.as3D(l2.shape[1], l2.shape[2], l2.shape[3]) : l2;
}
var hl = An({ maxPool_: function(t2, e2, n2, r2, o2) {
  return cl(t2, e2, n2, 1, r2, o2);
} });
var fl = An({ avgPool_: function(t2, e2, n2, r2, o2) {
  return ll(t2, e2, n2, 1, r2, o2);
} });
var dl = An({ pool_: function(t2, e2, n2, r2, o2, a2) {
  null == o2 && (o2 = [1, 1]), null == a2 && (a2 = 1), 0 === r2 && (r2 = "valid");
  var i2 = mn(t2, "x", "maxPool"), s2 = i2, u2 = false;
  3 === i2.rank && (u2 = true, s2 = i2.as4D(1, i2.shape[0], i2.shape[1], i2.shape[2])), C(Mo(a2, o2), function() {
    return "Error in pool: Either strides or dilations must be 1. Got strides " + a2 + " and dilations '" + o2 + "'";
  });
  var c2, l2 = Io(s2.shape, e2, a2, o2, r2), h2 = [l2.dilationHeight, l2.dilationWidth];
  c2 = "same" === r2 ? function(t3, e3) {
    var n3 = t3.map(function(t4, n4) {
      return t4 + (t4 - 1) * (e3[n4] - 1);
    }).map(function(t4) {
      return t4 - 1;
    }), r3 = n3.map(function(t4) {
      return Math.floor(t4 / 2);
    }), o3 = n3.map(function(t4, e4) {
      return t4 - r3[e4];
    });
    return n3.map(function(t4, e4) {
      return [r3[e4], o3[e4]];
    });
  }([l2.filterHeight, l2.filterWidth], h2) : [[0, 0], [0, 0]];
  var f2 = 1 === h2[0] && 1 === h2[1], d2 = function(t3, e3, n3) {
    var r3 = n3.map(function(t4) {
      return t4[0];
    }), o3 = n3.map(function(t4) {
      return t4[1];
    }), a3 = t3.concat(r3, o3), i3 = e3.map(function(t4, e4) {
      return (t4 - a3[e4] % t4) % t4;
    }), s3 = o3.map(function(t4, e4) {
      return t4 + i3[e4];
    }), u3 = e3.map(function(t4, e4) {
      return [r3[e4], s3[e4]];
    }), c3 = e3.map(function(t4, e4) {
      return [0, i3[e4]];
    });
    return [u3, c3];
  }([l2.inHeight, l2.inWidth], h2, c2), p2 = d2[0], v2 = d2[1], m2 = f2 ? r2 : "valid", g2 = f2 ? s2 : Mr(s2, h2, p2), y2 = ("avg" === n2 ? function() {
    return ll(g2, e2, a2, 1, m2);
  } : function() {
    return cl(g2, e2, a2, 1, m2);
  })(), x2 = f2 ? y2 : vr(y2, h2, v2);
  return u2 ? x2.as3D(x2.shape[1], x2.shape[2], x2.shape[3]) : x2;
} });
var pl = An({ maxPool3d_: function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === a2 && (a2 = "NDHWC");
  var s2 = mn(t2, "x", "maxPool3d"), u2 = s2, c2 = false;
  4 === s2.rank && (c2 = true, u2 = s2.as5D(1, s2.shape[0], s2.shape[1], s2.shape[2], s2.shape[3])), null == i2 && (i2 = [1, 1, 1]), C(5 === u2.rank, function() {
    return "Error in maxPool3d: x must be rank 5 but got rank " + u2.rank + ".";
  }), C("NDHWC" === a2, function() {
    return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + a2;
  }), C(Mo(n2, i2), function() {
    return "Error in maxPool3d: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + i2 + "'";
  }), null != o2 && C(A(r2), function() {
    return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode " + o2 + " but got pad " + r2 + ".";
  });
  var l2 = ko(u2.shape, e2, n2, i2, r2, o2, a2), h2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.maxPool3d(u2, l2);
    return e3([u2, n3]), n3;
  }, { x: u2 }, function(t3, a3) {
    var s3 = a3[0], u3 = a3[1];
    return { x: function() {
      return function(t4, e3, n3, r3, o3, a4, i3, s4) {
        var u4 = mn(t4, "dy", "maxPool3dBackprop"), c3 = mn(e3, "input", "maxPool3dBackprop"), l3 = mn(n3, "output", "maxPool3dBackprop"), h3 = u4, f2 = c3, d2 = l3, p2 = false;
        4 === c3.rank && (p2 = true, h3 = u4.as5D(1, u4.shape[0], u4.shape[1], u4.shape[2], u4.shape[3]), f2 = c3.as5D(1, c3.shape[0], c3.shape[1], c3.shape[2], c3.shape[3]), d2 = l3.as5D(1, l3.shape[0], l3.shape[1], l3.shape[2], l3.shape[3]));
        C(5 === h3.rank, function() {
          return "Error in maxPool3dBackprop: dy must be rank 5 but got rank " + h3.rank + ".";
        }), C(5 === f2.rank, function() {
          return "Error in maxPool3dBackprop: input must be rank 5 but got rank " + f2.rank + ".";
        }), C(5 === d2.rank, function() {
          return "Error in maxPool3dBackprop: output must be rank 5 but got rank " + d2.rank + ".";
        }), null == a4 && (a4 = [1, 1, 1]);
        C(Mo(o3, a4), function() {
          return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides " + o3 + " and dilations '" + a4 + "'";
        }), null != s4 && C(A(i3), function() {
          return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + s4 + " but got pad " + i3 + ".";
        });
        var v2 = ko(f2.shape, r3, o3, a4, i3, s4), m2 = Lt.runKernelFunc(function(t5) {
          return t5.maxPool3dBackprop(h3, f2, d2, v2);
        }, { dy5D: h3, input5D: f2 });
        if (p2)
          return m2.as4D(m2.shape[1], m2.shape[2], m2.shape[3], m2.shape[4]);
        return m2;
      }(t3, s3, u3, e2, n2, i2, r2, o2);
    } };
  });
  return c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
} });
var vl = An({ avgPool3d_: function(t2, e2, n2, r2, o2, a2, i2) {
  void 0 === a2 && (a2 = "NDHWC");
  var s2 = mn(t2, "x", "avgPool3d", "float32"), u2 = s2, c2 = false;
  4 === s2.rank && (c2 = true, u2 = s2.as5D(1, s2.shape[0], s2.shape[1], s2.shape[2], s2.shape[3])), null == i2 && (i2 = [1, 1, 1]), C(5 === u2.rank, function() {
    return "Error in avgPool3d: x must be rank 5 but got rank " + u2.rank + ".";
  }), C("NDHWC" === a2, function() {
    return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + a2;
  }), C(Mo(n2, i2), function() {
    return "Error in avgPool3d: Either strides or dilations must be 1. Got strides " + n2 + " and dilations '" + i2 + "'";
  }), null != o2 && C(A(r2), function() {
    return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode " + o2 + " but got pad " + r2 + ".";
  });
  var l2 = ko(u2.shape, e2, n2, i2, r2, o2, a2), h2 = Lt.runKernelFunc(function(t3) {
    return t3.avgPool3d(u2, l2);
  }, { x: u2 }, function(t3) {
    return { x: function() {
      return function(t4, e3, n3, r3, o3, a3, i3) {
        var s3 = mn(t4, "dy", "avgPool3dBackprop"), u3 = mn(e3, "input", "avgPool3dBackprop"), c3 = s3, l3 = u3, h3 = false;
        4 === u3.rank && (h3 = true, c3 = s3.as5D(1, s3.shape[0], s3.shape[1], s3.shape[2], s3.shape[3]), l3 = u3.as5D(1, u3.shape[0], u3.shape[1], u3.shape[2], u3.shape[3]));
        C(5 === c3.rank, function() {
          return "Error in avgPool3dBackprop: dy must be rank 5 but got rank " + c3.rank + ".";
        }), C(5 === l3.rank, function() {
          return "Error in avgPool3dBackprop: input must be rank 5 but got rank " + l3.rank + ".";
        }), null == o3 && (o3 = [1, 1, 1]);
        C(Mo(r3, o3), function() {
          return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides " + r3 + " and dilations '" + o3 + "'";
        }), null != i3 && C(A(a3), function() {
          return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + i3 + " but got pad " + a3 + ".";
        });
        var f2 = ko(l3.shape, n3, r3, o3, a3, i3), d2 = Lt.runKernelFunc(function(t5) {
          return t5.avgPool3dBackprop(c3, l3, f2);
        }, { dy5D: c3, input5D: l3 });
        if (h3)
          return d2.as4D(d2.shape[1], d2.shape[2], d2.shape[3], d2.shape[4]);
        return d2;
      }(t3, u2, e2, n2, i2, r2, o2);
    } };
  });
  return h2 = h2.cast(u2.dtype), c2 ? h2.as4D(h2.shape[1], h2.shape[2], h2.shape[3], h2.shape[4]) : h2;
} });
var ml = An({ slice_: function(t2, e2, n2) {
  var r2, o2, a2 = mn(t2, "x", "slice");
  if (0 === a2.rank)
    throw new Error("Slicing scalar is not possible");
  (r2 = "number" == typeof e2 ? [e2].concat(new Array(a2.rank - 1).fill(0)) : e2.length < a2.rank ? e2.concat(new Array(a2.rank - e2.length).fill(0)) : e2.slice()).forEach(function(t3) {
    C(-1 !== t3, function() {
      return "slice() does not support negative begin indexing.";
    });
  }), o2 = (o2 = null == n2 ? new Array(a2.rank).fill(-1) : "number" == typeof n2 ? [n2].concat(new Array(a2.rank - 1).fill(-1)) : n2.length < a2.rank ? n2.concat(new Array(a2.rank - n2.length).fill(-1)) : n2).map(function(t3, e3) {
    return t3 >= 0 ? t3 : (C(-1 === t3, function() {
      return "Negative size values should be exactly -1 but got " + t3 + " for the slice() size at index " + e3 + ".";
    }), a2.shape[e3] - r2[e3]);
  }), eo(a2, r2, o2);
  var i2 = a2.shape, s2 = { begin: r2, size: o2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.slice(a2, r2, o2);
  }, { x: a2 }, function(t3) {
    for (var e3 = [], n3 = 0; n3 < t3.rank; n3++)
      e3.push([r2[n3], i2[n3] - r2[n3] - o2[n3]]);
    return { x: function() {
      return t3.pad(e3);
    } };
  }, "Slice", s2);
} });
var gl = An({ slice1d_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "slice1d");
  return C(1 === r2.rank, function() {
    return "slice1d expects a rank-1 tensor, but got a rank-" + r2.rank + " tensor";
  }), ml(r2, [e2], [n2]);
} });
var yl = An({ slice2d_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "slice2d");
  return C(2 === r2.rank, function() {
    return "slice2d expects a rank-2 tensor, but got a rank-" + r2.rank + " tensor";
  }), ml(r2, e2, n2);
} });
var xl = An({ slice3d_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "slice3d");
  return C(3 === r2.rank, function() {
    return "slice3d expects a rank-3 tensor, but got a rank-" + r2.rank + " tensor";
  }), ml(r2, e2, n2);
} });
var bl = An({ slice4d_: function(t2, e2, n2) {
  var r2 = mn(t2, "x", "slice4d");
  return C(4 === r2.rank, function() {
    return "slice4d expects a rank-4 tensor, but got a rank-" + r2.rank + " tensor";
  }), ml(r2, e2, n2);
} });
function wl(t2, e2, n2, r2, o2) {
  return e2.rank < n2.rank && (e2 = e2.reshape(wn(e2.shape, r2))), t2.rank < n2.rank && (t2 = t2.reshape(wn(t2.shape, r2))), { x: function() {
    var r3 = t2.mul(n2.equal(e2).cast(t2.dtype));
    return null == o2 ? r3 : r3.transpose(o2);
  } };
}
var Cl = An({ all_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "all", "bool"), o2 = O(e2, r2.shape), a2 = o2, i2 = En(a2, r2.rank);
  null != i2 && (r2 = r2.transpose(i2), a2 = In(a2.length, r2.rank));
  var s2 = Lt.runKernelFunc(function(t3) {
    return t3.all(r2, a2);
  }, { $x: r2 });
  if (n2) {
    var u2 = wn(s2.shape, o2);
    return s2.reshape(u2);
  }
  return s2;
} });
var El = An({ any_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "any", "bool"), o2 = O(e2, r2.shape), a2 = o2, i2 = En(a2, r2.rank);
  null != i2 && (r2 = r2.transpose(i2), a2 = In(a2.length, r2.rank));
  var s2 = Lt.runKernelFunc(function(t3) {
    return t3.any(r2, a2);
  }, { $x: r2 });
  if (n2) {
    var u2 = wn(s2.shape, o2);
    return s2.reshape(u2);
  }
  return s2;
} });
var Rl = An({ argMax_: function(t2, e2) {
  void 0 === e2 && (e2 = 0);
  var n2 = mn(t2, "x", "argMax");
  null == e2 && (e2 = 0);
  var r2 = O(e2, n2.shape), o2 = En(r2, n2.rank);
  null != o2 && (n2 = n2.transpose(o2), r2 = In(r2.length, n2.rank));
  var a2 = { axis: r2[0] }, i2 = [n2];
  return Lt.runKernelFunc(function(t3, e3) {
    var o3 = t3.argMax(n2, r2[0]);
    return e3([n2]), o3;
  }, { x: n2 }, function(t3, e3) {
    var n3 = e3[0];
    return { x: function() {
      return Xn(n3);
    } };
  }, "ArgMax", a2, i2);
} });
var Il = An({ argMin_: function(t2, e2) {
  void 0 === e2 && (e2 = 0);
  var n2 = mn(t2, "x", "argMin");
  null == e2 && (e2 = 0);
  var r2 = O(e2, n2.shape), o2 = En(r2, n2.rank);
  return null != o2 && (n2 = n2.transpose(o2), r2 = In(r2.length, n2.rank)), Lt.runKernelFunc(function(t3, e3) {
    var o3 = t3.argMin(n2, r2[0]);
    return e3([n2]), o3;
  }, { $x: n2 }, function(t3, e3) {
    var n3 = e3[0];
    return { $x: function() {
      return Xn(n3);
    } };
  });
} });
var kl = An({ logSumExp_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "logSumExp"), o2 = O(e2, r2.shape), a2 = r2.max(o2, true), i2 = r2.sub(a2).exp().sum(o2).log(), s2 = a2.reshape(i2.shape).add(i2);
  if (n2) {
    var u2 = wn(s2.shape, o2);
    return s2.reshape(u2);
  }
  return s2;
} });
var Sl = An({ max_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "max"), o2 = r2, a2 = O(e2, r2.shape), i2 = a2, s2 = En(i2, r2.rank);
  null != s2 && (r2 = r2.transpose(s2), i2 = In(i2.length, r2.rank));
  var u2 = [r2], c2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.max(r2, i2);
    return e3([o2, n3]), n3;
  }, { x: r2 }, function(t3, e3) {
    return wl(t3, e3[1], e3[0], a2, s2);
  }, "Max", { axes: i2 }, u2, [true]);
  if (n2) {
    var l2 = wn(c2.shape, a2);
    c2 = c2.reshape(l2);
  }
  return c2;
} });
var Al = An({ mean_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "mean"), o2 = O(e2, r2.shape), a2 = k(bn(r2.shape, o2)[1]);
  return vo(function(t3) {
    var r3 = On(a2);
    return { value: (r3.dtype === t3.dtype ? t3 : t3.cast(r3.dtype)).div(r3).sum(e2, n2), gradFunc: function(e3) {
      var n3 = t3.shape.slice();
      return o2.forEach(function(t4) {
        n3[t4] = 1;
      }), e3.reshape(n3).mul(zn(t3.shape, "float32")).div(a2);
    } };
  })(r2);
} });
var Dl = An({ min_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "min"), o2 = r2, a2 = O(e2, r2.shape), i2 = a2, s2 = En(i2, r2.rank);
  null != s2 && (r2 = r2.transpose(s2), i2 = In(i2.length, r2.rank));
  var u2 = [r2], c2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.min(r2, i2);
    return e3([o2, n3]), n3;
  }, { x: r2 }, function(t3, e3) {
    return wl(t3, e3[1], e3[0], a2, s2);
  }, "Min", { axes: i2 }, u2, [true]);
  if (n2) {
    var l2 = wn(c2.shape, a2);
    c2 = c2.reshape(l2);
  }
  return c2;
} });
var Tl = An({ moments_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = O(e2, (t2 = mn(t2, "x", "moments")).shape), o2 = t2.mean(r2, n2), a2 = o2.shape;
  n2 || (a2 = wn(o2.shape, r2));
  var i2 = t2.toFloat().sub(o2.reshape(a2)).square();
  return { mean: o2, variance: i2.mean(r2, n2) };
} });
var Nl = An({ sum_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "sum");
  "bool" === r2.dtype && (r2 = r2.toInt());
  var o2 = O(e2, r2.shape);
  return vo(function(t3) {
    var e3 = En(o2, t3.rank), r3 = o2, a2 = t3;
    null != e3 && (a2 = t3.transpose(e3), r3 = In(r3.length, t3.rank));
    var i2 = function(e4) {
      var n3 = t3.shape.slice();
      return o2.forEach(function(t4) {
        n3[t4] = 1;
      }), e4.reshape(n3).mul(zn(t3.shape, "float32"));
    }, s2 = { axes: r3 }, u2 = Lt.runKernelFunc(function(t4) {
      return t4.sum(a2, r3);
    }, { x: a2 }, function(t4) {
      return { x: function() {
        return i2(t4);
      } };
    }, "Sum", s2);
    if (n2) {
      var c2 = wn(u2.shape, o2);
      u2 = u2.reshape(c2);
    }
    return { value: u2, gradFunc: i2 };
  })(r2);
} });
var Fl = An({ prod_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = null), void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "x", "prod");
  "bool" === r2.dtype && (r2 = r2.toInt());
  var o2 = O(e2, r2.shape), a2 = En(o2, r2.rank), i2 = o2, s2 = r2;
  null != a2 && (s2 = r2.transpose(a2), i2 = In(i2.length, r2.rank));
  var u2 = Lt.runKernelFunc(function(t3) {
    return t3.prod(s2, i2);
  }, { permutedX: s2 });
  if (n2) {
    var c2 = wn(u2.shape, o2);
    u2 = u2.reshape(c2);
  }
  return u2;
} });
var _l = An({ elu_: function(t2) {
  var e2 = mn(t2, "x", "elu");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.elu(e2);
    return n2([r2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      return Lt.runKernelFunc(function(e4) {
        return e4.eluDer(t3, n2);
      }, { dy: t3, y: n2 });
    } };
  });
} });
var Ol = An({ leakyRelu_: function(t2, e2) {
  void 0 === e2 && (e2 = 0.2);
  var n2 = mn(t2, "x", "leakyRelu");
  return hc(On(e2).mul(n2), n2);
} });
var Ml = An({ prelu_: function(t2, e2) {
  var n2 = mn(t2, "x", "prelu"), r2 = mn(e2, "alpha", "prelu");
  return Lt.runKernelFunc(function(t3, e3) {
    var o2 = t3.prelu(n2, r2);
    return e3([n2, r2]), o2;
  }, { x: n2, alpha: r2 }, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1], o2 = n3.greater(0);
    return { x: function() {
      return ec(o2, t3, t3.mul(r3));
    }, alpha: function() {
      var e4 = ec(o2, Xn(t3), t3.mul(n3)), a2 = Eo(r3.shape, t3.shape);
      return a2.length > 0 && (e4 = e4.sum(a2)), e4.reshape(r3.shape);
    } };
  }, "Prelu");
} });
var Bl = An({ relu_: function(t2) {
  var e2 = mn(t2, "x", "relu");
  return "bool" === e2.dtype ? e2.toInt() : Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.relu(e2);
    return n2([e2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { x: function() {
      return t3.mulStrict(n2.step().toFloat());
    } };
  }, "Relu");
} });
var Pl = An({ relu6_: function(t2) {
  var e2 = mn(t2, "x", "relu6");
  return "bool" === e2.dtype ? e2.toInt() : Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.relu6(e2);
    return n2([e2]), r2;
  }, { x: e2 }, function(t3, e3) {
    var n2 = e3[0], r2 = n2.lessEqual(6).mul(n2.step());
    return { x: function() {
      return t3.mulStrict(r2.toFloat());
    } };
  }, "Relu6");
} });
var Ll = An({ selu_: function(t2) {
  var e2 = mn(t2, "x", "selu");
  return Lt.runKernelFunc(function(t3, n2) {
    var r2 = t3.selu(e2);
    return n2([e2]), r2;
  }, { $x: e2 }, function(t3, e3) {
    var n2 = e3[0];
    return { $x: function() {
      var e4 = n2.greater(On(0)), r2 = On(bs), o2 = On(ws), a2 = t3.mul(o2), i2 = t3.mul(r2).mul(n2.toFloat().exp());
      return ec(e4, a2, i2);
    } };
  });
} });
var Wl = An({ transpose_: function(t2, e2) {
  var n2 = mn(t2, "x", "transpose");
  if (null == e2 && (e2 = n2.shape.map(function(t3, e3) {
    return e3;
  }).reverse()), C(n2.rank === e2.length, function() {
    return "Error in transpose: rank of input " + n2.rank + " must match length of perm " + e2 + ".";
  }), e2.forEach(function(t3) {
    C(t3 >= 0 && t3 < n2.rank, function() {
      return "All entries in 'perm' must be between 0 and " + (n2.rank - 1) + " but got " + e2;
    });
  }), n2.rank <= 1)
    return n2.clone();
  var r2 = { perm: e2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.transpose(n2, e2);
  }, { x: n2 }, function(t3) {
    var n3 = Rn(e2);
    return { x: function() {
      return t3.transpose(n3);
    } };
  }, "Transpose", r2);
} });
var Ul = An({ localResponseNormalization_: function(t2, e2, n2, r2, o2) {
  void 0 === e2 && (e2 = 5), void 0 === n2 && (n2 = 1), void 0 === r2 && (r2 = 1), void 0 === o2 && (o2 = 0.5);
  var a2 = mn(t2, "x", "localResponseNormalization");
  C(4 === a2.rank || 3 === a2.rank, function() {
    return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + a2.rank + ".";
  }), C(A(e2), function() {
    return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + e2 + ".";
  });
  var i2 = a2, s2 = false;
  3 === a2.rank && (s2 = true, i2 = a2.as4D(1, a2.shape[0], a2.shape[1], a2.shape[2]));
  var u2 = Lt.runKernelFunc(function(t3, a3) {
    var s3 = t3.localResponseNormalization4D(i2, e2, n2, r2, o2);
    return a3([i2, s3]), s3;
  }, { x4D: i2 }, function(t3, a3) {
    var i3 = a3[0], s3 = a3[1];
    return { x4D: function() {
      return Lt.runKernelFunc(function(a4) {
        return a4.LRNGrad(t3, i3, s3, e2, n2, r2, o2);
      }, {});
    } };
  });
  return s2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
} });
var Vl = An({ norm_: function(t2, e2, n2, r2) {
  void 0 === e2 && (e2 = "euclidean"), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = false);
  var o2 = function t3(e3, n3, r3) {
    void 0 === r3 && (r3 = null);
    if (0 === e3.rank)
      return e3.abs();
    if (1 !== e3.rank && null === r3)
      return t3(e3.reshape([-1]), n3, r3);
    if (1 === e3.rank || "number" == typeof r3 || Array.isArray(r3) && 1 === r3.length) {
      if (1 === n3)
        return e3.abs().sum(r3);
      if (n3 === 1 / 0)
        return e3.abs().max(r3);
      if (n3 === -1 / 0)
        return e3.abs().min(r3);
      if ("euclidean" === n3 || 2 === n3)
        return e3.abs().pow(On(2, "int32")).sum(r3).sqrt();
      throw new Error("Error in norm: invalid ord value: " + n3);
    }
    if (Array.isArray(r3) && 2 === r3.length) {
      if (1 === n3)
        return e3.abs().sum(r3[0]).max(r3[1] - 1);
      if (n3 === 1 / 0)
        return e3.abs().sum(r3[1]).max(r3[0]);
      if (n3 === -1 / 0)
        return e3.abs().sum(r3[1]).min(r3[0]);
      if ("fro" === n3 || "euclidean" === n3)
        return e3.square().sum(r3).sqrt();
      throw new Error("Error in norm: invalid ord value: " + n3);
    }
    throw new Error("Error in norm: invalid axis: " + r3);
  }(t2 = mn(t2, "x", "norm"), e2, n2), a2 = o2.shape;
  if (r2) {
    var i2 = O(n2, t2.shape);
    a2 = wn(o2.shape, i2);
  }
  return o2.reshape(a2);
} });
var zl = An({ basicLSTMCell_: function(t2, e2, n2, r2, o2, a2) {
  var i2 = mn(t2, "forgetBias", "basicLSTMCell"), s2 = mn(e2, "lstmKernel", "basicLSTMCell"), u2 = mn(n2, "lstmBias", "basicLSTMCell"), c2 = mn(r2, "data", "basicLSTMCell"), l2 = mn(o2, "c", "basicLSTMCell"), h2 = mn(a2, "h", "basicLSTMCell"), f2 = c2.concat(h2, 1).matMul(s2).add(u2), d2 = f2.shape[0], p2 = f2.shape[1] / 4, v2 = [d2, p2], m2 = f2.slice([0, 0], v2), g2 = f2.slice([0, p2], v2), y2 = f2.slice([0, 2 * p2], v2), x2 = f2.slice([0, 3 * p2], v2), b2 = m2.sigmoid().mulStrict(g2.tanh()).addStrict(l2.mulStrict(i2.add(y2).sigmoid())), w2 = b2.tanh().mulStrict(x2.sigmoid());
  return [b2, w2];
} });
var Gl = An({ multiRNNCell_: function(t2, e2, n2, r2) {
  for (var o2 = mn(e2, "data", "multiRNNCell"), a2 = gn(n2, "c", "multiRNNCell"), i2 = gn(r2, "h", "multiRNNCell"), s2 = o2, u2 = [], c2 = 0; c2 < t2.length; c2++) {
    var l2 = t2[c2](s2, a2[c2], i2[c2]);
    u2.push(l2[0]), u2.push(l2[1]), s2 = l2[1];
  }
  var h2 = [], f2 = [];
  for (c2 = 0; c2 < u2.length; c2 += 2)
    h2.push(u2[c2]), f2.push(u2[c2 + 1]);
  return [h2, f2];
} });
var Hl = An({ movingAverage_: function(t2, e2, n2, r2, o2) {
  void 0 === o2 && (o2 = true);
  var a2 = mn(t2, "v", "movingAverage"), i2 = mn(e2, "x", "movingAverage"), s2 = mn(n2, "decay", "movingAverage");
  Ft(a2, i2), C(S(a2.shape, i2.shape), function() {
    return "Shape mismatch in v and x";
  });
  var u2 = On(1), c2 = u2.sub(s2), l2 = i2.sub(a2).mul(c2);
  if (o2) {
    C(null != r2, function() {
      return "When using zeroDebias: true, step is required.";
    });
    var h2 = mn(r2, "step", "movingAverage");
    l2 = l2.div(u2.sub(xc(s2, h2)));
  }
  return a2.add(l2);
} });
var ql = An({ stridedSlice_: function(t2, e2, n2, r2, o2, a2, i2, s2, u2) {
  if (void 0 === o2 && (o2 = 0), void 0 === a2 && (a2 = 0), void 0 === i2 && (i2 = 0), void 0 === s2 && (s2 = 0), void 0 === u2 && (u2 = 0), null == r2 && (r2 = new Array(e2.length)), 0 !== i2)
    throw new Error("ellipsis mask is not yet supported");
  var c2 = mn(t2, "x", "stridedSlice"), l2 = no(s2), h2 = c2.shape.slice();
  l2.forEach(function(t3) {
    e2[t3] = 0, n2[t3] = 1, h2.splice(t3, 0, 1);
  }), c2 = c2.reshape(h2);
  for (var f2 = 0; f2 < c2.rank; f2++)
    e2[f2] = oo(o2, e2, r2, c2.shape, f2), n2[f2] = ao(a2, n2, r2, c2.shape, f2), r2[f2] = r2[f2] || 1;
  var d2 = no(u2);
  d2.forEach(function(t3) {
    n2[t3] = e2[t3] + 1, r2[t3] = 1;
  });
  var p2 = ro(e2, n2, r2), v2 = p2.filter(function(t3, e3) {
    return -1 === d2.indexOf(e3);
  });
  return r2.every(function(t3) {
    return 1 === t3;
  }) ? ml(c2, e2, p2).reshape(v2) : Lt.runKernelFunc(function(t3) {
    return t3.stridedSlice(c2, e2, n2, r2);
  }, { $x: c2 }).reshape(v2);
} });
var Kl = An({ topk_: function(t2, e2, n2) {
  void 0 === e2 && (e2 = 1), void 0 === n2 && (n2 = true);
  var r2 = mn(t2, "x", "topk");
  if (0 === r2.rank)
    throw new Error("topk() expects the input to be of rank 1 or higher");
  var o2 = r2.shape[r2.shape.length - 1];
  if (e2 > o2)
    throw new Error("'k' passed to topk() must be <= the last dimension (" + o2 + ") but got " + e2);
  var a2 = Lt.runKernelFunc(function(t3) {
    return t3.topk(r2, e2, n2);
  }, { $x: r2 });
  return { values: a2[0], indices: a2[1] };
} });
var jl = An({ scatterND_: function(t2, e2, n2) {
  var r2 = mn(t2, "indices", "scatterND", "int32"), o2 = mn(e2, "updates", "scatterND");
  return Jr(o2, r2, n2), Lt.runKernelFunc(function(t3) {
    return t3.scatterND(r2, o2, n2);
  }, { indices: r2, updates: o2 }, null, "ScatterNd", { shape: n2 });
} });
var Xl = An({ fft_: function(t2) {
  C("complex64" === t2.dtype, function() {
    return "The dtype for tf.spectral.fft() must be complex64 but got " + t2.dtype + ".";
  });
  var e2 = t2.shape[t2.shape.length - 1], n2 = t2.size / e2, r2 = t2.as2D(n2, e2);
  return Lt.runKernelFunc(function(t3) {
    return t3.fft(r2);
  }, { input: t2 }).reshape(t2.shape);
} });
var Yl = An({ ifft_: function(t2) {
  C("complex64" === t2.dtype, function() {
    return "The dtype for tf.spectral.ifft() must be complex64 but got " + t2.dtype + ".";
  });
  var e2 = t2.shape[t2.shape.length - 1], n2 = t2.size / e2, r2 = t2.as2D(n2, e2);
  return Lt.runKernelFunc(function(t3) {
    return t3.ifft(r2);
  }, { input: t2 }).reshape(t2.shape);
} });
var $l = An({ rfft_: function(t2, e2) {
  C("float32" === t2.dtype, function() {
    return "The dtype for rfft() must be real value but got " + t2.dtype;
  });
  var n2, r2 = t2.shape[t2.shape.length - 1], o2 = t2.size / r2;
  if (null != e2 && e2 < r2) {
    var a2 = t2.shape.map(function(t3) {
      return 0;
    }), i2 = t2.shape.map(function(t3) {
      return t3;
    });
    i2[t2.shape.length - 1] = e2, n2 = t2.slice(a2, i2), r2 = e2;
  } else if (null != e2 && e2 > r2) {
    var s2 = t2.shape.map(function(t3) {
      return t3;
    });
    s2[t2.shape.length - 1] = e2 - r2, n2 = t2.concat(Gn(s2), t2.shape.length - 1), r2 = e2;
  } else
    n2 = t2;
  var u2 = n2.zerosLike(), c2 = Dn(n2, u2).as2D(o2, r2), l2 = Xl(c2), h2 = Math.floor(r2 / 2) + 1, f2 = Tn(l2), d2 = Nn(l2), p2 = f2.split([h2, r2 - h2], f2.shape.length - 1), v2 = d2.split([h2, r2 - h2], d2.shape.length - 1), m2 = n2.shape.slice();
  return m2[n2.shape.length - 1] = h2, Dn(p2[0], v2[0]).reshape(m2);
} });
var Ql = An({ irfft_: function(t2) {
  var e2 = t2.shape[t2.shape.length - 1], n2 = t2.size / e2;
  if (e2 <= 2) {
    var r2 = t2.as2D(n2, e2), o2 = Yl(r2);
    return Tn(o2);
  }
  var a2 = [n2, 2 * (e2 - 1)], i2 = Tn(t2).as2D(n2, e2), s2 = Nn(t2).as2D(n2, e2), u2 = i2.slice([0, 1], [n2, e2 - 2]).reverse(1), c2 = s2.slice([0, 1], [n2, e2 - 2]).reverse(1).mul(On(-1)), l2 = i2.concat(u2, 1), h2 = s2.concat(c2, 1);
  return r2 = Dn(l2, h2).as2D(a2[0], a2[1]), o2 = Yl(r2), Tn(o2);
} });
var Jl = Object.freeze({ fft: Xl, ifft: Yl, rfft: $l, irfft: Ql });
var Zl = An({ sparseToDense_: function(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = 0);
  var o2 = mn(t2, "sparseIndices", "sparseToDense", "int32"), a2 = mn(e2, "sparseValues", "sparseToDense"), i2 = mn(r2, "defaultValue", "sparseToDense", a2.dtype);
  return function(t3, e3, n3, r3) {
    if ("int32" !== t3.dtype)
      throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + t3.dtype + ".");
    if (t3.rank > 2)
      throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + t3.shape + ".");
    var o3 = t3.rank > 0 ? t3.shape[0] : 1, a3 = t3.rank > 1 ? t3.shape[1] : 1;
    if (n3.length !== a3)
      throw new Error("outputShape has incorrect number of elements:, " + n3.length + ", should be: " + a3 + ".");
    var i3 = e3.size;
    if (0 !== e3.rank && (1 !== e3.rank || i3 !== o3))
      throw new Error("sparseValues has incorrect shape " + e3.shape + ", should be [] or [" + o3 + "]");
    if (e3.dtype !== r3.dtype)
      throw new Error("sparseValues.dtype must match defaultValues.dtype");
  }(o2, a2, n2, i2), Lt.runKernelFunc(function(t3) {
    return t3.sparseToDense(o2, a2, n2, i2);
  }, { $sparseIndices: o2, $sparseValues: a2, $defaultValue: i2 });
} });
var th = An({ gatherND_: function(t2, e2) {
  var n2 = mn(e2, "indices", "gatherND", "int32"), r2 = mn(t2, "x", "gatherND");
  return Lt.runKernelFunc(function(t3) {
    return t3.gatherND(r2, n2);
  }, { x: r2, indices: n2 }, null, "GatherNd");
} });
var eh = An({ diag_: function(t2) {
  var e2 = mn(t2, "x", "diag").flatten(), n2 = t2.shape.concat(t2.shape);
  return Lt.runKernelFunc(function(t3) {
    return t3.diag(e2);
  }, { $x: e2 }).reshape(n2);
} });
var nh = An({ dropout_: function(t2, e2, n2, r2) {
  var o2 = mn(t2, "x", "dropout");
  if (C("float32" === o2.dtype, function() {
    return "x has to be a floating point tensor since it's going to be scaled, but got a " + o2.dtype + " tensor instead.";
  }), C(e2 >= 0 && e2 < 1, function() {
    return "rate must be a float in the range [0, 1), but got " + e2 + ".";
  }), 0 === e2)
    return t2 instanceof wt ? o2.clone() : o2;
  var a2 = function(t3, e3) {
    if (null == e3)
      return t3.shape.slice();
    if (S(t3.shape, e3))
      return e3;
    if (t3.shape.length === e3.length) {
      for (var n3 = [], r3 = 0; r3 < t3.shape.length; r3++)
        null == e3[r3] && null != t3.shape[r3] ? n3.push(t3.shape[r3]) : n3.push(e3[r3]);
      return n3;
    }
    return e3;
  }(o2, n2), i2 = 1 - e2, s2 = _r(a2, 0, 1, "float32", r2).add(i2).floor().div(i2);
  return o2.mul(s2);
} });
function rh(t2, e2, n2) {
  for (var r2 = 1 - t2 % 2, o2 = new Float32Array(t2), a2 = 0; a2 < t2; ++a2) {
    var i2 = 2 * Math.PI * a2 / (t2 + r2 - 1);
    o2[a2] = e2 - n2 * Math.cos(i2);
  }
  return Mn(o2, "float32");
}
var oh = An({ hannWindow_: function(t2) {
  return rh(t2, 0.5, 0.5);
} });
var ah = An({ hammingWindow_: function(t2) {
  return rh(t2, 0.54, 0.46);
} });
var ih = An({ frame_: function(t2, e2, n2, r2, o2) {
  void 0 === r2 && (r2 = false), void 0 === o2 && (o2 = 0);
  for (var a2 = 0, i2 = []; a2 + e2 <= t2.size; )
    i2.push(ml(t2, a2, e2)), a2 += n2;
  if (r2)
    for (; a2 < t2.size; ) {
      var s2 = a2 + e2 - t2.size, u2 = Yn([ml(t2, a2, e2 - s2), Hn([s2], o2)]);
      i2.push(u2), a2 += n2;
    }
  return 0 === i2.length ? Bn([], [0, e2]) : Yn(i2).as2D(i2.length, e2);
} });
var sh = An({ stft_: function(t2, e2, n2, r2, o2) {
  var a2;
  void 0 === o2 && (o2 = oh), null == r2 && (a2 = e2, r2 = Math.floor(Math.pow(2, Math.ceil(Math.log(a2) / Math.log(2)))));
  for (var i2 = ih(t2, e2, n2), s2 = gc(i2, o2(e2)), u2 = [], c2 = 0; c2 < i2.shape[0]; c2++)
    u2.push($l(s2.slice([c2, 0], [1, e2]), r2));
  return Yn(u2);
} });
var uh = Object.freeze({ hannWindow: oh, hammingWindow: ah, frame: ih, stft: sh });
var ch;
var lh = function(t2, e2, o2) {
  return void 0 === o2 && (o2 = 1), n(this, void 0, void 0, function() {
    var n2, a2, i2, s2, u2, c2, l2, h2, f2, d2, p2, v2, m2, g2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          return n2 = mn(t2, "predictions", "inTopK"), a2 = mn(e2, "targets", "inTopK"), C(n2.rank > 1, function() {
            return "inTopK() expects the predictions to be of rank 2 or higher, but got " + n2.rank;
          }), C(n2.rank - 1 === a2.rank, function() {
            return "predictions rank should be 1 larger than targets rank, but got predictions rank " + n2.rank + " and targets rank " + a2.rank;
          }), E(n2.shape.slice(0, n2.shape.length - 1), a2.shape, "predictions's shape should be align with the targets' shape, except the last dimension."), i2 = n2.shape[n2.shape.length - 1], C(o2 > 0 && o2 <= i2, function() {
            return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + i2 + "), but got " + o2;
          }), [4, n2.data()];
        case 1:
          return s2 = r2.sent(), [4, a2.data()];
        case 2:
          for (u2 = r2.sent(), c2 = [s2.length / i2, i2], h2 = c2[1], f2 = B("bool", l2 = c2[0]), d2 = 0; d2 < l2; d2++) {
            for (p2 = d2 * h2, v2 = s2.subarray(p2, p2 + h2), m2 = [], g2 = 0; g2 < v2.length; g2++)
              m2.push({ value: v2[g2], index: g2 });
            for (m2.sort(function(t3, e3) {
              return e3.value - t3.value;
            }), f2[d2] = 0, g2 = 0; g2 < o2; g2++)
              if (m2[g2].index === u2[d2]) {
                f2[d2] = 1;
                break;
              }
          }
          return t2 !== n2 && n2.dispose(), e2 !== a2 && a2.dispose(), [2, Fn(f2, a2.shape, "bool")];
      }
    });
  });
};
!function(t2) {
  t2[t2.NONE = 0] = "NONE", t2[t2.MEAN = 1] = "MEAN", t2[t2.SUM = 2] = "SUM", t2[t2.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
}(ch || (ch = {}));
var hh = An({ absoluteDifference_: function(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var o2 = mn(t2, "labels", "absoluteDifference"), a2 = mn(e2, "predictions", "absoluteDifference"), i2 = null;
  null != n2 && (i2 = mn(n2, "weights", "absoluteDifference")), E(o2.shape, a2.shape, "Error in absoluteDifference: ");
  var s2 = o2.sub(a2).abs();
  return fh(s2, i2, r2);
} });
var fh = An({ computeWeightedLoss_: function(t2, e2, n2) {
  void 0 === n2 && (n2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var r2 = mn(t2, "losses", "computeWeightedLoss"), o2 = null;
  null != e2 && (o2 = mn(e2, "weights", "computeWeightedLoss"));
  var a2 = null == o2 ? r2 : r2.mul(o2);
  if (n2 === ch.NONE)
    return a2;
  if (n2 === ch.SUM)
    return a2.sum();
  if (n2 === ch.MEAN) {
    if (null == o2)
      return a2.mean();
    var i2 = r2.size / o2.size, s2 = a2.sum().div(o2.sum());
    return i2 > 1 ? s2.div(On(i2)) : s2;
  }
  if (n2 === ch.SUM_BY_NONZERO_WEIGHTS) {
    if (null == o2)
      return a2.sum().div(On(r2.size));
    var u2 = o2.mul(zn(r2.shape)).notEqual(On(0)).sum().toFloat();
    return a2.sum().div(u2);
  }
  throw Error("Unknown reduction: " + n2);
} });
var dh = An({ cosineDistance_: function(t2, e2, n2, r2, o2) {
  void 0 === o2 && (o2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var a2 = mn(t2, "labels", "cosineDistance"), i2 = mn(e2, "predictions", "cosineDistance"), s2 = null;
  null != r2 && (s2 = mn(r2, "weights", "cosineDistance")), E(a2.shape, i2.shape, "Error in cosineDistance: ");
  var u2 = On(1).sub(a2.mul(i2).sum(n2, true));
  return fh(u2, s2, o2);
} });
var ph = An({ hingeLoss_: function(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var o2 = mn(t2, "labels", "hingeLoss"), a2 = mn(e2, "predictions", "hingeLoss"), i2 = null;
  null != n2 && (i2 = mn(n2, "weights", "hingeLoss")), E(o2.shape, a2.shape, "Error in hingeLoss: ");
  var s2 = On(1);
  o2 = On(2).mul(o2).sub(s2);
  var u2 = s2.sub(o2.mul(a2)).relu();
  return fh(u2, i2, r2);
} });
var vh = An({ huberLoss_: function(t2, e2, n2, r2, o2) {
  void 0 === r2 && (r2 = 1), void 0 === o2 && (o2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var a2 = mn(t2, "labels", "huberLoss"), i2 = mn(e2, "predictions", "huberLoss"), s2 = null;
  null != n2 && (s2 = mn(n2, "weights", "huberLoss")), E(a2.shape, i2.shape, "Error in huberLoss: ");
  var u2 = On(r2), c2 = i2.sub(a2).abs(), l2 = dc(c2, u2), h2 = c2.sub(l2), f2 = On(0.5).mul(l2.square()).add(u2.mul(h2));
  return fh(f2, s2, o2);
} });
var mh = An({ logLoss_: function(t2, e2, n2, r2, o2) {
  void 0 === r2 && (r2 = 1e-7), void 0 === o2 && (o2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var a2 = mn(t2, "labels", "logLoss"), i2 = mn(e2, "predictions", "logLoss"), s2 = null;
  null != n2 && (s2 = mn(n2, "weights", "logLoss")), E(a2.shape, i2.shape, "Error in logLoss: ");
  var u2 = On(1), c2 = On(r2), l2 = a2.mul(i2.add(c2).log()).neg().sub(u2.sub(a2).mul(u2.sub(i2).add(c2).log()));
  return fh(l2, s2, o2);
} });
var gh = An({ meanSquaredError_: function(t2, e2, n2, r2) {
  void 0 === r2 && (r2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var o2 = mn(t2, "labels", "meanSquaredError"), a2 = mn(e2, "predictions", "meanSquaredError"), i2 = null;
  null != n2 && (i2 = mn(n2, "weights", "meanSquaredError")), E(o2.shape, a2.shape, "Error in meanSquaredError: ");
  var s2 = o2.squaredDifference(a2);
  return fh(s2, i2, r2);
} });
var yh = An({ sigmoidCrossEntropy_: function(t2, e2, n2, r2, o2) {
  void 0 === r2 && (r2 = 0), void 0 === o2 && (o2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var a2 = mn(t2, "multiClassLabels", "sigmoidCrossEntropy"), i2 = mn(e2, "logits", "sigmoidCrossEntropy"), s2 = null;
  if (null != n2 && (s2 = mn(n2, "weights", "sigmoidCrossEntropy")), E(a2.shape, i2.shape, "Error in sigmoidCrossEntropy: "), r2 > 0) {
    var u2 = On(r2), c2 = On(1), l2 = On(0.5);
    a2 = a2.mul(c2.sub(u2)).add(l2.mul(u2));
  }
  var h2 = function(t3, e3) {
    var n3 = mn(t3, "labels", "sigmoidCrossEntropyWithLogits"), r3 = mn(e3, "logits", "sigmoidCrossEntropyWithLogits");
    E(n3.shape, r3.shape, "Error in sigmoidCrossEntropyWithLogits: ");
    var o3 = r3.relu(), a3 = r3.mul(n3), i3 = r3.abs().neg().exp().log1p();
    return o3.sub(a3).add(i3);
  }(a2, i2);
  return fh(h2, s2, o2);
} });
var xh = An({ softmaxCrossEntropy_: function(t2, e2, n2, r2, o2) {
  void 0 === r2 && (r2 = 0), void 0 === o2 && (o2 = ch.SUM_BY_NONZERO_WEIGHTS);
  var a2 = mn(t2, "onehotLabels", "softmaxCrossEntropy"), i2 = mn(e2, "logits", "softmaxCrossEntropy"), s2 = null;
  if (null != n2 && (s2 = mn(n2, "weights", "softmaxCrossEntropy")), E(a2.shape, i2.shape, "Error in softmaxCrossEntropy: "), r2 > 0) {
    var u2 = On(r2), c2 = On(1), l2 = On(a2.shape[1]);
    a2 = a2.mul(c2.sub(u2)).add(u2.div(l2));
  }
  var h2 = function(t3, e3, n3) {
    if (void 0 === n3 && (n3 = -1), -1 === n3 && (n3 = e3.rank - 1), n3 !== e3.rank - 1)
      throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + e3.rank + " and dim was " + n3);
    return vo(function(t4, e4, r3) {
      var o3 = e4.logSumExp([n3], true), a3 = e4.toFloat().sub(o3);
      r3([t4, a3]);
      return { value: a3.mul(t4).neg().sum([n3]), gradFunc: function(t5, e5) {
        var r4 = e5[0], o4 = e5[1], a4 = wn(t5.shape, [n3]);
        return [t5.reshape(a4).mul(r4.toFloat().sub(o4.exp())), t5.reshape(a4).mul(o4.exp().sub(r4.toFloat()))];
      } };
    })(t3, e3);
  }(a2, i2);
  return fh(h2, s2, o2);
} });
var bh = Object.freeze({ get Reduction() {
  return ch;
}, absoluteDifference: hh, computeWeightedLoss: fh, cosineDistance: dh, hingeLoss: ph, huberLoss: vh, logLoss: mh, meanSquaredError: gh, sigmoidCrossEntropy: yh, softmaxCrossEntropy: xh });
function wh(t2, e2) {
  return void 0 === e2 && (e2 = false), Lt.tidy(function() {
    if (2 !== t2.shape.length)
      throw new Error("qr2d() requires a 2D Tensor, but got a " + t2.shape.length + "D Tensor.");
    for (var n2 = t2.shape[0], r2 = t2.shape[1], o2 = Cr(n2), a2 = t2.clone(), i2 = Bn([[1]], [1, 1]), s2 = i2.clone(), u2 = n2 >= r2 ? r2 : n2, c2 = function(t3) {
      var e3, u3 = a2, c3 = s2, l3 = o2;
      e3 = Lt.tidy(function() {
        var e4 = a2.slice([t3, t3], [n2 - t3, 1]), u4 = e4.norm(), c4 = a2.slice([t3, t3], [1, 1]), l4 = Bn([[-1]]).where(c4.greater(0), Bn([[1]])), h2 = c4.sub(l4.mul(u4)), f2 = e4.div(h2);
        s2 = 1 === f2.shape[0] ? i2.clone() : i2.concat(f2.slice([1, 0], [f2.shape[0] - 1, f2.shape[1]]), 0);
        var d2 = l4.matMul(h2).div(u4).neg(), p2 = a2.slice([t3, 0], [n2 - t3, r2]), v2 = d2.mul(s2);
        if (0 === t3)
          a2 = p2.sub(v2.matMul(s2.transpose().matMul(p2)));
        else {
          var m2 = p2.sub(v2.matMul(s2.transpose().matMul(p2)));
          a2 = a2.slice([0, 0], [t3, r2]).concat(m2, 0);
        }
        var g2 = o2.slice([0, t3], [n2, o2.shape[1] - t3]);
        if (0 === t3)
          o2 = g2.sub(g2.matMul(s2).matMul(v2.transpose()));
        else {
          var y2 = g2.sub(g2.matMul(s2).matMul(v2.transpose()));
          o2 = o2.slice([0, 0], [n2, t3]).concat(y2, 1);
        }
        return [s2, a2, o2];
      }), s2 = e3[0], a2 = e3[1], o2 = e3[2], tn([u3, c3, l3]);
    }, l2 = 0; l2 < u2; ++l2)
      c2(l2);
    return !e2 && n2 > r2 && (o2 = o2.slice([0, 0], [n2, r2]), a2 = a2.slice([0, 0], [r2, r2])), [o2, a2];
  });
}
var Ch = An({ bandPart_: function(t2, e2, n2) {
  if (e2 % 1 != 0)
    throw new Error("bandPart(): numLower must be an integer, got " + e2 + ".");
  if (n2 % 1 != 0)
    throw new Error("bandPart(): numUpper must be an integer, got " + n2 + ".");
  var r2 = mn(t2, "a", "bandPart");
  if (r2.rank < 2)
    throw new Error("bandPart(): Rank must be at least 2, got " + r2.rank + ".");
  var o2 = r2.shape, a2 = r2.shape.slice(-2), i2 = a2[0], s2 = a2[1];
  if (!(e2 <= i2))
    throw new Error("bandPart(): numLower (" + e2 + ") must not be greater than the number of rows (" + i2 + ").");
  if (!(n2 <= s2))
    throw new Error("bandPart(): numUpper (" + n2 + ") must not be greater than the number of columns (" + s2 + ").");
  e2 < 0 && (e2 = i2), n2 < 0 && (n2 = s2);
  var u2 = Kn(0, i2, 1, "int32").reshape([-1, 1]), c2 = Kn(0, s2, 1, "int32"), l2 = Cc(u2, c2), h2 = Qu(l2.lessEqual(On(+e2, "int32")), l2.greaterEqual(On(-n2, "int32"))), f2 = Gn([i2, s2], r2.dtype);
  return Pr(Ur(r2.reshape([-1, i2, s2])).map(function(t3) {
    return ec(h2, t3, f2);
  })).reshape(o2);
} });
var Eh = An({ gramSchmidt_: function(t2) {
  var e2;
  if (Array.isArray(t2)) {
    e2 = false, C(null != t2 && t2.length > 0, function() {
      return "Gram-Schmidt process: input must not be null, undefined, or empty";
    });
    for (var n2 = t2[0].shape[0], r2 = function(e3) {
      C(t2[e3].shape[0] === n2, function() {
        return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + t2[e3].shape[0] + " vs. " + n2 + ")";
      });
    }, o2 = 1; o2 < t2.length; ++o2)
      r2(o2);
  } else
    e2 = true, t2 = tr(t2, t2.shape[0], 0).map(function(t3) {
      return Br(t3, [0]);
    });
  C(t2.length <= t2[0].shape[0], function() {
    return "Gram-Schmidt: Number of vectors (" + t2.length + ") exceeds number of dimensions (" + t2[0].shape[0] + ").";
  });
  var a2 = [], i2 = t2, s2 = function(t3) {
    a2.push(Lt.tidy(function() {
      var e3 = i2[t3];
      if (t3 > 0)
        for (var n3 = 0; n3 < t3; ++n3) {
          var r3 = Nl(a2[n3].mulStrict(e3)).mul(a2[n3]);
          e3 = e3.sub(r3);
        }
      return e3.div(Vl(e3, "euclidean"));
    }));
  };
  for (o2 = 0; o2 < t2.length; ++o2)
    s2(o2);
  return e2 ? Pr(a2, 0) : a2;
} });
var Rh = An({ qr_: function(t2, e2) {
  if (void 0 === e2 && (e2 = false), t2.rank < 2)
    throw new Error("qr() requires input tensor to have a rank >= 2, but got rank " + t2.rank);
  if (2 === t2.rank)
    return wh(t2, e2);
  var n2 = t2.shape.slice(0, t2.shape.length - 2).reduce(function(t3, e3) {
    return t3 * e3;
  }), r2 = Ur(t2.reshape([n2, t2.shape[t2.shape.length - 2], t2.shape[t2.shape.length - 1]]), 0), o2 = [], a2 = [];
  return r2.forEach(function(t3) {
    var n3 = wh(t3, e2), r3 = n3[0], i2 = n3[1];
    o2.push(r3), a2.push(i2);
  }), [Pr(o2, 0).reshape(t2.shape), Pr(a2, 0).reshape(t2.shape)];
} });
var Ih = Object.freeze({ bandPart: Ch, gramSchmidt: Eh, qr: Rh });
function kh(t2, e2, n2, r2, o2, a2) {
  null == r2 && (r2 = 0.5), null == o2 && (o2 = Number.NEGATIVE_INFINITY), null == a2 && (a2 = 0);
  var i2 = t2.shape[0];
  return n2 = Math.min(n2, i2), C(0 <= r2 && r2 <= 1, function() {
    return "iouThreshold must be in [0, 1], but was '" + r2 + "'";
  }), C(2 === t2.rank, function() {
    return "boxes must be a 2D tensor, but was of rank '" + t2.rank + "'";
  }), C(4 === t2.shape[1], function() {
    return "boxes must have 4 columns, but 2nd dimension was " + t2.shape[1];
  }), C(1 === e2.rank, function() {
    return "scores must be a 1D tensor";
  }), C(e2.shape[0] === i2, function() {
    return "scores has incompatible shape with boxes. Expected " + i2 + ", but was " + e2.shape[0];
  }), C(0 <= a2 && a2 <= 1, function() {
    return "softNmsSigma must be in [0, 1], but was '" + a2 + "'";
  }), { maxOutputSize: n2, iouThreshold: r2, scoreThreshold: o2, softNmsSigma: a2 };
}
var Sh = An({ resizeBilinear_: function(t2, e2, n2) {
  void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "images", "resizeBilinear");
  C(3 === r2.rank || 4 === r2.rank, function() {
    return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + r2.rank + ".";
  }), C(2 === e2.length, function() {
    return "Error in resizeBilinear: new shape must 2D, but got shape " + e2 + ".";
  });
  var o2 = r2, a2 = false;
  3 === r2.rank && (a2 = true, o2 = r2.as4D(1, r2.shape[0], r2.shape[1], r2.shape[2]));
  var i2 = e2[0], s2 = e2[1], u2 = Lt.runKernelFunc(function(t3, e3) {
    return e3([o2]), t3.resizeBilinear(o2, i2, s2, n2);
  }, { x: o2 }, function(t3, e3) {
    return { x: function() {
      return Lt.runKernelFunc(function(r3) {
        return r3.resizeBilinearBackprop(t3, e3[0], n2);
      }, {});
    } };
  }, "ResizeBilinear", { alignCorners: n2, newHeight: i2, newWidth: s2 });
  return a2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
} });
var Ah = An({ resizeNearestNeighbor_: function(t2, e2, n2) {
  void 0 === n2 && (n2 = false);
  var r2 = mn(t2, "images", "resizeNearestNeighbor");
  C(3 === r2.rank || 4 === r2.rank, function() {
    return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + r2.rank + ".";
  }), C(2 === e2.length, function() {
    return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + e2 + ".";
  }), C("float32" === r2.dtype || "int32" === r2.dtype, function() {
    return "`images` must have `int32` or `float32` as dtype";
  });
  var o2 = r2, a2 = false;
  3 === r2.rank && (a2 = true, o2 = r2.as4D(1, r2.shape[0], r2.shape[1], r2.shape[2]));
  var i2 = e2[0], s2 = e2[1], u2 = Lt.runKernelFunc(function(t3, e3) {
    return e3([o2]), t3.resizeNearestNeighbor(o2, i2, s2, n2);
  }, { batchImages: o2 }, function(t3, e3) {
    return { batchImages: function() {
      return Lt.runKernelFunc(function(r3) {
        return r3.resizeNearestNeighborBackprop(t3, e3[0], n2);
      }, {});
    } };
  });
  return a2 ? u2.as3D(u2.shape[1], u2.shape[2], u2.shape[3]) : u2;
} });
var Dh = An({ nonMaxSuppression_: function(t2, e2, n2, r2, o2) {
  void 0 === r2 && (r2 = 0.5), void 0 === o2 && (o2 = Number.NEGATIVE_INFINITY);
  var a2 = mn(t2, "boxes", "nonMaxSuppression"), i2 = mn(e2, "scores", "nonMaxSuppression"), s2 = kh(a2, i2, n2, r2, o2);
  n2 = s2.maxOutputSize, r2 = s2.iouThreshold, o2 = s2.scoreThreshold;
  var u2 = { maxOutputSize: n2, iouThreshold: r2, scoreThreshold: o2 };
  return Lt.runKernelFunc(function(t3) {
    return t3.nonMaxSuppression(a2, i2, n2, r2, o2);
  }, { boxes: a2, scores: i2 }, null, "NonMaxSuppressionV3", u2);
} });
var Th = function(t2, e2, o2, a2, i2) {
  return void 0 === a2 && (a2 = 0.5), void 0 === i2 && (i2 = Number.NEGATIVE_INFINITY), n(this, void 0, void 0, function() {
    var n2, s2, u2, c2, l2, h2, f2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          return n2 = mn(t2, "boxes", "nonMaxSuppressionAsync"), s2 = mn(e2, "scores", "nonMaxSuppressionAsync"), u2 = kh(n2, s2, o2, a2, i2), o2 = u2.maxOutputSize, a2 = u2.iouThreshold, i2 = u2.scoreThreshold, [4, Promise.all([n2.data(), s2.data()])];
        case 1:
          return c2 = r2.sent(), l2 = c2[0], h2 = c2[1], f2 = jo(l2, h2, o2, a2, i2), n2 !== t2 && n2.dispose(), s2 !== e2 && s2.dispose(), [2, f2];
      }
    });
  });
};
var Nh = An({ nonMaxSuppressionWithScore_: function(t2, e2, n2, r2, o2, a2) {
  void 0 === r2 && (r2 = 0.5), void 0 === o2 && (o2 = Number.NEGATIVE_INFINITY), void 0 === a2 && (a2 = 0);
  var i2 = mn(t2, "boxes", "nonMaxSuppression"), s2 = mn(e2, "scores", "nonMaxSuppression"), u2 = kh(i2, s2, n2, r2, o2, a2), c2 = { maxOutputSize: n2 = u2.maxOutputSize, iouThreshold: r2 = u2.iouThreshold, scoreThreshold: o2 = u2.scoreThreshold, softNmsSigma: a2 = u2.softNmsSigma }, l2 = Lt.runKernel("NonMaxSuppressionV5", { boxes: i2, scores: s2 }, c2);
  return { selectedIndices: l2[0], selectedScores: l2[1] };
} });
var Fh = function(t2, e2, o2, a2, i2, s2) {
  return void 0 === a2 && (a2 = 0.5), void 0 === i2 && (i2 = Number.NEGATIVE_INFINITY), void 0 === s2 && (s2 = 0), n(this, void 0, void 0, function() {
    var n2, u2, c2, l2, h2, f2, d2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          return n2 = mn(t2, "boxes", "nonMaxSuppressionAsync"), u2 = mn(e2, "scores", "nonMaxSuppressionAsync"), c2 = kh(n2, u2, o2, a2, i2, s2), o2 = c2.maxOutputSize, a2 = c2.iouThreshold, i2 = c2.scoreThreshold, s2 = c2.softNmsSigma, [4, Promise.all([n2.data(), u2.data()])];
        case 1:
          return l2 = r2.sent(), h2 = l2[0], f2 = l2[1], d2 = Xo(h2, f2, o2, a2, i2, s2), n2 !== t2 && n2.dispose(), u2 !== e2 && u2.dispose(), [2, d2];
      }
    });
  });
};
var _h = An({ cropAndResize_: function(t2, e2, n2, r2, o2, a2) {
  var i2 = mn(t2, "image", "cropAndResize"), s2 = mn(e2, "boxes", "cropAndResize", "float32"), u2 = mn(n2, "boxInd", "cropAndResize", "int32");
  o2 = o2 || "bilinear", a2 = a2 || 0;
  var c2 = s2.shape[0];
  return C(4 === i2.rank, function() {
    return "Error in cropAndResize: image must be rank 4,but got rank " + i2.rank + ".";
  }), C(2 === s2.rank && 4 === s2.shape[1], function() {
    return "Error in cropAndResize: boxes must be have size [" + c2 + ",4] but had shape " + s2.shape + ".";
  }), C(1 === u2.rank && u2.shape[0] === c2, function() {
    return "Error in cropAndResize: boxInd must be have size [" + c2 + "] but had shape " + s2.shape + ".";
  }), C(2 === r2.length, function() {
    return "Error in cropAndResize: cropSize must be of length 2, but got length " + r2.length + ".";
  }), C(r2[0] >= 1 && r2[1] >= 1, function() {
    return "cropSize must be atleast [1,1], but was " + r2;
  }), C("bilinear" === o2 || "nearest" === o2, function() {
    return "method must be bilinear or nearest, but was " + o2;
  }), Lt.runKernelFunc(function(t3, e3) {
    return t3.cropAndResize(i2, s2, u2, r2, o2, a2);
  }, { images: i2, boxes: s2, boxInd: u2 }, null, "CropAndResize", { method: o2, extrapolationValue: a2, cropSize: r2 });
} });
var Oh = Object.freeze({ resizeBilinear: Sh, resizeNearestNeighbor: Ah, nonMaxSuppression: Dh, nonMaxSuppressionAsync: Th, nonMaxSuppressionWithScore: Nh, nonMaxSuppressionWithScoreAsync: Fh, cropAndResize: _h });
var Mh = function(t2, e2) {
  return !(t2 > 0) || "linear" === e2;
};
var Bh = function(t2, e2, n2) {
  if (null == n2 || "linear" === n2)
    return t2;
  if ("relu" === n2)
    return t2.mul(e2.step());
  throw new Error("Gradient for activation " + n2 + " has not been implemented yet.");
};
var Ph = function(t2, e2) {
  var n2 = e2, r2 = Eo(t2.shape, e2.shape);
  return r2.length > 0 && (n2 = n2.sum(r2)), n2.reshape(t2.shape);
};
var Lh = function(t2, e2, n2) {
  if ("linear" === e2)
    return t2;
  if ("relu" === e2)
    return Bl(t2);
  if ("elu" === e2)
    return _l(t2);
  if ("relu6" === e2)
    return Pl(t2);
  if ("prelu" === e2)
    return Ml(t2, n2);
  throw new Error("Unknown fused activation " + e2 + ".");
};
var Wh = An({ fusedMatMul_: function(t2) {
  var e2, n2 = t2.a, r2 = t2.b, o2 = t2.transposeA, a2 = void 0 !== o2 && o2, i2 = t2.transposeB, s2 = void 0 !== i2 && i2, u2 = t2.bias, c2 = t2.activation, l2 = void 0 === c2 ? "linear" : c2, h2 = t2.preluActivationWeights;
  if (false === Mh(Lt.state.gradientDepth, l2)) {
    var f2 = el(n2, r2, a2, s2);
    return null != u2 && (f2 = rc(f2, u2)), Lh(f2, l2, h2);
  }
  var d2 = mn(n2, "a", "fused matMul"), p2 = mn(r2, "b", "fused matMul");
  e2 = Nt(d2, p2), d2 = e2[0], p2 = e2[1];
  var v2 = a2 ? d2.shape[d2.rank - 2] : d2.shape[d2.rank - 1], m2 = s2 ? p2.shape[p2.rank - 1] : p2.shape[p2.rank - 2], g2 = a2 ? d2.shape[d2.rank - 1] : d2.shape[d2.rank - 2], y2 = s2 ? p2.shape[p2.rank - 2] : p2.shape[p2.rank - 1], x2 = d2.shape.slice(0, -2), b2 = p2.shape.slice(0, -2), w2 = k(x2), E2 = k(b2);
  C(d2.rank >= 2 && p2.rank >= 2 && d2.rank === p2.rank, function() {
    return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks " + d2.rank + " and " + p2.rank + ".";
  }), C(S(x2, b2), function() {
    return "Error in fused matMul: outer dimensions (" + x2 + ") and (" + b2 + ") of Tensors with shapes " + d2.shape + " and " + p2.shape + " must match.";
  }), C(v2 === m2, function() {
    return "Error in fused matMul: inner shapes (" + v2 + ") and (" + m2 + ") of Tensors with shapes " + d2.shape + " and " + p2.shape + " and transposeA=" + a2 + " and transposeB=" + s2 + " must match.";
  });
  var R2, I2, A2 = d2.shape.slice(0, -2).concat([g2, y2]), D2 = a2 ? d2.as3D(w2, v2, g2) : d2.as3D(w2, g2, v2), T2 = s2 ? p2.as3D(E2, y2, m2) : p2.as3D(E2, m2, y2);
  null != u2 && Ro(A2, (R2 = Nt(R2 = mn(u2, "bias", "fused matMul"), d2)[0]).shape), null != h2 && (I2 = mn(h2, "prelu weights", "fused matMul"));
  var N2 = { a: D2, b: T2 };
  null != u2 && (N2.bias = R2), null != h2 && (N2.preluActivationWeights = I2);
  var F2 = [D2, T2];
  return Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.fusedBatchMatMul({ a: D2, b: T2, transposeA: a2, transposeB: s2, bias: R2, activation: l2, preluActivationWeights: I2 });
    return e3([D2, T2, n3]), n3;
  }, N2, function(t3, e3) {
    var n3 = e3[0], r3 = e3[1], o3 = e3[2], i3 = Bh(t3, o3, l2), c3 = {};
    return null != u2 && (c3 = { bias: function() {
      return Ph(R2, i3);
    } }), a2 || s2 ? !a2 && s2 ? Object.assign({ a: function() {
      return i3.matMul(r3, false, false);
    }, b: function() {
      return i3.matMul(n3, true, false);
    } }, c3) : a2 && !s2 ? Object.assign({ a: function() {
      return r3.matMul(i3, false, true);
    }, b: function() {
      return n3.matMul(i3, false, false);
    } }, c3) : Object.assign({ a: function() {
      return r3.matMul(i3, true, true);
    }, b: function() {
      return i3.matMul(n3, true, true);
    } }, c3) : Object.assign({ a: function() {
      return i3.matMul(r3, false, true);
    }, b: function() {
      return n3.matMul(i3, true, false);
    } }, c3);
  }, "_FusedMatMul", { transposeA: a2, transposeB: s2, activation: l2 }, F2, [true]).reshape(A2);
} });
var Uh = An({ fusedConv2d_: function(t2) {
  var e2 = t2.x, n2 = t2.filter, r2 = t2.strides, o2 = t2.pad, a2 = t2.dataFormat, i2 = void 0 === a2 ? "NHWC" : a2, s2 = t2.dilations, u2 = void 0 === s2 ? [1, 1] : s2, c2 = t2.dimRoundingMode, l2 = t2.bias, h2 = t2.activation, f2 = void 0 === h2 ? "linear" : h2, d2 = t2.preluActivationWeights;
  if (f2 = f2 || "linear", false === Mh(Lt.state.gradientDepth, f2)) {
    var p2 = qc(e2, n2, r2, o2, i2, u2, c2);
    return null != l2 && (p2 = rc(p2, l2)), Lh(p2, f2, d2);
  }
  var v2 = mn(e2, "x", "conv2d"), m2 = mn(n2, "filter", "conv2d"), g2 = v2, y2 = false;
  3 === v2.rank && (y2 = true, g2 = v2.as4D(1, v2.shape[0], v2.shape[1], v2.shape[2])), C(4 === g2.rank, function() {
    return "Error in fused conv2d: input must be rank 4, but got rank " + g2.rank + ".";
  }), C(4 === m2.rank, function() {
    return "Error in fused conv2d: filter must be rank 4, but got rank " + m2.rank + ".";
  }), null != c2 && C(A(o2), function() {
    return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode " + c2 + " but got pad " + o2 + ".";
  }), C(g2.shape[3] === m2.shape[2], function() {
    return "Error in conv2d: depth of input (" + g2.shape[3] + ") must match input depth for filter " + m2.shape[2] + ".";
  }), C(Mo(r2, u2), function() {
    return "Error in conv2D: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + u2 + "'";
  }), C("NHWC" === i2, function() {
    return "Error in conv2d: got dataFormat of " + i2 + " but only NHWC is currently supported.";
  });
  var x2, b2, w2 = So(g2.shape, m2.shape, r2, u2, o2, c2);
  null != l2 && (x2 = Nt(x2 = mn(l2, "bias", "fused conv2d"), v2)[0], Ro(w2.outShape, x2.shape)), null != d2 && (b2 = mn(d2, "prelu weights", "fused conv2d"));
  var E2 = { x: g2, filter: m2 };
  null != l2 && (E2.bias = x2), null != d2 && (E2.preluActivationWeights = b2);
  var R2 = [m2, g2], I2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.fusedConv2d({ input: g2, filter: m2, convInfo: w2, bias: x2, activation: f2, preluActivationWeights: b2 });
    return e3([m2, g2, n3]), n3;
  }, E2, function(t3, e3) {
    var n3 = e3, a3 = n3[0], i3 = n3[1], s3 = n3[2], c3 = Bh(t3, s3, f2);
    C(Oo(u2), function() {
      return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u2 + "'";
    });
    var h3 = {};
    return null != l2 && (h3 = { bias: function() {
      return Ph(x2, c3);
    } }), Object.assign({ x: function() {
      return Xc(i3.shape, c3, a3, r2, o2);
    }, filter: function() {
      return jc(i3, c3, a3.shape, r2, o2);
    } }, h3);
  }, "FusedConv2D", { convInfo: w2, activation: f2 }, R2, [true]);
  return y2 ? I2.as3D(I2.shape[1], I2.shape[2], I2.shape[3]) : I2;
} });
var Vh = An({ fusedDepthwiseConv2d_: function(t2) {
  var e2 = t2.x, n2 = t2.filter, r2 = t2.strides, o2 = t2.pad, a2 = t2.dataFormat, i2 = void 0 === a2 ? "NHWC" : a2, s2 = t2.dilations, u2 = void 0 === s2 ? [1, 1] : s2, c2 = t2.dimRoundingMode, l2 = t2.bias, h2 = t2.activation, f2 = void 0 === h2 ? "linear" : h2, d2 = t2.preluActivationWeights;
  if (false === Mh(Lt.state.gradientDepth, f2)) {
    var p2 = Yc(e2, n2, r2, o2, i2, u2, c2);
    return null != l2 && (p2 = rc(p2, l2)), Lh(p2, f2, d2);
  }
  var v2 = mn(e2, "x", "depthwiseConv2d"), m2 = mn(n2, "filter", "depthwiseConv2d"), g2 = v2, y2 = false;
  3 === v2.rank && (y2 = true, g2 = v2.as4D(1, v2.shape[0], v2.shape[1], v2.shape[2])), C(4 === g2.rank, function() {
    return "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + g2.rank + ".";
  }), C(4 === m2.rank, function() {
    return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + m2.rank + ".";
  }), C(g2.shape[3] === m2.shape[2], function() {
    return "Error in fused depthwiseConv2d: number of input channels (" + g2.shape[3] + ") must match the inChannels dimension in filter " + m2.shape[2] + ".";
  }), null == u2 && (u2 = [1, 1]), C(Mo(r2, u2), function() {
    return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + r2 + " and dilations '" + u2 + "'";
  }), null != c2 && C(A(o2), function() {
    return "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode " + c2 + " but got pad " + o2 + ".";
  });
  var x2, b2, w2 = So(g2.shape, m2.shape, r2, u2, o2, c2, true);
  null != l2 && (x2 = Nt(x2 = mn(l2, "bias", "fused conv2d"), v2)[0], Ro(w2.outShape, x2.shape)), null != d2 && (b2 = mn(d2, "prelu weights", "fused depthwiseConv2d"));
  var E2 = { x: g2, filter: m2 };
  null != l2 && (E2.bias = x2), null != d2 && (E2.preluActivationWeights = b2);
  var R2 = [m2, g2], I2 = Lt.runKernelFunc(function(t3, e3) {
    var n3 = t3.fusedDepthwiseConv2D({ input: g2, filter: m2, convInfo: w2, bias: x2, activation: f2, preluActivationWeights: b2 });
    return e3([m2, g2, n3]), n3;
  }, E2, function(t3, e3) {
    C(Oo(u2), function() {
      return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + u2 + "'";
    });
    var n3 = e3[0], r3 = e3[1], o3 = e3[2], a3 = Bh(t3, o3, f2), i3 = {};
    return null != l2 && (i3 = { bias: function() {
      return Ph(x2, a3);
    } }), Object.assign({ x: function() {
      return $c(r3.shape, a3, n3, w2);
    }, filter: function() {
      return Qc(r3, a3, n3.shape, w2);
    } }, i3);
  }, "FusedDepthwiseConv2D", { convInfo: w2, activation: f2 }, R2, [true]);
  return y2 ? I2.as3D(I2.shape[1], I2.shape[2], I2.shape[3]) : I2;
} });
var zh = Object.freeze({ matMul: Wh, conv2d: Uh, depthwiseConv2d: Vh });
var Gh = Object.freeze({ image: Oh, linalg: Ih, losses: bh, spectral: Jl, fused: zh, signal: uh, square: tu, squaredDifference: nu, conv1d: Hc, conv2d: qc, conv3d: Kc, depthwiseConv2d: Yc, separableConv2d: Jc, conv2dTranspose: Zc, conv3dTranspose: tl, op: An, batchNormalization2d: Gu, batchNormalization3d: Hu, batchNormalization4d: qu, batchNormalization: Ku, batchNorm: ju, batchNorm2d: Xu, batchNorm3d: Yu, batchNorm4d: $u, booleanMaskAsync: Uc, complex: Dn, real: Tn, imag: Nn, concat: Yn, concat1d: $n, concat2d: Qn, concat3d: Jn, concat4d: Zn, split: tr, matMul: el, dot: nl, outerProduct: rl, reverse: ol, reverse1d: al, reverse2d: il, reverse3d: sl, reverse4d: ul, maxPool: hl, avgPool: fl, pool: dl, maxPool3d: pl, avgPool3d: vl, slice: ml, slice1d: gl, slice2d: yl, slice3d: xl, slice4d: bl, abs: ru, acos: ou, acosh: au, asin: iu, asinh: su, atan: uu, atanh: cu, ceil: lu, clipByValue: hu, cos: fu, cosh: du, erf: pu, exp: vu, expm1: mu, floor: gu, log: yu, log1p: xu, logSigmoid: bu, neg: wu, reciprocal: Cu, round: Eu, rsqrt: Ru, sigmoid: Iu, sign: ku, isNaN: Su, isInf: Au, isFinite: Du, sin: Tu, sinh: Nu, softplus: Fu, sqrt: _u, step: Ou, tan: Mu, tanh: Bu, all: Cl, any: El, argMax: Rl, argMin: Il, logSumExp: kl, max: Sl, mean: Al, min: Dl, moments: Tl, sum: Nl, prod: Fl, equal: Rc, equalStrict: Ic, greater: kc, greaterEqual: Sc, greaterEqualStrict: Ac, greaterStrict: Dc, less: Tc, lessEqual: Nc, lessEqualStrict: Fc, lessStrict: _c, notEqual: Oc, notEqualStrict: Mc, add: rc, addN: oc, addStrict: ac, atan2: ic, div: sc, divNoNan: uc, divStrict: cc, floorDiv: lc, maximum: hc, maximumStrict: fc, minimum: dc, minimumStrict: pc, mod: vc, modStrict: mc, mul: gc, mulStrict: yc, pow: xc, powStrict: bc, squaredDifferenceStrict: wc, sub: Cc, subStrict: Ec, elu: _l, leakyRelu: Ol, prelu: Ml, relu: Bl, relu6: Pl, selu: Ll, logicalAnd: Qu, logicalNot: Ju, logicalOr: Zu, logicalXor: tc, where: ec, whereAsync: nc, buffer: dr, print: pr, batchToSpaceND: vr, broadcastTo: mr, cast: gr, clone: yr, cumsum: xr, depthToSpace: br, expandDims: wr, eye: Cr, multinomial: Er, oneHot: Rr, pad: Ir, pad1d: kr, pad2d: Sr, pad3d: Ar, pad4d: Dr, rand: Tr, randomNormal: Nr, randomGamma: Fr, randomUniform: _r, reshape: Or, spaceToBatchND: Mr, squeeze: Br, stack: Pr, tile: Lr, truncatedNormal: Wr, unstack: Ur, setdiff1dAsync: Vr, fill: Hn, linspace: qn, ones: zn, range: Kn, scalar: On, tensor: Fn, tensor1d: Mn, tensor2d: Bn, tensor3d: Pn, tensor4d: Ln, tensor5d: Wn, tensor6d: Un, variable: Vn, zeros: Gn, onesLike: jn, zerosLike: Xn, transpose: Wl, softmax: go, logSoftmax: yo, localResponseNormalization: Ul, norm: Vl, gather: Lc, unsortedSegmentSum: Wc, basicLSTMCell: zl, multiRNNCell: Gl, movingAverage: Hl, stridedSlice: ql, topk: Kl, scatterND: jl, fft: Xl, ifft: Yl, rfft: $l, irfft: Ql, sparseToDense: Zl, gatherND: th, diag: eh, dropout: nh, hannWindow: oh, hammingWindow: ah, frame: ih, stft: sh, inTopKAsync: lh });
function Hh(t2, e2) {
  Array.isArray(t2) || (t2 = [t2]), t2.forEach(function(t3) {
    null != t3 && C("complex64" !== t3.dtype, function() {
      return e2 + " does not support complex64 tensors.";
    });
  });
}
function qh(t2, e2, n2, r2) {
  if ("linear" === n2)
    return t2.linear(e2);
  if ("relu" === n2)
    return t2.relu(e2);
  if ("elu" === n2)
    return t2.elu(e2);
  if ("relu6" === n2)
    return t2.relu6(e2);
  if ("prelu" === n2)
    return t2.prelu(e2, r2);
  throw new Error("Activation " + n2 + " has not been implemented for the CPU backend.");
}
var Kh = function(t2) {
  function o2() {
    var e2 = t2.call(this) || this;
    return e2.blockSize = 48, e2.firstUse = true, e2.data = new xo(e2, Lt), e2;
  }
  return e(o2, t2), o2.prototype.write = function(t3, e2, n2) {
    this.firstUse && (this.firstUse = false, i().get("IS_NODE") && dn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));
    var r2 = {};
    return this.data.set(r2, { values: t3, dtype: n2 }), r2;
  }, o2.prototype.move = function(t3, e2, n2, r2) {
    this.data.set(t3, { values: e2, dtype: r2 });
  }, o2.prototype.numDataIds = function() {
    return this.data.numDataIds();
  }, o2.prototype.read = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(e2) {
        return [2, this.readSync(t3)];
      });
    });
  }, o2.prototype.readSync = function(t3) {
    var e2 = this.data.get(t3), n2 = e2.dtype, r2 = e2.complexTensors;
    return "complex64" === n2 ? Vo(this.readSync(r2.real.dataId), this.readSync(r2.imag.dataId)) : this.data.get(t3).values;
  }, o2.prototype.bufferSync = function(t3) {
    var e2 = this.readSync(t3.dataId), n2 = e2;
    if ("string" === t3.dtype)
      try {
        n2 = e2.map(function(t4) {
          return ot(t4);
        });
      } catch (t4) {
        throw new Error("Failed to decode encoded string bytes into utf-8");
      }
    return dr(t3.shape, t3.dtype, n2);
  }, o2.prototype.makeOutput = function(t3, e2, n2) {
    var r2 = this.write(t3, e2, n2);
    return Lt.makeTensorFromDataId(r2, e2, n2, this);
  }, o2.prototype.disposeData = function(t3) {
    if (this.data.has(t3)) {
      var e2 = this.data.get(t3).complexTensors;
      null != e2 && (e2.real.dispose(), e2.imag.dispose()), this.data.delete(t3);
    }
  }, o2.prototype.time = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2;
      return r(this, function(n2) {
        return e2 = et(), t3(), [2, { kernelMs: et() - e2 }];
      });
    });
  }, o2.prototype.memory = function() {
    return { unreliable: true, reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."] };
  }, o2.prototype.complex = function(t3, e2) {
    var n2 = this.makeOutput(null, t3.shape, "complex64");
    return this.data.get(n2.dataId).complexTensors = { real: Lt.keep(t3.clone()), imag: Lt.keep(e2.clone()) }, n2;
  }, o2.prototype.real = function(t3) {
    return this.data.get(t3.dataId).complexTensors.real.clone();
  }, o2.prototype.imag = function(t3) {
    return this.data.get(t3.dataId).complexTensors.imag.clone();
  }, o2.prototype.slice = function(t3, e2, n2) {
    if (Hh(t3, "slice"), io(t3.shape, e2, n2)) {
      var r2 = so(e2, t3.strides), o3 = k(n2);
      return Fn(this.readSync(t3.dataId).subarray(r2, r2 + o3), n2, t3.dtype);
    }
    for (var a2 = dr(n2, t3.dtype), i2 = this.bufferSync(t3), s2 = 0; s2 < a2.size; ++s2) {
      var u2 = a2.indexToLoc(s2).map(function(t4, n3) {
        return t4 + e2[n3];
      });
      a2.values[s2] = i2.get.apply(i2, u2);
    }
    return a2.toTensor();
  }, o2.prototype.stridedSlice = function(t3, e2, n2, r2) {
    Hh(t3, "stridedSlice");
    var o3 = ro(e2, n2, r2);
    if (o3.some(function(t4) {
      return 0 === t4;
    }))
      return Fn([], o3);
    for (var a2 = dr(o3, t3.dtype), i2 = this.bufferSync(t3), s2 = 0; s2 < a2.size; s2++) {
      for (var u2 = a2.indexToLoc(s2), c2 = new Array(u2.length), l2 = 0; l2 < c2.length; l2++)
        c2[l2] = u2[l2] * r2[l2] + e2[l2];
      a2.set.apply(a2, [i2.get.apply(i2, c2)].concat(u2));
    }
    return a2.toTensor();
  }, o2.prototype.diag = function(t3) {
    for (var e2 = this.readSync(t3.dataId), n2 = dr([t3.size, t3.size], t3.dtype), r2 = n2.values, o3 = 0; o3 < e2.length; o3++)
      r2[o3 * t3.size + o3] = e2[o3];
    return n2.toTensor();
  }, o2.prototype.unstack = function(t3, e2) {
    for (var n2 = t3.shape[e2], r2 = new Array(t3.rank - 1), o3 = 0, a2 = 0; a2 < t3.rank; a2++)
      a2 !== e2 && (r2[o3++] = t3.shape[a2]);
    var i2 = new Array(t3.rank).fill(0), s2 = t3.shape.slice();
    s2[e2] = 1;
    var u2 = new Array(n2);
    for (a2 = 0; a2 < u2.length; a2++)
      i2[e2] = a2, u2[a2] = this.slice(t3, i2, s2).reshape(r2);
    return u2;
  }, o2.prototype.reverse = function(t3, e2) {
    Hh(t3, "reverse");
    for (var n2 = dr(t3.shape, t3.dtype), r2 = this.bufferSync(t3), o3 = function(o4) {
      var a3 = n2.indexToLoc(o4), i2 = a3.slice();
      e2.forEach(function(e3) {
        return i2[e3] = t3.shape[e3] - 1 - i2[e3];
      }), n2.set.apply(n2, [r2.get.apply(r2, i2)].concat(a3));
    }, a2 = 0; a2 < n2.size; a2++)
      o3(a2);
    return n2.toTensor();
  }, o2.prototype.concat = function(t3, e2) {
    var n2 = this;
    if ("complex64" === t3[0].dtype) {
      var r2 = t3.map(function(t4) {
        return Tn(t4);
      }), o3 = t3.map(function(t4) {
        return Nn(t4);
      });
      return Dn(this.concat(r2, e2), this.concat(o3, e2));
    }
    var a2 = t3.map(function(t4) {
      var n3 = k(t4.shape.slice(e2));
      return t4.as2D(-1, n3);
    }), i2 = Sn(a2.map(function(t4) {
      return t4.shape;
    }), 1), s2 = dr(i2, t3[0].dtype).values;
    if (1 === a2[0].shape[0]) {
      var u2 = 0;
      a2.forEach(function(t4) {
        s2.set(n2.readSync(t4.dataId), u2), u2 += t4.size;
      });
    } else {
      var c2 = 0;
      a2.forEach(function(t4) {
        for (var e3 = n2.readSync(t4.dataId), r3 = 0, o4 = 0; o4 < t4.shape[0]; ++o4)
          for (var a3 = o4 * i2[1] + c2, u3 = 0; u3 < t4.shape[1]; ++u3)
            s2[a3 + u3] = e3[r3++];
        c2 += t4.shape[1];
      });
    }
    var l2 = Sn(t3.map(function(t4) {
      return t4.shape;
    }), e2);
    return Fn(s2, l2, t3[0].dtype);
  }, o2.prototype.neg = function(t3) {
    return Hh(t3, "neg"), this.multiply(On(-1), t3);
  }, o2.prototype.add = function(t3, e2) {
    return "complex64" === t3.dtype || "complex64" === e2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), e2.cast("complex64"), function(t4, e3, n2, r2) {
      return { real: t4 + n2, imag: e3 + r2 };
    }) : this.broadcastedBinaryOp(t3, e2, Dt(t3.dtype, e2.dtype), function(t4, e3) {
      return t4 + e3;
    });
  }, o2.prototype.addN = function(t3) {
    var e2 = this;
    Hh(t3, "addN");
    for (var n2 = t3.map(function(t4) {
      return e2.readSync(t4.dataId);
    }), r2 = dr(t3[0].shape, t3[0].dtype), o3 = r2.values, a2 = 0; a2 < t3.length; a2++)
      for (var i2 = n2[a2], s2 = 0; s2 < o3.length; s2++)
        o3[s2] += i2[s2];
    return r2.toTensor();
  }, o2.prototype.softmax = function(t3, e2) {
    var n2 = O([e2], t3.shape), r2 = this.max(t3, n2), o3 = wn(r2.shape, n2), a2 = this.subtract(t3, r2.reshape(o3)), i2 = this.exp(a2), s2 = this.sum(i2, n2).reshape(o3);
    return this.realDivide(i2, s2);
  }, o2.prototype.subtract = function(t3, e2) {
    return "complex64" === t3.dtype || "complex64" === e2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), e2.cast("complex64"), function(t4, e3, n2, r2) {
      return { real: t4 - n2, imag: e3 - r2 };
    }) : this.broadcastedBinaryOp(t3, e2, Dt(t3.dtype, e2.dtype), function(t4, e3) {
      return t4 - e3;
    });
  }, o2.prototype.pow = function(t3, e2) {
    return Hh([t3, e2], "pow"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
      return Math.pow(t4, e3);
    });
  }, o2.prototype.batchMatMul = function(t3, e2, n2, r2) {
    Hh([t3, e2], "matMul");
    for (var o3 = n2 ? t3.shape[1] : t3.shape[2], a2 = n2 ? t3.shape[2] : t3.shape[1], i2 = r2 ? e2.shape[1] : e2.shape[2], s2 = t3.shape[0], u2 = this.readSync(t3.dataId), c2 = this.readSync(e2.dataId), l2 = n2 ? [t3.strides[0], 1, t3.strides[1]] : [t3.strides[0], t3.strides[1], 1], h2 = l2[0], f2 = l2[1], d2 = l2[2], p2 = r2 ? [1, e2.strides[1], e2.strides[0]] : [e2.strides[1], 1, e2.strides[0]], v2 = p2[0], m2 = p2[1], g2 = p2[2], y2 = a2 * i2, x2 = dr([s2, a2, i2], t3.dtype), b2 = x2.values, w2 = this.blockSize, C2 = 0; C2 < s2; C2++)
      for (var E2 = 0; E2 < a2; E2 += w2)
        for (var R2 = 0; R2 < i2; R2 += w2)
          for (var I2 = 0; I2 < o3; I2 += w2)
            for (var k2 = Math.min(E2 + w2, a2), S2 = Math.min(R2 + w2, i2), A2 = Math.min(I2 + w2, o3), D2 = E2; D2 < k2; D2++)
              for (var T2 = R2; T2 < S2; T2++) {
                for (var N2 = 0, F2 = I2; F2 < A2; F2++)
                  N2 += u2[C2 * h2 + D2 * f2 + F2 * d2] * c2[F2 * v2 + T2 * m2 + C2 * g2];
                b2[C2 * y2 + (D2 * i2 + T2)] += N2;
              }
    return x2.toTensor();
  }, o2.prototype.fusedBatchMatMul = function(t3) {
    var e2 = t3.a, n2 = t3.b, r2 = t3.transposeA, o3 = t3.transposeB, a2 = t3.bias, i2 = t3.activation, s2 = t3.preluActivationWeights, u2 = this.batchMatMul(e2, n2, r2, o3);
    return a2 && (u2 = this.add(u2, a2)), i2 && (u2 = qh(this, u2, i2, s2)), u2;
  }, o2.prototype.multiply = function(t3, e2) {
    return "complex64" === t3.dtype || "complex64" === e2.dtype ? this.broadcastedBinaryComplexOp(t3.cast("complex64"), e2.cast("complex64"), function(t4, e3, n2, r2) {
      return { real: t4 * n2 - e3 * r2, imag: t4 * r2 + e3 * n2 };
    }) : this.broadcastedBinaryOp(t3, e2, Dt(t3.dtype, e2.dtype), function(t4, e3) {
      return t4 * e3;
    });
  }, o2.prototype.realDivide = function(t3, e2) {
    Hh([t3, e2], "realDivide");
    return this.broadcastedBinaryOp(t3, e2, "float32", function(t4, e3) {
      return t4 / e3;
    });
  }, o2.prototype.floorDiv = function(t3, e2) {
    Hh([t3, e2], "floorDiv");
    return this.broadcastedBinaryOp(t3, e2, "int32", function(t4, e3) {
      return Math.floor(t4 / e3);
    });
  }, o2.prototype.sum = function(t3, e2) {
    Hh(t3, "sum"), Cn("sum", e2, t3.rank);
    for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, Dt(t3.dtype, "int32")), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
      for (var l2 = c2 * i2, h2 = 0, f2 = 0; f2 < i2; ++f2)
        h2 += u2[l2 + f2];
      s2[c2] = h2;
    }
    return a2;
  }, o2.prototype.prod = function(t3, e2) {
    Hh(t3, "sum");
    for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, Dt(t3.dtype, "int32")), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
      for (var l2 = c2 * i2, h2 = 1, f2 = 0; f2 < i2; ++f2)
        h2 *= u2[l2 + f2];
      s2[c2] = h2;
    }
    return a2;
  }, o2.prototype.unsortedSegmentSum = function(t3, e2, n2) {
    Hh(t3, "unsortedSegmentSum");
    for (var r2 = [], o3 = t3.rank - e2.rank, a2 = 0; a2 < o3; ++a2)
      e2 = e2.expandDims(a2 + 1);
    for (a2 = 0; a2 < n2; ++a2) {
      var i2 = On(a2, "int32"), s2 = Rc(i2, e2).asType("float32").mul(t3).sum(0);
      r2.push(s2);
    }
    return Pr(r2);
  }, o2.prototype.argMin = function(t3, e2) {
    Hh(t3, "argMin");
    var n2 = [e2];
    Cn("argMin", n2, t3.rank);
    for (var r2 = bn(t3.shape, n2), o3 = r2[0], a2 = r2[1], i2 = Gn(o3, "int32"), s2 = k(a2), u2 = this.readSync(i2.dataId), c2 = this.readSync(t3.dataId), l2 = 0; l2 < u2.length; ++l2) {
      for (var h2 = l2 * s2, f2 = c2[h2], d2 = 0, p2 = 0; p2 < s2; ++p2) {
        var v2 = c2[h2 + p2];
        v2 < f2 && (f2 = v2, d2 = p2);
      }
      u2[l2] = d2;
    }
    return i2;
  }, o2.prototype.argMax = function(t3, e2) {
    Hh(t3, "argMax");
    var n2 = [e2];
    Cn("argMax", n2, t3.rank);
    for (var r2 = bn(t3.shape, n2), o3 = r2[0], a2 = r2[1], i2 = Gn(o3, "int32"), s2 = k(a2), u2 = this.readSync(i2.dataId), c2 = this.readSync(t3.dataId), l2 = 0; l2 < u2.length; ++l2) {
      for (var h2 = l2 * s2, f2 = c2[h2], d2 = 0, p2 = 0; p2 < s2; ++p2) {
        var v2 = c2[h2 + p2];
        v2 > f2 && (f2 = v2, d2 = p2);
      }
      u2[l2] = d2;
    }
    return i2;
  }, o2.prototype.cumsum = function(t3, e2, n2, r2) {
    if (Hh(t3, "cumsum"), e2 !== t3.rank - 1)
      throw new Error("backend.cumsum in CPU expects an inner-most axis=" + (t3.rank - 1) + " but got axis=" + e2);
    for (var o3 = Dt(t3.dtype, "int32"), a2 = Gn(t3.shape, o3), i2 = this.readSync(a2.dataId), s2 = this.readSync(t3.dataId), u2 = t3.shape[t3.rank - 1], c2 = r2 ? function(t4, e3) {
      return t4 + u2 - e3 - 1;
    } : function(t4, e3) {
      return t4 + e3;
    }, l2 = 0; l2 < s2.length; l2 += u2)
      for (var h2 = 0; h2 < u2; h2++) {
        var f2 = c2(l2, h2);
        if (0 === h2)
          i2[f2] = n2 ? 0 : s2[f2];
        else {
          var d2 = c2(l2, h2 - 1);
          i2[f2] = n2 ? s2[d2] + i2[d2] : s2[f2] + i2[d2];
        }
      }
    return a2;
  }, o2.prototype.equal = function(t3, e2) {
    return Hh([t3, e2], "equal"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 === e3 ? 1 : 0;
    });
  }, o2.prototype.notEqual = function(t3, e2) {
    return Hh([t3, e2], "notEqual"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 !== e3 ? 1 : 0;
    });
  }, o2.prototype.less = function(t3, e2) {
    return Hh([t3, e2], "less"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 < e3 ? 1 : 0;
    });
  }, o2.prototype.lessEqual = function(t3, e2) {
    return Hh([t3, e2], "lessEqual"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 <= e3 ? 1 : 0;
    });
  }, o2.prototype.greater = function(t3, e2) {
    return Hh([t3, e2], "greater"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 > e3 ? 1 : 0;
    });
  }, o2.prototype.greaterEqual = function(t3, e2) {
    return Hh([t3, e2], "greaterEqual"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 >= e3 ? 1 : 0;
    });
  }, o2.prototype.logicalNot = function(t3) {
    Hh(t3, "logicalNot");
    for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      n2[r2] = e2[r2] ? 0 : 1;
    return this.makeOutput(n2, t3.shape, "bool");
  }, o2.prototype.logicalAnd = function(t3, e2) {
    return Hh([t3, e2], "logicalAnd"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 && e3;
    });
  }, o2.prototype.logicalOr = function(t3, e2) {
    return Hh([t3, e2], "logicalOr"), this.broadcastedBinaryOp(t3, e2, "bool", function(t4, e3) {
      return t4 || e3;
    });
  }, o2.prototype.select = function(t3, e2, n2) {
    Hh([t3, e2, n2], "select");
    for (var r2 = this.readSync(t3.dataId), o3 = this.readSync(e2.dataId), a2 = this.readSync(n2.dataId), i2 = Gn(e2.shape, Dt(e2.dtype, n2.dtype)), s2 = this.readSync(i2.dataId), u2 = 0, c2 = 0 === t3.rank || t3.rank > 1 || 1 === e2.rank ? 1 : k(e2.shape.slice(1)), l2 = 0; l2 < r2.length; l2++)
      for (var h2 = 0; h2 < c2; h2++)
        1 === r2[l2] ? s2[u2++] = o3[l2] : s2[u2++] = a2[l2];
    return i2;
  }, o2.prototype.where = function(t3) {
    Hh([t3], "where");
    var e2 = this.readSync(t3.dataId);
    return na(t3.shape, e2);
  }, o2.prototype.topk = function(t3, e2, n2) {
    return Hh(t3, "topk"), ea(this.readSync(t3.dataId), t3.shape, t3.dtype, e2);
  }, o2.prototype.min = function(t3, e2) {
    Hh(t3, "min"), Cn("min", e2, t3.rank);
    for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
      for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
        var d2 = u2[l2 + f2];
        d2 < h2 && (h2 = d2);
      }
      s2[c2] = h2;
    }
    return a2;
  }, o2.prototype.minimum = function(t3, e2) {
    return Hh([t3, e2], "minimum"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
      return Math.min(t4, e3);
    });
  }, o2.prototype.mod = function(t3, e2) {
    return Hh([t3, e2], "mod"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
      var n2 = t4 % e3;
      return t4 < 0 && e3 < 0 || t4 >= 0 && e3 >= 0 ? n2 : (n2 + e3) % e3;
    });
  }, o2.prototype.max = function(t3, e2) {
    Hh(t3, "max"), Cn("max", e2, t3.rank);
    for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
      for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
        var d2 = u2[l2 + f2];
        d2 > h2 && (h2 = d2);
      }
      s2[c2] = h2;
    }
    return a2;
  }, o2.prototype.maximum = function(t3, e2) {
    return Hh([t3, e2], "maximum"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
      return Math.max(t4, e3);
    });
  }, o2.prototype.all = function(t3, e2) {
    Hh(t3, "all"), Cn("all", e2, t3.rank);
    for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
      for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
        var d2 = u2[l2 + f2];
        h2 = h2 && d2;
      }
      s2[c2] = h2;
    }
    return a2;
  }, o2.prototype.any = function(t3, e2) {
    Hh(t3, "any"), Cn("any", e2, t3.rank);
    for (var n2 = bn(t3.shape, e2), r2 = n2[0], o3 = n2[1], a2 = Gn(r2, t3.dtype), i2 = k(o3), s2 = this.readSync(a2.dataId), u2 = this.readSync(t3.dataId), c2 = 0; c2 < s2.length; ++c2) {
      for (var l2 = c2 * i2, h2 = u2[l2], f2 = 0; f2 < i2; ++f2) {
        var d2 = u2[l2 + f2];
        h2 = h2 || d2;
      }
      s2[c2] = h2;
    }
    return a2;
  }, o2.prototype.squaredDifference = function(t3, e2) {
    return Hh([t3, e2], "squaredDifference"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
      var n2 = t4 - e3;
      return n2 * n2;
    });
  }, o2.prototype.ceil = function(t3) {
    Hh(t3, "ceil");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      n2[r2] = Math.ceil(e2[r2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.floor = function(t3) {
    Hh(t3, "floor");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      n2[r2] = Math.floor(e2[r2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.sign = function(t3) {
    Hh(t3, "x");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      e2[r2] < 0 ? n2[r2] = -1 : e2[r2] > 0 ? n2[r2] = 1 : n2[r2] = 0;
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.isNaN = function(t3) {
    Hh(t3, "x");
    for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      Number.isNaN(e2[r2]) && (n2[r2] = 1);
    return this.makeOutput(n2, t3.shape, "bool");
  }, o2.prototype.isInf = function(t3) {
    Hh(t3, "x");
    for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      Math.abs(e2[r2]) === 1 / 0 && (n2[r2] = 1);
    return this.makeOutput(n2, t3.shape, "bool");
  }, o2.prototype.isFinite = function(t3) {
    Hh(t3, "x");
    for (var e2 = this.readSync(t3.dataId), n2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      Number.isFinite(e2[r2]) && (n2[r2] = 1);
    return this.makeOutput(n2, t3.shape, "bool");
  }, o2.prototype.round = function(t3) {
    Hh(t3, "round");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
      var o3 = Math.floor(e2[r2]);
      e2[r2] - o3 < 0.5 ? n2[r2] = Math.floor(e2[r2]) : e2[r2] - o3 > 0.5 ? n2[r2] = Math.ceil(e2[r2]) : n2[r2] = o3 % 2 == 0 ? o3 : o3 + 1;
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.exp = function(t3) {
    Hh(t3, "exp");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      n2[r2] = Math.exp(e2[r2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.expm1 = function(t3) {
    Hh(t3, "expm1");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      n2[r2] = Math.expm1(e2[r2]);
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.log = function(t3) {
    Hh(t3, "log");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
      var o3 = e2[r2];
      n2[r2] = Math.log(o3);
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.log1p = function(t3) {
    Hh(t3, "log1p");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
      var o3 = e2[r2];
      n2[r2] = Math.log1p(o3);
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.sqrt = function(t3) {
    Hh(t3, "sqrt");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
      var o3 = e2[r2];
      n2[r2] = Math.sqrt(o3);
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.rsqrt = function(t3) {
    Hh(t3, "rsqrt");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2) {
      var o3 = e2[r2];
      n2[r2] = 1 / Math.sqrt(o3);
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.reciprocal = function(t3) {
    Hh(t3, "reciprocal");
    for (var e2 = this.readSync(t3.dataId), n2 = new Float32Array(e2.length), r2 = 0; r2 < e2.length; ++r2)
      n2[r2] = 1 / e2[r2];
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.linear = function(t3) {
    return t3;
  }, o2.prototype.relu = function(t3) {
    Hh(t3, "relu");
    for (var e2 = Gn(t3.shape, t3.dtype), n2 = this.readSync(e2.dataId), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3)
      n2[o3] = Math.max(0, r2[o3]);
    return e2;
  }, o2.prototype.relu6 = function(t3) {
    Hh(t3, "relu");
    for (var e2 = Gn(t3.shape, t3.dtype), n2 = this.readSync(e2.dataId), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3)
      n2[o3] = Math.min(Math.max(0, r2[o3]), 6);
    return e2;
  }, o2.prototype.prelu = function(t3, e2) {
    return Hh([t3, e2], "prelu"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
      return t4 < 0 ? e3 * t4 : t4;
    });
  }, o2.prototype.elu = function(t3) {
    Hh(t3, "elu");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2) {
      var o3 = n2[r2];
      e2[r2] = o3 >= 0 ? o3 : Math.exp(o3) - 1;
    }
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.eluDer = function(t3, e2) {
    Hh([t3, e2], "eluDer");
    for (var n2 = new Float32Array(e2.size), r2 = this.readSync(e2.dataId), o3 = this.readSync(t3.dataId), a2 = 0; a2 < r2.length; ++a2) {
      var i2 = r2[a2];
      n2[a2] = i2 >= 1 ? o3[a2] : o3[a2] * (i2 + 1);
    }
    return this.makeOutput(n2, e2.shape, "float32");
  }, o2.prototype.selu = function(t3) {
    Hh(t3, "selu");
    for (var e2 = bs, n2 = ws, r2 = new Float32Array(t3.size), o3 = this.readSync(t3.dataId), a2 = 0; a2 < o3.length; ++a2) {
      var i2 = o3[a2];
      r2[a2] = i2 >= 0 ? n2 * i2 : e2 * (Math.exp(i2) - 1);
    }
    return this.makeOutput(r2, t3.shape, "float32");
  }, o2.prototype.clip = function(t3, e2, n2) {
    Hh(t3, "clip");
    for (var r2 = new Float32Array(t3.size), o3 = this.readSync(t3.dataId), a2 = 0; a2 < o3.length; ++a2) {
      var i2 = o3[a2];
      r2[a2] = i2 > n2 ? n2 : i2 < e2 ? e2 : i2;
    }
    return this.makeOutput(r2, t3.shape, "float32");
  }, o2.prototype.abs = function(t3) {
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.abs(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.complexAbs = function(t3) {
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < t3.size; ++r2) {
      var o3 = n2[2 * r2], a2 = n2[2 * r2 + 1];
      e2[r2] = Math.hypot(o3, a2);
    }
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.int = function(t3) {
    Hh(t3, "int");
    for (var e2 = new Int32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = n2[r2];
    return this.makeOutput(e2, t3.shape, "int32");
  }, o2.prototype.sigmoid = function(t3) {
    Hh(t3, "sigmoid");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = 1 / (1 + Math.exp(-n2[r2]));
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.softplus = function(t3) {
    Hh(t3, "softplus");
    for (var e2 = Math.log(11920928955078125e-23) + 2, n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3) {
      var a2 = r2[o3] > -e2, i2 = r2[o3] < e2, s2 = Math.exp(r2[o3]), u2 = void 0;
      u2 = i2 ? s2 : a2 ? r2[o3] : Math.log(1 + s2), n2[o3] = u2;
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.sin = function(t3) {
    Hh(t3, "sin");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.sin(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.cos = function(t3) {
    Hh(t3, "cos");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.cos(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.tan = function(t3) {
    Hh(t3, "tan");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.tan(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.asin = function(t3) {
    Hh(t3, "asin");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.asin(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.acos = function(t3) {
    Hh(t3, "acos");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.acos(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.atan = function(t3) {
    Hh(t3, "atan");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.atan(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.atan2 = function(t3, e2) {
    return Hh([t3, e2], "atan2"), this.broadcastedBinaryOp(t3, e2, t3.dtype, function(t4, e3) {
      return Math.atan2(t4, e3);
    });
  }, o2.prototype.sinh = function(t3) {
    Hh(t3, "sinh");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.sinh(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.cosh = function(t3) {
    Hh(t3, "cosh");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.cosh(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.tanh = function(t3) {
    Hh(t3, "tanh");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = D(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.asinh = function(t3) {
    Hh(t3, "asinh");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.asinh(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.acosh = function(t3) {
    Hh(t3, "acosh");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.acosh(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.atanh = function(t3) {
    Hh(t3, "atanh");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2)
      e2[r2] = Math.atanh(n2[r2]);
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.erf = function(t3) {
    Hh(t3, "erf");
    for (var e2 = new Float32Array(t3.size), n2 = this.readSync(t3.dataId), r2 = 0; r2 < n2.length; ++r2) {
      var o3 = Math.sign(n2[r2]), a2 = Math.abs(n2[r2]), i2 = 1 / (1 + 0.3275911 * a2);
      e2[r2] = o3 * (1 - ((((1.061405429 * i2 - 1.453152027) * i2 + 1.421413741) * i2 - 0.284496736) * i2 + 0.254829592) * i2 * Math.exp(-a2 * a2));
    }
    return this.makeOutput(e2, t3.shape, "float32");
  }, o2.prototype.step = function(t3, e2) {
    void 0 === e2 && (e2 = 0), Hh(t3, "step");
    for (var n2 = new Float32Array(t3.size), r2 = this.readSync(t3.dataId), o3 = 0; o3 < r2.length; ++o3) {
      var a2 = r2[o3];
      isNaN(a2) ? n2[o3] = NaN : n2[o3] = a2 > 0 ? 1 : e2;
    }
    return this.makeOutput(n2, t3.shape, "float32");
  }, o2.prototype.fusedConv2d = function(t3) {
    var e2 = t3.input, n2 = t3.filter, r2 = t3.convInfo, o3 = t3.bias, a2 = t3.activation, i2 = t3.preluActivationWeights, s2 = this.conv2d(e2, n2, r2);
    return o3 && (s2 = this.add(s2, o3)), a2 && (s2 = qh(this, s2, a2, i2)), s2;
  }, o2.prototype.conv2d = function(t3, e2, n2) {
    Hh([t3, e2], "conv2d");
    for (var r2 = n2.filterHeight, o3 = n2.filterWidth, a2 = n2.dilationHeight, i2 = n2.dilationWidth, s2 = n2.padInfo.left, u2 = n2.padInfo.top, c2 = "channelsLast" === n2.dataFormat, l2 = dr(n2.outShape, t3.dtype), h2 = t3.strides[0], f2 = c2 ? t3.strides[1] : t3.strides[2], d2 = c2 ? t3.strides[2] : 1, p2 = c2 ? 1 : t3.strides[1], v2 = l2.strides[0], m2 = c2 ? l2.strides[1] : l2.strides[2], g2 = c2 ? l2.strides[2] : 1, y2 = c2 ? 1 : l2.strides[1], x2 = this.readSync(t3.dataId), b2 = this.readSync(e2.dataId), w2 = l2.values, C2 = 0; C2 < n2.batchSize; ++C2)
      for (var E2 = C2 * h2, R2 = C2 * v2, I2 = 0; I2 < n2.outHeight; ++I2)
        for (var k2 = R2 + I2 * m2, S2 = I2 * n2.strideHeight - u2, A2 = 0; A2 < r2; A2++) {
          var D2 = S2 + A2 * a2;
          if (!(D2 < 0 || D2 >= n2.inHeight))
            for (var T2 = A2 * e2.strides[0], N2 = E2 + D2 * f2, F2 = 0; F2 < n2.outWidth; ++F2)
              for (var _2 = k2 + F2 * g2, O2 = F2 * n2.strideWidth - s2, M2 = 0; M2 < o3; M2++) {
                var B2 = O2 + M2 * i2;
                if (!(B2 < 0 || B2 >= n2.inWidth))
                  for (var P2 = N2 + B2 * d2, L2 = T2 + M2 * e2.strides[1], W2 = 0; W2 < n2.inChannels; ++W2) {
                    for (var U2 = x2[P2 + W2 * p2], V2 = 0; V2 < n2.outChannels; ++V2)
                      w2[_2 + V2 * y2] += U2 * b2[L2 + V2];
                    L2 += n2.outChannels;
                  }
              }
        }
    return l2.toTensor();
  }, o2.prototype.conv3d = function(t3, e2, n2) {
    for (var r2 = n2.filterDepth, o3 = n2.filterHeight, a2 = n2.filterWidth, i2 = n2.dilationDepth, s2 = n2.dilationHeight, u2 = n2.dilationWidth, c2 = n2.padInfo.front, l2 = n2.padInfo.left, h2 = n2.padInfo.top, f2 = dr(n2.outShape, t3.dtype), d2 = this.readSync(t3.dataId), p2 = this.readSync(e2.dataId), v2 = f2.values, m2 = 0; m2 < n2.batchSize; ++m2)
      for (var g2 = m2 * t3.strides[0], y2 = m2 * f2.strides[0], x2 = 0; x2 < n2.outDepth; ++x2)
        for (var b2 = y2 + x2 * f2.strides[1], w2 = x2 * n2.strideDepth - c2, C2 = 0; C2 < r2; C2++) {
          var E2 = w2 + C2 * i2;
          if (!(E2 < 0 || E2 >= n2.inDepth))
            for (var R2 = C2 * e2.strides[0], I2 = g2 + E2 * t3.strides[1], k2 = 0; k2 < n2.outHeight; ++k2)
              for (var S2 = b2 + k2 * f2.strides[2], A2 = k2 * n2.strideHeight - h2, D2 = 0; D2 < o3; D2++) {
                var T2 = A2 + D2 * s2;
                if (!(T2 < 0 || T2 >= n2.inHeight))
                  for (var N2 = R2 + D2 * e2.strides[1], F2 = I2 + T2 * t3.strides[2], _2 = 0; _2 < n2.outWidth; ++_2)
                    for (var O2 = S2 + _2 * n2.outChannels, M2 = _2 * n2.strideWidth - l2, B2 = 0; B2 < a2; B2++) {
                      var P2 = M2 + B2 * u2;
                      if (!(P2 < 0 || P2 >= n2.inWidth))
                        for (var L2 = N2 + B2 * e2.strides[2], W2 = F2 + P2 * n2.inChannels, U2 = L2, V2 = 0; V2 < n2.inChannels; ++V2) {
                          for (var z2 = d2[W2 + V2], G2 = 0; G2 < n2.outChannels; ++G2)
                            v2[O2 + G2] += z2 * p2[U2 + G2];
                          U2 += n2.outChannels;
                        }
                    }
              }
        }
    return f2.toTensor();
  }, o2.prototype.conv2dDerInput = function(t3, e2, n2) {
    Hh([t3, e2], "conv2dDerInput");
    for (var r2 = dr(n2.inShape, "float32"), o3 = r2.values, a2 = this.readSync(t3.dataId), i2 = this.readSync(e2.dataId), s2 = e2.strides, u2 = s2[0], c2 = s2[1], l2 = s2[2], h2 = n2.batchSize, f2 = n2.filterHeight, d2 = n2.filterWidth, p2 = n2.inChannels, v2 = n2.inHeight, m2 = n2.inWidth, g2 = n2.outChannels, y2 = n2.outHeight, x2 = n2.outWidth, b2 = n2.strideHeight, w2 = n2.strideWidth, C2 = n2.dataFormat, E2 = f2 - 1 - n2.padInfo.top, R2 = d2 - 1 - n2.padInfo.left, I2 = "channelsLast" === C2, k2 = r2.strides[0], S2 = I2 ? r2.strides[1] : r2.strides[2], A2 = I2 ? r2.strides[2] : 1, D2 = I2 ? 1 : r2.strides[1], T2 = t3.strides[0], N2 = I2 ? t3.strides[1] : t3.strides[2], F2 = I2 ? t3.strides[2] : 1, _2 = I2 ? 1 : t3.strides[1], O2 = 0; O2 < h2; ++O2)
      for (var M2 = 0; M2 < p2; ++M2)
        for (var B2 = 0; B2 < v2; ++B2)
          for (var P2 = B2 - E2, L2 = Math.max(0, Math.ceil(P2 / b2)), W2 = Math.min(y2, (f2 + P2) / b2), U2 = 0; U2 < m2; ++U2) {
            for (var V2 = U2 - R2, z2 = Math.max(0, Math.ceil(V2 / w2)), G2 = Math.min(x2, (d2 + V2) / w2), H2 = 0, q2 = L2; q2 < W2; ++q2)
              for (var K2 = q2 * b2 - P2, j2 = z2; j2 < G2; ++j2)
                for (var X2 = T2 * O2 + N2 * q2 + F2 * j2, Y2 = u2 * (f2 - 1 - K2) + c2 * (d2 - 1 - (j2 * w2 - V2)) + l2 * M2, $2 = 0; $2 < g2; ++$2) {
                  H2 += a2[X2 + _2 * $2] * i2[Y2 + $2];
                }
            o3[k2 * O2 + S2 * B2 + A2 * U2 + D2 * M2] = H2;
          }
    return r2.toTensor();
  }, o2.prototype.conv3dDerInput = function(t3, e2, n2) {
    for (var r2 = dr(n2.inShape, "float32"), o3 = r2.values, a2 = r2.strides, i2 = a2[0], s2 = a2[1], u2 = a2[2], c2 = a2[3], l2 = this.readSync(t3.dataId), h2 = t3.strides, f2 = h2[0], d2 = h2[1], p2 = h2[2], v2 = h2[3], m2 = this.readSync(e2.dataId), g2 = e2.strides, y2 = g2[0], x2 = g2[1], b2 = g2[2], w2 = g2[3], C2 = n2.batchSize, E2 = n2.filterDepth, R2 = n2.filterHeight, I2 = n2.filterWidth, k2 = n2.inChannels, S2 = n2.inDepth, A2 = n2.inHeight, D2 = n2.inWidth, T2 = n2.outChannels, N2 = n2.outDepth, F2 = n2.outHeight, _2 = n2.outWidth, O2 = n2.strideDepth, M2 = n2.strideHeight, B2 = n2.strideWidth, P2 = E2 - 1 - n2.padInfo.front, L2 = R2 - 1 - n2.padInfo.top, W2 = I2 - 1 - n2.padInfo.left, U2 = 0; U2 < C2; ++U2)
      for (var V2 = 0; V2 < k2; ++V2)
        for (var z2 = 0; z2 < S2; ++z2)
          for (var G2 = z2 - P2, H2 = Math.max(0, Math.ceil(G2 / O2)), q2 = Math.min(N2, (E2 + G2) / O2), K2 = 0; K2 < A2; ++K2)
            for (var j2 = K2 - L2, X2 = Math.max(0, Math.ceil(j2 / M2)), Y2 = Math.min(F2, (R2 + j2) / M2), $2 = 0; $2 < D2; ++$2) {
              for (var Q2 = $2 - W2, J2 = Math.max(0, Math.ceil(Q2 / B2)), Z2 = Math.min(_2, (I2 + Q2) / B2), tt2 = 0, et2 = H2; et2 < q2; ++et2)
                for (var nt2 = et2 * O2 - G2, rt2 = X2; rt2 < Y2; ++rt2)
                  for (var ot2 = rt2 * M2 - j2, at2 = J2; at2 < Z2; ++at2)
                    for (var it2 = f2 * U2 + d2 * et2 + p2 * rt2 + v2 * at2, st2 = y2 * (E2 - 1 - nt2) + x2 * (R2 - 1 - ot2) + b2 * (I2 - 1 - (at2 * B2 - Q2)) + w2 * V2, ut2 = 0; ut2 < T2; ++ut2) {
                      tt2 += l2[it2 + ut2] * m2[st2 + ut2];
                    }
              o3[i2 * U2 + s2 * z2 + u2 * K2 + c2 * $2 + V2] = tt2;
            }
    return r2.toTensor();
  }, o2.prototype.conv2dDerFilter = function(t3, e2, n2) {
    Hh([t3, e2], "conv2dDerFilter");
    for (var r2 = n2.strideHeight, o3 = n2.strideWidth, a2 = n2.filterHeight, i2 = n2.filterWidth, s2 = "channelsLast" === n2.dataFormat, u2 = dr(n2.filterShape, "float32"), c2 = n2.padInfo.left, l2 = n2.padInfo.top, h2 = this.bufferSync(t3), f2 = this.bufferSync(e2), d2 = 0; d2 < a2; ++d2)
      for (var p2 = Math.max(0, Math.ceil((l2 - d2) / r2)), v2 = Math.min(n2.outHeight, (n2.inHeight + l2 - d2) / r2), m2 = 0; m2 < i2; ++m2)
        for (var g2 = Math.max(0, Math.ceil((c2 - m2) / o3)), y2 = Math.min(n2.outWidth, (n2.inWidth + c2 - m2) / o3), x2 = 0; x2 < n2.inChannels; ++x2)
          for (var b2 = 0; b2 < n2.outChannels; ++b2) {
            for (var w2 = 0, C2 = 0; C2 < n2.batchSize; ++C2)
              for (var E2 = p2; E2 < v2; ++E2)
                for (var R2 = d2 + E2 * r2 - l2, I2 = g2; I2 < y2; ++I2) {
                  var k2 = m2 + I2 * o3 - c2;
                  w2 += s2 ? h2.get(C2, R2, k2, x2) * f2.get(C2, E2, I2, b2) : h2.get(C2, x2, R2, k2) * f2.get(C2, b2, E2, I2);
                }
            u2.set(w2, d2, m2, x2, b2);
          }
    return u2.toTensor();
  }, o2.prototype.conv3dDerFilter = function(t3, e2, n2) {
    for (var r2 = n2.strideDepth, o3 = n2.strideHeight, a2 = n2.strideWidth, i2 = n2.filterDepth, s2 = n2.filterHeight, u2 = n2.filterWidth, c2 = dr(n2.filterShape, "float32"), l2 = c2.values, h2 = c2.strides, f2 = h2[0], d2 = h2[1], p2 = h2[2], v2 = h2[3], m2 = this.readSync(e2.dataId), g2 = e2.strides, y2 = g2[0], x2 = g2[1], b2 = g2[2], w2 = g2[3], C2 = this.readSync(t3.dataId), E2 = t3.strides, R2 = E2[0], I2 = E2[1], k2 = E2[2], S2 = E2[3], A2 = n2.padInfo.front, D2 = n2.padInfo.left, T2 = n2.padInfo.top, N2 = 0; N2 < i2; ++N2)
      for (var F2 = Math.max(0, Math.ceil((A2 - N2) / r2)), _2 = Math.min(n2.outDepth, (n2.inDepth + A2 - N2) / r2), O2 = N2 * f2, M2 = 0; M2 < s2; ++M2)
        for (var B2 = Math.max(0, Math.ceil((T2 - M2) / o3)), P2 = Math.min(n2.outHeight, (n2.inHeight + T2 - M2) / o3), L2 = M2 * d2 + O2, W2 = 0; W2 < u2; ++W2)
          for (var U2 = Math.max(0, Math.ceil((D2 - W2) / a2)), V2 = Math.min(n2.outWidth, (n2.inWidth + D2 - W2) / a2), z2 = W2 * p2 + L2, G2 = 0; G2 < n2.inChannels; ++G2)
            for (var H2 = G2 * v2 + z2, q2 = 0; q2 < n2.outChannels; ++q2) {
              for (var K2 = 0, j2 = 0; j2 < n2.batchSize; ++j2)
                for (var X2 = j2 * R2, Y2 = j2 * y2, $2 = F2; $2 < _2; ++$2)
                  for (var Q2 = (N2 + $2 * r2 - A2) * I2 + X2, J2 = $2 * x2 + Y2, Z2 = B2; Z2 < P2; ++Z2)
                    for (var tt2 = (M2 + Z2 * o3 - T2) * k2 + Q2, et2 = Z2 * b2 + J2, nt2 = U2; nt2 < V2; ++nt2) {
                      var rt2 = nt2 * w2 + et2;
                      K2 += C2[(W2 + nt2 * a2 - D2) * S2 + tt2 + G2] * m2[rt2 + q2];
                    }
              l2[H2 + q2] = K2;
            }
    return c2.toTensor();
  }, o2.prototype.fusedDepthwiseConv2D = function(t3) {
    var e2 = t3.input, n2 = t3.filter, r2 = t3.convInfo, o3 = t3.bias, a2 = t3.activation, i2 = t3.preluActivationWeights, s2 = this.depthwiseConv2D(e2, n2, r2);
    return o3 && (s2 = this.add(s2, o3)), a2 && (s2 = qh(this, s2, a2, i2)), s2;
  }, o2.prototype.depthwiseConv2D = function(t3, e2, n2) {
    Hh([t3, e2], "depthwiseConv2D");
    for (var r2 = n2.filterHeight, o3 = n2.filterWidth, a2 = n2.dilationHeight, i2 = n2.dilationWidth, s2 = n2.padInfo.left, u2 = n2.padInfo.top, c2 = n2.outChannels / n2.inChannels, l2 = dr(n2.outShape, t3.dtype), h2 = this.readSync(t3.dataId), f2 = this.readSync(e2.dataId), d2 = l2.values, p2 = 0; p2 < n2.batchSize; ++p2)
      for (var v2 = p2 * t3.strides[0], m2 = p2 * l2.strides[0], g2 = 0; g2 < n2.outHeight; ++g2)
        for (var y2 = m2 + g2 * l2.strides[1], x2 = g2 * n2.strideHeight - s2, b2 = 0; b2 < r2; ++b2) {
          var w2 = x2 + b2 * a2;
          if (!(w2 < 0 || w2 >= n2.inHeight))
            for (var C2 = b2 * e2.strides[0], E2 = v2 + w2 * t3.strides[1], R2 = 0; R2 < n2.outWidth; ++R2)
              for (var I2 = y2 + R2 * l2.strides[2], k2 = R2 * n2.strideWidth - u2, S2 = 0; S2 < o3; ++S2) {
                var A2 = k2 + S2 * i2;
                if (!(A2 < 0 || A2 >= n2.inWidth))
                  for (var D2 = C2 + S2 * e2.strides[1], T2 = E2 + A2 * n2.inChannels, N2 = I2, F2 = D2, _2 = 0; _2 < n2.inChannels; ++_2) {
                    for (var O2 = h2[T2 + _2], M2 = 0; M2 < c2; ++M2)
                      d2[N2 + M2] += O2 * f2[F2 + M2];
                    N2 += c2, F2 += c2;
                  }
              }
        }
    return l2.toTensor();
  }, o2.prototype.depthwiseConv2DDerInput = function(t3, e2, n2) {
    Hh([t3, e2], "depthwiseConv2DDerInput");
    for (var r2 = dr(n2.inShape, "float32"), o3 = r2.values, a2 = r2.strides, i2 = a2[0], s2 = a2[1], u2 = a2[2], c2 = this.readSync(t3.dataId), l2 = t3.strides, h2 = l2[0], f2 = l2[1], d2 = l2[2], p2 = this.readSync(e2.dataId), v2 = e2.strides, m2 = v2[0], g2 = v2[1], y2 = v2[2], x2 = n2.batchSize, b2 = n2.filterHeight, w2 = n2.filterWidth, C2 = n2.inChannels, E2 = n2.inHeight, R2 = n2.inWidth, I2 = n2.outChannels, k2 = n2.outHeight, S2 = n2.outWidth, A2 = n2.strideHeight, D2 = n2.strideWidth, T2 = b2 - 1 - n2.padInfo.top, N2 = w2 - 1 - n2.padInfo.left, F2 = I2 / C2, _2 = 0; _2 < x2; ++_2)
      for (var O2 = 0; O2 < C2; ++O2)
        for (var M2 = 0; M2 < E2; ++M2)
          for (var B2 = M2 - T2, P2 = Math.max(0, Math.ceil(B2 / A2)), L2 = Math.min(k2, (b2 + B2) / A2), W2 = 0; W2 < R2; ++W2) {
            for (var U2 = W2 - N2, V2 = Math.max(0, Math.ceil(U2 / D2)), z2 = Math.min(S2, (w2 + U2) / D2), G2 = 0, H2 = P2; H2 < L2; ++H2)
              for (var q2 = H2 * A2 - B2, K2 = V2; K2 < z2; ++K2)
                for (var j2 = h2 * _2 + f2 * H2 + d2 * K2, X2 = m2 * (b2 - 1 - q2) + g2 * (w2 - 1 - (K2 * D2 - U2)) + y2 * O2, Y2 = 0; Y2 < F2; ++Y2) {
                  G2 += c2[j2 + (O2 * F2 + Y2)] * p2[X2 + Y2];
                }
            o3[i2 * _2 + s2 * M2 + u2 * W2 + O2] = G2;
          }
    return r2.toTensor();
  }, o2.prototype.depthwiseConv2DDerFilter = function(t3, e2, n2) {
    Hh([t3, e2], "depthwiseConv2DDerFilter");
    for (var r2 = n2.strideHeight, o3 = n2.strideWidth, a2 = n2.filterHeight, i2 = n2.filterWidth, s2 = dr(n2.filterShape, "float32"), u2 = n2.padInfo.left, c2 = n2.padInfo.top, l2 = n2.outChannels / n2.inChannels, h2 = this.bufferSync(t3), f2 = this.bufferSync(e2), d2 = 0; d2 < a2; ++d2)
      for (var p2 = Math.max(0, Math.ceil((c2 - d2) / r2)), v2 = Math.min(n2.outHeight, (n2.inHeight + c2 - d2) / r2), m2 = 0; m2 < i2; ++m2)
        for (var g2 = Math.max(0, Math.ceil((u2 - m2) / o3)), y2 = Math.min(n2.outWidth, (n2.inWidth + u2 - m2) / o3), x2 = 0; x2 < n2.outChannels; ++x2) {
          for (var b2 = Math.trunc(x2 / l2), w2 = x2 % l2, C2 = 0, E2 = 0; E2 < n2.batchSize; ++E2)
            for (var R2 = p2; R2 < v2; ++R2)
              for (var I2 = d2 + R2 * r2 - c2, k2 = g2; k2 < y2; ++k2) {
                var S2 = m2 + k2 * o3 - u2;
                C2 += h2.get(E2, I2, S2, b2) * f2.get(E2, R2, k2, x2);
              }
          s2.set(C2, d2, m2, b2, w2);
        }
    return s2.toTensor();
  }, o2.prototype.tile = function(t3, e2) {
    return Hh(t3, "tile"), ta(this.bufferSync(t3), e2);
  }, o2.prototype.pad = function(t3, e2, n2) {
    Hh(t3, "pad");
    var r2 = e2.map(function(e3, n3) {
      return e3[0] + t3.shape[n3] + e3[1];
    }), o3 = e2.map(function(t4) {
      return t4[0];
    }), a2 = this.bufferSync(t3), i2 = dr(r2, t3.dtype);
    0 !== n2 && i2.values.fill(n2);
    for (var s2 = 0; s2 < t3.size; s2++) {
      var u2 = a2.indexToLoc(s2), c2 = u2.map(function(t4, e3) {
        return t4 + o3[e3];
      });
      i2.set.apply(i2, [a2.get.apply(a2, u2)].concat(c2));
    }
    return i2.toTensor();
  }, o2.prototype.transpose = function(t3, e2) {
    Hh(t3, "transpose");
    for (var n2 = new Array(t3.rank), r2 = 0; r2 < n2.length; r2++)
      n2[r2] = t3.shape[e2[r2]];
    var o3 = this.readSync(t3.dataId), a2 = dr(n2, t3.dtype), i2 = this.bufferSync(t3);
    for (r2 = 0; r2 < t3.size; ++r2) {
      for (var s2 = i2.indexToLoc(r2), u2 = new Array(s2.length), c2 = 0; c2 < u2.length; c2++)
        u2[c2] = s2[e2[c2]];
      var l2 = a2.locToIndex(u2);
      a2.values[l2] = o3[r2];
    }
    return a2.toTensor();
  }, o2.prototype.gather = function(t3, e2, n2) {
    Hh([t3, e2], "gather");
    var r2 = t3.shape.slice(), o3 = this.readSync(e2.dataId);
    r2[n2] = o3.length;
    for (var a2 = dr(r2, t3.dtype), i2 = this.bufferSync(t3), s2 = 0; s2 < a2.size; ++s2) {
      var u2 = a2.indexToLoc(s2), c2 = u2.slice();
      c2[n2] = o3[u2[n2]];
      var l2 = i2.locToIndex(c2);
      a2.values[s2] = i2.values[l2];
    }
    return a2.toTensor();
  }, o2.prototype.batchToSpaceND = function(t3, e2, n2) {
    Hh([t3], "batchToSpaceND");
    var r2 = e2.reduce(function(t4, e3) {
      return t4 * e3;
    }), o3 = zr(t3.shape, e2, r2), a2 = Gr(o3.length, e2.length), i2 = Hr(t3.shape, e2, r2), s2 = qr(n2, e2.length), u2 = Kr(i2, n2, e2.length);
    return t3.reshape(o3).transpose(a2).reshape(i2).slice(s2, u2);
  }, o2.prototype.spaceToBatchND = function(t3, e2, n2) {
    Hh([t3], "spaceToBatchND");
    var r2 = e2.reduce(function(t4, e3) {
      return t4 * e3;
    }), o3 = [[0, 0]];
    o3.push.apply(o3, n2);
    for (var a2 = 1 + e2.length; a2 < t3.shape.length; ++a2)
      o3.push([0, 0]);
    var i2 = t3.pad(o3), s2 = zr(i2.shape, e2, r2, false), u2 = Gr(s2.length, e2.length, false), c2 = Hr(i2.shape, e2, r2, false);
    return i2.reshape(s2).transpose(u2).reshape(c2);
  }, o2.prototype.pool = function(t3, e2, n2) {
    Hh(t3, "pool");
    for (var r2 = e2.strideHeight, o3 = e2.strideWidth, a2 = e2.dilationHeight, i2 = e2.dilationWidth, s2 = e2.effectiveFilterHeight, u2 = e2.effectiveFilterWidth, c2 = e2.padInfo.top, l2 = e2.padInfo.left, h2 = "max" === n2 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, f2 = this.readSync(t3.dataId), d2 = dr(e2.outShape, t3.dtype), p2 = d2.values, v2 = e2.outShape[1] * e2.outShape[2] * e2.outShape[3], m2 = e2.outShape[2] * e2.outShape[3], g2 = e2.outShape[3], y2 = 0; y2 < e2.batchSize; ++y2)
      for (var x2 = y2 * v2, b2 = y2 * t3.strides[0], w2 = 0; w2 < e2.inChannels; ++w2)
        for (var C2 = 0; C2 < e2.outHeight; ++C2)
          for (var E2 = C2 * r2 - c2, R2 = Math.max(0, E2), I2 = Math.min(e2.inHeight, s2 + E2), k2 = x2 + C2 * m2, S2 = 0; S2 < e2.outWidth; ++S2) {
            for (var A2 = S2 * o3 - l2, D2 = Math.max(0, A2), T2 = Math.min(e2.inWidth, u2 + A2), N2 = h2, F2 = 0, _2 = 0, O2 = R2; O2 < I2; O2 += a2) {
              for (var M2 = b2 + O2 * t3.strides[1], B2 = D2; B2 < T2; B2 += i2) {
                var P2 = f2[M2 + B2 * t3.strides[2] + w2];
                "max" === n2 && P2 > N2 ? N2 = P2 : "avg" === n2 && (F2 += P2, _2++);
              }
              if (isNaN(N2))
                break;
            }
            p2[k2 + S2 * g2 + w2] = "avg" === n2 ? F2 / _2 : N2;
          }
    return d2.toTensor();
  }, o2.prototype.maxPool = function(t3, e2) {
    return this.pool(t3, e2, "max");
  }, o2.prototype.maxPoolPositions = function(t3, e2) {
    for (var n2 = dr(e2.outShape, "int32"), r2 = e2.strideHeight, o3 = e2.strideWidth, a2 = e2.dilationHeight, i2 = e2.dilationWidth, s2 = e2.effectiveFilterHeight, u2 = e2.effectiveFilterWidth, c2 = e2.padInfo.top, l2 = e2.padInfo.left, h2 = this.bufferSync(t3), f2 = 0; f2 < e2.batchSize; ++f2)
      for (var d2 = 0; d2 < e2.inChannels; ++d2)
        for (var p2 = 0; p2 < e2.outHeight; ++p2) {
          for (var v2 = p2 * r2 - c2, m2 = v2; m2 < 0; )
            m2 += a2;
          for (var g2 = Math.min(e2.inHeight, s2 + v2), y2 = 0; y2 < e2.outWidth; ++y2) {
            for (var x2 = y2 * o3 - l2, b2 = x2; b2 < 0; )
              b2 += i2;
            for (var w2 = Math.min(e2.inWidth, u2 + x2), C2 = Number.NEGATIVE_INFINITY, E2 = -1, R2 = m2; R2 < g2; R2 += a2)
              for (var I2 = R2 - v2, k2 = b2; k2 < w2; k2 += i2) {
                var S2 = k2 - x2, A2 = h2.get(f2, R2, k2, d2);
                A2 > C2 && (C2 = A2, E2 = I2 * u2 + S2);
              }
            n2.set(E2, f2, p2, y2, d2);
          }
        }
    return n2.toTensor();
  }, o2.prototype.maxPoolBackprop = function(t3, e2, n2, r2) {
    Hh([e2, n2], "maxPoolBackprop");
    for (var o3 = this.maxPoolPositions(e2, r2), a2 = r2.strideHeight, i2 = r2.strideWidth, s2 = r2.dilationHeight, u2 = r2.dilationWidth, c2 = r2.effectiveFilterHeight, l2 = r2.effectiveFilterWidth, h2 = l2 - 1 - r2.padInfo.left, f2 = c2 - 1 - r2.padInfo.top, d2 = dr(e2.shape, "float32"), p2 = this.bufferSync(o3), v2 = this.bufferSync(t3), m2 = 0; m2 < r2.batchSize; ++m2)
      for (var g2 = 0; g2 < r2.inChannels; ++g2)
        for (var y2 = 0; y2 < r2.inHeight; ++y2)
          for (var x2 = 0; x2 < r2.inWidth; ++x2) {
            for (var b2 = y2 - f2, w2 = x2 - h2, C2 = 0, E2 = 0; E2 < c2; E2 += s2) {
              var R2 = (b2 + E2) / a2;
              if (!(R2 < 0 || R2 >= r2.outHeight || Math.floor(R2) !== R2))
                for (var I2 = 0; I2 < l2; I2 += u2) {
                  var k2 = (w2 + I2) / i2;
                  if (!(k2 < 0 || k2 >= r2.outWidth || Math.floor(k2) !== k2)) {
                    var S2 = c2 * l2 - 1 - p2.get(m2, R2, k2, g2) === E2 * l2 + I2 ? 1 : 0;
                    if (0 !== S2)
                      C2 += v2.get(m2, R2, k2, g2) * S2;
                  }
                }
            }
            d2.set(C2, m2, y2, x2, g2);
          }
    return d2.toTensor();
  }, o2.prototype.avgPoolBackprop = function(t3, e2, n2) {
    Hh([t3, e2], "avgPoolBackprop");
    for (var r2 = n2.strideHeight, o3 = n2.strideWidth, a2 = n2.filterHeight, i2 = n2.filterWidth, s2 = n2.dilationHeight, u2 = n2.dilationWidth, c2 = n2.effectiveFilterHeight, l2 = n2.effectiveFilterWidth, h2 = l2 - 1 - n2.padInfo.left, f2 = c2 - 1 - n2.padInfo.top, d2 = dr(e2.shape, "float32"), p2 = 1 / (a2 * i2), v2 = this.bufferSync(t3), m2 = 0; m2 < n2.batchSize; ++m2)
      for (var g2 = 0; g2 < n2.inChannels; ++g2)
        for (var y2 = 0; y2 < n2.inHeight; ++y2)
          for (var x2 = 0; x2 < n2.inWidth; ++x2) {
            for (var b2 = y2 - f2, w2 = x2 - h2, C2 = 0, E2 = 0; E2 < c2; E2 += s2) {
              var R2 = (b2 + E2) / r2;
              if (!(R2 < 0 || R2 >= n2.outHeight || Math.floor(R2) !== R2))
                for (var I2 = 0; I2 < l2; I2 += u2) {
                  var k2 = (w2 + I2) / o3;
                  if (!(k2 < 0 || k2 >= n2.outWidth || Math.floor(k2) !== k2))
                    C2 += v2.get(m2, R2, k2, g2);
                }
            }
            d2.set(C2 * p2, m2, y2, x2, g2);
          }
    return d2.toTensor();
  }, o2.prototype.pool3d = function(t3, e2, n2) {
    Hh(t3, "pool3d");
    for (var r2 = e2.strideDepth, o3 = e2.strideHeight, a2 = e2.strideWidth, i2 = e2.dilationDepth, s2 = e2.dilationHeight, u2 = e2.dilationWidth, c2 = e2.effectiveFilterDepth, l2 = e2.effectiveFilterHeight, h2 = e2.effectiveFilterWidth, f2 = e2.padInfo.front, d2 = e2.padInfo.top, p2 = e2.padInfo.left, v2 = "max" === n2 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, m2 = this.readSync(t3.dataId), g2 = dr(e2.outShape, t3.dtype), y2 = g2.values, x2 = e2.outShape[1] * e2.outShape[2] * e2.outShape[3] * e2.outShape[4], b2 = e2.outShape[2] * e2.outShape[3] * e2.outShape[4], w2 = e2.outShape[3] * e2.outShape[4], C2 = e2.outShape[4], E2 = 0; E2 < e2.batchSize; ++E2)
      for (var R2 = E2 * x2, I2 = E2 * t3.strides[0], k2 = 0; k2 < e2.inChannels; ++k2)
        for (var S2 = 0; S2 < e2.outDepth; ++S2) {
          for (var A2 = S2 * r2 - f2, D2 = A2; D2 < 0; )
            D2 += i2;
          for (var T2 = Math.min(e2.inDepth, c2 + A2), N2 = R2 + S2 * b2, F2 = 0; F2 < e2.outHeight; ++F2) {
            for (var _2 = F2 * o3 - d2, O2 = _2; O2 < 0; )
              O2 += s2;
            for (var M2 = Math.min(e2.inHeight, l2 + _2), B2 = N2 + F2 * w2, P2 = 0; P2 < e2.outWidth; ++P2) {
              for (var L2 = P2 * a2 - p2, W2 = L2; W2 < 0; )
                W2 += u2;
              for (var U2 = Math.min(e2.inWidth, h2 + L2), V2 = B2 + P2 * C2, z2 = v2, G2 = 0, H2 = 0, q2 = D2; q2 < T2; q2 += i2) {
                for (var K2 = I2 + q2 * t3.strides[1], j2 = O2; j2 < M2; j2 += s2) {
                  for (var X2 = K2 + j2 * t3.strides[2], Y2 = W2; Y2 < U2; Y2 += u2) {
                    var $2 = m2[X2 + Y2 * t3.strides[3] + k2];
                    if ("max" === n2 && $2 > z2 ? z2 = $2 : "avg" === n2 && (G2 += $2, H2++), isNaN(z2))
                      break;
                  }
                  if (isNaN(z2))
                    break;
                }
                if (isNaN(z2))
                  break;
              }
              y2[V2 + k2] = "avg" === n2 ? G2 / H2 : z2;
            }
          }
        }
    return g2.toTensor();
  }, o2.prototype.avgPool3d = function(t3, e2) {
    return Hh(t3, "avgPool3d"), this.pool3d(t3, e2, "avg").toFloat();
  }, o2.prototype.avgPool3dBackprop = function(t3, e2, n2) {
    Hh([t3, e2], "avgPool3dBackprop");
    for (var r2 = n2.strideDepth, o3 = n2.strideHeight, a2 = n2.strideWidth, i2 = n2.filterDepth, s2 = n2.filterHeight, u2 = n2.filterWidth, c2 = n2.dilationDepth, l2 = n2.dilationHeight, h2 = n2.dilationWidth, f2 = n2.effectiveFilterDepth, d2 = n2.effectiveFilterHeight, p2 = n2.effectiveFilterWidth, v2 = f2 - 1 - n2.padInfo.front, m2 = p2 - 1 - n2.padInfo.left, g2 = d2 - 1 - n2.padInfo.top, y2 = dr(e2.shape, "float32"), x2 = 1 / (i2 * s2 * u2), b2 = this.bufferSync(t3), w2 = 0; w2 < n2.batchSize; ++w2)
      for (var C2 = 0; C2 < n2.inChannels; ++C2)
        for (var E2 = 0; E2 < n2.inDepth; ++E2)
          for (var R2 = 0; R2 < n2.inHeight; ++R2)
            for (var I2 = 0; I2 < n2.inWidth; ++I2) {
              for (var k2 = E2 - v2, S2 = R2 - g2, A2 = I2 - m2, D2 = 0, T2 = 0; T2 < f2; T2 += c2) {
                var N2 = (k2 + T2) / r2;
                if (!(N2 < 0 || N2 >= n2.outDepth || Math.floor(N2) !== N2))
                  for (var F2 = 0; F2 < d2; F2 += l2) {
                    var _2 = (S2 + F2) / o3;
                    if (!(_2 < 0 || _2 >= n2.outHeight || Math.floor(_2) !== _2))
                      for (var O2 = 0; O2 < p2; O2 += h2) {
                        var M2 = (A2 + O2) / a2;
                        if (!(M2 < 0 || M2 >= n2.outWidth || Math.floor(M2) !== M2))
                          D2 += b2.get(w2, N2, _2, M2, C2);
                      }
                  }
              }
              y2.set(D2 * x2, w2, E2, R2, I2, C2);
            }
    return y2.toTensor();
  }, o2.prototype.maxPool3d = function(t3, e2) {
    return Hh(t3, "maxPool3d"), this.pool3d(t3, e2, "max").toFloat();
  }, o2.prototype.maxPool3dPositions = function(t3, e2) {
    for (var n2 = dr(e2.outShape, "int32"), r2 = e2.strideDepth, o3 = e2.strideHeight, a2 = e2.strideWidth, i2 = e2.dilationDepth, s2 = e2.dilationHeight, u2 = e2.dilationWidth, c2 = e2.effectiveFilterDepth, l2 = e2.effectiveFilterHeight, h2 = e2.effectiveFilterWidth, f2 = e2.padInfo.front, d2 = e2.padInfo.top, p2 = e2.padInfo.left, v2 = this.bufferSync(t3), m2 = 0; m2 < e2.batchSize; ++m2)
      for (var g2 = 0; g2 < e2.inChannels; ++g2)
        for (var y2 = 0; y2 < e2.outDepth; ++y2) {
          for (var x2 = y2 * r2 - f2, b2 = x2; b2 < 0; )
            b2 += i2;
          for (var w2 = Math.min(e2.inDepth, c2 + x2), C2 = 0; C2 < e2.outHeight; ++C2) {
            for (var E2 = C2 * o3 - d2, R2 = E2; R2 < 0; )
              R2 += s2;
            for (var I2 = Math.min(e2.inHeight, l2 + E2), k2 = 0; k2 < e2.outWidth; ++k2) {
              for (var S2 = k2 * a2 - p2, A2 = S2; A2 < 0; )
                A2 += u2;
              for (var D2 = Math.min(e2.inWidth, h2 + S2), T2 = Number.NEGATIVE_INFINITY, N2 = -1, F2 = b2; F2 < w2; F2 += i2)
                for (var _2 = F2 - x2, O2 = R2; O2 < I2; O2 += s2)
                  for (var M2 = O2 - E2, B2 = A2; B2 < D2; B2 += u2) {
                    var P2 = B2 - S2, L2 = v2.get(m2, F2, O2, B2, g2);
                    L2 >= T2 && (T2 = L2, N2 = _2 * l2 * h2 + M2 * l2 + P2);
                  }
              n2.set(N2, m2, y2, C2, k2, g2);
            }
          }
        }
    return n2.toTensor();
  }, o2.prototype.maxPool3dBackprop = function(t3, e2, n2, r2) {
    Hh([e2, n2], "maxPool3dBackprop");
    for (var o3 = this.maxPool3dPositions(e2, r2), a2 = r2.strideDepth, i2 = r2.strideHeight, s2 = r2.strideWidth, u2 = r2.dilationDepth, c2 = r2.dilationHeight, l2 = r2.dilationWidth, h2 = r2.effectiveFilterDepth, f2 = r2.effectiveFilterHeight, d2 = r2.effectiveFilterWidth, p2 = h2 - 1 - r2.padInfo.front, v2 = d2 - 1 - r2.padInfo.left, m2 = f2 - 1 - r2.padInfo.top, g2 = dr(e2.shape, "float32"), y2 = this.bufferSync(o3), x2 = this.bufferSync(t3), b2 = 0; b2 < r2.batchSize; ++b2)
      for (var w2 = 0; w2 < r2.inChannels; ++w2)
        for (var C2 = 0; C2 < r2.inDepth; ++C2)
          for (var E2 = 0; E2 < r2.inHeight; ++E2)
            for (var R2 = 0; R2 < r2.inWidth; ++R2) {
              for (var I2 = C2 - p2, k2 = E2 - m2, S2 = R2 - v2, A2 = 0, D2 = 0; D2 < h2; D2 += u2) {
                var T2 = (I2 + D2) / a2;
                if (!(T2 < 0 || T2 >= r2.outDepth || Math.floor(T2) !== T2))
                  for (var N2 = 0; N2 < f2; N2 += c2) {
                    var F2 = (k2 + N2) / i2;
                    if (!(F2 < 0 || F2 >= r2.outHeight || Math.floor(F2) !== F2))
                      for (var _2 = 0; _2 < d2; _2 += l2) {
                        var O2 = (S2 + _2) / s2;
                        if (!(O2 < 0 || O2 >= r2.outWidth || Math.floor(O2) !== O2)) {
                          var M2 = h2 * f2 * d2 - 1 - y2.get(b2, T2, F2, O2, w2) === D2 * f2 * d2 + N2 * d2 + _2 ? 1 : 0;
                          if (0 !== M2)
                            A2 += x2.get(b2, T2, F2, O2, w2) * M2;
                        }
                      }
                  }
              }
              g2.set(A2, b2, C2, E2, R2, w2);
            }
    return g2.toTensor();
  }, o2.prototype.cast = function(t3, e2) {
    return Po(t3, e2, this);
  }, o2.prototype.reshape = function(t3, e2) {
    return Lo(t3, e2);
  }, o2.prototype.avgPool = function(t3, e2) {
    return Hh(t3, "avgPool"), this.pool(t3, e2, "avg").toFloat();
  }, o2.prototype.resizeBilinear = function(t3, e2, n2, r2) {
    Hh(t3, "resizeBilinear");
    for (var o3 = t3.shape, a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3], c2 = this.readSync(t3.dataId), l2 = new Float32Array(k([a2, e2, n2, u2])), h2 = [r2 && e2 > 1 ? i2 - 1 : i2, r2 && n2 > 1 ? s2 - 1 : s2], f2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2], d2 = 0, p2 = h2[0] / f2[0], v2 = h2[1] / f2[1], m2 = 0; m2 < a2; m2++)
      for (var g2 = 0; g2 < e2; g2++)
        for (var y2 = p2 * g2, x2 = Math.floor(y2), b2 = y2 - x2, w2 = Math.min(i2 - 1, Math.ceil(y2)), C2 = m2 * t3.strides[0] + x2 * t3.strides[1], E2 = m2 * t3.strides[0] + w2 * t3.strides[1], R2 = 0; R2 < n2; R2++)
          for (var I2 = v2 * R2, S2 = Math.floor(I2), A2 = I2 - S2, D2 = Math.min(s2 - 1, Math.ceil(I2)), T2 = C2 + S2 * t3.strides[2], N2 = E2 + S2 * t3.strides[2], F2 = C2 + D2 * t3.strides[2], _2 = E2 + D2 * t3.strides[2], O2 = 0; O2 < u2; O2++) {
            var M2 = c2[T2 + O2], B2 = c2[N2 + O2], P2 = M2 + (c2[F2 + O2] - M2) * A2, L2 = P2 + (B2 + (c2[_2 + O2] - B2) * A2 - P2) * b2;
            l2[d2++] = L2;
          }
    return Fn(l2, [a2, e2, n2, u2]);
  }, o2.prototype.resizeBilinearBackprop = function(t3, e2, n2) {
    Hh([t3, e2], "resizeBilinearBackprop");
    for (var r2 = e2.shape, o3 = r2[0], a2 = r2[1], i2 = r2[2], s2 = r2[3], u2 = t3.shape, c2 = u2[1], l2 = u2[2], h2 = new Float32Array(o3 * a2 * i2 * s2), f2 = [n2 && c2 > 1 ? a2 - 1 : a2, n2 && l2 > 1 ? i2 - 1 : i2], d2 = [n2 && c2 > 1 ? c2 - 1 : c2, n2 && l2 > 1 ? l2 - 1 : l2], p2 = f2[0] / d2[0], v2 = f2[1] / d2[1], m2 = this.readSync(t3.dataId), g2 = 0, y2 = 0; y2 < o3; y2++)
      for (var x2 = y2 * e2.strides[0], b2 = 0; b2 < c2; b2++)
        for (var w2 = b2 * p2, C2 = Math.floor(w2), E2 = Math.min(Math.ceil(w2), a2 - 1), R2 = x2 + C2 * e2.strides[1], I2 = x2 + E2 * e2.strides[1], k2 = w2 - C2, S2 = 1 - k2, A2 = 0; A2 < l2; A2++)
          for (var D2 = A2 * v2, T2 = Math.floor(D2), N2 = Math.min(Math.ceil(D2), i2 - 1), F2 = D2 - T2, _2 = 1 - F2, O2 = R2 + T2 * e2.strides[2], M2 = R2 + N2 * e2.strides[2], B2 = I2 + T2 * e2.strides[2], P2 = I2 + N2 * e2.strides[2], L2 = S2 * _2, W2 = S2 * F2, U2 = k2 * _2, V2 = k2 * F2, z2 = 0; z2 < s2; z2++) {
            var G2 = m2[g2++];
            h2[O2 + z2] += G2 * L2, h2[M2 + z2] += G2 * W2, h2[B2 + z2] += G2 * U2, h2[P2 + z2] += G2 * V2;
          }
    return Ln(h2, [o3, i2, a2, s2], e2.dtype);
  }, o2.prototype.resizeNearestNeighbor = function(t3, e2, n2, r2) {
    Hh(t3, "resizeNearestNeighbor");
    for (var o3 = t3.shape, a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3], c2 = this.readSync(t3.dataId), l2 = new Float32Array(a2 * e2 * n2 * u2), h2 = [r2 && e2 > 1 ? i2 - 1 : i2, r2 && n2 > 1 ? s2 - 1 : s2], f2 = [r2 && e2 > 1 ? e2 - 1 : e2, r2 && n2 > 1 ? n2 - 1 : n2], d2 = h2[0] / f2[0], p2 = h2[1] / f2[1], v2 = 0, m2 = 0; m2 < a2; m2++)
      for (var g2 = m2 * t3.strides[0], y2 = 0; y2 < e2; y2++)
        for (var x2 = d2 * y2, b2 = g2 + Math.min(i2 - 1, r2 ? Math.round(x2) : Math.floor(x2)) * t3.strides[1], w2 = 0; w2 < n2; w2++)
          for (var C2 = p2 * w2, E2 = b2 + Math.min(s2 - 1, r2 ? Math.round(C2) : Math.floor(C2)) * t3.strides[2], R2 = 0; R2 < u2; R2++) {
            var I2 = c2[E2 + R2];
            l2[v2++] = I2;
          }
    return Fn(l2, [a2, e2, n2, u2], t3.dtype);
  }, o2.prototype.resizeNearestNeighborBackprop = function(t3, e2, n2) {
    Hh([t3, e2], "resizeNearestNeighborBackprop");
    for (var r2 = e2.shape, o3 = r2[0], a2 = r2[1], i2 = r2[2], s2 = r2[3], u2 = t3.shape, c2 = u2[1], l2 = u2[2], h2 = new Float32Array(o3 * a2 * i2 * s2), f2 = this.readSync(t3.dataId), d2 = [n2 && c2 > 1 ? a2 - 1 : a2, n2 && l2 > 1 ? i2 - 1 : i2], p2 = [n2 && c2 > 1 ? c2 - 1 : c2, n2 && l2 > 1 ? l2 - 1 : l2], v2 = d2[0] / p2[0], m2 = d2[1] / p2[1], g2 = 1 / v2, y2 = 1 / m2, x2 = 2 * Math.ceil(g2) + 2, b2 = 2 * Math.ceil(y2) + 2, w2 = 0; w2 < o3; w2++)
      for (var C2 = w2 * e2.strides[0], E2 = 0; E2 < a2; E2++)
        for (var R2 = C2 + E2 * e2.strides[1], I2 = Math.floor(E2 * g2), k2 = Math.floor(I2 - x2 / 2), S2 = 0; S2 < i2; S2++)
          for (var A2 = R2 + S2 * e2.strides[2], D2 = Math.floor(S2 * y2), T2 = Math.floor(D2 - b2 / 2), N2 = 0; N2 < s2; N2++) {
            for (var F2 = 0, _2 = 0; _2 < x2; _2++) {
              var O2 = _2 + k2;
              if (!(O2 < 0 || O2 >= c2)) {
                var M2 = C2 + O2 * t3.strides[1], B2 = O2 * v2;
                if (E2 === Math.min(a2 - 1, n2 ? Math.round(B2) : Math.floor(B2)))
                  for (var P2 = 0; P2 < b2; P2++) {
                    var L2 = P2 + T2;
                    if (!(L2 < 0 || L2 >= l2)) {
                      var W2 = M2 + L2 * t3.strides[2], U2 = L2 * m2;
                      S2 === Math.min(i2 - 1, n2 ? Math.round(U2) : Math.floor(U2)) && (F2 += f2[W2 + N2]);
                    }
                  }
              }
            }
            h2[A2 + N2] = F2;
          }
    return Ln(h2, e2.shape, e2.dtype);
  }, o2.prototype.batchNormalization = function(t3, e2, n2, r2, o3, a2) {
    Hh([t3, e2, n2, o3, a2], "batchNorm");
    for (var i2 = this.readSync(t3.dataId), s2 = this.readSync(e2.dataId), u2 = this.readSync(n2.dataId), c2 = o3 ? this.readSync(o3.dataId) : new Float32Array([1]), l2 = a2 ? this.readSync(a2.dataId) : new Float32Array([0]), h2 = new Float32Array(i2.length), f2 = l2.length, d2 = c2.length, p2 = u2.length, v2 = s2.length, m2 = 0, g2 = 0, y2 = 0, x2 = 0, b2 = 0; b2 < i2.length; ++b2)
      h2[b2] = l2[m2++] + (i2[b2] - s2[g2++]) * c2[y2++] / Math.sqrt(u2[x2++] + r2), m2 >= f2 && (m2 = 0), g2 >= v2 && (g2 = 0), y2 >= d2 && (y2 = 0), x2 >= p2 && (x2 = 0);
    return Ln(h2, t3.shape);
  }, o2.prototype.localResponseNormalization4D = function(t3, e2, n2, r2, o3) {
    Hh(t3, "localResponseNormalization4D");
    var a2 = t3.shape[3], i2 = a2 - 1, s2 = this.readSync(t3.dataId), u2 = t3.size, c2 = new Float32Array(u2);
    function l2(t4) {
      for (var n3 = t4 % a2, r3 = t4 - n3 + Math.max(0, n3 - e2), o4 = t4 - n3 + Math.min(n3 + e2, i2), u3 = 0; r3 <= o4; r3++) {
        var c3 = s2[r3];
        u3 += c3 * c3;
      }
      return u3;
    }
    for (var h2 = 0; h2 < u2; h2++) {
      var f2 = l2(h2), d2 = s2[h2] * Math.pow(n2 + r2 * f2, -o3);
      c2[h2] = d2;
    }
    return Ln(c2, t3.shape);
  }, o2.prototype.LRNGrad = function(t3, e2, n2, r2, o3, a2, i2) {
    Hh(t3, "LRNGrad");
    for (var s2 = t3.shape[3], u2 = this.readSync(t3.dataId), c2 = this.readSync(e2.dataId), l2 = this.readSync(n2.dataId), h2 = new Float32Array(t3.size), f2 = t3.size, d2 = 0; d2 < f2; d2++) {
      for (var p2 = d2 % s2, v2 = d2 - p2 + Math.max(0, p2 - r2), m2 = d2 - p2 + Math.min(s2, p2 + r2 + 1), g2 = 0, y2 = v2; y2 < m2; y2++)
        g2 += Math.pow(c2[y2], 2);
      g2 = a2 * g2 + o3;
      for (y2 = v2; y2 < m2; y2++) {
        var x2 = -2 * a2 * i2 * c2[y2] * l2[d2] / g2;
        d2 === y2 && (x2 += Math.pow(g2, -i2)), x2 *= u2[d2], h2[y2] += x2;
      }
    }
    return Ln(h2, t3.shape);
  }, o2.prototype.multinomial = function(t3, e2, n2, r2) {
    Hh(t3, "multinomial");
    for (var o3 = e2 ? t3 : go(t3), a2 = o3.shape[0], i2 = o3.shape[1], s2 = Gn([a2, n2], "int32"), u2 = this.readSync(s2.dataId), c2 = this.readSync(o3.dataId), l2 = 0; l2 < a2; ++l2) {
      var h2 = l2 * i2, f2 = new Float32Array(i2 - 1);
      f2[0] = c2[h2];
      for (var d2 = 1; d2 < f2.length; ++d2)
        f2[d2] = f2[d2 - 1] + c2[h2 + d2];
      for (var p2 = cr(r2.toString()), v2 = l2 * n2, m2 = 0; m2 < n2; ++m2) {
        var g2 = p2();
        u2[v2 + m2] = f2.length;
        for (var y2 = 0; y2 < f2.length; y2++)
          if (g2 < f2[y2]) {
            u2[v2 + m2] = y2;
            break;
          }
      }
    }
    return s2;
  }, o2.prototype.oneHot = function(t3, e2, n2, r2) {
    Hh(t3, "oneHot");
    var o3 = new Float32Array(t3.size * e2);
    o3.fill(r2);
    for (var a2 = this.readSync(t3.dataId), i2 = 0; i2 < t3.size; ++i2)
      a2[i2] >= 0 && a2[i2] < e2 && (o3[i2 * e2 + a2[i2]] = n2);
    return Bn(o3, [t3.size, e2], "int32");
  }, o2.prototype.nonMaxSuppression = function(t3, e2, n2, r2, o3) {
    return Hh(t3, "nonMaxSuppression"), jo(this.readSync(t3.dataId), this.readSync(e2.dataId), n2, r2, o3);
  }, o2.prototype.fft = function(t3) {
    return this.fftBatch(t3, false);
  }, o2.prototype.ifft = function(t3) {
    return this.fftBatch(t3, true);
  }, o2.prototype.fftBatch = function(t3, e2) {
    for (var n2 = t3.shape[0], r2 = t3.shape[1], o3 = dr(t3.shape, "float32"), a2 = dr(t3.shape, "float32"), i2 = Tn(t3).as2D(n2, r2), s2 = Nn(t3).as2D(n2, r2), u2 = 0; u2 < n2; u2++)
      for (var c2 = i2.slice([u2, 0], [1, r2]), l2 = s2.slice([u2, 0], [1, r2]), h2 = Dn(c2, l2), f2 = this.readSync(this.fftImpl(h2, e2).dataId), d2 = 0; d2 < r2; d2++) {
        var p2 = zo(f2, d2);
        o3.values[u2 * r2 + d2] = p2.real, a2.values[u2 * r2 + d2] = p2.imag;
      }
    return Dn(o3.toTensor(), a2.toTensor()).as2D(n2, r2);
  }, o2.prototype.fftImpl = function(t3, e2) {
    var n2 = t3.as1D(), r2 = n2.size;
    if (this.isExponentOf2(r2)) {
      var o3 = this.fftRadix2(n2, r2, e2).as2D(t3.shape[0], t3.shape[1]);
      return e2 && (o3 = Dn(Tn(o3).div(On(r2)), Nn(o3).div(On(r2)))), o3;
    }
    var a2 = this.readSync(t3.dataId), i2 = function(t4) {
      for (var e3 = new Float32Array(t4.length / 2), n3 = new Float32Array(t4.length / 2), r3 = 0; r3 < t4.length; r3 += 2)
        e3[r3 / 2] = t4[r3], n3[r3 / 2] = t4[r3 + 1];
      return { real: e3, imag: n3 };
    }(this.fourierTransformByMatmul(a2, r2, e2));
    return Dn(i2.real, i2.imag).as2D(t3.shape[0], t3.shape[1]);
  }, o2.prototype.isExponentOf2 = function(t3) {
    return 0 == (t3 & t3 - 1);
  }, o2.prototype.fftRadix2 = function(t3, e2, n2) {
    if (1 === e2)
      return t3;
    var r2 = this.readSync(t3.dataId), o3 = e2 / 2, a2 = function(t4) {
      for (var e3 = Math.ceil(t4.length / 4), n3 = new Float32Array(e3), r3 = new Float32Array(e3), o4 = 0; o4 < t4.length; o4 += 4)
        n3[Math.floor(o4 / 4)] = t4[o4], r3[Math.floor(o4 / 4)] = t4[o4 + 1];
      return { real: n3, imag: r3 };
    }(r2), i2 = Dn(a2.real, a2.imag).as1D(), s2 = function(t4) {
      for (var e3 = Math.floor(t4.length / 4), n3 = new Float32Array(e3), r3 = new Float32Array(e3), o4 = 2; o4 < t4.length; o4 += 4)
        n3[Math.floor(o4 / 4)] = t4[o4], r3[Math.floor(o4 / 4)] = t4[o4 + 1];
      return { real: n3, imag: r3 };
    }(r2), u2 = Dn(s2.real, s2.imag).as1D();
    i2 = this.fftRadix2(i2, o3, n2), u2 = this.fftRadix2(u2, o3, n2);
    var c2 = function(t4, e3) {
      for (var n3 = new Float32Array(t4 / 2), r3 = new Float32Array(t4 / 2), o4 = 0; o4 < Math.ceil(t4 / 2); o4++) {
        var a3 = (e3 ? 2 : -2) * Math.PI * (o4 / t4);
        n3[o4] = Math.cos(a3), r3[o4] = Math.sin(a3);
      }
      return { real: n3, imag: r3 };
    }(e2, n2), l2 = Dn(c2.real, c2.imag).mul(u2), h2 = i2.add(l2), f2 = i2.sub(l2), d2 = Tn(h2).concat(Tn(f2)), p2 = Nn(h2).concat(Nn(f2));
    return Dn(d2, p2).as1D();
  }, o2.prototype.fourierTransformByMatmul = function(t3, e2, n2) {
    for (var r2 = new Float32Array(2 * e2), o3 = 0; o3 < e2; o3++) {
      for (var a2 = 0, i2 = 0, s2 = 0; s2 < e2; s2++) {
        var u2 = Ho(o3 * s2, e2, n2), c2 = zo(t3, s2);
        a2 += c2.real * u2.real - c2.imag * u2.imag, i2 += c2.real * u2.imag + c2.imag * u2.real;
      }
      n2 && (a2 /= e2, i2 /= e2), Go(r2, a2, i2, o3);
    }
    return r2;
  }, o2.prototype.depthToSpace = function(t3, e2, n2) {
    C("NHWC" === n2, function() {
      return "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + n2;
    }), C(e2 > 1, function() {
      return "blockSize should be > 1 for depthToSpace, but was: " + e2;
    });
    for (var r2 = t3.shape[0], o3 = t3.shape[1], a2 = t3.shape[2], i2 = t3.shape[3], s2 = o3 * e2, u2 = a2 * e2, c2 = i2 / (e2 * e2), l2 = this.readSync(t3.dataId), h2 = new Float32Array(r2 * s2 * u2 * c2), f2 = 0, d2 = 0; d2 < r2; ++d2)
      for (var p2 = 0; p2 < s2; ++p2)
        for (var v2 = Math.floor(p2 / e2), m2 = p2 % e2, g2 = 0; g2 < u2; ++g2)
          for (var y2 = Math.floor(g2 / e2), x2 = (m2 * e2 + g2 % e2) * c2, b2 = 0; b2 < c2; ++b2) {
            var w2 = b2 + x2 + i2 * (y2 + a2 * (v2 + o3 * d2));
            h2[f2++] = l2[w2];
          }
    return Ln(h2, [r2, s2, u2, c2]);
  }, o2.prototype.broadcastedBinaryOp = function(t3, e2, n2, r2) {
    var o3 = Ro(t3.shape, e2.shape), a2 = dr(o3, n2), i2 = this.readSync(t3.dataId), s2 = this.readSync(e2.dataId), u2 = Co(t3.shape, o3), c2 = Co(e2.shape, o3), l2 = a2.values;
    if (u2.length + c2.length === 0)
      for (var h2 = 0; h2 < l2.length; ++h2)
        l2[h2] = r2(i2[h2 % i2.length], s2[h2 % s2.length]);
    else {
      var f2 = this.bufferSync(t3), d2 = this.bufferSync(e2), p2 = function(n3) {
        var o4 = a2.indexToLoc(n3), h3 = o4.slice(-t3.rank);
        u2.forEach(function(t4) {
          return h3[t4] = 0;
        });
        var p3 = f2.locToIndex(h3), v2 = o4.slice(-e2.rank);
        c2.forEach(function(t4) {
          return v2[t4] = 0;
        });
        var m2 = d2.locToIndex(v2);
        l2[n3] = r2(i2[p3], s2[m2]);
      };
      for (h2 = 0; h2 < l2.length; ++h2)
        p2(h2);
    }
    return a2.toTensor();
  }, o2.prototype.broadcastedBinaryComplexOp = function(t3, e2, n2) {
    var r2 = Ro(t3.shape, e2.shape), o3 = dr(r2, "float32"), a2 = dr(r2, "float32"), i2 = this.readSync(t3.dataId), s2 = this.readSync(e2.dataId), u2 = Co(t3.shape, r2), c2 = Co(e2.shape, r2), l2 = o3.values, h2 = a2.values;
    if (u2.length + c2.length === 0)
      for (var f2 = 0; f2 < l2.length; f2++) {
        var d2 = f2 % i2.length, p2 = f2 % s2.length, v2 = n2(i2[2 * d2], i2[2 * d2 + 1], s2[2 * p2], s2[2 * p2 + 1]);
        l2[f2] = v2.real, h2[f2] = v2.imag;
      }
    else {
      var m2 = this.bufferSync(this.data.get(t3.dataId).complexTensors.real), g2 = this.bufferSync(this.data.get(e2.dataId).complexTensors.real), y2 = function(r3) {
        var a3 = o3.indexToLoc(r3), f3 = a3.slice(-t3.rank);
        u2.forEach(function(t4) {
          return f3[t4] = 0;
        });
        var d3 = m2.locToIndex(f3), p3 = a3.slice(-e2.rank);
        c2.forEach(function(t4) {
          return p3[t4] = 0;
        });
        var v3 = g2.locToIndex(p3), y3 = n2(i2[2 * d3], i2[2 * d3 + 1], s2[2 * v3], s2[2 * v3 + 1]);
        l2[r3] = y3.real, h2[r3] = y3.imag;
      };
      for (f2 = 0; f2 < l2.length; f2++)
        y2(f2);
    }
    return this.complex(o3.toTensor(), a2.toTensor());
  }, o2.prototype.split = function(t3, e2, n2) {
    return Zo(t3, e2, n2);
  }, o2.prototype.dispose = function() {
  }, o2.prototype.floatPrecision = function() {
    return 32;
  }, o2.prototype.epsilon = function() {
    return 1e-7;
  }, o2.prototype.cropAndResize = function(t3, e2, n2, r2, o3, a2) {
    for (var i2 = t3.shape, s2 = i2[0], u2 = i2[1], c2 = i2[2], l2 = i2[3], h2 = e2.shape[0], f2 = r2[0], d2 = r2[1], p2 = dr([h2, f2, d2, l2], "float32"), v2 = this.readSync(e2.dataId), m2 = this.readSync(n2.dataId), g2 = this.readSync(t3.dataId), y2 = t3.strides, x2 = p2.strides, b2 = 0; b2 < h2; b2++) {
      var w2 = 4 * b2, C2 = v2[w2], E2 = v2[w2 + 1], R2 = v2[w2 + 2], I2 = v2[w2 + 3], k2 = m2[b2];
      if (!(k2 >= s2))
        for (var S2 = f2 > 1 ? (R2 - C2) * (u2 - 1) / (f2 - 1) : 0, A2 = d2 > 1 ? (I2 - E2) * (c2 - 1) / (d2 - 1) : 0, D2 = 0; D2 < f2; D2++) {
          var T2 = f2 > 1 ? C2 * (u2 - 1) + D2 * S2 : 0.5 * (C2 + R2) * (u2 - 1);
          if (T2 < 0 || T2 > u2 - 1)
            for (var N2 = 0; N2 < d2; N2++)
              for (var F2 = 0; F2 < l2; F2++) {
                var _2 = F2 + N2 * x2[2] + D2 * x2[1] + b2 * x2[0];
                p2.values[_2] = a2;
              }
          else if ("bilinear" === o3) {
            var O2 = Math.floor(T2), M2 = Math.ceil(T2), B2 = T2 - O2;
            for (N2 = 0; N2 < d2; N2++) {
              if ((q2 = d2 > 1 ? E2 * (c2 - 1) + N2 * A2 : 0.5 * (E2 + I2) * (c2 - 1)) < 0 || q2 > c2 - 1)
                for (F2 = 0; F2 < l2; F2++) {
                  _2 = F2 + N2 * x2[2] + D2 * x2[1] + b2 * x2[0];
                  p2.values[_2] = a2;
                }
              else {
                var P2 = Math.floor(q2), L2 = Math.ceil(q2), W2 = q2 - P2;
                for (F2 = 0; F2 < l2; F2++) {
                  var U2 = g2[_2 = F2 + P2 * y2[2] + O2 * y2[1] + k2 * y2[0]], V2 = g2[_2 = F2 + L2 * y2[2] + O2 * y2[1] + k2 * y2[0]], z2 = g2[_2 = F2 + P2 * y2[2] + M2 * y2[1] + k2 * y2[0]], G2 = U2 + (V2 - U2) * W2, H2 = z2 + (g2[_2 = F2 + L2 * y2[2] + M2 * y2[1] + k2 * y2[0]] - z2) * W2;
                  _2 = F2 + N2 * x2[2] + D2 * x2[1] + b2 * x2[0], p2.values[_2] = G2 + (H2 - G2) * B2;
                }
              }
            }
          } else
            for (N2 = 0; N2 < d2; ++N2) {
              var q2;
              if ((q2 = d2 > 1 ? E2 * (c2 - 1) + N2 * A2 : 0.5 * (E2 + I2) * (c2 - 1)) < 0 || q2 > c2 - 1)
                for (F2 = 0; F2 < l2; F2++) {
                  _2 = F2 + N2 * x2[2] + D2 * x2[1] + b2 * x2[0];
                  p2.values[_2] = a2;
                }
              else {
                var K2 = Math.round(q2), j2 = Math.round(T2);
                for (F2 = 0; F2 < l2; F2++) {
                  var X2 = F2 + K2 * y2[2] + j2 * y2[1] + k2 * y2[0], Y2 = F2 + N2 * x2[2] + D2 * x2[1] + b2 * x2[0];
                  p2.values[Y2] = g2[X2];
                }
              }
            }
        }
    }
    return p2.toTensor();
  }, o2.prototype.sparseToDense = function(t3, e2, n2, r2) {
    var o3 = Zr(0, t3, n2), a2 = o3.sliceRank, i2 = o3.numUpdates, s2 = o3.sliceSize, u2 = o3.strides, c2 = o3.outputSize;
    return this.scatter(t3, e2, n2, c2, s2, i2, a2, u2, r2, false);
  }, o2.prototype.gatherND = function(t3, e2) {
    var n2 = e2.shape, r2 = n2[n2.length - 1], o3 = jr(t3, e2), a2 = o3[0], i2 = o3[1], s2 = o3[2], u2 = o3[3];
    if (0 === i2)
      return Fn([], a2, t3.dtype);
    for (var c2 = new gt([i2, s2], t3.dtype), l2 = this.readSync(e2.dataId), h2 = this.readSync(t3.dataId), f2 = 0; f2 < i2; f2++) {
      for (var d2 = [], p2 = 0, v2 = 0; v2 < r2; v2++) {
        var m2 = l2[f2 * r2 + v2];
        p2 += m2 * u2[v2], d2.push(m2);
      }
      if (p2 < 0 || p2 >= t3.size / s2)
        throw new Error("Invalid indices: " + d2 + " does not index into " + t3.shape);
      for (var g2 = 0; g2 < s2; g2++)
        c2.values[f2 * s2 + g2] = h2[p2 * s2 + g2];
    }
    return c2.toTensor().reshape(a2);
  }, o2.prototype.scatterND = function(t3, e2, n2) {
    var r2 = Zr(0, t3, n2), o3 = r2.sliceRank, a2 = r2.numUpdates, i2 = r2.sliceSize, s2 = r2.strides, u2 = r2.outputSize, c2 = On(0);
    return this.scatter(t3, e2, n2, u2, i2, a2, o3, s2, c2, true);
  }, o2.prototype.fill = function(t3, e2, n2) {
    var r2 = P(n2 = n2 || j(e2), k(t3));
    return r2.fill(e2), Lt.makeTensor(r2, t3, n2, this);
  }, o2.prototype.onesLike = function(t3) {
    if ("string" === t3.dtype)
      throw new Error("onesLike is not supported for string tensors");
    return this.fill(t3.shape, 1, t3.dtype);
  }, o2.prototype.zerosLike = function(t3) {
    var e2 = P(t3.dtype, k(t3.shape));
    return this.makeOutput(e2, t3.shape, t3.dtype);
  }, o2.prototype.linspace = function(t3, e2, n2) {
    return Wo(t3, e2, n2);
  }, o2.prototype.scatter = function(t3, e2, n2, r2, o3, a2, i2, s2, u2, c2) {
    var l2 = [r2 / o3, o3], h2 = this.readSync(t3.dataId), f2 = this.readSync(e2.dataId);
    if (0 === r2)
      return Fn([], n2, e2.dtype);
    var d2 = new gt(l2, e2.dtype);
    d2.values.fill(this.readSync(u2.dataId)[0]);
    for (var p2 = 0; p2 < a2; p2++) {
      for (var v2 = [], m2 = 0, g2 = 0; g2 < i2; g2++) {
        var y2 = h2[p2 * i2 + g2];
        v2.push(y2), m2 += y2 * s2[g2];
      }
      if (m2 < 0 || m2 >= r2 / o3)
        throw new Error("Invalid indices: " + v2 + " does not index into " + n2);
      for (var x2 = 0; x2 < o3; x2++)
        c2 ? d2.values[m2 * o3 + x2] += f2[p2 * o3 + x2] : d2.values[m2 * o3 + x2] = 0 === e2.rank ? f2[0] : f2[p2 * o3 + x2];
    }
    return d2.toTensor().reshape(n2);
  }, o2;
}(bo);
Lt.registerBackend("cpu", function() {
  return new Kh();
}, 1);
for (jh = 0, Xh = [{ kernelName: "NonMaxSuppressionV5", backendName: "cpu", kernelFunc: function(t2) {
  var e2 = t2.inputs, n2 = t2.backend, r2 = t2.attrs, o2 = e2, a2 = o2.boxes, i2 = o2.scores, s2 = r2, u2 = s2.maxOutputSize, c2 = s2.iouThreshold, l2 = s2.scoreThreshold, h2 = s2.softNmsSigma, f2 = n2;
  Hh(a2, "NonMaxSuppressionWithScore");
  var d2 = Xo(f2.data.get(a2.dataId).values, f2.data.get(i2.dataId).values, u2, c2, l2, h2);
  return [d2.selectedIndices, d2.selectedScores];
} }, { kernelName: "Square", backendName: "cpu", kernelFunc: function(t2) {
  var e2 = t2.inputs, n2 = t2.backend, r2 = e2.x, o2 = n2;
  Hh(r2, "square");
  for (var a2 = o2.data.get(r2.dataId).values, i2 = new Float32Array(a2.length), s2 = 0; s2 < a2.length; ++s2) {
    var u2 = a2[s2];
    i2[s2] = u2 * u2;
  }
  return { dataId: o2.write(i2, r2.shape, r2.dtype), shape: r2.shape, dtype: r2.dtype };
} }, { kernelName: eu, backendName: "cpu", kernelFunc: function(t2) {
  var e2 = t2.inputs, n2 = t2.backend, r2 = e2, o2 = r2.a, a2 = r2.b, i2 = n2;
  Hh([o2, a2], eu);
  var s2 = i2.data.get(o2.dataId).values, u2 = i2.data.get(a2.dataId).values, c2 = function(t3, e3, n3, r3, o3, a3) {
    var i3 = Ro(t3, e3), s3 = i3.length, u3 = $(i3), c3 = B(o3, k(i3)), l3 = t3.length, h3 = e3.length, f2 = $(t3), d2 = $(e3), p2 = Co(t3, i3), v2 = Co(e3, i3);
    if (p2.length + v2.length === 0)
      for (var m2 = 0; m2 < c3.length; ++m2)
        c3[m2] = a3(n3[m2 % n3.length], r3[m2 % r3.length]);
    else {
      var g2 = function(t4) {
        var e4 = it(t4, s3, u3), o4 = e4.slice(-l3);
        p2.forEach(function(t5) {
          return o4[t5] = 0;
        });
        var i4 = at(o4, l3, f2), m3 = e4.slice(-h3);
        v2.forEach(function(t5) {
          return m3[t5] = 0;
        });
        var g3 = at(m3, h3, d2);
        c3[t4] = a3(n3[i4], r3[g3]);
      };
      for (m2 = 0; m2 < c3.length; ++m2)
        g2(m2);
    }
    return [c3, i3];
  }(o2.shape, a2.shape, s2, u2, o2.dtype, function(t3, e3) {
    var n3 = t3 - e3;
    return n3 * n3;
  }), l2 = c2[0], h2 = c2[1];
  return { dataId: i2.write(l2, h2, o2.dtype), shape: h2, dtype: o2.dtype };
} }]; jh < Xh.length; jh++) {
  d(Xh[jh]);
}
var jh;
var Xh;
var Yh;
var $h = function(t2) {
  this.variableNames = ["A"];
  var e2 = ua(), n2 = t2[0], r2 = t2[1];
  this.outputShape = t2, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + r2 + ".0, " + n2 + ".0);\n\n        vec4 values = " + e2.texture2D + "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";
};
var Qh = function(t2) {
  this.variableNames = ["A"], this.packedInputs = false, this.packedOutput = true;
  var e2 = ua(), n2 = t2[0], r2 = t2[1];
  this.outputShape = t2, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(" + r2 + ".0, " + n2 + ".0);\n            vec4 values = " + e2.texture2D + "(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        " + e2.output + " = result;\n      }\n    ";
};
for (Jh = 0, Zh = [{ kernelName: "FromPixels", backendName: "webgl", kernelFunc: function(t2) {
  var e2 = t2.inputs, n2 = t2.backend, r2 = t2.attrs, o2 = e2.pixels, a2 = r2.numChannels, s2 = "undefined" != typeof HTMLVideoElement && o2 instanceof HTMLVideoElement, u2 = "undefined" != typeof HTMLImageElement && o2 instanceof HTMLImageElement, c2 = s2 ? [o2.videoWidth, o2.videoHeight] : [o2.width, o2.height], l2 = c2[0], h2 = c2[1], f2 = [h2, l2], d2 = [h2, l2, a2];
  (u2 || s2) && (null == Yh && (Yh = document.createElement("canvas").getContext("2d")), Yh.canvas.width = l2, Yh.canvas.height = h2, Yh.drawImage(o2, 0, 0, l2, h2), o2 = Yh.canvas);
  var p2 = n2.makeTensorInfo(f2, "int32");
  n2.texData.get(p2.dataId).usage = zt.PIXELS, n2.gpgpu.uploadPixelDataToTexture(n2.getTexture(p2.dataId), o2);
  var v2 = i().getBool("WEBGL_PACK") ? new Qh(d2) : new $h(d2), m2 = n2.runWebGLProgram(v2, [p2], "int32");
  return n2.disposeData(p2.dataId), m2;
} }, { kernelName: "NonMaxSuppressionV5", backendName: "webgl", kernelFunc: function(t2) {
  var e2 = t2.inputs, n2 = t2.backend, r2 = t2.attrs;
  dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  var o2 = e2, a2 = o2.boxes, i2 = o2.scores, s2 = r2, u2 = s2.maxOutputSize, c2 = s2.iouThreshold, l2 = s2.scoreThreshold, h2 = s2.softNmsSigma, f2 = n2, d2 = Xo(f2.readSync(a2.dataId), f2.readSync(i2.dataId), u2, c2, l2, h2);
  return [d2.selectedIndices, d2.selectedScores];
} }, { kernelName: "Square", backendName: "webgl", kernelFunc: function(t2) {
  var e2 = t2.inputs, n2 = t2.backend, r2 = e2.x, o2 = n2, a2 = new Cs(r2.shape, "return x * x;");
  return o2.runWebGLProgram(a2, [r2], r2.dtype);
} }, { kernelName: eu, backendName: "webgl", kernelFunc: function(t2) {
  var e2 = t2.inputs, n2 = t2.backend, r2 = e2, o2 = r2.a, a2 = r2.b, s2 = n2, u2 = i().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new La("return (a - b) * (a - b);", o2.shape, a2.shape) : new Ba("return (a - b) * (a - b);", o2.shape, a2.shape);
  return s2.compileAndRun(u2, [o2, a2]);
} }]; Jh < Zh.length; Jh++) {
  d(Zh[Jh]);
}
var Jh;
var Zh;
for (tf = 0, ef = [{ kernelName: "Square", gradFunc: function(t2, e2) {
  var n2 = e2[0];
  return { x: function() {
    return t2.mul(n2.toFloat().mul(2));
  } };
} }, { kernelName: eu, gradFunc: function(t2, e2) {
  var n2 = e2[0], r2 = e2[1], o2 = On(2);
  return { a: function() {
    return gc(t2, gc(o2, Cc(n2, r2)));
  }, b: function() {
    return gc(t2, gc(o2, Cc(r2, n2)));
  } };
} }]; tf < ef.length; tf++) {
  p(ef[tf]);
}
var tf;
var ef;
var nf = function() {
  function t2() {
  }
  return t2.prototype.fetch = function(t3, e2) {
    return fetch(t3, e2);
  }, t2.prototype.now = function() {
    return performance.now();
  }, t2.prototype.encode = function(t3, e2) {
    if ("utf-8" !== e2 && "utf8" !== e2)
      throw new Error("Browser's encoder only supports utf-8, but got " + e2);
    return null == this.textEncoder && (this.textEncoder = new TextEncoder()), this.textEncoder.encode(t3);
  }, t2.prototype.decode = function(t3, e2) {
    return new TextDecoder(e2).decode(t3);
  }, t2;
}();
i().get("IS_BROWSER") && i().setPlatform("browser", new nf());
var rf;
var of = function() {
  return require_node_fetch();
};
var af = function() {
  function t2() {
    this.util = require_util(), this.textEncoder = new this.util.TextEncoder();
  }
  return t2.prototype.fetch = function(t3, e2) {
    return null != i().global.fetch ? i().global.fetch(t3, e2) : (null == rf && (rf = of()), rf(t3, e2));
  }, t2.prototype.now = function() {
    var t3 = process.hrtime();
    return 1e3 * t3[0] + t3[1] / 1e6;
  }, t2.prototype.encode = function(t3, e2) {
    if ("utf-8" !== e2 && "utf8" !== e2)
      throw new Error("Node built-in encoder only supports utf-8, but got " + e2);
    return this.textEncoder.encode(t3);
  }, t2.prototype.decode = function(t3, e2) {
    return 0 === t3.length ? "" : new this.util.TextDecoder(e2).decode(t3);
  }, t2;
}();
i().get("IS_NODE") && i().setPlatform("node", new af());
var sf = { float32: 4, int32: 4, uint16: 2, uint8: 1, bool: 1 };
var uf = 4;
function cf(t2, e2) {
  for (var n2 = {}, r2 = 0, o2 = function(e3) {
    var o3 = e3.name, a3 = e3.dtype, i3 = e3.shape, s2 = k(i3), u2 = void 0;
    if ("quantization" in e3) {
      var c2 = e3.quantization;
      if ("uint8" !== c2.dtype && "uint16" !== c2.dtype)
        throw new Error("Weight " + e3.name + " has unknown quantization dtype " + c2.dtype + ". Supported quantization dtypes are: 'uint8' and 'uint16'.");
      var l2 = sf[c2.dtype], h2 = t2.slice(r2, r2 + s2 * l2), f2 = "uint8" === c2.dtype ? new Uint8Array(h2) : new Uint16Array(h2);
      if ("float32" === a3)
        u2 = Float32Array.from(f2, function(t3) {
          return t3 * c2.scale + c2.min;
        });
      else {
        if ("int32" !== a3)
          throw new Error("Unsupported dtype in weight '" + o3 + "': " + a3);
        u2 = Int32Array.from(f2, function(t3) {
          return Math.round(t3 * c2.scale + c2.min);
        });
      }
      r2 += s2 * l2;
    } else if ("string" === a3) {
      var d2 = k(e3.shape);
      u2 = [];
      for (var p2 = 0; p2 < d2; p2++) {
        var v2 = new Uint32Array(t2.slice(r2, r2 + uf))[0];
        r2 += uf;
        var m2 = new Uint8Array(t2.slice(r2, r2 + v2));
        u2.push(m2), r2 += v2;
      }
    } else {
      var g2 = sf[a3];
      h2 = t2.slice(r2, r2 + s2 * g2);
      if ("float32" === a3)
        u2 = new Float32Array(h2);
      else if ("int32" === a3)
        u2 = new Int32Array(h2);
      else {
        if ("bool" !== a3)
          throw new Error("Unsupported dtype in weight '" + o3 + "': " + a3);
        u2 = new Uint8Array(h2);
      }
      r2 += s2 * g2;
    }
    n2[o3] = Fn(u2, i3, a3);
  }, a2 = 0, i2 = e2; a2 < i2.length; a2++) {
    o2(i2[a2]);
  }
  return n2;
}
function lf(t2) {
  if (null === t2)
    throw new Error("Invalid input value: " + JSON.stringify(t2));
  var e2 = 0, n2 = [];
  t2.forEach(function(t3) {
    if (e2 += t3.byteLength, n2.push(t3.byteLength === t3.buffer.byteLength ? t3 : new t3.constructor(t3)), !(t3 instanceof Float32Array || t3 instanceof Int32Array || t3 instanceof Uint8Array))
      throw new Error("Unsupported TypedArray subtype: " + t3.constructor.name);
  });
  var r2 = new Uint8Array(e2), o2 = 0;
  return n2.forEach(function(t3) {
    r2.set(new Uint8Array(t3.buffer), o2), o2 += t3.byteLength;
  }), r2.buffer;
}
var hf = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);
function ff(t2) {
  return hf ? Buffer.byteLength(t2) : new Blob([t2]).size;
}
function df(t2) {
  var e2 = 0;
  t2.forEach(function(t3) {
    e2 += t3.byteLength;
  });
  var n2 = new Uint8Array(e2), r2 = 0;
  return t2.forEach(function(t3) {
    n2.set(new Uint8Array(t3), r2), r2 += t3.byteLength;
  }), n2.buffer;
}
function pf(t2) {
  for (t2 = t2.trim(); t2.endsWith("/"); )
    t2 = t2.slice(0, t2.length - 1);
  var e2 = t2.split("/");
  return e2[e2.length - 1];
}
function vf(t2) {
  if (t2.modelTopology instanceof ArrayBuffer)
    throw new Error("Expected JSON model topology, received ArrayBuffer.");
  return { dateSaved: /* @__PURE__ */ new Date(), modelTopologyType: "JSON", modelTopologyBytes: null == t2.modelTopology ? 0 : ff(JSON.stringify(t2.modelTopology)), weightSpecsBytes: null == t2.weightSpecs ? 0 : ff(JSON.stringify(t2.weightSpecs)), weightDataBytes: null == t2.weightData ? 0 : t2.weightData.byteLength };
}
var mf = function() {
  function t2() {
    this.saveRouters = [], this.loadRouters = [];
  }
  return t2.getInstance = function() {
    return null == t2.instance && (t2.instance = new t2()), t2.instance;
  }, t2.registerSaveRouter = function(e2) {
    t2.getInstance().saveRouters.push(e2);
  }, t2.registerLoadRouter = function(e2) {
    t2.getInstance().loadRouters.push(e2);
  }, t2.getSaveHandlers = function(e2) {
    return t2.getHandlers(e2, "save");
  }, t2.getLoadHandlers = function(e2, n2) {
    return t2.getHandlers(e2, "load", n2);
  }, t2.getHandlers = function(e2, n2, r2) {
    var o2 = [];
    return ("load" === n2 ? t2.getInstance().loadRouters : t2.getInstance().saveRouters).forEach(function(t3) {
      var n3 = t3(e2, r2);
      null !== n3 && o2.push(n3);
    }), o2;
  }, t2;
}();
var gf = "://";
var yf = function() {
  function t2() {
    this.managers = {};
  }
  return t2.getInstance = function() {
    return null == t2.instance && (t2.instance = new t2()), t2.instance;
  }, t2.registerManager = function(e2, n2) {
    C(null != e2, function() {
      return "scheme must not be undefined or null.";
    }), e2.endsWith(gf) && (e2 = e2.slice(0, e2.indexOf(gf))), C(e2.length > 0, function() {
      return "scheme must not be an empty string.";
    });
    var r2 = t2.getInstance();
    C(null == r2.managers[e2], function() {
      return "A model store manager is already registered for scheme '" + e2 + "'.";
    }), r2.managers[e2] = n2;
  }, t2.getManager = function(t3) {
    var e2 = this.getInstance().managers[t3];
    if (null == e2)
      throw new Error("Cannot find model manager for scheme '" + t3 + "'");
    return e2;
  }, t2.getSchemes = function() {
    return Object.keys(this.getInstance().managers);
  }, t2;
}();
function xf(t2) {
  if (-1 === t2.indexOf(gf))
    throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + yf.getSchemes().join(","));
  return { scheme: t2.split(gf)[0], path: t2.split(gf)[1] };
}
function bf(t2, e2, o2) {
  return void 0 === o2 && (o2 = false), n(this, void 0, void 0, function() {
    var n2, a2, i2, s2, u2, c2, l2, h2, f2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          return C(t2 !== e2, function() {
            return "Old path and new path are the same: '" + t2 + "'";
          }), C((n2 = mf.getLoadHandlers(t2)).length > 0, function() {
            return "Copying failed because no load handler is found for source URL " + t2 + ".";
          }), C(n2.length < 2, function() {
            return "Copying failed because more than one (" + n2.length + ") load handlers for source URL " + t2 + ".";
          }), a2 = n2[0], C((i2 = mf.getSaveHandlers(e2)).length > 0, function() {
            return "Copying failed because no save handler is found for destination URL " + e2 + ".";
          }), C(i2.length < 2, function() {
            return "Copying failed because more than one (" + n2.length + ") save handlers for destination URL " + e2 + ".";
          }), s2 = i2[0], u2 = xf(t2).scheme, c2 = xf(t2).path, l2 = u2 === xf(t2).scheme, [4, a2.load()];
        case 1:
          return h2 = r2.sent(), o2 && l2 ? [4, yf.getManager(u2).removeModel(c2)] : [3, 3];
        case 2:
          r2.sent(), r2.label = 3;
        case 3:
          return [4, s2.save(h2)];
        case 4:
          return f2 = r2.sent(), !o2 || l2 ? [3, 6] : [4, yf.getManager(u2).removeModel(c2)];
        case 5:
          r2.sent(), r2.label = 6;
        case 6:
          return [2, f2.modelArtifactsInfo];
      }
    });
  });
}
var wf = "models_store";
var Cf = "model_info_store";
function Ef() {
  if (!i().getBool("IS_BROWSER"))
    throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
  var t2 = window || self, e2 = t2.indexedDB || t2.mozIndexedDB || t2.webkitIndexedDB || t2.msIndexedDB || t2.shimIndexedDB;
  if (null == e2)
    throw new Error("The current browser does not appear to support IndexedDB.");
  return e2;
}
function Rf(t2) {
  var e2 = t2.result;
  e2.createObjectStore(wf, { keyPath: "modelPath" }), e2.createObjectStore(Cf, { keyPath: "modelPath" });
}
var If = function() {
  function t2(t3) {
    if (this.indexedDB = Ef(), null == t3 || !t3)
      throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
    this.modelPath = t3;
  }
  return t2.prototype.save = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(e2) {
        if (t3.modelTopology instanceof ArrayBuffer)
          throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
        return [2, this.databaseAction(this.modelPath, t3)];
      });
    });
  }, t2.prototype.load = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        return [2, this.databaseAction(this.modelPath)];
      });
    });
  }, t2.prototype.databaseAction = function(t3, e2) {
    var n2 = this;
    return new Promise(function(t4, r2) {
      var o2 = n2.indexedDB.open("tensorflowjs", 1);
      o2.onupgradeneeded = function() {
        return Rf(o2);
      }, o2.onsuccess = function() {
        var a2 = o2.result;
        if (null == e2) {
          var i2 = a2.transaction(wf, "readonly"), s2 = i2.objectStore(wf).get(n2.modelPath);
          s2.onsuccess = function() {
            if (null == s2.result)
              return a2.close(), r2(new Error("Cannot find model with path '" + n2.modelPath + "' in IndexedDB."));
            t4(s2.result.modelArtifacts);
          }, s2.onerror = function(t5) {
            return a2.close(), r2(s2.error);
          }, i2.oncomplete = function() {
            return a2.close();
          };
        } else {
          var u2, c2 = vf(e2), l2 = a2.transaction(Cf, "readwrite"), h2 = l2.objectStore(Cf), f2 = h2.put({ modelPath: n2.modelPath, modelArtifactsInfo: c2 });
          f2.onsuccess = function() {
            var o3 = (u2 = a2.transaction(wf, "readwrite")).objectStore(wf).put({ modelPath: n2.modelPath, modelArtifacts: e2, modelArtifactsInfo: c2 });
            o3.onsuccess = function() {
              return t4({ modelArtifactsInfo: c2 });
            }, o3.onerror = function(t5) {
              var e3 = (h2 = l2.objectStore(Cf)).delete(n2.modelPath);
              e3.onsuccess = function() {
                return a2.close(), r2(o3.error);
              }, e3.onerror = function(t6) {
                return a2.close(), r2(o3.error);
              };
            };
          }, f2.onerror = function(t5) {
            return a2.close(), r2(f2.error);
          }, l2.oncomplete = function() {
            null == u2 ? a2.close() : u2.oncomplete = function() {
              return a2.close();
            };
          };
        }
      }, o2.onerror = function(t5) {
        return r2(o2.error);
      };
    });
  }, t2.URL_SCHEME = "indexeddb://", t2;
}();
var kf = function(t2) {
  return i().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(If.URL_SCHEME) ? (e2 = t2.slice(If.URL_SCHEME.length), new If(e2)) : null;
  var e2;
};
mf.registerSaveRouter(kf), mf.registerLoadRouter(kf);
var Sf = function() {
  function t2() {
    this.indexedDB = Ef();
  }
  return t2.prototype.listModels = function() {
    return n(this, void 0, void 0, function() {
      var t3 = this;
      return r(this, function(e2) {
        return [2, new Promise(function(e3, n2) {
          var r2 = t3.indexedDB.open("tensorflowjs", 1);
          r2.onupgradeneeded = function() {
            return Rf(r2);
          }, r2.onsuccess = function() {
            var t4 = r2.result, o2 = t4.transaction(Cf, "readonly"), a2 = o2.objectStore(Cf).getAll();
            a2.onsuccess = function() {
              for (var t5 = {}, n3 = 0, r3 = a2.result; n3 < r3.length; n3++) {
                var o3 = r3[n3];
                t5[o3.modelPath] = o3.modelArtifactsInfo;
              }
              e3(t5);
            }, a2.onerror = function(e4) {
              return t4.close(), n2(a2.error);
            }, o2.oncomplete = function() {
              return t4.close();
            };
          }, r2.onerror = function(t4) {
            return n2(r2.error);
          };
        })];
      });
    });
  }, t2.prototype.removeModel = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2 = this;
      return r(this, function(n2) {
        var r2;
        return t3 = (r2 = t3).startsWith(If.URL_SCHEME) ? r2.slice(If.URL_SCHEME.length) : r2, [2, new Promise(function(n3, r3) {
          var o2 = e2.indexedDB.open("tensorflowjs", 1);
          o2.onupgradeneeded = function() {
            return Rf(o2);
          }, o2.onsuccess = function() {
            var e3, a2 = o2.result, i2 = a2.transaction(Cf, "readwrite"), s2 = i2.objectStore(Cf), u2 = s2.get(t3);
            u2.onsuccess = function() {
              if (null == u2.result)
                return a2.close(), r3(new Error("Cannot find model with path '" + t3 + "' in IndexedDB."));
              var o3 = s2.delete(t3), i3 = function() {
                var o4 = (e3 = a2.transaction(wf, "readwrite")).objectStore(wf).delete(t3);
                o4.onsuccess = function() {
                  return n3(u2.result.modelArtifactsInfo);
                }, o4.onerror = function(t4) {
                  return r3(u2.error);
                };
              };
              o3.onsuccess = i3, o3.onerror = function(t4) {
                return i3(), a2.close(), r3(u2.error);
              };
            }, u2.onerror = function(t4) {
              return a2.close(), r3(u2.error);
            }, i2.oncomplete = function() {
              null == e3 ? a2.close() : e3.oncomplete = function() {
                return a2.close();
              };
            };
          }, o2.onerror = function(t4) {
            return r3(o2.error);
          };
        })];
      });
    });
  }, t2;
}();
if (i().getBool("IS_BROWSER"))
  try {
    yf.registerManager(If.URL_SCHEME, new Sf());
  } catch (t2) {
  }
var Af = "/";
var Df = "tensorflowjs_models";
var Tf = "info";
var Nf = "model_topology";
var Ff = "weight_specs";
var _f = "weight_data";
var Of = "model_metadata";
function Mf(t2) {
  return { info: [Df, t2, Tf].join(Af), topology: [Df, t2, Nf].join(Af), weightSpecs: [Df, t2, Ff].join(Af), weightData: [Df, t2, _f].join(Af), modelMetadata: [Df, t2, Of].join(Af) };
}
function Bf(t2) {
  var e2 = t2.split(Af);
  if (e2.length < 3)
    throw new Error("Invalid key format: " + t2);
  return e2.slice(1, e2.length - 1).join(Af);
}
var Pf = function() {
  function t2(t3) {
    if (!i().getBool("IS_BROWSER") || "undefined" == typeof window || void 0 === window.localStorage)
      throw new Error("The current environment does not support local storage.");
    if (this.LS = window.localStorage, null == t3 || !t3)
      throw new Error("For local storage, modelPath must not be null, undefined or empty.");
    this.modelPath = t3, this.keys = Mf(this.modelPath);
  }
  return t2.prototype.save = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o2;
      return r(this, function(r2) {
        if (t3.modelTopology instanceof ArrayBuffer)
          throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
        e2 = JSON.stringify(t3.modelTopology), n2 = JSON.stringify(t3.weightSpecs), o2 = vf(t3);
        try {
          return this.LS.setItem(this.keys.info, JSON.stringify(o2)), this.LS.setItem(this.keys.topology, e2), this.LS.setItem(this.keys.weightSpecs, n2), this.LS.setItem(this.keys.weightData, function(t4) {
            if (hf)
              return Buffer.from(t4).toString("base64");
            for (var e3 = new Uint8Array(t4), n3 = "", r3 = 0, o3 = e3.length; r3 < o3; r3++)
              n3 += String.fromCharCode(e3[r3]);
            return btoa(n3);
          }(t3.weightData)), this.LS.setItem(this.keys.modelMetadata, JSON.stringify({ format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, userDefinedMetadata: t3.userDefinedMetadata })), [2, { modelArtifactsInfo: o2 }];
        } catch (t4) {
          throw this.LS.removeItem(this.keys.info), this.LS.removeItem(this.keys.topology), this.LS.removeItem(this.keys.weightSpecs), this.LS.removeItem(this.keys.weightData), this.LS.removeItem(this.keys.modelMetadata), new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + o2.modelTopologyBytes + ", weightSpecsBytes=" + o2.weightSpecsBytes + ", weightDataBytes=" + o2.weightDataBytes + ".");
        }
        return [2];
      });
    });
  }, t2.prototype.load = function() {
    return n(this, void 0, void 0, function() {
      var t3, e2, n2, o2, a2, i2, s2;
      return r(this, function(r2) {
        if (null == (t3 = JSON.parse(this.LS.getItem(this.keys.info))))
          throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
        if ("JSON" !== t3.modelTopologyType)
          throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
        if (e2 = {}, null == (n2 = JSON.parse(this.LS.getItem(this.keys.topology))))
          throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
        if (e2.modelTopology = n2, null == (o2 = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
          throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
        if (e2.weightSpecs = o2, null != (a2 = this.LS.getItem(this.keys.modelMetadata)) && (i2 = JSON.parse(a2), e2.format = i2.format, e2.generatedBy = i2.generatedBy, e2.convertedBy = i2.convertedBy, e2.userDefinedMetadata = i2.userDefinedMetadata), null == (s2 = this.LS.getItem(this.keys.weightData)))
          throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
        return e2.weightData = function(t4) {
          if (hf) {
            var e3 = Buffer.from(t4, "base64");
            return e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength);
          }
          for (var n3 = atob(t4), r3 = new Uint8Array(n3.length), o3 = 0; o3 < n3.length; ++o3)
            r3.set([n3.charCodeAt(o3)], o3);
          return r3.buffer;
        }(s2), [2, e2];
      });
    });
  }, t2.URL_SCHEME = "localstorage://", t2;
}();
var Lf = function(t2) {
  return i().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(Pf.URL_SCHEME) ? (e2 = t2.slice(Pf.URL_SCHEME.length), new Pf(e2)) : null;
  var e2;
};
mf.registerSaveRouter(Lf), mf.registerLoadRouter(Lf);
var Wf = function() {
  function t2() {
    C(i().getBool("IS_BROWSER"), function() {
      return "Current environment is not a web browser";
    }), C("undefined" == typeof window || void 0 !== window.localStorage, function() {
      return "Current browser does not appear to support localStorage";
    }), this.LS = window.localStorage;
  }
  return t2.prototype.listModels = function() {
    return n(this, void 0, void 0, function() {
      var t3, e2, n2, o2, a2, i2;
      return r(this, function(r2) {
        for (t3 = {}, e2 = Df + Af, n2 = Af + Tf, o2 = 0; o2 < this.LS.length; ++o2)
          (a2 = this.LS.key(o2)).startsWith(e2) && a2.endsWith(n2) && (i2 = Bf(a2), t3[i2] = JSON.parse(this.LS.getItem(a2)));
        return [2, t3];
      });
    });
  }, t2.prototype.removeModel = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2;
      return r(this, function(r2) {
        var o2;
        if (t3 = (o2 = t3).startsWith(Pf.URL_SCHEME) ? o2.slice(Pf.URL_SCHEME.length) : o2, e2 = Mf(t3), null == this.LS.getItem(e2.info))
          throw new Error("Cannot find model at path '" + t3 + "'");
        return n2 = JSON.parse(this.LS.getItem(e2.info)), this.LS.removeItem(e2.info), this.LS.removeItem(e2.topology), this.LS.removeItem(e2.weightSpecs), this.LS.removeItem(e2.weightData), [2, n2];
      });
    });
  }, t2;
}();
if (i().getBool("IS_BROWSER"))
  try {
    yf.registerManager(Pf.URL_SCHEME, new Wf());
  } catch (t2) {
  }
var Uf = "model";
var Vf = ".json";
var zf = ".weights.bin";
function Gf(t2) {
  return new Promise(function(t3) {
    return setTimeout(t3);
  }).then(t2);
}
var Hf = function() {
  function t2(e2) {
    if (!i().getBool("IS_BROWSER"))
      throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
    e2.startsWith(t2.URL_SCHEME) && (e2 = e2.slice(t2.URL_SCHEME.length)), null != e2 && 0 !== e2.length || (e2 = Uf), this.modelTopologyFileName = e2 + Vf, this.weightDataFileName = e2 + zf;
  }
  return t2.prototype.save = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o2, a2, i2, s2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            if ("undefined" == typeof document)
              throw new Error("Browser downloads are not supported in this environment since `document` is not present");
            if (e2 = window.URL.createObjectURL(new Blob([t3.weightData], { type: "application/octet-stream" })), !(t3.modelTopology instanceof ArrayBuffer))
              return [3, 1];
            throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
          case 1:
            return n2 = [{ paths: ["./" + this.weightDataFileName], weights: t3.weightSpecs }], o2 = { modelTopology: t3.modelTopology, format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, weightsManifest: n2 }, a2 = window.URL.createObjectURL(new Blob([JSON.stringify(o2)], { type: "application/json" })), (i2 = null == this.jsonAnchor ? document.createElement("a") : this.jsonAnchor).download = this.modelTopologyFileName, i2.href = a2, [4, Gf(function() {
              return i2.dispatchEvent(new MouseEvent("click"));
            })];
          case 2:
            return r2.sent(), null == t3.weightData ? [3, 4] : ((s2 = null == this.weightDataAnchor ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName, s2.href = e2, [4, Gf(function() {
              return s2.dispatchEvent(new MouseEvent("click"));
            })]);
          case 3:
            r2.sent(), r2.label = 4;
          case 4:
            return [2, { modelArtifactsInfo: vf(t3) }];
        }
      });
    });
  }, t2.URL_SCHEME = "downloads://", t2;
}();
var qf = function() {
  function t2(t3) {
    if (null == t3 || t3.length < 1)
      throw new Error("When calling browserFiles, at least 1 file is required, but received " + t3);
    this.files = t3;
  }
  return t2.prototype.load = function() {
    return n(this, void 0, void 0, function() {
      var t3, e2, n2 = this;
      return r(this, function(r2) {
        return t3 = this.files[0], e2 = this.files.slice(1), [2, new Promise(function(r3, o2) {
          var a2 = new FileReader();
          a2.onload = function(a3) {
            var i2 = JSON.parse(a3.target.result), s2 = i2.modelTopology;
            if (null != s2) {
              0 === e2.length && r3({ modelTopology: s2 });
              var u2 = i2.weightsManifest;
              if (null != u2) {
                var c2;
                try {
                  c2 = n2.checkManifestAndWeightFiles(u2, e2);
                } catch (t4) {
                  return void o2(t4);
                }
                var l2 = [], h2 = [], f2 = [];
                u2.forEach(function(t4) {
                  t4.paths.forEach(function(t5) {
                    h2.push(t5), f2.push(null);
                  }), l2.push.apply(l2, t4.weights);
                }), u2.forEach(function(t4) {
                  t4.paths.forEach(function(t5) {
                    var e3 = new FileReader();
                    e3.onload = function(e4) {
                      var n3 = e4.target.result, o3 = h2.indexOf(t5);
                      f2[o3] = n3, -1 === f2.indexOf(null) && r3({ modelTopology: s2, weightSpecs: l2, weightData: df(f2), format: i2.format, generatedBy: i2.generatedBy, convertedBy: i2.convertedBy, userDefinedMetadata: i2.userDefinedMetadata });
                    }, e3.onerror = function(e4) {
                      return o2("Failed to weights data from file of path '" + t5 + "'.");
                    }, e3.readAsArrayBuffer(c2[t5]);
                  });
                });
              } else
                o2(new Error("weightManifest field is missing from file " + t3.name));
            } else
              o2(new Error("modelTopology field is missing from file " + t3.name));
          }, a2.onerror = function(e3) {
            return o2("Failed to read model topology and weights manifest JSON from file '" + t3.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.");
          }, a2.readAsText(t3);
        })];
      });
    });
  }, t2.prototype.checkManifestAndWeightFiles = function(t3, e2) {
    for (var n2 = [], r2 = e2.map(function(t4) {
      return pf(t4.name);
    }), o2 = {}, a2 = 0, i2 = t3; a2 < i2.length; a2++) {
      i2[a2].paths.forEach(function(t4) {
        var a3 = pf(t4);
        if (-1 !== n2.indexOf(a3))
          throw new Error("Duplicate file basename found in weights manifest: '" + a3 + "'");
        if (n2.push(a3), -1 === r2.indexOf(a3))
          throw new Error("Weight file with basename '" + a3 + "' is not provided.");
        o2[t4] = e2[r2.indexOf(a3)];
      });
    }
    if (n2.length !== e2.length)
      throw new Error("Mismatch in the number of files in weights manifest (" + n2.length + ") and the number of weight files provided (" + e2.length + ").");
    return o2;
  }, t2;
}();
function Kf(t2, e2, n2, r2) {
  !function(t3) {
    C(null != t3 && Array.isArray(t3) && t3.length > 0, function() {
      return "promises must be a none empty array";
    });
  }(t2), function(t3, e3) {
    C(t3 >= 0 && t3 <= 1, function() {
      return "Progress fraction must be in range [0, 1], but got startFraction " + t3;
    }), C(e3 >= 0 && e3 <= 1, function() {
      return "Progress fraction must be in range [0, 1], but got endFraction " + e3;
    }), C(e3 >= t3, function() {
      return "startFraction must be no more than endFraction, but got startFraction " + t3 + " and endFraction " + e3;
    });
  }(n2 = null == n2 ? 0 : n2, r2 = null == r2 ? 1 : r2);
  var o2 = 0;
  return Promise.all(t2.map(function(a2) {
    return a2.then(function(a3) {
      var i2 = n2 + ++o2 / t2.length * (r2 - n2);
      return e2(i2), a3;
    }), a2;
  }));
}
function jf(t2, e2) {
  return n(this, void 0, void 0, function() {
    var n2, o2, a2, s2, u2, c2, l2, h2, f2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          return null == e2 && (e2 = {}), n2 = null == e2.fetchFunc ? i().platform.fetch : e2.fetchFunc, o2 = t2.map(function(t3) {
            return n2(t3, e2.requestInit, { isBinary: true });
          }), a2 = 0, s2 = 0.5, null != e2.onProgress ? [3, 2] : [4, Promise.all(o2)];
        case 1:
          return u2 = r2.sent(), [3, 4];
        case 2:
          return [4, Kf(o2, e2.onProgress, a2, s2)];
        case 3:
          u2 = r2.sent(), r2.label = 4;
        case 4:
          return c2 = u2.map(function(t3) {
            return t3.arrayBuffer();
          }), l2 = 0.5, h2 = 1, null != e2.onProgress ? [3, 6] : [4, Promise.all(c2)];
        case 5:
          return f2 = r2.sent(), [3, 8];
        case 6:
          return [4, Kf(c2, e2.onProgress, l2, h2)];
        case 7:
          f2 = r2.sent(), r2.label = 8;
        case 8:
          return [2, f2];
      }
    });
  });
}
function Xf(t2) {
  var e2 = this;
  return function(o2, a2, i2) {
    return void 0 === a2 && (a2 = ""), n(e2, void 0, void 0, function() {
      var e3, n2, s2, u2, c2, l2, h2, f2, d2, p2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (e3 = o2.map(function() {
              return false;
            }), n2 = {}, s2 = null != i2 ? i2.map(function() {
              return false;
            }) : [], u2 = [], o2.forEach(function(t3, r3) {
              var o3 = 0;
              t3.weights.forEach(function(t4) {
                var a3 = "quantization" in t4 ? t4.quantization.dtype : t4.dtype, c3 = sf[a3] * k(t4.shape), l3 = function() {
                  e3[r3] = true, null == n2[r3] && (n2[r3] = []), n2[r3].push({ manifestEntry: t4, groupOffset: o3, sizeBytes: c3 });
                };
                null != i2 ? i2.forEach(function(e4, n3) {
                  e4 === t4.name && (l3(), s2[n3] = true);
                }) : l3(), u2.push(t4.name), o3 += c3;
              });
            }), !s2.every(function(t3) {
              return t3;
            }))
              throw c2 = i2.filter(function(t3, e4) {
                return !s2[e4];
              }), new Error("Could not find weights in manifest with names: " + c2.join(", ") + ". \nManifest JSON has weights with names: " + u2.join(", ") + ".");
            return l2 = e3.reduce(function(t3, e4, n3) {
              return e4 && t3.push(n3), t3;
            }, []), h2 = [], l2.forEach(function(t3) {
              o2[t3].paths.forEach(function(t4) {
                var e4 = a2 + (a2.endsWith("/") ? "" : "/") + t4;
                h2.push(e4);
              });
            }), [4, t2(h2)];
          case 1:
            return f2 = r2.sent(), d2 = {}, p2 = 0, l2.forEach(function(t3) {
              for (var e4 = o2[t3].paths.length, r3 = 0, a3 = 0; a3 < e4; a3++)
                r3 += f2[p2 + a3].byteLength;
              for (var i3 = new ArrayBuffer(r3), s3 = new Uint8Array(i3), u3 = 0, c3 = 0; c3 < e4; c3++) {
                var l3 = new Uint8Array(f2[p2 + c3]);
                s3.set(l3, u3), u3 += l3.byteLength;
              }
              n2[t3].forEach(function(t4) {
                var e5 = cf(i3.slice(t4.groupOffset, t4.groupOffset + t4.sizeBytes), [t4.manifestEntry]);
                for (var n3 in e5)
                  d2[n3] = e5[n3];
              }), p2 += e4;
            }), [2, d2];
        }
      });
    });
  };
}
mf.registerSaveRouter(function(t2) {
  return i().getBool("IS_BROWSER") && !Array.isArray(t2) && t2.startsWith(Hf.URL_SCHEME) ? function(t3) {
    void 0 === t3 && (t3 = "model");
    return new Hf(t3);
  }(t2.slice(Hf.URL_SCHEME.length)) : null;
});
var Yf = function() {
  function t2(t3, e2) {
    if (this.DEFAULT_METHOD = "POST", null == e2 && (e2 = {}), this.weightPathPrefix = e2.weightPathPrefix, this.onProgress = e2.onProgress, null != e2.fetchFunc ? (C("function" == typeof e2.fetchFunc, function() {
      return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)";
    }), this.fetch = e2.fetchFunc) : this.fetch = i().platform.fetch, C(null != t3 && t3.length > 0, function() {
      return "URL path for http must not be null, undefined or empty.";
    }), Array.isArray(t3) && C(2 === t3.length, function() {
      return "URL paths for http must have a length of 2, (actual length is " + t3.length + ").";
    }), this.path = t3, null != e2.requestInit && null != e2.requestInit.body)
      throw new Error("requestInit is expected to have no pre-existing body, but has one.");
    this.requestInit = e2.requestInit || {};
  }
  return t2.prototype.save = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o2, a2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            if (t3.modelTopology instanceof ArrayBuffer)
              throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
            return (e2 = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit)).body = new FormData(), n2 = [{ paths: ["./model.weights.bin"], weights: t3.weightSpecs }], o2 = { modelTopology: t3.modelTopology, format: t3.format, generatedBy: t3.generatedBy, convertedBy: t3.convertedBy, userDefinedMetadata: t3.userDefinedMetadata, weightsManifest: n2 }, e2.body.append("model.json", new Blob([JSON.stringify(o2)], { type: "application/json" }), "model.json"), null != t3.weightData && e2.body.append("model.weights.bin", new Blob([t3.weightData], { type: "application/octet-stream" }), "model.weights.bin"), [4, this.fetch(this.path, e2)];
          case 1:
            if ((a2 = r2.sent()).ok)
              return [2, { modelArtifactsInfo: vf(t3), responses: [a2] }];
            throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + a2.status + ".");
        }
      });
    });
  }, t2.prototype.load = function() {
    return n(this, void 0, void 0, function() {
      var t3, e2, n2, o2, a2, i2, s2, u2, c2, l2, h2, f2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.fetch(this.path, this.requestInit)];
          case 1:
            if (!(t3 = r2.sent()).ok)
              throw new Error("Request to " + this.path + " failed with status code " + t3.status + ". Please verify this URL points to the model JSON of the model to load.");
            r2.label = 2;
          case 2:
            return r2.trys.push([2, 4, , 5]), [4, t3.json()];
          case 3:
            return e2 = r2.sent(), [3, 5];
          case 4:
            throw r2.sent(), n2 = "Failed to parse model JSON of response from " + this.path + ".", this.path.endsWith(".pb") ? n2 += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : n2 += " Please make sure the server is serving valid JSON for this request.", new Error(n2);
          case 5:
            if (o2 = e2.modelTopology, a2 = e2.weightsManifest, i2 = e2.generatedBy, s2 = e2.convertedBy, u2 = e2.format, c2 = e2.userDefinedMetadata, null == o2 && null == a2)
              throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
            return null == a2 ? [3, 7] : [4, this.loadWeights(a2)];
          case 6:
            f2 = r2.sent(), l2 = f2[0], h2 = f2[1], r2.label = 7;
          case 7:
            return [2, { modelTopology: o2, weightSpecs: l2, weightData: h2, userDefinedMetadata: c2, generatedBy: i2, convertedBy: s2, format: u2 }];
        }
      });
    });
  }, t2.prototype.loadWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2, o2, a2, i2, s2, u2, c2, l2, h2, f2;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            for (e2 = Array.isArray(this.path) ? this.path[1] : this.path, n2 = function(t4) {
              var e3 = t4.lastIndexOf("/"), n3 = t4.lastIndexOf("?"), r3 = t4.substring(0, e3), o3 = n3 > e3 ? t4.substring(n3) : "";
              return [r3 + "/", o3];
            }(e2), o2 = n2[0], a2 = n2[1], i2 = this.weightPathPrefix || o2, s2 = [], u2 = 0, c2 = t3; u2 < c2.length; u2++)
              l2 = c2[u2], s2.push.apply(s2, l2.weights);
            return h2 = [], t3.forEach(function(t4) {
              t4.paths.forEach(function(t5) {
                h2.push(i2 + t5 + a2);
              });
            }), [4, jf(h2, { requestInit: this.requestInit, fetchFunc: this.fetch, onProgress: this.onProgress })];
          case 1:
            return f2 = r2.sent(), [2, [s2, df(f2)]];
        }
      });
    });
  }, t2.URL_SCHEME_REGEX = /^https?:\/\//, t2;
}();
function $f(t2) {
  return null != t2.match(Yf.URL_SCHEME_REGEX);
}
var Qf = function(t2, e2) {
  if ("undefined" == typeof fetch)
    return null;
  return (Array.isArray(t2) ? t2.every(function(t3) {
    return $f(t3);
  }) : $f(t2)) ? Jf(t2, { onProgress: e2 }) : null;
};
function Jf(t2, e2) {
  return new Yf(t2, e2);
}
mf.registerSaveRouter(Qf), mf.registerLoadRouter(Qf);
var Zf = function() {
  function t2(t3) {
    this.modelArtifacts = t3;
  }
  return t2.prototype.load = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        return [2, this.modelArtifacts];
      });
    });
  }, t2;
}();
var td = function() {
  function t2(t3) {
    this.saveHandler = t3;
  }
  return t2.prototype.save = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(e2) {
        return [2, this.saveHandler(t3)];
      });
    });
  }, t2;
}();
var ed = Object.freeze({ browserFiles: function(t2) {
  return new qf(t2);
}, browserHTTPRequest: function(t2, e2) {
  return Jf(t2, e2);
}, concatenateArrayBuffers: df, decodeWeights: cf, encodeWeights: function(t2, e2) {
  return n(this, void 0, void 0, function() {
    var o2, a2, i2, s2, u2, c2 = this;
    return r(this, function(l2) {
      switch (l2.label) {
        case 0:
          for (o2 = [], a2 = [], i2 = Array.isArray(t2) ? t2.map(function(t3) {
            return t3.name;
          }) : Object.keys(t2), s2 = function(s3) {
            var u3 = i2[s3], l3 = Array.isArray(t2) ? t2[s3].tensor : t2[u3];
            if ("float32" !== l3.dtype && "int32" !== l3.dtype && "bool" !== l3.dtype && "string" !== l3.dtype)
              throw new Error("Unsupported dtype in weight '" + u3 + "': " + l3.dtype);
            var h2 = { name: u3, shape: l3.shape, dtype: l3.dtype };
            if ("string" === l3.dtype) {
              var f2 = new Promise(function(t3) {
                return n(c2, void 0, void 0, function() {
                  var e3, n2, o3, a3, i3, s4, u4;
                  return r(this, function(r2) {
                    switch (r2.label) {
                      case 0:
                        return [4, l3.bytes()];
                      case 1:
                        for (e3 = r2.sent(), n2 = e3.reduce(function(t4, e4) {
                          return t4 + e4.length;
                        }, 0) + uf * e3.length, o3 = new Uint8Array(n2), a3 = 0, i3 = 0; i3 < e3.length; i3++)
                          s4 = e3[i3], u4 = new Uint8Array(new Uint32Array([s4.length]).buffer), o3.set(u4, a3), a3 += uf, o3.set(s4, a3), a3 += s4.length;
                        return t3(o3), [2];
                    }
                  });
                });
              });
              a2.push(f2);
            } else
              a2.push(l3.data());
            null != e2 && (h2.group = e2), o2.push(h2);
          }, u2 = 0; u2 < i2.length; ++u2)
            s2(u2);
          return [4, Promise.all(a2)];
        case 1:
          return [2, { data: lf(l2.sent()), specs: o2 }];
      }
    });
  });
}, fromMemory: function(t2, e2, n2, r2) {
  return 1 === arguments.length ? null != t2.modelTopology || null != t2.weightSpecs ? new Zf(t2) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new Zf({ modelTopology: t2 })) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new Zf({ modelTopology: t2, weightSpecs: e2, weightData: n2, trainingConfig: r2 }));
}, getLoadHandlers: function(t2, e2) {
  return mf.getLoadHandlers(t2, e2);
}, getModelArtifactsInfoForJSON: vf, getSaveHandlers: function(t2) {
  return mf.getSaveHandlers(t2);
}, http: Jf, isHTTPScheme: $f, loadWeights: function(t2, e2, o2, a2) {
  return void 0 === e2 && (e2 = ""), n(this, void 0, void 0, function() {
    return r(this, function(n2) {
      return [2, Xf(function(t3) {
        return jf(t3, { requestInit: a2 });
      })(t2, e2, o2)];
    });
  });
}, registerLoadRouter: function(t2) {
  return mf.registerLoadRouter(t2);
}, registerSaveRouter: function(t2) {
  return mf.registerSaveRouter(t2);
}, weightsLoaderFactory: Xf, withSaveHandler: function(t2) {
  return new td(t2);
}, copyModel: function(t2, e2) {
  return n(this, void 0, void 0, function() {
    return r(this, function(n2) {
      return false, [2, bf(t2, e2, false)];
    });
  });
}, listModels: function() {
  return n(this, void 0, void 0, function() {
    var t2, e2, n2, o2, a2, i2, s2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          t2 = yf.getSchemes(), e2 = {}, n2 = 0, o2 = t2, r2.label = 1;
        case 1:
          return n2 < o2.length ? (a2 = o2[n2], [4, yf.getManager(a2).listModels()]) : [3, 4];
        case 2:
          for (s2 in i2 = r2.sent())
            e2[a2 + gf + s2] = i2[s2];
          r2.label = 3;
        case 3:
          return n2++, [3, 1];
        case 4:
          return [2, e2];
      }
    });
  });
}, moveModel: function(t2, e2) {
  return n(this, void 0, void 0, function() {
    return r(this, function(n2) {
      return true, [2, bf(t2, e2, true)];
    });
  });
}, removeModel: function(t2) {
  return n(this, void 0, void 0, function() {
    var e2;
    return r(this, function(n2) {
      return e2 = xf(t2), [2, yf.getManager(e2.scheme).removeModel(e2.path)];
    });
  });
} });
var nd;
var rd = An({ confusionMatrix_: function(t2, e2, n2) {
  var r2 = mn(t2, "labels", "confusionMatrix"), o2 = mn(e2, "predictions", "confusionMatrix");
  C(null == n2 || n2 > 0 && Number.isInteger(n2), function() {
    return "If provided, numClasses must be a positive integer, but got " + n2;
  }), C(1 === r2.rank, function() {
    return "Expected the rank of labels to be 1, but got " + r2.rank;
  }), C(1 === o2.rank, function() {
    return "Expected the rank of predictions to be 1, but got " + o2.rank;
  }), C(r2.shape[0] === o2.shape[0], function() {
    return "Mismatch in the number of examples: " + r2.shape[0] + " vs. " + o2.shape[0] + ". Labels and predictions should have the same number of elements.";
  }), C(n2 > 0 && Number.isInteger(n2), function() {
    return "numClasses is required to be a positive integer, but got " + n2;
  });
  var a2 = Rr(r2.asType("int32"), n2), i2 = Rr(o2.asType("int32"), n2);
  return a2.transpose().matMul(i2).asType("int32");
} });
var od = Object.freeze({ confusionMatrix: rd });
var ad = An({ fromPixels_: function(t2, e2) {
  if (void 0 === e2 && (e2 = 3), e2 > 4)
    throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
  if (null == t2)
    throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
  var n2 = false, r2 = false, o2 = false, a2 = false, i2 = false;
  if (t2.data instanceof Uint8Array)
    n2 = true;
  else if ("undefined" != typeof ImageData && t2 instanceof ImageData)
    r2 = true;
  else if ("undefined" != typeof HTMLVideoElement && t2 instanceof HTMLVideoElement)
    o2 = true;
  else if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement)
    a2 = true;
  else {
    if (null == t2.getContext)
      throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " + t2.constructor.name);
    i2 = true;
  }
  if (o2) {
    if (o2 && t2.readyState < 2)
      throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
  }
  if (null != l("FromPixels", Lt.backendName))
    return Lt.runKernel("FromPixels", { pixels: t2 }, { numChannels: e2 });
  var s2, u2, c2 = o2 ? [t2.videoWidth, t2.videoHeight] : [t2.width, t2.height], h2 = c2[0], f2 = c2[1];
  if (i2 ? s2 = t2.getContext("2d").getImageData(0, 0, h2, f2).data : r2 || n2 ? s2 = t2.data : (a2 || o2) && (null == nd && (nd = document.createElement("canvas").getContext("2d")), nd.canvas.width = h2, nd.canvas.height = f2, nd.drawImage(t2, 0, 0, h2, f2), s2 = nd.getImageData(0, 0, h2, f2).data), 4 === e2)
    u2 = new Int32Array(s2);
  else {
    var d2 = h2 * f2;
    u2 = new Int32Array(d2 * e2);
    for (var p2 = 0; p2 < d2; p2++)
      for (var v2 = 0; v2 < e2; ++v2)
        u2[p2 * e2 + v2] = s2[4 * p2 + v2];
  }
  return Pn(u2, [f2, h2, e2], "int32");
} });
var id = Object.freeze({ toPixels: function(t2, e2) {
  return n(this, void 0, void 0, function() {
    var n2, o2, a2, i2, s2, u2, c2, l2, h2, f2, d2, p2, v2, m2, g2, y2, x2, b2, w2, C2, E2, R2, I2;
    return r(this, function(r2) {
      switch (r2.label) {
        case 0:
          if (n2 = mn(t2, "img", "toPixels"), t2 instanceof wt || (n2 = n2.toInt()), 2 !== n2.rank && 3 !== n2.rank)
            throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + n2.rank + ".");
          if (o2 = n2.shape.slice(0, 2), a2 = o2[0], i2 = o2[1], (s2 = 2 === n2.rank ? 1 : n2.shape[2]) > 4 || 2 === s2)
            throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + s2);
          return [4, n2.data()];
        case 1:
          return u2 = r2.sent(), c2 = n2.min(), l2 = n2.max(), [4, Promise.all([c2.data(), l2.data()])];
        case 2:
          if (h2 = r2.sent(), f2 = h2[0], d2 = h2[1], p2 = f2[0], v2 = d2[0], c2.dispose(), l2.dispose(), "float32" === n2.dtype) {
            if (p2 < 0 || v2 > 1)
              throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + p2 + " - " + v2 + "].");
          } else {
            if ("int32" !== n2.dtype)
              throw new Error("Unsupported type for toPixels: " + n2.dtype + ". Please use float32 or int32 tensors.");
            if (p2 < 0 || v2 > 255)
              throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + p2 + " - " + v2 + "].");
          }
          for (m2 = "float32" === n2.dtype ? 255 : 1, g2 = new Uint8ClampedArray(i2 * a2 * 4), y2 = 0; y2 < a2 * i2; ++y2)
            x2 = void 0, b2 = void 0, w2 = void 0, C2 = void 0, 1 === s2 ? (x2 = u2[y2] * m2, b2 = u2[y2] * m2, w2 = u2[y2] * m2, C2 = 255) : 3 === s2 ? (x2 = u2[3 * y2] * m2, b2 = u2[3 * y2 + 1] * m2, w2 = u2[3 * y2 + 2] * m2, C2 = 255) : 4 === s2 && (x2 = u2[4 * y2] * m2, b2 = u2[4 * y2 + 1] * m2, w2 = u2[4 * y2 + 2] * m2, C2 = u2[4 * y2 + 3] * m2), g2[(E2 = 4 * y2) + 0] = Math.round(x2), g2[E2 + 1] = Math.round(b2), g2[E2 + 2] = Math.round(w2), g2[E2 + 3] = Math.round(C2);
          return null != e2 && (e2.width = i2, e2.height = a2, R2 = e2.getContext("2d"), I2 = new ImageData(g2, i2, a2), R2.putImageData(I2, 0, 0)), n2 !== t2 && n2.dispose(), [2, g2];
      }
    });
  });
}, fromPixels: ad });
var sd = function() {
  function t2() {
  }
  return t2.prototype.getClassName = function() {
    return this.constructor.className;
  }, t2.fromConfig = function(t3, e2) {
    return new t3(e2);
  }, t2;
}();
var ud = function() {
  function t2() {
    this.classNameMap = {};
  }
  return t2.getMap = function() {
    return null == t2.instance && (t2.instance = new t2()), t2.instance;
  }, t2.register = function(e2) {
    t2.getMap().classNameMap[e2.className] = [e2, e2.fromConfig];
  }, t2;
}();
function cd(t2) {
  C(null != t2.className, function() {
    return "Class being registered does not have the static className property defined.";
  }), C("string" == typeof t2.className, function() {
    return "className is required to be a string, but got type " + typeof t2.className;
  }), C(t2.className.length > 0, function() {
    return "Class being registered has an empty-string as its className, which is disallowed.";
  }), ud.register(t2);
}
var ld = Object.freeze({ Serializable: sd, SerializationMap: ud, registerClass: cd });
var hd = 1e-3;
var fd = 0.1;
function dd() {
  return 32 === Lt.backend.floatPrecision() ? hd : fd;
}
function pd(t2, e2, n2) {
  var r2 = true;
  if ((V(t2) || V(e2)) && (r2 = false), V(t2) && V(e2) && (r2 = true), r2) {
    var o2 = t2.constructor.name, a2 = e2.constructor.name;
    if (o2 !== a2)
      throw new Error("Arrays are of different type. Actual: " + o2 + ". Expected: " + a2);
  }
  if (Array.isArray(t2) && Array.isArray(e2)) {
    var i2 = pn(t2), s2 = pn(e2);
    if (!S(i2, s2))
      throw new Error("Arrays have different shapes. Actual: [" + i2 + "]. Expected: [" + s2 + "]");
  }
  var u2 = V(t2) ? t2 : I(t2), c2 = V(e2) ? e2 : I(e2);
  if (u2.length !== c2.length)
    throw new Error("Arrays have different lengths actual: " + u2.length + " vs expected: " + c2.length + ".\nActual:   " + u2 + ".\nExpected: " + c2 + ".");
  for (var l2 = 0; l2 < c2.length; ++l2) {
    var h2 = u2[l2], f2 = c2[l2];
    if (!n2(h2, f2))
      throw new Error("Arrays differ: actual[" + l2 + "] = " + h2 + ", expected[" + l2 + "] = " + f2 + ".\nActual:   " + u2 + ".\nExpected: " + c2 + ".");
  }
}
function vd(t2, e2, n2) {
  return !isFinite(t2) && !isFinite(e2) || !(isNaN(t2) || isNaN(e2) || Math.abs(t2 - e2) > n2);
}
var md = Object.freeze({ TEST_EPSILON_FLOAT16: fd, expectArraysClose: function(t2, e2, n2) {
  return null == n2 && (n2 = dd()), pd(t2, e2, function(t3, e3) {
    return vd(t3, e3, n2);
  });
}, testEpsilon: dd, expectPromiseToFail: function(t2, e2) {
  t2().then(function() {
    return e2.fail();
  }, function() {
    return e2();
  });
}, expectArraysEqual: function(t2, e2) {
  var n2 = "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2 ? [e2] : e2;
  return H(t2) || H(t2[0]) || H(e2) || H(e2[0]) ? pd(t2, n2, function(t3, e3) {
    return t3 == e3;
  }) : pd(t2, e2, function(t3, e3) {
    return vd(t3, e3, 0);
  });
}, expectNumbersClose: function(t2, e2, n2) {
  if (null == n2 && (n2 = dd()), !vd(t2, e2, n2))
    throw new Error("Numbers differ: actual === " + t2 + ", expected === " + e2);
}, expectValuesInRange: function(t2, e2, n2) {
  for (var r2 = 0; r2 < t2.length; r2++)
    if (t2[r2] < e2 || t2[r2] > n2)
      throw new Error("Value out of range:" + t2[r2] + " low: " + e2 + ", high: " + n2);
}, expectArrayBuffersEqual: function(t2, e2) {
  expect(new Float32Array(t2)).toEqual(new Float32Array(e2));
} });
var gd = "1.7.0";
var yd = Object.freeze({ gpgpu_util: Mi, webgl_util: Ge, forceHalfFloat: function() {
  i().set("WEBGL_FORCE_F16_TEXTURES", true);
}, MathBackendWebGL: Zs, setWebGLContext: Kt, GPGPUContext: Bi });
var xd = function(t2) {
  function o2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return e(o2, t2), o2.prototype.minimize = function(t3, e2, n2) {
    void 0 === e2 && (e2 = false);
    var r2 = this.computeGradients(t3, n2), o3 = r2.value, a2 = r2.grads;
    if (null != n2) {
      var i2 = n2.map(function(t4) {
        return { name: t4.name, tensor: a2[t4.name] };
      });
      this.applyGradients(i2);
    } else
      this.applyGradients(a2);
    return tn(a2), e2 ? o3 : (o3.dispose(), null);
  }, Object.defineProperty(o2.prototype, "iterations", { get: function() {
    return null == this.iterations_ && (this.iterations_ = 0), this.iterations_;
  }, enumerable: true, configurable: true }), o2.prototype.incrementIterations = function() {
    this.iterations_ = this.iterations + 1;
  }, o2.prototype.computeGradients = function(t3, e2) {
    return po(t3, e2);
  }, o2.prototype.dispose = function() {
    null != this.iterations_ && tn(this.iterations_);
  }, o2.prototype.saveIterations = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        return null == this.iterations_ && (this.iterations_ = 0), [2, { name: "iter", tensor: On(this.iterations_, "int32") }];
      });
    });
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        throw new Error("getWeights() is not implemented for this optimizer yet.");
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(t4) {
        throw new Error("setWeights() is not implemented for this optimizer class " + this.getClassName());
      });
    });
  }, o2.prototype.extractIterations = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2;
      return r(this, function(n2) {
        switch (n2.label) {
          case 0:
            return e2 = this, [4, t3[0].tensor.data()];
          case 1:
            return e2.iterations_ = n2.sent()[0], [2, t3.slice(1)];
        }
      });
    });
  }, o2;
}(sd);
Object.defineProperty(xd, Symbol.hasInstance, { value: function(t2) {
  return null != t2.minimize && null != t2.computeGradients && null != t2.applyGradients;
} });
var bd = function(t2) {
  function o2(e2, n2, r2) {
    void 0 === r2 && (r2 = null);
    var o3 = t2.call(this) || this;
    return o3.learningRate = e2, o3.rho = n2, o3.epsilon = r2, o3.accumulatedGrads = [], o3.accumulatedUpdates = [], null == r2 && (o3.epsilon = Lt.backend.epsilon()), o3;
  }
  return e(o2, t2), o2.prototype.applyGradients = function(t3) {
    var e2 = this;
    (Array.isArray(t3) ? t3.map(function(t4) {
      return t4.name;
    }) : Object.keys(t3)).forEach(function(n2, r2) {
      var o3 = Lt.registeredVariables[n2];
      null == e2.accumulatedGrads[r2] && (e2.accumulatedGrads[r2] = { originalName: n2 + "/accum_grad", variable: Ze(function() {
        return Xn(o3).variable(false);
      }) }), null == e2.accumulatedUpdates[r2] && (e2.accumulatedUpdates[r2] = { originalName: n2 + "/accum_var", variable: Ze(function() {
        return Xn(o3).variable(false);
      }) });
      var a2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
      if (null != a2) {
        var i2 = e2.accumulatedGrads[r2].variable, s2 = e2.accumulatedUpdates[r2].variable;
        Ze(function() {
          var t4 = i2.mul(e2.rho).add(a2.square().mul(1 - e2.rho)), n3 = s2.add(e2.epsilon).sqrt().div(i2.add(e2.epsilon).sqrt()).mul(a2), r3 = s2.mul(e2.rho).add(n3.square().mul(1 - e2.rho));
          i2.assign(t4), s2.assign(r3);
          var u2 = n3.mul(-e2.learningRate).add(o3);
          o3.assign(u2);
        });
      }
    }), this.incrementIterations();
  }, o2.prototype.dispose = function() {
    null != this.accumulatedUpdates && (tn(this.accumulatedGrads.map(function(t3) {
      return t3.variable;
    })), tn(this.accumulatedUpdates.map(function(t3) {
      return t3.variable;
    })));
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      var t3;
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return t3 = this.accumulatedGrads.concat(this.accumulatedUpdates), [4, this.saveIterations()];
          case 1:
            return [2, [e2.sent()].concat(t3.map(function(t4) {
              return { name: t4.originalName, tensor: t4.variable };
            }))];
        }
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2;
      return r(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = n2.sent(), e2 = t3.length / 2, false, this.accumulatedGrads = t3.slice(0, e2).map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), this.accumulatedUpdates = t3.slice(e2, 2 * e2).map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), [2];
        }
      });
    });
  }, o2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, rho: this.rho, epsilon: this.epsilon };
  }, o2.fromConfig = function(t3, e2) {
    return new t3(e2.learningRate, e2.rho, e2.epsilon);
  }, o2.className = "Adadelta", o2;
}(xd);
cd(bd);
var wd = function(t2) {
  function o2(e2, n2) {
    void 0 === n2 && (n2 = 0.1);
    var r2 = t2.call(this) || this;
    return r2.learningRate = e2, r2.initialAccumulatorValue = n2, r2.accumulatedGrads = [], r2;
  }
  return e(o2, t2), o2.prototype.applyGradients = function(t3) {
    var e2 = this;
    (Array.isArray(t3) ? t3.map(function(t4) {
      return t4.name;
    }) : Object.keys(t3)).forEach(function(n2, r2) {
      var o3 = Lt.registeredVariables[n2];
      if (null == e2.accumulatedGrads[r2]) {
        e2.accumulatedGrads[r2] = { originalName: n2 + "/accumulator", variable: Ze(function() {
          return Hn(o3.shape, e2.initialAccumulatorValue).variable(false);
        }) };
      }
      var a2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
      if (null != a2) {
        var i2 = e2.accumulatedGrads[r2].variable;
        Ze(function() {
          var t4 = i2.add(a2.square());
          i2.assign(t4);
          var n3 = a2.div(t4.add(Lt.backend.epsilon()).sqrt()).mul(-e2.learningRate).add(o3);
          o3.assign(n3);
        });
      }
    }), this.incrementIterations();
  }, o2.prototype.dispose = function() {
    null != this.accumulatedGrads && tn(this.accumulatedGrads.map(function(t3) {
      return t3.variable;
    }));
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [t3.sent()].concat(this.accumulatedGrads.map(function(t4) {
              return { name: t4.originalName, tensor: t4.variable };
            }))];
        }
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = e2.sent(), false, this.accumulatedGrads = t3.map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), [2];
        }
      });
    });
  }, o2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, initialAccumulatorValue: this.initialAccumulatorValue };
  }, o2.fromConfig = function(t3, e2) {
    return new t3(e2.learningRate, e2.initialAccumulatorValue);
  }, o2.className = "Adagrad", o2;
}(xd);
cd(wd);
var Cd = function(t2) {
  function o2(e2, n2, r2, o3) {
    void 0 === o3 && (o3 = null);
    var a2 = t2.call(this) || this;
    return a2.learningRate = e2, a2.beta1 = n2, a2.beta2 = r2, a2.epsilon = o3, a2.accumulatedFirstMoment = [], a2.accumulatedSecondMoment = [], Ze(function() {
      a2.accBeta1 = On(n2).variable(), a2.accBeta2 = On(r2).variable();
    }), null == o3 && (a2.epsilon = Lt.backend.epsilon()), a2;
  }
  return e(o2, t2), o2.prototype.applyGradients = function(t3) {
    var e2 = this, n2 = Array.isArray(t3) ? t3.map(function(t4) {
      return t4.name;
    }) : Object.keys(t3);
    Ze(function() {
      var r2 = Cc(1, e2.accBeta1), o3 = Cc(1, e2.accBeta2);
      n2.forEach(function(n3, a2) {
        var i2 = Lt.registeredVariables[n3];
        null == e2.accumulatedFirstMoment[a2] && (e2.accumulatedFirstMoment[a2] = { originalName: n3 + "/m", variable: Ze(function() {
          return Xn(i2).variable(false);
        }) }), null == e2.accumulatedSecondMoment[a2] && (e2.accumulatedSecondMoment[a2] = { originalName: n3 + "/v", variable: Ze(function() {
          return Xn(i2).variable(false);
        }) });
        var s2 = Array.isArray(t3) ? t3[a2].tensor : t3[n3];
        if (null != s2) {
          var u2 = e2.accumulatedFirstMoment[a2].variable, c2 = e2.accumulatedSecondMoment[a2].variable, l2 = u2.mul(e2.beta1).add(s2.mul(1 - e2.beta1)), h2 = c2.mul(e2.beta2).add(s2.square().mul(1 - e2.beta2)), f2 = l2.div(r2), d2 = h2.div(o3);
          u2.assign(l2), c2.assign(h2);
          var p2 = f2.div(d2.sqrt().add(e2.epsilon)).mul(-e2.learningRate).add(i2);
          i2.assign(p2);
        }
      }), e2.accBeta1.assign(e2.accBeta1.mul(e2.beta1)), e2.accBeta2.assign(e2.accBeta2.mul(e2.beta2));
    }), this.incrementIterations();
  }, o2.prototype.dispose = function() {
    this.accBeta1.dispose(), this.accBeta2.dispose(), null != this.accumulatedFirstMoment && tn(this.accumulatedFirstMoment.map(function(t3) {
      return t3.variable;
    })), null != this.accumulatedSecondMoment && tn(this.accumulatedSecondMoment.map(function(t3) {
      return t3.variable;
    }));
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      var t3;
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return t3 = this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment), [4, this.saveIterations()];
          case 1:
            return [2, [e2.sent()].concat(t3.map(function(t4) {
              return { name: t4.originalName, tensor: t4.variable };
            }))];
        }
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2, n2 = this;
      return r(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = r2.sent(), Ze(function() {
              n2.accBeta1.assign(xc(n2.beta1, n2.iterations_ + 1)), n2.accBeta2.assign(xc(n2.beta2, n2.iterations_ + 1));
            }), e2 = t3.length / 2, false, this.accumulatedFirstMoment = t3.slice(0, e2).map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), this.accumulatedSecondMoment = t3.slice(e2, 2 * e2).map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), [2];
        }
      });
    });
  }, o2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon };
  }, o2.fromConfig = function(t3, e2) {
    return new t3(e2.learningRate, e2.beta1, e2.beta2, e2.epsilon);
  }, o2.className = "Adam", o2;
}(xd);
cd(Cd);
var Ed = function(t2) {
  function o2(e2, n2, r2, o3, a2) {
    void 0 === o3 && (o3 = null), void 0 === a2 && (a2 = 0);
    var i2 = t2.call(this) || this;
    return i2.learningRate = e2, i2.beta1 = n2, i2.beta2 = r2, i2.epsilon = o3, i2.decay = a2, i2.accumulatedFirstMoment = [], i2.accumulatedWeightedInfNorm = [], Ze(function() {
      i2.iteration = On(0).variable(), i2.accBeta1 = On(n2).variable();
    }), null == o3 && (i2.epsilon = Lt.backend.epsilon()), i2;
  }
  return e(o2, t2), o2.prototype.applyGradients = function(t3) {
    var e2 = this, n2 = Array.isArray(t3) ? t3.map(function(t4) {
      return t4.name;
    }) : Object.keys(t3);
    Ze(function() {
      var r2 = Cc(1, e2.accBeta1), o3 = sc(-e2.learningRate, e2.iteration.mul(e2.decay).add(1));
      n2.forEach(function(n3, a2) {
        var i2 = Lt.registeredVariables[n3];
        null == e2.accumulatedFirstMoment[a2] && (e2.accumulatedFirstMoment[a2] = { originalName: n3 + "/m", variable: Xn(i2).variable(false) }), null == e2.accumulatedWeightedInfNorm[a2] && (e2.accumulatedWeightedInfNorm[a2] = { originalName: n3 + "/v", variable: Xn(i2).variable(false) });
        var s2 = Array.isArray(t3) ? t3[a2].tensor : t3[n3];
        if (null != s2) {
          var u2 = e2.accumulatedFirstMoment[a2].variable, c2 = e2.accumulatedWeightedInfNorm[a2].variable, l2 = u2.mul(e2.beta1).add(s2.mul(1 - e2.beta1)), h2 = c2.mul(e2.beta2), f2 = s2.abs(), d2 = h2.maximum(f2);
          u2.assign(l2), c2.assign(d2);
          var p2 = o3.div(r2).mul(l2.div(d2.add(e2.epsilon))).add(i2);
          i2.assign(p2);
        }
      }), e2.iteration.assign(e2.iteration.add(1)), e2.accBeta1.assign(e2.accBeta1.mul(e2.beta1));
    }), this.incrementIterations();
  }, o2.prototype.dispose = function() {
    this.accBeta1.dispose(), this.iteration.dispose(), null != this.accumulatedFirstMoment && tn(this.accumulatedFirstMoment.map(function(t3) {
      return t3.variable;
    })), null != this.accumulatedWeightedInfNorm && tn(this.accumulatedWeightedInfNorm.map(function(t3) {
      return t3.variable;
    }));
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        throw new Error("getWeights() is not implemented for Adamax yet.");
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(t4) {
        throw new Error("setWeights() is not implemented for Adamax yet.");
      });
    });
  }, o2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon, decay: this.decay };
  }, o2.fromConfig = function(t3, e2) {
    return new t3(e2.learningRate, e2.beta1, e2.beta2, e2.epsilon, e2.decay);
  }, o2.className = "Adamax", o2;
}(xd);
cd(Ed);
var Rd = function(t2) {
  function o2(e2) {
    var n2 = t2.call(this) || this;
    return n2.learningRate = e2, n2.setLearningRate(e2), n2;
  }
  return e(o2, t2), o2.prototype.applyGradients = function(t3) {
    var e2 = this;
    (Array.isArray(t3) ? t3.map(function(t4) {
      return t4.name;
    }) : Object.keys(t3)).forEach(function(n2, r2) {
      var o3 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
      if (null != o3) {
        var a2 = Lt.registeredVariables[n2];
        Ze(function() {
          var t4 = e2.c.mul(o3).add(a2);
          a2.assign(t4);
        });
      }
    }), this.incrementIterations();
  }, o2.prototype.setLearningRate = function(t3) {
    this.learningRate = t3, null != this.c && this.c.dispose(), this.c = en(On(-t3));
  }, o2.prototype.dispose = function() {
    this.c.dispose();
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [t3.sent()]];
        }
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            if (0 !== (t3 = e2.sent()).length)
              throw new Error("SGD optimizer does not have settable weights.");
            return [2];
        }
      });
    });
  }, o2.prototype.getConfig = function() {
    return { learningRate: this.learningRate };
  }, o2.fromConfig = function(t3, e2) {
    return new t3(e2.learningRate);
  }, o2.className = "SGD", o2;
}(xd);
cd(Rd);
var Id = function(t2) {
  function o2(e2, n2, r2) {
    void 0 === r2 && (r2 = false);
    var o3 = t2.call(this, e2) || this;
    return o3.learningRate = e2, o3.momentum = n2, o3.useNesterov = r2, o3.accumulations = [], o3.m = On(o3.momentum), o3;
  }
  return e(o2, t2), o2.prototype.applyGradients = function(t3) {
    var e2 = this;
    (Array.isArray(t3) ? t3.map(function(t4) {
      return t4.name;
    }) : Object.keys(t3)).forEach(function(n2, r2) {
      var o3 = Lt.registeredVariables[n2];
      if (null == e2.accumulations[r2]) {
        e2.accumulations[r2] = { originalName: n2 + "/momentum", variable: Ze(function() {
          return Xn(o3).variable(false);
        }) };
      }
      var a2 = e2.accumulations[r2].variable, i2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
      null != i2 && Ze(function() {
        var t4, n3 = e2.m.mul(a2).add(i2);
        t4 = e2.useNesterov ? e2.c.mul(i2.add(n3.mul(e2.m))).add(o3) : e2.c.mul(n3).add(o3), a2.assign(n3), o3.assign(t4);
      });
    }), this.incrementIterations();
  }, o2.prototype.dispose = function() {
    this.m.dispose(), null != this.accumulations && tn(this.accumulations.map(function(t3) {
      return t3.variable;
    }));
  }, o2.prototype.setMomentum = function(t3) {
    this.momentum = t3;
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      return r(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.saveIterations()];
          case 1:
            return [2, [t3.sent()].concat(this.accumulations.map(function(t4) {
              return { name: t4.originalName, tensor: t4.variable };
            }))];
        }
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = e2.sent(), false, this.accumulations = t3.map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), [2];
        }
      });
    });
  }, o2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, momentum: this.momentum, useNesterov: this.useNesterov };
  }, o2.fromConfig = function(t3, e2) {
    return new t3(e2.learningRate, e2.momentum, e2.useNesterov);
  }, o2.className = "Momentum", o2;
}(Rd);
cd(Id);
var kd = function(t2) {
  function o2(e2, n2, r2, o3, a2) {
    void 0 === n2 && (n2 = 0.9), void 0 === r2 && (r2 = 0), void 0 === o3 && (o3 = null), void 0 === a2 && (a2 = false);
    var i2 = t2.call(this) || this;
    if (i2.learningRate = e2, i2.decay = n2, i2.momentum = r2, i2.epsilon = o3, i2.accumulatedMeanSquares = [], i2.accumulatedMoments = [], i2.accumulatedMeanGrads = [], i2.centered = a2, null == o3 && (i2.epsilon = Lt.backend.epsilon()), null == e2)
      throw new Error("learningRate for RMSPropOptimizer must be defined.");
    return i2;
  }
  return e(o2, t2), o2.prototype.applyGradients = function(t3) {
    var e2 = this;
    (Array.isArray(t3) ? t3.map(function(t4) {
      return t4.name;
    }) : Object.keys(t3)).forEach(function(n2, r2) {
      var o3 = Lt.registeredVariables[n2];
      null == e2.accumulatedMeanSquares[r2] && (e2.accumulatedMeanSquares[r2] = { originalName: n2 + "/rms", variable: Ze(function() {
        return Xn(o3).variable(false);
      }) }), null == e2.accumulatedMoments[r2] && (e2.accumulatedMoments[r2] = { originalName: n2 + "/momentum", variable: Ze(function() {
        return Xn(o3).variable(false);
      }) }), null == e2.accumulatedMeanGrads[r2] && e2.centered && (e2.accumulatedMeanGrads[r2] = { originalName: n2 + "/mg", variable: Ze(function() {
        return Xn(o3).variable(false);
      }) });
      var a2 = Array.isArray(t3) ? t3[r2].tensor : t3[n2];
      if (null != a2) {
        var i2 = e2.accumulatedMeanSquares[r2].variable, s2 = e2.accumulatedMoments[r2].variable;
        Ze(function() {
          var t4 = i2.mul(e2.decay).add(a2.square().mul(1 - e2.decay));
          if (e2.centered) {
            var n3 = e2.accumulatedMeanGrads[r2].variable, u2 = n3.mul(e2.decay).add(a2.mul(1 - e2.decay)), c2 = s2.mul(e2.momentum).add(a2.mul(e2.learningRate).div(t4.sub(u2.square().add(e2.epsilon)).sqrt()));
            i2.assign(t4), n3.assign(u2), s2.assign(c2);
            var l2 = o3.sub(c2);
            o3.assign(l2);
          } else {
            var h2 = i2.mul(e2.decay).add(a2.square().mul(1 - e2.decay));
            c2 = s2.mul(e2.momentum).add(a2.mul(e2.learningRate).div(h2.add(e2.epsilon).sqrt()));
            i2.assign(h2), s2.assign(c2);
            l2 = o3.sub(c2);
            o3.assign(l2);
          }
        });
      }
    }), this.incrementIterations();
  }, o2.prototype.dispose = function() {
    null != this.accumulatedMeanSquares && tn(this.accumulatedMeanSquares.map(function(t3) {
      return t3.variable;
    })), null != this.accumulatedMeanGrads && this.centered && tn(this.accumulatedMeanGrads.map(function(t3) {
      return t3.variable;
    })), null != this.accumulatedMoments && tn(this.accumulatedMoments.map(function(t3) {
      return t3.variable;
    }));
  }, o2.prototype.getWeights = function() {
    return n(this, void 0, void 0, function() {
      var t3;
      return r(this, function(e2) {
        switch (e2.label) {
          case 0:
            return t3 = this.accumulatedMeanSquares.concat(this.accumulatedMoments), this.centered && t3.push.apply(t3, this.accumulatedMeanGrads), [4, this.saveIterations()];
          case 1:
            return [2, [e2.sent()].concat(t3.map(function(t4) {
              return { name: t4.originalName, tensor: t4.variable };
            }))];
        }
      });
    });
  }, o2.prototype.setWeights = function(t3) {
    return n(this, void 0, void 0, function() {
      var e2;
      return r(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.extractIterations(t3)];
          case 1:
            return t3 = n2.sent(), e2 = this.centered ? t3.length / 3 : t3.length / 2, false, this.accumulatedMeanSquares = t3.slice(0, e2).map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), this.accumulatedMoments = t3.slice(e2, 2 * e2).map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            }), this.centered && (this.accumulatedMeanGrads = t3.slice(2 * e2, 3 * e2).map(function(t4) {
              return { originalName: t4.name, variable: t4.tensor.variable(false) };
            })), [2];
        }
      });
    });
  }, o2.prototype.getConfig = function() {
    return { learningRate: this.learningRate, decay: this.decay, momentum: this.momentum, epsilon: this.epsilon, centered: this.centered };
  }, o2.fromConfig = function(t3, e2) {
    return new t3(e2.learningRate, e2.decay, e2.momentum, e2.epsilon, e2.centered);
  }, o2.className = "RMSProp", o2;
}(xd);
cd(kd);
var Sd = function() {
  function t2() {
  }
  return t2.sgd = function(t3) {
    return new Rd(t3);
  }, t2.momentum = function(t3, e2, n2) {
    return void 0 === n2 && (n2 = false), new Id(t3, e2, n2);
  }, t2.rmsprop = function(t3, e2, n2, r2, o2) {
    return void 0 === e2 && (e2 = 0.9), void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = null), void 0 === o2 && (o2 = false), new kd(t3, e2, n2, r2, o2);
  }, t2.adam = function(t3, e2, n2, r2) {
    return void 0 === t3 && (t3 = 1e-3), void 0 === e2 && (e2 = 0.9), void 0 === n2 && (n2 = 0.999), void 0 === r2 && (r2 = null), new Cd(t3, e2, n2, r2);
  }, t2.adadelta = function(t3, e2, n2) {
    return void 0 === t3 && (t3 = 1e-3), void 0 === e2 && (e2 = 0.95), void 0 === n2 && (n2 = null), new bd(t3, e2, n2);
  }, t2.adamax = function(t3, e2, n2, r2, o2) {
    return void 0 === t3 && (t3 = 2e-3), void 0 === e2 && (e2 = 0.9), void 0 === n2 && (n2 = 0.999), void 0 === r2 && (r2 = null), void 0 === o2 && (o2 = 0), new Ed(t3, e2, n2, r2, o2);
  }, t2.adagrad = function(t3, e2) {
    return void 0 === e2 && (e2 = 0.1), new wd(t3, e2);
  }, t2;
}();
var Ad = { sgd: Sd.sgd, momentum: Sd.momentum, adadelta: Sd.adadelta, adagrad: Sd.adagrad, rmsprop: Sd.rmsprop, adamax: Sd.adamax, adam: Sd.adam };
var Dd = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setImmediate ? setImmediate : function(t2) {
  return t2();
};
function Td() {
  return new Promise(function(t2) {
    return Dd(function() {
      return t2();
    });
  });
}
wt.prototype.squaredDifference = function(t2) {
  return nu(this, t2);
}, xt = Gh;

// node_modules/face-api.js/build/es6/draw/index.js
var draw_exports = {};
__export(draw_exports, {
  AnchorPosition: () => AnchorPosition,
  DrawBox: () => DrawBox,
  DrawBoxOptions: () => DrawBoxOptions,
  DrawFaceLandmarks: () => DrawFaceLandmarks,
  DrawFaceLandmarksOptions: () => DrawFaceLandmarksOptions,
  DrawTextField: () => DrawTextField,
  DrawTextFieldOptions: () => DrawTextFieldOptions,
  drawContour: () => drawContour,
  drawDetections: () => drawDetections,
  drawFaceExpressions: () => drawFaceExpressions,
  drawFaceLandmarks: () => drawFaceLandmarks
});

// node_modules/face-api.js/build/es6/draw/drawContour.js
function drawContour(ctx, points, isClosed) {
  if (isClosed === void 0) {
    isClosed = false;
  }
  ctx.beginPath();
  points.slice(1).forEach(function(_a2, prevIdx) {
    var x2 = _a2.x, y2 = _a2.y;
    var from2 = points[prevIdx];
    ctx.moveTo(from2.x, from2.y);
    ctx.lineTo(x2, y2);
  });
  if (isClosed) {
    var from = points[points.length - 1];
    var to2 = points[0];
    if (!from || !to2) {
      return;
    }
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to2.x, to2.y);
  }
  ctx.stroke();
}

// node_modules/face-api.js/node_modules/tslib/tslib.es6.js
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (b3.hasOwnProperty(p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArrays() {
  for (var s2 = 0, i2 = 0, il2 = arguments.length; i2 < il2; i2++)
    s2 += arguments[i2].length;
  for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il2; i2++)
    for (var a2 = arguments[i2], j2 = 0, jl2 = a2.length; j2 < jl2; j2++, k2++)
      r2[k2] = a2[j2];
  return r2;
}

// node_modules/face-api.js/build/es6/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  computeReshapedDimensions: () => computeReshapedDimensions,
  getCenterPoint: () => getCenterPoint,
  isDimensions: () => isDimensions,
  isEven: () => isEven,
  isFloat: () => isFloat,
  isTensor: () => isTensor,
  isTensor1D: () => isTensor1D,
  isTensor2D: () => isTensor2D,
  isTensor3D: () => isTensor3D,
  isTensor4D: () => isTensor4D,
  isValidNumber: () => isValidNumber,
  isValidProbablitiy: () => isValidProbablitiy,
  range: () => range,
  round: () => round
});

// node_modules/face-api.js/build/es6/classes/Dimensions.js
var Dimensions = (
  /** @class */
  function() {
    function Dimensions2(width, height) {
      if (!isValidNumber(width) || !isValidNumber(height)) {
        throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({ width, height }));
      }
      this._width = width;
      this._height = height;
    }
    Object.defineProperty(Dimensions2.prototype, "width", {
      get: function() {
        return this._width;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Dimensions2.prototype, "height", {
      get: function() {
        return this._height;
      },
      enumerable: true,
      configurable: true
    });
    Dimensions2.prototype.reverse = function() {
      return new Dimensions2(1 / this.width, 1 / this.height);
    };
    return Dimensions2;
  }()
);

// node_modules/face-api.js/build/es6/utils/index.js
function isTensor(tensor, dim) {
  return tensor instanceof wt && tensor.shape.length === dim;
}
function isTensor1D(tensor) {
  return isTensor(tensor, 1);
}
function isTensor2D(tensor) {
  return isTensor(tensor, 2);
}
function isTensor3D(tensor) {
  return isTensor(tensor, 3);
}
function isTensor4D(tensor) {
  return isTensor(tensor, 4);
}
function isFloat(num) {
  return num % 1 !== 0;
}
function isEven(num) {
  return num % 2 === 0;
}
function round(num, prec) {
  if (prec === void 0) {
    prec = 2;
  }
  var f2 = Math.pow(10, prec);
  return Math.floor(num * f2) / f2;
}
function isDimensions(obj) {
  return obj && obj.width && obj.height;
}
function computeReshapedDimensions(_a2, inputSize) {
  var width = _a2.width, height = _a2.height;
  var scale2 = inputSize / Math.max(height, width);
  return new Dimensions(Math.round(width * scale2), Math.round(height * scale2));
}
function getCenterPoint(pts) {
  return pts.reduce(function(sum, pt2) {
    return sum.add(pt2);
  }, new Point(0, 0)).div(new Point(pts.length, pts.length));
}
function range(num, start, step) {
  return Array(num).fill(0).map(function(_2, i2) {
    return start + i2 * step;
  });
}
function isValidNumber(num) {
  return !!num && num !== Infinity && num !== -Infinity && !isNaN(num) || num === 0;
}
function isValidProbablitiy(num) {
  return isValidNumber(num) && 0 <= num && num <= 1;
}

// node_modules/face-api.js/build/es6/classes/Point.js
var Point = (
  /** @class */
  function() {
    function Point2(x2, y2) {
      this._x = x2;
      this._y = y2;
    }
    Object.defineProperty(Point2.prototype, "x", {
      get: function() {
        return this._x;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Point2.prototype, "y", {
      get: function() {
        return this._y;
      },
      enumerable: true,
      configurable: true
    });
    Point2.prototype.add = function(pt2) {
      return new Point2(this.x + pt2.x, this.y + pt2.y);
    };
    Point2.prototype.sub = function(pt2) {
      return new Point2(this.x - pt2.x, this.y - pt2.y);
    };
    Point2.prototype.mul = function(pt2) {
      return new Point2(this.x * pt2.x, this.y * pt2.y);
    };
    Point2.prototype.div = function(pt2) {
      return new Point2(this.x / pt2.x, this.y / pt2.y);
    };
    Point2.prototype.abs = function() {
      return new Point2(Math.abs(this.x), Math.abs(this.y));
    };
    Point2.prototype.magnitude = function() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point2.prototype.floor = function() {
      return new Point2(Math.floor(this.x), Math.floor(this.y));
    };
    return Point2;
  }()
);

// node_modules/face-api.js/build/es6/classes/Box.js
var Box = (
  /** @class */
  function() {
    function Box2(_box, allowNegativeDimensions) {
      if (allowNegativeDimensions === void 0) {
        allowNegativeDimensions = true;
      }
      var box = _box || {};
      var isBbox = [box.left, box.top, box.right, box.bottom].every(isValidNumber);
      var isRect = [box.x, box.y, box.width, box.height].every(isValidNumber);
      if (!isRect && !isBbox) {
        throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(box));
      }
      var _a2 = isRect ? [box.x, box.y, box.width, box.height] : [box.left, box.top, box.right - box.left, box.bottom - box.top], x2 = _a2[0], y2 = _a2[1], width = _a2[2], height = _a2[3];
      Box2.assertIsValidBox({ x: x2, y: y2, width, height }, "Box.constructor", allowNegativeDimensions);
      this._x = x2;
      this._y = y2;
      this._width = width;
      this._height = height;
    }
    Box2.isRect = function(rect) {
      return !!rect && [rect.x, rect.y, rect.width, rect.height].every(isValidNumber);
    };
    Box2.assertIsValidBox = function(box, callee, allowNegativeDimensions) {
      if (allowNegativeDimensions === void 0) {
        allowNegativeDimensions = false;
      }
      if (!Box2.isRect(box)) {
        throw new Error(callee + " - invalid box: " + JSON.stringify(box) + ", expected object with properties x, y, width, height");
      }
      if (!allowNegativeDimensions && (box.width < 0 || box.height < 0)) {
        throw new Error(callee + " - width (" + box.width + ") and height (" + box.height + ") must be positive numbers");
      }
    };
    Object.defineProperty(Box2.prototype, "x", {
      get: function() {
        return this._x;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "y", {
      get: function() {
        return this._y;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "width", {
      get: function() {
        return this._width;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "height", {
      get: function() {
        return this._height;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "left", {
      get: function() {
        return this.x;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "top", {
      get: function() {
        return this.y;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "right", {
      get: function() {
        return this.x + this.width;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "bottom", {
      get: function() {
        return this.y + this.height;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "area", {
      get: function() {
        return this.width * this.height;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "topLeft", {
      get: function() {
        return new Point(this.left, this.top);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "topRight", {
      get: function() {
        return new Point(this.right, this.top);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "bottomLeft", {
      get: function() {
        return new Point(this.left, this.bottom);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Box2.prototype, "bottomRight", {
      get: function() {
        return new Point(this.right, this.bottom);
      },
      enumerable: true,
      configurable: true
    });
    Box2.prototype.round = function() {
      var _a2 = [this.x, this.y, this.width, this.height].map(function(val) {
        return Math.round(val);
      }), x2 = _a2[0], y2 = _a2[1], width = _a2[2], height = _a2[3];
      return new Box2({ x: x2, y: y2, width, height });
    };
    Box2.prototype.floor = function() {
      var _a2 = [this.x, this.y, this.width, this.height].map(function(val) {
        return Math.floor(val);
      }), x2 = _a2[0], y2 = _a2[1], width = _a2[2], height = _a2[3];
      return new Box2({ x: x2, y: y2, width, height });
    };
    Box2.prototype.toSquare = function() {
      var _a2 = this, x2 = _a2.x, y2 = _a2.y, width = _a2.width, height = _a2.height;
      var diff = Math.abs(width - height);
      if (width < height) {
        x2 -= diff / 2;
        width += diff;
      }
      if (height < width) {
        y2 -= diff / 2;
        height += diff;
      }
      return new Box2({ x: x2, y: y2, width, height });
    };
    Box2.prototype.rescale = function(s2) {
      var scaleX = isDimensions(s2) ? s2.width : s2;
      var scaleY = isDimensions(s2) ? s2.height : s2;
      return new Box2({
        x: this.x * scaleX,
        y: this.y * scaleY,
        width: this.width * scaleX,
        height: this.height * scaleY
      });
    };
    Box2.prototype.pad = function(padX, padY) {
      var _a2 = [
        this.x - padX / 2,
        this.y - padY / 2,
        this.width + padX,
        this.height + padY
      ], x2 = _a2[0], y2 = _a2[1], width = _a2[2], height = _a2[3];
      return new Box2({ x: x2, y: y2, width, height });
    };
    Box2.prototype.clipAtImageBorders = function(imgWidth, imgHeight) {
      var _a2 = this, x2 = _a2.x, y2 = _a2.y, right = _a2.right, bottom = _a2.bottom;
      var clippedX = Math.max(x2, 0);
      var clippedY = Math.max(y2, 0);
      var newWidth = right - clippedX;
      var newHeight = bottom - clippedY;
      var clippedWidth = Math.min(newWidth, imgWidth - clippedX);
      var clippedHeight = Math.min(newHeight, imgHeight - clippedY);
      return new Box2({ x: clippedX, y: clippedY, width: clippedWidth, height: clippedHeight }).floor();
    };
    Box2.prototype.shift = function(sx, sy) {
      var _a2 = this, width = _a2.width, height = _a2.height;
      var x2 = this.x + sx;
      var y2 = this.y + sy;
      return new Box2({ x: x2, y: y2, width, height });
    };
    Box2.prototype.padAtBorders = function(imageHeight, imageWidth) {
      var w2 = this.width + 1;
      var h2 = this.height + 1;
      var dx = 1;
      var dy = 1;
      var edx = w2;
      var edy = h2;
      var x2 = this.left;
      var y2 = this.top;
      var ex = this.right;
      var ey = this.bottom;
      if (ex > imageWidth) {
        edx = -ex + imageWidth + w2;
        ex = imageWidth;
      }
      if (ey > imageHeight) {
        edy = -ey + imageHeight + h2;
        ey = imageHeight;
      }
      if (x2 < 1) {
        edy = 2 - x2;
        x2 = 1;
      }
      if (y2 < 1) {
        edy = 2 - y2;
        y2 = 1;
      }
      return { dy, edy, dx, edx, y: y2, ey, x: x2, ex, w: w2, h: h2 };
    };
    Box2.prototype.calibrate = function(region) {
      return new Box2({
        left: this.left + region.left * this.width,
        top: this.top + region.top * this.height,
        right: this.right + region.right * this.width,
        bottom: this.bottom + region.bottom * this.height
      }).toSquare().round();
    };
    return Box2;
  }()
);

// node_modules/face-api.js/build/es6/classes/BoundingBox.js
var BoundingBox = (
  /** @class */
  function(_super) {
    __extends(BoundingBox2, _super);
    function BoundingBox2(left, top, right, bottom, allowNegativeDimensions) {
      if (allowNegativeDimensions === void 0) {
        allowNegativeDimensions = false;
      }
      return _super.call(this, { left, top, right, bottom }, allowNegativeDimensions) || this;
    }
    return BoundingBox2;
  }(Box)
);

// node_modules/face-api.js/build/es6/classes/ObjectDetection.js
var ObjectDetection = (
  /** @class */
  function() {
    function ObjectDetection2(score, classScore, className, relativeBox, imageDims) {
      this._imageDims = new Dimensions(imageDims.width, imageDims.height);
      this._score = score;
      this._classScore = classScore;
      this._className = className;
      this._box = new Box(relativeBox).rescale(this._imageDims);
    }
    Object.defineProperty(ObjectDetection2.prototype, "score", {
      get: function() {
        return this._score;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObjectDetection2.prototype, "classScore", {
      get: function() {
        return this._classScore;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObjectDetection2.prototype, "className", {
      get: function() {
        return this._className;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObjectDetection2.prototype, "box", {
      get: function() {
        return this._box;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObjectDetection2.prototype, "imageDims", {
      get: function() {
        return this._imageDims;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObjectDetection2.prototype, "imageWidth", {
      get: function() {
        return this.imageDims.width;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObjectDetection2.prototype, "imageHeight", {
      get: function() {
        return this.imageDims.height;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObjectDetection2.prototype, "relativeBox", {
      get: function() {
        return new Box(this._box).rescale(this.imageDims.reverse());
      },
      enumerable: true,
      configurable: true
    });
    ObjectDetection2.prototype.forSize = function(width, height) {
      return new ObjectDetection2(this.score, this.classScore, this.className, this.relativeBox, { width, height });
    };
    return ObjectDetection2;
  }()
);

// node_modules/face-api.js/build/es6/classes/FaceDetection.js
var FaceDetection = (
  /** @class */
  function(_super) {
    __extends(FaceDetection2, _super);
    function FaceDetection2(score, relativeBox, imageDims) {
      return _super.call(this, score, score, "", relativeBox, imageDims) || this;
    }
    FaceDetection2.prototype.forSize = function(width, height) {
      var _a2 = _super.prototype.forSize.call(this, width, height), score = _a2.score, relativeBox = _a2.relativeBox, imageDims = _a2.imageDims;
      return new FaceDetection2(score, relativeBox, imageDims);
    };
    return FaceDetection2;
  }(ObjectDetection)
);

// node_modules/face-api.js/build/es6/ops/iou.js
function iou(box1, box2, isIOU) {
  if (isIOU === void 0) {
    isIOU = true;
  }
  var width = Math.max(0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
  var height = Math.max(0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
  var interSection = width * height;
  return isIOU ? interSection / (box1.area + box2.area - interSection) : interSection / Math.min(box1.area, box2.area);
}

// node_modules/face-api.js/build/es6/ops/minBbox.js
function minBbox(pts) {
  var xs2 = pts.map(function(pt2) {
    return pt2.x;
  });
  var ys2 = pts.map(function(pt2) {
    return pt2.y;
  });
  var minX = xs2.reduce(function(min, x2) {
    return x2 < min ? x2 : min;
  }, Infinity);
  var minY = ys2.reduce(function(min, y2) {
    return y2 < min ? y2 : min;
  }, Infinity);
  var maxX = xs2.reduce(function(max, x2) {
    return max < x2 ? x2 : max;
  }, 0);
  var maxY = ys2.reduce(function(max, y2) {
    return max < y2 ? y2 : max;
  }, 0);
  return new BoundingBox(minX, minY, maxX, maxY);
}

// node_modules/face-api.js/build/es6/ops/nonMaxSuppression.js
function nonMaxSuppression(boxes, scores, iouThreshold, isIOU) {
  if (isIOU === void 0) {
    isIOU = true;
  }
  var indicesSortedByScore = scores.map(function(score, boxIndex) {
    return { score, boxIndex };
  }).sort(function(c1, c2) {
    return c1.score - c2.score;
  }).map(function(c2) {
    return c2.boxIndex;
  });
  var pick = [];
  var _loop_1 = function() {
    var curr = indicesSortedByScore.pop();
    pick.push(curr);
    var indices = indicesSortedByScore;
    var outputs = [];
    for (var i2 = 0; i2 < indices.length; i2++) {
      var idx = indices[i2];
      var currBox = boxes[curr];
      var idxBox = boxes[idx];
      outputs.push(iou(currBox, idxBox, isIOU));
    }
    indicesSortedByScore = indicesSortedByScore.filter(function(_2, j2) {
      return outputs[j2] <= iouThreshold;
    });
  };
  while (indicesSortedByScore.length > 0) {
    _loop_1();
  }
  return pick;
}

// node_modules/face-api.js/build/es6/ops/normalize.js
function normalize(x2, meanRgb) {
  return Ze(function() {
    var r2 = meanRgb[0], g2 = meanRgb[1], b2 = meanRgb[2];
    var avg_r = Hn(__spreadArrays(x2.shape.slice(0, 3), [1]), r2);
    var avg_g = Hn(__spreadArrays(x2.shape.slice(0, 3), [1]), g2);
    var avg_b = Hn(__spreadArrays(x2.shape.slice(0, 3), [1]), b2);
    var avg_rgb = Yn([avg_r, avg_g, avg_b], 3);
    return Cc(x2, avg_rgb);
  });
}

// node_modules/face-api.js/build/es6/ops/padToSquare.js
function padToSquare(imgTensor, isCenterImage) {
  if (isCenterImage === void 0) {
    isCenterImage = false;
  }
  return Ze(function() {
    var _a2 = imgTensor.shape.slice(1), height = _a2[0], width = _a2[1];
    if (height === width) {
      return imgTensor;
    }
    var dimDiff = Math.abs(height - width);
    var paddingAmount = Math.round(dimDiff * (isCenterImage ? 0.5 : 1));
    var paddingAxis = height > width ? 2 : 1;
    var createPaddingTensor = function(paddingAmount2) {
      var paddingTensorShape = imgTensor.shape.slice();
      paddingTensorShape[paddingAxis] = paddingAmount2;
      return Hn(paddingTensorShape, 0);
    };
    var paddingTensorAppend = createPaddingTensor(paddingAmount);
    var remainingPaddingAmount = dimDiff - paddingTensorAppend.shape[paddingAxis];
    var paddingTensorPrepend = isCenterImage && remainingPaddingAmount ? createPaddingTensor(remainingPaddingAmount) : null;
    var tensorsToStack = [
      paddingTensorPrepend,
      imgTensor,
      paddingTensorAppend
    ].filter(function(t2) {
      return !!t2;
    }).map(function(t2) {
      return t2.toFloat();
    });
    return Yn(tensorsToStack, paddingAxis);
  });
}

// node_modules/face-api.js/build/es6/ops/shuffleArray.js
function shuffleArray(inputArray) {
  var array = inputArray.slice();
  for (var i2 = array.length - 1; i2 > 0; i2--) {
    var j2 = Math.floor(Math.random() * (i2 + 1));
    var x2 = array[i2];
    array[i2] = array[j2];
    array[j2] = x2;
  }
  return array;
}

// node_modules/face-api.js/build/es6/ops/index.js
function sigmoid(x2) {
  return 1 / (1 + Math.exp(-x2));
}
function inverseSigmoid(x2) {
  return Math.log(x2 / (1 - x2));
}

// node_modules/face-api.js/build/es6/classes/Rect.js
var Rect = (
  /** @class */
  function(_super) {
    __extends(Rect2, _super);
    function Rect2(x2, y2, width, height, allowNegativeDimensions) {
      if (allowNegativeDimensions === void 0) {
        allowNegativeDimensions = false;
      }
      return _super.call(this, { x: x2, y: y2, width, height }, allowNegativeDimensions) || this;
    }
    return Rect2;
  }(Box)
);

// node_modules/face-api.js/build/es6/classes/FaceLandmarks.js
var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;
var FaceLandmarks = (
  /** @class */
  function() {
    function FaceLandmarks2(relativeFaceLandmarkPositions, imgDims, shift) {
      if (shift === void 0) {
        shift = new Point(0, 0);
      }
      var width = imgDims.width, height = imgDims.height;
      this._imgDims = new Dimensions(width, height);
      this._shift = shift;
      this._positions = relativeFaceLandmarkPositions.map(function(pt2) {
        return pt2.mul(new Point(width, height)).add(shift);
      });
    }
    Object.defineProperty(FaceLandmarks2.prototype, "shift", {
      get: function() {
        return new Point(this._shift.x, this._shift.y);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FaceLandmarks2.prototype, "imageWidth", {
      get: function() {
        return this._imgDims.width;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FaceLandmarks2.prototype, "imageHeight", {
      get: function() {
        return this._imgDims.height;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FaceLandmarks2.prototype, "positions", {
      get: function() {
        return this._positions;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FaceLandmarks2.prototype, "relativePositions", {
      get: function() {
        var _this = this;
        return this._positions.map(function(pt2) {
          return pt2.sub(_this._shift).div(new Point(_this.imageWidth, _this.imageHeight));
        });
      },
      enumerable: true,
      configurable: true
    });
    FaceLandmarks2.prototype.forSize = function(width, height) {
      return new this.constructor(this.relativePositions, { width, height });
    };
    FaceLandmarks2.prototype.shiftBy = function(x2, y2) {
      return new this.constructor(this.relativePositions, this._imgDims, new Point(x2, y2));
    };
    FaceLandmarks2.prototype.shiftByPoint = function(pt2) {
      return this.shiftBy(pt2.x, pt2.y);
    };
    FaceLandmarks2.prototype.align = function(detection, options) {
      if (options === void 0) {
        options = {};
      }
      if (detection) {
        var box = detection instanceof FaceDetection ? detection.box.floor() : new Box(detection);
        return this.shiftBy(box.x, box.y).align(null, options);
      }
      var _a2 = Object.assign({}, { useDlibAlignment: false, minBoxPadding: 0.2 }, options), useDlibAlignment = _a2.useDlibAlignment, minBoxPadding = _a2.minBoxPadding;
      if (useDlibAlignment) {
        return this.alignDlib();
      }
      return this.alignMinBbox(minBoxPadding);
    };
    FaceLandmarks2.prototype.alignDlib = function() {
      var centers = this.getRefPointsForAlignment();
      var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
      var distToMouth = function(pt2) {
        return mouthCenter.sub(pt2).magnitude();
      };
      var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
      var size = Math.floor(eyeToMouthDist / relScale);
      var refPoint = getCenterPoint(centers);
      var x2 = Math.floor(Math.max(0, refPoint.x - relX * size));
      var y2 = Math.floor(Math.max(0, refPoint.y - relY * size));
      return new Rect(x2, y2, Math.min(size, this.imageWidth + x2), Math.min(size, this.imageHeight + y2));
    };
    FaceLandmarks2.prototype.alignMinBbox = function(padding) {
      var box = minBbox(this.positions);
      return box.pad(box.width * padding, box.height * padding);
    };
    FaceLandmarks2.prototype.getRefPointsForAlignment = function() {
      throw new Error("getRefPointsForAlignment not implemented by base class");
    };
    return FaceLandmarks2;
  }()
);

// node_modules/face-api.js/build/es6/classes/FaceLandmarks5.js
var FaceLandmarks5 = (
  /** @class */
  function(_super) {
    __extends(FaceLandmarks52, _super);
    function FaceLandmarks52() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks52.prototype.getRefPointsForAlignment = function() {
      var pts = this.positions;
      return [
        pts[0],
        pts[1],
        getCenterPoint([pts[3], pts[4]])
      ];
    };
    return FaceLandmarks52;
  }(FaceLandmarks)
);

// node_modules/face-api.js/build/es6/classes/FaceLandmarks68.js
var FaceLandmarks68 = (
  /** @class */
  function(_super) {
    __extends(FaceLandmarks682, _super);
    function FaceLandmarks682() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks682.prototype.getJawOutline = function() {
      return this.positions.slice(0, 17);
    };
    FaceLandmarks682.prototype.getLeftEyeBrow = function() {
      return this.positions.slice(17, 22);
    };
    FaceLandmarks682.prototype.getRightEyeBrow = function() {
      return this.positions.slice(22, 27);
    };
    FaceLandmarks682.prototype.getNose = function() {
      return this.positions.slice(27, 36);
    };
    FaceLandmarks682.prototype.getLeftEye = function() {
      return this.positions.slice(36, 42);
    };
    FaceLandmarks682.prototype.getRightEye = function() {
      return this.positions.slice(42, 48);
    };
    FaceLandmarks682.prototype.getMouth = function() {
      return this.positions.slice(48, 68);
    };
    FaceLandmarks682.prototype.getRefPointsForAlignment = function() {
      return [
        this.getLeftEye(),
        this.getRightEye(),
        this.getMouth()
      ].map(getCenterPoint);
    };
    return FaceLandmarks682;
  }(FaceLandmarks)
);

// node_modules/face-api.js/build/es6/classes/FaceMatch.js
var FaceMatch = (
  /** @class */
  function() {
    function FaceMatch2(label, distance) {
      this._label = label;
      this._distance = distance;
    }
    Object.defineProperty(FaceMatch2.prototype, "label", {
      get: function() {
        return this._label;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FaceMatch2.prototype, "distance", {
      get: function() {
        return this._distance;
      },
      enumerable: true,
      configurable: true
    });
    FaceMatch2.prototype.toString = function(withDistance) {
      if (withDistance === void 0) {
        withDistance = true;
      }
      return "" + this.label + (withDistance ? " (" + round(this.distance) + ")" : "");
    };
    return FaceMatch2;
  }()
);

// node_modules/face-api.js/build/es6/classes/LabeledBox.js
var LabeledBox = (
  /** @class */
  function(_super) {
    __extends(LabeledBox2, _super);
    function LabeledBox2(box, label) {
      var _this = _super.call(this, box) || this;
      _this._label = label;
      return _this;
    }
    LabeledBox2.assertIsValidLabeledBox = function(box, callee) {
      Box.assertIsValidBox(box, callee);
      if (!isValidNumber(box.label)) {
        throw new Error(callee + " - expected property label (" + box.label + ") to be a number");
      }
    };
    Object.defineProperty(LabeledBox2.prototype, "label", {
      get: function() {
        return this._label;
      },
      enumerable: true,
      configurable: true
    });
    return LabeledBox2;
  }(Box)
);

// node_modules/face-api.js/build/es6/classes/LabeledFaceDescriptors.js
var LabeledFaceDescriptors = (
  /** @class */
  function() {
    function LabeledFaceDescriptors2(label, descriptors) {
      if (!(typeof label === "string")) {
        throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");
      }
      if (!Array.isArray(descriptors) || descriptors.some(function(desc) {
        return !(desc instanceof Float32Array);
      })) {
        throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");
      }
      this._label = label;
      this._descriptors = descriptors;
    }
    Object.defineProperty(LabeledFaceDescriptors2.prototype, "label", {
      get: function() {
        return this._label;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LabeledFaceDescriptors2.prototype, "descriptors", {
      get: function() {
        return this._descriptors;
      },
      enumerable: true,
      configurable: true
    });
    LabeledFaceDescriptors2.prototype.toJSON = function() {
      return {
        label: this.label,
        descriptors: this.descriptors.map(function(d2) {
          return Array.from(d2);
        })
      };
    };
    LabeledFaceDescriptors2.fromJSON = function(json) {
      var descriptors = json.descriptors.map(function(d2) {
        return new Float32Array(d2);
      });
      return new LabeledFaceDescriptors2(json.label, descriptors);
    };
    return LabeledFaceDescriptors2;
  }()
);

// node_modules/face-api.js/build/es6/classes/PredictedBox.js
var PredictedBox = (
  /** @class */
  function(_super) {
    __extends(PredictedBox2, _super);
    function PredictedBox2(box, label, score, classScore) {
      var _this = _super.call(this, box, label) || this;
      _this._score = score;
      _this._classScore = classScore;
      return _this;
    }
    PredictedBox2.assertIsValidPredictedBox = function(box, callee) {
      LabeledBox.assertIsValidLabeledBox(box, callee);
      if (!isValidProbablitiy(box.score) || !isValidProbablitiy(box.classScore)) {
        throw new Error(callee + " - expected properties score (" + box.score + ") and (" + box.classScore + ") to be a number between [0, 1]");
      }
    };
    Object.defineProperty(PredictedBox2.prototype, "score", {
      get: function() {
        return this._score;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(PredictedBox2.prototype, "classScore", {
      get: function() {
        return this._classScore;
      },
      enumerable: true,
      configurable: true
    });
    return PredictedBox2;
  }(LabeledBox)
);

// node_modules/face-api.js/build/es6/factories/WithFaceDetection.js
function isWithFaceDetection(obj) {
  return obj["detection"] instanceof FaceDetection;
}
function extendWithFaceDetection(sourceObj, detection) {
  var extension = { detection };
  return Object.assign({}, sourceObj, extension);
}

// node_modules/face-api.js/build/es6/env/createBrowserEnv.js
function createBrowserEnv() {
  var fetch2 = window["fetch"] || function() {
    throw new Error("fetch - missing fetch implementation for browser environment");
  };
  var readFile = function() {
    throw new Error("readFile - filesystem not available for browser environment");
  };
  return {
    Canvas: HTMLCanvasElement,
    CanvasRenderingContext2D,
    Image: HTMLImageElement,
    ImageData,
    Video: HTMLVideoElement,
    createCanvasElement: function() {
      return document.createElement("canvas");
    },
    createImageElement: function() {
      return document.createElement("img");
    },
    fetch: fetch2,
    readFile
  };
}

// node_modules/face-api.js/build/es6/env/createFileSystem.js
function createFileSystem(fs2) {
  var requireFsError = "";
  if (!fs2) {
    try {
      fs2 = require_fs();
    } catch (err) {
      requireFsError = err.toString();
    }
  }
  var readFile = fs2 ? function(filePath) {
    return new Promise(function(res, rej) {
      fs2.readFile(filePath, function(err, buffer) {
        return err ? rej(err) : res(buffer);
      });
    });
  } : function() {
    throw new Error("readFile - failed to require fs in nodejs environment with error: " + requireFsError);
  };
  return {
    readFile
  };
}

// node_modules/face-api.js/build/es6/env/createNodejsEnv.js
function createNodejsEnv() {
  var Canvas = global["Canvas"] || global["HTMLCanvasElement"];
  var Image = global["Image"] || global["HTMLImageElement"];
  var createCanvasElement = function() {
    if (Canvas) {
      return new Canvas();
    }
    throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment");
  };
  var createImageElement = function() {
    if (Image) {
      return new Image();
    }
    throw new Error("createImageElement - missing Image implementation for nodejs environment");
  };
  var fetch2 = global["fetch"] || function() {
    throw new Error("fetch - missing fetch implementation for nodejs environment");
  };
  var fileSystem = createFileSystem();
  return __assign({
    Canvas: Canvas || /** @class */
    /* @__PURE__ */ function() {
      function Canvas2() {
      }
      return Canvas2;
    }(),
    CanvasRenderingContext2D: global["CanvasRenderingContext2D"] || /** @class */
    /* @__PURE__ */ function() {
      function class_1() {
      }
      return class_1;
    }(),
    Image: Image || /** @class */
    /* @__PURE__ */ function() {
      function Image2() {
      }
      return Image2;
    }(),
    ImageData: global["ImageData"] || /** @class */
    /* @__PURE__ */ function() {
      function class_2() {
      }
      return class_2;
    }(),
    Video: global["HTMLVideoElement"] || /** @class */
    /* @__PURE__ */ function() {
      function class_3() {
      }
      return class_3;
    }(),
    createCanvasElement,
    createImageElement,
    fetch: fetch2
  }, fileSystem);
}

// node_modules/face-api.js/build/es6/env/isBrowser.js
function isBrowser() {
  return typeof window === "object" && typeof document !== "undefined" && typeof HTMLImageElement !== "undefined" && typeof HTMLCanvasElement !== "undefined" && typeof HTMLVideoElement !== "undefined" && typeof ImageData !== "undefined" && typeof CanvasRenderingContext2D !== "undefined";
}

// node_modules/face-api.js/build/es6/env/isNodejs.js
function isNodejs() {
  return typeof global === "object" && typeof __require === "function" && typeof module !== "undefined" && typeof process !== "undefined" && !!process.version;
}

// node_modules/face-api.js/build/es6/env/index.js
var environment;
function getEnv() {
  if (!environment) {
    throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");
  }
  return environment;
}
function setEnv(env2) {
  environment = env2;
}
function initialize() {
  if (isBrowser()) {
    setEnv(createBrowserEnv());
  }
  if (isNodejs()) {
    setEnv(createNodejsEnv());
  }
}
function monkeyPatch(env2) {
  if (!environment) {
    initialize();
  }
  if (!environment) {
    throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");
  }
  var _a2 = env2.Canvas, Canvas = _a2 === void 0 ? environment.Canvas : _a2, _b = env2.Image, Image = _b === void 0 ? environment.Image : _b;
  environment.Canvas = Canvas;
  environment.Image = Image;
  environment.createCanvasElement = env2.createCanvasElement || function() {
    return new Canvas();
  };
  environment.createImageElement = env2.createImageElement || function() {
    return new Image();
  };
  environment.ImageData = env2.ImageData || environment.ImageData;
  environment.Video = env2.Video || environment.Video;
  environment.fetch = env2.fetch || environment.fetch;
  environment.readFile = env2.readFile || environment.readFile;
}
var env = {
  getEnv,
  setEnv,
  initialize,
  createBrowserEnv,
  createFileSystem,
  createNodejsEnv,
  monkeyPatch,
  isBrowser,
  isNodejs
};
initialize();

// node_modules/face-api.js/build/es6/dom/resolveInput.js
function resolveInput(arg) {
  if (!env.isNodejs() && typeof arg === "string") {
    return document.getElementById(arg);
  }
  return arg;
}

// node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js
function getContext2dOrThrow(canvasArg) {
  var _a2 = env.getEnv(), Canvas = _a2.Canvas, CanvasRenderingContext2D2 = _a2.CanvasRenderingContext2D;
  if (canvasArg instanceof CanvasRenderingContext2D2) {
    return canvasArg;
  }
  var canvas = resolveInput(canvasArg);
  if (!(canvas instanceof Canvas)) {
    throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");
  }
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("resolveContext2d - canvas 2d context is null");
  }
  return ctx;
}

// node_modules/face-api.js/build/es6/draw/DrawTextField.js
var AnchorPosition;
(function(AnchorPosition2) {
  AnchorPosition2["TOP_LEFT"] = "TOP_LEFT";
  AnchorPosition2["TOP_RIGHT"] = "TOP_RIGHT";
  AnchorPosition2["BOTTOM_LEFT"] = "BOTTOM_LEFT";
  AnchorPosition2["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
})(AnchorPosition || (AnchorPosition = {}));
var DrawTextFieldOptions = (
  /** @class */
  /* @__PURE__ */ function() {
    function DrawTextFieldOptions2(options) {
      if (options === void 0) {
        options = {};
      }
      var anchorPosition = options.anchorPosition, backgroundColor = options.backgroundColor, fontColor = options.fontColor, fontSize = options.fontSize, fontStyle = options.fontStyle, padding = options.padding;
      this.anchorPosition = anchorPosition || AnchorPosition.TOP_LEFT;
      this.backgroundColor = backgroundColor || "rgba(0, 0, 0, 0.5)";
      this.fontColor = fontColor || "rgba(255, 255, 255, 1)";
      this.fontSize = fontSize || 14;
      this.fontStyle = fontStyle || "Georgia";
      this.padding = padding || 4;
    }
    return DrawTextFieldOptions2;
  }()
);
var DrawTextField = (
  /** @class */
  function() {
    function DrawTextField2(text, anchor, options) {
      if (options === void 0) {
        options = {};
      }
      this.text = typeof text === "string" ? [text] : text instanceof DrawTextField2 ? text.text : text;
      this.anchor = anchor;
      this.options = new DrawTextFieldOptions(options);
    }
    DrawTextField2.prototype.measureWidth = function(ctx) {
      var padding = this.options.padding;
      return this.text.map(function(l2) {
        return ctx.measureText(l2).width;
      }).reduce(function(w0, w1) {
        return w0 < w1 ? w1 : w0;
      }, 0) + 2 * padding;
    };
    DrawTextField2.prototype.measureHeight = function() {
      var _a2 = this.options, fontSize = _a2.fontSize, padding = _a2.padding;
      return this.text.length * fontSize + 2 * padding;
    };
    DrawTextField2.prototype.getUpperLeft = function(ctx, canvasDims) {
      var anchorPosition = this.options.anchorPosition;
      var isShiftLeft = anchorPosition === AnchorPosition.BOTTOM_RIGHT || anchorPosition === AnchorPosition.TOP_RIGHT;
      var isShiftTop = anchorPosition === AnchorPosition.BOTTOM_LEFT || anchorPosition === AnchorPosition.BOTTOM_RIGHT;
      var textFieldWidth = this.measureWidth(ctx);
      var textFieldHeight = this.measureHeight();
      var x2 = isShiftLeft ? this.anchor.x - textFieldWidth : this.anchor.x;
      var y2 = isShiftTop ? this.anchor.y - textFieldHeight : this.anchor.y;
      if (canvasDims) {
        var width = canvasDims.width, height = canvasDims.height;
        var newX = Math.max(Math.min(x2, width - textFieldWidth), 0);
        var newY = Math.max(Math.min(y2, height - textFieldHeight), 0);
        return { x: newX, y: newY };
      }
      return { x: x2, y: y2 };
    };
    DrawTextField2.prototype.draw = function(canvasArg) {
      var canvas = resolveInput(canvasArg);
      var ctx = getContext2dOrThrow(canvas);
      var _a2 = this.options, backgroundColor = _a2.backgroundColor, fontColor = _a2.fontColor, fontSize = _a2.fontSize, fontStyle = _a2.fontStyle, padding = _a2.padding;
      ctx.font = fontSize + "px " + fontStyle;
      var maxTextWidth = this.measureWidth(ctx);
      var textHeight = this.measureHeight();
      ctx.fillStyle = backgroundColor;
      var upperLeft = this.getUpperLeft(ctx, canvas);
      ctx.fillRect(upperLeft.x, upperLeft.y, maxTextWidth, textHeight);
      ctx.fillStyle = fontColor;
      this.text.forEach(function(textLine, i2) {
        var x2 = padding + upperLeft.x;
        var y2 = padding + upperLeft.y + (i2 + 1) * fontSize;
        ctx.fillText(textLine, x2, y2);
      });
    };
    return DrawTextField2;
  }()
);

// node_modules/face-api.js/build/es6/draw/DrawBox.js
var DrawBoxOptions = (
  /** @class */
  /* @__PURE__ */ function() {
    function DrawBoxOptions2(options) {
      if (options === void 0) {
        options = {};
      }
      var boxColor = options.boxColor, lineWidth = options.lineWidth, label = options.label, drawLabelOptions = options.drawLabelOptions;
      this.boxColor = boxColor || "rgba(0, 0, 255, 1)";
      this.lineWidth = lineWidth || 2;
      this.label = label;
      var defaultDrawLabelOptions = {
        anchorPosition: AnchorPosition.BOTTOM_LEFT,
        backgroundColor: this.boxColor
      };
      this.drawLabelOptions = new DrawTextFieldOptions(Object.assign({}, defaultDrawLabelOptions, drawLabelOptions));
    }
    return DrawBoxOptions2;
  }()
);
var DrawBox = (
  /** @class */
  function() {
    function DrawBox2(box, options) {
      if (options === void 0) {
        options = {};
      }
      this.box = new Box(box);
      this.options = new DrawBoxOptions(options);
    }
    DrawBox2.prototype.draw = function(canvasArg) {
      var ctx = getContext2dOrThrow(canvasArg);
      var _a2 = this.options, boxColor = _a2.boxColor, lineWidth = _a2.lineWidth;
      var _b = this.box, x2 = _b.x, y2 = _b.y, width = _b.width, height = _b.height;
      ctx.strokeStyle = boxColor;
      ctx.lineWidth = lineWidth;
      ctx.strokeRect(x2, y2, width, height);
      var label = this.options.label;
      if (label) {
        new DrawTextField([label], { x: x2 - lineWidth / 2, y: y2 }, this.options.drawLabelOptions).draw(canvasArg);
      }
    };
    return DrawBox2;
  }()
);

// node_modules/face-api.js/build/es6/draw/drawDetections.js
function drawDetections(canvasArg, detections) {
  var detectionsArray = Array.isArray(detections) ? detections : [detections];
  detectionsArray.forEach(function(det) {
    var score = det instanceof FaceDetection ? det.score : isWithFaceDetection(det) ? det.detection.score : void 0;
    var box = det instanceof FaceDetection ? det.box : isWithFaceDetection(det) ? det.detection.box : new Box(det);
    var label = score ? "" + round(score) : void 0;
    new DrawBox(box, { label }).draw(canvasArg);
  });
}

// node_modules/face-api.js/build/es6/dom/isMediaLoaded.js
function isMediaLoaded(media) {
  var _a2 = env.getEnv(), Image = _a2.Image, Video = _a2.Video;
  return media instanceof Image && media.complete || media instanceof Video && media.readyState >= 3;
}

// node_modules/face-api.js/build/es6/dom/awaitMediaLoaded.js
function awaitMediaLoaded(media) {
  return new Promise(function(resolve, reject) {
    if (media instanceof env.getEnv().Canvas || isMediaLoaded(media)) {
      return resolve();
    }
    function onLoad(e2) {
      if (!e2.currentTarget)
        return;
      e2.currentTarget.removeEventListener("load", onLoad);
      e2.currentTarget.removeEventListener("error", onError);
      resolve(e2);
    }
    function onError(e2) {
      if (!e2.currentTarget)
        return;
      e2.currentTarget.removeEventListener("load", onLoad);
      e2.currentTarget.removeEventListener("error", onError);
      reject(e2);
    }
    media.addEventListener("load", onLoad);
    media.addEventListener("error", onError);
  });
}

// node_modules/face-api.js/build/es6/dom/bufferToImage.js
function bufferToImage(buf) {
  return new Promise(function(resolve, reject) {
    if (!(buf instanceof Blob)) {
      return reject("bufferToImage - expected buf to be of type: Blob");
    }
    var reader = new FileReader();
    reader.onload = function() {
      if (typeof reader.result !== "string") {
        return reject("bufferToImage - expected reader.result to be a string, in onload");
      }
      var img = env.getEnv().createImageElement();
      img.onload = function() {
        return resolve(img);
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(buf);
  });
}

// node_modules/face-api.js/build/es6/dom/getMediaDimensions.js
function getMediaDimensions(input) {
  var _a2 = env.getEnv(), Image = _a2.Image, Video = _a2.Video;
  if (input instanceof Image) {
    return new Dimensions(input.naturalWidth, input.naturalHeight);
  }
  if (input instanceof Video) {
    return new Dimensions(input.videoWidth, input.videoHeight);
  }
  return new Dimensions(input.width, input.height);
}

// node_modules/face-api.js/build/es6/dom/createCanvas.js
function createCanvas(_a2) {
  var width = _a2.width, height = _a2.height;
  var createCanvasElement = env.getEnv().createCanvasElement;
  var canvas = createCanvasElement();
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
function createCanvasFromMedia(media, dims) {
  var ImageData2 = env.getEnv().ImageData;
  if (!(media instanceof ImageData2) && !isMediaLoaded(media)) {
    throw new Error("createCanvasFromMedia - media has not finished loading yet");
  }
  var _a2 = dims || getMediaDimensions(media), width = _a2.width, height = _a2.height;
  var canvas = createCanvas({ width, height });
  if (media instanceof ImageData2) {
    getContext2dOrThrow(canvas).putImageData(media, 0, 0);
  } else {
    getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
  }
  return canvas;
}

// node_modules/face-api.js/build/es6/dom/imageTensorToCanvas.js
function imageTensorToCanvas(imgTensor, canvas) {
  return __awaiter(this, void 0, void 0, function() {
    var targetCanvas, _a2, height, width, numChannels, imgTensor3D;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          targetCanvas = canvas || env.getEnv().createCanvasElement();
          _a2 = imgTensor.shape.slice(isTensor4D(imgTensor) ? 1 : 0), height = _a2[0], width = _a2[1], numChannels = _a2[2];
          imgTensor3D = Ze(function() {
            return imgTensor.as3D(height, width, numChannels).toInt();
          });
          return [4, id.toPixels(imgTensor3D, targetCanvas)];
        case 1:
          _b.sent();
          imgTensor3D.dispose();
          return [2, targetCanvas];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/dom/isMediaElement.js
function isMediaElement(input) {
  var _a2 = env.getEnv(), Image = _a2.Image, Canvas = _a2.Canvas, Video = _a2.Video;
  return input instanceof Image || input instanceof Canvas || input instanceof Video;
}

// node_modules/face-api.js/build/es6/dom/imageToSquare.js
function imageToSquare(input, inputSize, centerImage) {
  if (centerImage === void 0) {
    centerImage = false;
  }
  var _a2 = env.getEnv(), Image = _a2.Image, Canvas = _a2.Canvas;
  if (!(input instanceof Image || input instanceof Canvas)) {
    throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");
  }
  var dims = getMediaDimensions(input);
  var scale2 = inputSize / Math.max(dims.height, dims.width);
  var width = scale2 * dims.width;
  var height = scale2 * dims.height;
  var targetCanvas = createCanvas({ width: inputSize, height: inputSize });
  var inputCanvas = input instanceof Canvas ? input : createCanvasFromMedia(input);
  var offset = Math.abs(width - height) / 2;
  var dx = centerImage && width < height ? offset : 0;
  var dy = centerImage && height < width ? offset : 0;
  getContext2dOrThrow(targetCanvas).drawImage(inputCanvas, dx, dy, width, height);
  return targetCanvas;
}

// node_modules/face-api.js/build/es6/dom/NetInput.js
var NetInput = (
  /** @class */
  function() {
    function NetInput2(inputs, treatAsBatchInput) {
      var _this = this;
      if (treatAsBatchInput === void 0) {
        treatAsBatchInput = false;
      }
      this._imageTensors = [];
      this._canvases = [];
      this._treatAsBatchInput = false;
      this._inputDimensions = [];
      if (!Array.isArray(inputs)) {
        throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + inputs);
      }
      this._treatAsBatchInput = treatAsBatchInput;
      this._batchSize = inputs.length;
      inputs.forEach(function(input, idx) {
        if (isTensor3D(input)) {
          _this._imageTensors[idx] = input;
          _this._inputDimensions[idx] = input.shape;
          return;
        }
        if (isTensor4D(input)) {
          var batchSize = input.shape[0];
          if (batchSize !== 1) {
            throw new Error("NetInput - tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
          }
          _this._imageTensors[idx] = input;
          _this._inputDimensions[idx] = input.shape.slice(1);
          return;
        }
        var canvas = input instanceof env.getEnv().Canvas ? input : createCanvasFromMedia(input);
        _this._canvases[idx] = canvas;
        _this._inputDimensions[idx] = [canvas.height, canvas.width, 3];
      });
    }
    Object.defineProperty(NetInput2.prototype, "imageTensors", {
      get: function() {
        return this._imageTensors;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NetInput2.prototype, "canvases", {
      get: function() {
        return this._canvases;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NetInput2.prototype, "isBatchInput", {
      get: function() {
        return this.batchSize > 1 || this._treatAsBatchInput;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NetInput2.prototype, "batchSize", {
      get: function() {
        return this._batchSize;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NetInput2.prototype, "inputDimensions", {
      get: function() {
        return this._inputDimensions;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NetInput2.prototype, "inputSize", {
      get: function() {
        return this._inputSize;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NetInput2.prototype, "reshapedInputDimensions", {
      get: function() {
        var _this = this;
        return range(this.batchSize, 0, 1).map(function(_2, batchIdx) {
          return _this.getReshapedInputDimensions(batchIdx);
        });
      },
      enumerable: true,
      configurable: true
    });
    NetInput2.prototype.getInput = function(batchIdx) {
      return this.canvases[batchIdx] || this.imageTensors[batchIdx];
    };
    NetInput2.prototype.getInputDimensions = function(batchIdx) {
      return this._inputDimensions[batchIdx];
    };
    NetInput2.prototype.getInputHeight = function(batchIdx) {
      return this._inputDimensions[batchIdx][0];
    };
    NetInput2.prototype.getInputWidth = function(batchIdx) {
      return this._inputDimensions[batchIdx][1];
    };
    NetInput2.prototype.getReshapedInputDimensions = function(batchIdx) {
      if (typeof this.inputSize !== "number") {
        throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");
      }
      var width = this.getInputWidth(batchIdx);
      var height = this.getInputHeight(batchIdx);
      return computeReshapedDimensions({ width, height }, this.inputSize);
    };
    NetInput2.prototype.toBatchTensor = function(inputSize, isCenterInputs) {
      var _this = this;
      if (isCenterInputs === void 0) {
        isCenterInputs = true;
      }
      this._inputSize = inputSize;
      return Ze(function() {
        var inputTensors = range(_this.batchSize, 0, 1).map(function(batchIdx) {
          var input = _this.getInput(batchIdx);
          if (input instanceof wt) {
            var imgTensor = isTensor4D(input) ? input : input.expandDims();
            imgTensor = padToSquare(imgTensor, isCenterInputs);
            if (imgTensor.shape[1] !== inputSize || imgTensor.shape[2] !== inputSize) {
              imgTensor = Oh.resizeBilinear(imgTensor, [inputSize, inputSize]);
            }
            return imgTensor.as3D(inputSize, inputSize, 3);
          }
          if (input instanceof env.getEnv().Canvas) {
            return id.fromPixels(imageToSquare(input, inputSize, isCenterInputs));
          }
          throw new Error("toBatchTensor - at batchIdx " + batchIdx + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + input);
        });
        var batchTensor = Pr(inputTensors.map(function(t2) {
          return t2.toFloat();
        })).as4D(_this.batchSize, inputSize, inputSize, 3);
        return batchTensor;
      });
    };
    return NetInput2;
  }()
);

// node_modules/face-api.js/build/es6/dom/toNetInput.js
function toNetInput(inputs) {
  return __awaiter(this, void 0, void 0, function() {
    var inputArgArray, getIdxHint, inputArray;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (inputs instanceof NetInput) {
            return [2, inputs];
          }
          inputArgArray = Array.isArray(inputs) ? inputs : [inputs];
          if (!inputArgArray.length) {
            throw new Error("toNetInput - empty array passed as input");
          }
          getIdxHint = function(idx) {
            return Array.isArray(inputs) ? " at input index " + idx + ":" : "";
          };
          inputArray = inputArgArray.map(resolveInput);
          inputArray.forEach(function(input, i2) {
            if (!isMediaElement(input) && !isTensor3D(input) && !isTensor4D(input)) {
              if (typeof inputArgArray[i2] === "string") {
                throw new Error("toNetInput -" + getIdxHint(i2) + " string passed, but could not resolve HTMLElement for element id " + inputArgArray[i2]);
              }
              throw new Error("toNetInput -" + getIdxHint(i2) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
            }
            if (isTensor4D(input)) {
              var batchSize = input.shape[0];
              if (batchSize !== 1) {
                throw new Error("toNetInput -" + getIdxHint(i2) + " tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
              }
            }
          });
          return [4, Promise.all(inputArray.map(function(input) {
            return isMediaElement(input) && awaitMediaLoaded(input);
          }))];
        case 1:
          _a2.sent();
          return [2, new NetInput(inputArray, Array.isArray(inputs))];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/dom/extractFaces.js
function extractFaces(input, detections) {
  return __awaiter(this, void 0, void 0, function() {
    var Canvas, canvas, netInput, tensorOrCanvas, _a2, ctx, boxes;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          Canvas = env.getEnv().Canvas;
          canvas = input;
          if (!!(input instanceof Canvas))
            return [3, 5];
          return [4, toNetInput(input)];
        case 1:
          netInput = _b.sent();
          if (netInput.batchSize > 1) {
            throw new Error("extractFaces - batchSize > 1 not supported");
          }
          tensorOrCanvas = netInput.getInput(0);
          if (!(tensorOrCanvas instanceof Canvas))
            return [3, 2];
          _a2 = tensorOrCanvas;
          return [3, 4];
        case 2:
          return [4, imageTensorToCanvas(tensorOrCanvas)];
        case 3:
          _a2 = _b.sent();
          _b.label = 4;
        case 4:
          canvas = _a2;
          _b.label = 5;
        case 5:
          ctx = getContext2dOrThrow(canvas);
          boxes = detections.map(function(det) {
            return det instanceof FaceDetection ? det.forSize(canvas.width, canvas.height).box.floor() : det;
          }).map(function(box) {
            return box.clipAtImageBorders(canvas.width, canvas.height);
          });
          return [2, boxes.map(function(_a3) {
            var x2 = _a3.x, y2 = _a3.y, width = _a3.width, height = _a3.height;
            var faceImg = createCanvas({ width, height });
            getContext2dOrThrow(faceImg).putImageData(ctx.getImageData(x2, y2, width, height), 0, 0);
            return faceImg;
          })];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/dom/extractFaceTensors.js
function extractFaceTensors(imageTensor, detections) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      if (!isTensor3D(imageTensor) && !isTensor4D(imageTensor)) {
        throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");
      }
      if (isTensor4D(imageTensor) && imageTensor.shape[0] > 1) {
        throw new Error("extractFaceTensors - batchSize > 1 not supported");
      }
      return [2, Ze(function() {
        var _a3 = imageTensor.shape.slice(isTensor4D(imageTensor) ? 1 : 0), imgHeight = _a3[0], imgWidth = _a3[1], numChannels = _a3[2];
        var boxes = detections.map(function(det) {
          return det instanceof FaceDetection ? det.forSize(imgWidth, imgHeight).box : det;
        }).map(function(box) {
          return box.clipAtImageBorders(imgWidth, imgHeight);
        });
        var faceTensors = boxes.map(function(_a4) {
          var x2 = _a4.x, y2 = _a4.y, width = _a4.width, height = _a4.height;
          return xl(imageTensor.as3D(imgHeight, imgWidth, numChannels), [y2, x2, 0], [height, width, numChannels]);
        });
        return faceTensors;
      })];
    });
  });
}

// node_modules/face-api.js/build/es6/dom/fetchOrThrow.js
function fetchOrThrow(url, init) {
  return __awaiter(this, void 0, void 0, function() {
    var fetch2, res;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          fetch2 = env.getEnv().fetch;
          return [4, fetch2(url, init)];
        case 1:
          res = _a2.sent();
          if (!(res.status < 400)) {
            throw new Error("failed to fetch: (" + res.status + ") " + res.statusText + ", from url: " + res.url);
          }
          return [2, res];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/dom/fetchImage.js
function fetchImage(uri) {
  return __awaiter(this, void 0, void 0, function() {
    var res, blob;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, fetchOrThrow(uri)];
        case 1:
          res = _a2.sent();
          return [4, res.blob()];
        case 2:
          blob = _a2.sent();
          if (!blob.type.startsWith("image/")) {
            throw new Error("fetchImage - expected blob type to be of type image/*, instead have: " + blob.type + ", for url: " + res.url);
          }
          return [2, bufferToImage(blob)];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/dom/fetchJson.js
function fetchJson(uri) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, fetchOrThrow(uri)];
        case 1:
          return [2, _a2.sent().json()];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/dom/fetchNetWeights.js
function fetchNetWeights(uri) {
  return __awaiter(this, void 0, void 0, function() {
    var _a2;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _a2 = Float32Array.bind;
          return [4, fetchOrThrow(uri)];
        case 1:
          return [4, _b.sent().arrayBuffer()];
        case 2:
          return [2, new (_a2.apply(Float32Array, [void 0, _b.sent()]))()];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/common/getModelUris.js
function getModelUris(uri, defaultModelName) {
  var defaultManifestFilename = defaultModelName + "-weights_manifest.json";
  if (!uri) {
    return {
      modelBaseUri: "",
      manifestUri: defaultManifestFilename
    };
  }
  if (uri === "/") {
    return {
      modelBaseUri: "/",
      manifestUri: "/" + defaultManifestFilename
    };
  }
  var protocol = uri.startsWith("http://") ? "http://" : uri.startsWith("https://") ? "https://" : "";
  uri = uri.replace(protocol, "");
  var parts = uri.split("/").filter(function(s2) {
    return s2;
  });
  var manifestFile = uri.endsWith(".json") ? parts[parts.length - 1] : defaultManifestFilename;
  var modelBaseUri = protocol + (uri.endsWith(".json") ? parts.slice(0, parts.length - 1) : parts).join("/");
  modelBaseUri = uri.startsWith("/") ? "/" + modelBaseUri : modelBaseUri;
  return {
    modelBaseUri,
    manifestUri: modelBaseUri === "/" ? "/" + manifestFile : modelBaseUri + "/" + manifestFile
  };
}

// node_modules/face-api.js/build/es6/dom/loadWeightMap.js
function loadWeightMap(uri, defaultModelName) {
  return __awaiter(this, void 0, void 0, function() {
    var _a2, manifestUri, modelBaseUri, manifest;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _a2 = getModelUris(uri, defaultModelName), manifestUri = _a2.manifestUri, modelBaseUri = _a2.modelBaseUri;
          return [4, fetchJson(manifestUri)];
        case 1:
          manifest = _b.sent();
          return [2, ed.loadWeights(manifest, modelBaseUri)];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/dom/matchDimensions.js
function matchDimensions(input, reference, useMediaDimensions) {
  if (useMediaDimensions === void 0) {
    useMediaDimensions = false;
  }
  var _a2 = useMediaDimensions ? getMediaDimensions(reference) : reference, width = _a2.width, height = _a2.height;
  input.width = width;
  input.height = height;
  return { width, height };
}

// node_modules/face-api.js/build/es6/NeuralNetwork.js
var NeuralNetwork = (
  /** @class */
  function() {
    function NeuralNetwork2(_name) {
      this._name = _name;
      this._params = void 0;
      this._paramMappings = [];
    }
    Object.defineProperty(NeuralNetwork2.prototype, "params", {
      get: function() {
        return this._params;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NeuralNetwork2.prototype, "paramMappings", {
      get: function() {
        return this._paramMappings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NeuralNetwork2.prototype, "isLoaded", {
      get: function() {
        return !!this.params;
      },
      enumerable: true,
      configurable: true
    });
    NeuralNetwork2.prototype.getParamFromPath = function(paramPath) {
      var _a2 = this.traversePropertyPath(paramPath), obj = _a2.obj, objProp = _a2.objProp;
      return obj[objProp];
    };
    NeuralNetwork2.prototype.reassignParamFromPath = function(paramPath, tensor) {
      var _a2 = this.traversePropertyPath(paramPath), obj = _a2.obj, objProp = _a2.objProp;
      obj[objProp].dispose();
      obj[objProp] = tensor;
    };
    NeuralNetwork2.prototype.getParamList = function() {
      var _this = this;
      return this._paramMappings.map(function(_a2) {
        var paramPath = _a2.paramPath;
        return {
          path: paramPath,
          tensor: _this.getParamFromPath(paramPath)
        };
      });
    };
    NeuralNetwork2.prototype.getTrainableParams = function() {
      return this.getParamList().filter(function(param) {
        return param.tensor instanceof St;
      });
    };
    NeuralNetwork2.prototype.getFrozenParams = function() {
      return this.getParamList().filter(function(param) {
        return !(param.tensor instanceof St);
      });
    };
    NeuralNetwork2.prototype.variable = function() {
      var _this = this;
      this.getFrozenParams().forEach(function(_a2) {
        var path = _a2.path, tensor = _a2.tensor;
        _this.reassignParamFromPath(path, tensor.variable());
      });
    };
    NeuralNetwork2.prototype.freeze = function() {
      var _this = this;
      this.getTrainableParams().forEach(function(_a2) {
        var path = _a2.path, variable = _a2.tensor;
        var tensor = Fn(variable.dataSync());
        variable.dispose();
        _this.reassignParamFromPath(path, tensor);
      });
    };
    NeuralNetwork2.prototype.dispose = function(throwOnRedispose) {
      if (throwOnRedispose === void 0) {
        throwOnRedispose = true;
      }
      this.getParamList().forEach(function(param) {
        if (throwOnRedispose && param.tensor.isDisposed) {
          throw new Error("param tensor has already been disposed for path " + param.path);
        }
        param.tensor.dispose();
      });
      this._params = void 0;
    };
    NeuralNetwork2.prototype.serializeParams = function() {
      return new Float32Array(this.getParamList().map(function(_a2) {
        var tensor = _a2.tensor;
        return Array.from(tensor.dataSync());
      }).reduce(function(flat, arr) {
        return flat.concat(arr);
      }));
    };
    NeuralNetwork2.prototype.load = function(weightsOrUrl) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (weightsOrUrl instanceof Float32Array) {
                this.extractWeights(weightsOrUrl);
                return [
                  2
                  /*return*/
                ];
              }
              return [4, this.loadFromUri(weightsOrUrl)];
            case 1:
              _a2.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    NeuralNetwork2.prototype.loadFromUri = function(uri) {
      return __awaiter(this, void 0, void 0, function() {
        var weightMap;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (uri && typeof uri !== "string") {
                throw new Error(this._name + ".loadFromUri - expected model uri");
              }
              return [4, loadWeightMap(uri, this.getDefaultModelName())];
            case 1:
              weightMap = _a2.sent();
              this.loadFromWeightMap(weightMap);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    NeuralNetwork2.prototype.loadFromDisk = function(filePath) {
      return __awaiter(this, void 0, void 0, function() {
        var readFile, _a2, manifestUri, modelBaseUri, fetchWeightsFromDisk, loadWeights, manifest, _b, _c2, weightMap;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              if (filePath && typeof filePath !== "string") {
                throw new Error(this._name + ".loadFromDisk - expected model file path");
              }
              readFile = env.getEnv().readFile;
              _a2 = getModelUris(filePath, this.getDefaultModelName()), manifestUri = _a2.manifestUri, modelBaseUri = _a2.modelBaseUri;
              fetchWeightsFromDisk = function(filePaths) {
                return Promise.all(filePaths.map(function(filePath2) {
                  return readFile(filePath2).then(function(buf) {
                    return buf.buffer;
                  });
                }));
              };
              loadWeights = ed.weightsLoaderFactory(fetchWeightsFromDisk);
              _c2 = (_b = JSON).parse;
              return [4, readFile(manifestUri)];
            case 1:
              manifest = _c2.apply(_b, [_d.sent().toString()]);
              return [4, loadWeights(manifest, modelBaseUri)];
            case 2:
              weightMap = _d.sent();
              this.loadFromWeightMap(weightMap);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    NeuralNetwork2.prototype.loadFromWeightMap = function(weightMap) {
      var _a2 = this.extractParamsFromWeigthMap(weightMap), paramMappings = _a2.paramMappings, params = _a2.params;
      this._paramMappings = paramMappings;
      this._params = params;
    };
    NeuralNetwork2.prototype.extractWeights = function(weights) {
      var _a2 = this.extractParams(weights), paramMappings = _a2.paramMappings, params = _a2.params;
      this._paramMappings = paramMappings;
      this._params = params;
    };
    NeuralNetwork2.prototype.traversePropertyPath = function(paramPath) {
      if (!this.params) {
        throw new Error("traversePropertyPath - model has no loaded params");
      }
      var result = paramPath.split("/").reduce(function(res, objProp2) {
        if (!res.nextObj.hasOwnProperty(objProp2)) {
          throw new Error("traversePropertyPath - object does not have property " + objProp2 + ", for path " + paramPath);
        }
        return { obj: res.nextObj, objProp: objProp2, nextObj: res.nextObj[objProp2] };
      }, { nextObj: this.params });
      var obj = result.obj, objProp = result.objProp;
      if (!obj || !objProp || !(obj[objProp] instanceof wt)) {
        throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
      }
      return { obj, objProp };
    };
    return NeuralNetwork2;
  }()
);

// node_modules/face-api.js/build/es6/common/depthwiseSeparableConv.js
function depthwiseSeparableConv(x2, params, stride) {
  return Ze(function() {
    var out = Jc(x2, params.depthwise_filter, params.pointwise_filter, stride, "same");
    out = rc(out, params.bias);
    return out;
  });
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/denseBlock.js
function denseBlock3(x2, denseBlockParams, isFirstLayer) {
  if (isFirstLayer === void 0) {
    isFirstLayer = false;
  }
  return Ze(function() {
    var out1 = Bl(isFirstLayer ? rc(qc(x2, denseBlockParams.conv0.filters, [2, 2], "same"), denseBlockParams.conv0.bias) : depthwiseSeparableConv(x2, denseBlockParams.conv0, [2, 2]));
    var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
    var in3 = Bl(rc(out1, out2));
    var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
    return Bl(rc(out1, rc(out2, out3)));
  });
}
function denseBlock4(x2, denseBlockParams, isFirstLayer, isScaleDown) {
  if (isFirstLayer === void 0) {
    isFirstLayer = false;
  }
  if (isScaleDown === void 0) {
    isScaleDown = true;
  }
  return Ze(function() {
    var out1 = Bl(isFirstLayer ? rc(qc(x2, denseBlockParams.conv0.filters, isScaleDown ? [2, 2] : [1, 1], "same"), denseBlockParams.conv0.bias) : depthwiseSeparableConv(x2, denseBlockParams.conv0, isScaleDown ? [2, 2] : [1, 1]));
    var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
    var in3 = Bl(rc(out1, out2));
    var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
    var in4 = Bl(rc(out1, rc(out2, out3)));
    var out4 = depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1]);
    return Bl(rc(out1, rc(out2, rc(out3, out4))));
  });
}

// node_modules/face-api.js/build/es6/common/convLayer.js
function convLayer(x2, params, padding, withRelu) {
  if (padding === void 0) {
    padding = "same";
  }
  if (withRelu === void 0) {
    withRelu = false;
  }
  return Ze(function() {
    var out = rc(qc(x2, params.filters, [1, 1], padding), params.bias);
    return withRelu ? Bl(out) : out;
  });
}

// node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js
function disposeUnusedWeightTensors(weightMap, paramMappings) {
  Object.keys(weightMap).forEach(function(path) {
    if (!paramMappings.some(function(pm) {
      return pm.originalPath === path;
    })) {
      weightMap[path].dispose();
    }
  });
}

// node_modules/face-api.js/build/es6/common/extractConvParamsFactory.js
function extractConvParamsFactory(extractWeights, paramMappings) {
  return function(channelsIn, channelsOut, filterSize, mappedPrefix) {
    var filters = Ln(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
    var bias = Mn(extractWeights(channelsOut));
    paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
    return { filters, bias };
  };
}

// node_modules/face-api.js/build/es6/common/extractFCParamsFactory.js
function extractFCParamsFactory(extractWeights, paramMappings) {
  return function(channelsIn, channelsOut, mappedPrefix) {
    var fc_weights = Bn(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
    var fc_bias = Mn(extractWeights(channelsOut));
    paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
    return {
      weights: fc_weights,
      bias: fc_bias
    };
  };
}

// node_modules/face-api.js/build/es6/common/types.js
var SeparableConvParams = (
  /** @class */
  /* @__PURE__ */ function() {
    function SeparableConvParams2(depthwise_filter, pointwise_filter, bias) {
      this.depthwise_filter = depthwise_filter;
      this.pointwise_filter = pointwise_filter;
      this.bias = bias;
    }
    return SeparableConvParams2;
  }()
);

// node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js
function extractSeparableConvParamsFactory(extractWeights, paramMappings) {
  return function(channelsIn, channelsOut, mappedPrefix) {
    var depthwise_filter = Ln(extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1]);
    var pointwise_filter = Ln(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut]);
    var bias = Mn(extractWeights(channelsOut));
    paramMappings.push({ paramPath: mappedPrefix + "/depthwise_filter" }, { paramPath: mappedPrefix + "/pointwise_filter" }, { paramPath: mappedPrefix + "/bias" });
    return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
  };
}
function loadSeparableConvParamsFactory(extractWeightEntry) {
  return function(prefix) {
    var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
    var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
  };
}

// node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js
function extractWeightEntryFactory(weightMap, paramMappings) {
  return function(originalPath, paramRank, mappedPath) {
    var tensor = weightMap[originalPath];
    if (!isTensor(tensor, paramRank)) {
      throw new Error("expected weightMap[" + originalPath + "] to be a Tensor" + paramRank + "D, instead have " + tensor);
    }
    paramMappings.push({ originalPath, paramPath: mappedPath || originalPath });
    return tensor;
  };
}

// node_modules/face-api.js/build/es6/common/extractWeightsFactory.js
function extractWeightsFactory(weights) {
  var remainingWeights = weights;
  function extractWeights(numWeights) {
    var ret = remainingWeights.slice(0, numWeights);
    remainingWeights = remainingWeights.slice(numWeights);
    return ret;
  }
  function getRemainingWeights() {
    return remainingWeights;
  }
  return {
    extractWeights,
    getRemainingWeights
  };
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/extractorsFactory.js
function extractorsFactory(extractWeights, paramMappings) {
  var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
  var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
  function extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }
    var conv0 = isFirstLayer ? extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv0") : extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/conv0");
    var conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv1");
    var conv22 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv2");
    return { conv0, conv1, conv2: conv22 };
  }
  function extractDenseBlock4Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }
    var _a2 = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer), conv0 = _a2.conv0, conv1 = _a2.conv1, conv22 = _a2.conv2;
    var conv3 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv3");
    return { conv0, conv1, conv2: conv22, conv3 };
  }
  return {
    extractDenseBlock3Params,
    extractDenseBlock4Params
  };
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParams.js
function extractParams(weights) {
  var paramMappings = [];
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var extractDenseBlock4Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock4Params;
  var dense0 = extractDenseBlock4Params(3, 32, "dense0", true);
  var dense1 = extractDenseBlock4Params(32, 64, "dense1");
  var dense2 = extractDenseBlock4Params(64, 128, "dense2");
  var dense3 = extractDenseBlock4Params(128, 256, "dense3");
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return {
    paramMappings,
    params: { dense0, dense1, dense2, dense3 }
  };
}

// node_modules/face-api.js/build/es6/common/loadConvParamsFactory.js
function loadConvParamsFactory(extractWeightEntry) {
  return function(prefix) {
    var filters = extractWeightEntry(prefix + "/filters", 4);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return { filters, bias };
  };
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/loadParamsFactory.js
function loadParamsFactory(weightMap, paramMappings) {
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  var extractConvParams = loadConvParamsFactory(extractWeightEntry);
  var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
  function extractDenseBlock3Params(prefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }
    var conv0 = isFirstLayer ? extractConvParams(prefix + "/conv0") : extractSeparableConvParams(prefix + "/conv0");
    var conv1 = extractSeparableConvParams(prefix + "/conv1");
    var conv22 = extractSeparableConvParams(prefix + "/conv2");
    return { conv0, conv1, conv2: conv22 };
  }
  function extractDenseBlock4Params(prefix, isFirstLayer) {
    if (isFirstLayer === void 0) {
      isFirstLayer = false;
    }
    var conv0 = isFirstLayer ? extractConvParams(prefix + "/conv0") : extractSeparableConvParams(prefix + "/conv0");
    var conv1 = extractSeparableConvParams(prefix + "/conv1");
    var conv22 = extractSeparableConvParams(prefix + "/conv2");
    var conv3 = extractSeparableConvParams(prefix + "/conv3");
    return { conv0, conv1, conv2: conv22, conv3 };
  }
  return {
    extractDenseBlock3Params,
    extractDenseBlock4Params
  };
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMap.js
function extractParamsFromWeigthMap(weightMap) {
  var paramMappings = [];
  var extractDenseBlock4Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock4Params;
  var params = {
    dense0: extractDenseBlock4Params("dense0", true),
    dense1: extractDenseBlock4Params("dense1"),
    dense2: extractDenseBlock4Params("dense2"),
    dense3: extractDenseBlock4Params("dense3")
  };
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/FaceFeatureExtractor.js
var FaceFeatureExtractor = (
  /** @class */
  function(_super) {
    __extends(FaceFeatureExtractor2, _super);
    function FaceFeatureExtractor2() {
      return _super.call(this, "FaceFeatureExtractor") || this;
    }
    FaceFeatureExtractor2.prototype.forwardInput = function(input) {
      var params = this.params;
      if (!params) {
        throw new Error("FaceFeatureExtractor - load model before inference");
      }
      return Ze(function() {
        var batchTensor = input.toBatchTensor(112, true);
        var meanRgb = [122.782, 117.001, 104.298];
        var normalized = normalize(batchTensor, meanRgb).div(On(255));
        var out = denseBlock4(normalized, params.dense0, true);
        out = denseBlock4(out, params.dense1);
        out = denseBlock4(out, params.dense2);
        out = denseBlock4(out, params.dense3);
        out = fl(out, [7, 7], [2, 2], "valid");
        return out;
      });
    };
    FaceFeatureExtractor2.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    FaceFeatureExtractor2.prototype.getDefaultModelName = function() {
      return "face_feature_extractor_model";
    };
    FaceFeatureExtractor2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return extractParamsFromWeigthMap(weightMap);
    };
    FaceFeatureExtractor2.prototype.extractParams = function(weights) {
      return extractParams(weights);
    };
    return FaceFeatureExtractor2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/common/fullyConnectedLayer.js
function fullyConnectedLayer(x2, params) {
  return Ze(function() {
    return rc(el(x2, params.weights), params.bias);
  });
}

// node_modules/face-api.js/build/es6/faceProcessor/extractParams.js
function extractParams2(weights, channelsIn, channelsOut) {
  var paramMappings = [];
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
  var fc2 = extractFCParams(channelsIn, channelsOut, "fc");
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return {
    paramMappings,
    params: { fc: fc2 }
  };
}

// node_modules/face-api.js/build/es6/faceProcessor/extractParamsFromWeigthMap.js
function extractParamsFromWeigthMap2(weightMap) {
  var paramMappings = [];
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  function extractFcParams(prefix) {
    var weights = extractWeightEntry(prefix + "/weights", 2);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return { weights, bias };
  }
  var params = {
    fc: extractFcParams("fc")
  };
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/faceProcessor/util.js
function seperateWeightMaps(weightMap) {
  var featureExtractorMap = {};
  var classifierMap = {};
  Object.keys(weightMap).forEach(function(key) {
    var map = key.startsWith("fc") ? classifierMap : featureExtractorMap;
    map[key] = weightMap[key];
  });
  return { featureExtractorMap, classifierMap };
}

// node_modules/face-api.js/build/es6/faceProcessor/FaceProcessor.js
var FaceProcessor = (
  /** @class */
  function(_super) {
    __extends(FaceProcessor2, _super);
    function FaceProcessor2(_name, faceFeatureExtractor) {
      var _this = _super.call(this, _name) || this;
      _this._faceFeatureExtractor = faceFeatureExtractor;
      return _this;
    }
    Object.defineProperty(FaceProcessor2.prototype, "faceFeatureExtractor", {
      get: function() {
        return this._faceFeatureExtractor;
      },
      enumerable: true,
      configurable: true
    });
    FaceProcessor2.prototype.runNet = function(input) {
      var _this = this;
      var params = this.params;
      if (!params) {
        throw new Error(this._name + " - load model before inference");
      }
      return Ze(function() {
        var bottleneckFeatures = input instanceof NetInput ? _this.faceFeatureExtractor.forwardInput(input) : input;
        return fullyConnectedLayer(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc);
      });
    };
    FaceProcessor2.prototype.dispose = function(throwOnRedispose) {
      if (throwOnRedispose === void 0) {
        throwOnRedispose = true;
      }
      this.faceFeatureExtractor.dispose(throwOnRedispose);
      _super.prototype.dispose.call(this, throwOnRedispose);
    };
    FaceProcessor2.prototype.loadClassifierParams = function(weights) {
      var _a2 = this.extractClassifierParams(weights), params = _a2.params, paramMappings = _a2.paramMappings;
      this._params = params;
      this._paramMappings = paramMappings;
    };
    FaceProcessor2.prototype.extractClassifierParams = function(weights) {
      return extractParams2(weights, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
    };
    FaceProcessor2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      var _a2 = seperateWeightMaps(weightMap), featureExtractorMap = _a2.featureExtractorMap, classifierMap = _a2.classifierMap;
      this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
      return extractParamsFromWeigthMap2(classifierMap);
    };
    FaceProcessor2.prototype.extractParams = function(weights) {
      var cIn = this.getClassifierChannelsIn();
      var cOut = this.getClassifierChannelsOut();
      var classifierWeightSize = cOut * cIn + cOut;
      var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
      var classifierWeights = weights.slice(weights.length - classifierWeightSize);
      this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
      return this.extractClassifierParams(classifierWeights);
    };
    return FaceProcessor2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressions.js
var FACE_EXPRESSION_LABELS = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];
var FaceExpressions = (
  /** @class */
  function() {
    function FaceExpressions2(probabilities) {
      var _this = this;
      if (probabilities.length !== 7) {
        throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + probabilities.length);
      }
      FACE_EXPRESSION_LABELS.forEach(function(expression, idx) {
        _this[expression] = probabilities[idx];
      });
    }
    FaceExpressions2.prototype.asSortedArray = function() {
      var _this = this;
      return FACE_EXPRESSION_LABELS.map(function(expression) {
        return { expression, probability: _this[expression] };
      }).sort(function(e0, e1) {
        return e1.probability - e0.probability;
      });
    };
    return FaceExpressions2;
  }()
);

// node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressionNet.js
var FaceExpressionNet = (
  /** @class */
  function(_super) {
    __extends(FaceExpressionNet2, _super);
    function FaceExpressionNet2(faceFeatureExtractor) {
      if (faceFeatureExtractor === void 0) {
        faceFeatureExtractor = new FaceFeatureExtractor();
      }
      return _super.call(this, "FaceExpressionNet", faceFeatureExtractor) || this;
    }
    FaceExpressionNet2.prototype.forwardInput = function(input) {
      var _this = this;
      return Ze(function() {
        return go(_this.runNet(input));
      });
    };
    FaceExpressionNet2.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    FaceExpressionNet2.prototype.predictExpressions = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var netInput, out, probabilitesByBatch, predictionsByBatch;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, toNetInput(input)];
            case 1:
              netInput = _a2.sent();
              return [4, this.forwardInput(netInput)];
            case 2:
              out = _a2.sent();
              return [4, Promise.all(Ur(out).map(function(t2) {
                return __awaiter(_this, void 0, void 0, function() {
                  var data;
                  return __generator(this, function(_a3) {
                    switch (_a3.label) {
                      case 0:
                        return [4, t2.data()];
                      case 1:
                        data = _a3.sent();
                        t2.dispose();
                        return [2, data];
                    }
                  });
                });
              }))];
            case 3:
              probabilitesByBatch = _a2.sent();
              out.dispose();
              predictionsByBatch = probabilitesByBatch.map(function(probabilites) {
                return new FaceExpressions(probabilites);
              });
              return [2, netInput.isBatchInput ? predictionsByBatch : predictionsByBatch[0]];
          }
        });
      });
    };
    FaceExpressionNet2.prototype.getDefaultModelName = function() {
      return "face_expression_model";
    };
    FaceExpressionNet2.prototype.getClassifierChannelsIn = function() {
      return 256;
    };
    FaceExpressionNet2.prototype.getClassifierChannelsOut = function() {
      return 7;
    };
    return FaceExpressionNet2;
  }(FaceProcessor)
);

// node_modules/face-api.js/build/es6/factories/WithFaceExpressions.js
function isWithFaceExpressions(obj) {
  return obj["expressions"] instanceof FaceExpressions;
}
function extendWithFaceExpressions(sourceObj, expressions) {
  var extension = { expressions };
  return Object.assign({}, sourceObj, extension);
}

// node_modules/face-api.js/build/es6/draw/drawFaceExpressions.js
function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, textFieldAnchor) {
  if (minConfidence === void 0) {
    minConfidence = 0.1;
  }
  var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
  faceExpressionsArray.forEach(function(e2) {
    var expr = e2 instanceof FaceExpressions ? e2 : isWithFaceExpressions(e2) ? e2.expressions : void 0;
    if (!expr) {
      throw new Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");
    }
    var sorted = expr.asSortedArray();
    var resultsToDisplay = sorted.filter(function(expr2) {
      return expr2.probability > minConfidence;
    });
    var anchor = isWithFaceDetection(e2) ? e2.detection.box.bottomLeft : textFieldAnchor || new Point(0, 0);
    var drawTextField = new DrawTextField(resultsToDisplay.map(function(expr2) {
      return expr2.expression + " (" + round(expr2.probability) + ")";
    }), anchor);
    drawTextField.draw(canvasArg);
  });
}

// node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js
function isWithFaceLandmarks(obj) {
  return isWithFaceDetection(obj) && obj["landmarks"] instanceof FaceLandmarks && obj["unshiftedLandmarks"] instanceof FaceLandmarks && obj["alignedRect"] instanceof FaceDetection;
}
function extendWithFaceLandmarks(sourceObj, unshiftedLandmarks) {
  var shift = sourceObj.detection.box;
  var landmarks = unshiftedLandmarks.shiftBy(shift.x, shift.y);
  var rect = landmarks.align();
  var imageDims = sourceObj.detection.imageDims;
  var alignedRect = new FaceDetection(sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims);
  var extension = {
    landmarks,
    unshiftedLandmarks,
    alignedRect
  };
  return Object.assign({}, sourceObj, extension);
}

// node_modules/face-api.js/build/es6/draw/DrawFaceLandmarks.js
var DrawFaceLandmarksOptions = (
  /** @class */
  /* @__PURE__ */ function() {
    function DrawFaceLandmarksOptions2(options) {
      if (options === void 0) {
        options = {};
      }
      var _a2 = options.drawLines, drawLines = _a2 === void 0 ? true : _a2, _b = options.drawPoints, drawPoints = _b === void 0 ? true : _b, lineWidth = options.lineWidth, lineColor = options.lineColor, pointSize = options.pointSize, pointColor = options.pointColor;
      this.drawLines = drawLines;
      this.drawPoints = drawPoints;
      this.lineWidth = lineWidth || 1;
      this.pointSize = pointSize || 2;
      this.lineColor = lineColor || "rgba(0, 255, 255, 1)";
      this.pointColor = pointColor || "rgba(255, 0, 255, 1)";
    }
    return DrawFaceLandmarksOptions2;
  }()
);
var DrawFaceLandmarks = (
  /** @class */
  function() {
    function DrawFaceLandmarks2(faceLandmarks, options) {
      if (options === void 0) {
        options = {};
      }
      this.faceLandmarks = faceLandmarks;
      this.options = new DrawFaceLandmarksOptions(options);
    }
    DrawFaceLandmarks2.prototype.draw = function(canvasArg) {
      var ctx = getContext2dOrThrow(canvasArg);
      var _a2 = this.options, drawLines = _a2.drawLines, drawPoints = _a2.drawPoints, lineWidth = _a2.lineWidth, lineColor = _a2.lineColor, pointSize = _a2.pointSize, pointColor = _a2.pointColor;
      if (drawLines && this.faceLandmarks instanceof FaceLandmarks68) {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        drawContour(ctx, this.faceLandmarks.getJawOutline());
        drawContour(ctx, this.faceLandmarks.getLeftEyeBrow());
        drawContour(ctx, this.faceLandmarks.getRightEyeBrow());
        drawContour(ctx, this.faceLandmarks.getNose());
        drawContour(ctx, this.faceLandmarks.getLeftEye(), true);
        drawContour(ctx, this.faceLandmarks.getRightEye(), true);
        drawContour(ctx, this.faceLandmarks.getMouth(), true);
      }
      if (drawPoints) {
        ctx.strokeStyle = pointColor;
        ctx.fillStyle = pointColor;
        var drawPoint = function(pt2) {
          ctx.beginPath();
          ctx.arc(pt2.x, pt2.y, pointSize, 0, 2 * Math.PI);
          ctx.fill();
        };
        this.faceLandmarks.positions.forEach(drawPoint);
      }
    };
    return DrawFaceLandmarks2;
  }()
);
function drawFaceLandmarks(canvasArg, faceLandmarks) {
  var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
  faceLandmarksArray.forEach(function(f2) {
    var landmarks = f2 instanceof FaceLandmarks ? f2 : isWithFaceLandmarks(f2) ? f2.landmarks : void 0;
    if (!landmarks) {
      throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");
    }
    new DrawFaceLandmarks(landmarks).draw(canvasArg);
  });
}

// node_modules/face-api.js/build/es6/xception/extractParams.js
function extractorsFactory2(extractWeights, paramMappings) {
  var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
  var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
  function extractReductionBlockParams(channelsIn, channelsOut, mappedPrefix) {
    var separable_conv0 = extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/separable_conv0");
    var separable_conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/separable_conv1");
    var expansion_conv = extractConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/expansion_conv");
    return { separable_conv0, separable_conv1, expansion_conv };
  }
  function extractMainBlockParams(channels, mappedPrefix) {
    var separable_conv0 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv0");
    var separable_conv1 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv1");
    var separable_conv2 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv2");
    return { separable_conv0, separable_conv1, separable_conv2 };
  }
  return {
    extractConvParams,
    extractSeparableConvParams,
    extractReductionBlockParams,
    extractMainBlockParams
  };
}
function extractParams3(weights, numMainBlocks) {
  var paramMappings = [];
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var _b = extractorsFactory2(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractSeparableConvParams = _b.extractSeparableConvParams, extractReductionBlockParams = _b.extractReductionBlockParams, extractMainBlockParams = _b.extractMainBlockParams;
  var entry_flow_conv_in = extractConvParams(3, 32, 3, "entry_flow/conv_in");
  var entry_flow_reduction_block_0 = extractReductionBlockParams(32, 64, "entry_flow/reduction_block_0");
  var entry_flow_reduction_block_1 = extractReductionBlockParams(64, 128, "entry_flow/reduction_block_1");
  var entry_flow = {
    conv_in: entry_flow_conv_in,
    reduction_block_0: entry_flow_reduction_block_0,
    reduction_block_1: entry_flow_reduction_block_1
  };
  var middle_flow = {};
  range(numMainBlocks, 0, 1).forEach(function(idx) {
    middle_flow["main_block_" + idx] = extractMainBlockParams(128, "middle_flow/main_block_" + idx);
  });
  var exit_flow_reduction_block = extractReductionBlockParams(128, 256, "exit_flow/reduction_block");
  var exit_flow_separable_conv = extractSeparableConvParams(256, 512, "exit_flow/separable_conv");
  var exit_flow = {
    reduction_block: exit_flow_reduction_block,
    separable_conv: exit_flow_separable_conv
  };
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return {
    paramMappings,
    params: { entry_flow, middle_flow, exit_flow }
  };
}

// node_modules/face-api.js/build/es6/xception/extractParamsFromWeigthMap.js
function loadParamsFactory2(weightMap, paramMappings) {
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  var extractConvParams = loadConvParamsFactory(extractWeightEntry);
  var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
  function extractReductionBlockParams(mappedPrefix) {
    var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
    var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
    var expansion_conv = extractConvParams(mappedPrefix + "/expansion_conv");
    return { separable_conv0, separable_conv1, expansion_conv };
  }
  function extractMainBlockParams(mappedPrefix) {
    var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
    var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
    var separable_conv2 = extractSeparableConvParams(mappedPrefix + "/separable_conv2");
    return { separable_conv0, separable_conv1, separable_conv2 };
  }
  return {
    extractConvParams,
    extractSeparableConvParams,
    extractReductionBlockParams,
    extractMainBlockParams
  };
}
function extractParamsFromWeigthMap3(weightMap, numMainBlocks) {
  var paramMappings = [];
  var _a2 = loadParamsFactory2(weightMap, paramMappings), extractConvParams = _a2.extractConvParams, extractSeparableConvParams = _a2.extractSeparableConvParams, extractReductionBlockParams = _a2.extractReductionBlockParams, extractMainBlockParams = _a2.extractMainBlockParams;
  var entry_flow_conv_in = extractConvParams("entry_flow/conv_in");
  var entry_flow_reduction_block_0 = extractReductionBlockParams("entry_flow/reduction_block_0");
  var entry_flow_reduction_block_1 = extractReductionBlockParams("entry_flow/reduction_block_1");
  var entry_flow = {
    conv_in: entry_flow_conv_in,
    reduction_block_0: entry_flow_reduction_block_0,
    reduction_block_1: entry_flow_reduction_block_1
  };
  var middle_flow = {};
  range(numMainBlocks, 0, 1).forEach(function(idx) {
    middle_flow["main_block_" + idx] = extractMainBlockParams("middle_flow/main_block_" + idx);
  });
  var exit_flow_reduction_block = extractReductionBlockParams("exit_flow/reduction_block");
  var exit_flow_separable_conv = extractSeparableConvParams("exit_flow/separable_conv");
  var exit_flow = {
    reduction_block: exit_flow_reduction_block,
    separable_conv: exit_flow_separable_conv
  };
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params: { entry_flow, middle_flow, exit_flow }, paramMappings };
}

// node_modules/face-api.js/build/es6/xception/TinyXception.js
function conv(x2, params, stride) {
  return rc(qc(x2, params.filters, stride, "same"), params.bias);
}
function reductionBlock(x2, params, isActivateInput) {
  if (isActivateInput === void 0) {
    isActivateInput = true;
  }
  var out = isActivateInput ? Bl(x2) : x2;
  out = depthwiseSeparableConv(out, params.separable_conv0, [1, 1]);
  out = depthwiseSeparableConv(Bl(out), params.separable_conv1, [1, 1]);
  out = hl(out, [3, 3], [2, 2], "same");
  out = rc(out, conv(x2, params.expansion_conv, [2, 2]));
  return out;
}
function mainBlock(x2, params) {
  var out = depthwiseSeparableConv(Bl(x2), params.separable_conv0, [1, 1]);
  out = depthwiseSeparableConv(Bl(out), params.separable_conv1, [1, 1]);
  out = depthwiseSeparableConv(Bl(out), params.separable_conv2, [1, 1]);
  out = rc(out, x2);
  return out;
}
var TinyXception = (
  /** @class */
  function(_super) {
    __extends(TinyXception2, _super);
    function TinyXception2(numMainBlocks) {
      var _this = _super.call(this, "TinyXception") || this;
      _this._numMainBlocks = numMainBlocks;
      return _this;
    }
    TinyXception2.prototype.forwardInput = function(input) {
      var _this = this;
      var params = this.params;
      if (!params) {
        throw new Error("TinyXception - load model before inference");
      }
      return Ze(function() {
        var batchTensor = input.toBatchTensor(112, true);
        var meanRgb = [122.782, 117.001, 104.298];
        var normalized = normalize(batchTensor, meanRgb).div(On(256));
        var out = Bl(conv(normalized, params.entry_flow.conv_in, [2, 2]));
        out = reductionBlock(out, params.entry_flow.reduction_block_0, false);
        out = reductionBlock(out, params.entry_flow.reduction_block_1);
        range(_this._numMainBlocks, 0, 1).forEach(function(idx) {
          out = mainBlock(out, params.middle_flow["main_block_" + idx]);
        });
        out = reductionBlock(out, params.exit_flow.reduction_block);
        out = Bl(depthwiseSeparableConv(out, params.exit_flow.separable_conv, [1, 1]));
        return out;
      });
    };
    TinyXception2.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    TinyXception2.prototype.getDefaultModelName = function() {
      return "tiny_xception_model";
    };
    TinyXception2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return extractParamsFromWeigthMap3(weightMap, this._numMainBlocks);
    };
    TinyXception2.prototype.extractParams = function(weights) {
      return extractParams3(weights, this._numMainBlocks);
    };
    return TinyXception2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/ageGenderNet/extractParams.js
function extractParams4(weights) {
  var paramMappings = [];
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
  var age = extractFCParams(512, 1, "fc/age");
  var gender = extractFCParams(512, 2, "fc/gender");
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return {
    paramMappings,
    params: { fc: { age, gender } }
  };
}

// node_modules/face-api.js/build/es6/ageGenderNet/extractParamsFromWeigthMap.js
function extractParamsFromWeigthMap4(weightMap) {
  var paramMappings = [];
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  function extractFcParams(prefix) {
    var weights = extractWeightEntry(prefix + "/weights", 2);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return { weights, bias };
  }
  var params = {
    fc: {
      age: extractFcParams("fc/age"),
      gender: extractFcParams("fc/gender")
    }
  };
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/ageGenderNet/types.js
var Gender;
(function(Gender2) {
  Gender2["FEMALE"] = "female";
  Gender2["MALE"] = "male";
})(Gender || (Gender = {}));

// node_modules/face-api.js/build/es6/ageGenderNet/AgeGenderNet.js
var AgeGenderNet = (
  /** @class */
  function(_super) {
    __extends(AgeGenderNet2, _super);
    function AgeGenderNet2(faceFeatureExtractor) {
      if (faceFeatureExtractor === void 0) {
        faceFeatureExtractor = new TinyXception(2);
      }
      var _this = _super.call(this, "AgeGenderNet") || this;
      _this._faceFeatureExtractor = faceFeatureExtractor;
      return _this;
    }
    Object.defineProperty(AgeGenderNet2.prototype, "faceFeatureExtractor", {
      get: function() {
        return this._faceFeatureExtractor;
      },
      enumerable: true,
      configurable: true
    });
    AgeGenderNet2.prototype.runNet = function(input) {
      var _this = this;
      var params = this.params;
      if (!params) {
        throw new Error(this._name + " - load model before inference");
      }
      return Ze(function() {
        var bottleneckFeatures = input instanceof NetInput ? _this.faceFeatureExtractor.forwardInput(input) : input;
        var pooled = fl(bottleneckFeatures, [7, 7], [2, 2], "valid").as2D(bottleneckFeatures.shape[0], -1);
        var age = fullyConnectedLayer(pooled, params.fc.age).as1D();
        var gender = fullyConnectedLayer(pooled, params.fc.gender);
        return { age, gender };
      });
    };
    AgeGenderNet2.prototype.forwardInput = function(input) {
      var _this = this;
      return Ze(function() {
        var _a2 = _this.runNet(input), age = _a2.age, gender = _a2.gender;
        return { age, gender: go(gender) };
      });
    };
    AgeGenderNet2.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    AgeGenderNet2.prototype.predictAgeAndGender = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var netInput, out, ages, genders, ageAndGenderTensors, predictionsByBatch;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, toNetInput(input)];
            case 1:
              netInput = _a2.sent();
              return [4, this.forwardInput(netInput)];
            case 2:
              out = _a2.sent();
              ages = Ur(out.age);
              genders = Ur(out.gender);
              ageAndGenderTensors = ages.map(function(ageTensor, i2) {
                return {
                  ageTensor,
                  genderTensor: genders[i2]
                };
              });
              return [4, Promise.all(ageAndGenderTensors.map(function(_a3) {
                var ageTensor = _a3.ageTensor, genderTensor = _a3.genderTensor;
                return __awaiter(_this, void 0, void 0, function() {
                  var age, probMale, isMale, gender, genderProbability;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        return [4, ageTensor.data()];
                      case 1:
                        age = _b.sent()[0];
                        return [4, genderTensor.data()];
                      case 2:
                        probMale = _b.sent()[0];
                        isMale = probMale > 0.5;
                        gender = isMale ? Gender.MALE : Gender.FEMALE;
                        genderProbability = isMale ? probMale : 1 - probMale;
                        ageTensor.dispose();
                        genderTensor.dispose();
                        return [2, { age, gender, genderProbability }];
                    }
                  });
                });
              }))];
            case 3:
              predictionsByBatch = _a2.sent();
              out.age.dispose();
              out.gender.dispose();
              return [2, netInput.isBatchInput ? predictionsByBatch : predictionsByBatch[0]];
          }
        });
      });
    };
    AgeGenderNet2.prototype.getDefaultModelName = function() {
      return "age_gender_model";
    };
    AgeGenderNet2.prototype.dispose = function(throwOnRedispose) {
      if (throwOnRedispose === void 0) {
        throwOnRedispose = true;
      }
      this.faceFeatureExtractor.dispose(throwOnRedispose);
      _super.prototype.dispose.call(this, throwOnRedispose);
    };
    AgeGenderNet2.prototype.loadClassifierParams = function(weights) {
      var _a2 = this.extractClassifierParams(weights), params = _a2.params, paramMappings = _a2.paramMappings;
      this._params = params;
      this._paramMappings = paramMappings;
    };
    AgeGenderNet2.prototype.extractClassifierParams = function(weights) {
      return extractParams4(weights);
    };
    AgeGenderNet2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      var _a2 = seperateWeightMaps(weightMap), featureExtractorMap = _a2.featureExtractorMap, classifierMap = _a2.classifierMap;
      this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
      return extractParamsFromWeigthMap4(classifierMap);
    };
    AgeGenderNet2.prototype.extractParams = function(weights) {
      var classifierWeightSize = 512 * 1 + 1 + (512 * 2 + 2);
      var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
      var classifierWeights = weights.slice(weights.length - classifierWeightSize);
      this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
      return this.extractClassifierParams(classifierWeights);
    };
    return AgeGenderNet2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68NetBase.js
var FaceLandmark68NetBase = (
  /** @class */
  function(_super) {
    __extends(FaceLandmark68NetBase2, _super);
    function FaceLandmark68NetBase2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmark68NetBase2.prototype.postProcess = function(output, inputSize, originalDimensions) {
      var inputDimensions = originalDimensions.map(function(_a2) {
        var width = _a2.width, height = _a2.height;
        var scale2 = inputSize / Math.max(height, width);
        return {
          width: width * scale2,
          height: height * scale2
        };
      });
      var batchSize = inputDimensions.length;
      return Ze(function() {
        var createInterleavedTensor = function(fillX, fillY) {
          return Pr([
            Hn([68], fillX),
            Hn([68], fillY)
          ], 1).as2D(1, 136).as1D();
        };
        var getPadding = function(batchIdx, cond) {
          var _a2 = inputDimensions[batchIdx], width = _a2.width, height = _a2.height;
          return cond(width, height) ? Math.abs(width - height) / 2 : 0;
        };
        var getPaddingX = function(batchIdx) {
          return getPadding(batchIdx, function(w2, h2) {
            return w2 < h2;
          });
        };
        var getPaddingY = function(batchIdx) {
          return getPadding(batchIdx, function(w2, h2) {
            return h2 < w2;
          });
        };
        var landmarkTensors = output.mul(Hn([batchSize, 136], inputSize)).sub(Pr(Array.from(Array(batchSize), function(_2, batchIdx) {
          return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
        }))).div(Pr(Array.from(Array(batchSize), function(_2, batchIdx) {
          return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
        })));
        return landmarkTensors;
      });
    };
    FaceLandmark68NetBase2.prototype.forwardInput = function(input) {
      var _this = this;
      return Ze(function() {
        var out = _this.runNet(input);
        return _this.postProcess(out, input.inputSize, input.inputDimensions.map(function(_a2) {
          var height = _a2[0], width = _a2[1];
          return { height, width };
        }));
      });
    };
    FaceLandmark68NetBase2.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    FaceLandmark68NetBase2.prototype.detectLandmarks = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var netInput, landmarkTensors, landmarksForBatch;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, toNetInput(input)];
            case 1:
              netInput = _a2.sent();
              landmarkTensors = Ze(function() {
                return Ur(_this.forwardInput(netInput));
              });
              return [4, Promise.all(landmarkTensors.map(function(landmarkTensor, batchIdx) {
                return __awaiter(_this, void 0, void 0, function() {
                  var landmarksArray, _a3, _b, xCoords, yCoords;
                  return __generator(this, function(_c2) {
                    switch (_c2.label) {
                      case 0:
                        _b = (_a3 = Array).from;
                        return [4, landmarkTensor.data()];
                      case 1:
                        landmarksArray = _b.apply(_a3, [_c2.sent()]);
                        xCoords = landmarksArray.filter(function(_2, i2) {
                          return isEven(i2);
                        });
                        yCoords = landmarksArray.filter(function(_2, i2) {
                          return !isEven(i2);
                        });
                        return [2, new FaceLandmarks68(Array(68).fill(0).map(function(_2, i2) {
                          return new Point(xCoords[i2], yCoords[i2]);
                        }), {
                          height: netInput.getInputHeight(batchIdx),
                          width: netInput.getInputWidth(batchIdx)
                        })];
                    }
                  });
                });
              }))];
            case 2:
              landmarksForBatch = _a2.sent();
              landmarkTensors.forEach(function(t2) {
                return t2.dispose();
              });
              return [2, netInput.isBatchInput ? landmarksForBatch : landmarksForBatch[0]];
          }
        });
      });
    };
    FaceLandmark68NetBase2.prototype.getClassifierChannelsOut = function() {
      return 136;
    };
    return FaceLandmark68NetBase2;
  }(FaceProcessor)
);

// node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68Net.js
var FaceLandmark68Net = (
  /** @class */
  function(_super) {
    __extends(FaceLandmark68Net2, _super);
    function FaceLandmark68Net2(faceFeatureExtractor) {
      if (faceFeatureExtractor === void 0) {
        faceFeatureExtractor = new FaceFeatureExtractor();
      }
      return _super.call(this, "FaceLandmark68Net", faceFeatureExtractor) || this;
    }
    FaceLandmark68Net2.prototype.getDefaultModelName = function() {
      return "face_landmark_68_model";
    };
    FaceLandmark68Net2.prototype.getClassifierChannelsIn = function() {
      return 256;
    };
    return FaceLandmark68Net2;
  }(FaceLandmark68NetBase)
);

// node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMapTiny.js
function extractParamsFromWeigthMapTiny(weightMap) {
  var paramMappings = [];
  var extractDenseBlock3Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock3Params;
  var params = {
    dense0: extractDenseBlock3Params("dense0", true),
    dense1: extractDenseBlock3Params("dense1"),
    dense2: extractDenseBlock3Params("dense2")
  };
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsTiny.js
function extractParamsTiny(weights) {
  var paramMappings = [];
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var extractDenseBlock3Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock3Params;
  var dense0 = extractDenseBlock3Params(3, 32, "dense0", true);
  var dense1 = extractDenseBlock3Params(32, 64, "dense1");
  var dense2 = extractDenseBlock3Params(64, 128, "dense2");
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return {
    paramMappings,
    params: { dense0, dense1, dense2 }
  };
}

// node_modules/face-api.js/build/es6/faceFeatureExtractor/TinyFaceFeatureExtractor.js
var TinyFaceFeatureExtractor = (
  /** @class */
  function(_super) {
    __extends(TinyFaceFeatureExtractor2, _super);
    function TinyFaceFeatureExtractor2() {
      return _super.call(this, "TinyFaceFeatureExtractor") || this;
    }
    TinyFaceFeatureExtractor2.prototype.forwardInput = function(input) {
      var params = this.params;
      if (!params) {
        throw new Error("TinyFaceFeatureExtractor - load model before inference");
      }
      return Ze(function() {
        var batchTensor = input.toBatchTensor(112, true);
        var meanRgb = [122.782, 117.001, 104.298];
        var normalized = normalize(batchTensor, meanRgb).div(On(255));
        var out = denseBlock3(normalized, params.dense0, true);
        out = denseBlock3(out, params.dense1);
        out = denseBlock3(out, params.dense2);
        out = fl(out, [14, 14], [2, 2], "valid");
        return out;
      });
    };
    TinyFaceFeatureExtractor2.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    TinyFaceFeatureExtractor2.prototype.getDefaultModelName = function() {
      return "face_feature_extractor_tiny_model";
    };
    TinyFaceFeatureExtractor2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return extractParamsFromWeigthMapTiny(weightMap);
    };
    TinyFaceFeatureExtractor2.prototype.extractParams = function(weights) {
      return extractParamsTiny(weights);
    };
    return TinyFaceFeatureExtractor2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68TinyNet.js
var FaceLandmark68TinyNet = (
  /** @class */
  function(_super) {
    __extends(FaceLandmark68TinyNet2, _super);
    function FaceLandmark68TinyNet2(faceFeatureExtractor) {
      if (faceFeatureExtractor === void 0) {
        faceFeatureExtractor = new TinyFaceFeatureExtractor();
      }
      return _super.call(this, "FaceLandmark68TinyNet", faceFeatureExtractor) || this;
    }
    FaceLandmark68TinyNet2.prototype.getDefaultModelName = function() {
      return "face_landmark_68_tiny_model";
    };
    FaceLandmark68TinyNet2.prototype.getClassifierChannelsIn = function() {
      return 128;
    };
    return FaceLandmark68TinyNet2;
  }(FaceLandmark68NetBase)
);

// node_modules/face-api.js/build/es6/faceLandmarkNet/index.js
var FaceLandmarkNet = (
  /** @class */
  function(_super) {
    __extends(FaceLandmarkNet2, _super);
    function FaceLandmarkNet2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceLandmarkNet2;
  }(FaceLandmark68Net)
);

// node_modules/face-api.js/build/es6/faceRecognitionNet/scaleLayer.js
function scale(x2, params) {
  return rc(gc(x2, params.weights), params.biases);
}

// node_modules/face-api.js/build/es6/faceRecognitionNet/convLayer.js
function convLayer2(x2, params, strides, withRelu, padding) {
  if (padding === void 0) {
    padding = "same";
  }
  var _a2 = params.conv, filters = _a2.filters, bias = _a2.bias;
  var out = qc(x2, filters, strides, padding);
  out = rc(out, bias);
  out = scale(out, params.scale);
  return withRelu ? Bl(out) : out;
}
function conv2(x2, params) {
  return convLayer2(x2, params, [1, 1], true);
}
function convNoRelu(x2, params) {
  return convLayer2(x2, params, [1, 1], false);
}
function convDown(x2, params) {
  return convLayer2(x2, params, [2, 2], true, "valid");
}

// node_modules/face-api.js/build/es6/faceRecognitionNet/extractParams.js
function extractorsFactory3(extractWeights, paramMappings) {
  function extractFilterValues(numFilterValues, numFilters, filterSize) {
    var weights = extractWeights(numFilterValues);
    var depth = weights.length / (numFilters * filterSize * filterSize);
    if (isFloat(depth)) {
      throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
    }
    return Ze(function() {
      return Wl(Ln(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]);
    });
  }
  function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
    var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
    var bias = Mn(extractWeights(numFilters));
    paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
    return { filters, bias };
  }
  function extractScaleLayerParams(numWeights, mappedPrefix) {
    var weights = Mn(extractWeights(numWeights));
    var biases = Mn(extractWeights(numWeights));
    paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/biases" });
    return {
      weights,
      biases
    };
  }
  function extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
    var conv3 = extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv");
    var scale2 = extractScaleLayerParams(numFilters, mappedPrefix + "/scale");
    return { conv: conv3, scale: scale2 };
  }
  function extractResidualLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix, isDown) {
    if (isDown === void 0) {
      isDown = false;
    }
    var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize, mappedPrefix + "/conv1");
    var conv22 = extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv2");
    return { conv1, conv2: conv22 };
  }
  return {
    extractConvLayerParams,
    extractResidualLayerParams
  };
}
function extractParams5(weights) {
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var paramMappings = [];
  var _b = extractorsFactory3(extractWeights, paramMappings), extractConvLayerParams = _b.extractConvLayerParams, extractResidualLayerParams = _b.extractResidualLayerParams;
  var conv32_down = extractConvLayerParams(4704, 32, 7, "conv32_down");
  var conv32_1 = extractResidualLayerParams(9216, 32, 3, "conv32_1");
  var conv32_2 = extractResidualLayerParams(9216, 32, 3, "conv32_2");
  var conv32_3 = extractResidualLayerParams(9216, 32, 3, "conv32_3");
  var conv64_down = extractResidualLayerParams(36864, 64, 3, "conv64_down", true);
  var conv64_1 = extractResidualLayerParams(36864, 64, 3, "conv64_1");
  var conv64_2 = extractResidualLayerParams(36864, 64, 3, "conv64_2");
  var conv64_3 = extractResidualLayerParams(36864, 64, 3, "conv64_3");
  var conv128_down = extractResidualLayerParams(147456, 128, 3, "conv128_down", true);
  var conv128_1 = extractResidualLayerParams(147456, 128, 3, "conv128_1");
  var conv128_2 = extractResidualLayerParams(147456, 128, 3, "conv128_2");
  var conv256_down = extractResidualLayerParams(589824, 256, 3, "conv256_down", true);
  var conv256_1 = extractResidualLayerParams(589824, 256, 3, "conv256_1");
  var conv256_2 = extractResidualLayerParams(589824, 256, 3, "conv256_2");
  var conv256_down_out = extractResidualLayerParams(589824, 256, 3, "conv256_down_out");
  var fc2 = Ze(function() {
    return Wl(Bn(extractWeights(256 * 128), [128, 256]), [1, 0]);
  });
  paramMappings.push({ paramPath: "fc" });
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  var params = {
    conv32_down,
    conv32_1,
    conv32_2,
    conv32_3,
    conv64_down,
    conv64_1,
    conv64_2,
    conv64_3,
    conv128_down,
    conv128_1,
    conv128_2,
    conv256_down,
    conv256_1,
    conv256_2,
    conv256_down_out,
    fc: fc2
  };
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/faceRecognitionNet/extractParamsFromWeigthMap.js
function extractorsFactory4(weightMap, paramMappings) {
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  function extractScaleLayerParams(prefix) {
    var weights = extractWeightEntry(prefix + "/scale/weights", 1);
    var biases = extractWeightEntry(prefix + "/scale/biases", 1);
    return { weights, biases };
  }
  function extractConvLayerParams(prefix) {
    var filters = extractWeightEntry(prefix + "/conv/filters", 4);
    var bias = extractWeightEntry(prefix + "/conv/bias", 1);
    var scale2 = extractScaleLayerParams(prefix);
    return { conv: { filters, bias }, scale: scale2 };
  }
  function extractResidualLayerParams(prefix) {
    return {
      conv1: extractConvLayerParams(prefix + "/conv1"),
      conv2: extractConvLayerParams(prefix + "/conv2")
    };
  }
  return {
    extractConvLayerParams,
    extractResidualLayerParams
  };
}
function extractParamsFromWeigthMap5(weightMap) {
  var paramMappings = [];
  var _a2 = extractorsFactory4(weightMap, paramMappings), extractConvLayerParams = _a2.extractConvLayerParams, extractResidualLayerParams = _a2.extractResidualLayerParams;
  var conv32_down = extractConvLayerParams("conv32_down");
  var conv32_1 = extractResidualLayerParams("conv32_1");
  var conv32_2 = extractResidualLayerParams("conv32_2");
  var conv32_3 = extractResidualLayerParams("conv32_3");
  var conv64_down = extractResidualLayerParams("conv64_down");
  var conv64_1 = extractResidualLayerParams("conv64_1");
  var conv64_2 = extractResidualLayerParams("conv64_2");
  var conv64_3 = extractResidualLayerParams("conv64_3");
  var conv128_down = extractResidualLayerParams("conv128_down");
  var conv128_1 = extractResidualLayerParams("conv128_1");
  var conv128_2 = extractResidualLayerParams("conv128_2");
  var conv256_down = extractResidualLayerParams("conv256_down");
  var conv256_1 = extractResidualLayerParams("conv256_1");
  var conv256_2 = extractResidualLayerParams("conv256_2");
  var conv256_down_out = extractResidualLayerParams("conv256_down_out");
  var fc2 = weightMap["fc"];
  paramMappings.push({ originalPath: "fc", paramPath: "fc" });
  if (!isTensor2D(fc2)) {
    throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc2);
  }
  var params = {
    conv32_down,
    conv32_1,
    conv32_2,
    conv32_3,
    conv64_down,
    conv64_1,
    conv64_2,
    conv64_3,
    conv128_down,
    conv128_1,
    conv128_2,
    conv256_down,
    conv256_1,
    conv256_2,
    conv256_down_out,
    fc: fc2
  };
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/faceRecognitionNet/residualLayer.js
function residual(x2, params) {
  var out = conv2(x2, params.conv1);
  out = convNoRelu(out, params.conv2);
  out = rc(out, x2);
  out = Bl(out);
  return out;
}
function residualDown(x2, params) {
  var out = convDown(x2, params.conv1);
  out = convNoRelu(out, params.conv2);
  var pooled = fl(x2, 2, 2, "valid");
  var zeros = Gn(pooled.shape);
  var isPad = pooled.shape[3] !== out.shape[3];
  var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
  if (isAdjustShape) {
    var padShapeX = __spreadArrays(out.shape);
    padShapeX[1] = 1;
    var zerosW = Gn(padShapeX);
    out = Yn([out, zerosW], 1);
    var padShapeY = __spreadArrays(out.shape);
    padShapeY[2] = 1;
    var zerosH = Gn(padShapeY);
    out = Yn([out, zerosH], 2);
  }
  pooled = isPad ? Yn([pooled, zeros], 3) : pooled;
  out = rc(pooled, out);
  out = Bl(out);
  return out;
}

// node_modules/face-api.js/build/es6/faceRecognitionNet/FaceRecognitionNet.js
var FaceRecognitionNet = (
  /** @class */
  function(_super) {
    __extends(FaceRecognitionNet2, _super);
    function FaceRecognitionNet2() {
      return _super.call(this, "FaceRecognitionNet") || this;
    }
    FaceRecognitionNet2.prototype.forwardInput = function(input) {
      var params = this.params;
      if (!params) {
        throw new Error("FaceRecognitionNet - load model before inference");
      }
      return Ze(function() {
        var batchTensor = input.toBatchTensor(150, true).toFloat();
        var meanRgb = [122.782, 117.001, 104.298];
        var normalized = normalize(batchTensor, meanRgb).div(On(256));
        var out = convDown(normalized, params.conv32_down);
        out = hl(out, 3, 2, "valid");
        out = residual(out, params.conv32_1);
        out = residual(out, params.conv32_2);
        out = residual(out, params.conv32_3);
        out = residualDown(out, params.conv64_down);
        out = residual(out, params.conv64_1);
        out = residual(out, params.conv64_2);
        out = residual(out, params.conv64_3);
        out = residualDown(out, params.conv128_down);
        out = residual(out, params.conv128_1);
        out = residual(out, params.conv128_2);
        out = residualDown(out, params.conv256_down);
        out = residual(out, params.conv256_1);
        out = residual(out, params.conv256_2);
        out = residualDown(out, params.conv256_down_out);
        var globalAvg = out.mean([1, 2]);
        var fullyConnected = el(globalAvg, params.fc);
        return fullyConnected;
      });
    };
    FaceRecognitionNet2.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    FaceRecognitionNet2.prototype.computeFaceDescriptor = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, toNetInput(input)];
            case 1:
              netInput = _a2.sent();
              faceDescriptorTensors = Ze(function() {
                return Ur(_this.forwardInput(netInput));
              });
              return [4, Promise.all(faceDescriptorTensors.map(function(t2) {
                return t2.data();
              }))];
            case 2:
              faceDescriptorsForBatch = _a2.sent();
              faceDescriptorTensors.forEach(function(t2) {
                return t2.dispose();
              });
              return [2, netInput.isBatchInput ? faceDescriptorsForBatch : faceDescriptorsForBatch[0]];
          }
        });
      });
    };
    FaceRecognitionNet2.prototype.getDefaultModelName = function() {
      return "face_recognition_model";
    };
    FaceRecognitionNet2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return extractParamsFromWeigthMap5(weightMap);
    };
    FaceRecognitionNet2.prototype.extractParams = function(weights) {
      return extractParams5(weights);
    };
    return FaceRecognitionNet2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/faceRecognitionNet/index.js
function createFaceRecognitionNet(weights) {
  var net = new FaceRecognitionNet();
  net.extractWeights(weights);
  return net;
}

// node_modules/face-api.js/build/es6/factories/WithFaceDescriptor.js
function extendWithFaceDescriptor(sourceObj, descriptor) {
  var extension = { descriptor };
  return Object.assign({}, sourceObj, extension);
}

// node_modules/face-api.js/build/es6/factories/WithAge.js
function isWithAge(obj) {
  return typeof obj["age"] === "number";
}
function extendWithAge(sourceObj, age) {
  var extension = { age };
  return Object.assign({}, sourceObj, extension);
}

// node_modules/face-api.js/build/es6/factories/WithGender.js
function isWithGender(obj) {
  return (obj["gender"] === Gender.MALE || obj["gender"] === Gender.FEMALE) && isValidProbablitiy(obj["genderProbability"]);
}
function extendWithGender(sourceObj, gender, genderProbability) {
  var extension = { gender, genderProbability };
  return Object.assign({}, sourceObj, extension);
}

// node_modules/face-api.js/build/es6/mtcnn/MtcnnOptions.js
var MtcnnOptions = (
  /** @class */
  function() {
    function MtcnnOptions2(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
      this._name = "MtcnnOptions";
      this._minFaceSize = minFaceSize || 20;
      this._scaleFactor = scaleFactor || 0.709;
      this._maxNumScales = maxNumScales || 10;
      this._scoreThresholds = scoreThresholds || [0.6, 0.7, 0.7];
      this._scaleSteps = scaleSteps;
      if (typeof this._minFaceSize !== "number" || this._minFaceSize < 0) {
        throw new Error(this._name + " - expected minFaceSize to be a number > 0");
      }
      if (typeof this._scaleFactor !== "number" || this._scaleFactor <= 0 || this._scaleFactor >= 1) {
        throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
      }
      if (typeof this._maxNumScales !== "number" || this._maxNumScales < 0) {
        throw new Error(this._name + " - expected maxNumScales to be a number > 0");
      }
      if (!Array.isArray(this._scoreThresholds) || this._scoreThresholds.length !== 3 || this._scoreThresholds.some(function(th2) {
        return typeof th2 !== "number";
      })) {
        throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
      }
      if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function(th2) {
        return typeof th2 !== "number";
      }))) {
        throw new Error(this._name + " - expected scaleSteps to be an array of numbers");
      }
    }
    Object.defineProperty(MtcnnOptions2.prototype, "minFaceSize", {
      get: function() {
        return this._minFaceSize;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MtcnnOptions2.prototype, "scaleFactor", {
      get: function() {
        return this._scaleFactor;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MtcnnOptions2.prototype, "maxNumScales", {
      get: function() {
        return this._maxNumScales;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MtcnnOptions2.prototype, "scoreThresholds", {
      get: function() {
        return this._scoreThresholds;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MtcnnOptions2.prototype, "scaleSteps", {
      get: function() {
        return this._scaleSteps;
      },
      enumerable: true,
      configurable: true
    });
    return MtcnnOptions2;
  }()
);

// node_modules/face-api.js/build/es6/ssdMobilenetv1/extractParams.js
function extractorsFactory5(extractWeights, paramMappings) {
  function extractDepthwiseConvParams(numChannels, mappedPrefix) {
    var filters = Ln(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
    var batch_norm_scale = Mn(extractWeights(numChannels));
    var batch_norm_offset = Mn(extractWeights(numChannels));
    var batch_norm_mean = Mn(extractWeights(numChannels));
    var batch_norm_variance = Mn(extractWeights(numChannels));
    paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/batch_norm_scale" }, { paramPath: mappedPrefix + "/batch_norm_offset" }, { paramPath: mappedPrefix + "/batch_norm_mean" }, { paramPath: mappedPrefix + "/batch_norm_variance" });
    return {
      filters,
      batch_norm_scale,
      batch_norm_offset,
      batch_norm_mean,
      batch_norm_variance
    };
  }
  function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, isPointwiseConv) {
    var filters = Ln(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
    var bias = Mn(extractWeights(channelsOut));
    paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/" + (isPointwiseConv ? "batch_norm_offset" : "bias") });
    return { filters, bias };
  }
  function extractPointwiseConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
    var _a2 = extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, true), filters = _a2.filters, bias = _a2.bias;
    return {
      filters,
      batch_norm_offset: bias
    };
  }
  function extractConvPairParams(channelsIn, channelsOut, mappedPrefix) {
    var depthwise_conv = extractDepthwiseConvParams(channelsIn, mappedPrefix + "/depthwise_conv");
    var pointwise_conv = extractPointwiseConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/pointwise_conv");
    return { depthwise_conv, pointwise_conv };
  }
  function extractMobilenetV1Params() {
    var conv_0 = extractPointwiseConvParams(3, 32, 3, "mobilenetv1/conv_0");
    var conv_1 = extractConvPairParams(32, 64, "mobilenetv1/conv_1");
    var conv_2 = extractConvPairParams(64, 128, "mobilenetv1/conv_2");
    var conv_3 = extractConvPairParams(128, 128, "mobilenetv1/conv_3");
    var conv_4 = extractConvPairParams(128, 256, "mobilenetv1/conv_4");
    var conv_5 = extractConvPairParams(256, 256, "mobilenetv1/conv_5");
    var conv_6 = extractConvPairParams(256, 512, "mobilenetv1/conv_6");
    var conv_7 = extractConvPairParams(512, 512, "mobilenetv1/conv_7");
    var conv_8 = extractConvPairParams(512, 512, "mobilenetv1/conv_8");
    var conv_9 = extractConvPairParams(512, 512, "mobilenetv1/conv_9");
    var conv_10 = extractConvPairParams(512, 512, "mobilenetv1/conv_10");
    var conv_11 = extractConvPairParams(512, 512, "mobilenetv1/conv_11");
    var conv_12 = extractConvPairParams(512, 1024, "mobilenetv1/conv_12");
    var conv_13 = extractConvPairParams(1024, 1024, "mobilenetv1/conv_13");
    return {
      conv_0,
      conv_1,
      conv_2,
      conv_3,
      conv_4,
      conv_5,
      conv_6,
      conv_7,
      conv_8,
      conv_9,
      conv_10,
      conv_11,
      conv_12,
      conv_13
    };
  }
  function extractPredictionLayerParams() {
    var conv_0 = extractPointwiseConvParams(1024, 256, 1, "prediction_layer/conv_0");
    var conv_1 = extractPointwiseConvParams(256, 512, 3, "prediction_layer/conv_1");
    var conv_2 = extractPointwiseConvParams(512, 128, 1, "prediction_layer/conv_2");
    var conv_3 = extractPointwiseConvParams(128, 256, 3, "prediction_layer/conv_3");
    var conv_4 = extractPointwiseConvParams(256, 128, 1, "prediction_layer/conv_4");
    var conv_5 = extractPointwiseConvParams(128, 256, 3, "prediction_layer/conv_5");
    var conv_6 = extractPointwiseConvParams(256, 64, 1, "prediction_layer/conv_6");
    var conv_7 = extractPointwiseConvParams(64, 128, 3, "prediction_layer/conv_7");
    var box_encoding_0_predictor = extractConvParams(512, 12, 1, "prediction_layer/box_predictor_0/box_encoding_predictor");
    var class_predictor_0 = extractConvParams(512, 9, 1, "prediction_layer/box_predictor_0/class_predictor");
    var box_encoding_1_predictor = extractConvParams(1024, 24, 1, "prediction_layer/box_predictor_1/box_encoding_predictor");
    var class_predictor_1 = extractConvParams(1024, 18, 1, "prediction_layer/box_predictor_1/class_predictor");
    var box_encoding_2_predictor = extractConvParams(512, 24, 1, "prediction_layer/box_predictor_2/box_encoding_predictor");
    var class_predictor_2 = extractConvParams(512, 18, 1, "prediction_layer/box_predictor_2/class_predictor");
    var box_encoding_3_predictor = extractConvParams(256, 24, 1, "prediction_layer/box_predictor_3/box_encoding_predictor");
    var class_predictor_3 = extractConvParams(256, 18, 1, "prediction_layer/box_predictor_3/class_predictor");
    var box_encoding_4_predictor = extractConvParams(256, 24, 1, "prediction_layer/box_predictor_4/box_encoding_predictor");
    var class_predictor_4 = extractConvParams(256, 18, 1, "prediction_layer/box_predictor_4/class_predictor");
    var box_encoding_5_predictor = extractConvParams(128, 24, 1, "prediction_layer/box_predictor_5/box_encoding_predictor");
    var class_predictor_5 = extractConvParams(128, 18, 1, "prediction_layer/box_predictor_5/class_predictor");
    var box_predictor_0 = {
      box_encoding_predictor: box_encoding_0_predictor,
      class_predictor: class_predictor_0
    };
    var box_predictor_1 = {
      box_encoding_predictor: box_encoding_1_predictor,
      class_predictor: class_predictor_1
    };
    var box_predictor_2 = {
      box_encoding_predictor: box_encoding_2_predictor,
      class_predictor: class_predictor_2
    };
    var box_predictor_3 = {
      box_encoding_predictor: box_encoding_3_predictor,
      class_predictor: class_predictor_3
    };
    var box_predictor_4 = {
      box_encoding_predictor: box_encoding_4_predictor,
      class_predictor: class_predictor_4
    };
    var box_predictor_5 = {
      box_encoding_predictor: box_encoding_5_predictor,
      class_predictor: class_predictor_5
    };
    return {
      conv_0,
      conv_1,
      conv_2,
      conv_3,
      conv_4,
      conv_5,
      conv_6,
      conv_7,
      box_predictor_0,
      box_predictor_1,
      box_predictor_2,
      box_predictor_3,
      box_predictor_4,
      box_predictor_5
    };
  }
  return {
    extractMobilenetV1Params,
    extractPredictionLayerParams
  };
}
function extractParams6(weights) {
  var paramMappings = [];
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var _b = extractorsFactory5(extractWeights, paramMappings), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
  var mobilenetv1 = extractMobilenetV1Params();
  var prediction_layer = extractPredictionLayerParams();
  var extra_dim = Pn(extractWeights(5118 * 4), [1, 5118, 4]);
  var output_layer = {
    extra_dim
  };
  paramMappings.push({ paramPath: "output_layer/extra_dim" });
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return {
    params: {
      mobilenetv1,
      prediction_layer,
      output_layer
    },
    paramMappings
  };
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/extractParamsFromWeigthMap.js
function extractorsFactory6(weightMap, paramMappings) {
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  function extractPointwiseConvParams(prefix, idx, mappedPrefix) {
    var filters = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/weights", 4, mappedPrefix + "/filters");
    var batch_norm_offset = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/convolution_bn_offset", 1, mappedPrefix + "/batch_norm_offset");
    return { filters, batch_norm_offset };
  }
  function extractConvPairParams(idx) {
    var mappedPrefix = "mobilenetv1/conv_" + idx;
    var prefixDepthwiseConv = "MobilenetV1/Conv2d_" + idx + "_depthwise";
    var mappedPrefixDepthwiseConv = mappedPrefix + "/depthwise_conv";
    var mappedPrefixPointwiseConv = mappedPrefix + "/pointwise_conv";
    var filters = extractWeightEntry(prefixDepthwiseConv + "/depthwise_weights", 4, mappedPrefixDepthwiseConv + "/filters");
    var batch_norm_scale = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/gamma", 1, mappedPrefixDepthwiseConv + "/batch_norm_scale");
    var batch_norm_offset = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/beta", 1, mappedPrefixDepthwiseConv + "/batch_norm_offset");
    var batch_norm_mean = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_mean", 1, mappedPrefixDepthwiseConv + "/batch_norm_mean");
    var batch_norm_variance = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_variance", 1, mappedPrefixDepthwiseConv + "/batch_norm_variance");
    return {
      depthwise_conv: {
        filters,
        batch_norm_scale,
        batch_norm_offset,
        batch_norm_mean,
        batch_norm_variance
      },
      pointwise_conv: extractPointwiseConvParams("MobilenetV1", idx, mappedPrefixPointwiseConv)
    };
  }
  function extractMobilenetV1Params() {
    return {
      conv_0: extractPointwiseConvParams("MobilenetV1", 0, "mobilenetv1/conv_0"),
      conv_1: extractConvPairParams(1),
      conv_2: extractConvPairParams(2),
      conv_3: extractConvPairParams(3),
      conv_4: extractConvPairParams(4),
      conv_5: extractConvPairParams(5),
      conv_6: extractConvPairParams(6),
      conv_7: extractConvPairParams(7),
      conv_8: extractConvPairParams(8),
      conv_9: extractConvPairParams(9),
      conv_10: extractConvPairParams(10),
      conv_11: extractConvPairParams(11),
      conv_12: extractConvPairParams(12),
      conv_13: extractConvPairParams(13)
    };
  }
  function extractConvParams(prefix, mappedPrefix) {
    var filters = extractWeightEntry(prefix + "/weights", 4, mappedPrefix + "/filters");
    var bias = extractWeightEntry(prefix + "/biases", 1, mappedPrefix + "/bias");
    return { filters, bias };
  }
  function extractBoxPredictorParams(idx) {
    var box_encoding_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + idx + "/box_encoding_predictor");
    var class_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/ClassPredictor", "prediction_layer/box_predictor_" + idx + "/class_predictor");
    return { box_encoding_predictor, class_predictor };
  }
  function extractPredictionLayerParams() {
    return {
      conv_0: extractPointwiseConvParams("Prediction", 0, "prediction_layer/conv_0"),
      conv_1: extractPointwiseConvParams("Prediction", 1, "prediction_layer/conv_1"),
      conv_2: extractPointwiseConvParams("Prediction", 2, "prediction_layer/conv_2"),
      conv_3: extractPointwiseConvParams("Prediction", 3, "prediction_layer/conv_3"),
      conv_4: extractPointwiseConvParams("Prediction", 4, "prediction_layer/conv_4"),
      conv_5: extractPointwiseConvParams("Prediction", 5, "prediction_layer/conv_5"),
      conv_6: extractPointwiseConvParams("Prediction", 6, "prediction_layer/conv_6"),
      conv_7: extractPointwiseConvParams("Prediction", 7, "prediction_layer/conv_7"),
      box_predictor_0: extractBoxPredictorParams(0),
      box_predictor_1: extractBoxPredictorParams(1),
      box_predictor_2: extractBoxPredictorParams(2),
      box_predictor_3: extractBoxPredictorParams(3),
      box_predictor_4: extractBoxPredictorParams(4),
      box_predictor_5: extractBoxPredictorParams(5)
    };
  }
  return {
    extractMobilenetV1Params,
    extractPredictionLayerParams
  };
}
function extractParamsFromWeigthMap6(weightMap) {
  var paramMappings = [];
  var _a2 = extractorsFactory6(weightMap, paramMappings), extractMobilenetV1Params = _a2.extractMobilenetV1Params, extractPredictionLayerParams = _a2.extractPredictionLayerParams;
  var extra_dim = weightMap["Output/extra_dim"];
  paramMappings.push({ originalPath: "Output/extra_dim", paramPath: "output_layer/extra_dim" });
  if (!isTensor3D(extra_dim)) {
    throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + extra_dim);
  }
  var params = {
    mobilenetv1: extractMobilenetV1Params(),
    prediction_layer: extractPredictionLayerParams(),
    output_layer: {
      extra_dim
    }
  };
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/pointwiseConvLayer.js
function pointwiseConvLayer(x2, params, strides) {
  return Ze(function() {
    var out = qc(x2, params.filters, strides, "same");
    out = rc(out, params.batch_norm_offset);
    return hu(out, 0, 6);
  });
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/mobileNetV1.js
var epsilon = 0.0010000000474974513;
function depthwiseConvLayer(x2, params, strides) {
  return Ze(function() {
    var out = Yc(x2, params.filters, strides, "same");
    out = ju(out, params.batch_norm_mean, params.batch_norm_variance, params.batch_norm_offset, params.batch_norm_scale, epsilon);
    return hu(out, 0, 6);
  });
}
function getStridesForLayerIdx(layerIdx) {
  return [2, 4, 6, 12].some(function(idx) {
    return idx === layerIdx;
  }) ? [2, 2] : [1, 1];
}
function mobileNetV1(x2, params) {
  return Ze(function() {
    var conv11 = null;
    var out = pointwiseConvLayer(x2, params.conv_0, [2, 2]);
    var convPairParams = [
      params.conv_1,
      params.conv_2,
      params.conv_3,
      params.conv_4,
      params.conv_5,
      params.conv_6,
      params.conv_7,
      params.conv_8,
      params.conv_9,
      params.conv_10,
      params.conv_11,
      params.conv_12,
      params.conv_13
    ];
    convPairParams.forEach(function(param, i2) {
      var layerIdx = i2 + 1;
      var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
      out = depthwiseConvLayer(out, param.depthwise_conv, depthwiseConvStrides);
      out = pointwiseConvLayer(out, param.pointwise_conv, [1, 1]);
      if (layerIdx === 11) {
        conv11 = out;
      }
    });
    if (conv11 === null) {
      throw new Error("mobileNetV1 - output of conv layer 11 is null");
    }
    return {
      out,
      conv11
    };
  });
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/nonMaxSuppression.js
function nonMaxSuppression2(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
  var numBoxes = boxes.shape[0];
  var outputSize = Math.min(maxOutputSize, numBoxes);
  var candidates = scores.map(function(score, boxIndex) {
    return { score, boxIndex };
  }).filter(function(c2) {
    return c2.score > scoreThreshold;
  }).sort(function(c1, c2) {
    return c2.score - c1.score;
  });
  var suppressFunc = function(x2) {
    return x2 <= iouThreshold ? 1 : 0;
  };
  var selected = [];
  candidates.forEach(function(c2) {
    if (selected.length >= outputSize) {
      return;
    }
    var originalScore = c2.score;
    for (var j2 = selected.length - 1; j2 >= 0; --j2) {
      var iou2 = IOU(boxes, c2.boxIndex, selected[j2]);
      if (iou2 === 0) {
        continue;
      }
      c2.score *= suppressFunc(iou2);
      if (c2.score <= scoreThreshold) {
        break;
      }
    }
    if (originalScore === c2.score) {
      selected.push(c2.boxIndex);
    }
  });
  return selected;
}
function IOU(boxes, i2, j2) {
  var boxesData = boxes.arraySync();
  var yminI = Math.min(boxesData[i2][0], boxesData[i2][2]);
  var xminI = Math.min(boxesData[i2][1], boxesData[i2][3]);
  var ymaxI = Math.max(boxesData[i2][0], boxesData[i2][2]);
  var xmaxI = Math.max(boxesData[i2][1], boxesData[i2][3]);
  var yminJ = Math.min(boxesData[j2][0], boxesData[j2][2]);
  var xminJ = Math.min(boxesData[j2][1], boxesData[j2][3]);
  var ymaxJ = Math.max(boxesData[j2][0], boxesData[j2][2]);
  var xmaxJ = Math.max(boxesData[j2][1], boxesData[j2][3]);
  var areaI = (ymaxI - yminI) * (xmaxI - xminI);
  var areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
  if (areaI <= 0 || areaJ <= 0) {
    return 0;
  }
  var intersectionYmin = Math.max(yminI, yminJ);
  var intersectionXmin = Math.max(xminI, xminJ);
  var intersectionYmax = Math.min(ymaxI, ymaxJ);
  var intersectionXmax = Math.min(xmaxI, xmaxJ);
  var intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0) * Math.max(intersectionXmax - intersectionXmin, 0);
  return intersectionArea / (areaI + areaJ - intersectionArea);
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/outputLayer.js
function getCenterCoordinatesAndSizesLayer(x2) {
  var vec = Ur(Wl(x2, [1, 0]));
  var sizes = [
    Cc(vec[2], vec[0]),
    Cc(vec[3], vec[1])
  ];
  var centers = [
    rc(vec[0], sc(sizes[0], On(2))),
    rc(vec[1], sc(sizes[1], On(2)))
  ];
  return {
    sizes,
    centers
  };
}
function decodeBoxesLayer(x0, x1) {
  var _a2 = getCenterCoordinatesAndSizesLayer(x0), sizes = _a2.sizes, centers = _a2.centers;
  var vec = Ur(Wl(x1, [1, 0]));
  var div0_out = sc(gc(vu(sc(vec[2], On(5))), sizes[0]), On(2));
  var add0_out = rc(gc(sc(vec[0], On(10)), sizes[0]), centers[0]);
  var div1_out = sc(gc(vu(sc(vec[3], On(5))), sizes[1]), On(2));
  var add1_out = rc(gc(sc(vec[1], On(10)), sizes[1]), centers[1]);
  return Wl(Pr([
    Cc(add0_out, div0_out),
    Cc(add1_out, div1_out),
    rc(add0_out, div0_out),
    rc(add1_out, div1_out)
  ]), [1, 0]);
}
function outputLayer(boxPredictions, classPredictions, params) {
  return Ze(function() {
    var batchSize = boxPredictions.shape[0];
    var boxes = decodeBoxesLayer(Or(Lr(params.extra_dim, [batchSize, 1, 1]), [-1, 4]), Or(boxPredictions, [-1, 4]));
    boxes = Or(boxes, [batchSize, boxes.shape[0] / batchSize, 4]);
    var scoresAndClasses = Iu(ml(classPredictions, [0, 0, 1], [-1, -1, -1]));
    var scores = ml(scoresAndClasses, [0, 0, 0], [-1, -1, 1]);
    scores = Or(scores, [batchSize, scores.shape[1]]);
    var boxesByBatch = Ur(boxes);
    var scoresByBatch = Ur(scores);
    return {
      boxes: boxesByBatch,
      scores: scoresByBatch
    };
  });
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/boxPredictionLayer.js
function boxPredictionLayer(x2, params) {
  return Ze(function() {
    var batchSize = x2.shape[0];
    var boxPredictionEncoding = Or(convLayer(x2, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
    var classPrediction = Or(convLayer(x2, params.class_predictor), [batchSize, -1, 3]);
    return {
      boxPredictionEncoding,
      classPrediction
    };
  });
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/predictionLayer.js
function predictionLayer(x2, conv11, params) {
  return Ze(function() {
    var conv0 = pointwiseConvLayer(x2, params.conv_0, [1, 1]);
    var conv1 = pointwiseConvLayer(conv0, params.conv_1, [2, 2]);
    var conv22 = pointwiseConvLayer(conv1, params.conv_2, [1, 1]);
    var conv3 = pointwiseConvLayer(conv22, params.conv_3, [2, 2]);
    var conv4 = pointwiseConvLayer(conv3, params.conv_4, [1, 1]);
    var conv5 = pointwiseConvLayer(conv4, params.conv_5, [2, 2]);
    var conv6 = pointwiseConvLayer(conv5, params.conv_6, [1, 1]);
    var conv7 = pointwiseConvLayer(conv6, params.conv_7, [2, 2]);
    var boxPrediction0 = boxPredictionLayer(conv11, params.box_predictor_0);
    var boxPrediction1 = boxPredictionLayer(x2, params.box_predictor_1);
    var boxPrediction2 = boxPredictionLayer(conv1, params.box_predictor_2);
    var boxPrediction3 = boxPredictionLayer(conv3, params.box_predictor_3);
    var boxPrediction4 = boxPredictionLayer(conv5, params.box_predictor_4);
    var boxPrediction5 = boxPredictionLayer(conv7, params.box_predictor_5);
    var boxPredictions = Yn([
      boxPrediction0.boxPredictionEncoding,
      boxPrediction1.boxPredictionEncoding,
      boxPrediction2.boxPredictionEncoding,
      boxPrediction3.boxPredictionEncoding,
      boxPrediction4.boxPredictionEncoding,
      boxPrediction5.boxPredictionEncoding
    ], 1);
    var classPredictions = Yn([
      boxPrediction0.classPrediction,
      boxPrediction1.classPrediction,
      boxPrediction2.classPrediction,
      boxPrediction3.classPrediction,
      boxPrediction4.classPrediction,
      boxPrediction5.classPrediction
    ], 1);
    return {
      boxPredictions,
      classPredictions
    };
  });
}

// node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js
var SsdMobilenetv1Options = (
  /** @class */
  function() {
    function SsdMobilenetv1Options2(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, minConfidence = _b.minConfidence, maxResults = _b.maxResults;
      this._name = "SsdMobilenetv1Options";
      this._minConfidence = minConfidence || 0.5;
      this._maxResults = maxResults || 100;
      if (typeof this._minConfidence !== "number" || this._minConfidence <= 0 || this._minConfidence >= 1) {
        throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
      }
      if (typeof this._maxResults !== "number") {
        throw new Error(this._name + " - expected maxResults to be a number");
      }
    }
    Object.defineProperty(SsdMobilenetv1Options2.prototype, "minConfidence", {
      get: function() {
        return this._minConfidence;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SsdMobilenetv1Options2.prototype, "maxResults", {
      get: function() {
        return this._maxResults;
      },
      enumerable: true,
      configurable: true
    });
    return SsdMobilenetv1Options2;
  }()
);

// node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1.js
var SsdMobilenetv1 = (
  /** @class */
  function(_super) {
    __extends(SsdMobilenetv12, _super);
    function SsdMobilenetv12() {
      return _super.call(this, "SsdMobilenetv1") || this;
    }
    SsdMobilenetv12.prototype.forwardInput = function(input) {
      var params = this.params;
      if (!params) {
        throw new Error("SsdMobilenetv1 - load model before inference");
      }
      return Ze(function() {
        var batchTensor = input.toBatchTensor(512, false).toFloat();
        var x2 = Cc(gc(batchTensor, On(0.007843137718737125)), On(1));
        var features = mobileNetV1(x2, params.mobilenetv1);
        var _a2 = predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a2.boxPredictions, classPredictions = _a2.classPredictions;
        return outputLayer(boxPredictions, classPredictions, params.output_layer);
      });
    };
    SsdMobilenetv12.prototype.forward = function(input) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [_b.sent()])];
          }
        });
      });
    };
    SsdMobilenetv12.prototype.locateFaces = function(input, options) {
      if (options === void 0) {
        options = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i2, scoresData, _c2, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, boxesData, results;
        return __generator(this, function(_e2) {
          switch (_e2.label) {
            case 0:
              _a2 = new SsdMobilenetv1Options(options), maxResults = _a2.maxResults, minConfidence = _a2.minConfidence;
              return [4, toNetInput(input)];
            case 1:
              netInput = _e2.sent();
              _b = this.forwardInput(netInput), _boxes = _b.boxes, _scores = _b.scores;
              boxes = _boxes[0];
              scores = _scores[0];
              for (i2 = 1; i2 < _boxes.length; i2++) {
                _boxes[i2].dispose();
                _scores[i2].dispose();
              }
              _d = (_c2 = Array).from;
              return [4, scores.data()];
            case 2:
              scoresData = _d.apply(_c2, [_e2.sent()]);
              iouThreshold = 0.5;
              indices = nonMaxSuppression2(boxes, scoresData, maxResults, iouThreshold, minConfidence);
              reshapedDims = netInput.getReshapedInputDimensions(0);
              inputSize = netInput.inputSize;
              padX = inputSize / reshapedDims.width;
              padY = inputSize / reshapedDims.height;
              boxesData = boxes.arraySync();
              results = indices.map(function(idx) {
                var _a3 = [
                  Math.max(0, boxesData[idx][0]),
                  Math.min(1, boxesData[idx][2])
                ].map(function(val) {
                  return val * padY;
                }), top = _a3[0], bottom = _a3[1];
                var _b2 = [
                  Math.max(0, boxesData[idx][1]),
                  Math.min(1, boxesData[idx][3])
                ].map(function(val) {
                  return val * padX;
                }), left = _b2[0], right = _b2[1];
                return new FaceDetection(scoresData[idx], new Rect(left, top, right - left, bottom - top), {
                  height: netInput.getInputHeight(0),
                  width: netInput.getInputWidth(0)
                });
              });
              boxes.dispose();
              scores.dispose();
              return [2, results];
          }
        });
      });
    };
    SsdMobilenetv12.prototype.getDefaultModelName = function() {
      return "ssd_mobilenetv1_model";
    };
    SsdMobilenetv12.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return extractParamsFromWeigthMap6(weightMap);
    };
    SsdMobilenetv12.prototype.extractParams = function(weights) {
      return extractParams6(weights);
    };
    return SsdMobilenetv12;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/ssdMobilenetv1/index.js
function createSsdMobilenetv1(weights) {
  var net = new SsdMobilenetv1();
  net.extractWeights(weights);
  return net;
}
function createFaceDetectionNet(weights) {
  return createSsdMobilenetv1(weights);
}
var FaceDetectionNet = (
  /** @class */
  function(_super) {
    __extends(FaceDetectionNet2, _super);
    function FaceDetectionNet2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceDetectionNet2;
  }(SsdMobilenetv1)
);

// node_modules/face-api.js/build/es6/tinyYolov2/const.js
var IOU_THRESHOLD = 0.4;
var BOX_ANCHORS = [
  new Point(0.738768, 0.874946),
  new Point(2.42204, 2.65704),
  new Point(4.30971, 7.04493),
  new Point(10.246, 4.59428),
  new Point(12.6868, 11.8741)
];
var BOX_ANCHORS_SEPARABLE = [
  new Point(1.603231, 2.094468),
  new Point(6.041143, 7.080126),
  new Point(2.882459, 3.518061),
  new Point(4.266906, 5.178857),
  new Point(9.041765, 10.66308)
];
var MEAN_RGB_SEPARABLE = [117.001, 114.697, 97.404];
var DEFAULT_MODEL_NAME = "tiny_yolov2_model";
var DEFAULT_MODEL_NAME_SEPARABLE_CONV = "tiny_yolov2_separable_conv_model";

// node_modules/face-api.js/build/es6/tinyYolov2/config.js
var isNumber = function(arg) {
  return typeof arg === "number";
};
function validateConfig(config) {
  if (!config) {
    throw new Error("invalid config: " + config);
  }
  if (typeof config.withSeparableConvs !== "boolean") {
    throw new Error("config.withSeparableConvs has to be a boolean, have: " + config.withSeparableConvs);
  }
  if (!isNumber(config.iouThreshold) || config.iouThreshold < 0 || config.iouThreshold > 1) {
    throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + config.iouThreshold);
  }
  if (!Array.isArray(config.classes) || !config.classes.length || !config.classes.every(function(c2) {
    return typeof c2 === "string";
  })) {
    throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(config.classes));
  }
  if (!Array.isArray(config.anchors) || !config.anchors.length || !config.anchors.map(function(a2) {
    return a2 || {};
  }).every(function(a2) {
    return isNumber(a2.x) && isNumber(a2.y);
  })) {
    throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(config.anchors));
  }
  if (config.meanRgb && (!Array.isArray(config.meanRgb) || config.meanRgb.length !== 3 || !config.meanRgb.every(isNumber))) {
    throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(config.meanRgb));
  }
}

// node_modules/face-api.js/build/es6/tinyYolov2/leaky.js
function leaky(x2) {
  return Ze(function() {
    var min = gc(x2, On(0.10000000149011612));
    return rc(Bl(Cc(x2, min)), min);
  });
}

// node_modules/face-api.js/build/es6/tinyYolov2/convWithBatchNorm.js
function convWithBatchNorm(x2, params) {
  return Ze(function() {
    var out = Ir(x2, [[0, 0], [1, 1], [1, 1], [0, 0]]);
    out = qc(out, params.conv.filters, [1, 1], "valid");
    out = Cc(out, params.bn.sub);
    out = gc(out, params.bn.truediv);
    out = rc(out, params.conv.bias);
    return leaky(out);
  });
}

// node_modules/face-api.js/build/es6/tinyYolov2/depthwiseSeparableConv.js
function depthwiseSeparableConv2(x2, params) {
  return Ze(function() {
    var out = Ir(x2, [[0, 0], [1, 1], [1, 1], [0, 0]]);
    out = Jc(out, params.depthwise_filter, params.pointwise_filter, [1, 1], "valid");
    out = rc(out, params.bias);
    return leaky(out);
  });
}

// node_modules/face-api.js/build/es6/tinyYolov2/extractParams.js
function extractorsFactory7(extractWeights, paramMappings) {
  var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
  function extractBatchNormParams(size, mappedPrefix) {
    var sub = Mn(extractWeights(size));
    var truediv = Mn(extractWeights(size));
    paramMappings.push({ paramPath: mappedPrefix + "/sub" }, { paramPath: mappedPrefix + "/truediv" });
    return { sub, truediv };
  }
  function extractConvWithBatchNormParams(channelsIn, channelsOut, mappedPrefix) {
    var conv3 = extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv");
    var bn2 = extractBatchNormParams(channelsOut, mappedPrefix + "/bn");
    return { conv: conv3, bn: bn2 };
  }
  var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
  return {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  };
}
function extractParams7(weights, config, boxEncodingSize, filterSizes) {
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var paramMappings = [];
  var _b = extractorsFactory7(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractConvWithBatchNormParams = _b.extractConvWithBatchNormParams, extractSeparableConvParams = _b.extractSeparableConvParams;
  var params;
  if (config.withSeparableConvs) {
    var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
    var conv0 = config.isFirstLayerConv2d ? extractConvParams(s0, s1, 3, "conv0") : extractSeparableConvParams(s0, s1, "conv0");
    var conv1 = extractSeparableConvParams(s1, s2, "conv1");
    var conv22 = extractSeparableConvParams(s2, s3, "conv2");
    var conv3 = extractSeparableConvParams(s3, s4, "conv3");
    var conv4 = extractSeparableConvParams(s4, s5, "conv4");
    var conv5 = extractSeparableConvParams(s5, s6, "conv5");
    var conv6 = s7 ? extractSeparableConvParams(s6, s7, "conv6") : void 0;
    var conv7 = s8 ? extractSeparableConvParams(s7, s8, "conv7") : void 0;
    var conv8 = extractConvParams(s8 || s7 || s6, 5 * boxEncodingSize, 1, "conv8");
    params = { conv0, conv1, conv2: conv22, conv3, conv4, conv5, conv6, conv7, conv8 };
  } else {
    var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
    var conv0 = extractConvWithBatchNormParams(s0, s1, "conv0");
    var conv1 = extractConvWithBatchNormParams(s1, s2, "conv1");
    var conv22 = extractConvWithBatchNormParams(s2, s3, "conv2");
    var conv3 = extractConvWithBatchNormParams(s3, s4, "conv3");
    var conv4 = extractConvWithBatchNormParams(s4, s5, "conv4");
    var conv5 = extractConvWithBatchNormParams(s5, s6, "conv5");
    var conv6 = extractConvWithBatchNormParams(s6, s7, "conv6");
    var conv7 = extractConvWithBatchNormParams(s7, s8, "conv7");
    var conv8 = extractConvParams(s8, 5 * boxEncodingSize, 1, "conv8");
    params = { conv0, conv1, conv2: conv22, conv3, conv4, conv5, conv6, conv7, conv8 };
  }
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/tinyYolov2/extractParamsFromWeigthMap.js
function extractorsFactory8(weightMap, paramMappings) {
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  function extractBatchNormParams(prefix) {
    var sub = extractWeightEntry(prefix + "/sub", 1);
    var truediv = extractWeightEntry(prefix + "/truediv", 1);
    return { sub, truediv };
  }
  function extractConvParams(prefix) {
    var filters = extractWeightEntry(prefix + "/filters", 4);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return { filters, bias };
  }
  function extractConvWithBatchNormParams(prefix) {
    var conv3 = extractConvParams(prefix + "/conv");
    var bn2 = extractBatchNormParams(prefix + "/bn");
    return { conv: conv3, bn: bn2 };
  }
  var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
  return {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  };
}
function extractParamsFromWeigthMap7(weightMap, config) {
  var paramMappings = [];
  var _a2 = extractorsFactory8(weightMap, paramMappings), extractConvParams = _a2.extractConvParams, extractConvWithBatchNormParams = _a2.extractConvWithBatchNormParams, extractSeparableConvParams = _a2.extractSeparableConvParams;
  var params;
  if (config.withSeparableConvs) {
    var numFilters = config.filterSizes && config.filterSizes.length || 9;
    params = {
      conv0: config.isFirstLayerConv2d ? extractConvParams("conv0") : extractSeparableConvParams("conv0"),
      conv1: extractSeparableConvParams("conv1"),
      conv2: extractSeparableConvParams("conv2"),
      conv3: extractSeparableConvParams("conv3"),
      conv4: extractSeparableConvParams("conv4"),
      conv5: extractSeparableConvParams("conv5"),
      conv6: numFilters > 7 ? extractSeparableConvParams("conv6") : void 0,
      conv7: numFilters > 8 ? extractSeparableConvParams("conv7") : void 0,
      conv8: extractConvParams("conv8")
    };
  } else {
    params = {
      conv0: extractConvWithBatchNormParams("conv0"),
      conv1: extractConvWithBatchNormParams("conv1"),
      conv2: extractConvWithBatchNormParams("conv2"),
      conv3: extractConvWithBatchNormParams("conv3"),
      conv4: extractConvWithBatchNormParams("conv4"),
      conv5: extractConvWithBatchNormParams("conv5"),
      conv6: extractConvWithBatchNormParams("conv6"),
      conv7: extractConvWithBatchNormParams("conv7"),
      conv8: extractConvParams("conv8")
    };
  }
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params, paramMappings };
}

// node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Options.js
var TinyYolov2SizeType;
(function(TinyYolov2SizeType2) {
  TinyYolov2SizeType2[TinyYolov2SizeType2["XS"] = 224] = "XS";
  TinyYolov2SizeType2[TinyYolov2SizeType2["SM"] = 320] = "SM";
  TinyYolov2SizeType2[TinyYolov2SizeType2["MD"] = 416] = "MD";
  TinyYolov2SizeType2[TinyYolov2SizeType2["LG"] = 608] = "LG";
})(TinyYolov2SizeType || (TinyYolov2SizeType = {}));
var TinyYolov2Options = (
  /** @class */
  function() {
    function TinyYolov2Options2(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, inputSize = _b.inputSize, scoreThreshold = _b.scoreThreshold;
      this._name = "TinyYolov2Options";
      this._inputSize = inputSize || 416;
      this._scoreThreshold = scoreThreshold || 0.5;
      if (typeof this._inputSize !== "number" || this._inputSize % 32 !== 0) {
        throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
      }
      if (typeof this._scoreThreshold !== "number" || this._scoreThreshold <= 0 || this._scoreThreshold >= 1) {
        throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1");
      }
    }
    Object.defineProperty(TinyYolov2Options2.prototype, "inputSize", {
      get: function() {
        return this._inputSize;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TinyYolov2Options2.prototype, "scoreThreshold", {
      get: function() {
        return this._scoreThreshold;
      },
      enumerable: true,
      configurable: true
    });
    return TinyYolov2Options2;
  }()
);

// node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Base.js
var TinyYolov2Base = (
  /** @class */
  function(_super) {
    __extends(TinyYolov2Base2, _super);
    function TinyYolov2Base2(config) {
      var _this = _super.call(this, "TinyYolov2") || this;
      validateConfig(config);
      _this._config = config;
      return _this;
    }
    Object.defineProperty(TinyYolov2Base2.prototype, "config", {
      get: function() {
        return this._config;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TinyYolov2Base2.prototype, "withClassScores", {
      get: function() {
        return this.config.withClassScores || this.config.classes.length > 1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TinyYolov2Base2.prototype, "boxEncodingSize", {
      get: function() {
        return 5 + (this.withClassScores ? this.config.classes.length : 0);
      },
      enumerable: true,
      configurable: true
    });
    TinyYolov2Base2.prototype.runTinyYolov2 = function(x2, params) {
      var out = convWithBatchNorm(x2, params.conv0);
      out = hl(out, [2, 2], [2, 2], "same");
      out = convWithBatchNorm(out, params.conv1);
      out = hl(out, [2, 2], [2, 2], "same");
      out = convWithBatchNorm(out, params.conv2);
      out = hl(out, [2, 2], [2, 2], "same");
      out = convWithBatchNorm(out, params.conv3);
      out = hl(out, [2, 2], [2, 2], "same");
      out = convWithBatchNorm(out, params.conv4);
      out = hl(out, [2, 2], [2, 2], "same");
      out = convWithBatchNorm(out, params.conv5);
      out = hl(out, [2, 2], [1, 1], "same");
      out = convWithBatchNorm(out, params.conv6);
      out = convWithBatchNorm(out, params.conv7);
      return convLayer(out, params.conv8, "valid", false);
    };
    TinyYolov2Base2.prototype.runMobilenet = function(x2, params) {
      var out = this.config.isFirstLayerConv2d ? leaky(convLayer(x2, params.conv0, "valid", false)) : depthwiseSeparableConv2(x2, params.conv0);
      out = hl(out, [2, 2], [2, 2], "same");
      out = depthwiseSeparableConv2(out, params.conv1);
      out = hl(out, [2, 2], [2, 2], "same");
      out = depthwiseSeparableConv2(out, params.conv2);
      out = hl(out, [2, 2], [2, 2], "same");
      out = depthwiseSeparableConv2(out, params.conv3);
      out = hl(out, [2, 2], [2, 2], "same");
      out = depthwiseSeparableConv2(out, params.conv4);
      out = hl(out, [2, 2], [2, 2], "same");
      out = depthwiseSeparableConv2(out, params.conv5);
      out = hl(out, [2, 2], [1, 1], "same");
      out = params.conv6 ? depthwiseSeparableConv2(out, params.conv6) : out;
      out = params.conv7 ? depthwiseSeparableConv2(out, params.conv7) : out;
      return convLayer(out, params.conv8, "valid", false);
    };
    TinyYolov2Base2.prototype.forwardInput = function(input, inputSize) {
      var _this = this;
      var params = this.params;
      if (!params) {
        throw new Error("TinyYolov2 - load model before inference");
      }
      return Ze(function() {
        var batchTensor = input.toBatchTensor(inputSize, false).toFloat();
        batchTensor = _this.config.meanRgb ? normalize(batchTensor, _this.config.meanRgb) : batchTensor;
        batchTensor = batchTensor.div(On(256));
        return _this.config.withSeparableConvs ? _this.runMobilenet(batchTensor, params) : _this.runTinyYolov2(batchTensor, params);
      });
    };
    TinyYolov2Base2.prototype.forward = function(input, inputSize) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [4, _a2.apply(this, [_b.sent(), inputSize])];
            case 2:
              return [2, _b.sent()];
          }
        });
      });
    };
    TinyYolov2Base2.prototype.detect = function(input, forwardParams) {
      if (forwardParams === void 0) {
        forwardParams = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2, inputSize, scoreThreshold, netInput, out, out0, inputDimensions, results, boxes, scores, classScores, classNames, indices, detections;
        var _this = this;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = new TinyYolov2Options(forwardParams), inputSize = _a2.inputSize, scoreThreshold = _a2.scoreThreshold;
              return [4, toNetInput(input)];
            case 1:
              netInput = _b.sent();
              return [4, this.forwardInput(netInput, inputSize)];
            case 2:
              out = _b.sent();
              out0 = Ze(function() {
                return Ur(out)[0].expandDims();
              });
              inputDimensions = {
                width: netInput.getInputWidth(0),
                height: netInput.getInputHeight(0)
              };
              return [4, this.extractBoxes(out0, netInput.getReshapedInputDimensions(0), scoreThreshold)];
            case 3:
              results = _b.sent();
              out.dispose();
              out0.dispose();
              boxes = results.map(function(res) {
                return res.box;
              });
              scores = results.map(function(res) {
                return res.score;
              });
              classScores = results.map(function(res) {
                return res.classScore;
              });
              classNames = results.map(function(res) {
                return _this.config.classes[res.label];
              });
              indices = nonMaxSuppression(boxes.map(function(box) {
                return box.rescale(inputSize);
              }), scores, this.config.iouThreshold, true);
              detections = indices.map(function(idx) {
                return new ObjectDetection(scores[idx], classScores[idx], classNames[idx], boxes[idx], inputDimensions);
              });
              return [2, detections];
          }
        });
      });
    };
    TinyYolov2Base2.prototype.getDefaultModelName = function() {
      return "";
    };
    TinyYolov2Base2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return extractParamsFromWeigthMap7(weightMap, this.config);
    };
    TinyYolov2Base2.prototype.extractParams = function(weights) {
      var filterSizes = this.config.filterSizes || TinyYolov2Base2.DEFAULT_FILTER_SIZES;
      var numFilters = filterSizes ? filterSizes.length : void 0;
      if (numFilters !== 7 && numFilters !== 8 && numFilters !== 9) {
        throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + numFilters + " filterSizes in config");
      }
      return extractParams7(weights, this.config, this.boxEncodingSize, filterSizes);
    };
    TinyYolov2Base2.prototype.extractBoxes = function(outputTensor, inputBlobDimensions, scoreThreshold) {
      return __awaiter(this, void 0, void 0, function() {
        var width, height, inputSize, correctionFactorX, correctionFactorY, numCells, numBoxes, _a2, boxesTensor, scoresTensor, classScoresTensor, results, scoresData, boxesData, row, col, anchor, score, ctX, ctY, width_1, height_1, x2, y2, pos, _b, classScore, label, _c2;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              width = inputBlobDimensions.width, height = inputBlobDimensions.height;
              inputSize = Math.max(width, height);
              correctionFactorX = inputSize / width;
              correctionFactorY = inputSize / height;
              numCells = outputTensor.shape[1];
              numBoxes = this.config.anchors.length;
              _a2 = Ze(function() {
                var reshaped = outputTensor.reshape([numCells, numCells, numBoxes, _this.boxEncodingSize]);
                var boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, numBoxes, 4]);
                var scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, numBoxes, 1]);
                var classScores = _this.withClassScores ? go(reshaped.slice([0, 0, 0, 5], [numCells, numCells, numBoxes, _this.config.classes.length]), 3) : On(0);
                return [boxes, scores, classScores];
              }), boxesTensor = _a2[0], scoresTensor = _a2[1], classScoresTensor = _a2[2];
              results = [];
              return [4, scoresTensor.array()];
            case 1:
              scoresData = _d.sent();
              return [4, boxesTensor.array()];
            case 2:
              boxesData = _d.sent();
              row = 0;
              _d.label = 3;
            case 3:
              if (!(row < numCells))
                return [3, 12];
              col = 0;
              _d.label = 4;
            case 4:
              if (!(col < numCells))
                return [3, 11];
              anchor = 0;
              _d.label = 5;
            case 5:
              if (!(anchor < numBoxes))
                return [3, 10];
              score = sigmoid(scoresData[row][col][anchor][0]);
              if (!(!scoreThreshold || score > scoreThreshold))
                return [3, 9];
              ctX = (col + sigmoid(boxesData[row][col][anchor][0])) / numCells * correctionFactorX;
              ctY = (row + sigmoid(boxesData[row][col][anchor][1])) / numCells * correctionFactorY;
              width_1 = Math.exp(boxesData[row][col][anchor][2]) * this.config.anchors[anchor].x / numCells * correctionFactorX;
              height_1 = Math.exp(boxesData[row][col][anchor][3]) * this.config.anchors[anchor].y / numCells * correctionFactorY;
              x2 = ctX - width_1 / 2;
              y2 = ctY - height_1 / 2;
              pos = { row, col, anchor };
              if (!this.withClassScores)
                return [3, 7];
              return [4, this.extractPredictedClass(classScoresTensor, pos)];
            case 6:
              _c2 = _d.sent();
              return [3, 8];
            case 7:
              _c2 = { classScore: 1, label: 0 };
              _d.label = 8;
            case 8:
              _b = _c2, classScore = _b.classScore, label = _b.label;
              results.push(__assign({ box: new BoundingBox(x2, y2, x2 + width_1, y2 + height_1), score, classScore: score * classScore, label }, pos));
              _d.label = 9;
            case 9:
              anchor++;
              return [3, 5];
            case 10:
              col++;
              return [3, 4];
            case 11:
              row++;
              return [3, 3];
            case 12:
              boxesTensor.dispose();
              scoresTensor.dispose();
              classScoresTensor.dispose();
              return [2, results];
          }
        });
      });
    };
    TinyYolov2Base2.prototype.extractPredictedClass = function(classesTensor, pos) {
      return __awaiter(this, void 0, void 0, function() {
        var row, col, anchor, classesData;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              row = pos.row, col = pos.col, anchor = pos.anchor;
              return [4, classesTensor.array()];
            case 1:
              classesData = _a2.sent();
              return [2, Array(this.config.classes.length).fill(0).map(function(_2, i2) {
                return classesData[row][col][anchor][i2];
              }).map(function(classScore, label) {
                return {
                  classScore,
                  label
                };
              }).reduce(function(max, curr) {
                return max.classScore > curr.classScore ? max : curr;
              })];
          }
        });
      });
    };
    TinyYolov2Base2.DEFAULT_FILTER_SIZES = [
      3,
      16,
      32,
      64,
      128,
      256,
      512,
      1024,
      1024
    ];
    return TinyYolov2Base2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2.js
var TinyYolov2 = (
  /** @class */
  function(_super) {
    __extends(TinyYolov22, _super);
    function TinyYolov22(withSeparableConvs) {
      if (withSeparableConvs === void 0) {
        withSeparableConvs = true;
      }
      var _this = this;
      var config = Object.assign({}, {
        withSeparableConvs,
        iouThreshold: IOU_THRESHOLD,
        classes: ["face"]
      }, withSeparableConvs ? {
        anchors: BOX_ANCHORS_SEPARABLE,
        meanRgb: MEAN_RGB_SEPARABLE
      } : {
        anchors: BOX_ANCHORS,
        withClassScores: true
      });
      _this = _super.call(this, config) || this;
      return _this;
    }
    Object.defineProperty(TinyYolov22.prototype, "withSeparableConvs", {
      get: function() {
        return this.config.withSeparableConvs;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TinyYolov22.prototype, "anchors", {
      get: function() {
        return this.config.anchors;
      },
      enumerable: true,
      configurable: true
    });
    TinyYolov22.prototype.locateFaces = function(input, forwardParams) {
      return __awaiter(this, void 0, void 0, function() {
        var objectDetections;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.detect(input, forwardParams)];
            case 1:
              objectDetections = _a2.sent();
              return [2, objectDetections.map(function(det) {
                return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight });
              })];
          }
        });
      });
    };
    TinyYolov22.prototype.getDefaultModelName = function() {
      return this.withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME;
    };
    TinyYolov22.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
    };
    return TinyYolov22;
  }(TinyYolov2Base)
);

// node_modules/face-api.js/build/es6/tinyYolov2/index.js
function createTinyYolov2(weights, withSeparableConvs) {
  if (withSeparableConvs === void 0) {
    withSeparableConvs = true;
  }
  var net = new TinyYolov2(withSeparableConvs);
  net.extractWeights(weights);
  return net;
}

// node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetectorOptions.js
var TinyFaceDetectorOptions = (
  /** @class */
  function(_super) {
    __extends(TinyFaceDetectorOptions2, _super);
    function TinyFaceDetectorOptions2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._name = "TinyFaceDetectorOptions";
      return _this;
    }
    return TinyFaceDetectorOptions2;
  }(TinyYolov2Options)
);

// node_modules/face-api.js/build/es6/globalApi/ComposableTask.js
var ComposableTask = (
  /** @class */
  function() {
    function ComposableTask2() {
    }
    ComposableTask2.prototype.then = function(onfulfilled) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = onfulfilled;
              return [4, this.run()];
            case 1:
              return [2, _a2.apply(void 0, [_b.sent()])];
          }
        });
      });
    };
    ComposableTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          throw new Error("ComposableTask - run is not implemented");
        });
      });
    };
    return ComposableTask2;
  }()
);

// node_modules/face-api.js/build/es6/globalApi/extractFacesAndComputeResults.js
function extractAllFacesAndComputeResults(parentResults, input, computeResults, extractedFaces, getRectForAlignment) {
  if (getRectForAlignment === void 0) {
    getRectForAlignment = function(_a2) {
      var alignedRect = _a2.alignedRect;
      return alignedRect;
    };
  }
  return __awaiter(this, void 0, void 0, function() {
    var faceBoxes, faces, _a2, _b, results;
    return __generator(this, function(_c2) {
      switch (_c2.label) {
        case 0:
          faceBoxes = parentResults.map(function(parentResult) {
            return isWithFaceLandmarks(parentResult) ? getRectForAlignment(parentResult) : parentResult.detection;
          });
          _a2 = extractedFaces;
          if (_a2)
            return [3, 5];
          if (!(input instanceof wt))
            return [3, 2];
          return [4, extractFaceTensors(input, faceBoxes)];
        case 1:
          _b = _c2.sent();
          return [3, 4];
        case 2:
          return [4, extractFaces(input, faceBoxes)];
        case 3:
          _b = _c2.sent();
          _c2.label = 4;
        case 4:
          _a2 = _b;
          _c2.label = 5;
        case 5:
          faces = _a2;
          return [4, computeResults(faces)];
        case 6:
          results = _c2.sent();
          faces.forEach(function(f2) {
            return f2 instanceof wt && f2.dispose();
          });
          return [2, results];
      }
    });
  });
}
function extractSingleFaceAndComputeResult(parentResult, input, computeResult, extractedFaces, getRectForAlignment) {
  return __awaiter(this, void 0, void 0, function() {
    var _this = this;
    return __generator(this, function(_a2) {
      return [2, extractAllFacesAndComputeResults([parentResult], input, function(faces) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a3) {
            return [2, computeResult(faces[0])];
          });
        });
      }, extractedFaces, getRectForAlignment)];
    });
  });
}

// node_modules/face-api.js/build/es6/mtcnn/bgrToRgbTensor.js
function bgrToRgbTensor(tensor) {
  return Ze(function() {
    return Pr(Ur(tensor, 3).reverse(), 3);
  });
}

// node_modules/face-api.js/build/es6/mtcnn/config.js
var CELL_STRIDE = 2;
var CELL_SIZE = 12;

// node_modules/face-api.js/build/es6/mtcnn/extractParams.js
function extractorsFactory9(extractWeights, paramMappings) {
  var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
  var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
  function extractPReluParams(size, paramPath) {
    var alpha = Mn(extractWeights(size));
    paramMappings.push({ paramPath });
    return alpha;
  }
  function extractSharedParams(numFilters, mappedPrefix, isRnet) {
    if (isRnet === void 0) {
      isRnet = false;
    }
    var conv1 = extractConvParams(numFilters[0], numFilters[1], 3, mappedPrefix + "/conv1");
    var prelu1_alpha = extractPReluParams(numFilters[1], mappedPrefix + "/prelu1_alpha");
    var conv22 = extractConvParams(numFilters[1], numFilters[2], 3, mappedPrefix + "/conv2");
    var prelu2_alpha = extractPReluParams(numFilters[2], mappedPrefix + "/prelu2_alpha");
    var conv3 = extractConvParams(numFilters[2], numFilters[3], isRnet ? 2 : 3, mappedPrefix + "/conv3");
    var prelu3_alpha = extractPReluParams(numFilters[3], mappedPrefix + "/prelu3_alpha");
    return { conv1, prelu1_alpha, conv2: conv22, prelu2_alpha, conv3, prelu3_alpha };
  }
  function extractPNetParams() {
    var sharedParams = extractSharedParams([3, 10, 16, 32], "pnet");
    var conv4_1 = extractConvParams(32, 2, 1, "pnet/conv4_1");
    var conv4_2 = extractConvParams(32, 4, 1, "pnet/conv4_2");
    return __assign(__assign({}, sharedParams), { conv4_1, conv4_2 });
  }
  function extractRNetParams() {
    var sharedParams = extractSharedParams([3, 28, 48, 64], "rnet", true);
    var fc1 = extractFCParams(576, 128, "rnet/fc1");
    var prelu4_alpha = extractPReluParams(128, "rnet/prelu4_alpha");
    var fc2_1 = extractFCParams(128, 2, "rnet/fc2_1");
    var fc2_2 = extractFCParams(128, 4, "rnet/fc2_2");
    return __assign(__assign({}, sharedParams), { fc1, prelu4_alpha, fc2_1, fc2_2 });
  }
  function extractONetParams() {
    var sharedParams = extractSharedParams([3, 32, 64, 64], "onet");
    var conv4 = extractConvParams(64, 128, 2, "onet/conv4");
    var prelu4_alpha = extractPReluParams(128, "onet/prelu4_alpha");
    var fc1 = extractFCParams(1152, 256, "onet/fc1");
    var prelu5_alpha = extractPReluParams(256, "onet/prelu5_alpha");
    var fc2_1 = extractFCParams(256, 2, "onet/fc2_1");
    var fc2_2 = extractFCParams(256, 4, "onet/fc2_2");
    var fc2_3 = extractFCParams(256, 10, "onet/fc2_3");
    return __assign(__assign({}, sharedParams), { conv4, prelu4_alpha, fc1, prelu5_alpha, fc2_1, fc2_2, fc2_3 });
  }
  return {
    extractPNetParams,
    extractRNetParams,
    extractONetParams
  };
}
function extractParams8(weights) {
  var _a2 = extractWeightsFactory(weights), extractWeights = _a2.extractWeights, getRemainingWeights = _a2.getRemainingWeights;
  var paramMappings = [];
  var _b = extractorsFactory9(extractWeights, paramMappings), extractPNetParams = _b.extractPNetParams, extractRNetParams = _b.extractRNetParams, extractONetParams = _b.extractONetParams;
  var pnet = extractPNetParams();
  var rnet = extractRNetParams();
  var onet = extractONetParams();
  if (getRemainingWeights().length !== 0) {
    throw new Error("weights remaing after extract: " + getRemainingWeights().length);
  }
  return { params: { pnet, rnet, onet }, paramMappings };
}

// node_modules/face-api.js/build/es6/mtcnn/extractParamsFromWeigthMap.js
function extractorsFactory10(weightMap, paramMappings) {
  var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
  function extractConvParams(prefix) {
    var filters = extractWeightEntry(prefix + "/weights", 4, prefix + "/filters");
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return { filters, bias };
  }
  function extractFCParams(prefix) {
    var weights = extractWeightEntry(prefix + "/weights", 2);
    var bias = extractWeightEntry(prefix + "/bias", 1);
    return { weights, bias };
  }
  function extractPReluParams(paramPath) {
    return extractWeightEntry(paramPath, 1);
  }
  function extractSharedParams(prefix) {
    var conv1 = extractConvParams(prefix + "/conv1");
    var prelu1_alpha = extractPReluParams(prefix + "/prelu1_alpha");
    var conv22 = extractConvParams(prefix + "/conv2");
    var prelu2_alpha = extractPReluParams(prefix + "/prelu2_alpha");
    var conv3 = extractConvParams(prefix + "/conv3");
    var prelu3_alpha = extractPReluParams(prefix + "/prelu3_alpha");
    return { conv1, prelu1_alpha, conv2: conv22, prelu2_alpha, conv3, prelu3_alpha };
  }
  function extractPNetParams() {
    var sharedParams = extractSharedParams("pnet");
    var conv4_1 = extractConvParams("pnet/conv4_1");
    var conv4_2 = extractConvParams("pnet/conv4_2");
    return __assign(__assign({}, sharedParams), { conv4_1, conv4_2 });
  }
  function extractRNetParams() {
    var sharedParams = extractSharedParams("rnet");
    var fc1 = extractFCParams("rnet/fc1");
    var prelu4_alpha = extractPReluParams("rnet/prelu4_alpha");
    var fc2_1 = extractFCParams("rnet/fc2_1");
    var fc2_2 = extractFCParams("rnet/fc2_2");
    return __assign(__assign({}, sharedParams), { fc1, prelu4_alpha, fc2_1, fc2_2 });
  }
  function extractONetParams() {
    var sharedParams = extractSharedParams("onet");
    var conv4 = extractConvParams("onet/conv4");
    var prelu4_alpha = extractPReluParams("onet/prelu4_alpha");
    var fc1 = extractFCParams("onet/fc1");
    var prelu5_alpha = extractPReluParams("onet/prelu5_alpha");
    var fc2_1 = extractFCParams("onet/fc2_1");
    var fc2_2 = extractFCParams("onet/fc2_2");
    var fc2_3 = extractFCParams("onet/fc2_3");
    return __assign(__assign({}, sharedParams), { conv4, prelu4_alpha, fc1, prelu5_alpha, fc2_1, fc2_2, fc2_3 });
  }
  return {
    extractPNetParams,
    extractRNetParams,
    extractONetParams
  };
}
function extractParamsFromWeigthMap8(weightMap) {
  var paramMappings = [];
  var _a2 = extractorsFactory10(weightMap, paramMappings), extractPNetParams = _a2.extractPNetParams, extractRNetParams = _a2.extractRNetParams, extractONetParams = _a2.extractONetParams;
  var pnet = extractPNetParams();
  var rnet = extractRNetParams();
  var onet = extractONetParams();
  disposeUnusedWeightTensors(weightMap, paramMappings);
  return { params: { pnet, rnet, onet }, paramMappings };
}

// node_modules/face-api.js/build/es6/mtcnn/getSizesForScale.js
function getSizesForScale(scale2, _a2) {
  var height = _a2[0], width = _a2[1];
  return {
    height: Math.floor(height * scale2),
    width: Math.floor(width * scale2)
  };
}

// node_modules/face-api.js/build/es6/mtcnn/pyramidDown.js
function pyramidDown(minFaceSize, scaleFactor, dims) {
  var height = dims[0], width = dims[1];
  var m2 = CELL_SIZE / minFaceSize;
  var scales = [];
  var minLayer = Math.min(height, width) * m2;
  var exp = 0;
  while (minLayer >= 12) {
    scales.push(m2 * Math.pow(scaleFactor, exp));
    minLayer = minLayer * scaleFactor;
    exp += 1;
  }
  return scales;
}

// node_modules/face-api.js/build/es6/mtcnn/MtcnnBox.js
var MtcnnBox = (
  /** @class */
  function(_super) {
    __extends(MtcnnBox2, _super);
    function MtcnnBox2(left, top, right, bottom) {
      return _super.call(this, { left, top, right, bottom }, true) || this;
    }
    return MtcnnBox2;
  }(Box)
);

// node_modules/face-api.js/build/es6/mtcnn/normalize.js
function normalize2(x2) {
  return Ze(function() {
    return gc(Cc(x2, On(127.5)), On(78125e-7));
  });
}

// node_modules/face-api.js/build/es6/mtcnn/prelu.js
function prelu(x2, alpha) {
  return Ze(function() {
    return rc(Bl(x2), gc(alpha, wu(Bl(wu(x2)))));
  });
}

// node_modules/face-api.js/build/es6/mtcnn/sharedLayers.js
function sharedLayer(x2, params, isPnet) {
  if (isPnet === void 0) {
    isPnet = false;
  }
  return Ze(function() {
    var out = convLayer(x2, params.conv1, "valid");
    out = prelu(out, params.prelu1_alpha);
    out = hl(out, isPnet ? [2, 2] : [3, 3], [2, 2], "same");
    out = convLayer(out, params.conv2, "valid");
    out = prelu(out, params.prelu2_alpha);
    out = isPnet ? out : hl(out, [3, 3], [2, 2], "valid");
    out = convLayer(out, params.conv3, "valid");
    out = prelu(out, params.prelu3_alpha);
    return out;
  });
}

// node_modules/face-api.js/build/es6/mtcnn/PNet.js
function PNet(x2, params) {
  return Ze(function() {
    var out = sharedLayer(x2, params, true);
    var conv3 = convLayer(out, params.conv4_1, "valid");
    var max = wr(Sl(conv3, 3), 3);
    var prob = go(Cc(conv3, max), 3);
    var regions = convLayer(out, params.conv4_2, "valid");
    return { prob, regions };
  });
}

// node_modules/face-api.js/build/es6/mtcnn/stage1.js
function rescaleAndNormalize(x2, scale2) {
  return Ze(function() {
    var _a2 = getSizesForScale(scale2, x2.shape.slice(1)), height = _a2.height, width = _a2.width;
    var resized = Oh.resizeBilinear(x2, [height, width]);
    var normalized = normalize2(resized);
    return Wl(normalized, [0, 2, 1, 3]);
  });
}
function extractBoundingBoxes(scoresTensor, regionsTensor, scale2, scoreThreshold) {
  var indices = [];
  var scoresData = scoresTensor.arraySync();
  for (var y2 = 0; y2 < scoresTensor.shape[0]; y2++) {
    for (var x2 = 0; x2 < scoresTensor.shape[1]; x2++) {
      if (scoresData[y2][x2] >= scoreThreshold) {
        indices.push(new Point(x2, y2));
      }
    }
  }
  var boundingBoxes = indices.map(function(idx) {
    var cell = new BoundingBox(Math.round((idx.y * CELL_STRIDE + 1) / scale2), Math.round((idx.x * CELL_STRIDE + 1) / scale2), Math.round((idx.y * CELL_STRIDE + CELL_SIZE) / scale2), Math.round((idx.x * CELL_STRIDE + CELL_SIZE) / scale2));
    var score = scoresData[idx.y][idx.x];
    var regionsData = regionsTensor.arraySync();
    var region = new MtcnnBox(regionsData[idx.y][idx.x][0], regionsData[idx.y][idx.x][1], regionsData[idx.y][idx.x][2], regionsData[idx.y][idx.x][3]);
    return {
      cell,
      score,
      region
    };
  });
  return boundingBoxes;
}
function stage1(imgTensor, scales, scoreThreshold, params, stats) {
  stats.stage1 = [];
  var pnetOutputs = scales.map(function(scale2) {
    return Ze(function() {
      var statsForScale = { scale: scale2 };
      var resized = rescaleAndNormalize(imgTensor, scale2);
      var ts3 = Date.now();
      var _a2 = PNet(resized, params), prob = _a2.prob, regions = _a2.regions;
      statsForScale.pnet = Date.now() - ts3;
      var scoresTensor = Ur(Ur(prob, 3)[1])[0];
      var regionsTensor = Ur(regions)[0];
      return {
        scoresTensor,
        regionsTensor,
        scale: scale2,
        statsForScale
      };
    });
  });
  var boxesForScale = pnetOutputs.map(function(_a2) {
    var scoresTensor = _a2.scoresTensor, regionsTensor = _a2.regionsTensor, scale2 = _a2.scale, statsForScale = _a2.statsForScale;
    var boundingBoxes = extractBoundingBoxes(scoresTensor, regionsTensor, scale2, scoreThreshold);
    scoresTensor.dispose();
    regionsTensor.dispose();
    if (!boundingBoxes.length) {
      stats.stage1.push(statsForScale);
      return [];
    }
    var ts3 = Date.now();
    var indices2 = nonMaxSuppression(boundingBoxes.map(function(bbox) {
      return bbox.cell;
    }), boundingBoxes.map(function(bbox) {
      return bbox.score;
    }), 0.5);
    statsForScale.nms = Date.now() - ts3;
    statsForScale.numBoxes = indices2.length;
    stats.stage1.push(statsForScale);
    return indices2.map(function(boxIdx) {
      return boundingBoxes[boxIdx];
    });
  });
  var allBoxes = boxesForScale.reduce(function(all, boxes) {
    return all.concat(boxes);
  }, []);
  var finalBoxes = [];
  var finalScores = [];
  if (allBoxes.length > 0) {
    var ts2 = Date.now();
    var indices = nonMaxSuppression(allBoxes.map(function(bbox) {
      return bbox.cell;
    }), allBoxes.map(function(bbox) {
      return bbox.score;
    }), 0.7);
    stats.stage1_nms = Date.now() - ts2;
    finalScores = indices.map(function(idx) {
      return allBoxes[idx].score;
    });
    finalBoxes = indices.map(function(idx) {
      return allBoxes[idx];
    }).map(function(_a2) {
      var cell = _a2.cell, region = _a2.region;
      return new BoundingBox(cell.left + region.left * cell.width, cell.top + region.top * cell.height, cell.right + region.right * cell.width, cell.bottom + region.bottom * cell.height).toSquare().round();
    });
  }
  return {
    boxes: finalBoxes,
    scores: finalScores
  };
}

// node_modules/face-api.js/build/es6/mtcnn/extractImagePatches.js
function extractImagePatches(img, boxes, _a2) {
  var width = _a2.width, height = _a2.height;
  return __awaiter(this, void 0, void 0, function() {
    var imgCtx, bitmaps, imagePatchesDatas;
    var _this = this;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          imgCtx = getContext2dOrThrow(img);
          return [4, Promise.all(boxes.map(function(box) {
            return __awaiter(_this, void 0, void 0, function() {
              var _a3, y2, ey, x2, ex, fromX, fromY, imgData;
              return __generator(this, function(_b2) {
                _a3 = box.padAtBorders(img.height, img.width), y2 = _a3.y, ey = _a3.ey, x2 = _a3.x, ex = _a3.ex;
                fromX = x2 - 1;
                fromY = y2 - 1;
                imgData = imgCtx.getImageData(fromX, fromY, ex - fromX, ey - fromY);
                return [2, env.isNodejs() ? createCanvasFromMedia(imgData) : createImageBitmap(imgData)];
              });
            });
          }))];
        case 1:
          bitmaps = _b.sent();
          imagePatchesDatas = [];
          bitmaps.forEach(function(bmp) {
            var patch = createCanvas({ width, height });
            var patchCtx = getContext2dOrThrow(patch);
            patchCtx.drawImage(bmp, 0, 0, width, height);
            var data = patchCtx.getImageData(0, 0, width, height).data;
            var currData = [];
            for (var i2 = 0; i2 < data.length; i2 += 4) {
              currData.push(data[i2 + 2]);
              currData.push(data[i2 + 1]);
              currData.push(data[i2]);
            }
            imagePatchesDatas.push(currData);
          });
          return [2, imagePatchesDatas.map(function(data) {
            var t2 = Ze(function() {
              var imagePatchTensor = Wl(Ln(data, [1, width, height, 3]), [0, 2, 1, 3]).toFloat();
              return normalize2(imagePatchTensor);
            });
            return t2;
          })];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/mtcnn/RNet.js
function RNet(x2, params) {
  return Ze(function() {
    var convOut = sharedLayer(x2, params);
    var vectorized = Or(convOut, [convOut.shape[0], params.fc1.weights.shape[0]]);
    var fc1 = fullyConnectedLayer(vectorized, params.fc1);
    var prelu4 = prelu(fc1, params.prelu4_alpha);
    var fc2_1 = fullyConnectedLayer(prelu4, params.fc2_1);
    var max = wr(Sl(fc2_1, 1), 1);
    var prob = go(Cc(fc2_1, max), 1);
    var regions = fullyConnectedLayer(prelu4, params.fc2_2);
    var scores = Ur(prob, 1)[1];
    return { scores, regions };
  });
}

// node_modules/face-api.js/build/es6/mtcnn/stage2.js
function stage2(img, inputBoxes, scoreThreshold, params, stats) {
  return __awaiter(this, void 0, void 0, function() {
    var ts2, rnetInputs, rnetOuts, scoresTensor, scores, _a2, _b, indices, filteredBoxes, filteredScores, finalBoxes, finalScores, indicesNms, regions_1;
    return __generator(this, function(_c2) {
      switch (_c2.label) {
        case 0:
          ts2 = Date.now();
          return [4, extractImagePatches(img, inputBoxes, { width: 24, height: 24 })];
        case 1:
          rnetInputs = _c2.sent();
          stats.stage2_extractImagePatches = Date.now() - ts2;
          ts2 = Date.now();
          rnetOuts = rnetInputs.map(function(rnetInput) {
            var out = RNet(rnetInput, params);
            rnetInput.dispose();
            return out;
          });
          stats.stage2_rnet = Date.now() - ts2;
          scoresTensor = rnetOuts.length > 1 ? Yn(rnetOuts.map(function(out) {
            return out.scores;
          })) : rnetOuts[0].scores;
          _b = (_a2 = Array).from;
          return [4, scoresTensor.data()];
        case 2:
          scores = _b.apply(_a2, [_c2.sent()]);
          scoresTensor.dispose();
          indices = scores.map(function(score, idx) {
            return { score, idx };
          }).filter(function(c2) {
            return c2.score > scoreThreshold;
          }).map(function(_a3) {
            var idx = _a3.idx;
            return idx;
          });
          filteredBoxes = indices.map(function(idx) {
            return inputBoxes[idx];
          });
          filteredScores = indices.map(function(idx) {
            return scores[idx];
          });
          finalBoxes = [];
          finalScores = [];
          if (filteredBoxes.length > 0) {
            ts2 = Date.now();
            indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7);
            stats.stage2_nms = Date.now() - ts2;
            regions_1 = indicesNms.map(function(idx) {
              var regionsData = rnetOuts[indices[idx]].regions.arraySync();
              return new MtcnnBox(regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
            });
            finalScores = indicesNms.map(function(idx) {
              return filteredScores[idx];
            });
            finalBoxes = indicesNms.map(function(idx, i2) {
              return filteredBoxes[idx].calibrate(regions_1[i2]);
            });
          }
          rnetOuts.forEach(function(t2) {
            t2.regions.dispose();
            t2.scores.dispose();
          });
          return [2, {
            boxes: finalBoxes,
            scores: finalScores
          }];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/mtcnn/ONet.js
function ONet(x2, params) {
  return Ze(function() {
    var out = sharedLayer(x2, params);
    out = hl(out, [2, 2], [2, 2], "same");
    out = convLayer(out, params.conv4, "valid");
    out = prelu(out, params.prelu4_alpha);
    var vectorized = Or(out, [out.shape[0], params.fc1.weights.shape[0]]);
    var fc1 = fullyConnectedLayer(vectorized, params.fc1);
    var prelu5 = prelu(fc1, params.prelu5_alpha);
    var fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1);
    var max = wr(Sl(fc2_1, 1), 1);
    var prob = go(Cc(fc2_1, max), 1);
    var regions = fullyConnectedLayer(prelu5, params.fc2_2);
    var points = fullyConnectedLayer(prelu5, params.fc2_3);
    var scores = Ur(prob, 1)[1];
    return { scores, regions, points };
  });
}

// node_modules/face-api.js/build/es6/mtcnn/stage3.js
function stage3(img, inputBoxes, scoreThreshold, params, stats) {
  return __awaiter(this, void 0, void 0, function() {
    var ts2, onetInputs, onetOuts, scoresTensor, scores, _a2, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;
    return __generator(this, function(_c2) {
      switch (_c2.label) {
        case 0:
          ts2 = Date.now();
          return [4, extractImagePatches(img, inputBoxes, { width: 48, height: 48 })];
        case 1:
          onetInputs = _c2.sent();
          stats.stage3_extractImagePatches = Date.now() - ts2;
          ts2 = Date.now();
          onetOuts = onetInputs.map(function(onetInput) {
            var out = ONet(onetInput, params);
            onetInput.dispose();
            return out;
          });
          stats.stage3_onet = Date.now() - ts2;
          scoresTensor = onetOuts.length > 1 ? Yn(onetOuts.map(function(out) {
            return out.scores;
          })) : onetOuts[0].scores;
          _b = (_a2 = Array).from;
          return [4, scoresTensor.data()];
        case 2:
          scores = _b.apply(_a2, [_c2.sent()]);
          scoresTensor.dispose();
          indices = scores.map(function(score, idx) {
            return { score, idx };
          }).filter(function(c2) {
            return c2.score > scoreThreshold;
          }).map(function(_a3) {
            var idx = _a3.idx;
            return idx;
          });
          filteredRegions = indices.map(function(idx) {
            var regionsData = onetOuts[idx].regions.arraySync();
            return new MtcnnBox(regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
          });
          filteredBoxes = indices.map(function(idx, i2) {
            return inputBoxes[idx].calibrate(filteredRegions[i2]);
          });
          filteredScores = indices.map(function(idx) {
            return scores[idx];
          });
          finalBoxes = [];
          finalScores = [];
          points = [];
          if (filteredBoxes.length > 0) {
            ts2 = Date.now();
            indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7, false);
            stats.stage3_nms = Date.now() - ts2;
            finalBoxes = indicesNms.map(function(idx) {
              return filteredBoxes[idx];
            });
            finalScores = indicesNms.map(function(idx) {
              return filteredScores[idx];
            });
            points = indicesNms.map(function(idx, i2) {
              return Array(5).fill(0).map(function(_2, ptIdx) {
                var pointsData = onetOuts[idx].points.arraySync();
                return new Point(pointsData[0][ptIdx] * (finalBoxes[i2].width + 1) + finalBoxes[i2].left, pointsData[0][ptIdx + 5] * (finalBoxes[i2].height + 1) + finalBoxes[i2].top);
              });
            });
          }
          onetOuts.forEach(function(t2) {
            t2.regions.dispose();
            t2.scores.dispose();
            t2.points.dispose();
          });
          return [2, {
            boxes: finalBoxes,
            scores: finalScores,
            points
          }];
      }
    });
  });
}

// node_modules/face-api.js/build/es6/mtcnn/Mtcnn.js
var Mtcnn = (
  /** @class */
  function(_super) {
    __extends(Mtcnn2, _super);
    function Mtcnn2() {
      return _super.call(this, "Mtcnn") || this;
    }
    Mtcnn2.prototype.load = function(weightsOrUrl) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          console.warn("mtcnn is deprecated and will be removed soon");
          return [2, _super.prototype.load.call(this, weightsOrUrl)];
        });
      });
    };
    Mtcnn2.prototype.loadFromDisk = function(filePath) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          console.warn("mtcnn is deprecated and will be removed soon");
          return [2, _super.prototype.loadFromDisk.call(this, filePath)];
        });
      });
    };
    Mtcnn2.prototype.forwardInput = function(input, forwardParams) {
      if (forwardParams === void 0) {
        forwardParams = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var params, inputCanvas, stats, tsTotal, imgTensor, onReturn, _a2, height, width, _b, minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps, scales, ts2, out1, out2, out3, results;
        return __generator(this, function(_c2) {
          switch (_c2.label) {
            case 0:
              params = this.params;
              if (!params) {
                throw new Error("Mtcnn - load model before inference");
              }
              inputCanvas = input.canvases[0];
              if (!inputCanvas) {
                throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");
              }
              stats = {};
              tsTotal = Date.now();
              imgTensor = Ze(function() {
                return bgrToRgbTensor(wr(id.fromPixels(inputCanvas)).toFloat());
              });
              onReturn = function(results2) {
                imgTensor.dispose();
                stats.total = Date.now() - tsTotal;
                return results2;
              };
              _a2 = imgTensor.shape.slice(1), height = _a2[0], width = _a2[1];
              _b = new MtcnnOptions(forwardParams), minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
              scales = (scaleSteps || pyramidDown(minFaceSize, scaleFactor, [height, width])).filter(function(scale2) {
                var sizes = getSizesForScale(scale2, [height, width]);
                return Math.min(sizes.width, sizes.height) > CELL_SIZE;
              }).slice(0, maxNumScales);
              stats.scales = scales;
              stats.pyramid = scales.map(function(scale2) {
                return getSizesForScale(scale2, [height, width]);
              });
              ts2 = Date.now();
              return [4, stage1(imgTensor, scales, scoreThresholds[0], params.pnet, stats)];
            case 1:
              out1 = _c2.sent();
              stats.total_stage1 = Date.now() - ts2;
              if (!out1.boxes.length) {
                return [2, onReturn({ results: [], stats })];
              }
              stats.stage2_numInputBoxes = out1.boxes.length;
              ts2 = Date.now();
              return [4, stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)];
            case 2:
              out2 = _c2.sent();
              stats.total_stage2 = Date.now() - ts2;
              if (!out2.boxes.length) {
                return [2, onReturn({ results: [], stats })];
              }
              stats.stage3_numInputBoxes = out2.boxes.length;
              ts2 = Date.now();
              return [4, stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)];
            case 3:
              out3 = _c2.sent();
              stats.total_stage3 = Date.now() - ts2;
              results = out3.boxes.map(function(box, idx) {
                return extendWithFaceLandmarks(extendWithFaceDetection({}, new FaceDetection(out3.scores[idx], new Rect(box.left / width, box.top / height, box.width / width, box.height / height), {
                  height,
                  width
                })), new FaceLandmarks5(out3.points[idx].map(function(pt2) {
                  return pt2.sub(new Point(box.left, box.top)).div(new Point(box.width, box.height));
                }), { width: box.width, height: box.height }));
              });
              return [2, onReturn({ results, stats })];
          }
        });
      });
    };
    Mtcnn2.prototype.forward = function(input, forwardParams) {
      if (forwardParams === void 0) {
        forwardParams = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [4, _a2.apply(this, [
                _b.sent(),
                forwardParams
              ])];
            case 2:
              return [2, _b.sent().results];
          }
        });
      });
    };
    Mtcnn2.prototype.forwardWithStats = function(input, forwardParams) {
      if (forwardParams === void 0) {
        forwardParams = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this.forwardInput;
              return [4, toNetInput(input)];
            case 1:
              return [2, _a2.apply(this, [
                _b.sent(),
                forwardParams
              ])];
          }
        });
      });
    };
    Mtcnn2.prototype.getDefaultModelName = function() {
      return "mtcnn_model";
    };
    Mtcnn2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return extractParamsFromWeigthMap8(weightMap);
    };
    Mtcnn2.prototype.extractParams = function(weights) {
      return extractParams8(weights);
    };
    return Mtcnn2;
  }(NeuralNetwork)
);

// node_modules/face-api.js/build/es6/tinyFaceDetector/const.js
var IOU_THRESHOLD2 = 0.4;
var BOX_ANCHORS2 = [
  new Point(1.603231, 2.094468),
  new Point(6.041143, 7.080126),
  new Point(2.882459, 3.518061),
  new Point(4.266906, 5.178857),
  new Point(9.041765, 10.66308)
];
var MEAN_RGB = [117.001, 114.697, 97.404];

// node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetector.js
var TinyFaceDetector = (
  /** @class */
  function(_super) {
    __extends(TinyFaceDetector2, _super);
    function TinyFaceDetector2() {
      var _this = this;
      var config = {
        withSeparableConvs: true,
        iouThreshold: IOU_THRESHOLD2,
        classes: ["face"],
        anchors: BOX_ANCHORS2,
        meanRgb: MEAN_RGB,
        isFirstLayerConv2d: true,
        filterSizes: [3, 16, 32, 64, 128, 256, 512]
      };
      _this = _super.call(this, config) || this;
      return _this;
    }
    Object.defineProperty(TinyFaceDetector2.prototype, "anchors", {
      get: function() {
        return this.config.anchors;
      },
      enumerable: true,
      configurable: true
    });
    TinyFaceDetector2.prototype.locateFaces = function(input, forwardParams) {
      return __awaiter(this, void 0, void 0, function() {
        var objectDetections;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.detect(input, forwardParams)];
            case 1:
              objectDetections = _a2.sent();
              return [2, objectDetections.map(function(det) {
                return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight });
              })];
          }
        });
      });
    };
    TinyFaceDetector2.prototype.getDefaultModelName = function() {
      return "tiny_face_detector_model";
    };
    TinyFaceDetector2.prototype.extractParamsFromWeigthMap = function(weightMap) {
      return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
    };
    return TinyFaceDetector2;
  }(TinyYolov2Base)
);

// node_modules/face-api.js/build/es6/globalApi/nets.js
var nets = {
  ssdMobilenetv1: new SsdMobilenetv1(),
  tinyFaceDetector: new TinyFaceDetector(),
  tinyYolov2: new TinyYolov2(),
  mtcnn: new Mtcnn(),
  faceLandmark68Net: new FaceLandmark68Net(),
  faceLandmark68TinyNet: new FaceLandmark68TinyNet(),
  faceRecognitionNet: new FaceRecognitionNet(),
  faceExpressionNet: new FaceExpressionNet(),
  ageGenderNet: new AgeGenderNet()
};
var ssdMobilenetv1 = function(input, options) {
  return nets.ssdMobilenetv1.locateFaces(input, options);
};
var tinyFaceDetector = function(input, options) {
  return nets.tinyFaceDetector.locateFaces(input, options);
};
var tinyYolov2 = function(input, options) {
  return nets.tinyYolov2.locateFaces(input, options);
};
var mtcnn = function(input, options) {
  return nets.mtcnn.forward(input, options);
};
var detectFaceLandmarks = function(input) {
  return nets.faceLandmark68Net.detectLandmarks(input);
};
var detectFaceLandmarksTiny = function(input) {
  return nets.faceLandmark68TinyNet.detectLandmarks(input);
};
var computeFaceDescriptor = function(input) {
  return nets.faceRecognitionNet.computeFaceDescriptor(input);
};
var recognizeFaceExpressions = function(input) {
  return nets.faceExpressionNet.predictExpressions(input);
};
var predictAgeAndGender = function(input) {
  return nets.ageGenderNet.predictAgeAndGender(input);
};
var loadSsdMobilenetv1Model = function(url) {
  return nets.ssdMobilenetv1.load(url);
};
var loadTinyFaceDetectorModel = function(url) {
  return nets.tinyFaceDetector.load(url);
};
var loadMtcnnModel = function(url) {
  return nets.mtcnn.load(url);
};
var loadTinyYolov2Model = function(url) {
  return nets.tinyYolov2.load(url);
};
var loadFaceLandmarkModel = function(url) {
  return nets.faceLandmark68Net.load(url);
};
var loadFaceLandmarkTinyModel = function(url) {
  return nets.faceLandmark68TinyNet.load(url);
};
var loadFaceRecognitionModel = function(url) {
  return nets.faceRecognitionNet.load(url);
};
var loadFaceExpressionModel = function(url) {
  return nets.faceExpressionNet.load(url);
};
var loadAgeGenderModel = function(url) {
  return nets.ageGenderNet.load(url);
};
var loadFaceDetectionModel = loadSsdMobilenetv1Model;
var locateFaces = ssdMobilenetv1;
var detectLandmarks = detectFaceLandmarks;

// node_modules/face-api.js/build/es6/globalApi/PredictFaceExpressionsTask.js
var PredictFaceExpressionsTaskBase = (
  /** @class */
  function(_super) {
    __extends(PredictFaceExpressionsTaskBase2, _super);
    function PredictFaceExpressionsTaskBase2(parentTask, input, extractedFaces) {
      var _this = _super.call(this) || this;
      _this.parentTask = parentTask;
      _this.input = input;
      _this.extractedFaces = extractedFaces;
      return _this;
    }
    return PredictFaceExpressionsTaskBase2;
  }(ComposableTask)
);
var PredictAllFaceExpressionsTask = (
  /** @class */
  function(_super) {
    __extends(PredictAllFaceExpressionsTask2, _super);
    function PredictAllFaceExpressionsTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResults, faceExpressionsByFace;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResults = _a2.sent();
              return [4, extractAllFacesAndComputeResults(parentResults, this.input, function(faces) {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a3) {
                    switch (_a3.label) {
                      case 0:
                        return [4, Promise.all(faces.map(function(face) {
                          return nets.faceExpressionNet.predictExpressions(face);
                        }))];
                      case 1:
                        return [2, _a3.sent()];
                    }
                  });
                });
              }, this.extractedFaces)];
            case 2:
              faceExpressionsByFace = _a2.sent();
              return [2, parentResults.map(function(parentResult, i2) {
                return extendWithFaceExpressions(parentResult, faceExpressionsByFace[i2]);
              })];
          }
        });
      });
    };
    PredictAllFaceExpressionsTask2.prototype.withAgeAndGender = function() {
      return new PredictAllAgeAndGenderTask(this, this.input);
    };
    return PredictAllFaceExpressionsTask2;
  }(PredictFaceExpressionsTaskBase)
);
var PredictSingleFaceExpressionsTask = (
  /** @class */
  function(_super) {
    __extends(PredictSingleFaceExpressionsTask2, _super);
    function PredictSingleFaceExpressionsTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResult, faceExpressions;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResult = _a2.sent();
              if (!parentResult) {
                return [
                  2
                  /*return*/
                ];
              }
              return [4, extractSingleFaceAndComputeResult(parentResult, this.input, function(face) {
                return nets.faceExpressionNet.predictExpressions(face);
              }, this.extractedFaces)];
            case 2:
              faceExpressions = _a2.sent();
              return [2, extendWithFaceExpressions(parentResult, faceExpressions)];
          }
        });
      });
    };
    PredictSingleFaceExpressionsTask2.prototype.withAgeAndGender = function() {
      return new PredictSingleAgeAndGenderTask(this, this.input);
    };
    return PredictSingleFaceExpressionsTask2;
  }(PredictFaceExpressionsTaskBase)
);
var PredictAllFaceExpressionsWithFaceAlignmentTask = (
  /** @class */
  function(_super) {
    __extends(PredictAllFaceExpressionsWithFaceAlignmentTask2, _super);
    function PredictAllFaceExpressionsWithFaceAlignmentTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsWithFaceAlignmentTask2.prototype.withAgeAndGender = function() {
      return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    PredictAllFaceExpressionsWithFaceAlignmentTask2.prototype.withFaceDescriptors = function() {
      return new ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return PredictAllFaceExpressionsWithFaceAlignmentTask2;
  }(PredictAllFaceExpressionsTask)
);
var PredictSingleFaceExpressionsWithFaceAlignmentTask = (
  /** @class */
  function(_super) {
    __extends(PredictSingleFaceExpressionsWithFaceAlignmentTask2, _super);
    function PredictSingleFaceExpressionsWithFaceAlignmentTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsWithFaceAlignmentTask2.prototype.withAgeAndGender = function() {
      return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    PredictSingleFaceExpressionsWithFaceAlignmentTask2.prototype.withFaceDescriptor = function() {
      return new ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return PredictSingleFaceExpressionsWithFaceAlignmentTask2;
  }(PredictSingleFaceExpressionsTask)
);

// node_modules/face-api.js/build/es6/globalApi/PredictAgeAndGenderTask.js
var PredictAgeAndGenderTaskBase = (
  /** @class */
  function(_super) {
    __extends(PredictAgeAndGenderTaskBase2, _super);
    function PredictAgeAndGenderTaskBase2(parentTask, input, extractedFaces) {
      var _this = _super.call(this) || this;
      _this.parentTask = parentTask;
      _this.input = input;
      _this.extractedFaces = extractedFaces;
      return _this;
    }
    return PredictAgeAndGenderTaskBase2;
  }(ComposableTask)
);
var PredictAllAgeAndGenderTask = (
  /** @class */
  function(_super) {
    __extends(PredictAllAgeAndGenderTask2, _super);
    function PredictAllAgeAndGenderTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResults, ageAndGenderByFace;
        var _this = this;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResults = _a2.sent();
              return [4, extractAllFacesAndComputeResults(parentResults, this.input, function(faces) {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a3) {
                    switch (_a3.label) {
                      case 0:
                        return [4, Promise.all(faces.map(function(face) {
                          return nets.ageGenderNet.predictAgeAndGender(face);
                        }))];
                      case 1:
                        return [2, _a3.sent()];
                    }
                  });
                });
              }, this.extractedFaces)];
            case 2:
              ageAndGenderByFace = _a2.sent();
              return [2, parentResults.map(function(parentResult, i2) {
                var _a3 = ageAndGenderByFace[i2], age = _a3.age, gender = _a3.gender, genderProbability = _a3.genderProbability;
                return extendWithAge(extendWithGender(parentResult, gender, genderProbability), age);
              })];
          }
        });
      });
    };
    PredictAllAgeAndGenderTask2.prototype.withFaceExpressions = function() {
      return new PredictAllFaceExpressionsTask(this, this.input);
    };
    return PredictAllAgeAndGenderTask2;
  }(PredictAgeAndGenderTaskBase)
);
var PredictSingleAgeAndGenderTask = (
  /** @class */
  function(_super) {
    __extends(PredictSingleAgeAndGenderTask2, _super);
    function PredictSingleAgeAndGenderTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResult, _a2, age, gender, genderProbability;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResult = _b.sent();
              if (!parentResult) {
                return [
                  2
                  /*return*/
                ];
              }
              return [4, extractSingleFaceAndComputeResult(parentResult, this.input, function(face) {
                return nets.ageGenderNet.predictAgeAndGender(face);
              }, this.extractedFaces)];
            case 2:
              _a2 = _b.sent(), age = _a2.age, gender = _a2.gender, genderProbability = _a2.genderProbability;
              return [2, extendWithAge(extendWithGender(parentResult, gender, genderProbability), age)];
          }
        });
      });
    };
    PredictSingleAgeAndGenderTask2.prototype.withFaceExpressions = function() {
      return new PredictSingleFaceExpressionsTask(this, this.input);
    };
    return PredictSingleAgeAndGenderTask2;
  }(PredictAgeAndGenderTaskBase)
);
var PredictAllAgeAndGenderWithFaceAlignmentTask = (
  /** @class */
  function(_super) {
    __extends(PredictAllAgeAndGenderWithFaceAlignmentTask2, _super);
    function PredictAllAgeAndGenderWithFaceAlignmentTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderWithFaceAlignmentTask2.prototype.withFaceExpressions = function() {
      return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    PredictAllAgeAndGenderWithFaceAlignmentTask2.prototype.withFaceDescriptors = function() {
      return new ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return PredictAllAgeAndGenderWithFaceAlignmentTask2;
  }(PredictAllAgeAndGenderTask)
);
var PredictSingleAgeAndGenderWithFaceAlignmentTask = (
  /** @class */
  function(_super) {
    __extends(PredictSingleAgeAndGenderWithFaceAlignmentTask2, _super);
    function PredictSingleAgeAndGenderWithFaceAlignmentTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderWithFaceAlignmentTask2.prototype.withFaceExpressions = function() {
      return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    PredictSingleAgeAndGenderWithFaceAlignmentTask2.prototype.withFaceDescriptor = function() {
      return new ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return PredictSingleAgeAndGenderWithFaceAlignmentTask2;
  }(PredictSingleAgeAndGenderTask)
);

// node_modules/face-api.js/build/es6/globalApi/ComputeFaceDescriptorsTasks.js
var ComputeFaceDescriptorsTaskBase = (
  /** @class */
  function(_super) {
    __extends(ComputeFaceDescriptorsTaskBase2, _super);
    function ComputeFaceDescriptorsTaskBase2(parentTask, input) {
      var _this = _super.call(this) || this;
      _this.parentTask = parentTask;
      _this.input = input;
      return _this;
    }
    return ComputeFaceDescriptorsTaskBase2;
  }(ComposableTask)
);
var ComputeAllFaceDescriptorsTask = (
  /** @class */
  function(_super) {
    __extends(ComputeAllFaceDescriptorsTask2, _super);
    function ComputeAllFaceDescriptorsTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeAllFaceDescriptorsTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResults, descriptors;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResults = _a2.sent();
              return [4, extractAllFacesAndComputeResults(parentResults, this.input, function(faces) {
                return Promise.all(faces.map(function(face) {
                  return nets.faceRecognitionNet.computeFaceDescriptor(face);
                }));
              }, null, function(parentResult) {
                return parentResult.landmarks.align(null, { useDlibAlignment: true });
              })];
            case 2:
              descriptors = _a2.sent();
              return [2, descriptors.map(function(descriptor, i2) {
                return extendWithFaceDescriptor(parentResults[i2], descriptor);
              })];
          }
        });
      });
    };
    ComputeAllFaceDescriptorsTask2.prototype.withFaceExpressions = function() {
      return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    ComputeAllFaceDescriptorsTask2.prototype.withAgeAndGender = function() {
      return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    return ComputeAllFaceDescriptorsTask2;
  }(ComputeFaceDescriptorsTaskBase)
);
var ComputeSingleFaceDescriptorTask = (
  /** @class */
  function(_super) {
    __extends(ComputeSingleFaceDescriptorTask2, _super);
    function ComputeSingleFaceDescriptorTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeSingleFaceDescriptorTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResult, descriptor;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResult = _a2.sent();
              if (!parentResult) {
                return [
                  2
                  /*return*/
                ];
              }
              return [4, extractSingleFaceAndComputeResult(parentResult, this.input, function(face) {
                return nets.faceRecognitionNet.computeFaceDescriptor(face);
              }, null, function(parentResult2) {
                return parentResult2.landmarks.align(null, { useDlibAlignment: true });
              })];
            case 2:
              descriptor = _a2.sent();
              return [2, extendWithFaceDescriptor(parentResult, descriptor)];
          }
        });
      });
    };
    ComputeSingleFaceDescriptorTask2.prototype.withFaceExpressions = function() {
      return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    ComputeSingleFaceDescriptorTask2.prototype.withAgeAndGender = function() {
      return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    return ComputeSingleFaceDescriptorTask2;
  }(ComputeFaceDescriptorsTaskBase)
);

// node_modules/face-api.js/build/es6/globalApi/DetectFaceLandmarksTasks.js
var DetectFaceLandmarksTaskBase = (
  /** @class */
  function(_super) {
    __extends(DetectFaceLandmarksTaskBase2, _super);
    function DetectFaceLandmarksTaskBase2(parentTask, input, useTinyLandmarkNet) {
      var _this = _super.call(this) || this;
      _this.parentTask = parentTask;
      _this.input = input;
      _this.useTinyLandmarkNet = useTinyLandmarkNet;
      return _this;
    }
    Object.defineProperty(DetectFaceLandmarksTaskBase2.prototype, "landmarkNet", {
      get: function() {
        return this.useTinyLandmarkNet ? nets.faceLandmark68TinyNet : nets.faceLandmark68Net;
      },
      enumerable: true,
      configurable: true
    });
    return DetectFaceLandmarksTaskBase2;
  }(ComposableTask)
);
var DetectAllFaceLandmarksTask = (
  /** @class */
  function(_super) {
    __extends(DetectAllFaceLandmarksTask2, _super);
    function DetectAllFaceLandmarksTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFaceLandmarksTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResults, detections, faces, _a2, faceLandmarksByFace;
        var _this = this;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResults = _b.sent();
              detections = parentResults.map(function(res) {
                return res.detection;
              });
              if (!(this.input instanceof wt))
                return [3, 3];
              return [4, extractFaceTensors(this.input, detections)];
            case 2:
              _a2 = _b.sent();
              return [3, 5];
            case 3:
              return [4, extractFaces(this.input, detections)];
            case 4:
              _a2 = _b.sent();
              _b.label = 5;
            case 5:
              faces = _a2;
              return [4, Promise.all(faces.map(function(face) {
                return _this.landmarkNet.detectLandmarks(face);
              }))];
            case 6:
              faceLandmarksByFace = _b.sent();
              faces.forEach(function(f2) {
                return f2 instanceof wt && f2.dispose();
              });
              return [2, parentResults.map(function(parentResult, i2) {
                return extendWithFaceLandmarks(parentResult, faceLandmarksByFace[i2]);
              })];
          }
        });
      });
    };
    DetectAllFaceLandmarksTask2.prototype.withFaceExpressions = function() {
      return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    DetectAllFaceLandmarksTask2.prototype.withAgeAndGender = function() {
      return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    DetectAllFaceLandmarksTask2.prototype.withFaceDescriptors = function() {
      return new ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return DetectAllFaceLandmarksTask2;
  }(DetectFaceLandmarksTaskBase)
);
var DetectSingleFaceLandmarksTask = (
  /** @class */
  function(_super) {
    __extends(DetectSingleFaceLandmarksTask2, _super);
    function DetectSingleFaceLandmarksTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceLandmarksTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var parentResult, detection, faces, _a2, landmarks;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.parentTask];
            case 1:
              parentResult = _b.sent();
              if (!parentResult) {
                return [
                  2
                  /*return*/
                ];
              }
              detection = parentResult.detection;
              if (!(this.input instanceof wt))
                return [3, 3];
              return [4, extractFaceTensors(this.input, [detection])];
            case 2:
              _a2 = _b.sent();
              return [3, 5];
            case 3:
              return [4, extractFaces(this.input, [detection])];
            case 4:
              _a2 = _b.sent();
              _b.label = 5;
            case 5:
              faces = _a2;
              return [4, this.landmarkNet.detectLandmarks(faces[0])];
            case 6:
              landmarks = _b.sent();
              faces.forEach(function(f2) {
                return f2 instanceof wt && f2.dispose();
              });
              return [2, extendWithFaceLandmarks(parentResult, landmarks)];
          }
        });
      });
    };
    DetectSingleFaceLandmarksTask2.prototype.withFaceExpressions = function() {
      return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    DetectSingleFaceLandmarksTask2.prototype.withAgeAndGender = function() {
      return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    DetectSingleFaceLandmarksTask2.prototype.withFaceDescriptor = function() {
      return new ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return DetectSingleFaceLandmarksTask2;
  }(DetectFaceLandmarksTaskBase)
);

// node_modules/face-api.js/build/es6/globalApi/DetectFacesTasks.js
var DetectFacesTaskBase = (
  /** @class */
  function(_super) {
    __extends(DetectFacesTaskBase2, _super);
    function DetectFacesTaskBase2(input, options) {
      if (options === void 0) {
        options = new SsdMobilenetv1Options();
      }
      var _this = _super.call(this) || this;
      _this.input = input;
      _this.options = options;
      return _this;
    }
    return DetectFacesTaskBase2;
  }(ComposableTask)
);
var DetectAllFacesTask = (
  /** @class */
  function(_super) {
    __extends(DetectAllFacesTask2, _super);
    function DetectAllFacesTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFacesTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _a2, input, options, faceDetectionFunction;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a2 = this, input = _a2.input, options = _a2.options;
              if (!(options instanceof MtcnnOptions))
                return [3, 2];
              return [4, nets.mtcnn.forward(input, options)];
            case 1:
              return [2, _b.sent().map(function(result) {
                return result.detection;
              })];
            case 2:
              faceDetectionFunction = options instanceof TinyFaceDetectorOptions ? function(input2) {
                return nets.tinyFaceDetector.locateFaces(input2, options);
              } : options instanceof SsdMobilenetv1Options ? function(input2) {
                return nets.ssdMobilenetv1.locateFaces(input2, options);
              } : options instanceof TinyYolov2Options ? function(input2) {
                return nets.tinyYolov2.locateFaces(input2, options);
              } : null;
              if (!faceDetectionFunction) {
                throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");
              }
              return [2, faceDetectionFunction(input)];
          }
        });
      });
    };
    DetectAllFacesTask2.prototype.runAndExtendWithFaceDetections = function() {
      var _this = this;
      return new Promise(function(res) {
        return __awaiter(_this, void 0, void 0, function() {
          var detections;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, this.run()];
              case 1:
                detections = _a2.sent();
                return [2, res(detections.map(function(detection) {
                  return extendWithFaceDetection({}, detection);
                }))];
            }
          });
        });
      });
    };
    DetectAllFacesTask2.prototype.withFaceLandmarks = function(useTinyLandmarkNet) {
      if (useTinyLandmarkNet === void 0) {
        useTinyLandmarkNet = false;
      }
      return new DetectAllFaceLandmarksTask(this.runAndExtendWithFaceDetections(), this.input, useTinyLandmarkNet);
    };
    DetectAllFacesTask2.prototype.withFaceExpressions = function() {
      return new PredictAllFaceExpressionsTask(this.runAndExtendWithFaceDetections(), this.input);
    };
    DetectAllFacesTask2.prototype.withAgeAndGender = function() {
      return new PredictAllAgeAndGenderTask(this.runAndExtendWithFaceDetections(), this.input);
    };
    return DetectAllFacesTask2;
  }(DetectFacesTaskBase)
);
var DetectSingleFaceTask = (
  /** @class */
  function(_super) {
    __extends(DetectSingleFaceTask2, _super);
    function DetectSingleFaceTask2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceTask2.prototype.run = function() {
      return __awaiter(this, void 0, void 0, function() {
        var faceDetections, faceDetectionWithHighestScore;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, new DetectAllFacesTask(this.input, this.options)];
            case 1:
              faceDetections = _a2.sent();
              faceDetectionWithHighestScore = faceDetections[0];
              faceDetections.forEach(function(faceDetection) {
                if (faceDetection.score > faceDetectionWithHighestScore.score) {
                  faceDetectionWithHighestScore = faceDetection;
                }
              });
              return [2, faceDetectionWithHighestScore];
          }
        });
      });
    };
    DetectSingleFaceTask2.prototype.runAndExtendWithFaceDetection = function() {
      var _this = this;
      return new Promise(function(res) {
        return __awaiter(_this, void 0, void 0, function() {
          var detection;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, this.run()];
              case 1:
                detection = _a2.sent();
                return [2, res(detection ? extendWithFaceDetection({}, detection) : void 0)];
            }
          });
        });
      });
    };
    DetectSingleFaceTask2.prototype.withFaceLandmarks = function(useTinyLandmarkNet) {
      if (useTinyLandmarkNet === void 0) {
        useTinyLandmarkNet = false;
      }
      return new DetectSingleFaceLandmarksTask(this.runAndExtendWithFaceDetection(), this.input, useTinyLandmarkNet);
    };
    DetectSingleFaceTask2.prototype.withFaceExpressions = function() {
      return new PredictSingleFaceExpressionsTask(this.runAndExtendWithFaceDetection(), this.input);
    };
    DetectSingleFaceTask2.prototype.withAgeAndGender = function() {
      return new PredictSingleAgeAndGenderTask(this.runAndExtendWithFaceDetection(), this.input);
    };
    return DetectSingleFaceTask2;
  }(DetectFacesTaskBase)
);

// node_modules/face-api.js/build/es6/globalApi/detectFaces.js
function detectSingleFace(input, options) {
  if (options === void 0) {
    options = new SsdMobilenetv1Options();
  }
  return new DetectSingleFaceTask(input, options);
}
function detectAllFaces(input, options) {
  if (options === void 0) {
    options = new SsdMobilenetv1Options();
  }
  return new DetectAllFacesTask(input, options);
}

// node_modules/face-api.js/build/es6/globalApi/allFaces.js
function allFacesSsdMobilenetv1(input, minConfidence) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          console.warn("allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead");
          return [4, detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? { minConfidence } : {})).withFaceLandmarks().withFaceDescriptors()];
        case 1:
          return [2, _a2.sent()];
      }
    });
  });
}
function allFacesTinyYolov2(input, forwardParams) {
  if (forwardParams === void 0) {
    forwardParams = {};
  }
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          console.warn("allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead");
          return [4, detectAllFaces(input, new TinyYolov2Options(forwardParams)).withFaceLandmarks().withFaceDescriptors()];
        case 1:
          return [2, _a2.sent()];
      }
    });
  });
}
function allFacesMtcnn(input, forwardParams) {
  if (forwardParams === void 0) {
    forwardParams = {};
  }
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          console.warn("allFacesMtcnn is deprecated and will be removed soon, use the high level api instead");
          return [4, detectAllFaces(input, new MtcnnOptions(forwardParams)).withFaceLandmarks().withFaceDescriptors()];
        case 1:
          return [2, _a2.sent()];
      }
    });
  });
}
var allFaces = allFacesSsdMobilenetv1;

// node_modules/face-api.js/build/es6/euclideanDistance.js
function euclideanDistance(arr1, arr2) {
  if (arr1.length !== arr2.length)
    throw new Error("euclideanDistance: arr1.length !== arr2.length");
  var desc1 = Array.from(arr1);
  var desc2 = Array.from(arr2);
  return Math.sqrt(desc1.map(function(val, i2) {
    return val - desc2[i2];
  }).reduce(function(res, diff) {
    return res + Math.pow(diff, 2);
  }, 0));
}

// node_modules/face-api.js/build/es6/globalApi/FaceMatcher.js
var FaceMatcher = (
  /** @class */
  function() {
    function FaceMatcher2(inputs, distanceThreshold) {
      if (distanceThreshold === void 0) {
        distanceThreshold = 0.6;
      }
      this._distanceThreshold = distanceThreshold;
      var inputArray = Array.isArray(inputs) ? inputs : [inputs];
      if (!inputArray.length) {
        throw new Error("FaceRecognizer.constructor - expected atleast one input");
      }
      var count = 1;
      var createUniqueLabel = function() {
        return "person " + count++;
      };
      this._labeledDescriptors = inputArray.map(function(desc) {
        if (desc instanceof LabeledFaceDescriptors) {
          return desc;
        }
        if (desc instanceof Float32Array) {
          return new LabeledFaceDescriptors(createUniqueLabel(), [desc]);
        }
        if (desc.descriptor && desc.descriptor instanceof Float32Array) {
          return new LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor]);
        }
        throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
      });
    }
    Object.defineProperty(FaceMatcher2.prototype, "labeledDescriptors", {
      get: function() {
        return this._labeledDescriptors;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FaceMatcher2.prototype, "distanceThreshold", {
      get: function() {
        return this._distanceThreshold;
      },
      enumerable: true,
      configurable: true
    });
    FaceMatcher2.prototype.computeMeanDistance = function(queryDescriptor, descriptors) {
      return descriptors.map(function(d2) {
        return euclideanDistance(d2, queryDescriptor);
      }).reduce(function(d1, d2) {
        return d1 + d2;
      }, 0) / (descriptors.length || 1);
    };
    FaceMatcher2.prototype.matchDescriptor = function(queryDescriptor) {
      var _this = this;
      return this.labeledDescriptors.map(function(_a2) {
        var descriptors = _a2.descriptors, label = _a2.label;
        return new FaceMatch(label, _this.computeMeanDistance(queryDescriptor, descriptors));
      }).reduce(function(best, curr) {
        return best.distance < curr.distance ? best : curr;
      });
    };
    FaceMatcher2.prototype.findBestMatch = function(queryDescriptor) {
      var bestMatch = this.matchDescriptor(queryDescriptor);
      return bestMatch.distance < this.distanceThreshold ? bestMatch : new FaceMatch("unknown", bestMatch.distance);
    };
    FaceMatcher2.prototype.toJSON = function() {
      return {
        distanceThreshold: this.distanceThreshold,
        labeledDescriptors: this.labeledDescriptors.map(function(ld2) {
          return ld2.toJSON();
        })
      };
    };
    FaceMatcher2.fromJSON = function(json) {
      var labeledDescriptors = json.labeledDescriptors.map(function(ld2) {
        return LabeledFaceDescriptors.fromJSON(ld2);
      });
      return new FaceMatcher2(labeledDescriptors, json.distanceThreshold);
    };
    return FaceMatcher2;
  }()
);

// node_modules/face-api.js/build/es6/mtcnn/index.js
function createMtcnn(weights) {
  var net = new Mtcnn();
  net.extractWeights(weights);
  return net;
}

// node_modules/face-api.js/build/es6/tinyFaceDetector/index.js
function createTinyFaceDetector(weights) {
  var net = new TinyFaceDetector();
  net.extractWeights(weights);
  return net;
}

// node_modules/face-api.js/build/es6/resizeResults.js
function resizeResults(results, dimensions) {
  var _a2 = new Dimensions(dimensions.width, dimensions.height), width = _a2.width, height = _a2.height;
  if (width <= 0 || height <= 0) {
    throw new Error("resizeResults - invalid dimensions: " + JSON.stringify({ width, height }));
  }
  if (Array.isArray(results)) {
    return results.map(function(obj) {
      return resizeResults(obj, { width, height });
    });
  }
  if (isWithFaceLandmarks(results)) {
    var resizedDetection = results.detection.forSize(width, height);
    var resizedLandmarks = results.unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height);
    return extendWithFaceLandmarks(extendWithFaceDetection(results, resizedDetection), resizedLandmarks);
  }
  if (isWithFaceDetection(results)) {
    return extendWithFaceDetection(results, results.detection.forSize(width, height));
  }
  if (results instanceof FaceLandmarks || results instanceof FaceDetection) {
    return results.forSize(width, height);
  }
  return results;
}
export {
  AgeGenderNet,
  BoundingBox,
  Box,
  ComposableTask,
  ComputeAllFaceDescriptorsTask,
  ComputeFaceDescriptorsTaskBase,
  ComputeSingleFaceDescriptorTask,
  DetectAllFaceLandmarksTask,
  DetectAllFacesTask,
  DetectFaceLandmarksTaskBase,
  DetectFacesTaskBase,
  DetectSingleFaceLandmarksTask,
  DetectSingleFaceTask,
  Dimensions,
  FACE_EXPRESSION_LABELS,
  FaceDetection,
  FaceDetectionNet,
  FaceExpressionNet,
  FaceExpressions,
  FaceLandmark68Net,
  FaceLandmark68TinyNet,
  FaceLandmarkNet,
  FaceLandmarks,
  FaceLandmarks5,
  FaceLandmarks68,
  FaceMatch,
  FaceMatcher,
  FaceRecognitionNet,
  Gender,
  LabeledBox,
  LabeledFaceDescriptors,
  Mtcnn,
  MtcnnOptions,
  NetInput,
  NeuralNetwork,
  ObjectDetection,
  Point,
  PredictedBox,
  Rect,
  SsdMobilenetv1,
  SsdMobilenetv1Options,
  TinyFaceDetector,
  TinyFaceDetectorOptions,
  TinyYolov2,
  TinyYolov2Options,
  TinyYolov2SizeType,
  allFaces,
  allFacesMtcnn,
  allFacesSsdMobilenetv1,
  allFacesTinyYolov2,
  awaitMediaLoaded,
  bufferToImage,
  computeFaceDescriptor,
  createCanvas,
  createCanvasFromMedia,
  createFaceDetectionNet,
  createFaceRecognitionNet,
  createMtcnn,
  createSsdMobilenetv1,
  createTinyFaceDetector,
  createTinyYolov2,
  detectAllFaces,
  detectFaceLandmarks,
  detectFaceLandmarksTiny,
  detectLandmarks,
  detectSingleFace,
  draw_exports as draw,
  env,
  euclideanDistance,
  extendWithAge,
  extendWithFaceDescriptor,
  extendWithFaceDetection,
  extendWithFaceExpressions,
  extendWithFaceLandmarks,
  extendWithGender,
  extractFaceTensors,
  extractFaces,
  fetchImage,
  fetchJson,
  fetchNetWeights,
  fetchOrThrow,
  getContext2dOrThrow,
  getMediaDimensions,
  imageTensorToCanvas,
  imageToSquare,
  inverseSigmoid,
  iou,
  isMediaElement,
  isMediaLoaded,
  isWithAge,
  isWithFaceDetection,
  isWithFaceExpressions,
  isWithFaceLandmarks,
  isWithGender,
  loadAgeGenderModel,
  loadFaceDetectionModel,
  loadFaceExpressionModel,
  loadFaceLandmarkModel,
  loadFaceLandmarkTinyModel,
  loadFaceRecognitionModel,
  loadMtcnnModel,
  loadSsdMobilenetv1Model,
  loadTinyFaceDetectorModel,
  loadTinyYolov2Model,
  loadWeightMap,
  locateFaces,
  matchDimensions,
  minBbox,
  mtcnn,
  nets,
  nonMaxSuppression,
  normalize,
  padToSquare,
  predictAgeAndGender,
  recognizeFaceExpressions,
  resizeResults,
  resolveInput,
  shuffleArray,
  sigmoid,
  ssdMobilenetv1,
  tf_core_esm_exports as tf,
  tinyFaceDetector,
  tinyYolov2,
  toNetInput,
  utils_exports as utils,
  validateConfig
};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/tf-core.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=face-api__js.js.map
