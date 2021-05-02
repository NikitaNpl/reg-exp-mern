import React from 'react'

import ProgressBar from './ProgressBar';
import CustomInput from './CustomInput';

function CustomPage({ pageNumber, pageHeader, topics, selectedTopic, onClickTopic }) {

  return (
    <React.Fragment>
      <div className="page__number">{pageNumber}</div>
      <div className="page__header">{pageHeader}</div>
      <ProgressBar 
        topics={topics} 
        selectedTopic={selectedTopic} 
        onClickTopic={onClickTopic} 
      />
      <CustomInput topic={selectedTopic} />
    </React.Fragment>
  )
}

export default CustomPage;
