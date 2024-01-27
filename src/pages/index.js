//Components
import Link from "next/link";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faNoteSticky,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Hooks
import { loginIsRequiredClient } from "@/utils/auth";
import { useSession } from "next-auth/react";
import { dbConnect } from "@/utils/db";

export default function HomePage(props) {
  const { data: session } = useSession();
  loginIsRequiredClient();

  function HomepageList({ containsTasklists, items }) {
    return (
      <ul className="homepage__list">
        {items.map((item, i) => (
          <li className="homepage__list_item" key={i}>
            <FontAwesomeIcon
              icon={containsTasklists ? faList : faNoteSticky}
              className="homepage__list_icon"
            />
            <Link
              href={containsTasklists ? "lists/tasklist-id" : "lists/list-id"}
            >
              {" "}
              {item}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <main className="homepage">
      <h1 className="homepage__header section__header">
        <FontAwesomeIcon icon={faUser} />
        {"Welcome, " + ((session && session.user.name) || "Guest")}
      </h1>

      <div className="homepage__lists">
        <div className="homepage__list-wrapper">
          <h2 className="homepage__list-header ">Simple Lists</h2>
          <HomepageList
            containsTasklists={false}
            items={["What", "is", "this", "I'm", "feeling?"]}
          />
        </div>

        <div className="homepage__list-wrapper">
          <h2 className="homepage__list-header ">Tasklists</h2>
          <HomepageList
            containsTasklists={true}
            items={["Is", "it", "the", "new", "beginning?"]}
          />
        </div>
      </div>
    </main>
  );
}

export function getStaticProps(){
  const db = dbConnect();

  return {
    props: {
      user_lists: {
        tasklists: [],
        lists: [],
      },
    },
  };
}