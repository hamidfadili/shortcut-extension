const store = {
  global: {
    shortcuts: [
      {
        keys: "alt+Y",
        actionType: "open-link",
        target: "https://youtube.com",
      },
    ],
  },
  "youtube.com": {
    shortcuts: [
      {
        keys: "alt+S",
        actionType: "click",
        target: "#search",
      },
      {
        keys: "alt+A",
        actionType: "click",
        target: "#logo",
      },
    ],
    pages: {
      "/": { shortcuts: [] },
      "/watch": { shortcuts: [] },
    },
  },
};

export default function (site, page) {
  if (page) {
    const currentSite = store[site];
    if (!currentSite) return [];
    const currentPage = currentSite.pages[page];
    if (!page) return [];
    return currentPage.shortcuts;
  }
  if (site) {
    const currentSite = store[site];
    if (!currentSite) return [];
    return currentSite.shortcuts;
  }
  return store.global.shortcuts;
}
