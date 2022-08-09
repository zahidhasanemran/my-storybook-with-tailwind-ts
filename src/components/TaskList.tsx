import { useAppSelector } from "lib/hook"
import React from "react"

const TaskList = () => {
  const { tasks, loading } = useAppSelector((state) => state.tasks)

  if (loading) {
    return <h2>Loading ...</h2>
  }

  return (
    <div>
      <u className="text-left mx-auto inline-block">
        {tasks.length > 0 &&
          tasks.map((sm) => <li key={sm.id}>{sm?.title}</li>)}
      </u>
    </div>
  )
}

export default TaskList
