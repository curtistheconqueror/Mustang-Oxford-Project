# Phase B Sanity Check

## Current Baseline
- Build version: `mt82-sanity-b1s4`
- Views: Shifter, Linkage, Transmission, Clutch
- Transmission display modes: Case, Cutaway, Exposed
- Interaction baseline: gear buttons, play/step controls, labels, flow, clutch, component map

## Modeled Now
- Aluminum case and front/rear housing masses
- Input shaft, output/mainshaft, countershaft, reverse idler shaft
- Reverse, 1st, 2nd, 3rd, 4th, 5th, and 6th gear pairs
- 1/2, 3/4, 5th/reverse, and 6th hub sleeve groups
- 1/2, 3/4, 5th/reverse, and 6th shift fork groups
- Selector rod, shift rod, clutch module, and power-flow indicators

## Simplified Now
- Helical teeth are approximated with repeated blocks.
- Synchronizer rings, dog teeth, keys, and springs are grouped under hub/sleeve targets.
- Case ribs, bolts, seals, bearings, and lubrication paths are represented as grouped deferred targets.
- Clutch/input interface is represented by the clutch module and input shaft connection.

## Deferred To Deeper Inspection
- Bearing sets
- Detent and interlock system
- Case ribs, bolts, and seals
- Oil passages and lubrication behavior
- Clutch/input spline, pilot support, and release hardware
- Synchronizer keys, springs, dog teeth, and cone/friction details

## Gear Mapping Check
- Reverse: reverse gear, reverse idler, 5th/reverse fork, 5th/reverse sleeve, blocking ring
- 1st/2nd: 1/2 fork, 1/2 sleeve, selected gear, blocking ring
- 3rd/4th: 3/4 fork, 3/4 sleeve, selected gear, blocking ring
- 5th: 5th/reverse fork, 5th/reverse sleeve, 5th gear, blocking ring
- 6th: 6th fork, 6th sleeve, 6th gear, blocking ring

## Phase C Readiness
- Component IDs are stable enough for first-pass hover/click targets.
- Repeated parts should remain grouped as teachable targets.
- Hidden or tiny details should use inspection markers or deeper inspection transitions instead of forced click targets.
