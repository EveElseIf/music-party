import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter, createContext } from "./router.js";

const app = express();

app.use(morgan("combined", {
  skip: (req, resp) => req.originalUrl.startsWith("/node_modules") || req.originalUrl.startsWith("/@")
}));

app.use("/trpc", trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: createContext,
}));

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
