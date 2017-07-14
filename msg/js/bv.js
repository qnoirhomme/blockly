/**
 * @fileoverview Brain Voyager blocks help file for Blockly based scripting.
 * @author noirhomme@brainvoyager.com (Quentin Noirhomme)
 */

'use strict';

goog.provide('Blockly.Msg.en'); //for English message

goog.require('Blockly.Msg');

/**
* BrainVoyager document comments
*/

Blockly.Msg.BV_CLOSE = 'Close an open BV document.';
Blockly.Msg.BV_SAVE = 'Save the document to disk';
Blockly.Msg.BV_OPENDOCUMENT = 'Open a BrainVoyager project. Parameter 1: Name of the FMR/AMR/VMR/DMR project to open.';
Blockly.Msg.BV_ACTIVEDOCUMENT = 'Get the current active BrainVoyager document';
Blockly.Msg.BV_CREATEPROJECTFMR = 'FMR projects consist of a set of functional data in the original “slice space”. \
Parameter 1: FileType (string): file type of original data. One of "DICOM", "SIEMENS", "GE_I" (no \
parameters for +20 logic like in GUI),"GE_MR", "PHILIPS_REC" or "ANALYZE". \
Parameter 2: FirstFileName: name of the first “raw” data file. \
Parameter 3: NrOfVolumes: number of volumes for this project. \
Parameter 4: nrOfVolumesToSkip: number of volumes that should be skipped at the beginning, so number \
of volumes in FMR project will be (NrOfVolumes - nrOfVolumesToSkip). \
Parameter 5: createAMR: boolean (true or false): create AMR from first EPI volume or not. \
Parameter 6: nrOfSlices: number of slices per volume. \
Parameter 7: prefixSTCs: name for the stc file. \
Parameter 8: swapBytes: swap bytes (true or false). \
Parameter 9: resX - dimension of image along x-axis \
Parameter 10: resY - dimension of image along y-axis \
Parameter 11: nrBytes - number of bytes per pixel, usually 2. \
Parameter 12: savingDir - directory for saving the FMR project. \
Returns: an fmr document.';
Blockly.Msg.BV_CREATEPROJECTMOSAICFMR = 'FMR projects consist of a set of functional data in the original “slice space”. \
	The “Mosaic” version of FMR creation is necessary when reading Siemens files from scanning \
sequences which store several slices within a single image. The format of such “mosaic-images” is \
not a stack of slices (i.e. as in ANALYZE files), therefore special treatment is required. \
Parameter 1: FileType (string): file type of original data. One of "DICOM", "SIEMENS", "GE_I" (no \
parameters for +20 logic like in GUI),"GE_MR", "PHILIPS_REC" or "ANALYZE". \
Parameter 2: FirstFileName: name of the first “raw” data file. \
Parameter 3: NrOfVolumes: number of volumes for this project. \
Parameter 4: nrOfVolumesToSkip: number of volumes that should be skipped at the beginning, so number \
of volumes in FMR project will be (NrOfVolumes - nrOfVolumesToSkip). \
Parameter 5: createAMR: boolean (true or false): create AMR from first EPI volume or not. \
Parameter 6: nrOfSlices: number of slices per volume. \
Parameter 7: prefixSTCs: name for the stc file. \
Parameter 8: swapBytes: swap bytes (true or false). \
Parameter 9: mosaicResX - mosaic size: dimension of images in volume along x-axis \
Parameter 10: mosaicResY - mosaic size: dimension of images in volume along x-axis \
Parameter 11: nrBytes - number of bytes per pixel, usually 2. \
Parameter 12: savingDir - directory for saving the FMR project. \
Parameter 13: volsInImg - number of volumes per file \
Parameter 14: resX - dimension of image along x-axis \
Parameter 15: resY - dimension of image along y-axis \
Returns: an fmr document.';
Blockly.Msg.BV_CREATEPROJECTFMRSLICESTIMELOOPING = 'FMR projects consist of a set of functional data in the original “slice space”. \
	The current function is similar to using the “Slices x time” checkbox via the BrainVoyager Create Project dialog. \
Parameter 1: FileType (string): file type of original data. One of "DICOM", "SIEMENS", "GE_I" (no \
parameters for +20 logic like in GUI),"GE_MR", "PHILIPS_REC" or "ANALYZE". \
Parameter 2: FirstFileName: name of the first “raw” data file. \
Parameter 3: NrOfVolumes: number of volumes for this project. \
Parameter 4: nrOfVolumesToSkip: number of volumes that should be skipped at the beginning, so number \
of volumes in FMR project will be (NrOfVolumes - nrOfVolumesToSkip). \
Parameter 5: createAMR: boolean (true or false): create AMR from first EPI volume or not. \
Parameter 6: nrOfSlices: number of slices per volume. \
Parameter 7: prefixSTCs: name for the stc file. \
Parameter 8: swapBytes: swap bytes (true or false). \
Parameter 9: resX - dimension of image along x-axis \
Parameter 10: resY - dimension of image along y-axis \
Parameter 11: nrBytes - number of bytes per pixel, usually 2. \
Parameter 12: savingDir - directory for saving the FMR project. \
Returns: an fmr document.';
Blockly.Msg.BV_CREATEPROJECTVMR = 'Creates an anatomical project in 8-bit (*.vmr) and 16-bit (*.v16).\n \
Parameter 1: Filetype (string): file type of original data. One of "DICOM", "SIEMENS", "GE_I" (no \n \
parameters for +20 logic like in GUI),"GE_MR", "PHILIPS_REC" or "ANALYZE".\n \
Parameter 2: firstFile (string): the filename and path of the first file of the data.\n \
Parameter 3: nrOfSlices (integer): the number of slices in a volume.\n \
Parameter 4: isLittleEndian (boolean): Is ’true’ when the byte order is little endian; otherwise ’false’.\n \
Parameter 5: xSize (integer): Size of image along x-axis. Example value: 256.\n \
Parameter 6: ySize (integer): Size of image along y-axis. Example value: 256.\n \
Parameter 7: nrOfBytes (integer): Number of bytes for each pixel. 1 byte is 8 bits. Most often used value: 2 bytes.\n \
Returns: Document';
Blockly.Msg.BV_CREATEPROJECTAMR = 'Creates an AMR project file. AMR projects consist of a set of two-dimensional anatomical \
scans used to overlay statistical maps in the original “slice space”. If successful, an AMR document \
is returned. Use this object to access document methods. The name of the first file must contain the \
full path information. You may want to check proper reading of your data using the New Project \
Wizard or Create Project dialog before using this command in your scripts.\n \
Parameter 1: Filetype (string): \
file type of original data. One of "DICOM", "SIEMENS", "GE_I" (no parameters for +20 logic like in \
GUI),"GE_MR", "PHILIPS_REC" or "ANALYZE".\n \
Parameter 2: firstFile (string): the filename and path of the first file of the data.\n \
Parameter 3: nrOfSlices (integer): the number of slices in a volume.\n \
Parameter 4: isLittleEndian (boolean): Is ’true’ when the byte order is little endian; otherwise ’false’. Is \
usually ’true’. \
Parameter 5: xSize (integer): Size of image along x-axis. Example value: 256.\n \
Parameter 6: ySize (integer): Size of image along y-axis. Example value: 256.\n \
Parameter 7: nrOfBytes (integer): Number of bytes for each pixel. 1 byte is 8 bits. Example value: 2.\n \
Returns: Document';
Blockly.Msg.BV_CURRENTDIRECTORY = 'Get the current directory of BrainVoyager';
Blockly.Msg.BV_PATHTOSAMPLEDATA = 'Default path to sample data';
Blockly.Msg.BV_PATHTODATA = 'This property points as default to the “BVQXData” folder in the user’s “(My )Documents” folder';
Blockly.Msg.BV_VERSIONMAJOR = 'Get version number of BrainVoyager';
Blockly.Msg.BV_VERSIONMINOR = 'Get subversion number of BrainVoyager';
Blockly.Msg.BV_BUILDNUMBER = 'Get build number of BrainVoyager';
Blockly.Msg.BV_IS64BITS = 'If BrainVoyager version is 64 bits, value is true; otherwise the version is 32 bits.';
Blockly.Msg.BV_GETX = 'Get the position on the x-axis of the BrainVoyager window';
Blockly.Msg.BV_GETY = 'Get the position on the y-axis of the BrainVoyager window';
Blockly.Msg.BV_SETX = 'Set the position on the x-axis of the BrainVoyager window';
Blockly.Msg.BV_SETY = 'Set the position on the y-axis of the BrainVoyager window';
Blockly.Msg.BV_RENAMEDICOMFILESINDIRECTORY = 'Rename all DICOM files in the specified directory. If no directory is specified, the current directory is used.';
Blockly.Msg.BV_PRINTTOLOG = 'Print text to the BrainVoyager QX Log tab';
Blockly.Msg.BV_MOVEWINDOW = 'Move the BrainVoyager window to a new position on the screen';
Blockly.Msg.BV_BROWSEFILE = 'Get the name of a file on the filesystem via a file dialog.\n \
Parameter 1: Instruction for the type of file.\n\
Parameter 2: Filter (string), either a wildcard for all file types (“*.*”) or specific file type (for example “*.vmr”).\
 For selecting one of several file formats, enter the file formats in the filter separated by a semicolon.';
