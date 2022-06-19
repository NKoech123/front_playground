import React from 'react'
import { Button, Text, Heading, Box, Link, useTheme } from '@chakra-ui/react'
import CustomLink from '../components/Link'

const index = () => {
  console.log(useTheme())
  return (
    <div>
       <CustomLink href ="/about" ChakraComponent={Button}>
        This is a Link
       </CustomLink>
       
       <Heading color = 'purple'>
        This is a heading
       </Heading>
    </div>
  )
}

export default index
