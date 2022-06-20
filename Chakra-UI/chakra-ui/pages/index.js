import React from 'react'
import { Button, Text, Heading, Box, Link, useTheme } from '@chakra-ui/react'
import CustomLink from '../components/Link'
import ToggleMode from '../components/ToggleMode'
import ToggleModeBtn from '../components/ToggleMode'

const index = () => {
 
  return (

    <Box
    sx = {{
      background: 'red.100'
    }}
    
    >

        <Heading>Heading 1</Heading>
        <Heading className='head2'>Heading 2</Heading>



    </Box>






  )

  }

export default index
