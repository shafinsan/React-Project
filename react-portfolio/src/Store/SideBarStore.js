import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const myStore = (set) => ({
    currentSelection: 0,
    addNewSelection: (id) => {
        set({ currentSelection: id }); // Correctly updates the state with an object
    },
});

export const useItemSelection = create(
    devtools(
        persist(myStore, {
            name: "sidebarselection", // Name for persisted storage
        })
    )
);
