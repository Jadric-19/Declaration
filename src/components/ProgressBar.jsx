
function ProgressBar({ current, total }) {

    const progress = ((current + 1) / total) * 100;

    return (
        <div className="progress-container">

            <div className="progress-info">
                <span>NOTRE HISTOIRE</span>

                <span>
                    {current + 1} / {total}
                </span>
            </div>

            <div
                className="progress-track"
                role="progressbar"
                aria-label="Progression de l'histoire"
                aria-valuemin={1}
                aria-valuemax={total}
                aria-valuenow={current + 1}
            >
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

        </div>
    );
}

export default ProgressBar;
