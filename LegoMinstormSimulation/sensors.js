/* eslint-disable no-undef */

function touchSensorFunction() {



	if ( confirm( "Do you want to Bump Sensor?" ) ) {
		touchSensor = "bumped";
	
		// console.log("Thing was saved to the database.");
	} else {
		// Do nothing!
		if ( touchSensor == "released" ) {
			console.log( "dakhal" );
			touchSensor = "pressed";
			console.log( touchSensor );

		} else {
	
				if ( touchSensor == "pressed" ) {
					touchSensor = "released";

				} else {
					if ( touchSensor == "bumped" ) {
						touchSensor = "released";
					
					}
				}
			}
		}
		
	

	document.getElementById( 'Touch' ).innerHTML =
    'Touch Sensor = ' + touchSensor;
	// }

}

function colourSensorFunction() {


var value = new Array( group.children.length );

	for ( var i = 0; i < group.children.length; i ++ ) {


		var child = group.children[ i ];

		// var box = new THREE.Box3();

		// child.geometry.computeBoundingBox();


		// box.copy( child.geometry.boundingBox ).applyMatrix4( mesh.matrixWorld );

		var fig1 = [
			{ x: child.position.x - 5, y: child.position.z - 5 },
			{ x: child.position.x + 5, y: child.position.z - 5 },
			{ x: child.position.x + 5, y: child.position.z + 5 },
			{ x: child.position.x - 5, y: child.position.z + 5 },

		];


		// var fig1 = [
		// 	{ x: box.min.x, y: box.min.z },
		// 	{ x: box.min.x, y: box.max.z },
		// 	{ x: box.max.x, y: box.max.z },
		// 	{ x: box.max.x, y: box.min.z }
		// ];


		var fig2 = [
			{ x: triangleGeometry4.vertices[ 0 ].x, y: triangleGeometry4.vertices[ 0 ].z },
			{ x: triangleGeometry4.vertices[ 1 ].x, y: triangleGeometry4.vertices[ 1 ].z },
			{ x: triangleGeometry4.vertices[ 2 ].x, y: triangleGeometry4.vertices[ 2 ].z }

		];

		

		var result = intersect( fig1, fig2 );
		// console.log( result[ 0 ] );


		//	var isInside = pointIsInPoly( child.position, triangleGeometry );
		if ( result[ 0 ] != undefined ) {

			value[ i ] = true;
			colourSensor = child.material.color.getHexString();
		//	colourSensor = child.material.color.g;
			var string = "#"+ colourSensor ;
			let result = ntc.name(string);
colourSensor = result;
// let rgb_value = result[0];      // #6495ed         : RGB value of closest match
 let specific_name = result[1];  // Cornflower Blue : Color name of closest match
// let shade_value = result[2];    // #0000ff         : RGB value of shade of closest match
// let shade_name = result[3];     // Blue            : Color name of shade of closest match
// let is_exact_match = result[4];
 colourSensor = specific_name;


colourSensor = colourSensor.toLowerCase();

			document.getElementById( 'Colour' ).innerHTML =
        'Colour Sensor Value = ' + colourSensor.toLowerCase();

		} else {

			value[ i ] = false;

		}

	}

	var counter = 0;
	for ( var i = 0; i < value.length; i ++ ) {

		if ( value[ i ] == true ) {

			counter ++;

		}

	}
	if ( counter == 0 ) {

		colourSensor = "No Colour";
		document.getElementById( 'Colour' ).innerHTML =
    'Colour Sensor Value = ' + colourSensor;

	}

}

function colourSensorReflectedFunction() {

	if ( colourSensorOn == true ) {

		document.getElementById( 'sensorValue' ).value = 'Colour Sensor = Off';
		colourSensorOn = false;

	} else {

		colourSensorOn = true;

		if ( document.getElementById( 'reflected' ) ) {

			document.getElementById( 'sensorValue' ).value =
        'Colour Sensor = On, Mode = Reflected Light Intensity';

		}

	}

}

function colourSensorAmbientFunction() {

	// if (colourSensorOn == true) {
	//   document.getElementById("sensorValue").value = "Colour Sensor = Off";
	//   colourSensorOn = false;
	// } else {
	//   colourSensorOn = true;

	//   if (document.getElementById("ambient")) {
	//     document.getElementById("sensorValue").value =
	//       "Colour Sensor = On, Mode = Ambient Light Intensity";
	//   }
	// }
colourSensorAmbient =    light.intensity * 100;
	document.getElementById( 'ColourA' ).innerHTML =
    'Ambient Light Intensity, Value = ' +colourSensorAmbient;
 

}



