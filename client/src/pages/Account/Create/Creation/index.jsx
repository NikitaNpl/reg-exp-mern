import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setTopic } from "../../../../redux/actions/create";
import { fetchCategories } from "../../../../redux/actions/categories";

import CustomPage from "../../../../components/CustomPage";

function Creation() {
  const dispatch = useDispatch();
  const { topics, selectedTopic } = useSelector(({ create }) => create);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onClickTopic = (topic) => {
    dispatch(setTopic(topic))
  }

  return (
    <CustomPage
      pageNumber={1}
      pageHeader={"Создание карточки регулярного выражения"}
      topics={topics}
      selectedTopic={selectedTopic}
      onClickTopic={onClickTopic}
    />
  )
}

export default Creation;
