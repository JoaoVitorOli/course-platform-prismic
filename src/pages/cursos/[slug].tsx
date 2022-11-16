import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { createClient } from "../../../prismicio";
import CourseInfo from "../../components/CourseInfo";
import Header from "../../components/Header";
import { CoursesType } from "../../types/courses.type";

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface CursosProps {
  course: {
    data: CoursesType
  }
}

export default function Cursos({ course }: CursosProps) {
  return (
    <>
      <Header />

      <main>
        <CourseInfo 
          courses={course}
        />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params,previewData }) => {
  const { slug } = params as IParams;

  const client = createClient({ previewData });

  const course = await client.getByUID('title', slug, { graphQuery: `
  {
    title {
      title
      content
      teachers {
        teacher {
          name
          photo
        }
      }
      images {
        card
        banner
      }
    }
  }
` });
  
  // if (data.courses.length === 0) {
  //   return {
  //     redirect: {
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   }
  // }

  // const courses = data.courses[0];

  return {
    props: {
      course
    },
  } 
}
