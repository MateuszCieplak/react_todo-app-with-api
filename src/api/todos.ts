import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';
import { USER_ID } from '../App';

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

// Add more methods here

export const postTodo = (newTodo: Todo) => {
  return client.post<Todo>('/todos', newTodo);
};

export const updateTodo = (editedTodo: Todo) => {
  return client.patch<Todo>(`/todos/${editedTodo.id}`, editedTodo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};
