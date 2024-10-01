import MenuItems from "@/shared/layout-components/sidebar/nav";
import store from "@/shared/redux/store";
import { ClassAttributes, InputHTMLAttributes, JSX, useState } from "react";

export function Dark(actionfunction:any) {
    const theme :any = store.getState()
    actionfunction({
        ...theme,
        "class": "dark",
        "dataHeaderStyles": "dark",
        "dataMenuStyles": "dark",
        "bodyBg": "",
        "darkBg": "",
        "inputBorder": "",
        "Light": "",
        
    })
    localStorage.setItem("netinsightdarktheme", "dark");
    localStorage.removeItem("netinsightlighttheme");
    localStorage.removeItem('darkBgRGB');
}
export function Light(actionfunction:any) {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "class": "light",
        "dataHeaderStyles": "light",
        "bodyBg": "",
        "darkBg": "",
        "inputBorder": "",
        "Light": "",
        "dataMenuStyles": "dark",
        
    })
    localStorage.setItem("netinsightlighttheme", "light");
    localStorage.removeItem("netinsightdarktheme");
    localStorage.removeItem("bodyBgRGB");
    localStorage.removeItem("primaryRGB");
    localStorage.removeItem("primaryRGB1");
    localStorage.removeItem("inputBorder");
    localStorage.removeItem("Light");
    localStorage.removeItem("netinsightMenu");
    localStorage.removeItem("netinsightHeader");

}

export function Ltr(actionfunction:any) {
    const theme = store.getState()
    actionfunction({
        ...theme, "dir": "ltr",
        
    })
    localStorage.removeItem("netinsightrtl");
};
export function Rtl(actionfunction:any) {
    const theme = store.getState()
    actionfunction({
        ...theme, "dir": "rtl",
        
    })
    localStorage.setItem("netinsightrtl", "rtl");
};
export const Vertical = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataMenuStyles": "dark",
        "dataVerticalStyle": "overlay",
        "dataToggled": "menu-hover-closed",
        "dataNavStyle": 'menu-hover',
        
    })
    localStorage.setItem("netinsightlayout", "vertical");
    localStorage.removeItem("netinsightnavstyles");

};

export const HorizontalClick = (actionfunction:any) => {
    const theme = store.getState()
    setTimeout(() => {
        document.querySelector<HTMLElement>(".main-content")?.click();
    }, 100);
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        // "dataMenuStyles": localStorage.netinsightdarktheme ? 'dark' : localStorage.darkBgRGB ? 'dark' : localStorage.netinsightMenu ? localStorage.netinsightMenu : "light",
        "dataVerticalStyle": "",
        "dataNavStyle": "menu-hover",
        
    })
    localStorage.setItem("netinsightlayout", "horizontal");
    localStorage.removeItem("netinsightverticalstyles");
};
export const Menuclick = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-click",
        "dataToggled": "menu-click-closed",
        "dataVerticalStyle": "",
        
    })
    localStorage.setItem("netinsightnavstyles", "menu-click");

};
export const MenuHover = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-hover",
        "dataVerticalStyle": "",
        "dataToggled": "menu-hover-closed",
        "horStyle": "",
        
    })
    localStorage.setItem("netinsightnavstyles", "menu-hover");
    localStorage.removeItem("netinsightverticalstyles");
    closeMenuFn();
};

export const IconClick = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataVerticalStyle": "",
        "dataNavStyle": "icon-click",
        "dataToggled": "icon-click-closed",
        
    })
    localStorage.setItem("netinsightnavstyles", "icon-click");
    localStorage.removeItem("netinsightverticalstyles");
    const Sidebar:any = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";
};
function closeMenuFn() {
    const closeMenuRecursively = (items: any) => {

        items?.forEach((item: any) => {
            item.active = false;
            closeMenuRecursively(item.children);
        });
    };
    closeMenuRecursively(MenuItems);
}
export const IconHover = (actionfunction:any) => {

    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataVerticalStyle": "",
        "dataNavStyle": "icon-hover",
        "dataToggled": "icon-hover-closed",
        
    })
    localStorage.setItem("netinsightnavstyles", "icon-hover");
    localStorage.removeItem("netinsightverticalstyles");
    const Sidebar:any = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";
    closeMenuFn()
};

