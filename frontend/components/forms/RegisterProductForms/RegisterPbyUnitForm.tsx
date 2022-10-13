import tw from "twin.macro";
import { Input } from "../form_widgets/Input";
import { Button } from "../../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { useProduct } from "../../../hooks/useProduct";
import { ToggleMassUnit } from "../form_widgets/ToggleMassUnit";

export const RegisterPbyUnitForm = () => {

  const methods = useForm({
    mode: "onChange",
    defaultValues:{name:'',quantity:'',price:'',expiration:'',description:''}
  })

  const { create_product } = useProduct()

  const { formState } = methods
  console.log(formState.errors)

  const handle_submit = methods.handleSubmit(async(data)=>{
    await create_product(data)
  })  

  return(  
    <>
      <div tw="h-[75%]">
        <div tw="flex flex-col gap-4 mt-[100px]">
          <Input 
            label="nombre"
            error={formState.errors.name?.message.toString()}
            {...methods.register("name",{
              required: true,
            })}
          />
          <Input 
            label="cantidad"
            error={formState.errors.quantity?.message.toString()}
            {...methods.register("quantity",{
              required: true,
            })}
          />
          <Input 
            label="precio"
            error={formState.errors.price?.message.toString()}
            {...methods.register("price",{
              required: true,
            })}
          />
          <Input 
            label="caducidad"
            error={formState.errors.expiration?.message.toString()}
            {...methods.register("expiration",{
              required: true,
            })}
          />
          <Input 
            label="descripcion"
            error={formState.errors.description?.message.toString()}
            {...methods.register("description",{
              required: true,
            })}
          />
          
        </div>
      </div>  
      <div>
        <Button onClick={() => handle_submit()}>
          {formState.isValid?  'enviar':'complete los campos'}
        </Button>
      </div>
    </>
  )
}