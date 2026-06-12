let toggleStatuses = {};

const monetizationToggle = /** @type {HTMLInputElement} */ (
  document.getElementById("monetization")
);
const subscriberCountToggle = /** @type {HTMLInputElement} */ (
  document.getElementById("subscriber-count")
);
const subscriberListToggle = /** @type {HTMLInputElement} */ (
  document.getElementById("subscriber-list")
);
const analyticsCardToggle = /** @type {HTMLInputElement} */ (
  document.getElementById("analytics-card")
);

chrome.storage.local.get(
  [
    "hideMonetization",
    "hideSubscriberCount",
    "hideAnalytics",
    "hideSubscriberCard",
  ],
  (result) => {
    toggleStatuses = result;

    monetizationToggle.checked = toggleStatuses.hideMonetization;
    subscriberCountToggle.checked = toggleStatuses.hideSubscriberCount;
    subscriberListToggle.checked = toggleStatuses.hideSubscriberList;
    analyticsCardToggle.checked = toggleStatuses.hideAnalytics;
  },
);

monetizationToggle.addEventListener("change", (event) => {
  toggleStatuses.hideMonetization = /** @type {HTMLInputElement} */ (
    event.target
  ).checked;
});
subscriberCountToggle.addEventListener("change", (event) => {
  toggleStatuses.hideSubscriberCount = /** @type {HTMLInputElement} */ (
    event.target
  ).checked;
});
subscriberListToggle.addEventListener("change", (event) => {
  toggleStatuses.hideSubscriberList = /** @type {HTMLInputElement} */ (
    event.target
  ).checked;
});
analyticsCardToggle.addEventListener("change", (event) => {
  toggleStatuses.hideAnalytics = /** @type {HTMLInputElement} */ (
    event.target
  ).checked;
});

const button = document.getElementById("save-button");
button.addEventListener("click", async () => {
  console.log(toggleStatuses);
  await chrome.storage.local.set(toggleStatuses);
  chrome.tabs.reload();
});
