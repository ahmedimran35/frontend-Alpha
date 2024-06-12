export const iconStyle = [
  {
    styleName: "Main",
    styleLink: "main",
  },
  {
    styleName: "Outline",
    styleLink: "outline",
  },
  {
    styleName: "Apps",
    styleLink: "apps",
  },
  {
    styleName: "Circle",
    styleLink: "circle",
  },
  {
    styleName: "Typography",
    styleLink: "typography",
  },
];

export const stockPhotosSubCategory = [
  {
    subCategoryName: "AI Generated",
    subCategoryLink: "ai-generated",
  },
  {
    subCategoryName: "Technology",
    subCategoryLink: "technology",
  },
  {
    subCategoryName: "Education and Learning",
    subCategoryLink: "education-and-learning",
  },
  {
    subCategoryName: "Nature",
    subCategoryLink: "nature",
  },
  {
    subCategoryName: "Business",
    subCategoryLink: "business",
  },
  {
    subCategoryName: "Marketing",
    subCategoryLink: "marketing",
  },
  {
    subCategoryName: "Food",
    subCategoryLink: "food",
  },
  {
    subCategoryName: "Sports",
    subCategoryLink: "sports",
  },
  {
    subCategoryName: "People",
    subCategoryLink: "people",
  },
  {
    subCategoryName: "Health",
    subCategoryLink: "health",
  },
  {
    subCategoryName: "Lifestyle",
    subCategoryLink: "lifestyle",
  },
];
export const courseSubCategories = [
  {
    subCategoryName: "PDF",
    subCategoryLink: "pdf",
  },
  {
    subCategoryName: "Custom GPT's",
    subCategoryLink: "custom-gpts",
  },
  {
    subCategoryName: "AI generated",
    subCategoryLink: "ai-generated",
  },
];

export const iconSubAtPickCategories = [
  {
    subCategoryName: "AI",
    subCategoryLink: "ai",
  },
  {
    subCategoryName: "Adobe",
    subCategoryLink: "adobe",
  },
  {
    subCategoryName: "App Store",
    subCategoryLink: "app-store",
  },
  {
    subCategoryName: "Apps",
    subCategoryLink: "apps",
  },
  {
    subCategoryName: "Bank",
    subCategoryLink: "bank",
  },
  {
    subCategoryName: "Business",
    subCategoryLink: "business",
  },
  {
    subCategoryName: "Chat",
    subCategoryLink: "chat",
  },
  {
    subCategoryName: "Coding",
    subCategoryLink: "coding",
  },
  {
    subCategoryName: "Emoji",
    subCategoryLink: "emoji",
  },
  {
    subCategoryName: "Finance",
    subCategoryLink: "finance",
  },
  {
    subCategoryName: "Folders",
    subCategoryLink: "folders",
  },
  {
    subCategoryName: "Glass Effect Icons",
    subCategoryLink: "glass-effect-icons",
  },
  {
    subCategoryName: "Hands",
    subCategoryLink: "hands",
  },
  {
    subCategoryName: "Messaging",
    subCategoryLink: "messaging",
  },
  {
    subCategoryName: "Nature",
    subCategoryLink: "nature",
  },
  {
    subCategoryName: "Printing",
    subCategoryLink: "printing",
  },
  {
    subCategoryName: "Social Media",
    subCategoryLink: "social-media",
  },
  {
    subCategoryName: "Symbols",
    subCategoryLink: "symbols",
  },
  {
    subCategoryName: "Technology",
    subCategoryLink: "technology",
  },
  {
    subCategoryName: "Windows Icons",
    subCategoryLink: "windows-icons",
  },
];

export const IconTrendingTopicSubCategory = [
  {
    subCategoryName: "3D Icon",
    subCategoryLink: "3d-icon",
  },
  {
    subCategoryName: "3D Logo",
    subCategoryLink: "3d-logo",
  },
  {
    subCategoryName: "Address",
    subCategoryLink: "address",
  },
  {
    subCategoryName: "Admin",
    subCategoryLink: "admin",
  },
  {
    subCategoryName: "Arrows",
    subCategoryLink: "arrows",
  },
  {
    subCategoryName: "Brands",
    subCategoryLink: "brands",
  },
  {
    subCategoryName: "Education",
    subCategoryLink: "education",
  },
  {
    subCategoryName: "Font",
    subCategoryLink: "font",
  },
  {
    subCategoryName: "Group",
    subCategoryLink: "group",
  },
  {
    subCategoryName: "Home Screen Apps",
    subCategoryLink: "home-screen-apps",
  },
];

const iconSubCategoriesUnsorted = [
  ...iconSubAtPickCategories,
  ...IconTrendingTopicSubCategory,
];

export const iconSubCategories = iconSubCategoriesUnsorted.sort((a, b) =>
  a.styleName > b.styleName ? -1 : 1
);
