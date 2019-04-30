import React from 'react'
import moment from 'moment'
import cn from 'classnames'

import FontAwesome from 'react-fontawesome'

import {
  Button,
} from '../../common'

import styles from './DateBox.css'

// Private Components
const TimeDisplay = ({ time }) => (
  <span className="time">
    <FontAwesome name="clock-o" />
    {time}
  </span>
)

const NameDisplay = ({ name }) => (
  <span className="name">
    <FontAwesome name="user-circle" />
    {name}
  </span>
)

// Public Componet
export const DateBox = props => {
  const {
    assignment,
    note,
    buttonTitle,
    onClick,
    buttonIcon,
  } = props

  let dateTime
  let author
  if (note) {
    dateTime = moment(note.created_at)
    author = note.author
  } else {
    dateTime = moment(assignment.dateTime)
    author = assignment.rep
  }
  const name = (author && author.nameDisplay) || 'Unknown'
  const date = dateTime.format('D')
  const month = dateTime.format('MMM')
  const time = dateTime.format('h:mm A')


  return (
    <div className={cn(styles.note, { assignment, note })}>
      <div className="date-container">
        <div className="date">
          <span className="month">
            {month}
          </span>

          <span className="day">
            {date}
          </span>
        </div>
      </div>

      <div className="dot" />

      <div className="content">
        {note ? (
          <div className="title">
            <NameDisplay name={name} />
            <TimeDisplay time={time} />
          </div>
        ) : (
          <div className="title">
            Upcoming Assignment
          </div>
        )}

        {note ? (
          <div className="body">
            {note.text}
          </div>
        ) : (
          <div className="body">
            <TimeDisplay time={time} />
            <NameDisplay name={name} />
          </div>
        )}
      </div>

      {(assignment && onClick) ? (
        <Button
          large
          icon={buttonIcon}
          title={buttonTitle || 'Click Me!'}
          onClick={onClick}
        />
      ) : (
        null
      )}
    </div>
  )
}
