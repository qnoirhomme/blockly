/**
 * @license
 * Visual Blocks Editor for Brain Voyager 
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

goog.provide('Blockly.Blocks.brain');

goog.require('Blockly.Blocks');

/*
*  All blocks color
*/
Blockly.HSV_SATURATION = 0.45; 

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.brain.HUE = 45;
Blockly.Blocks.brain.HUEfmr = 35;
Blockly.Blocks.brain.HUEvtc = 25;
Blockly.Blocks.brain.HUEprt = 25;
Blockly.Blocks.brain.HUEsdm = 25;

Blockly.Blocks.brain.http='http://www.brainvoyager.com/';

Blockly.Blocks['bv_open_document'] = {
	/**
	* call the BrainVoyager.OpenDocument function
	*/
	
  init: function() {
    this.appendDummyInput()
        .appendField("Open Document")
		.appendField(new Blockly.FieldTextInput("filename"), "NAME");
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip('Open BrainVoyager files');
    this.setHelpUrl('http://www.brainvoyager.com/');
  }
};
/**
 * Call the BV Open document function and returns a variable
 */
Blockly.Blocks['bv_open_document_var'] = {
  init: function() {
    this.appendValueInput("filename")
        .setCheck("String")
        .appendField("Open Document");
    this.setOutput(true, ["bv_fmr", "bv_vmr"]);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_OPENDOCUMENT);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_activedocument'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ActiveDocument");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_ACTIVEDOCUMENT);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_createprojectfmr'] = {
  init: function() {
	  this.appendDummyInput()
        .appendField("Create project FMR");
    this.appendValueInput("filetype")
        .setCheck("String")
        .appendField("File Type:");
		this.appendValueInput("firstfilename")
        .setCheck("String")
        .appendField("First file name:");
		this.appendValueInput("nrofvolumes")
        .setCheck("Number")
        .appendField("Nr of Volumes:");
		this.appendValueInput("volskip")
        .setCheck("Number")
        .appendField("Nr of Volumes to Skip:");
		this.appendValueInput("createAMR")
        .setCheck("Boolean")
        .appendField("Create AMR:");
		this.appendValueInput("nrOfSlices")
        .setCheck("Number")
        .appendField("Nr of Slices:");
		this.appendValueInput("prestc")
        .setCheck("String")
        .appendField("Name of the STC file:");
		this.appendValueInput("swapBytes")
        .setCheck("Boolean")
        .appendField("Swap bytes:");
		this.appendValueInput("resx")
        .setCheck("Number")
        .appendField("Dimension X:");
		this.appendValueInput("resY")
        .setCheck("Number")
        .appendField("Dimension Y:");
		this.appendValueInput("nrBytes")
        .setCheck("Number")
        .appendField("Nr of bytes per pixel");
		this.appendValueInput("savingDir")
        .setCheck("String")
        .appendField("Saving Directory:");
	this.setInputsInline(false);
    this.setOutput(true, ["bv_fmr"]);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CREATEPROJECTFMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_createprojectmosaicfmr'] = {
  init: function() {
	  this.appendDummyInput()
        .appendField("Create project Mosaic FMR");
    this.appendValueInput("filetype")
        .setCheck("String")
        .appendField("File Type:");
		this.appendValueInput("firstfilename")
        .setCheck("String")
        .appendField("First file name:");
		this.appendValueInput("nrofvolumes")
        .setCheck("Number")
        .appendField("Nr of Volumes:");
		this.appendValueInput("volskip")
        .setCheck("Number")
        .appendField("Nr of Volumes to Skip:");
		this.appendValueInput("createAMR")
        .setCheck("Boolean")
        .appendField("Create AMR:");
		this.appendValueInput("nrOfSlices")
        .setCheck("Number")
        .appendField("Nr of Slices:");
		this.appendValueInput("prestc")
        .setCheck("String")
        .appendField("Name of the STC file:");
		this.appendValueInput("swapBytes")
        .setCheck("Boolean")
        .appendField("Swap bytes:");
		this.appendValueInput("mosaicresx")
        .setCheck("Number")
        .appendField("Mosaic X:");
		this.appendValueInput("mosaicresy")
        .setCheck("Number")
        .appendField("Mosaic Y:");
		this.appendValueInput("nrBytes")
        .setCheck("Number")
        .appendField("Nr of bytes per pixel");
		this.appendValueInput("savingDir")
        .setCheck("String")
        .appendField("Saving Directory:");
		this.appendValueInput("volsInImg")
        .setCheck("Number")
        .appendField("Nr of Volumes per file:");
		this.appendValueInput("resx")
        .setCheck("Number")
        .appendField("Dimension X:");
		this.appendValueInput("resY")
        .setCheck("Number")
        .appendField("Dimension Y:");
	this.setInputsInline(false);
    this.setOutput(true, ["bv_fmr"]);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CREATEPROJECTMOSAICFMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_createprojectfmrslicestimelooping'] = {
  init: function() {
	  this.appendDummyInput()
        .appendField("Create project FMR SlicesTimeLooping");
    this.appendValueInput("filetype")
        .setCheck("String")
        .appendField("File Type:");
		this.appendValueInput("firstfilename")
        .setCheck("String")
        .appendField("First file name:");
		this.appendValueInput("nrofvolumes")
        .setCheck("Number")
        .appendField("Nr of Volumes:");
		this.appendValueInput("volskip")
        .setCheck("Number")
        .appendField("Nr of Volumes to Skip:");
		this.appendValueInput("createAMR")
        .setCheck("Boolean")
        .appendField("Create AMR:");
		this.appendValueInput("nrOfSlices")
        .setCheck("Number")
        .appendField("Nr of Slices:");
		this.appendValueInput("prestc")
        .setCheck("String")
        .appendField("Name of the STC file:");
		this.appendValueInput("swapBytes")
        .setCheck("Boolean")
        .appendField("Swap bytes:");
		this.appendValueInput("resx")
        .setCheck("Number")
        .appendField("Dimension X:");
		this.appendValueInput("resY")
        .setCheck("Number")
        .appendField("Dimension Y:");
		this.appendValueInput("nrBytes")
        .setCheck("Number")
        .appendField("Nr of bytes per pixel");
		this.appendValueInput("savingDir")
        .setCheck("String")
        .appendField("Saving Directory:");
	this.setInputsInline(false);
    this.setOutput(true, ["bv_fmr"]);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CREATEPROJECTFMRSLICESTIMELOOPING);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_createprojectvmr'] = {
  init: function() {
	  this.appendDummyInput()
        .appendField("Create project VMR");
    this.appendValueInput("filetype")
        .setCheck("String")
        .appendField("File Type:");
		this.appendValueInput("firstfilename")
        .setCheck("String")
        .appendField("First file name:");
		this.appendValueInput("nrOfSlices")
        .setCheck("Number")
        .appendField("Nr of Slices:");
		this.appendValueInput("isLittleEndian")
        .setCheck("Boolean")
        .appendField("isLittleEndian:");
		this.appendValueInput("resx")
        .setCheck("Number")
        .appendField("Dimension X:");
		this.appendValueInput("resY")
        .setCheck("Number")
        .appendField("Dimension Y:");
		this.appendValueInput("nrBytes")
        .setCheck("Number")
        .appendField("Nr of bytes per pixel");
	this.setInputsInline(false);
    this.setOutput(true, ["bv_vmr"]);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CREATEPROJECTVMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_createprojectamr'] = {
  init: function() {
	  this.appendDummyInput()
        .appendField("Create project AMR");
    this.appendValueInput("filetype")
        .setCheck("String")
        .appendField("File Type:");
		this.appendValueInput("firstfilename")
        .setCheck("String")
        .appendField("First file name:");
		this.appendValueInput("nrOfSlices")
        .setCheck("Number")
        .appendField("Nr of Slices:");
		this.appendValueInput("isLittleEndian")
        .setCheck("Boolean")
        .appendField("isLittleEndian:");
		this.appendValueInput("resx")
        .setCheck("Number")
        .appendField("Dimension X:");
		this.appendValueInput("resY")
        .setCheck("Number")
        .appendField("Dimension Y:");
		this.appendValueInput("nrBytes")
        .setCheck("Number")
        .appendField("Nr of bytes per pixel");
	this.setInputsInline(false);
    this.setOutput(true, ["bv_amr"]);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CREATEPROJECTAMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_currentdirectory'] = {
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
        .appendField("Current Directory");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CURRENTDIRECTORY);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(SetInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('newdirectory');
    if (SetInput) {
      if (!inputExists) {
        this.appendValueInput('newdirectory');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('newdirectory');
	  this.setOutput(true, null);
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_pathtosampledata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PathToSampleData");
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_PATHTOSAMPLEDATA);
    this.setHelpUrl('http://www.brainvoyager.com/');
  }
};

Blockly.Blocks['bv_pathtodata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Path to Data");
    this.setOutput(true, "String");
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_PATHTODATA);
    this.setHelpUrl('http://www.brainvoyager.com/');
  }
};

Blockly.Blocks['bv_versionmajor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Version Major");
    this.setOutput(true, "number");
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_VERSIONMAJOR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_versionminor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Version Minor");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_VERSIONMINOR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_buildnumber'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Build Number");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_BUILDNUMBER);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_is64bits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is BV 64 bits?");
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_IS64BITS);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_getX'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get X");
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_GETX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_getY'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Y");
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_GETY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_setX'] = {
  init: function() {
	this.appendValueInput("xvalue")
        .setCheck("Number")
        .appendField("Set X");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setOutput(false, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_SETX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_setY'] = {
  init: function() {
    this.appendValueInput("yvalue")
        .setCheck("Number")
        .appendField("Set Y");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_SETY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_renamedicomfilesindirectory'] = {
  init: function() {
    this.appendValueInput("NAME")
		.setCheck("String")
        .appendField("Rename Dicom Files In Directory: ") 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_RENAMEDICOMFILESINDIRECTORY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};


Blockly.Blocks['bv_printtolog'] = {
	/**
	* Open the log and show a message into the log
	*/
  init: function() {
    this.appendValueInput("NAME")
		.setCheck("String")
        .appendField("PrintToLog") 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_PRINTTOLOG);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_movewindow'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("Move Window");  
    this.appendValueInput("xvalue")
		.setCheck("Number")
        .appendField("New x:")
	this.appendValueInput("yvalue")
		.setCheck("Number")
        .appendField("New y:")
    this.setInputsInline(true); 		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_MOVEWINDOW);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_browsefile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Browse file");
    this.appendValueInput("instruction")
        .setCheck(null)
        .appendField("Instruction: ");
    this.appendValueInput("filter")
        .setCheck(null)
        .appendField("Filter: ");
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_BROWSEFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_browsedirectory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Browse Directory");
    this.appendValueInput("instruction")
        .setCheck(null)
        .appendField("Instruction: ");
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_BROWSEDIRECTORY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_open_write'] = {
  init: function() {
    this.appendValueInput("filename")
        .setCheck("String")
        .appendField("Open file for writing");
    this.appendValueInput("openfile")
        .setCheck(null)
        .appendField("Openfile variable");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_OPEN_WRITE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_writetofile'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(["String", "Number"])
        .appendField("Write message");
    this.appendValueInput("file")
        .setCheck(null)
        .appendField("in file");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_WRITETOFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_openfile'] = {
  init: function() {
	  var PROPERTIES =
        [['Writing', 'WRITE'], ['Reading', 'READ'], ['ReadWrite', 'READWRITE'], ['Append', 'APPEND']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES);
	this.appendDummyInput()
        .appendField("Open file for");
	this.appendValueInput("filename")
        .setCheck("String")
		.appendField(dropdown, 'PROPERTY');
    this.appendValueInput("openfile")
        .setCheck(null)
        .appendField("Openfile variable");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_OPENFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_io_readlinefromfile'] = {
  init: function() {
    this.appendValueInput("file")
        .setCheck(null)
        .appendField("ReadLine from file");
	this.setOutput(true, 'String');
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_IO_READLINEFROMFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_io_parseint'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("String")
        .appendField("ParseInt");
	this.setOutput(true, 'Number');
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_IO_PARSEINT);
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_parseint.asp');
  }
};

Blockly.Blocks['bv_closefile'] = {
  init: function() {
    this.appendValueInput("File")
        .setCheck(null)
        .appendField("Close File");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CLOSEFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_closedoc'] = {
  init: function() {
    this.appendValueInput("BV_DOC")
        .setCheck(["bv_fmr", "bv_vmr","bv_vtc","bv_mesh"])
        .appendField("Close");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUE);
    this.setTooltip(Blockly.Msg.BV_CLOSEDOC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};
/**
 * FMR properties and functions
 */
Blockly.Blocks['bv_linkamr'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("LinkAMR");
    this.appendValueInput("param2")
        .setCheck("String")
        .appendField("AMR file:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_LINKAMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_fmr_TR'] = {
  /**
   * Block to access the TR property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TR');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_TR);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_interslicetime'] = {
  /**
   * Block to access the inter-slice time property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('Inter Slice Time');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_INTERSLICETIME);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_pixelsizeofslicedimx'] = {
  /**
   * Block to access the pixel size of a slice along dimension x property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('PixelSizeOfSliceDimX');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_PIXELSIZEOFSLICEDIMX);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_pixelsizeofslicedimy'] = {
  /**
   * Block to access the dimension y of the pixel size property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('PixelSizeOfSliceDimY');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_PIXELSIZEOFSLICEDIMY);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_slicethickness'] = {
  /**
   * Block to access the slice thickness property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('Slice Thickness');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_SLICETHICKNESS);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_gapthickness'] = {
  /**
   * Block to access the Gap thickness property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('Gap Thickness:');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_GAPTHICKNESS);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_timeresolutionverified'] = {
  /**
   * Block to access the TimeResolutionVerified property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('TimeResolutionVerified:');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_TIMERESOLUTIONVERIFIED);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_voxelresolutionverified'] = {
  /**
   * Block to access the VoxelResolutionVerified property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('VoxelResolutionVerified:');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_VOXELRESOLUTIONVERIFIED);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_fmr_hasslicetimetable'] = {
  /**
   * Block to access the HasSliceTimeTable property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('HasSliceTimeTable:');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_HASSLICETIMETABLE);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Boolean');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_interslicetimefmr'] = {
  /**
   * Block to access the TR property of a fmr doc
   */
  init: function() {
    var PROPERTIES =
        [['Get', 'GET'], ['Set', 'SET']];
	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
		var SetInput = (option == 'SET');
		this.sourceBlock_.updateShape_(SetInput);
    });
	this.appendValueInput('fmrdoc')
        .setCheck('bv_fmr')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('Inter Slice Time:');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_INTERSLICETIMEFMR);
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
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var SetInput = (xmlElement.getAttribute('set_input') == 'true');
    this.updateShape_(SetInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
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
	  this.setOutput(true, 'Number');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_correctslicetiming'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("CorrectSliceTiming");
    this.appendValueInput("param1")
        .setCheck("Number")
        .appendField("Scan Order:");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Interpolation method:");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CORRECTSLICETIMING);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_correctslicetimingwithsliceorder'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("CorrectSliceTimingWithSliceOrder");
    this.appendValueInput("param1")
        .setCheck("Number")
        .appendField("Scan Order:");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Interpolation method:");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CORRECTSLICETIMINGWITHSLICEORDER);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_correctslicetimingusingtimetable'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("CorrectSliceTimingUsingTimeTable");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Interpolation method:");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CORRECTSLICETIMINGUSINGTIMETABLE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_correctmotion'] = {
  init: function() {
	  this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("Correct Motion");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Target volume:");
	this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CORRECTMOTION);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_correctmotionex'] = {
  init: function() {
	  this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("Correct Motion Ex");
    this.appendValueInput("target")
        .setCheck("Number")
        .appendField("Target volume:");
		this.appendValueInput("interpolation")
        .setCheck("Number")
        .appendField("Interpolation method:");
		this.appendValueInput("usefull")
        .setCheck("Boolean")
        .appendField("Use full data set:");
		this.appendValueInput("maxiter")
        .setCheck("Number")
        .appendField("Maximum number of iterations:");
		this.appendValueInput("movies")
        .setCheck("Boolean")
        .appendField("Generate movies");
		this.appendValueInput("logfile")
        .setCheck("Boolean")
        .appendField("Generate extended log file:");
	this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CORRECTMOTIONEX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_correctmotiontargetvolumeinotherrun'] = {
  init: function() {
    this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("CorrectMotionTargetVolumeInOtherRun");
    this.appendValueInput("param1")
        .setCheck("String")
        .appendField("Align to fmr:");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Target volume:");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CORRECTMOTIONTARGETVOLUMEINOTHERRUN);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_correctmotiontargetvolumeinotherrunex'] = {
  init: function() {
	  this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("CorrectMotionTargetVolumeInOtherRun Ex");
	this.appendValueInput("param1")
        .setCheck("String")
        .appendField("Align to fmr:");
    this.appendValueInput("target")
        .setCheck("Number")
        .appendField("Target volume:");
		this.appendValueInput("interpolation")
        .setCheck("Number")
        .appendField("Interpolation method:");
		this.appendValueInput("usefull")
        .setCheck("Boolean")
        .appendField("Use full data set:");
		this.appendValueInput("maxiter")
        .setCheck("Number")
        .appendField("Maximum number of iterations:");
		this.appendValueInput("movies")
        .setCheck("Boolean")
        .appendField("Generate movies");
		this.appendValueInput("logfile")
        .setCheck("Boolean")
        .appendField("Generate extended log file:");
	this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CORRECTMOTIONTARGETVOLUMEINOTHERRUNEX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_temporalhighpassfilterglmfourier'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("TemporalHighPassFilterGLMFourier");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Number of cycles:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_TEMPORALHIGHPASSFILTERGLMFOURIER);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_temporalhighpassfilterglmdct'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("TemporalHighPassFilterGLMDCT");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Number of cycles:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_TEMPORALHIGHPASSFILTERGLMDCT);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_temporalhighpassfilterfmr'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("TemporalHighPassFilter");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Cut-off value:");
	this.appendValueInput("param3")
        .setCheck("String")
        .appendField("Units:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_TEMPORALHIGHPASSFILTERFMR); 
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_lineartrendremovalfmr'] = {
  init: function() {
    this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("LinearTrendRemoval");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_LINEARTRENDREMOVALFMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_fmr_filenameofpreprocessedfmr'] = {
  init: function() {
    this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("FileNameOfPreprocessedFMR");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_FMR_FILENAMEOFPREPROCESSEDFMR );
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};


Blockly.Blocks['bv_temporalgaussiansmoothingfmr'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
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
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_TEMPORALGAUSSIANSMOOTHINGFMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_spatialgaussiansmoothingfmr'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("SpatialGaussianSmoothing");
    this.appendValueInput("param1")
        .setCheck("Number")
        .appendField("Width of kernel (FWHM):");
    this.appendValueInput("param2")
        .setCheck("String")
        .appendField("Units:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_SPATIALGAUSSIANSMOOTHINGFMR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};


Blockly.Blocks['bv_adjustmeanintensity'] = {
  init: function() {
    this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("AdjustMeanIntensity");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_ADJUSTMEANINTENSITY);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_temporalhighpassfiltervtc'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("TemporalHighPassFilter");
    this.appendValueInput("param2")
        .setCheck("Number")
        .appendField("Cut-off value:");
	this.appendValueInput("param3")
        .setCheck("String")
        .appendField("Units:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvtc);
    this.setTooltip(Blockly.Msg.BV_TEMPORALHIGHPASSFILTERVTC); 
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_lineartrendremovalvtc'] = {
  init: function() {
    this.appendValueInput("fmrdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("LinearTrendRemoval");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvtc);
    this.setTooltip(Blockly.Msg.BV_LINEARTRENDREMOVALVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};


Blockly.Blocks['bv_temporalgaussiansmoothingvtc'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
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
    this.setColour(Blockly.Blocks.brain.HUEvtc);
    this.setTooltip(Blockly.Msg.BV_TEMPORALGAUSSIANSMOOTHINGVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_spatialgaussiansmoothingvtc'] = {
  init: function() {
    this.appendValueInput("bvdoc")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("SpatialGaussianSmoothing");
    this.appendValueInput("param1")
        .setCheck("Number")
        .appendField("Width of kernel (FWHM):");
    this.appendValueInput("param2")
        .setCheck("String")
        .appendField("Units:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvtc);
    this.setTooltip(Blockly.Msg.BV_SPATIALGAUSSIANSMOOTHINGVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_fmr_linkstimulationprotocol'] = {
  init: function() {
	this.appendValueInput('bvdoc')
        .setCheck('bv_fmr')
	this.appendDummyInput()
        .appendField("LinkStimulationProtocol");
	this.appendValueInput('filename')
        .setCheck('String')  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_VMR_LINKSTIMULATIONPROTOCOL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};


Blockly.Blocks['bv_fmr_closedoc'] = {
  init: function() {
    this.appendValueInput("BV_DOC")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("Close()");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_CLOSE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vtc_closedoc'] = {
  init: function() {
    this.appendValueInput("BV_DOC")
        .setCheck("bv_vtc");
	this.appendDummyInput()
        .appendField("Close()");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvtc);
    this.setTooltip(Blockly.Msg.BV_CLOSE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_fmr_save'] = {
  init: function() {
    this.appendValueInput("BV_DOC")
        .setCheck("bv_fmr");
	this.appendDummyInput()
        .appendField("Save()");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEfmr);
    this.setTooltip(Blockly.Msg.BV_SAVE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_vtc_save'] = {
  init: function() {
    this.appendValueInput("BV_DOC")
        .setCheck("bv_vtc");
	this.appendDummyInput()
        .appendField("Save()");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEvtc);
    this.setTooltip(Blockly.Msg.BV_SAVE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_clearstimulationprotocol'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("ClearStimulationProtocol()");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_CLEARSTIMULATIONPROTOCOL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_linkstimulationprotocol'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("LinkStimulationProtocol");
    this.appendValueInput('param1')
        .appendField("Protocol name:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_LINKSTIMULATIONPROTOCOL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_addcondition'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("AddCondition");
    this.appendValueInput('param1')
        .appendField("Condition name:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_ADDCONDITION);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_setconditioncolor'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("SetConditionColor");
    this.appendValueInput('param1')
        .appendField("Condition name:")
        .setCheck('String');
    this.appendValueInput('param2')
        .appendField("Red:")
        .setCheck('Number');
    this.appendValueInput('param3')
        .appendField("Green:")
        .setCheck('Number');
    this.appendValueInput('param4')
        .appendField("Blue:")
        .setCheck('Number');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_SETCONDITIONCOLOR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_addinterval'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("AddInterval");
    this.appendValueInput('param1')
        .appendField("Condition name:")
        .setCheck('String');
    this.appendValueInput('param2')
        .appendField("Start:")
        .setCheck('Number');
    this.appendValueInput('param3')
        .appendField("End:")
        .setCheck('Number');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_ADDINTERVAL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_savestimulationprotocol'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("SaveStimulationProtocol");
    this.appendValueInput('param1')
        .appendField("File name:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_SAVESTIMULATIONPROTOCOL);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_savevtc'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("SaveVTC");
    this.appendValueInput('param1')
        .appendField("File name:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_SAVEVTC);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_prt_stimulationprotocolfile'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolFile');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLFILE);
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
            .setCheck('String');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'String');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_prt_stimulationprotocolexperimentname'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolExperimentName');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLEXPERIMENTNAME);
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
            .setCheck('String');
		this.setOutput(false,null)
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
      }
    } else if (inputExists) {
      this.removeInput('trvalue');
	  this.setOutput(true,'String');
	  this.setPreviousStatement(false, null);
	  this.setNextStatement(false, null);
    }
  }
};

Blockly.Blocks['bv_prt_stimulationprotocolresolution'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolResolution');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLRESOLUTION);
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

Blockly.Blocks['bv_prt_stimulationprotocolbackgroundcolorr'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolBackgroundColorR');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLBACKGROUNDCOLORR);
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

Blockly.Blocks['bv_prt_stimulationprotocolbackgroundcolorg'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolBackgroundColorG');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLBACKGROUNDCOLORG);
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

Blockly.Blocks['bv_prt_stimulationprotocolbackgroundcolorb'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolBackgroundColorB');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLBACKGROUNDCOLORB);
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

Blockly.Blocks['bv_prt_stimulationprotocoltimecoursecolorr'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolTimeCourseColorR');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSECOLORR);
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

Blockly.Blocks['bv_prt_stimulationprotocoltimecoursecolorg'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolTimeCourseColorG');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSECOLORG);
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

Blockly.Blocks['bv_prt_stimulationprotocoltimecoursecolorb'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolTimeCourseColorB');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSECOLORB);
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

Blockly.Blocks['bv_prt_stimulationprotocoltextcolorr'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolTextColorR');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTEXTCOLORR);
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

Blockly.Blocks['bv_prt_stimulationprotocoltextcolorg'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolTextColorG');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTEXTCOLORG);
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

Blockly.Blocks['bv_prt_stimulationprotocoltextcolorb'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolTextColorB');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTEXTCOLORB);
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

Blockly.Blocks['bv_prt_stimulationprotocoltimecoursethickness'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('StimulationProtocolTimeCourseThickness');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEprt);
    this.setTooltip(Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSETHICKNESS);
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

Blockly.Blocks['bv_sdm_firstconfoundpredictorofsdm'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('FirstConfoundPredictorOfSDM');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
	this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_FIRSTCONFOUNDPREDICTOROFSDM);
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

Blockly.Blocks['bv_sdm_sdmcontainsconstantpredictor'] = {
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
        .setCheck('bv_doc')
    this.appendDummyInput()
        .appendField(dropdown, 'PROPERTY');
    this.appendDummyInput()
		.appendField('SDMContainsConstantPredictor');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
	this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_SDMCONTAINSCONSTANTPREDICTOR);
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

Blockly.Blocks['bv_sdm_cleardesignmatrix'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("ClearDesignMatrix()");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_CLEARDESIGNMATRIX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_addpredictor'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("AddPredictor");
    this.appendValueInput('param1')
        .appendField("Predictor name:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_ADDPREDICTOR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_setpredictorvalues'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("SetPredictorValues");
    this.appendValueInput('param1')
        .appendField("Predictor name:")
        .setCheck('String');
    this.appendValueInput('param2')
        .appendField("Timepoint from:")
        .setCheck('Number');
    this.appendValueInput('param3')
        .appendField("Timepoint to:")
        .setCheck('Number');
    this.appendValueInput('param4')
        .appendField("Value:")
        .setCheck('Number');
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_SETPREDICTORVALUES);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_setpredictorvaluesfromcondition'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("SetPredictorValuesFromCondition");
    this.appendValueInput('param1')
        .appendField("Predictor name:")
        .setCheck('String');
    this.appendValueInput('param2')
        .appendField("Condition name:")
        .setCheck('String');
    this.appendValueInput('param3')
        .appendField("Value:")
        .setCheck('Number');
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_SETPREDICTORVALUESFROMCONDITION);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_applyhemodynamicresponsefunctiontopredictor'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("ApplyHemodynamicResponseFunctionToPredictor");
    this.appendValueInput('param1')
        .appendField("Predictor name:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_APPLYHEMODYNAMICRESPONSEFUNCTIONTOPREDICTOR);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_scalepredictorvalues'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("ScalePredictorValues");
    this.appendValueInput('param1')
        .appendField("Predictor name:")
        .setCheck('String');
    this.appendValueInput('param2')
        .appendField("Scale:")
        .setCheck('Number');
    this.appendValueInput('param3')
        .appendField("Boolean:")
        .setCheck('Boolean');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_SCALEPREDICTORVALUES);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_savesinglestudyglmdesignmatrix'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("SaveSingleStudyGLMDesignMatrix");
    this.appendValueInput('param1')
        .appendField("SDM file:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_SAVESINGLESTUDYGLMDESIGNMATRIX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_clearmultistudyglmdefinition'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("ClearMultiStudyGLMDefinition()");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_CLEARMULTISTUDYGLMDEFINITION);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_addstudyanddesignmatrix'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("AddStudyAndDesignMatrix");
    this.appendValueInput('param1')
        .appendField("VTC file:")
        .setCheck('String');
    this.appendValueInput('param2')
        .appendField("SDM file:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_ADDSTUDYANDDESIGNMATRIX);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};

Blockly.Blocks['bv_sdm_savemultistudyglmdefinitionfile'] = {
  init: function() {
    this.appendValueInput("bv_doc")
        .setCheck("bv_doc");
	this.appendDummyInput()
        .appendField("SaveMultiStudyGLMDefinitionFile");
    this.appendValueInput('param1')
        .appendField("Protocol name:")
        .setCheck('String');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.brain.HUEsdm);
    this.setTooltip(Blockly.Msg.BV_SDM_SAVEMULTISTUDYGLMDEFINITIONFILE);
    this.setHelpUrl(Blockly.Blocks.brain.http);
  }
};