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
 * @fileoverview Generating JavaScript for Brain Voyager blocks.
 * @author noirhomme@brainvoyager.com (Quentin Noirhomme)
 */
 //goog.provide('Blockly.JavaScript.brain');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['bv_open_document'] = function(block) {
   var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.OpenDocument(' + text_name + ');\n';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];

  
};

Blockly.JavaScript['bv_open_document_var'] = function(block) {
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.OpenDocument('+ value_filename +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_activedocument'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.ActiveDocument';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_createprojectfmr'] = function(block) {
  var value_filetype = Blockly.JavaScript.valueToCode(block, 'filetype', Blockly.JavaScript.ORDER_ATOMIC);
  var value_firstfilename = Blockly.JavaScript.valueToCode(block, 'firstfilename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrofvolumes = Blockly.JavaScript.valueToCode(block, 'nrofvolumes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volskip = Blockly.JavaScript.valueToCode(block, 'volskip', Blockly.JavaScript.ORDER_ATOMIC);
  var value_createAMR = Blockly.JavaScript.valueToCode(block, 'createAMR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.JavaScript.valueToCode(block, 'nrOfSlices', Blockly.JavaScript.ORDER_ATOMIC);
  var value_prestc = Blockly.JavaScript.valueToCode(block, 'prestc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_swapBytes = Blockly.JavaScript.valueToCode(block, 'swapBytes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resx = Blockly.JavaScript.valueToCode(block, 'resx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resY = Blockly.JavaScript.valueToCode(block, 'resY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrBytes = Blockly.JavaScript.valueToCode(block, 'nrBytes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_savingDir = Blockly.JavaScript.valueToCode(block, 'savingDir', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.CreateProjectFMR('+ value_filetype + ',' + value_firstfilename  + ',' + value_nrofvolumes  + ',' + value_volskip + ',' + value_createAMR + ',' + value_nrOfSlices + ',' + value_prestc + ',' + value_swapBytes + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  + ',' + value_savingDir + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_createprojectmosaicfmr'] = function(block) {
  var value_filetype = Blockly.JavaScript.valueToCode(block, 'filetype', Blockly.JavaScript.ORDER_ATOMIC);
  var value_firstfilename = Blockly.JavaScript.valueToCode(block, 'firstfilename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrofvolumes = Blockly.JavaScript.valueToCode(block, 'nrofvolumes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volskip = Blockly.JavaScript.valueToCode(block, 'volskip', Blockly.JavaScript.ORDER_ATOMIC);
  var value_createAMR = Blockly.JavaScript.valueToCode(block, 'createAMR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.JavaScript.valueToCode(block, 'nrOfSlices', Blockly.JavaScript.ORDER_ATOMIC);
  var value_prestc = Blockly.JavaScript.valueToCode(block, 'prestc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_swapBytes = Blockly.JavaScript.valueToCode(block, 'swapBytes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mosaicresx = Blockly.JavaScript.valueToCode(block, 'mosaicresx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mosaicresy = Blockly.JavaScript.valueToCode(block, 'mosaicresy', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrBytes = Blockly.JavaScript.valueToCode(block, 'nrBytes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_savingDir = Blockly.JavaScript.valueToCode(block, 'savingDir', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volsInImg = Blockly.JavaScript.valueToCode(block, 'volsInImg', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resx = Blockly.JavaScript.valueToCode(block, 'resx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resY = Blockly.JavaScript.valueToCode(block, 'resY', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.CreateProjectMosaicFMR('+ value_filetype + ',' + value_firstfilename  + ',' + value_nrofvolumes  + ',' + value_volskip + ',' + value_createAMR + ',' + value_nrOfSlices + ',' + value_prestc + ',' + value_swapBytes + ',' + value_mosaicresx  + ',' + value_mosaicresy  + ',' + value_nrBytes  + ',' + value_savingDir + ',' + value_volsInImg + ',' + value_resx  + ',' + value_resY  + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_createprojectfmrslicestimelooping'] = function(block) {
  var value_filetype = Blockly.JavaScript.valueToCode(block, 'filetype', Blockly.JavaScript.ORDER_ATOMIC);
  var value_firstfilename = Blockly.JavaScript.valueToCode(block, 'firstfilename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrofvolumes = Blockly.JavaScript.valueToCode(block, 'nrofvolumes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volskip = Blockly.JavaScript.valueToCode(block, 'volskip', Blockly.JavaScript.ORDER_ATOMIC);
  var value_createAMR = Blockly.JavaScript.valueToCode(block, 'createAMR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.JavaScript.valueToCode(block, 'nrOfSlices', Blockly.JavaScript.ORDER_ATOMIC);
  var value_prestc = Blockly.JavaScript.valueToCode(block, 'prestc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_swapBytes = Blockly.JavaScript.valueToCode(block, 'swapBytes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resx = Blockly.JavaScript.valueToCode(block, 'resx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resY = Blockly.JavaScript.valueToCode(block, 'resY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrBytes = Blockly.JavaScript.valueToCode(block, 'nrBytes', Blockly.JavaScript.ORDER_ATOMIC);
  var value_savingDir = Blockly.JavaScript.valueToCode(block, 'savingDir', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.CreateProjectFMRSlicesTimeLooping('+ value_filetype + ',' + value_firstfilename  + ',' + value_nrofvolumes  + ',' + value_volskip + ',' + value_createAMR + ',' + value_nrOfSlices + ',' + value_prestc + ',' + value_swapBytes + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  + ',' + value_savingDir + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_createprojectvmr'] = function(block) {
  var value_filetype = Blockly.JavaScript.valueToCode(block, 'filetype', Blockly.JavaScript.ORDER_ATOMIC);
  var value_firstfilename = Blockly.JavaScript.valueToCode(block, 'firstfilename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.JavaScript.valueToCode(block, 'nrOfSlices', Blockly.JavaScript.ORDER_ATOMIC);
  var value_isLittleEndian = Blockly.JavaScript.valueToCode(block, 'isLittleEndian', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resx = Blockly.JavaScript.valueToCode(block, 'resx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resY = Blockly.JavaScript.valueToCode(block, 'resY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrBytes = Blockly.JavaScript.valueToCode(block, 'nrBytes', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.CreateProjectVMR('+ value_filetype + ',' + value_firstfilename  + ','  + value_nrOfSlices + ',' + value_isLittleEndian + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  +  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_createprojectamr'] = function(block) {
  var value_filetype = Blockly.JavaScript.valueToCode(block, 'filetype', Blockly.JavaScript.ORDER_ATOMIC);
  var value_firstfilename = Blockly.JavaScript.valueToCode(block, 'firstfilename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.JavaScript.valueToCode(block, 'nrOfSlices', Blockly.JavaScript.ORDER_ATOMIC);
  var value_isLittleEndian = Blockly.JavaScript.valueToCode(block, 'isLittleEndian', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resx = Blockly.JavaScript.valueToCode(block, 'resx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_resY = Blockly.JavaScript.valueToCode(block, 'resY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nrBytes = Blockly.JavaScript.valueToCode(block, 'nrBytes', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.CreateProjectAMR('+ value_filetype + ',' + value_firstfilename  + ','  + value_nrOfSlices + ',' + value_isLittleEndian + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  +  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_currentdirectory'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'newdirectory', Blockly.JavaScript.ORDER_ATOMIC);
      code = 'BrainVoyagerQX.CurrentDirectory  = ' + value_input + ';\n';
      return code;
  } else {
      code = 'BrainVoyagerQX.CurrentDirectory';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_pathtosampledata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.PathToSampleData';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['bv_pathtodata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.PathToData';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_versionmajor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.VersionMajor';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_versionminor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.VersionMinor';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_buildnumber'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.BuildNumber';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_is64bits'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.Is64Bits';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_getX'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_getY'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_setX'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'xvalue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.x = ' + value_name + ';\n';
  return code ;
};

Blockly.JavaScript['bv_setY'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'yvalue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.y = ' + value_name + ';\n';
  return code ;
};

Blockly.JavaScript['bv_renamedicomfilesindirectory'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =  'BrainVoyagerQX.RenameDicomFilesInDirectory(' + value_name + ');\n';
  return code ;
};

Blockly.JavaScript['bv_printtolog'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.ShowLogTab();\n';
	code +=  'BrainVoyagerQX.PrintToLog(' + value_name + ');\n';
  return code ;
};

Blockly.JavaScript['bv_movewindow'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'xvalue', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'yvalue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.MoveWindow(' + value_x + ', ' + value_y + ');\n';
  return code ;
};

Blockly.JavaScript['bv_browsefile'] = function(block) {
  var value_instruction = Blockly.JavaScript.valueToCode(block, 'instruction', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.BrowseFile(' + value_instruction + ',' + value_filter + ')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_browsedirectory'] = function(block) {
  var value_instruction = Blockly.JavaScript.valueToCode(block, 'instruction', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = 'BrainVoyagerQX.BrowseDirectory(' + value_instruction + ')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_open_write'] = function(block) {
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_openfile = Blockly.JavaScript.valueToCode(block, 'openfile', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_openfile + '= new Object();\n';
  code += value_openfile + '.file = new QFile(' + value_filename + ');\n';
  code += value_openfile + '.file.open(new QIODevice.OpenMode(QIODevice.WriteOnly));\n';
  code += value_openfile + '.out = new QTextStream(' + value_openfile + '.file); \n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['bv_writetofile'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_file + '.out.writeString(String(' + value_text + ') + \' \\n \');\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['bv_openfile'] = function(block) {
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_openfile = Blockly.JavaScript.valueToCode(block, 'openfile', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code = value_openfile + '= new Object();\n';
  code += value_openfile + '.file = new QFile(' + value_filename + ');\n';
  switch (dropdown_property) {
    case 'READ':
	  code += value_openfile + '.file.open(new QIODevice.OpenMode(QIODevice.ReadOnly));\n';
	  break;
	case 'WRITE':
	  code += value_openfile + '.file.open(new QIODevice.OpenMode(QIODevice.WriteOnly));\n';
	  break;
	case 'READWRITE':
	  code += value_openfile + '.file.open(new QIODevice.OpenMode(QIODevice.ReadWrite));\n';
	  break;
	case 'APPEND':
	  code += value_openfile + '.file.open(new QIODevice.OpenMode(QIODevice.Append));\n';
	  break;
  }
  code += value_openfile + '.out = new QTextStream(' + value_openfile + '.file); \n';
  return code;
};

Blockly.JavaScript['bv_io_readlinefromfile'] = function(block) {
  var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_file + '.out.readLine()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_io_parseint'] = function(block) {
  var value_v = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'parseInt(' + value_v + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_closefile'] = function(block) {
  var value_file = Blockly.JavaScript.valueToCode(block, 'File', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_file + '.file.close();\n';
  return code;
};



Blockly.JavaScript['bv_closedoc'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'BV_DOC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bv_doc + '.Close();\n';
  return code;
};
/**
 * FMR
 */
Blockly.JavaScript['bv_linkamr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinkAMR(' + value_param2 +');\n';
  return code;
};

Blockly.JavaScript['bv_fmr_TR'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TR  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TR';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_interslicetime'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.InterSliceTime  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.InterSliceTime';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_pixelsizeofslicedimx'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.PixelSizeOfSliceDimX  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.PixelSizeOfSliceDimX';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_pixelsizeofslicedimy'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.PixelSizeOfSliceDimY  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.PixelSizeOfSliceDimY';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_slicethickness'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.SliceThickness  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.SliceThickness';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_gapthickness'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.GapThickness  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.GapThickness';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_timeresolutionverified'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TimeResolutionVerified  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TimeResolutionVerified';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_voxelresolutionverified'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.VoxelResolutionVerified  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.VoxelResolutionVerified';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_fmr_hasslicetimetable'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.HasSliceTimeTable  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.HasSliceTimeTable';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
};

Blockly.JavaScript['bv_correctslicetiming'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CorrectSliceTiming(' + value_param1 + ', ' + value_param2 +')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_correctslicetimingwithsliceorder'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CorrectSliceTimingWithSliceOrder(' + value_param1 + ', ' + value_param2 +')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_correctslicetimingusingtimetable'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CorrectSliceTimingUsingTimeTable(' + value_param2 +')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_correctmotion'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_fmrdoc + '.CorrectMotion(' + value_value +')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_correctmotiontargetvolumeinotherrun'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CorrectMotionTargetVolumeInOtherRun(' + value_param1 + ', ' + value_param2 +')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_correctmotionex'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'interpolation', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value3 = Blockly.JavaScript.valueToCode(block, 'usefull', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value4 = Blockly.JavaScript.valueToCode(block, 'maxiter', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value5 = Blockly.JavaScript.valueToCode(block, 'movies', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value6 = Blockly.JavaScript.valueToCode(block, 'logfile', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_fmrdoc + '.CorrectMotionEx(' + value_value1 + ',' + value_value2 + ',' + value_value3 + ',' + value_value4 + ',' + value_value5 + ',' + value_value6 + ')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_correctmotiontargetvolumeinotherrunex'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value0 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'interpolation', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value3 = Blockly.JavaScript.valueToCode(block, 'usefull', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value4 = Blockly.JavaScript.valueToCode(block, 'maxiter', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value5 = Blockly.JavaScript.valueToCode(block, 'movies', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value6 = Blockly.JavaScript.valueToCode(block, 'logfile', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_fmrdoc + '.CorrectMotionTargetVolumeInOtherRunEx(' + value_value0 + ',' + value_value1 + ',' + value_value2 + ',' + value_value3 + ',' + value_value4 + ',' + value_value5 + ',' + value_value6 + ')';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_temporalhighpassfilterglmfourier'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilterGLMFourier(' + value_param2 + ');\n';
  return code;
};

Blockly.JavaScript['bv_temporalhighpassfilterglmdct'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilterGLMDCT(' + value_param2 + ');\n';
  return code;
};

Blockly.JavaScript['bv_temporalhighpassfilterfmr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilter(' + value_param2 + ', ' + value_param3 +');\n';
  return code;
};

Blockly.JavaScript['bv_lineartrendremovalfmr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinearTrendRemoval();\n';
  return code;
};

Blockly.JavaScript['bv_fmr_filenameofpreprocessedfmr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.FileNameOfPreprocessdFMR'; //  The .FileNameOfPreprocessedFMR does not seem to work with latest BV version 20.4
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_temporalgaussiansmoothingfmr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalGaussianSmoothing(' + value_param1 + ', ' + value_param2 +');\n';
  return code;
};

Blockly.JavaScript['bv_spatialgaussiansmoothingfmr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SpatialGaussianSmoothing(' + value_param1 + ', ' + value_param2 +');\n';
  return code;
};
Blockly.JavaScript['bv_adjustmeanintensity'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.AdjustMeanIntensity();\n';
  return code;
};

Blockly.JavaScript['bv_temporalhighpassfiltervtc'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilter(' + value_param2 + ', ' + value_param3 +');\n';
  return code;
};

Blockly.JavaScript['bv_lineartrendremovalvtc'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinearTrendRemoval();\n';
  return code;
};
Blockly.JavaScript['bv_temporalgaussiansmoothingvtc'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalGaussianSmoothing(' + value_param1 + ', ' + value_param2 +');\n';
  return code;
};

Blockly.JavaScript['bv_spatialgaussiansmoothingvtc'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SpatialGaussianSmoothing(' + value_param1 + ', ' + value_param2 +');\n';
  return code;
};

Blockly.JavaScript['bv_fmr_linkstimulationprotocol'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinkStimulationProtocol(' + value_filename + ');\n';
  return code;
};

Blockly.JavaScript['bv_fmr_closedoc'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'BV_DOC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bv_doc + '.Close();\n';
  return code;
};

Blockly.JavaScript['bv_vtc_closedoc'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'BV_DOC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bv_doc + '.Close();\n';
  return code;
};

Blockly.JavaScript['bv_fmr_save'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'BV_DOC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bv_doc + '.Save();\n';
  return code;
};

Blockly.JavaScript['bv_vtc_save'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'BV_DOC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bv_doc + '.Save();\n';
  return code;
};

Blockly.JavaScript['bv_prt_clearstimulationprotocol'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.ClearStimulationProtocol();\n';
  return code;
};

Blockly.JavaScript['bv_prt_linkstimulationprotocol'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.LinkStimulationProtocol(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_prt_addcondition'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddCondition(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_prt_setconditioncolor'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param4 = Blockly.JavaScript.valueToCode(block, 'param4', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.SetConditionColor(' + value_param1 + ', ' + value_param2 + ', '+ value_param3 + ', '+ value_param4 + ');\n';
  return code;
};

Blockly.JavaScript['bv_prt_addinterval'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddInterval(' + value_param1  + ', ' + value_param2 + ', '+ value_param3 + ');\n';
  return code;
};

Blockly.JavaScript['bv_prt_savestimulationprotocol'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.SaveStimulationProtocol(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_prt_savevtc'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_param1 == null) {
    value_parm1 = "";
  }
  var code = value_bv_doc + '.SaveVTC(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_prt_stimulationprotocolfile'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolFile  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolFile';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocolexperimentname'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolExperimentName  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolExperimentName';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 
Blockly.JavaScript['bv_prt_stimulationprotocolresolution'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolResolution  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolResolution';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocolbackgroundcolorr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolBackgroundColorR  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolBackgroundColorR';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocolbackgroundcolorg'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolBackgroundColorG  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolBackgroundColorG';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocolbackgroundcolorb'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolBackgroundColorB  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolBackgroundColorB';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocoltimecoursecolorr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorR  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorR';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocoltimecoursecolorg'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorG  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorG';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocoltimecoursecolorb'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorB  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorB';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocoltextcolorr'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTextColorR  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTextColorR';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocoltextcolorg'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTextColorG  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTextColorG';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocoltextcolorb'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTextColorB  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTextColorB';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_prt_stimulationprotocoltimecoursethickness'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseThickness  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseThickness';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_sdm_firstconfoundpredictorofsdm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.FirstConfoundPredictorOfSDM  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.FirstConfoundPredictorOfSDM';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_sdm_sdmcontainsconstantpredictor'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.SDMContainsConstantPredictor  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.SDMContainsConstantPredictor';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_sdm_cleardesignmatrix'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.ClearDesignMatrix();\n';
  return code;
};

Blockly.JavaScript['bv_sdm_addpredictor'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddPredictor(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_sdm_setpredictorvalues'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param4 = Blockly.JavaScript.valueToCode(block, 'param4', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.SetPredictorValues(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ', ' + value_param4 + ');\n';
  return code;
};

Blockly.JavaScript['bv_sdm_setpredictorvaluesfromcondition'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.SetPredictorValuesFromCondition(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ');\n';
  return code;
};

Blockly.JavaScript['bv_sdm_applyhemodynamicresponsefunctiontopredictor'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.ApplyHemodynamicResponseFunctionToPredictor(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_sdm_scalepredictorvalues'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.ScalePredictorValues(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ');\n';
  return code;
};

Blockly.JavaScript['bv_sdm_savesinglestudyglmdesignmatrix'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.SaveSingleStudyGLMDesignMatrix(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_sdm_clearmultistudyglmdefinition'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.ClearMultiStudyGLMDefinition();\n';
  return code;
};

Blockly.JavaScript['bv_sdm_addstudyanddesignmatrix'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddStudyAndDesignMatrix(' + value_param1 + ', ' + value_param2 + ');\n';
  return code;
};

Blockly.JavaScript['bv_sdm_savemultistudyglmdefinitionfile'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'bv_doc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bv_doc + '.SaveMultiStudyGLMDefinitionFile(' + value_param1 + ');\n';
  return code;
};