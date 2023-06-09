import Image from "next/image";

const PortifolioContent = () => {

    return (
        <>
            <div className=' flex flex-col gap-10'>
                <Image src='/pomo-react-project.png' alt={'Projetos'} width={340} height={210}/>
                <Image src='/pomo-react-project.png' alt={'Projetos'} width={340} height={210}/>
                <Image src='/pomo-react-project.png' alt={'Projetos'} width={340} height={210}/>
                <Image src='/pomo-react-project.png' alt={'Projetos'} width={340} height={210}/>

            </div>
        </>
    )
}
export default PortifolioContent;