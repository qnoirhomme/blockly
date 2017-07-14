/**
 * @license
 * Visual Blocks Editor for Brain Voyager surface and vmr
 *
 * Copyright 2016 Brain Innovation.
 * original code from 
 * https://developers.google.com/blockly/
 *
 * Licensed under the pay me as much as you can licence;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License by written request with a 10$ note (covering printing fee), an envelop and stemps in suffisance for sending back the copy
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Brain Voyager blocks for Blockly.
 * @author noirhomme@brainvoyager.com (Quentin Noirhomme)
 */
 
'use strict';

goog.require('Blockly.Blocks');
// colors of the blocks
Blockly.Blocks.brain.HUEvmr = 5;
Blockly.Blocks.brain.HUEmesh = 15;
Blockly.Blocks.brain.HUEmeshscene = 10;


Blockly.Blocks['bv_mesh_temporalhighpassfilterfft'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_mesh")
	this.appendDummyInput()
        .appendField("TemporalHighPassFilter");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Cut-off value:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_TEMPORALHIGHPASSFILTERFFT); 
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_lineartrendremoval'] = {
  init: function() {
    this.appendValueInput("fmrdoc")
        .setCheck("bv_mesh")
	this.appendDummyInput()
        .appendField("LinearTrendRemoval");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_LINEARTRENDREMOVAL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_temporalgaussiansmoothing'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_mesh")
	this.appendDummyInput()
        .appendField("TemporalGaussianSmoothing");
    this.appendValueInput("param1")
        .setCheck("Number")
        .appendField("Width of kernel:");
    this.appendValueInput("param2")
        .setCheck("String")
        .appendField("Units:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_TEMPORALGAUSSIANSMOOTHING);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_spatialsmoothing'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_mesh")
	this.appendDummyInput()
        .appendField("SpatialSmoothing");
    this.appendValueInput("param1")
        .setCheck("Number")
        .appendField("Width of kernel (FWHM):");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SPATIALSMOOTHING);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};
/**
 * VMR properties
 */
