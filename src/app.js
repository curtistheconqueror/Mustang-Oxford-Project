const gearConfigs = {
  N: { name: "N", cardTitle: "Neutral", cardBody: "Selector centered. No gear locked.", shifter: { x: 0, z: 0, down: 0 }, linkage: { x: 0, z: 0 }, trans: { fork: 1, collar: 0, active: null }, path: ["Centered between gates", "No collar locked", "Power path open"], explanation: "Neutral leaves the selector centered with no gear locked to the output shaft." },
  R: { name: "R", cardTitle: "Reverse", cardBody: "Push down, move left, then up.", shifter: { x: -1.65, z: -1.1, down: -0.35 }, linkage: { x: -1.25, z: -1 }, trans: { fork: 0, collar: -0.95, active: 0 }, path: ["Push down on the knob", "Move left", "Move up into Reverse"], explanation: "Reverse uses a push-down lockout. After the knob is pushed down, the lever moves left and up to full Reverse engagement." },
  1: { name: "1", cardTitle: "1st Gear", cardBody: "From Reverse, come back, let it return, then up.", shifter: { x: -0.65, z: -1.1, down: 0 }, linkage: { x: -0.6, z: -1 }, trans: { fork: 0, collar: 0.82, active: 1 }, path: ["Come back/down out of Reverse", "Let the lever return toward the 1/2 gate", "Move up into 1st"], explanation: "First gear sits up from the 1/2 gate. Coming out of Reverse does not require pushing the knob down again." },
  2: { name: "2", cardTitle: "2nd Gear", cardBody: "From 1st, move straight down.", shifter: { x: -0.65, z: 1.1, down: 0 }, linkage: { x: -0.6, z: 1 }, trans: { fork: 0, collar: -0.82, active: 2 }, path: ["Move straight down"], explanation: "Second gear is bottom-left in the 1/2 gate; the shift rod moves the fork the opposite direction from 1st." },
  3: { name: "3", cardTitle: "3rd Gear", cardBody: "From 2nd, move up into 3rd.", shifter: { x: 0.55, z: -1.1, down: 0 }, linkage: { x: 0.1, z: -1 }, trans: { fork: 1, collar: 0.82, active: 3 }, path: ["Move up into 3rd"], explanation: "Third gear is top-center in the 3/4 gate, sliding its synchronizer sleeve onto the selected gear." },
  4: { name: "4", cardTitle: "4th Gear", cardBody: "From 3rd, move straight down.", shifter: { x: 0.55, z: 1.1, down: 0 }, linkage: { x: 0.1, z: 1 }, trans: { fork: 1, collar: -0.82, active: 4 }, path: ["Move straight down"], explanation: "Fourth gear is bottom-center in the 3/4 gate while the shift fork moves the collar toward fourth." },
  5: { name: "5", cardTitle: "5th Gear", cardBody: "From 4th, move up into 5th.", shifter: { x: 1.75, z: -1.1, down: 0 }, linkage: { x: 0.95, z: -1 }, trans: { fork: 2, collar: 0.82, active: 5 }, path: ["Move up into 5th"], explanation: "Fifth gear is top-right in the 5/6 gate. The lever is guided into that gate rather than feeling like a hard sideways move." },
  6: { name: "6", cardTitle: "6th Gear", cardBody: "From 5th, move straight down.", shifter: { x: 1.75, z: 1.1, down: 0 }, linkage: { x: 0.95, z: 1 }, trans: { fork: 2, collar: -0.82, active: 6 }, path: ["Move straight down"], explanation: "Sixth gear is bottom-right in the 5/6 gate and locks the opposite side of that synchronizer assembly." },
};

const componentCatalog = {
  case: { name: "Aluminum Transmission Case", assembly: "Housing", role: "Contains the shafts, bearings, shift rail hardware, and oil while supporting the external shifter linkage." },
  bellhousing: { name: "Bellhousing / Front Case", assembly: "Housing", role: "Bolts to the engine and surrounds the clutch-to-input-shaft interface." },
  inputShaft: { name: "Input Shaft", assembly: "Shafts", role: "Receives torque from the clutch and feeds the gear train." },
  outputShaft: { name: "Output Shaft / Mainshaft", assembly: "Shafts", role: "Carries selected gear torque out of the transmission toward the driveshaft." },
  countershaft: { name: "Countershaft", assembly: "Shafts", role: "Carries the mating gear cluster that stays meshed with the mainshaft gears." },
  reverseIdler: { name: "Reverse Idler Gear", assembly: "Reverse", role: "Adds an extra gear path so output rotation reverses direction." },
  selectorRod: { name: "Selector Rod", assembly: "Shift Control", role: "Chooses which shift fork rail or gate will be acted on." },
  shiftRod: { name: "Shift Rod", assembly: "Shift Control", role: "Moves longitudinally to push or pull the selected fork and synchronizer sleeve." },
  fork12: { name: "1st / 2nd Shift Fork", assembly: "Shift Forks", role: "Slides the 1st/2nd synchronizer sleeve toward either 1st or 2nd gear." },
  fork34: { name: "3rd / 4th Shift Fork", assembly: "Shift Forks", role: "Slides the 3rd/4th synchronizer sleeve toward either 3rd or 4th gear." },
  fork56: { name: "5th / Reverse Shift Fork", assembly: "Shift Forks", role: "Moves the left-side sleeve area used by the 5th/reverse gear group in this exposed teaching model." },
  fork6: { name: "6th Gear Shift Fork", assembly: "Shift Forks", role: "Moves the far 6th gear sleeve area independently in the exposed gear-train view." },
  hub12: { name: "1st / 2nd Hub Sleeve", assembly: "Synchronizers", role: "Locks either 1st or 2nd gear to the output shaft after speed matching." },
  hub34: { name: "3rd / 4th Hub Sleeve", assembly: "Synchronizers", role: "Locks either 3rd or 4th gear to the shaft after the blocking ring synchronizes speed." },
  hub5R: { name: "5th / Reverse Hub Sleeve", assembly: "Synchronizers", role: "Locks the left-side 5th/reverse gear group after speed matching." },
  hub6: { name: "6th Gear Hub Sleeve", assembly: "Synchronizers", role: "Locks the 6th gear set at the far output side of the gear train." },
  hub56: { name: "5th / 6th Hub Sleeve", assembly: "Synchronizers", role: "Legacy placeholder from the first prototype; replaced by separate 5th/reverse and 6th sleeve groups as the model becomes more realistic." },
  blockingRing: { name: "Blocking / Synchronizer Ring", assembly: "Synchronizers", role: "Uses friction to match gear and shaft speed before the sleeve fully engages." },
  gearR: { name: "Reverse Gear", assembly: "Gear Pairs", role: "Works with the reverse idler path for backward vehicle motion." },
  gear1: { name: "1st Gear", assembly: "Gear Pairs", role: "Largest torque multiplication for starting from a stop." },
  gear2: { name: "2nd Gear", assembly: "Gear Pairs", role: "Second ratio on the 1/2 synchronizer group." },
  gear3: { name: "3rd Gear", assembly: "Gear Pairs", role: "Mid-ratio gear on the 3/4 synchronizer group." },
  gear4: { name: "4th Gear", assembly: "Gear Pairs", role: "Fourth ratio, typically closer to direct drive behavior." },
  gear5: { name: "5th Gear", assembly: "Gear Pairs", role: "Overdrive cruising ratio on the 5/6 side of the transmission." },
  gear6: { name: "6th Gear", assembly: "Gear Pairs", role: "Tallest overdrive ratio for highway cruising." },
  bearingSets: { name: "Bearing Sets", assembly: "Deferred Inspection", role: "Support each shaft and control axial/radial load. They are represented by shaft endpoints now and need a deeper inspection view later." },
  detentSystem: { name: "Detents / Interlock", assembly: "Deferred Inspection", role: "Prevents selecting multiple gears at once and gives the shift rail its positive notched feel. Marked for a later close-up module." },
  caseRibs: { name: "Case Ribs, Bolts, and Seals", assembly: "Deferred Inspection", role: "External structure, fastening points, and sealing surfaces are grouped for now so the case can be refined without clutter." },
  oilPassages: { name: "Oil Passages / Lubrication", assembly: "Deferred Inspection", role: "Lubrication paths are not drawn yet; future cutaway layers should show oil feed, splash, and bearing lubrication context." },
  clutchInterface: { name: "Clutch / Input Interface", assembly: "Deferred Inspection", role: "The spline, pilot support, release hardware, and clutch coupling are represented as a simplified input shaft connection for now." },
  synchroDetails: { name: "Synchro Keys and Dog Teeth", assembly: "Deferred Inspection", role: "Fine teeth, keys, springs, and friction cones are grouped under hub/sleeve targets until a granular synchronizer view is added." },
  synchroHubCore: { name: "Synchronizer Hub Core", assembly: "Synchronizer Close-Up", role: "Splined hub fixed to the shaft. The sliding sleeve rides over it and locks the selected gear after speed matching." },
  synchroSleeve: { name: "Sliding Synchronizer Sleeve", assembly: "Synchronizer Close-Up", role: "Moves left or right under fork control to lock the chosen gear to the shaft through the dog teeth." },
  synchroBlockerRing: { name: "Blocker / Baulk Ring", assembly: "Synchronizer Close-Up", role: "Friction ring that matches gear speed before the sleeve can complete engagement." },
  synchroDogTeeth: { name: "Dog Teeth", assembly: "Synchronizer Close-Up", role: "Small engagement teeth that the sleeve locks onto after the blocker ring synchronizes speed." },
  synchroKeysSprings: { name: "Keys and Springs", assembly: "Synchronizer Close-Up", role: "Small struts and spring pressure that center the sleeve and help the blocker ring do its speed-matching work." },
  synchroForkPads: { name: "Shift Fork Pads", assembly: "Synchronizer Close-Up", role: "Contact pads where the shift fork pushes the sleeve without directly grinding against the gear teeth." },
};

