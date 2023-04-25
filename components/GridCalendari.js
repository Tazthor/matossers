import { Grid, Box, Text, Button, Flex } from '@chakra-ui/react'
import Margin from './Margin'
import Title from './Title'
import { MdPhotoCamera } from 'react-icons/md'

const dateFormat = function (data) {
  //var dataFormat = new Date(data).toISOString()
  console.log(data)
  //return (dataFormat)
}

export const GridCalendari = function ({actuacions}) {
  var dateNow = new Date()

  var properaAct = actuacions.find(
    (actuacio) =>
      actuacio.data.toDate() >= dateNow
  );

  console.log(properaAct)

  return (
    <Box w={{base:"90%", md:"80%", xl:"75%"}} m="auto">
      <Title header="2" text="Properes actuacions"></Title>
      <Margin desktop="40px" mobile="10px" />
      {(properaAct == undefined) && 
        <Text>Actualment no hi ha actuacions previstes al calendari</Text>
      ||
      <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', xl:'repeat(4, 1fr)'}} gap={4}>
        {
          actuacions.map((act, index) => {
            if (act.data.toDate() >= dateNow) {
              return (
                <Box fontSize="medium" key={index} lineHeight="28px" my="16px">
                  <Text mb="5px" fontSize="xl" fontWeight={600}>{act.actuacio}</Text>
                  <Flex>
                    <Box mr="5px" fontWeight={600}>Data: </Box>
                    <Box ml="5px"><Text>{act.data_llarga}<br />a les {act.hora}h</Text></Box>
                  </Flex>
                  <Flex>
                    <Box mr="5px" fontWeight={600}>Lloc: </Box>
                    <Box ml="5px">
                      <Text>{(act.lloc != '') ? act.lloc : ''}{' '}{(act.poblacio != '') ? act.poblacio : ''}</Text>
                    </Box>
                  </Flex>
                  <Box >
                    <Text fontWeight={600}>Colles:</Text>
                    {
                      act.colles.map((colla, i) =>
                        <Box key={i} ml="15px">{colla}</Box>
                      )
                    }
                  </Box>
                </Box>
              )
            }
          })
        }
      </Grid>
      }
      <Margin desktop="40px" mobile="30px" />
      <Title header="2" text="Darreres actuacions"></Title>
      <Margin desktop="40px" mobile="10px" />
      <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', xl:'repeat(4, 1fr)'}} gap={4}>
        {
          actuacions.map((act, index2) => {
            if (act.data.toDate() < dateNow) {
              return (
                <Box fontSize="medium" key={index2} lineHeight="28px" my="16px">
                  <Text mb="5px" fontSize="xl" fontWeight={600} >{act.actuacio}</Text>
                  <Text>{(act.poblacio != '') ? act.poblacio : ''} {act.data_curta}</Text>
                  <Text fontWeight={600}> Castells:</Text>
                {/*  <Box ml="7px">
                    {
                      act.resultat.map((castell, i) =>
                        <Box display="inline" key={i} ml="8px">{castell}</Box>
                      )
                    }
                  </Box>
                  */}
                  {(act.galeria != '') ?
                    <Button my="15px" px="10px"
                      borderRadius="8px" borderColor="argila" border="1px solid"
                      bg="argila" color="#fff"
                      fontSize="md" fontWeight={400} 
                      _hover={{ backgroundColor: "transparent", color: 'argila' }}
                      onClick={() => window.open(act.galeria, '_blank')}
                      leftIcon={<MdPhotoCamera size="20px"/>}>Fotografies</Button>
                    : ''}

                </Box>
              )
            }
          })
        }
      </Grid>
    </Box>
  )
}
export default GridCalendari



