import './lib/cohtml.js';
import './lib/cohtml-workarounds.js';

import App from './App.svelte';

let app = null;

function startApp() {
	const app = new App({
		target: document.getElementById('app'),
	});
}

window.engine ? engine.whenReady.then(() => startApp()) : startApp();

export default app;
