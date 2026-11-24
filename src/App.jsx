
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

// Services
import { saveResponse } from "./services/responseService";

// Styles
import "./styles/global.css";
import "./styles/intro.css";
import "./styles/story.css";

function App() {
    const [screen, setScreen] = useState("intro");
    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState("");

    const {
        currentChapter,
        nextChapter,
        previousChapter
    } = useStory(chapters.length);

    const chapter = chapters[currentChapter];

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

    function handleQuestionContinue() {
        nextChapter();
        setScreen("story");
    }

    async function handleChoice(choix) {
        if (saving) {
            return;
        }

        setSaving(true);
        setSaveError("");

        try {
            await saveResponse(choix);

            if (choix === "accepter") {
                setScreen("accepted");
            } else {
                setScreen("declined");
            }
        } catch (error) {
            console.error("Erreur Supabase :", error);

            setSaveError(
                "Impossible d'enregistrer ta réponse. Vérifie ta connexion et réessaie."
            );
        } finally {
            setSaving(false);
        }
    }

    // Introduction
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
                onAccept={() => handleChoice("accepter")}
                onDecline={() => handleChoice("refuser")}
                saving={saving}
                error={saveError}
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

    // Chapitres
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
