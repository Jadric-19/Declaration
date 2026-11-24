import { useState } from "react";

export function useStory(totalChapters) {

    const [currentChapter, setCurrentChapter] = useState(0);

    function nextChapter() {
        if (currentChapter < totalChapters - 1) {
            setCurrentChapter(currentChapter + 1);
        }
    }

    function previousChapter() {
        if (currentChapter > 0) {
            setCurrentChapter(currentChapter - 1);
        }
    }

    return {
        currentChapter,
        nextChapter,
        previousChapter
    };
}