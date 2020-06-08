
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
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  