'use client';
import { useEffect, useMemo, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Flex, Button } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const API_KEY = process.env.NEXT_PUBLIC_FLICKR_KEY;
const USER_ID = "184984575@N03";
const PER_PAGE = 12;

const getFlickrImageURL = (photo, size = "b") =>
  `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

export const Flickr = () => {
  const [fotos, setFotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const controller = new AbortController();

    const fetchFotos = async () => {
      try {
        const params = new URLSearchParams({
          method: "flickr.photos.search",
          api_key: API_KEY,
          user_id: USER_ID,
          sort: "interestingness-asc",
          per_page: PER_PAGE,
          extras: "owner_name,license",
          format: "json",
          nojsoncallback: 1,
        });

        const response = await fetch(
          `https://api.flickr.com/services/rest/?${params}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Error carregant dades de Flickr");
        }

        const data = await response.json();

        const images = data.photos.photo.map((photo) =>
          getFlickrImageURL(photo)
        );

        setFotos(images);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    fetchFotos();

    return () => controller.abort();
  }, []);

  const slides = useMemo(
    () =>
      fotos.map((foto, index) => (
        <Box
          key={index}
          w="100%"
          h={{ base: "600px", xl: "700px" }}
          backgroundImage={`url(${foto})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          onDragStart={(e) => e.preventDefault()}
        />
      )),
    [fotos]
  );

  const slidePrev = () =>
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));

  const slideNext = () =>
    setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));

  return (
    <Box w="50%" m="auto" position="relative">
      {slides.length > 0 && (
        <>
          <AliceCarousel
            width="100%"
            mouseTracking
            items={slides}
            disableDotsControls
            disableButtonsControls
            activeIndex={activeIndex}
            onSlideChanged={({ item }) => setActiveIndex(item)}
            infinite
          />

          <Flex
            position="absolute"
            bottom="20px"
            w="100%"
            justifyContent="center"
          >
            <Button
              bg="argila"
              color="blanc"
              onClick={slidePrev}
              mr="6px"
              border="1px solid"
              borderColor="argila"
              _hover={{ bg: "blanc", color: "argila" }}
              _focus={{ outline: "none" }}
            >
              <IoIosArrowBack size="25px" />
            </Button>

            <Button
              bg="argila"
              color="blanc"
              onClick={slideNext}
              ml="6px"
              border="1px solid"
              borderColor="argila"
              _hover={{ bg: "blanc", color: "argila" }}
              _focus={{ outline: "none" }}
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