Blockly.Blocks['bv_vmr_extendedtalspaceforvtccreation'] = {
  /**
   * Block to access the ExtendedTALSpaceForVTCCreation property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ExtendedTALSpaceForVTCCreation');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_EXTENDEDTALSPACEFORVTCCREATION);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Boolean');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_useboundingboxforvtccreation'] = {
  /**
   * Block to access the useboundingboxForVTCCreation property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('UseBoundingBoxForVTCCreation');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_USEBOUNDINGBOXFORVTCCREATION);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Boolean');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_targetvtcboundingboxxstart'] = {
  /**
   * Block to access the TargetVTCBoundingBoxXStart property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TargetVTCBoundingBoxXStart');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXXSTART);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_targetvtcboundingboxystart'] = {
  /**
   * Block to access the TargetVTCBoundingBoxYStart property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TargetVTCBoundingBoxYStart');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXYSTART);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};


Blockly.Blocks['bv_vmr_targetvtcboundingboxzstart'] = {
  /**
   * Block to access the TargetVTCBoundingBoxZStart property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TargetVTCBoundingBoxZStart');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXZSTART);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_targetvtcboundingboxxend'] = {
  /**
   * Block to access the TargetVTCBoundingBoxXEnd property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TargetVTCBoundingBoxXEnd');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXXEND);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_targetvtcboundingboxyend'] = {
  /**
   * Block to access the TargetVTCBoundingBoxYEnd property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TargetVTCBoundingBoxYEnd');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXYEND);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};


Blockly.Blocks['bv_vmr_targetvtcboundingboxzend'] = {
  /**
   * Block to access the TargetVTCBoundingBoxZEnd property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TargetVTCBoundingBoxZEnd');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXZEND);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_vmrvoxelresolutionx'] = {
  init: function() {
	  this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField("VMRVoxelResolutionX");
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VMRVOXELRESOLUTIONX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_vmrvoxelresolutiony'] = {
  init: function() {
    this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
	this.appendDummyInput()
        .appendField("VMRVoxelResolutionY");
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VMRVOXELRESOLUTIONY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_vmrvoxelresolutionz'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')  
    this.appendDummyInput()
        .appendField("VMRVoxelResolutionZ");
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VMRVOXELRESOLUTIONZ);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_filenameofcurrentvtc'] = {
  init: function() {
    this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
	this.appendDummyInput()
        .appendField("FileNameOfCurrentVTC");
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_FILENAMEOFCURRENTVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_meshscene'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')  
    this.appendDummyInput()
        .appendField("MeshScene");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_FILENAMEOFCURRENTVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

/**
 * VMR functions
 */
 Blockly.Blocks['bv_vmr_linkvtc'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
	this.appendDummyInput()
        .appendField("LinkVTC");
	this.appendValueInput('vtcname')
        .setCheck('String')  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LINKVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_linkstimulationprotocol'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
	this.appendDummyInput()
        .appendField("LinkStimulationProtocol");
	this.appendValueInput('filename')
        .setCheck('String')  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LINKSTIMULATIONPROTOCOL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_closedoc'] = {
  init: function() {
    this.appendValueInput("BV_DOC")
        .setCheck("bv_vtc")
	this.appendDummyInput()
        .appendField("Close");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_CLOSE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_save'] = {
  init: function() {
    this.appendValueInput("BV_DOC")
        .setCheck("bv_vmr")
	this.appendDummyInput()
        .appendField("Save");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_SAVE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_autotransformtoisovoxel'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("AutoTransformToIsoVoxel");
	this.appendValueInput('param1')
        .setCheck('Number') 
		.appendField("Interpolation");
	this.appendValueInput('param2')
        .setCheck('String')
		.appendField("New VMR name");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_AUTOTRANSFORMTOISOVOXEL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_autotransformtosag'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("AutoTransformToSAG");
	this.appendValueInput('param1')
        .setCheck('String')
		.appendField("New VMR name");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_AUTOTRANSFORMTOSAG);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_setvoxelintensity'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SetVoxelIntensity");
	this.appendValueInput('param1')
        .setCheck('Number') 
		.appendField("X");
	this.appendValueInput('param2')
        .setCheck('Number')
		.appendField("Y");
	this.appendValueInput('param3')
        .setCheck('Number') 
		.appendField("Z");
	this.appendValueInput('param4')
        .setCheck('Number')
		.appendField("Intensity");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SETVOXELINTENSITY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_getvoxelintensity'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("GetVoxelIntensity");
	this.appendValueInput('param1')
        .setCheck('Number') 
		.appendField("X");
	this.appendValueInput('param2')
        .setCheck('Number')
		.appendField("Y");
	this.appendValueInput('param3')
        .setCheck('Number') 
		.appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_GETVOXELINTENSITY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_correctintensityinhomogeneities'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CorrectIntensityInhomogeneities");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_CORRECTINTENSITYINHOMOGENEITIES);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_autoacpcandtaltransformation'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("AutoACPCAndTALTransformation");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_AUTOACPCANDTALTRANSFORMATION);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_createvtcinvmrspace'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CreateVTCInVMRSpace");
	this.appendValueInput('param1')
        .setCheck('String') 
		.appendField("FMR");
	this.appendValueInput('param2')
        .setCheck('String')
		.appendField("IA file");
	this.appendValueInput('param3')
        .setCheck('String') 
		.appendField("FA file");
	this.appendValueInput('param4')
        .setCheck('String') 
		.appendField("New VTC");
	this.appendValueInput('param5')
        .setCheck('Number')
		.appendField("Datatype");
	this.appendValueInput('param6')
        .setCheck('Number') 
		.appendField("Resolution");
	this.appendValueInput('param7')
        .setCheck('Number')
		.appendField("Interpolation");
	this.appendValueInput('param8')
        .setCheck('Number') 
		.appendField("Threshold");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_CREATEVTCINVMRSPACE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_createvtcinacpcspace'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CreateVTCInACPCSpace");
	this.appendValueInput('param1')
        .setCheck('String') 
		.appendField("FMR");
	this.appendValueInput('param2')
        .setCheck('String')
		.appendField("IA file");
	this.appendValueInput('param3')
        .setCheck('String') 
		.appendField("FA file");
	this.appendValueInput('param4')
        .setCheck('String') 
		.appendField("ACPC file");
	this.appendValueInput('param5')
        .setCheck('String') 
		.appendField("New VTC");
	this.appendValueInput('param6')
        .setCheck('Number')
		.appendField("Datatype");
	this.appendValueInput('param7')
        .setCheck('Number') 
		.appendField("Resolution");
	this.appendValueInput('param8')
        .setCheck('Number')
		.appendField("Interpolation");
	this.appendValueInput('param9')
        .setCheck('Number') 
		.appendField("Threshold");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_CREATEVTCINACPCSPACE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_createvtcintalspace'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CreateVTCInTALSpace");
	this.appendValueInput('param1')
        .setCheck('String') 
		.appendField("FMR");
	this.appendValueInput('param2')
        .setCheck('String')
		.appendField("IA file");
	this.appendValueInput('param3')
        .setCheck('String') 
		.appendField("FA file");
	this.appendValueInput('param4')
        .setCheck('String') 
		.appendField("ACPC file");
	this.appendValueInput('param5')
        .setCheck('String') 
		.appendField("TAL file");
		this.appendValueInput('param6')
        .setCheck('String') 
		.appendField("New VTC");
	this.appendValueInput('param7')
        .setCheck('Number')
		.appendField("Datatype");
	this.appendValueInput('param8')
        .setCheck('Number') 
		.appendField("Resolution");
	this.appendValueInput('param9')
        .setCheck('Number')
		.appendField("Interpolation");
	this.appendValueInput('param10')
        .setCheck('Number') 
		.appendField("Threshold");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_CREATEVTCINTALSPACE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

/**
 * VMR for satistics
 */
 Blockly.Blocks['bv_vmr_correctforserialcorrelations'] = {
  /**
   * Block to access the CorrectForSerialCorrelations property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('CorrectForSerialCorrelations');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_CORRECTFORSERIALCORRELATIONS);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_separationofsubjectpredictors'] = {
  /**
   * Block to access the SeparationOfSubjectPredictors property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('SeparationOfSubjectPredictors');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SEPARATIONOFSUBJECTPREDICTORS);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Boolean');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_separationofstudypredictors'] = {
  /**
   * Block to access the SeparationOfStudyPredictors property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('SeparationOfStudyPredictors');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SEPARATIONOFSTUDYPREDICTORS);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Boolean');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_ztransformstudies'] = {
  /**
   * Block to access the ZTransformStudies property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ZTransformStudies');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_ZTRANSFORMSTUDIES);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Boolean');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_psctransformstudies'] = {
  /**
   * Block to access the PSCTransformStudies property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('PSCTransformStudies');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_PSCTRANSFORMSTUDIES);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Boolean');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_ztransformstudiesbaselineonly'] = {
  /**
   * Block to access the ZTransformStudiesBaselineOnly property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ZTransformStudiesBaselineOnly');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_ZTRANSFORMSTUDIESBASELINEONLY);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Boolean');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_loadsinglestudyglmdesignmatrix'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LoadSingleStudyGLMDesignMatrix");
	this.appendValueInput('param1')
        .setCheck('String') 
		.appendField("Design Matrix");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LOADSINGLESTUDYGLMDESIGNMATRIX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_loadmultistudyglmdefinitionfile'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LoadMultiStudyGLMDefinitionFile");
	this.appendValueInput('param1')
        .setCheck('String') 
		.appendField("Design Matrix");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LOADMULTISTUDYGLMDEFINITIONFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_computesinglestudyglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ComputeSingleStudyGLM");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_COMPUTESINGLESTUDYGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_computemultistudyglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ComputeMultiStudyGLM");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_COMPUTEMULTISTUDYGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_computerfxglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ComputeRFXGLM");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_COMPUTERFXGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_showglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ShowGLM");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SHOWGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_loadglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LoadGLM");
	this.appendValueInput('param1')
        .setCheck('String');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LOADGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_saveglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SaveGLM");
	this.appendValueInput('param1')
        .setCheck('String'); 
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SAVEGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_clearcontrasts'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ClearContrasts()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_CLEARCONTRASTS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_addcontrast'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("AddContrast");
	this.appendValueInput('param1')
        .setCheck('String') 
		.appendField("Contrast Name");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_ADDCONTRAST);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};
Blockly.Blocks['bv_vmr_setcontraststring'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SetContrastString");
	this.appendValueInput('param1')
        .setCheck('String') 
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SETCONTRASTSTRING);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_setcurrentcontrastatindex'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SetCurrentContrastAtIndex");
	this.appendValueInput('param1')
        .setCheck('Number') 
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SETCURRENTCONTRASTATINDEX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_setcontrastvalueatindex'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SetContrastValueAtIndex");
	this.appendValueInput('param1')
        .setCheck('Number') 
		.appendField("Index");
	this.appendValueInput('param2')
        .setCheck('Number')
		.appendField("Value for predictor");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SETCONTRASTVALUEATINDEX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_setcurrentcontrast'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SetCurrentContrast");
	this.appendValueInput('param1')
        .setCheck('String')
		.appendField("Contrast Name");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SETCURRENTCONTRAST);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_setcontrastvalue'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SetContrastValue");
	this.appendValueInput('param1')
        .setCheck('String')
		.appendField("Condition Name"); 
	this.appendValueInput('param2')
        .setCheck('Number')
		.appendField("Value"); 
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SETCONTRASTVALUE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

/**
 * VOI/ROI 
 */
Blockly.Blocks['bv_vmr_nrofvois'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_vmr");
	this.appendDummyInput()
        .appendField("Get NrOfVOIs");
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_NROFVOIS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
}; 

Blockly.Blocks['bv_vmr_nrofpredictorsinsinglestudydm'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_vmr");
	this.appendDummyInput()
        .appendField("Get NrOfPredictorsInSingleStudyDM");
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_NROFPREDICTORSINSINGLESTUDYDM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
}; 

Blockly.Blocks['bv_vmr_nroftimepointsinsinglestudydm'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_vmr");
	this.appendDummyInput()
        .appendField("Get NrOfTimePointsInSingleStudyDM");
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_NROFTIMEPOINTSINSINGLESTUDYDM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
}; 

Blockly.Blocks['bv_vmr_nrofroicontrasts'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_vmr");
	this.appendDummyInput()
        .appendField("Get NrOfROIContrasts");
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_NROFROICONTRASTS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
}; 

Blockly.Blocks['bv_vmr_loadvoifile'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LoadVOIFile");
	this.appendValueInput('param1')
        .setCheck('String')
		.appendField("File");
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LOADVOIFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_hideallvois'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("HideAllVOIs()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_HIDEALLVOIS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_selectvoi'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SelectVOI");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("Index");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SELECTVOI);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_getnameofvoi'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("GetNameOfVOI");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("Index");
	this.setInputsInline(true);
    this.setOutput(true,'String');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_GETNAMEOFVOI);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_showselectedvois'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ShowSelectedVOIs()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SHOWSELECTEDVOIS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_prepareroicontrasts'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("PrepareROIContrasts");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("Number of predictors");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_PREPAREROICONTRASTS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_addroicontrast'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("AddROIContrast");
	this.appendValueInput('param1')
        .setCheck('String')
		.appendField("Name");
	this.appendValueInput('param2')
        .setCheck('String')
		.appendField("Values");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_ADDROICONTRAST);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_computesinglestudyglmforvoi'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ComputeSingleStudyGLMForVOI");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("VOI index");
	this.appendValueInput('param2')
        .setCheck('Number')
		.appendField("Time course normalization");
	this.appendValueInput('param3')
        .setCheck('Number')
		.appendField("Serial correlation correction");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_COMPUTESINGLESTUDYGLMFORVOI);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_getnameofroicontrast'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("GetNameOfROIContrast");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("Index");
	this.setInputsInline(true);
    this.setOutput(true,'String');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_GETNAMEOFROICONTRAST);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_gettvalueofroicontrast'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("GetTValueOfROIContrast");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("Index");
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_GETTVALUEOFROICONTRAST);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_getpvalueofroicontrast'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("GetPValueOfROIContrast");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("Index");
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_GETPVALUEOFROICONTRAST);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

