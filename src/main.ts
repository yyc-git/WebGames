import { verxtexShader, fragmentShader } from "./core/shader/LightShaderCode";
import cubeData from "./core/geometrie/cubeData";
import { getShaderUniforms, initShaders, initVertexBuffers} from "./core/shader/Base";
import { getWebGLContext } from "./core/render/Base";
import { mat4, vec3 } from "./lib/math/TSMath";

let mian = () => {
    let canvas: any = document.getElementById("sanke")

    let gl: any = getWebGLContext(canvas);

    if (!initShaders(gl, verxtexShader, fragmentShader)) {
        console.log("Failure to init shaders")
    }

    gl.clearColor(0, 0, 0, 1);
    gl.enable(gl.DEPTH_TEST);
    let n = initVertexBuffers(gl, cubeData);
    let lightShaderUniformObj = {'u_LightColor': null, 'u_LightDirection': null, 'u_AmbientLight':null, 'u_NormalMatrix':null, 'u_MvpMatrix':null};
    let uniformObj =  getShaderUniforms(gl, lightShaderUniformObj)
    // 设置光线颜色
    gl.uniform3f(uniformObj.u_LightColor, 1.0, 1.0, 1.0) // 设置光线颜色为白光
    // 设置光线方向
    let LightDirection = new vec3([0.5, 3.0, 4.0]); // 设置光线方向 世界坐标系下
    LightDirection.normalize(); // 归一化
    gl.uniform3fv(uniformObj.u_LightDirection, LightDirection.values)
    // 环境光
    gl.uniform3f(uniformObj.u_AmbientLight, 0.2, 0.2, 0.2)

    // 设置法向量变换矩阵 
    let normalMatrix = new mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    let modelMatrix = new mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]); // 模型矩阵

    modelMatrix.translate(new vec3([0, 0.5, 0]));//y轴平移
    modelMatrix.rotate(0, new vec3([0, 0, 1]));//绕z轴旋转

    // 设置模型视图投影矩阵
    let mvpMatrix = new mat4();
    // 设置投影矩阵
    let perspectiveMatrix = mat4.perspective(30, canvas.clientWidth / canvas.clientHeight, 1, 100);


    let lookAtMatrix = mat4.lookAt(new vec3([1, -1, 3]), new vec3([0, 0, 0]), new vec3([0, 1, 0]));

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
  
    return
}

window.onload = mian;

