import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './Link.css'

export const Link = ({children, ...props}) => (
  <NavLink className={styles.a} {...props}>
    {children}
  </NavLink>
)
