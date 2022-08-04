// this is the home page of site
import React from "react";
import client from "./api/client";
import Home from "./../components/Home/Home";
const style = {};
const App = (props) => {
  console.log(props.data);
  return (
    <div>
      <Home data={props.data} />
    </div>
  );
};

export default App;
export async function getServerSideProps() {
  const p = await client.fetch(`*[_type == "featuredProduct"]`);
  return {
    props: { data: p },
  };
}
