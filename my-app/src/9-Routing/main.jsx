// import React from "react";
// import Home from "./9-Routing/Home";
// // import About from "./9-Routing/About";
// import Contact from "./9-Routing/Contact";
// import Navbar from "./9-Routing/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Success from "./9-Routing/success";
// import NotFound from "./9-Routing/NotFound";
// import Projects from "./9-Routing/Projects";
// import FeaturedProjects from "./9-Routing/FeaturedProjects";
// import NewProjects from "./9-Routing/NewProjects";
// import Users from "./9-Routing/Users";
// import UserDetails from "./9-Routing/UserDetails";
// import { AuthProvider } from "./9-Routing/auth";
// import Login from "./9-Routing/Login";
// import Logout from "./9-Routing/Logout";
// import Privateroute from "./9-Routing/Privateroute";

// const LazyAbout = React.lazy(() => import("./9-Routing/About"));
// function App() {
//   return (
//     <AuthProvider>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/about"
//             element={
//               <React.Suspense fallback="Loading .....">
//                 <LazyAbout />
//               </React.Suspense>
//             }
//           />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/success" element={<Success />} />
//           <Route path="/projects" element={<Projects />}>
//             <Route index element={<FeaturedProjects />} />
//             <Route path="featured" element={<FeaturedProjects />} />
//             <Route path="NewProject" element={<NewProjects />} />
//           </Route>
//           <Route
//             path="/users"
//             element={
//               <Privateroute>
//                 <Users />
//               </Privateroute>
//             }
//           />
//           <Route path="/users/:userId" element={<UserDetails />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
