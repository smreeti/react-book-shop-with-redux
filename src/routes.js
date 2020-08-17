import Dashboard from "./components/Dashboard";
import BooksAdd from "./components/BooksAdd/BooksAdd";
import AssignBooks from "./components/BooksAssign/AssignBooks";
import Users from "./components/users/Users";

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
];

export default routes;