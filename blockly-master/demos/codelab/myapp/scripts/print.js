
//print
Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print")
        .appendField(new Blockly.FieldTextInput("message"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
//  this.setStyle('logic_blocks');
  }
  // ,
  //   onchange: async function(x) {
  //    console.log("farah",x);
  //     }
};

Blockly.JavaScript['print'] = function(block) {
  // window.alert(this.appendValueInput);
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  // window.alert(text_name);
  // message = text_name;
 // window.alert(message + "this is the msg");
  var code = 'window.alert( "'+text_name+'");\n ';
  return code;
};


Blockly.defineBlocksWithJsonArray([
  {
      "type": "wait",
      "message0": "Wait %1 seconds",
      "args0": [
        {
          "type": "field_number",
          "name": "NAME",
          "value": 0,
          "min": 1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);


  Blockly.JavaScript['wait'] = function(block) {
      var number_name = block.getFieldValue('NAME');
      // window.alert(number_name);
      // TODO: Assemble JavaScript into code variable.
      var milliseconds = number_name * 1000;
      var code = 'sleep('+milliseconds+');\n';
      return code;
    };


    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }


    Blockly.Blocks['wait_until'] = {
      init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Wait until");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
     this.setTooltip("");
     this.setHelpUrl("");
      }
    };

    

// //print
// Blockly.Blocks['print'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Print")
//         .appendField(new Blockly.FieldTextInput("message"), "NAME");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.JavaScript['print'] = function(block) {
//   var text_name = block.getFieldValue('NAME');
//   Window.alert(text_name);
//   var code = "window.alert('abc');";
// };


// //wait

// Blockly.Blocks['wait'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Wait")
//         .appendField(new Blockly.FieldNumber(0, 1), "NAME")
//         .appendField("seconds");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(65);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.JavaScript['wait'] = function(block) {
//   var number_wait = block.getFieldValue('wait');
//   // TODO: Assemble JavaScript into code variable.
//   delays = Number(number_wait);
//   function myFunction(){

//   }
//   var waiting = setTimeout(myFunction,delays);
//   var code = document.getElementById('avatar').innerHTML = waiting;
//   console.log(code);
//   return code;
// };


// // Blockly.JavaScript['wait'] = function(block) {
// //   var number_name = block.getFieldValue('NAME');
// //   window.alert(number_name);
// //   var code = 'var ms = number_name ;ms += new Date().getTime();while (new Date() < ms) { };';
// //   return code;
// // };