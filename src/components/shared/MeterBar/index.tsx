import React from 'react'
import scoreToPercentage from 'utils/scoreToPercentage'
import './MeterBar.scss'
type MeterBarProps = { value: number }

function MeterBar({ value }: MeterBarProps) {
  if (value < 0 || value > 10) return <span>invalid value</span>
  return (
    <div className="MeterBar">
      <div
        className="MeterBar_value"
        style={{ width: `${scoreToPercentage(value)}%` }}
      ></div>
    </div>
  )
}

export default MeterBar
