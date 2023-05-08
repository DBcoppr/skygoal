import React from 'react'

const Circleimg = ({w,h,r,color}) => {
  return (
    <svg className="circleimg" width={w} height={h} viewBox='0 0 100 100'>
        <circle cx="50" cy="50" r={r} className='' style={{fill:color}}/>
    </svg>
  )
}

export default Circleimg