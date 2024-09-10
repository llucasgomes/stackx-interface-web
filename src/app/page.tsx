import type { User } from '@/@types'
import { GET } from '@/actions/GET'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import dayjs from 'dayjs'
import Image from 'next/image'

export default async function Home() {
  const usuarios: User[] = await GET()

  return (
    <main className="w-full flex justify-center items-center flex-wrap gap-3 p-3">
      {usuarios.map(person => (
        <Card
          key={Number(person.id)}
          className={`w-11/12 md:w-96 relative border-l-[8px] ${person.gender === 'male' ? 'border-l-blue-700' : 'border-l-pink-700'}`}
        >
          <CardHeader className=" flex flex-row  justify-start ">
            <CardTitle className="p-0">{`${person.name.first} ${person.name.last}`}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row ">
            <div>
              <Image
                src={person.picture.large}
                width={150}
                height={150}
                alt="imagem de perfil do usuario"
                className={`absolute right-1 top-1  rounded-lg   w-[90px] h-[90px] 
                   bject-center object-cover 
                   ${person.gender === 'male' ? 'border-blue-700' : 'border-pink-700'} 
                   border-[3px]
                  `}
              />
            </div>
            <div className="flex flex-col ml-2">
              <CardDescription className="mb-1 text-md">
                <span className="text-black">Genero: </span>
                {person.gender}
              </CardDescription>
              <CardDescription className="mb-1 text-md">
                <span className="text-black">Email: </span>
                {person.email}
              </CardDescription>
              <CardDescription className="mb-1 text-md">
                <span className="text-black">Idade: </span>
                {person.dob.age} anos
              </CardDescription>
              <CardDescription className="mb-1 text-md">
                <span className="text-black">Data de Nasimento: </span>
                {dayjs(person.dob.date).format('DD/MM/YYYY')}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </main>
  )
}