/** 
 * Surface properties and methods
 */
 Blockly.Blocks['bv_vmr_loadmesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LoadMesh");
	this.appendValueInput('param1')
        .setCheck('String')
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LOADMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_addmesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("AddMesh");
	this.appendValueInput('param1')
        .setCheck('String')
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_ADDMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_savemesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SaveMesh");
	this.appendValueInput('param1')
        .setCheck('String')
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SAVEMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_updatesurfacewindow'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("UpdateSurfaceWindow()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_UPDATESURFACEWINDOW);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_savesnapshotofsurfacewindow'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SaveSnapshotOfSurfaceWindow");
	this.appendValueInput('param1')
        .setCheck('String')
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_SAVESNAPSHOTOFSURFACEWINDOW);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_linkmtc'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LinkMTC");
	this.appendValueInput('param1')
        .setCheck('String')
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LINKMTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_createmtcfromvtc'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CreateMTCFromVTC");
	this.appendValueInput('param1')
        .setCheck('Number')
		.appendField("Sampling White Matter");
	this.appendValueInput('param2')
        .setCheck('Number')
		.appendField("Sampling Gray Matter");
	this.appendValueInput('param3')
        .setCheck('String')
		.appendField("New file name");
	this.setInputsInline(false);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_CREATEMTCFROMVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vmr_getmeshscene'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("GetMeshScene()");
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_GETMESHSCENE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};


