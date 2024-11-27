"use client"
import NavBar from "@/components/NavBar";
import { Flex, Box, Text, Button, background } from "@chakra-ui/react"
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PiCaretDoubleUpBold, PiCaretDoubleLeftBold, PiCaretDoubleRightBold  } from "react-icons/pi";
import { FaDiscord, FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { BiLoaderCircle } from "react-icons/bi";
import { SiBattledotnet } from "react-icons/si";


const HomeScreen = () => {

    const [display, setDisplay] = useState<boolean>(true);
    
    const [translate, setIsTranslate] = useState<boolean>(true);
    const [activate , setActivate ] = useState<boolean>(false);
    const [transition , setTransition] = useState<boolean>(false);
    const [isLoad , setLoad] = useState<boolean>(true);


    const text = "Initializing...";
    


    const typewriterText = useRef<HTMLDivElement>(null);
    let i = 0;

    const switchDisplay =()=> {
        setTimeout(()=>{
            setDisplay(false);
        },2000);
    }

    useEffect(() => {
        const typewriter = () => {
          if (i < text.length) {
            if (typewriterText.current) {
              typewriterText.current.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(typewriter, 200); // adjust the speed here
          }
        };
        typewriter();
        sessionStorage.setItem('display', JSON.stringify(display))
        const value = sessionStorage.getItem('display');
        console.log(value)
        if(value) {
            setDisplay(false)
        } else{ 
            switchDisplay()
        }
        
    }, []);
    
      
    
    // useEffect(()=>{
    //     
    //     if(value){
    //         
    //     }
    // },[])
    
    

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

    const LinkedIn = "https://www.linkedin.com/in/timilehin-ogedengbe-bb6a3013a/";
    const X = "https://x.com/dashingtimmy?s=21";
    const Github = "https://www.github.com/bagwells";
    const Discord = "https://www.discord.com/users/873643509314363443";


    return ( 
        <>
            <Box 
                bg={'var(--Background)'}
                width={'100vw'} h={'100vh'}
                className="Ojuju"
            >
                <Flex display={`${display ? "none" : "flex"}`}>
                    <NavBar/>
                </Flex>
                {   display ? 
                    <Box 
                        zIndex={100}
                        bg={'var(--Background)'}
                        // bgImage={'/BackgroundImage.png'} bgSize={'cover'} bgPos={'center'}
                        w={'100vw'} h={'100vh'}
                        display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                        className="Ojuju" padding={{base:'1rem', lg:'3rem'}} gap={{base:'20px', lg:'40px'}}
                    >
                        <Box 
                            color={'var(--secColor)'}
                            fontSize={'80px'}    
                        >
                            <SiBattledotnet className="spin"/>
                        </Box>
                        <Text
                            fontSize={{base:'24px', lg:'48px'}}
                            fontWeight={700}
                            color={'var(--secColor)'}
                            className="typewriter"
                            id="typewriter-text"
                            ref={typewriterText}
                        >
                            
                        </Text>

                        {/* <Flex gap={{base:'12px',lg:'20px'}} alignItems={'center'}>
                            <Flex overflow={"hidden"} w={{base:'60px',lg:'160px'}} justifyContent={'start'}>
                                <PiCaretDoubleRightBold className={`iconSize ${translate ? "" :"translatex"}`}/>
                            </Flex>
                            <Button onClick={switchDisplay}
                                onMouseEnter={TranslateOn} onMouseLeave={TranslateOn}
                                bg={'var(--secColor)'} color={'var(--Background)'} fontSize={{base:'16px',lg:'24px'}} fontWeight={700} borderRadius={'12px'}
                                h={{base:'48px',lg:'56px'}} _hover={{border:"2px solid var(--secColor)", bg:"var(--Background)", color:"var(--secColor)"}} className="Lato"
                            >
                                Into the matrix
                            </Button>
                            <Flex overflow={'hidden'} w={{base:'60px',lg:'160px'}} justifyContent={'end'}>
                                <PiCaretDoubleLeftBold className={`iconSize  ${translate ? "" : "translate-x" }`}/>
                            </Flex>
                        </Flex> */}
                    </Box>
                    :
                    <Box position={'relative'}
                        bg={'var(--Background)'}
                        w={'100vw'} h={{lg:'100vh'}} py={{base:'5rem',lg:'4em'}}
                        className="Ojuju"
                    >
                        <Flex position={'fixed'} zIndex={50}
                            alignItems={'center'} top={{base:200, lg:300}} left={{base:-130, md:'-180', xl:-200}}
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
                                <Box display={{base:'flex', lg:'none'}} w={'100%'}>
                                    <Image src={'/Illustration-.png'} alt="" width={500} height={500} />
                                </Box>
                                <Flex display={{base:'none', lg:'flex'}} w={'100%'}>
                                    <Image src={'/Illustration-.png'} alt="" width={2000} height={2000}/>
                                </Flex>
                                {/* <Box className="box" overflow={"hidden"} bgImage={'/Home.png'} bgPos={'center'}
                                    bgSize={'cover'}
                                    w={{base:'280px', sm:'300px', lg:'500px'}}
                                    h={{base:'300px', sm:'400px', lg:'500px'}}
                                    border={'4px solid var(--secColor)'} borderRadius={'12px'}
                                >
                                    {   isLoad ? 
                                        <Box display="flex" bg={'var(--Background)'} w={'100%'} h={'100%'} alignItems={'center'} justifyContent={'center'}>
                                            <BiLoaderCircle className="loader"/>
                                        </Box>
                                        :
                                        <Box w={'100%'} h={'100%'} backdropFilter={'grayscale(100%)'}/>
                                    }
                                </Box> */}
                            </Flex>
                            <Flex flexDir={"column"} alignItems={{base:'center', xl:'start'}} width={{base:'100%', lg:'50%'}} gap={8}
                                px={{base:'',xl:'2em'}}
                            >
                                <Flex flexDir={'column'} gap={'6px'} textAlign={{base:'center',xl:'start'}}>
                                    <Text fontSize={{base:'24px', lg:'48px'}} fontWeight={500}
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

                }
            </Box>
        </> 
    );
}
 
export default HomeScreen;