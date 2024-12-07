// import { BiCalendarPlus } from "react-icons/bi";
// import { useState } from "react";

// const AddAppointments = ({ onSendAppointment, lastId }) => {
//   const clearData = {
//     ownerName: "",
//     petName: "",
//     aptDate: "",
//     aptTime: "",
//     aptNotes: "",
//     aptSlot: "",
//   };
//   let [toggleForm, setToggleForm] = useState(false);
//   let [formData, setFormData] = useState(clearData);

//   function formDataPublish() {
//     const appointmentInfo = {
//       id: lastId + 1,
//       ownerName: formData.ownerName,
//       petName: formData.petName,
//       aptDate: formData.aptDate + " " + formData.aptTime,
//       aptNotes: formData.aptNotes,
//       aptSlot: formData.aptSlot,
//     };
//     onSendAppointment(appointmentInfo);
//     setFormData(clearData);
//     setToggleForm(!toggleForm);
//   }

//   return (
//     <div className="ml-2 my-2">
//       <button
//         onClick={() => setToggleForm(!toggleForm)}
//         className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
//           toggleForm ? "rounded-t-md" : "rounded-md"
//         }`}
//       >
//         <div>
//           <BiCalendarPlus className="inline-block align-text-top" /> Add
//           Appointment
//         </div>
//       </button>
//       {toggleForm && (
//         <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4">
//           {/* Form Fields */}
//           {/* Owner Name */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Owner Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="ownerName"
//                 id="ownerName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, ownerName: event.target.value })
//                 }
//                 value={formData.ownerName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Pet Name */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Pet Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="petName"
//                 id="petName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, petName: event.target.value })
//                 }
//                 value={formData.petName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Appointment Date */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Appointment Date
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="date"
//                 name="aptDate"
//                 id="aptDate"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptDate: event.target.value })
//                 }
//                 value={formData.aptDate}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Appointment Time */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Appointment Time
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="time"
//                 name="aptTime"
//                 id="aptTime"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptTime: event.target.value })
//                 }
//                 value={formData.aptTime}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Appointment Slot */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Appointment Slot
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2 flex gap-4">
//               {["Morning", "Afternoon", "Evening"].map((slot) => (
//                 <div
//                   key={slot}
//                   onClick={() => setFormData({ ...formData, aptSlot: slot })}
//                   className={`px-4 py-2 border rounded-md cursor-pointer ${
//                     formData.aptSlot === slot
//                       ? "bg-blue-400 text-white border-blue-500"
//                       : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   {slot}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Notes */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Notes
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <textarea
//                 id="aptNotes"
//                 name="aptNotes"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptNotes: event.target.value })
//                 }
//                 value={formData.aptNotes}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <p className="text-right">
//             <button
//               onClick={formDataPublish}
//               type="submit"
//               className="mt-4 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddAppointments;


// import { BiCalendarPlus } from "react-icons/bi";
// import { useState } from "react";
// import { toast } from "react-hot-toast";

// const AddAppointments = ({ onSendAppointment, lastId, bookedAppointments }) => {
//   const clearData = {
//     ownerName: "",
//     petName: "",
//     aptDate: "",
//     aptTime: "",
//     aptNotes: "",
//     aptSlot: "",
//   };

//   let [toggleForm, setToggleForm] = useState(false);
//   let [formData, setFormData] = useState(clearData);

//   function isSlotAvailable(selectedDate, selectedSlot, selectedTime) {
//     const selectedTimeInMinutes = convertTimeToMinutes(selectedTime);

//     // Check all booked appointments for conflicts
//     const conflictingAppointment = bookedAppointments.find((appointment) => {
//       if (
//         appointment.aptDate === selectedDate &&
//         appointment.aptSlot === selectedSlot
//       ) {
//         const bookedTimeInMinutes = convertTimeToMinutes(
//           appointment.aptTime.split(" ")[1]
//         );
//         return Math.abs(bookedTimeInMinutes - selectedTimeInMinutes) < 60; // Less than 1 hour difference
//       }
//       return false;
//     });

//     return !conflictingAppointment;
//   }

//   function convertTimeToMinutes(time) {
//     const [hours, minutes] = time.split(":").map(Number);
//     return hours * 60 + minutes;
//   }

