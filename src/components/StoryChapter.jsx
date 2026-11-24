
import { ChevronLeft, ChevronRight } from "lucide-react";

function StoryChapter({
    chapter,
    onNext,
    onPrevious,
    isFirst,
    isLast
}) {

    return (
        <section className="story-screen">

            <div
                key={chapter.id}
                className="story-content"
                aria-live="polite"
            >

                <span className="chapter-subtitle">
                    {chapter.subtitle}
                </span>

                <h1>{chapter.title}</h1>

                <div className="story-separator">
                    <span />
                    <span className="separator-heart">♥</span>
                    <span />
                </div>

                <p className="story-text">
                    {chapter.text}
                </p>

                <div className="story-navigation">

                    {!isFirst && (
                        <button
                            className="previous-button"
                            onClick={onPrevious}
                        >
                            <ChevronLeft size={18} />
                            Précédent
                        </button>
                    )}

                    <button
                        className="next-button"
                        onClick={onNext}
                    >
                        {chapter.button}
                        <ChevronRight size={18} />
                    </button>

                </div>

            </div>

        </section>
    );
}

export default StoryChapter;
