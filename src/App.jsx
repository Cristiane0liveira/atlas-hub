import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [titulo, setTitulo] = useState('')

  const adicionarTarefa = (e) => {
    e.preventDefault()
    if (!titulo) return
    
    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      status: 'Pendente'
    }

    setTarefas([...tarefas, novaTarefa])
    setTitulo('')
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Gerenciamento de Tarefas - Atlas Jr</h1>
      
      {/* Formulário de Cadastro (Ciclo 2) */}
      <form onSubmit={adicionarTarefa} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Nome da tarefa..." 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{ padding: '8px', marginRight: '10px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Adicionar Tarefa</button>
      </form>

      {/* Exibição das Tarefas (Ciclo 2) */}
      <h2>Minhas Tarefas</h2>
      <ul>
        {tarefas.length === 0 ? (
          <p>Nenhuma tarefa cadastrada ainda.</p>
        ) : (
          tarefas.map((tarefa) => (
            <li key={tarefa.id} style={{ marginBottom: '8px' }}>
              <strong>{tarefa.titulo}</strong> - <span>{tarefa.status}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default App