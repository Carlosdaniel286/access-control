'use client'

import * as React from 'react'
import { Person, ProfileCard } from './ProfileCard'

export function ScrollProfile() {
  const people: Person[] = [
    {
      id: 1,
      name: 'Maria da Silva',
      status: 'Residente',
      lastFlow: { type: 'saida', time: 'Há 10 minutos' },
      profilePic: 'https://placehold.co/100x100/e5e7eb/6b7280?text=MS',
      unit: 'Casa 01',
      transport: 'carro',
    },
    {
      id: 2,
      name: 'João Oliveira',
      status: 'Locatário',
      lastFlow: { type: 'entrada', time: 'Ontem às 18:30' },
      profilePic: 'https://placehold.co/100x100/e5e7eb/6b7280?text=JO',
      unit: 'Apartamento 102',
      transport: 'a pé',
    },
    {
      id: 3,
      name: 'Carlos Mendes',
      status: 'Prestador',
      lastFlow: { type: 'entrada', time: 'Hoje às 09:15' },
      profilePic: 'https://placehold.co/100x100/e5e7eb/6b7280?text=CM',
      unit: 'Casa 05',
      transport: 'moto',
    },
    {
      id: 4,
      name: 'Ana Souza',
      status: 'Visitante',
      lastFlow: { type: 'saida', time: 'Há 5 minutos' },
      profilePic: 'https://placehold.co/100x100/e5e7eb/6b7280?text=AS',
      unit: 'Casa 03',
      transport: 'a pé',
    },
  ]

  return (
    <div className="max-h-full w-full overflow-y-auto px-2 py-3 bg-slate-100"> 
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] 4xl:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-3"> 
        {Array(20).fill(people).flat().map((item, index) => (
          <ProfileCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
