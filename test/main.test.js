import { describe, expect, it } from "vitest";
import { calculateGrade, isValidPassword } from "../src/main";

describe("PasswordValidator", () => {
    it("Should return true if the password is greater than or equal to 8", () => {
        const password = "Password";
        expect(isValidPassword(password)).toBe(true);
    });

    it("Should return false if less than 8 characters", () => {
        const password = "Pass1";
        expect(isValidPassword(password)).toBe(false);
    });

    it("Should return false for empty input", () => {
        const password = "";
        expect(isValidPassword(password)).toBe(false);
    });

    it("Should return true when it contains an uppercase letter and is at least 8 characters", () => {
        const password = "sfdDpeedtest";
        expect(isValidPassword(password)).toBe(true);
    });

    it("Should return false when it does not contain an uppercase letter", () => {
        const password = "qwertyu";
        expect(isValidPassword(password)).toBe(false);
    });
});

describe("Grade Calculator", () => {
    it("should return 1.0 for a score of 95", () => {
        // Arrange
        const prelim = 15;
        const midterm = 10;
        const finals = 50;
        const lab = 20;

        // Act
        const result = calculateGrade(prelim, midterm, finals, lab);

        // Assert
        expect(result).toBe(1.0);
    });

    it("should return 1.25 for a score of 90", () => {
        // Arrange
        const prelim = 15;
        const midterm = 10;
        const finals = 45;
        const lab = 20;

        // Act
        const result = calculateGrade(prelim, midterm, finals, lab);

        // Assert
        expect(result).toBe(1.25);
    });

    it("should return 5.0 for a failing score", () => {
        // Arrange
        const prelim = 5;
        const midterm = 5;
        const finals = 30;
        const lab = 10;

        // Act
        const result = calculateGrade(prelim, midterm, finals, lab);

        // Assert
        expect(result).toBe(5.0);
    });
});
