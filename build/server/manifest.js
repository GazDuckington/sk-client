export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
<<<<<<< HEAD
		entry: {"file":"_app/immutable/start-895aabb6.js","imports":["_app/immutable/start-895aabb6.js","_app/immutable/chunks/index-763cb326.js","_app/immutable/chunks/index-211dbb97.js"],"stylesheets":[]},
=======
		entry: {"file":"_app/immutable/start-cb59b9ce.js","imports":["_app/immutable/start-cb59b9ce.js","_app/immutable/chunks/index-c463d8ff.js","_app/immutable/chunks/index-5d0ced2c.js"],"stylesheets":[]},
>>>>>>> dev
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "sentiment",
				pattern: /^\/sentiment\/?$/,
				names: [],
				types: [],
				path: "/sentiment",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
