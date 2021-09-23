import * as actions from './types'
import { v4 as uuidv4 } from 'uuid'

export type BaseTodoState = {
  todos: Todo[]
}

export type Todo = {
  id: string
  text: string
  completed: boolean
}

export type TodoState = BaseTodoState

const INITIAL_STATE: TodoState = {
  todos: [],
}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actions.TODO_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), text: action.payload.text, completed: false },
        ],
      }

    case actions.TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }

    case actions.TODO_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== action.payload.id
            ? todo
            : { ...todo, completed: !todo.completed }
        ),
      }

    case actions.TODO_EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== action.payload.id
            ? todo
            : { ...todo, text: action.payload.text }
        ),
      }

    default:
      return state
  }
}
