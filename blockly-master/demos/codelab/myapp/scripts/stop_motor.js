Blockly.Blocks['stop_moving'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Stop moving!")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('red');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['stop_moving'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'stopMoving();';
    return code;
  };