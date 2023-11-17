import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="font-bold bg-[#202020] p-2 sm:px-4 flex justify-between items-center tracking-wide">
        <div className="text-3xl">Calculator</div>
        <div className="flex space-x-2">
          {isAuthenticated ? (
            <div
              className="bg-red-500 px-4 py-2 rounded-lg sm:hover:bg-red-600  sm:cursor-pointer"
              onClick={() => logout()}
            >
              Logout
            </div>
          ) : (
            <>
              <div
                className="px-4 py-2 rounded-lg sm:hover:bg-[#484848]  sm:cursor-pointer"
                onClick={() => loginWithRedirect()}
              >
                Login
              </div>
              <div className="bg-blue-700 px-4 py-2 rounded-lg sm:hover:bg-blue-900  sm:cursor-pointer">
                Get started
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
