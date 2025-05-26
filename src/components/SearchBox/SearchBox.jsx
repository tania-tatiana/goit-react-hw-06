import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={styles.text}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};
