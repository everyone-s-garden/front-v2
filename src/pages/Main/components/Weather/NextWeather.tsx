import { Box, Flex, createIcon, useBoolean } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const ArrowIcon = createIcon({
  displayName: 'ArrowIcon',
  viewBox: '0 0 20 20',
  path: (
    <path
      d="M0.160156 5.32424C0.160156 5.15627 0.226563 4.98438 0.355469 4.85547C0.613281 4.59766 1.03516 4.59766 1.29297 4.85547L10.1172 13.6797L18.8125 4.98438C19.0703 4.72656 19.4922 4.72656 19.75 4.98438C20.0078 5.24219 20.0078 5.66406 19.75 5.92188L10.5859 15.0898C10.3281 15.3477 9.90625 15.3477 9.64844 15.0898L0.355469 5.79688C0.222656 5.66406 0.160156 5.49611 0.160156 5.32424Z"
      fill="#282828"
    />
  ),
});

const NextWeather = () => {
  const [isOpen, setIsOpen] = useBoolean();

  return (
    <Box>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, overflow: 'hidden' }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et debitis
            maiores nostrum ducimus consectetur. Nesciunt, facilis. Placeat unde
            aliquid dolores nobis? Numquam itaque deleniti vero molestiae
            dignissimos, consequatur omnis eveniet.
          </motion.div>
        )}
      </AnimatePresence>
      <Flex
        alignItems="center"
        justifyContent="center"
        h="48px"
        borderTop="1px"
        borderColor="gray.100"
        color="gray.700"
        fontSize={{ mobile: '16px', tablet: '20px' }}
        fontWeight="semiBold"
        gap="16px"
        cursor="pointer"
        onClick={setIsOpen.toggle}
      >
        {isOpen ? '날씨 올리기' : '날씨 더보기'}{' '}
        <ArrowIcon
          w={{ mobile: '16px', tablet: '20px' }}
          h={{ mobile: '16px', tablet: '20px' }}
          transition="transform 0.3s"
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'}
        />
      </Flex>
    </Box>
  );
};

export default NextWeather;
