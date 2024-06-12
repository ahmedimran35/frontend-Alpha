# Frontend Documention

Welcome to our Frontend Documentation! This is where you'll find all the nitty-gritty details about our application. From step-by-step guides to helpful tips and tricks, we've got everything you need to know. So, whether you're a newbie or a seasoned pro, dive in and let's explore together!

## main.jsx

This section serves as the entry point for the React application. It imports necessary components and libraries to configure and render the application.

```
import React from "react";

import "./index.css";
import router from "./routes/router.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import CategoryProvider from "./Providers/CategoryProvider.jsx";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import ToolsAndSoftwareCategoryProvider from "./Providers/ToolsAndSoftwareProvider.jsx";
import ResponsivenessProvider from "./Providers/ResponsivenessProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <ResponsivenessProvider>
            <CategoryProvider>
              <ToolsAndSoftwareCategoryProvider>
                <RouterProvider router={router} />
              </ToolsAndSoftwareCategoryProvider>
            </CategoryProvider>
          </ResponsivenessProvider>
        </AuthProviders>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

```

**Imports:**

- `React`: The core React library.
- `./index.css`: The style sheet that controls how YT SHOPS looks. It uses Tailwind CSS for easy styling..
- `router`: The application's routing configuration.
- `AuthProviders`: A component that provides authentication context to the application.
- `CategoryProvider`: A component that provides category context to the application.
- `ReactDOM`: Used to render the React application to the DOM.
- `RouterProvider`: A component from `react-router-dom` used to manage application routing based on the provided router configuration.
- `QueryClient, QueryClientProvider`: Components from `@tanstack/react-query` used for managing application data fetching and caching.
- `HelmetProvider`: A component from `react-helmet-async` used for managing document head elements (title, meta tags etc.).
- `ToolsAndSoftwareCategoryProvider`: A component that provides tools and software category context to the application.
- `ResponsivenessProvider`: A component that provides responsiveness context to the application.

**Component Structure:**

The application is rendered using a strict mode from `React.StrictMode`. This helps identify potential issues during development.

Inside `StrictMode`, several providers are nested to wrap the application's main component (`RouterProvider`). This ensures child components have access to the data and functionality provided by these contexts.

The nesting order is as follows:

1. `HelmetProvider`: Manages document head elements.
2. `QueryClientProvider`: Provides data fetching and caching functionalities through `queryClient`.
3. `AuthProviders`: Provides authentication context to the application.
4. `ResponsivenessProvider`: Provides responsiveness context to the application.
5. `CategoryProvider`: Provides category context to the application.
6. `ToolsAndSoftwareCategoryProvider`: Provides tools and software category context to the application.
7. `RouterProvider`: Renders the application's routes based on the configuration provided in `router`.

**Rendering:**

The entire structure is rendered to the DOM element with the id "root" using `ReactDOM.createRoot`.

## Router

This section defines the application's routing configuration using `createBrowserRouter` from `react-router-dom`. It shows URL paths to corresponding React components to render different parts of the application.

**Lazy Loading:**

Routes leverage lazy loading with `lazy` and `Suspense` from `react` to improve initial load performance. Code for components is loaded only when the route is accessed.

**Error Handling:**

A fallback component wrapped in `Suspense` is used for both route and error elements. This ensures a loading indicator is displayed while components are fetched or when errors occur.

**Components:**

The router defines routes for various components including:

- `HomePage`: The application's homepage.
- `Category`: Renders a category overview page.
- `FetchingCategory`: Fetches and displays a list of categories inside category page.
- `CategorySingleAsset`: Renders details for a specific category item.
- `FetchingToolsAndSoftwareCategory`: Fetches and displays a list of tools and software categories inside category page.
- `SingleSoftwareAndTools`: Renders details for a specific software/tool item.

- `Donation`: Renders a donation page with functionalities.
- `PaymentPage`: Handles payment processing.
- `DonationSuccess`: A confirmation page after successful donation.
- `Feedback`: Handles user feedback submission.

- `DashboardLayoutV2`: The layout component for the dashboard section.

- `ManageUser`: Manages users which is accessible only to admins.
- `Analytics`: Displays analytics data which is accessible only to admins.

- `ManageAsset`: Manages existing assets which is accessible only to seo users.
- `AddAsset`: Uploads new assets which is accessible only to seo users.
- `UpdateAsset`: Updates details of an existing asset which is accessible only to seo users.
- `ManageSoftwareAndTools`: Manages existing softwares/tools which is accessible only to seo users.
- `AddSoftwares`: Uploads new softwares/tools which is accessible only to seo users.
- `UpdateSoftwareAndTools`: Updates details of an existing software/tool which is accessible only to seo users.

