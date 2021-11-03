import TodoModel from './todo-model.js';

TodoModel.create('take out the trash','all the way to the trash can','today','low');
TodoModel.create('take out the recycling','all the way to the trash can','today','low');
TodoModel.create('take out the girlfriend','all the way to the trash can','today','low');

TodoModel.destroy(0);

console.log(TodoModel.read(0).getTitle());
console.log(TodoModel.read(1).getTitle());