Blockly.Msg.BV_BROWSEDIRECTORY = 'Get the name of a directory on the filesystem via a dialog;\
 the directory name will not contain a file separation character “/” at the end of the string\
 (for example “/Disk/maindir/subdir”)';
Blockly.Msg.BV_OPEN_WRITE = 'Open a file for writing only';
Blockly.Msg.BV_WRITETOFILE = 'Write a string/number to a file.';
Blockly.Msg.BV_OPEN_READ = 'Open a file for reading only';
Blockly.Msg.BV_OPENFILE = 'Open a file and allow to read, write or append to the file.';
Blockly.Msg.BV_IO_READLINEFROMFILE = 'Read a single line in a text file. Text file should be open for reading before with the OpenFile block. \
The function should be called multiple line to read all lines.\n\
Output is a string containing the line.'; 
Blockly.Msg.BV_IO_PARSEINT = 'The parseInt() function parses a string and returns an integer.';
Blockly.Msg.BV_CLOSEFILE = 'Close an open file.';
Blockly.Msg.BV_CLOSEDOC = 'Close an open BV document.';
/**
 * FMR comments
 */
Blockly.Msg.BV_LINKAMR = 'Link the provided AMR to the currently opened FMR. \
Parameter 1: Name of the AMR file.';
Blockly.Msg.BV_FMR_TR = 'TR: Repetition time in milliseconds';
Blockly.Msg.BV_FMR_INTERSLICETIME = 'Time in milliseconds between acquisition of two adjacent slices. Example value: 80.';
Blockly.Msg.BV_FMR_PIXELSIZEOFSLICEDIMX = 'Size of a pixel in millimeters in x-dimension. Example value: 3.5.';
Blockly.Msg.BV_FMR_PIXELSIZEOFSLICEDIMY = 'Size of a pixel in millimeters in y-dimension. Example value: 3.5.';
Blockly.Msg.BV_FMR_SLICETHICKNESS = 'Thickness of a slice in millimeters. For example: 3.';
Blockly.Msg.BV_FMR_GAPTHICKNESS = 'Space between slices, measured in millimeters. Example value: 0.99.';
Blockly.Msg.BV_FMR_TIMERESOLUTIONVERIFIED = 'Property to assert that the time resolution is correct. Values either true or false.';
Blockly.Msg.BV_FMR_VOXELRESOLUTIONVERIFIED = 'Property ensuring that the voxel resolution of the FMR project has been set properly. \
Value is either true or false (boolean).';
Blockly.Msg.BV_FMR_HASSLICETIMETABLE = 'Indicates whether the data contain a time table for multiband data (MB-EPI). Use \
with CorrectSliceTimingUsingTimeTable().';
Blockly.Msg.BV_INTERSLICETIMEFMR = 'Time in milliseconds between acquisition of two adjacent slices. Example value: 80.';
Blockly.Msg.BV_CORRECTSLICETIMING = 'Correct slice timing. 	Scan order: 0: Ascending, 1: Ascending-interleaved,\
 2: Ascending-interleaved 2 (Siemens only), 10: Descending, 11: Descending-interleaved, 12: Descending-interleaved \
2. Interpolation method: 0: trilinear, 1: cubic spline, 2: windowed SINC.';
Blockly.Msg.BV_CORRECTSLICETIMINGWITHSLICEORDER = 'In case default options for the scan order parameter do\
 not apply, you can also use a free slice order (as a string param) to specify slice time correction\
 (new in BVQX 2.3).\n\
Parameter 1: Scan order with slice numbers specified in a text string.\n\
Parameter 2: Interpolation method: 0: trilinear, 1: cubic spline, 2: windowed SINC. \
For ascending interleaved slice order, this results in the following filenames: trilinear: *_SCLAI.fmr;\
 cubic spline: *_SCCAI.fmr, windowed SINC: *_SCSAI.fmr';
Blockly.Msg.BV_CORRECTSLICETIMINGUSINGTIMETABLE = 'The slice-scan time correction for multi-band sequences that acquire 2 or more slices in a \
single shot. For Siemens Mosaic data files, slice timing information is now directly extracted from the \
DICOM header; since this information (time of acquistion for each slice with respect to the begin of \
a volume) can be used to correct slice timing differences for all 2D EPI sequences (e.g. with ascending, \
descending, interleaved slice order with or without multi-band with or without extra (silent) gaps between TRs),\
 a new “slice time table” option is now used as default if the respective data is available. \
In order to be available for preprocessing, the extracted slice timing data (one value per slice) \
is permanently stored in created .FMR files. The availability of time table can be interrogated using \
the "HasSliceTimeTable" property)(function and property new in BVQX 2.8.2).';
Blockly.Msg.BV_CORRECTMOTION = 'Detects and corrects rigid-body motion within an FMR file. The target volume provided \
by the user serves as the reference to which all other volumes are aligned. This version uses the default \
settings as shown in the GUI version (FMR Data Preprocessing): trilinear interpolation to perform \
the rigid-body translation/rotation, a reduced data set (every second voxel in each dimension = one \
eighth of a full volume = 12.5%), a maximum of 100 iterations to fit a volume to the reference, creation \
of pre- and post movie files and a standard log file. The new file name is based on the name \
of the FMR file prior to starting the filter and adds an abbreviation describing the preprocessing performed. \
If, for example, the name of the FMR file was “cg objects SCCAI.fmr”, the new name will be \
“cg objects SCCAI 3DMC.fmr”. The added infix “ 3DMC” describes that motion correction (MC) has \
been performed in 3D (3DMC), i.e. fitting 3 translation and 3 rotation parameters. All 3D preprocessing \
steps add such descriptive naming abbreviations which makes it easy to get the information about the \
sequence of steps which has been performed to produce a particular FMR file. \
Parameter 1: Target volume. \
Returns: True or false (boolean).';
Blockly.Msg.BV_CORRECTMOTIONEX = 'Detects and corrects rigid-body motion within an FMR file. The target volume provided \
by the user serves as the reference to which all other volumes are aligned. In this version, the default \
settings (described in CorrectMotion()) can be modified.';
Blockly.Msg.BV_CORRECTMOTIONTARGETVOLUMEINOTHERRUN = 'Detects and corrects rigid-body motion within several runs. This intra-session alignment \
method makes it possible to align all volumes of all runs in a session to the same targetvolume. This \
version uses the default settings as shown in the GUI version (FMR Data Preprocessing): trilinear interpolation \
to perform the rigid-body translation/rotation, a reduced data set (every second voxel in \
each dimension = one eighth of a full volume = 12.5%), a maximum of 100 iterations to fit a volume \
to the reference, creation of pre- and post movie files and a standard and extended log file.';
Blockly.Msg.BV_CORRECTMOTIONTARGETVOLUMEINOTHERRUNEX = 'Detects and corrects rigid-body motion within several runs. This intra-session alignment \
method makes it possible to align all volumes of all runs in a session to the same targetvolume. This \
version allows to change the default settings. Parameter 1: Target FMR name: name of the run to which the current FMR project should be aligned. \
Parameter 2: Target volume: number of the volume to which other volumes should be aligned. \
Parameter 3: Interpolation method: 0 and 1: trilinear detection and trilinear interpolation, 2: trilinear \
detection and sinc interpolation or 3: sinc detection of motion and sinc interpolation. \
Parameter 4: Use full data set: true if yes, false if one would like to use the reduced dataset (default in \
GUI). \
Parameter 5: Maximum number of iterations: defines for how many iterations the parameters should be \
fitted. Value in GUI is default ‘100’. \
Parameter 6: Generate movies: true if yes, false if no. This feature has been disabled for some time. \
Parameter 7: Generate extended log file: true if one would like the motion estimation parameters in a \
text file, false otherwise. \
Returns: True or false (boolean).';
Blockly.Msg.BV_TEMPORALHIGHPASSFILTERGLMFOURIER = 'Parameter 1: A parameter that specifies the number of cycles (pairs of two basis functions) used to build \
an appropriate design matrix.';
Blockly.Msg.BV_TEMPORALHIGHPASSFILTERGLMDCT = 'Parameter 1: A parameter that specifies the number of cycles (pairs of two basis functions) used to build \
an appropriate design matrix.';
Blockly.Msg.BV_TEMPORALHIGHPASSFILTERFMR = 'Apply a high-pass filter to the functional data (‘classical approach’, FFT). \
	Parameter 1: Cut-off value. \
	Parameter 2: Units: "cycles" or "Hz" (string). \
	Note: Includes linear trend removal.';
