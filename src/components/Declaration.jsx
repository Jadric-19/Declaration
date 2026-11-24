
import { Heart, ArrowRight } from "lucide-react";

function Declaration({ onAccept, onDecline }) {
    return (
        <section className="story-screen">
            <div className="story-content">
                <span className="chapter-subtitle">
                    LE MOMENT DE VÉRITÉ
                </span>

                <Heart className="question-heart" size={34} />

                <h1>Une dernière question...</h1>

                <p className="story-text">
                    Je ne prétends pas te connaître.
                    Mais j'aimerais avoir la chance de découvrir
                    la personne que tu es, si tu en as envie.
                </p>

                <p className="declaration-question">
                    Accepterais-tu de faire connaissance avec moi ?
                </p>

                <div className="declaration-options">
                    <button
                        className="accept-button"
                        onClick={onAccept}
                    >
                        Oui, avec plaisir
                        <ArrowRight size={18} />
                    </button>

                    <button
                        className="decline-button"
                        onClick={onDecline}
                    >
                        Je préfère ne pas donner suite
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Declaration;
