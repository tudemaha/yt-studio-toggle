const removeMonetizationTab = () => {
  const monetizationLink = document.querySelector('a[href*="monetization"]');
  const monetizationLi = monetizationLink.closest("li");
  monetizationLi.remove();
};

removeMonetizationTab();
