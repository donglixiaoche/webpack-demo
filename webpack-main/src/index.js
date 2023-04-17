console.log("Hello World --- main!");

async function load() {
  const subApp = await import('subApp/subExposed');
  console.info('sub app --->', subApp);
}

load();
