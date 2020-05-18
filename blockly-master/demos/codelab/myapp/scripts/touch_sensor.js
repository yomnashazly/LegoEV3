Blockly.Blocks['touch_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("Touch sensor detects"), "touch_sensor")
        .appendField(new Blockly.FieldDropdown([["Pressed","pressed"], ["Released","released"], ["Bumped (both pressed and released)","bumped"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

  Blockly.JavaScript['touch_sensor'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };