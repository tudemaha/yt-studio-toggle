chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.storage.local.set({
      hideMonetization: false,
      hideSubscriberCount: false,
      hideAnalytics: false,
      hideSubscriberCard: false,
    });
  }
});

const studio = "https://studio.youtube.com";
chrome.tabs.onUpdated.addListener(async (tabId, _, tab) => {
  if (!tab.url?.startsWith(studio)) return;

  const files = [];
  chrome.storage.local.get(
    [
      "hideMonetization",
      "hideSubscriberCount",
      "hideAnalytics",
      "hideSubscriberCard",
    ],
    (result) => {
      if (result.hideMonetization) files.push("css/monetization.css");
      if (result.hideSubscriberCount) files.push("css/subscriber-count.css");
      if (result.hideAnalytics) files.push("css/analytics-card.css");
      if (result.hideSubscriberCard) files.push("css/subscriber-card.css");
    },
  );

  await chrome.scripting.insertCSS({
    files,
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