Blockly.Msg.BV_LINEARTRENDREMOVALFMR = 'Apply a linear high-pass filter to the functional data. \
Note: Is not necessary when using TemporalHighPassFilter().';
Blockly.Msg.BV_TEMPORALGAUSSIANSMOOTHINGFMR = 'Since temporal gaussian smoothing blurs timing \
information across neighboring data points, it is not recommended as default. Temporal smoothing \
improves, however, the signal-to-noise ratio by removing high frequency fluctuations. The width of \
the kernel can now be specified in seconds. Note that the specification in seconds is only correct if the \
TR value has been specified correctly. Example value for kernel width: “2.8” seconds. If you want to \
specify the width of the kernel in units of data points (TR’s), set the data points parameter instead of \
the secs parameter. \
Parameter 1: Width of kernel. \
Parameter 2: Units: "s" or "TR" (string).';
Blockly.Msg.BV_SPATIALGAUSSIANSMOOTHINGFMR = 'Apply a spatial low-pass filter to the functional data. \
Parameter 1: Width of kernel (FWHM). \
Parameter 2: Units: "mm" or "px" (string).';
Blockly.Msg.BV_ADJUSTMEANINTENSITY = 'Volume-based adjustment of mean intensity (MIA). During \
operation, the program plots two curves, one showing the measured mean intensity of volumes \
over time and the other showing the mean level of each volume after correction (a straight line). Furthermore, \
a zero-mean predictor of the global fluctuations is automatically stored to disk allowing to \
add it as a confound predictor in the design matrix. If the MIA preprocessed FMR is used for further \
processing (e.g., VTC creation), adding of the MIA confound predictor is not necessary. If one wants \
to perform the correction as part of the GLM, however, one should use the non-MIA FMR for further \
processing adding the MIA confound predictor to the design matrix.';
Blockly.Msg.BV_TEMPORALHIGHPASSFILTERVTC = 'Removes low-frequency noise in VTC file, for example physiological noise. \
	Parameter 1: High-pass filter value. \
	Parameter 2: Units: "cycles" or "Hz" (string). ';
Blockly.Msg.BV_LINEARTRENDREMOVALVTC = 'Removes temporal linear trends in VTC file.';
Blockly.Msg.BV_TEMPORALGAUSSIANSMOOTHINGVTC = 'Removes high-frequency noise in VTC file, like sharp peaks in the timecourse. \
	Parameter 1: FWHM value (number) \
Parameter 2: FWHM unit: “d” or “dps” (data points) or “s” or “secs” (seconds)';
Blockly.Msg.BV_SPATIALGAUSSIANSMOOTHINGVTC = 'Spatial low-pass filter for VTC file; removes spatial high-frequency elements in VTC file, \
like sharp edges. \
Parameter 1: FWHM value (number). \
Parameter 2: FWHM unit: “mm” or “vx”.';
Blockly.Msg.BV_FMR_FILENAMEOFPREPROCESSEDFMR = 'New name of fmr file after some processing';

/**
 * Mesh comments
 */
Blockly.Msg.BV_MESH_TEMPORALHIGHPASSFILTERFFT = 'Apply a high-pass filter to the functional data (‘classical approach’, FFT). \
Parameter 1: Cut-off value.';
Blockly.Msg.BV_MESH_LINEARTRENDREMOVAL = 'Apply a linear high-pass filter to the functional data.';
Blockly.Msg.BV_MESH_TEMPORALGAUSSIANSMOOTHING = 'Since temporal gaussian smoothing blurs timing information across neighboring data points, \
it is not recommended as default. Temporal smoothing improves, however, the signal-to-noise ratio by \
removing high frequency fluctuations. The width of the kernel can now be specified in seconds. Note \
that the specification in seconds is only correct if the TR value has been specified correctly. Example \
value for kernel width: “2.8” seconds. If you want to specify the width of the kernel in units of data \
points (TR’s), set the data points parameter instead of the secs parameter. \
Parameter 1: Width of kernel. \
Parameter 2: Units: "Seconds" ';
Blockly.Msg.BV_MESH_SPATIALSMOOTHING = 'Spatial low-pass filter for MTC file; removes spatial high-frequency elements in MTC file, \
like sharp edges. \
Parameter 1: FWHM value (number)';
/**
 * VMR properties
 */
