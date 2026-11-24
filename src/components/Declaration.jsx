
import { Heart, ArrowRight } from "lucide-react";

function Declaration({
    onAccept,
    onDecline,
    saving,
    error
}) {
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

                <p className="privacy-notice">
                    Ton choix sera transmis à la personne
                    qui t'a envoyé cette histoire.
                </p>

                <div className="declaration-options">
                    <button
                        className="accept-button"
                        onClick={onAccept}
                        disabled={saving}
                    >
                        {saving ? "Enregistrement..." : "Oui, avec plaisir"}
                        {!saving && <ArrowRight size={18} />}
                    </button>

                    <button
                        className="decline-button"
                        onClick={onDecline}
                        disabled={saving}
                    >
                        Je préfère ne pas donner suite
                    </button>
                </div>

                {error && (
                    <p className="answer-feedback" role="alert">
                        {error}
                    </p>
                )}
            </div>
        </section>
    );
}

export default Declaration;
