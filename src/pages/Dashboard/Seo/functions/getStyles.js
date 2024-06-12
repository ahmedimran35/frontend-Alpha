function getStyles(name, subCategory, theme) {
  return {
    fontWeight:
      subCategory.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default getStyles;