const baseComponentIds = ["case", "bellhousing", "inputShaft", "countershaft", "outputShaft", "selectorRod", "shiftRod"];
const deferredComponentIds = ["bearingSets", "detentSystem", "caseRibs", "oilPassages", "clutchInterface", "synchroDetails"];
const deeperInspectionLabels = {
  bearingSets: "Viewable in bearing close-up",
  detentSystem: "Viewable in shift-rail close-up",
  caseRibs: "Viewable in case shell layer",
  oilPassages: "Viewable in lubrication layer",
  clutchInterface: "Viewable in clutch/input interface",
  synchroDetails: "Viewable in synchronizer close-up",
};
const inspectionRoutes = {
  overview: {
    title: "Overview",
    status: "Full transmission context",
    summary: "Normal cutaway/exposed/case views stay active while the selected gear and component map drive the teaching flow.",
    next: "Use Focus or a deferred marker when you want a tighter inspection path.",
  },
  synchro: {
    title: "Synchronizer Close-Up",
    status: "Sleeve, hub, blocker ring, dog teeth",
    summary: "Shows a first exploded synchronizer teaching module with the hub core, sliding sleeve, blocker rings, dog teeth, keys/springs, and fork contact pads.",
    next: "Stage 3C can tie this close-up more tightly to individual gear pairs and sleeve travel timing.",
  },
  bearing: {
    title: "Bearing View",
    status: "Shaft support and load path",
    summary: "Routes shaft endpoints and bearing supports into a future bearing inspection state for radial load, axial control, and case support context.",
    next: "Stage 3B/3C can add bearing pockets and support highlights.",
  },
  shiftRail: {
    title: "Shift-Rail / Detent View",
    status: "Rails, detents, interlock logic",
    summary: "Routes the upper rail hardware into a future close-up showing how the detent and interlock system prevents two gears from being selected at once.",
    next: "Add rail notches, detent balls/springs, and interlock callouts after the routing is stable.",
  },
  caseShell: {
    title: "Case Shell Layer",
    status: "Ribs, bolt bosses, seals, openings",
    summary: "Routes the temporary case scaffold toward the future MT82-realistic shell with ribs, bolt bosses, sealing surfaces, and bearing pockets.",
    next: "This is where the squared scaffold gets replaced by a realistic case silhouette.",
  },
  lubrication: {
    title: "Lubrication View",
    status: "Oil paths and splash zones",
    summary: "Routes the oil-passage marker into a future lubrication layer showing splash/feed behavior around gears, synchronizers, bearings, and lower case oil level.",
    next: "Add oil level and animated splash/feed paths once the case shape is more realistic.",
  },
  clutchInput: {
    title: "Clutch / Input Interface",
    status: "Spline, pilot support, release path",
    summary: "Routes the front input connection into a future interface view for clutch disc spline engagement, pilot support, release hardware, and input shaft handoff.",
    next: "Tie this deeper view to the existing clutch module and front bellhousing geometry.",
  },
};
const inspectionRouteOrder = ["overview", "synchro", "bearing", "shiftRail", "caseShell", "lubrication", "clutchInput"];
const componentInspectionRoute = {
  blockingRing: "synchro",
  synchroDetails: "synchro",
  synchroHubCore: "synchro",
  synchroSleeve: "synchro",
  synchroBlockerRing: "synchro",
  synchroDogTeeth: "synchro",
  synchroKeysSprings: "synchro",
  synchroForkPads: "synchro",
  hub12: "synchro",
  hub34: "synchro",
  hub5R: "synchro",
  hub6: "synchro",
  bearingSets: "bearing",
  inputShaft: "bearing",
  outputShaft: "bearing",
  countershaft: "bearing",
  detentSystem: "shiftRail",
  selectorRod: "shiftRail",
  shiftRod: "shiftRail",
  caseRibs: "caseShell",
  case: "caseShell",
  bellhousing: "caseShell",
  oilPassages: "lubrication",
  clutchInterface: "clutchInput",
};
const gearComponentMap = {
  N: ["selectorRod", "shiftRod", "inputShaft", "countershaft", "outputShaft"],
  R: ["gearR", "reverseIdler", "fork56", "hub5R", "blockingRing"],
  1: ["gear1", "fork12", "hub12", "blockingRing"],
  2: ["gear2", "fork12", "hub12", "blockingRing"],
  3: ["gear3", "fork34", "hub34", "blockingRing"],
  4: ["gear4", "fork34", "hub34", "blockingRing"],
  5: ["gear5", "fork56", "hub5R", "blockingRing"],
  6: ["gear6", "fork6", "hub6", "blockingRing"],
};

const primaryComponentByGear = {
  N: "selectorRod",
  R: "gearR",
  1: "gear1",
  2: "gear2",
  3: "gear3",
  4: "gear4",
  5: "gear5",
  6: "gear6",
};
const focusGroups = {
  inputShaft: ["inputShaft", "clutchInterface"],
  outputShaft: ["outputShaft"],
  countershaft: ["countershaft"],
  reverseIdler: ["reverseIdler", "gearR"],
  fork56: ["fork56", "hub5R", "gear5", "gearR"],
  fork34: ["fork34", "hub34", "gear3", "gear4"],
  fork12: ["fork12", "hub12", "gear1", "gear2"],
  fork6: ["fork6", "hub6", "gear6"],
  hub5R: ["hub5R", "fork56", "gear5", "gearR"],
  hub34: ["hub34", "fork34", "gear3", "gear4"],
  hub12: ["hub12", "fork12", "gear1", "gear2"],
  hub6: ["hub6", "fork6", "gear6"],
  gearR: ["gearR", "reverseIdler", "hub5R", "fork56"],
  gear1: ["gear1", "hub12", "fork12"],
  gear2: ["gear2", "hub12", "fork12"],
  gear3: ["gear3", "hub34", "fork34"],
  gear4: ["gear4", "hub34", "fork34"],
  gear5: ["gear5", "hub5R", "fork56"],
  gear6: ["gear6", "hub6", "fork6"],
  case: ["case", "bellhousing", "caseRibs"],
  bellhousing: ["bellhousing", "case", "clutchInterface"],
  blockingRing: ["blockingRing", "hub12", "hub34", "hub5R", "hub6", "gear1", "gear2", "gear3", "gear4", "gear5", "gear6", "synchroBlockerRing"],
  synchroDetails: ["hub12", "hub34", "hub5R", "hub6", "blockingRing", "synchroHubCore", "synchroSleeve", "synchroBlockerRing", "synchroDogTeeth", "synchroKeysSprings", "synchroForkPads"],
  synchroHubCore: ["synchroHubCore", "synchroSleeve", "synchroKeysSprings"],
  synchroSleeve: ["synchroSleeve", "synchroHubCore", "synchroForkPads", "synchroDogTeeth"],
  synchroBlockerRing: ["synchroBlockerRing", "synchroDogTeeth", "synchroSleeve"],
  synchroDogTeeth: ["synchroDogTeeth", "synchroSleeve", "synchroBlockerRing"],
  synchroKeysSprings: ["synchroKeysSprings", "synchroHubCore", "synchroSleeve"],
  synchroForkPads: ["synchroForkPads", "synchroSleeve", "fork12", "fork34", "fork56", "fork6"],
  bearingSets: ["inputShaft", "outputShaft", "countershaft", "reverseIdler"],
  detentSystem: ["selectorRod", "shiftRod", "fork12", "fork34", "fork56", "fork6"],
  caseRibs: ["case", "bellhousing", "caseRibs"],
  oilPassages: ["case", "countershaft", "gear1", "gear2", "gear3", "gear4", "gear5", "gear6", "gearR", "bearingSets"],
  clutchInterface: ["bellhousing", "inputShaft", "clutchInterface"],
};

const viewLabels = { shifter: "Shifter", linkage: "Linkage", cutaway: "Transmission", clutch: "Clutch" };
const viewMeta = {
  shifter: { title: "1. Shifter Movement - 6-Speed", subtitle: "Cabin view with reverse lockout, H-pattern, boot, trim, and cue-ball knob.", badge: "Cabin Shifter" },
  linkage: { title: "2. Top View - Shift Linkage & Mechanism", subtitle: "Left/right selects the gate. Forward/back engages the gear.", badge: "Top Linkage" },
  cutaway: { title: "3. Side Cutaway - Inside The Transmission", subtitle: "Fork, synchronizer, collar, gearset, input shaft, and output shaft.", badge: "Transmission Cutaway" },
  clutch: { title: "4. Clutch Operation - What Happens", subtitle: "Pressed interrupts power. Released clamps the clutch pack and restores flow.", badge: "Clutch Module" },
};
const cameraPresets = {
  shifter: { yaw: -0.55, pitch: 0.66, distance: 6.35, panX: 0.0, panY: 0.05 },
  linkage: { yaw: -0.9, pitch: 0.94, distance: 5.3, panX: 0.05, panY: 0.0 },
  cutaway: { yaw: -0.72, pitch: 0.58, distance: 5.9, panX: 0.05, panY: 0.02 },
  clutch: { yaw: -0.42, pitch: 0.45, distance: 5.1, panX: -0.12, panY: 0.05 },
};
const orderedGears = ["R", "1", "2", "3", "4", "5", "6", "N"];
const stripGears = ["R", "1", "2", "3", "4", "5", "6"];
const gatePoints = {
  N: [0, 0],
  R: [-1.65, -1.1],
  1: [-0.65, -1.1],
  2: [-0.65, 1.1],
  3: [0.55, -1.1],
  4: [0.55, 1.1],
  5: [1.75, -1.1],
  6: [1.75, 1.1],
};
const gateRoutes = {
  R: [[0, 0], [-1.65, 0], gatePoints.R],
  1: [[0, 0], [-0.65, 0], gatePoints["1"]],
  2: [[0, 0], [-0.65, 0], gatePoints["2"]],
  3: [[0, 0], [0.55, 0], gatePoints["3"]],
  4: [[0, 0], [0.55, 0], gatePoints["4"]],
  5: [[0, 0], [1.75, 0], gatePoints["5"]],
  6: [[0, 0], [1.75, 0], gatePoints["6"]],
};
const timeline = [
  "Clutch pressed",
  "Power pauses",
  "Shifter path",
  "Selector rods move",
  "Fork slides sleeve",
  "Gear locks",
  "Clutch releases",
];
const caseModes = ["cutaway", "exposed", "case"];
const caseModeLabels = { cutaway: "Cutaway", exposed: "Exposed", case: "Case" };
const caseModeHelp = {
  cutaway: "Cutaway mode keeps the lower case and side walls visible while opening the top so the gear train can be studied in context.",
  exposed: "Exposed mode removes most of the housing and leaves the shafts, gears, forks, sleeves, and reverse idler visible for inspection.",
  case: "Case mode shows the assembled transmission housing first; internal parts are intentionally muted until a cutaway or exposed view is selected.",
};
const sanityChecklist = [
  { label: "Gear map", status: "Pass", detail: "Each gear selects a primary gear plus its sleeve, fork, blocking ring, shafts, and power state." },
  { label: "Shaft layout", status: "Pass", detail: "Input/output mainshaft, countershaft, and reverse idler are separated into readable positions." },
  { label: "Display modes", status: "Pass", detail: "Case, Cutaway, and Exposed modes are available from the transmission display control." },
  { label: "Deferred parts", status: "Tracked", detail: "Bearings, detents, oil passages, seals, ribs, and fine synchronizer details are marked for deeper inspection." },
  { label: "Phase C readiness", status: "Ready", detail: "Teachable component groups now have stable IDs for future hover/click targets." },
];
const modeledNowIds = ["case", "bellhousing", "inputShaft", "outputShaft", "countershaft", "reverseIdler", "selectorRod", "shiftRod", "fork12", "fork34", "fork56", "fork6", "hub12", "hub34", "hub5R", "hub6", "gearR", "gear1", "gear2", "gear3", "gear4", "gear5", "gear6"];
const synchroCloseupIds = ["synchroHubCore", "synchroSleeve", "synchroBlockerRing", "synchroDogTeeth", "synchroKeysSprings", "synchroForkPads"];
const simplifiedNowIds = ["blockingRing", "synchroDetails", "clutchInterface", ...synchroCloseupIds];