- `Loading`: Displays a loading indicator while components are fetched.
- `ErrorPage`: Renders an error page in case of routing errors.

**Routes:**

The router defines routes for different sections of the application:

1. **Main Section:**

   - Renders the `MainLayout` with child components for:
     - Homepage
     - Donation related pages
     - Category browsing and details
     - Feedback submission
     - Category Section
       - Accessible via `/category-data` path
       - Renders the `Category` component with child component:
       - `FetchingCategory` to display the list of categories
     - Category - Tools and Software Section
       - Accessible via `/category-tools-and-software` path
       - Renders the `Category` component with child component:
       - `FetchingToolsAndSoftwareCategory` to display the list of tools and software categories

2. **Dashboard Section:**

   - Accessible via `/dashboard` path
   - Requires authentication through `PrivateRoutes`
   - Renders the `DashboardLayoutV2` with child components based on user roles:

     - Admin users can access:
       - `ManageUser` for user management
       - `Analytics` for viewing analytics data
     - SEO users can access:

       - `ManageAsset` for managing existing assets
       - `AddAsset` for uploading new assets
       - `UpdateAsset` for updating asset details

       - `ManageSoftwareAndTools` for managing existing softwares/tools
       - `AddSoftwares` for uploading new softwares/tools
       - `UpdateSoftwareAndTools` for updating software/tool details

**Overall, this router configuration defines a flexible routing scheme for the React application, accommodating different user roles and functionalities.**

## Main Layout

This section defines the `MainLayout` component which serves as the primary layout for most application routes. It provides a consistent structure for the application's pages.

**Components:**

- `Helmet`: A component from `react-helmet-async` used to manage document head elements (title, meta tags etc.).
- `MainNavbar`: Renders the application's main navigation bar .
- `Outlet`: A component from `react-router-dom` used to render child components nested within this layout based on the current route.
- `Footer`: Renders the application footer component .

**Layout Structure:**

The `MainLayout` component wraps its children within a `main` element. It renders the following components in this order:

1. **Helmet:** Sets the document title and description using `react-helmet-async`.
2. **MainNavbar:** Renders the application's main navigation bar.
3. **Outlet:** Renders child components specific to each route.
4. **Footer:** Renders the application footer.

```
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


```

**In summary, the `MainLayout` component establishes a foundational layout for most application pages, promoting a cohesive user experience.**

## Private Route

This section defines the `PrivateRoutes` component which is used to restrict access to certain routes based on user authentication status.

**Dependencies:**

- `useAuth`: A custom hook that provides user authentication context.
- `Navigate, useLocation` from `react-router-dom`: Used for navigation and accessing location information.
- `Loading`: Component to display a loading indicator while user data is fetching.

**Functionality:**

- `PrivateRoutes` takes a single child element which represents the content to be protected.
- It utilizes the `useAuth` hook to access the current user information and loading state.
- The component displays a loading indicator (`Loading`) while authentication is being checked.
- If the user object exists (`user`), it indicates a successful authentication and the child component is rendered, allowing access to the protected route.
- If the user object is not found (`!user`), it indicates the user is not logged in and they are redirected to the login route (/) using `Navigate`.
  - The `state` prop passed to `Navigate` stores the current location (`location`) which can be used to redirect the user back to the originally attempted route after successful login.
  - The `replace` prop ensures the previous route history is not accessible, preventing the user from navigating back to the protected route before authentication.

**Use Case:**

- Wrap routes that require user authentication with the `PrivateRoutes` component.
- This ensures only logged in users can access sensitive areas of the application.

```
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading isLoading />;

  return user ? (
    children
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default PrivateRoutes;


```

**In essence, the `PrivateRoutes` component acts as a gatekeeper, controlling access to protected routes based on user authentication status.**

**Admin Routes:**

A subset of private routes is further restricted by `AdminRoutes`. Only users with admin privileges can access these routes.

## Admin Route

This section defines the `AdminRoutes` component which restricts access to certain routes based on user authentication and role. Only authenticated users with admin privileges can access components wrapped by this component.

**Dependencies:**

- `Navigate, useLocation` from `react-router-dom`: Used for navigation and accessing location information.
- `useAuth`: A custom hook that provides user authentication context.
- `Loading`: Component to display a loading indicator while user data is fetching.
- `useQuery` from `@tanstack/react-query`: Used for managing data fetching and caching.
- `useAxiosSecure`: A custom hook that provides secure API calls using an access token.

**Functionality:**

