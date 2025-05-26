import { useEffect, useState } from "react";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contactsSlice";

// const dispatch = useDispatch();
// const contacts = useSelector((state) => state.contacts.value);
// const handleSubmit = () => {
//   dispatch(deposit(5));
// };

const defaultData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized && contacts.length === 0) {
      dispatch(addContact(defaultData));
      setInitialized(true);
    }
  }, [contacts.length, dispatch, initialized]);

  // const [inputValue, setInputValue] = useState("");
  // const [debounceInputValue] = useDebounce(inputValue, 500);

  // const visibleNames = useMemo(() => {
  //   return contacts.filter((contacts) =>
  //     contacts.name.toLowerCase().includes(debounceInputValue.toLowerCase())
  //   );
  // }, [debounceInputValue, contacts]);

  // const addNewUser = (newUsers) => {
  //   setNames((prevUsers) => {
  //     return [...prevUsers, ...newUsers];
  //   });
  // };

  // const deleteUser = (userId) => {
  //   setNames((prevTasks) => {
  //     return prevTasks.filter((user) => user.id !== userId);
  //   });
  // };

  return (
    <div className="container">
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
