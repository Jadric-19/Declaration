
import { Heart } from "lucide-react";

function Declined() {
    return (
        <section className="story-screen">
            <div className="story-content">
                <Heart className="question-heart" size={32} />

                <h1>Merci pour ta sincérité.</h1>

                <p className="story-text">
                    Merci d'avoir pris le temps de lire cette histoire.
                    Je respecte totalement ton choix et te souhaite
                    sincèrement le meilleur.
                </p>

                <span className="chapter-subtitle">
                    PRENDS SOIN DE TOI ❤️
                </span>
            </div>
        </section>
    );
}

export default Declined;
