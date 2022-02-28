import { Grid, Box, Text } from '@chakra-ui/react'
import actuacions from '../public/data/actuacions.json'

export const GridCalendari = function (props) {
  return (
    <Box w={["90%", "80%", "75%"]} m="auto">
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
        {
          actuacions.map((act, index) => {
            return (
              <Box key={index}>
                <Text>{act.actuacio}</Text>
              </Box>
            )
          })
        }
      </Grid>
    </Box>
  )
}
export default GridCalendari



