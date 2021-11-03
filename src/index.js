import Todo from './todo-factory.js';

var todo1 = Todo('take out the trash','take the trash to the garbage can','today','low');
todo1.setTitle('go get groceries');
console.log(todo1.getTitle());

todo1.setDescription('go to whole foods');
console.log(todo1.getDescription());

todo1.setDueDate('tomorrow');
console.log(todo1.getDueDate());

todo1.setPriority('medium');
console.log(todo1.getPriority());

todo1.setComplete();
console.log(todo1.getIsComplete());

todo1.setIncomplete();
console.log(todo1.getIsComplete());
