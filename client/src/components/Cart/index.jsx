import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchLike, fetchUnLike, fetchViews } from '../../redux/actions/regExp';
import { fetchAccountUpdate, fetchAccountUnFavorites } from "../../redux/actions/account";

import unLike from '../../assets/svg/heart_outline.svg';
import like from '../../assets/svg/heart_fill.svg';


function Cart({ items, isDemo, isViewed, isFavorites }) {
  const dispatch = useDispatch();
  const { itemsLikes } = useSelector(({ regExp }) => regExp);
  const { account } = useSelector(({ account }) => account);
  const [isCopyiedPattern, setCopyiedPattern] = React.useState(false);
  const [isCorrectInput, setCorrectInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const copyiedPatternRef = React.useRef();
  const inputRef = React.useRef();
  const isLiked = itemsLikes.includes(items?._id) || account?.favorites?.includes(items?._id);

  const onClickLike = React.useCallback((itemId) => {
    dispatch(fetchLike(itemId));
    if (Object.keys(account).length) {
      dispatch(fetchAccountUpdate("favorites", account?._id, itemId));
    }
  }, [dispatch])

  const onClickUnLike = React.useCallback((itemId) => {
    dispatch(fetchUnLike(itemId));
    if (Object.keys(account).length) {
      dispatch(fetchAccountUnFavorites(account?._id, itemId));
    }
  }, [dispatch])

  function handelreCopyPattern(copyiedPatternRef, itemId) {
    let area = document.createElement('textarea');
    document.body.appendChild(area);
    area.value = copyiedPatternRef.current.value;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
    setCopyiedPattern(true);
    if (!isDemo) {
      dispatch(fetchViews(itemId));
      if (Object.keys(account).length) {
        dispatch(fetchAccountUpdate("viewed", account?._id, itemId));
      }
    }
  }

  function handlerMouseOver() {
    setCopyiedPattern(false);
  }

  function handelreOnChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handelreOnKeyUp(pattern) {
    let regParts = pattern.match(/^\/(.*?)\/([gim]*)$/);
    let regExp = null;
    if (regParts) {
      regExp = new RegExp(regParts[1], regParts[2]);
    } else {
      regExp = new RegExp(pattern);
    }
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
      <div className={`cart__header border-${items?.color?.name}`}>
        <span className="cart__header-title">{items?.title}</span>
        <div className="cart__header-info" data-name={items?.description ? items?.description : items?.title}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7156 22C7.19404 21.9945 2.72191 17.5149 2.72559 11.9933C2.72927 6.47179 7.20737 1.99816 12.7289 2C18.2505 2.00184 22.7256 6.47845 22.7256 12C22.7223 17.5254 18.241 22.0022 12.7156 22ZM4.72559 12.172C4.7729 16.5732 8.36669 20.1095 12.7681 20.086C17.1696 20.0622 20.7251 16.4875 20.7251 12.086C20.7251 7.6845 17.1696 4.10977 12.7681 4.08599C8.36669 4.06245 4.7729 7.59875 4.72559 12V12.172ZM13.7256 17H11.7256V15H13.7256V17ZM13.7256 13H11.7256V7H13.7256V13Z" fill="#828282" />
          </svg>
        </div>
      </div>
      <div className="cart__main">
        <div className="textarea-info" data-name={isCopyiedPattern ? 'Скопировано' : 'Скопировать'}>
          <textarea
            onClick={handelreCopyPattern.bind(this, copyiedPatternRef, items?._id)}
            onMouseOver={handlerMouseOver}
            ref={copyiedPatternRef}
            name="text"
            readOnly
            defaultValue={items?.pattern}
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
            onKeyUp={handelreOnKeyUp.bind(this, items?.pattern)}
            onChange={handelreOnChangeInput}
            ref={inputRef}
            type="text"
            placeholder={items?.placeholder}
          />
        </div>
      </div>
      <div className="cart__footer">
        <div className="cart__footer-author" title="author">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" fill="#828282" />
          </svg>
          <span>naiple</span>
        </div>
        <div
          onClick={isDemo ? (isViewed || isFavorites ? isLiked ? onClickUnLike.bind(this, items?._id) : onClickLike.bind(this, items?._id) : null) : isLiked ? onClickUnLike.bind(this, items?._id) : onClickLike.bind(this, items?._id)}
          className="cart__footer-like"
          title={`${isDemo ? (isViewed || isFavorites ? items?.rating.likes : "0") : items?.rating.likes} likes`}
        >
          <img src={isLiked ? like : unLike} alt=""></img>
          <span>{isDemo ? (isViewed || isFavorites ? items?.rating.likes : "0") : items?.rating.likes}</span>
        </div>
        <div className="cart__footer-views" title={`${isDemo ? "0" : items?.rating.views} wiews`}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1414 19.5865C10.5013 19.6069 8.87809 19.253 7.39539 18.5515C6.24608 17.9907 5.21404 17.2163 4.35439 16.2695C3.44382 15.2906 2.72686 14.1482 2.24139 12.9025L2.14139 12.5865L2.24639 12.2705C2.7322 11.0259 3.44762 9.88378 4.35539 8.90351C5.21473 7.95682 6.24643 7.18237 7.39539 6.62151C8.8781 5.9201 10.5013 5.56612 12.1414 5.58651C13.7815 5.56616 15.4047 5.92013 16.8874 6.62151C18.0367 7.18225 19.0688 7.9567 19.9284 8.90351C20.8407 9.88107 21.5579 11.0239 22.0414 12.2705L22.1414 12.5865L22.0364 12.9025C20.4676 16.9863 16.5156 19.6559 12.1414 19.5865ZM12.1414 7.58651C8.73726 7.47984 5.61281 9.46161 4.25839 12.5865C5.61259 15.7116 8.73718 17.6935 12.1414 17.5865C15.5454 17.6929 18.6697 15.7112 20.0244 12.5865C18.6717 9.46009 15.5461 7.47759 12.1414 7.58651ZM12.1414 15.5865C10.6987 15.5961 9.45076 14.5839 9.16235 13.1703C8.87395 11.7567 9.62566 10.3365 10.9568 9.78017C12.2879 9.22381 13.8266 9.68665 14.6299 10.885C15.4332 12.0834 15.2768 13.6826 14.2564 14.7025C13.6977 15.2678 12.9361 15.5861 12.1414 15.5865Z" fill="#828282" />
          </svg>
          <span>{isDemo ? (isViewed || isFavorites ? items?.rating.views : "0") : items?.rating.views}</span>
        </div>
      </div>
    </div >
  )
}

export default Cart;
