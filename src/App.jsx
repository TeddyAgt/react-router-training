import { Suspense, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";

function App() {
  const location = useLocation();
  const navigation = useNavigation();
  const user = useLoaderData();

  useEffect(() => {
    // console.log("location: ", location);
    // console.log("navigation: ", navigation);
  }, [location, navigation]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      <main className="flex-auto">
        <Suspense>
          <Outlet context={{ user }} />
        </Suspense>
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;

