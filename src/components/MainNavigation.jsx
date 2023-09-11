import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {/* <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/requests"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Company Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/administration"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Administration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;