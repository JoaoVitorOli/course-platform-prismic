import { Stack } from "@chakra-ui/react";
import { CoursesType } from "../types/courses.type";
import CourseCard from "./CourseCard";

interface DisplayCoursesProps {
  courses: {
    data: CoursesType;
    slugs: string[];
  }[]
}

export function DisplayCourses({ courses }: DisplayCoursesProps) {
  return (
    <Stack 
      flexDirection={'row'} 
      justifyContent="center"
      gap={8}
      px={12}
      flexWrap='wrap'
    >
      {courses.map(item => (
        <CourseCard 
          key={item.data.id}
          image={item.data.images[0].card.url}
          title={item.data.title}
          slug={item.slugs[0]}
        />
      ))}
    </Stack>
  )
}