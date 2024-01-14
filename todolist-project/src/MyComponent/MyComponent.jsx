import styles from "./MyComponent.module.css";
import image from "../assets/trash.png";
function MyComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Todo App</h1>
        </div>
        <div className={styles.dateBox}>
          <h4 className={styles.day}>Monday</h4>
          <h6 className={styles.date}>January 15,2024</h6>
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="Add Task"
          />
          <button className={styles.button}>Add</button>
        </div>
        <div className={styles.taskBox}>
          <ul>
            <li>
              <div className={styles.task}>
                <div>Coding</div>
                <div className={styles.trashBox}>
                  <img src={image} width={30} alt="" />
                </div>
              </div>
            </li>

            <li>
              <div className={styles.task}>
                <div>Coding</div>
                <div className={styles.trashBox}>
                  <img src={image} width={30} alt="" />
                </div>
              </div>
            </li>

            <li>
              <div className={styles.task}>
                <div>Coding</div>
                <div className={styles.trashBox}>
                  <img src={image} width={30} alt="" />
                </div>
              </div>
            </li>

            <li>
              <div className={styles.task}>
                <div>Coding</div>
                <div className={styles.trashBox}>
                  <img src={image} width={30} alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.lastBox}>
            <h5>You have 4 pending tasks</h5>
            <button className={styles.clearBtn}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
