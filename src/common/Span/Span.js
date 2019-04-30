import React from 'react';
import cn from 'classnames'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import {
  Input,
} from '../../common'

import styles from './Span.css'

const SpanWrapper = ({link, children, ...otherProps}) => {
  if (link) {
    return (
      <NavLink
        to={link}
        {...otherProps}
      >
        {children}
      </NavLink>
    )
  } else {
    return (
      <span {...otherProps}>
        {children}
      </span>
    )
  }
}

export const Span = props => {
  const {
    editing,
    children,
    className,
    icon,
    ...otherProps
  } = props

  if (editing) {
    return (
      <Input
        {...otherProps}
      />
    )
  }

  const classNames = cn(styles.span, 'span', className)

  return (
    <div className={styles.container}>
      {props.label && (
        <label>{props.label}</label>
      )}

      <SpanWrapper
        className={classNames}
        {...otherProps}
      >
        {icon ? (
          <FontAwesome
            name={icon}
          />
        ) : (
          null
        )}

        {children}
      </SpanWrapper>
    </div>
  )
}
