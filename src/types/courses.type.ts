export type CoursesType = {
  id: string;
  first_publication_date: string;
  title: string;
  teachers: {
    teacher: {
      id: string;
      data: {
        name: string;
        photo: {
          url: string;
        }
      }
    }
  }[];
  images: {
    card: {
      url: string;
    };
    banner: {
      url: string;
    }
  }[]
  content: any
}