import React from 'react';
import { withRouter } from 'react-router-dom';

function WithRouterSample({ location, match, history }) {
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly /> {/* JSON으로 이루어진 객체를 문자열로 변환해줌 여기에 null, 2를 넣어줌 , 들여쓰기가 됨*/}
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly /> {/** match 의 경우, 현재 자신이 렌더링된 위치를 기준으로 match값을 받아옴.. */}
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
}

export default withRouter(WithRouterSample);