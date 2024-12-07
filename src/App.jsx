import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AppointmentInfo from "./components/AppointmentInfo";
import AddAppointments from "./components/AddAppointments";
import './App.css';

export function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const fetchData = useCallback(() => {
    fetch("./apt.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase()) ||
        item.aptSlot.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const isSlotAvailable = (aptDate, aptSlot) => {
    return !appointmentList.some(
      (appointment) =>
        appointment.aptDate === aptDate && appointment.aptSlot === aptSlot
    );
  };

  return (
    <div className="app relative container mx-auto mt-3 front-thin w-100 px-4" id="App">
      <h1 className="sticky top-0 bg-white md:text-5xl text-2xl flex items-center gap-2 my-3 py-4 z-[4] rop-shadow-[16px_16px_5px_gray]">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointments
      </h1>

      <AddAppointments
        onSendAppointment={(myAppointment) =>
          setAppointmentList([...appointmentList, myAppointment])
        }
        lastId={appointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
        isSlotAvailable={isSlotAvailable}
      />

      <Search
        query={query}
        onQueryChange={(myQuery) => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={(mySort) => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />

      <ul className="devide-y devide-gray-200">
        {filteredAppointments.map((appointments) => (
          <AppointmentInfo
            key={appointments.id}
            appointments={appointments}
            onDeleteAppointment={(appointmentId) =>
              setAppointmentList(
                appointmentList.filter(
                  (appointment) => appointment.id !== appointmentId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
