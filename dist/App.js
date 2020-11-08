import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "../web_modules/svelte/internal.js";

import { calculateDistance } from "./distance.js";

function create_if_block(ctx) {
	let p;
	let t0;
	let t1;
	let t2;
	let a;
	let t3;

	return {
		c() {
			p = element("p");
			t0 = text("Distance :\n        ");
			t1 = text(/*distance*/ ctx[2]);
			t2 = text("\n        from\n        ");
			a = element("a");
			t3 = text("🏠");
			attr(a, "href", /*link2homeGmap*/ ctx[3]);
			attr(a, "target", "_blank");
			attr(p, "class", "svelte-42zq8i");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			append(p, t0);
			append(p, t1);
			append(p, t2);
			append(p, a);
			append(a, t3);
		},
		p(ctx, dirty) {
			if (dirty & /*distance*/ 4) set_data(t1, /*distance*/ ctx[2]);

			if (dirty & /*link2homeGmap*/ 8) {
				attr(a, "href", /*link2homeGmap*/ ctx[3]);
			}
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let header;
	let img;
	let img_src_value;
	let t0;
	let p0;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let p1;
	let t6;
	let t7;
	let t8;
	let p2;
	let t9;
	let t10;
	let t11;
	let t12;
	let button;
	let mounted;
	let dispose;
	let if_block = /*distance*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			header = element("header");
			img = element("img");
			t0 = space();
			p0 = element("p");
			t1 = text("Position : ");
			t2 = text(/*latitude*/ ctx[0]);
			t3 = text(",");
			t4 = text(/*longitude*/ ctx[1]);
			t5 = space();
			p1 = element("p");
			t6 = text("Précision : ");
			t7 = text(/*precision*/ ctx[4]);
			t8 = space();
			p2 = element("p");
			t9 = text("Date : ");
			t10 = text(/*humanDate*/ ctx[5]);
			t11 = space();
			if (if_block) if_block.c();
			t12 = space();
			button = element("button");
			button.textContent = "save position";
			if (img.src !== (img_src_value = "compass-svgrepo-com.svg")) attr(img, "src", img_src_value);
			attr(img, "class", "App-logo svelte-42zq8i");
			attr(img, "alt", "logo");
			attr(p0, "class", "svelte-42zq8i");
			attr(p1, "class", "svelte-42zq8i");
			attr(p2, "class", "svelte-42zq8i");
			attr(button, "class", "btn svelte-42zq8i");
			attr(header, "class", "App-header svelte-42zq8i");
			attr(div, "class", "App svelte-42zq8i");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, header);
			append(header, img);
			append(header, t0);
			append(header, p0);
			append(p0, t1);
			append(p0, t2);
			append(p0, t3);
			append(p0, t4);
			append(header, t5);
			append(header, p1);
			append(p1, t6);
			append(p1, t7);
			append(header, t8);
			append(header, p2);
			append(p2, t9);
			append(p2, t10);
			append(header, t11);
			if (if_block) if_block.m(header, null);
			append(header, t12);
			append(header, button);

			if (!mounted) {
				dispose = listen(button, "click", /*saveLocation*/ ctx[6]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*latitude*/ 1) set_data(t2, /*latitude*/ ctx[0]);
			if (dirty & /*longitude*/ 2) set_data(t4, /*longitude*/ ctx[1]);
			if (dirty & /*precision*/ 16) set_data(t7, /*precision*/ ctx[4]);
			if (dirty & /*humanDate*/ 32) set_data(t10, /*humanDate*/ ctx[5]);

			if (/*distance*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(header, t12);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};
}

const KEY_LOCATION = "confinement:home";

function instance($$self, $$props, $$invalidate) {
	let latitude;
	let longitude;
	let accuracy;
	let lastFix;

	navigator.geolocation.watchPosition(function (position) {
		console.log(position);

		// Destructuring without affectation
		$$invalidate(0, { latitude, longitude, accuracy } = position.coords, latitude, $$invalidate(1, longitude), $$invalidate(7, accuracy));

		$$invalidate(8, lastFix = new Date());
		lastFix.setTime(position.timestamp);
	});

	let reference = {};
	const saved = window.localStorage.getItem(KEY_LOCATION);

	if (saved !== null) {
		reference = JSON.parse(saved);
	}

	const saveLocation = () => {
		$$invalidate(9, reference = { latitude, longitude });
		window.localStorage.setItem(KEY_LOCATION, JSON.stringify(reference));
	};

	let distance;
	let link2homeGmap;
	let precision;
	let humanDate;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*accuracy*/ 128) {
			$: $$invalidate(4, precision = accuracy !== undefined
			? Math.round(accuracy) + "m"
			: undefined);
		}

		if ($$self.$$.dirty & /*lastFix*/ 256) {
			$: $$invalidate(5, humanDate = lastFix !== undefined
			? lastFix.toLocaleString()
			: undefined);
		}

		if ($$self.$$.dirty & /*reference, latitude, longitude*/ 515) {
			$: if (reference.latitude && reference.longitude && latitude && longitude) {
				$$invalidate(2, distance = Math.round(calculateDistance(reference.latitude, reference.longitude, latitude, longitude) * 1000) + "m");
				$$invalidate(3, link2homeGmap = "https://www.google.com/maps/search/?api=1&query=" + reference.latitude + "," + reference.longitude);
			}
		}
	};

	return [
		latitude,
		longitude,
		distance,
		link2homeGmap,
		precision,
		humanDate,
		saveLocation
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;