//   function formDataPublish() {
//     const { aptDate, aptSlot, aptTime } = formData;

//     // Validation: Check if the slot is available
//     if (!isSlotAvailable(aptDate, aptSlot, aptTime)) {
//       toast.error("This slot is already booked. Choose another time.");
//       return;
//     }

//     // Create appointment object and send
//     const appointmentInfo = {
//       id: lastId + 1,
//       ownerName: formData.ownerName,
//       petName: formData.petName,
//       aptDate: aptDate + " " + aptTime,
//       aptNotes: formData.aptNotes,
//       aptSlot: aptSlot,
//     };
//     onSendAppointment(appointmentInfo);
//     setFormData(clearData);
//     setToggleForm(!toggleForm);
//   }

//   return (
//     <div className="ml-2 my-2">
//       <button
//         onClick={() => setToggleForm(!toggleForm)}
//         className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
//           toggleForm ? "rounded-t-md" : "rounded-md"
//         }`}
//       >
//         <div>
//           <BiCalendarPlus className="inline-block align-text-top" /> Add
//           Appointment
//         </div>
//       </button>
//       {toggleForm && (
//         <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4">
//           {/* Form Fields */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptDate"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Date
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="date"
//                 name="aptDate"
//                 id="aptDate"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptDate: event.target.value })
//                 }
//                 value={formData.aptDate}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Slot
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2 flex gap-4">
//               {["Morning", "Afternoon", "Evening"].map((slot) => (
//                 <div
//                   key={slot}
//                   onClick={() =>
//                     formData.aptDate &&
//                     setFormData({ ...formData, aptSlot: slot })
//                   }
//                   className={`px-4 py-2 border rounded-md cursor-pointer ${
//                     formData.aptDate
//                       ? formData.aptSlot === slot
//                         ? "bg-blue-400 text-white border-blue-500"
//                         : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                       : "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   }`}
//                   disabled={!formData.aptDate}
//                 >
//                   {slot}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Appointment Time */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptTime"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Time
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="time"
//                 name="aptTime"
//                 id="aptTime"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptTime: event.target.value })
//                 }
//                 value={formData.aptTime}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Notes */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptNotes"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Notes
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <textarea
//                 id="aptNotes"
//                 name="aptNotes"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptNotes: event.target.value })
//                 }
//                 value={formData.aptNotes}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <p className="text-right">
//             <button
//               onClick={formDataPublish}
//               type="submit"
//               className="mt-4 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddAppointments;



// import { BiCalendarPlus } from "react-icons/bi";
// import { useState } from "react";

// const AddAppointments = ({ onSendAppointment, lastId, isSlotAvailable }) => {
//   const clearData = {
//     ownerName: "",
//     petName: "",
//     aptDate: "",
//     aptTime: "",
//     aptNotes: "",
//     aptSlot: "",
//   };
//   let [toggleForm, setToggleForm] = useState(false);
//   let [formData, setFormData] = useState(clearData);
//   let [formErrors, setFormErrors] = useState({});

//   function validateForm() {
//     let errors = {};
//     if (!formData.ownerName.trim()) errors.ownerName = "Owner name is required.";
//     if (!formData.petName.trim()) errors.petName = "Pet name is required.";
//     if (!formData.aptDate) errors.aptDate = "Appointment date is required.";
//     if (!formData.aptTime) errors.aptTime = "Appointment time is required.";
//     if (!formData.aptSlot) errors.aptSlot = "Appointment slot is required.";
//     if (!formData.aptNotes.trim())
//       errors.aptNotes = "Appointment notes are required.";

//     // Slot availability check
//     if (formData.aptDate && formData.aptTime && formData.aptSlot) {
//       const slotConflict = !isSlotAvailable(
//         formData.aptDate,
//         formData.aptTime,
//         formData.aptSlot
//       );
//       if (slotConflict) {
//         errors.aptSlot = "Selected slot is unavailable. Please choose another.";
//       }
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }

//   function formDataPublish() {
//     if (!validateForm()) return;

//     const appointmentInfo = {
//       id: lastId + 1,
//       ownerName: formData.ownerName,
//       petName: formData.petName,
//       aptDate: formData.aptDate + " " + formData.aptTime,
//       aptNotes: formData.aptNotes,
//       aptSlot: formData.aptSlot,
//     };