const state = {
  view: "shifter",
  gear: "N",
  previousGear: "N",
  step: 0,
  playing: false,
  clutch: false,
  labels: true,
  cutaway: true,
  caseMode: "cutaway",
  flow: true,
  focusSelected: false,
  hoveredComponent: null,
  inspectionMode: "overview",
  selectedComponent: null,
  orbit: { ...cameraPresets.shifter },
  targetOrbit: { ...cameraPresets.shifter },
  shifterTarget: { ...gearConfigs.N.shifter },
  anim: { sx: 0, sz: 0, sy: 0, lx: 0, lz: 0, collar: 0, pedal: 0 },
};

const canvas = document.getElementById("scene");
const gl = canvas.getContext("webgl", { antialias: true });
const labels = document.getElementById("labelLayer");
const tooltip = document.getElementById("inspectionTooltip");
if (!gl) {
  document.querySelector(".canvas-card").innerHTML = "<p class='webgl-error'>WebGL is not available in this browser.</p>";
}

const vs = `
attribute vec3 position;
attribute vec3 normal;
uniform mat4 mvp;
uniform mat4 model;
varying vec3 vNormal;
varying vec3 vWorld;
void main(){
  vec4 world = model * vec4(position, 1.0);
  vWorld = world.xyz;
  vNormal = mat3(model) * normal;
  gl_Position = mvp * vec4(position, 1.0);
}`;
const fs = `
precision mediump float;
varying vec3 vNormal;
varying vec3 vWorld;
uniform vec3 color;
uniform vec3 emissive;
uniform float alpha;
void main(){
  vec3 n = normalize(vNormal);
  float key = max(dot(n, normalize(vec3(0.4, 0.7, 0.5))), 0.0);
  float rim = pow(1.0 - max(dot(n, normalize(vec3(0.0, 0.3, 1.0))), 0.0), 2.0);
  vec3 lit = color * (0.24 + key * 0.78) + emissive + rim * vec3(0.08, 0.22, 0.35);
  gl_FragColor = vec4(lit, alpha);
}`;
const lineVs = `
attribute vec3 position;
uniform mat4 mvp;
void main(){ gl_Position = mvp * vec4(position, 1.0); }`;
const lineFs = `
precision mediump float;
uniform vec3 color;
uniform float alpha;
void main(){ gl_FragColor = vec4(color, alpha); }`;

const program = createProgram(vs, fs);
const lineProgram = createProgram(lineVs, lineFs);
const cube = makeCube();
const cyl = makeCylinder(40);
const sphere = makeSphere(28, 18);
const torus = makeTorus(48, 10);
const cone = makeCone(48);

function createProgram(vertexSource, fragmentSource) {
  const p = gl.createProgram();
  const v = compile(gl.VERTEX_SHADER, vertexSource);
  const f = compile(gl.FRAGMENT_SHADER, fragmentSource);
  gl.attachShader(p, v);
  gl.attachShader(p, f);
  gl.linkProgram(p);
  return p;
}

function compile(type, source) {
  const s = gl.createShader(type);
  gl.shaderSource(s, source);
  gl.compileShader(s);
  return s;
}

function mat4() { return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; }
function mul(a, b) {
  const o = Array(16).fill(0);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
  return o;
}
function translate(x, y, z) { const m = mat4(); m[12] = x; m[13] = y; m[14] = z; return m; }
function scale(x, y, z) { const m = mat4(); m[0] = x; m[5] = y; m[10] = z; return m; }
function rotateX(a) { const c = Math.cos(a), s = Math.sin(a); return [1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1]; }
function rotateY(a) { const c = Math.cos(a), s = Math.sin(a); return [c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1]; }
function rotateZ(a) { const c = Math.cos(a), s = Math.sin(a); return [c,s,0,0, -s,c,0,0, 0,0,1,0, 0,0,0,1]; }
function perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan(fov / 2), nf = 1 / (near - far);
  return [f / aspect,0,0,0, 0,f,0,0, 0,0,(far + near) * nf,-1, 0,0,2 * far * near * nf,0];
}
function lookAt(eye, center, up) {
  const z = norm(sub(eye, center)), x = norm(cross(up, z)), y = cross(z, x);
  return [x[0],y[0],z[0],0, x[1],y[1],z[1],0, x[2],y[2],z[2],0, -dot(x,eye),-dot(y,eye),-dot(z,eye),1];
}
function sub(a, b) { return [a[0]-b[0], a[1]-b[1], a[2]-b[2]]; }
function cross(a, b) { return [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]]; }
function dot(a, b) { return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; }
function norm(v) { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0]/l, v[1]/l, v[2]/l]; }
function hex(c) { const n = parseInt(c.slice(1), 16); return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; }
function damp(current, target, delta, speed = 7) { return current + (target - current) * (1 - Math.exp(-speed * delta)); }

function mesh(geometry, model, color, alpha = 1, emissive = "#000000") {
  gl.useProgram(program);
  bindGeometry(program, geometry);
  gl.uniformMatrix4fv(gl.getUniformLocation(program, "model"), false, new Float32Array(model));
  gl.uniformMatrix4fv(gl.getUniformLocation(program, "mvp"), false, new Float32Array(mul(viewProj, model)));
  gl.uniform3fv(gl.getUniformLocation(program, "color"), new Float32Array(hex(color)));
  gl.uniform3fv(gl.getUniformLocation(program, "emissive"), new Float32Array(hex(emissive)));
  gl.uniform1f(gl.getUniformLocation(program, "alpha"), alpha);
  gl.drawArrays(gl.TRIANGLES, 0, geometry.count);
}

function line(points, color, width = 4, alpha = 1) {
  gl.useProgram(lineProgram);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points.flat()), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(lineProgram, "position");
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
  gl.uniformMatrix4fv(gl.getUniformLocation(lineProgram, "mvp"), false, new Float32Array(viewProj));
  gl.uniform3fv(gl.getUniformLocation(lineProgram, "color"), new Float32Array(hex(color)));
  gl.uniform1f(gl.getUniformLocation(lineProgram, "alpha"), alpha);
  gl.lineWidth(width);
  gl.drawArrays(gl.LINES, 0, points.length);
  gl.deleteBuffer(buffer);
}

function marker(pos, color, size = 0.1, emissive = "#000000") {
  mesh(sphere, model(pos, [size, size, size]), color, 1, emissive);
}

function flowLine(points, color, width = 5, alpha = 1) {
  line(points, color, width, alpha);
  marker(points[points.length - 1], color, 0.085, color);
}

function bindGeometry(p, g) {
  if (!g.buffer) {
    g.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, g.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(g.data), gl.STATIC_DRAW);
  } else gl.bindBuffer(gl.ARRAY_BUFFER, g.buffer);
  const pos = gl.getAttribLocation(p, "position");
  const normal = gl.getAttribLocation(p, "normal");
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 24, 0);
  gl.enableVertexAttribArray(normal);
  gl.vertexAttribPointer(normal, 3, gl.FLOAT, false, 24, 12);
}

function pushTri(data, a, b, c, n) {
  [a, b, c].forEach((p) => data.push(p[0], p[1], p[2], n[0], n[1], n[2]));
}

function makeCube() {
  const p = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
  const faces = [[0,1,2,3,[0,0,-1]],[4,7,6,5,[0,0,1]],[0,4,5,1,[0,-1,0]],[3,2,6,7,[0,1,0]],[1,5,6,2,[1,0,0]],[0,3,7,4,[-1,0,0]]];
  const data = [];
  faces.forEach(([a,b,c,d,n]) => { pushTri(data,p[a],p[b],p[c],n); pushTri(data,p[a],p[c],p[d],n); });
  return { data, count: data.length / 6 };
}

function makeCylinder(segments) {
  const data = [];
  for (let i = 0; i < segments; i++) {
    const a = i / segments * Math.PI * 2, b = (i + 1) / segments * Math.PI * 2;
    const p1 = [Math.cos(a), -1, Math.sin(a)], p2 = [Math.cos(b), -1, Math.sin(b)], p3 = [Math.cos(b), 1, Math.sin(b)], p4 = [Math.cos(a), 1, Math.sin(a)];
    pushTri(data, p1, p2, p3, norm([Math.cos((a+b)/2),0,Math.sin((a+b)/2)])); pushTri(data, p1, p3, p4, norm([Math.cos((a+b)/2),0,Math.sin((a+b)/2)]));
    pushTri(data, [0,-1,0], p2, p1, [0,-1,0]); pushTri(data, [0,1,0], p4, p3, [0,1,0]);
  }
  return { data, count: data.length / 6 };
}

function makeCone(segments) {
  const data = [];
  for (let i = 0; i < segments; i++) {
    const a = i / segments * Math.PI * 2, b = (i + 1) / segments * Math.PI * 2;
    const p1 = [Math.cos(a), -1, Math.sin(a)], p2 = [Math.cos(b), -1, Math.sin(b)], tip = [0, 1, 0];
    pushTri(data, p1, p2, tip, norm(cross(sub(p2, p1), sub(tip, p1))));
    pushTri(data, [0,-1,0], p2, p1, [0,-1,0]);
  }
  return { data, count: data.length / 6 };
}

function makeSphere(cols, rows) {
  const data = [];
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const pts = [[x,y],[x+1,y],[x+1,y+1],[x,y+1]].map(([u,v]) => {
      const th = u / cols * Math.PI * 2, ph = v / rows * Math.PI;
      return [Math.sin(ph)*Math.cos(th), Math.cos(ph), Math.sin(ph)*Math.sin(th)];
    });
    pushTri(data, pts[0], pts[1], pts[2], pts[0]); pushTri(data, pts[0], pts[2], pts[3], pts[0]);
  }
  return { data, count: data.length / 6 };
}

function makeTorus(cols, rows) {
  const data = [], R = 0.72, r = 0.18;
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const vertex = (u, v) => {
      const a = u / cols * Math.PI * 2, b = v / rows * Math.PI * 2;
      return [(R + r * Math.cos(b)) * Math.cos(a), r * Math.sin(b), (R + r * Math.cos(b)) * Math.sin(a)];
    };
    const pts = [vertex(x,y), vertex(x+1,y), vertex(x+1,y+1), vertex(x,y+1)];
    const n = norm(pts[0]);
    pushTri(data, pts[0], pts[1], pts[2], n); pushTri(data, pts[0], pts[2], pts[3], n);
  }
  return { data, count: data.length / 6 };
}

