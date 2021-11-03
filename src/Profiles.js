import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

// 서브 라우터  : 특정 경로에 탭이 있는 경우 사용하면 편하다.
function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
          <li><Link to="/profiles/muey">muey</Link></li>         
          <li><Link to="/profiles/homer">homer</Link></li>
      </ul>

      <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요 </div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;