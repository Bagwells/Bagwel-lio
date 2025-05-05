"use client"
import { Flex, Box, Text, Button, background } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { FaDiscord, FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useDetails } from "@/hook/profile";


const HomeScreen = () => {
    const {X, LinkedIn, Discord, Github } = useDetails();
    const [display, setDisplay] = useState<boolean>(true);
    const [translate, setIsTranslate] = useState<boolean>(true);
    const [activate , setActivate ] = useState<boolean>(false);
    const [transition , setTransition] = useState<boolean>(false);
    const [isLoad , setLoad] = useState<boolean>(true);
    
    
    
    
    

    const TranslateOn = ()=> {
        setIsTranslate(prevState => !prevState);
    }

    const activateGlow =()=> {
        setTransition(prevState => !prevState);
        setTimeout(()=>{
            setActivate(prevState => !prevState);
        },1500)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        },3000)
    },[])

  


    return ( 
        <>
            <Box 
                bg={'var(--Background)'}
                width={'100vw'} h={{base:'100svh', lg:'100vh'}}
                className="Ojuju"
            >
                    <Box position={'relative'}
                        bg={'var(--Background)'}
                        w={'100vw'} h={{lg:'100vh'}} py={{base:'5rem',lg:'4em'}}
                        className="Ojuju"
                    >
                        <Flex position={'fixed'} zIndex={50}
                            alignItems={'center'} top={{base:200, lg:300}} left={{base:-145, md:'-180', xl:-200}}
                            w={'fit-content'} gap={'10px'} className="rotate"
                        >
                            <Flex position={'relative'} bg={'var(--TextCol)'} borderRadius={'2px'}
                                w={{base:'200px',lg:'400px'}} h={'2px'} overflow={'hidden'}
                            >
                                <Flex position={'absolute'} bg={'var(--secColor)'} borderRadius={'2px'}
                                    w={{base:'200px',lg:'400px'}} h={'2px'}
                                    className={`${transition ? "translateFront":"translateBack"}`}
                                />
                            </Flex>
                            <Flex alignItems={'center'}
                                gap={'10px'} zIndex={50}
                            >
                                <Link href={Github}>
                                    <FaSquareGithub className={`${activate ? "icon ":"unIcon"} rotateback`}/>
                                </Link>
                                <Link href={X}>
                                    <FaSquareXTwitter className={`${activate ? "icon ":"unIcon"} rotateback`}/>
                                </Link>
                                <Link href={LinkedIn}>
                                    <FaLinkedin className={`${activate ? "icon ":"unIcon"} rotateback`}/>
                                </Link>
                                <Link href={Discord}>
                                    <FaDiscord className={`${activate ? "icon ":"unIcon"} rotateback`}/>
                                </Link>
                            </Flex>
                        </Flex>

                        <Flex direction={{base:'column', xl:'row'}}
                            w={'100%'} h={'100%'} alignItems={'center'}
                            px={{base:'2rem',lg:'10rem'}} justifyContent={'center'}
                            gap={{base:'24px',lg:'60px'}}
                            py={{base:'2rem', lg:'10rem'}}
                        >
                            <Flex width={{base:'100%',lg:'50%'}} alignItems={'center'} justifyContent={'center'}>
                                <Box display={{base:'flex', md:'none'}} w={'100%'}>
                                    <Image src={'/Illustration-.png'} alt="" width={500} height={500} />
                                </Box>
                                <Flex display={{base:'none', md:'flex'}} w={'100%'}>
                                    <Image src={'/Illustration-.png'} alt="" width={2000} height={2000}/>
                                </Flex>
                            </Flex>
                            <Flex flexDir={"column"} alignItems={{base:'center', xl:'start'}} width={{base:'100%', lg:'50%'}} gap={8}
                                px={{base:'',xl:'2em'}}
                            >
                                <Flex flexDir={'column'} gap={'6px'} textAlign={{base:'center',xl:'start'}}>
                                    <Text fontSize={{base:'24px', xl:'48px'}} fontWeight={500}
                                        className="Lato" color={'var(--TextCol)'}
                                    >
                                        Hi, it's me
                                    </Text>
                                    <Text
                                        fontSize={{base:'36px', xl:'72px'}}
                                        fontWeight={700}
                                        color={'var(--secColor)'}
                                        textAlign={'center'}
                                    >
                                        {/* <Text as="span"
                                            fontSize={{base:'24px',xl:'48px'}}
                                            color="var(--TextCol)"
                                            className="Lato"
                                        >
                                            {text}
                                        </Text> */}
                                            Bagwells
                                        {/* <Text as="span"
                                            fontSize={{base:'24px',xl:'48px'}}
                                            color="var(--TextCol)"
                                            className="Lato"
                                        >
                                            {text2}
                                        </Text> */}
                                    </Text>
                                    <Text fontSize={{base:'24px',xl:'32px'}} fontWeight={400} color={'var(--TextCol)'}
                                        className="Lato"
                                    >
                                        a 
                                        <Text as="span" color={'var(--secColor)'} fontWeight={600} fontSize={{base:'30px',xl:'36px'}} px={'4px'}>
                                            Front-End
                                        </Text>
                                        developer
                                    </Text>
                                </Flex>
                                <Link href={'/inventory'}>
                                    <Button onMouseEnter={activateGlow} onMouseLeave={activateGlow}
                                         display={'flex'} alignItems={'center'}
                                        bg={'var(--secColor)'} color={'var(--Background)'} fontSize={{base:'16px',lg:'24px'}} fontWeight={500} borderRadius={'12px'}
                                        h={{base:'48px',lg:'56px'}} _hover={{border:"2px solid var(--secColor)", bg:"var(--Background)", color:"var(--secColor)"}} className="Lato"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Box>
            </Box>
        </> 
    );
}
 
export default HomeScreen;