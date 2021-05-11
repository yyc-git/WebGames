// cuon-utils.js (c) 2012 kanda and matsuda
/**
 * Create a program object and make current
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return true, if the program object was created and successfully made current 
 */

function initShaders(gl: any, vshader: any, fshader: any) {
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
function createProgram(gl: any, vshader: any, fshader: any) {
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
function loadShader(gl: any, type: any, source: any) {
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

let initVertexBuffers = (gl: any, cubeData: any) => {
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

    return cubeData.indices.length
}

let initArrayBuffer = (gl: any, data: any, num: number, type: any, attribute: any) => {
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
}

let getShaderUniforms = (gl: any, obj: any) => {
    Object.keys(obj).forEach((uniformName) => {
        obj[uniformName] = gl.getUniformLocation(gl.program, uniformName)
    });
    return obj
}

let getShaderAttributes = (gl: any, arr: Array<string>) => {

}


export { initShaders, initVertexBuffers, getShaderUniforms, getShaderAttributes }