export const Regular = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "regular",
        
    });
    localStorage.setItem("netinsightregular", "Regular");
    localStorage.removeItem("netinsightclassic");
    localStorage.removeItem("netinsightmodern");
};
export const Classic = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "classic",
        
    });
    localStorage.setItem("netinsightclassic", "Classic");
    localStorage.removeItem("netinsightregular");
    localStorage.removeItem("netinsightmodern");
};
export const Modern = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "modern",
        
    });
    localStorage.setItem("netinsightmodern", "Modern");
    localStorage.removeItem("netinsightregular");
    localStorage.removeItem("netinsightclassic");
};
export function Enable(actionfunction:any) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "loader": "enable",
        
    });
    localStorage.setItem("netinsightloaderenable", "enable");
    localStorage.removeItem("netinsightloaderdisable");
}
export function Disable(actionfunction:any) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "loader": "disable",
        
    });
    localStorage.setItem("netinsightloaderdisable", "disable");
    localStorage.removeItem("netinsightloaderenable");
}

export const Fullwidth = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataWidth": "fullwidth",
        
    })
    localStorage.setItem("netinsightfullwidth", "Fullwidth");
    localStorage.removeItem("netinsightboxed");

};
export const Boxed = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataWidth": "boxed",
        
    })
    localStorage.setItem("netinsightboxed", "Boxed");
    localStorage.removeItem("netinsightfullwidth");
};
export const FixedMenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuPosition": "fixed",
        
    })
    localStorage.setItem("netinsightmenufixed", "MenuFixed");
    localStorage.removeItem("netinsightmenuscrollable");
};
export const scrollMenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuPosition": "scrollable",
        
    })
    localStorage.setItem("netinsightmenuscrollable", "Menuscrolled");
    localStorage.removeItem("netinsightmenufixed")
};
export const Headerpostionfixed = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderPosition": "fixed",
        
    })
    localStorage.setItem("netinsightheaderfixed", 'FixedHeader');
    localStorage.removeItem("netinsightheaderscrollable");
};
export const Headerpostionscroll = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderPosition": "scrollable",
        
    })
    localStorage.setItem("netinsightheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("netinsightheaderfixed");
};

export const Defaultmenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataVerticalStyle": "overlay",
        "dataNavLayout": "horizontal",
        "dataToggled": "menu-hover-closed",
        "dataNavStyle": "menu-hover",
        
    })
    localStorage.removeItem("netinsightverticalstyles");
};

export const Closedmenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataVerticalStyle": "closed",
        "dataToggled": "close-menu-close",
        
    })
    localStorage.setItem("netinsightverticalstyles", "closed");

};
function icontextOpenFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('icon-text', 'open');
    }
}
function icontextCloseFn() {
    let html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('icon-text');
    }
}
export const iconText = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataVerticalStyle": "icontext",
        "dataToggled": "icon-text-close",
        "dataNavStyle": "",
        
    })
    localStorage.setItem("netinsightverticalstyles", "icontext");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        console.log("clicking");
        icontextOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        icontextCloseFn();
    });
};

export const iconOverayFn = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataVerticalStyle": "overlay",
        "dataToggled": "icon-overlay-close",
        
    })
    localStorage.setItem("netinsightverticalstyles", "overlay");

    var icon = document.getElementById("switcher-icon-overlay") as HTMLInputElement;
    if(icon){
        icon.checked=true
    }
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');
    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
};
function DetachedOpenFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('icon-overlay', 'open');
        }
    }
}
function DetachedCloseFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('icon-overlay');
        }
    }
}
export const DetachedFn = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataVerticalStyle": "detached",
        "dataToggled": "detached-close",
        "dataNavStyle": "",
        
    })
    localStorage.setItem("netinsightverticalstyles", "detached");

    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
};
export const DoubletFn = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataVerticalStyle": "doublemenu",
        "dataToggled": "double-menu-open",
        "dataNavStyle": "",
        
    })
    localStorage.setItem("netinsightverticalstyles", "doublemenu");

    setTimeout(() => {
        if (!document.querySelector(".main-menu .has-sub.open")) {
            const theme = store.getState();
            actionfunction(
                {
                    ...theme,
                    "dataToggled": "double-menu-close",
                    
                }
            );
        }
    }, 100);
}

