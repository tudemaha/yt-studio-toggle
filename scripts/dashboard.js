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
 * @param {MutationRecord[]} mutations
 */
const observerCallback = (mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node instanceof Element) {
        chrome.storage.local.get(
          [
            "hideMonetization",
            "hideSubscriberCount",
            "hideAnalytics",
            "hideSubscriberCard",
          ],
          (result) => {
            if (result.hideMonetization) removeMonetization();
            if (result.hideSubscriberCount) removeSubscriberCount();
            if (result.hideAnalytics) removeAnalyticsCard();
            if (result.hideSubscriberCard) removeSubscriberCard();
          },
        );
      }
    }
  }
};

const observer = new MutationObserver(observerCallback);
observer.observe(document.body, {
  childList: true,
});
