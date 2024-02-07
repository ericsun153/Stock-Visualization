

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9-zJDXV_.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.pdK9gPQz.js","_app/immutable/chunks/entry.139-Nm6X.js"];
export const stylesheets = [];
export const fonts = [];
