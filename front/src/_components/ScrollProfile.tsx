'use client'

import * as React from 'react'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import Sheet from '@mui/joy/Sheet'
import { ListSubheader } from '@mui/joy'
import { ProfileCard } from './ProfileCard'
import { InfoCard } from './InfoCard'
import { StickyHeader } from './StickyHeader'

export function ScrollProfile() {
  const array = Array(20).fill(0) // Simula 20 perfis
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Sheet
        variant="outlined"
        sx={{
          width: '100%',
          overflowX: 'auto',
          borderRadius: 'sm',
        }}
      >
        {open && (
          <InfoCard
            onClick={() => {
              setOpen(false)
            }}
          />
        )}

        <List
          sx={{
            background: 'oklch(97% 0.014 254.604)',
            padding: '0px',
            margin: '0px',
          }}
        >
          <ListSubheader
            sx={{
              fontSize: '1rem',
              gap: '13px',
              margin: '7px',
              display: 'flex',
            }}
            sticky
          >
            <p className="block md:hidden">
              painel de movimentação diaria
            </p>

            <div className="px-1 w-[80px] hidden sm:min-w-[90px] md:block md:min-w-[100px] lg:min-w-[100px]" />

            <section className="h-9 hidden md:block pt-1 w-[100%]">
              <StickyHeader />
            </section>
          </ListSubheader>

          {array.map((_, categoryIndex) => (
            <ListItem
              key={categoryIndex}
              sx={{
                overflow: 'hidden',
                padding: '7px',
                marginBottom: '10px',
              }}
            >
              <List
                sx={{
                  overflow: 'hidden',
                  padding: '0px',
                  margin: '0px',
                }}
              >
                <ListItem
                  key={categoryIndex}
                  sx={{
                    background: 'white',
                    display: 'flex',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <ProfileCard
                    onClick={() => {
                      setOpen(true)
                    }}
                  />
                </ListItem>
              </List>
            </ListItem>
          ))}
        </List>
      </Sheet>
    </>
  )
}
