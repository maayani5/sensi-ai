import Link from 'next/link';
import classes from './Nav.module.css'

function Nav() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Sensi.ai</div>
    </header>
  );
}

export default Nav;