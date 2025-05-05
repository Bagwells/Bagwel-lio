'use client'
import { Box, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import { SiBattledotnet } from "react-icons/si";


const Preloader =()=> {
  const [display, setDisplay] = useState<boolean>(true);
  const [value, setValue] = useState<boolean>(false)

  const text = "Initializing...";
  const typewriterText = useRef<HTMLDivElement>(null);
      let i = 0;
  
      const switchDisplay =()=> {
          setTimeout(()=>{
              setDisplay(false);
          },3000);
      }

      useEffect(() => {
        const handlePreloaderFn = () => setDisplay(false);
    
        const time = 3200;
        const firstTimeLoad = sessionStorage.getItem('Load') === 'true';
    
        if (firstTimeLoad) {
          handlePreloaderFn();
        }
    
        const timer = setTimeout(() => {
          sessionStorage.setItem('Load', 'true');
          handlePreloaderFn();
        }, time);
    
        return () => clearTimeout(timer);
      }, []);
  
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
          sessionStorage.setItem('value', JSON.stringify(value))
          const storedValue = sessionStorage.getItem('value');
          console.log(storedValue)
          if(storedValue === 'true') {
              setDisplay(false)
          } else{ 
              setValue(true)
              switchDisplay()
          }
      }, []);
  return(
    <Box position={'fixed'} top={0} left={0}
        zIndex={100}
        bg={'var(--Background)'}
        // bgImage={'/BackgroundImage.png'} bgSize={'cover'} bgPos={'center'}
        w={'100vw'} h={'100vh'}
        display={`${display ? 'flex':'none'}`} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
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
    </Box>
  )
}

export default Preloader