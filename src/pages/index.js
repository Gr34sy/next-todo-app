//Components
import Link from "next/link";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faNoteSticky,
  faUser,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";


//Backend
import { dbConnect } from "../utils/db";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";

export default function HomePage(props) {
  function HomepageList({ containsTasklists, items }) {
    return (
      <ul className="homepage__list">
        {items.map((item) => (
          <li className="homepage__list_item" key={item.id}>
            <FontAwesomeIcon
              icon={containsTasklists ? faList : faNoteSticky}
              className="homepage__list_icon"
            />
            <Link
              href={containsTasklists ? "lists/tasklist-id" : "lists/list-id"}
            >
              {" "}
              {item.title}
            </Link>
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
    <main className="homepage">
      {/* <h1 className="homepage__header section__header">
        <FontAwesomeIcon icon={faUser} />
        {"Welcome, " + ((session && session.user.name) || "Guest")}
      </h1> */}

      <div className="homepage__lists">
        <div className="homepage__list-wrapper">
          <h2 className="homepage__list-header ">Simple Lists</h2>
          <HomepageList containsTasklists={false} items={props.lists} />
        </div>

        <div className="homepage__list-wrapper">
          <h2 className="homepage__list-header ">Tasklists</h2>
          <HomepageList containsTasklists={true} items={props.tasklists} />
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  //getting session data
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session)return{
    redirect: {
      destination: "/sign-in",
    },
  };

  //opening mongodb connection
  const client = await dbConnect();
  const db = client.db("ToDo");
  const userCollection = db.collection(session.user.email);

  //retrieving user lists from mongodb
  const userLists = await userCollection.find({type: "list"}).toArray();
  const userTasklists = await userCollection.find({type: "tasklist"}).toArray();

  client.close();

  return {
    props: {
      lists: userLists.map(list => ({...list, _id: list._id.toString()})),
      tasklists: userTasklists.map(list => ({...list, _id: list._id.toString()})),
    },
  };
}
