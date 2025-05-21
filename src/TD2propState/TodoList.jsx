import React, { useState } from 'react';

const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Moyenne');
  const [search, setSearch] = useState('');

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, priority, done: false }]);
      setTaskName('');
      setPriority('Moyenne');
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = tasks.filter(t => t.done).length;

  return (
    <div>
      <input value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Nom de la tâche" />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>

      <input
        placeholder="Rechercher une tâche..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredTasks.map((task, i) => (
          <li key={i} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.name} ({task.priority})
            <button onClick={() => toggleTask(i)}>
              {task.done ? "Annuler" : "Terminer"}
            </button>
          </li>
        ))}
      </ul>
      <p>Total : {tasks.length} | Terminées : {completedCount}</p>
    </div>
  );
};

export default TodoList;
/*🧠 Explication :
Ajout de tâches avec nom et priorité.

Recherche dynamique avec filtre.

Statut terminé avec ligne barrée et compteur.

*/