- `AdminRoutes` takes a single child element which represents the content to be protected for admin users.
- It utilizes the `useAuth` hook to access user information and loading state.
- If the `user` object exists (`user`), it indicates a successful authentication.
- A separate `useQuery` hook from `@tanstack/react-query` is used to fetch the logged-in user's role using a secure API call (`useAxiosSecure`) with the user's email address.
  - If the user exists (`user`) and their role is "admin" (`loggedUserRole?.role === "admin"`), the child component is rendered, granting access to the protected route.
- If the user is not authenticated (`!user`) or their role is not "admin", they are redirected to the login route (/) using `Navigate`.

**Use Case:**

- Wrap routes that require admin privileges with the `AdminRoutes` component.
- This ensures only authorized users can access sensitive administrative functionalities of the application.

```
const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const location = useLocation();

  const {
    data: loggedUserRole = {},
    isLoading,
    isPending: isUserLoading,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: [user?.email, "loggedUserRole"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res?.data.data;
    },
    // Configure caching behavior
    staleTime: 60000, // Refetch data after 1 minute of inactivity
    cacheTime: 6000000, // Remove data from cache after 100 minute (optional)
  });

  if (loading || isLoading || isUserLoading)
    return <Loading isLoading={true} />;

  if (user && loggedUserRole?.role === "admin") return children;

  return <Navigate to={"/"} state={{ from: location }} replace />;
};

export default AdminRoutes;
```

**In essence, the `AdminRoutes` component acts as a more granular gatekeeper, extending access control beyond basic authentication to enforce role-based authorization.**

## Seo Route

This section defines the `SeoRoutes` component which restricts access to certain routes based on user authentication and role. Only authenticated users with Seo privileges can access components wrapped by this component.

**Dependencies:**

- `useAuth`: A custom hook that provides user authentication context.
- `Navigate, useLocation` from `react-router-dom`: Used for navigation and accessing location information.
- `Loading`: Component to display a loading indicator while user data is fetching.

* `useAxiosSecure`: A custom hook that provides secure API calls using an access token.

**Functionality:**

- `SeoRoutes` takes a single child element which represents the content to be protected for SEO users.
- It utilizes the `useAuth` hook to access user information and loading state.
- The component displays a loading indicator (`Loading`) while user authentication and role are being checked.
- If the `user` object exists (`user`), it indicates a successful authentication.
- If the user is not authenticated (`!user`) or their role is not "seo", they are redirected to the login route (/) using `Navigate`.

**Use Case:**

- Wrap routes that require SEO user privileges with the `SeoRoutes` component.
- This ensures only authorized users can access SEO-specific functionalities of the application.

```
const SeoRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();


  const {
    data: loggedUserRole = {},
    isLoading: isUserDataLoading,
    isPending: isUserLoading,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: ["loggedUserRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res?.data?.data;
    },
    // Configure caching behavior
    staleTime: 600000, // Refetch data after 10 minute of inactivity
    cacheTime: 6000000, // Remove data from cache after 100 minute (optional)
  });
  const isLoadingData = loading || isUserDataLoading || isUserLoading;

  if (isLoadingData) return <Loading isLoading={true} />;

  return user && loggedUserRole?.role === "seo" ? (
    children
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default SeoRoutes;


```

**In essence, the `SeoRoutes` component functions similarly to `AdminRoutes`, but restricts access to a different user role ("seo").**

Absolutely! Here's a breakdown of the provider components you mentioned, along with brief descriptions for your documentation:

## Providers

This section documents the provider components used within the application. Providers, implemented using React's Context API, manage and make data or functionalities available to descendant components throughout the application tree. This promotes data and functionality sharing without explicit prop drilling.

**Providers Used in our application:**

- **AuthProviders:** This provider manages user authentication state including whether a user is logged in, their user information etc. and makes it accessible to child components throughout the application. This eliminates the need to pass authentication data down through multiple component levels.
- **CategoryProvider:** This provider manages category data including a list of categories or category objects and makes it accessible to child components. This ensures components rendering categories or category-related content have access to the data without requiring prop drilling.
- **ToolsAndSoftwareCategoryProvider:** This provider manages tools and software category data including a list of categories or category objects specific to tools and software and makes it accessible to child components. This follows the same principle as `CategoryProvider` but for tools and software categories.
- **ResponsivenessProvider:** This provider detects the device type (desktop, mobile, tablet etc.) and makes this information accessible to child components. This allows components to adapt their layout or behavior based on the user's device for a responsive user experience.

By utilizing these providers, the application achieves better code organization, reduces prop drilling, and simplifies data and functionality access for components.

