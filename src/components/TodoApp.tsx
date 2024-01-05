import {XMarkIcon} from './icons';

const todos = [
  {
    checked: false,
    text: 'Task 1',
  },
  {
    checked: true,
    text: 'Task 2 ',
  },
];

const TodoApp = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg text-white">Tasks</h2>
      <ul>
        {todos.map((todo) => (
          <li className="flex justify-between">
            <label className="flex gap-2">
              <input type="checkbox" checked={todo.checked} />
              <span>{todo.text}</span>
            </label>
            <XMarkIcon className={`w-4 h-4` && todo.checked ? 'block' : 'hidden'} />
          </li>
        ))}
      </ul>
      <input type="text" className="w-full p-1 rounded-sm" placeholder="Add a new task" />
    </div>
  );
};

export default TodoApp;
