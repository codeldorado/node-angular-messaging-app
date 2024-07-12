import express, { Application } from "express";
import bodyParser from "body-parser";
import errorHandler from "./middlewares/errorHandler";
import authRoutes from "./routes/auth";
import messageRoutes from "./routes/messages";
import loadPlugins from "./utils/pluginLoader";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);

// Load plugins
loadPlugins(app);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
