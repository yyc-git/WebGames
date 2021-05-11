TODO finish

let _createBoxGameObjectData = () => {
    // let gameObject = createGameObject();
    // let geometry = createGeometry();
    // setVertices(geometry, cubeData.vertices);
    // setNormals(geometry, cubeData.normals);
    // setIndices(geometry, cubeData.indices);

    // addGeometry(gameObject, geometry);


    // let material = createLightMaterial();
    // setColor(material, [1.0,0.0,0.0]);
    // setAlpha(material, 1.0);

    // addMaterial(gameObject, material);

    // return gameObject;



    return {
        modelMatrix,
        geometryData: {
            vertices,
            normals,
            indices
        }
        materialData: {
            color: [1.0, 0.0, 0.0],
            alpha: 1.0
        }
    }
}

// let _createCameraGameObject = () =>{
//     let gameObject = createGameObject();

// }

let _createCameraGameObjectData = () => {
    return {
        viewMatrix,
        perspectiveMatrix
    }
}

let _loop = () => {
    let _loopBody = (_time: number) => {
        update();
        render();

        requestAnimationFrame(_loopBody);
    }

    requestAnimationFrame(_loopBody);
}

let main = () => {
    //创建场景
    let boxGameObjectData = _createBoxGameObjectData();

    let cameraGameObjectData = _createCameraGameObjectData();

    setSceneData({
        boxGameObjectData,
        cameraGameObjectData
    });

    //初始化
    init({
        canvasWidth: 400,
        canvasHeight: 400
    });

    //主循环
    _loop();
}

window.onload = main;

