import { Grid, Box, Text, Button, Flex } from '@chakra-ui/react'
import actuacions from '../public/data/actuacions.json'
import Margin from './Margin'
import Title from './Title'
import { MdPhotoCamera } from 'react-icons/md'

const dateFormat = function (data) {
  const [day, month, year] = data.split('/');
  var dateprov = year + '-' + month + '-' + day
  var dataFormat = new Date(dateprov).toISOString()
  return (dataFormat)
}

export const GridCalendari = function () {
  var dateNow = new Date().toISOString()
  return (
    <Box w={["90%", "80%", "75%"]} m="auto">
      <Title header="1" text="Properes actuacions"></Title>
      <Margin desktop="40px" mobile="30px" />
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index) => {
            var data = dateFormat(act.data_curta)
            if (data >= dateNow) {
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
      <Margin desktop="40px" mobile="30px" />
      <Title header="1" text="Últimes actuacions"></Title>
      <Margin desktop="40px" mobile="30px" />
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index2) => {
            var data = dateFormat(act.data_curta)
            if (data < dateNow) {
              return (
                <Box fontSize="medium" key={index2} lineHeight="28px" my="16px">
                  <Text mb="5px" fontSize="xl" fontWeight={600} >{act.actuacio}</Text>
                  <Text>{(act.poblacio != '') ? act.poblacio : ''} {act.data_curta}</Text>
                  <Text fontWeight={600}> Castells:</Text>
                  <Box ml="7px">
                    {
                      act.resultat.map((castell, i) =>
                        <Box display="inline" key={i} ml="8px">{castell}</Box>
                      )
                    }
                  </Box>
                  {(act.galeria != '') ?
                    <Button my="15px" px="10px"
                      borderRadius="8px" borderColor="argila.500" border="1px solid"
                      bg="argila.500" color="#fff"
                      fontSize="md" fontWeight={400} 
                      _hover={{ backgroundColor: "transparent", color: 'argila.500' }}
                      onClick={() => window.open(act.galeria, '_blank')}
                      rightIcon={<MdPhotoCamera size="20px"/>}>Fotografies</Button>
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



