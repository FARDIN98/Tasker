import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {

  const defaultTask = {
    'id': crypto.randomUUID(),
    'title': "Learn React",
    "description": "I want to learn React such that I can treat it like my slave and make it to do whatever i want to do.",
    'tags': ['web', 'react', 'js'],
    'priority': "High",
    'isFavorite': true
  }

  const [tasks, setTasks] = useState([defaultTask]);  
  const [showAddModal, setShowAddModal] = useState(false);


  const handleAddTask = (newTask) => {
    console.log("Adding a task...", newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
    
  }
  
  return (
    <>
      <section className="mb-20 " id="tasks">
        { showAddModal && <AddTaskModal onSave={handleAddTask}/>}
        <div className="container">
          
          <SearchTask/>
          
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddClick={() => setShowAddModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;