import tw from "twin.macro"
import { Button } from "../components/shared/Button"
import { useUser } from "@auth0/nextjs-auth0"
import { NavBar } from "../components/NavBar"
import { Body } from "../components/shared/Body"
import { Title, NoUserTitle } from "../components/shared/text"
import useSWR from "swr"
import { User } from "../hooks/IUser"

export default function Home() {

  const { user } = useUser()

  const { data: userProfile } = useSWR<User>(user?.sub ? `/users/id/${encodeURIComponent(user?.sub)}` : null, { refreshInterval: 5000 })

  console.log(userProfile)

  return (
    <Body>
      {!user && (
        <div tw="h-full flex flex-col justify-center">
          <div tw="flex flex-col justify-center mx-auto pb-4">
            <NoUserTitle>Bienvenido a The Good Shop</NoUserTitle>
          </div>
          <div tw="flex flex-col gap-4 mb-[20px]">
            <Button href="/api/auth/login">Entrar</Button>
            <Button href="/shop">Sólo quiero mirar</Button>
          </div>
        </div>
      )}

      {user && !userProfile && (
        <>
          {/* <NavBar mode="mainNav" /> */}
          <div tw="h-full flex flex-col justify-center">
            <div tw="flex flex-col justify-center mx-auto pb-4">
              <Title variant="noUserID">{user.name}</Title>
            </div>
            <div tw="flex flex-col gap-4 z-10">
              <Button href="/register_user">Completa tu perfil</Button>
            </div>
            {/* <div tw="z-0 h-[160px] w-[160px] mt-[360px] ml-[80px] absolute rounded-full">

            </div> */}
          </div>
        </>
      )}

      {user && userProfile && (
        <>
          <NavBar mode="mainNav" />
          <div tw="h-full flex flex-col justify-center">
            <div tw="flex flex-col justify-center mx-auto pb-4">
              <Title variant="userID">{userProfile.name}</Title>
            </div>
            <div tw="flex flex-col gap-4 z-10">
              <Button href="/shop">Comprar</Button>
              <Button href="/register_product">Vender</Button>
            </div>
            {/* <div tw="z-0 h-[160px] w-[160px] mt-[360px] ml-[80px] absolute opacity-95">

            </div> */}
          </div>
        </>
      )}
    </Body>
  )
}
