/* eslint-disable no-undef */
function moveRobot( hyp ) {

	if (move == true){ 
	if ( gyroSensorTotalAngleRotation == 0 ) {

<<<<<<< HEAD
		// wheel.position.x += - hyp;
		// wheel2.position.x += - hyp;
		// wheel3.position.x += - hyp;
		// wheel4.position.x += - hyp;
		// wheel5.position.x += - hyp;
		// wheel6.position.x += - hyp;
		// body.position.x += - hyp;
		// head.x += - hyp;
		meshFloor.position.x +=hyp;
		// triangleGeometry.translate( - hyp, 0, 0 );
		// triangleGeometry2.translate( - hyp, 0, 0 );
		// triangleGeometry3.translate( - hyp, 0, 0 );
		// triangleGeometry4.translate( - hyp, 0, 0 );
		for ( var i = 0; i < group.children.length; i ++ ) {


			var child = group.children[ i ];
			child.position.x+=hyp;
		
		}

		mesh.position.x+=hyp;

		
			
		// 			camera.position.x += - hyp;

		

		
=======
		wheel.position.x += - hyp;
		wheel2.position.x += - hyp;
		wheel3.position.x += - hyp;
		wheel4.position.x += - hyp;
		wheel5.position.x += - hyp;
		wheel6.position.x += - hyp;
		body.position.x += - hyp;
		head.x += - hyp;
		triangleGeometry.translate( - hyp, 0, 0 );
		triangleGeometry2.translate( - hyp, 0, 0 );
		triangleGeometry3.translate( - hyp, 0, 0 );
		triangleGeometry4.translate( - hyp, 0, 0 );
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5

	}
	if ( gyroSensorTotalAngleRotation == 90 ) {

<<<<<<< HEAD
		// wheel.position.z += - hyp;
		// wheel2.position.z += - hyp;
		// wheel3.position.z += - hyp;
		// wheel4.position.z += - hyp;
		// wheel5.position.z += - hyp;
		// wheel6.position.z += - hyp;
		// body.position.z += - hyp;
		// head.z += - hyp;
		// triangleGeometry.translate( 0, 0, - hyp );
		// triangleGeometry2.translate( 0, 0, - hyp );
		// triangleGeometry3.translate( 0, 0, - hyp );
		// triangleGeometry4.translate( 0, 0, - hyp );

		
			
		// 	camera.position.z += - hyp;
		meshFloor.position.z +=hyp;

		for ( var i = 0; i < group.children.length; i ++ ) {


			var child = group.children[ i ];
			child.position.z+=hyp;
		
		}

		mesh.position.z+=hyp;
	
=======
		wheel.position.z += - hyp;
		wheel2.position.z += - hyp;
		wheel3.position.z += - hyp;
		wheel4.position.z += - hyp;
		wheel5.position.z += - hyp;
		wheel6.position.z += - hyp;
		body.position.z += - hyp;
		head.z += - hyp;
		triangleGeometry.translate( 0, 0, - hyp );
		triangleGeometry2.translate( 0, 0, - hyp );
		triangleGeometry3.translate( 0, 0, - hyp );
		triangleGeometry4.translate( 0, 0, - hyp );
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5

	}

	if ( gyroSensorTotalAngleRotation == 180 ) {

<<<<<<< HEAD
		// wheel.position.x += hyp;
		// wheel2.position.x += hyp;
		// wheel3.position.x += hyp;
		// wheel4.position.x += hyp;
		// wheel5.position.x += hyp;
		// wheel6.position.x += hyp;
		// body.position.x += hyp;
		// head.x += hyp;
		// triangleGeometry.translate( hyp, 0, 0 );
		// triangleGeometry2.translate( hyp, 0, 0 );
		// triangleGeometry3.translate( hyp, 0, 0 );
		// triangleGeometry4.translate( hyp, 0, 0 );

		
			
			
		// 	camera.position.x += hyp;

		meshFloor.position.x -=hyp;

		for ( var i = 0; i < group.children.length; i ++ ) {


			var child = group.children[ i ];
			child.position.x-=hyp;
		
		}

		mesh.position.x-=hyp;


		
=======
		wheel.position.x += hyp;
		wheel2.position.x += hyp;
		wheel3.position.x += hyp;
		wheel4.position.x += hyp;
		wheel5.position.x += hyp;
		wheel6.position.x += hyp;
		body.position.x += hyp;
		head.x += hyp;
		triangleGeometry.translate( hyp, 0, 0 );
		triangleGeometry2.translate( hyp, 0, 0 );
		triangleGeometry3.translate( hyp, 0, 0 );
		triangleGeometry4.translate( hyp, 0, 0 );
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5

	}

	if ( gyroSensorTotalAngleRotation == 270 ) {

<<<<<<< HEAD
		// wheel.position.z += hyp;
		// wheel2.position.z += hyp;
		// wheel3.position.z += hyp;
		// wheel4.position.z += hyp;
		// wheel5.position.z += hyp;
		// wheel6.position.z += hyp;
		// body.position.z += hyp;

		// head.z += hyp;
		// triangleGeometry.translate( 0, 0, hyp );
		// triangleGeometry2.translate( 0, 0, hyp );
		// triangleGeometry3.translate( 0, 0, hyp );
		// triangleGeometry4.translate( 0, 0, hyp );
		
			
		
		// 	camera.position.z += hyp;

			meshFloor.position.z -=hyp;

			for ( var i = 0; i < group.children.length; i ++ ) {


				var child = group.children[ i ];
				child.position.z-=hyp;
			
			}
	
			mesh.position.z-=hyp;
		
=======
		wheel.position.z += hyp;
		wheel2.position.z += hyp;
		wheel3.position.z += hyp;
		wheel4.position.z += hyp;
		wheel5.position.z += hyp;
		wheel6.position.z += hyp;
		body.position.z += hyp;

		head.z += hyp;
		triangleGeometry.translate( 0, 0, hyp );
		triangleGeometry2.translate( 0, 0, hyp );
		triangleGeometry3.translate( 0, 0, hyp );
		triangleGeometry4.translate( 0, 0, hyp );

>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5
	}

	if ( gyroSensorTotalAngleRotation < 90 && gyroSensorTotalAngleRotation != 0 ) {

		var adj = hyp * Math.cos( ( - gyroSensorTotalAngleRotation * Math.PI ) / 180 );
		// // //console.log (
		//   gyroSensorTotalAngleRotation,
		//   hyp,
		//   Math.cos(-gyroSensorTotalAngleRotation)
		// );
		var opp = hyp * Math.sin( ( - gyroSensorTotalAngleRotation * Math.PI ) / 180 );
		// // //console.log (
		//   gyroSensorTotalAngleRotation,
		//   hyp,
		//   Math.sin(-gyroSensorTotalAngleRotation)
		// );
		// //console.log (body.position.x, body.position.z);

		// //console.log (adj, opp);
<<<<<<< HEAD
		// wheel.position.z += opp;
		// wheel2.position.z += opp;
		// wheel3.position.z += opp;
		// wheel4.position.z += opp;
		// wheel5.position.z += opp;
		// wheel6.position.z += opp;
		// body.position.z += opp;
		// head.z += opp;

		// wheel.position.x -= adj;
		// wheel2.position.x -= adj;
		// wheel3.position.x -= adj;
		// wheel4.position.x -= adj;
		// wheel5.position.x -= adj;
		// wheel6.position.x -= adj;
		// body.position.x -= adj;
		// head.x -= adj;

	
			
			
		// 			camera.position.x -= adj;
		// 			camera.position.z += opp;



		// triangleGeometry.translate( - adj, 0, opp );
		// triangleGeometry2.translate( - adj, 0, opp );
		// triangleGeometry3.translate( - adj, 0, opp );
		// triangleGeometry4.translate( - adj, 0, opp );


		meshFloor.position.z -=opp;
		meshFloor.position.x +=adj;

		for ( var i = 0; i < group.children.length; i ++ ) {


			var child = group.children[ i ];
			child.position.z-=opp;
			child.position.x+=adj;
		
		}

		mesh.position.z-=opp;
			mesh.position.x+=adj;

		
=======
		wheel.position.z += opp;
		wheel2.position.z += opp;
		wheel3.position.z += opp;
		wheel4.position.z += opp;
		wheel5.position.z += opp;
		wheel6.position.z += opp;
		body.position.z += opp;
		head.z += opp;

		wheel.position.x -= adj;
		wheel2.position.x -= adj;
		wheel3.position.x -= adj;
		wheel4.position.x -= adj;
		wheel5.position.x -= adj;
		wheel6.position.x -= adj;
		body.position.x -= adj;
		head.x -= adj;

		triangleGeometry.translate( - adj, 0, opp );
		triangleGeometry2.translate( - adj, 0, opp );
		triangleGeometry3.translate( - adj, 0, opp );
		triangleGeometry4.translate( - adj, 0, opp );
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5

	}

	if ( gyroSensorTotalAngleRotation < 180 && gyroSensorTotalAngleRotation > 90 ) {

		var ang2 = ( ( 180 - gyroSensorTotalAngleRotation ) * Math.PI ) / 180;
		var adj = hyp * Math.cos( - ang2 );
		var opp = hyp * Math.sin( - ang2 );
		// //console.log (body.position.x, body.position.z);

		// //console.log (adj, opp);
<<<<<<< HEAD
		// wheel.position.z += opp;
		// wheel2.position.z += opp;
		// wheel3.position.z += opp;
		// wheel4.position.z += opp;
		// wheel5.position.z += opp;
		// wheel6.position.z += opp;
		// body.position.z += opp;
		// head.z += opp;

		// wheel.position.x += adj;
		// wheel2.position.x += adj;
		// wheel3.position.x += adj;
		// wheel4.position.x += adj;
		// wheel5.position.x += adj;
		// wheel6.position.x += adj;
		// body.position.x += adj;
		// head.x += adj;
		// triangleGeometry.translate( adj, 0, opp );
		// triangleGeometry2.translate( adj, 0, opp );
		// triangleGeometry3.translate( adj, 0, opp );
		// triangleGeometry4.translate( adj, 0, opp );
		
		
		// 	camera.position.x += adj;
		// 	camera.position.z += opp;

		meshFloor.position.z -=opp;
		meshFloor.position.x -=adj;

		for ( var i = 0; i < group.children.length; i ++ ) {


			var child = group.children[ i ];
			child.position.z-=opp;
			child.position.x-=adj;
		
		}

		mesh.position.z-=opp;
			mesh.position.x-=adj;



=======
		wheel.position.z += opp;
		wheel2.position.z += opp;
		wheel3.position.z += opp;
		wheel4.position.z += opp;
		wheel5.position.z += opp;
		wheel6.position.z += opp;
		body.position.z += opp;
		head.z += opp;

		wheel.position.x += adj;
		wheel2.position.x += adj;
		wheel3.position.x += adj;
		wheel4.position.x += adj;
		wheel5.position.x += adj;
		wheel6.position.x += adj;
		head.x += adj;
		triangleGeometry.translate( adj, 0, opp );
		triangleGeometry2.translate( adj, 0, opp );
		triangleGeometry3.translate( adj, 0, opp );
		triangleGeometry4.translate( adj, 0, opp );
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5

	}

	if (
		gyroSensorTotalAngleRotation < 270 &&
    gyroSensorTotalAngleRotation > 180
	) {

		var ang2 = ( ( 270 - gyroSensorTotalAngleRotation ) * Math.PI ) / 180;
		var adj = hyp * Math.cos( ang2 );
		var opp = hyp * Math.sin( ang2 );

<<<<<<< HEAD
		// wheel.position.x += opp;
		// wheel2.position.x += opp;
		// wheel3.position.x += opp;
		// wheel4.position.x += opp;
		// wheel5.position.x += opp;
		// wheel6.position.x += opp;
		// body.position.x += opp;
		// head.x += opp;

		// wheel.position.z += adj;
		// wheel2.position.z += adj;
		// wheel3.position.z += adj;
		// wheel4.position.z += adj;
		// wheel5.position.z += adj;
		// wheel6.position.z += adj;
		// body.position.z += adj;
		// head.z += adj;
		
			
			

		// 	camera.position.x += opp;
		// 	camera.position.z += adj;


		// triangleGeometry.translate( opp, 0, adj );
		// triangleGeometry2.translate( opp, 0, adj );
		// triangleGeometry3.translate( opp, 0, adj );
		// triangleGeometry4.translate( opp, 0, adj );

		meshFloor.position.x -=opp;
		meshFloor.position.z -=adj;

		for ( var i = 0; i < group.children.length; i ++ ) {


			var child = group.children[ i ];
			child.position.z-=adj;
			child.position.x-=opp;
		
		}

		mesh.position.z-=adj;
			mesh.position.x-=opp;

=======
		wheel.position.x += opp;
		wheel2.position.x += opp;
		wheel3.position.x += opp;
		wheel4.position.x += opp;
		wheel5.position.x += opp;
		wheel6.position.x += opp;
		body.position.x += opp;
		head.x += opp;

		wheel.position.z += adj;
		wheel2.position.z += adj;
		wheel3.position.z += adj;
		wheel4.position.z += adj;
		wheel5.position.z += adj;
		wheel6.position.z += adj;
		body.position.z += adj;
		head.z += adj;

		triangleGeometry.translate( opp, 0, adj );
		triangleGeometry2.translate( opp, 0, adj );
		triangleGeometry3.translate( opp, 0, adj );
		triangleGeometry4.translate( opp, 0, adj );
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5

	}

	if (
		gyroSensorTotalAngleRotation < 360 &&
    gyroSensorTotalAngleRotation > 270
	) {

		var ang2 = ( ( 360 - gyroSensorTotalAngleRotation ) * Math.PI ) / 180;
		var adj = hyp * Math.cos( ang2 );
		var opp = hyp * Math.sin( ang2 );

<<<<<<< HEAD
		// wheel.position.z += opp;
		// wheel2.position.z += opp;
		// wheel3.position.z += opp;
		// wheel4.position.z += opp;
		// wheel5.position.z += opp;
		// wheel6.position.z += opp;
		// body.position.z += opp;
		// head.z += opp;

		// wheel.position.x -= adj;
		// wheel2.position.x -= adj;
		// wheel3.position.x -= adj;
		// wheel4.position.x -= adj;
		// wheel5.position.x -= adj;
		// wheel6.position.x -= adj;
		// body.position.x -= adj;
		// head.x -= adj;

		// triangleGeometry.translate( - adj, 0, opp );
		// triangleGeometry2.translate( - adj, 0, opp );
		// triangleGeometry3.translate( - adj, 0, opp );
		// triangleGeometry4.translate( - adj, 0, opp );
	
			
			
			
		// camera.position.x -= adj;
		// camera.position.z += opp;

		meshFloor.position.z -=opp;
		meshFloor.position.x +=adj;

		for ( var i = 0; i < group.children.length; i ++ ) {


			var child = group.children[ i ];
			child.position.z-=opp;
			child.position.x+=adj;
		
		}

		mesh.position.z-=opp;
			mesh.position.x+=adj;




	}

if (rotate==false){

=======
		wheel.position.z += opp;
		wheel2.position.z += opp;
		wheel3.position.z += opp;
		wheel4.position.z += opp;
		wheel5.position.z += opp;
		wheel6.position.z += opp;
		body.position.z += opp;
		head.z += opp;

		wheel.position.x -= adj;
		wheel2.position.x -= adj;
		wheel3.position.x -= adj;
		wheel4.position.x -= adj;
		wheel5.position.x -= adj;
		wheel6.position.x -= adj;
		body.position.x -= adj;
		head.x -= adj;

		triangleGeometry.translate( - adj, 0, opp );
		triangleGeometry2.translate( - adj, 0, opp );
		triangleGeometry3.translate( - adj, 0, opp );
		triangleGeometry4.translate( - adj, 0, opp );

	}

>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5
	wheel.rotateY( ( hyp * 0.02 ) / 0.033 );
	wheel2.rotateY( ( hyp * 0.02 ) / 0.033 );
	wheel3.rotateY( ( hyp * 0.02 ) / 0.033 );
	wheel4.rotateY( ( hyp * 0.02 ) / 0.033 );
	wheel5.rotateY( ( hyp * 0.02 ) / 0.033 );
<<<<<<< HEAD
	wheel6.rotateY( ( hyp * 0.02 ) / 0.033 );}
=======
	wheel6.rotateY( ( hyp * 0.02 ) / 0.033 );
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5
	}
}
function stopMoving() {

	move = false;

}
function startMoving() {

	move = true;

<<<<<<< HEAD
	

=======
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5
}
function stopRotate() {

	rotate = false;

}
function startRotate() {

	rotate = true;
<<<<<<< HEAD
	
=======
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5

}

