import { Flex, Text } from '@chakra-ui/react';
import { Grade } from '@/types/grade';
import { getFormattedUserGrade } from '@/utils/grade/getFormattedUserGrade';
import { getGradeColor } from '@/utils/grade/getGradeColor';
import { getSmallGradeIcon } from '@/utils/grade/getSmallGardeIcon';

export default function SmallGradeCard({ grade }: { grade: Grade }) {
  const formattedGrade = getFormattedUserGrade(grade);
  const GradeIcon = getSmallGradeIcon(grade);
  const gradeColor = getGradeColor(grade);

  return (
    <Flex rounded="20px" p="6px 12px" gap="10px" bgColor={gradeColor}>
      <Text color="white" fontWeight="semiBold">
        {formattedGrade}
      </Text>
      <GradeIcon />
    </Flex>
  );
}
