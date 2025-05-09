## **Surreal Art Gallery Website - Project Blueprint**

This blueprint outlines the steps required to build the frontend-only Surreal Art Gallery website according to the provided specifications. It follows an incremental and test-driven approach.

**Phase 1: Foundation & Core Structure**

1.  **Project Setup:**
    - Initialize Vite project with Vanilla JS template.
    - Set up basic file structure (`index.html`, `style.css`, `main.js`).
    - Install necessary dependencies (GSAP).
    - Basic `index.html` with a root element (`#app`).
    - Initial `style.css` for body/root styling (background, basic layout).
    - Basic `main.js` to import styles and verify setup (e.g., console log).
2.  **Core State Management/Routing:**
    - Implement a simple JavaScript module to manage the application's state (current view: 'lobby' or 'room:roomName').
    - Create functions to update the state and notify listeners.
    - Basic integration into `main.js`.
3.  **Basic View Rendering:**
    - Implement JavaScript functions to generate and insert HTML for the 'lobby' view and a generic 'room' view template into the `#app` element based on the current state.
    - Connect state changes from the router to trigger view rendering.

**Phase 2: Navigation & Core Content Display**

4.  **Lobby Implementation:**
    - Add specific HTML structure and CSS for the lobby layout (statue area, tablet area, room access points/placeholders).
    - Populate initial static content (brief description, contact info placeholder).
5.  **Room Template & Styling:**
    - Refine the generic 'room' view template with placeholders for background, objects, and back button.
    - Add CSS for basic room layout and visual structure (floating elements concept).
6.  **Basic Navigation Triggering:**
    - Implement JavaScript event listeners on lobby room access points/placeholders to trigger state changes (navigation to a specific room) using the state manager/router.
    - Implement a back button HTML/CSS structure and event listener within the room template to navigate back to the 'lobby' state.
7.  **Modal System Foundation:**
    - Add HTML structure for a universal modal overlay (hidden by default).
    - Implement JavaScript functions (`showModal`, `hideModal`) to control modal visibility and populate it with basic placeholder content.
8.  **Interactive Objects & Basic Interaction:**
    - Add HTML structures within the room template to represent interactive objects.
    - Implement JavaScript event listeners on these objects to trigger the `showModal` function.

**Phase 3: Data Integration & Content Population**

9.  **Content Data Structure:**
    - Define a clear JavaScript object/array structure to hold all text, image, and potentially video content for the lobby, rooms, and interactive objects.
    - Include links to assets (URLs).
10. **Content Loading & Display (Text Only):**
    - Modify the object click handler to retrieve content specific to the clicked object from the defined data structure.
    - Update the `showModal` function to populate the modal with this retrieved text content.

**Phase 4: Animation & Aesthetics**

11. **Basic GSAP Integration & View Transitions:**
    - Integrate GSAP into the project.
    - Implement smooth GSAP animations (fade, blur) when transitioning between the lobby and room views triggered by the state manager/router.
12. **Object Hover Effects:**
    - Implement subtle GSAP animations (e.g., light outline/glow) on interactive objects when hovered.
13. **Intro Animation:**
    - Create a separate HTML/CSS structure for the intro animation overlay.
    - Develop a GSAP timeline for the welcome animation sequence.
    - Implement JavaScript to play the animation on page load and then transition to the lobby view by hiding the intro overlay.

**Phase 5: Advanced Features & Refinements**

14. **Full Navigation Implementation:**
    - Implement the top-right navigation dropdown HTML/CSS.
    - Add JavaScript to toggle the dropdown visibility and link dropdown items to trigger room navigation via the state manager/router.
15. **Content Loading (Images/Media) & Error Handling:**
    - Update the content loading logic to handle different content types (images, videos - using simple HTML elements for now).
    - Implement error handling for asset loading (e.g., image `onerror`). Display placeholder images/elements if an asset fails to load.
    - Refine modal content population to handle different media types and use placeholders on error.
16. **Implement Specific Room Themes:**
    - Add unique CSS styles and potentially different HTML structures within the room template or via JS rendering logic to reflect the theme of each specified room.
    - Populate the content data structure with real content for all rooms.
17. **Refine Modal Designs:**
    - Add unique CSS styles and potentially different GSAP animations for the modal appearance and transitions, customized for each room's theme.
18. **Performance Optimizations:**
    - Implement basic asset caching (e.g., preloading critical lobby assets).
    - Implement lazy loading for images within rooms (e.g., using `loading="lazy"` attribute or a simple Intersection Observer).
    - Review GSAP animations for performance (`will-change`, optimization best practices).
19. **Analytics Integration:**
    - Integrate the Google Analytics script into `index.html`.
    - Add JavaScript calls to trigger basic analytics events (page views/state changes, object clicks) at appropriate points in the navigation and interaction logic.
20. **Cross-Browser & Basic Responsiveness Check:**
    - Test the website on major browsers.
    - Perform basic checks on different desktop screen sizes to ensure minimal layout issues, even though it's desktop-first.

**Phase 6: Testing, Refinement & Deployment Prep**

21. **Comprehensive Testing:**
    - Perform thorough testing of navigation, object interactions, modal functionality, and animations across supported browsers.
    - Test asset loading error handling.
    - Test basic performance metrics.
22. **Code Review & Refactoring:**
    - Clean up code, add comments, improve structure.
23. **Final Content Population:**
    - Ensure all resume content is accurately integrated into the data structure.
24. **Build & Deployment:**
    - Use Vite to create a production build.
    - Prepare assets for CDN delivery (if applicable).

---

## **Iterative Chunks**

Breaking down the blueprint into larger, manageable chunks that build upon each other:

1.  **Core Setup & Routing:** Project initialization, basic HTML/CSS/JS structure, implementing the simple state management/routing logic. (Blueprint Steps 1-3)
2.  **Lobby & Basic Navigation:** Building the lobby structure, implementing placeholder navigation links, and the back button functionality. (Blueprint Steps 4, 6)
3.  **Modal & Basic Interaction:** Setting up the universal modal, adding interactive object placeholders in rooms, wiring object clicks to open the empty modal. (Blueprint Steps 7-8)
4.  **Content Data & Basic Display:** Defining the content data structure and integrating it to populate the modal with text content when objects are clicked. (Blueprint Steps 9-10)
5.  **Core Animations:** Implementing GSAP-driven transitions between views (lobby/room) and object hover effects. (Blueprint Steps 11-12)
6.  **Intro Animation:** Building and integrating the welcome animation sequence. (Blueprint Step 13)
7.  **Full Navigation Implementation:** Building and integrating the top-right dropdown navigation. (Blueprint Step 14)
8.  **Asset Loading & Error Handling:** Enhancing content loading to include images/media and adding robust error handling with placeholders. (Blueprint Step 15)
9.  **Room & Modal Theming:** Implementing the unique visual themes for each room and their corresponding modals, populating all rooms with content. (Blueprint Steps 16-17)
10. **Performance & Analytics:** Implementing performance optimizations (caching, lazy loading) and integrating Google Analytics. (Blueprint Steps 18-19)
11. **Testing & Refinement:** Cross-browser testing, layout checks, performance testing, user testing (if applicable), code review, final content verification. (Blueprint Steps 20-24)

---

## **Detailed, Small Steps for Code Generation Prompts**

Here is the breakdown into small, testable steps, presented as prompts for a code-generation LLM. Each step includes the context from the previous step, the goal, files involved, and the required integration/wiring.

---

### Prompt 1: Project Setup and Basic Structure

