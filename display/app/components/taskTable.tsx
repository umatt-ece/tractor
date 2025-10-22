"use client";

import React from "react";

type Task = {
  id: number;
  name: string;
  time: string;
  criteria: string;
  nextTime: string;
  status: "Pending" | "In Progress" | "Completed";
};

interface TaskTableProps {
  tasks: Task[];
}

const TaskTable: React.FC<TaskTableProps> = (props) => {
  const tasks: Task[] = props?.tasks ?? [];
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Time</th>
            <th className="py-3 px-4">Criteria</th>
            <th className="py-3 px-4">Next Time</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b last:border-none hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-4">{task.id}</td>
              <td className="py-3 px-4">{task.name}</td>
              <td className="py-3 px-4">{task.time}</td>
              <td className="py-3 px-4">{task.criteria}</td>
              <td className="py-3 px-4">{task.nextTime}</td>
              <td className="py-3 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
          {tasks.length === 0 && (
            <tr>
              <td colSpan={6} className="py-6 text-center text-gray-500">
                No tasks available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
