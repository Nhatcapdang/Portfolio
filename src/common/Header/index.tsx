/** @format */

import {
  ActionIcon,
  Box,
  Stack,
  Button,
  SegmentedControl,
  SegmentedControlItem,
} from '@mantine/core'
import { IconBrandThreejs } from '@tabler/icons-react'
import Link from 'next/link'
import { useStyles } from './styles'

export const LINK_ID = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  work: 'Work',
  skills: 'Skills',
  contact: 'Contact',
}
const HEADERS: SegmentedControlItem[] = [
  {
    label: 'Home',
    value: LINK_ID.home,
  },
  {
    label: 'About',
    value: LINK_ID.about,
  },
  { label: 'Services', value: LINK_ID.services, disabled: true },
  { label: 'Work', value: LINK_ID.work, disabled: true },
  { label: 'Skills', value: LINK_ID.skills, disabled: true },
  { label: 'Contact', value: LINK_ID.contact },
]
export default function Header() {
  const { classes } = useStyles()
  return (
    <Box className={classes.headerWrapper}>
      <Stack h="100vh" align="center" justify="space-between">
        <Button color="pink" className="logo">
          D
        </Button>
        <SegmentedControl
          size="1rem"
          // radius={10}
          data={HEADERS}
          onChange={value => {
            const element = document.getElementById(value)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          transitionDuration={500}
          transitionTimingFunction="linear"
        />
        {/* <List>
          {HEADERS.map((header, idx) => (
            <List.Item key={idx}>
              <NavLink
                active={idx === linkActive}
                onClick={() => setLinkActive(idx)}
                label={header.label}
              />
            </List.Item>
          ))}
        </List> */}
        <Box className="iconShare">
          <Link href="/demo" passHref>
            <ActionIcon size={35} variant="transparent">
              <IconBrandThreejs width={35} height={35} />
            </ActionIcon>
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}
