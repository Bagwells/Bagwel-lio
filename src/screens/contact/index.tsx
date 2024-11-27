import NavBar from "@/components/NavBar"
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FaDiscord, FaLinkedin, FaSquareGithub, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6"
import { SiMinutemailer } from "react-icons/si"
import { TbSocial } from "react-icons/tb"





const ContactScreen = () => {
    const LinkedIn = "https://www.linkedin.com/in/timilehin-ogedengbe-bb6a3013a/";
    const X = "https://x.com/dashingtimmy?s=21";
    const Github = "https://www.github.com/bagwells";
    const Discord = "";

    const email = "mailto:timmyayomidebagwells@outlook.com";
    const codes = "{codes}";

    return ( 
        <>
            <NavBar/>
            <Box display={'flex'} flexDir={'column'}
                bg={'var(--Background)'}
                width={'100vw'} minH={{base:'100vh',lg:'100vh'}}
                className="Ojuju"  px={{base:'1rem',lg:'6em'}}
                py={{base:'5rem', lg:'6rem'}} gap={'24px'}
            >
                <Flex w="100%" 
                    alignItems="center" justifyContent="space-between"
                >
                    <Text fontSize={{base:"24px", lg:"40px"}}
                        fontWeight={700} color={'var(--secColor)'}
                    >
                        Contact
                    </Text>
                    <Flex alignItems="end" gap="12px">
                        <Link href={email} target="_blank" rel="noreferrer noopener"
                            fontSize={{base:'24px',lg:'36px'}} _hover={{fontSize:{base:'28px',lg:"40px"}}} color={'var(--secColor)'} className="transitionlag">
                            <SiMinutemailer />
                        </Link>
                        <Link href={Discord} target="_blank" rel="noreferrer noopener"
                            fontSize={{base:'24px',lg:'36px'}} _hover={{fontSize:{base:'28px',lg:"40px"}}} color={'var(--secColor)'} className="transitionlag">
                            <FaXTwitter />
                        </Link>
                    </Flex>
                </Flex>
                
                <Flex
                    direction={'column'} mt={{base:'4em',lg:'5em'}} justifyContent={{base:'',lg:'center'}} alignItems={'center'}
                >
                    <Flex direction={{base:'column'}} maxW={'1200px'} bg={'transparent'}  borderRadius={'12px'}
                        border={'2px solid var(--secColor)'} p={{base:'8px',md:'24px'}} py={{base:'24px'}}gap={'24px'}
                    >
                        <Flex w={'100%'} justifyContent={'space-between'}>
                            <Box w={'fit-content'} fontSize={'80px'} textColor={'var(--secColor)'} >
                                <TbSocial />
                            </Box>
                            <Image src={"/Illustration.png"} alt={""}   
                                width={200} height={200}
                            />
                        </Flex>
                        
                        <Flex direction={'column'} justifyContent={'space-between'}
                            p={{base:'8px',md:'24px'}} 
                        >
                            <Flex direction={'column'} gap={'8px'}>
                                <Text fontSize={{base:'32px',lg:'48px'}}  color={'var(--secColor)'}
                                    className="Lato" fontWeight={700}   
                                >
                                    Bagwells
                                </Text>
                                <Text fontSize={{base:'18px',lg:'28px'}}  color={'var(--TextCol2)'}
                                    className="Lato" fontWeight={600}   
                                >
                                   a <Text as="span" color={'var(--secColor)'} fontSize={{base:'20px',lg:'28px'}} fontWeight={700}>Front-end</Text> Developer
                                </Text>
                            </Flex>
                            <Text fontSize={{base:'16px',lg:'24px'}}  color={'var(--TextCol)'}
                                    className="Lato" fontWeight={600}   
                            >
                                Turning your ideas <Text as="span" color={'var(--secColor)'}>(designs)</Text> into a reality <Text as='span' color={'var(--secColor)'} > {codes}</Text>
                            </Text>
                            <Flex alignItems="center" gap={'12px'} mt={'8px'}>
                                <Link href={Github} target="_blank" rel="noreferrer noopener">
                                    <FaSquareGithub className="unIcon1"/>
                                </Link>
                                <Link href={X} target="_blank" rel="noreferrer noopener">
                                    <FaSquareXTwitter className="unIcon1"/>
                                </Link>
                                <Link href={LinkedIn} target="_blank" rel="noreferrer noopener">
                                    <FaLinkedin className="unIcon1"/>
                                </Link>
                                <Link href={Discord} target="_blank" rel="noreferrer noopener">
                                    <FaDiscord className="unIcon1"/>
                                </Link>
                                <Link href={email} target="_blank" rel="noreferrer noopener">
                                    <SiMinutemailer className="unIcon1"/>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </> 
    );
}
 
export default ContactScreen;