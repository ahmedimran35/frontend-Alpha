import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MoodIcon from "@mui/icons-material/Mood";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import FilterIcon from "@mui/icons-material/Filter";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useState } from "react";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const AddButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        disableRipple
        onClick={handleClick}
        endIcon={<FaCirclePlus className="p-[2px]" />}
        sx={{
          borderRadius: "8px",
          background: "#ff0000",
          "&:hover": { backgroundColor: "#C21807" },
        }}
      >
        Add
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top", // Open the menu above the button
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom", // Maintain alignment with the button
          horizontal: "right",
        }}
        sx={{
          "&": {
            marginTop: "-14px", // Adjust spacing as needed
          },
        }}
      >
        {/* <Link to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/d791983f9dc8463919cf05a97141b0cab0fd89d70c78e24ed75079454052c7bf">
          <MenuItem onClick={handleClose} disableRipple>
            <ImageIcon />
            Asset
          </MenuItem>
        </Link> */}
        <Link to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/add-icon">
          <MenuItem onClick={handleClose} disableRipple>
            <MoodIcon />
            Icon
          </MenuItem>
        </Link>
        <Link to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/add-design-template">
          <MenuItem onClick={handleClose} disableRipple>
            <DesignServicesIcon />
            Design Template
          </MenuItem>
        </Link>
        <Link to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/add-stock-photos">
          <MenuItem onClick={handleClose} disableRipple>
            <FilterIcon />
            Stock Photos
          </MenuItem>
        </Link>
        <Link to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/addcourses">
          <MenuItem onClick={handleClose} disableRipple>
            <AutoStoriesIcon />
            Courses and learning
          </MenuItem>
        </Link>
        <Link to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/f6115fc57e3bf87006d8f14cd0422795d5559f13bd4f7e7e01a93554df7b7b90">
          <MenuItem onClick={handleClose} disableRipple>
            <BuildCircleIcon />
            Software and Tools
          </MenuItem>
        </Link>
        <Link to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/fdb09fcb2ff7873267912c749d4334be303826eac022c9ee5140a49f7c41d5a6">
          <MenuItem onClick={handleClose} disableRipple>
            <ContactPageIcon />
            Important Page
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
};

export default AddButton;
