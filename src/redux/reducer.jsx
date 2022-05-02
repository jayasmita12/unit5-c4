

import { LOGIN, LOGOUT } from "./actions";

const init = {
   username: "",
   role: "",
   isLoggedin: false,
};

export const reducer = (store = init, { type, payload }) => {
   //  console.log(payload);
   switch (type) {
      case LOGIN:
         //  console.log(store);
         return {
            ...store,
            username: payload.username,
            role: payload.role,
            isLoggedin: true,
         };
      case LOGOUT:
         return {
            ...store,
            isLoggedin: false,
         };
      default:
         return store;
   }
};