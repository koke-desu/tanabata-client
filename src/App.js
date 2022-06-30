import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { onCreateTodo } from './graphql/subscriptions';
import './App.css'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  // formStateでサーバのやつを取得してるはず todosとどこかで役割交代してる気がする？？
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }

    //多分ここにsubscribe
    
    await API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        console.log('eventData: ', eventData)
        const post = eventData.value.data.onCreateTodo
        const posts = [...formState.filter(content => {
          return (content.title !== post.title)
        }), post]
        // 魔改造した。多分やばい
        setTodos(posts)
      }
    })

  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      // createTodo
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div className='wrapper'>

    <div className="container" style={styles.container}>
      <h2 style={styles.header}>短冊 client</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="企業名"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="内容"
      />
      <button style={styles.button} onClick={addTodo}>短冊作成</button>

      </div>
      <div className='todo_container'>
      <h2>短冊 host</h2>
      {
        todos.map((todo, index) => (
          <div className='todo' key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>

    </div>
  )
}

const styles = {
  header: {marginTop: 0, marginBottom: 0 },
  container: { width: 500, height: 1095, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: { width: '100%',  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 14, marginLeft: 30},
  todoDescription: { fontSize: 16, fontWeight: 'bold', marginTop: -20, marginLeft: 30 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App
