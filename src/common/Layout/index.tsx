// import Footer from '../Footer';
import { Box } from '@mantine/core'
import StarsCanvas from 'src/components/canvas/Stars'
import Header from '../Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box maw={2000} m="auto">
      <Header />
      <Box className="main" ml={100} pos="relative">
        {children}
        <StarsCanvas />
      </Box>
      {/* sds */}
      {/* <Footer /> */}
    </Box>
  )
}
