/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/geometrie/cubeData.ts":
/*!****************************************!*\
  !*** ./src/core/geometrie/cubeData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let vertices = new Float32Array([
    1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0,
    1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0,
    1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0,
    -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
    1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0 //
]);
let colors = new Float32Array([
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0
]);
let normals = new Float32Array([
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0 // v4-v7-v6-v5 back
]);
let indices = new Uint8Array([
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11,
    12, 13, 14, 12, 14, 15,
    16, 17, 18, 16, 18, 19,
    20, 21, 22, 20, 22, 23 // back
]);
let cubeData = {
    vertices,
    colors,
    normals,
    indices
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cubeData);


/***/ }),

/***/ "./src/core/render/Base.ts":
/*!*********************************!*\
  !*** ./src/core/render/Base.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWebGLContext": () => (/* binding */ getWebGLContext)
/* harmony export */ });
let getWebGLContext = (canvas, userConfig) => {
    let defaultConfig = {
        alpha: true,
        antialias: true,
        depth: true,
        failIfMajorPerformanceCaveat: false,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        stencil: false,
    };
    let config = Object.assign(Object.assign({}, defaultConfig), userConfig);
    return canvas.getContext("webgl", config);
};



/***/ }),

/***/ "./src/core/shader/Base.ts":
/*!*********************************!*\
  !*** ./src/core/shader/Base.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initShaders": () => (/* binding */ initShaders),
/* harmony export */   "initVertexBuffers": () => (/* binding */ initVertexBuffers),
/* harmony export */   "getShaderUniforms": () => (/* binding */ getShaderUniforms),
/* harmony export */   "getShaderAttributes": () => (/* binding */ getShaderAttributes)
/* harmony export */ });
// cuon-utils.js (c) 2012 kanda and matsuda
/**
 * Create a program object and make current
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return true, if the program object was created and successfully made current
 */
function initShaders(gl, vshader, fshader) {
    var program = createProgram(gl, vshader, fshader);
    if (!program) {
        console.log('Failed to create program');
        return false;
    }
    gl.useProgram(program);
    gl.program = program;
    return true;
}
/**
 * Create the linked program object
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */
function createProgram(gl, vshader, fshader) {
    // Create shader object
    var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
    var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
    if (!vertexShader || !fragmentShader) {
        return null;
    }
    // Create a program object
    var program = gl.createProgram();
    if (!program) {
        return null;
    }
    // Attach the shader objects
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // Link the program object
    gl.linkProgram(program);
    // Check the result of linking
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        var error = gl.getProgramInfoLog(program);
        console.log('Failed to link program: ' + error);
        gl.deleteProgram(program);
        gl.deleteShader(fragmentShader);
        gl.deleteShader(vertexShader);
        return null;
    }
    return program;
}
/**
 * Create a shader object
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */
function loadShader(gl, type, source) {
    // Create shader object
    var shader = gl.createShader(type);
    if (shader == null) {
        console.log('unable to create shader');
        return null;
    }
    // Set the shader program
    gl.shaderSource(shader, source);
    // Compile the shader
    gl.compileShader(shader);
    // Check the result of compilation
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var error = gl.getShaderInfoLog(shader);
        console.log('Failed to compile shader: ' + error);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
let initVertexBuffers = (gl, cubeData) => {
    // 创建顶点颜色 与 索引 缓冲区
    let indexBuffer = gl.createBuffer();
    if (!initArrayBuffer(gl, cubeData.vertices, 3, gl.FLOAT, 'a_Position')) {
        return -1;
    }
    if (!initArrayBuffer(gl, cubeData.colors, 3, gl.FLOAT, 'a_Color')) {
        return -1;
    }
    if (!initArrayBuffer(gl, cubeData.normals, 3, gl.FLOAT, 'a_Normal')) {
        return -1;
    }
    // 将顶点索引数据写入缓冲区对象
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cubeData.indices, gl.STATIC_DRAW);
    return cubeData.indices.length;
};
let initArrayBuffer = (gl, data, num, type, attribute) => {
    let buffer = gl.createBuffer(); // 创建缓冲区
    // 写入数据到缓冲区
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    // 获取属性位置
    let a_attribute = gl.getAttribLocation(gl.program, attribute);
    // 将缓冲区分配给属性变量
    gl.vertexAttribPointer(a_attribute, num, type, false, 0, 0);
    // 启用该属性
    gl.enableVertexAttribArray(a_attribute);
    return true;
};
let getShaderUniforms = (gl, obj) => {
    Object.keys(obj).forEach((uniformName) => {
        obj[uniformName] = gl.getUniformLocation(gl.program, uniformName);
    });
    return obj;
};
let getShaderAttributes = (gl, arr) => {
};



/***/ }),

/***/ "./src/core/shader/LightShaderCode.ts":
/*!********************************************!*\
  !*** ./src/core/shader/LightShaderCode.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verxtexShader": () => (/* binding */ verxtexShader),
/* harmony export */   "fragmentShader": () => (/* binding */ fragmentShader)
/* harmony export */ });
let verxtexShader = `  
    attribute vec4 a_Position;
    attribute vec4 a_Color;   // 表面基底颜色
    attribute vec4 a_Normal;  // 法向量

    uniform mat4 u_MvpMatrix; // 模型视图投影矩阵
    uniform vec3 u_LightColor; // 光线颜色
    uniform vec3 u_LightDirection; // 归一化的世界坐标(入射光方向) 
    uniform vec3 u_AmbientLight; // 环境光颜色
    uniform mat4 u_NormalMatrix; // 变换法向量矩阵

    varying vec4 v_Color;
    // 顶点着色器        
    void main() {
      // 设置坐标
      gl_Position = u_MvpMatrix * a_Position;
      // 对法向量进行归一化
      vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
      // 计算光线方向和法向量的点积  相当于计算 cos夹角 余弦值
      float nDotL = max(dot(u_LightDirection, normal), 0.0);
      // 计算漫反射光的颜色
      vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;
      // 计算环境光产生的反射光颜色
      vec3 ambient = u_AmbientLight * a_Color.rgb;
      // 设置尺寸 px
      gl_PointSize = 10.0;

      v_Color = vec4(diffuse + ambient, a_Color.a);
    }
`;
let fragmentShader = ` 
    // 声明浮点数精度
    precision mediump float;
    
    varying vec4 v_Color;
    // 片元着色器     
    void main() {
      // 设置颜色
      gl_FragColor = v_Color;
    }
`;



/***/ }),

/***/ "./src/lib/math/TSMath.ts":
/*!********************************!*\
  !*** ./src/lib/math/TSMath.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "vec2": () => (/* binding */ vec2),
