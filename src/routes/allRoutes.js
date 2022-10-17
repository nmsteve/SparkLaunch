import Connected from "pages/Connected"
import Public from "pages/Public"
import ProjectSetup from "pages/Public/ProjectSetup";


const connectedRoutes = [
  { path: "/home", component: Connected },
]

const publicRoutes = [
  { path: "/", component: Public },
  { path: "/project-setup", component: ProjectSetup },
]

export { connectedRoutes, publicRoutes };
