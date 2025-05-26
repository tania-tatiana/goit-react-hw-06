import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import styles from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <ul className={styles.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};
