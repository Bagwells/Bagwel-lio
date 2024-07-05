import NavBar from "@/components/NavBar";
import { Box, Circle, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { SiDailydotdev } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { SiSpeedtest } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Image from "next/image";

const WorkScreen = () => {

    const Github = "https://www.github.com/bagwells";

    const work = [
        {
            id:1,
            Title:'SpendSmart',
            picture:'/spendsmart.png',
        },
        {
            id:2,
            Title:'WMTA!',
            picture:'/WMTA.png',
        },
        {
            id:3,
            Title:'Casa Central',
            picture:'/Casa-central.png',
        },
        {
            id:4,
            Title:'Jaiye',
            picture:'/Jaiye.png',
        },
        {
            id:5,
            Title:'eChannel-Class',
            picture:'/Channel-class.png',
        },
        {
            id:6,
            Title:'SkillBit',
            picture:'/Skillbit.png',
        },{
            id:7,
            Title:'Prud-Foli0',
            picture:'/Prud-Folio.png',
        },
    ]
    return ( 
        <>
            <NavBar/>
            <Box display={'flex'} flexDir={'column'}
                bg={'var(--Background)'}
                width={'100vw'} minHeight={{base:'100vh',lg:'100vh'}}
                className="Ojuju"  p={{base:'1rem',lg:'8em'}}
                py={{base:'5rem',lg:'6em'}} gap={'24px'}
            >
                <Flex w="100%" 
                    alignItems="end" justifyContent="space-between"
                >
                    <Text fontSize={{base:"24px", lg:"40px"}}
                        fontWeight={700} color={'var(--secColor)'}
                    >
                        Works
                    </Text>
                    <Link href={Github} target="_blank" rel="noreferrer noopener"
                        fontSize={{base:'24px',lg:'36px'}} _hover={{fontSize:{base:'28px',lg:"40px"}}} color={'var(--secColor)'} className="transitionlag">
                        <FaGithub />
                    </Link>
                </Flex>
                <Flex flexDirection={{base:'column', lg:'row'}} w={'100%'}>
                    <Box display={{base:'',lg:'none'}} position={"relative"} w={"100%"} h={'540px'} gap={"12px"} 
                        overflow={'auto'} borderTop={'2px solid var(--TextCol)'} borderBottom={'2px solid var(--TextCol)'}
                    >   
                        { work?.map((entry)=>(
                            <Box position={'relative'}
                                key={entry?.id} border={'2px solid var(--secColor)'} borderRadius={'12px'}
                                w={'100%'} my={'1em'} overflow={'clip'} h={'220px'}
                            >
                                <img src={`${entry?.picture}`} alt="" className="work"/>
                                <Flex position={'absolute'} inset={0} alignSelf={'flex-end'} pr={'1em'} m={'12px'} bg={'#00000080'} backdropFilter={'blur(5px)'} w={'fit-content'} h={'max-content'}
                                    alignItems="center" gap={'8px'} overflow={'hidden'}>
                                    <Flex alignItems="center" p={'8px'} 
                                        border={'1px solid var(--secColor)'} 
                                        justifyContent="center" 
                                        borderRadius={'1000px'}
                                    >
                                        <SiDailydotdev className="iconSize"/>
                                    </Flex>
                                    <Text fontSize={'16px'} fontWeight={600} color={'var(--TextCol2)'} className="Lato">
                                        {entry?.Title}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}
                    </Box>

                    {/* Web */}
                    <Box display={{base:'none',lg:'flex'}}
                        w={'100%'}
                        h={'500px'}
                        gap={'16px'}
                        px={'1em'}
                    >
                        {   work?.map((entry)=>(
                                <Box key={entry?.id}
                                    bgImage={entry?.picture} bgSize={'cover'} bgPos={'center'} 
                                    border={'2px solid var(--TextCol)'} borderRadius={'12px'}
                                    className="Lato card" overflow={'hidden'}
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
                                                <SiDailydotdev className="iconSize"/>
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
                <Flex alignContent={'center'} gap={'24px'} justifyContent={'center'} mt={{base:'1em',lg:'4em'}}>
                    <Flex flexDir={'column'} gap={'8px'} alignItems={'center'}>
                        <GrOptimize className="icon"/>
                        <Text fontSize={'16px'} fontWeight={500} color="var(--secColor)" className="Lato">
                            Optimize
                        </Text>
                    </Flex>
                    <Flex flexDir={'column'} gap={'8px'} alignItems={'center'}>
                        <MdOutlineMiscellaneousServices className="icon"/>
                        <Text fontSize={'16px'} fontWeight={500} color="var(--secColor)" className="Lato">
                            Maintenance
                        </Text>
                    </Flex>
                    <Flex flexDir={'column'} gap={'8px'} alignItems={'center'}>
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