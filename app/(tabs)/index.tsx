import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import { Button, ButtonText } from "@/components/ui/button"


export default function HomeScreen() {
  const [text, setText] = useState('');

  return (
    <View className='absolute right-0 bottom-0 m-4'>
      <Button size="md" variant="solid" className='w-fit' action="primary">
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