## Auth Provider

This section defines the `AuthProviders` component, which manages user authentication state and provides related functionalities to child components throughout the application. It utilizes React's Context API for state management.

**Context:**

- A context named `AuthContext` is created using `createContext`.
- This context provides a way to share authentication state and functions across the application without explicit prop drilling.

**Authentication Provider:**

- Firebase Authentication is used for user authentication.
- The provider utilizes the `getAuth` function from Firebase to access the authentication instance initialized in `/firebase.config.js`.

**State Management:**

- The component maintains two state variables using `useState`:
  - `user`: Stores the currently logged-in user information including user ID, email, etc. or `null` if not authenticated.
  - `loading`: A boolean flag indicating whether an authentication check is ongoing.

**Functionalities:**

- `googleSignIn`: Initiates a Google sign-in popup using `signInWithPopup` from Firebase Auth.
- `updateUserProfile`: Updates the logged-in user's profile information (display name and photo URL) using `updateProfile` from Firebase Auth.
- `logOut`: Signs the user out using `signOut` from Firebase Auth.

**Provided Values:**

- An `authInfo` object containing the following properties is provided to child components through the `AuthContext.Provider`:
  - `user`: The current user information or `null` if not authenticated.
  - `loading`: A boolean indicating if an authentication check is ongoing.
  - `googleSignIn`: A function to initiate Google sign-in.
  - `updateUserProfile`: A function to update the logged-in user's profile.
  - `logOut`: A function to sign the user out.

```
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;


```

**In essence, `AuthProviders` acts as a central hub for managing user authentication state and providing related functions, promoting better component reusability and easier access to authentication data throughout the application.**

## Category Provider

This section defines the `CategoryProvider` component, which manages category data and related functionalities for the application. It utilizes React's Context API for state management and `@tanstack/react-query` for data fetching.

**Context:**

- A context named `CategoryContext` is created using `createContext`.
- This context provides a way to share category data and functions across components related to category browsing and filtering.

**State Management:**

The component maintains several state variables using `useState`:

- `allCategory`: An array containing a list of all categories fetched from a static data source.
- `selectedCategoryLink`: An object representing the currently selected category link which is coming from allcategory including the category URL.
- `subCategories`: An array containing a list of subcategories for the currently selected category except allcategory.
- `searchTerm`: A string representing the current search term used in search bar for filtering categories or assets.
- `currentPage`: The current page number for paginated category data fetching.
- `pageLimit`: The number of items to fetch per page for paginated category data.

**External Data Fetching:**

- The component utilizes two methods for fetching data:
  - **Static Data:** Fetches an initial list of all categories from a local JSON file named (`/categoryList.json`) using a `useEffect` hook.
  - **API Data:** Fetches category-based asset data using a custom hook `useAxiosPublic` for public API calls and `useQuery` from `@tanstack/react-query` for managing data fetching and caching.

**URL Query Parameters:**

- The component retrieves category, subcategory, and search term values from the URL query parameters using `useSearchParams` from the `react-router-dom` library.

**Provided Values:**

- An `categoryInfo` object containing the following properties is provided to child components through the `CategoryContext.Provider`:
  - `allCategory`: An array containing a list of all categories.
  - `selectedCategoryLink`: An object representing the currently selected category link.
  - `setSearchTerm`: A function to update the search term for filtering.
  - `setSelectedCategoryLink`: A function to update the selected category link.
  - `setSelectedSubCategory`: A function to update the selected subcategory.
  - `categoryBasedDatas`: An array containing the fetched category-based asset data.
  - `isCategoryLoading`: A boolean indicating if category data is being fetched.
  - `isCategoryFetching`: A boolean indicating if paginated category data is being fetched.
  - `setSubCategories`: A function to update the list of subcategories.
  - `category`: The current category retrieved from the URL query parameter.
  - `subCategory`: The current subcategory retrieved from the URL query parameter.
  - `subCategories`: An array containing a list of subcategories for the current category.
  - `urlSearchTerm`: The search term retrieved from the URL query parameter.
  - `setCurrentPage`: A function to update the current page number for pagination.
  - `setLimit`: A function to update the number of items fetched per page.
  - `pageLimit`: The current page limit for pagination.
  - `currentPage`: The current page number for pagination.

