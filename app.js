import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

//Linking Web Components
import { MenuPage } from "./components/MenuPage.js";

window.app = {};
app.store = Store;
app.router = Router;
//Its better to use DOMContentLoaded event to ensure that the DOM is fully loaded before trying to access any elements.
//This way, you can avoid potential issues with trying to access elements that haven't been loaded yet.
window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
