import React from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import cn from 'classnames'

import styles from './Tr.css'

const TrComponent = props => {
  const {
    children,
    to,
    hover,
    className,
    dispatch,
  } = props

  const classNames = cn(styles.tr, className, { hover })

  const navigate = () => {
    if (to) {
      dispatch(push(to))
    }
  }

  return (
    <tr
      className={classNames}
      onClick={navigate}
    >
      {children}
    </tr>
  )
}

const mapStateToProps = ({ history }) => {
  return { history }
}

export const Tr = connect(mapStateToProps, null)(TrComponent)
