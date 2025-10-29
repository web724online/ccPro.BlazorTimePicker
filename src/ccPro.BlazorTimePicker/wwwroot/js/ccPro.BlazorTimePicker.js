export function ccproShowTimePicker(input) {
    if (input && typeof input.showPicker === "function") {
        input.showPicker();
    }
}
