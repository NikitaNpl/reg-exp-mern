import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { setTopics, setNextPage, setPrevPage } from "../../../redux/actions/create";

import Creation from "./Creation";

import JSONdata from "../../../assets/data/data-for-create.json";

function Create(props) {
  const dispatch = useDispatch();
  let { currentPage } = useSelector(({ create }) => create)

  React.useEffect(() => {
    dispatch(setTopics(JSONdata));
  }, [dispatch]);

  React.useEffect(() => {
    props.history.push(`/account/create/${currentPage}`);
  }, [currentPage])

  const onClickNextPage = () => {
    dispatch(setNextPage());
  }

  const onClickPrevPage = () => {
    dispatch(setPrevPage());
  }

  return (
    <div className="creation-block">
      <div className="page">
        <Switch>
          <Route
            path={`/account/create/:number`}
            render={props => <Creation {...props} />}
          />
          <Redirect from={`/account/create`} to={`/account/create/${1}`} />
        </Switch>
        <div className="page__transition">
          <span className={currentPage === 1 ? "not-allowed" : ""}>
            <button onClick={onClickPrevPage} className={currentPage === 1 ? "none-pointerEvents" : ""}>&lt;</button>
          </span>
          <span className={currentPage === 3 ? "not-allowed" : ""}>
            <button onClick={onClickNextPage} className={currentPage === 3 ? "none-pointerEvents" : ""}>&gt;</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Create);
