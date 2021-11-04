import React, { useEffect } from 'react';

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack(); // 뒤로 가기를 의미
  }

  const goHome = () => {
    history.push("/"); // 특정 경로 이동을 의미
  }
  
  const replaceToHome = () => {
    history.replace('/'); // 방문기록을 안남김
  }
  
  useEffect(() => {
    console.log(history)
    const unblock = history.block('정말 떠나실 건가요?'); // 페이지 이탈 방지 (글 작성중 )
    return () => {
      unblock();
    }
  }, [history])

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
    </div>
  );
}

export default HistorySample;