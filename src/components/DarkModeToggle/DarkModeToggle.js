import React from 'react'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

const DarkModeToggle = ({ theme, handleThemeChange }) => {
  const ToggleSwitch = withStyles({
    switchBase: {
      color: orange[300],
      '&$checked': {
        color: orange[500],
      },
      '&$checked + $track': {
        backgroundColor: orange[500],
      },
    },
    checked: {},
    track: {},
  })(Switch)

  return (
    <ToggleSwitch
      checked={theme === 'dark' ? true : false}
      onChange={(e) => {
        handleThemeChange(e)
      }}
    ></ToggleSwitch>
  )
}

export default DarkModeToggle
