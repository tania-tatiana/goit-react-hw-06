import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
      //   state.items = state.items.filter((contacts) =>
      //     contacts.name.toLowerCase().includes(action.payload.toLowerCase())
      //   );
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;

// export const filterOfContact = createAction("contacts/filter");

// const initialState = {
//   name: "",
// };
// export default function filtersReducer(state = initialState, action) {
//   switch (action.type) {
//     case "contacts/filter":
//   return {
//     ...state,
//     name: action.payload,
//   };
//     default:
//       return state;
//   }
// }
