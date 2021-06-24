import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
// import Top from './Top';
import BackLink from './BackLink';
import NotFound from './NotFound';

import BasicNavBar from './basic/NavBar';
import BasicBackLink from './basic/BackLink';
import BasicTop from './basic/Top';
import BasicAbout from './basic/About';
import BasicUser from './basic/User';
import BasicUserDetail from './basic/UserDetail';

import BeginnersNavBar from './beginners/NavBar';
import BeginnersBackLink from './beginners/BackLink';
import BeginnersTop from './beginners/Top';
import BeginnersSub from './beginners/Sub';
import BeginnersHooks from './beginners/Hooks';
// import BeginnersMemo from './beginners/Memo';
// import BeginnersMemo2 from './beginners/Memo2';
// import BeginnersUseCallback from './beginners/UseCallback';
// import BeginnersUseMemo from './beginners/UseMemo';
// import BeginnersUseMemo2 from './beginners/UseMemo2';

// import FastLearnNavBar from './fastLearn/NavBar';
// import FastLearnBackLink from './fastLearn/BackLink';
// import FastLearnTop from './fastLearn/Top';
// import FastLearnHello from './fastLearn/Hello';
// import FastLearnBookList from './fastLearn/BookList';

// import HooksSampleNavBar from './hooksSample/NavBar';
// import HooksSampleBackLink from './hooksSample/BackLink';
// import HooksSampleTop from './hooksSample/Top';
// import HooksSampleUseState from './hooksSample/UseState';
// import HooksSampleUseEffect from './hooksSample/UseEffect';
// import HooksSampleUseEffect2 from './hooksSample/UseEffect2';

// import TodoTop from './todo/Top';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={NavBar} />
        <Route path="/basic" component={BasicNavBar} />
        <Route path="/beginners" component={BeginnersNavBar} />
        {/* <Route path="/fastLearn" component={FastLearnNavBar} /> */}
        {/* <Route path="/hooksSample" component={HooksSampleNavBar} /> */}
        <Route component={NavBar} />
      </Switch>
      <hr />
      <Switch>
        <Route path="/" exact component={() => <h1>Topページ</h1>} />
        <Route path="/basic" exact component={BasicTop} />
        <Route path="/basic/about" component={BasicAbout} />
        <Route path="/basic/user" exact component={BasicUser} />
        <Route path="/basic/user/:id" component={BasicUserDetail} />
        <Route path="/beginners" exact component={BeginnersTop} />
        <Route path="/beginners/sub" component={BeginnersSub} />
        <Route path="/beginners/hooks" exact component={BeginnersHooks} />
        {/* <Route path="/beginners/memo" component={BeginnersMemo} />
        <Route path="/beginners/memo2" component={BeginnersMemo2} />
        <Route path="/beginners/useCallback" component={BeginnersUseCallback} />
        <Route path="/beginners/useMemo" component={BeginnersUseMemo} />
        <Route path="/beginners/useMemo2" component={BeginnersUseMemo2} /> */}
        {/* <Route path="/fastLearn" exact component={FastLearnTop} />
        <Route path="/fastLearn/hello" component={FastLearnHello} />
        <Route path="/fastLearn/bookList" component={FastLearnBookList} /> */}
        {/* <Route path="/hooksSample" exact component={HooksSampleTop} />
        <Route path="/hooksSample/useState" component={HooksSampleUseState} />
        <Route path="/hooksSample/useEffect" component={HooksSampleUseEffect} />
        <Route path="/hooksSample/useEffect2" component={HooksSampleUseEffect2} /> */}
        {/* <Route path="/todo" exact component={TodoTop} /> */}
        <Route component={NotFound} />
      </Switch>
      <hr />
      <Switch>
        <Route path="/" component={BackLink} exact />
        <Route path="/basic" component={BasicBackLink} />
        <Route path="/beginners" component={BeginnersBackLink} />
        {/* <Route path="/fastLearn" component={FastLearnBackLink} /> */}
        {/* <Route path="/hooksSample" component={HooksSampleBackLink} /> */}
        <Route component={BackLink} />
      </Switch>
    </BrowserRouter>
  );
};

const appElement = document.getElementById('app');
if (document.getElementById('app')) {
  ReactDOM.render(<App />, appElement);
};
