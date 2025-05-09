# Surreal Art Gallery Website - To-Do Checklist

This document serves as a checklist for building the frontend-only Surreal Art Gallery website. It follows the detailed blueprint and steps, encouraging incremental progress and testing.

---

## **Phase 1: Foundation & Core Structure**

### **Step 1: Project Setup and Basic Structure**

- [x] Initialize new Vite project with vanilla-js template (`npm create vite@latest surreal-gallery`)
- [x] Navigate into project directory (`cd surreal-gallery`)
- [x] Install GSAP (`npm install gsap`)
- [x] Ensure `index.html` has `<div id="app"></div>` and links `style.css` and `main.js` (as module)
- [x] Add basic global styles to `style.css` (body, #app)
- [x] Add console log in `main.js` and import `style.css`
- [x] Add a basic build script to `package.json`
- [x] **Test:** Run `npm install`, `npm run dev`. Check console for message, verify basic styles. Run `npm run build`.

### **Step 2: Implement Simple State Management/Router**

- [x] Create `src/router.js`
- [x] Define and export `getCurrentState` function
- [x] Define and export `MapsTo(newState)` function (with basic format validation and console log)
- [x] Define and export `subscribe(callback)` function
- [x] Modify `MapsTo` to call subscribed callbacks
- [x] Import `router.js` into `main.js`
- [x] Subscribe a console log callback to the router in `main.js`
- [x] Add a test `router.navigateTo('room:test')` call in `main.js`
- [x] **Test:** Run `npm run dev`. Check console for state change logs from both `MapsTo` and the subscriber.

### **Step 3: Basic View Rendering Structure**

- [x] Remove test `router.navigateTo('room:test')` from `main.js`
- [x] Create `src/views.js`
- [x] Define and export `renderView(state)` in `views.js`
- [x] Implement logic in `renderView` to clear `#app` and insert placeholder HTML string based on state ('lobby' vs 'room:')
- [x] Import `views.js` into `main.js`
- [x] Modify the router subscription callback in `main.js` to call `renderView(state)`
- [x] Add initial call to `renderView(router.getCurrentState())` in `main.js`
- [x] **Test:** Run `npm run dev`. Verify lobby placeholder appears. Manually call `router.navigateTo('room:education')` in console and verify room placeholder appears.

---

## **Phase 2: Navigation & Core Content Display**

### **Step 4: Implement Specific Lobby HTML and CSS**

- [x] Update lobby HTML string in `src/views.js` with detailed structure (#lobby-view, #statue-area, #tablet-area, #lobby-room-access)
- [x] Add placeholder text for tablet area (name, goals, contact)
- [x] Add placeholder `div`s/`button`s for room access points with `room-access-point` class and `data-room-id`
- [x] Create `src/styles/lobby.css`
- [x] Add CSS rules in `lobby.css` for lobby layout and placeholder elements
- [x] Import `lobby.css` into `main.js`
- [x] **Test:** Run `npm run dev`. Verify detailed lobby structure and styling are visible.

### **Step 5: Implement Room HTML Template and Basic Styling**

- [x] Update room HTML string in `src/views.js` with detailed structure (.room-view, .room-environment, .room-objects, #back-button)
- [x] Add placeholder `div`s for interactive objects with `interactive-object` class and `data-object-id`
- [x] Create `src/styles/room.css`
- [x] Add CSS rules in `room.css` for room layout, environment, objects, and back button placeholders
- [x] Import `room.css` into `main.js`
- [x] **Test:** Manually call `router.navigateTo('room:projects')`. Verify detailed room structure and styling are visible with back button and object placeholders.

### **Step 6: Implement Basic Navigation Triggering**

- [x] Refactor `renderView` in `src/views.js` into `renderLobby()` and `renderRoom(roomId)` functions returning HTML strings
- [x] Modify `handleStateChange` in `main.js` to find `room-access-point` elements after rendering lobby
- [x] Add click listeners to `room-access-point` elements to get `data-room-id` and call `router.navigateTo('room:' + roomId)`
- [x] Modify `handleStateChange` to find `#back-button` after rendering room
- [x] Add click listener to `#back-button` to call `router.navigateTo('lobby')`
- [x] **Test:** Run `npm run dev`. Click lobby room access points – verify navigation to rooms. Click back button in rooms – verify navigation back to lobby.

### **Step 7: Implement Universal Modal System**

- [x] Add modal HTML structure (`#modal-overlay`, `#modal-content`, `#modal-body`, `#modal-close`) to `index.html` outside `#app`
- [x] Create `src/styles/modal.css`
- [x] Add CSS rules in `modal.css` for modal positioning, appearance, and hidden/visible states (`modal-hidden`, `modal-visible`)
- [x] Create `src/modal.js`
- [x] Define and export `initModal()` in `modal.js` to find elements and add close listeners (close button, overlay click)
- [x] Define and export `showModal(contentHTML)` in `modal.js` to populate content and show modal
- [x] Define and export `hideModal()` in `modal.js` to hide modal and clear content
- [x] Import `modal.css` and `modal.js` into `main.js`
- [x] Call `modal.initModal()` in `main.js` on app start
- [x] **Test:** Run `npm run dev`. Modal should be hidden. Call `modal.showModal('Test')` in console, verify modal appears. Click close/overlay, verify modal hides.

### **Step 8: Implement Object Click -> Show Empty Modal**

- [x] Modify `handleStateChange` in `main.js` (inside 'room:' block) to find `interactive-object` elements after rendering
- [x] Add click listeners to `interactive-object` elements
- [x] Inside object click listener, call `modal.showModal('Loading content...')`
- [x] **Test:** Navigate to a room. Click an object placeholder. Verify the modal appears with "Loading content...".

---

## **Phase 3: Data Integration & Content Population**

### **Step 9: Define Content Data Structure**

- [ ] Create `src/content-data.js`
- [ ] Define and export `const galleryData = {...}` object
- [ ] Structure `galleryData` with `lobby` (statue, tablet, roomLinks) and `rooms` objects
- [ ] Structure `rooms` with room IDs as keys, each containing `name`, `environment` (placeholder), and `objects` array
- [ ] Structure `objects` with `id`, `position` (placeholder), and `content` (object with `type`, `value`, `title`)
- [ ] Populate `galleryData` with placeholder data for at least one room and a few objects with different content types ('text', 'image', 'video')

### **Step 10: Integrate Data into Lobby Rendering and Object Interaction**

- [ ] Import `galleryData` into `main.js`
- [ ] Modify `renderLobby()` in `views.js` to use `galleryData.lobby` for tablet text and `roomLinks` iteration
- [ ] Modify object click listener in `handleStateChange` (`main.js`) to:
  - Get current `roomId` and `objectId`
  - Find corresponding object data in `galleryData.rooms[roomId].objects`
  - Get `title` and `content` from object data
  - Format `content.value` based on `content.type` into HTML string (<img>, <video>, <iframe>, or text)
  - Call `modal.showModal('<h2>${title}</h2>' + formattedContentHTML)`
- [ ] **Test:** Run `npm run dev`. Lobby should show data from `content-data.js`. Navigate to the populated room. Click objects. Verify modal shows correct title and formatted content (image tag, video tag, or text) from `content-data.js`.

---

## **Phase 4: Animation & Aesthetics**

### **Step 11: Implement GSAP for Basic Room Transitions**

- [ ] Import `gsap` into `main.js`
- [ ] Modify `handleStateChange` in `main.js`:
  - Get current view element
  - Use `gsap.to` or `gsap.timeline` to animate current view out (opacity: 0, blur)
  - In `onComplete` of outgoing animation: clear `#app`, call `renderView`, animate new view in (opacity: 1, blur: 0)
- [ ] Add initial `opacity: 0` to main view containers in `lobby.css` and `room.css` to support fade-in
- [ ] **Test:** Navigate between lobby and rooms. Verify smooth fade/blur transition.

### **Step 12: Implement GSAP for Object Hover Effects**

- [ ] In `handleStateChange` (`main.js`, 'room:' block), add `mouseenter` and `mouseleave` listeners to `interactive-object` elements
- [ ] Inside `mouseenter` listener, use `gsap.to` to animate a subtle effect (e.g., slight scale, box-shadow/glow)
- [ ] Inside `mouseleave` listener, use `gsap.to` to animate back to original state
- [ ] Add initial styles in `room.css` to support the hover animation (e.g., initial box-shadow state)
- [ ] **Test:** Navigate to a room. Hover over objects. Verify subtle visual reaction animated by GSAP.

### **Step 13: Implement Intro Animation Sequence**

- [ ] Add `#intro-overlay` HTML element to `index.html` before `#app`
- [ ] Create `src/styles/intro.css`
- [ ] Add CSS in `intro.css` for full-screen overlay and placeholder elements for animation
- [ ] Import `intro.css` into `main.js`
- [ ] Create `playIntroAnimation()` function in `main.js`
- [ ] Inside `playIntroAnimation()`:
  - Get intro elements
  - Create GSAP timeline
  - Add animation steps to timeline
  - Add `onComplete` callback to timeline's end: call `renderView` for lobby, animate `#intro-overlay` fade out (opacity: 0)
  - Add `onComplete` callback to fade out tween: set `#intro-overlay` to `display: none`
- [ ] Call `playIntroAnimation()` at the end of `main.js` instead of initial `renderView`
- [ ] **Test:** Refresh page. Verify intro animation plays, overlay fades, revealing the lobby.

---

## **Phase 5: Advanced Features & Refinements**

### **Step 14: Implement Full Navigation (Dropdown and Back Button Wiring)**

- [ ] Add navigation dropdown HTML structure (`nav-dropdown`, `dropdown-button`, `dropdown-menu`, `menu-item`) to `index.html`
- [ ] Create `src/styles/navigation.css`
- [ ] Add CSS in `navigation.css` for dropdown positioning, appearance (hidden/visible states), and back button styling (initially hidden)
- [ ] Import `navigation.css` into `main.js`
- [ ] Create `src/navigation.js`
- [ ] Define and export `initNavigation(roomLinks)` in `navigation.js` to populate dropdown HTML and add toggle/menu item click listeners (`router.navigateTo`, hide dropdown)
- [ ] Define and export `updateNavigation(currentState)` in `navigation.js` to show/hide `#back-button` based on state
- [ ] Call `navigation.initNavigation(galleryData.lobby.roomLinks)` in `main.js` on app start
- [ ] Modify router subscription (`handleStateChange`) to call `navigation.updateNavigation(state)` after rendering
- [ ] Ensure `#back-button` click listener in `handleStateChange` calls `router.navigateTo('lobby')`
- [ ] **Test:** Verify dropdown button appears, opens/closes, and navigates. Verify back button appears in rooms and disappears in lobby, and navigates back.

### **Step 15: Implement Asset Loading and Error Handling**

- [ ] Create a placeholder image file (e.g., `src/assets/placeholder.png`) or get a data URL
- [ ] Create `src/assetLoader.js`
- [ ] Define and export `async loadImage(imageUrl, altText)` in `assetLoader.js` using `new Image()` and Promises
- [ ] Implement `onload` to resolve with image element, `onerror` to log error and resolve with placeholder image element
- [ ] Add simple in-memory `imageCache` in `assetLoader.js`
- [ ] Import `loadImage` into `main.js`
- [ ] Add `updateModalBody(contentElement)` function to `modal.js`
- [ ] Modify object click handler in `main.js`:
  - Show modal with loading text initially
  - If content type is 'image', `await loadImage(...)`
  - Call `modal.updateModalBody()` with the loaded image element (or placeholder)
  - Handle other content types similarly or keep existing direct insertion for now
- [ ] Update `content-data.js` with real/test image URLs, including one bad URL for testing error handling
- [ ] **Test:** Click objects with images. Verify images load. Change a URL to be bad. Click object. Verify placeholder image appears and error logged.

### **Step 16: Implement Specific Room Themes (CSS)**

- [ ] Update `content-data.js`: Add `themeClass` property to each room object
- [ ] Modify room rendering in `views.js` to add the `themeClass` to the main `.room-view` element
- [ ] In `src/styles/room.css`, add CSS rules targeting `.room-view-YOUR_THEME_CLASS` (e.g., `.room-view-education`) and elements within it (`.room-environment`, `.room-objects`, `.interactive-object`) to implement visual themes (backgrounds, layout tweaks, object appearance variations) for _all_ specified rooms.
- [ ] **Test:** Navigate to each room. Verify distinct visual styling based on theme.

### **Step 17: Refine Modal Designs Per Room**

- [ ] In `modal.js` or `main.js` (before showing modal), get the current room's theme class
- [ ] Add the room's theme class (e.g., `modal-from-education`) to the `#modal-overlay` or `#modal-content` element before showing
- [ ] In `src/styles/modal.css`, add CSS rules targeting modal elements combined with theme classes (e.g., `.modal-from-education #modal-content`) to style modals differently per room.
- [ ] Ensure theme class is removed from modal elements in `hideModal()`
- [ ] **Test:** Navigate to different rooms. Click objects. Verify modal appearance changes based on the room's theme.

---

## **Phase 6: Testing, Refinement & Deployment Prep**

### **Step 18: Implement Performance Optimizations (Caching/Lazy Loading)**

- [ ] Ensure in-memory `imageCache` is correctly implemented in `assetLoader.js`
- [ ] In `main.js` (where image HTML is formatted for modal/content display), add `loading="lazy"` attribute to `<img>` tags.
- [ ] **Test:** Check browser network tab for cache hits on repeat image loads. Observe images lower down in a room loading only as they become visible.

### **Step 19: Integrate Google Analytics Stub**

- [ ] Add the GA4 gtag.js snippet to the `<head>` in `index.html` (use dummy ID)
- [ ] Create `src/analytics.js`
- [ ] Define and export placeholder functions `trackPageView`, `trackEvent` that just console log the event data
- [ ] Import `analytics.js` into `main.js`
- [ ] Call `analytics.trackPageView` after intro finishes and in the router subscription (`handleStateChange`) for both lobby and room views
- [ ] Call `analytics.trackEvent('object_click', ...)` in the object click handler
- [ ] **Test:** Run `npm run dev`. Check console for GA event logs when navigating and clicking objects.

### **Step 20: Implement Remaining Room Themes (CSS and Data)**

- [ ] Fully populate `content-data.js` with realistic/final content for _all_ specified rooms and objects (Education, Work Experience, Projects, Awards, Technologies, Leadership).
- [ ] Ensure all rooms have interactive objects linked to content in the data.
- [ ] Verify `themeClass` is set for all rooms in `content-data.js`.
- [ ] Double-check `src/styles/room.css` and `src/styles/modal.css` have theme-specific rules for _all_ rooms listed in the data.
- [ ] **Test:** Navigate to all rooms via dropdown. Verify content appears (even if text/placeholders). Verify styling applies.

### **Step 21: Cross-Browser and Basic Responsiveness Check**

- [ ] Open project in Chrome, Firefox, Safari, Edge.
- [ ] Test all core interactions (navigation, modal, hover) in each browser.
- [ ] Resize the desktop browser window (horizontal and vertical) significantly.
- [ ] Identify and fix CSS layout issues that break appearance on resize or in specific browsers.
- [ ] Identify and fix JavaScript issues causing broken functionality in specific browsers.
- [ ] **Test:** Repeat testing in all browsers and during resize to confirm fixes.

### **Step 22: Code Review and Refactoring**

- [ ] Review all `.js` files for consistency, clarity, comments, and redundancy. Refactor as needed.
- [ ] Review all `.css` files for consistency, organization, comments, and unused rules. Refactor as needed.
- [ ] Review `index.html` for semantics, structure, and comments.
- [ ] Review `package.json`.
- [ ] **Test:** Run `npm run dev` and re-test core features to ensure refactoring didn't break anything.

---

## **Content Creation**

- [ ] Write final, polished text content for the lobby tablet (creator description, goals, contact).
- [ ] Write final text content for all interactive objects in all rooms.
- [ ] Gather/Create final image assets for all interactive objects (ensure appropriate size/format).
- [ ] Gather/Create final video assets/embed codes for all interactive objects.
- [ ] **Update `content-data.js` with all final, polished content and correct asset URLs.**

---

## **Final Testing & Deployment**

- [ ] Perform a final, comprehensive test of all features on all target browsers.
- [ ] Perform final performance tests (page load, animation smoothness).
- [ ] Test asset loading error handling with simulated errors.
- [ ] Conduct a small round of user testing if possible, gather feedback.
- [ ] Ensure Google Analytics is configured correctly (replace dummy ID) if going live.
- [ ] Run `npm run build` to create production-ready files.
- [ ] Verify the build output in the `dist` folder.
- [ ] Upload build files to chosen hosting/CDN.
- [ ] Test the live site URL on all target browsers and devices.

---

## **Future Enhancements (Backlog)**

- [ ] Implement full mobile/tablet responsive layout.
- [ ] Add social sharing buttons.
- [ ] Consider a feedback mechanism.
- [ ] Add more advanced animations or 3D elements.
- [ ] Optimize asset sizes further.
