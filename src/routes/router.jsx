import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Loading from "../components/isLoading/Loading";

import {
  AboutUsPage,
  // AddAsset,
  AddCourses,
  AddDesignTemplate,
  AddIcon,
  AddImportantPages,
  AddSoftwares,
  AddStockPhotos,
  AdminFeedback,
  Analytics,
  Category,
  CategoryIConSingleAsset,
  DashboardLayoutV2,
  DesignTemplateSingleAsset,
  Donation,
  DonationSuccess,
  ErrorPage,
  Feedback,
  FetchingCategory,
  FetchingToolsAndSoftwareCategory,
  ImportantPage,
  ManageAsset,
  ManageImportantPages,
  ManageSoftwareAndTools,
  ManageUser,
  PaymentPage,
  SignInPage,
  SingleSoftwareAndTools,
  StockPhotosSingleAsset,
  // UpdateAsset,
  UpdateCourseAndLearning,
  UpdateDesignTemplate,
  UpdateIcon,
  UpdateImportantPage,
  UpdateSoftwareAndTools,
  UpdateStockPhotos,
  CourseSingleAsset,
} from "./dynamicImports";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import SeoRoutes from "./SeoRoutes";
import ToolsAndSoftwareCategoryProvider from "../Providers/ToolsAndSoftwareProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/donate",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <Donation />
          </Suspense>
        ),
      },

      {
        path: "/payment",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <PaymentPage />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "/payment/success",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <DonationSuccess />
          </Suspense>
        ),
      },
      {
        path: "/category-data/courses-and-learning/:titleId",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <CourseSingleAsset />
          </Suspense>
        ),
      },
      {
        path: "/category-data/icon/:titleId",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <CategoryIConSingleAsset />
          </Suspense>
        ),
      },
      {
        path: "/category-data/stock-photos/:titleId",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <StockPhotosSingleAsset />
          </Suspense>
        ),
      },
      {
        path: "/category-data/design-template/:titleId",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <DesignTemplateSingleAsset />
          </Suspense>
        ),
      },
      {
        path: "/software-and-tools-data/:titleId",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <SingleSoftwareAndTools />
          </Suspense>
        ),
      },
      // footer important section
      {
        path: "/:pageName",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <ImportantPage />
          </Suspense>
        ),
      },

      // footer more section

      {
        path: "/about-us",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <AboutUsPage />
          </Suspense>
        ),
      },
      {
        path: "/59bda3f8ee98128d543572e0d29f27ad5343f0c88c36e7bf4672c4c3ab6245b4",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <Feedback />
          </Suspense>
        ),
      },
    ],
  },

  // category section
  {
    path: "/category-data",
    element: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <ToolsAndSoftwareCategoryProvider>
          <Category />
        </ToolsAndSoftwareCategoryProvider>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <FetchingCategory />
          </Suspense>
        ),
      },
    ],
  },

  // category section tools and software section
  {
    path: "/category-tools-and-software",
    element: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <ToolsAndSoftwareCategoryProvider>
          <Category />
        </ToolsAndSoftwareCategoryProvider>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <FetchingToolsAndSoftwareCategory />
          </Suspense>
        ),
      },
    ],
  },

  // Dashboard
  {
    path: "/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02",
    element: (
      <PrivateRoutes>
        <Suspense fallback={<Loading isLoading={true} />}>
          <DashboardLayoutV2 />
        </Suspense>
      </PrivateRoutes>
    ),
    children: [
      // admin dashboard
      {
        // see list of all user
        path: "17e21e87cd28d0fae82e2ea454787ccd2b48ff664d515f15013833655881358b",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <Suspense fallback={<Loading isLoading={true} />}>
                <ManageUser />
              </Suspense>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        // see all data of website
        path: "35ea33bcec36ccce8bdb472f803c4fc0d0eaae9d4c51181e5000a9eff322179b",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <Suspense fallback={<Loading isLoading={true} />}>
                <Analytics />
              </Suspense>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        // admin feedback route
        path: "906673d45758e5d8964febf9865fadea13302b0cb65a8a21875edcd2a60b16f9",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <Suspense fallback={<Loading isLoading={true} />}>
                <AdminFeedback />
              </Suspense>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },

      // seo dashboard /add-asset
      // {
      //   path: "d791983f9dc8463919cf05a97141b0cab0fd89d70c78e24ed75079454052c7bf",
      //   element: (
      //     <SeoRoutes>
      //       <Suspense fallback={<Loading isLoading={true} />}>
      //         <AddAsset />
      //       </Suspense>
      //     </SeoRoutes>
      //   ),
      // },
      {
        path: "add-icon",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <AddIcon />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "update-icon/:id",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <UpdateIcon />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "add-design-template",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <AddDesignTemplate />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "update-design-template/:id",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <UpdateDesignTemplate />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "add-stock-photos",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <AddStockPhotos />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "update-stock-photos/:id",
        element: (
          <SeoRoutes>
            <Suspense>
              <UpdateStockPhotos />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "addcourses",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <AddCourses />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "update-course/:id",
        element: (
          <SeoRoutes>
            <Suspense>
              <UpdateCourseAndLearning />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "f6115fc57e3bf87006d8f14cd0422795d5559f13bd4f7e7e01a93554df7b7b90",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <AddSoftwares />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "42439c1a1b7c8aa202928936a3166617c580039f6c99e745405e92c9cb54fdfa",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <ManageSoftwareAndTools />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        // manage important pages
        path: "dd6c71448dfe05bfa1c2bbd71cab1db5cdc1292615133c8adb6d988e2bc138d4",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <ManageImportantPages />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        // update important pages
        path: "88c60f426f5387f8fb84bf04132ef7aec5ff8843a2dc7de2d83fa968c7826133/:id",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <UpdateImportantPage />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        path: "46bade64727b5046da39635eea8448e552d31d9009829b919ffc96e65847fc88",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <ManageAsset />
            </Suspense>
          </SeoRoutes>
        ),
      },
      {
        // add important pages
        path: "fdb09fcb2ff7873267912c749d4334be303826eac022c9ee5140a49f7c41d5a6",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <AddImportantPages />
            </Suspense>
          </SeoRoutes>
        ),
      },
      // {
      //   path: "e0786eb19d491474c19552fb6fd4a14438a8600fa21f1e94f27a71d9f20e2b40/:assetId",
      //   element: (
      //     <SeoRoutes>
      //       <Suspense fallback={<Loading isLoading={true} />}>
      //         <UpdateAsset />
      //       </Suspense>
      //     </SeoRoutes>
      //   ),
      // },
      {
        path: "b38ee85103fa171859bc716a20d777958df408f41364a0f444ea739cb7057d1f/:toolsId",
        element: (
          <SeoRoutes>
            <Suspense fallback={<Loading isLoading={true} />}>
              <UpdateSoftwareAndTools />
            </Suspense>
          </SeoRoutes>
        ),
      },
    ],
  },
  {
    path: "/sign-in",
    element: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <SignInPage />
      </Suspense>
    ),
  },
]);

export default router;
