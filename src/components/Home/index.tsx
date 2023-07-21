import {
  Box,
  Center,
  Title,
  Stack,
  Text,
  ActionIcon,
  List,
  Button,
  Container,
} from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconDeviceMobile,
  IconMail,
  IconBrandTwitter,
  IconUserSearch,
} from '@tabler/icons-react'
import Image from 'next/image'
import { Layout } from 'src/common'
import { Ava3 } from 'public/asset/Photos'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useStyles } from './styles'
import AboutMe from './AboutMe'
// import Timeline from './Timeline'
import ContactMe from './ContactMe'
import Testimonials from './Testimonials'

export default function Home() {
  const { classes } = useStyles()
  return (
    <Layout>
      <Container fluid>
        <Box className={classes.bothMndatory}>
          <Box className={classes.homeWrapper}>
            <Stack justify="space-between">
              <List className="listSocial">
                <List.Item>Follow me</List.Item>
                <List.Item> - </List.Item>
                <List.Item>
                  <ActionIcon size={35} variant="transparent">
                    <IconBrandFacebook width={35} height={35} />
                  </ActionIcon>
                </List.Item>
                <List.Item>
                  <ActionIcon size={35} variant="transparent">
                    <IconBrandInstagram width={35} height={35} />
                  </ActionIcon>
                </List.Item>
                <List.Item>
                  <ActionIcon size={35} variant="transparent">
                    <IconBrandLinkedin width={35} height={35} />
                  </ActionIcon>
                </List.Item>
              </List>
              <Box className="introdution">
                <Title size={50}>WEBSITE IN DEVELOPING</Title>
                <Title size={50}>Hi, I&rsquo;m Kiet</Title>
                <Title order={2}>Frontend developer</Title>
                <Text maw={600}>
                  Hight level experience in web design and development
                  knowledge, producing quality work. I have a lot of experience
                  in developing web applications using ReactJS, Redux HTML, CSS,
                  JavaScript, Bootstrap, Material UI, Webpack, Babel, Git,... I
                  am a hard worker and enjoy working at all critical conditions.
                  If hired by you, I will be responsible to complete the task
                  within the stipulated time frame and with utmost confidence.
                </Text>
                <Button
                  className="btnAboutMe"
                  variant="outline"
                  leftIcon={<IconUserSearch />}
                >
                  More About Me
                </Button>
              </Box>
              <List className="listPersional">
                <List.Item>
                  <Center>
                    <ActionIcon size={35} variant="transparent">
                      <IconDeviceMobile width={35} height={35} />
                    </ActionIcon>
                    <Box>
                      <Text>Phone</Text>
                      <Text className="underline">037 7871 681</Text>
                    </Box>
                  </Center>
                </List.Item>
                <List.Item>
                  <Center>
                    <ActionIcon size={35} variant="transparent">
                      <IconBrandTwitter width={35} height={35} />
                    </ActionIcon>
                    <Box>
                      <Text>Twitter</Text>
                      <Text className="underline">jk81123797</Text>
                    </Box>
                  </Center>
                </List.Item>
                <List.Item>
                  <Center>
                    <ActionIcon size={35} variant="transparent">
                      <IconMail width={35} height={35} />
                    </ActionIcon>
                    <Box>
                      <Text>Email</Text>
                      <Text className="underline">vankiet.kn78@gmail.com</Text>
                    </Box>
                  </Center>
                </List.Item>
              </List>
            </Stack>
            <Box className="owen">
              <Box className="owen2">
                <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                  <OrbitControls autoRotate enableZoom={false} />
                  {/* edges  */}
                  <ambientLight intensity={1} />
                  {/* directionalLight  = meshStandardMaterial */}
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[1, 100, 200]} scale={1.3}>
                    <MeshDistortMaterial
                      color="#220736"
                      attach="material"
                      distort={0.5}
                      speed={2}
                    />
                  </Sphere>
                </Canvas>
                <Box className="avatar">
                  <Image src={Ava3} alt="avatar" />
                </Box>
              </Box>
            </Box>
          </Box>
          <AboutMe />
          {/* <Timeline /> */}
          <Testimonials />
          <ContactMe />
        </Box>
      </Container>
    </Layout>
  )
}
