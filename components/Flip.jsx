"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Flip = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-1.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-2.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip2 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-sm overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-3.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-4.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip3 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-sm overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-5.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-6.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip4 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-7.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-1/item-8.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip5 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-sm overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-2/item-2.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-2/item-3.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip6 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-2/item-4.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-2/item-5.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip7 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-2/item-6.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-2/item-7.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip8 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-3/item-2.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/branding-3/item-3.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip9 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-sm overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-1/item-3.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-1/item-4.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip10 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-sm overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-1/item-5.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-1/item-6.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip11 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-2/item-1.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-2/item-2.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip12 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-xl overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-2/item-5.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/impresos-2/item-6.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip13 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/contenido-1/item-4.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/contenido-1/item-9.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};


const Flip14 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/contenido-1/item-7.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/contenido-1/item-8.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip15 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/contenido-1/item-8.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/contenido-1/item-5.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip16 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-98.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-99.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip17 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-111.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-112.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip18 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-121.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-122.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip19 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-128.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-129.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

const Flip20 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-md overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-137.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-138.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};
const Flip21 = ({ frontImageSrc, backImageSrc }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card-container-sm overflow-hidden">
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-23.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="flip-card-back">
                    <Image
                        className='h-auto w-[100%] rounded-[15px]'
                        src="/grid/item-24.avif"
                        alt="Front Image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

export { Flip, Flip2, Flip3, Flip4, Flip5, Flip6, Flip7, Flip8, Flip9, Flip10, Flip11, Flip12, Flip13, Flip14, Flip15, Flip16, Flip17, Flip18, Flip19, Flip20, Flip21 };
