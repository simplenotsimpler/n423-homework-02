import Link from "next/link.js";
import NavbarStyles from "../styles/Navbar.module.css";
import { useRouter } from "next/router.js";

//highlight active link
// https://www.slingacademy.com/article/how-to-highlight-currently-active-link-in-next-js/

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const getLinkClassName = (path) => {
    return currentRoute === path
      ? NavbarStyles.linkActive
      : NavbarStyles.linkInactive;
  };

  //annoying Next doesn't have the React activeClassName
  //annoying that can't just reference the href prop in the className
  //no need to assign to separate classes just call the function directly in the className

  return (
    <nav className={NavbarStyles.navbar}>
      <ul className={NavbarStyles.navmenu}>
        <li>
          <Link href="/" className={getLinkClassName("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={getLinkClassName("/about")}>
            About
          </Link>
        </li>
        <li>
          <Link href="/products" className={getLinkClassName("/products")}>
            Products
          </Link>
        </li>
      </ul>
      <div className={NavbarStyles.logo}>The Soap Factory</div>
    </nav>
  );
};

export default Navbar;
