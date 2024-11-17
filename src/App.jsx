import Footer from "./Footer";
import Hero from "./Hero";
import TaskBoard from "./Task/TaskBoard";

function App() {
  return (
    <>      
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
