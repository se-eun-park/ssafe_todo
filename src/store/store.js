import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useFormStore = create(
  persist(
    (set) => ({
      forms: [],
      addForm: ({ title, text, color, category, edit }) =>
        set((state) => ({
          forms: [
            { id: new Date().toLocaleString(), title, text, color, category, edit },
            ...state.forms,
          ],
        })),

      removeForm: (id) =>
        set((state) => ({
          forms: state.forms.filter((form) => form.id !== id),
        })),
    }),

    {
      name: "forms-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFormStore;
