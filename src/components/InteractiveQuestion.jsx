import { useState } from "react";
import { Heart } from "lucide-react";

function InteractiveQuestion({ onContinue }) {
    const [answer, setAnswer] = useState(null);

    return (
        <section className="story-screen">
            <div className="story-content" key="interactive-question">

                <span className="chapter-subtitle">
                    UNE PETITE PAUSE
                </span>

                <h1>Une petite question...</h1>

                <div className="story-separator">
                    <span />
                    <Heart size={16} className="separator-heart" />
                    <span />
                </div>

                <p className="story-text">
                    À ton avis, pourquoi cette petite histoire
                    t'est-elle destinée ?
                </p>

                <div className="answer-options">

                    <button
                        className={`answer-button ${answer === "curiosity" ? "selected" : ""}`}
                        onClick={() => setAnswer("curiosity")}
                    >
                        J'ai une petite idée...
                    </button>

                    <button
                        className={`answer-button ${answer === "nothing" ? "selected" : ""}`}
                        onClick={() => setAnswer("nothing")}
                    >
                        Je n'en ai aucune idée.
                    </button>

                </div>

                {answer && (
                    <div className="answer-feedback" aria-live="polite">
                        <p>
                            {answer === "curiosity"
                                ? "Alors, laisse-moi te raconter la suite..."
                                : "C'est justement ce que cette histoire va t'expliquer..."}
                        </p>

                        <button
                            className="next-button"
                            onClick={onContinue}
                        >
                            Continuer
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}

export default InteractiveQuestion;