//Components
import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { List } from "@/components/Lists/List";

//Functions
import { ObjectId } from "mongodb";
import { dbConnect} from "@/utils/dbConnect";
import { useState, useEffect } from "react";


export default function ListPage(props) {

  useEffect(() => {
    // fetch('/api/list');
  }, [])

  const list = props.simple_list;
  console.log(props.simple_list);

  return (
    <ListPageLayout
      title={list.title}
    >
      <div className="simple-list">
        <List
          contentArray={list.tasks}
        />
      </div>
    </ListPageLayout>
  );
}

export async function getStaticProps() {
  const client = await dbConnect();
  const db = client.db('ToDo');

  const listId = new ObjectId("65a66a27b6a8062447227710");
  const list =  await Object(db.collection('Dummy List').findOne({_id: listId}));
  console.log(list);
  client.close();
  return {
    props: {
      simple_list: {
        _id: list._id.toString(),
        title: list.title,
        tasks: list.tasks,
      },
    },
  };
}
