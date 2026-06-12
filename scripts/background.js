const studio = "https://studio.youtube.com";
chrome.tabs.onUpdated.addListener(async (tabId, _, tab) => {
  if (!tab.url?.startsWith(studio)) return;

  await chrome.scripting.insertCSS({
    files: [
      "css/analytics-card.css",
      "css/monetization.css",
      "css/subscriber-card.css",
      "css/subscriber-count.css",
    ],
    target: { tabId },
  });
});
