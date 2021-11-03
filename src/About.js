import React from 'react';
import qs from 'qs';

// 쿼리 사용 
// url에 ?a=1을 치면 콘솔로 search 부분에 나옴
// 이때 npm add qs 설치..
function About({ location }) {
    console.log(location)
    //?가 있기 때문에 쿼리 스트링 값 파싱해옴, 이때 파싱을 위해 qs를 사용하는 것
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, // 이렇게 해야 맨앞의 ?가 제외됨
    })
    console.log(query)

    const detail = query.detail === 'true';
    // 문자열이 아닌 숫자를 받아온다면 'parseInt(query.id, 10);' 처럼 해줘야함..
  return (
    <div>
      <h1>소개</h1>
      <p>실습해보는 페이지입니다.</p>
      <p>디테일 값이 true라면..http://localhost:3000/about?detail=true 치면 밑에 나옴 </p> 
      {detail && <p>detail 값이 true 입니다.</p>}
    </div>
  );
}

export default About;