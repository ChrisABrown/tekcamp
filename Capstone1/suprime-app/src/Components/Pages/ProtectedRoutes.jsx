import React from "react";
import AdminView from "./Forms/AdminView";
import { Route, Navigate, Outlet } from "react-router-dom";

// function ProtectedRoute({ isAuth: , component: AdminView, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (isAuth) {
//           return <AdminView />;
//         } else {
//           return (
//             <Navigate to={{ pathname: "/", state: { from: props.location } }} />
//           );
//         }
//       }}
//     />
//   );
// }
// export default ProtectedRoute;
