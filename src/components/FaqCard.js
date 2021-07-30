import {AccordionItem,Box,AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react'
export default function FaqCard({title,description}) {
    return (
        <div className="w-full mb-4 flex justify-center">
            <AccordionItem className="bg-white w-full p-4 shadow-lg lg:w-8/12 rounded-xl overflow-hidden">
                <h2>
                <AccordionButton className="">
                    <Box flex="1" textAlign="left">
                   <b>{title}</b>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <p className="text-sm">{description}</p>
                </AccordionPanel>
            </AccordionItem>
        </div>
    );
}