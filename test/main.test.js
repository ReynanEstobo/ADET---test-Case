import { describe, expect, it } from "vitest";
import { calculateGrade, isValidPassword, login } from "../src/main";

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

describe("login", () => {
  it("should return success message if the email and password is correct", () => {
    expect(
      login("juandelacruz@email.com", "Str0ngp@ssword")
    ).toEqual("Login Successful");
  });

  it("should throw an error if email do not have @", () => {
    expect(() => {
      login("reynangmail.com", "Str0ngp@ssword");
    }).toThrow("Invalid email");
  });

  it("should throw an error if email do not have domain", () => {
    expect(() => {
      login("reynan@gmail", "Str0ngp@ssword");
    }).toThrow("Invalid email");
  });

  it("should throw an error if email is empty", () => {
    expect(() => {
      login("", "Str0ngp@ssword");
    }).toThrow("Invalid email");
  });

  it("should throw an error if email is null", () => {
    expect(() => {
      login(null, "Str0ngp@ssword");
    }).toThrow("Invalid email");
  });

  it("should throw and error if password is less than 8 characters", () => {
    expect(() => {
      login("juandelacruz@email.com", "Pass1!");
    }).toThrow("Weak Password");
  });

  it("should throw an error if password is empty", () => {
    expect(() => {
      login("reynan@gmail.com", "");
    }).toThrow("Weak Password");
  });

  it("should throw an error if password is null", () => {
    expect(() => {
      login("reynan@gmail.com", null);
    }).toThrow("Weak Password");
  });

 it("should return warning message when email is incorrect", () => {
  expect(
    login("reynan@gmail.com", "Str0ngp@ssword")
  ).toEqual("Incorrect email or password");
  });

  it("should return warning message when password is incorrect", () => {
  expect(
    login("juandelacruz@email.com", "Wr0ngP@ssword")
  ).toEqual("Incorrect email or password");
  });

});