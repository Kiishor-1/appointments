import { BiTrash } from "react-icons/bi";
const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();

    const daySuffix = (day) => {
        if (day % 10 === 1 && day !== 11) return "st";
        if (day % 10 === 2 && day !== 12) return "nd";
        if (day % 10 === 3 && day !== 13) return "rd";
        return "th";
    };

    return `${day}${daySuffix(day)} ${month}, ${year}`;
};

const AppointmentInfo = ({ appointments, onDeleteAppointment }) => {
    return (
        <li className="px-3 py-3 flex items-start">
            <button
                type="button"
                onClick={() => onDeleteAppointment(appointments?.id)}
                className="p-1.5 mr-2 mt-1 rounded text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
                <BiTrash />
            </button>
            <div className="flex-grow flex flex-col gap-1">
                <span className="flex-grow text-sm font-bold text-blue-500">
                    {appointments?.petName}
                </span>
                <span className="text-sm text-gray-700">
                    Owner: {appointments?.ownerName}
                </span>
                <p className="text-sm mt-2 text-gray-600">{appointments?.aptNotes}</p>
            </div>
            <div className="flex flex-col">
                <span className="md:text-sm text-[10px] ml-4">
                    {formatDate(appointments?.aptDate)}
                </span>
                <span className="md:text-sm text-[10px] ml-4 text-gray-600 font-semibold">
                    {appointments?.aptSlot}
                </span>
            </div>
        </li>
    );
};

export default AppointmentInfo;
