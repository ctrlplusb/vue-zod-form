import {
  ExplicitFieldsCreateScreen,
  ExplicitFieldsUpdateScreen,
  HomeScreen,
} from "~/screens";

export const routes = [
  { name: "home", path: "/", component: HomeScreen },
  {
    name: "explicit-fields-create",
    path: "/explicit-fields-create",
    component: ExplicitFieldsCreateScreen,
  },
  {
    name: "explicit-fields-update",
    path: "/explicit-fields-update",
    component: ExplicitFieldsUpdateScreen,
  },
];
