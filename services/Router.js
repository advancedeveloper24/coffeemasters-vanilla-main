const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const url1 = e.target.href;
        Router.go(url1);
      });
    });
  },
  go: (route, addToHistory = true) => {
    console.log(`Navigating to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
  },
};

export default Router;
