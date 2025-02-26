import React from "react";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const todoStore = (set) => ({
  todo: [],
  addNew: (newTodo) => {
    set((state) => ({
      todo: [...state.todo, newTodo],
    }));
  },
  removeUser: (id) => {
    set((state) => ({
      todo: state.todo.filter((f) => f.id !== id),
    }));
  },
  updateUser: (id, value) => {
    set((state) => ({
      todo: state.todo.map((m) => (m.id === id ? { ...m, Name: value } : m)),
    }));
  },
});
export const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "course",
    })
  )
);