Blockly.Blocks['bv_vmr_viewpointtranslationx'] = {
  /**
   * Block to access the ViewpointTranslationX property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointTranslationX');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VIEWPOINTTRANSLATIONX);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_viewpointtranslationy'] = {
  /**
   * Block to access the ViewpointTranslationY property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointTranslationY');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VIEWPOINTTRANSLATIONY);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_viewpointtranslationz'] = {
  /**
   * Block to access the ViewpointTranslationZ property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointTranslationZ');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VIEWPOINTTRANSLATIONZ);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_viewpointrotationx'] = {
  /**
   * Block to access the ViewpointTranslationX property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointRotationX');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VIEWPOINTROTATIONX);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};


Blockly.Blocks['bv_vmr_viewpointrotationy'] = {
  /**
   * Block to access the ViewpointTranslationX property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointRotationY');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VIEWPOINTROTATIONY);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};


Blockly.Blocks['bv_vmr_viewpointrotationz'] = {
  /**
   * Block to access the ViewpointTranslationX property of a vmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointRotationZ');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_VIEWPOINTROTATIONZ);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_vmr_meshscene'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("MeshScene");
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEvmr);
    this.setTooltip(Blockly.Msg.BV_VMR_MESHSCENE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_meshscene_currentmesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CurrentMesh");
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_CURRENTMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_meshscene_viewpointpositionx'] = {
  /**
   * Block to access the ViewpointPositionX property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointPositionX');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_VIEWPOINTPOSITIONX);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_meshscene_viewpointpositiony'] = {
  /**
   * Block to access the ViewpointPositionY property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointPositionY');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_VIEWPOINTPOSITIONY);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_meshscene_viewpointpositionz'] = {
  /**
   * Block to access the ViewpointPositionZ property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointPositionZ');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_VIEWPOINTPOSITIONZ);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_meshscene_viewpointrotationx'] = {
  /**
   * Block to access the ViewpointRotationX property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointRotationX');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_VIEWPOINTROTATIONX);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_meshscene_viewpointrotationy'] = {
  /**
   * Block to access the ViewpointRotationY property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointRotationY');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_VIEWPOINTROTATIONY);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_meshscene_viewpointrotationz'] = {
  /**
   * Block to access the ViewpointRotationZ property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('ViewpointRotationZ');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_VIEWPOINTROTATIONZ);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_meshscene_sphereresolutioncba'] = {
  /**
   * Block to access the SphereResolutionCBA property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('SphereResolutionCBA');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmeshscene);
    this.setTooltip(Blockly.Msg.BV_MESHSCENE_SPHERERESOLUTIONCBA);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_mesh_filename'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("FileName");
	this.setInputsInline(true);
    this.setOutput(true,'String');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_FILENAME);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_nrofvertices'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("NrOfVertices");
	this.setInputsInline(true);
    this.setOutput(true,'Number');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_NROFVERTICES);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_morphingupdateinterval'] = {
  /**
   * Block to access the SphereResolutionCBA property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('MorphingUpdateInterval');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_MORPHINGUPDATEINTERVAL);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_mesh_correctforserialcorrelations'] = {
  /**
   * Block to access the SphereResolutionCBA property of a meshscene doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('CorrectForSerialCorrelations');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CORRECTFORSERIALCORRELATIONS);
	this.setHelpUrl(Blockly.Blocks.brain.http);
  },
  /**
   * Create XML to represent whether the 'SetInput' should be present.
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var SetInput = (this.getFieldValue('PROPERTY') == 'SET');
    container.setAttribute('set_input', SetInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'set'.
   * @param {boolean} setInput True if this block has a divisor input.
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('trvalue');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('trvalue')
            .setCheck('Number');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_mesh_updatesurfacewindow'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("UpdateSurfaceWindow()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_UPDATESURFACEWINDOW);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_saveas'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendValueInput('param1')
        .appendField("SaveAs")
        .setCheck('String');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SAVEAS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_calculatecurvaturecba'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CalculateCurvatureCBA()");
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CALCULATECURVATURECBA);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_smoothcurrentmap'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
    this.appendDummyInput()
        .appendField("SmoothCurrentMap")
    this.appendValueInput('param1')
        .appendField("Smoothing steps:")
        .setCheck('Number');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SMOOTHCURRENTMAP);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_inflatemeshtosphere'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("InflateMeshToSphere");
    this.appendValueInput('param1')
        .appendField("Inflations steps:")
        .setCheck('Number');
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_INFLATEMESHTOSPHERE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_correctinflatedspheremesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("CorrectInflatedSphereMesh");
    this.appendValueInput('param1')
        .appendField("Corrections steps:")
        .setCheck('Number');
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CORRECTINFLATEDSPHEREMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_mapspheremeshfromstandardsphere'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("MapSphereMeshFromStandardSphere()");
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_MAPSPHEREMESHFROMSTANDARDSPHERE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_setstandardspheretofoldedmesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SetStandardSphereToFoldedMesh");
    this.appendValueInput('param1')
        .appendField("Name of folded mesh:")
        .setCheck('String');
	this.setInputsInline(true);
    this.setOutput(true,'String');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SETSTANDARDSPHERETOFOLDEDMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_createmultiscalecurvaturemap'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_mesh');
	this.appendDummyInput()
        .appendField("CreateMultiScaleCurvatureMap");
    this.appendValueInput('param1')
        .appendField("Smoothing level 1")
        .setCheck('Number');
    this.appendValueInput('param2')
        .appendField("level 2")
        .setCheck('Number');
    this.appendValueInput('param3')
        .appendField("level 3")
        .setCheck('Number');
    this.appendValueInput('param4')
        .appendField("level 4")
        .setCheck('Number');
	this.setInputsInline(true);
    this.setOutput(true,'String');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CREATEMULTISCALECURVATUREMAP);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};
Blockly.Blocks['bv_mesh_createsphericalcoordinatesmapfromsmp'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_mesh');
	this.appendDummyInput()
        .appendField("CreateSphericalCoordinatesMapFromSMP");
    this.appendValueInput('param1')
        .appendField("Name of target curvature file:")
        .setCheck('String');
	this.setInputsInline(true);
    this.setOutput(true,'String');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CREATESPHERICALCOORDINATESMAPFROMSMP);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};
Blockly.Blocks['bv_mesh_smoothmesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_mesh');
	this.appendDummyInput()
        .appendField("SmoothMesh");
    this.appendValueInput('param1')
        .appendField("Number of iterations:")
        .setCheck('Number');
    this.appendValueInput('param2')
        .appendField("Smoothing force:")
        .setCheck('Number');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SMOOTHMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_smoothrecomesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_mesh');
	this.appendDummyInput()
        .appendField("SmoothRecoMesh");
    this.appendValueInput('param1')
        .appendField("Number of iterations:")
        .setCheck('Number');
    this.appendValueInput('param2')
        .appendField("Smoothing force:")
        .setCheck('Number');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SMOOTHRECOMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_calculatecurvature'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_mesh');
	this.appendDummyInput()
        .appendField("CalculateCurvature()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CALCULATECURVATURE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_inflatemesh'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_mesh');
	this.appendDummyInput()
        .appendField("InflateMesh()");
    this.appendValueInput('param1')
        .appendField("Number of iterations")
        .setCheck('Number');
    this.appendValueInput('param2')
        .appendField("Smoothing force")
        .setCheck('Number');
    this.appendValueInput('param3')
        .appendField("area reference mesh")
        .setCheck('String');
	this.setInputsInline(true);
    this.setOutput(true,'boolean');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_INFLATEMESH);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_createmtcfromvtc'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_mesh');
	this.appendDummyInput()
        .appendField("CreateMTCFromVTC()");
    this.appendValueInput('param1')
        .appendField("Sampling VTC along mesh vertex normals from")
        .setCheck('Number');
    this.appendValueInput('param2')
        .appendField("to")
        .setCheck('Number');
    this.appendValueInput('param3')
        .appendField("New file")
        .setCheck('String');
	this.setInputsInline(true);
    this.setOutput(true,'boolean');
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CREATEMTCFROMVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_linkmtc'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LinkMTC()");
    this.appendValueInput('param1')
        .appendField("Name of *.mtc file:")
        .setCheck('String');
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_LINKMTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_savemtc'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SaveMTC()");
    this.appendValueInput('param1')
        .appendField("Name for *.mtc file:")
        .setCheck('String');
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SAVEMTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_cleardesignmatrix'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ClearDesignMatrix()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_CLEARDESIGNMATRIX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_loadsinglestudyglmdesignmatrix'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("LoadSingleStudyGLMDesignMatrix()");
    this.appendValueInput('param1')
        .appendField("Name of design matrix file:")
        .setCheck('String');
	this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_LOADSINGLESTUDYGLMDESIGNMATRIX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_computesinglestudyglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ComputeSingleStudyGLM()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_COMPUTESINGLESTUDYGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_showglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("ShowGLM()");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SHOWGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_mesh_saveglm'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_vmr');
	this.appendDummyInput()
        .appendField("SaveGLM()");
    this.appendValueInput('param1')
        .appendField("Name for general linear model:")
        .setCheck('String');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEmesh);
    this.setTooltip(Blockly.Msg.BV_MESH_SAVEGLM);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};