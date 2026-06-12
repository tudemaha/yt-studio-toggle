# Hide YT Studio Component

<p align="center">
    <img src="./images/icon-128.png" alt="Icon">
</p>

A Chrome Extension designed to hide specific dashboard and sidebar components on YouTube Studio to minimize distractions.

## 📝 Features

- **Toggle Components Individually:**
  - **Monetization:** Hide the Monetization link on the side navigation bar (and automatically redirects requests trying to access it).
  - **Subscriber Count:** Hide the subscriber count display.
  - **Subscriber Card:** Hide the recent subscribers card on the dashboard.
  - **Analytics Card:** Hide the analytics dashboard summary card.
- **Instant CSS Injection:** Uses Chrome's `scripting` API to immediately inject style sheets and prevent layout "blinking" during page load.
- **SPA Observer Backup:** Runs a `MutationObserver` content script that catches dynamically rendered elements.

## 📁 Project Structure

```text
yt-studio-toggle/
├── css/
│   ├── analytics-card.css    # Styles to hide the analytics card
│   ├── empty.css             # Base fallback CSS
│   ├── monetization.css      # Styles to hide the sidebar monetization link
│   ├── subscriber-card.css   # Styles to hide the recent subscribers card
│   └── subscriber-count.css  # Styles to hide the subscriber count
├── images/
│   ├── icon-16.png           # Extension icon (16x16)
│   ├── icon-32.png           # Extension icon (32x32)
│   ├── icon-48.png           # Extension icon (48x48)
│   └── icon-128.png          # Extension icon (128x128)
├── scripts/
│   ├── background.js         # Service worker for handling CSS injection & redirects
│   └── dashboard.js          # Content script with MutationObserver for dynamic hiding
├── jsconfig.json             # JS settings & type-checking configuration
├── manifest.json             # Chrome extension manifest configurations
├── popup.css                 # Styling for the settings popup modal
├── popup.html                # UI layout for the settings popup
└── popup.js                  # Settings management logic & event listeners
```

## 📌 Getting Started

### Prerequisites

- Google Chrome (or any Chromium-based browser like Brave, Edge, Opera, etc.)

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/tudemaha/yt-studio-toggle.git
   ```
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select the `yt-studio-toggle` folder that you cloned.
6. The extension is now loaded and active.

## 🧪 How to Test

### 1. Verifying Settings and UI

- Click the extension icon in the Chrome toolbar to open the settings popup.
- Try toggling different options on/off, then click the **Save** button.
- The extension should automatically save the settings to Chrome's local storage and reload the active YouTube Studio page to apply the changes.

### 2. Testing Component Hiding

- Go to [YouTube Studio](https://studio.youtube.com).
- Ensure that the checked components are completely hidden and do not show up even briefly during initial page render (zero blinking).
- If **Monetization** is checked to hide, try navigating directly to the monetization URL. The background service worker should catch this via declarative rules and redirect you to the main dashboard.

### 3. Debugging Scripts

- **Popup Script (`popup.js`):** Right-click the extension popup and select **Inspect** to debug popup issues, check storage settings, or view console logs.
- **Service Worker (`background.js`):** Go to `chrome://extensions`, find the extension card, and click **service worker** to open its console and inspect network/injection rules.
- **Content Script (`dashboard.js`):** Open Chrome Developer Tools on your YouTube Studio tab (`F12` or `Cmd + Option + I`) and view the **Console** tab to look for logs or runtime errors.

## ⚖️ License

This project is licensed under the Apache License 2.0. See the [LICENSE](./LICENSE) file for details.
