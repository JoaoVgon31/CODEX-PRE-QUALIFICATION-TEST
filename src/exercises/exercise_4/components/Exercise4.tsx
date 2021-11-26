import React, { useState } from 'react';
import { Button, Fab, TextField } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import TodoList from './TodoList';

function Exercise4(): JSX.Element {
	const [todoList, setTodoList] = useState([
		{ id: 'a', description: 'teste' },
		{ id: 'a', description: 'teste' },
		{ id: 'a', description: 'teste' },
	]);

	return (
		<div className="flex justify-center align-start w-full-screen h-full-screen">
			<div className="flex flex-col justify-center align-center w-1/4-screen">
				<div className="flex justify-between w-full align-center">
					<TextField
						multiline
						maxRows={4}
						id="todo"
						label="Insira uma tarefa a fazer"
						variant="outlined"
						margin="normal"
					/>
					<Fab color="primary" aria-label="add">
						<AddIcon />
					</Fab>
				</div>
				<TodoList todoList={todoList} />
				<Button variant="outlined" href="/">
					Voltar
				</Button>
			</div>
		</div>
	);
}

export default Exercise4;
