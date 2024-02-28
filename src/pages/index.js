//Components
import Link from "next/link";
import { DeleteAlert } from "@/components/DeleteAlert/DeleteAlert";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUser,
  faListUl,
  faCirclePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

//Hooks
import { useState } from "react";

//Backend
import { dbConnect } from "../utils/db";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";

export default function HomePage(props) {
  const INITIAL_LISTS = props.lists;
  const INITIAL_TASKLISTS = props.tasklists;

  const [lists, setLists] = useState(INITIAL_LISTS);
  const [tasklists, setTasklists] = useState(INITIAL_TASKLISTS);
  const [displayAlert, setDisplayAlert] = useState(false);


  async function deleteList(id) {
    const response = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
    setLists((prevLists) => prevLists.filter((list) => list._id !== id));
    setTasklists((prevLists) => prevLists.filter((list) => list._id !== id));
  }

  function HomepageList({ forTasklists, items }) {
    return (
      <ul className="homepage__list">
        {items.map((item) => (
          <li className="homepage__list_item" key={item._id}>
            <Link
              href={
                forTasklists ? `/tasklists/${item._id}` : `/lists/${item._id}`
              }
            >
              <FontAwesomeIcon
                icon={forTasklists ? faListUl : faList}
                className="homepage__list_icon"
              />{" "}
              {item.title}
            </Link>

            <FontAwesomeIcon
              icon={faTrash}
              className="list__item_trash-icon"
              onClick={() => setDisplayAlert(item._id)}
            />
          </li>
        ))}

        {items.length === 0 && (
          <li className="homepage__list_item">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="homepage__list_icon homepage__list_add-icon"
            />
            <Link href="/list-creator">Go to list creator</Link>
          </li>
        )}
      </ul>
    );
  }

  return (
    <>
    {displayAlert && (
        <DeleteAlert
          deleteFunction={() => deleteList(displayAlert)}
          closeFunction={() => setDisplayAlert(false)}
        />
      )}
       <main className="homepage">
      <h1 className="homepage__header">
        <FontAwesomeIcon icon={faUser} />
        {"Welcome, " + ((props.user && props.user.email) || "Guest")}
      </h1>

      <div className="homepage__lists">
        <div className="homepage__list-wrapper">
          <h2 className="homepage__list-header ">Simple Lists</h2>
          <HomepageList items={lists} />
        </div>

        <div className="homepage__list-wrapper">
          <h2 className="homepage__list-header ">Tasklists</h2>
          <HomepageList forTasklists={true} items={tasklists} />
        </div>
      </div>
    </main>
    </>
  );
}

export async function getServerSideProps(context) {
  //getting session data
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session)
    return {
      redirect: {
        destination: "/sign-in",
      },
    };

  //opening mongodb connection
  const client = await dbConnect();
  const db = client.db("ToDo");
  const userCollection = db.collection(session.user.email);

  //retrieving user lists from mongodb
  const userLists = await userCollection.find({ type: "list" }).toArray();
  const userTasklists = await userCollection
    .find({ type: "tasklist" })
    .toArray();

  client.close();

  return {
    props: {
      lists: userLists.map((list) => ({ ...list, _id: list._id.toString() })),
      tasklists: userTasklists.map((list) => ({
        ...list,
        _id: list._id.toString(),
      })),
      user: session.user,
    },
  };
}
