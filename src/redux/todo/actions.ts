import * as actions from './types'

export const todoAdd = (text: string) => ({
  type: actions.TODO_ADD,
  payload: {
    text,
  },
})

export const todoRemove = (id: string) => ({
  type: actions.TODO_REMOVE,
  payload: {
    id,
  },
})

export const todoComplete = (id: string) => ({
  type: actions.TODO_COMPLETE,
  payload: {
    id,
  },
})

export const todoEdit = (id: string, text: string) => ({
  type: actions.TODO_EDIT,
  payload: {
    id,
    text,
  },
})
