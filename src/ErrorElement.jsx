import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />

      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">Error 404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">{error.statusText || error.message}</p>
            <p className="mb-4 text-lg font-light text-gray-500">Sorry, we cant find that page.</p>
            <a href="/">
              <button className="text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 p-4 rounded-2xl">Go to Homepage!</button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}