import React, { useState } from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

const Task = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // Index of task being edited, -1 if not editing
  const [editValue, setEditValue] = useState(""); // Current value of task being edited

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTaskList((prevTaskList) => [...prevTaskList, inputValue]);
      setInputValue("");
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditValue(taskList[index]);
  };

  const updateTask = () => {
    if (editIndex !== -1 && editValue.trim() !== "") {
      const updatedTasks = [...taskList];
      updatedTasks[editIndex] = editValue;
      setTaskList(updatedTasks);
      setEditIndex(-1); // Clear edit mode
      setEditValue(""); // Clear edit value
    }
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditValue("");
  };

  return (
    <>
      <div className="mt-20 flex justify-around items-center">
        <input
          className="border-none focus:outline-none focus:border-transparent bg-transparent"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Enter your task to add:"
        />
        <button
          className="bg-cyan-800 text-white rounded-xl text-sm p-2"
          onClick={addTask}
        >
          Add task +
        </button>
      </div>

      <div className="mt-10 mx-20">
        {/* Headings */}
        <div className="grid grid-cols-4 gap-4 bg-gray-400 text-white p-2 rounded-md">
          <h1 className="text-center">TASKS</h1>
          <h1 className="text-center">CHECK</h1>
          <h1 className="text-center">EDIT</h1>
          <h1 className="text-center">DELETE</h1>
        </div>

        {/* Task List */}
        <ul className="mt-6">
          {taskList.map((task, index) => (
            <li
              key={index}
              className="grid grid-cols-4 gap-4 p-2 mb-4 bg-gray-300 rounded-md"
            >
              <span className="flex items-center justify-center">{task}</span>
              <span className="flex items-center justify-center">
                <input type="checkbox" className="form-checkbox" />
              </span>
              <span className="flex items-center justify-center">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      className="border border-gray-400 px-2 py-1 rounded-md"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button
                      className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md"
                      onClick={updateTask}
                    >
                      Save
                    </button>
                    <button
                      className="ml-2 bg-gray-400 text-white px-2 py-1 rounded-md"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <MdOutlineEdit
                    className="cursor-pointer"
                    onClick={() => editTask(index)}
                  />
                )}
              </span>
              <span className="flex items-center justify-center">
                <MdDeleteOutline
                  className="cursor-pointer"
                  onClick={() => {
                    setTaskList((prevTaskList) =>
                      prevTaskList.filter((_, i) => i !== index)
                    );
                    if (editIndex === index) {
                      cancelEdit();
                    }
                  }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Task;
