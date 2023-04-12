import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";
import MyNotes from "./components/MyNotes";
import MyProjects from "./components/MyProjects";
import ChatBox from "./components/ChatBox";
import Calendar from "./components/Calendar";
import Connections from "./components/Connections";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import MainPage from "./components/MainPage";
import Error from "./components/Error";
import ProjectDashboard from "./components/ProjectDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const UserContext = createContext();

const getUser = () => {
    return localStorage.getItem("USER");
};

function App() {
    const [user, setUser] = useState(getUser());
  return (
      <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MainPage />} />
            <Route exact path="/todos" element={<TodoList />} />
            <Route exact path="/notes" element={<MyNotes />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/messages" element={<ChatBox />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/connections" element={<Connections />} />
            <Route path="/projects">
              <Route index element={<MyProjects />} />
              <Route path="/projects/:id" element={<ProjectDashboard />} />
            </Route>
            <Route exact path="/notifications" element={<Notifications />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