let viewProj = mat4();
let last = performance.now();
function draw(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  resize();
  updateAnim(dt);
  gl.clearColor(0.027, 0.062, 0.098, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  const { yaw, pitch, distance, panX, panY } = state.orbit;
  const eye = [Math.sin(yaw) * Math.cos(pitch) * distance + panX, Math.sin(pitch) * distance + panY, Math.cos(yaw) * Math.cos(pitch) * distance];
  viewProj = mul(perspective(0.78, canvas.width / canvas.height, 0.1, 100), lookAt(eye, [panX, panY, 0], [0, 1, 0]));
  labels.innerHTML = "";
  drawGrid();
  if (state.view === "shifter") drawShifter();
  if (state.view === "linkage") drawLinkage();
  if (state.view === "cutaway") drawTransmission();
  if (state.view === "clutch") drawClutch();
  requestAnimationFrame(draw);
}

function updateAnim(dt) {
  const g = gearConfigs[state.gear];
  const shifter = state.shifterTarget || g.shifter;
  state.anim.sx = damp(state.anim.sx, shifter.x, dt, 6.4);
  state.anim.sz = damp(state.anim.sz, shifter.z, dt, 6.4);
  state.anim.sy = damp(state.anim.sy, shifter.down, dt, 8);
  state.anim.lx = damp(state.anim.lx, g.linkage.x, dt);
  state.anim.lz = damp(state.anim.lz, g.linkage.z, dt);
  state.anim.collar = damp(state.anim.collar, -1.2 + g.trans.fork * 1.2 + g.trans.collar * 0.25, dt);
  state.anim.pedal = damp(state.anim.pedal, state.clutch ? -0.6 : -0.15, dt);
  Object.keys(state.orbit).forEach((key) => {
    state.orbit[key] = damp(state.orbit[key], state.targetOrbit[key], dt, 5);
  });
}

function model(t = [0,0,0], s = [1,1,1], r = [0,0,0]) {
  return mul(translate(...t), mul(rotateY(r[1]), mul(rotateX(r[0]), mul(rotateZ(r[2]), scale(...s)))));
}

function drawGrid() {
  for (let i = -4; i <= 4; i++) {
    line([[i, -1.15, -4], [i, -1.15, 4]], "#153447", 1, 0.65);
    line([[-4, -1.15, i], [4, -1.15, i]], "#153447", 1, 0.65);
  }
}

function drawShifter() {
  mesh(cube, model([0, -0.22, 0], [2.7, 0.08, 1.9]), "#121923");
  mesh(cube, model([0, -0.005, -1.47], [2.05, 0.045, 0.055]), "#c4ccd4");
  mesh(cube, model([0, -0.005, 1.47], [2.05, 0.045, 0.055]), "#c4ccd4");
  mesh(cube, model([-2.05, -0.005, 0], [0.055, 0.045, 1.45]), "#c4ccd4");
  mesh(cube, model([2.05, -0.005, 0], [0.055, 0.045, 1.45]), "#c4ccd4");
  [[-1.82,-1.28],[1.82,-1.28],[-1.82,1.28],[1.82,1.28]].forEach(([x,z]) => {
    mesh(cyl, model([x,0.08,z], [0.08,0.035,0.08]), "#d6e0e8");
    mesh(cyl, model([x,0.12,z], [0.04,0.04,0.04]), "#1a2531");
  });
  mesh(cube, model([0, -0.055, 0], [0.92, 0.1, 0.68]), "#050609", 0.92);
  mesh(cube, model([0, 0.035, 0], [0.54, 0.08, 0.42]), "#0b0f14", 0.92);
  mesh(cube, model([0, 0.12, 0], [0.23, 0.12, 0.2]), "#070a0e", 0.94);
  [
    [-0.42, 0.09, -0.18, 0.14],
    [-0.24, 0.1, 0.28, -0.16],
    [0.2, 0.1, -0.28, 0.12],
    [0.42, 0.09, 0.18, -0.18],
    [0.0, 0.12, 0.38, 0.02],
  ].forEach(([x, y, z, r]) => {
    mesh(cube, model([x, y, z], [0.035, 0.04, 0.34], [0.08, r, 0.18]), "#171b20", 0.86);
  });
  drawPattern();
  drawShiftPath();
  const sx = state.anim.sx, sy = state.anim.sy, sz = state.anim.sz;
  mesh(cyl, model([sx, 0.85 + sy, sz], [0.06, 1.35, 0.06], [0.12, 0, 0]), "#c7d0d9");
  mesh(cyl, model([sx, 0.15 + sy, sz], [0.16, 0.16, 0.16]), "#7b858e");
  mesh(sphere, model([sx, 2.25 + sy, sz], [0.48, 0.48, 0.48]), "#f3f4ef");
  drawKnobFace(sx, sy, sz);
  addLabel([-1.65, 0.45, -1.55], "R/1/2");
  addLabel([0.55, 0.45, -1.55], "3/4");
  addLabel([1.75, 0.45, -1.55], "5/6");
}

function drawKnobFace(sx, sy, sz) {
  const z = sz + 0.43;
  const y = 2.18 + sy;
  line([[sx - 0.26, y + 0.04, z], [sx + 0.26, y + 0.04, z]], "#111111", 3, 0.9);
  [[-0.22, -0.04], [-0.08, 0.04], [0.08, 0.04], [0.22, 0.04]].forEach(([x, top]) => {
    line([[sx + x, y + top - 0.08, z], [sx + x, y + top + 0.08, z]], "#111111", 3, 0.9);
  });
  mesh(cube, model([sx - 0.07, 2.53 + sy, sz + 0.23], [0.16, 0.022, 0.03], [0.05, 0.08, -0.25]), "#111111", 0.72);
  mesh(cube, model([sx + 0.08, 2.5 + sy, sz + 0.23], [0.09, 0.018, 0.026], [0.03, 0.08, 0.42]), "#111111", 0.68);
  mesh(sphere, model([sx - 0.02, 2.51 + sy, sz + 0.2], [0.08, 0.035, 0.055]), "#111111", 0.6);
}

function drawShiftPath() {
  const route = buildShifterMotion(state.previousGear || "N", state.gear).map((point) => [point.x, point.z]);
  const y = 0.22;
  if (state.gear === "N") return;
  route.forEach((point, index) => {
    if (index === 0) return;
    const prev = route[index - 1];
    drawGateSegment(prev, point, y, "#4abfff", 7, 0.9);
    marker([point[0], y + 0.05, point[1]], "#4abfff", 0.075, "#0b4f75");
  });
  marker([0, y + 0.06, 0], "#ffffff", 0.065, "#2b4d64");
  if (state.gear === "R") {
    drawGateSegment([-1.96, -0.55], [-1.96, -1.08], y + 0.24, "#ff6478", 5, 0.85);
    marker([-1.96, y + 0.34, -1.08], "#ff6478", 0.07, "#5a0b1a");
    addLabel([-1.95, 0.68, -0.55], "Push Down", "red");
  }
}

function drawPattern() {
  const y = 0.08;
  [
    [[-1.65,1.1],[-1.65,-1.1]],
    [[-0.65,-1.1],[-0.65,1.1]],
    [[0.55,1.1],[0.55,-1.1]],
    [[1.75,1.1],[1.75,-1.1]],
    [[-0.65,0],[1.75,0]],
    [[-1.65,-1.1],[-0.65,-1.1]],
  ].forEach(([from, to]) => drawGateSegment(from, to, y, "#23495f", 6, 0.85));
  Object.entries(gatePoints).forEach(([txt, [x, z]]) => {
    if (txt === "N") {
      marker([x, y + 0.03, z], "#cdefff", 0.055, "#1a4b63");
      addLabel([x, 0.28, z], "N", "mini");
      return;
    }
    marker([x, y + 0.03, z], "#2f6a82", 0.05, "#061822");
  });
  [["R",-1.65,-1.45],["1",-0.65,-1.45],["3",0.55,-1.45],["5",1.75,-1.45],["2",-0.65,1.45],["4",0.55,1.45],["6",1.75,1.45]].forEach(([txt,x,z]) => addLabel([x,0.28,z], txt, "mini"));
}

function drawGateSegment(from, to, y, color, width, alpha) {
  line([[from[0], y, from[1]], [to[0], y, to[1]]], color, width, alpha);
}

function drawLinkage() {
  const selectorX = state.anim.lx;
  const engageZ = state.anim.lz;
  const forkIndex = gearConfigs[state.gear].trans.fork;
  const gateZ = [-0.72, 0, 0.72][forkIndex];
  const selectorGateZ = state.gear === "N" ? 0 : gateZ;
  const rodPull = -engageZ * 0.22;
  const rodMid = 0.12;
  const rodHalf = 1.56;

  mesh(cube, model([0,-0.18,0], [3.05,0.06,1.82]), "#101822");

  mesh(cube, model([-1.92,0.0,0], [0.62,0.13,0.58]), "#172434");
  mesh(cube, model([-1.92,0.14,0], [0.42,0.05,0.36]), "#26384b");
  mesh(sphere, model([-1.92 + selectorX * 0.1,0.58,engageZ * 0.11], [0.2,0.2,0.2]), "#f3f4ef");
  mesh(cyl, model([-1.92 + selectorX * 0.1,0.34,engageZ * 0.11], [0.055,0.48,0.055], [0.15,0,0]), "#c7d0d9");

  mesh(cube, model([2.22,0.02,0.0], [0.82,0.46,0.94]), "#1a2633", 0.66);
  mesh(cube, model([2.2,0.07,0.0], [0.56,0.28,0.68]), "#263546", 0.56);
  mesh(cube, model([2.95,0.02,0.0], [0.16,0.34,0.56]), "#46515c", 0.72);

  [[1.42,-0.72],[1.42,0],[1.42,0.72]].forEach(([x,z], i) => {
    const active = i === forkIndex;
    mesh(cube, model([x,0.03,z], [0.12,0.05,0.24]), active ? "#69d0ff" : "#33485b", 0.8, active ? "#082e45" : "#000000");
    addLabel([x,0.34,z], i === 0 ? "R / 1 / 2" : i === 1 ? "3 / 4" : "5 / 6", "mini");
  });

  line([[-1.3,0.1,-0.72],[1.42,0.1,-0.72]], "#19394c", 3, 0.9);
  line([[-1.3,0.1,0],[1.42,0.1,0]], "#19394c", 3, 0.9);
  line([[-1.3,0.1,0.72],[1.42,0.1,0.72]], "#19394c", 3, 0.9);

  mesh(cyl, model([rodMid,0.2,-0.32], [0.055,rodHalf,0.055], [0,0,Math.PI/2]), "#8bdcff");
  mesh(cyl, model([rodMid + rodPull,0.19,0.34], [0.055,rodHalf,0.055], [0,0,Math.PI/2]), "#dbe7ee");
  mesh(cube, model([-0.62,0.28,-0.32 + selectorGateZ * 0.28], [0.34,0.09,0.12]), "#4abfff", 0.92, "#092b40");
  mesh(cube, model([0.62 + rodPull,0.27,0.34], [0.32,0.09,0.14]), "#41ff91", 0.88, "#0b3c25");

  mesh(cube, model([-1.28,0.24,-0.16 + selectorGateZ * 0.22], [0.5,0.055,0.1], [0,0,0.18]), "#ffc85a");
  mesh(cube, model([1.32 + rodPull,0.24,gateZ], [0.52,0.055,0.1], [0,0,-0.2]), "#ffc85a");
  mesh(cube, model([1.78 + rodPull,0.2,gateZ], [0.18,0.12,0.18]), "#ffc85a");
  line([[0.24,0.42,0.34],[1.35 + rodPull,0.42,gateZ]], "#ffc85a", 5, 0.9);

  flowLine([[-1.34,0.5,-0.32],[-0.58,0.5,-0.32 + selectorGateZ * 0.28]], "#4abfff", 5, 0.9);
  flowLine([[-0.55,0.56,0.34],[0.88 + rodPull,0.56,0.34]], "#41ff91", 5, 0.9);
  addLabel([-1.92,0.82,0], "Shift Lever");
  addLabel([0.05,0.76,-0.32], "Selector Rod", "blue");
  addLabel([0.15,0.76,0.34], "Shift Rod", "green");
  addLabel([2.22,0.72,0.0], "Transmission");
  addLabel([1.42,0.8,gateZ], "Gate Selection", "blue");
  addLabel([1.15 + rodPull,0.84,0.34], "Longitudinal Push/Pull", "green");
}

function drawTransmission() {
  const g = gearConfigs[state.gear];
  const activeGear = state.gear === "N" ? null : `gear${state.gear}`;
  const activeForkId = state.gear === "6" ? "fork6" : state.gear === "5" || state.gear === "R" ? "fork56" : g.trans.fork === 0 ? "fork12" : g.trans.fork === 1 ? "fork34" : null;
  const activeForkX = { fork56: -1.55, fork34: -0.05, fork12: 1.24, fork6: 2.1 }[activeForkId] ?? 0.72;
  const sleeveShift = { R: 0.14, 5: -0.14, 3: -0.14, 4: 0.14, 1: 0.14, 2: -0.14, 6: 0.14 }[state.gear] || 0;
  const activeSleeve = { fork56: "hub5R", fork34: "hub34", fork12: "hub12", fork6: "hub6" }[activeForkId];
  const activeSleeveX = { hub5R: -1.55, hub34: -0.05, hub12: 1.24, hub6: 2.1 }[activeSleeve] ?? 0;
  const internalAlpha = state.caseMode === "case" ? 0.16 : 1;
  const labelInternals = state.caseMode !== "case";
  if (state.caseMode === "cutaway") {
    mesh(cube, model([0,-0.88,0.08], [3.0,0.08,1.08]), "#182331", focusAlpha("case", 0.72));
    mesh(cube, model([0,-0.08,1.1], [3.0,0.72,0.06]), "#182331", focusAlpha("case", 0.46));
    mesh(cube, model([0,-0.08,-0.98], [3.0,0.72,0.04]), "#182331", focusAlpha("case", 0.28));
    mesh(cube, model([-2.72,-0.1,0.06], [0.18,0.72,1.0]), "#263546", focusAlpha("bellhousing", 0.42));
    mesh(cube, model([2.88,-0.1,0.06], [0.18,0.68,0.9]), "#263546", focusAlpha("case", 0.42));
  } else if (state.caseMode === "exposed") {
    mesh(cube, model([0,-0.9,0.08], [2.92,0.04,0.95]), "#101822", focusAlpha("case", 0.34));
    mesh(cube, model([-2.72,-0.1,0.06], [0.12,0.54,0.78]), "#263546", focusAlpha("bellhousing", 0.28));
    mesh(cube, model([2.86,-0.1,0.06], [0.12,0.5,0.72]), "#263546", focusAlpha("case", 0.28));
  } else {
    mesh(cube, model([0,-0.1,0.04], [3.02,0.92,1.08]), "#1d2b3a", focusAlpha("case", 0.9));
    mesh(cube, model([0,0.66,-0.1], [2.52,0.18,0.78]), "#314252", focusAlpha("case", 0.92));
    mesh(cube, model([-2.75,0.0,0.04], [0.36,0.74,0.96]), "#3b4a57", focusAlpha("bellhousing", 0.92));
    mesh(cube, model([2.9,-0.04,0.04], [0.28,0.66,0.84]), "#3b4a57", focusAlpha("case", 0.92));
    mesh(cyl, model([-3.12,0.34,-0.08], [0.18,0.22,0.18], [0,0,Math.PI/2]), "#81909d", focusAlpha("inputShaft", 0.95));
    mesh(cyl, model([3.16,0.34,-0.08], [0.14,0.28,0.14], [0,0,Math.PI/2]), "#81909d", focusAlpha("outputShaft", 0.95));
  }
  [[-2.82,0.62,-0.74],[-2.82,-0.68,-0.74],[2.98,0.54,-0.74],[2.98,-0.62,-0.74]].forEach((p) => mesh(cyl, model(p, [0.055,0.045,0.055]), "#9aa8b5", focusAlpha("caseRibs", 1)));

  drawShaft("inputShaft", [-2.95,0.34,-0.08], [-2.12,0.34,-0.08], "#d7e1e9", internalAlpha);
  drawShaft("outputShaft", [-2.12,0.34,-0.08], [2.95,0.34,-0.08], "#b8c5cf", internalAlpha);
  drawShaft("countershaft", [-2.38,-0.48,0.55], [2.62,-0.48,0.55], "#8f9da8", internalAlpha);
  drawShaft("reverseIdler", [-1.45,0.92,-0.58], [-0.78,0.92,-0.58], "#9facb8", internalAlpha);

  const pairs = [
    { id: "gear5", label: "5th", x: -1.82, r: 0.34, cr: 0.46 },
    { id: "gearR", label: "Reverse", x: -1.22, r: 0.36, cr: 0.48 },
    { id: "gear4", label: "4th", x: -0.48, r: 0.43, cr: 0.4 },
    { id: "gear3", label: "3rd", x: 0.22, r: 0.39, cr: 0.43 },
    { id: "gear2", label: "2nd", x: 0.92, r: 0.48, cr: 0.35 },
    { id: "gear1", label: "1st", x: 1.55, r: 0.52, cr: 0.32 },
    { id: "gear6", label: "6th", x: 2.1, r: 0.31, cr: 0.5 },
  ];
  pairs.forEach((p, index) => drawGearPair(p, activeGear === p.id, index, internalAlpha));
  const activePair = pairs.find((p) => p.id === activeGear);

  drawReverseIdler(activeGear === "gearR", internalAlpha);
  drawHubSleeve("hub5R", "5/R Sleeve", -1.55, activeGear === "gear5" || activeGear === "gearR", activeForkId === "fork56" ? sleeveShift : 0, internalAlpha);
  drawHubSleeve("hub34", "3/4 Sleeve", -0.05, activeGear === "gear3" || activeGear === "gear4", activeForkId === "fork34" ? sleeveShift : 0, internalAlpha);
  drawHubSleeve("hub12", "1/2 Sleeve", 1.24, activeGear === "gear1" || activeGear === "gear2", activeForkId === "fork12" ? sleeveShift : 0, internalAlpha);
  drawHubSleeve("hub6", "6th Sleeve", 2.1, activeGear === "gear6", activeForkId === "fork6" ? sleeveShift : 0, internalAlpha);

  mesh(cyl, model([0.2,1.05,-0.62], [0.045,2.45,0.045], [0,0,Math.PI/2]), "#526778", focusAlpha("detentSystem", internalAlpha));
  mesh(cyl, model([0.2,1.11,-0.42], [0.045,2.45,0.045], [0,0,Math.PI/2]), "#526778", focusAlpha("detentSystem", internalAlpha));
  mesh(cyl, model([0.2,1.05,-0.22], [0.045,2.45,0.045], [0,0,Math.PI/2]), "#526778", focusAlpha("detentSystem", internalAlpha));
  mesh(cyl, model([0.2,1.11,-0.02], [0.045,2.45,0.045], [0,0,Math.PI/2]), "#526778", focusAlpha("detentSystem", internalAlpha));
  drawFork("fork56", -1.55, activeForkId === "fork56", sleeveShift, internalAlpha);
  drawFork("fork34", -0.05, activeForkId === "fork34", sleeveShift, internalAlpha);
  drawFork("fork12", 1.24, activeForkId === "fork12", sleeveShift, internalAlpha);
  drawFork("fork6", 2.1, activeForkId === "fork6", sleeveShift, internalAlpha);

  if (state.flow && !state.clutch && state.gear !== "N") {
    flowLine([[-2.85,0.78,-0.08],[-1.2,0.78,-0.08]], "#41ff91", 6);
    flowLine([[-1.2,0.78,-0.08],[0.8,0.78,-0.08]], "#41ff91", 6);
    flowLine([[0.8,0.78,-0.08],[2.8,0.78,-0.08]], "#41ff91", 6);
  }
  if (labelInternals) {
    if (state.inspectionMode !== "overview") {
      const route = inspectionRoutes[state.inspectionMode];
      addLabel([0.12,1.72,-0.7], route.title, "route");
    }
    addLabel([-2.28,0.68,-0.08], "Input Shaft");
    addLabel([2.35,0.68,-0.08], "Output / Mainshaft");
    addLabel([1.95,-0.92,0.55], "Countershaft");
    addLabel([-1.12,1.26,-0.58], "Reverse Idler", "blue");
    addLabel([activeForkX,1.34,-0.42], "Active Shift Fork");
    addHotspot([-2.3,0.52,-0.08], "inputShaft", "IN");
    addHotspot([2.35,0.52,-0.08], "outputShaft", "OUT");
    addHotspot([1.95,-0.74,0.55], "countershaft", "CS");
    addHotspot([-1.12,1.08,-0.58], "reverseIdler", "R", "inspect");
    if (activePair) addHotspot([activePair.x,1.08,-0.08], activePair.id, state.gear);
    if (activeForkId) addHotspot([activeForkX + sleeveShift,1.18,-0.42], activeForkId, "F");
    if (activeSleeve) addHotspot([activeSleeveX + sleeveShift,0.82,-0.08], activeSleeve, "S");
    addInspectionMarker([-2.28,0.72,-0.62], "?", "Bearing sets");
    addInspectionMarker([0.18,1.38,-0.72], "?", "Detents / interlock");
    addInspectionMarker([0.95,-0.96,0.92], "?", "Oil passages");
    addInspectionMarker([0.28,0.78,0.28], "?", "Synchro details");
    addHotspot([-2.28,0.92,-0.62], "bearingSets", "?", "inspect");
    addHotspot([0.18,1.56,-0.72], "detentSystem", "?", "inspect");
    addHotspot([0.95,-0.78,0.92], "oilPassages", "?", "inspect");
    addHotspot([0.28,0.94,0.28], "synchroDetails", "?", "inspect");
    if (state.inspectionMode === "synchro") drawSynchronizerCloseup(activeSleeveX + sleeveShift, activeForkX + sleeveShift);
  } else {
    addLabel([0,1.08,-0.58], "Assembled MT82 Case");
    addInspectionMarker([-2.25,0.95,-0.7], "?", "Case ribs / seals");
    addInspectionMarker([-2.9,0.62,-0.16], "?", "Clutch input interface");
    addHotspot([0,0.86,-0.58], "case", "CASE");
    addHotspot([-2.25,1.14,-0.7], "caseRibs", "?", "inspect");
    addHotspot([-2.9,0.82,-0.16], "clutchInterface", "?", "inspect");
  }
}

function drawSynchronizerCloseup(sourceX, forkX) {
  const ox = 1.1;
  const oy = 1.2;
  const oz = -1.55;
  const travel = Math.max(-0.18, Math.min(0.18, (gearConfigs[state.gear].trans.collar || 0) * 0.16));
  const shaftAlpha = focusAlpha("outputShaft", 0.92, 0.28);
  line([[sourceX,0.72,-0.08],[ox - 0.72,oy + 0.02,oz]], "#ffd166", 2, 0.62);
  line([[forkX,1.04,-0.42],[ox + travel,oy + 0.52,oz]], "#ffc85a", 2, 0.62);

  mesh(cyl, model([ox,oy,oz], [0.045,0.88,0.045], [0,0,Math.PI/2]), "#d7e1e9", shaftAlpha);
  mesh(cyl, model([ox,oy,oz], [0.18,0.22,0.18], [0,0,Math.PI/2]), selectedColor("synchroHubCore", "#7f93a5"), focusAlpha("synchroHubCore", 0.96), selectedGlow("synchroHubCore"));
  mesh(torus, model([ox,oy,oz], [0.28,0.28,0.28], [Math.PI/2,0,0]), selectedColor("synchroHubCore", "#9aaec0"), focusAlpha("synchroHubCore", 0.86), selectedGlow("synchroHubCore"));

  mesh(cyl, model([ox + travel,oy,oz], [0.34,0.16,0.34], [0,0,Math.PI/2]), selectedColor("synchroSleeve", "#48bfff"), focusAlpha("synchroSleeve", 0.82), selectedGlow("synchroSleeve"));
  mesh(torus, model([ox + travel,oy,oz], [0.4,0.4,0.4], [Math.PI/2,0,0]), selectedColor("synchroSleeve", "#bcecff"), focusAlpha("synchroSleeve", 0.88), selectedGlow("synchroSleeve"));

  [-0.46, 0.46].forEach((side) => {
    const ringId = "synchroBlockerRing";
    mesh(torus, model([ox + side,oy,oz], [0.3,0.3,0.3], [Math.PI/2,0,0]), selectedColor(ringId, "#d0a14f"), focusAlpha(ringId, 0.9), selectedGlow(ringId));
    mesh(cyl, model([ox + side,oy,oz], [0.23,0.035,0.23], [0,0,Math.PI/2]), selectedColor(ringId, "#ad7f33"), focusAlpha(ringId, 0.72), selectedGlow(ringId));
    drawSynchroDogTeeth(ox + side * 1.18, oy, oz, side);
  });

  for (let i = 0; i < 3; i++) {
    const a = i / 3 * Math.PI * 2 + 0.42;
    const y = oy + Math.sin(a) * 0.22;
    const z = oz + Math.cos(a) * 0.22;
    mesh(cube, model([ox, y, z], [0.33,0.018,0.038], [0,0,0.08]), selectedColor("synchroKeysSprings", "#ffd166"), focusAlpha("synchroKeysSprings", 0.9), selectedGlow("synchroKeysSprings"));
  }

  mesh(cube, model([ox + travel,oy + 0.53,oz], [0.3,0.08,0.08]), selectedColor("synchroForkPads", "#ffc85a"), focusAlpha("synchroForkPads", 0.92), selectedGlow("synchroForkPads"));
  mesh(cube, model([ox + travel,oy - 0.53,oz], [0.3,0.08,0.08]), selectedColor("synchroForkPads", "#ffc85a"), focusAlpha("synchroForkPads", 0.92), selectedGlow("synchroForkPads"));

  addHotspot([ox,oy + 0.16,oz], "synchroHubCore", "H");
  addHotspot([ox + travel,oy + 0.36,oz], "synchroSleeve", "SL");
  addHotspot([ox - 0.46,oy + 0.18,oz], "synchroBlockerRing", "BR", "inspect");
  addHotspot([ox + 0.66,oy + 0.16,oz], "synchroDogTeeth", "DT", "inspect");
  addHotspot([ox,oy - 0.3,oz], "synchroKeysSprings", "K");
  addHotspot([ox + travel,oy + 0.57,oz], "synchroForkPads", "FP");
}

function drawSynchroDogTeeth(x, y, z, side) {
  const color = selectedColor("synchroDogTeeth", "#d9e4eb");
  const glow = selectedGlow("synchroDogTeeth");
  const alpha = focusAlpha("synchroDogTeeth", 0.92);
  for (let t = 0; t < 14; t++) {
    const a = t / 14 * Math.PI * 2;
    const ty = y + Math.sin(a) * 0.31;
    const tz = z + Math.cos(a) * 0.31;
    mesh(cube, model([x,ty,tz], [0.045,0.028,0.055], [0.36 * side,0,a]), color, alpha, glow);
  }
}

function selectedColor(id, normalColor) {
  return state.selectedComponent === id ? "#ffd166" : normalColor;
}

function selectedGlow(id) {
  return state.selectedComponent === id ? "#5a4200" : "#000000";
}

function addInspectionMarker(pos, symbol, text) {
  if (!state.labels) return;
  addLabel(pos, `${symbol} ${text}`, "inspect");
}

function getFocusSet() {
  if (!state.focusSelected || state.view !== "cutaway" || !state.selectedComponent) return null;
  const selected = focusGroups[state.selectedComponent] || [state.selectedComponent];
  const route = state.inspectionMode === "synchro" ? synchroCloseupIds : [];
  return new Set([...selected, ...route]);
}

function isFocusedComponent(id) {
  const focusSet = getFocusSet();
  return !focusSet || focusSet.has(id);
}

function focusAlpha(id, alpha = 1, dimAlpha = 0.16) {
  if (isFocusedComponent(id)) return alpha;
  return Math.min(alpha, dimAlpha);
}

function projectToScreen(pos) {
  const clip = multiplyVec(viewProj, [pos[0], pos[1], pos[2], 1]);
  if (clip[3] <= 0) return null;
  return {
    x: (clip[0] / clip[3] * 0.5 + 0.5) * canvas.clientWidth,
    y: (-clip[1] / clip[3] * 0.5 + 0.5) * canvas.clientHeight,
  };
}

function addHotspot(pos, componentId, text, className = "") {
  if (!state.labels || !componentCatalog[componentId]) return;
  const point = projectToScreen(pos);
  if (!point) return;
  const el = document.createElement("button");
  el.type = "button";
  el.className = `scene-hotspot ${className} ${componentId === state.selectedComponent ? "active" : ""}`;
  el.dataset.hotspotComponent = componentId;
  el.textContent = text;
  el.title = componentCatalog[componentId].name;
  el.setAttribute("aria-label", `Inspect ${componentCatalog[componentId].name}`);
  el.style.left = `${point.x}px`;
  el.style.top = `${point.y}px`;
  labels.appendChild(el);
}

function drawShaft(id, from, to, color, alpha = 1) {
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2];
  const length = Math.abs(to[0] - from[0]) / 2;
  const selected = state.selectedComponent === id;
  mesh(cyl, model(mid, [0.07,length,0.07], [0,0,Math.PI/2]), selected ? "#ffd166" : color, focusAlpha(id, alpha), selected ? "#5a4200" : "#000000");
  if (selected && state.focusSelected) line([from, to], "#ffd166", 7, 0.78);
}

