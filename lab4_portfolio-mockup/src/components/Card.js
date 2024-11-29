import { Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack key={title} backgroundColor="white"  borderRadius={8} alignItems="flex-start" >
      <Image src={imageSrc} borderRadius={8} />
      <VStack alignItems="flex-start" padding={3}>
        <Heading size="md" color="black">{title}</Heading>
        <Text paddingY={3} color="gray">{ description }</Text>
        <HStack color="black">
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
  // return null;
};

export default Card;
