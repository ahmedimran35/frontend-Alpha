import { FaIcons, FaTools } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { CgShutterstock } from "react-icons/cg";
import { LuFileStack } from "react-icons/lu";
import { HiOutlineTemplate } from "react-icons/hi";
import { SiCoursera } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import H2Title from "../../../components/Titles/H2Title";
import Loading from "../../../components/isLoading/Loading";
import useAuth from "../../../Hooks/useAuth";
import InfoCard from "./analyticsComponents/InfoCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MostPopularSoftwaresAndTools from "./analyticsComponents/MostPopularSoftwaresAndTools";
import TrendingAssetsTable from "./analyticsComponents/TrendingAssetsTable";
import TotalDonations from "./analyticsComponents/TotalDonations";
import UniqueDownloads from "./analyticsComponents/UniqueDownloads";
import RecentDonations from "./analyticsComponents/RecentDonations";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import CustomTabPanel from "./analyticsComponents/CustomTabPanel";
import {
  getCookieState,
  setCookieState,
} from "../../../utils/Functions/Cookie/setAndGetCookie";

const Analytics = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  /* const [value, setValue] = useState(
    Cookies.get("admin-dashboard-tab")
      ? Number(Cookies.get("admin-dashboard-tab"))
      : 0
  ); */

  // test  cookie
  const [tab, setTab] = useState(() => getCookieState("admin-dash-tab", 0));

  useEffect(() => {
    setCookieState("admin-dash-tab", tab);
  }, [tab]);

  const {
    data: analytics,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: [user?.email, "manageAnalytics"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/6710e49eebf184e7a309686224ecf6fd9a5228cee76e8e0ef4034684d683112f"
      );
      return res?.data.data;
    },
    staleTime: 600, // Refetch data after 1 minute of inactivity
  });

  if (isLoading || isPending || !analytics) return <Loading isLoading={true} />;

  const {
    donations,
    assets,
    icons,
    designTemplates,
    stockPhotos,
    coursesAndLearnings,
    toolsAndSoftwares,
    downloads,
    uniqueDownloads,
    users: clients,
  } = analytics;

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    // Cookies.set("admin-dashboard-tab", newValue);
    setTab(newValue);
  };

  return (
    <div className="space-y-10 my-16">
      <H2Title baseText={"Admin"} coloredText={"Dashboard"}></H2Title>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
        {/* total donations  */}
        <TotalDonations donations={donations}></TotalDonations>

        {/* total users  */}
        <InfoCard
          info={{
            name: "Total Users",
            number: clients?.total,
            monthly: clients?.lastMonth,
            icon: <FaUsers />,
            text: "added last month",
            prefix: "+",
          }}
        />

        {/* Unique Downloads  */}
        <UniqueDownloads uniqueDownloads={uniqueDownloads}></UniqueDownloads>

        {/* Total Assets  */}

        <InfoCard
          info={{
            name: "Total Assets",
            number: assets?.total,
            monthly: assets?.lastMonth,
            icon: <LuFileStack />,
            text: "uploaded last month",
            prefix: "+",
          }}
        />

        {/* Total Downloads */}
        <InfoCard
          info={{
            name: "Total Downloads",
            number: downloads?.total,
            monthly: downloads?.lastMonth,
            icon: <IoMdCloudDownload />,
            text: "downloaded last month",
            prefix: "+",
          }}
        />

        {/* Tools and Softwares  */}
        <InfoCard
          info={{
            name: "Softwares and Tools",
            number: toolsAndSoftwares?.total,
            monthly: toolsAndSoftwares?.lastMonth,
            icon: <FaTools />,
            text: "added last month",
            prefix: "+",
          }}
        />

        {/* Design Templates data  */}
        <InfoCard
          info={{
            name: "Design Templates",
            number: designTemplates?.total,
            monthly: designTemplates?.lastMonth,
            icon: <HiOutlineTemplate />,
            text: "uploaded last month",
            prefix: "+",
          }}
        />

        {/* Stock Photos Data  */}
        <InfoCard
          info={{
            name: "Stock Photos",
            number: stockPhotos?.total,
            monthly: stockPhotos?.lastMonth,
            icon: <CgShutterstock />,
            text: "uploaded last month",
            prefix: "+",
          }}
        />

        {/* Courses and Learning  */}
        <InfoCard
          info={{
            name: "Courses and Learning",
            number: coursesAndLearnings?.total,
            monthly: coursesAndLearnings?.lastMonth,
            icon: <SiCoursera />,
            text: "uploaded last month",
            prefix: "+",
          }}
        />

        {/* Icons  */}
        <InfoCard
          info={{
            name: "Total Icons",
            number: icons?.total,
            monthly: icons?.lastMonth,
            icon: <FaIcons />,
            text: "uploaded last month",
            prefix: "+",
          }}
        />

        {/* recent donations list  */}
        <RecentDonations donations={donations}></RecentDonations>

        {/* Tab List  */}
        <section className="col-span-1 md:col-span-2 lg:col-span-4 mt-4">
          <Box sx={{ width: "96%" }}>
            <Box
              sx={{
                // border: 1,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderColor: "whitesmoke",
                boxShadow: 1,
                padding: "2px 2px 0px 2px",
              }}
            >
              <Tabs
                value={tab}
                onChange={handleChange}
                variant="scrollable"
                aria-label="admin dashboard tab"
                sx={{
                  // Apply styles to the Tabs component
                  "& .MuiTabs-indicator": {
                    // Target the indicator element
                    backgroundColor: "#ff0000",
                  },

                  "& .MuiTab-root.Mui-selected": {
                    // Target selected tab for border
                    borderBottom: "2px solid #ff0000",
                    color: "#ff0000",
                    // Set active border color to "ff0000"
                  },
                  "& .MuiTab-textColorPrimary	-label": {
                    // Target the text label
                    color: "black", // Set default text color to black
                  },
                  // "& .MuiTabs-flexContainer": {
                  //   flexWrap: "wrap",
                  // },
                }}
              >
                <Tab label="Icons" {...a11yProps(0)} />
                <Tab label="Design Templates" {...a11yProps(1)} />
                <Tab label="Stock Photos" {...a11yProps(2)} />
                <Tab label="Courses And Learning" {...a11yProps(3)} />
                <Tab label="Software And Tools" {...a11yProps(4)} />
              </Tabs>
            </Box>

            <CustomTabPanel value={tab} index={0}>
              {/* assets trending list for icons */}
              <TrendingAssetsTable
                assets={icons}
                category={"Icons"}
              ></TrendingAssetsTable>
            </CustomTabPanel>

            <CustomTabPanel value={tab} index={1}>
              {/* assets trending list for design templates */}
              <TrendingAssetsTable
                assets={designTemplates}
                category={"Design Templates"}
              ></TrendingAssetsTable>
            </CustomTabPanel>

            <CustomTabPanel value={tab} index={2}>
              {/* assets trending list for stock photos */}
              <TrendingAssetsTable
                assets={stockPhotos}
                category={"Stock Photos"}
              ></TrendingAssetsTable>
            </CustomTabPanel>

            <CustomTabPanel value={tab} index={3}>
              {/* assets trending list for courses and learning */}
              <TrendingAssetsTable
                assets={coursesAndLearnings}
                category={"Courses & Learning"}
              ></TrendingAssetsTable>
            </CustomTabPanel>

            {/* tools and softwares trending list  */}
            <CustomTabPanel value={tab} index={4}>
              <MostPopularSoftwaresAndTools
                toolsAndSoftwares={toolsAndSoftwares}
              ></MostPopularSoftwaresAndTools>
            </CustomTabPanel>
          </Box>
        </section>
      </div>
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Analytics;
