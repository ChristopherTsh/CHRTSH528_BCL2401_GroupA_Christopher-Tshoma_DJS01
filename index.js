/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
// Pick up an error with how the function below is called and make it robust to such errors
// Function to calculate new velocity
function calcNewVelocity(velocity, acceleration, time) {
  // Check if inputs are numbers, throw error if not
  if (
    typeof velocity !== "number" ||
    typeof acceleration !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error("only number are allowed, calcNewVel");
  }
  // Calculate and return new velocity
  return velocity + acceleration * time * (time / 1000);
}
function calcNewDistance(distance, velocity) {
  // Check if inputs are numbers, throw error if not
  if (typeof distance !== "number" || typeof velocity !== "number") {
    throw new Error("only number are allowed, calcNewDistance");
  }
  // Calculate and return new distance
  return distance + velocity;
}
function calcNewRemainingFuel(fuel, fuelBurnRate, time) {
  // Check if inputs are numbers, throw error if not
  if (
    typeof fuel !== "number" ||
    typeof fuelBurnRate !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error("only number are allowed, calcNewRemainingFuel");
  }
  // Calculate and return new remaining fuel
  return fuel - fuelBurnRate * time;
}
// Try block to test the functions
try {
  //  inputs
  const velocity = 10000; // velocity (km/h)
  const acceleration = 3; // acceleration (m/s^2)
  const time = 3600; // seconds (1 hour)
  const distance = 0; // distance (km)
  const fuel = 5000; // remaining fuel (kg)
  const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

  // Calculate new distance, remaining fuel, and velocity based on acceleration
  const newDistance = calcNewDistance(distance, velocity); //calculates new distance
  const remainingFuel = calcNewRemainingFuel(fuel, fuelBurnRate, time); // calculates remaining fuel
  const velocityBasedOnAcceleration = calcNewVelocity(
    velocity,
    acceleration,
    time
  ); //calculates new velocity based on acceleration
  // Output results to console
  console.log(`Corrected New Distance: ${newDistance} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
  console.log(`Corrected New Velocity: ${velocityBasedOnAcceleration} km/h`);
} catch (error) {
  // Catch any errors that occur during execution and log them
  console.error("Error:", error.message);
}
