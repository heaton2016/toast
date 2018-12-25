/************** 
 * Toast Test *
 **************/

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
const loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopLoopBegin, loopLoopScheduler);
flowScheduler.add(loopLoopScheduler);
flowScheduler.add(loopLoopEnd);
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

var trialClock;
var instruction;
var background;
var toast;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
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
    texRes : 128, interpolate : true, depth : -2.0 
  });
  toast = new visual.ImageStim({
    win : psychoJS.window,
    name : 'toast', 
    image : 'D:\\program files\\psychopy\\视觉搜索任务psychopy\\320.png', mask : undefined,
    ori : 0, pos : [0, (- 0.3)], size : [0.5, 0.2],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var loop;
function loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop = new TrialHandler({
    psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: '..\\..\\收集箱\\toast study\\conditions.xlsx',
    seed: undefined, name: 'loop'});
  psychoJS.experiment.addLoop(loop); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisLoop of loop) {
    thisScheduler.add(importConditions(loop));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(endLoopIteration(thisLoop));
  }

  return Scheduler.Event.NEXT;
}


function loopLoopEnd() {
  psychoJS.experiment.removeLoop(loop);

  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var key_response1;
var key_response_2;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_response1 = new core.BuilderKeyResponse(psychoJS);
  background.setImage(image_file);
  key_response_2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(instruction);
  trialComponents.push(key_response1);
  trialComponents.push(background);
  trialComponents.push(toast);
  trialComponents.push(key_response_2);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
var continueRoutine;
function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instruction* updates
  if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruction.tStart = t;  // (not accounting for frame time here)
    instruction.frameNStart = frameN;  // exact frame index
    instruction.setAutoDraw(true);
  }
  frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (instruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    instruction.setAutoDraw(false);
  }
  
  // *key_response1* updates
  if (t >= 0.0 && key_response1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_response1.tStart = t;  // (not accounting for frame time here)
    key_response1.frameNStart = frameN;  // exact frame index
    key_response1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_response1.status === PsychoJS.Status.STARTED) {
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
  
  // *background* updates
  if ((key_response1.getDuration()) && background.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    background.tStart = t;  // (not accounting for frame time here)
    background.frameNStart = frameN;  // exact frame index
    background.setAutoDraw(true);
  }
  
  // *toast* updates
  if (t >= 2 && toast.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    toast.tStart = t;  // (not accounting for frame time here)
    toast.frameNStart = frameN;  // exact frame index
    toast.setAutoDraw(true);
  }
  frameRemains = 2 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (toast.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    toast.setAutoDraw(false);
  }
  
  // *key_response_2* updates
  if (t >= 0.0 && key_response_2.status === PsychoJS.Status.NOT_STARTED) {
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
  for (const thisComponent of trialComponents)
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


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
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
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
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