//     onSendAppointment(appointmentInfo);
//     setFormData(clearData);
//     setFormErrors({});
//     setToggleForm(!toggleForm);
//   }

//   return (
//     <div className="ml-2 my-2">
//       <button
//         onClick={() => setToggleForm(!toggleForm)}
//         className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
//           toggleForm ? "rounded-t-md" : "rounded-md"
//         }`}
//       >
//         <div>
//           <BiCalendarPlus className="inline-block align-text-top" /> Add
//           Appointment
//         </div>
//       </button>
//       {toggleForm && (
//         <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4">
//           {/* Form Fields */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="ownerName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Owner Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="ownerName"
//                 id="ownerName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, ownerName: event.target.value })
//                 }
//                 value={formData.ownerName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.ownerName && (
//                 <p className="text-red-500 text-sm">{formErrors.ownerName}</p>
//               )}
//             </div>
//           </div>

//           {/* Pet Name */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="petName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Pet Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="petName"
//                 id="petName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, petName: event.target.value })
//                 }
//                 value={formData.petName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.petName && (
//                 <p className="text-red-500 text-sm">{formErrors.petName}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Date */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptDate"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Date
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="date"
//                 name="aptDate"
//                 id="aptDate"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptDate: event.target.value })
//                 }
//                 value={formData.aptDate}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptDate && (
//                 <p className="text-red-500 text-sm">{formErrors.aptDate}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Time */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptTime"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Time
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="time"
//                 name="aptTime"
//                 id="aptTime"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptTime: event.target.value })
//                 }
//                 value={formData.aptTime}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptTime && (
//                 <p className="text-red-500 text-sm">{formErrors.aptTime}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Slot */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Appointment Slot
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2 flex gap-4">
//               {["Morning", "Afternoon", "Evening"].map((slot) => (
//                 <div
//                   key={slot}
//                   onClick={() => setFormData({ ...formData, aptSlot: slot })}
//                   className={`px-4 py-2 border rounded-md cursor-pointer ${
//                     formData.aptSlot === slot
//                       ? "bg-blue-400 text-white border-blue-500"
//                       : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                   }`}
//                   disabled={!formData.aptDate}
//                 >
//                   {slot}
//                 </div>
//               ))}
//             </div>
//             {formErrors.aptSlot && (
//               <p className="text-red-500 text-sm">{formErrors.aptSlot}</p>
//             )}
//           </div>

//           {/* Notes */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptNotes"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Notes
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <textarea
//                 id="aptNotes"
//                 name="aptNotes"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptNotes: event.target.value })
//                 }
//                 value={formData.aptNotes}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptNotes && (
//                 <p className="text-red-500 text-sm">{formErrors.aptNotes}</p>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-5">
//             <button
//               onClick={formDataPublish}
//               type="button"
//               className="inline-flex justify-center px-4 py-2 bg-blue-400 border border-transparent rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddAppointments;



// import { BiCalendarPlus } from "react-icons/bi";
// import { useState } from "react";

// const AddAppointments = ({ onSendAppointment, lastId, isSlotAvailable }) => {
//   const clearData = {
//     ownerName: "",
//     petName: "",
//     aptDate: "",
//     // aptTime: "",
//     aptNotes: "",
//     aptSlot: "",
//   };
//   let [toggleForm, setToggleForm] = useState(false);
//   let [formData, setFormData] = useState(clearData);
//   let [formErrors, setFormErrors] = useState({});

//   function validateForm() {
//     let errors = {};
//     if (!formData.ownerName.trim()) errors.ownerName = "Owner name is required.";
//     if (!formData.petName.trim()) errors.petName = "Pet name is required.";
//     if (!formData.aptDate) errors.aptDate = "Appointment date is required.";
//     // if (!formData.aptTime) errors.aptTime = "Appointment time is required.";
//     if (!formData.aptSlot) errors.aptSlot = "Appointment slot is required.";
//     if (!formData.aptNotes.trim())
//       errors.aptNotes = "Appointment notes are required.";

//     // Slot availability check
//     // if (formData.aptDate && formData.aptTime && formData.aptSlot) {
//     if (formData.aptDate && formData.aptSlot) {
//       const slotConflict = !isSlotAvailable(
//         formData.aptDate,
//         // formData.aptTime,
//         formData.aptSlot
//       );
//       if (slotConflict) {
//         errors.aptSlot = "Selected slot is unavailable. Please choose another.";
//       }
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }

