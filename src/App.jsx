import React, { useEffect, useState } from "react";

const App = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      let isMounted = true;

      setInterval(() => {
         if (isMounted) setCount(count + 1);
      }, 1000);

      return () => (isMounted = false);
   }, [count]);

   return <h2>{count}</h2>;
};

export default App;
