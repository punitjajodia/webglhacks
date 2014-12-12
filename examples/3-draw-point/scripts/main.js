(function(){

	var VSHADER_SOURCE = 
	"void main() {\n" +
	"	gl_Position = vec4(100.0, 50.0, 0.0, 1.0);\n" +
	"	gl_PointSize = 10.0;\n" + 
	"}\n";

	var FSHADER_SOURCE = 
	"void main() {\n" + 
	"	gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n" +
	"}\n";	


	function main() {
		var canvas = document.getElementById("webgl");
		var gl = getWebGLContext(canvas);
		
		if(!gl){
			console.log("Failed to get rendering context");
			return;
		}

		if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
			console.log("Failed to initialize shaders");
			return;
		} 

		gl.clearColor(0.0, 0.0,0.0, 1.0);

		gl.clear(gl.COLOR_BUFFER_BIT);
		
		gl.drawArrays(gl.POINTS, 0, 1);
	}
	main();
})();