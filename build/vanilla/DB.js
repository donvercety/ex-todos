var DB = (function(prev, storage, DB_NAME) {

	function supported() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		}
		catch (e) {
			return false;
		}
	}

	if (!supported()) {
		return alert('NO Local Storage functionality!');
	}

	function _load() {
		var DB = localStorage.getItem(DB_NAME);
		return JSON.parse(DB) || [];
	}

	function _save() {
		localStorage.setItem(DB_NAME, JSON.stringify(storage));
		return true;
	}

	storage = _load();

	function _uid() {
		var date = Date.now();
		date = (date <= prev) ? ++prev : date;
		return date.toString(16);
	}

	return {

		getAll: function() {
			return storage;
		},

		set: function(todo) {

			if (!todo.title || typeof todo.done === 'undefined') {
				return false;
			}

			todo.id = _uid();
			storage.unshift(todo);
			
			_save();
			return todo;
		},

		get: function(todoId) {
			for (var i = 0; i < storage.length; i++){ 
				if (storage[i].id == todoId) {
					return storage[i];					
				}
			}
		},

		put: function(todo) {
			for (var i = 0; i < storage.length; i++){ 
				if (storage[i].id == todo.id) {
					storage[i] = todo;
					
					_save();
					return storage[i];
				}
			}
		},

		del: function(todoId) {
			var deleted = {};
			
			for (var i = 0; i < storage.length; i++){ 
				if (storage[i].id == todoId) {
					var deleted = storage[i];
					storage.splice(i, 1);

					_save();
					return deleted;
				}
			}
		}

	};

} (0, {}, "APP_TODO"));