function resetAngle(){
	gyroSensorTotalAngleRotation = 0;
}

<<<<<<< HEAD
=======

>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5
function rotateRobot( ang ) {

	if (rotate == true){
	var x = wheel.position.x - robotX;
	// //console.log (x);

	var z = wheel.position.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	wheel.position.x = x1 + robotX;
	wheel.position.z = z1 + robotZ;

	var x = wheel2.position.x - robotX;
	// //console.log (x);

	var z = wheel2.position.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	wheel2.position.x = x1 + robotX;
	wheel2.position.z = z1 + robotZ;

	var x = wheel3.position.x - robotX;
	// //console.log (x);

	var z = wheel3.position.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	wheel3.position.x = x1 + robotX;
	wheel3.position.z = z1 + robotZ;

	var x = wheel4.position.x - robotX;
	// //console.log (x);

	var z = wheel4.position.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	wheel4.position.x = x1 + robotX;
	wheel4.position.z = z1 + robotZ;

	var x = wheel5.position.x - robotX;
	// //console.log (x);

	var z = wheel5.position.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	wheel5.position.x = x1 + robotX;
	wheel5.position.z = z1 + robotZ;

	var x = wheel6.position.x - robotX;
	// //console.log (x);

	var z = wheel6.position.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	wheel6.position.x = x1 + robotX;
	wheel6.position.z = z1 + robotZ;

	var x = head.x - robotX;
	// //console.log (x);

	var z = head.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	head.x = x1 + robotX;
	head.z = z1 + robotZ;

	var x = triangleGeometry.vertices[ 0 ].x - robotX;
	// //console.log (x);
	var xinitial = triangleGeometry.vertices[ 0 ].x;
	var zinitial = triangleGeometry.vertices[ 0 ].z;
	var z = triangleGeometry.vertices[ 0 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry.vertices[ 0 ].x = x1 + robotX;
	triangleGeometry.vertices[ 0 ].z = z1 + robotZ;
	//console.log ( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );
	//console.log ( head.x, head.z );

	var x = triangleGeometry.vertices[ 1 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry.vertices[ 1 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry.vertices[ 1 ].x = x1 + robotX;
	triangleGeometry.vertices[ 1 ].z = z1 + robotZ;
	////console.log (triangleGeometry.vertices[1].x, triangleGeometry.vertices[1].z);
	// triangleGeometry.vertices[1].set(
	//   triangleGeometry.vertices[1].x,
	//   1,
	//   triangleGeometry.vertices[1].z
	// );

	var x = triangleGeometry.vertices[ 2 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry.vertices[ 2 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry.vertices[ 2 ].x = x1 + robotX;
	triangleGeometry.vertices[ 2 ].z = z1 + robotZ;   

	var x = triangleGeometry2.vertices[ 0 ].x - robotX;
	// ////console.log  (x);
	var xinitial = triangleGeometry2.vertices[ 0 ].x;
	var zinitial = triangleGeometry2.vertices[ 0 ].z;
	var z = triangleGeometry2.vertices[ 0 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry2.vertices[ 0 ].x = x1 + robotX;
	triangleGeometry2.vertices[ 0 ].z = z1 + robotZ;
	//console.log ( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );
	////console.log ( head.x, head.z );

	var x = triangleGeometry2.vertices[ 1 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry2.vertices[ 1 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry2.vertices[ 1 ].x = x1 + robotX;
	triangleGeometry2.vertices[ 1 ].z = z1 + robotZ;
	////console.log (triangleGeometry.vertices[1].x, triangleGeometry.vertices[1].z);
	// triangleGeometry.vertices[1].set(
	//   triangleGeometry.vertices[1].x,
	//   1,
	//   triangleGeometry.vertices[1].z
	// );

	var x = triangleGeometry2.vertices[ 2 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry2.vertices[ 2 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry2.vertices[ 2 ].x = x1 + robotX;
	triangleGeometry2.vertices[ 2 ].z = z1 + robotZ;

	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry3.vertices[ 0 ].x = x1 + robotX;
	triangleGeometry3.vertices[ 0 ].z = z1 + robotZ;
	////console.log ( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );
	////console.log ( head.x, head.z );

	var x = triangleGeometry3.vertices[ 1 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry3.vertices[ 1 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry3.vertices[ 1 ].x = x1 + robotX;
	triangleGeometry3.vertices[ 1 ].z = z1 + robotZ;
	////console.log (triangleGeometry.vertices[1].x, triangleGeometry.vertices[1].z);
	// triangleGeometry.vertices[1].set(
	//   triangleGeometry.vertices[1].x,
	//   1,
	//   triangleGeometry.vertices[1].z
	// );

	var x = triangleGeometry3.vertices[ 2 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry3.vertices[ 2 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry3.vertices[ 2 ].x = x1 + robotX;
	triangleGeometry3.vertices[ 2 ].z = z1 + robotZ;

	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry4.vertices[ 0 ].x = x1 + robotX;
	triangleGeometry4.vertices[ 0 ].z = z1 + robotZ;
	//console.log ( triangleGeometry.vertices[ 0 ].x, triangleGeometry.vertices[ 0 ].z );
	//console.log ( head.x, head.z );

	var x = triangleGeometry4.vertices[ 1 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry4.vertices[ 1 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry4.vertices[ 1 ].x = x1 + robotX;
	triangleGeometry4.vertices[ 1 ].z = z1 + robotZ;
	////console.log (triangleGeometry.vertices[1].x, triangleGeometry.vertices[1].z);
	// triangleGeometry.vertices[1].set(
	//   triangleGeometry.vertices[1].x,
	//   1,
	//   triangleGeometry.vertices[1].z
	// );

	var x = triangleGeometry4.vertices[ 2 ].x - robotX;
	// //console.log (x);

	var z = triangleGeometry4.vertices[ 2 ].z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	triangleGeometry4.vertices[ 2 ].x = x1 + robotX;
	triangleGeometry4.vertices[ 2 ].z = z1 + robotZ;
<<<<<<< HEAD


	var x = camera.position.x - robotX;
	// //console.log (x);

	var z = camera.position.z - robotZ;
	// //console.log (z);
	var x1 = x * Math.cos( ang ) - z * Math.sin( ang );
	// //console.log (x1);
	var z1 = z * Math.cos( ang ) + x * Math.sin( ang );
	// //console.log (z1);
	camera.position.x = x1 + robotX;
	camera.position.z = z1 + robotZ;
=======
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5
	////console.log (triangleGeometry.vertices[2].x, triangleGeometry.vertices[2].z);
	// triangleGeometry.vertices[2].set(
	//   triangleGeometry.vertices[2].x,
	//   1,
	//   triangleGeometry.vertices[2].z
	// );
	triangleGeometry.verticesNeedUpdate = true;
	triangleGeometry2.verticesNeedUpdate = true;
	triangleGeometry3.verticesNeedUpdate = true;
	triangleGeometry4.verticesNeedUpdate = true;

	wheel6.rotateZ( ang );
	wheel5.rotateZ( ang );
	wheel4.rotateZ( ang );
	wheel3.rotateZ( - ang );
	wheel2.rotateZ( - ang );
	wheel.rotateZ( - ang );

	angle += ang;

	gyroSensorTotalAngleRotation = Math.floor( ( angle * 180 ) / Math.PI );
	gyroSensorRateofRotation = ang / clock.getDelta() / 10;
	if ( angle >= 6.283 ) {

		// gyroSensorTotalAngleRotation -= 360;
		angle -= 6.283;

	}
	body.rotateY( - ang );
<<<<<<< HEAD

	// controls.reset();
	// camera.rotation.y -=ang; 
	// camera.updateProjectionMatrix();
	// if (colourImage == true){

	// camera.rotateZ(-ang);
	// 	camera.rotation.z -= ang;

	// }
=======
	camera.rotation.z -= ang;
>>>>>>> e3423e53bcd551988b781f9541c0cd6f752205d5
	}
}

