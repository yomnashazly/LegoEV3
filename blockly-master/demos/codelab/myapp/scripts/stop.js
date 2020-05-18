
Blockly.Blocks['stop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Stop moving!");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('red');
     this.setTooltip("");
     this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['stop'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  