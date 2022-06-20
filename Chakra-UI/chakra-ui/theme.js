import { extendTheme } from "@chakra-ui/react";
import {createBreakpoints} from '@chakra-ui/theme-tools'

const breakpoints = ({
    custom1: '700px',
    sm: '200px'

})
const fontSizes = {
    custom1: "5rem",
    sm: '1.3rem'
}

const config = {
    initialColorMode: 'dark',
}

//example theme
const theme = extendTheme({config, fontSizes, breakpoints})

export default theme