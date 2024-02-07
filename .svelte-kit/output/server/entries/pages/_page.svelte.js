import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
import * as d3 from "d3";
const width = 928;
const height = 600;
const marginTop = 20;
const marginRight = 30;
const marginBottom = 30;
const marginLeft = 40;
const Temperature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let x;
  let y;
  let max;
  let color;
  let { data } = $$props;
  let svg;
  let gx;
  let gy;
  const bisect = d3.bisector((d) => d.date).center;
  let tooltipPt = null;
  function onPointerMove(event) {
    const i = bisect(data, x.invert(d3.pointer(event)[0]));
    tooltipPt = data[i];
  }
  function onPointerLeave(event) {
    tooltipPt = null;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  x = d3.scaleUtc().domain(d3.extent(data, (d) => d.date)).range([marginLeft, width - marginRight]);
  y = d3.scaleLinear().domain(d3.extent(data, (d) => d.value)).nice().range([height - marginBottom, marginTop]);
  max = d3.max(data, (d) => Math.abs(d.value));
  color = d3.scaleSequential().domain([max, -max]).interpolator(d3.interpolateRdBu);
  {
    d3.select(gx).call(d3.axisBottom(x).ticks(width / 80));
  }
  {
    d3.select(gy).call(d3.axisLeft(y).ticks(null, "+")).call((g) => g.selectAll(".tick line").clone().attr("x2", width - marginRight - marginLeft).attr("stroke-opacity", (d) => d === 0 ? 1 : 0.1));
  }
  {
    d3.select(svg).on("pointerenter pointermove", onPointerMove).on("pointerleave", onPointerLeave);
  }
  return `<div class="temperature-plot"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 " + escape(width, true) + " " + escape(height, true)}" style="max-width: 100%; height: auto;"${add_attribute("this", svg, 0)}><g transform="${"translate(0," + escape(height - marginBottom, true) + ")"}"${add_attribute("this", gx, 0)}></g><g transform="${"translate(" + escape(marginLeft, true) + ",0)"}"${add_attribute("this", gy, 0)}><text x="5"${add_attribute("y", marginTop, 0)} dy="0.32em" fill="#000" font-weight="bold" text-anchor="start">Anomaly (°C)</text></g><g stroke="#000" stroke-opacity="0.2">${each(data, (d, i) => {
    return `<circle${add_attribute("key", i, 0)}${add_attribute("cx", x(d.date), 0)}${add_attribute("cy", y(d.value), 0)}${add_attribute("fill", color(d.value), 0)} r="2.5"></circle>`;
  })}</g>${tooltipPt ? `<g transform="${"translate(" + escape(x(tooltipPt.date), true) + "," + escape(y(tooltipPt.value), true) + ")"}"><text font-weight="bold">${escape(tooltipPt.value)}</text></g>` : ``}</svg></div> `;
});
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');:root{--color-bg:#ffffff;--color-outline:#c2c2c2;--color-shadow:hsl(0, 0%, 0%, 0.1);--color-text:#3f4252;--color-bg-1:hsla(0, 0%, 0%, 0.2);--color-shadow-1:hsl(0, 0%, 96%)}.svelte-18ho554,.svelte-18ho554::before,.svelte-18ho554::after{margin:0;padding:0;box-sizing:border-box}main.svelte-18ho554{text-align:center;font-family:'Nunito', sans-serif;font-weight:300;line-height:2;font-size:24px;color:var(--color-text)}h1.svelte-18ho554{font-size:2em;font-weight:300;line-height:2}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  $$result.css.add(css);
  return `<main class="svelte-18ho554"><h1 class="svelte-18ho554" data-svelte-h="svelte-jvtdkj">Global Temperature Trends</h1> ${validate_component(Temperature, "Temperature").$$render($$result, { data }, {}, {})} </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
