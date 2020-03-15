/**
 * Creates a render loop and calls the given callbacks every frame.
 * 
 * Technique by: https://codeincomplete.com/posts/javascript-game-foundations-the-game-loop/
 * 
 * @param {Function} update callback
 * @param {Function} render callback
 * @param {Number} fps
 */
export default function loop(update, render, fps = 60) {
    let delta = 0
    let last = window.performance.now()
    let stopped = false
    let animationId

    function animation() {
        const now = window.performance.now()
        const step = 1 / fps
        delta = delta + Math.min(1, (now - last) / 1000)

        while(delta > step) {
            delta -= step
            update()
        }

        render()

        last = now

        if (!stopped) {
            animationId = requestAnimationFrame(animation)
        }
    }
    
    animationId = requestAnimationFrame(animation)

    return () => {
        stopped = true
        cancelAnimationFrame(animationId)
    }
}

