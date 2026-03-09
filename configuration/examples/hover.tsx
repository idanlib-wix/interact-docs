import { Interact } from '@wix/interact';
        
        // Generate hover interactions for circles
        function generateCircleInteractions(prefix) {
            return [
                {
                    key: `${prefix}-circle-1`,
                    trigger: 'hover',
                    effects: [
                        {
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'scale(1.1)' }],
                            },
                        },
                        {
                            selector: '.fill-circle',
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'scale(1)' }],
                            },
                        },
                        {
                            key: `${prefix}-circle-2`,
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'translate(20px, -20px)' }],
                            },
                        },
                        {
                            key: `${prefix}-circle-3`,
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'translate(20px, -20px)' }],
                            },
                        },
                    ],
                },
                {
                    key: `${prefix}-circle-2`,
                    trigger: 'hover',
                    effects: [
                        {
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'scale(1.1)' }],
                            },
                        },
                        {
                            selector: '.fill-circle',
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'scale(1)' }],
                            },
                        },
                        {
                            key: `${prefix}-circle-1`,
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'translate(-20px, 20px)' }],
                            },
                        },
                        {
                            key: `${prefix}-circle-3`,
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'translate(20px, -20px)' }],
                            },
                        },
                    ],
                },
                {
                    key: `${prefix}-circle-3`,
                    trigger: 'hover',
                    effects: [
                        {
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'scale(1.1)' }],
                            },
                        },
                        {
                            selector: '.fill-circle',
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'scale(1)' }],
                            },
                        },
                        {
                            key: `${prefix}-circle-1`,
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'translate(-20px, 20px)' }],
                            },
                        },
                        {
                            key: `${prefix}-circle-2`,
                            transition: {
                                duration: 400,
                                easing: 'ease-out',
                                styleProperties: [{ name: 'transform', value: 'translate(-20px, 20px)' }],
                            },
                        },
                    ],
                },
            ];
        }
        
        // Configuration
        const config = {
            interactions: generateCircleInteractions('hover'),
        };
        
        // Respect reduced motion settings
        Interact.forceReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Initialize Interact
        Interact.create(config);
