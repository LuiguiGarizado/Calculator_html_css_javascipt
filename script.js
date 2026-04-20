const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pressbotton = button.textContent;

        if(button.id === "c") {
            screen.textContent = "0";
            return;
        }

        if (button.id === "delete") {
            if (screen.textContent.length === 1 || screen.textContent === "ERROR!") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }
            if(button.id === 'equal') {
                try{
                const result =  eval(screen.textContent);
                    if (isNaN(result) || !isFinite(result)) {
                    pantalla.textContent = 'ERROR'
                } else {
                    screen.textContent = result;
                }
                } catch {
                    screen.textContent = 'ERROR';
                }
                    return;
                }

        if(screen.textContent === "0" || screen.textContent === "ERROR!") {
            screen.textContent = pressbotton;
        } else {
            screen.textContent += pressbotton;
        }
    })
})
