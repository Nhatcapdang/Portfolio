import { Box, Title, Text, ActionIcon, Button, Group } from '@mantine/core';
import { IconDevicesPlus, IconCertificate, IconHeadset } from '@tabler/icons-react';
import Image from 'next/image';
import { Ava } from 'public/asset/Photos';
import { useStyles } from './styles';

export default function AboutMe() {
  const { classes } = useStyles();
  return (
    <Box className={classes.aboutMeWrapper}>
      <Box>
        <Title data-heading="My Intro" className="title">
          About me
        </Title>
        <Group grow spacing={100}>
          <Box className="avatar">
            <Image src={Ava} alt="avatar" />
          </Box>
          <Box className="about">
            <Text className="heading">Hi, I&rsquo;m Kiet Nguyen, in HCM City </Text>
            <Text className="desc">
              web developer, with hight level experience in web design and development knowledge,
              producing quality work. I have a lot of experience in developing web applications
              using ReactJS, Redux HTML, CSS, JavaScript, Bootstrap, Material UI, Webpack, Babel,
              Git,... I
            </Text>
            <Box className="about_description">
              <Box className="boxContent">
                <ActionIcon size={30} variant="transparent">
                  <IconDevicesPlus width={30} height={30} />
                </ActionIcon>
                <Title className="boxContent_title">Experience</Title>
                <Text className="sub-title">8 + Years</Text>
              </Box>
              <Box className="boxContent">
                <ActionIcon size={30} variant="transparent">
                  <IconCertificate width={30} height={30} />
                </ActionIcon>
                <Title className="boxContent_title">Completed</Title>
                <Text className="sub-title">18 + Projects</Text>
              </Box>
              <Box className="boxContent">
                <ActionIcon size={30} variant="transparent">
                  <IconHeadset width={30} height={30} />
                </ActionIcon>
                <Title className="boxContent_title">Support</Title>
                <Text className="sub-title">Online 24/7</Text>
              </Box>
            </Box>
            <Button className="btnAboutMe" variant="outline" leftIcon={<IconDevicesPlus />}>
              Contact Me
            </Button>
          </Box>
        </Group>
      </Box>
    </Box>
  );
}
