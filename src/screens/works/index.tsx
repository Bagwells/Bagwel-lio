import NavBar from "@/components/navBar";
import { Box, Circle, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { SiDailydotdev } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { SiSpeedtest } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Image from "next/image";
import { useDetails } from "@/hook/profile";

const WorkScreen = () => {

    const {Github } = useDetails();


    const work = [
        {
            id:1,
            Title:'Coverai',
            picture:'/Coverai.png',
            open:'https://coverai.co'
        },
        {
            id:2,
            Title:'PocketFood',
            picture:'/pocketfood.png',
            open:'https://pocketfood.io'
        },
        {
            id:3,
            Title:'e-Swift',
            picture:'/eSwift.png',
            open:'https://www.eswiftpropertymart.ng/'
        },
        {
            id:4,
            Title:'WMTA!',
            picture:'/WMTA.png',
            open:'https://beta.whomadethisartwork.com/'
        },
        {
            id:5,
            Title:'Casa Central',
            picture:'/Casa-central.png',
            open:'https://casacentral.cc'
        },
        {
            id:6,
            Title:'Aton',
            picture:'/Aton.png',
            open:'https://aton-pre.vercel.app/'
        },
        {
            id:7,
            Title:'SkillBit',
            picture:'/Skillbit.png',
            open:'https://skillbit-mkt6.vercel.app/'
        },
        {
            id:8,
            Title:'eChannel-Class',
            picture:'/Channel-class.png',
            open:''
        },
    ]
    return ( 
        <>
            <Box display={'flex'} flexDir={'column'}
                bg={'var(--Background)'}
                width={'100vw'} height={{base:'100svh',lg:'100vh'}}
                className="Ojuju"  p={{base:'1rem',lg:'8em'}}
                py={{base:'5rem',lg:'6rem'}} gap={'12px'}
            >
                <Flex w="100%" 
                    alignItems="end" justifyContent="space-between"
                >
                    <Text fontSize={{base:"24px", lg:"40px"}}
                        fontWeight={700} color={'var(--secColor)'}
                    >
                        xP
                    </Text>
                    <Link href={Github} target="_blank" rel="noreferrer noopener"
                        fontSize={{base:'24px', lg:'36px'}} _hover={{fontSize:{base:'28px',lg:"40px"}}} color={'var(--secColor)'} className="transitionlag">
                        <FaGithub />
                    </Link>
                </Flex>
                <Flex flexDirection={{base:'column', lg:'row'}} w={'100%'}>
                    <Box display={{base:'',xl:'none'}} position={"relative"} w={"100%"} h={'calc(80vh - 100px)'} gap={"12px"} 
                        overflow={'auto'} borderTop={'2px solid var(--TextCol)'} borderBottom={'2px solid var(--TextCol)'}
                    >   
                        { work?.map((entry)=>(
                            <Box position={'relative'} display={'flex'}
                                key={entry?.id} border={'2px solid var(--secColor)'} borderRadius={'12px'}
                                w={'100%'} my={'1em'} overflow={'clip'} h={'280px'}
                            >
                                <img src={`${entry?.picture}`} alt="" className="work"/>
                                <Flex position={'absolute'} alignSelf={'flex-end'} p={'0.1em'} pr={'0.5em'} border={'0.5px solid var(--secColor)'} borderRadius={'24px'} m={'12px'} bg={'#00000040'} backdropFilter={'blur(5px)'} w={'fit-content'} h={'max-content'}
                                    alignItems="center" gap={'8px'} overflow={'hidden'}>
                                    <Flex alignItems="center" p={'8px'} 
                                        border={'1px solid var(--secColor)'} 
                                        justifyContent="center" 
                                        borderRadius={'1000px'}
                                        className="pulse"
                                    >
                                        <Link href={`${entry?.open}`} target="_blank" rel="noreferrer noopener" cursor={'pointer'}>
                                            <SiDailydotdev className="iconSize"/>
                                        </Link>
                                    </Flex>
                                    <Text fontSize={'16px'} fontWeight={600} color={'var(--TextCol2)'} className="Lato">
                                        {entry?.Title}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}
                    </Box>

                    {/* Web */}
                    <Box display={{base:'none',xl:'flex'}}
                        w={'100%'}
                        h={'55vh'}
                        gap={'16px'}
                        px={'1em'}
                    >
                        {   work?.map((entry)=>(
                                <Box key={entry?.id}
                                    bgImage={entry?.picture} bgSize={'cover'} bgPos={'center'} 
                                    border={'2px solid var(--TextCol)'} borderRadius={'12px'}
                                    className="Lato card" overflow={'hidden'}
                                    _hover={{border:'4px solid var(--secColor)'}}
                                >
                                    <Flex bgColor={"var(--Backgroundlite)"}
                                        w={'100%'} h={'100%'}
                                        alignItems={'flex-end'}
                                        borderRadius={'12px'} className="innercard"
                                        p={'16px'} 
                                    >
                                        <Flex alignItems="center" gap={'8px'} overflow={'hidden'}>
                                            <Flex alignItems="center" p={'8px'} 
                                                border={'2px solid var(--secColor)'} 
                                                justifyContent="center" 
                                                borderRadius={'1000px'}
                                            >
                                                <Link href={`${entry?.open}`} target="_blank" rel="noreferrer noopener" cursor={'pointer'}>
                                                    <SiDailydotdev className="iconSize pulse"/>
                                                </Link>
                                            </Flex>
                                            <Text fontSize={'24px'} fontWeight={600} color={'var(--TextCol2)'} className="Lato title">
                                                {entry?.Title}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Box>
                            ))
                        }
                    </Box>
                </Flex>
                <Flex alignContent={'center'} gap={'24px'} justifyContent={'center'} mt={{base:'0.5rem', lg:'2rem', xl:'2rem'}}>
                    <Flex flexDir={'column'} gap={'6px'} alignItems={'center'}>
                        <GrOptimize className="icon"/>
                        <Text fontSize={'16px'} fontWeight={500} color="var(--secColor)" className="Lato">
                            Optimize
                        </Text>
                    </Flex>
                    <Flex flexDir={'column'} gap={'6px'} alignItems={'center'}>
                        <MdOutlineMiscellaneousServices className="icon"/>
                        <Text fontSize={'16px'} fontWeight={500} color="var(--secColor)" className="Lato">
                            Maintenance
                        </Text>
                    </Flex>
                    <Flex flexDir={'column'} gap={'6px'} alignItems={'center'} >
                        <SiSpeedtest className="icon"/>
                        <Text fontSize={'16px'} fontWeight={500} color="var(--secColor)" className="Lato">
                            Fast Service
                        </Text>
                    </Flex>
                    
                </Flex>
            </Box>
        </> 
    );
}
 
export default WorkScreen;