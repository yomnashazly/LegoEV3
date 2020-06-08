Blockly.defineBlocksWithJsonArray([
  {
    
      "type": "block1",
      "message0": "move right  %1 steps %2",
      "args0": [
        {
          "type": "field_input",
          "name": "steps",
          "text": "5"
        },
        {
          "type": "input_value",
          "name": "name",
          "check": "Number"
        }
      ],
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    }
]);

Blockly.JavaScript['play_sound'] = function(block) {
  var value = '\'' + block.getFieldValue('VALUE') + '\'';
  return 'MusicMaker.queueSound(' + value + ');\n';
};

