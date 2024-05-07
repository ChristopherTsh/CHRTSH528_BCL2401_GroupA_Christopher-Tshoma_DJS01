/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(velocity, acceleration, time)  { 
  if(typeof velocity !== 'number' || typeof acceleration !== 'number'|| typeof time !== 'number' ){
    throw new Error('only number are allowed, calcNewVel');
  }
  return velocity + (acceleration*time)*(time/1000)
}
function calcNewDistance(distance , velocity){
  if (typeof distance!== 'number' ||typeof velocity !== 'number'){
    throw new Error('only number are allowed, calcNewDistance');
  }
  return distance + velocity
}
function calcNewRemainingFuel(fuel,fuelBurnRate,time){
  if (typeof fuel !== 'number' ||typeof fuelBurnRate !== 'number'||typeof time !== 'number'){
    throw new Error('only number are allowed, calcNewRemainingFuel')
}
return fuel-(fuelBurnRate*time)
}
try{

  const velocity = 10000; // velocity (km/h)
  const acceleration = 3; // acceleration (m/s^2)
  const time = 3600; // seconds (1 hour)
  const distance = 0; // distance (km)
  const fuel = 5000; // remaining fuel (kg)
  const fuelBurnRate = 0.5; // fuel burn rate (kg/s)
  
  
  const newDistance = calcNewDistance(distance , velocity) //36 000 000 calculates new distance
  const remainingFuel = calcNewRemainingFuel(fuel,fuelBurnRate,time)  //1 800 calculates remaining fuel
  const velocityBasedOnAcceleration = calcNewVel(velocity, acceleration, time) //calculates new velocity based on acceleration

console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
console.log(`Corrected New Velocity: ${velocityBasedOnAcceleration} km/h`);
} catch(error){
  console.error('Error:',error.message)
}








