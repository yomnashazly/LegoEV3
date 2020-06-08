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

  Blockly.JavaScript['wait_until'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 
    'if(flag == false) {\n'+
        'window.setTimeout('+value_name+', 100);\n '/* this checks the flag every 100 milliseconds*/
     +'} else {};\n';
       /* do something*/
     
    return code;
  };