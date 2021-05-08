import React from 'react';
import { useSelector } from 'react-redux';

import CustomPage from "../../../../components/CustomPage";

function Result() {
  const [items, setItems] = React.useState({}); 
  const { topics } = useSelector(({ create }) => create);

  React.useEffect(() => {
    let newItem = {};
    topics.forEach((topic) => {
      if (topic.tag === "categoriesId") {
        newItem = { ...newItem, "color": topic.info?.color} 
      }
      newItem = { ...newItem, [topic.tag]: topic?.info}
    })
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