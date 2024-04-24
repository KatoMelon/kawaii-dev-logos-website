// import { useState } from 'react'

import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Cat, GithubOne, Search } from '@icon-park/react'
import { Space } from 'antd'
import { Input } from './components/ui/input'

const TitleBar = () => {
  return (
    <div className='flex flex-row items-center justify-between pb-4'>
      <Space className='title flex flex-row items-center text-2xl'>
        <Cat theme='filled' /> Cute Dev Logos
      </Space>
      <Button variant={'link'}>
        <GithubOne className='mr-1' size={18} />
        This Site
      </Button>
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className='flex flex-row items-center justify-between pb-4'>
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Filter by Author' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter by Author</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input placeholder='Search...' className='ml-4' />
      <Button className='ml-2'>
        <Search />
      </Button>
    </div>
  )
}

function App() {
  return (
    <div className='w-full h-full bg-muted p-6 flex flex-col items-center'>
      <div>
        <TitleBar />
        <SearchBar />
        <Card className='w-[350px] h-[150px]'></Card>
      </div>
    </div>
  )
}

export default App
