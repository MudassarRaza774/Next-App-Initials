import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <nav className="header">
        <h1 className="logo">Next Auth Man 😎</h1>
        <ul
          className={`main-nav ${
            !session && status === "loading" ? "loading" : "loaded"
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          {session && status === "authenticated" && (
            <li>
              <Link href="/dashboardAuth">dashboard</Link>
            </li>
          )}
          {/* {session && status && (
            <li>
              <Link href="/blogAuth">Blog</Link>
            </li>
          )} */}
          <li>
            <Link href="/blogAuth">Blog</Link>
          </li>

          {!session && status === "unauthenticated" && (
            <li>
              <Link
                href="/api/auth/signin"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </Link>
            </li>
          )}
          {session && status === "authenticated" && (
            <li>
              <Link
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