/* harmony export */   "vec3": () => (/* binding */ vec3),
/* harmony export */   "vec4": () => (/* binding */ vec4),
/* harmony export */   "mat4": () => (/* binding */ mat4),
/* harmony export */   "quat": () => (/* binding */ quat)
/* harmony export */ });
let EPSILON = 0.0001;
class vec2 {
    constructor(values = null) {
        this.values = new Float32Array(2);
        if (values) {
            this.x = values[0];
            this.y = values[1];
        }
        else {
            this.x = this.y = 0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec2();
        dest.x = this.x;
        dest.y = this.y;
        return dest;
    }
}
class vec3 {
    constructor(values = null) {
        this.values = new Float32Array(3);
        if (values !== null) {
            this.x = values[0];
            this.y = values[1];
            this.z = values[2];
        }
        else {
            this.x = this.y = this.z = 0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        return dest;
    }
    negate(dest = null) {
        if (!dest)
            dest = this;
        dest.x = -this.x;
        dest.y = -this.y;
        dest.z = -this.z;
        return dest;
    }
    equals(vector, threshold = EPSILON) {
        if (Math.abs(this.x - vector.x) > threshold)
            return false;
        if (Math.abs(this.y - vector.y) > threshold)
            return false;
        if (Math.abs(this.z - vector.z) > threshold)
            return false;
        return true;
    }
    get length() {
        return Math.sqrt(this.length2);
    }
    get length2() {
        let x = this.x, y = this.y, z = this.z;
        return (x * x + y * y + z * z);
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    scale(value, dest = null) {
        if (!dest) {
            dest = this;
        }
        else {
            this.copy(dest);
        }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    }
    normalize(dest = null) {
        if (!dest)
            dest = this;
        let length = this.length;
        if (length === 1) {
            return this;
        }
        if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            return dest;
        }
        length = 1.0 / length;
        dest.x *= length;
        dest.y *= length;
        dest.z *= length;
        return dest;
    }
    normalize2() {
        let length = this.length;
        let len = 1.0 / length;
        this.x *= len;
        this.y *= len;
        this.z *= len;
        return length;
    }
    static multiplyScalar(vector, value, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    }
    static cross(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        dest.x = y * z2 - z * y2;
        dest.y = z * x2 - x * z2;
        dest.z = x * y2 - y * x2;
        return dest;
    }
    static dot(vector, vector2) {
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        return (x * x2 + y * y2 + z * z2);
    }
    static sum(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = vector.x + vector2.x;
        dest.y = vector.y + vector2.y;
        dest.z = vector.z + vector2.z;
        return dest;
    }
    static difference(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = vector.x - vector2.x;
        dest.y = vector.y - vector2.y;
        dest.z = vector.z - vector2.z;
        return dest;
    }
}
vec3.up = new vec3([0, 1, 0]);
vec3.down = new vec3([0, -1, 0]);
vec3.right = new vec3([1, 0, 0]);
vec3.left = new vec3([-1, 0, 0]);
vec3.forward = new vec3([0, 0, 1]);
vec3.backward = new vec3([0, 0, -1]);
vec3.zero = new vec3([0, 0, 0]);
vec3.v0 = new vec3([0, 0, 0]);
vec3.v1 = new vec3([0, 0, 0]);
vec3.v2 = new vec3([0, 0, 0]);
class vec4 {
    constructor(values = null) {
        this.values = new Float32Array(4);
        if (values) {
            this.x = values[0];
            this.y = values[1];
            this.z = values[2];
            this.w = values[3];
        }
        else {
            this.x = this.y = this.z = this.w = 0.0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    get w() {
        return this.values[3];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    set w(value) {
        this.values[3] = value;
    }
    get vec3() {
        return new vec3([this.x, this.y, this.z]);
    }
    get r() {
        return this.values[0];
    }
    get g() {
        return this.values[1];
    }
    get b() {
        return this.values[2];
    }
    get a() {
        return this.values[3];
    }
    set r(value) {
        this.values[0] = value;
    }
    set g(value) {
        this.values[1] = value;
    }
    set b(value) {
        this.values[2] = value;
    }
    set a(value) {
        this.values[3] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec4();
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        dest.w = this.w;
        return dest;
    }
    equals(vector, threshold = EPSILON) {
        if (Math.abs(this.x - vector.x) > threshold)
            return false;
        if (Math.abs(this.y - vector.y) > threshold)
            return false;
        if (Math.abs(this.z - vector.z) > threshold)
            return false;
        if (Math.abs(this.w - vector.w) > threshold)
            return false;
        return true;
    }
}
vec4.red = new vec4([1.0, 0.0, 0.0, 1.0]);
vec4.green = new vec4([0.0, 1.0, 0.0, 1.0]);
vec4.blue = new vec4([0.0, 0.0, 1.0, 1.0]);
vec4.black = new vec4([0, 0, 0, 0]);
vec4.v0 = new vec4();
vec4.v1 = new vec4();
vec4.v2 = new vec4();
class mat4 {
    constructor(values = null) {
        this.values = new Float32Array(16);
        if (values) {
            this.set(values);
        }
        else {
            this.setIdentity();
        }
    }
    set(values) {
        for (let i = 0; i < 16; i++) {
            this.values[i] = values[i];
        }
        return this;
    }
    at(index) {
        return this.values[index];
    }
    copy(dest = null) {
        if (!dest)
            dest = new mat4();
        for (let i = 0; i < 16; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    equals(matrix, threshold = EPSILON) {
        for (let i = 0; i < 16; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold)
                return false;
        }
        return true;
    }
    getRow(index, dest = null) {
        if (dest === null) {
            dest = new vec4();
        }
        dest.x = this.values[index * 4 + 0],
            dest.y = this.values[index * 4 + 1],
            dest.z = this.values[index * 4 + 2],
            dest.w = this.values[index * 4 + 3];
        return dest;
    }
    getColumn(index, dest = null) {
        if (dest === null) {
            dest = new vec4();
        }
        dest.x = this.values[index];
        dest.y = this.values[index + 4];
        dest.z = this.values[index + 8];
        dest.w = this.values[index + 12];
        return dest;
    }
    getPosition(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[12];
        dest.y = this.values[13];
        dest.z = this.values[14];
        return dest;
    }
    getXAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[0];
        dest.y = this.values[1];
        dest.z = this.values[2];
        return dest;
    }
    getYAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[4];
        dest.y = this.values[5];
        dest.z = this.values[6];
        return dest;
    }
    getZAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[8];
        dest.y = this.values[9];
        dest.z = this.values[10];
        return dest;
    }
    getAxis(idx, dest = null) {
        if (idx === 0) {
            return this.getXAxis(dest);
        }
        else if (idx === 1) {
            return this.getYAxis(dest);
        }
        else {
            return this.getZAxis(dest);
        }
    }
    setIdentity() {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 0;
        this.values[5] = 1;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 1;
        this.values[11] = 0;
        this.values[12] = 0;
        this.values[13] = 0;
        this.values[14] = 0;
        this.values[15] = 1;
        return this;
    }
    transpose() {
        let temp01 = this.values[1], temp02 = this.values[2], temp03 = this.values[3], temp12 = this.values[6], temp13 = this.values[7], temp23 = this.values[11];
        this.values[1] = this.values[4];
        this.values[2] = this.values[8];
        this.values[3] = this.values[12];
        this.values[4] = temp01;
        this.values[6] = this.values[9];
        this.values[7] = this.values[13];
        this.values[8] = temp02;
        this.values[9] = temp12;
        this.values[11] = this.values[14];
        this.values[12] = temp03;
        this.values[13] = temp13;
        this.values[14] = temp23;
        return this;
    }
    determinant() {
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3], a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7], a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11], a30 = this.values[12], a31 = this.values[13], a32 = this.values[14], a33 = this.values[15];
        let det00 = a00 * a11 - a01 * a10, det01 = a00 * a12 - a02 * a10, det02 = a00 * a13 - a03 * a10, det03 = a01 * a12 - a02 * a11, det04 = a01 * a13 - a03 * a11, det05 = a02 * a13 - a03 * a12, det06 = a20 * a31 - a21 * a30, det07 = a20 * a32 - a22 * a30, det08 = a20 * a33 - a23 * a30, det09 = a21 * a32 - a22 * a31, det10 = a21 * a33 - a23 * a31, det11 = a22 * a33 - a23 * a32;
        return (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
    }
    inverse(out) {
        this.copy(out);
        let a00 = out.values[0], a01 = out.values[1], a02 = out.values[2], a03 = out.values[3], a10 = out.values[4], a11 = out.values[5], a12 = out.values[6], a13 = out.values[7], a20 = out.values[8], a21 = out.values[9], a22 = out.values[10], a23 = out.values[11], a30 = out.values[12], a31 = out.values[13], a32 = out.values[14], a33 = out.values[15];
        let det00 = a00 * a11 - a01 * a10, det01 = a00 * a12 - a02 * a10, det02 = a00 * a13 - a03 * a10, det03 = a01 * a12 - a02 * a11, det04 = a01 * a13 - a03 * a11, det05 = a02 * a13 - a03 * a12, det06 = a20 * a31 - a21 * a30, det07 = a20 * a32 - a22 * a30, det08 = a20 * a33 - a23 * a30, det09 = a21 * a32 - a22 * a31, det10 = a21 * a33 - a23 * a31, det11 = a22 * a33 - a23 * a32;
        let det = (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
        if (!det)
            return false;
        det = 1.0 / det;
        out.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;
        out.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;
        out.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;
        out.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;
        out.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;
        out.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;
        out.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;
        out.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;
        out.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;
        out.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;
        out.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;
        out.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;
        out.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;
        out.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;
        out.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;
        out.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;
        return true;
    }
    multiply(matrix) {
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3];
        let a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7];
        let a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        let a30 = this.values[12], a31 = this.values[13], a32 = this.values[14], a33 = this.values[15];
        let b0 = matrix.at(0), b1 = matrix.at(1), b2 = matrix.at(2), b3 = matrix.at(3);
        this.values[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(4);
        b1 = matrix.at(5);
        b2 = matrix.at(6);
        b3 = matrix.at(7);
        this.values[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(8);
        b1 = matrix.at(9);
        b2 = matrix.at(10);
        b3 = matrix.at(11);
        this.values[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(12);
        b1 = matrix.at(13);
        b2 = matrix.at(14);
        b3 = matrix.at(15);
        this.values[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return this;
    }
    multiplyVec3(vector, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12];
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13];
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14];
        return dest;
    }
    multiplyVec4(vector, dest = null) {
        if (!dest)
            dest = new vec4();
        let x = vector.x, y = vector.y, z = vector.z, w = vector.w;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;
        dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;
        return dest;
    }
    // 矩阵变换
    translate(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;
        this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;
        this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;
        this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;
        return this;
    }
    scale(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[0] *= x;
        this.values[1] *= x;
        this.values[2] *= x;
        this.values[3] *= x;
        this.values[4] *= y;
        this.values[5] *= y;
        this.values[6] *= y;
        this.values[7] *= y;
        this.values[8] *= z;
        this.values[9] *= z;
        this.values[10] *= z;
        this.values[11] *= z;
        return this;
    }
    rotate(angle, axis) {
        let x = axis.x, y = axis.y, z = axis.z;
        let length = Math.sqrt(x * x + y * y + z * z);
        if (!length)
            return null;
        if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
        }
        let s = Math.sin(angle);
        let c = Math.cos(angle);
        let t = 1.0 - c;
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3], a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7], a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        let b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
        this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;
        this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;
        this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;
        this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;
        this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;
        this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;
        this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;
        this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;
        this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;
        return this;
    }
    // 视矩阵和投影矩阵
    static frustum(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new mat4([
            (near * 2) / rl,
            0,
            0,
            0,
            0,
            (near * 2) / tb,
            0,
            0,
            (right + left) / rl,
            (top + bottom) / tb,
            -(far + near) / fn,
            -1,
            0,
            0,
            -(far * near * 2) / fn,
            0
        ]);
    }
    static perspective(fov, aspect, near, far) {
        let top = near * Math.tan(fov * 0.5), right = top * aspect;
        return mat4.frustum(-right, right, -top, top, near, far);
    }
    static orthographic(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new mat4([
            2 / rl,
            0,
            0,
            0,
            0,
            2 / tb,
            0,
            0,
            0,
            0,
            -2 / fn,
            0,
            -(left + right) / rl,
            -(top + bottom) / tb,
            -(far + near) / fn,
            1
        ]);
    }
    static lookAt(position, target, up = vec3.up) {
        if (position.equals(target)) {
            return this.identity;
        }
        let z = vec3.difference(position, target).normalize();
        let x = vec3.cross(up, z).normalize();
        let y = vec3.cross(z, x).normalize();
        return new mat4([
            x.x,
            y.x,
            z.x,
            0,
            x.y,
            y.y,
            z.y,
            0,
            x.z,
            y.z,
            z.z,
            0,
            -vec3.dot(x, position),
            -vec3.dot(y, position),
            -vec3.dot(z, position),
            1
        ]);
    }
    static product(m1, m2, result = null) {
        let a00 = m1.at(0), a01 = m1.at(1), a02 = m1.at(2), a03 = m1.at(3), a10 = m1.at(4), a11 = m1.at(5), a12 = m1.at(6), a13 = m1.at(7), a20 = m1.at(8), a21 = m1.at(9), a22 = m1.at(10), a23 = m1.at(11), a30 = m1.at(12), a31 = m1.at(13), a32 = m1.at(14), a33 = m1.at(15);
        let b00 = m2.at(0), b01 = m2.at(1), b02 = m2.at(2), b03 = m2.at(3), b10 = m2.at(4), b11 = m2.at(5), b12 = m2.at(6), b13 = m2.at(7), b20 = m2.at(8), b21 = m2.at(9), b22 = m2.at(10), b23 = m2.at(11), b30 = m2.at(12), b31 = m2.at(13), b32 = m2.at(14), b33 = m2.at(15);
        if (result) {
            result.set([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
            return result;
        }
        else {
            return new mat4([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
        }
    }
}
mat4.identity = new mat4().setIdentity();
mat4.m0 = new mat4();
mat4.m1 = new mat4();
class quat {
    constructor() {
        this.values = new Float32Array(4);
        this.setIdentity();
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    get w() {
        return this.values[3];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    set w(value) {
        this.values[3] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset() {
        for (let i = 0; i < 4; i++) {
            this.values[i] = 0;
        }
    }
    copy(dest = null) {
        if (!dest)
            dest = new quat();
        for (let i = 0; i < 4; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    roll() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.atan2(2.0 * (x * y + w * z), w * w + x * x - y * y - z * z);
    }
    pitch() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.atan2(2.0 * (y * z + w * x), w * w - x * x - y * y + z * z);
    }
    yaw() {
        return Math.asin(2.0 * (this.x * this.z - this.w * this.y));
    }
    equals(vector, threshold = EPSILON) {
        for (let i = 0; i < 4; i++) {
            if (Math.abs(this.values[i] - vector.at(i)) > threshold)
                return false;
        }
        return true;
    }
    setIdentity() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 1;
        return this;
    }
    calculateW() {
        let x = this.x, y = this.y, z = this.z;
        this.w = -(Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z)));
        return this;
    }
    static dot(q1, q2) {
        return q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
    }
    inverse() {
        let dot = quat.dot(this, this);
        if (!dot) {
            this.setIdentity();
            return this;
        }
        let invDot = dot ? 1.0 / dot : 0;
        this.x *= -invDot;
        this.y *= -invDot;
        this.z *= -invDot;
        this.w *= invDot;
        return this;
    }
    conjugate() {
        this.values[0] *= -1;
        this.values[1] *= -1;
        this.values[2] *= -1;
        return this;
    }
    length() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.sqrt(x * x + y * y + z * z + w * w);
    }
    normalize(dest = null) {
        if (!dest)
            dest = this;
        let x = this.x, y = this.y, z = this.z, w = this.w;
        let length = Math.sqrt(x * x + y * y + z * z + w * w);
        if (!length) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            dest.w = 0;
            return dest;
        }
        length = 1 / length;
        dest.x = x * length;
        dest.y = y * length;
        dest.z = z * length;
        dest.w = w * length;
        return dest;
    }
    add(other) {
        for (let i = 0; i < 4; i++) {
            this.values[i] += other.at(i);
        }
        return this;
    }
    // 这个是左到右结合 this.cross.other
    multiply(other) {
        let q1x = this.values[0], q1y = this.values[1], q1z = this.values[2], q1w = this.values[3];
        let q2x = other.x, q2y = other.y, q2z = other.z, q2w = other.w;
        this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        this.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        this.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return this;
    }
    multiplyVec3(vector, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        let qx = this.x, qy = this.y, qz = this.z, qw = this.w;
        //
        let ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
        dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return dest;
    }
    toMat4(dest = null) {
        if (!dest)
            dest = new mat4();
        let x = this.x, y = this.y, z = this.z, w = this.w, x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2;
        dest.set([
            1 - (yy + zz),
            xy + wz,
            xz - wy,
            0,
            (xy - wz),
            (1 - (xx + zz)),
            (yz + wx),
            0,
            xz + wy,
            yz - wx,
            1 - (xx + yy),
            0,
            0,
            0,
            0,
            1
        ]);
        return dest;
    }
    static sum(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        dest.x = q1.x + q2.x;
        dest.y = q1.y + q2.y;
        dest.z = q1.z + q2.z;
        dest.w = q1.w + q2.w;
        return dest;
    }
    static product(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        let q1x = q1.x, q1y = q1.y, q1z = q1.z, q1w = q1.w, q2x = q2.x, q2y = q2.y, q2z = q2.z, q2w = q2.w;
        dest.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        dest.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        dest.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        dest.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return dest;
    }
    static cross(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        let q1x = q1.x, q1y = q1.y, q1z = q1.z, q1w = q1.w, q2x = q2.x, q2y = q2.y, q2z = q2.z, q2w = q2.w;
        dest.x = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
        dest.y = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        dest.z = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
        dest.w = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
        return dest;
    }
    static shortMix(q1, q2, time, dest = null) {
        if (!dest)
            dest = new quat();
        if (time <= 0.0) {
            q1.copy(q1);
            return dest;
        }
        else if (time >= 1.0) {
            q2.copy(dest);
            return dest;
        }
        let cos = quat.dot(q1, q2), q2a = q2.copy();
        if (cos < 0.0) {
            q2a.inverse();
            cos = -cos;
        }
        let k0, k1;
        if (cos > 0.9999) {
            k0 = 1 - time;
            k1 = 0 + time;
        }
        else {
            let sin = Math.sqrt(1 - cos * cos);
            let angle = Math.atan2(sin, cos);
            let oneOverSin = 1 / sin;
            k0 = Math.sin((1 - time) * angle) * oneOverSin;
            k1 = Math.sin((0 + time) * angle) * oneOverSin;
        }
        dest.x = k0 * q1.x + k1 * q2a.x;
        dest.y = k0 * q1.y + k1 * q2a.y;
        dest.z = k0 * q1.z + k1 * q2a.z;
        dest.w = k0 * q1.w + k1 * q2a.w;
        return dest;
    }
    static mix(q1, q2, time, dest = null) {
        if (!dest)
            dest = new quat();
        let cosHalfTheta = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        if (Math.abs(cosHalfTheta) >= 1.0) {
            q1.copy(dest);
            return dest;
        }
        let halfTheta = Math.acos(cosHalfTheta), sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
        if (Math.abs(sinHalfTheta) < 0.001) {
            dest.x = q1.x * 0.5 + q2.x * 0.5;
            dest.y = q1.y * 0.5 + q2.y * 0.5;
            dest.z = q1.z * 0.5 + q2.z * 0.5;
            dest.w = q1.w * 0.5 + q2.w * 0.5;
            return dest;
        }
        let ratioA = Math.sin((1 - time) * halfTheta) / sinHalfTheta, ratioB = Math.sin(time * halfTheta) / sinHalfTheta;
        dest.x = q1.x * ratioA + q2.x * ratioB;
        dest.y = q1.y * ratioA + q2.y * ratioB;
        dest.z = q1.z * ratioA + q2.z * ratioB;
        dest.w = q1.w * ratioA + q2.w * ratioB;
        return dest;
    }
    static fromAxis(axis, angle, dest = null) {
        if (!dest)
            dest = new quat();
        angle *= 0.5;
        let sin = Math.sin(angle);
        dest.x = axis.x * sin;
        dest.y = axis.y * sin;
        dest.z = axis.z * sin;
        dest.w = Math.cos(angle);
        return dest;
    }
}
quat.identity = new quat().setIdentity();
quat.q0 = new quat();
quat.q1 = new quat();
quat.q2 = new quat();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_shader_LightShaderCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/shader/LightShaderCode */ "./src/core/shader/LightShaderCode.ts");
/* harmony import */ var _core_geometrie_cubeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/geometrie/cubeData */ "./src/core/geometrie/cubeData.ts");
/* harmony import */ var _core_shader_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/shader/Base */ "./src/core/shader/Base.ts");
/* harmony import */ var _core_render_Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/render/Base */ "./src/core/render/Base.ts");
/* harmony import */ var _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/math/TSMath */ "./src/lib/math/TSMath.ts");





