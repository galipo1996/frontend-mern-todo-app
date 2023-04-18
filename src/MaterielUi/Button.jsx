import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000',
      contrastText: '#fff',
    },
  },
})
export default function OutlinedButtons(props) {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction='row' spacing={2}>
        <Button onClick={props.onClick} color='neutral' variant='outlined'>
          {props.name}
        </Button>
      </Stack>
    </ThemeProvider>
  )
}
