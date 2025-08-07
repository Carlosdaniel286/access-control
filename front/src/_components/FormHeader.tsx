
type FormHeaderProps ={
    title?:string
    subtitle?:string
}

export function FormHeader ({title,subtitle}:FormHeaderProps){
    return(
         <header className="mb-6 flex py-3 justify-between gap-4 sm:gap-6 sm:mb-8">
         <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">
            {subtitle}
          </p>
        </div>
      </header>
    )
}