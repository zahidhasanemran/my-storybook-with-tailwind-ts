import TaskList from "components/TaskList"
import { fetchTask } from "lib/features/PostSlice"
import { useAppDispatch, useAppSelector } from "lib/hook"
import React, { useEffect } from "react"

const InboxScreen = () => {
  const { error } = useAppSelector((state) => state.tasks)
  console.log(error)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTask())
  }, [])

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <p className="title-message">Oh no!</p>
          <p className="subtitle-message">Something went wrong</p>
          <p>{JSON.stringify(error)}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="page lists-show py-12">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>

      <TaskList />
    </div>
  )
}

export default InboxScreen
