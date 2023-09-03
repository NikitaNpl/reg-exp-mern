import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { setTopics, setTests, setNextPage, setPrevPage, setCurrentPage } from "../../../redux/actions/create";

import Creation from "./Creation";
import Verification from "./Verification";
import Result from "./Result";

import JSONdataCreate from "../../../assets/data/data-for-create.json";
import JSONdataVerification from "../../../assets/data/data-for-verification.json";

function Create(props) {
  const dispatch = useDispatch();
  const [isAllFilledTopics, setIsAllFilledTopics] = React.useState(false);
  const [isAllFilledTests, setIsAllFilledTests] = React.useState(true);
  let { currentPage, topics, tests } = useSelector(({ create }) => create)

  React.useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(setTopics(JSONdataCreate));
    dispatch(setTests(JSONdataVerification));
  }, [dispatch]);

  React.useEffect(() => {
    props.history.push(`/account/create/${currentPage}`);
  }, [props.history, currentPage]);

  React.useEffect(() => {
    const isFilled = topics.every((topic) => topic.isApproved === true);
    setIsAllFilledTopics(isFilled);
  }, [topics]);

  React.useEffect(() => {
    if (currentPage === 2) {
      const isFilled = tests.every((test) => test.isApproved === true);
      setIsAllFilledTests(isFilled);
    }
    if (currentPage === 1) {
      setIsAllFilledTests(true);
    }
  }, [currentPage, tests])

  const onClickNextPage = () => {
    dispatch(setNextPage());
  }

  const onClickPrevPage = () => {
    dispatch(setPrevPage());
  }

  return (
    <div className="creation-block container">
      <div className="page">
        <Switch>
          <Route
            path={`/account/create/1`}
            render={props => <Creation {...props} />}
          />
          <Route
            path={`/account/create/2`}
            render={props => <Verification {...props} />}
          />
          <Route
            path={`/account/create/3`}
            render={props => <Result {...props} />}
          />
          <Redirect from={`/account/create`} to={`/account/create/${1}`} />
        </Switch>
        <div className="page__transition">
          <span className={currentPage === 1 ? "not-allowed" : ""}>
            <button onClick={onClickPrevPage} className={currentPage === 1 ? "none-pointerEvents" : ""}>&lt;</button>
          </span>
          <span className={currentPage === 3 || !isAllFilledTopics || !isAllFilledTests ? "not-allowed" : ""}>
            <button
              onClick={onClickNextPage}
              className={currentPage === 3 || !isAllFilledTopics || !isAllFilledTests ? "none-pointerEvents" : ""}
            >
              &gt;
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Create);
