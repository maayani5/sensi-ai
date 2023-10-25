import Link from 'next/link';
import classes from './Nav.module.css'

function Nav() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Sensi.ai</div>
      {/*<nav>*/}
      {/*  <ul>*/}
      {/*    <li>*/}
      {/*     <Link href='/first-page'>First Page</Link>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*     <Link href='/anything'>Second Page</Link>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</nav>*/}
    </header>
  );
}

export default Nav;