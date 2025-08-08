

export function StickyHeader(){
    type ProfileInfoLabelProps = {
    label: 'Categoria' | 'Fluxo' | 'Data' | 'Locomoção' | 'Endereço'| 'hora';
    className?: string;
  
};
function ProfileInfoLabel({ label, className }: ProfileInfoLabelProps) {
  const style = className ?? 'font-semibold text-gray-600';
  return <span className={style}>{label}</span>
   
}

    return(
         <div
          className="grid  capitalize  text-[0.8rem] sm:flex sm:flex-col sm:justify-around md:text-[0.9rem] lg:text-[1.05rem]"
          
        >
          {/* Cabeçalhos */}
          <div className=" gap-3.5 grid grid-cols-6">
          <ProfileInfoLabel label="Categoria" />
          <ProfileInfoLabel label="Fluxo" />
          <ProfileInfoLabel label="Data" />
          <ProfileInfoLabel label="hora" />
          <ProfileInfoLabel label="Locomoção" />
          <ProfileInfoLabel label="Endereço" />
          </div>
        </div>

    )
}