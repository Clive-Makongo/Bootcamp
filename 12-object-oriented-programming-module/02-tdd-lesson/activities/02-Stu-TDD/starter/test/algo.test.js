const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse the text", () => {
      let str = "hello";
      let rev = "olleh";

      const algo = new Algo();
      const result = algo.reverse(str);

      expect(result).toEqual(rev);
    })

  });

  describe("isPalindrome", () => {
    it("should check if a string is a palindrome", () => {
      let pal = "racecar"

      const algo = new Algo();
      const result = algo.isPalindrome(pal);

      expect(pal).toEqual(result);

      describe("isPalindrome", () => {
        it("should return true if a string is a palindrome", () => {
          const str = "racecar";

          const result = new Algo().isPalindrome(str);

          expect(result).toEqual(true);
        });

        it("should return false if a string is not a palindrome", () => {
          const str = "neon";

          const result = new Algo().isPalindrome(str);

          expect(result).toEqual(false);
        });
      });
    })
   
  });

  describe("capitalize", () => {
    
  });
});
