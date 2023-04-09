//fetching random color based on letters
export function fetchRandomColor(initials: string) {

    // Generate a random color based on the initials
    const charCode = initials.charCodeAt(0);
    let charCodev1: number = 0;
    initials.length > 1 ? charCodev1 = initials.charCodeAt(1) : null
    const red = ((charCode + charCodev1) * 7) % 256;
    const green = ((charCode + charCodev1) * 13) % 256;
    const blue = ((charCode + charCodev1) * 23) % 256;
    const color = `rgb(${red}, ${green}, ${blue})`;

    // Avoid white color and return random color
    return color === '#ffffff' ? '#cccccc' : color;
}