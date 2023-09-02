import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from "../../../../redux/actions/categories";

import CustomPage from "../../../../components/CustomPage";

function Creation() {
  const dispatch = useDispatch();
  const { topics, selectedTopic } = useSelector(({ create }) => create);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <CustomPage
      pageNumber={1}
      pageHeader={"Создание карточки регулярного выражения"}
      items={topics}
      selectedItem={selectedTopic}
    />
  )
}

export default Creation;
