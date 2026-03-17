---
title: "Shree Hari Charitra: A Divine Cross-Platform Mobile Experience"
date: 2026-03-11
slug: "shree-hari-charitra-mobile-application"
image: "/images/case-study/shc-website.png"
category: "Mobile App Development"
type: "featured"
description: "Learn how we designed and developed a high-performance, cross-platform mobile application for Shree Hari Charitra using React Native and Headless WordPress."
draft: false
---

**Shree Hari Charitra** is a modern, cross-platform mobile application designed to bring sacred stories and divine pastimes (Charitras) of Bhagwan Shree Swaminarayan to devotees worldwide. Built with an emphasis on serene user experience, accessibility, and offline capabilities, the app serves as a digital sanctuary for daily spiritual reading.

### Project Links
- **Official Website:** [shriharicharitra.com](https://shriharicharitra.com/)
- **Google Play Store:** [Download for Android](https://play.google.com/store/apps/details?id=com.shc)
- **Apple App Store:** [Download for iOS](https://apps.apple.com/in/app/shree-hari-charitra/id6469516380)

## The Challenge
The client required a mobile solution that could seamlessly interface with their vast repository of spiritual texts hosted on WordPress. Key challenges included:
1. **Gujarati Script Rendering:** Displaying complex scripts without layout breaking or clipping.
2. **Engagement & Personalization:** Implementing streaks, reading time tracking, and bookmarks to encourage daily habits.
3. **Performance on Slow Networks:** Ensuring fast access through intelligent local caching.
4. **Secure Backend Integration:** Building a secure, token-based bridge between React Native and WordPress.

## Our Approach & Solution

We architected a robust solution leveraging **React Native (Expo)** for the mobile frontend and customized **WordPress REST API** endpoints for the backend, ensuring a maintainable and scalable ecosystem.

### App Store Presence
We managed the entire deployment process, ensuring that the application meets the high standards of both major app stores.

**Google Play Store**
![Google Play Store](/images/case-study/shc-playstore.png)

**Apple App Store**
![Apple App Store](/images/case-study/shc-appstore.png)

### 1. Technology Stack
*   **Frontend:** React Native, Expo, React Navigation (Expo Router)
*   **Backend:** WordPress (Headless CMS), Custom PHP Plugin (`shc-app-api`)
*   **State & Storage:** React Context API, AsyncStorage for robust local caching
*   **Infrastructure:** EAS (Expo Application Services) for automated CI/CD and OTA updates.

### 2. Custom WordPress Integration
Rather than relying on generic REST API plugins, we developed a bespoke WordPress plugin (`shc-app-api.php`) to handle mobile-specific needs securely:
*   **Token-Based Auth:** Custom JWT implementation for secure login, registration, and session management.
*   **Profile Management:** Endpoints for updating user details and handling multipart/form-data for avatar image uploads directly to the WordPress media library.
*   **Content Contribution:** A dedicated `/suggest` endpoint allowing users to submit Charitras from the app, mapping them directly to "Pending" posts in the WordPress dashboard for editorial review.
*   **Push Notifications:** Integrated Expo Push Tokens with WordPress hooks (`publish_post`) to automatically notify users when new content is published.

### 3. User Experience (UX) & UI Design
*   **Themed Design System:** Implemented a dynamic Light/Dark mode system utilizing a custom `ThemedText` and `ThemedView` architecture to maintain spiritual aesthetics (Deep Purples, Golds) across platforms.
*   **Typography Optimization:** Specifically addressed font rendering challenges for the `AnekGujarati` font. We engineered custom line-height multipliers and padding adjustments within the text components to prevent any ascender/descender clipping, ensuring pristine legibility for complex scripts.
*   **Engaging Dashboard:** A personalized home screen greeting the user by name, tracking their daily reading streak, total time spent reading, and providing a quick "Random Charitra" discovery feature.

### 4. Performance Optimization
*   **Intelligent Caching:** Implemented a multi-layered caching strategy using `AsyncStorage`. The app fetches tags and charitras once, caches them locally with a timestamp, and selectively re-fetches only when the cache expires or the user explicitly pulls-to-refresh, drastically reducing API calls and improving perceived load times.

## Key Features Developed

*   **Secure Authentication:** Login, Registration, and Account Deletion.
*   **Personalized Profiles:** Custom avatars and reading statistics (Charitras read, total time, streak).
*   **Rich Content Consumption:** Parallax headers, dynamic font sizing, and offline-ready reading views.
*   **Interactive Tools:** Search functionality, category-based filtering (Tags), and Bookmarking.
*   **Community Sourcing:** In-app "Suggest Charitra" form for user contributions.
*   **Automated CI/CD:** Fully configured local and cloud build pipelines for both iOS (.ipa) and Android (.aab) using Expo EAS.

## Results

The Shree Hari Charitra app successfully bridges the gap between traditional spiritual texts and modern digital consumption. By utilizing a headless WordPress approach paired with React Native, Sahajanand Digital delivered a highly performant, visually appealing, and feature-rich application that fosters daily devotion and community engagement.

*Case study prepared by Sahajanand Digital.*
