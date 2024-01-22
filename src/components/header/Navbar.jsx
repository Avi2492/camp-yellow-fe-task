import React from "react";
import Logo from "../logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthStore.jsx";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Account",
    href: "/account",
  },
  {
    name: "Favourite",
    href: "/",
  },
];

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to={"/"}>
        <Logo />
      </Link>
      {user?.email ? (
        <>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <Link to={"/account"}>
              <button className="text-white pr-4">Welcome</button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-6 py-2 text-white rounded-md"
            >
              Logout
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <Link to={"/"}>
                        <Logo />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-red-600  hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <li key={item.name} style={{ textDecoration: "none" }}>
                          <Link
                            to={item.href}
                            className="inline-flex items-center text-sm font-semibold text-gray-300 hover:text-gray-200"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-2 space-y-2">
                    <Link to={"/account"}>
                      <button className="w-full rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Welcome
                      </button>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="text-white pr-4">Sign in</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 py-2 text-white rounded-md">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
