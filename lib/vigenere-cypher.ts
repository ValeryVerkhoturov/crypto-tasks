export class VigenereCipher {
  private alphabet: string = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  private mod: number = this.alphabet.length;

  encrypt(text: string, key: string): string {
    return this.processText(text, key, 'encrypt');
  }

  decrypt(text: string, key: string): string {
    return this.processText(text, key, 'decrypt');
  }

  private processText(text: string, key: string, mode: 'encrypt' | 'decrypt'): string {
    let processedText = '';
    let keyIndex = 0;

    text = text.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (this.alphabet.includes(char)) {
        const charIndex = this.alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length];
        const keyCharIndex = this.alphabet.indexOf(keyChar);

        if (mode === 'encrypt') {
          processedText += this.alphabet[(charIndex + keyCharIndex) % this.mod];
        } else {
          let decodeIndex = (charIndex - keyCharIndex) % this.mod;
          if (decodeIndex < 0) {
            decodeIndex += this.mod;
          }
          processedText += this.alphabet[decodeIndex];
        }

        keyIndex++;
      } else {
        processedText += char;
      }
    }

    return processedText;
  }
}
