import {
  Box,
  Title,
  Button,
  TextInput,
  Textarea,
  SimpleGrid,
} from '@mantine/core'
import { IconDevicesPlus } from '@tabler/icons-react'
import EarthCanvas from 'src/components/canvas/Earth'
import { TransformedValues, hasLength, isEmail, useForm } from '@mantine/form'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { useStyles } from './styles'

export default function ContactMe() {
  const { classes, cx } = useStyles()
  const [isLoadingBtn, setIsLoadingBtn] = useState(false)
  const form = useRef<HTMLFormElement | null>(null)
  const formContactMe = useForm({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      message: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 30 }, 'Name must be 2-30 characters long'),
      email: isEmail('Invalid email'),
      message: hasLength(
        { min: 15, max: 999 },
        'Message must be 15-999 characters long'
      ),
      phone: hasLength({ min: 9, max: 15 }, 'Phone must be between 9 and 15'),
    },
  })
  const handleSubmit = (values: TransformedValues<typeof formContactMe>) => {
    setIsLoadingBtn(true)
    emailjs
      .sendForm(
        'service_cgaaqem', // service id
        'template_ts359wi', // template id
        form.current as HTMLFormElement,
        'nQ-RxdlXS7bMR0nGf' // puclic key
      )
      .then(
        result => {
          console.log(result.text, values)
        },
        error => {
          console.log(error.text)
        }
      )
      .finally(() => {
        setIsLoadingBtn(false)
      })
  }
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
        <Box
          ref={form}
          className="fromInput"
          component="form"
          onSubmit={formContactMe.onSubmit(handleSubmit)}
        >
          <TextInput
            name="user_name"
            className={cx([
              { 'input-not-empty': formContactMe.values.name.length > 0 },
            ])}
            label="Your name"
            {...formContactMe.getInputProps('name')}
          />
          <TextInput
            name="user_email"
            className={cx([
              { 'input-not-empty': formContactMe.values.email.length > 0 },
            ])}
            label="Email"
            {...formContactMe.getInputProps('email')}
          />
          <TextInput
            name="user_phone"
            className={cx([
              { 'input-not-empty': formContactMe.values.phone.length > 0 },
            ])}
            label="Phone"
            type="number"
            {...formContactMe.getInputProps('phone')}
          />
          <Textarea
            name="user_message"
            className={cx([
              { 'input-not-empty': formContactMe.values.message.length > 0 },
            ])}
            label="Message"
            {...formContactMe.getInputProps('message')}
          />
          <Button
            type="submit"
            className="btnAboutMe"
            variant="outline"
            leftIcon={<IconDevicesPlus />}
            loading={isLoadingBtn}
          >
            Contact Me
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
