/** @type {import('./$types').LayoutLoad} */
export function load() {
  return {
    routes: [
      { path: '/', name: 'Home' },
      { path: 'about', name: 'About' }
    ]
  };
}