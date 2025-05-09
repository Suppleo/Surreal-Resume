// View rendering for the surreal gallery
export function renderLobby() {
  return `
        <div id="lobby-view">
            <div id="statue-area">
                <div class="statue-placeholder">👨‍💻</div>
            </div>
            <div id="tablet-area">
                <h2>Thach Nguyen Ngoc</h2>
                <div class="contact-info">
                    <p>📞 (+84) 914126815</p>
                    <p>📧 thachnguyen2004.work@gmail.com</p>
                    <p>🔗 <a href="https://www.linkedin.com/in/thach-nguyen-ngoc" target="_blank">LinkedIn</a> | 
                       <a href="https://github.com/Suppleo" target="_blank">GitHub</a></p>
                </div>
                <div class="about-me">
                    <p>I'm a technology enthusiast aiming to leverage tech for problem-solving and personal efficiency. 
                       I aspire to contribute to innovative projects and collaborate with skilled teams while staying 
                       current with the latest software development advancements.</p>
                    <div class="goals">
                        <p><strong>Short-term goal:</strong> Secure a tech internship for practical experience.</p>
                        <p><strong>Long-term objectives:</strong> Career growth and expanding mindset in the tech industry.</p>
                    </div>
                </div>
                <button id="test-modal" class="test-button">Test Modal</button>
            </div>
            <div id="lobby-room-access">
                <button class="room-access-point" data-room-id="education">🎓 Education</button>
                <button class="room-access-point" data-room-id="work-experience">💼 Work Experience</button>
                <button class="room-access-point" data-room-id="projects">🚀 Projects</button>
                <button class="room-access-point" data-room-id="awards">🏅 Awards & Certificates</button>
                <button class="room-access-point" data-room-id="technologies">🛠 Technologies & Languages</button>
                <button class="room-access-point" data-room-id="leadership">🌟 Leadership & Community</button>
            </div>
        </div>
    `;
}

export function renderRoom(roomId) {
  return `
        <div class="room-view room-view-${roomId}">
            <button id="back-button" class="back-button">← Back to Lobby</button>
            <div class="room-environment">
                <div class="room-objects">
                    <div class="interactive-object" data-object-id="object1">
                        <div class="object-placeholder">📚</div>
                    </div>
                    <div class="interactive-object" data-object-id="object2">
                        <div class="object-placeholder">📝</div>
                    </div>
                    <div class="interactive-object" data-object-id="object3">
                        <div class="object-placeholder">🏆</div>
                    </div>
                    <div class="interactive-object" data-object-id="object4">
                        <div class="object-placeholder">💡</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderView(state) {
  const app = document.getElementById("app");
  if (!app) {
    console.error("Could not find #app element");
    return;
  }
  // Clear current content
  app.innerHTML = "";
  if (state === "lobby") {
    app.innerHTML = renderLobby();
    // Add test modal button listener
    const testButton = document.getElementById("test-modal");
    if (testButton) {
      testButton.addEventListener("click", () => {
        console.log("Test modal button clicked");
        // Access modal directly from the imported module
        if (
          typeof window.modal !== "undefined" &&
          typeof window.modal.showModal === "function"
        ) {
          window.modal.showModal(
            "<h2>Test Modal</h2><p>This is some test content.</p>"
          );
        } else {
          console.error("Modal functionality not available");
          alert(
            "Modal system not properly initialized. Check console for details."
          );
        }
      });
    }
  } else if (state.startsWith("room:")) {
    const roomId = state.split(":")[1];
    app.innerHTML = renderRoom(roomId);
  } else {
    console.error("Unknown state:", state);
    app.innerHTML = "<p>Error: Unknown view state</p>";
  }
}
