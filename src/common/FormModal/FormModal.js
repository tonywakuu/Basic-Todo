import React from 'react';

import cn from 'classnames'

// 3rd party
import Modal from 'react-awesome-modal'

// Components
import {
  Form,
  Icon,
} from '../../common'

import styles from './FormModal.css'

export const FormModal = props => {
  const {
    visible,
    onClickAway,
    className,
    title,
    onSubmit,
    children,
  } = props

  return (
    <Modal
      className="modal"
      visible={!!visible}
      width="450"
      effect="fadeInUp"
      onClickAway={onClickAway}
    >
      <div className={cn(styles.container, className)}>
        <Icon
          name="times"
          button
          onClick={onClickAway}
        />
        <div className="header">
          <h2>{title}</h2>
        </div>
        <Form onSubmit={onSubmit} className="body">
          {children}
        </Form>
      </div>
    </Modal>
  )
}
