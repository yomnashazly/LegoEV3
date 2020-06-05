/* eslint-disable no-undef */

function touchSensorFunction() {

	// if (touchSensorOn == false) {
	//   //touchSensorOn = false;
	//   document.getElementById("sensorValue").value = "Touch Sensor = Off";
	// } else {
	document.getElementById( 'Touch' ).innerHTML =
    'Touch Sensor = On, Value = ' + touchSensor;
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
		console.log( result[ 0 ] );


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




			document.getElementById( 'Colour' ).innerHTML =
        'Colour Sensor = On, Mode = Colour, Value = ' + colourSensor;

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
    'Colour Sensor = On, Mode = Colour, Value = ' + colourSensor;

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
	document.getElementById( 'Colour' ).innerHTML =
    'Colour Sensor = On, Mode = Ambient Light Intensity, Value = ' +colourSensorAmbient;
 

}



function gyroSensorFunction() {

	// if (gyroSensorOn == true) {
	//   document.getElementById("sensorValue").value = "Gyro Sensor = Off";
	//   gyroSensorOn = false;
	// } else {
	//   gyroSensorOn = true;
	document.getElementById( 'Gyro' ).innerHTML =
    ' Gyro Sensor = On, Rate of Rotation:' +
    gyroSensorRateofRotation +
    'Total Angle:' +
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

		console.log( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );

		console.log( triangleGeometry.vertices[ 1 ].x, triangleGeometry.vertices[ 1 ].z );

		console.log( triangleGeometry.vertices[ 2 ].x, triangleGeometry.vertices[ 2 ].z );

		var result = intersect( fig1, fig2 );
		console.log( result[ 0 ] );


		//	var isInside = pointIsInPoly( child.position, triangleGeometry );
		if ( result[ 0 ] != undefined ) {


			var changeX = child.position.x - cube2.position.x;
			var changeZ = child.position.z - cube2.position.z;
			ultrasonicSensor = Math.sqrt( changeX * changeX + changeZ * changeZ );
			document.getElementById( 'Ultrasonic' ).innerHTML =
        'Ultrasonic Sensor = On, value= ' + ultrasonicSensor + " " + i;

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
    'Ultrasonic Sensor = On,  Value = ' + ultrasonicSensor;

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

		console.log( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );

		console.log( triangleGeometry.vertices[ 1 ].x, triangleGeometry.vertices[ 1 ].z );

		console.log( triangleGeometry.vertices[ 2 ].x, triangleGeometry.vertices[ 2 ].z );

		var result = intersect( fig1, fig2 );
		console.log( result[ 0 ] );


		//	var isInside = pointIsInPoly( child.position, triangleGeometry );
		if ( result[ 0 ] != undefined ) {


			var changeX = child.position.x - cube2.position.x;
			var changeZ = child.position.z - cube2.position.z;
			infraredSensor = Math.sqrt( changeX * changeX + changeZ * changeZ ) / 70 * 100;
			document.getElementById( 'Infrared' ).innerHTML =
        'Infrared Sensor = On, value= ' + infraredSensor + " " + i;

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
        'Infrared Sensor = On, value= ' + infraredSensor + " " + i;

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
	camera.position.x = body.position.x;
		camera.position.z = body.position.z;
		camera.position.y = 50;

	var read = new Float32Array( 4 );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	toScreenPosition( cube2, camera );
	renderer.readRenderTargetPixels( rtTexture, pixelX, pixelY, 1, 1, read );

	console.log(
		'r:' +
      read[ 0 ].toFixed() +
      'g:' +
      read[ 1 ].toFixed() +
      'b:' +
      read[ 2 ].toFixed(),
	);

	document.getElementById( 'Colour' ).innerHTML =
    'r:' +
    read[ 0 ].toFixed() +
    'g:' +
    read[ 1 ].toFixed() +
    'b:' +
    read[ 2 ].toFixed();

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