import TodoModel from './todo-model.js';
import TodoIndexView from './todo-index-view.js';


TodoModel.create("first task","blah","today","low");
TodoModel.create("second task","blah","today","low");
TodoModel.create("third task","blah","today","low");
TodoIndexView.render(TodoModel.getTodos());










