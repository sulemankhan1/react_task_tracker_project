import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor Apointement",
        day: "Feb 5th at 2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: "Complete Tasks",
        day: "Feb 5th at 4:30pm",
        reminder: false
    },
    {
        id: 3,
        text: "Write Application",
        day: "Feb 6th at 6:30am",
        reminder: false
    }
]);

  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const submitTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}

    setTasks([...tasks, newTask]);
  }

  const toggleForm = () => {
    console.log('toggle')
    setShowForm(!showForm);
  }
  return (
    <div className="container">
      <Header title="Task Tracker" onToggle={toggleForm} AddButtonText={showForm} />
      {showForm && <AddTask onAdd={submitTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to show"}
    </div>
  );
}

export default App;
