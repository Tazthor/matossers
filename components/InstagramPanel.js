import { Box, Text, Flex, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const InstagramPanel = function (props) {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalinkusername&access_token=IGQVJVQ2hBWG1HenhmTUhMakNtVXBjMW9ELXp1cjZAoNlhmeUpZAVGs2OVhGc3lUQllZAbE9KcE5zVlVoX1p2M2lNczEwcnJydlM3emZAwYkVYdXUwM2lfQVVka20xMEJFNzhYRDlmd1FQcmdRWnNpVlJxcQZDZD`;
  const [insFeeds, setInsfeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
      const data = await fetch(url);
      const feed = await data.json();
      setInsfeeds(feed);
      setIsLoading(false);
  }, []);

  console.log(insFeeds);

  if (!isLoading) {
    return (
      <Box>
        <Image src={insFeeds[0].media_url} alt="darrer post" />
      </Box>
    );
  } else {
    return (
      <Spinner color="argila" size="xl" emptyColor="gray.200" thickness="4px" />
    );
  }
};
export default InstagramPanel;
