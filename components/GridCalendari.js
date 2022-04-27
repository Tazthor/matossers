import { Grid, Box, Text, Button } from '@chakra-ui/react'
import actuacions from '../public/data/actuacions.json'
import Margin from './Margin'
import Title from './Title'

const dateFormat = function (data) {
  const [day, month, year] = data.split('/');
  var dateprov = year + '-' + month + '-' + day
  var dataFormat = new Date(dateprov).toISOString()
  return (dataFormat)
}

const properaActuacio = function () {

}

export const GridCalendari = function (props) {
  var dateNow = new Date().toISOString()
  return (
    <Box w={["90%", "80%", "75%"]} m="auto">
      <Title text="Properes actuacions"></Title>
      <Margin desktop="40px" mobile="30px" />
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index) => {
            var data = dateFormat(act.data_curta)
            if (data >= dateNow) {
              return (
                <Box fontSize="medium" key={index}>
                  <Text mb="5px" fontSize="xxl" fontWeight={600} color="argila.500">{act.actuacio}</Text>
                  {(act.motiu != '') ? <Text>{act.motiu}</Text> : ''}
                  <Text>{act.data_llarga} a les {act.hora}h</Text>
                  <Text>{(act.lloc != '') ? act.lloc : ''(act.poblacio != '') ? act.poblacio : ''}</Text>
                  <Box mt="5px">
                    amb les colles: <br />
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
      <Title text="Últimes actuacions"></Title>
      <Margin desktop="40px" mobile="30px" />
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index2) => {
            var data = dateFormat(act.data_curta)
            if (data < dateNow) {
              return (
                <Box fontSize="medium" key={index2}>
                  <Text mb="5px" fontSize="xxl" fontWeight={600} color="argila.500">{act.actuacio}</Text>
                  <Text>{act.data_curta}</Text>
                  <Text> Castells:</Text>
                  <Box mt="5px" ml="7px">
                    {
                      act.resultat.map((castell, i) =>
                        <Box display="inline" key={i} ml="8px">{castell}</Box>
                      )
                    }
                  </Box>
                  {(act.galeria != '') ?
                    <Button my="15px" px="20px" w="120px"
                      borderRadius="21px" borderColor="argila.500" border="1px solid"
                      bg="argila.500" color="#fff"
                      fontSize="medium" fontWeight={300}
                      _hover={{ backgroundColor: "transparent", color: 'argila.500', fontWeight: '600' }}
                      onClick={() => window.open(act.galeria, '_blank')}>Fotografies</Button>
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



