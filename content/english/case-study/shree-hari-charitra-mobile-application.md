---
title: "Case Study: Shree Hari Charitra Mobile Application"
client: "Shree Hari Charitra"
platform: "sahajananddigital.in"
date: "2026-03-11"
categories: ["Mobile App Development", "React Native", "WordPress API Integration"]
# post image
image: "images/screenshot.svg" # Add project image here (e.g., images/case-study/shree-hari-charitra.png)
# post type (regular/featured)
type: "featured"
# post draft
draft: false
---

# Shree Hari Charitra: A Divine Reading Experience

## Overview

**Shree Hari Charitra** is a modern, cross-platform mobile application designed to bring the sacred stories and divine pastimes (Charitras) of Bhagwan Shree Swaminarayan to devotees worldwide. Built with an emphasis on a serene user experience, accessibility, and offline capabilities, the app serves as a digital sanctuary for daily spiritual reading.

## The Challenge

The client required a mobile application that could seamlessly interface with their existing vast repository of spiritual texts hosted on a WordPress platform. The key challenges included:

1.  **Seamless Content Delivery:** Fetching and displaying rich text content (including complex Gujarati scripts) smoothly on mobile devices without layout breaking or text clipping.
2.  **User Engagement:** Encouraging daily reading habits through gamification (streaks, reading time tracking) and personalization (bookmarks, profile management).
3.  **Community Contribution:** Allowing users to actively contribute to the growing library of stories.
4.  **Performance & Reliability:** Ensuring the app remains fast and responsive, utilizing intelligent caching to minimize server load and provide a smooth experience even on slow networks.
5.  **Secure Authentication:** Implementing a secure, token-based authentication system directly integrated with the WordPress backend.

## Our Approach & Solution

We architected a robust solution leveraging **React Native (Expo)** for the mobile frontend and customized **WordPress REST API** endpoints for the backend, ensuring a maintainable and scalable ecosystem.

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
