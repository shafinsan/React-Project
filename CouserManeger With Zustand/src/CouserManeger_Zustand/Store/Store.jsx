import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  course: [],
  addCourse: (value) => {
    set((state) => ({
      course: [...state.course, value],
    }));
  },
  removeCouse: (id) => {
    set((state) => ({
      course: state.course.filter((f) => f.courseId !== id),
    }));
  },
  updateCouse: (id, updateValue) => {
    set((state) => ({
      course: state.course.map((m) =>
        m.courseId === id
          ? {
              ...m, // Spread the existing course object
              courseId: updateValue.courseId,
              Name: updateValue.Name, // Fix the key names
              Description: updateValue.Description,
            }
          : m
      ),
    }));
  },
});
const useStore = create(
  devtools(
    persist(courseStore, {
      name: "course",
    })
  )
);
export default useStore;
