const Home = () => import("@/views/home/index");
const Login = () => import("@/views/login/index");
const App = () => import("@/views/home/index");

export default  [
  {
    path: "/",
    component: App
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
]