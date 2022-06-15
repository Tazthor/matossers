import { Grid, Box, Text, Image } from '@chakra-ui/react'
import { useState } from 'react'
import junta from '../public/data/junta.json'
import Title from './Title'

export const GridCalendari = function (props) {
  return (
    <Box w={["90%", "80%", "75%"]} m="auto">
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={8}>
        {
          junta.map((person, index) => {
            if (person.equip == "cap")
              return (
                <Box key={index}>
                  <Image w="100%" src={person.img} alt={person.nom} />
                  <Text fontSize="xl" fontWeight={600} color="argila.500">{person.carrec}</Text>
                  <Text fontSize="lg">{person.nom}</Text>
                </Box>
              )
          })
        }
      </Grid>
      <Box mt="30px">
        <Title header="1" text="Junta administrativa"/>
      </Box>
      <Grid mt="15px" templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6}>
        {
          junta.map((person, index) => {
            if (person.equip == "directiva")
              return (
                <Box key={index}>
                  <Image w="100%" src={person.img} alt={person.nom} />
                  <Text fontSize="xl" fontWeight={600} color="argila.500">{person.carrec}</Text>
                  <Text fontSize="lg">{person.nom}</Text>
                </Box>
              )
          })
        }
      </Grid>
      <Box mt="30px">
        <Title header="1" text="Junta tècnica"/>
      </Box>
      <Grid mt="15px" templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6}>
        {
          junta.map((person, index) => {
            if (person.equip == "tecnica")
              return (
                <Box key={index}>
                  <Image w="100%" src={person.img} alt={person.nom} />
                  <Text fontSize="xl" fontWeight={600} color="argila.500">{person.carrec}</Text>
                  <Text fontSize="lg">{person.nom}</Text>
                </Box>
              )
          })
        }
      </Grid>
    </Box>
  )
}
export default GridCalendari