let mian = () => {
    let canvas = document.getElementById("sanke");
    let gl = (0,_core_render_Base__WEBPACK_IMPORTED_MODULE_3__.getWebGLContext)(canvas);
    if (!(0,_core_shader_Base__WEBPACK_IMPORTED_MODULE_2__.initShaders)(gl, _core_shader_LightShaderCode__WEBPACK_IMPORTED_MODULE_0__.verxtexShader, _core_shader_LightShaderCode__WEBPACK_IMPORTED_MODULE_0__.fragmentShader)) {
        console.log("Failure to init shaders");
    }
    gl.clearColor(0, 0, 0, 1);
    gl.enable(gl.DEPTH_TEST);
    let n = (0,_core_shader_Base__WEBPACK_IMPORTED_MODULE_2__.initVertexBuffers)(gl, _core_geometrie_cubeData__WEBPACK_IMPORTED_MODULE_1__.default);
    let lightShaderUniformObj = { 'u_LightColor': null, 'u_LightDirection': null, 'u_AmbientLight': null, 'u_NormalMatrix': null, 'u_MvpMatrix': null };
    let uniformObj = (0,_core_shader_Base__WEBPACK_IMPORTED_MODULE_2__.getShaderUniforms)(gl, lightShaderUniformObj);
    // 设置光线颜色
    gl.uniform3f(uniformObj.u_LightColor, 1.0, 1.0, 1.0); // 设置光线颜色为白光
    // 设置光线方向
    let LightDirection = new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.vec3([0.5, 3.0, 4.0]); // 设置光线方向 世界坐标系下
    LightDirection.normalize(); // 归一化
    gl.uniform3fv(uniformObj.u_LightDirection, LightDirection.values);
    // 环境光
    gl.uniform3f(uniformObj.u_AmbientLight, 0.2, 0.2, 0.2);
    // 设置法向量变换矩阵 
    let normalMatrix = new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    let modelMatrix = new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]); // 模型矩阵
    modelMatrix.translate(new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.vec3([0, 0.5, 0])); //y轴平移
    modelMatrix.rotate(0, new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.vec3([0, 0, 1])); //绕z轴旋转
    // 设置模型视图投影矩阵
    let mvpMatrix = new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.mat4();
    // 设置投影矩阵
    let perspectiveMatrix = _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.mat4.perspective(30, canvas.clientWidth / canvas.clientHeight, 1, 100);
    let lookAtMatrix = _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.mat4.lookAt(new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.vec3([1, -1, 3]), new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.vec3([0, 0, 0]), new _lib_math_TSMath__WEBPACK_IMPORTED_MODULE_4__.vec3([0, 1, 0]));
    mvpMatrix.multiply(perspectiveMatrix);
    mvpMatrix.multiply(lookAtMatrix);
    mvpMatrix.multiply(modelMatrix);
    gl.uniformMatrix4fv(uniformObj.u_MvpMatrix, false, mvpMatrix.values);
    normalMatrix.inverse(modelMatrix);
    normalMatrix.transpose();
    gl.uniformMatrix4fv(uniformObj.u_NormalMatrix, false, normalMatrix.values);
    // 清除颜色缓冲区和深度缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // 绘制立方体
    gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
    return;
};
window.onload = mian;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW5rZS8uL3NyYy9jb3JlL2dlb21ldHJpZS9jdWJlRGF0YS50cyIsIndlYnBhY2s6Ly9zYW5rZS8uL3NyYy9jb3JlL3JlbmRlci9CYXNlLnRzIiwid2VicGFjazovL3NhbmtlLy4vc3JjL2NvcmUvc2hhZGVyL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vc2Fua2UvLi9zcmMvY29yZS9zaGFkZXIvTGlnaHRTaGFkZXJDb2RlLnRzIiwid2VicGFjazovL3NhbmtlLy4vc3JjL2xpYi9tYXRoL1RTTWF0aC50cyIsIndlYnBhY2s6Ly9zYW5rZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW5rZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2Fua2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW5rZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NhbmtlLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFFBQVEsR0FBaUIsSUFBSSxZQUFZLENBQUM7SUFDMUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUc7SUFDOUQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7SUFDOUQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDOUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRztJQUNsRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ2xFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBRyxFQUFFO0NBQzFFLENBQUMsQ0FBQztBQUVILElBQUksTUFBTSxHQUFpQixJQUFJLFlBQVksQ0FBQztJQUN4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDbEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUNyQyxDQUFDLENBQUM7QUFFSCxJQUFJLE9BQU8sR0FBaUIsSUFBSSxZQUFZLENBQUM7SUFDekMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzFELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUMxRCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDMUQsQ0FBQyxHQUFH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QUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUcsTUFBWSxFQUFFLE9BQWEsRUFBRSxPQUFvQixJQUFJO1FBRTVFLElBQUssQ0FBQyxJQUFJO1lBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7QUFFZSxPQUFFLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFDN0IsU0FBSSxHQUFHLElBQUksSUFBSSxDQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFDaEMsVUFBSyxHQUFHLElBQUksSUFBSSxDQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBQ2hDLFNBQUksR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBQ2hDLFlBQU8sR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUNsQyxhQUFRLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUVwQyxTQUFJLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFFeEMsT0FBRSxHQUFHLElBQUksSUFBSSxDQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBQzdCLE9BQUUsR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUM3QixPQUFFLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFHakMsTUFBTSxJQUFJO0lBeUZiLFlBQXFCLFNBQTBCLElBQUk7UUF2RjVDLFdBQU0sR0FBRyxJQUFJLFlBQVksQ0FBRSxDQUFDLENBQUUsQ0FBQztRQXlGbEMsSUFBSyxNQUFNLEVBQ1g7WUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztTQUN4QjthQUNEO1lBQ0ksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBakdELElBQVcsQ0FBQztRQUVSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxDQUFDO1FBRVIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLENBQUM7UUFFUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQVcsQ0FBQztRQUVSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBRVgsT0FBTyxJQUFJLElBQUksQ0FBRSxDQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBVyxDQUFDO1FBRVIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLENBQUM7UUFFUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQVcsQ0FBQztRQUVSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxDQUFDO1FBRVIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFnQk0sRUFBRSxDQUFHLEtBQWE7UUFFckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxLQUFLO1FBRVIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0sSUFBSSxDQUFHLE9BQW9CLElBQUk7UUFFbEMsSUFBSyxDQUFDLElBQUk7WUFBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBRyxNQUFZLEVBQUUsU0FBUyxHQUFHLE9BQU87UUFFN0MsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7QUFFTSxRQUFHLEdBQVMsSUFBSSxJQUFJLENBQUUsQ0FBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBRSxDQUFDO0FBQy9DLFVBQUssR0FBUyxJQUFJLElBQUksQ0FBRSxDQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFFLENBQUM7QUFDakQsU0FBSSxHQUFTLElBQUksSUFBSSxDQUFFLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUUsQ0FBQztBQUNoRCxVQUFLLEdBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMs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Q0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sU0FBUztRQUVaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQ3BELE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUNwRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sV0FBVztRQUVkLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQzlGLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUM5RixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFDaEcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFdkcsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWxDLE9BQU8sQ0FBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBRSxDQUFDO0lBQzdHLENBQUM7SUFFTSxPQUFPLENBQUcsR0FBUztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQzFGLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUMxRixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFDNUYsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFbkcsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWxDLElBQUksR0FBRyxHQUFHLENBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUUsQ0FBQztRQUU1RyxJQUFLLENBQUMsR0FBRztZQUNMLE9BQU8sS0FBSyxDQUFDO1FBRWpCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhCLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFckUsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFFBQVEsQ0FBRyxNQUFZO1FBRTFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDbkcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUNuRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3JHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFdkcsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDbkIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQ25CLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUNuQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFN0QsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBRTdELEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3BCLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3BCLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3JCLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUU5RCxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFOUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFlBQVksQ0FBRyxNQUFZLEVBQUUsT0FBb0IsSUFBSTtRQUV4RCxJQUFLLENBQUMsSUFBSTtZQUFHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ2hHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNoRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakcsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFlBQVksQ0FBRyxNQUFZLEVBQUUsT0FBb0IsSUFBSTtRQUV4RCxJQUFLLENBQUMsSUFBSTtZQUFHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUVyRyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTztJQUNBLFNBQVMsQ0FBRyxNQUFZO1FBRTNCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUV6RixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sS0FBSyxDQUFHLE1BQVk7UUFFdkIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFHLEtBQWEsRUFBRSxJQUFVO1FBRXJDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFFaEQsSUFBSyxDQUFDLE1BQU07WUFDUixPQUFPLElBQUksQ0FBQztRQUVoQixJQUFLLE1BQU0sS0FBSyxDQUFDLEVBQ2pCO1lBQ0ksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDcEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNaLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDWixDQUFDLElBQUksTUFBTSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUM5RixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFDOUYsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFckcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRXRELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO0lBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBRyxJQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFB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QUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV2QyxPQUFPLElBQUksSUFBSSxDQUFFO1lBQ2IsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUM7WUFFRCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRSxRQUFRLENBQUU7WUFDeEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRSxRQUFRLENBQUU7WUFDeEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRSxRQUFRLENBQUU7WUFDeEIsQ0FBQztTQUNKLENBQUUsQ0FBQztJQUNSLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFHLEVBQVEsRUFBRSxFQUFRLEVBQUUsU0FBc0IsSUFBSTtRQUVsRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUN0RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDdEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQ3hFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRS9FLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQ3RFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUN0RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFDeEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFL0UsSUFBSyxNQUFNLEVBQ1g7WUFDSSxNQUFNLENBQUMsR0FBRyxDQUFFO2dCQUNSLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUU3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFFN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBRTdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2FBQ2hELENBQUUsQ0FBQztZQUVKLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBRUQ7WUFDSSxPQUFPLElBQUksSUFBSSxDQUFFO2dCQUNiLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUU3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFFN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBRTdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FB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Q0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyRSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QixFQUFFLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNFLGdCQUFnQjtJQUNoQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVwRCxRQUFRO0lBQ1IsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRELE9BQU07QUFDVixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdmVydGljZXMgOkZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoWyAgIC8vIFZlcnRleCBjb29yZGluYXRlc1xuICAgIDEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAgLy8gdjAtdjEtdjItdjMgZnJvbnRcbiAgICAxLjAsIDEuMCwgMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgIC8vIHYwLXYzLXY0LXY1IHJpZ2h0XG4gICAgMS4wLCAxLjAsIDEuMCwgMS4wLCAxLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAxLjAsICAvLyB2MC12NS12Ni12MSB1cFxuICAgIC0xLjAsIDEuMCwgMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgIC8vIHYxLXY2LXY3LXYyIGxlZnRcbiAgICAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgMS4wLCAtMS4wLCAtMS4wLCAxLjAsICAvLyB2Ny12NC12My12MiBkb3duXG4gICAgMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMS4wLCAtMS4wICAgLy9cbl0pO1xuXG5sZXQgY29sb3JzIDpGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFsgICAgIC8vIENvbG9yc1xuICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsICAgICAvLyB2MC12MS12Mi12MyBmcm9udFxuICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsICAgICAvLyB2MC12My12NC12NSByaWdodFxuICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsICAgICAvLyB2MC12NS12Ni12MSB1cFxuICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsICAgICAvLyB2MS12Ni12Ny12MiBsZWZ0XG4gICAgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgICAgIC8vIHY3LXY0LXYzLXYyIGRvd25cbiAgICAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwXG5dKTtcblxubGV0IG5vcm1hbHMgOkZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoWyAgICAvLyBOb3JtYWxcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAgLy8gdjAtdjEtdjItdjMgZnJvbnRcbiAgICAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAgLy8gdjAtdjMtdjQtdjUgcmlnaHRcbiAgICAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAgLy8gdjAtdjUtdjYtdjEgdXBcbiAgICAtMS4wLCAwLjAsIDAuMCwgLTEuMCwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMC4wLCAtMS4wLCAwLjAsIDAuMCwgIC8vIHYxLXY2LXY3LXYyIGxlZnRcbiAgICAwLjAsIC0xLjAsIDAuMCwgMC4wLCAtMS4wLCAwLjAsIDAuMCwgLTEuMCwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgIC8vIHY3LXY0LXYzLXYyIGRvd25cbiAgICAwLjAsIDAuMCwgLTEuMCwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMC4wLCAtMS4wLCAwLjAsIDAuMCwgLTEuMCAgIC8vIHY0LXY3LXY2LXY1IGJhY2tcbl0pO1xuXG5sZXQgaW5kaWNlcyA6VWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KFsgICAgICAgLy8gSW5kaWNlcyBvZiB0aGUgdmVydGljZXNcbiAgICAwLCAxLCAyLCAwLCAyLCAzLCAgICAvLyBmcm9udFxuICAgIDQsIDUsIDYsIDQsIDYsIDcsICAgIC8vIHJpZ2h0XG4gICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgICAgLy8gdXBcbiAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LCAgICAvLyBsZWZ0XG4gICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgICAgLy8gZG93blxuICAgIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMgICAgIC8vIGJhY2tcbl0pO1xuXG5sZXQgY3ViZURhdGEgPSB7XG4gICAgdmVydGljZXMsXG4gICAgY29sb3JzLFxuICAgIG5vcm1hbHMsXG4gICAgaW5kaWNlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZURhdGEiLCJpbXBvcnQgeyBXZWJHTENvbnRleHRDb25maWdUeXBlIH0gZnJvbSBcIi4vQmFzZVR5cGVcIlxubGV0IGdldFdlYkdMQ29udGV4dCA9IChjYW52YXM6IGFueSwgdXNlckNvbmZpZz86IFdlYkdMQ29udGV4dENvbmZpZ1R5cGUpOiBhbnkgPT4ge1xuICAgIGxldCBkZWZhdWx0Q29uZmlnOiBXZWJHTENvbnRleHRDb25maWdUeXBlID0ge1xuICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICBkZXB0aDogdHJ1ZSxcbiAgICAgICAgZmFpbElmTWFqb3JQZXJmb3JtYW5jZUNhdmVhdDogZmFsc2UsXG4gICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogdHJ1ZSxcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSxcbiAgICAgICAgc3RlbmNpbDogZmFsc2UsXG4gICAgfTtcblxuICAgIGxldCBjb25maWc6IFdlYkdMQ29udGV4dENvbmZpZ1R5cGUgPSB7XG4gICAgICAgIC4uLmRlZmF1bHRDb25maWcsXG4gICAgICAgIC4uLnVzZXJDb25maWdcbiAgICB9XG5cbiAgICByZXR1cm4gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiLCBjb25maWcpXG59XG5cbmV4cG9ydCB7IGdldFdlYkdMQ29udGV4dCB9IiwiLy8gY3Vvbi11dGlscy5qcyAoYykgMjAxMiBrYW5kYSBhbmQgbWF0c3VkYVxuLyoqXG4gKiBDcmVhdGUgYSBwcm9ncmFtIG9iamVjdCBhbmQgbWFrZSBjdXJyZW50XG4gKiBAcGFyYW0gZ2wgR0wgY29udGV4dFxuICogQHBhcmFtIHZzaGFkZXIgYSB2ZXJ0ZXggc2hhZGVyIHByb2dyYW0gKHN0cmluZylcbiAqIEBwYXJhbSBmc2hhZGVyIGEgZnJhZ21lbnQgc2hhZGVyIHByb2dyYW0gKHN0cmluZylcbiAqIEByZXR1cm4gdHJ1ZSwgaWYgdGhlIHByb2dyYW0gb2JqZWN0IHdhcyBjcmVhdGVkIGFuZCBzdWNjZXNzZnVsbHkgbWFkZSBjdXJyZW50IFxuICovXG5cbmZ1bmN0aW9uIGluaXRTaGFkZXJzKGdsOiBhbnksIHZzaGFkZXI6IGFueSwgZnNoYWRlcjogYW55KSB7XG4gICAgdmFyIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2c2hhZGVyLCBmc2hhZGVyKTtcbiAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZ3JhbScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBnbC5wcm9ncmFtID0gcHJvZ3JhbTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbGlua2VkIHByb2dyYW0gb2JqZWN0XG4gKiBAcGFyYW0gZ2wgR0wgY29udGV4dFxuICogQHBhcmFtIHZzaGFkZXIgYSB2ZXJ0ZXggc2hhZGVyIHByb2dyYW0gKHN0cmluZylcbiAqIEBwYXJhbSBmc2hhZGVyIGEgZnJhZ21lbnQgc2hhZGVyIHByb2dyYW0gKHN0cmluZylcbiAqIEByZXR1cm4gY3JlYXRlZCBwcm9ncmFtIG9iamVjdCwgb3IgbnVsbCBpZiB0aGUgY3JlYXRpb24gaGFzIGZhaWxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKGdsOiBhbnksIHZzaGFkZXI6IGFueSwgZnNoYWRlcjogYW55KSB7XG4gICAgLy8gQ3JlYXRlIHNoYWRlciBvYmplY3RcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNoYWRlcik7XG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmc2hhZGVyKTtcbiAgICBpZiAoIXZlcnRleFNoYWRlciB8fCAhZnJhZ21lbnRTaGFkZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgcHJvZ3JhbSBvYmplY3RcbiAgICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIHRoZSBzaGFkZXIgb2JqZWN0c1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG5cbiAgICAvLyBMaW5rIHRoZSBwcm9ncmFtIG9iamVjdFxuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgLy8gQ2hlY2sgdGhlIHJlc3VsdCBvZiBsaW5raW5nXG4gICAgdmFyIGxpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xuICAgIGlmICghbGlua2VkKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xuICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxpbmsgcHJvZ3JhbTogJyArIGVycm9yKTtcbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBzaGFkZXIgb2JqZWN0XG4gKiBAcGFyYW0gZ2wgR0wgY29udGV4dFxuICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgb2YgdGhlIHNoYWRlciBvYmplY3QgdG8gYmUgY3JlYXRlZFxuICogQHBhcmFtIHNvdXJjZSBzaGFkZXIgcHJvZ3JhbSAoc3RyaW5nKVxuICogQHJldHVybiBjcmVhdGVkIHNoYWRlciBvYmplY3QsIG9yIG51bGwgaWYgdGhlIGNyZWF0aW9uIGhhcyBmYWlsZWQuXG4gKi9cbmZ1bmN0aW9uIGxvYWRTaGFkZXIoZ2w6IGFueSwgdHlwZTogYW55LCBzb3VyY2U6IGFueSkge1xuICAgIC8vIENyZWF0ZSBzaGFkZXIgb2JqZWN0XG4gICAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgICBpZiAoc2hhZGVyID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VuYWJsZSB0byBjcmVhdGUgc2hhZGVyJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgc2hhZGVyIHByb2dyYW1cbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgc2hhZGVyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgLy8gQ2hlY2sgdGhlIHJlc3VsdCBvZiBjb21waWxhdGlvblxuICAgIHZhciBjb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcbiAgICBpZiAoIWNvbXBpbGVkKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjb21waWxlIHNoYWRlcjogJyArIGVycm9yKTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG59XG5cbmxldCBpbml0VmVydGV4QnVmZmVycyA9IChnbDogYW55LCBjdWJlRGF0YTogYW55KSA9PiB7XG4gICAgLy8g5Yib5bu66aG254K56aKc6ImyIOS4jiDntKLlvJUg57yT5Yay5Yy6XG4gICAgbGV0IGluZGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICBpZiAoIWluaXRBcnJheUJ1ZmZlcihnbCwgY3ViZURhdGEudmVydGljZXMsIDMsIGdsLkZMT0FULCAnYV9Qb3NpdGlvbicpKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBpZiAoIWluaXRBcnJheUJ1ZmZlcihnbCwgY3ViZURhdGEuY29sb3JzLCAzLCBnbC5GTE9BVCwgJ2FfQ29sb3InKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgaWYgKCFpbml0QXJyYXlCdWZmZXIoZ2wsIGN1YmVEYXRhLm5vcm1hbHMsIDMsIGdsLkZMT0FULCAnYV9Ob3JtYWwnKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIC8vIOWwhumhtueCuee0ouW8leaVsOaNruWGmeWFpee8k+WGsuWMuuWvueixoVxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGV4QnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBjdWJlRGF0YS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICByZXR1cm4gY3ViZURhdGEuaW5kaWNlcy5sZW5ndGhcbn1cblxubGV0IGluaXRBcnJheUJ1ZmZlciA9IChnbDogYW55LCBkYXRhOiBhbnksIG51bTogbnVtYmVyLCB0eXBlOiBhbnksIGF0dHJpYnV0ZTogYW55KSA9PiB7XG4gICAgbGV0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpOyAvLyDliJvlu7rnvJPlhrLljLpcbiAgICAvLyDlhpnlhaXmlbDmja7liLDnvJPlhrLljLpcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgIC8vIOiOt+WPluWxnuaAp+S9jee9rlxuICAgIGxldCBhX2F0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKGdsLnByb2dyYW0sIGF0dHJpYnV0ZSk7XG4gICAgLy8g5bCG57yT5Yay5Yy65YiG6YWN57uZ5bGe5oCn5Y+Y6YePXG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX2F0dHJpYnV0ZSwgbnVtLCB0eXBlLCBmYWxzZSwgMCwgMCk7XG4gICAgLy8g5ZCv55So6K+l5bGe5oCnXG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYV9hdHRyaWJ1dGUpO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5sZXQgZ2V0U2hhZGVyVW5pZm9ybXMgPSAoZ2w6IGFueSwgb2JqOiBhbnkpID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKHVuaWZvcm1OYW1lKSA9PiB7XG4gICAgICAgIG9ialt1bmlmb3JtTmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oZ2wucHJvZ3JhbSwgdW5pZm9ybU5hbWUpXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialxufVxuXG5sZXQgZ2V0U2hhZGVyQXR0cmlidXRlcyA9IChnbDogYW55LCBhcnI6IEFycmF5PHN0cmluZz4pID0+IHtcblxufVxuXG5cbmV4cG9ydCB7IGluaXRTaGFkZXJzLCBpbml0VmVydGV4QnVmZmVycywgZ2V0U2hhZGVyVW5pZm9ybXMsIGdldFNoYWRlckF0dHJpYnV0ZXMgfSIsImxldCB2ZXJ4dGV4U2hhZGVyOiBTdHJpbmcgPVxuICAgIGAgIFxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfUG9zaXRpb247XG4gICAgYXR0cmlidXRlIHZlYzQgYV9Db2xvcjsgICAvLyDooajpnaLln7rlupXpopzoibJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX05vcm1hbDsgIC8vIOazleWQkemHj1xuXG4gICAgdW5pZm9ybSBtYXQ0IHVfTXZwTWF0cml4OyAvLyDmqKHlnovop4blm77mipXlvbHnn6npmLVcbiAgICB1bmlmb3JtIHZlYzMgdV9MaWdodENvbG9yOyAvLyDlhYnnur/popzoibJcbiAgICB1bmlmb3JtIHZlYzMgdV9MaWdodERpcmVjdGlvbjsgLy8g5b2S5LiA5YyW55qE5LiW55WM5Z2Q5qCHKOWFpeWwhOWFieaWueWQkSkgXG4gICAgdW5pZm9ybSB2ZWMzIHVfQW1iaWVudExpZ2h0OyAvLyDnjq/looPlhYnpopzoibJcbiAgICB1bmlmb3JtIG1hdDQgdV9Ob3JtYWxNYXRyaXg7IC8vIOWPmOaNouazleWQkemHj+efqemYtVxuXG4gICAgdmFyeWluZyB2ZWM0IHZfQ29sb3I7XG4gICAgLy8g6aG254K5552A6Imy5ZmoICAgICAgICBcbiAgICB2b2lkIG1haW4oKSB7XG4gICAgICAvLyDorr7nva7lnZDmoIdcbiAgICAgIGdsX1Bvc2l0aW9uID0gdV9NdnBNYXRyaXggKiBhX1Bvc2l0aW9uO1xuICAgICAgLy8g5a+55rOV5ZCR6YeP6L+b6KGM5b2S5LiA5YyWXG4gICAgICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2ZWMzKHVfTm9ybWFsTWF0cml4ICogYV9Ob3JtYWwpKTtcbiAgICAgIC8vIOiuoeeul+WFiee6v+aWueWQkeWSjOazleWQkemHj+eahOeCueenryAg55u45b2T5LqO6K6h566XIGNvc+WkueinkiDkvZnlvKblgLxcbiAgICAgIGZsb2F0IG5Eb3RMID0gbWF4KGRvdCh1X0xpZ2h0RGlyZWN0aW9uLCBub3JtYWwpLCAwLjApO1xuICAgICAgLy8g6K6h566X5ryr5Y+N5bCE5YWJ55qE6aKc6ImyXG4gICAgICB2ZWMzIGRpZmZ1c2UgPSB1X0xpZ2h0Q29sb3IgKiB2ZWMzKGFfQ29sb3IpICogbkRvdEw7XG4gICAgICAvLyDorqHnrpfnjq/looPlhYnkuqfnlJ/nmoTlj43lsITlhYnpopzoibJcbiAgICAgIHZlYzMgYW1iaWVudCA9IHVfQW1iaWVudExpZ2h0ICogYV9Db2xvci5yZ2I7XG4gICAgICAvLyDorr7nva7lsLrlr7ggcHhcbiAgICAgIGdsX1BvaW50U2l6ZSA9IDEwLjA7XG5cbiAgICAgIHZfQ29sb3IgPSB2ZWM0KGRpZmZ1c2UgKyBhbWJpZW50LCBhX0NvbG9yLmEpO1xuICAgIH1cbmBcblxubGV0IGZyYWdtZW50U2hhZGVyOnN0cmluZyA9XG4gICAgYCBcbiAgICAvLyDlo7DmmI7mta7ngrnmlbDnsr7luqZcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiAgICBcbiAgICB2YXJ5aW5nIHZlYzQgdl9Db2xvcjtcbiAgICAvLyDniYflhYPnnYDoibLlmaggICAgIFxuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgIC8vIOiuvue9ruminOiJslxuICAgICAgZ2xfRnJhZ0NvbG9yID0gdl9Db2xvcjtcbiAgICB9XG5gXG5leHBvcnQgeyB2ZXJ4dGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlciB9IiwiXHJcbmV4cG9ydCBsZXQgRVBTSUxPTjogbnVtYmVyID0gMC4wMDAxO1xyXG5cclxuZXhwb3J0IGNsYXNzIHZlYzJcclxue1xyXG4gICAgcHVibGljIHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoIDIgKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHggKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMCBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeSAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB4ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDAgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeSAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB2YWx1ZXM6IG51bWJlcltdIHwgbnVsbCA9IG51bGwgKVxyXG4gICAge1xyXG4gICAgICAgIGlmICggdmFsdWVzIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHZhbHVlc1sgMCBdO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB2YWx1ZXNbIDEgXTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvcHkgKCBkZXN0OiB2ZWMyIHwgbnVsbCA9IG51bGwgKTogdmVjMlxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHZlYzIoKTtcclxuICAgICAgICBkZXN0LnggPSB0aGlzLng7XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy55O1xyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgdmVjM1xyXG57XHJcblxyXG4gICAgcHVibGljIHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoIDMgKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHggKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMCBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeSAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB6ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDIgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHggKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB5ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeiAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAyIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB2YWx1ZXM6IG51bWJlcltdIHwgbnVsbCA9IG51bGwgKVxyXG4gICAge1xyXG4gICAgICAgIGlmICggdmFsdWVzICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHZhbHVlc1sgMCBdO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB2YWx1ZXNbIDEgXTtcclxuICAgICAgICAgICAgdGhpcy56ID0gdmFsdWVzWyAyIF07XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXQgKCBpbmRleDogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgaW5kZXggXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQgKCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB6OiBudW1iZXIgPSAwICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29weSAoIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgdmVjMygpO1xyXG5cclxuICAgICAgICBkZXN0LnggPSB0aGlzLng7XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy55O1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5lZ2F0ZSAoIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSB0aGlzO1xyXG5cclxuICAgICAgICBkZXN0LnggPSAtdGhpcy54O1xyXG4gICAgICAgIGRlc3QueSA9IC10aGlzLnk7XHJcbiAgICAgICAgZGVzdC56ID0gLXRoaXMuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVxdWFscyAoIHZlY3RvcjogdmVjMywgdGhyZXNob2xkID0gRVBTSUxPTiApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy54IC0gdmVjdG9yLnggKSA+IHRocmVzaG9sZCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy55IC0gdmVjdG9yLnkgKSA+IHRocmVzaG9sZCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy56IC0gdmVjdG9yLnogKSA+IHRocmVzaG9sZCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGggKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoIHRoaXMubGVuZ3RoMiApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoMiAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLngsXHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnksXHJcbiAgICAgICAgICAgIHogPSB0aGlzLno7XHJcblxyXG4gICAgICAgIHJldHVybiAoIHggKiB4ICsgeSAqIHkgKyB6ICogeiApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCAoIHZlY3RvcjogdmVjMyApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWN0b3IueTtcclxuICAgICAgICB0aGlzLnogKz0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnRyYWN0ICggdmVjdG9yOiB2ZWMzICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggLT0gdmVjdG9yLng7XHJcbiAgICAgICAgdGhpcy55IC09IHZlY3Rvci55O1xyXG4gICAgICAgIHRoaXMueiAtPSB2ZWN0b3IuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYWxlICggdmFsdWU6IG51bWJlciwgZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSB0aGlzO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb3B5KCBkZXN0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZXN0LnggKj0gdmFsdWU7XHJcbiAgICAgICAgZGVzdC55ICo9IHZhbHVlO1xyXG4gICAgICAgIGRlc3QueiAqPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZSAoIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICggbGVuZ3RoID09PSAxIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBsZW5ndGggPT09IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdC54ID0gMDtcclxuICAgICAgICAgICAgZGVzdC55ID0gMDtcclxuICAgICAgICAgICAgZGVzdC56ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGVuZ3RoID0gMS4wIC8gbGVuZ3RoO1xyXG5cclxuICAgICAgICBkZXN0LnggKj0gbGVuZ3RoO1xyXG4gICAgICAgIGRlc3QueSAqPSBsZW5ndGg7XHJcbiAgICAgICAgZGVzdC56ICo9IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZTIgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSAxLjAgLyBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy54ICo9IGxlbjtcclxuICAgICAgICB0aGlzLnkgKj0gbGVuO1xyXG4gICAgICAgIHRoaXMueiAqPSBsZW47XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpcGx5U2NhbGFyICggdmVjdG9yOiB2ZWMzLCB2YWx1ZTogbnVtYmVyLCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHZlYzMoKTtcclxuICAgICAgICBkZXN0LnggKj0gdmFsdWU7XHJcbiAgICAgICAgZGVzdC55ICo9IHZhbHVlO1xyXG4gICAgICAgIGRlc3QueiAqPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyb3NzICggdmVjdG9yOiB2ZWMzLCB2ZWN0b3IyOiB2ZWMzLCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHZlYzMoKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIGxldCB4MiA9IHZlY3RvcjIueCxcclxuICAgICAgICAgICAgeTIgPSB2ZWN0b3IyLnksXHJcbiAgICAgICAgICAgIHoyID0gdmVjdG9yMi56O1xyXG5cclxuICAgICAgICBkZXN0LnggPSB5ICogejIgLSB6ICogeTI7XHJcbiAgICAgICAgZGVzdC55ID0geiAqIHgyIC0geCAqIHoyO1xyXG4gICAgICAgIGRlc3QueiA9IHggKiB5MiAtIHkgKiB4MjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkb3QgKCB2ZWN0b3I6IHZlYzMsIHZlY3RvcjI6IHZlYzMgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIGxldCB4MiA9IHZlY3RvcjIueCxcclxuICAgICAgICAgICAgeTIgPSB2ZWN0b3IyLnksXHJcbiAgICAgICAgICAgIHoyID0gdmVjdG9yMi56O1xyXG5cclxuICAgICAgICByZXR1cm4gKCB4ICogeDIgKyB5ICogeTIgKyB6ICogejIgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1bSAoIHZlY3RvcjogdmVjMywgdmVjdG9yMjogdmVjMywgZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHZlY3Rvci54ICsgdmVjdG9yMi54O1xyXG4gICAgICAgIGRlc3QueSA9IHZlY3Rvci55ICsgdmVjdG9yMi55O1xyXG4gICAgICAgIGRlc3QueiA9IHZlY3Rvci56ICsgdmVjdG9yMi56O1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpZmZlcmVuY2UgKCB2ZWN0b3I6IHZlYzMsIHZlY3RvcjI6IHZlYzMsIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgdmVjMygpO1xyXG5cclxuICAgICAgICBkZXN0LnggPSB2ZWN0b3IueCAtIHZlY3RvcjIueDtcclxuICAgICAgICBkZXN0LnkgPSB2ZWN0b3IueSAtIHZlY3RvcjIueTtcclxuICAgICAgICBkZXN0LnogPSB2ZWN0b3IueiAtIHZlY3RvcjIuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IHVwID0gbmV3IHZlYzMoIFsgMCwgMSwgMCBdICk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZG93biA9IG5ldyB2ZWMzKCBbIDAsIC0xLCAwIF0gKTtcclxuICAgIHN0YXRpYyByZWFkb25seSByaWdodCA9IG5ldyB2ZWMzKCBbIDEsIDAsIDAgXSApO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGxlZnQgPSBuZXcgdmVjMyggWyAtMSwgMCwgMCBdICk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZm9yd2FyZCA9IG5ldyB2ZWMzKCBbIDAsIDAsIDEgXSApO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGJhY2t3YXJkID0gbmV3IHZlYzMoIFsgMCwgMCwgLTEgXSApO1xyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSB6ZXJvID0gbmV3IHZlYzMoIFsgMCwgMCwgMCBdICk7XHJcblxyXG4gICAgc3RhdGljIHYwID0gbmV3IHZlYzMoIFsgMCwgMCwgMCBdICk7XHJcbiAgICBzdGF0aWMgdjEgPSBuZXcgdmVjMyggWyAwLCAwLCAwIF0gKTtcclxuICAgIHN0YXRpYyB2MiA9IG5ldyB2ZWMzKCBbIDAsIDAsIDAgXSApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgdmVjNFxyXG57XHJcbiAgICBwdWJsaWMgdmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheSggNCApO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgeCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAwIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDEgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHogKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMiBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdyAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAzIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB4ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDAgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeSAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHogKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMiBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB3ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDMgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdmVjMyAoKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgdmVjMyggWyB0aGlzLngsIHRoaXMueSwgdGhpcy56IF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHIgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMCBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZyAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBiICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDIgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGEgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMyBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgciAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGcgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBiICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYSAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAzIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB2YWx1ZXM6IG51bWJlcltdIHwgbnVsbCA9IG51bGwgKVxyXG4gICAge1xyXG4gICAgICAgIGlmICggdmFsdWVzIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHZhbHVlc1sgMCBdO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB2YWx1ZXNbIDEgXTtcclxuICAgICAgICAgICAgdGhpcy56ID0gdmFsdWVzWyAyIF07XHJcbiAgICAgICAgICAgIHRoaXMudyA9IHZhbHVlc1sgMyBdO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gdGhpcy53ID0gMC4wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXQgKCBpbmRleDogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgaW5kZXggXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy56ID0gMDtcclxuICAgICAgICB0aGlzLncgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5ICggZGVzdDogdmVjNCB8IG51bGwgPSBudWxsICk6IHZlYzRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWM0KCk7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMueDtcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnk7XHJcbiAgICAgICAgZGVzdC56ID0gdGhpcy56O1xyXG4gICAgICAgIGRlc3QudyA9IHRoaXMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVxdWFscyAoIHZlY3RvcjogdmVjNCwgdGhyZXNob2xkID0gRVBTSUxPTiApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy54IC0gdmVjdG9yLnggKSA+IHRocmVzaG9sZCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy55IC0gdmVjdG9yLnkgKSA+IHRocmVzaG9sZCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy56IC0gdmVjdG9yLnogKSA+IHRocmVzaG9sZCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy53IC0gdmVjdG9yLncgKSA+IHRocmVzaG9sZCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZDogdmVjNCA9IG5ldyB2ZWM0KCBbIDEuMCwgMC4wLCAwLjAsIDEuMCBdICk7XHJcbiAgICBzdGF0aWMgZ3JlZW46IHZlYzQgPSBuZXcgdmVjNCggWyAwLjAsIDEuMCwgMC4wLCAxLjAgXSApO1xyXG4gICAgc3RhdGljIGJsdWU6IHZlYzQgPSBuZXcgdmVjNCggWyAwLjAsIDAuMCwgMS4wLCAxLjAgXSApO1xyXG4gICAgc3RhdGljIGJsYWNrOnZlYzQgPSBuZXcgdmVjNChbMCwwLDAsMF0pO1xyXG5cclxuICAgIHN0YXRpYyB2MDogdmVjNCA9IG5ldyB2ZWM0KCk7XHJcbiAgICBzdGF0aWMgdjE6IHZlYzQgPSBuZXcgdmVjNCgpO1xyXG4gICAgc3RhdGljIHYyOiB2ZWM0ID0gbmV3IHZlYzQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIG1hdDRcclxue1xyXG4gICAgcHVibGljIHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoIDE2ICk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggdmFsdWVzOiBudW1iZXJbXSB8IG51bGwgPSBudWxsIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHZhbHVlcyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldCggdmFsdWVzICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCAoIHZhbHVlczogbnVtYmVyW10gKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDE2OyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbIGkgXSA9IHZhbHVlc1sgaSBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0ICggaW5kZXg6IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIGluZGV4IF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvcHkgKCBkZXN0OiBtYXQ0IHwgbnVsbCA9IG51bGwgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IG1hdDQoKTtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgMTY7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0LnZhbHVlc1sgaSBdID0gdGhpcy52YWx1ZXNbIGkgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMgKCBtYXRyaXg6IG1hdDQsIHRocmVzaG9sZCA9IEVQU0lMT04gKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDE2OyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy52YWx1ZXNbIGkgXSAtIG1hdHJpeC5hdCggaSApICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJvdyAoIGluZGV4OiBudW1iZXIsIGRlc3Q6IHZlYzQgfCBudWxsID0gbnVsbCApOiB2ZWM0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXN0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgdmVjNCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0LnggPSB0aGlzLnZhbHVlc1sgaW5kZXggKiA0ICsgMCBdLFxyXG4gICAgICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgaW5kZXggKiA0ICsgMSBdLFxyXG4gICAgICAgICAgICBkZXN0LnogPSB0aGlzLnZhbHVlc1sgaW5kZXggKiA0ICsgMiBdLFxyXG4gICAgICAgICAgICBkZXN0LncgPSB0aGlzLnZhbHVlc1sgaW5kZXggKiA0ICsgMyBdXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbHVtbiAoIGluZGV4OiBudW1iZXIsIGRlc3Q6IHZlYzQgfCBudWxsID0gbnVsbCApOiB2ZWM0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXN0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgdmVjNCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0LnggPSB0aGlzLnZhbHVlc1sgaW5kZXggXTtcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgaW5kZXggKyA0IF07XHJcbiAgICAgICAgZGVzdC56ID0gdGhpcy52YWx1ZXNbIGluZGV4ICsgOCBdO1xyXG4gICAgICAgIGRlc3QudyA9IHRoaXMudmFsdWVzWyBpbmRleCArIDEyIF07XHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvc2l0aW9uICggZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoIGRlc3QgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMudmFsdWVzWyAxMiBdO1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMudmFsdWVzWyAxMyBdO1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMudmFsdWVzWyAxNCBdO1xyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRYQXhpcyAoIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXN0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgdmVjMygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0LnggPSB0aGlzLnZhbHVlc1sgMCBdO1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMudmFsdWVzWyAxIF07XHJcbiAgICAgICAgZGVzdC56ID0gdGhpcy52YWx1ZXNbIDIgXTtcclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0WUF4aXMgKCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggZGVzdCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0ID0gbmV3IHZlYzMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy52YWx1ZXNbIDQgXTtcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgNSBdO1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMudmFsdWVzWyA2IF07XHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFpBeGlzICggZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoIGRlc3QgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMudmFsdWVzWyA4IF07XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy52YWx1ZXNbIDkgXTtcclxuICAgICAgICBkZXN0LnogPSB0aGlzLnZhbHVlc1sgMTAgXTtcclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXhpcyAoIGlkeDogbnVtYmVyLCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggaWR4ID09PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFhBeGlzKCBkZXN0ICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggaWR4ID09PSAxIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFlBeGlzKCBkZXN0ICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRaQXhpcyggZGVzdCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SWRlbnRpdHkgKCk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdID0gMTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMiBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMyBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNCBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNSBdID0gMTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNiBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNyBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgOCBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgOSBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTAgXSA9IDE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDExIF0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMiBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTMgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDE0IF0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxNSBdID0gMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zcG9zZSAoKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wMDEgPSB0aGlzLnZhbHVlc1sgMSBdLCB0ZW1wMDIgPSB0aGlzLnZhbHVlc1sgMiBdLFxyXG4gICAgICAgICAgICB0ZW1wMDMgPSB0aGlzLnZhbHVlc1sgMyBdLCB0ZW1wMTIgPSB0aGlzLnZhbHVlc1sgNiBdLFxyXG4gICAgICAgICAgICB0ZW1wMTMgPSB0aGlzLnZhbHVlc1sgNyBdLCB0ZW1wMjMgPSB0aGlzLnZhbHVlc1sgMTEgXTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSA9IHRoaXMudmFsdWVzWyA0IF07XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSA9IHRoaXMudmFsdWVzWyA4IF07XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDMgXSA9IHRoaXMudmFsdWVzWyAxMiBdO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA0IF0gPSB0ZW1wMDE7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyA2IF0gPSB0aGlzLnZhbHVlc1sgOSBdO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA3IF0gPSB0aGlzLnZhbHVlc1sgMTMgXTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgOCBdID0gdGVtcDAyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA5IF0gPSB0ZW1wMTI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDExIF0gPSB0aGlzLnZhbHVlc1sgMTQgXTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTIgXSA9IHRlbXAwMztcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTMgXSA9IHRlbXAxMztcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTQgXSA9IHRlbXAyMztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGVybWluYW50ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgYTAwID0gdGhpcy52YWx1ZXNbIDAgXSwgYTAxID0gdGhpcy52YWx1ZXNbIDEgXSwgYTAyID0gdGhpcy52YWx1ZXNbIDIgXSwgYTAzID0gdGhpcy52YWx1ZXNbIDMgXSxcclxuICAgICAgICAgICAgYTEwID0gdGhpcy52YWx1ZXNbIDQgXSwgYTExID0gdGhpcy52YWx1ZXNbIDUgXSwgYTEyID0gdGhpcy52YWx1ZXNbIDYgXSwgYTEzID0gdGhpcy52YWx1ZXNbIDcgXSxcclxuICAgICAgICAgICAgYTIwID0gdGhpcy52YWx1ZXNbIDggXSwgYTIxID0gdGhpcy52YWx1ZXNbIDkgXSwgYTIyID0gdGhpcy52YWx1ZXNbIDEwIF0sIGEyMyA9IHRoaXMudmFsdWVzWyAxMSBdLFxyXG4gICAgICAgICAgICBhMzAgPSB0aGlzLnZhbHVlc1sgMTIgXSwgYTMxID0gdGhpcy52YWx1ZXNbIDEzIF0sIGEzMiA9IHRoaXMudmFsdWVzWyAxNCBdLCBhMzMgPSB0aGlzLnZhbHVlc1sgMTUgXTtcclxuXHJcbiAgICAgICAgbGV0IGRldDAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxyXG4gICAgICAgICAgICBkZXQwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcclxuICAgICAgICAgICAgZGV0MDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXHJcbiAgICAgICAgICAgIGRldDAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxyXG4gICAgICAgICAgICBkZXQwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcclxuICAgICAgICAgICAgZGV0MDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXHJcbiAgICAgICAgICAgIGRldDA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxyXG4gICAgICAgICAgICBkZXQwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcclxuICAgICAgICAgICAgZGV0MDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXHJcbiAgICAgICAgICAgIGRldDA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxyXG4gICAgICAgICAgICBkZXQxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcclxuICAgICAgICAgICAgZGV0MTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRldDAwICogZGV0MTEgLSBkZXQwMSAqIGRldDEwICsgZGV0MDIgKiBkZXQwOSArIGRldDAzICogZGV0MDggLSBkZXQwNCAqIGRldDA3ICsgZGV0MDUgKiBkZXQwNiApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnZlcnNlICggb3V0OiBtYXQ0ICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvcHkoIG91dCApO1xyXG4gICAgICAgIGxldCBhMDAgPSBvdXQudmFsdWVzWyAwIF0sIGEwMSA9IG91dC52YWx1ZXNbIDEgXSwgYTAyID0gb3V0LnZhbHVlc1sgMiBdLCBhMDMgPSBvdXQudmFsdWVzWyAzIF0sXHJcbiAgICAgICAgICAgIGExMCA9IG91dC52YWx1ZXNbIDQgXSwgYTExID0gb3V0LnZhbHVlc1sgNSBdLCBhMTIgPSBvdXQudmFsdWVzWyA2IF0sIGExMyA9IG91dC52YWx1ZXNbIDcgXSxcclxuICAgICAgICAgICAgYTIwID0gb3V0LnZhbHVlc1sgOCBdLCBhMjEgPSBvdXQudmFsdWVzWyA5IF0sIGEyMiA9IG91dC52YWx1ZXNbIDEwIF0sIGEyMyA9IG91dC52YWx1ZXNbIDExIF0sXHJcbiAgICAgICAgICAgIGEzMCA9IG91dC52YWx1ZXNbIDEyIF0sIGEzMSA9IG91dC52YWx1ZXNbIDEzIF0sIGEzMiA9IG91dC52YWx1ZXNbIDE0IF0sIGEzMyA9IG91dC52YWx1ZXNbIDE1IF07XHJcblxyXG4gICAgICAgIGxldCBkZXQwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcclxuICAgICAgICAgICAgZGV0MDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXHJcbiAgICAgICAgICAgIGRldDAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxyXG4gICAgICAgICAgICBkZXQwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcclxuICAgICAgICAgICAgZGV0MDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXHJcbiAgICAgICAgICAgIGRldDA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxyXG4gICAgICAgICAgICBkZXQwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcclxuICAgICAgICAgICAgZGV0MDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXHJcbiAgICAgICAgICAgIGRldDA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxyXG4gICAgICAgICAgICBkZXQwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcclxuICAgICAgICAgICAgZGV0MTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXHJcbiAgICAgICAgICAgIGRldDExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgICBsZXQgZGV0ID0gKCBkZXQwMCAqIGRldDExIC0gZGV0MDEgKiBkZXQxMCArIGRldDAyICogZGV0MDkgKyBkZXQwMyAqIGRldDA4IC0gZGV0MDQgKiBkZXQwNyArIGRldDA1ICogZGV0MDYgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhZGV0IClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICAgIG91dC52YWx1ZXNbIDAgXSA9ICggYTExICogZGV0MTEgLSBhMTIgKiBkZXQxMCArIGExMyAqIGRldDA5ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMSBdID0gKCAtYTAxICogZGV0MTEgKyBhMDIgKiBkZXQxMCAtIGEwMyAqIGRldDA5ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMiBdID0gKCBhMzEgKiBkZXQwNSAtIGEzMiAqIGRldDA0ICsgYTMzICogZGV0MDMgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAzIF0gPSAoIC1hMjEgKiBkZXQwNSArIGEyMiAqIGRldDA0IC0gYTIzICogZGV0MDMgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA0IF0gPSAoIC1hMTAgKiBkZXQxMSArIGExMiAqIGRldDA4IC0gYTEzICogZGV0MDcgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA1IF0gPSAoIGEwMCAqIGRldDExIC0gYTAyICogZGV0MDggKyBhMDMgKiBkZXQwNyApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDYgXSA9ICggLWEzMCAqIGRldDA1ICsgYTMyICogZGV0MDIgLSBhMzMgKiBkZXQwMSApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDcgXSA9ICggYTIwICogZGV0MDUgLSBhMjIgKiBkZXQwMiArIGEyMyAqIGRldDAxICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgOCBdID0gKCBhMTAgKiBkZXQxMCAtIGExMSAqIGRldDA4ICsgYTEzICogZGV0MDYgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA5IF0gPSAoIC1hMDAgKiBkZXQxMCArIGEwMSAqIGRldDA4IC0gYTAzICogZGV0MDYgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxMCBdID0gKCBhMzAgKiBkZXQwNCAtIGEzMSAqIGRldDAyICsgYTMzICogZGV0MDAgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxMSBdID0gKCAtYTIwICogZGV0MDQgKyBhMjEgKiBkZXQwMiAtIGEyMyAqIGRldDAwICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTIgXSA9ICggLWExMCAqIGRldDA5ICsgYTExICogZGV0MDcgLSBhMTIgKiBkZXQwNiApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDEzIF0gPSAoIGEwMCAqIGRldDA5IC0gYTAxICogZGV0MDcgKyBhMDIgKiBkZXQwNiApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDE0IF0gPSAoIC1hMzAgKiBkZXQwMyArIGEzMSAqIGRldDAxIC0gYTMyICogZGV0MDAgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxNSBdID0gKCBhMjAgKiBkZXQwMyAtIGEyMSAqIGRldDAxICsgYTIyICogZGV0MDAgKSAqIGRldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5ICggbWF0cml4OiBtYXQ0ICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBsZXQgYTAwID0gdGhpcy52YWx1ZXNbIDAgXSwgYTAxID0gdGhpcy52YWx1ZXNbIDEgXSwgYTAyID0gdGhpcy52YWx1ZXNbIDIgXSwgYTAzID0gdGhpcy52YWx1ZXNbIDMgXTtcclxuICAgICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbIDQgXSwgYTExID0gdGhpcy52YWx1ZXNbIDUgXSwgYTEyID0gdGhpcy52YWx1ZXNbIDYgXSwgYTEzID0gdGhpcy52YWx1ZXNbIDcgXTtcclxuICAgICAgICBsZXQgYTIwID0gdGhpcy52YWx1ZXNbIDggXSwgYTIxID0gdGhpcy52YWx1ZXNbIDkgXSwgYTIyID0gdGhpcy52YWx1ZXNbIDEwIF0sIGEyMyA9IHRoaXMudmFsdWVzWyAxMSBdO1xyXG4gICAgICAgIGxldCBhMzAgPSB0aGlzLnZhbHVlc1sgMTIgXSwgYTMxID0gdGhpcy52YWx1ZXNbIDEzIF0sIGEzMiA9IHRoaXMudmFsdWVzWyAxNCBdLCBhMzMgPSB0aGlzLnZhbHVlc1sgMTUgXTtcclxuXHJcbiAgICAgICAgbGV0IGIwID0gbWF0cml4LmF0KCAwICksXHJcbiAgICAgICAgICAgIGIxID0gbWF0cml4LmF0KCAxICksXHJcbiAgICAgICAgICAgIGIyID0gbWF0cml4LmF0KCAyICksXHJcbiAgICAgICAgICAgIGIzID0gbWF0cml4LmF0KCAzICk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAzIF0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuXHJcbiAgICAgICAgYjAgPSBtYXRyaXguYXQoIDQgKTtcclxuICAgICAgICBiMSA9IG1hdHJpeC5hdCggNSApO1xyXG4gICAgICAgIGIyID0gbWF0cml4LmF0KCA2ICk7XHJcbiAgICAgICAgYjMgPSBtYXRyaXguYXQoIDcgKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDQgXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA1IF0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNiBdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDcgXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xyXG5cclxuICAgICAgICBiMCA9IG1hdHJpeC5hdCggOCApO1xyXG4gICAgICAgIGIxID0gbWF0cml4LmF0KCA5ICk7XHJcbiAgICAgICAgYjIgPSBtYXRyaXguYXQoIDEwICk7XHJcbiAgICAgICAgYjMgPSBtYXRyaXguYXQoIDExICk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyA4IF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgOSBdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEwIF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTEgXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xyXG5cclxuICAgICAgICBiMCA9IG1hdHJpeC5hdCggMTIgKTtcclxuICAgICAgICBiMSA9IG1hdHJpeC5hdCggMTMgKTtcclxuICAgICAgICBiMiA9IG1hdHJpeC5hdCggMTQgKTtcclxuICAgICAgICBiMyA9IG1hdHJpeC5hdCggMTUgKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEyIF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTMgXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxNCBdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDE1IF0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5VmVjMyAoIHZlY3RvcjogdmVjMywgZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMudmFsdWVzWyAwIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDQgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOCBdICogeiArIHRoaXMudmFsdWVzWyAxMiBdO1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMudmFsdWVzWyAxIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDUgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOSBdICogeiArIHRoaXMudmFsdWVzWyAxMyBdO1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMudmFsdWVzWyAyIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDYgXSAqIHkgKyB0aGlzLnZhbHVlc1sgMTAgXSAqIHogKyB0aGlzLnZhbHVlc1sgMTQgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5VmVjNCAoIHZlY3RvcjogdmVjNCwgZGVzdDogdmVjNCB8IG51bGwgPSBudWxsICk6IHZlYzRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWM0KCk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56LFxyXG4gICAgICAgICAgICB3ID0gdmVjdG9yLnc7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMudmFsdWVzWyAwIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDQgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOCBdICogeiArIHRoaXMudmFsdWVzWyAxMiBdICogdztcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgMSBdICogeCArIHRoaXMudmFsdWVzWyA1IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDkgXSAqIHogKyB0aGlzLnZhbHVlc1sgMTMgXSAqIHc7XHJcbiAgICAgICAgZGVzdC56ID0gdGhpcy52YWx1ZXNbIDIgXSAqIHggKyB0aGlzLnZhbHVlc1sgNiBdICogeSArIHRoaXMudmFsdWVzWyAxMCBdICogeiArIHRoaXMudmFsdWVzWyAxNCBdICogdztcclxuICAgICAgICBkZXN0LncgPSB0aGlzLnZhbHVlc1sgMyBdICogeCArIHRoaXMudmFsdWVzWyA3IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDExIF0gKiB6ICsgdGhpcy52YWx1ZXNbIDE1IF0gKiB3O1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDnn6npmLXlj5jmjaJcclxuICAgIHB1YmxpYyB0cmFuc2xhdGUgKCB2ZWN0b3I6IHZlYzMgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTIgXSArPSB0aGlzLnZhbHVlc1sgMCBdICogeCArIHRoaXMudmFsdWVzWyA0IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDggXSAqIHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEzIF0gKz0gdGhpcy52YWx1ZXNbIDEgXSAqIHggKyB0aGlzLnZhbHVlc1sgNSBdICogeSArIHRoaXMudmFsdWVzWyA5IF0gKiB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxNCBdICs9IHRoaXMudmFsdWVzWyAyIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDYgXSAqIHkgKyB0aGlzLnZhbHVlc1sgMTAgXSAqIHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDE1IF0gKz0gdGhpcy52YWx1ZXNbIDMgXSAqIHggKyB0aGlzLnZhbHVlc1sgNyBdICogeSArIHRoaXMudmFsdWVzWyAxMSBdICogejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYWxlICggdmVjdG9yOiB2ZWMzICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IHZlY3Rvci54LFxyXG4gICAgICAgICAgICB5ID0gdmVjdG9yLnksXHJcbiAgICAgICAgICAgIHogPSB2ZWN0b3IuejtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDAgXSAqPSB4O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gKj0geDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMiBdICo9IHg7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDMgXSAqPSB4O1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgNCBdICo9IHk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDUgXSAqPSB5O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA2IF0gKj0geTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNyBdICo9IHk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyA4IF0gKj0gejtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgOSBdICo9IHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEwIF0gKj0gejtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTEgXSAqPSB6O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm90YXRlICggYW5nbGU6IG51bWJlciwgYXhpczogdmVjMyApOiBtYXQ0IHwgbnVsbFxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gYXhpcy54LFxyXG4gICAgICAgICAgICB5ID0gYXhpcy55LFxyXG4gICAgICAgICAgICB6ID0gYXhpcy56O1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoID0gTWF0aC5zcXJ0KCB4ICogeCArIHkgKiB5ICsgeiAqIHogKTtcclxuXHJcbiAgICAgICAgaWYgKCAhbGVuZ3RoIClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmICggbGVuZ3RoICE9PSAxIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxlbmd0aCA9IDEgLyBsZW5ndGg7XHJcbiAgICAgICAgICAgIHggKj0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB5ICo9IGxlbmd0aDtcclxuICAgICAgICAgICAgeiAqPSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcyA9IE1hdGguc2luKCBhbmdsZSApO1xyXG4gICAgICAgIGxldCBjID0gTWF0aC5jb3MoIGFuZ2xlICk7XHJcblxyXG4gICAgICAgIGxldCB0ID0gMS4wIC0gYztcclxuXHJcbiAgICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWyAwIF0sIGEwMSA9IHRoaXMudmFsdWVzWyAxIF0sIGEwMiA9IHRoaXMudmFsdWVzWyAyIF0sIGEwMyA9IHRoaXMudmFsdWVzWyAzIF0sXHJcbiAgICAgICAgICAgIGExMCA9IHRoaXMudmFsdWVzWyA0IF0sIGExMSA9IHRoaXMudmFsdWVzWyA1IF0sIGExMiA9IHRoaXMudmFsdWVzWyA2IF0sIGExMyA9IHRoaXMudmFsdWVzWyA3IF0sXHJcbiAgICAgICAgICAgIGEyMCA9IHRoaXMudmFsdWVzWyA4IF0sIGEyMSA9IHRoaXMudmFsdWVzWyA5IF0sIGEyMiA9IHRoaXMudmFsdWVzWyAxMCBdLCBhMjMgPSB0aGlzLnZhbHVlc1sgMTEgXTtcclxuXHJcbiAgICAgICAgbGV0IGIwMCA9IHggKiB4ICogdCArIGMsIGIwMSA9IHkgKiB4ICogdCArIHogKiBzLCBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcclxuICAgICAgICAgICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHMsIGIxMSA9IHkgKiB5ICogdCArIGMsIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxyXG4gICAgICAgICAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogcywgYjIxID0geSAqIHogKiB0IC0geCAqIHMsIGIyMiA9IHogKiB6ICogdCArIGM7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMiBdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAzIF0gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyA0IF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDUgXSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNiBdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA3IF0gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyA4IF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDkgXSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTAgXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTEgXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6KeG55+p6Zi15ZKM5oqV5b2x55+p6Zi1XHJcbiAgICBwdWJsaWMgc3RhdGljIGZydXN0dW0gKCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCB0b3A6IG51bWJlciwgbmVhcjogbnVtYmVyLCBmYXI6IG51bWJlciApOiBtYXQ0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJsID0gKCByaWdodCAtIGxlZnQgKSxcclxuICAgICAgICAgICAgdGIgPSAoIHRvcCAtIGJvdHRvbSApLFxyXG4gICAgICAgICAgICBmbiA9ICggZmFyIC0gbmVhciApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IG1hdDQoIFtcclxuICAgICAgICAgICAgKCBuZWFyICogMiApIC8gcmwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAoIG5lYXIgKiAyICkgLyB0YixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgICggcmlnaHQgKyBsZWZ0ICkgLyBybCxcclxuICAgICAgICAgICAgKCB0b3AgKyBib3R0b20gKSAvIHRiLFxyXG4gICAgICAgICAgICAtKCBmYXIgKyBuZWFyICkgLyBmbixcclxuICAgICAgICAgICAgLTEsXHJcblxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAtKCBmYXIgKiBuZWFyICogMiApIC8gZm4sXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwZXJzcGVjdGl2ZSAoIGZvdjogbnVtYmVyLCBhc3BlY3Q6IG51bWJlciwgbmVhcjogbnVtYmVyLCBmYXI6IG51bWJlciApOiBtYXQ0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvcCA9IG5lYXIgKiBNYXRoLnRhbiggZm92ICogMC41ICksXHJcbiAgICAgICAgICAgIHJpZ2h0ID0gdG9wICogYXNwZWN0O1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NC5mcnVzdHVtKCAtcmlnaHQsIHJpZ2h0LCAtdG9wLCB0b3AsIG5lYXIsIGZhciApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb3J0aG9ncmFwaGljICggbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciwgdG9wOiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGxldCBybCA9ICggcmlnaHQgLSBsZWZ0ICksXHJcbiAgICAgICAgICAgIHRiID0gKCB0b3AgLSBib3R0b20gKSxcclxuICAgICAgICAgICAgZm4gPSAoIGZhciAtIG5lYXIgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXQ0KCBbXHJcbiAgICAgICAgICAgIDIgLyBybCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIgLyB0YixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIC0yIC8gZm4sXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAtKCBsZWZ0ICsgcmlnaHQgKSAvIHJsLFxyXG4gICAgICAgICAgICAtKCB0b3AgKyBib3R0b20gKSAvIHRiLFxyXG4gICAgICAgICAgICAtKCBmYXIgKyBuZWFyICkgLyBmbixcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvb2tBdCAoIHBvc2l0aW9uOiB2ZWMzLCB0YXJnZXQ6IHZlYzMsIHVwOiB2ZWMzID0gdmVjMy51cCApOiBtYXQ0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBwb3NpdGlvbi5lcXVhbHMoIHRhcmdldCApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkZW50aXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHogPSB2ZWMzLmRpZmZlcmVuY2UoIHBvc2l0aW9uLCB0YXJnZXQgKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgeCA9IHZlYzMuY3Jvc3MoIHVwLCB6ICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHkgPSB2ZWMzLmNyb3NzKCB6LCB4ICkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgbWF0NCggW1xyXG4gICAgICAgICAgICB4LngsXHJcbiAgICAgICAgICAgIHkueCxcclxuICAgICAgICAgICAgei54LFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgeC55LFxyXG4gICAgICAgICAgICB5LnksXHJcbiAgICAgICAgICAgIHoueSxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIHgueixcclxuICAgICAgICAgICAgeS56LFxyXG4gICAgICAgICAgICB6LnosXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAtdmVjMy5kb3QoIHgsIHBvc2l0aW9uICksXHJcbiAgICAgICAgICAgIC12ZWMzLmRvdCggeSwgcG9zaXRpb24gKSxcclxuICAgICAgICAgICAgLXZlYzMuZG90KCB6LCBwb3NpdGlvbiApLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgXSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJvZHVjdCAoIG0xOiBtYXQ0LCBtMjogbWF0NCwgcmVzdWx0OiBtYXQ0IHwgbnVsbCA9IG51bGwgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGxldCBhMDAgPSBtMS5hdCggMCApLCBhMDEgPSBtMS5hdCggMSApLCBhMDIgPSBtMS5hdCggMiApLCBhMDMgPSBtMS5hdCggMyApLFxyXG4gICAgICAgICAgICBhMTAgPSBtMS5hdCggNCApLCBhMTEgPSBtMS5hdCggNSApLCBhMTIgPSBtMS5hdCggNiApLCBhMTMgPSBtMS5hdCggNyApLFxyXG4gICAgICAgICAgICBhMjAgPSBtMS5hdCggOCApLCBhMjEgPSBtMS5hdCggOSApLCBhMjIgPSBtMS5hdCggMTAgKSwgYTIzID0gbTEuYXQoIDExICksXHJcbiAgICAgICAgICAgIGEzMCA9IG0xLmF0KCAxMiApLCBhMzEgPSBtMS5hdCggMTMgKSwgYTMyID0gbTEuYXQoIDE0ICksIGEzMyA9IG0xLmF0KCAxNSApO1xyXG5cclxuICAgICAgICBsZXQgYjAwID0gbTIuYXQoIDAgKSwgYjAxID0gbTIuYXQoIDEgKSwgYjAyID0gbTIuYXQoIDIgKSwgYjAzID0gbTIuYXQoIDMgKSxcclxuICAgICAgICAgICAgYjEwID0gbTIuYXQoIDQgKSwgYjExID0gbTIuYXQoIDUgKSwgYjEyID0gbTIuYXQoIDYgKSwgYjEzID0gbTIuYXQoIDcgKSxcclxuICAgICAgICAgICAgYjIwID0gbTIuYXQoIDggKSwgYjIxID0gbTIuYXQoIDkgKSwgYjIyID0gbTIuYXQoIDEwICksIGIyMyA9IG0yLmF0KCAxMSApLFxyXG4gICAgICAgICAgICBiMzAgPSBtMi5hdCggMTIgKSwgYjMxID0gbTIuYXQoIDEzICksIGIzMiA9IG0yLmF0KCAxNCApLCBiMzMgPSBtMi5hdCggMTUgKTtcclxuXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldCggW1xyXG4gICAgICAgICAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzXHJcbiAgICAgICAgICAgIF0gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgbWF0NCggW1xyXG4gICAgICAgICAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzXHJcbiAgICAgICAgICAgIF0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpZGVudGl0eSA9IG5ldyBtYXQ0KCkuc2V0SWRlbnRpdHkoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgbTAgPSBuZXcgbWF0NCgpO1xyXG4gICAgcHVibGljIHN0YXRpYyBtMSA9IG5ldyBtYXQ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBxdWF0XHJcbntcclxuICAgIHB1YmxpYyB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KCA0ICk7XHJcblxyXG4gICAgcHVibGljIGdldCB4ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHkgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeiAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAyIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB3ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDMgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHggKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB5ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeiAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAyIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHcgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMyBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRJZGVudGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdCAoIGluZGV4OiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyBpbmRleCBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDQ7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1sgaSBdID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvcHkgKCBkZXN0OiBxdWF0IHwgbnVsbCA9IG51bGwgKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHF1YXQoKTtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QudmFsdWVzWyBpIF0gPSB0aGlzLnZhbHVlc1sgaSBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvbGwgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy54LFxyXG4gICAgICAgICAgICB5ID0gdGhpcy55LFxyXG4gICAgICAgICAgICB6ID0gdGhpcy56LFxyXG4gICAgICAgICAgICB3ID0gdGhpcy53O1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMiggMi4wICogKCB4ICogeSArIHcgKiB6ICksIHcgKiB3ICsgeCAqIHggLSB5ICogeSAtIHogKiB6ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBpdGNoICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IHRoaXMueCxcclxuICAgICAgICAgICAgeSA9IHRoaXMueSxcclxuICAgICAgICAgICAgeiA9IHRoaXMueixcclxuICAgICAgICAgICAgdyA9IHRoaXMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoIDIuMCAqICggeSAqIHogKyB3ICogeCApLCB3ICogdyAtIHggKiB4IC0geSAqIHkgKyB6ICogeiApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB5YXcgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFzaW4oIDIuMCAqICggdGhpcy54ICogdGhpcy56IC0gdGhpcy53ICogdGhpcy55ICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXF1YWxzICggdmVjdG9yOiBxdWF0LCB0aHJlc2hvbGQgPSBFUFNJTE9OICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCA0OyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBNYXRoLmFicyggdGhpcy52YWx1ZXNbIGkgXSAtIHZlY3Rvci5hdCggaSApICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldElkZW50aXR5ICgpOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMueiA9IDA7XHJcbiAgICAgICAgdGhpcy53ID0gMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbGN1bGF0ZVcgKCk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IHRoaXMueCxcclxuICAgICAgICAgICAgeSA9IHRoaXMueSxcclxuICAgICAgICAgICAgeiA9IHRoaXMuejtcclxuXHJcbiAgICAgICAgdGhpcy53ID0gLSggTWF0aC5zcXJ0KCBNYXRoLmFicyggMS4wIC0geCAqIHggLSB5ICogeSAtIHogKiB6ICkgKSApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRvdCAoIHExOiBxdWF0LCBxMjogcXVhdCApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcTEueCAqIHEyLnggKyBxMS55ICogcTIueSArIHExLnogKiBxMi56ICsgcTEudyAqIHEyLnc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludmVyc2UgKCk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBsZXQgZG90ID0gcXVhdC5kb3QoIHRoaXMsIHRoaXMgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhZG90IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW52RG90ID0gZG90ID8gMS4wIC8gZG90IDogMDtcclxuXHJcbiAgICAgICAgdGhpcy54ICo9IC1pbnZEb3Q7XHJcbiAgICAgICAgdGhpcy55ICo9IC1pbnZEb3Q7XHJcbiAgICAgICAgdGhpcy56ICo9IC1pbnZEb3Q7XHJcbiAgICAgICAgdGhpcy53ICo9IGludkRvdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbmp1Z2F0ZSAoKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gKj0gLTE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSAqPSAtMTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMiBdICo9IC0xO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGVuZ3RoICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IHRoaXMueCxcclxuICAgICAgICAgICAgeSA9IHRoaXMueSxcclxuICAgICAgICAgICAgeiA9IHRoaXMueixcclxuICAgICAgICAgICAgdyA9IHRoaXMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCggeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplICggZGVzdDogcXVhdCB8IG51bGwgPSBudWxsICk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdGhpcy54LFxyXG4gICAgICAgICAgICB5ID0gdGhpcy55LFxyXG4gICAgICAgICAgICB6ID0gdGhpcy56LFxyXG4gICAgICAgICAgICB3ID0gdGhpcy53O1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoID0gTWF0aC5zcXJ0KCB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyApO1xyXG5cclxuICAgICAgICBpZiAoICFsZW5ndGggKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdC54ID0gMDtcclxuICAgICAgICAgICAgZGVzdC55ID0gMDtcclxuICAgICAgICAgICAgZGVzdC56ID0gMDtcclxuICAgICAgICAgICAgZGVzdC53ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGVuZ3RoID0gMSAvIGxlbmd0aDtcclxuXHJcbiAgICAgICAgZGVzdC54ID0geCAqIGxlbmd0aDtcclxuICAgICAgICBkZXN0LnkgPSB5ICogbGVuZ3RoO1xyXG4gICAgICAgIGRlc3QueiA9IHogKiBsZW5ndGg7XHJcbiAgICAgICAgZGVzdC53ID0gdyAqIGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCAoIG90aGVyOiBxdWF0ICk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCA0OyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbIGkgXSArPSBvdGhlci5hdCggaSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Z5Liq5piv5bem5Yiw5Y+z57uT5ZCIIHRoaXMuY3Jvc3Mub3RoZXJcclxuICAgIHB1YmxpYyBtdWx0aXBseSAoIG90aGVyOiBxdWF0ICk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBsZXQgcTF4ID0gdGhpcy52YWx1ZXNbIDAgXSxcclxuICAgICAgICAgICAgcTF5ID0gdGhpcy52YWx1ZXNbIDEgXSxcclxuICAgICAgICAgICAgcTF6ID0gdGhpcy52YWx1ZXNbIDIgXSxcclxuICAgICAgICAgICAgcTF3ID0gdGhpcy52YWx1ZXNbIDMgXTtcclxuXHJcbiAgICAgICAgbGV0IHEyeCA9IG90aGVyLngsXHJcbiAgICAgICAgICAgIHEyeSA9IG90aGVyLnksXHJcbiAgICAgICAgICAgIHEyeiA9IG90aGVyLnosXHJcbiAgICAgICAgICAgIHEydyA9IG90aGVyLnc7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IHExeCAqIHEydyArIHExdyAqIHEyeCArIHExeSAqIHEyeiAtIHExeiAqIHEyeTtcclxuICAgICAgICB0aGlzLnkgPSBxMXkgKiBxMncgKyBxMXcgKiBxMnkgKyBxMXogKiBxMnggLSBxMXggKiBxMno7XHJcbiAgICAgICAgdGhpcy56ID0gcTF6ICogcTJ3ICsgcTF3ICogcTJ6ICsgcTF4ICogcTJ5IC0gcTF5ICogcTJ4O1xyXG4gICAgICAgIHRoaXMudyA9IHExdyAqIHEydyAtIHExeCAqIHEyeCAtIHExeSAqIHEyeSAtIHExeiAqIHEyejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5VmVjMyAoIHZlY3RvcjogdmVjMywgZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICBsZXQgcXggPSB0aGlzLngsXHJcbiAgICAgICAgICAgIHF5ID0gdGhpcy55LFxyXG4gICAgICAgICAgICBxeiA9IHRoaXMueixcclxuICAgICAgICAgICAgcXcgPSB0aGlzLnc7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbGV0IGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5LFxyXG4gICAgICAgICAgICBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogeixcclxuICAgICAgICAgICAgaXogPSBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHgsXHJcbiAgICAgICAgICAgIGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogejtcclxuXHJcbiAgICAgICAgZGVzdC54ID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTtcclxuICAgICAgICBkZXN0LnkgPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6O1xyXG4gICAgICAgIGRlc3QueiA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXg7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b01hdDQgKCBkZXN0OiBtYXQ0IHwgbnVsbCA9IG51bGwgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IG1hdDQoKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSB0aGlzLngsXHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnksXHJcbiAgICAgICAgICAgIHogPSB0aGlzLnosXHJcbiAgICAgICAgICAgIHcgPSB0aGlzLncsXHJcblxyXG4gICAgICAgICAgICB4MiA9IHggKyB4LFxyXG4gICAgICAgICAgICB5MiA9IHkgKyB5LFxyXG4gICAgICAgICAgICB6MiA9IHogKyB6LFxyXG5cclxuICAgICAgICAgICAgeHggPSB4ICogeDIsXHJcbiAgICAgICAgICAgIHh5ID0geCAqIHkyLFxyXG4gICAgICAgICAgICB4eiA9IHggKiB6MixcclxuICAgICAgICAgICAgeXkgPSB5ICogeTIsXHJcbiAgICAgICAgICAgIHl6ID0geSAqIHoyLFxyXG4gICAgICAgICAgICB6eiA9IHogKiB6MixcclxuICAgICAgICAgICAgd3ggPSB3ICogeDIsXHJcbiAgICAgICAgICAgIHd5ID0gdyAqIHkyLFxyXG4gICAgICAgICAgICB3eiA9IHcgKiB6MjtcclxuXHJcbiAgICAgICAgZGVzdC5zZXQoIFtcclxuICAgICAgICAgICAgMSAtICggeXkgKyB6eiApLFxyXG4gICAgICAgICAgICB4eSArIHd6LFxyXG4gICAgICAgICAgICB4eiAtIHd5LFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgKCB4eSAtIHd6ICksXHJcbiAgICAgICAgICAgICggMSAtICggeHggKyB6eiApICksXHJcbiAgICAgICAgICAgICggeXogKyB3eCApLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgeHogKyB3eSxcclxuICAgICAgICAgICAgeXogLSB3eCxcclxuICAgICAgICAgICAgMSAtICggeHggKyB5eSApLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgIF0gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0gKCBxMTogcXVhdCwgcTI6IHF1YXQsIGRlc3Q6IHF1YXQgfCBudWxsID0gbnVsbCApOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgcXVhdCgpO1xyXG5cclxuICAgICAgICBkZXN0LnggPSBxMS54ICsgcTIueDtcclxuICAgICAgICBkZXN0LnkgPSBxMS55ICsgcTIueTtcclxuICAgICAgICBkZXN0LnogPSBxMS56ICsgcTIuejtcclxuICAgICAgICBkZXN0LncgPSBxMS53ICsgcTIudztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcm9kdWN0ICggcTE6IHF1YXQsIHEyOiBxdWF0LCBkZXN0OiBxdWF0IHwgbnVsbCA9IG51bGwgKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHF1YXQoKTtcclxuXHJcbiAgICAgICAgbGV0IHExeCA9IHExLngsXHJcbiAgICAgICAgICAgIHExeSA9IHExLnksXHJcbiAgICAgICAgICAgIHExeiA9IHExLnosXHJcbiAgICAgICAgICAgIHExdyA9IHExLncsXHJcblxyXG4gICAgICAgICAgICBxMnggPSBxMi54LFxyXG4gICAgICAgICAgICBxMnkgPSBxMi55LFxyXG4gICAgICAgICAgICBxMnogPSBxMi56LFxyXG4gICAgICAgICAgICBxMncgPSBxMi53O1xyXG5cclxuICAgICAgICBkZXN0LnggPSBxMXggKiBxMncgKyBxMXcgKiBxMnggKyBxMXkgKiBxMnogLSBxMXogKiBxMnk7XHJcbiAgICAgICAgZGVzdC55ID0gcTF5ICogcTJ3ICsgcTF3ICogcTJ5ICsgcTF6ICogcTJ4IC0gcTF4ICogcTJ6O1xyXG4gICAgICAgIGRlc3QueiA9IHExeiAqIHEydyArIHExdyAqIHEyeiArIHExeCAqIHEyeSAtIHExeSAqIHEyeDtcclxuICAgICAgICBkZXN0LncgPSBxMXcgKiBxMncgLSBxMXggKiBxMnggLSBxMXkgKiBxMnkgLSBxMXogKiBxMno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3Jvc3MgKCBxMTogcXVhdCwgcTI6IHF1YXQsIGRlc3Q6IHF1YXQgfCBudWxsID0gbnVsbCApOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgcXVhdCgpO1xyXG5cclxuICAgICAgICBsZXQgcTF4ID0gcTEueCxcclxuICAgICAgICAgICAgcTF5ID0gcTEueSxcclxuICAgICAgICAgICAgcTF6ID0gcTEueixcclxuICAgICAgICAgICAgcTF3ID0gcTEudyxcclxuXHJcbiAgICAgICAgICAgIHEyeCA9IHEyLngsXHJcbiAgICAgICAgICAgIHEyeSA9IHEyLnksXHJcbiAgICAgICAgICAgIHEyeiA9IHEyLnosXHJcbiAgICAgICAgICAgIHEydyA9IHEyLnc7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHExdyAqIHEyeiArIHExeiAqIHEydyArIHExeCAqIHEyeSAtIHExeSAqIHEyeDtcclxuICAgICAgICBkZXN0LnkgPSBxMXcgKiBxMncgLSBxMXggKiBxMnggLSBxMXkgKiBxMnkgLSBxMXogKiBxMno7XHJcbiAgICAgICAgZGVzdC56ID0gcTF3ICogcTJ4ICsgcTF4ICogcTJ3ICsgcTF5ICogcTJ6IC0gcTF6ICogcTJ5O1xyXG4gICAgICAgIGRlc3QudyA9IHExdyAqIHEyeSArIHExeSAqIHEydyArIHExeiAqIHEyeCAtIHExeCAqIHEyejtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaG9ydE1peCAoIHExOiBxdWF0LCBxMjogcXVhdCwgdGltZTogbnVtYmVyLCBkZXN0OiBxdWF0IHwgbnVsbCA9IG51bGwgKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHF1YXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCB0aW1lIDw9IDAuMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxMS5jb3B5KHExKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIHRpbWUgPj0gMS4wIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHEyLmNvcHkoZGVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb3MgPSBxdWF0LmRvdCggcTEsIHEyICksXHJcbiAgICAgICAgICAgIHEyYSA9IHEyLmNvcHkoKTtcclxuXHJcbiAgICAgICAgaWYgKCBjb3MgPCAwLjAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcTJhLmludmVyc2UoKTtcclxuICAgICAgICAgICAgY29zID0gLWNvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrMDogbnVtYmVyLFxyXG4gICAgICAgICAgICBrMTogbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAoIGNvcyA+IDAuOTk5OSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrMCA9IDEgLSB0aW1lO1xyXG4gICAgICAgICAgICBrMSA9IDAgKyB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2luOiBudW1iZXIgPSBNYXRoLnNxcnQoIDEgLSBjb3MgKiBjb3MgKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlOiBudW1iZXIgPSBNYXRoLmF0YW4yKCBzaW4sIGNvcyApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9uZU92ZXJTaW46IG51bWJlciA9IDEgLyBzaW47XHJcblxyXG4gICAgICAgICAgICBrMCA9IE1hdGguc2luKCAoIDEgLSB0aW1lICkgKiBhbmdsZSApICogb25lT3ZlclNpbjtcclxuICAgICAgICAgICAgazEgPSBNYXRoLnNpbiggKCAwICsgdGltZSApICogYW5nbGUgKSAqIG9uZU92ZXJTaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZXN0LnggPSBrMCAqIHExLnggKyBrMSAqIHEyYS54O1xyXG4gICAgICAgIGRlc3QueSA9IGswICogcTEueSArIGsxICogcTJhLnk7XHJcbiAgICAgICAgZGVzdC56ID0gazAgKiBxMS56ICsgazEgKiBxMmEuejtcclxuICAgICAgICBkZXN0LncgPSBrMCAqIHExLncgKyBrMSAqIHEyYS53O1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1peCAoIHExOiBxdWF0LCBxMjogcXVhdCwgdGltZTogbnVtYmVyLCBkZXN0OiBxdWF0IHwgbnVsbCA9IG51bGwgKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHF1YXQoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvc0hhbGZUaGV0YSA9IHExLnggKiBxMi54ICsgcTEueSAqIHEyLnkgKyBxMS56ICogcTIueiArIHExLncgKiBxMi53O1xyXG5cclxuICAgICAgICBpZiAoIE1hdGguYWJzKCBjb3NIYWxmVGhldGEgKSA+PSAxLjAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcTEuY29weShkZXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFsZlRoZXRhID0gTWF0aC5hY29zKCBjb3NIYWxmVGhldGEgKSxcclxuICAgICAgICAgICAgc2luSGFsZlRoZXRhID0gTWF0aC5zcXJ0KCAxLjAgLSBjb3NIYWxmVGhldGEgKiBjb3NIYWxmVGhldGEgKTtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggc2luSGFsZlRoZXRhICkgPCAwLjAwMSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0LnggPSBxMS54ICogMC41ICsgcTIueCAqIDAuNTtcclxuICAgICAgICAgICAgZGVzdC55ID0gcTEueSAqIDAuNSArIHEyLnkgKiAwLjU7XHJcbiAgICAgICAgICAgIGRlc3QueiA9IHExLnogKiAwLjUgKyBxMi56ICogMC41O1xyXG4gICAgICAgICAgICBkZXN0LncgPSBxMS53ICogMC41ICsgcTIudyAqIDAuNTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhdGlvQSA9IE1hdGguc2luKCAoIDEgLSB0aW1lICkgKiBoYWxmVGhldGEgKSAvIHNpbkhhbGZUaGV0YSxcclxuICAgICAgICAgICAgcmF0aW9CID0gTWF0aC5zaW4oIHRpbWUgKiBoYWxmVGhldGEgKSAvIHNpbkhhbGZUaGV0YTtcclxuXHJcbiAgICAgICAgZGVzdC54ID0gcTEueCAqIHJhdGlvQSArIHEyLnggKiByYXRpb0I7XHJcbiAgICAgICAgZGVzdC55ID0gcTEueSAqIHJhdGlvQSArIHEyLnkgKiByYXRpb0I7XHJcbiAgICAgICAgZGVzdC56ID0gcTEueiAqIHJhdGlvQSArIHEyLnogKiByYXRpb0I7XHJcbiAgICAgICAgZGVzdC53ID0gcTEudyAqIHJhdGlvQSArIHEyLncgKiByYXRpb0I7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQXhpcyAoIGF4aXM6IHZlYzMsIGFuZ2xlOiBudW1iZXIsIGRlc3Q6IHF1YXQgfCBudWxsID0gbnVsbCApOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgcXVhdCgpO1xyXG5cclxuICAgICAgICBhbmdsZSAqPSAwLjU7XHJcbiAgICAgICAgbGV0IHNpbiA9IE1hdGguc2luKCBhbmdsZSApO1xyXG5cclxuICAgICAgICBkZXN0LnggPSBheGlzLnggKiBzaW47XHJcbiAgICAgICAgZGVzdC55ID0gYXhpcy55ICogc2luO1xyXG4gICAgICAgIGRlc3QueiA9IGF4aXMueiAqIHNpbjtcclxuICAgICAgICBkZXN0LncgPSBNYXRoLmNvcyggYW5nbGUgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlkZW50aXR5ID0gbmV3IHF1YXQoKS5zZXRJZGVudGl0eSgpO1xyXG4gICAgc3RhdGljIHEwID0gbmV3IHF1YXQoKTtcclxuICAgIHN0YXRpYyBxMSA9IG5ldyBxdWF0KCk7XHJcbiAgICBzdGF0aWMgcTIgPSBuZXcgcXVhdCgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdmVyeHRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIgfSBmcm9tIFwiLi9jb3JlL3NoYWRlci9MaWdodFNoYWRlckNvZGVcIjtcbmltcG9ydCBjdWJlRGF0YSBmcm9tIFwiLi9jb3JlL2dlb21ldHJpZS9jdWJlRGF0YVwiO1xuaW1wb3J0IHsgZ2V0U2hhZGVyVW5pZm9ybXMsIGluaXRTaGFkZXJzLCBpbml0VmVydGV4QnVmZmVyc30gZnJvbSBcIi4vY29yZS9zaGFkZXIvQmFzZVwiO1xuaW1wb3J0IHsgZ2V0V2ViR0xDb250ZXh0IH0gZnJvbSBcIi4vY29yZS9yZW5kZXIvQmFzZVwiO1xuaW1wb3J0IHsgbWF0NCwgdmVjMyB9IGZyb20gXCIuL2xpYi9tYXRoL1RTTWF0aFwiO1xuXG5sZXQgbWlhbiA9ICgpID0+IHtcbiAgICBsZXQgY2FudmFzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbmtlXCIpXG5cbiAgICBsZXQgZ2w6IGFueSA9IGdldFdlYkdMQ29udGV4dChjYW52YXMpO1xuXG4gICAgaWYgKCFpbml0U2hhZGVycyhnbCwgdmVyeHRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbHVyZSB0byBpbml0IHNoYWRlcnNcIilcbiAgICB9XG5cbiAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICBsZXQgbiA9IGluaXRWZXJ0ZXhCdWZmZXJzKGdsLCBjdWJlRGF0YSk7XG4gICAgbGV0IGxpZ2h0U2hhZGVyVW5pZm9ybU9iaiA9IHsndV9MaWdodENvbG9yJzogbnVsbCwgJ3VfTGlnaHREaXJlY3Rpb24nOiBudWxsLCAndV9BbWJpZW50TGlnaHQnOm51bGwsICd1X05vcm1hbE1hdHJpeCc6bnVsbCwgJ3VfTXZwTWF0cml4JzpudWxsfTtcbiAgICBsZXQgdW5pZm9ybU9iaiA9ICBnZXRTaGFkZXJVbmlmb3JtcyhnbCwgbGlnaHRTaGFkZXJVbmlmb3JtT2JqKVxuICAgIC8vIOiuvue9ruWFiee6v+minOiJslxuICAgIGdsLnVuaWZvcm0zZih1bmlmb3JtT2JqLnVfTGlnaHRDb2xvciwgMS4wLCAxLjAsIDEuMCkgLy8g6K6+572u5YWJ57q/6aKc6Imy5Li655m95YWJXG4gICAgLy8g6K6+572u5YWJ57q/5pa55ZCRXG4gICAgbGV0IExpZ2h0RGlyZWN0aW9uID0gbmV3IHZlYzMoWzAuNSwgMy4wLCA0LjBdKTsgLy8g6K6+572u5YWJ57q/5pa55ZCRIOS4lueVjOWdkOagh+ezu+S4i1xuICAgIExpZ2h0RGlyZWN0aW9uLm5vcm1hbGl6ZSgpOyAvLyDlvZLkuIDljJZcbiAgICBnbC51bmlmb3JtM2Z2KHVuaWZvcm1PYmoudV9MaWdodERpcmVjdGlvbiwgTGlnaHREaXJlY3Rpb24udmFsdWVzKVxuICAgIC8vIOeOr+Wig+WFiVxuICAgIGdsLnVuaWZvcm0zZih1bmlmb3JtT2JqLnVfQW1iaWVudExpZ2h0LCAwLjIsIDAuMiwgMC4yKVxuXG4gICAgLy8g6K6+572u5rOV5ZCR6YeP5Y+Y5o2i55+p6Zi1IFxuICAgIGxldCBub3JtYWxNYXRyaXggPSBuZXcgbWF0NChbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV0pO1xuICAgIGxldCBtb2RlbE1hdHJpeCA9IG5ldyBtYXQ0KFsxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxXSk7IC8vIOaooeWei+efqemYtVxuXG4gICAgbW9kZWxNYXRyaXgudHJhbnNsYXRlKG5ldyB2ZWMzKFswLCAwLjUsIDBdKSk7Ly956L205bmz56e7XG4gICAgbW9kZWxNYXRyaXgucm90YXRlKDAsIG5ldyB2ZWMzKFswLCAwLCAxXSkpOy8v57uVeui9tOaXi+i9rFxuXG4gICAgLy8g6K6+572u5qih5Z6L6KeG5Zu+5oqV5b2x55+p6Zi1XG4gICAgbGV0IG12cE1hdHJpeCA9IG5ldyBtYXQ0KCk7XG4gICAgLy8g6K6+572u5oqV5b2x55+p6Zi1XG4gICAgbGV0IHBlcnNwZWN0aXZlTWF0cml4ID0gbWF0NC5wZXJzcGVjdGl2ZSgzMCwgY2FudmFzLmNsaWVudFdpZHRoIC8gY2FudmFzLmNsaWVudEhlaWdodCwgMSwgMTAwKTtcblxuXG4gICAgbGV0IGxvb2tBdE1hdHJpeCA9IG1hdDQubG9va0F0KG5ldyB2ZWMzKFsxLCAtMSwgM10pLCBuZXcgdmVjMyhbMCwgMCwgMF0pLCBuZXcgdmVjMyhbMCwgMSwgMF0pKTtcblxuICAgIG12cE1hdHJpeC5tdWx0aXBseShwZXJzcGVjdGl2ZU1hdHJpeCk7XG4gICAgbXZwTWF0cml4Lm11bHRpcGx5KGxvb2tBdE1hdHJpeCk7XG4gICAgbXZwTWF0cml4Lm11bHRpcGx5KG1vZGVsTWF0cml4KTtcblxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybU9iai51X012cE1hdHJpeCwgZmFsc2UsIG12cE1hdHJpeC52YWx1ZXMpO1xuXG4gICAgbm9ybWFsTWF0cml4LmludmVyc2UobW9kZWxNYXRyaXgpO1xuICAgIG5vcm1hbE1hdHJpeC50cmFuc3Bvc2UoKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1PYmoudV9Ob3JtYWxNYXRyaXgsIGZhbHNlLCBub3JtYWxNYXRyaXgudmFsdWVzKTtcblxuICAgIC8vIOa4hemZpOminOiJsue8k+WGsuWMuuWSjOa3seW6pue8k+WGsuWMulxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuICAgIC8vIOe7mOWItueri+aWueS9k1xuICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIG4sIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICBcbiAgICByZXR1cm5cbn1cblxud2luZG93Lm9ubG9hZCA9IG1pYW47XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=