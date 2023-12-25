import { getToken } from '@/utils/token';
import { Navigate } from 'react-router-dom';

type AuthRouteProps = {
  children?: React.ReactElement
}

function AuthRoute(props: AuthRouteProps) {
  const token = getToken();

  if (token) {
    return <>{props.children}</>
  } else {
    return <Navigate to={"/login"} replace />;
  }
}

export default AuthRoute