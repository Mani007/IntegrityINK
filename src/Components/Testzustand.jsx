// import { create } from 'zustand'

// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))
import testStore from "../Store/testStore"

function Counter() {
  const { count, inc } = testStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
export default Counter