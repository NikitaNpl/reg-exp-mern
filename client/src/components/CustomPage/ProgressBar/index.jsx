import React from 'react';

function ProgressBar({ items, selectedItem, onClickItem }) {

  return (
    <div className="page__progerss-bar">
      <ul className="progress-bar">
        {items.length ? (items.map((item) => (
          <li
            key={`${item.id}`}
            className={
              selectedItem.id > item.id ? "passed" :
                (selectedItem.id === item.id ? (
                  selectedItem.filled ? "passed" : "active"
                ) : null)
            }
            onClick={selectedItem.filled || item.filled ? onClickItem.bind(this, item) : null}
          >
            {item.title}
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
