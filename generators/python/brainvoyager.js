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
 * @fileoverview Generating Python for Brain Voyager blocks.
 * @author noirhomme@brainvoyager.com (Quentin Noirhomme)
 */
goog.provide('Blockly.Python.brain');

goog.require('Blockly.Python');


Blockly.Python['bv_open_document'] = function(block) {
   var text_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.OpenDocument(' + text_name + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];

  
};

Blockly.Python['bv_open_document_var'] = function(block) {
  var value_filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.OpenDocument('+ value_filename +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_activedocument'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.ActiveDocument';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_createprojectfmr'] = function(block) {
  var value_filetype = Blockly.Python.valueToCode(block, 'filetype', Blockly.Python.ORDER_ATOMIC);
  var value_firstfilename = Blockly.Python.valueToCode(block, 'firstfilename', Blockly.Python.ORDER_ATOMIC);
  var value_nrofvolumes = Blockly.Python.valueToCode(block, 'nrofvolumes', Blockly.Python.ORDER_ATOMIC);
  var value_volskip = Blockly.Python.valueToCode(block, 'volskip', Blockly.Python.ORDER_ATOMIC);
  var value_createAMR = Blockly.Python.valueToCode(block, 'createAMR', Blockly.Python.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.Python.valueToCode(block, 'nrOfSlices', Blockly.Python.ORDER_ATOMIC);
  var value_prestc = Blockly.Python.valueToCode(block, 'prestc', Blockly.Python.ORDER_ATOMIC);
  var value_swapBytes = Blockly.Python.valueToCode(block, 'swapBytes', Blockly.Python.ORDER_ATOMIC);
  var value_resx = Blockly.Python.valueToCode(block, 'resx', Blockly.Python.ORDER_ATOMIC);
  var value_resY = Blockly.Python.valueToCode(block, 'resY', Blockly.Python.ORDER_ATOMIC);
  var value_nrBytes = Blockly.Python.valueToCode(block, 'nrBytes', Blockly.Python.ORDER_ATOMIC);
  var value_savingDir = Blockly.Python.valueToCode(block, 'savingDir', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.CreateProjectFMR('+ value_filetype + ',' + value_firstfilename  + ',' + value_nrofvolumes  + ',' + value_volskip + ',' + value_createAMR + ',' + value_nrOfSlices + ',' + value_prestc + ',' + value_swapBytes + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  + ',' + value_savingDir + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_createprojectmosaicfmr'] = function(block) {
  var value_filetype = Blockly.Python.valueToCode(block, 'filetype', Blockly.Python.ORDER_ATOMIC);
  var value_firstfilename = Blockly.Python.valueToCode(block, 'firstfilename', Blockly.Python.ORDER_ATOMIC);
  var value_nrofvolumes = Blockly.Python.valueToCode(block, 'nrofvolumes', Blockly.Python.ORDER_ATOMIC);
  var value_volskip = Blockly.Python.valueToCode(block, 'volskip', Blockly.Python.ORDER_ATOMIC);
  var value_createAMR = Blockly.Python.valueToCode(block, 'createAMR', Blockly.Python.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.Python.valueToCode(block, 'nrOfSlices', Blockly.Python.ORDER_ATOMIC);
  var value_prestc = Blockly.Python.valueToCode(block, 'prestc', Blockly.Python.ORDER_ATOMIC);
  var value_swapBytes = Blockly.Python.valueToCode(block, 'swapBytes', Blockly.Python.ORDER_ATOMIC);
  var value_mosaicresx = Blockly.Python.valueToCode(block, 'mosaicresx', Blockly.Python.ORDER_ATOMIC);
  var value_mosaicresy = Blockly.Python.valueToCode(block, 'mosaicresy', Blockly.Python.ORDER_ATOMIC);
  var value_nrBytes = Blockly.Python.valueToCode(block, 'nrBytes', Blockly.Python.ORDER_ATOMIC);
  var value_savingDir = Blockly.Python.valueToCode(block, 'savingDir', Blockly.Python.ORDER_ATOMIC);
  var value_volsInImg = Blockly.Python.valueToCode(block, 'volsInImg', Blockly.Python.ORDER_ATOMIC);
  var value_resx = Blockly.Python.valueToCode(block, 'resx', Blockly.Python.ORDER_ATOMIC);
  var value_resY = Blockly.Python.valueToCode(block, 'resY', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.CreateProjectMosaicFMR('+ value_filetype + ',' + value_firstfilename  + ',' + value_nrofvolumes  + ',' + value_volskip + ',' + value_createAMR + ',' + value_nrOfSlices + ',' + value_prestc + ',' + value_swapBytes + ',' + value_mosaicresx  + ',' + value_mosaicresy  + ',' + value_nrBytes  + ',' + value_savingDir + ',' + value_volsInImg + ',' + value_resx  + ',' + value_resY  + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_createprojectfmrslicestimelooping'] = function(block) {
  var value_filetype = Blockly.Python.valueToCode(block, 'filetype', Blockly.Python.ORDER_ATOMIC);
  var value_firstfilename = Blockly.Python.valueToCode(block, 'firstfilename', Blockly.Python.ORDER_ATOMIC);
  var value_nrofvolumes = Blockly.Python.valueToCode(block, 'nrofvolumes', Blockly.Python.ORDER_ATOMIC);
  var value_volskip = Blockly.Python.valueToCode(block, 'volskip', Blockly.Python.ORDER_ATOMIC);
  var value_createAMR = Blockly.Python.valueToCode(block, 'createAMR', Blockly.Python.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.Python.valueToCode(block, 'nrOfSlices', Blockly.Python.ORDER_ATOMIC);
  var value_prestc = Blockly.Python.valueToCode(block, 'prestc', Blockly.Python.ORDER_ATOMIC);
  var value_swapBytes = Blockly.Python.valueToCode(block, 'swapBytes', Blockly.Python.ORDER_ATOMIC);
  var value_resx = Blockly.Python.valueToCode(block, 'resx', Blockly.Python.ORDER_ATOMIC);
  var value_resY = Blockly.Python.valueToCode(block, 'resY', Blockly.Python.ORDER_ATOMIC);
  var value_nrBytes = Blockly.Python.valueToCode(block, 'nrBytes', Blockly.Python.ORDER_ATOMIC);
  var value_savingDir = Blockly.Python.valueToCode(block, 'savingDir', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.CreateProjectFMRSlicesTimeLooping('+ value_filetype + ',' + value_firstfilename  + ',' + value_nrofvolumes  + ',' + value_volskip + ',' + value_createAMR + ',' + value_nrOfSlices + ',' + value_prestc + ',' + value_swapBytes + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  + ',' + value_savingDir + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_createprojectvmr'] = function(block) {
  var value_filetype = Blockly.Python.valueToCode(block, 'filetype', Blockly.Python.ORDER_ATOMIC);
  var value_firstfilename = Blockly.Python.valueToCode(block, 'firstfilename', Blockly.Python.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.Python.valueToCode(block, 'nrOfSlices', Blockly.Python.ORDER_ATOMIC);
  var value_isLittleEndian = Blockly.Python.valueToCode(block, 'isLittleEndian', Blockly.Python.ORDER_ATOMIC);
  var value_resx = Blockly.Python.valueToCode(block, 'resx', Blockly.Python.ORDER_ATOMIC);
  var value_resY = Blockly.Python.valueToCode(block, 'resY', Blockly.Python.ORDER_ATOMIC);
  var value_nrBytes = Blockly.Python.valueToCode(block, 'nrBytes', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.CreateProjectVMR('+ value_filetype + ',' + value_firstfilename  + ','  + value_nrOfSlices + ',' + value_isLittleEndian + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  +  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_createprojectamr'] = function(block) {
  var value_filetype = Blockly.Python.valueToCode(block, 'filetype', Blockly.Python.ORDER_ATOMIC);
  var value_firstfilename = Blockly.Python.valueToCode(block, 'firstfilename', Blockly.Python.ORDER_ATOMIC);
  var value_nrOfSlices = Blockly.Python.valueToCode(block, 'nrOfSlices', Blockly.Python.ORDER_ATOMIC);
  var value_isLittleEndian = Blockly.Python.valueToCode(block, 'isLittleEndian', Blockly.Python.ORDER_ATOMIC);
  var value_resx = Blockly.Python.valueToCode(block, 'resx', Blockly.Python.ORDER_ATOMIC);
  var value_resY = Blockly.Python.valueToCode(block, 'resY', Blockly.Python.ORDER_ATOMIC);
  var value_nrBytes = Blockly.Python.valueToCode(block, 'nrBytes', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.CreateProjectAMR('+ value_filetype + ',' + value_firstfilename  + ','  + value_nrOfSlices + ',' + value_isLittleEndian + ',' + value_resx  + ',' + value_resY  + ',' + value_nrBytes  +  ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_currentdirectory'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'newdirectory', Blockly.Python.ORDER_ATOMIC);
      code = 'BrainVoyager.CurrentDirectory  = ' + value_input + '\n';
      return code;
  } else {
      code = 'BrainVoyager.CurrentDirectory';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_pathtosampledata'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.PathToSampleData';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['bv_pathtodata'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.PathToData';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_versionmajor'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.VersionMajor';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_versionminor'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.VersionMinor';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_buildnumber'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.BuildNumber';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_is64bits'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.Is64Bits';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_getX'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_getY'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_setX'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'xvalue', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.x = ' + value_name + '\n';
  return code ;
};

Blockly.Python['bv_setY'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'yvalue', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.y = ' + value_name + '\n';
  return code ;
};

Blockly.Python['bv_renamedicomfilesindirectory'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  'BrainVoyager.RenameDicomFilesInDirectory(' + value_name + ')\n';
  return code ;
};

Blockly.Python['bv_printtolog'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.ShowLogTab()\n';
	code +=  'BrainVoyager.PrintToLog(' + value_name + ')\n';
  return code;
};

Blockly.Python['bv_movewindow'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'xvalue', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'yvalue', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.MoveWindow(' + value_x + ', ' + value_y + ')\n';
  return code;
};

Blockly.Python['bv_browsefile'] = function(block) {
  var value_instruction = Blockly.Python.valueToCode(block, 'instruction', Blockly.Python.ORDER_ATOMIC);
  var value_filter = Blockly.Python.valueToCode(block, 'filter', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.BrowseFile(' + value_instruction + ',' + value_filter + ')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_browsedirectory'] = function(block) {
  var value_instruction = Blockly.Python.valueToCode(block, 'instruction', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
  var code = 'BrainVoyager.BrowseDirectory(' + value_instruction + ')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_open_write'] = function(block) {
  var value_filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var value_openfile = Blockly.Python.valueToCode(block, 'openfile', Blockly.Python.ORDER_ATOMIC);
  var code = value_openfile + '= new Object()\n';
  code += value_openfile + '.file = new QFile(' + value_filename + ')\n';
  code += value_openfile + '.file.open(new QIODevice.OpenMode(QIODevice.WriteOnly))\n';
  code += value_openfile + '.out = new QTextStream(' + value_openfile + '.file)\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['bv_writetofile'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_file = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_file + '.write(str(' + value_text + ') + \' \\n \')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['bv_openfile'] = function(block) {
  var value_filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  var value_openfile = Blockly.Python.valueToCode(block, 'openfile', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code = '';
  switch (dropdown_property) {
    case 'READ':
	  code += value_openfile + ' = open(' + value_filename + ',"r")\n';
	  break;
	case 'WRITE':
	  code += value_openfile + ' = open(' + value_filename + ',"w")\n';
	  break;
	case 'READWRITE':
	  code += value_openfile + ' = open(' + value_filename + ',"r+")\n';
	  break;
	case 'APPEND':
	  code += value_openfile + ' = open(' + value_filename + ',"a")\n';
	  break;
  }
  return code;
};

Blockly.Python['bv_io_readlinefromfile'] = function(block) {
  var value_file = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
  var code = value_file + '.readline()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_io_parseint'] = function(block) {
  var value_v = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = 'int(' + value_v + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['bv_closefile'] = function(block) {
  var value_file = Blockly.Python.valueToCode(block, 'File', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_file + '.close()\n';
  return code;
};



Blockly.Python['bv_closedoc'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'BV_DOC', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bv_doc + '.Close()\n';
  return code;
};
/**
 * FMR
 */
Blockly.Python['bv_linkamr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.LinkAMR(' + value_param2 +')\n';
  return code;
};

Blockly.Python['bv_fmr_TR'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.TR  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.TR';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_interslicetime'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.InterSliceTime  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.InterSliceTime';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_pixelsizeofslicedimx'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.PixelSizeOfSliceDimX  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.PixelSizeOfSliceDimX';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_pixelsizeofslicedimy'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.PixelSizeOfSliceDimY  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.PixelSizeOfSliceDimY';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_slicethickness'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.SliceThickness  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.SliceThickness';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_gapthickness'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.GapThickness  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.GapThickness';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_timeresolutionverified'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.TimeResolutionVerified  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.TimeResolutionVerified';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_voxelresolutionverified'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.VoxelResolutionVerified  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.VoxelResolutionVerified';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_fmr_hasslicetimetable'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_fmrdoc + '.HasSliceTimeTable  = ' + value_input + '\n';
      return code;
  } else {
      code = value_fmrdoc + '.HasSliceTimeTable';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
};

Blockly.Python['bv_correctslicetiming'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.CorrectSliceTiming(' + value_param1 + ', ' + value_param2 +')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_correctslicetimingwithsliceorder'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.CorrectSliceTimingWithSliceOrder(' + value_param1 + ', ' + value_param2 +')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_correctslicetimingusingtimetable'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.CorrectSliceTimingUsingTimeTable(' + value_param2 +')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_correctmotion'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_fmrdoc + '.CorrectMotion(' + value_value +')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_correctmotiontargetvolumeinotherrun'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.CorrectMotionTargetVolumeInOtherRun(' + value_param1 + ', ' + value_param2 +')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_correctmotionex'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var value_value1 = Blockly.Python.valueToCode(block, 'target', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'interpolation', Blockly.Python.ORDER_ATOMIC);
  var value_value3 = Blockly.Python.valueToCode(block, 'usefull', Blockly.Python.ORDER_ATOMIC);
  var value_value4 = Blockly.Python.valueToCode(block, 'maxiter', Blockly.Python.ORDER_ATOMIC);
  var value_value5 = Blockly.Python.valueToCode(block, 'movies', Blockly.Python.ORDER_ATOMIC);
  var value_value6 = Blockly.Python.valueToCode(block, 'logfile', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_fmrdoc + '.CorrectMotionEx(' + value_value1 + ',' + value_value2 + ',' + value_value3 + ',' + value_value4 + ',' + value_value5 + ',' + value_value6 + ')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_correctmotiontargetvolumeinotherrunex'] = function(block) {
  var value_fmrdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  var value_value0 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_value1 = Blockly.Python.valueToCode(block, 'target', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'interpolation', Blockly.Python.ORDER_ATOMIC);
  var value_value3 = Blockly.Python.valueToCode(block, 'usefull', Blockly.Python.ORDER_ATOMIC);
  var value_value4 = Blockly.Python.valueToCode(block, 'maxiter', Blockly.Python.ORDER_ATOMIC);
  var value_value5 = Blockly.Python.valueToCode(block, 'movies', Blockly.Python.ORDER_ATOMIC);
  var value_value6 = Blockly.Python.valueToCode(block, 'logfile', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_fmrdoc + '.CorrectMotionTargetVolumeInOtherRunEx(' + value_value0 + ',' + value_value1 + ',' + value_value2 + ',' + value_value3 + ',' + value_value4 + ',' + value_value5 + ',' + value_value6 + ')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_temporalhighpassfilterglmfourier'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilterGLMFourier(' + value_param2 + ')\n';
  return code;
};

Blockly.Python['bv_temporalhighpassfilterglmdct'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilterGLMDCT(' + value_param2 + ')\n';
  return code;
};

Blockly.Python['bv_temporalhighpassfilterfmr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var value_param3 = Blockly.Python.valueToCode(block, 'param3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilter(' + value_param2 + ', ' + value_param3 +')\n';
  return code;
};

Blockly.Python['bv_lineartrendremovalfmr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.LinearTrendRemoval()\n';
  return code;
};

Blockly.Python['bv_fmr_filenameofpreprocessedfmr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.FileNameOfPreprocessdFMR'; //  The .FileNameOfPreprocessedFMR does not seem to work with latest BV version 20.4
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['bv_temporalgaussiansmoothingfmr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.TemporalGaussianSmoothing(' + value_param1 + ', ' + value_param2 +')\n';
  return code;
};

Blockly.Python['bv_spatialgaussiansmoothingfmr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.SpatialGaussianSmoothing(' + value_param1 + ', ' + value_param2 +')\n';
  return code;
};
Blockly.Python['bv_adjustmeanintensity'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.AdjustMeanIntensity()\n';
  return code;
};

Blockly.Python['bv_temporalhighpassfiltervtc'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var value_param3 = Blockly.Python.valueToCode(block, 'param3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilter(' + value_param2 + ', ' + value_param3 +')\n';
  return code;
};

Blockly.Python['bv_lineartrendremovalvtc'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'fmrdoc', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.LinearTrendRemoval()\n';
  return code;
};
Blockly.Python['bv_temporalgaussiansmoothingvtc'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.TemporalGaussianSmoothing(' + value_param1 + ', ' + value_param2 +')\n';
  return code;
};

Blockly.Python['bv_spatialgaussiansmoothingvtc'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.SpatialGaussianSmoothing(' + value_param1 + ', ' + value_param2 +')\n';
  return code;
};

Blockly.Python['bv_fmr_linkstimulationprotocol'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var value_filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bvdoc + '.LinkStimulationProtocol(' + value_filename + ')\n';
  return code;
};

Blockly.Python['bv_fmr_closedoc'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'BV_DOC', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bv_doc + '.Close()\n';
  return code;
};

Blockly.Python['bv_vtc_closedoc'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'BV_DOC', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bv_doc + '.Close()\n';
  return code;
};

Blockly.Python['bv_fmr_save'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'BV_DOC', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bv_doc + '.Save()\n';
  return code;
};

Blockly.Python['bv_vtc_save'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'BV_DOC', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_bv_doc + '.Save()\n';
  return code;
};

Blockly.Python['bv_prt_clearstimulationprotocol'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.ClearStimulationProtocol()\n';
  return code;
};

Blockly.Python['bv_prt_linkstimulationprotocol'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.LinkStimulationProtocol(' + value_param1 + ')\n';
  return code;
};

Blockly.Python['bv_prt_addcondition'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddCondition(' + value_param1 + ')\n';
  return code;
};

Blockly.Python['bv_prt_setconditioncolor'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var value_param3 = Blockly.Python.valueToCode(block, 'param3', Blockly.Python.ORDER_ATOMIC);
  var value_param4 = Blockly.Python.valueToCode(block, 'param4', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.SetConditionColor(' + value_param1 + ', ' + value_param2 + ', '+ value_param3 + ', '+ value_param4 + ')\n';
  return code;
};

Blockly.Python['bv_prt_addinterval'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var value_param3 = Blockly.Python.valueToCode(block, 'param3', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddInterval(' + value_param1  + ', ' + value_param2 + ', '+ value_param3 + ')\n';
  return code;
};

Blockly.Python['bv_prt_savestimulationprotocol'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.SaveStimulationProtocol(' + value_param1 + ')\n';
  return code;
};

Blockly.Python['bv_prt_savevtc'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  if (value_param1 == null) {
    value_parm1 = "";
  }
  var code = value_bv_doc + '.SaveVTC(' + value_param1 + ')\n';
  return code;
};

Blockly.Python['bv_prt_stimulationprotocolfile'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolFile  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolFile';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocolexperimentname'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolExperimentName  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolExperimentName';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 
Blockly.Python['bv_prt_stimulationprotocolresolution'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolResolution  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolResolution';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocolbackgroundcolorr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolBackgroundColorR  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolBackgroundColorR';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocolbackgroundcolorg'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolBackgroundColorG  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolBackgroundColorG';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocolbackgroundcolorb'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolBackgroundColorB  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolBackgroundColorB';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocoltimecoursecolorr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorR  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorR';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocoltimecoursecolorg'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorG  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorG';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocoltimecoursecolorb'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorB  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseColorB';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocoltextcolorr'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTextColorR  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTextColorR';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocoltextcolorg'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTextColorG  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTextColorG';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocoltextcolorb'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTextColorB  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTextColorB';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_prt_stimulationprotocoltimecoursethickness'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.StimulationProtocolTimeCourseThickness  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.StimulationProtocolTimeCourseThickness';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_sdm_firstconfoundpredictorofsdm'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.FirstConfoundPredictorOfSDM  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.FirstConfoundPredictorOfSDM';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_sdm_sdmcontainsconstantpredictor'] = function(block) {
  var value_bvdoc = Blockly.Python.valueToCode(block, 'bvdoc', Blockly.Python.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.Python.valueToCode(block, 'trvalue', Blockly.Python.ORDER_ATOMIC);
      code = value_bvdoc + '.SDMContainsConstantPredictor  = ' + value_input + '\n';
      return code;
  } else {
      code = value_bvdoc + '.SDMContainsConstantPredictor';
      return [code, Blockly.Python.ORDER_MEMBER];
  }
}; 

Blockly.Python['bv_sdm_cleardesignmatrix'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.ClearDesignMatrix()\n';
  return code;
};

Blockly.Python['bv_sdm_addpredictor'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddPredictor(' + value_param1 + ')\n';
  return code;
};

Blockly.Python['bv_sdm_setpredictorvalues'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var value_param3 = Blockly.Python.valueToCode(block, 'param3', Blockly.Python.ORDER_ATOMIC);
  var value_param4 = Blockly.Python.valueToCode(block, 'param4', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.SetPredictorValues(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ', ' + value_param4 + ')\n';
  return code;
};

Blockly.Python['bv_sdm_setpredictorvaluesfromcondition'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var value_param3 = Blockly.Python.valueToCode(block, 'param3', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.SetPredictorValuesFromCondition(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ')\n';
  return code;
};

Blockly.Python['bv_sdm_applyhemodynamicresponsefunctiontopredictor'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.ApplyHemodynamicResponseFunctionToPredictor(' + value_param1 + ')\n';
  return code;
};

Blockly.Python['bv_sdm_scalepredictorvalues'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var value_param3 = Blockly.Python.valueToCode(block, 'param3', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.ScalePredictorValues(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ')\n';
  return code;
};

Blockly.Python['bv_sdm_savesinglestudyglmdesignmatrix'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.SaveSingleStudyGLMDesignMatrix(' + value_param1 + ')\n';
  return code;
};

Blockly.Python['bv_sdm_clearmultistudyglmdefinition'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.ClearMultiStudyGLMDefinition()\n';
  return code;
};

Blockly.Python['bv_sdm_addstudyanddesignmatrix'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var value_param2 = Blockly.Python.valueToCode(block, 'param2', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.AddStudyAndDesignMatrix(' + value_param1 + ', ' + value_param2 + ')\n';
  return code;
};

Blockly.Python['bv_sdm_savemultistudyglmdefinitionfile'] = function(block) {
  var value_bv_doc = Blockly.Python.valueToCode(block, 'bv_doc', Blockly.Python.ORDER_ATOMIC);
  var value_param1 = Blockly.Python.valueToCode(block, 'param1', Blockly.Python.ORDER_ATOMIC);
  var code = value_bv_doc + '.SaveMultiStudyGLMDefinitionFile(' + value_param1 + ')\n';
  return code;
};