//   function formDataPublish() {
//     if (!validateForm()) return;

//     const appointmentInfo = {
//       id: lastId + 1,
//       ownerName: formData.ownerName,
//       petName: formData.petName,
//       aptDate: formData.aptDate,
//       aptNotes: formData.aptNotes,
//       aptSlot: formData.aptSlot,
//     };

//     console.log(appointmentInfo)

//     // onSendAppointment(appointmentInfo);
//     setFormData(clearData);
//     setFormErrors({});
//     setToggleForm(!toggleForm);
//   }

//   return (
//     <div className="ml-2 my-2">
//       <button
//         onClick={() => setToggleForm(!toggleForm)}
//         className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
//           toggleForm ? "rounded-t-md" : "rounded-md"
//         }`}
//       >
//         <div>
//           <BiCalendarPlus className="inline-block align-text-top" /> Add
//           Appointment
//         </div>
//       </button>
//       {toggleForm && (
//         <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4">
//           {/* Form Fields */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="ownerName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Owner Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="ownerName"
//                 id="ownerName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, ownerName: event.target.value })
//                 }
//                 value={formData.ownerName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.ownerName && (
//                 <p className="text-red-500 text-sm">{formErrors.ownerName}</p>
//               )}
//             </div>
//           </div>

//           {/* Pet Name */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="petName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Pet Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="petName"
//                 id="petName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, petName: event.target.value })
//                 }
//                 value={formData.petName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.petName && (
//                 <p className="text-red-500 text-sm">{formErrors.petName}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Date */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptDate"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Date
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="date"
//                 name="aptDate"
//                 id="aptDate"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptDate: event.target.value })
//                 }
//                 value={formData.aptDate}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptDate && (
//                 <p className="text-red-500 text-sm">{formErrors.aptDate}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Slot */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
//               Appointment Slot
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2 flex gap-4">
//               {["Morning", "Afternoon", "Evening"].map((slot) => (
//                 <div
//                   key={slot}
//                   onClick={() =>
//                     formData.aptDate &&
//                     setFormData({ ...formData, aptSlot: slot })
//                   }
//                   className={`px-4 py-2 border rounded-md cursor-pointer ${
//                     formData.aptDate
//                       ? formData.aptSlot === slot
//                         ? "bg-blue-400 text-white border-blue-500"
//                         : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                       : "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed opacity-50"
//                   }`}
//                 >
//                   {slot}
//                 </div>
//               ))}
//             </div>
//             {formErrors.aptSlot && (
//               <p className="text-red-500 text-sm">{formErrors.aptSlot}</p>
//             )}
//           </div>

//           {/* Notes */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptNotes"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Notes
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <textarea
//                 id="aptNotes"
//                 name="aptNotes"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptNotes: event.target.value })
//                 }
//                 value={formData.aptNotes}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptNotes && (
//                 <p className="text-red-500 text-sm">{formErrors.aptNotes}</p>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-5">
//             <button
//               onClick={formDataPublish}
//               type="button"
//               className="inline-flex justify-center px-4 py-2 bg-blue-400 border border-transparent rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddAppointments;




// import { BiCalendarPlus } from "react-icons/bi";
// import { useState } from "react";

// const AddAppointments = ({ onSendAppointment, lastId, isSlotAvailable }) => {
//   const clearData = {
//     ownerName: "",
//     petName: "",
//     aptDate: "",
//     aptNotes: "",
//     aptSlot: "",
//   };
//   let [toggleForm, setToggleForm] = useState(false);
//   let [formData, setFormData] = useState(clearData);
//   let [formErrors, setFormErrors] = useState({});

//   function validateForm() {
//     let errors = {};
//     if (!formData.ownerName.trim()) errors.ownerName = "Owner name is required.";
//     if (!formData.petName.trim()) errors.petName = "Pet name is required.";
//     if (!formData.aptDate) errors.aptDate = "Appointment date is required.";
//     if (!formData.aptSlot) errors.aptSlot = "Appointment slot is required.";
//     if (!formData.aptNotes.trim())
//       errors.aptNotes = "Appointment notes are required.";

