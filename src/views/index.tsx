import { lazy } from "react";

const Home = lazy(async () => await import("./Home"));
const JsonViewer = lazy(async () => await import("./JsonViewer"));

export { Home, JsonViewer };
