// import Footer from '../Footer';
import { Box } from '@mantine/core';
import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box maw={2000} m="auto">
      <Header />
      <Box className="main" ml={100}>
        {children}
      </Box>
      {/* sds */}
      {/* <Footer /> */}
    </Box>
  );
}
