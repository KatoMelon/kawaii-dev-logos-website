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
import { BalanceTwo, Box, Cat, Copy, Download, GithubOne, Search, Twitter } from '@icon-park/react'
import { Image, Space } from 'antd'
import { Input } from './components/ui/input'
import { findAuthorByIDF } from './authors/authors_info'
import { image_info } from './logos/imageInfo'

const TitleBar = () => {
  return (
    <div className='flex flex-row items-center justify-between pb-4'>
      <Space className='font-mono flex flex-row items-center text-2xl font-bold'>
        <Cat theme='filled' /> Kawaii Dev Logos
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

const AuthorInfo = (props: { author: string }) => {
  const author = findAuthorByIDF(props.author)
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
const LogoCard = (props: { author: string; image: string; name: string; repo: string }) => {
  return (
    <Card className='sm:w-full md:w-[300px] min-h-[350px] p-4 flex flex-col justify-between'>
      <div className='w-full aspect-video'>
        <Image style={{ objectFit: 'fill' }} src={props.image} />
      </div>
      <div className='flex flex-col '>
        <div className='text-2xl font-mono font-bold mb-2 flex flex-row items-center justify-between'>
          {props.name}
          <Space className='flex flex-row items-center'>
            <Button size={'icon'} variant={'outline'}>
              <Copy />
            </Button>
            <Button size={'icon'} variant={'outline'}>
              <Download />
            </Button>
          </Space>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Space className='flex flex-row items-center text-gray-400 mb-1 text-sm font-mono'>
            <BalanceTwo size={22} />
            CC BY-NC-SA
          </Space>
          <Button className='font-mono' variant={'link'} onClick={() => window.open(props.repo)}>
            <Box size={18} className='mr-1' />
            Repo
          </Button>
        </div>
        <AuthorInfo author={props.author} />
      </div>
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
            {image_info
              .sort((a, b) => {
                return a.dirName > b.dirName ? 1 : -1
              })
              .map((logo, index) => {
                return (
                  <LogoCard
                    key={index}
                    image={logo.image}
                    author={logo.author}
                    name={logo.dirName}
                    repo={findAuthorByIDF(logo.author)?.repo ?? ''}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
