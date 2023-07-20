import { ActionIcon, Box, Stack, Button, SegmentedControl } from '@mantine/core'
import { IconUserShare } from '@tabler/icons-react'
import { useStyles } from './styles'

const HEADERS = [
  { label: 'Home', value: 'Home' },
  { label: 'About', value: 'About' },
  { label: 'Services', value: 'Services' },
  { label: 'Work', value: 'Work' },
  { label: 'Skills', value: 'Skills' },
  { label: 'Contact', value: 'Contact' },
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
          <ActionIcon size={35} variant="transparent">
            <IconUserShare width={35} height={35} />
          </ActionIcon>
        </Box>
      </Stack>
    </Box>
  )
}
