

function start(){
	start = true;
	reset = false;
	pause = false;


}
function reset(){
	reset = true;
	start = false;
	pause = false;

}
function pause(){
	pause = true;
	start = false;
	reset = false;
	

}
function simulation() {

	
	document.getElementById("start").addEventListener("click", function(){
		console.log("start");
		start = true;
		reset = false;
		pause = false;
		
	  });
	  document.getElementById("pause").addEventListener("click", function(){
		console.log("pause");
		pause = true;
	start = false;
	reset = false;
	  });
	  document.getElementById("reset").addEventListener("click", function(){
		console.log("reset");
		reset = true;
	start = false;
	pause = false;
	  });

	if (start == true){
		

		if (x==0){
			startMoving();
			startRotate();
		}
		x++;
		
			colourSensorFunction();
	colourSensorFunctionImage();
	colourSensorAmbientFunction();
	ultrasonicSensorFunction();
	infraredSensorProximityFunction();
	colourSensorFunctionImage();
	//touchSensorFunction();
	gyroSensorFunction();

	// moveRobot(0.2);

	// if (ultrasonicSensor==0){

	// 	stopMoving();

	// }
	
	// if (gyroSensorTotalAngleRotation <300){
	// 	rotateRobot(0.01);
	// }else{
		
	// 	moveRobot(0.2);
	// }
	// rotateRobot(0.02);
	// moveRobot(0.05);
	 try{
	 eval(localStorage.getItem("code"));
 }catch(e){
	 alert(e);
 }
		

	}
	if (reset == true){
		window.location.reload();

	}
	if (pause == true){
		stopRotate();
		stopMoving();
	}




}
