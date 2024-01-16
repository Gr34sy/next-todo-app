//Components
import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { List } from "@/components/Lists/List";

//Functions
import { ObjectId } from "mongodb";
import { dbConnect } from "@/utils/dbConnect";
import { useState, useEffect } from "react";

export default function ListPage(props) {
  const INITIAL_STATE = props.simple_list
  const [list, setList] = useState(INITIAL_STATE);

  function editListTitle(){

  }
  function addTask(taskname){
    const taskId = list.tasks.length.toString();

    const task = {
      id: list.list_id + '-' + taskId,
      name: taskname,
      isDone: false,
    }

    setList((prevList) => ({
      ...prevList,
      tasks: [...prevList.tasks, task],
    }));
  }
  function deleteTask(taskId){

    console.log(taskId);
    const filteredTasks = list.tasks.filter(task => task.id != taskId);

    setList((prevList) => ({
      ...prevList,
      tasks: filteredTasks,
    }))
  }
  function editTask() {

  }


  return (
    <ListPageLayout title={list.title}>
      <div className="simple-list">
        <List contentArray={list.tasks} addItem={addTask} deleteItem={deleteTask}/>
      </div>
    </ListPageLayout>
  );
}

export async function getStaticProps() {
  const client = await dbConnect();
  const db = client.db("ToDo");

  const listId = new ObjectId("65a66a27b6a8062447227710");
  const list = await Object(
    db.collection("Dummy List").findOne({ _id: listId })
  );
  console.log(list);
  client.close();
  return {
    props: {
      simple_list: {
        list_id: list._id.toString(),
        title: list.title,
        tasks: list.tasks,
      },
    },
  };
}