function drawGearPair(p, active, index, alpha = 1) {
  const selected = state.selectedComponent === p.id;
  const focus = active || selected;
  const glow = active ? "#0b5a35" : selected ? "#5a4200" : "#000000";
  const localAlpha = focusAlpha(p.id, alpha);
  drawGear(p.x, 0.34, -0.08, p.r, focus, index, selected, localAlpha);
  drawGear(p.x, -0.48, 0.55, p.cr, focus, index + 4, selected, localAlpha);
  line([[p.x,0.34,-0.08],[p.x,-0.48,0.55]], active ? "#41ff91" : selected ? "#ffd166" : "#253d4c", focus ? 4 : 2, focus ? 0.9 : Math.min(localAlpha, 0.45));
  if (focus && localAlpha > 0.3) addLabel([p.x,0.98,-0.08], p.label, active ? "green" : "blue");
  mesh(torus, model([p.x,0.34,-0.08], [p.r * 1.04,p.r * 1.04,p.r * 1.04], [Math.PI/2,0,0]), active ? "#b8ffd8" : selected ? "#ffe29a" : "#9faeba", Math.min(localAlpha, focus ? 0.9 : 0.55), glow);
}

function drawGear(x, y, z, radius, active, index, selected = false, alpha = 1) {
  const color = active ? selected ? "#ffd166" : "#42ffa8" : index % 2 ? "#748596" : "#5f7284";
  const glow = active ? selected ? "#5a4200" : "#0b5a35" : "#000000";
  mesh(cyl, model([x,y,z], [radius,0.115,radius], [0,0,Math.PI/2]), color, Math.min(alpha, 0.96), glow);
  for (let t = 0; t < 18; t++) {
    const a = t / 18 * Math.PI * 2;
    const ty = y + Math.sin(a) * (radius + 0.06);
    const tz = z + Math.cos(a) * (radius + 0.06);
    mesh(cube, model([x,ty,tz], [0.055,0.04,0.11], [0.45,0,a + (index % 2 ? 0.45 : -0.45)]), color, Math.min(alpha, 0.92), glow);
  }
  for (let band = -1; band <= 1; band += 2) {
    mesh(torus, model([x + band * 0.095,y,z], [radius * 0.72,radius * 0.72,radius * 0.72], [Math.PI/2,0,0]), active ? "#d8ffe9" : "#aab6c0", Math.min(alpha, active ? 0.9 : 0.58), glow);
  }
  mesh(cyl, model([x,y,z], [0.12,0.14,0.12], [0,0,Math.PI/2]), active ? "#d8ffe9" : "#c1cad2", alpha);
}