//     // Slot availability check
//     if (formData.aptDate && formData.aptSlot) {
//       const slotConflict = !isSlotAvailable(
//         formData.aptDate,
//         formData.aptSlot
//       );
//       if (slotConflict) {
//         errors.aptSlot = "Selected slot is unavailable. Please choose another.";
//       }
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }

//   function formDataPublish() {
//     if (!validateForm()) return;

//     const appointmentInfo = {
//       id: lastId + 1,
//       ownerName: formData.ownerName,
//       petName: formData.petName,
//       aptDate: formData.aptDate,
//       aptNotes: formData.aptNotes,
//       aptSlot: formData.aptSlot,
//     };

//     onSendAppointment(appointmentInfo);  // Send the appointment
//     setFormData(clearData);
//     setFormErrors({});
//     setToggleForm(!toggleForm);
//   }

//   return (
//     <div className="ml-2 my-2">
//       <button
//         onClick={() => setToggleForm(!toggleForm)}
//         className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
//           toggleForm ? "rounded-t-md" : "rounded-md"
//         }`}
//       >
//         <div>
//           <BiCalendarPlus className="inline-block align-text-top" /> Add
//           Appointment
//         </div>
//       </button>
//       {toggleForm && (
//         <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4">
//           {/* Form Fields */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="ownerName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Owner Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="ownerName"
//                 id="ownerName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, ownerName: event.target.value })
//                 }
//                 value={formData.ownerName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.ownerName && (
//                 <p className="text-red-500 text-sm">{formErrors.ownerName}</p>
//               )}
//             </div>
//           </div>

//           {/* Pet Name */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="petName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Pet Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="petName"
//                 id="petName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, petName: event.target.value })
//                 }
//                 value={formData.petName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.petName && (
//                 <p className="text-red-500 text-sm">{formErrors.petName}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Date */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptDate"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Date
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="date"
//                 name="aptDate"
//                 id="aptDate"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptDate: event.target.value })
//                 }
//                 value={formData.aptDate}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptDate && (
//                 <p className="text-red-500 text-sm">{formErrors.aptDate}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Slot */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptSlot"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Slot
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="aptSlot"
//                 id="aptSlot"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptSlot: event.target.value })
//                 }
//                 value={formData.aptSlot}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptSlot && (
//                 <p className="text-red-500 text-sm">{formErrors.aptSlot}</p>
//               )}
//             </div>
//           </div>

//           {/* Notes */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptNotes"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Notes
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <textarea
//                 id="aptNotes"
//                 name="aptNotes"
//                 rows="4"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptNotes: event.target.value })
//                 }
//                 value={formData.aptNotes}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptNotes && (
//                 <p className="text-red-500 text-sm">{formErrors.aptNotes}</p>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="button"
//             onClick={formDataPublish}
//             className="bg-blue-400 text-white px-4 py-2 rounded-md mt-4"
//           >
//             Add Appointment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddAppointments;



// import { BiCalendarPlus } from "react-icons/bi";
// import { useState } from "react";

// const AddAppointments = ({ onSendAppointment, lastId, isSlotAvailable }) => {
//   const clearData = {
//     ownerName: "",
//     petName: "",
//     aptDate: "",
//     aptNotes: "",
//     aptSlot: "",
//   };

//   let [toggleForm, setToggleForm] = useState(false);
//   let [formData, setFormData] = useState(clearData);
//   let [formErrors, setFormErrors] = useState({});

//   // Handle slot selection styles
//   const slotOptions = ["Morning", "Afternoon", "Evening"];

//   function validateForm() {
//     let errors = {};
//     if (!formData.ownerName.trim()) errors.ownerName = "Owner name is required.";
//     if (!formData.petName.trim()) errors.petName = "Pet name is required.";
//     if (!formData.aptDate) errors.aptDate = "Appointment date is required.";
//     if (!formData.aptSlot) errors.aptSlot = "Appointment slot is required.";
//     if (!formData.aptNotes.trim())
//       errors.aptNotes = "Appointment notes are required.";

//     // Slot availability check
//     if (formData.aptDate && formData.aptSlot) {
//       const slotConflict = !isSlotAvailable(
//         formData.aptDate,
//         formData.aptSlot
//       );
//       if (slotConflict) {
//         errors.aptSlot = "Selected slot is unavailable. Please choose another.";
//       }
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   }

