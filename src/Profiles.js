import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from './withRouterSample';

// 서브 라우터  : 특정 경로에 탭이 있는 경우 사용하면 편하다.
function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
          <li><NavLink to="/profiles/muey" activeStyle={{background: 'black', color: 'white'}} activeClassName="active" isActive={(match, loaction) => {
            return true;
          }}>muey</NavLink></li>         
          <li><NavLink to="/profiles/homer" activeStyle={{background: 'purple', color: 'white'}}>homer</NavLink></li>
          <li><NavLink to="/" exact activeStyle={{background: 'aqua', color: 'white'}}>yammy</NavLink></li>
      </ul>

      <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요 </div>} />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample/>
    </div>
  );
}

export default Profiles;