```text
You are a code-generation LLM. Your task is to implement the first small step of building the Surreal Art Gallery website using Vanilla JS, GSAP, and Vite, following a test-driven approach.

**Goal:** Set up the basic Vite project structure and create the foundational HTML, CSS, and JS files. Establish the main entry point and root element.

**Previous State:** No project exists yet.

**Current Step:**
1.  Initialize a new Vite project using the vanilla-js template (`npm create vite@latest`).
2.  Name the project appropriately (e.g., `surreal-gallery`).
3.  Navigate into the project directory.
4.  Install initial dependencies: GSAP (`npm install gsap`).
5.  In `index.html`, ensure there is a `<div id="app"></div>` element inside the `<body>`. Add a basic `<title>`. Link the `style.css` and the `main.js` script (as a module).
6.  In `style.css`, add some basic global styles (e.g., `body { margin: 0; overflow: hidden; font-family: sans-serif; background: #000; color: #fff; }`, `#app { width: 100vw; height: 100vh; }`).
7.  In `main.js`, add a simple `console.log('Gallery starting...');` to verify execution. Import the `./style.css`.
8.  Add a basic test command to `package.json` (e.g., using `vite build`).

**Files to Modify/Create:**
- `package.json`
- `index.html`
- `style.css`
- `main.js`
- `vite.config.js` (standard vite output)

**Wiring:** Ensure `index.html` correctly links to `style.css` and `main.js`. Ensure `main.js` imports `style.css`. Ensure Vite can build the project (`npm run build`).

**Test:** Run `npm install` and `npm run dev`. Check the browser console for the "Gallery starting..." message and verify the basic body styles are applied. Run `npm run build` to ensure the build process works without errors.
```

### Prompt 2: Implement Simple State Management/Router

```text
You are a code-generation LLM. Building on the previous step where we set up the basic Vite project structure, HTML, CSS, and JS entry point, your task is to create a simple JavaScript module to manage the application's view state.

**Goal:** Implement a basic state management system that tracks the current view (e.g., 'lobby', 'room:education', 'room:work-experience').

**Previous State:** We have a basic Vite project running with `index.html`, `style.css`, and `main.js`. `main.js` currently only logs a message.

**Current Step:**
1.  Create a new file `src/router.js`.
2.  Inside `router.js`, define a simple variable to hold the current state (e.g., `let currentState = 'lobby';`).
3.  Export a function `getCurrentState()` that returns the current state.
4.  Export a function `MapsTo(newState)` that updates `currentState` and logs the state change to the console (e.g., `console.log('Navigating to:', newState);`). This function should validate that `newState` is in a valid format (e.g., 'lobby' or starts with 'room:').
5.  Export a function `subscribe(callback)` that stores a callback function. When the state changes, all subscribed callbacks should be called with the new state. (A simple array of callbacks will suffice).
6.  Modify `MapsTo` to call all subscribed callbacks after updating the state.
7.  In `main.js`, import the `router` module.
8.  Subscribe to state changes from `main.js` using a simple console log callback: `router.subscribe(state => console.log('State changed:', state));`.
9.  Add a test call in `main.js` after the initial subscription to navigate to a different state (e.g., `router.navigateTo('room:test');`) to verify the subscription works.

**Files to Modify/Create:**
- `src/router.js`
- `src/main.js`

**Wiring:** `main.js` must import and use functions from `router.js`. The `MapsTo` function must trigger the subscribed callbacks.

**Test:** Run `npm run dev`. Open the browser console. You should see the initial "Gallery starting...", the "Navigating to: room:test" log from `router.js`, and the "State changed: room:test" log from the subscriber in `main.js`.
```

### Prompt 3: Basic View Rendering Structure

```text
You are a code-generation LLM. Building on the previous step where we implemented a simple state management/router module, your task is to add functions to render basic HTML structures for the 'lobby' and a generic 'room' view based on the router's state.

**Goal:** Create JavaScript functions that generate and insert the HTML for the lobby and a generic room into the main `#app` element, driven by the state changes from the router.

**Previous State:** We have a router module that manages state and notifies subscribers of changes. `main.js` subscribes and logs state changes. The `#app` div is empty.

**Current Step:**
1.  In `src/main.js`, remove the test `router.navigateTo('room:test');` call for now.
2.  Create a new file `src/views.js`.
3.  Inside `src/views.js`, define and export a function `renderView(state)`. This function will take the current state string as input.
4.  Inside `renderView`:
    * Get the `#app` element.
    * Clear the current content of `#app`.
    * Use a conditional structure (if/else if/else or switch) based on the `state`.
    * If state is 'lobby', generate a simple HTML string for the lobby (e.g., `<h1>Lobby</h1><p>Welcome to the gallery.</p><div id="room-links"></div>`). Insert this string into `#app` using `innerHTML`.
    * If state starts with 'room:', extract the room ID (e.g., `state.split(':')[1]`). Generate a simple HTML string for a generic room (e.g., `<h1>Room: ${roomId}</h1><button id="back-button">Back</button><div id="object-placeholders"></div>`). Insert this string into `#app`.
    * Add a fallback or console error for unknown states.
5.  In `src/main.js`, modify the router subscription callback to call `renderView(state)` instead of just logging.
6.  After setting up the subscription in `main.js`, add an initial call to render the starting state: `renderView(router.getCurrentState());` (which should be 'lobby').

**Files to Modify/Create:**
- `src/router.js` (no change, just clarification on state format)
- `src/main.js`
- `src/views.js`

**Wiring:** The router subscription in `main.js` must call `renderView` from `src/views.js`. `renderView` must manipulate the `#app` element.

**Test:** Run `npm run dev`. The browser should display "Lobby" and "Welcome to the gallery." Check the HTML structure in the browser's developer tools to confirm the lobby HTML is inside `#app`. Manually call `router.navigateTo('room:education');` in the browser console and verify the view switches to "Room: education" with the back button and object placeholders.
```

### Prompt 4: Implement Specific Lobby HTML and CSS

```text
You are a code-generation LLM. Building on the previous step where we created basic rendering logic for lobby and rooms, your task is to add the specific HTML structure and CSS for the lobby view as described in the specification.

**Goal:** Replace the placeholder lobby HTML with the actual structure for the main lobby, including areas for the statue, tablet, and room access points. Add corresponding CSS for basic layout and visual representation.

**Previous State:** The `renderView` function in `src/views.js` generates simple placeholder HTML for the lobby. Basic global CSS is in `style.css`.

**Current Step:**
1.  In `src/views.js`, update the HTML string generated for the 'lobby' state. Create divs or semantic elements for:
    * A main lobby container (`#lobby-view`)
    * An area for the statue (`#statue-area`)
    * An area for the tablet/description (`#tablet-area`)
    * A container for room navigation links/objects (`#lobby-room-access`)
    * Inside `#tablet-area`, add placeholders for name, description, and contact info (e.g., `<p>Creator: [Name]</p><p>Goals: [Brief]</p><p>Contact: [Info]</p>`).
    * Inside `#lobby-room-access`, add placeholder `div` or `button` elements for each specified room (Education, Work Experience, Projects, etc.), perhaps with a class like `room-access-point` and a data attribute like `data-room-id="education"`.
2.  Create a new CSS file `src/styles/lobby.css`.
3.  Add CSS rules in `lobby.css` to style the elements created for the lobby. Focus on:
    * Layout using Flexbox or Grid for `#lobby-view` to arrange statue, tablet, and room access areas.
    * Basic dimensions and background for these areas (even if just colored boxes for now).
    * Basic styling for `room-access-point` elements to make them visible and distinct (e.g., border, padding).
4.  In `src/main.js`, import `src/styles/lobby.css`.

**Files to Modify/Create:**
- `src/views.js`
- `src/styles/lobby.css`
- `src/main.js`

**Wiring:** `renderView` must use the new, detailed lobby HTML structure. `main.js` must import `lobby.css`. The CSS rules must target the HTML elements generated by `renderView`.

**Test:** Run `npm run dev`. The browser should now show the more detailed structure for the lobby with distinct areas for statue, tablet, and room access points, styled by the new CSS. Verify the placeholder text and room access points are visible.
```

### Prompt 5: Implement Room HTML Template and Basic Styling

```text
You are a code-generation LLM. Building on the previous step where we detailed the lobby structure and styling, your task is to create a more specific HTML template for a generic room and add basic CSS for its layout.

**Goal:** Refine the generic room HTML generated by `renderView` to include specific areas for the room's background/environment, interactive objects, and the back button. Add basic CSS for the room layout.

**Previous State:** `renderView` generates simple placeholder HTML for rooms. Basic global and lobby-specific CSS exist.

**Current Step:**
1.  In `src/views.js`, update the HTML string generated for the 'room:' state. Create divs or semantic elements for:
    * A main room container (`.room-view`, perhaps with a class reflecting the room ID like `.room-view-education`)
    * An area for the room's visual environment/background (`.room-environment`)
    * A container for interactive objects (`.room-objects`)
    * The back button (`#back-button`, place it logically, e.g., top-left).
    * Inside `.room-objects`, add several placeholder `div` elements with a class like `interactive-object` and a data attribute like `data-object-id="object1"`.
2.  Create a new CSS file `src/styles/room.css`.
3.  Add CSS rules in `room.css` to style the elements created for the room template. Focus on:
    * Layout for `.room-view` (e.g., full screen).
    * Styling for `.room-environment` (e.g., background color or placeholder image background).
    * Layout for `.room-objects` (e.g., using absolute positioning within the environment or Flexbox/Grid depending on desired initial layout).
    * Basic dimensions and appearance for `.interactive-object` placeholders (e.g., colored squares/circles).
    * Styling for `#back-button` (positioning, basic appearance).
4.  In `src/main.js`, import `src/styles/room.css`.

**Files to Modify/Create:**
- `src/views.js`
- `src/styles/room.css`
- `src/main.js`

**Wiring:** The `renderView` function must use the new, detailed room HTML structure when rendering a room state. `main.js` must import `room.css`. The CSS rules must target the HTML elements generated by `renderView`.

**Test:** Run `npm run dev`. Manually trigger navigation to a room state (e.g., `router.navigateTo('room:projects');`) in the browser console. Verify the view switches to the room template, showing the back button and the interactive object placeholders, styled by the new CSS. Verify the specific room class (`.room-view-projects`) is applied correctly.
```

### Prompt 6: Implement Basic Navigation Triggering

```text
You are a code-generation LLM. Building on the previous step where we added structure and styling for both lobby and room templates, your task is to implement the JavaScript logic to trigger navigation between these views by clicking on the respective HTML elements.

**Goal:** Add event listeners to the room access points in the lobby and the back button in the room template to use the router for navigation.

**Previous State:** `renderView` generates HTML for lobby and rooms. The lobby has placeholder elements with `data-room-id`. Rooms have a `#back-button`. The router works but is only triggered manually via console.

**Current Step:**
1.  In `src/views.js`, refactor `renderView` slightly. Instead of just inserting HTML, create separate functions, e.g., `renderLobby()` and `renderRoom(roomId)`. Each function should return the generated HTML *string*. Modify `renderView` to call the appropriate function and set `innerHTML`.
2.  In `src/main.js`, modify the router subscription callback (`handleStateChange`). After calling `renderView(state)`, this function needs to add event listeners to the newly rendered elements.
3.  Inside `handleStateChange`:
    * If the state is 'lobby':
        * Find all elements with the class `room-access-point`.
        * Loop through them and add a click event listener to each.
        * When clicked, prevent the default action (if they were `<a>` tags). Get the `data-room-id` attribute value. Call `router.navigateTo('room:' + roomId);`.
    * If the state starts with 'room:':
        * Find the element with the ID `#back-button`.
        * Add a click event listener to it.
        * When clicked, call `router.navigateTo('lobby');`.
4.  Ensure event listeners are attached *after* the new HTML is inserted into the DOM. Consider using event delegation on `#app` if listeners need to persist across view changes, but for this step, attaching directly after `innerHTML` is acceptable for simplicity.

**Files to Modify/Create:**
- `src/views.js`
- `src/main.js`
- `src/router.js` (no change needed)

**Wiring:** The `handleStateChange` function in `main.js` must find the relevant elements *after* rendering and attach the correct event listeners that call `router.navigateTo`.

**Test:** Run `npm run dev`. Click on the room access point placeholders in the lobby. Verify the view changes to the corresponding room template. Click the back button in the room. Verify the view changes back to the lobby. Use the browser's developer tools to ensure event listeners are correctly attached.
```

### Prompt 7: Implement Universal Modal System

```text
You are a code-generation LLM. Building on the previous step where we implemented navigation between lobby and room views, your task is to create a reusable modal system that can be shown or hidden and accept dynamic content.

**Goal:** Add the HTML structure for a modal overlay that covers the screen, and JavaScript functions to control its visibility.

**Previous State:** We can navigate between lobby and generic room views. Rooms have interactive object placeholders, but clicking them does nothing yet.

**Current Step:**
1.  In `index.html`, add the HTML structure for the modal outside of the `#app` element, but within the `<body>`. This ensures it overlays everything. Structure should include:
    * A main modal overlay container (`#modal-overlay`) with a class like `modal-hidden` initially.
    * Inside the overlay, a modal content container (`#modal-content`).
    * Inside `#modal-content`, an area for content (`#modal-body`) and a close button (`#modal-close`).
2.  Create a new CSS file `src/styles/modal.css`.
3.  Add CSS rules in `modal.css` for the modal:
    * Style `#modal-overlay` to be fixed position, full screen (top, left, right, bottom 0), high z-index, with a semi-transparent background. Set `display: none;` or `visibility: hidden; opacity: 0;` for the `modal-hidden` class and `display: block;` or `visibility: visible; opacity: 1;` for an active class (`modal-visible`). Use a transition for opacity.
    * Style `#modal-content` to be centered (Flexbox or absolute positioning with transforms), with a background color, padding, max-width, max-height (allowing scrolling if needed), and a subtle shadow/border.
    * Style `#modal-close` (positioning, appearance - e.g., an 'X' icon or button).
    * Style `#modal-body` to handle content overflow (e.g., `overflow-y: auto;`).
4.  Create a new file `src/modal.js`.
5.  Inside `src/modal.js`, export functions:
    * `initModal()`: Finds the modal elements (`#modal-overlay`, `#modal-content`, `#modal-close`) and stores references. Adds an event listener to `#modal-close` and `#modal-overlay` (clicking the overlay can also close the modal) to call `hideModal()`.
    * `showModal(contentHTML)`: Takes an HTML string, puts it inside `#modal-body`, and removes the `modal-hidden` class (or adds `modal-visible`) to show the modal overlay.
    * `hideModal()`: Adds the `modal-hidden` class back to the modal overlay to hide it. Clears the content of `#modal-body`.
6.  In `src/main.js`, import `src/styles/modal.css` and `src/modal.js`. Call `modal.initModal()` when the application starts (e.g., at the end of `main.js`).

**Files to Modify/Create:**
- `index.html`
- `src/styles/modal.css`
- `src/modal.js`
- `src/main.js`

**Wiring:** `index.html` needs the modal structure. `main.js` initializes the modal module. `modal.js` handles showing/hiding and adding event listeners. CSS styles the modal based on its classes.

**Test:** Run `npm run dev`. The modal should be hidden. Open the browser console and call `modal.showModal('<h2>Test Modal</h2><p>This is some test content.</p>');`. Verify the modal appears with the content and has a semi-transparent overlay. Click the close button or the overlay. Verify the modal hides and its content is cleared.
```

### Prompt 8: Implement Object Click -> Show Empty Modal

```text
You are a code-generation LLM. Building on the previous step where we created a functional, hidden modal system, your task is to connect the interactive object placeholders in the rooms to trigger this modal when clicked.

**Goal:** Add event listeners to the interactive object placeholders within the room view to call the `showModal` function from the modal module.

**Previous State:** `renderView` generates room HTML with elements having the class `interactive-object`. A functional `modal.js` module with `showModal` and `hideModal` exists and is initialized.

**Current Step:**
1.  In `src/main.js`, modify the router subscription callback (`handleStateChange`). Inside the block that handles 'room:' states, *after* rendering the room HTML, add logic to find all elements with the class `interactive-object`.
2.  Loop through these interactive objects. Add a click event listener to each one.
3.  Inside the click listener for an interactive object:
    * Get the `data-object-id` attribute value. (This will be used later to fetch content, but for now, just log it).
    * Call `modal.showModal('Loading content...');` or a similar temporary message.
4.  Ensure these event listeners are attached *after* the room HTML is inserted into the DOM.

**Files to Modify/Create:**
- `src/main.js`
- `src/views.js` (no change, object placeholders are already there)
- `src/modal.js` (no change, `showModal` already exists)

**Wiring:** The room rendering logic in `main.js` must find the objects and attach click listeners that call `modal.showModal`.

**Test:** Run `npm run dev`. Navigate to a room view (either manually via console or by clicking a lobby link if those handlers were fully implemented previously). Click on one of the interactive object placeholders. Verify the modal appears with the placeholder content ("Loading content..."). Close the modal. Repeat for other objects.
```

### Prompt 9: Define Content Data Structure

```text
You are a code-generation LLM. Building on the previous step where clicking room objects opens the modal with placeholder text, your task is to define the JavaScript structure that will hold all the content for the gallery.

**Goal:** Create a JavaScript object that defines the structure for housing content related to the lobby, each room, and the interactive objects within those rooms.

**Previous State:** Clicking interactive objects shows the modal with generic text. We need a structured way to store the actual content.

**Current Step:**
1.  Create a new file `src/content-data.js`.
2.  Inside `src/content-data.js`, export a constant JavaScript object (e.g., `galleryData`).
3.  Structure `galleryData` to include:
    * A `lobby` object with properties for:
        * `statueDescription`: Text content for the tablet.
        * `creatorName`, `creatorGoals`, `contactInfo`: Specific text fields.
        * `roomLinks`: An array of objects, where each object represents a room accessible from the lobby. Each room link object should have properties like `id` (e.g., 'education', 'work-experience'), `label` (e.g., 'Education'), and perhaps `position` or visual cues (placeholder for now).
    * A `rooms` object, where keys are the room IDs (e.g., 'education', 'work-experience', 'projects', etc.). Each room object should have properties for:
        * `name`: Display name of the room.
        * `description`: Optional room intro text.
        * `environment`: Placeholder for visual/theming data (e.g., background image URL, theme class name).
        * `objects`: An array of objects, where each object represents an interactive item in the room. Each object should have properties like `id` (e.g., 'diploma-1', 'job-exp-c1'), `position` (placeholder coordinates/description), and crucially, `content`:
            * The `content` property should be an object or array allowing for different types of content (text, image, video). For this step, make it an object with a `type` property ('text', 'image', 'video') and a `value` property (the actual text, URL, or video embed code/URL). Add a `title` for the modal header.
4.  Populate `galleryData` with placeholder data mirroring this structure for at least one room (e.g., 'education') and a couple of objects within it, including placeholder content of different types (`text`, `image`, `video`).

**Files to Modify/Create:**
- `src/content-data.js`

**Wiring:** This file defines the structure and holds the data, but does not interact with other parts of the application yet.

**Test:** No runtime test for this step alone. Mentally review the `src/content-data.js` file to ensure the structure is logical and includes placeholders for all necessary content types and room/object properties.
```

### Prompt 10: Integrate Data into Lobby Rendering and Object Interaction

```text
You are a code-generation LLM. Building on the previous step where we defined the structure for the gallery content data, your task is to integrate this data into the lobby rendering and the object click handling logic.

**Goal:** Use the `galleryData` object to populate the lobby's dynamic content (tablet info, room links) and to provide the actual content displayed in the modal when an object is clicked.

**Previous State:** We have `src/content-data.js` with a defined structure and placeholder content. The lobby uses hardcoded placeholders. Clicking objects shows a generic "Loading..." modal.

**Current Step:**
1.  In `src/main.js`, import `galleryData` from `src/content-data.js`.
2.  In `src/views.js`, modify the `renderLobby()` function:
    * Instead of hardcoded placeholder text, use data from `galleryData.lobby` to populate the statue description, creator info, and contact info in the `#tablet-area`.
    * Modify the loop that creates `room-access-point` elements in `#lobby-room-access`. Iterate over `galleryData.lobby.roomLinks`. For each link object, create a `div` or `button` with the `room-access-point` class, the `data-room-id` set to the link's `id`, and display the link's `label`.
3.  In `src/main.js`, modify the router subscription callback (`handleStateChange`). Inside the 'room:' state handling block:
    * In the interactive object click listener, retrieve the `data-object-id`.
    * Use the current `roomId` (extracted from the state) and the `objectId` to find the correct content object within `galleryData.rooms[roomId].objects`.
    * Get the `content` and `title` from the found object data.
    * Format the content based on its `type` ('text', 'image', 'video') into an HTML string suitable for the modal body. For images, use an `<img>` tag with the `value` as `src`. For text, just use the `value`. For video, embed using an appropriate tag (e.g., `<video>` or `<iframe>` for embeds, depending on the value format).
    * Call `modal.showModal('<h2>${objectTitle}</h2>' + formattedContentHTML);`.

**Files to Modify/Create:**
- `src/main.js`
- `src/views.js`
- `src/content-data.js` (ensure it has data structure as planned)
- `src/modal.js` (no change needed, it accepts HTML)

**Wiring:** `views.js` and `main.js` must import and use `galleryData`. Lobby rendering must pull text and room link data. Object click handlers must find and format the correct content from `galleryData` before calling `modal.showModal`.

**Test:** Run `npm run dev`. The lobby should now display the actual text and room link labels from `content-data.js`. Navigate to the room you populated with test data. Click on an interactive object. Verify the modal opens and displays the title and the correct content (text, image, or video placeholder) from `content-data.js` for that specific object.
```

### Prompt 11: Implement GSAP for Basic Room Transitions

```text
You are a code-generation LLM. Building on the previous step where we integrated content data and can display it in the modal, your task is to add smooth animations using GSAP when transitioning between the lobby and room views.

**Goal:** Use GSAP to create fade and potential blur effects during view transitions (lobby to room and room to lobby).

**Previous State:** Views switch instantly when navigating via router. GSAP is installed but not used.

**Current Step:**
1.  In `src/main.js`, import GSAP: `import { gsap } from 'gsap';`.
2.  Modify the `handleStateChange` function in `main.js`. Instead of immediately clearing `#app` and rendering the new view:
    * Get the current view element (if any, e.g., `#app > div`).
    * Start a GSAP timeline or use `gsap.to()` to animate the *current* view out (e.g., `opacity: 0`, maybe `filter: 'blur(10px)'`).
    * In the `onComplete` callback of the outgoing animation, then clear the old HTML from `#app`, render the *new* view HTML using `renderView`, and immediately animate the new view in (e.g., `opacity: 1`, `filter: 'blur(0px)'`). Ensure the new view element is initially hidden or has `opacity: 0` before animating in.
    * Handle the initial render case (no old view to animate out).
3.  Update the CSS in `src/styles/lobby.css` and `src/styles/room.css` to ensure the main view containers (e.g., `#lobby-view`, `.room-view`) have an initial `opacity: 0` when rendered, so GSAP can fade them in.
4.  Consider adding a short delay or using `position: absolute` temporarily during the transition to avoid layout shifts as the old element is removed and the new one is added.

**Files to Modify/Create:**
- `src/main.js`
- `src/views.js` (potentially add a class to the main view container)
- `src/styles/lobby.css`
- `src/styles/room.css`

**Wiring:** The `handleStateChange` function must orchestrate the GSAP animations, rendering, and element removal/addition. CSS must support the initial hidden state for the fade-in.

**Test:** Run `npm run dev`. Navigate between the lobby and a room (using clicks or console). Observe the smooth fade/blur transition between the views instead of an instant swap. Ensure there are no visual glitches during the transition.
```

### Prompt 12: Implement GSAP for Object Hover Effects

```text
You are a code-generation LLM. Building on the previous step where we added smooth view transitions with GSAP, your task is to add subtle visual effects to the interactive objects in rooms when the user hovers over them, also using GSAP.

**Goal:** Implement a subtle 'light outline' or glow effect on interactive objects in the room views when the mouse hovers over them, animated with GSAP.

**Previous State:** Interactive objects are present in the room HTML template and trigger modals on click. They have basic CSS styling. View transitions are animated with GSAP.

**Current Step:**
1.  In `src/main.js`, modify the `handleStateChange` function. Inside the 'room:' state handling block, *after* finding the `interactive-object` elements and adding click listeners, add `mouseenter` and `mouseleave` event listeners to each interactive object.
2.  Inside the `mouseenter` listener: Use `gsap.to()` to animate the object's appearance. A common technique for glow/outline is animating a `box-shadow` or applying a filter/pseudo-element animation. Start with a simple animation like a slight scale increase or a change in opacity/color to represent the "light outline" concept. For a true outline, consider animating a `border` or using a `filter: glow()` (less common, often requires SVGs or complex CSS) or animating a pseudo-element's size/opacity. Let's start simple with a subtle scale and a faint box-shadow.
3.  Inside the `mouseleave` listener: Use `gsap.to()` to animate the object back to its original state.
4.  Ensure these listeners are added *after* the room HTML is rendered.
5.  In `src/styles/room.css`, add initial styles for the interactive objects that support the planned animation (e.g., a subtle initial `box-shadow: 0 0 0px rgba(255,255,255,0);`).

**Files to Modify/Create:**
- `src/main.js`
- `src/styles/room.css`
- `src/views.js` (no change needed)

**Wiring:** The room rendering logic in `main.js` must find the objects and attach `mouseenter`/`mouseleave` listeners that trigger GSAP tweens. CSS provides the base styles for the animation.

**Test:** Run `npm run dev`. Navigate to a room. Hover the mouse cursor over the interactive object placeholders. Observe a subtle visual change (e.g., slight scale, faint glow) while hovering. When the cursor leaves, the object should smoothly return to its original appearance.
```

### Prompt 13: Implement Intro Animation Sequence

```text
You are a code-generation LLM. Building on the previous step where we added object hover animations, your task is to create and implement the welcome/intro animation that plays when the user first visits the site.

**Goal:** Create a full-screen overlay for the intro sequence, design a simple animation using GSAP timelines, and play it on page load before revealing the main lobby view.

**Previous State:** The application starts directly in the lobby view after a potential initial fade-in. GSAP is used for view transitions and object hovers.

**Current Step:**
1.  In `index.html`, add a new full-screen HTML element *before* `#app` (e.g., `<div id="intro-overlay">`). This overlay should cover the entire viewport initially.
2.  Create a new CSS file `src/styles/intro.css`.
3.  Add CSS rules in `intro.css` to style `#intro-overlay`:
    * Position it fixed, full screen, high z-index.
    * Set a background color or style consistent with the gallery's aesthetic.
    * Add placeholder elements for the animation sequence (e.g., text elements for title, creator name, or simple shapes/lines that will be animated).
4.  In `src/main.js`, import `src/styles/intro.css`.
5.  Modify `src/main.js`. After `initModal()`, before calling `renderView(router.getCurrentState())`, add a function `playIntroAnimation()`.
6.  Inside `playIntroAnimation()`:
    * Get the `#intro-overlay` element and any child elements you want to animate.
    * Create a GSAP timeline (`gsap.timeline()`).
    * Add steps to the timeline to animate the placeholder elements (e.g., fade in text, move shapes, etc.) to create a short welcome sequence. Keep it visually consistent with the gallery theme.
    * As the *last* step in the timeline, add a callback (`onComplete`) that:
        * Calls `renderView(router.getCurrentState());` to render the lobby *behind* the overlay.
        * Animates `#intro-overlay` to fade out (`opacity: 0`).
        * Once the overlay fade out is complete (`onComplete` of the fade out tween), set `display: none;` or remove the element from the DOM to ensure it doesn't block interaction.
7.  Call `playIntroAnimation()` at the very end of `main.js` (or immediately after essential setup) instead of directly rendering the lobby.

**Files to Modify/Create:**
- `index.html`
- `src/styles/intro.css`
- `src/main.js`

**Wiring:** `index.html` needs the overlay. `main.js` imports the CSS and JS logic. The GSAP timeline in `main.js` must animate the overlay elements and then transition to showing the lobby.

**Test:** Run `npm run dev`. When the page loads, the intro overlay should appear and the GSAP animation should play. After the animation finishes, the overlay should fade out, revealing the animated transition into the lobby view. Refresh the page to re-test.
```

### Prompt 14: Implement Full Navigation (Dropdown and Back Button Wiring)

```text
You are a code-generation LLM. Building on the previous step where we added the intro animation, your task is to fully implement the top-right navigation dropdown and ensure the back button is correctly wired and visible only in rooms.

**Goal:** Create the HTML and CSS for the navigation dropdown, add JavaScript to toggle its visibility, and wire its links (along with the back button) to the router. Ensure the back button's visibility is managed correctly.

**Previous State:** Basic navigation triggering exists for lobby-to-room links and the back button within the room template (handled in `handleStateChange`), but the visual dropdown doesn't exist, and back button visibility isn't managed dynamically.

**Current Step:**
1.  In `index.html`, add the HTML structure for the navigation dropdown (e.g., a fixed element in the top-right corner, containing a button/icon to toggle, and a hidden list of room links) *outside* of `#app`, but ideally within the body or a main layout container. Use classes like `nav-dropdown`, `dropdown-button`, `dropdown-menu`, `menu-item`.
2.  Create a new CSS file `src/styles/navigation.css`.
3.  Add CSS rules in `navigation.css`:
    * Style the fixed top-right positioning of the `nav-dropdown`.
    * Style the `dropdown-button` (minimal, subtle).
    * Style the `dropdown-menu` (initially hidden using `display: none`, `visibility: hidden`, or `max-height: 0` with `overflow: hidden`), with background, padding, border/shadow.
    * Style `menu-item` links.
    * Add a class (e.g., `dropdown-visible`) to show the menu when the button is clicked. Use a transition for smooth reveal if using opacity/max-height.
    * Add CSS for the `#back-button` to position it correctly (e.g., top-left) and set its initial state (e.g., `display: none;`).
4.  In `src/main.js`, import `src/styles/navigation.css`.
5.  Create a new file `src/navigation.js`.
6.  Inside `src/navigation.js`, export functions:
    * `initNavigation(roomLinks)`: Takes an array of room links (from `galleryData.lobby.roomLinks`). Finds the dropdown elements. Populates the `dropdown-menu` with `menu-item` HTML for each room link, setting their `data-room-id`. Adds a click listener to the `dropdown-button` to toggle the `dropdown-visible` class on the `dropdown-menu`. Add click listeners to each `menu-item` to call `router.navigateTo('room:' + roomId)` and also hide the dropdown. Adds a click listener to the `#back-button`.
    * `updateNavigation(currentState)`: Takes the current state string. Finds the `#back-button`. If the state is 'lobby', hide the back button (`display: none;`). If the state is 'room:', show the back button (`display: block;`).
7.  In `src/main.js`:
    * Call `navigation.initNavigation(galleryData.lobby.roomLinks)` after `initModal` and before starting the intro animation.
    * Modify the router subscription callback (`handleStateChange`). In addition to rendering the view and adding object listeners, call `navigation.updateNavigation(state)`.
    * Update the back button click listener in `handleStateChange` to call a function exported from `navigation.js` (e.g., `navigation.handleBackButtonClick()`) which in turn calls `router.navigateTo('lobby');`. This centralizes navigation logic slightly. Or, just keep the router call directly in `handleStateChange` if preferred for now. Let's keep it in `handleStateChange` for now to minimize changes in this step, but acknowledge `navigation.js` could handle it. Ensure the back button listener is re-attached *after* the room view is rendered.

**Files to Modify/Create:**
- `index.html`
- `src/styles/navigation.css`
- `src/navigation.js`
- `src/main.js`

**Wiring:** `index.html` needs the dropdown structure. `main.js` imports CSS and `navigation.js`, initializes navigation, and updates it via the router subscription. `navigation.js` handles dropdown and back button visibility/listeners.

**Test:** Run `npm run dev`. The navigation dropdown button should be visible in the top-right. Clicking it should toggle the dropdown menu populated with room links from your data. Clicking a room link in the dropdown should navigate to that room (with animation). Once in a room, the back arrow should appear. Clicking the back arrow should navigate back to the lobby. The back arrow should disappear in the lobby.
```

### Prompt 15: Implement Asset Loading and Error Handling

```text
You are a code-generation LLM. Building on the previous step where navigation is fully functional, your task is to improve how assets (specifically images for now) are loaded and handle cases where they fail to load gracefully by showing placeholder images.

**Goal:** Modify the content loading logic to handle images asynchronously and display a generic placeholder image if an image fails to load from its source URL.

**Previous State:** The modal attempts to display images using `<img>` tags directly, which might break if the URL is bad or the image is unavailable.

**Current Step:**
1.  Create a placeholder image (a small grey square or similar) or use a data URL for a simple placeholder. Save it in your project (e.g., `src/assets/placeholder.png`).
2.  Create a new file `src/assetLoader.js`.
3.  Inside `src/assetLoader.js`, export an asynchronous function `loadImage(imageUrl, altText = '')`.
4.  Inside `loadImage`:
    * Create a new `Image` object (`const img = new Image();`).
    * Set the `alt` attribute (`img.alt = altText;`).
    * Return a new Promise.
    * Inside the Promise, set up `img.onload` and `img.onerror` handlers.
    * On `onload`, resolve the Promise with the `img` element.
    * On `onerror`, log an error to the console (`console.error('Failed to load image:', imageUrl);`). Create a new `Image` object for the placeholder, set its `src` to the placeholder image path/data URL, and resolve the Promise with this placeholder image element.
    * Finally, set `img.src = imageUrl;` to start loading.
5.  In `src/main.js`, import `loadImage` from `src/assetLoader.js`.
6.  Modify the router subscription callback (`handleStateChange`). Inside the 'room:' state handling, when handling an object click:
    * When the content type is 'image', use the asynchronous `loadImage` function to load the image URL from `galleryData`.
    * Since `loadImage` is async, the object click handler might need to be `async`. Use `await loadImage(...)`.
    * While the image is loading, you could show a "Loading Image..." message in the modal, or just wait for the promise to resolve (which might temporarily block the UI depending on implementation). A better approach for this step is to update the modal *after* the promise resolves.
    * Modify `modal.showModal` or create a new function `modal.updateModalBody(contentElement)` that specifically updates the content *after* the modal is shown.
    * So, the click handler would: get data, show modal with title and "Loading...", then `await loadImage`, then call `modal.updateModalBody` with the loaded image element (or placeholder).
7.  Update `src/content-data.js` to use a URL for an image asset in at least one object, including one intentionally bad URL to test the error handling.

**Files to Modify/Create:**
- `src/assetLoader.js`
- `src/main.js`
- `src/content-data.js`
- `src/modal.js` (add `updateModalBody` function)
- `src/assets/placeholder.png` (or use a data URL directly in `assetLoader.js`)

**Wiring:** `main.js` uses `assetLoader.js`. Object click handlers now use `loadImage` for image content. `modal.js` needs a way to update content after initial display. The placeholder image must be accessible.

**Test:** Run `npm run dev`. Navigate to the room and click an object with an image asset URL. Verify the image loads and appears in the modal. Modify the data to use a bad image URL for another object. Click that object and verify the placeholder image is displayed in the modal instead of a broken image icon, and an error is logged in the console.
```

### Prompt 16: Implement Specific Room Themes (CSS)

```text
You are a code-generation LLM. Building on the previous step where asset loading is more robust, your task is to implement the unique visual themes for each room using CSS, based on the room's ID.

**Goal:** Create distinct CSS styles for each room's environment and possibly object containers to match the specified themes (Education, Work Experience, Projects, etc.).

**Previous State:** All rooms use the same generic room template structure and basic styling from `src/styles/room.css`. Room data includes a placeholder for `environment` or theme info.

**Current Step:**
1.  In `src/styles/room.css`, add specific CSS rules targeting the room view container based on its room ID class (e.g., `.room-view-education`, `.room-view-work-experience`).
2.  For each room theme specified in the requirements:
    * Add background styles (color, image, gradient) to the `.room-environment` element within that specific room class.
    * Adjust layout properties or add theme-specific elements within the room container if needed to match the floating/cosmic/library/office concepts. For example, position object containers differently or add decorative background elements unique to the theme.
    * Add basic styling for the interactive objects *within* that room's theme class if their base appearance should differ slightly (e.g., different placeholder color or shape per room, building on the base `.interactive-object` styles).
3.  Review the `galleryData.rooms` structure in `src/content-data.js`. Ensure each room object has necessary data points to inform the CSS (e.g., a `themeClass` property matching the CSS class name, or direct CSS properties if preferred, though classes are cleaner).
4.  In `src/views.js`, when rendering a room, ensure the main room container element (`.room-view`) gets the appropriate theme class based on the room ID (e.g., `<div class="room-view room-view-${roomId}">...</div>`).

**Files to Modify/Create:**
- `src/styles/room.css`
- `src/content-data.js`
- `src/views.js`

**Wiring:** `views.js` must add the theme class to the room container based on data. `room.css` must contain specific rules for each theme class. `content-data.js` should inform which theme class applies to which room ID.

**Test:** Run `npm run dev`. Navigate to each different room using the navigation links/dropdown. Verify that each room has a distinctly styled environment and basic layout that reflects its specified theme (e.g., Education looks like a library placeholder, Work Experience like an office placeholder, etc.).
```

### Prompt 17: Refine Modal Designs Per Room

```text
You are a code-generation LLM. Building on the previous step where each room has a distinct visual theme, your task is to make the modal's appearance and animation unique when it opens from within different rooms.

**Goal:** Apply theme-specific styling and potentially animation variations to the universal modal based on the theme of the room it was opened from.

**Previous State:** The modal has a universal style defined in `modal.css`. Rooms have distinct CSS themes applied via classes.

**Current Step:**
1.  In `src/modal.js`, when `showModal` is called (or just before showing it in `main.js`), determine the current room's theme (e.g., by accessing the state from the router or passing the theme class/ID as an argument).
2.  Add the current room's theme class (e.g., `modal-from-education`, `modal-from-work-experience`) as a class to the `#modal-overlay` or `#modal-content` element *before* showing the modal.
3.  In `src/styles/modal.css`, add CSS rules that target the modal elements *only when* they have a specific theme class ancestor or modifier class (e.g., `.modal-from-education #modal-content`, `.modal-from-work-experience #modal-close`).
4.  For each room theme:
    * Modify the modal's background, border, colors, or font styles within that theme's rule set.
    * (Optional, more advanced) If using GSAP for modal animation (currently just opacity/display), adjust the GSAP timeline or tweens in `modal.js` based on the current room theme to create variations in the opening animation (e.g., different duration, easing, or subtle movement based on theme). For this step, focus on CSS styling variations first.
5.  Ensure the theme class is removed from the modal elements when `hideModal` is called.

**Files to Modify/Create:**
- `src/modal.js`
- `src/styles/modal.css`
- `src/main.js` (to pass theme info to modal, or modal accesses router state)
- `src/content-data.js` (ensure theme info is accessible)

**Wiring:** The modal system needs access to the current room's theme. CSS rules need to be specific to modal elements combined with room theme classes. The theme class must be applied/removed dynamically when showing/hiding the modal.

**Test:** Run `npm run dev`. Navigate to different themed rooms. Click an object in each room. Verify that the modal opens with different visual styling (background, colors, fonts, etc.) depending on which room you opened it from.
```

### Prompt 18: Implement Performance Optimizations (Caching/Lazy Loading)

```text
You are a code-generation LLM. Building on the previous step where modals have room-specific styling, your task is to implement basic performance optimizations: asset caching and lazy loading for images.

**Goal:** Ensure critical lobby assets load quickly (caching concept) and large images within rooms are only loaded when needed (lazy loading).

**Previous State:** Images are loaded using the `assetLoader`, but without explicit caching strategy beyond browser defaults, and all images in a room's data might attempt to load when the room is rendered/data is processed, regardless of whether the object is clicked.

**Current Step:**
1.  **Caching Concept (Code Side):** The `assetLoader.js` already provides a form of caching via the browser's built-in image cache when using `new Image()`. To reinforce this, you can add a simple in-memory cache *within* `assetLoader.js`. Create a `const imageCache = new Map();`. Before creating a `new Image()`, check if the `imageUrl` is in `imageCache`. If yes, return the cached Promise or the already loaded image element. If not, proceed as before, but store the Promise (or the resolved image element) in the cache before returning it. This prevents redundant `loadImage` calls for the same URL.
2.  **Lazy Loading (Images):** Modify the modal content generation in `src/main.js` (inside the object click handler). When formatting the HTML for an image (`<img>` tag):
    * Add the `loading="lazy"` attribute to the `<img>` tag. This is the simplest, modern way to implement lazy loading. It's a browser hint.
    * *(Alternative/Fallback if targeting older browsers, but prioritize native):* For more control or fallback, you could initially set the `<img>` src to a placeholder or data URL and store the actual URL in a `data-src` attribute. Then, use an `IntersectionObserver` (potentially in `assetLoader.js` or a separate utility) to detect when the image is entering the viewport and swap `data-src` into `src`. For this step, stick to the native `loading="lazy"`.
3.  Review `galleryData.js`. Ensure image URLs are realistic paths or URLs where you can test loading behavior.

**Files to Modify/Create:**
- `src/assetLoader.js`
- `src/main.js` (where modal content HTML is formatted)
- `src/content-data.js` (review image URLs)

**Wiring:** `assetLoader.js` implements the in-memory cache. The image HTML generation in `main.js` must add the `loading="lazy"` attribute.

**Test:**
* **Caching:** Load the site, navigate to a room with an image. Click the object to load it. Navigate away, then navigate back to the same room and click the same object. Observe network requests in browser dev tools – the second load of the same image should be faster or show a cache hit.
* **Lazy Loading:** Add several large placeholder images to one room's data. Load the room. Scroll down if necessary to see objects initially off-screen. Open browser dev tools Network tab and filter for images. Scroll the room view. Observe that the images only start downloading as they approach/enter the viewport, rather than all at once when the room loads.
```

### Prompt 19: Integrate Google Analytics Stub

```text
You are a code-generation LLM. Building on the previous step where performance optimizations were added, your task is to integrate the Google Analytics tracking script and add placeholder JavaScript functions for tracking events.

**Goal:** Add the Google Analytics global site tag to the HTML and create JavaScript functions that represent tracking specific user interactions (room navigation, object clicks), although these functions will initially just log to the console instead of sending data.

**Previous State:** Performance optimizations are implemented. No analytics code is present.

**Current Step:**
1.  Obtain the standard Google Analytics 4 (GA4) global site tag (gtag.js) snippet.
2.  In `index.html`, add the gtag.js script snippet within the `<head>` tags as instructed by Google Analytics. Replace the placeholder `GA_MEASUREMENT_ID` with a dummy ID or a comment indicating where the actual ID goes.
3.  Create a new file `src/analytics.js`.
4.  Inside `src/analytics.js`, export the following placeholder functions:
    * `trackPageView(pagePath, pageTitle)`: Should log `console.log('GA Event: page_view', { page_path: pagePath, page_title: pageTitle });`.
    * `trackEvent(eventName, eventParams = {})`: Should log `console.log('GA Event:', eventName, eventParams);`.
    * Add a note/comment indicating that in a real implementation, these would call `gtag('event', ...)` or `gtag('config', ...)` after ensuring the GA script is loaded.
5.  In `src/main.js`, import `src/analytics.js`.
6.  Call `analytics.trackPageView('/lobby', 'Lobby View')` after the intro animation finishes and the lobby is revealed.
7.  In the router subscription callback (`handleStateChange`), after rendering a new view (lobby or room), call `analytics.trackPageView` with the appropriate path (e.g., `/room/${roomId}`) and a relevant title.
8.  In the object click handler in `main.js`, just before showing the modal, call `analytics.trackEvent('object_click', { object_id: objectId, room_id: currentRoomId });`.

**Files to Modify/Create:**
- `index.html`
- `src/analytics.js`
- `src/main.js`

**Wiring:** The GA script is added to HTML. `main.js` imports and calls the stub analytics functions at key interaction points (page views/state changes, object clicks). `analytics.js` contains the placeholder logging logic.

**Test:** Run `npm run dev`. Open the browser console. Navigate through the lobby and into different rooms. Click on interactive objects. Observe console log messages indicating `page_view` and `object_click` events are being triggered with relevant data. The actual GA network requests will not be sent yet, but the logic is in place.
```

### Prompt 20: Implement Remaining Room Themes (CSS and Data)

```text
You are a code-generation LLM. Building on the previous step where basic analytics tracking stubs are in place, your task is to fully implement the visual themes and content for all remaining rooms specified in the requirements.

**Goal:** Add the unique CSS styling for all specified room themes and populate the `content-data.js` file with realistic (or placeholder) content for every room and its interactive objects.

**Previous State:** One or two room themes might have basic CSS styles. `content-data.js` has placeholder data for maybe one room.

**Current Step:**
1.  In `src/content-data.js`, add the required structure and populate it with content for all remaining specified rooms:
    * Work Experience
    * Projects
    * Awards & Certificates
    * Technologies and Languages
    * Leadership and Community Engagement
    * For each room, define interactive objects with placeholder content (text, image URLs). Ensure each object has an `id`, `title`, and `content` (`type` and `value`).
    * Ensure each room object has a `themeClass` property that will correspond to a CSS class.
2.  In `src/styles/room.css`, add specific CSS rules for the main room container classes (`.room-view-work-experience`, `.room-view-projects`, etc.) and elements within them (`.room-environment`, `.room-objects`, `.interactive-object`) to implement the visual theme for each room as described in the specification. This includes backgrounds, layout adjustments, object appearance variations, etc.
3.  In `src/styles/modal.css`, add theme-specific CSS rules for the modal (`.modal-from-work-experience #modal-content`, etc.) if unique modal styling per room was planned in Step 17 and not fully completed.
4.  Review `src/views.js` and `src/main.js` to ensure they correctly handle any room ID present in `galleryData.rooms` when rendering and attaching event listeners. The current implementation should be generic enough if based on iterating through `galleryData.rooms` and using data attributes.

**Files to Modify/Create:**
- `src/content-data.js`
- `src/styles/room.css`
- `src/styles/modal.css` (if needed)

**Wiring:** `content-data.js` provides the complete structure and data. `room.css` and `modal.css` provide the styling that targets rooms and modals based on the data-driven theme classes. The existing rendering and event handling logic should automatically pick up the new rooms and data.

**Test:** Run `npm run dev`. Use the navigation dropdown to visit *every* room listed in the specification. Verify that each room loads, displays its unique visual theme via CSS, and contains interactive object placeholders based on the data. Click objects in each room and verify the modal opens with content (even if placeholder) relevant to that object from `content-data.js`, and the modal has room-specific styling.
```

### Prompt 21: Cross-Browser and Basic Responsiveness Check

```text
You are a code-generation LLM. Building on the previous step where all room themes and content are integrated, your task is to perform initial cross-browser checks and ensure the layout holds up reasonably well on different desktop screen sizes.

**Goal:** Identify and fix CSS or JavaScript issues that cause layout problems or broken functionality in different major browsers or when resizing the browser window on a desktop. *This step involves testing and fixing, not adding new features.*

**Previous State:** All features specified so far are implemented based on Chrome/primary browser development.

**Current Step:**
1.  **Testing:**
    * Open the project (`npm run dev` or a local build) in Chrome, Firefox, Safari, and Edge on a desktop operating system.
    * Go through the entire user journey in each browser: intro animation, lobby navigation, room navigation, object clicks, modal interaction, back button, dropdown.
    * Resize the browser window on your desktop significantly (both narrower/shorter and wider/taller) and observe how the layout responds. While not a full mobile responsiveness pass, ensure elements don't overlap drastically or disappear unexpectedly on common desktop aspect ratios.
    * Pay close attention to GSAP animations and CSS properties that might behave differently (e.g., filters, blend modes, specific flexbox/grid behaviors).
2.  **Fixing:**
    * Based on testing, identify specific CSS rules or JavaScript logic that cause inconsistencies.
    * Adjust CSS properties, add vendor prefixes if necessary (though Vite/PostCSS often handle this, double-check), or refactor layout approaches (e.g., switch from absolute positioning to Flexbox/Grid if layout breaks easily).
    * If JavaScript interactions are broken in a specific browser, investigate potential API differences or event handling variations.
    * Focus on making the *desktop* experience consistent across the target browsers and reasonably stable on resize.

**Files to Modify:**
- Primarily CSS files (`style.css`, `lobby.css`, `room.css`, `modal.css`, `navigation.css`, `intro.css`)
- Potentially JS files (`main.js`, `views.js`, `modal.js`, `navigation.js`, `assetLoader.js`) if behavior differences are JS-related.

**Wiring:** This step is about refining existing code based on testing results. No new features are wired in.

**Test:** Repeat the testing steps from point 1. Verify that the layout and functionality are consistent and visually acceptable across all target browsers and during desktop window resizing. Note down any remaining minor inconsistencies as potential future improvements.
```

### Prompt 22: Code Review and Refactoring

```text
You are a code-generation LLM. Building on the previous step where initial cross-browser layout issues were addressed, your task is to perform a code review and refactoring pass to improve code quality, readability, and maintainability.

**Goal:** Clean up the codebase, ensure consistent coding style, add comments, and refactor any areas that have become overly complex or repetitive during the incremental development process.

**Previous State:** All core features are implemented and checked for basic cross-browser compatibility. The codebase might have some technical debt from incremental additions.

**Current Step:**
1.  Review all JavaScript files (`main.js`, `router.js`, `views.js`, `modal.js`, `navigation.js`, `assetLoader.js`, `analytics.js`, `content-data.js`).
    * Ensure consistent variable naming, function naming, and formatting.
    * Add comments to explain complex logic, functions, or sections.
    * Look for duplicated code that could be extracted into utility functions or modules.
    * Ensure proper scope management and avoid global variables where possible.
    * Review event listener management – are listeners being added and removed correctly if views are constantly re-rendered? (Our current approach re-attaches them, which is okay for this structure, but consider if event delegation on `#app` would be cleaner for some). Stick to the current re-attachment if it works, but ensure it's robust.
2.  Review all CSS files (`style.css`, `lobby.css`, `room.css`, `modal.css`, `navigation.css`, `intro.css`).
    * Ensure consistent class naming (e.g., BEM, utility-first mixed with components).
    * Organize CSS rules logically (e.g., by component, by theme).
    * Add comments to explain complex selectors or styling choices.
    * Remove any unused or redundant styles.
    * Look for opportunities to use CSS variables for consistent colors, spacing, etc.
3.  Review `index.html`.
    * Ensure semantic HTML is used where appropriate.
    * Check for proper indentation and structure.
    * Add comments for main sections.
4.  Review `package.json`.
    * Ensure scripts are clear.
    * Check dependencies.

**Files to Modify:** All project files.

**Wiring:** This step is internal code improvement. No new functional wiring is added. The existing wiring should remain intact and ideally become clearer.

**Test:** Run `npm run dev` and test all features again. Ensure that no functionality was broken during refactoring. The
```
