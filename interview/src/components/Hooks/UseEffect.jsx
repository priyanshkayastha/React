import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    if (result) {
      console.log(result);

      setData(result);
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchData();
  }, []);
   if (loading) {
    return <h1>Loading... Please wait</h1>;
  }

  return (
    <div>
      {data.length > 0 ? (
        data.map((user, index) => (
          <p key={`${user.id},${index}`}>{user.name}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default UseEffect;
