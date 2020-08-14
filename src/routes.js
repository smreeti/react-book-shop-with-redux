import Dashboard from "./components/Dashboard";
import BooksAdd from "./components/BooksAdd/BooksAdd";
import AssignBooks from "./components/BooksAssign/AssignBooks";

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
    }
];

export default routes;