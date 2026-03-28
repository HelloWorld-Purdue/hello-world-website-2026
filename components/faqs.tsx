'use client';

import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ_SECTION_MIN_HEIGHT = 1200;

interface FaqsProps {
  faqs: Array<{ question: string; answer: string }>;
}

export default function Faqs ({ faqs }: FaqsProps) {
    return (
        <section
            id="faqs"
            className="py-20 px-4"
            style={{ minHeight: FAQ_SECTION_MIN_HEIGHT }}
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold mb-6 text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            elevation={0}
                            disableGutters
                            sx={{
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                marginBottom: '0.75rem',
                                '&:before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        color: 'var(--primary)',
                                    },
                                }}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    {faq.question}
                                </h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="text-card-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};
