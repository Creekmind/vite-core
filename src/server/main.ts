import express from "express";
import ViteExpress from "vite-express";

const app = express();

ViteExpress.listen(app, 3001, () =>
  console.log("Core is listening on port 3001...")
);