export const colorMenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "color",
        
    })
    localStorage.setItem("netinsightMenu", "color");
    localStorage.removeItem("gradient");

};

export const lightMenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "light",
        
    })
    localStorage.setItem("netinsightMenu", "light");
    localStorage.removeItem("dark");
};

export const darkMenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "dark",
        
    })
    localStorage.setItem("netinsightMenu", "dark");
    localStorage.removeItem("light");
};

export const gradientMenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "gradient",
        
    })
    localStorage.setItem("netinsightMenu", "gradient");
    localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "transparent",
        
    })
    localStorage.setItem("netinsightMenu", "transparent");
    localStorage.removeItem("gradient");
};

export const lightHeader = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "light",
        
    })
    localStorage.setItem("netinsightHeader", "light");
    localStorage.removeItem("dark");
};
export const darkHeader = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "dark",
        
    })
    localStorage.setItem("netinsightHeader", "dark");
    localStorage.removeItem("light");
};
export const colorHeader = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "color",
        
    })
    localStorage.removeItem("dark");
    localStorage.setItem("netinsightHeader", "color");
};
export const gradientHeader = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "gradient",
        
    })
    localStorage.removeItem("transparent");
    localStorage.setItem("netinsightHeader", "gradient");
};
export const transparentHeader = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "transparent",
        
    })
    localStorage.removeItem("gradient");
    localStorage.setItem("netinsightHeader", "transparent");
};

export const primaryColor1 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "58, 88, 146",
        "colorPrimary": "58 88 146",
        
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");
};
export const primaryColor2 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "92, 144, 163",
        "colorPrimary": "92 144 163",
        
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "161, 90, 223",
        "colorPrimary": "161 90 223",
        
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
    localStorage.setItem("primaryRGB1", "161 90 223");
};
export const primaryColor4 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "78, 172, 76",
        "colorPrimary": "78 172 76",
        
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
    localStorage.setItem("primaryRGB1", "78 172 76");
};
export const primaryColor5 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "223, 90, 90",
        "colorPrimary": "223 90 90",
        
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
    localStorage.setItem("primaryRGB1", "223 90 90");
};

export const backgroundColor1 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "34 44 110",
        "darkBg": "20 30 96",
        "inputBorder": "25 35 102",
        "Light": "25 35 102",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
        
    });
    localStorage.setItem('darkBgRGB', "20 30 96");
    localStorage.setItem('bodyBgRGB', "34 44 110");
    localStorage.setItem('Light', "25 35 102");
    localStorage.setItem('netinsightMenu', "dark");
    localStorage.setItem('netinsightHeader', "dark");


};
export const backgroundColor2 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "22 92 129",
        "Light": "13 83 120",
        "darkBg": "8 78 115",
        "inputBorder": "13 83 120",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
        
    });
    localStorage.setItem('darkBgRGB', "8 78 115");
    localStorage.setItem('bodyBgRGB', "22 92 129");
    localStorage.setItem('Light', "13 83 120",);
    localStorage.setItem('netinsightMenu', "dark");
    localStorage.setItem('netinsightHeader', "dark");
};
export const backgroundColor3 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "104 51 149",
        "Light": "95 42 140",
        "darkBg": "90 37 135",
        "inputBorder": "95 42 140",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
        
    });
    localStorage.setItem('darkBgRGB', "90 37 135");
    localStorage.setItem('bodyBgRGB', "104 51 149");
    localStorage.setItem('Light', "95 42 140");
    localStorage.setItem('netinsightMenu', "dark");
    localStorage.setItem('netinsightHeader', "dark");
};
export const backgroundColor4 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "Light": "29 106 56",
        "bodyBg": "38 115 64",
        "darkBg": "24 101 51",
        "inputBorder": "29 106 56;",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
        
    });
    localStorage.setItem('darkBgRGB', "24 101 51");
    localStorage.setItem('bodyBgRGB', "38 115 64");
    localStorage.setItem('Light', "29 106 56");
    localStorage.setItem('netinsightMenu', "dark");
    localStorage.setItem('netinsightHeader', "dark");
};
export const backgroundColor5 = (actionfunction:any) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": " 134 80 34",
        "Light": "125 71 25",
        "darkBg": "120 66 20",
        "inputBorder": "125 71 25",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark",
        
    });
    localStorage.setItem('darkBgRGB', "120 66 20");
    localStorage.setItem('bodyBgRGB', "134 80 34");
    localStorage.setItem('Light', "125 71 25");
    localStorage.setItem('netinsightMenu', "dark");
    localStorage.setItem('netinsightHeader', "dark");
};

