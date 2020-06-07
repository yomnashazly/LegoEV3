
function simulation() {




	// colourSensorAmbientFunction();
	//debugger;
	//ultrasonicSensorFunction();
	// colourSensorFunctionImage();
	// colourSensorFunction();
	//  infraredSensorProximityFunction();

	// rotateRobot( 0.01 );
//	runCode();
// startMoving();
// moveRobot(0.3);
try {
    eval(localStorage.getItem("code"));
  } catch (e) {
    alert(e);
  }

}
