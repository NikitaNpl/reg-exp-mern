import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchLike, fetchUnLike, fetchViews } from '../../redux/actions/regExp';

import unLike from '../../assets/svg/heart_outline.svg';
import like from '../../assets/svg/heart_fill.svg';


function Cart({ items }) {
  const dispatch = useDispatch();
  const { itemsLikes } = useSelector(({ regExp }) => regExp);
  const [isCopyiedPattern, setCopyiedPattern] = React.useState(false);
  const [isCorrectInput, setCorrectInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const copyiedPatternRef = React.useRef();
  const inputRef = React.useRef();
  const isLiked = itemsLikes.includes(items._id);

  const onClickLike = React.useCallback((itemId) => {
    dispatch(fetchLike(itemId));
  }, [dispatch])

  const onClickUnLike = React.useCallback((itemId) => {
    dispatch(fetchUnLike(itemId));
  }, [dispatch])

  function handelreCopyPattern(copyiedPatternRef, itemId) {
    let area = document.createElement('textarea');
    document.body.appendChild(area);
    area.value = copyiedPatternRef.current.value;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
    setCopyiedPattern(true);
    dispatch(fetchViews(itemId))
  }

  function handlerMouseOver() {
    setCopyiedPattern(false);
  }

  function handelreOnChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handelreOnKeyUp(pattern) {
    let regParts = pattern.match(/^\/(.*?)\/([gim]*)$/);
    let regExp = new RegExp(regParts[1], regParts[2]);
    if (!inputValue) {
      return;
    }
    if (!regExp.test(inputValue)) {
      setCorrectInput(false);
    } else {
      setCorrectInput(true);
    }
  }

  return (
    <div className="cart">
      <div className={`cart__header border-${items.color.name}`}>
        <span className="cart__header-title">{items.title}</span>
        <div className="cart__header-info" data-name={items.description ? items.description : items.title}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7156 22C7.19404 21.9945 2.72191 17.5149 2.72559 11.9933C2.72927 6.47179 7.20737 1.99816 12.7289 2C18.2505 2.00184 22.7256 6.47845 22.7256 12C22.7223 17.5254 18.241 22.0022 12.7156 22ZM4.72559 12.172C4.7729 16.5732 8.36669 20.1095 12.7681 20.086C17.1696 20.0622 20.7251 16.4875 20.7251 12.086C20.7251 7.6845 17.1696 4.10977 12.7681 4.08599C8.36669 4.06245 4.7729 7.59875 4.72559 12V12.172ZM13.7256 17H11.7256V15H13.7256V17ZM13.7256 13H11.7256V7H13.7256V13Z" fill="#828282" />
          </svg>
        </div>
      </div>
      <div className="cart__main">
        <div className="textarea-info" data-name={isCopyiedPattern ? 'Скопировано' : 'Скопировать'}>
          <textarea
            onClick={handelreCopyPattern.bind(this, copyiedPatternRef, items._id)}
            onMouseOver={handlerMouseOver}
            ref={copyiedPatternRef}
            name="text"
            readOnly
            defaultValue={items.pattern}
          />
        </div>
        <div className="input-area">
          <div className={`input-area__helper ${inputRef.current && (inputRef.current.value && (inputRef.current.value.length > 0)) ? "active" : ""}`}>
            {
              isCorrectInput ?
                (
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9C0 4.02944 4.02944 0 9 0H45V45H9C4.02944 45 0 40.9706 0 36V9Z" fill="#25BB65" />
                    <path d="M19.2875 30.4855L11.8625 23.0605L13.9835 20.9395L19.4645 26.4145L19.2875 26.242L32.015 13.5145L34.136 15.6355L21.4085 28.3645L19.289 30.484L19.2875 30.4855Z" fill="white" />
                  </svg>
                ) : (
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9C0 4.02944 4.02944 0 9 0H45V45H9C4.02944 45 0 40.9706 0 36V9Z" fill="#EB5757" />
                    <path d="M11 12.019L32 33.019" stroke="white" strokeWidth="2" />
                    <path d="M11 12.019L32 33.019" stroke="white" strokeWidth="2" />
                    <path d="M12 33.019L31.9704 12" stroke="white" strokeWidth="2" />
                    <path d="M12 33.019L31.9704 12" stroke="white" strokeWidth="2" />
                  </svg>
                )
            }
          </div>
          <input
            onKeyUp={handelreOnKeyUp.bind(this, items.pattern)}
            onChange={handelreOnChangeInput}
            ref={inputRef}
            type="text"
            placeholder={items.placeholder}
          />
        </div>
      </div>
      <div className="cart__footer">
        <div className="cart__footer-author" title="author">
          <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.69328 22.8063H4.34723V21.7442C4.3524 17.6403 8.02565 14.3145 12.5584 14.3099H17.2505C21.7833 14.3145 25.4565 17.6403 25.4617 21.7442V22.8063H23.1156V21.7442C23.1118 18.8129 20.4881 16.4375 17.2505 16.434H12.5584C9.3208 16.4375 6.69716 18.8129 6.69328 21.7442V22.8063ZM14.9045 13.2478C11.6652 13.2478 9.03933 10.8703 9.03933 7.93753C9.03933 5.00475 11.6652 2.62726 14.9045 2.62726C18.1437 2.62726 20.7696 5.00475 20.7696 7.93753C20.7657 10.8689 18.1421 13.2443 14.9045 13.2478ZM14.9045 4.75137C12.9609 4.75137 11.3854 6.17786 11.3854 7.93753C11.3854 9.6972 12.9609 11.1237 14.9045 11.1237C16.848 11.1237 18.4235 9.6972 18.4235 7.93753C18.4235 6.17786 16.848 4.75137 14.9045 4.75137Z" fill="#828282" />
          </svg>
          <span>naiple</span>
        </div>
        <div
          onClick={isLiked ? onClickUnLike.bind(this, items._id) : onClickLike.bind(this, items._id)}
          className="cart__footer-like"
          title={`${items.rating.likes} likes`}
        >
          <img src={isLiked ? like : unLike}></img>
          <span>{items.rating.likes}</span>
        </div>
        <div className="cart__footer-views" title={`${items.rating.views} wiews`}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1414 19.5865C10.5013 19.6069 8.87809 19.253 7.39539 18.5515C6.24608 17.9907 5.21404 17.2163 4.35439 16.2695C3.44382 15.2906 2.72686 14.1482 2.24139 12.9025L2.14139 12.5865L2.24639 12.2705C2.7322 11.0259 3.44762 9.88378 4.35539 8.90351C5.21473 7.95682 6.24643 7.18237 7.39539 6.62151C8.8781 5.9201 10.5013 5.56612 12.1414 5.58651C13.7815 5.56616 15.4047 5.92013 16.8874 6.62151C18.0367 7.18225 19.0688 7.9567 19.9284 8.90351C20.8407 9.88107 21.5579 11.0239 22.0414 12.2705L22.1414 12.5865L22.0364 12.9025C20.4676 16.9863 16.5156 19.6559 12.1414 19.5865ZM12.1414 7.58651C8.73726 7.47984 5.61281 9.46161 4.25839 12.5865C5.61259 15.7116 8.73718 17.6935 12.1414 17.5865C15.5454 17.6929 18.6697 15.7112 20.0244 12.5865C18.6717 9.46009 15.5461 7.47759 12.1414 7.58651ZM12.1414 15.5865C10.6987 15.5961 9.45076 14.5839 9.16235 13.1703C8.87395 11.7567 9.62566 10.3365 10.9568 9.78017C12.2879 9.22381 13.8266 9.68665 14.6299 10.885C15.4332 12.0834 15.2768 13.6826 14.2564 14.7025C13.6977 15.2678 12.9361 15.5861 12.1414 15.5865Z" fill="#828282" />
          </svg>
          <span>{items.rating.views}</span>
        </div>
      </div>
    </div >
  )
}

export default Cart;
