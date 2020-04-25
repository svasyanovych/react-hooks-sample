import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Course({ course, index, upvoteCourse, downvoteCourse }) {
  return (
    <div>
      <Card style={{ maxWidth: "500px", marginBottom: "10px" }}>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={course.courseImage}
          title={course.title}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {course.title}
          </Typography>
          <Typography component="p" color="textSecondary">
            {course.description}
          </Typography>
          <br />
          <Typography color="textSecondary">
            {course.upvote_count}
            <Icon color="primary" onClick={() => upvoteCourse(index)}>
              Like
            </Icon>
            &nbsp;&nbsp;
            <span>{course.downvote_count}</span>
            <Icon color="primary" onClick={() => downvoteCourse(index)}>
              UnLike
            </Icon>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={course.url} target="_blank">
            More about
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

function App() {
  const [courses, setCourses] = useState([
    {
      title: "All about dogs",
      description:
        "Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf",
      url: "https://en.wikipedia.org/wiki/Dog",
      courseImage: "dog.jpeg",
      upvote_count: 0,
      downvote_count: 0,
    },
    {
      title: "All about cats",
      description:
        "The cat (Felis catus) is a domestic species of small carnivorous mammal.",
      url: "https://en.wikipedia.org/wiki/Cat",
      courseImage: "cat.jpeg",
      upvote_count: 0,
      downvote_count: 0,
    },
    {
      title: "All about parrots",
      description:
        "Parrots, also known as psittacines are birds of the roughly 393 species in 92 genera comprising the order Psittaciformes.",
      url: "https://en.wikipedia.org/wiki/Parrot",
      courseImage: "parrot.jpeg",
      upvote_count: 0,
      downvote_count: 0,
    },
  ]);

  const upvoteCourse = (index) => {
    const newCourse = [...courses];
    newCourse[index].upvote_count++;
    setCourses(newCourse);
  };

  const downvoteCourse = (index) => {
    const newCourse = [...courses];
    newCourse[index].downvote_count++;
    setCourses(newCourse);
  };

  return (
    <div className="app">
      <NavBar />
      <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={12} lg={4} xl={3}>
              <Course
                key={index}
                index={index}
                course={course}
                upvoteCourse={upvoteCourse}
                downvoteCourse={downvoteCourse}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
