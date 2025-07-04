"use client"
import { useDetails } from "@/hook/profile";
import { Box, Button, Flex, Link,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";


const AboutScreen = () => {

    const [loadXP, setLoadXP] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setLoadXP(true)
        },1500)

    },[])

    const XP = [
        {
            id: 1,
            skill:'HTML',
            translate:"hundred",
            value: 100
        },
        {
            id: 2,
            skill:'CSS',
            translate:"hundred",
            value:100
        },
        {
            id:3,
            skill:'JavaScript',
            translate:"ninety",
            value: 90
        },
        {
            id:4,
            skill:'TypeScript',
            translate:"eighty",
            value: 80
        },
        {
            id: 5,
            skill:'React/Next',
            translate:"eighty",
            value:80
        },
        {
            id: 6,
            skill:'Vue',
            translate:"forty",
            value:40
        },
        {
            id: 7,
            skill:'React Native',
            translate:"fifty",
            value:50
        },
        {
            id: 8,
            skill:'Figma',
            translate:"eighty",
            value:70
        },
        {
            id: 9,
            skill:'??',
            translate:"translateBack",
            value:0
        },
    ]

    const resumeDownload =()=> {
        const resumeUrl = "/Timmy-resume.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
    }
    const {LinkedIn } = useDetails();

    
    return ( 
        <>
            <Box display={'flex'} flexDir={'column'}
                bg={'var(--Background)'}
                width={'100vw'} minH={{base:'', xl:'100vh'}}
                className="Ojuju"  p={{base:'1rem', lg:'6rem', xl:'8rem'}}
                py={{base:'4.8rem', xl:'6rem'}} gap={'1rem'}
            >
                <Flex w="100%"
                    alignItems="end" justifyContent="space-between"
                >
                    <Text fontSize={{base:"32px", lg:'36px', xl:"48px"}}
                        fontWeight={700} color={'var(--secColor)'}
                    >
                        Inventory
                    </Text>
                    <Link href={LinkedIn} target="_blank" rel="noreferrer noopener"
                        fontSize={'42px'} _hover={{fontSize:"48px"}} color={'var(--secColor)'} className="transitionlag">
                        <FaLinkedin />
                    </Link>
                </Flex>
                <Flex w={'100%'} h={'100%'} flexDirection="column">
                    <Flex flexDir={{base:'column', lg:'row'}} justifyContent={'space-between'} px={{base:'4px',lg:'16px'}} gap={{base:4, lg:20}}>
                        <Flex w={{base:'100%',lg:'40%'}} justifyContent={'center'} flexDir={'column'} gap={'12px'}>
                            <Text fontSize={{base:'14px',lg:'16px', xl:"20px"}}
                                textAlign={'justify'} fontWeight={500}
                                className="Lato" color={'var(--TextCol2)'}
                            >
                                As a creative and detail-driven Frontend developer with a quarter of decade experience
                                I craft engaging user interfaces and seamless user experiences for web applications and 
                                websites. With expertise in HTML, CSS, JavaScript, and various frameworks, I make your designs a reality
                                ensure a smooth path for users. 
                            </Text>
                            <Text fontSize={{base:'14px',lg:'16px', xl: "20px"}}
                                textAlign={'justify'} fontWeight={500}
                                className="Lato" color={'var(--TextCol2)'}
                            >
                                Passionate about staying up-to-date with industry trends and best practices, I strive to improve my skills and deliver
                                high quality solutions that exceeds expectations and fully adaptive to any technology and ecosystem. 
                            </Text>
                            <Text fontSize={{base:'14px',lg:'16px', xl:"20px"}}
                                textAlign={'justify'} fontWeight={500}
                                className="Lato" color={'var(--TextCol2)'}
                            >
                                
                                I bring a strong work ethic and unwavering commitment to every project, ensuring timely completion and exceeding expectations. 
                                With focus on quality, integrity, and a continuous improvement, I strive to make a meaningful impact in everything I do. 
                                Let's achieve greatness together, one task at a time.
                            </Text>

                            <Box display={{base:'none',lg:'flex'}}w={'100%'} alignItems={'center'} mt={'2em'}>
                                <Button onClick={resumeDownload}
                                    display={'flex'} alignItems={'center'} gap={'4px'}
                                    bg={'var(--secColor)'} color={'var(--Background)'} fontSize={{base:'16px',lg:'24px'}} fontWeight={500} borderRadius={'12px'}
                                    h={{base:'48px',lg:'56px'}} _hover={{border:"2px solid var(--secColor)", bg:"var(--Background)", color:"var(--secColor)"}} className="Lato"
                                >
                                    <FiDownload/> Download Resume
                                </Button>
                            </Box>

                        </Flex>
                        <Flex flexDir={'column'} w={{base:'100%',lg:'60%'}} gap={'16px'}>
                            <Text fontSize={{base:"20px", lg:"24px"}}
                                fontWeight={700} color={'var(--secColor)'}
                            >
                                Skills
                            </Text>
                            <Flex flexDir={'column'} gap={'12px'}>
                                {   XP.map((entry)=>(
                                    <Flex key={entry?.id}
                                        flexDir={'column'} w={'100%'} gap={'8px'} py={'6px'}
                                    >
                                        <Flex w={'100%'} alignItems="center" justifyContent={'space-between'}>
                                            <Text fontSize={{base:'14px',lg:'20px'}} fontWeight={600} color={'var(--secColor)'} className="Lato">
                                                {entry?.skill}
                                            </Text>
                                            <Text fontSize={{base:'12px',lg:'18px'}} fontWeight={600} color={'var(--secColor)'} className="Lato">
                                                {entry?.value}
                                                <Text as="span" fontSize={'16px'} color={'var(--TextCol)'} fontWeight={500} className="Ojuju">points</Text>
                                            </Text>
                                        </Flex>
                                        <Flex position={'relative'} bg={'var(--TextCol)'} borderRadius={'2px'}
                                            w={'100%'} h={'4px'} overflow={'hidden'}
                                        >
                                            <Flex position={'absolute'} bg={'var(--secColor)'} borderRadius={'2px'}
                                                w={'100%'} h={'4px'}
                                                className={`${loadXP ? `${entry?.translate}` : "translateBack"} `}
                                            />
                                        </Flex>
                                    </Flex>
                                 ))
                                }
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
                <Box display={{base:'flex',lg:'none'}} w={'100%'} alignItems={'center'}>
                    <Button onClick={resumeDownload}
                        display={'flex'} alignItems={'center'} gap={'4px'}
                        bg={'var(--secColor)'} color={'var(--Background)'} fontSize={{base:'16px',lg:'24px'}} fontWeight={500} borderRadius={'12px'}
                        h={{base:'48px',lg:'56px'}} _hover={{border:"2px solid var(--secColor)", bg:"var(--Background)", color:"var(--secColor)"}} className="Lato"
                    >
                        <FiDownload/> Download Resume
                    </Button>
                </Box>
            </Box>
        </> 
    );
}
 
export default AboutScreen;