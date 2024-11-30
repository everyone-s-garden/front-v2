import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon } from '@/assets/icons';
import { PANELS } from '../../constants/panels';
import { userFeedbackFabStore } from '@/stores/userFeedbackFabStore';

export default function MobilePanel() {
  const setModalOpen = userFeedbackFabStore((state) => state.setModalOpen);

  return (
    <Accordion allowMultiple w="100%" borderColor="gray.100">
      {PANELS.map((item, index) => (
        <AccordionItem key={index}>
          {({ isExpanded }) => (
            <>
              <AccordionButton
                px="0"
                py="20px"
                fontSize="18px"
                fontWeight="semiBold"
                justifyContent="space-between"
                _hover={{}}
                onClick={() => {
                  if (item.subPages) return;

                  setModalOpen();
                }}
              >
                {item.tabName}
                {item.subPages && (
                  <ArrowDownIcon
                    style={{
                      rotate: isExpanded ? '180deg' : '0deg',
                      transition: 'rotate 0.2s ease-in-out',
                    }}
                  />
                )}
              </AccordionButton>
              {item.subPages && (
                <AccordionPanel
                  p="0"
                  display="flex"
                  flexDir="column"
                  gap="18px"
                  pb="20px"
                >
                  {item.subPages.map((subPage) => (
                    <Box
                      as={Link}
                      key={subPage.tabName}
                      color="sub"
                      _hover={{ color: 'black' }}
                      to={subPage.href}
                    >
                      {subPage.tabName}
                    </Box>
                  ))}
                </AccordionPanel>
              )}
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
