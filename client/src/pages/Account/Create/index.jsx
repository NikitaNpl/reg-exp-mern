import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import {setTopics} from "../../../redux/actions/create";

import Creation from "./Creation";
import Verification from "./Verification";
import Result from "./Result";

import JSONdata from "../../../assets/data/data-for-create.json";

function Create() {
  const dispatch = useDispatch();

  React.useEffect(() => {
   dispatch(setTopics(JSONdata));
  }, [dispatch]);

  return (
    <div className="creation-block">
      <div className="page">
        <Switch>
          <Route
            path={`/account/create/creation`}
            render={props => <Creation {...props}/>}
          />
          <Route
            path={`/account/create/verification`}
            render={props => <Verification {...props} />}
          />
          <Route
            path={`/account/create/result`}
            render={props => <Result {...props} />}
          />
          <Redirect from={`/account/create`} to={`/account/create/creation`} />
        </Switch>
        <div className="page__transition">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default Create;
