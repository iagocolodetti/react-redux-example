import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from './actions';

function App() {

  const r_counter = useSelector(state => state.counter);
  const r_text = useSelector(state => state.text);
  const r_todo = useSelector(state => state.todo);

  const [text, setText] = useState('');
  const [todo, setTodo] = useState('');
  const [todoId, setTodoId] = useState('');

  const dispatch = useDispatch();

  function r_increment() {
    dispatch(actions.counterActions.increment());
  }

  function r_decrement() {
    dispatch(actions.counterActions.decrement());
  }

  function r_setText() {
    if (text.length > 0) {
      dispatch(actions.textActions.setText(text));
    }
  }

  function r_addTodo() {
    if (todo.length > 0) {
      dispatch(actions.todoActions.addTodo(todo));
    }
  }

  function r_removeTodoID() {
    if (todoId.length > 0) {
      try {
        dispatch(actions.todoActions.removeTodoID(parseInt(todoId)));
      } catch { }
    }
  }

  return (
    <div className="app center">
      <div className="card">
        <label>Counter: {r_counter}</label>
        <br />
        <button className="btn" onClick={r_increment}>increment</button>
        <button className="btn" onClick={r_decrement}>decrement</button>
      </div>
      <div className="card">
        <label>Text: {r_text}</label>
        <br />
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <br />
        <button className="btn" onClick={r_setText}>set</button>
      </div>
      <div className="card">
        <label>TODO</label>
        <ul>
          {r_todo.map(t => (
            <li key={t.id}>({t.id}) {t.todo}</li>
          ))}
        </ul>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <button className="btn" onClick={r_addTodo}>add</button>
        <br />
        <input type="number" value={todoId} onChange={e => setTodoId(e.target.value)} />
        <button className="btn" onClick={r_removeTodoID}>remove</button>
      </div>
    </div>
  );
}

export default App;
