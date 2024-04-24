import Sawaratsuki1004 from './assets/author_sawaratsuki1004.jpg'
import Aikoyori from './assets/author_aikoyori.png'

interface IAuthorData {
    idf: string,
    avatar: string,
    name: string,
    github: string,
    twitter: string
    repo: string
}

export const author_info: IAuthorData[] = [
    {
        idf: 'sawaratsuki',
        avatar: Sawaratsuki1004,
        name: 'さわらつき',
        github: 'https://github.com/SAWARATSUKI',
        twitter: 'https://twitter.com/sawaratsuki1004',
        repo: 'https://github.com/SAWARATSUKI/ServiceLogos'
    }, 
    {
        idf: 'aikoyori',
        avatar: Aikoyori,
        name: 'Aikoyori',
        github: 'https://github.com/Aikoyori',
        twitter: 'https://twitter.com/Aikoyori',
        repo: 'https://github.com/Aikoyori/ProgrammingVTuberLogos'
    }, 
]

export function findAuthorByIDF(idf: string): IAuthorData | null {
    for (const author of author_info) {
      if (author.idf === idf) {
        return author;
      }
    }
    return null; // 当未找到指定名字的作者时返回null
}