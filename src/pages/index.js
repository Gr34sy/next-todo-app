import { FormLogIn } from "@/components/Forms/FormLogIn";
import { useState } from "react";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const [userLogged, setUserLogged] = useState(0);

  function HomepageList({ containsTasklists, items }) {
    return (
      <ul className="homepage__list">
        {items.map((item, i) => (
          <li className="homepage__list_item" key={i}>
            <FontAwesomeIcon
              icon={containsTasklists ? faList : faNoteSticky}
              className="homepage__list_icon"
            />
            <Link href={containsTasklists ? 'lists/tasklist-id' : 'lists/list-id'}> {item}</Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <main className="homepage">
      <h1 className="section__header">Your Lists</h1>
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

      {!!userLogged && <FormLogIn />}
    </main>
  );
}
