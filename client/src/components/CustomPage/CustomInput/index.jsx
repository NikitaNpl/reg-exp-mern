import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setInfoTopic,
  setNextTopic,
  setPrevTopic,
  setIsApprovedTest,
  setNextTest,
  setPrevTest
} from "../../../redux/actions/create";

function CustomInput({ item, pattern }) {
  const dispatch = useDispatch();
  const textInputRef = React.useRef(null);
  const { categories } = useSelector(({ categories }) => categories);

  const createRegExp = (pattern) => {
    let regParts = pattern.match(/^\/(.*?)\/([gim]*)$/);
    let regExp = null;
    if (regParts) {
      return new RegExp(regParts[1], regParts[2]);
    } else {
      return regExp = new RegExp(pattern);
    }
  }

  const handlerRadioInput = (category) => {
    dispatch(setInfoTopic(category, true));
  }

  const handlerTextInput = () => {
    const value = textInputRef.current.value;
    if (!value) {
      return dispatch(setInfoTopic(null, false));
    }
    dispatch(setInfoTopic(value, true));
  }

  const handelreCheckedText = (pattern) => {
    const value = textInputRef.current.value;
    if (!value) {
      return dispatch(setIsApprovedTest(false));
    }

    const regExp = createRegExp(pattern);

    if (regExp.test(value)) {
      dispatch(setIsApprovedTest(true));
    } else {
      dispatch(setIsApprovedTest(false));
    }
  }

  const handlerPrevTopic = () => {
    dispatch(setPrevTopic());
  }

  const handlerNextTopic = () => {
    dispatch(setNextTopic());
  }

  const handlerPrevTest = () => {
    dispatch(setPrevTest());
  }

  const handlerNextTest = () => {
    dispatch(setNextTest());
  }

  return (
    <>
      {item ? (
        <div className="page__form">
          <div className="form-info">
            <div className="header">{item.title}</div>
            <div className="description" data-name={`${item.description}`}>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7156 22C7.19404 21.9945 2.72191 17.5149 2.72559 11.9933C2.72927 6.47179 7.20737 1.99816 12.7289 2C18.2505 2.00184 22.7256 6.47845 22.7256 12C22.7223 17.5254 18.241 22.0022 12.7156 22ZM4.72559 12.172C4.7729 16.5732 8.36669 20.1095 12.7681 20.086C17.1696 20.0622 20.7251 16.4875 20.7251 12.086C20.7251 7.6845 17.1696 4.10977 12.7681 4.08599C8.36669 4.06245 4.7729 7.59875 4.72559 12V12.172ZM13.7256 17H11.7256V15H13.7256V17ZM13.7256 13H11.7256V7H13.7256V13Z" fill="#828282" />
              </svg>
            </div>
          </div>
          <div className="form-input">
            {pattern ? (
              <>
                <textarea defaultValue={pattern} readOnly />
                <input
                  ref={textInputRef}
                  type="text"
                  onChange={handelreCheckedText.bind(this, pattern)}
                />
              </>
            )
              :
              (
                item.id === 1 ? categories?.map((category) => (
                  <div className="radio-input" key={category._id}>
                    <input
                      type="radio"
                      checked={category._id === item.info?._id}
                      readOnly
                      value={category.name}
                      onClick={handlerRadioInput.bind(this, category)}
                    />
                    {category.name}
                  </div>
                )) : (
                  <input
                    ref={textInputRef}
                    type="text"
                    value={item.info ? item.info : ""}
                    onChange={handlerTextInput}
                  />
                )
              )
            }
          </div>
          <div className="form-transition">
            <span className={item.id === 1 ? "not-allowed" : ""}>
              <button
                disabled={item.id === 1}
                className={item.id === 1 ? "none-pointerEvents" : ""}
                onClick={pattern ? handlerPrevTest : handlerPrevTopic}
              >
                Назад
          </button>
            </span>
            <span className={item.isApproved ? "" : "not-allowed"}>
              <button
                disabled={!item.isApproved}
                className={item.isApproved ? "" : "none-pointerEvents"}
                onClick={pattern ? handlerNextTest : handlerNextTopic}
              >
                Далее
          </button>
            </span>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CustomInput
