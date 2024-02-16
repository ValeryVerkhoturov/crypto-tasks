export class PlayfairCipher {
  private readonly key;
  private gridSize: number = 6;
  private grid: string[][] = [];
  private positionMap: Map<string, {row: number, col: number}> = new Map();

  constructor(key: string) {
    this.key = key;
    this.initializeGrid();
  }

  private initializeGrid(): void {
    const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    let keyString = Array.from(new Set(this.key.replace(/\s+/g, '').toUpperCase() + alphabet))
      .filter(char => alphabet.includes(char)).join('');

    for (let i = 0; i < this.gridSize; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        const char = keyString[(i * this.gridSize) + j];
        this.grid[i][j] = char;
        this.positionMap.set(char, { row: i, col: j });
      }
    }
  }

  encrypt(plaintext: string): string {
    return this.processText(plaintext, 'encrypt');
  }

  decrypt(ciphertext: string): string {
    return this.processText(ciphertext, 'decrypt');
  }

  private processText(inputText: string, mode: 'encrypt' | 'decrypt'): string {
    let processedText = inputText.toUpperCase().replace(/[^А-ЯЁ]+/g, "");
    let output = "";

    for (let i = 0; i < processedText.length; i += 2) {
      if (i + 1 >= processedText.length) {
        processedText += "Ь";
      }

      if (processedText[i] === processedText[i + 1]) {
        processedText = processedText.substring(0, i + 1) + "Ь" + processedText.substring(i + 1);
      }

      const pos1 = this.positionMap.get(processedText[i]);
      const pos2 = this.positionMap.get(processedText[i + 1]);

      if (pos1 && pos2) {
        let row1 = pos1.row;
        let col1 = pos1.col;
        let row2 = pos2.row;
        let col2 = pos2.col;

        if (row1 === row2) {
          col1 = this.mod((col1 + (mode === 'encrypt' ? 1 : -1)), this.gridSize);
          col2 = this.mod((col2 + (mode === 'encrypt' ? 1 : -1)), this.gridSize);
        } else if (col1 === col2) {
          row1 = this.mod((row1 + (mode === 'encrypt' ? 1 : -1)), this.gridSize);
          row2 = this.mod((row2 + (mode === 'encrypt' ? 1 : -1)), this.gridSize);
        } else {
          [col1, col2] = [col2, col1];
        }

        output += this.grid[row1][col1] + this.grid[row2][col2];
      }
    }

    return output;
  }

  private mod(n: number, m: number): number {
    return ((n % m) + m) % m;
  }
}
