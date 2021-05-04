import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setFilledTopic,
  setCategorie,
  setCaption,
  setPattern,
  setPlaceholder,
  setDescription
} from "../../../redux/actions/create";

function CustomInput({ topic }) {
  const dispatch = useDispatch();
  const textInputRef = React.useRef(null);
  const { category, caption, pattern, placeholder, description } = useSelector(({ create }) => create.creature);
  const { categories } = useSelector(({ categories }) => categories);

  const dispatchSetFilledTopic = (isFilled) => {
    dispatch(setFilledTopic(isFilled));
  }

  const handlerRadioInput = (category) => {
    dispatchSetFilledTopic(true);
    dispatch(setCategorie(category));
  }

  const handlerTextInput = () => {
    dispatchSetFilledTopic(true);
    const value = textInputRef.current.value;

    if (!value) {
      dispatchSetFilledTopic(false);
    }

    switch (topic.id) {
      case 2:
        return dispatch(setCaption(value));
      case 3:
        return dispatch(setPattern(value));
      case 4:
        return dispatch(setPlaceholder(value));
      case 5:
        return dispatch(setDescription(value));
      default:
        return;
    }
  }

  const outputTextInput = () => {
    switch (topic.id) {
      case 2:
        return caption;
      case 3:
        return pattern;
      case 4:
        return placeholder;
      case 5:
        return description;
      default:
        return;
    }
  };

  return (
    <div className="page__form">
      <div className="form-info">
        <div className="header">{topic?.title}</div>
        <div className="description" data-name={`${topic?.description}`}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7156 22C7.19404 21.9945 2.72191 17.5149 2.72559 11.9933C2.72927 6.47179 7.20737 1.99816 12.7289 2C18.2505 2.00184 22.7256 6.47845 22.7256 12C22.7223 17.5254 18.241 22.0022 12.7156 22ZM4.72559 12.172C4.7729 16.5732 8.36669 20.1095 12.7681 20.086C17.1696 20.0622 20.7251 16.4875 20.7251 12.086C20.7251 7.6845 17.1696 4.10977 12.7681 4.08599C8.36669 4.06245 4.7729 7.59875 4.72559 12V12.172ZM13.7256 17H11.7256V15H13.7256V17ZM13.7256 13H11.7256V7H13.7256V13Z" fill="#828282" />
          </svg>
        </div>
      </div>
      <div className="form-input">
        {topic.id === 1 ? categories?.map((item) => (
          <div className="radio-input" key={item._id}>
            <input
              type="radio"
              checked={item._id === category?._id}
              readOnly
              value={item.name}
              onClick={handlerRadioInput.bind(this, item)}
            />
            {item.name}
          </div>
        )) : (
          <input ref={textInputRef} type="text" value={outputTextInput() || ''} onChange={handlerTextInput} />
        )}
      </div>
      <div className="form-transition">
        <button>Назад</button>
        <span className={topic.filled ? "" : "not-allowed"}>
          <button disabled={!topic.filled} className={topic.filled ? "" : "none-pointerEvents"}>Далее</button>
        </span>
      </div>
    </div>
  )
}

export default CustomInput
