//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

//Components
import { AddTask } from "@/components/Lists/Tasklist/AddTask";
import { TaskTile } from "@/components/Lists/Tasklist/TaskTile";
import { DeleteAlert } from "@/components/DeleteAlert/DeleteAlert";

//hooks
import { useState } from "react";
import { useRouter } from "next/router";

//backend
import { ObjectId } from "mongodb";
import { dbConnect } from "../../utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

export default function TasklistPage(props) {
  const INITIAL_TASKLIST = props.tasklist;
  const [editMode, setEditMode] = useState(false);
  const [tasklist, setTasklist] = useState(INITIAL_TASKLIST);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const router = useRouter();

  // Changing title, deadline and description of the tasklist
  function changeTitle(e) {
    setTasklist((prevList) => ({
      ...prevList,
      title: e.target.value,
    }));
  }
  function changeDeadline(e) {
    setTasklist((prevList) => ({
      ...prevList,
      deadline: e.target.value,
    }));
  }
  function changeDescription(e) {
    setTasklist((prevList) => ({
      ...prevList,
      description: e.target.value,
    }));
  }

  // updating task in tasklist state
  function updateTasks(updatedTask) {
    setTasklist((prevList) => {
      const tasksToUpdate = prevList.tasks;
      const updatedTasks = tasksToUpdate.map((task) => {
        if (updatedTask.id === task.id) {
          return updatedTask;
        } else {
          return task;
        }
      });

      return {
        ...prevList,
        tasks: updatedTasks,
      };
    });
  }

  //saving tasklist and discarding changes
  async function saveTasklist(tasklist) {
    const response = await fetch(`/api/tasklists/${tasklist._id}`, {
      method: "PUT",
      body: JSON.stringify(tasklist),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.reload();
  }
  function discardChanges() {
    router.reload();
  }
  // adding and deleting task from tasklist
  async function deleteTask(taskId) {
    const filteredTasks = tasklist.tasks.filter((task) => task.id != taskId);
    const updatedTasks = filteredTasks.map((task, i) => ({
      ...task,
      id: `task-${i}`,
    }));
    const updatedTasklist = {
      ...tasklist,
      tasks: updatedTasks,
    };

    const response = await fetch(`/api/tasklists/${tasklist._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTasklist),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.reload();
  }
  async function addTask(task) {
    const taskToAdd = {
      ...task,
      id: `task-${tasklist.tasks.length}`,
    };

    const updatedTasklist = {
      ...tasklist,
      tasks: [
        ...tasklist.tasks,
        taskToAdd,
      ]
    }

    const response = await fetch(`/api/tasklists/${tasklist._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTasklist),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.reload();
  }

  return (
    <main className="list-layout list-layout--tasklist">
      <div className="list-layout__header section__header">
        <h1 className="list-layout__header_title">
          {editMode && (
            <input
              type="text"
              value={tasklist.title}
              onChange={changeTitle}
              className="big-input"
            />
          )}
          {!editMode && tasklist.title}
        </h1>

        <FontAwesomeIcon
          icon={editMode ? faRightFromBracket : faPenToSquare}
          className="list-layout__header_icon"
          onClick={() => setEditMode((prev) => !prev)}
        />
      </div>

      <div className="task-list">
        <div className="task-list__deadline">
          <p>Deadline:</p>

          {editMode && (
            <input
              type="text"
              value={tasklist.deadline}
              onChange={changeDeadline}
            />
          )}
          {!editMode && <p>{tasklist.deadline}</p>}
        </div>

        <div className="task-list__description">
          <p>Description</p>

          {editMode && (
            <textarea
              rows="4"
              value={tasklist.description}
              onChange={changeDescription}
            />
          )}
          {!editMode && <p>{tasklist.description}</p>}
        </div>

        <AddTask addTask={addTask} />

        <div className="task-list__tasks">
          {tasklist.tasks.map((task) => (
            <TaskTile
              name={task.name}
              deadline={task.deadline}
              isDone={task.isDone}
              id={task.id}
              operations={task.operations}
              key={task.id}
              updateFunction={updateTasks}
              deleteFunction={setDeleteAlert}
            />
          ))}
        </div>
      </div>

      <div className="list-layout__buttons">
        <button
          className="custom-button custom-button--big list-layout__buttons_discard-btn"
          onClick={discardChanges}
        >
          Discard
        </button>

        <button
          className="custom-button custom-button--big list-layout__buttons_save-btn"
          onClick={() => saveTasklist(tasklist)}
        >
          Save
        </button>
      </div>

      {deleteAlert && (
        <DeleteAlert
          deleteFunction={() => deleteTask(deleteAlert)}
          closeFunction={() => setDeleteAlert(false)}
        />
      )}
    </main>
  );
}

export async function getServerSideProps(context) {
  //getting params
  const { params } = context;

  //getting session data
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session)
    return {
      redirect: {
        destination: "/sign-in",
      },
    };

  // opening mongodb connection
  const client = await dbConnect();
  const db = client.db("ToDo");
  const userCollection = db.collection(session.user.email);

  // retrieving user tasklist from mongodb
  const userTasklist = await userCollection.findOne({
    _id: new ObjectId(params.tasklistId),
  });
  client.close();

  return {
    props: {
      tasklist: {
        ...userTasklist,
        _id: userTasklist._id.toString(),
      },
    },
  };
}
