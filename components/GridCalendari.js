import { Grid, Box, Text } from '@chakra-ui/react'
import actuacions from '../public/data/actuacions.json'

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
      Properes
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index) => {
            var data = DateFormat(act.data_curta)
            console.log('Act:' + data, 'now:' + dateNow)
            if (data >= dateNow) {
              return (
                <Box key={index}>
                  <Text>{act.actuacio}</Text>
                </Box>
              )
            }
            else {
              return <></>
            }
          })
        }
      </Grid>
      Passades
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index) => {
            var data = DateFormat(act.data_curta)
            console.log('Act:' + data, 'now:' + dateNow)
            if (data < dateNow) {
              return (
                <Box key={index}>
                  <Text>{act.actuacio}</Text>
                </Box>
              )
            }
            else {
              return <></>
            }
          })
        }
      </Grid>

    </Box>
  )
}
export default GridCalendari



