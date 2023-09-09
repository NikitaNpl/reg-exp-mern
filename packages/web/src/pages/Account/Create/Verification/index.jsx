import React from 'react';
import { useSelector } from 'react-redux';

import CustomPage from "../../../../components/CustomPage";

function Verification() {
  const { tests, selectedTest, topics } = useSelector(({ create }) => create);
  const [pattern, setPattern] = React.useState("");

  React.useEffect(() => {
    setPattern(topics[2]?.info);
  }, [topics]);

  return (
    <CustomPage
      pageNumber={2}
      pageHeader={"Проверка регулярного выражения"}
      items={tests}
      pattern={pattern}
      selectedItem={selectedTest}
    />
  )
}

export default Verification
