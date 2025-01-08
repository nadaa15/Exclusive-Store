import { createContext, useEffect, useState } from "react";
 import { getAuth, onAuthStateChanged } from "firebase/auth";


export let UserContext = createContext(0);

export default function UserContextProvider(props) {
  const [userLogin, setUserLogin] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userID") !== null) {
      setUserLogin(localStorage.getItem("userID"));
    }
      const auth = getAuth();

     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
        
         setUserLogin(user.uid);
         setUserName(user.displayName || "Anonymous");
         setUserEmail(user.email || "No Email");
       } else {
         setUserLogin(null);
         setUserName(null);
         setUserEmail(null);
       }
     });

     return () => unsubscribe();
  }, []);
  

  return (
    <>
      <UserContext.Provider value={{ userLogin, setUserLogin , userName, userEmail, setUserName }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}
