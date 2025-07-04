import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsGrid, BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { TbSmartHome, TbWorldCode } from "react-icons/tb";
import { GrContactInfo } from "react-icons/gr";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";
import { SiBattledotnet } from "react-icons/si";
import { MdInventory, MdWorkspacesFilled } from "react-icons/md";
import { useDetails } from "@/hook/profile";

const NavBar = (Background:any) => {
  
  const {X, LinkedIn, Discord, Github } = useDetails();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

      const handleScroll = ()=> {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);

    }, []);

  

  
  return (
    <Box position="relative" w="100%" height="fit-content">
      <Box
        as="nav"
        zIndex={90}
        px={{ base: "1em", lg: "6rem" }}
        py={{base:"12px",lg:"20px"}}
        bg={"Transparent"}
        color="var(--secColor)"
        w="full"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        fontSize="1.25rem"
        lineHeight="1.5em"
        position="fixed"
        backdropFilter={"blur(10px)"}
        top={0}
        right={0}
        left={0}
        className="Ojuju"
      >
        <Box>
          <Link href="/">
            <Box display={{ base: "flex", lg: "none" }}>
              <Image width={100} height={100} src="/Bag-Logo.png" alt="" />
            </Box>
            <Box display={{ base: "none", lg: "flex" }}>
              <Image width={100} height={100} src="/Bag-Logo.png" alt="" />
            </Box>
          </Link>
        </Box>

        <Box
          display={{ base: "none", lg: "flex" }}
          gap={35}
          alignItems="center"
          justifyContent={"space-between"}
          fontWeight={200}
        >
          <Link href="/">
            <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                <TbSmartHome className={`${pathname === "/" ? "NavIcon":"unNavIcon"} `}/>
              <Text
                fontSize="17"
                color="var(--secColor)"
                _active={{ fontWeight: "800" }}
                _hover={{ fontWeight: "800" }}
                fontWeight={`${pathname === "/" ? "800" : "400"}`}
              >
                Home
              </Text>
            </Box>
          </Link>
          <Link href="/inventory">
            <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                <MdInventory className={`${pathname === "/inventory" ? "NavIcon":"unNavIcon"} `}/>
              <Text
                fontSize="17"
                color="var(--secColor)"
                _active={{ fontWeight: "800" }}
                _hover={{ fontWeight: "800" }}
                fontWeight={`${pathname === "/inventory" ? "800" : "400"}`}
              >
                
                Inventory
              </Text>
            </Box>
          </Link>
          <Link href="/xp">
            <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                <MdWorkspacesFilled className={`${pathname === "/xp" ? "NavIcon":"unNavIcon"} `}/>
              <Text
                fontSize="17"
                color="var(--secColor)"
                _active={{ fontWeight: "800" }}
                _hover={{ fontWeight: "800" }}
                fontWeight={`${pathname === "/xp" ? "800" : "400"}`}
              >
                
                XP
              </Text>
            </Box>
          </Link>
          <Link href="/contact">
            <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                <GrContactInfo className={`${pathname === "/contact" ? "NavIcon":"unNavIcon"} `}/>
              <Text
                fontSize="17"
                color="var(--secColor)"
                _active={{ fontWeight: "800" }}
                _hover={{ fontWeight: "800" }}
                fontWeight={`${pathname === "/contact" ? "800" : "400"}`}
              >
                Contact Me
              </Text>
            </Box>
          </Link>
        </Box>

        <Flex display={{base:'hidden', lg:'flex'}}/>

        <Box
          display={{ base: "block", lg: "none" }}
          cursor={"pointer"}
          ref={btnRef}
          onClick={onOpen}
        >
          <BsGrid size={"32px"} />
        </Box>

        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            bg={"var(--Background)"}
            height={"100vh"}
            width={"100vw"}
            gap={20}
            py={"2rem"}
          >
           
            <DrawerCloseButton
              color={"var(--secColor)"}
              fontSize={"20px"}
              zIndex={100}
              backdropBlur={'100%'}
              mt={"10px"}
              outline={"none"}
            />

            <DrawerBody>
              <Flex w={'100%'} justifyContent={'center'} textColor={'var(--secColor)'} fontSize={'48px'} my={'3rem'}>
                <SiBattledotnet/>
              </Flex>
              <Box w={'100%'}
                display={"flex"}
                flexDir={"column"} alignItems={'center'}
                gap={"30px"}
                py={"16px"}
                className="Ojuju"
                color="var(--secColor)"
                borderTop={"1px solid var(--Greenlight)"}
                zIndex={100}
              >
                <Link href="/" onClick={onClose}>
                  <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                      <TbSmartHome className={`${pathname === "/" ? "NavIcon":"unNavIcon"} `}/>
                    <Text
                      fontSize="17"
                      color="var(--secColor)"
                      _active={{ fontWeight: "800" }}
                      _hover={{ fontWeight: "800" }}
                      fontWeight={`${pathname === "/" ? "800" : "400"}`}
                    >
                      
                      Home
                    </Text>
                  </Box>
                </Link>
                <Link href="/inventory" onClick={onClose}>
                  <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                      <MdInventory className={`${pathname === "/inventory" ? "NavIcon":"unNavIcon"} `}/>
                    <Text
                      fontSize="17"
                      color="var(--secColor)"
                      _active={{ fontWeight: "800" }}
                      _hover={{ fontWeight: "800" }}
                      fontWeight={`${pathname === "/inventory" ? "800" : "400"}`}
                    >
                      Inventory
                    </Text>
                  </Box>
                </Link>
                <Link href="/xp" onClick={onClose}>
                  <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                      <MdWorkspacesFilled className={`${pathname === "/xp" ? "NavIcon":"unNavIcon"} `}/>
                    <Text
                      fontSize="17"
                      color="var(--secColor)"
                      _active={{ fontWeight: "800" }}
                      _hover={{ fontWeight: "800" }}
                      fontWeight={`${pathname === "/xp" ? "800" : "400"}`}
                    >
                      
                      XP
                    </Text>
                  </Box>
                </Link>
                <Link href="/contact" onClick={onClose}>
                  <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                      <GrContactInfo className={`${pathname === "/contact" ? "NavIcon":"unNavIcon"} `}/>
                    <Text
                      fontSize="17"
                      color="var(--secColor)"
                      _active={{ fontWeight: "800" }}
                      _hover={{ fontWeight: "800" }}
                      fontWeight={`${pathname === "/contact" ? "800" : "400"}`}
                    >
                      Contact Me
                    </Text>
                  </Box>
                </Link>
              </Box>

              <Flex w="100%" justifyContent={'center'} alignItems="center" px={4} gap={"20px"} mt={'32px'}> 
                <Link href={Github} target="_blank" rel="noreferrer noopener" className="white">
                  <VscGithub />
                </Link>
                <Link href={X} target="_blank" rel="noreferrer noopener" className="white">
                  <BsTwitter />
                </Link>
                <Link href={LinkedIn} target="_blank" rel="noreferrer noopener" className="white">
                  <FiLinkedin />
                </Link>
                <Link href={Discord} target="_blank" rel="noreferrer noopener" className="white">
                    <FaDiscord />
                </Link>
              </Flex>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
