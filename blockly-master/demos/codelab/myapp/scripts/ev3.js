var colourSensor = 'yellow';
var touchSensor = 'pressed';


//-----------------------------------------touch sensor------------------------------------------------------
Blockly.Blocks['touch_sensor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("Touch sensor detects"), "touch_sensor")
          .appendField(new Blockly.FieldDropdown([["Pressed","pressed"], ["Released","released"], ["Bumped (both pressed and released)","bumped"]]), "NAME");
      this.setOutput(true, null);
      this.setColour(1);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
    Blockly.JavaScript['touch_sensor'] = function(block) {
      var dropdown_name = block.getFieldValue('NAME');
      // TODO: Assemble JavaScript into code variable.
      var code = 'touchSensor==="' + dropdown_name +'"';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
//------------------------------------------color sensor--------------------------------------------------
    Blockly.Blocks['color_sensor'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldLabelSerializable("Color sensor detects"), "color_sensor")
              .appendField(new Blockly.FieldDropdown([["No color","no_color"],["White","white"],["Black","black"], ["Red","red"] ,["Brown","brown"],["Green","green"],["Yellow","yellow"],["Blue","blue"]]), "NAME");
          this.setOutput(true, null);
          this.setColour(1);
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };
      
        Blockly.JavaScript['color_sensor'] = function(block) {
          var dropdown_name = block.getFieldValue('NAME');
          // TODO: Assemble JavaScript into code variable.
          var code = 'colourSensor==="' + dropdown_name +'"';
          // TODO: Change ORDER_NONE to the correct strength.
          return [code, Blockly.JavaScript.ORDER_NONE];
        };

    //------------------------------------------------------get color----------------------------------------
        Blockly.Blocks['get_color'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField(new Blockly.FieldLabelSerializable("color that sensor detects"), "NAME");
              this.setOutput(true, null);
              this.setColour(20);
           this.setTooltip("");
           this.setHelpUrl("");
            }
          };

          Blockly.JavaScript['get_color'] = function(block) {
            // TODO: Assemble JavaScript into code variable.
            var code = 'colourSensor';
            // TODO: Change ORDER_NONE to the correct strength.
            return [code, Blockly.JavaScript.ORDER_NONE];
          };


//--------------------get distance-------------------------------------
Blockly.Blocks['get_distance'] = {
  init: function() {
    this.appendDummyInput()
        // .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"],["4","4"]]), "NAME")
        .appendField("distance that infrared sensor detects in ")
        .appendField(new Blockly.FieldDropdown([["cm","cm"], ["inches","inches"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['get_distance'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//---------------------------------------------is light intensity </>/= kaza---------------------
Blockly.Blocks['light_intensity'] = {
  init: function() {
    this.appendDummyInput()
        // .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"],["3","3"], ["4","4"]]), "NAME")
        .appendField("Reflected light intensity")
        .appendField(new Blockly.FieldDropdown([["<","<"], [">",">"], ["=","="]]), "NAME")
        .appendField(new Blockly.FieldTextInput("15"), "light_intensity")
        .appendField(new Blockly.FieldDropdown([["cm","cm"], ["inches","inches"]]), "NAME")
        .appendField("?");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['light_intensity'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_name = block.getFieldValue('NAME');
  var text_light_intensity = block.getFieldValue('light_intensity');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//-----------------------------------is distance </>/= kaza ------------------------------------
Blockly.Blocks['is_distance_infrared'] = {
  init: function() {
    this.appendDummyInput()
        // .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"],["4","4"]]), "port")
        .appendField("Distance of infrared")
        .appendField(new Blockly.FieldDropdown([["<","<"], [">",">"], ["=","="]]), "NAME")
        .appendField(new Blockly.FieldTextInput("15"), "distance")
        .appendField(new Blockly.FieldDropdown([["cm","cm"], ["inches","inches"], ["option","OPTIONNAME"]]), "NAME")
        .appendField("?");
        this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['is_distance_infrared'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_name = block.getFieldValue('NAME');
  var text_distance = block.getFieldValue('distance');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//-----------------------------------is distance </>/= kaza ultrasonic------------------------------------
Blockly.Blocks['is_distance_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        // .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"],["4","4"]]), "port")
        .appendField("Distance of ultrasonic")
        .appendField(new Blockly.FieldDropdown([["<","<"], [">",">"], ["=","="]]), "NAME")
        .appendField(new Blockly.FieldTextInput("15"), "distance")
        .appendField(new Blockly.FieldDropdown([["cm","cm"], ["inches","inches"], ["option","OPTIONNAME"]]), "NAME")
        .appendField("?");
        this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['is_distance_ultrasonic'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_name = block.getFieldValue('NAME');
  var text_distance = block.getFieldValue('distance');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//---------------------------------------get angle -------------------------------------------------
Blockly.Blocks['get_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("angle");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['get_angle'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'getAngle()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//------------------------------------------reset angle---------------------------------------------
Blockly.Blocks['reset_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reset angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['reset_angle'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  // TODO: Assemble JavaScript into code variable.
  var code = 'resetAngle();';
  return code;
};
//---------------------------------------------is angle </>/= kaza degrees--------------------------------
Blockly.Blocks['is_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Angle")
        .appendField(new Blockly.FieldDropdown([["<","<"], [">",">"], ["=","=="]]), "operation")
        .appendField(new Blockly.FieldAngle(45), "NAME")
        .appendField("?");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['is_angle'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var operation = block.getFieldValue('operation');
  var angle_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'gyroSensorTotalAngleRotation'+operation+angle_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//-----------------------------------------------------------------------------------------------------

