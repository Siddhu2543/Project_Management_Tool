import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import axios from "axios";

const getConfig = () => {
  const token = JSON.parse(localStorage.getItem("USER"));
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return config;
};

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: "Project Management Tool", start: new Date(2023, 3, 25) },
  ]);

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [todos, setTodos] = useState([]);
  const [config, setConfig] = useState(getConfig());
  useEffect(() => {
    axios
      .get("https://localhost:7288/api/Employees/tasks", config)
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://localhost:7288/api/Todoes/Employee", config)
      .then((res) => {
        setTodos(res.data.slice(0, 4));
      });
  }, []);

  useEffect(() => {
    axios.get("https://localhost:7288/api/Projects", config).then((res) => {
      setProjects(res.data.slice(0, 4));
    });
  }, []);

  useEffect(() => {
    if (projects)
      setEvents(
        projects.map((p) => {
          return { title: p.title, start: p.endDate };
        })
      );
    if (tasks)
      setEvents((e) =>
        e.concat(
          tasks.map((t) => {
            return { title: t.name, start: t.endDate };
          })
        )
      );
    if (todos)
      setEvents((e) =>
        e.concat(
          todos.map((t) => {
            return { title: t.title, start: t.dueDate };
          })
        )
      );
  }, [projects, todos, tasks]);
  return (
    <section style={{ backgroundColor: "white" }} className="mb-3">
      <div className="p-3">
        <h3 className="text-primary">Due Projects & Tasks</h3>
      </div>
      <div className="p-3">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventBackgroundColor="green"
        />
      </div>
    </section>
  );
};

export default Calendar;
