import React from "react"
import {
    AddTaskForm,
    TaskList,
    FillterFooter
  } from '../';
const TodoApp = () => (
    <div className="TodoApp">
        <AddTaskForm />
        <TaskList />
        <FillterFooter />
    </div>
)

export default TodoApp