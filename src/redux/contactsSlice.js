import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(...action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;

// export const nameOfContact = createAction("contacts/items");

// const initialState = {
//   items: [],
// };

// export default function contactsReducer(state = initialState, action) {
//   switch (action.type) {
//     case "contacts/items":
//   return {
//     ...state,
//     items: state.value + action.payload,
//   };
//     default:
//       return state;
//   }
// }
