import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TransitionWrapper from './TransitionWrapper';
import ProblemPage1 from './ProblemPage1';
import ProblemPage2 from './ProblemPage2';
import ProblemPage3 from './ProblemPage3';
import ProblemPage4 from './PorblemPage4';
import ProblemPage5 from './ProblemPage5';
import ProblemPage6 from './ProblemPage6';
import ProblemPage7 from './ProblemPage7';
import ProblemPage8 from './ProblemPage8';
import ProblemPage9 from './ProblemPage9';
import ProblemPage10 from './ProblemPage10';

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
);

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);

const PageList = [
    <ProblemPage1 />,
    <ProblemPage2 />,
    <ProblemPage3 />,
    <ProblemPage4 />,
    <ProblemPage5 />,
    <ProblemPage6 />,
    <ProblemPage7 />,
    <ProblemPage8 />,
    <ProblemPage9 />,
    <ProblemPage10 />
]

const ProblemPage = ({ handlePrev, handleNext, children, currentId }) => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* 主要內容區塊 (包含左右按鈕) */}
        <main className="flex-1 flex items-start justify-center p-4 sm:p-8 gap-4">
            {/* 左側：上一題按鈕 */}
            <div className="hidden md:flex flex-col justify-center h-[calc(100vh-100px)] sticky top-20">
                <button
                    onClick={handlePrev}
                    className="p-3 rounded-full shadow-lg transition-all bg-white text-gray-700 hover:bg-blue-500 hover:text-white hover:scale-110"
                >
                    <ChevronLeft />
                </button>
                <span className="text-xs text-center mt-2 text-gray-500">
                    {
                        currentId == 1 ? ("回首頁") : ("上一題")
                    }
                </span>
            </div>

            {/* 中間：主要內容區 */}
            {children}

            {/* 右側：下一題按鈕 */}
            <div className="hidden md:flex flex-col justify-center h-[calc(100vh-100px)] sticky top-20">
                <button
                    onClick={handleNext}
                    className="p-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-blue-500 hover:text-white transition-all hover:scale-110"
                >
                    <ChevronRight />
                </button>
                <span className="text-xs text-center mt-2 text-gray-500">
                    {
                        currentId == PageList.length ? ("回首頁") : ("下一題")
                    }
                </span>
            </div>
        </main>
    </div>
);

const ProblemPageLayout = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const currentId = parseInt(id) || 1;
    const [movingDirection, setMovingDirection] = useState('left');
    const handlePrev = () => {
        setMovingDirection('right')
        if (currentId > 1) {
            navigate(`/problem/${currentId - 1}`);
        } else {
            navigate("/")
        }
    };
    const handleNext = () => {
        setMovingDirection('left')
        if (currentId < PageList.length) {
            navigate(`/problem/${currentId + 1}`);
        } else {
            navigate("/")
        }
    };
    useEffect(() => {
        if (currentId > PageList.length || id > PageList.length) {
            navigate("/")
        }
    }, [id, currentId])
    return (
        <TransitionWrapper direction={movingDirection}>
            <ProblemPage
                handlePrev={handlePrev}
                handleNext={handleNext}
                children={PageList[currentId - 1]}
                currentId={currentId}
            />
        </TransitionWrapper>
    );
};

export default ProblemPageLayout;