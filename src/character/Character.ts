import CharacterImages from "./CharacterImages";

interface Position {
  x: number;
  y: number;
}

enum Direction {
  DOWN = 0,
  UP = 1,
  LEFT = 2,
  RIGHT = 3,
}

const SIZE = 64;

class Character {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private position: Position = { x: 0, y: 0 };
  private direction: number = Direction.DOWN;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.runAnimationFrame();
  }

  private runAnimationFrame() {
    this.draw();
    requestAnimationFrame(this.runAnimationFrame.bind(this));
  }

  private draw() {
    const { x, y } = this.position;
    const image = this.getImageByDirection(0, false);

    if (!this.ctx || !image) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(image, x, y, SIZE, SIZE);
  }

  private getImageByDirection(direction: number, isWalking: boolean) {
    const { heayoun } = CharacterImages;

    switch (direction) {
      default:
        return heayoun;
    }
  }
}

export default Character;
