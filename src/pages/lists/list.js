import { ListLayout } from "@/components/ListLayout/ListLayout";
import { Dummy_List } from "@/utils/dummy-data";

export default function List(props) {
  console.log(props.simple_list);

  function handleClick(){
    console.log('click');
  }

  return (
    <ListLayout title={'The Bay'} onClick={handleClick}>
      <div className="simple-list">
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
        <p>You've got the body</p>
        <p>Do you have the soul?</p>
      </div>
    </ListLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      simple_list: Dummy_List,
    },
  };
}
