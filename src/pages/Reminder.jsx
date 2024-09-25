import React, { useState, useEffect } from "react";
import { FaBell, FaTrashAlt, FaRegClock } from "react-icons/fa";
import reminderSound from "../assets/reminder.mp3"; // Ensure this path is correct
import reminderIcon from "../assets/medicine_reminder.jpg"; // Ensure this path is correct

const Reminder = () => {
  const [medication, setMedication] = useState("");
  const [time, setTime] = useState("");
  const [dosage, setDosage] = useState("");
  const [recurrence, setRecurrence] = useState("none");
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem("reminders");
    return savedReminders ? JSON.parse(savedReminders) : [];
  });

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
  }, []);

  const handleAddReminder = () => {
    if (medication && time && dosage) {
      const reminderTime = new Date();
      const [hours, minutes] = time.split(":");
      reminderTime.setHours(hours, minutes, 0, 0);

      const timeDifference = reminderTime - new Date();
      if (timeDifference > 0) {
        scheduleNotification(medication, timeDifference, recurrence);
      }

      setReminders([...reminders, { medication, time, dosage, recurrence }]);
      setMedication("");
      setTime("");
      setDosage("");
      setRecurrence("none");
    }
  };

  const scheduleNotification = (medication, delay, recurrence) => {
    setTimeout(() => {
      showNotification(medication);
      if (recurrence === "daily") {
        scheduleNotification(medication, 24 * 60 * 60 * 1000, recurrence); // 24 hours
      } else if (recurrence === "weekly") {
        scheduleNotification(medication, 7 * 24 * 60 * 60 * 1000, recurrence); // 1 week
      }
    }, delay);
  };

  const showNotification = (medication) => {
    if (Notification.permission === "granted") {
      const notification = new Notification("Medication Reminder", {
        body: `Time to take your medication: ${medication}`,
        icon: reminderIcon // Provide an icon path
      });
      const audio = new Audio(reminderSound);
      audio.play().catch((error) => console.error("Audio play failed:", error));
    } else {
      console.error("Notification permission not granted.");
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          showNotification(medication); // Try again if permission is granted
        } else {
          console.log("User denied notification permission.");
        }
      });
    }
  };

  const handleDeleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  const handleSnooze = (index) => {
    const snoozeTime = parseInt(prompt("Snooze for how many minutes?"), 10) * 60 * 1000; // Convert to milliseconds
    const { medication } = reminders[index];
    scheduleNotification(medication, snoozeTime, reminders[index].recurrence);
  };

  return (
    <div className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-[#ffffff]">
        Set Medication Reminders
      </h1>

      <div className="border border-[#d1d5db] p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-80 lg:w-1/3 mx-auto bg-[#ffffff]">
        <div className="flex flex-col gap-4 items-center mb-4">
          <FaBell className="text-5xl sm:text-7xl text-[#1f2937]" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1f2937]">Add a Reminder</h2>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Medication Name"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
          <input
            type="text"
            placeholder="Dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
          <select
            value={recurrence}
            onChange={(e) => setRecurrence(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          >
            <option value="none">No Recurrence</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <button
          onClick={handleAddReminder}
          className="bg-[#3b82f6] text-[#ffffff] px-4 py-2 rounded hover:bg-[#2563eb] w-full"
        >
          Add Reminder
        </button>

        <ul className="mt-8">
          {reminders.map((reminder, index) => (
            <li key={index} className="text-left p-2 border-b border-gray-200 text-[#1f2937] flex justify-between items-center">
              <div>
                <span className="font-semibold">{reminder.medication}</span> - {reminder.time} - {reminder.dosage} - {reminder.recurrence}
              </div>
              <div className="flex">
                <FaTrashAlt onClick={() => handleDeleteReminder(index)} className="text-red-500 cursor-pointer mr-2" />
                <FaRegClock onClick={() => handleSnooze(index)} className="text-yellow-500 cursor-pointer" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reminder;
