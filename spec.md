# **Surreal Art Gallery Website - Specification**

## **Overview**

This project is a frontend-only surreal art gallery website designed to creatively present Thach Nguyen Ngoc’s resume. The experience is highly immersive, artistic, and visually stunning, incorporating modern animation technologies and minimal UI elements. It will present various sections of the resume (e.g., Education, Work Experience, Projects) in a surreal, artistic manner, with users navigating through "rooms" to explore different pieces of content.

## **User Journey**

1. **Landing Page**: The user enters the gallery and is greeted by a mysterious statue representing the creator. The statue will be accompanied by a brief description of the creator, goals, and contact information, which will be presented on a tablet in front of the statue. The main lobby will have several rooms representing different sections of the resume (e.g., Education, Work Experience, Projects, etc.), accessible through a navigation panel or clickable objects.
2. **Navigating Rooms**: Users can click on any room label to enter a specific section (e.g., Work Experience). Each room has unique surreal visuals tied to the resume content, and subtle cat emoji appearances throughout.
3. **Exploring Content**: Inside each room, users can interact with objects (statues, photos, artifacts) that reveal content (text, images, videos, etc.). Clicking on these objects triggers modals with detailed information. Users can return to the main lobby through a back arrow when inside any room.
4. **Returning to Main Lobby**: Users can navigate to different rooms using a dropdown navigation panel or return to the main lobby via a back arrow.

## **Design and Aesthetic**

- **Visual Style**: Dreamlike floating architecture with cosmic/space themes, featuring surreal objects, artifacts, and floating elements. The experience should feel whimsical and surreal, with occasional cute cat emojis/faces incorporated throughout.
- **Room Themes**: Each room has a unique theme to match its resume section:

  - **Education**: A floating library or classroom
  - **Work Experience**: A futuristic office or workspace
  - **Projects**: A cosmic lab or creative space
  - **Awards & Certificates**: A gallery of floating awards
  - **Technologies and Languages**: A tech lab or digital space
  - **Leadership and Community Engagement**: A community or network space

- **Transitions**: Smooth, animated transitions between rooms with a fade-in/out and blur effect.
- **Interaction**: Objects in the rooms light up subtly on hover (light outline effect), with users clicking on objects to reveal modals with content (text, images, videos, etc.).

## **Features & Functionality**

- **Navigation**:

  - A top-right subtle navigation dropdown allows users to jump to any room directly.
  - A back arrow appears in the room to return to the main lobby.

- **Introductory Animation**: A "welcome" animation plays when the user first enters the gallery to introduce the concept and set the tone. The animation should use consistent visuals (color palette, style, mood) as the rest of the site.
- **Modal Design**: Each room’s modal will have a unique design and animation style that matches the room’s theme. Content inside the modals will vary (text, images, videos, etc.).
- **Content Updates**: Content updates can be performed manually by updating the code when new content is available. Rooms can be added, updated, or changed through simple code edits.
- **Error Handling**: Placeholder images (e.g., grey objects) will be shown if an asset fails to load. This ensures the user experience is not disrupted if assets are unavailable.
- **Performance Optimizations**:

  - Implement basic asset caching to reduce load times and improve performance.
  - Use lazy loading for large assets (images, 3D models) to only load them when needed.
  - Optimize animations with modern tools like GSAP to ensure fluid performance.

- **Analytics**: Google Analytics will be used to track basic user interactions such as clicks on objects, room navigation, and time spent in each room. This will help understand user behavior without overwhelming the experience with unnecessary data tracking.

## **Architecture Choices**

- **Frontend Framework**:

  - Vanilla JavaScript for interaction and animation.
  - GSAP for modern animation effects (fade, slide, scale, etc.).
  - Vite as the build tool for faster development and bundling.

- **HTML/CSS**: A minimal, clean, and responsive design, with a focus on performance and smooth transitions. Custom CSS will be used for styling the rooms and objects.
- **Content Delivery**: Assets (images, models) will be delivered through a Content Delivery Network (CDN) for faster load times and distributed access.

## **Data Handling**

- **Room Content**: Each room will have a set of content objects (e.g., images, texts, videos) tied to specific resume sections. Content will be hardcoded into the website but can be easily updated by editing the code.
- **Google Analytics**: Will track user interactions, such as clicks, room transitions, and other relevant user behaviors.

## **Testing Plan**

- **Performance Testing**:

  - Test page load times on different devices and network conditions.
  - Measure performance improvements with asset caching and lazy loading.
  - Test animations on various screen sizes to ensure smooth performance.

- **Cross-Browser Testing**:

  - Ensure the gallery works seamlessly across major browsers (Chrome, Firefox, Safari, Edge).
  - Test animations and interactions for compatibility.

- **Mobile Testing**: Although the site will be desktop-only initially, ensure responsiveness works on mobile screens in anticipation of future updates.
- **User Testing**:

  - Conduct tests with a small group of users to ensure intuitive navigation and engagement.
  - Collect feedback on the visual experience and smoothness of interactions.

## **Error Handling Strategy**

- **Failed Asset Loads**: If an image, 3D model, or other asset fails to load, a placeholder image (e.g., a grey object) will be displayed in its place.
- **Content Fallback**: If a model or object cannot be loaded, ensure that a fallback message is shown in the modal or as part of the object's content.

## **Future Enhancements**

- **Mobile Version**: Once the desktop version is complete, we will move to designing a responsive layout for mobile and tablet devices.
- **Social Sharing**: Potential inclusion of social sharing buttons in future iterations.
- **User Input**: Consider adding a feedback mechanism or rating system in future versions based on user input.
