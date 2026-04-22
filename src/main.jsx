import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./layouts/Layout.jsx";
import Colophon from "./pages/Colophon.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Post from "./pages/Post.jsx";
import FourOhFour from "./pages/404.jsx";
import palettes from "./data/colors.js";
import "./css/index.css";

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const parseRgb = (cssColor) => {
  const m = cssColor
    .replace(/\s+/g, "")
    .match(/^rgba?\((\d+),(\d+),(\d+)(?:,([0-9.]+))?\)$/i);
  if (!m) return null;
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]), a: m[4] == null ? 1 : Number(m[4]) };
};

const toResolvedRgb = (input) => {
  const el = document.createElement("span");
  el.style.color = input;
  el.style.display = "none";
  document.documentElement.appendChild(el);
  const resolved = getComputedStyle(el).color;
  el.remove();
  const rgb = parseRgb(resolved);
  if (!rgb) throw new Error(`Could not parse color: ${input} -> ${resolved}`);
  return rgb;
};

const srgbToLinear = (v) => {
  const s = v / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};

const relLuminance = ({ r, g, b }) =>
  0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);

const contrastRatio = (c1, c2) => {
  const L1 = relLuminance(c1);
  const L2 = relLuminance(c2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
};

const mixRgb = (a, b, amountA) => {
  const t = Math.min(1, Math.max(0, amountA));
  return {
    r: Math.round(a.r * t + b.r * (1 - t)),
    g: Math.round(a.g * t + b.g * (1 - t)),
    b: Math.round(a.b * t + b.b * (1 - t)),
    a: 1,
  };
};

const rgbToCss = ({ r, g, b }) => `rgb(${r} ${g} ${b})`;

const rgbaToCss = ({ r, g, b, a }) => `rgb(${r} ${g} ${b} / ${a})`;

const pickAccessibleText = (bg, preferred, minRatio = 4.5) => {
  if (preferred && contrastRatio(preferred, bg) >= minRatio) return preferred;
  const black = { r: 0, g: 0, b: 0, a: 1 };
  const white = { r: 255, g: 255, b: 255, a: 1 };
  const rb = contrastRatio(black, bg);
  const rw = contrastRatio(white, bg);
  const best = rb >= rw ? black : white;
  return contrastRatio(best, bg) >= minRatio ? best : best;
};

const findHoverBg = ({ bg, fg, strength = 0.12, minRatio = 4.5 }) => {
  // Mix a little of fg into bg, but keep text contrast >= minRatio.
  let s = strength;
  while (s > 0) {
    const candidate = mixRgb(fg, bg, s);
    if (contrastRatio(fg, candidate) >= minRatio) return candidate;
    s -= 0.01;
  }
  return bg;
};

const applyPalette = (palette) => {
  const root = document.documentElement;
  const pageBg = toResolvedRgb(palette.pageBg);
  const pageFgPreferred = toResolvedRgb(palette.pageFg);
  const pageFg = pickAccessibleText(pageBg, pageFgPreferred, 4.5);

  // High-contrast card scheme derived from page colors.
  const gridBgPreferred = palette.gridBg ? toResolvedRgb(palette.gridBg) : mixRgb(pageFg, pageBg, 0.88);
  const gridBg = gridBgPreferred;
  const gridFgPreferred = palette.gridFg ? toResolvedRgb(palette.gridFg) : pageBg;
  // Use a stricter target for cards so they read clearly.
  const gridFg = pickAccessibleText(gridBg, gridFgPreferred, 7);

  const hoverBg = palette.hoverBg ? toResolvedRgb(palette.hoverBg) : findHoverBg({ bg: pageBg, fg: pageFg });
  const hoverFg = palette.hoverFg ? toResolvedRgb(palette.hoverFg) : pageFg;

  const gridHoverBg = findHoverBg({ bg: gridBg, fg: gridFg });
  const gridHoverFg = gridFg;

  const pillBg = gridFg;
  const pillFg = pickAccessibleText(pillBg, gridBg, 4.5);

  root.style.setProperty("--page-bg", rgbToCss(pageBg));
  root.style.setProperty("--page-fg", rgbToCss(pageFg));

  root.style.setProperty("--grid-bg", rgbToCss(gridBg));
  root.style.setProperty("--grid-fg", rgbToCss(gridFg));

  root.style.setProperty("--hover-bg", rgbToCss(hoverBg));
  root.style.setProperty("--hover-fg", rgbToCss(hoverFg));

  root.style.setProperty("--grid-hover-bg", rgbToCss(gridHoverBg));
  root.style.setProperty("--grid-hover-fg", rgbToCss(gridHoverFg));

  root.style.setProperty("--pill-bg", rgbToCss(pillBg));
  root.style.setProperty("--pill-fg", rgbToCss(pillFg));
};

applyPalette(pickRandom(palettes));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "work/:id",
    element: <Post />,
  },
  {
    path: "/colophon",
    element: <Colophon />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <FourOhFour />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout currentPath={window.location.pathname}>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
