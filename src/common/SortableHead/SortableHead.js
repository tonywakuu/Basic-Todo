import React from 'react';
import FontAwesome from 'react-fontawesome'

import styles from './SortableHead.css'

export const SortableHead = ({className, name, sortDirection, onClick}) => {
  const classNames = [className, styles.head].join(' ')
  return (
    <th className={classNames}>
      <span>{name}</span>
      <FontAwesome
        className={`top ${sortDirection === -1 ? 'active' : ''}`}
        onClick={() => onClick(-1)}
        name="caret-up"
      />
      <FontAwesome
        className={`bottom ${sortDirection === 1 ? 'active' : ''}`}
        onClick={() => onClick(1)}
        name="caret-down"
      />
    </th>
  )
};
