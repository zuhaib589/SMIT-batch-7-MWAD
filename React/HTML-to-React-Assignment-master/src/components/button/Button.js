import React from 'react'

export default function Button(props) {
  return (
    <a href="#" style={{backgroundColor:props.bgcolor, color:props.color, border:props.border}} className="btn btn-primary">{props.title}</a>
  )
}
