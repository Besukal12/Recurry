import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

const SUbscriptionDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>SUbscriptionDetail: {id}</Text>
      <Link href="/">home</Link>
    </View>
  );
};

export default SUbscriptionDetail;
