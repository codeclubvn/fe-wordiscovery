import { IRoute } from "../models";

// components
import Play from "./Play/Play";
import History from "./History/History";
import Term from "./Term/Term";
import Policy from "./Policy/Policy";
import About from "./About/About";
import { kRoute } from "../utils";



export default [
    {
        path: "/play",
        component: Play,
        name: kRoute.Play
    },
    {
        path: "/history",
        component: History,
        name: kRoute.History
    },
    {
        path: "/term",
        component: Term,
        name: kRoute.Term
    },
    {
        path: "/policy",
        component: Policy,
        name: kRoute.Policy
    },
    {
        path: "/about",
        component: About,
        name: kRoute.About
    },
] as IRoute[];