function gyroSensorFunction() {

	// if (gyroSensorOn == true) {
	//   document.getElementById("sensorValue").value = "Gyro Sensor = Off";
	//   gyroSensorOn = false;
	// } else {
	//   gyroSensorOn = true;
	document.getElementById( 'Gyro' ).innerHTML =
    ' Gyro Sensor, Rate of Rotation:' +
    gyroSensorRateofRotation +
    'Angle:' +
    gyroSensorTotalAngleRotation;

}

function ultrasonicSensorFunction() {


	var value = new Array( group.children.length );

	for ( var i = 0; i < group.children.length; i ++ ) {


		var child = group.children[ i ];

		// var box = new THREE.Box3();

		// child.geometry.computeBoundingBox();


		// box.copy( child.geometry.boundingBox ).applyMatrix4( mesh.matrixWorld );

		var fig1 = [
			{ x: child.position.x - 5, y: child.position.z - 5 },
			{ x: child.position.x + 5, y: child.position.z - 5 },
			{ x: child.position.x + 5, y: child.position.z + 5 },
			{ x: child.position.x - 5, y: child.position.z + 5 },

		];


		// var fig1 = [
		// 	{ x: box.min.x, y: box.min.z },
		// 	{ x: box.min.x, y: box.max.z },
		// 	{ x: box.max.x, y: box.max.z },
		// 	{ x: box.max.x, y: box.min.z }
		// ];


		var fig2 = [
			{ x: triangleGeometry.vertices[ 0 ].x, y: triangleGeometry.vertices[ 0 ].z },
			{ x: triangleGeometry.vertices[ 1 ].x, y: triangleGeometry.vertices[ 1 ].z },
			{ x: triangleGeometry.vertices[ 2 ].x, y: triangleGeometry.vertices[ 2 ].z }

		];

		// console.log( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );

		// console.log( triangleGeometry.vertices[ 1 ].x, triangleGeometry.vertices[ 1 ].z );

		// console.log( triangleGeometry.vertices[ 2 ].x, triangleGeometry.vertices[ 2 ].z );

		var result = intersect( fig1, fig2 );
		// console.log( result[ 0 ] );


		//	var isInside = pointIsInPoly( child.position, triangleGeometry );
		if ( result[ 0 ] != undefined ) {


			var changeX = child.position.x - cube2.position.x;
			var changeZ = child.position.z - cube2.position.z;
			ultrasonicSensor = Math.sqrt( changeX * changeX + changeZ * changeZ );
			ultrasonicSensor = ultrasonicSensor.toFixed(2);
			document.getElementById( 'Ultrasonic' ).innerHTML =
        'Ultrasonic Sensor Value= ' + ultrasonicSensor 

			value[ i ] = true;

		} else {

			value[ i ] = false;

		}

	}


	var counter = 0;
	for ( var i = 0; i < value.length; i ++ ) {

		if ( value[ i ] == true ) {

			counter ++;

		}

	}
	if ( counter == 0 ) {

		ultrasonicSensor = 0;
		document.getElementById( 'Ultrasonic' ).innerHTML =
    'Ultrasonic Sensor Value = ' + ultrasonicSensor;

	}




}

