import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import "./index.js"

export function meta() {
  return { title: "Creepto club - Collection of some creepy universe" };
}
import tailwindstyles from "./tailwind.css";

// https://remix.run/api/app#links
export let links = () => {
  return [
    { rel: "stylesheet", href: tailwindstyles }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>

<script src="https://cdn.ethers.io/scripts/ethers-v4.min.js"></script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
