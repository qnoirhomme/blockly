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
 * @fileoverview Generating JavaScript for Brain Voyager blocks.
 * @author noirhomme@brainvoyager.com (Quentin Noirhomme)
 */
 goog.provide('Blockly.JavaScript.brain');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['bv_mesh_temporalhighpassfilterfft'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalHighPassFilterFFT(' + value_param2 + ');\n';
  return code;
};

Blockly.JavaScript['bv_mesh_lineartrendremoval'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'fmrdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinearTrendRemoval();\n';
  return code;
};
Blockly.JavaScript['bv_mesh_temporalgaussiansmoothing'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.TemporalGaussianSmoothing(' + value_param1 + ', ' + value_param2 +');\n';
  return code;
};

Blockly.JavaScript['bv_mesh_spatialsmoothing'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SpatialSmoothing(' + value_param1 + ');\n';
  return code;
};

/**
 * VMR
 */
Blockly.JavaScript['bv_vmr_extendedtalspaceforvtccreation'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.ExtendedTALSpaceForVTCCreation  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.ExtendedTALSpaceForVTCCreation';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 
Blockly.JavaScript['bv_vmr_useboundingboxforvtccreation'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.UseBoundingBoxForVTCCreation  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.UseBoundingBoxForVTCCreation';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_targetvtcboundingboxxstart'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TargetVTCBoundingBoxXStart  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TargetVTCBoundingBoxXStart';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_targetvtcboundingboxystart'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TargetVTCBoundingBoxYStart  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TargetVTCBoundingBoxYStart';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_targetvtcboundingboxzstart'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TargetVTCBoundingBoxZStart  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TargetVTCBoundingBoxZStart';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_targetvtcboundingboxxend'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TargetVTCBoundingBoxXEnd  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TargetVTCBoundingBoxXEnd';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_targetvtcboundingboxyend'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TargetVTCBoundingBoxYEnd  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TargetVTCBoundingBoxYEnd';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_targetvtcboundingboxzend'] = function(block) {
  var value_fmrdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_fmrdoc + '.TargetVTCBoundingBoxZEnd  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_fmrdoc + '.TargetVTCBoundingBoxZEnd';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_vmrvoxelresolutionx'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.VMRVoxelResolutionX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_vmr_vmrvoxelresolutiony'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.VMRVoxelResolutionY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_vmr_vmrvoxelresolutionz'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.VMRVoxelResolutionZ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_vmr_filenameofcurrentvtc'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.FileNameOfCurrentVTC';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_vmr_meshscene'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.MeshScene';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

/**
 * VMR functions
 */
 Blockly.JavaScript['bv_vmr_linkvtc'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vtcname = Blockly.JavaScript.valueToCode(block, 'vtcname', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinkVTC(' + value_vtcname + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_linkstimulationprotocol'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinkStimulationProtocol(' + value_filename + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_closedoc'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'BV_DOC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bv_doc + '.Close();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_save'] = function(block) {
  var value_bv_doc = Blockly.JavaScript.valueToCode(block, 'BV_DOC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bv_doc + '.Save();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_autotransformtoisovoxel'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.AutoTransformToIsoVoxel(' + value_param1 + ', ' + value_param2 + ')';
  return [code, Blockly.JavaScript.ORDER_ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_autotransformtosag'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.AutoTransformToSAG(' + value_param1 + ')';
  return [code, Blockly.JavaScript.ORDER_ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_setvoxelintensity'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param4 = Blockly.JavaScript.valueToCode(block, 'param4', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SetVoxelIntensity(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ', ' + value_param4 + ');\n';
  return code;
};
Blockly.JavaScript['bv_vmr_getvoxelintensity'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.GetVoxelIntensity(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ')';
  return [code, Blockly.JavaScript.ORDER_ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_correctintensityinhomogeneities'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CorrectIntensityInhomogeneities();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_autoacpcandtaltransformation'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.AutoACPCAndTALTransformation();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_createvtcinvmrspace'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param4 = Blockly.JavaScript.valueToCode(block, 'param4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param5 = Blockly.JavaScript.valueToCode(block, 'param5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param6 = Blockly.JavaScript.valueToCode(block, 'param6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param7 = Blockly.JavaScript.valueToCode(block, 'param7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param8 = Blockly.JavaScript.valueToCode(block, 'param8', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CreateVTCInVMRSpace(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ', ' + value_param4 + ', ' + value_param5 + ', ' + value_param6 + ', ' + value_param7 + ', ' + value_param8 + ')';
  return [code, Blockly.JavaScript.ORDER_ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_createvtcinacpcspace'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param4 = Blockly.JavaScript.valueToCode(block, 'param4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param5 = Blockly.JavaScript.valueToCode(block, 'param5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param6 = Blockly.JavaScript.valueToCode(block, 'param6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param7 = Blockly.JavaScript.valueToCode(block, 'param7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param8 = Blockly.JavaScript.valueToCode(block, 'param8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param9 = Blockly.JavaScript.valueToCode(block, 'param9', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CreateVTCInACPCSpace(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ', ' + value_param4 + ', ' + value_param5 + ', ' + value_param6 + ', ' + value_param7 + ', ' + value_param8 + ', ' + value_param9 + ')';
  return [code, Blockly.JavaScript.ORDER_ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_createvtcintalspace'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param4 = Blockly.JavaScript.valueToCode(block, 'param4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param5 = Blockly.JavaScript.valueToCode(block, 'param5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param6 = Blockly.JavaScript.valueToCode(block, 'param6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param7 = Blockly.JavaScript.valueToCode(block, 'param7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param8 = Blockly.JavaScript.valueToCode(block, 'param8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param9 = Blockly.JavaScript.valueToCode(block, 'param9', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param10 = Blockly.JavaScript.valueToCode(block, 'param10', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CreateVTCInTALSpace(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ', ' + value_param4 + ', ' + value_param5 + ', ' + value_param6 + ', ' + value_param7 + ', ' + value_param8 + ', ' + value_param9 + ', ' + value_param10 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_correctforserialcorrelations'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.CorrectForSerialCorrelations  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.CorrectForSerialCorrelations';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_separationofsubjectpredictors'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.SeparationOfSubjectPredictors  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.SeparationOfSubjectPredictors';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_separationofstudypredictors'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.SeparationOfStudyPredictors  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.SeparationOfStudyPredictors';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_ztransformstudies'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ZTransformStudies  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ZTransformStudies';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_psctransformstudies'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.PSCTransformStudies  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.PSCTransformStudies';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_ztransformstudiesbaselineonly'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ZTransformStudiesBaselineOnly  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ZTransformStudiesBaselineOnly';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_loadsinglestudyglmdesignmatrix'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LoadSingleStudyGLMDesignMatrix(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_loadmultistudyglmdefinitionfile'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LoadMultiStudyGLMDefinitionFile(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_computesinglestudyglm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.ComputeSingleStudyGLM();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_computemultistudyglm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.ComputeMultiStudyGLM();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_computerfxglm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.ComputeRFXGLM();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_showglm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.ShowGLM();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_loadglm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LoadGLM(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_saveglm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SaveGLM(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_clearcontrasts'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.ClearContrasts();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_addcontrast'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.AddContras(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_setcontraststring'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SetContrastString(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_setcurrentcontrastatindex'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SetCurrentContrastAtIndex(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_setcontrastvalueatindex'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SetContrastValueAtIndex(' + value_param1 + ', '  + value_param2 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_setcurrentcontrast'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SetCurrentContrast(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_setcontrastvalue'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SetContrastValue(' + value_param1 + ', ' + value_param2 + ');\n';
  return code;
};

/**
 * VOI/ROI
 */
 Blockly.JavaScript['bv_vmr_nrofvois'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.NrOfVOIs';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

 Blockly.JavaScript['bv_vmr_nrofpredictorsinsinglestudydm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.NrOfPredictorsInSingleStudyDM';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_vmr_nroftimepointsinsinglestudydm'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.NrOfTimePointsInSingleStudyDM';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.JavaScript['bv_vmr_nrofroicontrasts'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.NrOfROIContrasts';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_vmr_loadvoifile'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LoadVOIFile(' + value_param1 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_hideallvois'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.HideAllVOIs();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_selectvoi'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SelectVOI(' + value_param1 + '-1);\n';
  return code;
};
Blockly.JavaScript['bv_vmr_getnameofvoi'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.GetNameOfVOI(' + value_param1 + '-1)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_showselectedvois'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.ShowSelectedVOIs();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_prepareroicontrasts'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.PrepareROIContrasts(' + value_param1 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_addroicontrast'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.AddROIContrast(' + value_param1 + ', ' + value_param2 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_computesinglestudyglmforvoi'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.ComputeSingleStudyGLMForVOI(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ');\n';
  return code;
};

Blockly.JavaScript['bv_vmr_getnameofroicontrast'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.GetNameOfROIContrast(' + value_param1 + '-1)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_gettvalueofroicontrast'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.GetTValueOfROIContrast(' + value_param1 + '-1)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_getpvalueofroicontrast'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.GetPValueOfROIContrast(' + value_param1 + '-1)';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_loadmesh'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LoadMesh(' + value_param1 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_addmesh'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.AddMesh(' + value_param1 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_savemesh'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SaveMesh(' + value_param1 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_updatesurfacewindow'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.UpdateSurfaceWindow();\n';
  return code;
};

Blockly.JavaScript['bv_vmr_savesnapshotofsurfacewindow'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.SaveSnapshotOfSurfaceWindow()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_linkmtc'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.LinkMTC(' + value_param1 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_createmtcfromvtc'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_bvdoc + '.CreateMTCFromVTC(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_getmeshscene'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bvdoc + '.GetMeshScene()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_vmr_viewpointtranslationx'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointTranslationX  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointTranslationX';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_viewpointtranslationy'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointTranslationY  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointTranslationY';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_viewpointtranslationz'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointTranslationZ  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointTranslationZ';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_viewpointrotationx'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointRotationX  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointRotationX';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_viewpointrotationy'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointRotationY  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointRotationY';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_viewpointrotationz'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointRotationZ  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointRotationZ';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_vmr_meshscene'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bvdoc + '.MeshScene';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_meshscene_currentmesh'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_bvdoc + '.CurrentMesh';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_meshscene_viewpointpositionx'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointPositionX  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointPositionX';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_meshscene_viewpointpositiony'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointPositionY  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointPositionY';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_meshscene_viewpointpositionz'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointPositionZ  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointPositionZ';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_meshscene_viewpointrotationx'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointRotationX  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointRotationX';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_meshscene_viewpointrotationy'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointRotationY  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointRotationY';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_meshscene_viewpointrotationz'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.ViewpointRotationZ  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.ViewpointRotationZ';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_meshscene_sphereresolutioncba'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.SphereResolutionCBA  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.SphereResolutionCBA';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_mesh_filename'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.FileName';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_mesh_nrofvertices'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.NrOfVertices';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['bv_mesh_morphingupdateinterval'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.MorphingUpdateInterval  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.MorphingUpdateInterval';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_mesh_correctforserialcorrelations'] = function(block) {
  var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'SET') {
	  var value_input = Blockly.JavaScript.valueToCode(block, 'trvalue', Blockly.JavaScript.ORDER_ATOMIC);
      code = value_bvdoc + '.CorrectForSerialCorrelations  = ' + value_input + ';\n';
      return code;
  } else {
      code = value_bvdoc + '.CorrectForSerialCorrelations';
      return [code, Blockly.JavaScript.ORDER_MEMBER];
  }
}; 

Blockly.JavaScript['bv_mesh_updatesurfacewindow'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.MeshScene.UpdateSurfaceWindow();\n';
    return code;
};

Blockly.JavaScript['bv_mesh_saveas'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SaveAs(' + value_param1 + ');\n';
    return code;
};

Blockly.JavaScript['bv_mesh_calculatecurvaturecba'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CalculateCurvatureCBA()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_smoothcurrentmap'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SmoothCurrentMap(' + value_param1 + ');\n';
    return code;
};

Blockly.JavaScript['bv_mesh_inflatemeshtosphere'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.InflateMeshToSphere(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_correctinflatedspheremesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CorrectInflatedSphereMesh(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_mapspheremeshfromstandardsphere'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.MapSphereMeshFromStandardSphere()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_setstandardspheretofoldedmesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SetStandardSphereToFoldedMesh(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_createmultiscalecurvaturemap'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param4 = Blockly.JavaScript.valueToCode(block, 'param4', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CreateMultiScaleCurvatureMap(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ', ' + value_param4 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_createsphericalcoordinatesmapfromsmp'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CreateSphericalCoordinatesMapFromSMP(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_smoothmesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SmoothMesh(' + value_param1 + ', ' + value_param2 + ');\n';
    return code;
};

Blockly.JavaScript['bv_mesh_smoothrecomesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SmoothRecoMesh(' + value_param1 + ', ' + value_param2 + ');\n';
    return code;
};

Blockly.JavaScript['bv_mesh_calculatecurvature'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CalculateCurvature();\n';
    return code;
};

Blockly.JavaScript['bv_mesh_inflatemesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC); 
    var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.InflateMesh(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_createmtcfromvtc'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param2 = Blockly.JavaScript.valueToCode(block, 'param2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param3 = Blockly.JavaScript.valueToCode(block, 'param3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CreateMTCFromVTC(' + value_param1 + ', ' + value_param2 + ', ' + value_param3 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_linkmtc'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.LinkMTC(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_savemtc'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SaveMTC(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_cleardesignmatrix'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.ClearDesignMatrix();\n';
    return code;
};

Blockly.JavaScript['bv_mesh_loadsinglestudyglmdesignmatrix'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.LoadSingleStudyGLMDesignMatrix(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_mesh_computesinglestudyglm'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.ComputeSingleStudyGLM();\n';
    return code;
};

Blockly.JavaScript['bv_mesh_showglm'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.ShowGLM();\n';
    return code;
};

Blockly.JavaScript['bv_mesh_saveglm'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SaveGLM(' + value_param1 + ');\n';
    return code;
};

Blockly.JavaScript['bv_meshscene_loadmesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.LoadMesh(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_mapspheremeshfromstandardsphere'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.MapSphereMeshFromStandardSphere()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_setstandardspheretofoldedmesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.SetStandardSphereToFoldedMesh(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_createstandardspheremesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CreateStandardSphereMesh()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_cleargroupcbacurvaturefiles'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.ClearGroupCBACurvatureFiles();';
    return code;
};

Blockly.JavaScript['bv_meshscene_addcurvaturefileforgroupcba'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.AddCurvatureFileForGroupCBA(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_runrigidcba'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.RunRigidCBA(' + value_param1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_runcba'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.RunCBA()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_createaveragecurvaturegroupmap'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CreateAverageCurvatureGroupMap()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['bv_meshscene_createaveragefoldedgroupmesh'] = function(block) {
	var value_bvdoc = Blockly.JavaScript.valueToCode(block, 'bvdoc', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_bvdoc + '.CreateAverageFoldedGroupMesh()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