function infraredSensorProximityFunction() {


	var value = new Array( group.children.length );

	for ( var i = 0; i < group.children.length; i ++ ) {


		var child = group.children[ i ];

		// var box = new THREE.Box3();

		// child.geometry.computeBoundingBox();


		// box.copy( child.geometry.boundingBox ).applyMatrix4( mesh.matrixWorld );

		var fig1 = [
			{ x: child.position.x - 5, y: child.position.z - 5 },
			{ x: child.position.x + 5, y: child.position.z - 5 },
			{ x: child.position.x + 5, y: child.position.z + 5 },
			{ x: child.position.x - 5, y: child.position.z + 5 },

		];


		// var fig1 = [
		// 	{ x: box.min.x, y: box.min.z },
		// 	{ x: box.min.x, y: box.max.z },
		// 	{ x: box.max.x, y: box.max.z },
		// 	{ x: box.max.x, y: box.min.z }
		// ];


		var fig2 = [
			{ x: triangleGeometry2.vertices[ 0 ].x, y: triangleGeometry2.vertices[ 0 ].z },
			{ x: triangleGeometry2.vertices[ 1 ].x, y: triangleGeometry2.vertices[ 1 ].z },
			{ x: triangleGeometry2.vertices[ 2 ].x, y: triangleGeometry2.vertices[ 2 ].z }

		];

		// console.log( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );

		// console.log( triangleGeometry.vertices[ 1 ].x, triangleGeometry.vertices[ 1 ].z );

		// console.log( triangleGeometry.vertices[ 2 ].x, triangleGeometry.vertices[ 2 ].z );

		var result = intersect( fig1, fig2 );
		// console.log( result[ 0 ] );


		//	var isInside = pointIsInPoly( child.position, triangleGeometry );
		if ( result[ 0 ] != undefined ) {


			var changeX = child.position.x - cube2.position.x;
			var changeZ = child.position.z - cube2.position.z;
			infraredSensor = Math.sqrt( changeX * changeX + changeZ * changeZ ) / 70 * 100;
			infraredSensor = infraredSensor.toFixed(2);
			document.getElementById( 'Infrared' ).innerHTML =
        'Infrared Sensor Value= ' + infraredSensor 

			value[ i ] = true;

		} else {

			value[ i ] = false;

		}

	}


	var counter = 0;
	for ( var i = 0; i < value.length; i ++ ) {

		if ( value[ i ] == true ) {

			counter ++;

		}

	}
	if ( counter == 0 ) {

		infraredSensor = 0;
		document.getElementById( 'Infrared' ).innerHTML =
        'Infrared Sensor Value= ' + infraredSensor ;

	}

}

function onDocumentMouseMove( event ) {

	// mouseX = event.clientX ;
	// mouseY = event.clientY ;

	mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;

	// mouseX = event.clientX - windowHalfX;
	// mouseY = event.clientY - windowHalfY;
	// mouseZ = event.clientZ;

}
function colourSensorFunctionImage() {
	colourImage = true;
	// // camera.lookAt( new THREE.Vector3( 0, -1,0) );
	// camera.position.x = body.position.x;
	// 	camera.position.z = body.position.z;
	// 	camera.position.y = 50;
		// renderer.setSize(
		// 	width,
		// 	height );

		// console.log( camera.position.x , body.position.x);
		// console.log( camera.position.z , body.position.z);

		// console.log(camera.position.y);
		

	var read = new Float32Array( 4 );


	toScreenPosition( cube2, camera );
	renderer.readRenderTargetPixels( rtTexture, pixelX, pixelY, 1, 1, read );

	console.log(
		'r:' +
      read[ 0 ].toFixed() +
      ' g:' +
      read[ 1 ].toFixed() +
      ' b:' +
      read[ 2 ].toFixed(),
	);

    colourSensorImage = 'r:' +
    read[ 0 ].toFixed(2)+
    'g:' +
    read[ 1 ].toFixed(2) +
    'b:' +
	read[ 2 ].toFixed(2);
	document.getElementById( 'ColourI' ).innerHTML = "Colour Sensor Image = "+ colourSensorImage;
	
	// colourImage = false;

}

function toScreenPosition( obj, camera ) {

	var vector = new THREE.Vector3();

	var widthHalf = 0.5 * renderer.getContext().canvas.width;
	var heightHalf = 0.5 * renderer.getContext().canvas.height;

	obj.updateMatrixWorld();
	vector.setFromMatrixPosition( obj.matrixWorld );
	vector.project( camera );

	vector.x = vector.x * widthHalf + widthHalf;
	// vector.x = -4.463079645073373 * widthHalf + widthHalf;
	vector.y = - ( vector.z * heightHalf ) + heightHalf;
	// vector.y = -(vector.z * heightHalf) + heightHalf;

	pixelX = vector.x + 75;
	pixelY = vector.y + 300;

	// pixelX = vector.x ;
	// pixelY = vector.y ;

}

function getAngle(){
	return gyroSensorTotalAngleRotation;
}

function getUltrasonic(){
	return ultrasonicSensor;

}

function getInfrared(){
	return infraredSensor;
}
function getTouchSensor(){
	return touchSensor;
}
function getColourSensor(){
	return colourSensor;
}
function getColourSensorAmbient(){
	return colourSensorAmbient;
}
function getColourSensorImage(){
	return colourSensorImage;
}