/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// const Blockly = require('blockly');



(function () {
  console.log("theme",Blockly.Themes)
  var theme ="dark";
  var number;
console.log("main")
document.getElementById("workspace_number").style.columnWidth= 90/number;

  // console.log(firebase);
  // var config = {
  //   apiKey: "AIzaSyDKzvFhUtFXHMY7wAsP_cJVRujBWIDAo2M",
  //   authDomain: "blockly-caec3.firebaseapp.com",
  //   projectId: "blockly-caec3"
  // };
  // firebase.initializeApp(config);

  // // Get a reference to the database service
  // var database = firebase.firestore();


  let currentButton;



  function handlePlay(event) {
    console.log("in handlePlay function");
    if(number!=undefined)
    loadWorkspace();
    else{
      swal("Could not open workspace", 'Please choose or create a workspace','error')
     }
    Blockly.JavaScript.addReservedWords('code');
    var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    code += 'MusicMaker.play();';
    // Eval can be dangerous. For more controlled execution, check
    // https://github.com/NeilFraser/JS-Interpreter.
    try {
      eval(code);
    } catch (error) {
      console.log(error);
    }
  }

  let events = [{
    type: "create",
    group: "",
    blockId: "W2Z|ioyDiACcz!x+-%q6",
    xml: '<block xmlns="https://developers.google.com/blockly/xml" ' +
      'type="print" id="W2Z|ioyDiACcz!x+-%q6" x="0" y="0"><field name="NAME">message</field></block>',
    ids: ["W2Z|ioyDiACcz!x+-%q6"]
  }, {
    type: "move",
    group: "",
    blockId: "W2Z|ioyDiACcz!x+-%q6",
    newCoordinate: "40,50"
  }
    // , {
    //   type: "move",
    //   group: "zH!7f,gfyd$ni%`Wq`Y|",
    //   blockId: "^EzM:}wIx;MjBTcxQ@oB",
    //   newCoordinate: "238,63"
    // }
  ];


  function listener(change) {
    console.log("I'm listening");
    let workspace = Blockly.getMainWorkspace();

    let change_json = change.toJson();
    let change_json_string = JSON.stringify(change_json);
    console.log("farah", change_json);
    // console.log("farooha", change_json_string);

    //adding el event to the database as a string
    var number2 = String(number);
    console.log("type of number2 inside listener",typeof number2)
    firebase.firestore().collection('events'+number2).add({
      workspace: workspace.id,
      event: change_json_string,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  function readEvents() {
    console.log("in read events (el fiha get)");
    // Blockly.Events.disable()
    let workspace = Blockly.getMainWorkspace();

    firebase.firestore().collection('events'+number).orderBy("timestamp", "asc").get().then(async function (querySnapshot) {
      await querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ",JSON.parse(doc.data().event));
        Blockly.Events.disable();
        let event_json = JSON.parse(doc.data().event);
        const blockly_event = Blockly.Events.fromJson(event_json, workspace)
        console.log("print timestamp",doc.data().timestamp);
        blockly_event.run(true);
        Blockly.Events.enable();
      })
      // Blockly.Events.enable();

    })
  }

  function realtimeEvents() {

    let mainWorkspace = Blockly.getMainWorkspace();
    console.log("number inside realtimeevents:",number)
    firebase.firestore().collection('events'+String(number)).orderBy("timestamp", "asc").onSnapshot(function (querySnapshot) {
      querySnapshot.docChanges().forEach(function (change) {
        console.log("Fetched (haga haslt fl db)",change.doc.data())
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ",JSON.parse(doc.data().event));
        let workspace = change.doc.data().workspace;
        if (workspace !== mainWorkspace.id) {
          console.log("inside if of same workspace");
          Blockly.Events.disable()

          let event_json = JSON.parse(change.doc.data().event);
          const blockly_event = Blockly.Events.fromJson(event_json, mainWorkspace)
          blockly_event.run(true);

          Blockly.Events.enable()
          // events.push(blockly_event)
          // events.push(doc.data());
        }
      })
    })
  }
  
 
  function loadWorkspace() {
    themefunction();
    console.log("theme");
    // document.getElementById("create").style.display = 'none';
    document.getElementById("create").style.visibility = 'hidden';
    document.getElementById('buttons').innerHTML = '<button  id= "JSbuttons" class="JSbuttons" onclick="showCode()">Show JavaScript</button><button id= "JSbuttons" class="JSbuttons" onclick="runCode()">Run JavaScript</button>';
    document.getElementById('redirect-div').innerHTML = '    <a href="javascript:history.go(0)" class="back">&laquo; Home</a>    <div class="container"><div class="center"><button id="myButton" class="redirect" >Simulate</button></div></div>';
    document.getElementById('script').innerHTML = 'document.getElementById("myButton").onclick = function () {location.href = "../../../../LegoMinstormSimulation/indexX.html";};';

    console.log("in loadworkspace function", number);
    let workspace = Blockly.getMainWorkspace();
    // workspace.clear();
    // console.log(workspace.id);

    firebase.firestore().collection('users').add({
      workspace: workspace.id
    })

    // readEvents()
    workspace.addChangeListener(listener)
    realtimeEvents()

    // if (button.blocklyXml) {
    //   console.log("inside iffff");
    //   Blockly.Xml.domToWorkspace(button.blocklyXml, workspace);

    // }

  }

  function save(button) {
    let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    button.blocklyXml = xml;
  }

  function handleSave() {
    console.log("in handle save function");
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function enableEditMode() {
    console.log("in enableEditMode function");
    console.log("2222 edit mode" , number);
    document.body.setAttribute('mode', 'edit');
    document.querySelectorAll('.button').forEach(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    console.log("in enableMakerMode function");
    document.getElementById("create").addEventListener("click", create);
    document.body.setAttribute('mode', 'maker');
    document.querySelectorAll('.button').forEach(btn => {
      btn.addEventListener('click', handlePlay);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }


  function create(){
    console.log("in create function");
    console.log("created");
    var size;

    firebase.firestore().collection("workspaces").get().then(function(querySnapshot) {  
      size = querySnapshot.size;  
      console.log("size",size + 1);
      console.log("type",typeof size); 
      firebase.firestore().collection('workspaces').add({
        sort: firebase.firestore.FieldValue.serverTimestamp(),
        number: size + 1
      })
      number = size+1;
      console.log("numberrrrrrrrrr type:",typeof number)
      console.log("nuumberrr tany:",typeof String(number))
      // createEventsTable(size+1);
      swal(
        'Created successfully!',
        'Go to workspace',
        'success'
      )
  });
// enableBlocklyMode();
  }
  
  function wsnumberisclicked(){
    console.log("clicked");
  }

  function enableBlocklyMode() {
    console.log("in enableBlocklyMode function");
    document.body.setAttribute('mode', 'blockly');
    // currentButton = e.target;
    if(number!=undefined)
    loadWorkspace();
    else{
      window.alert("please choose or create a workspace")
    }
  }

  document.querySelector('#workspace_number').addEventListener('click', enableEditMode);
  document.querySelector('#create').addEventListener('click', enableEditMode);
  window.onload=function(){
    firebase.firestore().collection('workspaces').orderBy("number", "asc").get().then(async function (querySnapshot) {
      await querySnapshot.forEach(function (doc) {
        // console.log("hi",doc.data().number);
        
        var numberfromdoc = doc.data().number; 
        // var id = doc.data().sort;
        
        document.getElementById('workspace' + numberfromdoc).addEventListener('click', (value)=>{console.log("farah",value.target.id[value.target.id.length -1] )
        number= value.target.id[value.target.id.length -1];
      console.log("number f hetet farah:",number)} );
        // $('#workspace_number').append('<th id="workspace1">' + number + '</th>');
        // $('#workspace_id').append('<td>' + id + '</td>');
      })
      console.log("2");
    })
  }
  

  // document.querySelectorAll('#ziko').forEach(e => {console.log(e)
  //   e.addEventListener('click', ()=>{console.log("ziko", e)})});
  // document.querySelector('#workspace_number').addEventListener('click', wsnumberisclicked );
  
  enableMakerMode();

  Blockly.inject('blockly-div', {
    media: '../../../media/',
    toolbox: document.getElementById('toolbox'),
    toolboxPosition: 'end',
    horizontalLayout: true,
    scrollbars: false
  });
})();
