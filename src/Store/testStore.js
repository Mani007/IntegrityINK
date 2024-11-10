import { create } from 'zustand'

const testStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
export default testStore