function drawReverseIdler(active, alpha = 1) {
  const selected = state.selectedComponent === "reverseIdler";
  const localAlpha = focusAlpha("reverseIdler", alpha);
  drawGear(-1.1, 0.92, -0.58, 0.28, active || selected, 9, selected, localAlpha);
  if (active || selected) {
    const color = active ? "#41ff91" : "#ffd166";
    line([[-1.22,0.34,-0.08],[-1.1,0.92,-0.58]], color, 4, Math.min(localAlpha, 0.86));
    line([[-1.1,0.92,-0.58],[-1.22,-0.48,0.55]], color, 4, Math.min(localAlpha, 0.86));
  }
}

function drawHubSleeve(id, label, x, active, offset, alpha = 1) {
  const selected = state.selectedComponent === id;
  const focus = active || selected;
  const color = active ? "#48bfff" : selected ? "#ffd166" : "#9aaec0";
  const glow = active ? "#0b3554" : selected ? "#5a4200" : "#000000";
  const px = x + offset;
  const localAlpha = focusAlpha(id, alpha);
  mesh(torus, model([px,0.34,-0.08], [0.31,0.31,0.31], [Math.PI/2,0,0]), color, Math.min(localAlpha, focus ? 1 : 0.76), glow);
  mesh(cyl, model([px,0.34,-0.08], [0.22,0.14,0.22], [0,0,Math.PI/2]), active ? "#bcecff" : selected ? "#ffe29a" : "#7f93a5", Math.min(localAlpha, focus ? 0.92 : 0.7), glow);
  mesh(torus, model([px,0.34,-0.08], [0.39,0.39,0.39], [Math.PI/2,0,0]), active || selected ? "#ffd166" : "#677887", Math.min(localAlpha, focus ? 0.86 : 0.48), active || selected ? "#6f4b00" : "#000000");
  if (focus && localAlpha > 0.3) addLabel([px,0.72,-0.08], label, active ? "blue" : "green");
}

