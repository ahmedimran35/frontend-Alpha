import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ManageCourseAndLearning from "../../pages/Dashboard/Seo/ManageCourseAndLearning";
import ManageSoftwareAndTools from "../../pages/Dashboard/Seo/ManageSoftware";
import ManageDesignTemplate from "../../pages/Dashboard/Seo/ManageDesignTemplate";
import ManageStockPhotos from "../../pages/Dashboard/Seo/ManageStockPhotos";
import ManageIcon from "../../pages/Dashboard/Seo/ManageIcon";
import ManageImportantPages from "../../pages/Dashboard/Seo/ImportantPages/ManageImportantPages";
import { useEffect, useState } from "react";
import AddButton from "../buttons/Add-button/AddButton";
import {
  getCookieState,
  setCookieState,
} from "../../utils/Functions/Cookie/setAndGetCookie";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ManageAssetTab() {
  /* const [value, setValue] = useState(
    Cookies.get("selected-dashboard-tab")
      ? Number(Cookies.get("selected-dashboard-tab"))
      : 0
  ); */
  const [tab, setTab] = useState(() => getCookieState("seo-dash-tab", 0));

  useEffect(() => {
    setCookieState("seo-dash-tab", tab);
  }, [tab]);

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    // Cookies.set("selected-dashboard-tab", newValue);
    setTab(newValue);
  };

  return (
    <div className=" max-w-7xl mx-auto relative">
      {/* different asset add option  */}
      <div className=" flex justify-end absolute -top-8 xl:top-0  right-6 md:right-2 z-50">
        <AddButton />
      </div>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            padding: "0px 20px 0px 20px",
            width: "95%"
            // minWidth: "500px"
          }}
        >
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              // Apply styles to the Tabs component
              "& .MuiTabs-indicator": {
                // Target the indicator element
                backgroundColor: "#ffffff", // Set active color to "ff0000"
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
              "& .MuiTabs-flexContainer": {
                // flexWrap: "wrap",
                overflowY: "auto",
              },
            }}
          >
            <Tab label="Icon" {...a11yProps(0)} />
            <Tab label="Design Template" {...a11yProps(1)} />
            <Tab label="Stock Photos" {...a11yProps(2)} />
            <Tab label="Courses And Learning" {...a11yProps(3)} />
            <Tab label="Software And Tools" {...a11yProps(4)} />
            <Tab label="Important Page" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tab} index={0}>
          <ManageIcon />
        </CustomTabPanel>

        <CustomTabPanel value={tab} index={1}>
          <ManageDesignTemplate />
        </CustomTabPanel>

        <CustomTabPanel value={tab} index={2}>
          <ManageStockPhotos />
        </CustomTabPanel>

        <CustomTabPanel value={tab} index={3}>
          <ManageCourseAndLearning />
        </CustomTabPanel>

        <CustomTabPanel value={tab} index={4}>
          <ManageSoftwareAndTools />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={5}>
          <ManageImportantPages />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