Blockly.Msg.BV_VMR_EXTENDEDTALSPACEFORVTCCREATION = 'Necessary to set explicitly before creating a VTC  in any space. When\
this property is true, it will create a VTC where the Talairach bounding box includes the cerebellum.';
Blockly.Msg.BV_VMR_USEBOUNDINGBOXFORVTCCREATION = 'True if one would like to create a bounding box of a different size than \
the default, using the offset into the VMR. Set this property to true of false before starting to create any \
VTC. (Since 2.6: this property is default set to false, so it does not need to be set before creation of any \
VTC.)';
Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXXSTART = 'Start of the bounding box in VMR on x-axis.';
Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXYSTART = 'Start of the bounding box in VMR on y-axis.';
Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXZSTART = 'Start of the bounding box in VMR on z-axis.';
Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXXEND = 'End of the bounding box in VMR on x-axis.';
Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXYEND = 'End of the bounding box in VMR on y-axis.';
Blockly.Msg.BV_VMR_TARGETVTCBOUNDINGBOXZEND = 'End of the bounding box in VMR on z-axis.';
Blockly.Msg.BV_VMR_VMRVOXELRESOLUTIONX = 'Size of a pixel along x-dimension.';
Blockly.Msg.BV_VMR_VMRVOXELRESOLUTIONY = 'Size of a pixel along y-dimension.';
Blockly.Msg.BV_VMR_VMRVOXELRESOLUTIONZ = 'Size of a pixel along z-dimension.';
Blockly.Msg.BV_VMR_FILENAMEOFCURRENTVTC = 'Retrieve file name of attached functional (VTC) file.';
Blockly.Msg.BV_VMR_MESHSCENE = 'Obtain mesh scene object.';
Blockly.Msg.BV_VMR_LINKVTC = 'Link the provided VTC file to the VMR.\
Parameter: Name of the normalized functional data file (*.vtc).';
Blockly.Msg.BV_VMR_LINKSTIMULATIONPROTOCOL = 'Valid only if the document is a) of type FMR or b) of type VMR and if a VTC file has been \
linked. In the latter case, the specified stimulation protocol is linked to the VTC file. To establish a \
permanent link, save the project or the VTC file. \
Parameter: Name of the stimulation protocol file.';
Blockly.Msg.BV_VMR_AUTOTRANSFORMTOISOVOXEL = 'Transforms a non-isovoxel VMR file to isovoxel (same voxel \
sizes in x-dimension, y-dimension and z-dimension, in this case 1x1x1mm). The result is saved to disk \
with the new name. \n \
Parameter 1: Interpolation method (integer): 1 - trilinear, 2 - cubic spline (recommended), 3 - sinc \n \
Parameter 2: New VMR name (string): name for transformed VMR. \n \
Returns: boolean: success.';
Blockly.Msg.BV_VMR_AUTOTRANSFORMTOSAG = 'Transforms an isovoxel VMR file to sagittal orientation. The result is saved to disk with \
the new name. Note: does not work if the voxel sizes of the VMR are not equal, therefore isovoxelation \
might need to be applied on beforehand. \n \
Parameter 1: newname (string): name for transformed VMR. \n \
Returns: boolean';
Blockly.Msg.BV_VMR_SETVOXELINTENSITY = 'Give the voxel at position (x,y,z) a new intensity value. This values between 0 and 225 are \
gray scale; the values between 225 and 255 are color values. \n \
Parameter 1: x: position of voxel on x-axis. \n \
Parameter 2: y: position of voxel on y-axis. \n \
Parameter 3: z: position of voxel on z-axis. \n \
Parameter 4: intensity: new intensity value.';
Blockly.Msg.BV_VMR_GETVOXELINTENSITY = 'Obtain the intensity value at position (x,y,z). \
The values between 0 and 225 are \
gray scale; the values between 225 and 255 are color values. \n \
Parameter 1: x: position of voxel on x-axis. \n \
Parameter 2: y: position of voxel on y-axis. \n \
Parameter 3: z: position of voxel on z-axis. \n \
Returns: Intensity value: integer between 0 and 255.';
Blockly.Msg.BV_VMR_CORRECTINTENSITYINHOMOGENEITIES = 'Perform non-uniformity correction with default parameters. This will save a corrected, \
brain-peeled anatomical image with *_IIHC in the name to disk.';
Blockly.Msg.BV_VMR_AUTOACPCANDTALTRANSFORMATION = 'Transform the VMR object to AC-PC (*_aACPC.vmr) and Talairach space. The resulting \
files ((*_aACPC.vmr, *_TAL.vmr, *_aACPC.tal) will be saved to disk. The input *.vmr needs to be \
1 x 1 x 1 mm(if necessary, AutoTransformToIsoVoxel() can be applied first).';
Blockly.Msg.BV_VMR_CREATEVTCINVMRSPACE = 'Transforms the time course data of an FMR project into a defined 3D space, in this case \
native space. The result of this transformation is a VTC file. Please note that the VMR properties ‘Use- \
BoundingBoxForVTCCreation’ and ‘ExtendedTALSpaceForVTCCreation’ should be set to true or false \
(this applies to all spaces) before starting to create a VTC. (Since 2.6: the ‘UseBoundingBoxForVTCCreation’ \
property is default set to false, so it does not need to be set before creation of any VTC.) \n \
Parameter 1: Name FMR: Name of the functional data file (*.fmr) which should be transformed to the \
space of the VMR. \n \
Parameter 2: Name IA file: Name of the initial alignment transformation file (*_IA.trf). \n \
Parameter 3: Name FA file: Name of the fine alignment transformation file (*_FA.trf). \n \
Parameter 4: Name VTC: Name for the new VTC file. \n \
Parameter 5: Datatype: Create the VTC in integer 2-byte format: 1 or in float format: 2. \n \
Parameter 6: Resolution: Target resolution, either ‘1’ (1x1x1mm), ‘2’ or ‘3’. \n \
Parameter 7: Interpolation: ‘0’ for nearest neighbor interpolation, ‘1’ for trilinear interpolation, ‘2’ for \
sinc interpolation.\n \
Parameter 8: Threshold: intensity threshold for bounding box (is not relevant for Talairach space, but\
should be provided). Default value: ‘100’.\n\
Returns: True (success) or false.';
Blockly.Msg.BV_VMR_CREATEVTCINACPCSPACE = 'Create a volume-time-course (VTC) file in AC-PC space. Please note that the VMR properties\
‘UseBoundingBoxForVTCCreation’ and ‘ExtendedTALSpaceForVTCCreation’ should be set to true\
or false (this applies to all spaces) before starting to create a VTC. (Since 2.6: the ‘UseBoundingBox-\
ForVTCCreation’ property is default set to false, so it does not need to be set before creation of any\
VTC.)\n\
Parameter 1: Name FMR: Name of the functional data file (*.fmr) which should be transformed to ACPC\
space.\n\
Parameter 2: Name IA file: Name of the initial alignment transformation file (*_IA.trf).\n\
Parameter 3: Name FA file: Name of the fine alignment transformation file (*_FA.trf).\n\
Parameter 4: Name ACPC file: Name of the transformation file of theVMRto AC-PC space (*_ACPC.trf).\n\
Parameter 5: Name VTC: Name for the new VTC file.\n\
Parameter 6: Datatype: Create the VTC in integer 2-byte format: 1 or in float format: 2.\n\
Parameter 7: Resolution: Target resolution, either ‘1’ (1x1x1mm), ‘2’ or ‘3’.\n\
Parameter 8: Interpolation: ‘0’ for nearest neighbor interpolation, ‘1’ for trilinear interpolation, ‘2’ for\
sinc interpolation.\n\
Parameter 9: Threshold: intensity threshold for bounding box (is not relevant for Talairach space, but\
should be provided). Default value: ‘100’.\n\
Returns: True (success) or false.';
Blockly.Msg.BV_VMR_CREATEVTCINTALSPACE = 'Valid only if the opened document is of type VMR. FMR projects contain functional data\
in the originally recorded slices without any knowledge about where these slices are located with respect\
to a 3D reference frame, i.e. Talairach space. Transforming the functional data in Talairach space\
allows to analyze data from the same subject across different scanner sessions as well as to analyze data\
coming from different subjects. The resulting 4D VTC file consists of a series of 3D volumes aligned in\
stereotactic space. The file is saved to disk under the name for the new VTC file. The first parameter, the\
name of the FMR, specifies the FMR project whose functional data should be transformed in 3D space\
(the functional data actually resides in STC files which are referenced by the FMR project). The spatial\
transformation into Talairach space is controlled by three files which must exist prior to calling this\
method. The initial and fine alignment files are responsible to align the stack of 2D slices at the correct\
position of a 3D VMR data set which is typically recorded in the same session as the functional data. If\
the functional data has been registered with a 3D VMR data set, the further alignment information can\
be obtained from anatomical transformations. The 3D data set to which the functional data has been\
aligned can be rotated into the AC-PC plane (see the BrainVoyager User’s Guide). A transformation file\
(*.trf) is produced which transforms the source 3D data set into the AC-PC plane. Since the functional\
data should undergo exactly the same transformation, you must enter the obtained file as the name of\
the ACPC file for the present method. The AC-PC plane space is not Talairach space. The final step is\
to apply a non-linear scaling operation to bring the data in stereotactic space. This is done for the 3D\
VMR data set in AC-PC space and results in a TAL file. In order to apply the same transformatio to the\
functional data, enter the obtained file as the name of the TAL file.\n\
Please note that theVMRproperties ‘UseBoundingBoxForVTCCreation’ and ‘ExtendedTALSpaceForVTCCreation’\
should be set to true or false (this applies to all spaces) before starting to create a VTC. (Since\
BrainVoyager QX 2.6: ‘UseBoundingBoxForVTCCreation’ is default set to false, so does not need to be\
set before each VTC any more.) Parameter 1: Name FMR: Name of the functional data file (*.fmr) which\
should be transformed to Talairach space.\n\
Parameter 2: Name IA file: Name of the initial alignment transformation file (*_IA.trf).\n\
Parameter 3: Name FA file: Name of the fine alignment transformation file (*_FA.trf).\n\
Parameter 4: Name ACPC file: Name of the transformation file of theVMRto AC-PC space (*_ACPC.trf).\n\
Parameter 5: Name TAL file: Name of the file containing 12 landmarks used to transform the VMR to\
Talairach space (*.tal).\n\
Parameter 6: Name VTC: Name for the new VTC file.\n\
Parameter 7: Datatype: Create the VTC in integer 2-byte format: 1 or in float format: 2.\n\
Parameter 8: Resolution: Target resolution, either ‘1’ (1x1x1mm), ‘2’ or ‘3’.\n\
Parameter 9: Interpolation: ‘0’ for nearest neighbor interpolation, ‘1’ for trilinear interpolation, ‘2’ for\
sinc interpolation.\
Parameter 10: Threshold: intensity threshold for bounding box (is not relevant for Talairach space, but\
should be provided). Default value: ‘100’.\n\
Returns: True (success) or false.\n\
Note: Before using this function, please set explicitly the parameter\
ExtendedTALSpaceForVTCCreation, for example:\n\
docVMR.ExtendedTALSpaceForVTCCreation = false;. This is necessary to prevent an arbitrary\
size of the Talairach bounding box, with or without cerebellum.';
Blockly.Msg.BV_VMR_CORRECTFORSERIALCORRELATIONS = 'Integer. If set to ”1”, AR(1) is used, if set to ”2”, AR(2) is used.';
Blockly.Msg.BV_VMR_SEPARATIONOFSUBJECTPREDICTORS = 'Boolean (true or false). Create one beta value for condition in each subject\
(concatenated runs).';
Blockly.Msg.BV_VMR_SEPARATIONOFSTUDYPREDICTORS = 'Boolean (true or false). Create one beta value for condition in each run.';
Blockly.Msg.BV_VMR_ZTRANSFORMSTUDIES = 'Boolean (true or false). Use z-transform for data.';
Blockly.Msg.BV_VMR_PSCTRANSFORMSTUDIES = 'Boolean (true or false). Use percent-signal-change (PSC) transformation for data.';
Blockly.Msg.BV_VMR_ZTRANSFORMSTUDIESBASELINEONLY = 'Boolean (true or false).';
Blockly.Msg.BV_VMR_LOADSINGLESTUDYGLMDESIGNMATRIX = 'Load a design matrix file (*.rtc, *.sdm).\n\
Parameter 1: Name of the design matrix file (string).';
Blockly.Msg.BV_VMR_LOADMULTISTUDYGLMDEFINITIONFILE = 'Load a design matrix file (*.rtc, *.sdm).\n\
Parameter 1: Name of the design matrix file (string).';
Blockly.Msg.BV_VMR_COMPUTESINGLESTUDYGLM = 'Compute a fixed-effects general linear model for a single run.';
Blockly.Msg.BV_VMR_COMPUTEMULTISTUDYGLM = 'Compute a fixed-effects general linear model for a group of studies.';
Blockly.Msg.BV_VMR_COMPUTERFXGLM = 'Compute a random-effects general linear model.';
Blockly.Msg.BV_VMR_SHOWGLM = 'Show the GLM that just has been computed.';
Blockly.Msg.BV_VMR_LOADGLM = 'Load a general linear model file (*.glm) from harddisk. \n\
Parameter 1: Name of the *.glm file.';
Blockly.Msg.BV_VMR_SAVEGLM = 'Save the GLM that just has been computed. \n\
Parameter 1: Name for the GLM (with *.glm extension).';
Blockly.Msg.BV_VMR_CLEARCONTRASTS = 'Remove any current contrasts.';
Blockly.Msg.BV_VMR_ADDCONTRAST = 'Add a contrast.\n\
Parameter 1: Name for the contrast, for example "LVF > RVF".';
Blockly.Msg.BV_VMR_SETCONTRASTSTRING = 'Set the contrast by entering a sequence of parameters (one\
number for each condition) in a string. Only works if AddContrast() has been invoked first.\n\
Parameter 1: parameters in string, for example: 1 -1 0 0 ';
Blockly.Msg.BV_VMR_SETCURRENTCONTRASTATINDEX = 'The effect of this function is to set the internal “contrast pointer” to one of the existing\
contrasts. To have an effect, the command has to be followed by “SetContrastValueAtIndex()” which\
set the value of the respective vector element of that contrast that is chosen by the “SetCurrentContrastAtIndex”\
command.\n\
Parameter 1: Index of predictor, starts counting at 1.';
Blockly.Msg.BV_VMR_SETCONTRASTVALUEATINDEX = 'Set the contrast by entering a parameter for one condition. \
Only works if AddContrast() has been invoked first.\n\
Parameter 1: Index of predictor, starts counting at 1. \n\
Parameter 2: Value for predictor, for example -1.';
Blockly.Msg.BV_VMR_SETCURRENTCONTRAST = 'The effect of this function is to set the internal “contrast pointer” to one of the existing contrasts.\
To have an effect, the command has to be followed by “setContrastValue()” which set the value\
of the respective vector element of that contrast that is chosen by the “SetCurrentContrast” command.\n\
Parameter 1: Name of the contrast.';
Blockly.Msg.BV_VMR_SETCONTRASTVALUE = 'Set a contrast value for a condition. \
Parameter 1: Name of the condition.\n\
Parameter 2: Value (integer), for example +1 or -1';

