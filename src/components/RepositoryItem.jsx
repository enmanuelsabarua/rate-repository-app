import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import Stat from "./Stat";

const styles = StyleSheet.create({
  tinyImage: {
    height: 40,
    width: 40
  },
  basicInfoContainer: {
    flexDirection: 'row',
  },
  repositoryCard: {
    padding: 20,
    backgroundColor: "white"
  },
  repositoryTextData: {
    paddingLeft: 15,
  },
  language: {
    backgroundColor: "#0366d6",
    color: 'white',
    textAlign: 'center',
    padding: 4,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'flex-start'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  }
})

const RepositoryItem = ({ data }) => {
  return (
    <View style={styles.repositoryCard}>
      <View style={styles.basicInfoContainer}>
        <Image style={styles.tinyImage} source={{ uri: `${data.ownerAvatarUrl}` }} />
        <View style={styles.repositoryTextData}>
          <Text fontWeight='bold' fontSize='subheading'>{data.fullName}</Text>
          <Text color='textSecondary'>{data.description}</Text>
          <Text style={styles.language}>{data.language}</Text>
        </View>
      </View>


      <View style={styles.statsContainer}>
        <Stat number={data.stargazersCount} text='Starts' />
        <Stat number={data.forksCount} text='Forks' />
        <Stat number={data.reviewCount} text='Reviews' />
        <Stat number={data.ratingAverage} text='Rating' />
      </View>
    </View>
  )
}

export default RepositoryItem;