//   function formDataPublish() {
//     if (!validateForm()) return;

//     const appointmentInfo = {
//       id: lastId + 1,
//       ownerName: formData.ownerName,
//       petName: formData.petName,
//       aptDate: formData.aptDate,
//       aptNotes: formData.aptNotes,
//       aptSlot: formData.aptSlot,
//     };

//     onSendAppointment(appointmentInfo); // Send the appointment
//     setFormData(clearData);
//     setFormErrors({});
//     setToggleForm(!toggleForm);
//   }

//   // Handle slot selection click
//   const handleSlotSelection = (slot) => {
//     setFormData({ ...formData, aptSlot: slot });
//   };

//   // Slot button styles
//   const getSlotButtonStyles = (slot) => {
//     const isSelected = formData.aptSlot === slot;
//     return `px-4 py-2 rounded-md text-center cursor-pointer transition-all ${
//       isSelected
//         ? "bg-blue-500 text-white border-blue-700"
//         : "bg-white text-blue-500 border-gray-300"
//     } ${!formData.aptDate && "cursor-not-allowed opacity-50"}`;
//   };

//   return (
//     <div className="ml-2 my-2">
//       <button
//         onClick={() => setToggleForm(!toggleForm)}
//         className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
//           toggleForm ? "rounded-t-md" : "rounded-md"
//         }`}
//       >
//         <div>
//           <BiCalendarPlus className="inline-block align-text-top" /> Add
//           Appointment
//         </div>
//       </button>
//       {toggleForm && (
//         <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4">
//           {/* Form Fields */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="ownerName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Owner Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="ownerName"
//                 id="ownerName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, ownerName: event.target.value })
//                 }
//                 value={formData.ownerName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.ownerName && (
//                 <p className="text-red-500 text-sm">{formErrors.ownerName}</p>
//               )}
//             </div>
//           </div>

//           {/* Pet Name */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="petName"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Pet Name
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="text"
//                 name="petName"
//                 id="petName"
//                 onChange={(event) =>
//                   setFormData({ ...formData, petName: event.target.value })
//                 }
//                 value={formData.petName}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.petName && (
//                 <p className="text-red-500 text-sm">{formErrors.petName}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Date */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptDate"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Date
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <input
//                 type="date"
//                 name="aptDate"
//                 id="aptDate"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptDate: event.target.value })
//                 }
//                 value={formData.aptDate}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptDate && (
//                 <p className="text-red-500 text-sm">{formErrors.aptDate}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Slot */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptSlot"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Slot
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2 flex space-x-4">
//               {slotOptions.map((slot) => (
//                 <div
//                   key={slot}
//                   onClick={() => handleSlotSelection(slot)}
//                   className={getSlotButtonStyles(slot)}
//                 >
//                   {slot}
//                 </div>
//               ))}
//               {formErrors.aptSlot && (
//                 <p className="text-red-500 text-sm">{formErrors.aptSlot}</p>
//               )}
//             </div>
//           </div>

//           {/* Notes */}
//           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
//             <label
//               htmlFor="aptNotes"
//               className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
//             >
//               Appointment Notes
//             </label>
//             <div className="mt-1 sm:mt-0 sm:col-span-2">
//               <textarea
//                 id="aptNotes"
//                 name="aptNotes"
//                 rows="4"
//                 onChange={(event) =>
//                   setFormData({ ...formData, aptNotes: event.target.value })
//                 }
//                 value={formData.aptNotes}
//                 className="px-3 py-2 max-w-lg block w-full shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
//               />
//               {formErrors.aptNotes && (
//                 <p className="text-red-500 text-sm">{formErrors.aptNotes}</p>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="button"
//             onClick={formDataPublish}
//             className="bg-blue-400 text-white px-4 py-2 rounded-md mt-4"
//           >
//             Add Appointment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddAppointments;


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

    // Slot availability check
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

    onSendAppointment(appointmentInfo);  // Send the appointment
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
          {/* Form Fields */}
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

          {/* Pet Name */}
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

          {/* Appointment Date */}
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

          {/* Appointment Slot */}
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

          {/* Notes */}
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

          {/* Submit Button */}
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
