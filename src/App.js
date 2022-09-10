import "./App.css";
import React from "react";
import Profile from "./Components/makeProfile";
import ToDo from "./Components/makeToDo";
// import { v4 as uuidv4 } from 'uuid';
function App() {
  const data = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "Drink tea", status: false },
    { id: 3, title: "Eat maggi", status: true },
    { id: 4, title: "Sleep", status: false }
  ];

  const profileData = {
    image: "https://avatars.githubusercontent.com/u/95065465?v=4",
    name: "Md Talib Ansari",
    age: 22,
    location: "Bengaluru",
    organization: "Masai School"
  };
  function getStatus() {
    return document.getElementById("taskStatus").checked;
  }
  const [query, setQuery] = React.useState("");
  const handleChange = (e) => {
    // console.log(e.target.value)
    setQuery(e.target.value);
  };

  const [tasks, setTasks] = React.useState(data);
  const handleAddedTask = () => {
    const payload = {
      title: query,
      // id : uuidv4(),
      status: getStatus()
    };

    let newTasks = [...tasks, payload];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div className="ProfileSection">
        <Profile profileData={profileData} />
      </div>
      <div className="ToDoSection">
        <div>
          <input
            value={query}
            onChange={handleChange}
            type="text"
            placeholder="Add Something"
          />
          <input id="taskStatus" type="checkbox" />
          <button onClick={handleAddedTask}>ADD</button>
        </div>
        <h1>To Do List</h1>
        {tasks.map((item) => {
          return <ToDo todo={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
