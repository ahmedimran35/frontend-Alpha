const selectFormSX =  {
    width: {
      xs: 120,
      sm: 200,
      md: 250,
    },
    "& .MuiOutlinedInput-root": {
      borderTopLeftRadius: "50px",
      borderBottomLeftRadius: "50px",
      height: {
        xs: 50,
        md: 60,
      },
      border: "2px solid #ff0000",
      fontSize: {
        xs: 12,
        md: 14,
      },
      fontWeight: 400,
      borderRight: 0,
      ":hover": {
        // border: "1px solid #ff0000 !important",
        boxShadow: "-1px 1px 4px 4px #FFEAEA",
      },
      ":focus-within": {
        // border: "2px solid #ff0000 !important"
      },
    },
    "& .MuiOutlinedInput-root.Mui-disabled": {
      ":hover": {
        // border: "2px solid #ff0000 !important",
        boxShadow: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  }

const selectMenuProps = {
    MenuListProps: {
      sx: {
        backgroundColor: "white",
        "&& .Mui-selected": {
          color: "#ff0000",
          background: "rgba(156 163 175, 0.3)",
          // background: "#ff0000",
          border: "none",
        },
      },
    },
  }

export { selectFormSX, selectMenuProps  }