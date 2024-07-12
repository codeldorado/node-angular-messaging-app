import { Application } from "express";
import fs from "fs";
import path from "path";

const loadPlugins = (app: Application): void => {
  const pluginsDir = path.join(__dirname, "../../plugins");
  fs.readdirSync(pluginsDir).forEach((file) => {
    const plugin = require(path.join(pluginsDir, file)).default;
    if (typeof plugin === "function") {
      plugin(app);
    }
  });
};

export default loadPlugins;
