import { Fab } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import firebase from '../../../config/firebase';
import iTodo from '../iTodo';

interface TodoListProperties {
	todoList: Array<iTodo>;
}

function TodoList({ todoList }: TodoListProperties): JSX.Element {
	const handleDeleteTodo = (todoId: string): void => {
		const db = firebase.firestore();
		db.collection('Todos').doc(todoId).delete();
	};

	return (
		<div className="flex flex-col justify-center w-full align-center">
			{todoList.map((todo) => (
				<div className="flex justify-between w-full align center margin-y-small border-bottom-solid padding-y-small">
					<div className="flex h-auto align-center text-overflow-break max-w-4/5">{todo.description}</div>
					<Fab size="small" aria-label="add" onClick={(): void => handleDeleteTodo(todo.id)}>
						<DeleteIcon />
					</Fab>
				</div>
			))}
		</div>
	);
}

export default TodoList;