const ColorPicker = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
//themeprimarycolor
const Themeprimarycolor = ({ actionfunction }:any) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e:any) => {
        let { r, g, b }:any = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "colorPrimaryRgb": `${r} ${g} ${b}`,
            "colorPrimary": `${r} ${g} ${b}`
        });
        localStorage.setItem("dynamiccolor", `${r} ${g} ${b}`);
    };
    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }:any) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e:any) => {
        let { r, g, b }:any = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodyBg": `${r + 14} ${g + 14} ${b + 14}`,
            "darkBg": `${r} ${g} ${b}`,
            "inputBorder": `${r + 5} ${g + 5} ${b + 5}`,
            "Light": `${r + 5} ${g + 5} ${b + 5}`,
            "class": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
        localStorage.setItem("bodyBgRGB", `${r + 14} ${g + 14} ${b + 14}`);
        localStorage.setItem('darkBgRGB', `${r} ${g} ${b}`);
        localStorage.setItem('Light', `${r + 5} ${g + 5} ${b + 5}`);
        localStorage.setItem('inputBorder', `${r + 5} ${g + 5} ${b + 5}`);
        localStorage.setItem('netinsightMenu', "dark");
        localStorage.setItem('netinsightHeader', "dark");

    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const bgImage1 = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg1",
        
    })
    localStorage.setItem("bgimage1", "bgimg1");
};
export const bgImage2 = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg2",
        
    })
    localStorage.setItem("bgimage2", "bgimg2");
};
export const bgImage3 = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg3",
        
    })
    localStorage.setItem("bgimage3", "bgimg3");
};
export const bgImage4 = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg4",
        
    })
    localStorage.setItem("bgimage4", "bgimg4");
};
export const bgImage5 = (actionfunction:any) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg5",
        
    })
    localStorage.setItem("bgimage5", "bgimg5");
};
export const Reset = (actionfunction: any) => {
    const theme = store.getState()
    Vertical(actionfunction)
    actionfunction({
        ...theme,
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
        iconOverlay: "",
        colorPrimaryRgb: "",
        colorPrimary: "",
        bodyBg: "",
        darkBg: "",
        inputBorder: "",
        Light: "",
        bgImg: "",
        loader: "disable",
        iconText: "",
        body: {
            class: ""
        }
    })
    localStorage.clear();
}

