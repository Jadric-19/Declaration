
import { useState } from "react";

// Components
import Intro from "./components/Intro";
import StoryChapter from "./components/StoryChapter";
import InteractiveQuestion from "./components/InteractiveQuestion";
import Declaration from "./components/Declaration";
import FinalReveal from "./components/FinalReveal";
import Declined from "./components/Declined";
import ProgressBar from "./components/ProgressBar";

// Data and hooks
import { chapters } from "./data/story";
import { useStory } from "./hooks/useStory";

// Styles
import "./styles/global.css";
import "./styles/intro.css";
import "./styles/story.css";

function App() {
    const [screen, setScreen] = useState("intro");

    const {
        currentChapter,
        nextChapter,
        previousChapter
    } = useStory(chapters.length);

    const chapter = chapters[currentChapter];

    // Navigation entre les chapitres
    function handleNext() {
        if (currentChapter === 1) {
            setScreen("question");
            return;
        }

        if (currentChapter === chapters.length - 1) {
            setScreen("declaration");
            return;
        }

        nextChapter();
    }

    // Après la réponse à la question interactive
    function handleQuestionContinue() {
        nextChapter();
        setScreen("story");
    }

    // Écran d'introduction
    if (screen === "intro") {
        return (
            <Intro
                onStart={() => setScreen("story")}
            />
        );
    }

    // Question interactive
    if (screen === "question") {
        return (
            <>
                <ProgressBar
                    current={currentChapter}
                    total={chapters.length}
                />

                <InteractiveQuestion
                    onContinue={handleQuestionContinue}
                />
            </>
        );
    }

    // Déclaration finale
    if (screen === "declaration") {
        return (
            <Declaration
                onAccept={() => setScreen("accepted")}
                onDecline={() => setScreen("declined")}
            />
        );
    }

    // Révélation de l'identité
    if (screen === "accepted") {
        return <FinalReveal />;
    }

    // Réponse négative
    if (screen === "declined") {
        return <Declined />;
    }

    // Affichage des chapitres
    return (
        <>
            <ProgressBar
                current={currentChapter}
                total={chapters.length}
            />

            <StoryChapter
                chapter={chapter}
                onNext={handleNext}
                onPrevious={previousChapter}
                isFirst={currentChapter === 0}
                isLast={currentChapter === chapters.length - 1}
            />
        </>
    );
}

export default App;
