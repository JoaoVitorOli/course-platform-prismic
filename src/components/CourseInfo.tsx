import {
  Box,
  Container,
  Stack,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { PrismicRichText } from '@prismicio/react';
import { CoursesType } from '../types/courses.type';
import TeacherCard from './TeacherCard';

interface CourseInfoProps {
  courses: {
    data: CoursesType;
  }
}

export default function CourseInfo({ courses }: CourseInfoProps) {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              courses.data.images[0].banner.url
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {courses.data.title}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <PrismicRichText field={courses.data.content} />
            </VStack>
          </Stack>

          <Stack flexDir={"row"} gap={8}>
            {courses.data.teachers.map(item => (
              <TeacherCard 
                key={item.teacher.id}
                name={item.teacher.data.name}
                picture={item.teacher.data.photo.url}
              />
            ))}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}