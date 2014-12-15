 // HelloPoint2.js
 // Vertex shader program
 var VSHADER_SOURCE =
 'attribute vec4 a_Position;\n' +
 'attribute float a_PointSize;\n' +
 'void main() {\n' +
 ' gl_Position = a_Position;\n' +
 ' gl_PointSize = a_PointSize;\n' +
 '}\n';
 
 // Fragment shader program
 var FSHADER_SOURCE =
  'void main() {\n' +
  ' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
 '}\n'; 
 // Fragment shader program
 
 function main() {
 // Retrieve <canvas> element
 var canvas = document.getElementById('webgl');
 
  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas); 
  if(!gl){
    console.log("Failed to get webGL context");
  }

  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log("Failed to initialize shaders")
  }
  // Get the storage location of attribute variable
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
  if (a_Position < 0 || a_PointSize < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

 // Pass vertex position to attribute variable
 gl.vertexAttrib3f(a_Position, 0.2, 0.0, 0.0);

 gl.vertexAttrib1f(a_PointSize, 30.0);

 // Set the color for clearing <canvas>
 gl.clearColor(0.5, 0.5, 0.0, 1.0);

 // Clear <canvas>
 gl.clear(gl.COLOR_BUFFER_BIT);

 // Draw a point
 gl.drawArrays(gl.POINTS, 0, 1);
} 

main();