Blockly.Msg.BV_VMR_NROFVOIS = 'Returns the number of volumes-of-interest (VOI).';
Blockly.Msg.BV_VMR_NROFPREDICTORSINSINGLESTUDYDM = 'Returns the number of predictors in a linked single study design matrix\
(*.sdm/*.rtc).';
Blockly.Msg.BV_VMR_NROFTIMEPOINTSINSINGLESTUDYDM = 'Returns the number of time points (volumes) in a linked single study\
design matrix (*.sdm/*.rtc).';
Blockly.Msg.BV_VMR_NROFROICONTRASTS = 'Returns the number of VOI contrasts for the VOI';
Blockly.Msg.BV_VMR_LOADVOIFILE = 'Load *.voi file to an anatomical file (*.vmr).\n\
Parameter 1: Name of the *.voi file, including the path.';
Blockly.Msg.BV_VMR_HIDEALLVOIS = 'Do not display any activation from VOIs on anatomical data (*.vmr).';
Blockly.Msg.BV_VMR_SELECTVOI = 'Select the volume-of-interest (*.voi) that will be displayed on the anatomical data (*.vmr).\n\
Parameter 1: The number of the volume-of-interest. Note that the first index is 1';
Blockly.Msg.BV_VMR_GETNAMEOFVOI = 'Returns the name of the linked VOI.\n\
Parameter 1: Index of the VOI (start counting at 1).';
Blockly.Msg.BV_VMR_SHOWSELECTEDVOIS = 'All volumes-of-interest that have been selected via SelectVOI() are now being displayed\
on the anatomical data (*.vmr).';
Blockly.Msg.BV_VMR_PREPAREROICONTRASTS = 'Prepare contrasts for the regions-of-interest.\n\
Parameter 1: Number of predictors (obtain number of predictors via property, see\
NrOfPredictorsInSingleStudyDM)';
Blockly.Msg.BV_VMR_ADDROICONTRAST = 'Add a contrast for the region-of-interest.\n\
Parameter 1: Name for the contrast.\n\
Parameter 2: Values for the contrast.';
Blockly.Msg.BV_VMR_COMPUTESINGLESTUDYGLMFORVOI = 'Run a single study GLM for a region-of-interest. First load a single study design matrix file\
(*.sdm), functional data (*.vtc) and a regions-of-interest file (*.voi) (see example script below).\n\
Parameter 1: VOI index (number, first index is 1).\n\
Parameter 2: Time course normalization (number); 0 = none, 1 = percent signal change, 2 = z-transformation,\
3 = z-transformation in baseline periods.\n\
Parameter 3: Serial correlation correction (number); 0 = none, 1 = with AR(1) model, 2 = with AR(2)\
model.';
Blockly.Msg.BV_VMR_GETNAMEOFROICONTRAST = 'Get the name of a specific region-of-interest contrast.\n\
Parameter 1: Number of region-of-interest (ROI) contrast; first ROI has number 1.';
Blockly.Msg.BV_VMR_GETTVALUEOFROICONTRAST = 'VOI-GLM result, expressed as t-value.\n\
Parameter 1: Number of region-of-interest (ROI) contrast; first ROI has number 1.';
Blockly.Msg.BV_VMR_GETPVALUEOFROICONTRAST = 'VOI-GLM result, expressed as p-value.\n\
Parameter 1: Number of region-of-interest (ROI) contrast; first ROI has number 1.';
Blockly.Msg.BV_VMR_LOADMESH = 'Load a mesh into the current scene. This requires a *.vmr to be open. See also\
meshScene.LoadMesh().\n\
Parameter 1: Name of the polygon mesh (*.srf).';
Blockly.Msg.BV_VMR_ADDMESH = 'Add a mesh to the current scene. This requires a *.vmr to be open.\n\
Parameter 1: Name of the polygon mesh (*.srf).';
Blockly.Msg.BV_VMR_SAVEMESH = 'Save the current mesh. This is a method of the *.vmr object. Please note that\
from BrainVoyager QX 2.8 one can use the mesh.SaveAs() function.\n\
Parameter 1: Name for the polygon mesh (*.srf).';
Blockly.Msg.BV_VMR_UPDATESURFACEWINDOW = 'After changing the viewpoint settings or loading meshes, invoke\
this function to see the effect.';
Blockly.Msg.BV_VMR_SAVESNAPSHOTOFSURFACEWINDOW = 'Save a snapshot of the current OpenGL window.\n\
Parameter 1: Name for the snapshot.\n\
Note: The file type of the snapshot is determined the filetype selected in BrainVoyager->Preferences.';
Blockly.Msg.BV_VMR_LINKMTC = 'Link a mesh time series file to a surface file (*.srf). This is a function of the *.vmr object.\n\
Parameter 1: Name of the mesh time course file (*.mtc) including a path.';
Blockly.Msg.BV_VMR_CREATEMTCFROMVTC = 'Create a mesh time series to be displayed on a surface file (*.srf). This is a function of the\
*.vmr object. First open an anatomical file (*.vmr) and link functional normalised data (*.vtc) and a\
surface file (*.srf).\n\
Parameter 1: Sampling depth inside white matter, for example -1.0.\n\
Parameter 2: Sampling depth inside gray matter, for example 3.\n\
Parameter 3: New name for the mesh time course file, for example “mesh.mtc”.';
Blockly.Msg.BV_VMR_GETMESHSCENE = 'This function opens the surface module, so that MeshScene functions can be used. Since\
BrainVoyager 20.';
Blockly.Msg.BV_VMR_VIEWPOINTTRANSLATIONX = 'Set or Get the viewpoint translation in x';
Blockly.Msg.BV_VMR_VIEWPOINTTRANSLATIONY = 'Set or Get the viewpoint translation in y';
Blockly.Msg.BV_VMR_VIEWPOINTTRANSLATIONZ = 'Set or Get the viewpoint translation in z';
Blockly.Msg.BV_VMR_VIEWPOINTROTATIONX = 'Set or Get the viewpoint rotation in x';
Blockly.Msg.BV_VMR_VIEWPOINTROTATIONY = 'Set or Get the viewpoint rotation in y';
Blockly.Msg.BV_VMR_VIEWPOINTROTATIONZ = 'Set or Get the viewpoint rotation in z';
Blockly.Msg.BV_VMR_MESHSCENE = 'VMR property. Obtain mesh scene object from the VMR object.';
Blockly.Msg.BV_MESHSCENE_CURRENTMESH = 'meshScene property. Obtain mesh object from the mesh scene object.\
Since BrainVoyager 2.8.';
Blockly.Msg.BV_MESHSCENE_VIEWPOINTPOSITIONX = 'Set the x-coordinate for the camera. Since BrainVoyager 2.8. For background information\
on viewing transformations, see section “Viewing transformations” in the OpenGL guide (an older\
version is available online at:\
http://www.glprogramming.com/red/chapter03.htmlname2.';
Blockly.Msg.BV_MESHSCENE_VIEWPOINTPOSITIONY = 'Set the y-coordinate for the camera. Since BrainVoyager 2.8. For background information\
on viewing transformations, see section “Viewing transformations” in the OpenGL guide (an older\
version is available online at:\
http://www.glprogramming.com/red/chapter03.htmlname2.';
Blockly.Msg.BV_MESHSCENE_VIEWPOINTPOSITIONZ = 'Set the z-coordinate for the camera. Since BrainVoyager 2.8. For background information\
on viewing transformations, see section “Viewing transformations” in the OpenGL guide (an older\
version is available online at:\
http://www.glprogramming.com/red/chapter03.htmlname2.';
Blockly.Msg.BV_MESHSCENE_VIEWPOINTROTATIONX = 'Rotates the camera on the x-axis with provided number of degrees. Since BrainVoyager 2.8.';
Blockly.Msg.BV_MESHSCENE_VIEWPOINTROTATIONY = 'Rotates the camera on the x-axis with provided number of degrees. Since BrainVoyager 2.8.';
Blockly.Msg.BV_MESHSCENE_VIEWPOINTROTATIONZ = 'Rotates the camera on the x-axis with provided number of degrees. Since BrainVoyager 2.8.';
Blockly.Msg.BV_MESHSCENE_SPHERERESOLUTIONCBA = 'Get or set the resolution of the sphere for cortex-based alignment.\
1: standard resolution (default)\
2: low resolution\
3: high resolution';
Blockly.Msg.BV_MESH_FILENAME = 'Obtain the name of the surface file (*.srf).';
Blockly.Msg.BV_MESH_NROFVERTICES = 'Obtain the number of vertices of the surface file (*.srf).';
Blockly.Msg.BV_MESH_MORPHINGUPDATEINTERVAL = 'This sets or gives the number of steps after which the OpenGL window is updated during\
the morphing process. To be set before InflateMeshToSphere() and CorrectInflatedSphereMesh().\
A default value is 50.';
Blockly.Msg.BV_MESH_CORRECTFORSERIALCORRELATIONS = 'This sets the level of correction for serial correlations in the noise. For AR(1), set to 1, for\
AR(2), use 2 (this is the better option).';
Blockly.Msg.BV_MESH_UPDATESURFACEWINDOW = 'After any operation on a mesh, invoke this function\
to see the effect.';
Blockly.Msg.BV_MESH_SAVEAS = 'Save the current mesh.\n\
Parameter 1: Name for the polygon mesh (*.srf).;'
Blockly.Msg.BV_MESH_CALCULATECURVATURECBA = 'Calculate the curvature of a mesh. The mesh object should refer to a smoothed mesh\
(*_RECOSM.srf) or preferably a simplified mesh (* _D80k.srf). While not strictly necessary, it is\
recommended to compute and overlay a curvature map on the folded cortex mesh, since it allows to\
identify sulci and gyri when the mesh is morphed to a sphere in the succeeding step.\n\
Returns 1: A curvature map (*_CURVATURE.smp).';
Blockly.Msg.BV_MESH_SMOOTHCURRENTMAP = 'Smooths the curvature map (*_CURVATURE.smp).\n\
Parameter 1: Number of smoothing steps (for example 5).';
Blockly.Msg.BV_MESH_INFLATEMESHTOSPHERE = 'Inflates the simplified mesh (*_D80k.srf) to a sphere (*_SPHERE.srf). This will start\
an iterative morphing process that uses several forces with values that will be changed gradually over\
time. A smoothing force is used to remove the gyri and sulci from the mesh, while a to-sphere force\
attempts to push the mesh vertices outward towards points on a sphere.\
Apply CorrectInflatedSphereMesh() afterwards; then save the sphere using\
mesh.SaveAs() when the result is acceptable.\n\
Parameter 1: Number of inflation steps (for example 800).';
Blockly.Msg.BV_MESH_CORRECTINFLATEDSPHEREMESH = 'The distortion correction process uses a “push-relax” approach on the spherical mesh\
(*_SPHERE.srf), to correct for some parts, which are expanded - especially mid-lateral and midmedial\
parts - and other parts, which are squeezed - especially frontal and occipital regions.\n\
Parameter 1: Number of correction steps (3000 should be sufficient).';
Blockly.Msg.BV_MESH_MAPSPHEREMESHFROMSTANDARDSPHERE = 'Function of MeshScene object. After the mesh has been inflated to a sphere (*_SPHERE.srf),\
this function can be used to calculate a mapping to a standard sphere with 40962 vertices to reduce the\
number of vertices.\n\
Returns 1: A mapping between meshes file (*.ssm).';
Blockly.Msg.BV_MESH_SETSTANDARDSPHERETOFOLDEDMESH = 'Apply the mapping (*.ssm) obtained from mesh.MapSphereMeshFromStandardSphere().\
This results in a standard “folded sphere” (*_SPH.srf).\n\
Parameter 1: Name of folded mesh (*_RECOSM.srf). Returns: Name of “folded sphere” (*_SPH.srf).';
Blockly.Msg.BV_MESH_CREATEMULTISCALECURVATUREMAP = 'CreateMultiScaleCurvatureMap() \n' +
'Description: Since the standard sphere is now folded as the original sphere, the curvature can be calculated \n' +
'directly at each vertex. This can be performed with the current function. Since the alignment\n' +
'procedure uses a coarse-to-fine approach, several different curvature maps will be calculated with various \n' +
'levels of smoothing. The resulting SMP file will contain four sub-maps with the smoothing levels \n' +
'that are provided, for example 2, 7, 20 and 40. To be used in BrainVoyager QX 2.8 or higher. \n' +
'Parameter 1: Smoothing level 1 (should be most coarse, for example 0 or 2). \n' +
'Parameter 2: Smoothing level 2 (can be quite coarse, for example 7). \n' +
'Parameter 3: Smoothing level 3 (should be quite fine, for example 20). \n' +
'Parameter 4: Smoothing level 4 (should be most fine, for example 40). \n' +
'Returns: Name of curvature file (*_CURVATURE.smp).';
Blockly.Msg.BV_MESH_CREATESPHERICALCOORDINATESMAPFROMSMP = 'mesh.CreateSphericalCoordinatesMapFromSMP() \n' +
'Description: Create a spherical target curvature file for RunRigidCBA(). From BrainVoyager QX 2.8. \n' +
'Parameter 1: Name of target curvature file (*_SPH_CURVATURE.smp), any should be fine. \n' +
'Returns: Name of spherical target curvature file (we get an empty string if it did not work).';
Blockly.Msg.BV_MESH_SMOOTHMESH = 'mesh.SmoothMesh() \n' +
'Description: This is the standard function for smoothing a mesh (*_RECO.srf). As a result, the mesh \n' +
'will shrink. For a function without shrinking, use mesh.SmoothRecoMesh(). To be used in BrainVoyager \n' +
'QX 2.8 or higher. (See example script “MeshMorphing.js”.) \n' +
'Parameter 1: Number of smoothing iterations (for example 30). \n' +
'Parameter 2: Smoothing force (f.e. 0.07).';
Blockly.Msg.BV_MESH_SMOOTHRECOMESH = 'mesh.SmoothRecoMesh() \n' +
'Description: Special “high-frequency” smoothing removing jags of reconstructed voxel borders without \n' +
'shrinking the mesh (*_RECO.srf). For the standard version of the function, see mesh.SmoothMesh(). \n' +
'To be used in BrainVoyager QX 2.8 or higher. (See example script “MeshMorphing.js”.) \n' +
'Parameter 1: Number of smoothing iterations (for example 50). \n' +
'Parameter 2: Smoothing force (f.e. 0.07).';
Blockly.Msg.BV_MESH_CALCULATECURVATURE = 'mesh.CalculateCurvature() \n' +
'Description: After smoothing, calculate the curvature of the mesh via this function. (See example script \n' +
'“MeshMorphing.js”.) To be used in BrainVoyager QX 2.8 or higher.';
Blockly.Msg.BV_MESH_INFLATEMESH = 'mesh.InflateMesh() \n' +
'Description: Inflate the mesh (*_RECO.srf) after smoothing. To be used in BrainVoyager QX 2.8 or \n' +
'higher. (See example script “MeshMorphing.js”.) \n' +
'Parameter 1: Number of morphing iterations (for example 500). \n' +
'Parameter 2: Smoothing force (for example 0.8). \n' +
'Parameter 3: (“ ”). If “ ” used for 3rd param (area reference mesh), the current mesh at the moment the \n' +
'function is called is used to calculate the area of the reference mesh.';
Blockly.Msg.BV_MESH_CREATEMTCFROMVTC = 'mesh.CreateMTCFromVTC() \n' +
'Description: Project the functional data (*.vtc) on the surface mesh (*.srf). It is assumed that a *.vmr with \n' +
'a linked *.vtc as well as a mesh is available (e.g. loaded). To be used in BrainVoyager QX 2.8 or higher. \n' +
'See script “MeshMTCFromVTC.js”. \n' +
'Parameter 1: Sampling VTC along mesh vertex normals (0 = at vertex) from (for example -1.0). \n' +
'Parameter 2: Sampling VTC along mesh vertex normals (0 = at vertex) to (for example 2.0). \n' +
'Parameter 3: Name for the new *.mtc. \n' +
'Returns: Success or no success (boolean).';
Blockly.Msg.BV_MESH_LINKMTC = 'mesh.LinkMTC() \n' +
'Description: Load a mesh time course file (*.mtc). To be used in BrainVoyager QX 2.8 or higher. See \n' +
'script “MeshMTCSingleStudyGLM.js”. \n' +
'Parameter 1: Name of *.mtc file. \n' +
'Returns: Success or no success (boolean).';
Blockly.Msg.BV_MESH_SAVEMTC = 'mesh.SaveMTC() \n' +
'Description: Save the *.mtc after preprocessing. To be used in BrainVoyager QX 2.8 or higher. See script \n' +
'“MeshMTCPreprocessing.js”. Parameter 1: Name for *.mtc file.';
Blockly.Msg.BV_MESH_CLEARDESIGNMATRIX = 'mesh.ClearDesignMatrix() \n' +
'Description: Load a anatomical file (*.vmr), mesh (*.srf) and link functional data (*.mtc). Then it is time to \n' +
'remove any remaining design matrices via this function. To be used in BrainVoyager QX 2.8 or higher. \n' +
'See script “MeshMTCSingleStudyGLM.js”. ';
Blockly.Msg.BV_MESH_LOADSINGLESTUDYGLMDESIGNMATRIX = 'mesh.LoadSingleStudyGLMDesignMatrix() \n' +
'Description: Function to load a single-subject or run design matrix (*.sdm). To be used in BrainVoyager \n' +
'QX 2.8 or higher. \n' +
'Parameter 1: Name of design matrix file (*.sdm). \n' +
'Returns: Success or no success (boolean).';
Blockly.Msg.BV_MESH_COMPUTESINGLESTUDYGLM = 'mesh.ComputeSingleStudyGLM() \n' +
'Description: Load an anatomical file (*.vmr), a mesh (*.srf), obtain a mesh object, link functional data \n' +
'(*.mtc) and load a design matrix file (*.sdm), then this function can be used. To be used in BrainVoyager \n' +
'QX 2.8 or higher. See script “MeshMTCSingleStudyGLM.js”.';
Blockly.Msg.BV_MESH_SHOWGLM = 'mesh.ShowGLM() \n' +
'Description: After running a single study GLM, make the results visible by using this function. To be \n' +
'used in BrainVoyager QX 2.8 or higher.';
Blockly.Msg.BV_MESH_SAVEGLM = 'mesh.SaveGLM() \n' +
'Description: Save the GLM that was calculated via mesh.ComputeSingleStudyGLM(). To be used in \n' +
'BrainVoyager QX 2.8 or higher. See script “MeshMTCSingleStudyGLM.js”. \n' +
'Parameter 1: Name for general linear model (*.glm) file.';
Blockly.Msg.BV_PRT_CLEARSTIMULATIONPROTOCOL = 'Function to start a new stimulation protocol.';
Blockly.Msg.BV_PRT_LINKSTIMULATIONPROTOCOL = 'Link the stimulation protocol with the provided name to the currently opened VMR file.\n\
Parameter 1: Name protocol: name of the stimulation protocol (*.prt).';
Blockly.Msg.BV_PRT_ADDCONDITION = 'Add a condition for the current stimulation protocol.\n\
Parameter 1: Name for the condition (string).';
Blockly.Msg.BV_PRT_SETCONDITIONCOLOR = 'To discriminate the different conditions, different colors can be used. The colors in Brain-\
Voyager are specified as a combination of red, green and blue components, in this order. To lowest\
value for each component is 0 and the highest value is 255. When one of the components is set to 255\
and the other two to 0, a primary color is obtained. When each of the components red, green and blue\
is set to 0, the result will be black in absence of all colors.\n\
Parameter 1: Name of condition (string)\n\
Parameter 2: Red color component (0-255)\n\
Parameter 3: Green color component (0-255)\n\
Parameter 4: Blue color component (0-255)';
Blockly.Msg.BV_PRT_ADDINTERVAL = 'Add an interval for a condition. \n\
Example: fmr.AddInterval(‘‘Images in RVF", 1, 2);.\n\
Parameter 1: Name of condition (string)\n\
Parameter 2: Start of interval in milliseconds or volumes\n\
Parameter 3: End of interval in milliseconds or volumes';
Blockly.Msg.BV_PRT_SAVESTIMULATIONPROTOCOL = 'Save the newly created stimulation protocol with the provided name.\n\
Parameter 1: Name for the protocol file.';
Blockly.Msg.BV_PRT_SAVEVTC = 'Save the VTC, which will also save the name of the stimulation protocol in a VTC.\n\
Parameter 1: Name for current VTC. When using an empty string (””), the current VTC file name will be\
used.';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLFILE = 'String';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLEXPERIMENTNAME = 'String';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLRESOLUTION = 'Number';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLBACKGROUNDCOLORR = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLBACKGROUNDCOLORG = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLBACKGROUNDCOLORB = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSECOLORR = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSECOLORG = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSECOLORB = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTEXTCOLORR = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTEXTCOLORG = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTEXTCOLORB = 'Number between 0 and 255';
Blockly.Msg.BV_PRT_STIMULATIONPROTOCOLTIMECOURSETHICKNESS = 'Number';
Blockly.Msg.BV_SDM_FIRSTCONFOUNDPREDICTOROFSDM = 'Integer. Provides possibility to indicate when, after columns of predictors\
of interest, the confound predictor columns start.';
Blockly.Msg.BV_SDM_SDMCONTAINSCONSTANTPREDICTOR = 'Boolean: true or false. by default false. To create a constant predictor, not only\
the property ’SDMContainsConstantPredictor’ needs to be set to true, also the predictor needs to be\
added and given a value';
Blockly.Msg.BV_SDM_CLEARDESIGNMATRIX = 'Removes any current design matrices.';
Blockly.Msg.BV_SDM_SETPREDICTORVALUES = 'Specify the predictor value from a certain time point to the specified end time point in a\
specific condition.\n\
Parameter 1: Name of condition (string)\n\
Parameter 2: Timepoint from (integer)\n\
Parameter 3: Timepoint to (integer)\n\
Parameter 4: Value for the predictor';
Blockly.Msg.BV_SDM_SETPREDICTORVALUESFROMCONDITION = 'Set the predictor values for the provided condition using the information from the stimulation\
protocol.\n\
Parameter 1: Name of predictor in design matrix (string)\n\
Parameter 2: Name of condition in stimulation protocol (string)\n\
Parameter 3: Maximum value for predictor. Default: "1.0"';
Blockly.Msg.BV_SDM_APPLYHEMODYNAMICRESPONSEFUNCTIONTOPREDICTOR = 'Apply the hemodynamic response\
function (HRF) to the provided predictor (Boynton). To use the 2-gamma HRF, BrainVoyager\
QX plugins can be used (see the ‘Design Matrix Access Functions’ topic in the ‘Plugins’ chapter of the\
BrainVoyager QX User’s Guide).\n\
Parameter 1: Name of the condition that should be convolved with the HRF.';
Blockly.Msg.BV_SDM_SCALEPREDICTORVALUES = 'Scale the values of the provided predictor.\n\
Parameter 1: Name of the condition that should be scaled.\n\
Parameter 2: Maximum value for scale, for example 1:0.\n\
Parameter 3: Boolean (true or false).';
Blockly.Msg.BV_SDM_SAVESINGLESTUDYGLMDESIGNMATRIX = 'Save the single study design matrix as *.rtc or *.sdm file.\n\
Parameter 1: Name for the design matrix file.';
Blockly.Msg.BV_SDM_CLEARMULTISTUDYGLMDEFINITION = 'Remove any present *.mdm file.';
Blockly.Msg.BV_SDM_ADDSTUDYANDDESIGNMATRIX = 'Add a combination of functional data (*.vtc) and design matrix (*.sdm).\n\
Parameter 1: Name of the functional run (*.vtc)\n\
Parameter 2: Name of the design matrix (*.sdm)';
Blockly.Msg.BV_SDM_SAVEMULTISTUDYGLMDEFINITIONFILE = 'Save the newly created multi-study design matrix (*.mdm).\n\
Parameter 1: Name for the multi-study design matrix file.';
Blockly.Msg.BV_SDM_ADDPREDICTOR = 'Add a predictor to the design matrix.\n\
Parameter 1: Name of the predictor.';