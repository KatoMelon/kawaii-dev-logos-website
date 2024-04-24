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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Cat, GithubOne, Search, Twitter } from '@icon-park/react'
import { Space } from 'antd'
import { Input } from './components/ui/input'
import { findAuthorByName } from './authors/authors_info'

const TitleBar = () => {
  return (
    <div className='flex flex-row items-center justify-between pb-4'>
      <Space className='font-mono flex flex-row items-center text-2xl font-bold'>
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
    <div className='flex flex-row items-center justify-between pb-4 font-mono'>
      <Select>
        <SelectTrigger className='w-[180px] text-gray-500'>
          <SelectValue placeholder='Author' />
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
      <Input placeholder='Search...' className='ml-2 w-full' />
      <Button className='ml-2'>
        <Search />
      </Button>
    </div>
  )
}

const AuthorInfo = (props: { name: string }) => {
  const author = findAuthorByName(props.name)
  return (
    <div className='w-full p-3 rounded-md border-2 border-gray-600 flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center'>
        <Avatar>
          <AvatarImage src={author?.avatar ?? ''} alt={author?.name ?? ''} />
          <AvatarFallback>{author?.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className='ml-2'>{author?.name}</div>
      </div>
      <div className='flex flex-row items-center'>
        <Button variant={'link'} size={'icon'} onClick={() => window.open(author?.github ?? '')}>
          <GithubOne className='mr-1' size={18} />
        </Button>
        <Button variant={'link'} size={'icon'} onClick={() => window.open(author?.github ?? '')}>
          <Twitter className='mr-1' size={18} />
        </Button>
      </div>
    </div>
  )
}
const LogoCard = (props: { name: string }) => {
  return (
    <Card className='sm:w-full md:w-[300px] h-[350px] p-4'>
      <AuthorInfo name='さわらつき' />
    </Card>
  )
}

function App() {
  return (
    <div className='w-full h-full bg-muted p-6 flex flex-col items-center'>
      <div>
        <TitleBar />
        <SearchBar />
        <div className='w-full overflow-auto' style={{ height: 'calc(100vh - 160px)' }}>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            <LogoCard />
            <LogoCard />
            <LogoCard />
            <LogoCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
