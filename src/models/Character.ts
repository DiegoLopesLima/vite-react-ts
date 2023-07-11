export interface CharacterProps {
  name: string;
  description: string;
}

export default class Character {
  id: number;
  name: string;
  description: string;

  constructor({ name, description }: CharacterProps) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.description = description;
  }
}
