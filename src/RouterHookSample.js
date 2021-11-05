import useReactRouter from 'use-react-router';

function RouterHookSample() {
  const { history, location, match } = useReactRouter();
  console.log( {history, location, match} );
  // withRouter 보다 간편
  return null;
}

export default RouterHookSample;