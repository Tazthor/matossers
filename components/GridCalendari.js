import { Grid, Box, Text } from '@chakra-ui/react'
import actuacions from '../public/data/actuacions.json'
import Margin from './Margin'
import Title from './Title'

const DateFormat = function (data) {
  const [day, month, year] = data.split('/');
  var dateprov = year + '-' + month + '-' + day
  var dataFormat = new Date(dateprov).toISOString()
  return (dataFormat)
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
            var data = DateFormat(act.data_curta)
            if (data >= dateNow) {
              return (
                <Box key={index}>
                  <Text fontSize="xl" fontWeight={600} color="argila.500">{act.actuacio}</Text>
                  {(act.motiu != '') ? <Text>{act.motiu}</Text> : ''}
                  {(act.poblacio != '') ? <Text>{act.poblacio}</Text> : ''}
                  <Text>{act.data_llarga}<br /> a les {act.hora}h</Text>
                  {(act.lloc != '') ? <Text>{act.lloc}</Text> : ''}
                  <Box>
                    amb les colles: <br/>
                    {
                    act.colles.map((colla, i) => 
                      <Box key={i}>{colla}</Box>
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
      {/*  <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index2) => {
            var data = DateFormat(act.data_curta)
            if (data < dateNow) {
              return (
                <Box key={index2}>
                  <Text>{act.actuacio}</Text>
                </Box>
              )
            }
          })
        }
      </Grid>
*/}
    </Box>
  )
}
export default GridCalendari



