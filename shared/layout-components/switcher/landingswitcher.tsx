import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Themeprimarycolor, * as landingswitcherdata from "../../data/switcherdata/landingswitcherdata";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "@/shared/redux/store";

const Landingswitcher = ({ local_varaiable, ThemeChanger }: any) => {
  useEffect(() => {
    landingswitcherdata.LocalStorageBackup1(ThemeChanger);
  }, []);

  useEffect(() => {
    const theme = store.getState();
    ThemeChanger({
      ...theme,
      dataNavStyle: "menu-hover",
      dataNavLayout: "horizontal",
      class: "light",
    });
    return () => {
      ThemeChanger({
        ...theme,
        dataNavStyle: "menu-hover",
        dataNavLayout: "horizontal",
      });
    };
  }, []);

  const customstyles: any = `
  ${
    local_varaiable.colorPrimaryRgb != ""
      ? `--primary-rgb:${local_varaiable.colorPrimaryRgb}`
      : ""
  };
  ${
    local_varaiable.colorPrimary != ""
      ? `--primary:${local_varaiable.colorPrimary}`
      : ""
  };
  `;
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <html
            dir={local_varaiable.dir}
            className={local_varaiable.class}
            data-nav-layout={local_varaiable.dataNavLayout}
            data-toggled={local_varaiable.dataToggled}
            data-nav-style={local_varaiable.dataNavStyle}
            data-menu-position={local_varaiable.dataMenuPosition}
            style={customstyles}
          ></html>
          <body className="landing-body"></body>
        </Helmet>
      </HelmetProvider>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);