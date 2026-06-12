/**
 * Remove the Monetization on the side bar.
 */
const removeMonetization = () => {
  const monetizationLink = document.querySelector('a[href*="monetization"]');
  if (!monetizationLink) return;
  const monetizationLi = monetizationLink.closest("li");
  monetizationLi.remove();
};

/**
 * Remove the analytics card.
 */
const removeAnalyticsCard = () => {
  const analyticsCard = document.querySelector(
    'ytcd-card[test-id="channel-dashboard-facts-card"]',
  );
  if (!analyticsCard) return;
  analyticsCard.remove();
};

/**
 * Remove the subscriber card.
 */
const removeSubscriberCard = () => {
  const subscriberCard = document.querySelector(
    'ytcd-card[test-id="channel-dashboard-recent-activity-card"]',
  );
  if (!subscriberCard) return;
  subscriberCard.remove();
};

/**
 * Remove the subscriber count and the separator line.
 */
const removeSubscriberCount = () => {
  const subscriberDiv = document.querySelector(
    "div.apply-item-padding.style-scope.ytcd-channel-facts-item:has(+ hr.divider)",
  );
  const hrDivider = document.querySelector(
    "hr.divider.style-scope.ytcd-channel-facts-item",
  );

  if (!subscriberDiv || !hrDivider) return;
  subscriberDiv.remove();
  hrDivider.remove();
};

/**
 * Settings to hide components.
 */
const settings = {
  hideMonetization: false,
  hideSubscriberCount: false,
  hideAnalytics: false,
  hideSubscriberCard: false,
};
/**
 * Apply all the hiding functions based on the settings.
 */
const applyHiding = () => {
  if (settings.hideMonetization) removeMonetization();
  if (settings.hideSubscriberCount) removeSubscriberCount();
  if (settings.hideAnalytics) removeAnalyticsCard();
  if (settings.hideSubscriberCard) removeSubscriberCard();
};

/**
 * Initialize the settings and apply all the hiding functions for the first run.
 */
const init = async () => {
  try {
    if (chrome.runtime && chrome.runtime.id) {
      const result = await chrome.storage.local.get([
        "hideMonetization",
        "hideSubscriberCount",
        "hideAnalytics",
        "hideSubscriberCard",
      ]);
      Object.assign(settings, result);
      applyHiding();
    }
  } catch (e) {
    // Ignore context invalidation errors
  }
};
init();

/**
 * Callback function for the observer. This observer is required since YouTube Studio implements Single Page Application (SPA)
 * @param {MutationRecord[]} mutations
 */
const observerCallback = (mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node instanceof Element) {
        applyHiding();
        return;
      }
    }
  }
};
const observer = new MutationObserver(observerCallback);
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
