export const SubA = 1;

console.info('this is sub-app');

async function load() {
  const mainApp = await import('mainApp/mainExposed')
  console.info('main app --->', mainApp);
}

load();
