import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";
import toast from "react-hot-toast";

const AddAppointments = ({ onSendAppointment, lastId, isSlotAvailable }) => {
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptNotes: "",
    aptSlot: "",
  };
  
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function validateForm() {
    let errors = false;
    if (!formData.ownerName.trim()) {
      toast.error("Owner name is required.");
      errors = true;
    }
    if (!formData.petName.trim()) {
      toast.error("Pet name is required.");
      errors = true;
    }
    if (!formData.aptDate) {
      toast.error("Appointment date is required.");
      errors = true;
    }
    if (!formData.aptSlot) {
      toast.error("Appointment slot is required.");
      errors = true;
    }
    if (!formData.aptNotes.trim()) {
      toast.error("Appointment notes are required.");
      errors = true;
    }

    if (formData.aptDate && formData.aptSlot) {
      const slotConflict = !isSlotAvailable(formData.aptDate, formData.aptSlot);
      if (slotConflict) {
        toast.error("Selected slot is unavailable. Please choose another.");
        errors = true;
      }
    }

    return !errors;
  }

  function formDataPublish() {
    if (!validateForm()) return;

    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate,
      aptNotes: formData.aptNotes,
      aptSlot: formData.aptSlot,
    };

    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

  return (
    <div className="ml-2 my-2">
      <button
        onClick={() => setToggleForm(!toggleForm)}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div className="flex items-center gap-2">
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                onChange={(event) =>
                  setFormData({ ...formData, ownerName: event.target.value })
                }
                value={formData.ownerName}
                className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                onChange={(event) =>
                  setFormData({ ...formData, petName: event.target.value })
                }
                value={formData.petName}
                className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                onChange={(event) =>
                  setFormData({ ...formData, aptDate: event.target.value })
                }
                value={formData.aptDate}
                className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="aptSlot"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Slot
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="flex flex-wrap items-start gap-2">
                {["Morning", "Afternoon", "Evening"].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setFormData({ ...formData, aptSlot: slot })}
                    className={`px-4 py-2 text-center rounded-md border  ${!formData.aptDate ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}
                      ${formData.aptSlot === slot ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} 
                      border-blue-500 focus:outline-none`}
                    disabled={!formData?.aptDate}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="4"
                onChange={(event) =>
                  setFormData({ ...formData, aptNotes: event.target.value })
                }
                value={formData.aptNotes}
                className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={formDataPublish}
            className="bg-blue-400 text-white px-4 py-2 rounded-md mt-4"
            disabled={!formData.aptDate}
          >
            Add Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default AddAppointments;
