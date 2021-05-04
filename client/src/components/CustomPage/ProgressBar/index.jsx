import React from 'react';

function ProgressBar({ topics, selectedTopic, onClickTopic }) {

  return (
    <div className="page__progerss-bar">
      <ul className="progress-bar">
        {topics.length ? (topics.map((topic) => (
          <li
            key={`${topic.id}`}
            className={
              selectedTopic.id > topic.id ? "passed" :
                (selectedTopic.id === topic.id ? (
                  selectedTopic.filled ? "passed" : "active"
                ) : null)
            }
            onClick={selectedTopic.filled || topic.filled ? onClickTopic.bind(this, topic) : null}
          >
            {topic.title}
          </li>
        ))) : null}
        {/* <li className="passed">Тема</li>
        <li className="passed">Заголовок</li>
        <li className="active">Паттерн</li>
        <li>Placeholder</li>
        <li>Описание</li> */}
      </ul>
    </div>
  )
}

export default ProgressBar;
