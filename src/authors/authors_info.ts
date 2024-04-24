import Sawaratsuki1004 from './assets/author_sawaratsuki1004.jpg'

interface IAuthorData {
    avatar: string,
    name: string,
    github: string,
    twitter: string
}

export const author_info: IAuthorData[] = [
    {
        avatar: Sawaratsuki1004,
        name: 'さわらつき',
        github: 'https://github.com/SAWARATSUKI',
        twitter: 'https://twitter.com/sawaratsuki1004'
    }, 
    {
        avatar: Sawaratsuki1004,
        name: 'さわらつき',
        github: 'https://github.com/SAWARATSUKI',
        twitter: 'https://twitter.com/sawaratsuki1004'
    }, 
]

export function findAuthorByName(name: string): IAuthorData | null {
    for (const author of author_info) {
      if (author.name === name) {
        return author;
      }
    }
    return null; // 当未找到指定名字的作者时返回null
}