

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
		move = true;
		rotate = true;
		///	colourSensorFunction();
	colourSensorFunctionImage();
	//colourSensorAmbientFunction();
	ultrasonicSensorFunction();
	infraredSensorProximityFunction();
	touchSensorFunction();
	gyroSensorFunction();
	moveRobot(0.05);
// 	 try{
// 	 eval(localStorage.getItem("code"));
//  }catch(e){
// 	 alert(e);
//  }
		

	}
	if (reset == true){
		window.location.reload();

	}
	if (pause == true){
		stopRotate();
		stopMoving();
	}




}
