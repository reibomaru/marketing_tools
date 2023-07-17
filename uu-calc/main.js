const button = document.getElementById("button")
const uu_open_rate_input = document.getElementById("uu-open-rate")
const count_of_derivery = document.getElementById("count-of-derivery")
const result_display = document.getElementById("result_display")
button.addEventListener("click", () => {
    const uuOpenRate = Number(uu_open_rate_input.value)
    const countOfDerivery = Number(count_of_derivery.value)
    const result = Module.ccall(
        "uuOpenRate2OpenRate",  // name of C function
        "number",  // return type
        ["number", "number"],  // argument types
        [uuOpenRate, countOfDerivery],  // arguments
    );
    result_display.textContent = result
})

const button2 = document.getElementById("button_2")
const opne_rate_input = document.getElementById("open-rate")
const count_of_derivery_2 = document.getElementById("count-of-derivery-2")
const result_display_2 = document.getElementById("result_display_2")
button2.addEventListener("click", () => {
    const openRate = Number(opne_rate_input.value)
    const countOfDerivery2 = Number(count_of_derivery_2.value)
    const result = Module.ccall(
        "openRate2UuOpenRate",  // name of C function
        "number",  // return type
        ["number", "number"],  // argument types
        [openRate, countOfDerivery2],  // arguments
    );
    result_display_2.textContent = result
})