```
export const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [selectedCategoryLink, setSelectedCategoryLink] = useState({});
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(30);
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.get("category");
  const subCategory = queryParams.get("subCategory");
  const urlSearchTerm = queryParams.get("searchTerm");
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    fetch("/categoryList.json").then((res) =>
      res.json().then((data) => setAllCategory(data))
    );
  }, []);

  const {
    data: categoryBasedDatas = [],
    isLoading: isCategoryLoading,
    isFetching: isCategoryFetching,
  } = useQuery({
    queryKey: [
      "all-assets",
      category,
      subCategory,
      searchTerm,
      pageLimit,
      currentPage,
    ],
    queryFn: async () => {
      let url = "";

      if (category === "All" && searchTerm === "") {
        url = `/assets/by-user?page=${currentPage}&limit=${pageLimit}`;
      } else if (category === "All" && searchTerm !== "") {
        url = `/assets/by-user?searchTerm=${urlSearchTerm}&page=${currentPage}&limit=${pageLimit}`;
      } else {
        if (subCategory) {
          url = `/assets/by-user?category=${category}&subCategory=${subCategory}&page=${currentPage}&limit=${pageLimit}`;
        } else {
          url = `/assets/by-user?category=${category}&page=${currentPage}&limit=${pageLimit}`;
        }
        // Optionally add search term even with subcategory
        if (searchTerm !== "") {
          url += `&searchTerm=${urlSearchTerm}`;
        }
      }

      const res = await axiosPublic.get(url);

      return res?.data;
    },
    // Configure caching behavior
    staleTime: 100000, // Refetch data after 10 minute of inactivity
  });

const categoryInfo = {
    allCategory, selectedCategoryLink,
    setSearchTerm, setSelectedCategoryLink,
    setSelectedSubCategory, categoryBasedDatas,
    isCategoryLoading, isCategoryFetching,
    setSubCategories,category,
    subCategory, subCategories,
    urlSearchTerm, setCurrentPage,
    setLimit, pageLimit,
    currentPage,
  };
  return (
    <CategoryContext.Provider value={categoryInfo}>
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryProvider;


```

**In summary, `CategoryProvider` serves as a central hub for managing category data, filtering logic, pagination, and interaction with category-related UI components.**

## Tools & Software Category Provider

This section defines the `ToolsAndSoftwareCategoryProvider` component, which manages category data specifically for tools and software within the application. It functions similarly to `CategoryProvider.jsx` but focuses on tools and software categories. It utilizes React's Context API for state management and `@tanstack/react-query` for data fetching.

**Context:**

* A context named `CategoryToolsAndSoftwareContext` is created using `createContext`.
* This context provides a way to share tools and software category data and functions across components related to browsing and filtering tools and software.

**State Management:**

The component maintains several state variables using `useState`:

* `allCategory`: An array containing a list of all tools and software categories (likely fetched from an API or static data source).
* `selectedCategoryLink`: An object representing the currently selected category link (possibly including the category name and URL).
* `selectedSubCategory`: A string representing the currently selected subcategory.
* `subCategories`: An array containing a list of subcategories for the currently selected category (if applicable).
* `searchTerm`: A string representing the current search term used for filtering categories or assets.
* `currentPage`: The current page number for paginated category data fetching.
* `pageLimit`: The number of items to fetch per page for paginated category data.

**External Data Fetching:**

* The component utilizes two methods for fetching data:
    * **Static Data:** Fetches an initial list of all tools and software categories from a local JSON file (`/toolsAndSoftware.json`) using a `useEffect` hook.
    * **API Data:** Fetches tools and software data based on filters using a custom hook `useAxiosPublic` likely defined in `../Hooks/useAxiosPublic.js` for public API calls and `useQuery` from `@tanstack/react-query` for managing data fetching and caching.
        * The `useQuery` hook constructs a query key based on various parameters like subcategory, search term, page limit, and current page.
        * The `queryFn` function builds the API request URL dynamically based on the selected filters and pagination parameters.
        * Caching is configured similarly to `CategoryProvider.jsx`.

**URL Query Parameters:**

* The component retrieves category, subcategory, and search term values from the URL query parameters using `useSearchParams` from the `react-router-dom` library (assuming it's installed).

**Provided Values:**

* An `categoryInfo` object containing the following properties is provided to child components through the `CategoryToolsAndSoftwareContext.Provider`:
    * Properties are identical to those provided by `CategoryProvider.jsx` except they are specific to tools and software categories.

**Child Components:**

* Child components can access tools and software category data, search, and pagination functionalities provided by `ToolsAndSoftwareCategoryProvider` by consuming the `CategoryToolsAndSoftwareContext` using a `useContext` hook.

**In essence, `ToolsAndSoftwareCategoryProvider` mirrors the functionality of `CategoryProvider.jsx` but focuses on a specific category domain (tools and software) within the application.**
