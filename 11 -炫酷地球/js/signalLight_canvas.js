//创建画布
var signalLight_canvas = document.createElement('canvas');
//设置画布大小
signalLight_canvas.width = 10;
signalLight_canvas.height=10;
//创建一个用于在画布上绘图的环境
var context = signalLight_canvas.getContext('2d');
//3.绘制圆圈
context.beginPath();//开始绘制
context.arc(95,50,40,0,2*Math.PI);//arc 的意思是“弧”
context.strokeStyle="blue";//将线条颜色设置为蓝色
context.stroke();//stroke() 方法默认颜色是黑色（如果没有上面一行，则会是黑色）

//阴影画布转成纹理
var signalLight_texture = new THREE.Texture(signalLight_canvas);
signalLight_texture.needsUpdate = true;
//将阴影纹理用于材质上
var shadowmaterial = new THREE.MeshBasicMaterial({map:signalLight_texture});
//创建一个平面
var shadowGeometry = new THREE.PlaneGeometry(300,300,1,1);
//平面与材质结合（创建三个网格模型，并加入到场景中）
var signalLight_mesh = new THREE.Mesh(shadowGeometry,shadowmaterial);
// signalLight_mesh.position.y = -160;
// signalLight_mesh.rotation.x = -Math.PI / 2;