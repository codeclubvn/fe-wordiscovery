import Play from "./Play/Play";
import History from "./History/History";
import Term from "./Term/Term";
import Policy from "./Policy/Policy";
import About from "./About/About";
import { IRoute } from "../models";

export default [
    {
        path: "/play",
        component: Play,
    },
    {
        path: "/history",
        component: History,
    },
    {
        path: "/term",
        component: Term,
    },
    {
        path: "/policy",
        component: Policy,
    },
    {
        path: "/about",
        component: About,
    },
] as IRoute[];
