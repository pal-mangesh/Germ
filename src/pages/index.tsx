import * as React from "react";
import DefaultLayout from "../layouts/default";
import HomeContainer from "../containers/home";
export default () => {
  return (
    <>
      <DefaultLayout>
        <HomeContainer />
      </DefaultLayout>
    </>
  );
};
