import {
  Box,
  Title,
  Button,
  TextInput,
  Textarea,
  SimpleGrid,
} from '@mantine/core'
import { IconDevicesPlus } from '@tabler/icons-react'
import { useForm } from '@mantine/form'
import EarthCanvas from 'src/components/canvas/Earth'
import { useStyles } from './styles'

export default function ContactMe() {
  const { classes, cx } = useStyles()
  const formContactMe = useForm({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      message: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  return (
    <Box className={classes.contactMeWrapper}>
      <Title data-heading="Get in touch" className="title">
        Contact me
      </Title>
      <SimpleGrid
        cols={2}
        spacing={100}
        w="100%"
        breakpoints={[{ maxWidth: '992', cols: 1, spacing: 50 }]}
      >
        <Box pos="relative">
          <Box className="earthCanvasWrapper">
            <EarthCanvas />
          </Box>
        </Box>
        <Box className="fromInput">
          <TextInput
            className={cx([
              { 'input-not-empty': formContactMe.values.name.length > 0 },
            ])}
            label="Your name"
            {...formContactMe.getInputProps('name')}
          />
          <TextInput
            className={cx([
              { 'input-not-empty': formContactMe.values.email.length > 0 },
            ])}
            label="Email"
            {...formContactMe.getInputProps('email')}
          />
          <TextInput
            className={cx([
              { 'input-not-empty': formContactMe.values.phone.length > 0 },
            ])}
            label="Phone"
            {...formContactMe.getInputProps('phone')}
          />
          <Textarea
            className={cx([
              { 'input-not-empty': formContactMe.values.message.length > 0 },
            ])}
            label="Message"
            {...formContactMe.getInputProps('message')}
          />
          <Button
            className="btnAboutMe"
            variant="outline"
            leftIcon={<IconDevicesPlus />}
          >
            Contact Me
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
