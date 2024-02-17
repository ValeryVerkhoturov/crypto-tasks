export class MagicSquareCipher {
  private magicSquare: number[][]
  private magicSquareDimensions: number

  constructor(magicSquare: number[][]) {
    this.magicSquare = magicSquare;
    this.magicSquareDimensions = magicSquare.length;
  }

  encrypt(text: string): string {
    let encryptedText = Array(text.length).fill(null);

    for (let i = 0; i < text.length; i++) {
      const row = Math.floor(i / this.magicSquareDimensions);
      const col = i % this.magicSquareDimensions;
      const newPos = this.magicSquare[row][col];
      console.log(this.magicSquare, newPos)
      if (newPos < text.length) {
        encryptedText[newPos] = text[i];
      }
    }

    return encryptedText.join("");
  }

  decrypt(encryptedText: string): string {
    let decryptedText = Array(encryptedText.length).fill(null);

    for (let i = 0; i < encryptedText.length; i++) {
      const row = Math.floor(i / this.magicSquareDimensions);
      const col = i % this.magicSquareDimensions;
      const originalPos = this.magicSquare[row][col];
      if (originalPos < encryptedText.length) {
        decryptedText[i] = encryptedText[originalPos];
      }
    }

    return decryptedText.join("");
  }
}
