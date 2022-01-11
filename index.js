// Code your solution in this file!
function distanceFromHqInBlocks(currentLocation) {
  let distanceInBlocks = Math.abs(currentLocation - 42);
  return distanceInBlocks;
}
function distanceFromHqInFeet(blocks) {
  let feetDistance = distanceFromHqInBlocks(blocks)
  return feetDistance * 264 
}
//can we or how could we refactor the above function into an arrow function