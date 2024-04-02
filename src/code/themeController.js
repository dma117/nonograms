import { themes } from "./data.js";

class ThemeController {
  constructor(theme) {
    this.theme = theme;
  }

  toggleTheme() {
    if (this.theme === themes.light) {
      this.theme = themes.dark;
    } else {
      this.theme = themes.light;
    }
  }
}

export default ThemeController;