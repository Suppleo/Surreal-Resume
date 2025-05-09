// Simple state management for the surreal gallery
let currentState = "lobby";
const subscribers = [];

// Get the current state
export function getCurrentState() {
  return currentState;
}

// Navigate to a new state
export function MapsTo(newState) {
  // Validate state format
  if (newState !== "lobby" && !newState.startsWith("room:")) {
    console.error(
      'Invalid state format. Must be "lobby" or start with "room:"'
    );
    return;
  }

  // Update state and log change
  console.log("Navigating to:", newState);
  currentState = newState;

  // Notify all subscribers
  subscribers.forEach((callback) => callback(currentState));
}

// Subscribe to state changes
export function subscribe(callback) {
  if (typeof callback === "function") {
    subscribers.push(callback);
  }
}
