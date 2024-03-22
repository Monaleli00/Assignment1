import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const coursesData = [
  {
    iterm: 1,
    name: "Software Engineering with multimedia",
    description:
      "Enroll with us and become the best in softwaredevelopment and multimedia designs",
    image: require("./S .jpg"),
  },
  {
    iterm: 2,
    name: "Architecture",
    description:
      "Explore the world of visual communication and digital artistry.",
    image: require("./A .jpg"),
  },
  {
    iterm: 3,
    name: "Business Management",
    description: "Develop essential business skills and leadership abilities.",
    image: require("./B.jpg"),
  },
  {
    iterm: 4,
    name: "Fashion Design",
    description: "Express your creativity through fashion and garment design.",
    image: require("./F.jpg"),
  },
  {
    iterm: 5,
    name: "Tourism",
    description: "Get to exploy and know about the world places of interests.",
    image: require("./Tr.jpg"),
  },
];

const App = () => {
  const [ratings, setRatings] = useState(Array(coursesData.length).fill(0));

  const handleRating = (index) => {
    const newRatings = [...ratings];
    newRatings[index] = Math.min(newRatings[index] + 1, 6);
    setRatings(newRatings);
  };

  const renderCourses = () => {
    return coursesData.map((course, index) => (
      <View key={course.iterm} style={styles.courseContainer}>
        <Image source={course.image} style={styles.courseImage} />
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        <Button
          onPress={() => handleRating(index)}
          title="Rate"
          color="lightblue"
        />
        <Text style={styles.courseRating}>Rating: {ratings[index]}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Limkokwing University Prospectors</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.coursesList}>{renderCourses()}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "right",
    justifyContent: "right",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  coursesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  courseContainer: {
    alignItems: "center",
    margin: 10,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  courseDescription: {
    textAlign: "center",
    marginVertical: 5,
  },
  courseRating: {
    marginTop: 5,
  },
});

export default App;
