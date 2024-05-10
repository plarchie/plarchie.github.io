// Function created to change the background

function easy_background(selector, a1, a2, b1, b2, c1, c2, d1, d2, e1, e2, f1, f2) {
	function empty_var(x) {
		if (x) {
			return x;
		} else {
			return 0;
		}
	}

	function empty_img(x) {
		if (x) {
			return "<img src='" + x + "'>";
		} else {
			return '';
		}
	}

	var p = document.createElement('div');
	p.innerHTML = ' ';
	p.classList.add('easy_slider');

	document.body.insertBefore(p, document.body.firstChild);

	document.querySelector('.easy_slider').innerHTML =
		empty_img(a2) + empty_img(b2) + empty_img(c2) + empty_img(d2) + empty_img(e2) + empty_img(f2);

	document.querySelector('.easy_slider').style.display = 'none';

	tot_time = empty_var(a1) + empty_var(b1) + empty_var(c1) + empty_var(d1) + empty_var(e1) + empty_var(f1);

	function slider() {
		if (a1) {
			setTimeout(function() {
				document.querySelector(selector).style.backgroundImage = "url('" + a2 + "')";
			}, 0000); // 1
		}

		if (b1) {
			var delay = a1;
			setTimeout(function() {
				document.querySelector(selector).style.backgroundImage = "url('" + b2 + "')";
			}, delay); // 2
		}

		if (c1) {
			var delay = a1 + b1;
			setTimeout(function() {
				document.querySelector(selector).style.backgroundImage = "url('" + c2 + "')";
			}, delay); // 3
		}

		if (d1) {
			var delay = a1 + b1 + c1;
			setTimeout(function() {
				document.querySelector(selector).style.backgroundImage = "url('" + d2 + "')";
			}, delay); // 4
		}

		if (e1) {
			var delay = a1 + b1 + c1 + d1;
			setTimeout(function() {
				document.querySelector(selector).style.backgroundImage = "url('" + e2 + "')";
			}, delay); // 5
		}
		// if (e1) {
		// 	var delay = a1 + b1 + c1 + d1 + e1;
		// 	setTimeout(function() {
		// 		document.querySelector(selector).style.backgroundImage = "url('" + f2 + "')";
		// 	}, delay); // 5
		// }
	}

	slider();

	setInterval(function() {
		// REPEAT

		slider();
	}, tot_time);
}

easy_background(
	'body',
	9000,
	'./assets/background7.jpg',
	7000,
	'./assets/background9.jpg',
	7000,
	'./assets/background8.jpg',
	7000,
	'./assets/background12.jpg',
	7000,
	'./assets/background10.jpg'
);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
