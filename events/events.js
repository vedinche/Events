// 1
function linkRape() {
	let linkWrap = document.querySelector('.link-wrap');
	linkWrap.addEventListener('mouseover', changeLinkText);

	function changeLinkText(e) {
		let link = e.target;

		if (link.tagName != 'A') {
			return;
		} else {
			let linkText = link.textContent;
			let title = link.title;
			link.setAttribute('new-title', link.title);
			let newTitle = link.getAttribute('new-title');
			link.removeAttribute('title');
			link.textContent = newTitle + '(' + link.href + ')';

			linkWrap.addEventListener('mouseout', () => {
				link.textContent = linkText;
				link.title = title;
			});

		}

	}

}

linkRape();

// 2
function printValue() {
	let input = document.querySelectorAll('.first-input-block input');

	input.forEach(elem => {
		elem.addEventListener('click', function () {
			console.log(elem.value);
		}, {
			once: true
		});
	});

}

printValue();

// 3
function squareNumber() {
	let str = document.querySelectorAll('.text-wrap p span');

	str.forEach(elem => {
		elem.addEventListener('click', function (e) {
			let number = e.target;

			if (number.tagName != 'SPAN') {
				return;
			} else {
				number.textContent *= number.textContent;
			}
		}, {
			once: true
		});
	});
}

squareNumber();

// 4
function checkInput() {
	let input = document.querySelectorAll('.second-input-block input');

	input.forEach(elem => {
		elem.addEventListener('blur', () => {
			elem.setAttribute('data-length', 10);
			let dataLength = elem.getAttribute('data-length');

			if (elem.value.length != dataLength) {
				elem.style.borderColor = 'red';
			} else {
				elem.style.borderColor = 'green';
			}
		});
	});
}

checkInput();