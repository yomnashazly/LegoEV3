var blocklyArea = document.getElementById('blocklyArea');
var workspace = Blockly.inject('blocklyDiv',
  { toolbox: document.getElementById('toolbox') });

Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
Blockly.JavaScript.addReservedWords('highlightBlock');
function highlightBlock(id) { workspace.highlightBlock(id); }



function showCode() {
  //Generate Javascript code and display it
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  alert(code);
}


Blockly.Themes.Dark = Blockly.Theme.defineTheme('dark', {
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#1e1e1e',
    'toolboxBackgroundColour': '#333',
    'toolboxForegroundColour': '#fff',
    'flyoutBackgroundColour': '#252526',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 1,
    'scrollbarColour': '#797979',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 0.4,
    'cursorColour': '#d0d0d0'
  }
});

function runCode() {
  // Generate JavaScript code and run it.
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}