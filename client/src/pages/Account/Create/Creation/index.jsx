import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setTopic } from "../../../../redux/actions/create";
import { fetchCategories } from "../../../../redux/actions/categories";

import CustomPage from "../../../../components/CustomPage";

function Creation(props) {
  const [pageNumber, setPageNumber] = React.useState(null);
  const [pageHeader, setPageHeader] = React.useState(null);
  const dispatch = useDispatch();
  const { topics, selectedTopic } = useSelector(({ create }) => create);

  React.useEffect(() => {
    const number = props.match.params.number;
    setPageNumber(number);
    switch (number) {
      case "1":
        return setPageHeader("Создание карточки регулярного выражения");
      case "2":
        return setPageHeader("Проверка регулярного выражения");
      case "3":
        return setPageHeader("Готовый результат");
      default:
        return;
    }
  }, [props.match.params.number]);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onClickTopic = (topic) => {
    dispatch(setTopic(topic))
  }

  return (
    <CustomPage
      pageNumber={pageNumber}
      pageHeader={pageHeader}
      topics={topics}
      selectedTopic={selectedTopic}
      onClickTopic={onClickTopic}
    />
  )
}

export default Creation;
