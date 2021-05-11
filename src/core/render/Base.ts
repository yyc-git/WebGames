import { WebGLContextConfigType } from "./BaseType"
let getWebGLContext = (canvas: any, userConfig?: WebGLContextConfigType): any => {
    let defaultConfig: WebGLContextConfigType = {
        alpha: true,
        antialias: true,
        depth: true,
        failIfMajorPerformanceCaveat: false,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        stencil: false,
    };

    let config: WebGLContextConfigType = {
        ...defaultConfig,
        ...userConfig
    }

    return canvas.getContext("webgl", config)
}

export { getWebGLContext }