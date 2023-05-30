import { ActionIcon, List, Box, NavLink, Stack, Button } from '@mantine/core';
import { IconUserShare } from '@tabler/icons-react';
import { useState } from 'react';
import { useStyles } from './styles';

const HEADERS = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Services' },
  { label: 'Work' },
  { label: 'Skills' },
  { label: 'Contact' },
];
export default function Header() {
  const { classes } = useStyles();
  const [linkActive, setLinkActive] = useState(0);
  return (
    <Box className={classes.headerWrapper}>
      <Stack h="100vh" align="center" justify="space-between">
        <Button color="pink" className="logo">
          D
        </Button>
        <List>
          {HEADERS.map((header, idx) => (
            <List.Item key={idx}>
              <NavLink
                active={idx === linkActive}
                onClick={() => setLinkActive(idx)}
                label={header.label}
              />
            </List.Item>
          ))}
        </List>
        <Box className="iconShare">
          <ActionIcon size={35} variant="transparent">
            <IconUserShare width={35} height={35} />
          </ActionIcon>
        </Box>
      </Stack>
    </Box>
  );
}
