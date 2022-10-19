import JobHunts from "../components/JobHunts"

export const jobHuntReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_JOBHUNT":
      return { ...state, jobHunts: [...state.jobHunts, action.payload]}
  }
}