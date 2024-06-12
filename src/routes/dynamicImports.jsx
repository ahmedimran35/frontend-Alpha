import { lazy } from "react";

// * Single Asset Pages
//  General Single Asset
export const CourseSingleAsset = lazy(() =>
  import("../pages/Category/FetchingCategoryData/CourseSingleAsset")
);
// Icon Single Asset
export const CategoryIConSingleAsset = lazy(() => import("../pages/Category/FetchingCategoryData/IconSingleAsset"));
// Stock Photos
export const StockPhotosSingleAsset = lazy(() => import("../pages/Category/FetchingCategoryData/StockPhotosSingleAsset"));
// Design Templates
export const DesignTemplateSingleAsset = lazy(() => import("../pages/Category/FetchingCategoryData/DesignTemplateSingleAsset"));
// Software and tools
export const SingleSoftwareAndTools = lazy(() => import("../pages/Category/FetchingCategoryData/SingleSoftwareAndTools"))


// * Showing category datas
// Main Component
export const Category = lazy(() => import("../pages/Category/Category"));
// Decide category data
export const FetchingCategory = lazy(() =>
  import("../pages/Category/FetchingCategory/FetchingCategory")
);

// Software and Tools
export const FetchingToolsAndSoftwareCategory = lazy(() => import("../pages/Category/FetchingCategory/FatchingToolsAndSoftwareCategory"))
export const AddStockPhotos = lazy(() => import("../pages/Dashboard/Seo/AddStockPhotos"))

// * Dashboard Layout
export const DashboardLayoutV2 = lazy(() =>
  import("../Layout/DashboardLayout/DashboardLayoutV2")
);

// Payment related
export const Donation = lazy(() => import("./../pages/Donation/Donation"));

export const DonationSuccess = lazy(() =>
  import("../pages/DonationSuccess/DonationSuccess")
);

export const PaymentPage = lazy(() => import("../pages/Donation/checkout/Payment"));



// * Admin Dashboard
export const Analytics = lazy(() => import("../pages/Dashboard/SuperAdmin/Analytics"));

export const ManageUser = lazy(() =>
  import("../pages/Dashboard/SuperAdmin/ManageUser")
);


export const AdminFeedback = lazy(() => import("../pages/Dashboard/SuperAdmin/AdminFeedback/AdminFeedback"));


// * SEO Dashboard

// Add Forms
// export const AddAsset = lazy(() => import("../pages/Dashboard/Seo/AddAsset"));

export const AddIcon = lazy(() => import("../pages/Dashboard/Seo/Icons/AddIcon"));

export const AddDesignTemplate = lazy(() => import("../pages/Dashboard/Seo/AddDesignTemplate"));

export const AddCourses = lazy(() => import("../pages/Dashboard/Seo/AddCourses"))

export const AddSoftwares = lazy(() => import("../pages/Dashboard/Seo/AddSoftwares"));

export const AddImportantPages = lazy(() => import("../pages/Dashboard/Seo/ImportantPages/AddImportantPages"));

// Update Forms
// export const UpdateAsset = lazy(() => import("../pages/Dashboard/Seo/UpdateAsset"));

export const UpdateDesignTemplate = lazy(() => import("../pages/Dashboard/Seo/UpdateDesignTemplate"))

export const UpdateIcon = lazy(() => import("../pages/Dashboard/Seo/Icons/UpdateIcon"))

export const UpdateStockPhotos = lazy(() => import("../pages/Dashboard/Seo/UpdateStockPhotos"))

export const UpdateCourseAndLearning = lazy(() => import("../pages/Dashboard/Seo/UpdateCourseAndLearning"));

export const UpdateSoftwareAndTools = lazy(() => import("../pages/Dashboard/Seo/UpdateSoftware"));

// Manage
export const ManageAsset = lazy(() => import("../pages/Dashboard/Seo/ManageAsset"));

export const ManageSoftwareAndTools = lazy(() => import("../pages/Dashboard/Seo/ManageSoftware"));

export const ManageImportantPages = lazy(() => import("../pages/Dashboard/Seo/ImportantPages/ManageImportantPages"))

export const UpdateImportantPage = lazy(() => import("../pages/Dashboard/Seo/ImportantPages/UpdateImportantPage"))


// * Default Error Page
export const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));

// Footer Section
// Important Pages
export const ImportantPage = lazy(() => import("../components/Footer/Import/ImportantPages/ImportantPage"))

// About Us page
export const AboutUsPage = lazy(() => import("../pages/Dashboard/Seo/ImportantPages/AboutUsPage"))
// Feedback page
export const Feedback = lazy(() => import("../components/Footer/More/Feedback/Feedback"))

// Sign In page
export const SignInPage = lazy(() => import("../pages/AuthPage/SignInPage"))

// Private Routes
// export const SeoRoutes = lazy(() => import("./SeoRoutes"))
// export const AdminRoutes = lazy(() => import("./AdminRoutes"))
// export const PrivateRoutes = lazy(() => import("./PrivateRoutes"))
// export const = lazy(() => import())