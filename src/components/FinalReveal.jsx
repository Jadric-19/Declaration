
import { Heart, MessageCircle } from "lucide-react";
import personalization from "../data/personalization";

function FinalReveal() {
    return (
        <section className="story-screen">
            <div className="story-content">
                <span className="chapter-subtitle">
                    UNE NOUVELLE HISTOIRE
                </span>

                <Heart className="question-heart" size={38} />

                <h1>Alors, enchanté !</h1>

                <p className="story-text">
                    Celui qui a imaginé cette petite histoire,
                    et qui aimerait apprendre à te connaître,
                    s'appelle...
                </p>

                <h2 className="revealed-name">
                    {personalization.authorName}
                </h2>

                <p className="story-text">
                    Merci d'avoir pris le temps de découvrir
                    ces quelques mots. Peut-être que ceci
                    est le début d'une belle connaissance.
                </p>

                {personalization.contactUrl && (
                    <a
                        className="contact-button"
                        href={personalization.contactUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MessageCircle size={18} />
                        Faire connaissance
                    </a>
                )}
            </div>
        </section>
    );
}

export default FinalReveal;
