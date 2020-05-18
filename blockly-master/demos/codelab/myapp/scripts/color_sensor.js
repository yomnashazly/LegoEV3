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
    var code = 'color_sensor==='+dropdown_name ;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };