import React, { useState } from "react";
import InfoRows from "../components/InfoRows";
import Layout from "../containers/layout";
// import topBanner from "../components/topBanner";

const Home = (props) => {

  console.log('>>>>>>>>>>>> HOME ====== ', props);

  const { pageContext: { route: { page } } } = props;

  const component = (page.content || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;

      console.log('C type === ',c._type);
      switch (c._type) {
        case "history":
          el = <InfoRows key={c._key} {...c} />;
          break;
        default:
          el = null;
      }

      console.log('CONTENT ==', el)
      return el;
    });


  const menuItems = page.navMenu && (page.navMenu.items || []);

  return (
    <Layout navMenuItems={menuItems} textWhite={true}>
      <div className="pt-24">{component}</div>
    </Layout>
  );
};

export default Home;