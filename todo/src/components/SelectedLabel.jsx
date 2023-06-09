import React from 'react'

function SelectedLabel({children, selectedLabel}) {
  return (
    <div className="selected-label">{children}{selectedLabel}</div>
  )
}

export default SelectedLabel