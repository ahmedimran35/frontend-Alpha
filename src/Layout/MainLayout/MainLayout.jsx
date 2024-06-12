import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import MainNavbar from "../../components/Navbar/MainNavbar";

const MainLayout = () => {
  return (
    <main>
      <Helmet>
        <title>YT SHOPS | For Creators, By Creators</title>
        <meta
          name="description"
          content="Introducing YT Shops: Your One-Stop Shop for Creators Welcome to YT Shops, a dedicated platform specifically designed to cater to the needs of creative professionals like yourself. Whether you are a graphic designer, video editor, web developer, influencer, or any other type of content creator, YT Shops is your one-stop shop for valuable resources."
        />
      </Helmet>
      <MainNavbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
