var BOX = {};

BOX.Todo = Backbone.Model.extend({

    defaults: {
        id: null,
        title: '',
        done: false
    }

});

BOX.TodoList = Backbone.Collection.extend({
    model: BOX.Todo,

    initialize: function() {
        this.add(DB.getAll());
    },

    saveNewTodo: function (title) {
        var todo = DB.set({
            title: title,
            done: false
        });
        this.unshift(todo);
    },

    toggleTodo: function (id) {
        var todo = this.get(id);
        todo.set({ done:!todo.get('done') });
    },

    deleteTodo: function(id) {
        DB.del(id);
        this.remove(id);
    }
});

BOX.View = Backbone.View.extend({
    el: '#todo',

    events: {
        "submit form": "formSubmit",
        "click .done-button": "toggleTodo",
        "click .del-button": "deleteTodo"
    },

    template: _.template($('#todo-item').html()),

    _templateInit: function(todo) {
        return this.template({
            id: todo.id,
            title: todo.title,
            hide: todo.done ? '' : 'hide',
            done: todo.done ? 'done' : '',
            btnText: todo.done ? 'Undone' : 'Done'
        });
    },

    initialize: function() {
        this.$todoItems = this.$el.find('.items');
        
        this.collection.on('change', this.change, this);
        this.collection.on('add', this.add, this);
        this.collection.on('remove', this.remove, this);
        
        this.draw();
    },

    change: function(model) {
        var $todo = this.$el.find('#' + model.id);
        $todo.replaceWith(this._templateInit(model.toJSON()));
    },

    add: function(model) {
        this.$todoItems.prepend(this._templateInit(model.toJSON()));
    },

    remove: function (model) {
        this.$el.find('#' + model.id).remove();
    },

    draw: function() {
        var todoHtml = '', self = this;

        self.collection.each(function(model) {
            todoHtml += self._templateInit(model.toJSON());
        });
        self.$todoItems.append(todoHtml);
    },

    toggleTodo: function(ev) {
        this.collection.toggleTodo(ev.target.parentNode.id);
    },

    deleteTodo: function (ev) {
        this.collection.deleteTodo(ev.target.parentNode.id);
    },

    formSubmit: function(ev) {
        ev.preventDefault();
        this.collection.saveNewTodo(ev.target.title.value);
        ev.target.title.value = '';
    }
});

var app = new BOX.View({ collection: new BOX.TodoList() });