import React from "react";

const DashboardIcon = <i className="bx bxs-home side-menu__icon"></i>;
const Projects = <i className="bx bxs-grid-alt side-menu__icon"></i>;
const Financial = <i className="bx bxs-badge-dollar side-menu__icon"></i>;
const FieldActivity = <i className="bx bxs-pie-chart-alt-2 side-menu__icon"></i>;
const AssetSummary = <i className="bx bxs-package side-menu__icon"></i>;

const badge = (
  <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">
    12
  </span>
);

export const MenuItems: any = [
  {
    menutitle: "Dashboard",
  },
  {
    icon: DashboardIcon,
    title: "Site Summary",
    type: "link",
    active: true,
    selected: false,
    path: "/dashboard",
  },
  {
    menutitle: "Pages",
  },
  {
    icon: Projects,
    title: "Projects",
    type: "link",
    active: false,
    selected: false,
    path: "/dashboard/projects",
  },
  {
    icon: Financial,
    title: "Financial",
    type: "link",
    active: false,
    selected: false,
    path: "/dashboard/financial",
  },
  {
    icon: FieldActivity,
    title: "Field Activity",
    type: "link",
    active: false,
    selected: false,
    path: "/dashboard/field-activity",
  },
  {
    icon: AssetSummary,
    title: "Assets",
    type: "link",
    active: false,
    selected: false,
    path: "/dashboard/assets",
  },

//   { menutitle: "MAPS & ICONS" },
//   {
//     title: "Maps",
//     icon: MapsIcon,
//     type: "sub",
//     background: "hor-rightangle",
//     active: false,
//     selected: false,
//     children: [
//       {
//         path: "/components/maps/leaflet-map",
//         type: "link",
//         active: false,
//         selected: false,
//         title: "Leaflet Maps",
//       },
//       {
//         path: "/components/maps/vector-maps",
//         type: "link",
//         active: false,
//         selected: false,
//         title: "Vector Maps",
//       },
//     ],
//   },
// {
//     path: "/components/icons/icon",
//     icon: Icons,
//     badgetxt: badge,
//     type: "link",
//     active: false,
//     selected: false,
//     title: "Icons",
//   },
];
export default MenuItems;