import tw from "twin.macro"
import { ProductList } from "../components/forms/ShopListItems/ProductList";
import { ProductorList } from "../components/forms/ShopListItems/ProductorList";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import { ButtonToggle } from "../components/shared/ButtonToggle";

// const ButtonToggle: React.FC<{
//   children: string;
//   href: string;
//   onClick: () => void;
// }> = ({ children, href, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       tw="px-[20px] bg-transparent outline-none relative text-center"
//     >
//       {children}
//     </button>
//   )
// }

const Page = () => {
  const [toggle, settoggle] = useState('left')

  return (
    <>
      <div tw="h-[114px] w-full">
        <div tw="h-full mx-auto gap-10 w-10/12 overflow-hidden">
          <NavBar mode="shopNav" href="/" />
          <div tw="h-[456px] mt-[76px]">
            <div tw="w-full h-[36px]flex justify-between relative">
              <div
                css={[
                  toggle == "left" && tw`absolute mt-[34px] w-[50%] h-[4px] bg-brand-300`,
                  toggle == "right" && tw`absolute mt-[34px] ml-[50%] w-[50%] h-[4px] bg-brand-300`
                ]}
                style={{ transition: "0.5s cubic-bezier(0,0,0,1)" }}></div>
              <div></div>
              <ButtonToggle
                onClick={() => settoggle("left")}
              >Producto</ButtonToggle>
              <ButtonToggle
                onClick={() => settoggle("right")}
              >Vendedor</ButtonToggle>
            </div>
          </div>
        </div>
      </div>

      <div tw="h-full w-full bg-brand-100">
        <div tw="h-[81%] mx-auto w-10/12 overflow-hidden">
          <div tw="w-[255px] h-full overflow-scroll">
            {toggle == "left" && <ProductList />}
            {toggle == "right" && <ProductorList />}

          </div>
        </div>
      </div>
    </>
  )
}

export default Page;



