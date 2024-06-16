document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn, .btn-operator, .btn-clear, .btn-equal");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const value = button.getAttribute("data-value");
            console.log(value);

            if (value === "ClrScr") {
                display.textContent = "0";
            } else if (value === "=") {
                try {
                    display.textContent = calculate(display.textContent);
                } catch (error) {
                    display.textContent = "Error";
                }
            } else {
                if (display.textContent === "0" || display.textContent === "Error") {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
            }
        });
    });

    function calculate(expression) {
        const ValidExpression = expression.replace(/[^-()\d/*+.]/g, '');
        return new Function('return ' + ValidExpression)();
    }
});
