import { Text, View } from "react-native";
import { styled } from "./style";

import StudentImg from "../../assets/student.svg";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <View style={styled.container}>
      <StudentImg />
      <Text style={styled.title}>Get things done with TODO</Text>
      <Text style={styled.subTitle}>
        In your daily, day to day life we {'\n'}
        often lose track of time and{'\n'}
        forget to do the things that{'\n'}
        needs to be done.
      </Text>

      <Button
        title="Get Started"
      />

    </View>
  );
}
