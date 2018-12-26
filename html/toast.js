/************** 
 * Toast Test *
 **************/

import { PsychoJS } from './lib/core-3.0.0b11.js';
import * as core from './lib/core-3.0.0b11.js';
import { TrialHandler } from './lib/data-3.0.0b11.js';
import { Scheduler } from './lib/util-3.0.0b11.js';
import * as util from './lib/util-3.0.0b11.js';
import * as visual from './lib/visual-3.0.0b11.js';
import { Sound } from './lib/sound-3.0.0b11.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'use prefs'
});

// store info about the experiment session:
let expName = 'toast';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionRoutineBegin);
flowScheduler.add(InstructionRoutineEachFrame);
flowScheduler.add(InstructionRoutineEnd);
const loop_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_1LoopBegin, loop_1LoopScheduler);
flowScheduler.add(loop_1LoopScheduler);
flowScheduler.add(loop_1LoopEnd);
flowScheduler.add(TipRoutineBegin);
flowScheduler.add(TipRoutineEachFrame);
flowScheduler.add(TipRoutineEnd);
flowScheduler.add(FormalRoutineBegin);
flowScheduler.add(FormalRoutineEachFrame);
flowScheduler.add(FormalRoutineEnd);
flowScheduler.add(quitPsychoJS, true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.0b13';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var InstructionClock;
var text;
var PractiseClock;
var instruction;
var background;
var toast;
var TipClock;
var Start;
var FormalClock;
var scene;
var image;
var image_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  text = new visual.TextStim({
    win : psychoJS.window,
    name : 'text',
    text : '指导语：\n整个实验要求你观察特定任务下的提示消息，\n理解该消息后立即按空格键，越快越好。\n\n按“空格键”继续。',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "Practise"
  PractiseClock = new util.Clock();
  instruction = new visual.TextStim({
    win : psychoJS.window,
    name : 'instruction',
    text : '指导语：\n现在你想要连接wifi',
    font : 'Arial',
    pos : [0, 0.8], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  background = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  toast = new visual.ImageStim({
    win : psychoJS.window,
    name : 'toast', 
    image : 'material\\320.png', mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.5, 0.2],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Tip"
  TipClock = new util.Clock();
  Start = new visual.TextStim({
    win : psychoJS.window,
    name : 'Start',
    text : '正式实验开始！\n\n\n按“空格键”继续。',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "Formal"
  FormalClock = new util.Clock();
  scene = new visual.TextStim({
    win : psychoJS.window,
    name : 'scene',
    text : '按空格键结束。\n',
    font : 'Arial',
    pos : [0, 0.8], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var key_resp_1;
var InstructionComponents;
function InstructionRoutineBegin() {
  //------Prepare to start Routine 'Instruction'-------
  t = 0;
  InstructionClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_1 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  InstructionComponents = [];
  InstructionComponents.push(text);
  InstructionComponents.push(key_resp_1);
  
  for (const thisComponent of InstructionComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructionRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instruction'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }
  
  // *key_resp_1* updates
  if (t >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_1.tStart = t;  // (not accounting for frame time here)
    key_resp_1.frameNStart = frameN;  // exact frame index
    key_resp_1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_resp_1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['y', 'n', 'left', 'right', 'space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of InstructionComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEnd() {
  //------Ending Routine 'Instruction'-------
  for (const thisComponent of InstructionComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var loop_1;
function loop_1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop_1 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'loop_1'});
  psychoJS.experiment.addLoop(loop_1); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisLoop_1 of loop_1) {
    thisScheduler.add(importConditions(loop_1));
    thisScheduler.add(PractiseRoutineBegin);
    thisScheduler.add(PractiseRoutineEachFrame);
    thisScheduler.add(PractiseRoutineEnd);
    thisScheduler.add(endLoopIteration(thisLoop_1));
  }

  return Scheduler.Event.NEXT;
}


function loop_1LoopEnd() {
  psychoJS.experiment.removeLoop(loop_1);

  return Scheduler.Event.NEXT;
}

var key_response_2;
var PractiseComponents;
function PractiseRoutineBegin() {
  //------Prepare to start Routine 'Practise'-------
  t = 0;
  PractiseClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  background.setImage(image_file);
  key_response_2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  PractiseComponents = [];
  PractiseComponents.push(instruction);
  PractiseComponents.push(background);
  PractiseComponents.push(toast);
  PractiseComponents.push(key_response_2);
  
  for (const thisComponent of PractiseComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function PractiseRoutineEachFrame() {
  //------Loop for each frame of Routine 'Practise'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = PractiseClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instruction* updates
  if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruction.tStart = t;  // (not accounting for frame time here)
    instruction.frameNStart = frameN;  // exact frame index
    instruction.setAutoDraw(true);
  }
  
  // *background* updates
  if (t >= 2 && background.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    background.tStart = t;  // (not accounting for frame time here)
    background.frameNStart = frameN;  // exact frame index
    background.setAutoDraw(true);
  }
  
  // *toast* updates
  if (t >= 3 && toast.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    toast.tStart = t;  // (not accounting for frame time here)
    toast.frameNStart = frameN;  // exact frame index
    toast.setAutoDraw(true);
  }
  
  // *key_response_2* updates
  if (t >= 3 && key_response_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_response_2.tStart = t;  // (not accounting for frame time here)
    key_response_2.frameNStart = frameN;  // exact frame index
    key_response_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(key_response_2.clock.reset) // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_response_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['y', 'n', 'left', 'right', 'space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_response_2.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      key_response_2.rt = key_response_2.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of PractiseComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function PractiseRoutineEnd() {
  //------Ending Routine 'Practise'-------
  for (const thisComponent of PractiseComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(key_response_2.keys) >= 0) {    // No response was made
      key_response_2.keys = undefined;
  }
  psychoJS.experiment.addData('key_response_2.keys', key_response_2.keys);
  if (key_response_2.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('key_response_2.rt', key_response_2.rt);
      routineTimer.reset();
      }
  // the Routine "Practise" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var key_resp_2;
var TipComponents;
function TipRoutineBegin() {
  //------Prepare to start Routine 'Tip'-------
  t = 0;
  TipClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  TipComponents = [];
  TipComponents.push(Start);
  TipComponents.push(key_resp_2);
  
  for (const thisComponent of TipComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function TipRoutineEachFrame() {
  //------Loop for each frame of Routine 'Tip'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = TipClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Start* updates
  if (t >= 0.0 && Start.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Start.tStart = t;  // (not accounting for frame time here)
    Start.frameNStart = frameN;  // exact frame index
    Start.setAutoDraw(true);
  }
  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    key_resp_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['y', 'n', 'left', 'right', 'space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of TipComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function TipRoutineEnd() {
  //------Ending Routine 'Tip'-------
  for (const thisComponent of TipComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Tip" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var key_resp_3;
var FormalComponents;
function FormalRoutineBegin() {
  //------Prepare to start Routine 'Formal'-------
  t = 0;
  FormalClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_3 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  FormalComponents = [];
  FormalComponents.push(scene);
  FormalComponents.push(image);
  FormalComponents.push(image_2);
  FormalComponents.push(key_resp_3);
  
  for (const thisComponent of FormalComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function FormalRoutineEachFrame() {
  //------Loop for each frame of Routine 'Formal'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = FormalClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *scene* updates
  if (t >= 0.0 && scene.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    scene.tStart = t;  // (not accounting for frame time here)
    scene.frameNStart = frameN;  // exact frame index
    scene.setAutoDraw(true);
  }
  
  // *image* updates
  if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image.tStart = t;  // (not accounting for frame time here)
    image.frameNStart = frameN;  // exact frame index
    image.setAutoDraw(true);
  }
  
  // *image_2* updates
  if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image_2.tStart = t;  // (not accounting for frame time here)
    image_2.frameNStart = frameN;  // exact frame index
    image_2.setAutoDraw(true);
  }
  frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    image_2.setAutoDraw(false);
  }
  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    key_resp_3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(key_resp_3.clock.reset) // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['y', 'n', 'left', 'right', 'space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      key_resp_3.rt = key_resp_3.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of FormalComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function FormalRoutineEnd() {
  //------Ending Routine 'Formal'-------
  for (const thisComponent of FormalComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(key_resp_3.keys) >= 0) {    // No response was made
      key_resp_3.keys = undefined;
  }
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  if (key_resp_3.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
      }
  // the Routine "Formal" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({isCompleted});

  return Scheduler.Event.QUIT;
}
