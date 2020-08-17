import Dashboard from "./components/Dashboard";
import BooksAdd from "./components/BooksAdd/BooksAdd";
import AssignBooks from "./components/BooksAssign/AssignBooks";
import Users from "./components/users/Users";
import Logout from "./components/login/Logout";

const routes = [
    {
        path: "/",
        exact: true,
        menu: "Dashboard",
        main: Dashboard
    },
    {
        path: "/addBook",
        exact: true,
        menu: "Books Add",
        main: BooksAdd
    },
    {
        path: "/assignBook",
        exact: true,
        menu: "Assign Book",
        main: AssignBooks
    },
    {
        path: "/users",
        exact: true,
        menu: "User Setup",
        main: Users
    },
    {
        path: "/logout",
        exact: true,
        menu: "Logout",
        main: Logout
    },
];

export default routes;