function drawFork(id, x, active, shift, alpha = 1) {
  const selected = state.selectedComponent === id;
  const focus = active || selected;
  const color = active ? "#ffc85a" : selected ? "#ffd166" : "#6d7e8d";
  const px = active ? x + shift : x;
  const localAlpha = focusAlpha(id, alpha);
  mesh(cube, model([px,1.02,-0.42], [0.14,0.18,0.08]), color, Math.min(localAlpha, focus ? 0.95 : 0.62), focus ? "#4c3500" : "#000000");
  mesh(cube, model([px,0.76,-0.25], [0.09,0.36,0.06], [0.1,0,0.12]), color, Math.min(localAlpha, focus ? 0.95 : 0.6));
  mesh(cube, model([px,0.76,0.08], [0.09,0.36,0.06], [-0.1,0,-0.12]), color, Math.min(localAlpha, focus ? 0.95 : 0.6));
  if (focus) line([[px,0.66,-0.18],[px,0.44,-0.08]], color, 5, Math.min(localAlpha, 0.85));
}

function drawClutch() {
  const plateX = state.clutch ? 0.55 : 0.25;
  mesh(cube, model([-1.55,-0.15,0], [0.18,0.24,0.22]), "#23364a");
  mesh(cube, mul(translate(-2.25,0.2,0), mul(rotateZ(state.anim.pedal), scale(0.08,0.58,0.08))), "#8ca0b5");
  mesh(cube, mul(translate(-2.25,-0.48,0), mul(rotateZ(state.anim.pedal), scale(0.28,0.08,0.14))), "#b9c6d2");
  flowLine([[-1.9,0.25,0],[-0.7,0.25,0]], "#ff4f67", state.clutch ? 6 : 2, state.clutch ? 1 : 0.45);
  mesh(cyl, model([-0.05,0,0], [0.82,0.08,0.82], [Math.PI/2,0,0]), "#5d6874");
  mesh(torus, model([-0.05,0,0], [0.82,0.82,0.82], [Math.PI/2,0,0]), "#9ba7b1", 0.75);
  mesh(cyl, model([0.12,0,0], [0.58,0.035,0.58], [Math.PI/2,0,0]), "#c07a4d", 1);
  mesh(cyl, model([0.3,0,0], [0.58,0.035,0.58], [Math.PI/2,0,0]), "#c07a4d", 1);
  mesh(cyl, model([0.25,0,0], [0.62,0.06,0.62], [Math.PI/2,0,0]), state.clutch ? "#8894a0" : "#41ff91", 0.82, state.clutch ? "#000000" : "#0d4f2f");
  mesh(cyl, model([plateX,0,0], [0.72,0.06,0.72], [Math.PI/2,0,0]), "#d7dde5");
  mesh(torus, model([plateX,0,0], [0.72,0.72,0.72], [Math.PI/2,0,0]), "#eef4f8", 0.85);
  mesh(cyl, model([1.45,0,0], [0.09,0.82,0.09], [0,0,Math.PI/2]), "#c9d4dd");
  if (state.clutch) flowLine([[0.45,0.95,0],[0.8,0.95,0]], "#4aa6ff", 5);
  if (state.flow && !state.clutch) flowLine([[-1,-1.05,0],[0,-1.05,0]], "#41ff91", 6), flowLine([[0,-1.05,0],[1.8,-1.05,0]], "#41ff91", 6);
  addLabel([-2.25,-0.75,0], "Clutch Pedal"); addLabel([-1.2,0.55,0], "Hydraulic Pressure", "red"); addLabel([-0.08,-0.9,0], "Flywheel"); addLabel([0.28,0.9,0], "Twin-disc Pack"); addLabel([0.78,-0.78,0], "Pressure Plate"); addLabel([1.45,0.45,0], "Input Shaft");
}

function addLabel(pos, text, className = "") {
  if (!state.labels && className !== "mini") return;
  const point = projectToScreen(pos);
  if (!point) return;
  const el = document.createElement("span");
  el.className = `scene-label ${className}`;
  el.textContent = text;
  el.style.left = `${point.x}px`;
  el.style.top = `${point.y}px`;
  labels.appendChild(el);
}

function multiplyVec(m, v) {
  return [
    m[0]*v[0]+m[4]*v[1]+m[8]*v[2]+m[12]*v[3],
    m[1]*v[0]+m[5]*v[1]+m[9]*v[2]+m[13]*v[3],
    m[2]*v[0]+m[6]*v[1]+m[10]*v[2]+m[14]*v[3],
    m[3]*v[0]+m[7]*v[1]+m[11]*v[2]+m[15]*v[3],
  ];
}

function resize() {
  const dpr = Math.min(devicePixelRatio, 2);
  const w = Math.floor(canvas.clientWidth * dpr), h = Math.floor(canvas.clientHeight * dpr);
  if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0,0,w,h); }
}

