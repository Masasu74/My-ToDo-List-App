import styles from "./MyComponent.module.css";
function MyComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Todo App</h1>
        </div>
        <div className={styles.dateBox}>
          <h4 className={styles.day}>Sunday</h4>
          <h6 className={styles.date}>January 14,2024</h6>
        </div>
        <div className={styles.inputBox}>
          <input className={styles.input} type="text" name="" id="" placeholder="Add Task" />
          <button className={styles.button}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
