import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

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
  const [taskToUpdate, setTaskToUpdate] = useState(null);


  const handleAddEditTask = (newTask, isAdd) => {
    if(isAdd){
      setTasks([...tasks, newTask]);
    } else {
      setTasks( tasks.map( (task) => {
        if(task.id === newTask.id){
          return newTask;
        }else{
          return task;
        }
      } ) )
    }
    
    setShowAddModal(false);
    
  }

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  // Defining handleCloseClick
  const handleCloseClick = () => {
    // Hide modal
    setShowAddModal(false);
    // only hiding modal wont give solution, the state placed in modal i have to nullify those state 
    setTaskToUpdate(null);

  }

  // Defining handleDeleteTask
  const handleDeleteTask = (taskId) => {
    // List of Task after delete
    const taskAfterDelete = tasks.filter(task => task.id !== taskId);
    // now updating the task list
    setTasks(taskAfterDelete);
  }

  // Defining handleDeleteAllTask
  const handleDeleteAllTask = () => {
    // make the array empty
    tasks.length = 0;
    // Then we create a copy of array and update it on setTask state
    setTasks([...tasks]);
  }

  // Defining handleFavorite function
  const handleFavorite = (taskId) => {
    // firstly, read the index of taskId which has passed
    const taskIndex = tasks.findIndex( task => task.id === taskId );
    // cloning the existing task using spread operator
    const newTask = [...tasks];
    // now going to the particular index of newTask. Toggle the isFavorite. if previously it was true, now make it false
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    // Now update the newTask on setTask state
    setTasks(newTask);
  }
  // Defining handleSearch functionality
  const handleSearch = (searchTerm) => {
    // doing console.log for is the search term correctly passing or not
    console.log(searchTerm);
    // We will do search on the basis of task title. 
    /* using filter. For each task we check on task title that the searchTerm exist or not. for that we use includes which is method of string. Using this method we are matching.*/
    const filteredTask = tasks.filter( (task) => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // updating the filteredTask on setTask state.
    setTasks([...filteredTask]);
  }
  return (
    <>
      <section className="mb-20 " id="tasks">
        { showAddModal && <AddTaskModal onSave={handleAddEditTask} onCloseClick={handleCloseClick} taskToUpdate={taskToUpdate}/>}
        <div className="container">
          
          <SearchTask onSearch={handleSearch}/>
          
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddClick={() => setShowAddModal(true)} onDeleteAllClick={handleDeleteAllTask}/>
            {/* Handled the corner case like when task list is empty. */}
            {
              tasks.length > 0 ? (
                <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onFav={handleFavorite}/>
              ) : (<NoTaskFound/>)
            } 
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
