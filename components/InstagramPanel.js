import { Box, Text, Flex, Image, Button, Grid, Spacer, Link } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

export const InstagramPanel = function ({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentFeed, setCurrentFeed] = useState({});
  const [insfeeds, setInsFeeds] = useState({})
  const [isLoad, setIsLoad] =  useState(false)

  useEffect(() => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;

    axios.get(url).then((data) => {
      setInsFeeds(data.data)
      setIsLoad(true)
    })      
  }, []);

  return (
    <Box>
      {isLoad &&
      <>
      <Flex p="10px" alignItems="center" flexDir={{base:"column", md:"row"}}>
        <Flex alignItems="center" mt={{base:"10px", md:"0"}}>
        <Image
          w="30px"
          src="/images/logos/Instagram_logo.svg"
          alt="Instagram"
          mr="6px"
        />
        <Text fontSize="medium" fontWeight={900}>
          Darreres publicacions<br/>
          @matossers
        </Text>
        </Flex>
        <Spacer />
        <Link href="https://www.instagram.com/matossers/" target="_blank">
          <Button
            mt={{base:"10px", md:"0"}}
            borderRadius="21px"
            border="1px solid black"
            bg="negre"
            color="blanc"
            fontSize="md"
            _hover={{ color: "negre", bg: "transparent" }}
          >
            Segueix-nos
          </Button>
        </Link>
      </Flex>
      <Grid w="100%" templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)"}} >
         {insfeeds.data.map((feed, i) => {
          if (i <= 3) {
            return (
              <Box
                key={i}
                onClick={() => {
                  setCurrentFeed(feed);
                  onOpen(feed);
                }}
                mx="2px"
                my="2px"
              >
                {feed.media_type == "VIDEO" ? (
                  <ReactPlayer
                    width="100%"
                    url={feed.media_url}
                    playing
                    muted
                  />
                ) : (
                  <Image
                    overflow="hidden"
                    src={feed.media_url}
                    alt={feed.caption}
                  />
                )}
              </Box>
            );
          }
        })}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton bg="blanc" />
            <ModalBody px="0" py="0">
              {currentFeed.media_type == "VIDEO" ? (
                <ReactPlayer
                  width="100%"
                  url={currentFeed.media_url}
                  playing
                  controls
                />
              ) : (
                <Image src={currentFeed.media_url} alt={currentFeed.caption} />
              )}
              <Box px="20px" pb="20px">
                <Text
                  mt="5px"
                  mb="10px"
                  fontSize="md"
                  fontWeight={600}
                  color="argila"
                >
                  {new Date(currentFeed.timestamp).toLocaleDateString("ca-ES")}
                </Text>
                {currentFeed.caption}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Grid>
      </>
}
    </Box>
  );
};
export default InstagramPanel;
