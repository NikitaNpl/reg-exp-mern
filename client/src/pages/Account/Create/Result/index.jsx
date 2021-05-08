import React from 'react';
import { useSelector } from 'react-redux';

import CustomPage from "../../../../components/CustomPage";

function Result() {
  const [items, setItems] = React.useState({}); 
  const { topics } = useSelector(({ create }) => create);
  const { account } = useSelector(({ account }) => account);

  React.useEffect(() => {
    let newItem = {};
    topics.forEach((topic) => {
      if (topic.tag === "categoriesId") {
        return newItem = { ...newItem, "color": topic.info?.color, "categoriesId": topic.info._id} 
      }
      newItem = { ...newItem, [topic.tag]: topic?.info}
    })
    newItem = { ...newItem, "creator": account?.login}
    setItems(newItem);
  }, [topics]);

  return (
    <CustomPage
      pageNumber={3}
      pageHeader={"Готовый результат"}
      cartItems={items}
      isDemo={true}
    />
  )
}

export default Result;