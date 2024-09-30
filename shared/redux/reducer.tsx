import { Itemsdata1 } from "../data/pages/ecommerces/ecommercedata";

let initialState = {
  lang: "en",
  dir: "ltr",
  class: "light",
  dataMenuStyles: "light",
  dataNavLayout: "horizontal",
  dataHeaderStyles: "light",
  dataVerticalStyle: "overlay",
  dataToggled: "menu-hover-closed",
  dataNavStyle: "menu-hover",
  horStyle: "",
  dataPageStyle: "regular",
  dataWidth: "fullwidth",
  dataMenuPosition: "fixed",
  dataHeaderPosition: "fixed",
  loader: "disable",
  iconOverlay: "",
  colorPrimaryRgb: "",
  colorPrimary: "",
  bodyBg: "",
  Light: "",
  darkBg: "",
  inputBorder: "",
  bgImg: "",
  iconText: "",
  body: {
    class: "",
  },
};

export default function reducer(state = initialState, action: any) {
  let { type, payload } = action;

  switch (type) {
    case "ThemeChanger":
      state = payload;
      return state;
      break;

    default:
      return state;
  }
}
