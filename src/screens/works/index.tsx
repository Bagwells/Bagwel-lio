import NavBar from "@/components/navBar";
import { Box, Circle, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { SiDailydotdev } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { SiSpeedtest } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useDetails } from "@/hook/profile";
import { FiExternalLink } from "react-icons/fi";

const WorkScreen = () => {
  const { Github } = useDetails();

  const work = [
    {
      Title: "BlueBlossom",
      picture: "/Blueblossom.png",
      open: "https://blueblossom.stanbicibtc.com",
      description:
        "A Feminine-based social media-esque platform by Stanbic IBTC Bank",
    },
    {
      Title: "Casa Central",
      picture: "/Casa-central.png",
      open: "https://casacentral.cc",
      description: "A real estate platform for Casa Central properties",
    },
    {
      Title: "Coverai",
      picture: "/Coverai.png",
      open: "https://coverai.co",
      description: "An AI-powered cover letter generator.",
    },
    {
      Title: "Desolatravels",
      picture: "/Desola.png",
      open: "https://desolatravels.com/",
      description: "An AI-powered interactive flight booking platform.",
    },
    {
      Title: "StartInCrypto (SIC)",
      picture: "/SIC.png",
      open: "https://sic.tokenpage.xyz",
      description:
        "A web3 educational platform for learning about cryptocurrency and blockchain technology.",
    },
    {
      Title: "PocketFood",
      picture: "/pocketfood.png",
      open: "https://pocketfood.io",
      description:
        "A food-as-a-service platform where users can order food from various restaurants.",
    },
    {
      Title: "e-Swift",
      picture: "/eSwift.png",
      open: "https://www.eswiftpropertymart.ng/",
      description: "A real estate platform for e-Swift properties.",
    },

    {
      Title: "WMTA!",
      picture: "/WMTA.png",
      open: "https://beta.whomadethisartwork.com/",
      description:
        "An AI-powered art finder project that helps users find the creators of AI-generated artworks.",
    },
    {
      Title: "Aton",
      picture: "/Aton.png",
      open: "https://aton-pre.vercel.app/",
      description:
        "An AI-powered slide deck generator that helps users create professional presentations quickly and easily.",
    },
    {
      Title: "SkillBit",
      picture: "/Skillbit.png",
      open: "https://skillbit-mkt6.vercel.app/",
      description:
        "A hackathon project that helps users learn about bitcoin and blockchain technology through interactive lessons and quizzes.",
    },
    {
      Title: "eChannel-Class",
      picture: "/Channel-class.png",
      open: "An online learning platform for eChannel-Class",
    },
  ];
  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        bg={"var(--Background)"}
        width={"100vw"}
        height={{ base: "100svh", lg: "100vh" }}
        className="Ojuju"
        p={{ base: "1rem", lg: "8em" }}
        py={{ base: "5rem", lg: "6rem" }}
        gap={"12px"}
      >
        <Flex w="100%" alignItems="end" justifyContent="space-between">
          <Text
            fontSize={{ base: "24px", lg: "40px" }}
            fontWeight={700}
            color={"var(--secColor)"}
          >
            xP
          </Text>
          <Link
            href={Github}
            target="_blank"
            rel="noreferrer noopener"
            fontSize={{ base: "24px", lg: "36px" }}
            _hover={{ fontSize: { base: "28px", lg: "40px" } }}
            color={"var(--secColor)"}
            className="transitionlag"
          >
            <FaGithub />
          </Link>
        </Flex>
        <Flex flexDirection={{ base: "column", lg: "row" }} w={"100%"}>
          <Box
            display={{ base: "", xl: "none" }}
            position={"relative"}
            w={"100%"}
            h={"calc(80vh - 100px)"}
            gap={"12px"}
            overflow={"auto"}
            borderTop={"2px solid var(--TextCol)"}
            borderBottom={"2px solid var(--TextCol)"}
          >
            {work?.map((entry, index) => (
              <Box
                position={"relative"}
                display={"flex"}
                key={index}
                border={"2px solid var(--secColor)"}
                borderRadius={"12px"}
                w={"100%"}
                my={"1em"}
                overflow={"clip"}
                h={"280px"}
              >
                <img src={`${entry?.picture}`} alt="" className="work" />
                <Flex
                  position={"absolute"}
                  alignSelf={"flex-end"}
                  p={"0.1em"}
                  pr={"0.5em"}
                  border={"0.5px solid var(--secColor)"}
                  borderRadius={"24px"}
                  m={"12px"}
                  bg={"#00000040"}
                  backdropFilter={"blur(5px)"}
                  w={"fit-content"}
                  h={"max-content"}
                  alignItems="center"
                  gap={"8px"}
                  overflow={"hidden"}
                >
                  <Flex
                    alignItems="center"
                    p={"8px"}
                    border={"1px solid var(--secColor)"}
                    justifyContent="center"
                    borderRadius={"1000px"}
                    className="pulse"
                  >
                    <Link
                      href={`${entry?.open}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      cursor={"pointer"}
                    >
                      <FiExternalLink className="iconSize" />
                    </Link>
                  </Flex>
                  <Box>
                    <Text
                        fontSize={"16px"}
                        fontWeight={600}
                        color={"var(--TextCol2)"}
                        className="Lato"
                    >
                        {entry?.Title}
                    </Text>
                    <Text
                        fontSize={"10px"}
                        fontWeight={400}
                        color={"var(--TextCol2)"}
                        className="Lato"
                    >
                        {entry?.description}
                    </Text>
                    </Box>
                </Flex>
              </Box>
            ))}
          </Box>

          {/* Web */}
          <Box
            display={{ base: "none", xl: "flex" }}
            w={"100%"}
            h={"55vh"}
            gap={"16px"}
            px={"1em"}
          >
            {work?.map((entry, index) => (
              <Box
                key={index}
                bgImage={entry?.picture}
                bgSize={"cover"}
                bgPos={"center"}
                border={"2px solid var(--TextCol)"}
                borderRadius={"12px"}
                className="Lato card"
                overflow={"hidden"}
                _hover={{ border: "4px solid var(--secColor)" }}
              >
                <Flex
                  bgColor={"var(--Backgroundlite)"}
                  w={"100%"}
                  h={"100%"}
                  alignItems={"flex-end"}
                  borderRadius={"12px"}
                  className="innercard"
                  p={"16px"}
                >
                  <Flex alignItems="center" gap={"8px"} overflow={"hidden"}>
                    <Flex
                      alignItems="center"
                      p={"8px"}
                      border={"2px solid var(--secColor)"}
                      justifyContent="center"
                      borderRadius={"1000px"}
                    >
                      <Link
                        href={`${entry?.open}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        cursor={"pointer"}
                      >
                        <FiExternalLink className="iconSize pulse" />
                      </Link>
                    </Flex>
                    <Box>
                        <Text
                            fontSize={"24px"}
                            fontWeight={600}
                            color={"var(--TextCol2)"}
                            className="Lato title"
                        >
                            {entry?.Title}
                        </Text>
                        <Text
                            fontSize={"10px"}
                            fontWeight={400}
                            color={"var(--TextCol2)"}
                            className="Lato title"
                        >
                            {entry?.description}
                        </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Box>
        </Flex>
        <Flex
          alignContent={"center"}
          gap={"24px"}
          justifyContent={"center"}
          mt={{ base: "0.5rem", lg: "2rem", xl: "2rem" }}
        >
          <Flex flexDir={"column"} gap={"6px"} alignItems={"center"}>
            <GrOptimize className="icon" />
            <Text
              fontSize={"16px"}
              fontWeight={500}
              color="var(--secColor)"
              className="Lato"
            >
              Optimize
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap={"6px"} alignItems={"center"}>
            <MdOutlineMiscellaneousServices className="icon" />
            <Text
              fontSize={"16px"}
              fontWeight={500}
              color="var(--secColor)"
              className="Lato"
            >
              Maintenance
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap={"6px"} alignItems={"center"}>
            <SiSpeedtest className="icon" />
            <Text
              fontSize={"16px"}
              fontWeight={500}
              color="var(--secColor)"
              className="Lato"
            >
              Fast Service
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default WorkScreen;
