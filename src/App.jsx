import { useEffect, useLayoutEffect, useState } from "react";
import Dashboard from "./components/Auth/Dashboard";
import Login from "./components/Auth/Login";

export default function App() {
  const [isAutenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  //Check login
  // ==> Hợp lệ ==> Cập nhật state isAutenticated => true
  // ==> Không hợp lệ ==> Cập nhật state isAutenticated => false
  const updateAutentication = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        setIsAuthenticated(true);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    updateAutentication();
  }, []);
  if (isLoading) return <h2>Loading...</h2>;
  return <div>{isAutenticated ? <Dashboard /> : <Login />}</div>;
}

//useEffect
/*
1. State thay đổi
2. Component Re-render
3. UI Update
4. Cleanup
5. Callback useEffect chạy
*/

//useLayoutEffect
/*
1. State thay đổi
2. Component Re-render
3. Cleanup
4. Callback useLayoutEffect chạy
5. UI Update
*/
