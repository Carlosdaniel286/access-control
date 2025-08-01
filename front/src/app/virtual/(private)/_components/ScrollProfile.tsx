import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import { ListSubheader } from '@mui/joy';
import { ProfileCard } from './ProfileCard';

export function ScrollProfile() {
  const array = Array(20).fill(0); // Simula 20 perfis

    return (
    <Sheet
      variant="outlined"
      sx={{ width: '100%', maxHeight: '90vh', overflowX: 'auto', borderRadius: 'sm' }}
    >
      <List   sx={{background:'oklch(98.5% 0.002 247.839)'}}  >
        <ListSubheader sticky>{'painel de movimentação diaria'}</ListSubheader>
        {array.map((_, categoryIndex) => (
          <ListItem   key={categoryIndex}>
          <List  sx={{overflow:'hidden'}} >
            <ListItem  key={categoryIndex}>
                  <ProfileCard/>
                </ListItem>
            </List>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
}
