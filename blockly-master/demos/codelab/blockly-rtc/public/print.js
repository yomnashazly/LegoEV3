
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
    },
    onchange: function() {
        window.alert("hi");
      }
  };
  
  Blockly.JavaScript['print'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    // window.alert(text_name);
    
    var code = 'window.alert( "'+text_name+'");\n ';
    return code;
  };