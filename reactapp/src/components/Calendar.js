import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: "Project Management Tool", start: new Date(2023, 3, 25) },
  ]);
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
