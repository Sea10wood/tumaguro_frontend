// import type { AppProps } from "";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }: AppProps) {
//     return <Component {...pageProps} />;
// }
import Todo from "@/components/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/ Login";
import Home from "../components/Home ";
import Signup from "../components/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/login/`} element={<Login />} />
                <Route path={`/signup/`} element={<Signup />} />
                <Route path={`/todo`} element={<Todo />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
