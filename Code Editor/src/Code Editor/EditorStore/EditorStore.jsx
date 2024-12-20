import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const EditStore = (set) => ({
  bgColor: "bg-slate-800", // Default background color (dark mode)
  textColor: "text-white", // Default text color (dark mode)
  hoverBgColor: "bg-slate-500", // Default hover color (dark mode)
  currentLanguage: "javascript", // Default language
  addLanguage: (value) => set((state) => ({
    currentLanguage: value,
  })),
});

const useEditStore = create(
  devtools(
    persist(EditStore, {
      name: "Editor",
    })
  )
);

export default useEditStore;
