/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
        "type": "trial",
        "message0": "Trial %1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "VALUE",
            "text": "5"
          },
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Number"
          }
        ],
        "colour": 290,
        "tooltip": "",
        "helpUrl": ""
      }
  ]);
  
  Blockly.JavaScript['trial'] = function(block) {
    var text_value = block.getFieldValue('VALUE');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    window.alert("hi " + text_value);
    return code;

  };