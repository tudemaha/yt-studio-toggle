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

const monetization = studio + "/channel/**/monetization/**";
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      id: 1001,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          url: "https://studio.youtube.com",
        },
      },
      condition: {
        urlFilter: monetization,
        resourceTypes: ["main_frame"],
      },
    },
  ],
  removeRuleIds: [1001],
});
