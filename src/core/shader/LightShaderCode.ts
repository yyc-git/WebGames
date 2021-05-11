let verxtexShader: String =
    `  
    attribute vec4 a_Position;
    // attribute vec4 a_Color;   // 表面基底颜色
    attribute vec4 a_Normal;  // 法向量


    uniform vec3 u_Color;
    uniform float u_Alpha;

    // TODO use u_ModelMatrix, u_ViewMatrix, u_ProjectionMatrix instead
    uniform mat4 u_MvpMatrix; // 模型视图投影矩阵

    uniform vec3 u_LightColor; // 光源颜色
    uniform vec3 u_LightDirection; // 归一化的世界坐标(入射光方向) 
    uniform vec3 u_AmbientLight; // 环境光颜色
    uniform mat4 u_NormalMatrix; // 变换法向量矩阵

    varying vec4 v_Color;
    // 顶点着色器        
    void main() {
      // 设置坐标
      gl_Position = u_MvpMatrix * a_Position;

      vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));

      // 计算光线方向和法向量的点积  相当于计算 cos夹角 余弦值
      float nDotL = max(dot(u_LightDirection, normal), 0.0);
      // 计算漫反射光的颜色
      vec3 diffuse = u_LightColor * u_Color * nDotL;




      // 计算环境光产生的反射光颜色
      // vec3 ambient = u_AmbientLight * a_Color.rgb;
      vec3 ambient = u_AmbientLight;

      v_Color = vec4(diffuse + ambient, u_Alpha);
    }
`

let fragmentShader:string =
    ` 
    // 声明浮点数精度
    precision mediump float;
    
    varying vec4 v_Color;
    // 片元着色器     
    void main() {
      // 设置颜色
      gl_FragColor = v_Color;
    }
`
export { verxtexShader, fragmentShader }