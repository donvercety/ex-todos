// vanilla JS - ES5 compatible TODO list
// laziness, redrawing todos on each manipulation :)
(function () {
	"use strict";

	var FORM = document.querySelector('form');
	var UL   = document.querySelector('ul');
	
	var TEMPLATE = '';

	TEMPLATE += '<li id={id}>';
	TEMPLATE += '  <span class="item {done}">{title}</span>';
	TEMPLATE += '  <a class="del-button {hide}"> X </a>';
	TEMPLATE += '  <a class="done-button">{btnText}</a>';
	TEMPLATE += '</li>';

	FORM.addEventListener('submit', function (event) {
		event.preventDefault();
		DB.set({
			title: FORM.elements.title.value.trim(),
			done: false
		});
		FORM.elements.title.value = '';
		draw();
	});

	UL.addEventListener('click', function (event) {
		event.stopPropagation();

		if (event.target.classList.contains('done-button')) {
			var todo  = DB.get(event.target.parentNode.id);
			todo.done = !todo.done;
			
			DB.put(todo);
			draw();
		
		} else if (event.target.classList.contains('del-button')) {		
			DB.del(event.target.parentNode.id);
			draw();
		}
	});

	function str(str, object) {
		return str.replace(/\\?\{([^{}]+)\}/g, function (match, name) {
			return (object[name] != null) ? object[name] : match;
		});
	};

	function escapeHtml(str) {
		return str.replace(/[&<>"'\/]/g, function (s) {
			var entityMap = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': '&quot;',
				"'": '&#39;',
				"/": '&#x2F;'
			};

			return entityMap[s];
		});
	}

	function draw() {
		var html = '';

		DB.getAll().forEach(function (todo) {
			html += str(TEMPLATE, {
				id: todo.id,
				title: escapeHtml(todo.title),
				hide: todo.done ? '' : 'hide',
				done: todo.done ? 'done' : '',
				btnText: todo.done ? 'Undone' : 'Done'
			});
		});
		UL.innerHTML = html;
	}

	draw();
}());
