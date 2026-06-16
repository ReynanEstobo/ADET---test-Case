// export function isValidPassword(password) {
//     if (password.length >= 8){
//         return true;
//     }else if (password.length <= 8){
//         return false;
//     }else if (password.length === 0){
//         return false;
//     }
// }

// export function isContains(password){
//     if (/[A-Z]/.test(password)) {
//         return true;
//     }else {
//         return false;
//     }
// }

export function isValidPassword(password) {
    if (password.length == 0) {
        return false;
    }

    if (password.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    return true;
}

export function calculateGrade(prelim, midterm, finals, lab) {
    const total = prelim + midterm + finals + lab;

    if (total >= 95) {
        return 1.0;
    } else if (total >= 90) {
        return 1.25;
    } else if (total >= 85) {
        return 1.5;
    } else if (total >= 80) {
        return 1.75;
    } else if (total >= 75) {
        return 2.0;
    } else {
        return 5.0; // Failed
    }
}
