import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

export default function CanvasConffeti() {
    let duration = 15 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const handleConfetti = () => {
        let interval: any = setInterval(function () {
            let timeLeft = animationEnd - Date.now();
            let colors = ['#bb0000', '#ffffff'];
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            let particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            // confetti(
            //     Object.assign({}, defaults, {
            //         particleCount,
            //         origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            //     })
            // );
            // confetti(
            //     Object.assign({}, defaults, {
            //         particleCount,
            //         origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            //     })
            // );
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });
        }, 250);
    };

    return (
        <div>
            <Button onClick={handleConfetti} className="bg-gradient-to-r from-cyan-500 to-blue-500">
                Press me many times
            </Button>
        </div>
    )
}
