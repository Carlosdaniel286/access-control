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
      sx={{ width: '100%', maxHeight: '87vh', overflowX: 'auto', borderRadius: 'sm',padding:'0px',margin:'0px' }}
    >
      <List   sx={{background:'oklch(97% 0.014 254.604)',padding:'0px',margin:'0px'}}  >
        <ListSubheader sx={{fontSize:'1rem'}} sticky>{'painel de movimentação diaria'}</ListSubheader>
        {array.map((_, categoryIndex) => (
          <ListItem sx={{overflow:'hidden',padding:'7px',marginBottom:'10px'}}  key={categoryIndex}>
          <List  sx={{overflow:'hidden',padding:'0px',margin:'0px'}} >
            <ListItem sx={{background:'white', display:'flex',padding:0,margin:0 }}  key={categoryIndex}>
                  <ProfileCard/>
                </ListItem>
            </List>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
}
