import React, { Fragment, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <List>
          {['Browser', 'Bootcamps', 'How It Works', 'Testemonia'].map((text) => (
            <ListItem key={text} disablePadding >
              <ListItemButton sx={{ width: '15rem' }}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>

  );
};

export default DrawerComponent;