function renderUi() {
  const meta = viewMeta[state.view];
  const gearConfig = gearConfigs[state.gear];
  const activeComponents = getActiveComponentIds();
  if (!state.selectedComponent || !componentCatalog[state.selectedComponent]) state.selectedComponent = activeComponents[0];
  const selectedComponent = componentCatalog[state.selectedComponent];
  const route = inspectionRoutes[state.inspectionMode] || inspectionRoutes.overview;
  document.getElementById("viewName").textContent = `${viewLabels[state.view]} View`;
  document.getElementById("selectedGear").textContent = `Selected: ${state.gear === "N" ? "Neutral" : `${state.gear} gear`}`;
  document.getElementById("sectionTitle").textContent = meta.title;
  document.getElementById("sectionSubtitle").textContent = meta.subtitle;
  document.getElementById("canvasBadge").textContent = state.inspectionMode === "overview" ? meta.badge : route.title;
  document.getElementById("currentStep").textContent = timeline[state.step];
  document.getElementById("gearTitle").textContent = gearConfig.cardTitle;
  document.getElementById("gearExplanation").textContent = gearConfig.explanation;
  document.getElementById("pathList").innerHTML = gearConfig.path.map((p) => `<span>${p}</span>`).join("");
  document.getElementById("clutchText").textContent = state.clutch ? "Pressed: power interrupted so the selector can change gears." : "Released: clutch pack clamped and power flow available.";
  document.getElementById("gateStatus").textContent = getGateStatus(gearConfig);
  document.getElementById("selectorStatus").textContent = getSelectorStatus(gearConfig);
  document.getElementById("shiftRodStatus").textContent = getShiftRodStatus(gearConfig);
  document.getElementById("collarStatus").textContent = gearConfig.trans.active === null ? "Open" : `${gearConfig.cardTitle} locked`;
  document.getElementById("displayStatus").textContent = caseModeLabels[state.caseMode];
  document.getElementById("inspectionStatus").textContent = route.title;
  document.getElementById("powerStatus").textContent = state.clutch ? "Interrupted" : state.gear === "N" ? "No gear selected" : "Flowing";
  document.getElementById("componentList").innerHTML = activeComponents.map((id) => {
    const component = componentCatalog[id];
    return `<button data-component="${id}" class="${id === state.selectedComponent ? "active" : ""}">
      <span>${component.assembly}</span>
      <strong>${component.name}</strong>
    </button>`;
  }).join("");
  document.getElementById("inspectionCard").innerHTML = selectedComponent ? `
    <span>${selectedComponent.assembly}</span>
    <strong>${selectedComponent.name}</strong>
    <em>${getInspectionStatus(state.selectedComponent)}</em>
  ` : "";
  document.getElementById("componentDetail").textContent = selectedComponent ? `${selectedComponent.role}${getDeferredNote(state.selectedComponent)}` : "";
  document.getElementById("inspectionRoutes").innerHTML = inspectionRouteOrder.map((id) => {
    const item = inspectionRoutes[id];
    return `<button data-inspection-route="${id}" class="${id === state.inspectionMode ? "active" : ""}">
      <span>${item.title}</span>
      <strong>${item.status}</strong>
    </button>`;
  }).join("");
  document.getElementById("inspectionSummary").textContent = route.summary;
  document.getElementById("inspectionNext").textContent = route.next;
  document.getElementById("sanityGrid").innerHTML = sanityChecklist.map((item) => `
    <span>${item.label}</span>
    <strong title="${item.detail}">${item.status}</strong>
  `).join("");
  document.getElementById("deferredList").innerHTML = deferredComponentIds.map((id) => {
    const component = componentCatalog[id];
    return `<button data-component="${id}" class="${id === state.selectedComponent ? "active" : ""}">
      <span>${component.assembly}</span>
      <strong>${component.name}</strong>
    </button>`;
  }).join("");
  const help = {
    shifter: "Cabin view of a Mustang-style six-speed shifter with a white cue-ball knob, leather boot, trim ring, and reverse lockout.",
    linkage: "The selector rod chooses the gate. The shift rod then moves fore/aft to engage the gear within that gate.",
    cutaway: caseModeHelp[state.caseMode],
    clutch: state.clutch ? "Pedal pressed: the pressure plate moves away, the disc releases, and power flow is interrupted for shifting." : "Pedal released: the pressure plate clamps the clutch pack to the flywheel and power flows into the input shaft.",
  };
  document.getElementById("viewHelp").textContent = help[state.view];
  document.getElementById("labelsBtn").classList.toggle("active", state.labels);
  document.getElementById("cutawayBtn").classList.toggle("active", state.caseMode !== "case");
  document.getElementById("cutawayBtn").textContent = caseModeLabels[state.caseMode];
  document.getElementById("cutawayBtn").title = `Transmission display: ${caseModeLabels[state.caseMode]}`;
  document.getElementById("flowBtn").classList.toggle("active", state.flow);
  document.getElementById("clutchBtn").classList.toggle("active", state.clutch);
  document.getElementById("clutchBtn").classList.toggle("warn", state.clutch);
  document.getElementById("focusBtn").classList.toggle("active", state.focusSelected);
  document.querySelectorAll("[data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === state.view));
  document.querySelectorAll("[data-gear]").forEach((b) => b.classList.toggle("selected", b.dataset.gear === state.gear));
  document.querySelectorAll("[data-card-gear]").forEach((b) => b.classList.toggle("active", b.dataset.cardGear === state.gear));
  document.querySelectorAll("[data-step]").forEach((b) => b.classList.toggle("current", Number(b.dataset.step) === state.step));
  document.getElementById("playBtn").textContent = state.playing ? "Pause" : "Play";
}

function getDeferredNote(id) {
  const routeId = componentInspectionRoute[id];
  if (deeperInspectionLabels[id]) return ` ${deeperInspectionLabels[id]}.`;
  if (routeId && routeId !== "overview") return ` Route: ${inspectionRoutes[routeId].title}.`;
  return "";
}

function getInspectionStatus(id) {
  const routeId = componentInspectionRoute[id];
  if (routeId && routeId !== "overview") return `${inspectionRoutes[routeId].title} - ${inspectionRoutes[routeId].status}`;
  if (modeledNowIds.includes(id)) return state.focusSelected ? "Modeled now - focus isolate active" : "Modeled now - click Focus to isolate";
  if (simplifiedNowIds.includes(id)) return "Simplified now - marked for detailed close-up";
  if (deeperInspectionLabels[id]) return deeperInspectionLabels[id];
  return "Mapped teaching target";
}

function setInspectionMode(routeId) {
  if (!inspectionRoutes[routeId]) return;
  state.inspectionMode = routeId;
  if (routeId === "overview") {
    state.focusSelected = false;
    renderUi();
    return;
  }
  state.view = "cutaway";
  state.caseMode = routeId === "caseShell" ? "case" : "cutaway";
  state.cutaway = state.caseMode !== "case";
  state.focusSelected = true;
  state.targetOrbit = { ...cameraPresets.cutaway };
  renderUi();
}

function setSelectedComponent(id, route = true) {
  if (!componentCatalog[id]) return;
  state.selectedComponent = id;
  if (route && componentInspectionRoute[id]) {
    setInspectionMode(componentInspectionRoute[id]);
    return;
  }
  renderUi();
}

function showTooltip(id, clientX, clientY) {
  const component = componentCatalog[id];
  if (!component || !tooltip) return;
  tooltip.hidden = false;
  tooltip.innerHTML = `
    <span>${component.assembly}</span>
    <strong>${component.name}</strong>
    <em>${getInspectionStatus(id)}</em>
  `;
  moveTooltip(clientX, clientY);
}

function moveTooltip(clientX, clientY) {
  if (!tooltip || tooltip.hidden) return;
  const card = tooltip.parentElement.getBoundingClientRect();
  const x = Math.min(card.width - 18, Math.max(18, clientX - card.left + 14));
  const y = Math.min(card.height - 18, Math.max(18, clientY - card.top + 14));
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideTooltip() {
  if (!tooltip) return;
  tooltip.hidden = true;
}

function getActiveComponentIds() {
  const gearIds = gearComponentMap[state.gear] || [];
  const viewIds = state.view === "shifter"
    ? ["selectorRod", "shiftRod"]
    : state.view === "linkage"
      ? ["selectorRod", "shiftRod", "case"]
      : state.view === "clutch"
        ? ["bellhousing", "inputShaft"]
        : baseComponentIds;
  const routeIds = state.inspectionMode === "synchro" ? synchroCloseupIds : [];
  return [...new Set([...viewIds, ...gearIds, ...routeIds])];
}

function getGateStatus(g) {
  if (g.name === "N") return "Center";
  if (g.shifter.x < -1) return "Reverse gate";
  if (g.shifter.x < 0) return "1 / 2 gate";
  if (g.shifter.x < 1) return "3 / 4 gate";
  return "5 / 6 gate";
}

function getSelectorStatus(g) {
  if (g.name === "N") return "Centered";
  if (g.linkage.x < -1) return "Reverse lockout gate";
  if (g.linkage.x < -0.25) return "Left gate selected";
  if (g.linkage.x < 0.5) return "Center gate selected";
  return "Right gate selected";
}

function getShiftRodStatus(g) {
  if (g.name === "N") return "Centered";
  return g.linkage.z < 0 ? "Forward / top gear" : "Back / bottom gear";
}

function setView(view) {
  state.view = view;
  if (view !== "cutaway") {
    state.focusSelected = false;
    state.inspectionMode = "overview";
  }
  state.targetOrbit = { ...cameraPresets[view] };
  renderUi();
}

function shifterPoint(x, z, down = 0) {
  return { x, z, down };
}

function guidedGateMotion(previous, next) {
  const points = [shifterPoint(previous.x, previous.z, 0)];
  const sameGate = Math.abs(previous.x - next.x) < 0.08;
  if (Math.abs(previous.z) > 0.08) points.push(shifterPoint(previous.x, 0, 0));
  if (sameGate) {
    points.push(shifterPoint(next.x, next.z, 0));
    return points;
  }
  const direction = next.z < 0 ? -1 : 1;
  const xDelta = next.x - previous.x;
  points.push(shifterPoint(previous.x + xDelta * 0.28, direction * 0.12, 0));
  points.push(shifterPoint(previous.x + xDelta * 0.62, direction * 0.42, 0));
  points.push(shifterPoint(next.x, next.z, 0));
  return points;
}

function buildShifterMotion(previousGear, nextGear) {
  const previous = gearConfigs[previousGear]?.shifter || gearConfigs.N.shifter;
  const next = gearConfigs[nextGear].shifter;
  const neutral = shifterPoint(0, 0, 0);
  if (nextGear === "N") return [neutral];
  if (nextGear === "R") {
    return [
      shifterPoint(previous.x, previous.z, -0.35),
      shifterPoint(-1.65, 0, -0.35),
      shifterPoint(next.x, next.z, -0.35),
    ];
  }
  if (previousGear === "R" && nextGear === "1") {
    return [
      shifterPoint(-1.65, 0, 0),
      shifterPoint(-1.25, -0.12, 0),
      shifterPoint(-0.88, -0.45, 0),
      shifterPoint(next.x, next.z, 0),
    ];
  }
  return guidedGateMotion(previous, next);
}

let sequenceTimers = [];
function selectGear(g) {
  sequenceTimers.forEach((timer) => clearTimeout(timer));
  sequenceTimers = [];
  const previousGear = state.gear;
  const motion = buildShifterMotion(previousGear, g);
  state.previousGear = previousGear;
  state.gear = g;
  state.selectedComponent = primaryComponentByGear[g] || null;
  state.step = 0;
  state.clutch = true;
  state.shifterTarget = { ...motion[0] };
  renderUi();
  sequenceTimers.push(setTimeout(() => { state.step = 1; renderUi(); }, 180));
  motion.slice(1).forEach((target, index) => {
    sequenceTimers.push(setTimeout(() => {
      state.shifterTarget = { ...target };
      state.step = Math.min(2 + index, 4);
      renderUi();
    }, 360 + index * 360));
  });
  sequenceTimers.push(setTimeout(() => { state.step = 5; renderUi(); }, 1200));
  sequenceTimers.push(setTimeout(() => { state.step = 6; state.clutch = false; state.shifterTarget = { ...gearConfigs[g].shifter }; renderUi(); }, 1550));
}

document.getElementById("views").innerHTML = Object.entries(viewLabels).map(([id, label]) => `<button data-view="${id}">${label}</button>`).join("");
document.getElementById("gears").innerHTML = orderedGears.map((g) => `<button data-gear="${g}" class="${g === "N" ? "neutral" : ""}">${g}</button>`).join("");
document.getElementById("steps").innerHTML = timeline.map((t, i) => `<button data-step="${i}"><span>${i + 1}</span>${t}</button>`).join("");
document.getElementById("gearCards").innerHTML = stripGears.map((g) => {
  const config = gearConfigs[g];
  return `<button class="gear-card" data-card-gear="${g}">
    <span class="gear-name">${config.cardTitle}</span>
    <span class="gear-number">${g}</span>
    <span class="gear-copy">${config.cardBody}</span>
  </button>`;
}).join("");
labels.addEventListener("pointerdown", (e) => {
  const hotspotComponent = e.target.closest("[data-hotspot-component]")?.dataset.hotspotComponent;
  if (!hotspotComponent) return;
  e.preventDefault();
  e.stopPropagation();
  setSelectedComponent(hotspotComponent);
});
labels.addEventListener("pointerover", (e) => {
  const hotspotComponent = e.target.closest("[data-hotspot-component]")?.dataset.hotspotComponent;
  if (hotspotComponent) showTooltip(hotspotComponent, e.clientX, e.clientY);
});
labels.addEventListener("pointermove", (e) => {
  if (e.target.closest("[data-hotspot-component]")) moveTooltip(e.clientX, e.clientY);
});
labels.addEventListener("pointerout", (e) => {
  if (e.target.closest("[data-hotspot-component]") && !labels.contains(e.relatedTarget)) hideTooltip();
});
document.addEventListener("click", (e) => {
  const view = e.target.closest("[data-view]")?.dataset.view; if (view) setView(view);
  const gear = e.target.closest("[data-gear]")?.dataset.gear; if (gear) selectGear(gear);
  const cardGear = e.target.closest("[data-card-gear]")?.dataset.cardGear; if (cardGear) selectGear(cardGear);
  const inspectionRoute = e.target.closest("[data-inspection-route]")?.dataset.inspectionRoute; if (inspectionRoute) setInspectionMode(inspectionRoute);
  const hotspotComponent = e.target.closest("[data-hotspot-component]")?.dataset.hotspotComponent; if (hotspotComponent) setSelectedComponent(hotspotComponent);
  const component = e.target.closest("[data-component]")?.dataset.component; if (component) setSelectedComponent(component);
  const step = e.target.closest("[data-step]")?.dataset.step; if (step) { state.step = Number(step); renderUi(); }
});
document.getElementById("labelsBtn").onclick = () => { state.labels = !state.labels; renderUi(); };
document.getElementById("cutawayBtn").onclick = () => {
  const nextIndex = (caseModes.indexOf(state.caseMode) + 1) % caseModes.length;
  state.caseMode = caseModes[nextIndex];
  state.cutaway = state.caseMode !== "case";
  renderUi();
};
document.getElementById("flowBtn").onclick = () => { state.flow = !state.flow; renderUi(); };
document.getElementById("clutchBtn").onclick = () => { state.clutch = !state.clutch; renderUi(); };
document.getElementById("focusBtn").onclick = () => {
  state.focusSelected = !state.focusSelected;
  if (state.focusSelected && state.view !== "cutaway") {
    state.view = "cutaway";
    state.targetOrbit = { ...cameraPresets.cutaway };
  }
  renderUi();
};
document.getElementById("prevStep").onclick = () => { state.step = Math.max(0, state.step - 1); renderUi(); };
document.getElementById("nextStep").onclick = () => { state.step = (state.step + 1) % timeline.length; renderUi(); };
document.getElementById("resetBtn").onclick = () => { Object.assign(state, { gear: "N", previousGear: "N", step: 0, playing: false, clutch: false, focusSelected: false, inspectionMode: "overview", selectedComponent: primaryComponentByGear.N, shifterTarget: { ...gearConfigs.N.shifter }, targetOrbit: { ...cameraPresets[state.view] } }); renderUi(); };
document.getElementById("playBtn").onclick = () => { state.playing = !state.playing; renderUi(); };
setInterval(() => { if (state.playing) { state.step = (state.step + 1) % timeline.length; state.clutch = state.step < 2; renderUi(); } }, 1300);

let dragging = false, mode = "orbit", px = 0, py = 0;
canvas.addEventListener("pointerdown", (e) => { dragging = true; mode = e.shiftKey || e.button === 2 ? "pan" : "orbit"; px = e.clientX; py = e.clientY; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const dx = e.clientX - px, dy = e.clientY - py; px = e.clientX; py = e.clientY;
  if (mode === "pan") { state.orbit.panX -= dx * 0.008; state.orbit.panY += dy * 0.008; }
  else { state.orbit.yaw -= dx * 0.008; state.orbit.pitch = Math.max(-0.1, Math.min(1.3, state.orbit.pitch - dy * 0.006)); }
  state.targetOrbit = { ...state.orbit };
});
canvas.addEventListener("pointerup", () => { dragging = false; });
canvas.addEventListener("wheel", (e) => { e.preventDefault(); state.orbit.distance = Math.max(3.2, Math.min(9, state.orbit.distance + e.deltaY * 0.006)); state.targetOrbit = { ...state.orbit }; }, { passive: false });
canvas.addEventListener("contextmenu", (e) => e.preventDefault());

renderUi();
requestAnimationFrame(draw);
