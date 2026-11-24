
import { useState } from "react";
import { Heart, Mail } from "lucide-react";

function Intro({ onStart }) {

    const [isOpening, setIsOpening] = useState(false);

    function handleStart() {
        setIsOpening(true);

        setTimeout(() => {
            onStart();
        }, 800);
    }

    return (
        <section className={`intro ${isOpening ? "intro-exit" : ""}`}>

            <div className="intro-content">

                <div className="envelope">
                    <Mail size={48} strokeWidth={1.2} />
                    <Heart className="envelope-heart" size={18} />
                </div>

                <p className="intro-subtitle">
                    UNE PETITE HISTOIRE
                </p>

                <h1>
                    Une histoire que
                    <br />
                    je n'ai jamais racontée...
                </h1>

                <p className="intro-description">
                    Il y a quelque chose que j'aimerais
                    partager avec toi.
                    Prends quelques instants...
                </p>

                <button
                    className="start-button"
                    onClick={handleStart}
                    disabled={isOpening}
                >
                    Découvrir mon histoire
                    <Heart size={17} />
                </button>

                <p className="intro-footer">
                    Une histoire, quelques mots, un sentiment.
                </p>

            </div>

        </section>
    );
}

export default Intro;
