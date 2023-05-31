import { Box, Title, Text, ActionIcon, Button, Group, TextInput, Textarea } from '@mantine/core';
import { IconDevicesPlus, IconCertificate, IconHeadset } from '@tabler/icons-react';
import { useStyles } from './styles';

export default function ContactMe() {
  const { classes } = useStyles();
  return (
    <Box className={classes.contactMeWrapper}>
      <Title data-heading="Get in touch" className="title">
        Contact me
      </Title>
      <Group grow spacing={100} w="100%">
        <Box className="about">
          <Box className="about_description">
            <Box className="boxContent">
              <ActionIcon size={30} variant="transparent">
                <IconDevicesPlus width={30} height={30} />
              </ActionIcon>
              <Title className="boxContent_title">Email</Title>
              <Text className="sub-title">vankiet.kn78@gmail.com</Text>
              <Text className="sub-title">Write me</Text>
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
        </Box>
        <Box className="fromInput">
          <TextInput label="Your name" required placeholder=" " />
          <TextInput label="Email" />
          <TextInput label="Phone" />
          <Textarea label="Message" />
          <Button className="btnAboutMe" variant="outline" leftIcon={<IconDevicesPlus />}>
            Contact Me
          </Button>
        </Box>
      </Group>
    </Box>
  );
}
