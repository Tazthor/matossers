import { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Flex, Button } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Flickr = function (props) {
  const [loaded, setLoaded] = useState();
  const [fotos, setFotos] = useState([]);
  const apiKey = "20eb745e172d7d0ff452f7a63200322b";

  const getFlickrImageURL = (photo, size) => {
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
    if (size) {
      url += `_${size}`;
    }
    url += ".jpg";
    return url;
  };

  const data = {
    method: "flickr.photos.search",
    api_key: apiKey,
    user_id: "184984575@N03",
    sort: "interestingness-asc",
    per_page: 12,
    extras: "owner_name,license",
    format: "json",
    nojsoncallback: 1,
  };

  const parameters = new URLSearchParams(data);

  const url = `https://api.flickr.com/services/rest/?${parameters}`;
  const slides = [];

  useEffect(() => {
    axios.get(url).then((data) => {
      data.data.photos.photo.map((photo, index) => {
        fotos.push(getFlickrImageURL(photo, "b"));
      });
      setLoaded(true);
    });
  }, []);

  const createItems = function () {
    console.log(fotos)
    fotos.map((foto, index) =>
      slides.push(
        <Box
          w="100%"
          h={{base:"600px", xl:"700px"}}
          m="auto"
          key={index}
          backgroundImage={foto}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          onDragStart={handleDragStart}
        ></Box>
      )
    );
  };

  const handleDragStart = (e) => e.preventDefault();

  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(createItems(5, [setActiveIndex]));

  const slidePrev = () =>
    setActiveIndex(activeIndex != 0 ? activeIndex - 1 : 11);
  const slideNext = () =>
    setActiveIndex(activeIndex != 11 ? activeIndex + 1 : 0);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  return (
    <Box m="auto" position="relative">
      {loaded && (
        <>
          <AliceCarousel
            mouseTracking
            items={slides}
            autoHeight={false}
            autoWidth={false}
            autoPlay={false}
            autoPlayInterval="2000"
            disableDotsControls
            disableButtonsControls
            activeIndex={activeIndex}
            onSlideChanged={syncActiveIndex}
            infinite
          />
          <Flex mt="20px" position="absolute" bottom="20px" w="100%" justifyContent="center">
            <Button
              bg="argila"
              color="blanc"
              onClick={slidePrev}
              mr="6px"
              borderColor="argila"
              border="1px solid"
              _hover={{ bg: "blanc", color: "argila" }}
              _focus={{ outline: 'none'}}
            >
              <IoIosArrowBack size="25px" />
            </Button>
            <Button
              bg="argila"
              color="blanc"
              onClick={slideNext}
              ml="6px"
              borderColor="argila"
              border="1px solid"
              _hover={{ bg: "blanc", color: "argila" }}
              _focus={{ outline: 'none'}}
              >
              <IoIosArrowForward size="25px" />
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};
export default Flickr;
