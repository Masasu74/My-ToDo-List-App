import React,{ useState } from "react";
import styles from "./MyComponent.module.css";
import image from "../assets/trash.png";
function MyComponent() {
    const[tasks,setTasks]=useState(["To Code","To Clean the house"]);
    function handleAddTask(){
        const newTask=document.getElementById('newTask').value;
        document.getElementById('newTask').value="";
        setTasks([...tasks,newTask]);
    }
    function removeTask(index){
        const updatedTasks=tasks.filter((_,i) =>i !== index);
        setTasks(updatedTasks);    }
        function handleClear(){
            const clearedTask=[];
            setTasks(clearedTask);
        }
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Todo App</h1>
        </div>
        <div className={styles.dateBox}>
        <h4 className={styles.day}>{currentDay}</h4>
        <h6 className={styles.date}>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h6>        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="text"
            name=""
            id="newTask"
            placeholder="Add Task"
          />
          <button onClick={handleAddTask} className={styles.button}>Add</button>
        </div>
        <div className={styles.taskBox}>
          <ul>
           {tasks.map((task,index)=>(
             <li key={index}>
             <div className={styles.task}>
               <div>{task}</div>
               <div className={styles.trashBox} onClick={()=>removeTask(index)}>
                 <img src={image} width={30} alt="" />
               </div>
             </div>
           </li>
           ))}



           
          </ul>
        </div>
        <div className={styles.lastBox}>
            <h5>You have {tasks.length} pending tasks</h5>
            <button className={styles.clearBtn} onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
