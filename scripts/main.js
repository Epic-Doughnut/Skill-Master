require("./menus");
require("./character");

hp_bar = document.getElementById("hp-bar");
xp_bar = document.getElementById("xp-bar");

// Initialize hp and xp bars
hp_bar.setAttribute("max", stats["Max HP"]);
hp_bar.setAttribute("value", stats["Current HP"]);