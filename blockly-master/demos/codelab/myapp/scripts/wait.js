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