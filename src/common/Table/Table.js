import React from 'react';
import cn from 'classnames'

import styles from './Table.css'

export const Table = props => {
  const {
    className,
    children,
    hoverable,
    borderless,
  } = props

  const miscClasses = {
    hoverable,
    borderless,
  }

  const classNames = cn('table', styles.table, miscClasses)
  return (
    <div className={cn(styles.container, className)}>
      <table className={classNames}>
        {children}
      </table>
    </div>
  )
};