export const LocalStorageBackup = (actionfunction:any) => {
    (localStorage.netinsightdarktheme) ? Dark(actionfunction) : "";
    (localStorage.netinsightlighttheme) ? Light(actionfunction) : "";
    (localStorage.netinsightrtl) ? Rtl(actionfunction) : "";
    (localStorage.netinsightregular) ? Regular(actionfunction) : "";
    (localStorage.netinsightclassic) ? Classic(actionfunction) : "";
    (localStorage.netinsightmodern) ? Modern(actionfunction) : "";
    (localStorage.netinsightloaderenable) ? Enable(actionfunction) : "";
    (localStorage.netinsightloaderdisable) ? Disable(actionfunction) : "";
    (localStorage.netinsightfullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.netinsightboxed) ? Boxed(actionfunction) : "";
    (localStorage.netinsightmenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.netinsightmenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.netinsightheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.netinsightheaderscrollable) ? Headerpostionscroll(actionfunction) : "";
    (localStorage.bgimage1) ? bgImage1(actionfunction) : '';
    (localStorage.bgimage2) ? bgImage2(actionfunction) : '';
    (localStorage.bgimage3) ? bgImage3(actionfunction) : '';
    (localStorage.bgimage4) ? bgImage4(actionfunction) : '';
    (localStorage.bgimage5) ? bgImage5(actionfunction) : '';

    (localStorage.netinsightnavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.netinsightnavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.netinsightnavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.netinsightnavstyles === "icon-hover") ? IconHover(actionfunction) : '';


    (localStorage.netinsightlayout == 'horizontal') && HorizontalClick(actionfunction);

    // // ThemeColor MenuColor Start
    switch (localStorage.netinsightMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }

    // ThemeColor MenuColor End

    // ThemeColor Header Colors: start
    switch (localStorage.netinsightHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: End

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '58, 88, 146':
            primaryColor1(actionfunction);

            break;
        case '92, 144, 163':
            primaryColor2(actionfunction);

            break;
        case '161, 90, 223':
            primaryColor3(actionfunction);

            break;
        case '78, 172, 76':
            primaryColor4(actionfunction);

            break;
        case '223, 90, 90':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.bodyBgRGB) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.darkBgRGB) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.Light) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.inputBorder) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }

    if (localStorage.netinsightverticalstyles) {
        let verticalStyles = localStorage.getItem("netinsightverticalstyles");

        switch (verticalStyles) {
            case "default":
                let defaultid = document.getElementById("switcher-default-menu") as HTMLInputElement;
                defaultid.checked = true;
                Defaultmenu(actionfunction)

                break;
            case "closed":
                let closedid = document.getElementById("switcher-icontext-menu") as HTMLInputElement;
                closedid.checked = true;
                Closedmenu(actionfunction)

                break;
            case "icontext":
                let icontextid = document.getElementById("switcher-icontext-menu") as HTMLInputElement;
                icontextid.checked = true;
                iconText(actionfunction)


                break;
            case "overlay":
                let overlayid = document.getElementById("switcher-detached") as HTMLInputElement;
                overlayid.checked = true;
                iconOverayFn(actionfunction)

                break;
            case "detached":
                let detachedid = document.getElementById("switcher-detached") as HTMLInputElement;
                detachedid.checked = true;
                DetachedFn(actionfunction)

                break;
            case "doublemenu":
                let doubleMenuid = document.getElementById("switcher-double-menu") as HTMLInputElement; 
                doubleMenuid.checked = true;
                DoubletFn(actionfunction)

                break;

            default:
                let defaultbutton = document.getElementById("switcher-default-menu") as HTMLInputElement;
                defaultbutton.checked = true;
                break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState()
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor,
            
        })
    }
    //Theme BAckground:
    if (localStorage.bodyBgRGB) {
        let updateddarkBg = `${Number(localStorage.bodyBgRGB.split(" ")[0]) + 14} ${Number(localStorage.bodyBgRGB.split(" ")[1]) + 14} ${Number(localStorage.bodyBgRGB.split(" ")[2]) + 14}`
        const theme = store.getState()
        actionfunction({
            ...theme,
            "bodyBg": updateddarkBg,
            "darkBg": localStorage.bodyBgRGB,
            "class": "dark",
            "dataHeaderStyles": "dark",
            "Light": localStorage.Light,
            "inputBorder": localStorage.inputBorder,
            
        })
    }
    switch (localStorage.netinsightMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: start
    switch (localStorage.netinsightHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }
}