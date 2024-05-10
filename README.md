# Debugging Guide: Calculations Made Easy

- Welcome to our debugging guide! We'll tackle those pesky calculation errors head-on.
- these steps will help you navigate the treacherous waters of math bugs.

## 1. Make the Code More Readable


- **Use Descriptive Variable Names**: Instead of `vel`, `acc`, and `t`, go for `velocity`, `acceleration`, and `time`. 

- **Add Comments**: Explain your intentions. A comment like `// Calculate new velocity` clarifies your purpose.

## 2. Pick Up Calculation Errors

Now, let's find bugs. We've got three functions to debug:

### `calcNewVelocity`

```javascript
function calcNewVelocity(velocity, acceleration, time) {
  if (
    typeof velocity !== "number" ||
    typeof acceleration !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error("Only numbers are allowed for calcNewVelocity");
  }
  return velocity + acceleration * time * (time / 1000);
}
```

- We check if all inputs are numbers. If not, we throw an error. No more accidental string concatenation disasters!

### `calcNewDistance`

```javascript
function calcNewDistance(distance, velocity) {
  if (typeof distance !== "number" || typeof velocity !== "number") {
    throw new Error("Only numbers are allowed for calcNewDistance");
  }
  return distance + velocity;
}
```

- Same drill: validate inputs. If they're not numbers, we raise the alarm.

### `calcNewRemainingFuel`

```javascript
function calcNewRemainingFuel(fuel, fuelBurnRate, time) {
  if (
    typeof fuel !== "number" ||
    typeof fuelBurnRate !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error("Only numbers are allowed for calcNewRemainingFuel");
  }
  return fuel - fuelBurnRate * time;
}
```

- You guessed it—more input checks. Safety first!

## 3. Make Calculations Robust

We're not stopping at error checks. Let's make our calculations rock-solid:

- **Handle Division by Zero**: If your `fuelBurnRate` is zero, we don't want the universe to implode. Throw an error instead.

- **Unit of Measurement Sanity**: Imagine someone enters fuel in bananas per second. Nope! We'll catch that and throw an error too.

## Testing Time

Now, let's test our functions. Buckle up, because we're about to calculate distances, fuel, and velocities like pros. 🚀

```javascript
try {
  const velocity = 10000; // velocity (km/h)
  const acceleration = 3; // acceleration (m/s^2)
  const time = 3600; // seconds (1 hour)
  const distance = 0; // distance (km)
  const fuel = 5000; // remaining fuel (kg)
  const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

  const newDistance = calcNewDistance(distance, velocity);
  const remainingFuel = calcNewRemainingFuel(fuel, fuelBurnRate, time);
  const velocityBasedOnAcceleration = calcNewVelocity(
    velocity,
    acceleration,
    time
  );

  console.log(`Corrected New Distance: ${newDistance} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
  console.log(`Corrected New Velocity: ${velocityBasedOnAcceleration} km/h`);
} catch (error) {
  console.error("Error:", error.message);
}
```

 Happy coding! 🤓🔍

---



#### Challenge Overview


![alt text](mars.gif)

