// Main entry point for the Surreal Art Gallery app
console.log("Gallery starting...");

// Import styles
import "./style.css";
import "./styles/lobby.css";
import "./styles/room.css";
import "./styles/modal.css";

// Import router and views
import * as router from "./router";
import { renderView } from "./views";
import * as modal from "./modal";

// Initialize modal system first
console.log("Initializing modal system...");
modal.initModal();

// Expose router and modal to global scope for testing
window.router = router;
window.modal = modal;

function handleStateChange(state) {
  renderView(state);
  if (state === "lobby") {
    // Add click listeners to room access points
    const accessPoints = document.querySelectorAll(".room-access-point");
    accessPoints.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const roomId = btn.getAttribute("data-room-id");
        if (roomId) {
          router.MapsTo("room:" + roomId);
        }
      });
    });
  } else if (state.startsWith("room:")) {
    // Add click listener to back button
    const backBtn = document.getElementById("back-button");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        router.MapsTo("lobby");
      });
    }

    // Add click listeners to interactive objects
    const interactiveObjects = document.querySelectorAll(".interactive-object");
    interactiveObjects.forEach((obj) => {
      obj.addEventListener("click", () => {
        const objectId = obj.getAttribute("data-object-id");
        console.log("Interactive object clicked:", objectId);
        modal.showModal(`
          <h2>Object: ${objectId}</h2>
          <p>Loading content...</p>
        `);
      });
    });
  }
}

// Subscribe to state changes and render view
router.subscribe(handleStateChange);

// Render initial view and initialize modal again after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  handleStateChange(router.getCurrentState());
  // Reinitialize modal system to ensure it's properly set up after DOM is loaded
  modal.initModal();
});

// Render initial view (in case DOMContentLoaded already fired)
handleStateChange(router.getCurrentState());

// Main app logic will be added here
