import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./../store"
import type { PayloadAction } from "@reduxjs/toolkit"

type task = {
  id: number
  title: string
  completed: boolean
}[]

interface postState {
  loading: boolean
  error: string | null
  tasks: task | []
}

const initialState: postState = {
  loading: false,
  error: null,
  tasks: [],
}

export const fetchTask = createAsyncThunk("posts/fetchTask", async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos?userId=1").then(
    (res) => res.json()
  )
})

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<post>) => {
    //   state.tasks = action.payload
    // },
    updateTask: (state, action) => {
      const { id, newTaskState } = action.payload
      const task = state.tasks.findIndex((task) => (task.id = id))
      if (task >= 0) {
        state.tasks[task].completed = newTaskState
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTask.pending, (state) => {
      state.loading = true
      state.error = null
      state.tasks = []
    })
    builder.addCase(
      fetchTask.fulfilled,
      (state, action: PayloadAction<task>) => {
        state.loading = false
        state.error = null
        state.tasks = action.payload
      }
    )
    builder.addCase(fetchTask.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.tasks = []
      state.error = "Something went wrong"
    })
  },
})

// export const { incrementByAmount } = postSlice.actions
export const selectPost = (state: RootState) => state.tasks.tasks

export default taskSlice.reducer

// https://redux-toolkit.js.org/tutorials/typescript
