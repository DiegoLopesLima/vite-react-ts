import { FormEvent, useContext, useState } from "react";
import { Icon } from '@iconify/react';

import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Character from "@/models/Character";
import { FormContext } from "../..";
import FormStep from "@/enums/FormStep";

export default function FormCharacters() {
  const emptyCharacterProps = { name: '', description: '' };
  const [characters, setCharacters] = useState<Character[]>([new Character(emptyCharacterProps)]);
  const { handleUpdatePayload, handleGoToStep } = useContext(FormContext);

  function handleAddCharacter() {
    setCharacters([...characters, new Character(emptyCharacterProps)]);
  }

  function handleCharacterChange(character: Character, value: string) {
    setCharacters(state => state.map(item => {
      if (item.id === character.id) {
        return { ...item, name: value }
      }

      return item;
    }));
  }

  function handleRemoveCharacter(character: Character) {
    setCharacters(state => state.filter(item => item.id !== character.id));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleUpdatePayload({ characters });
    handleGoToStep(FormStep.Intro);
  }

  return (
    <section className="w-[768px] mx-auto">
      <h3 className="text-xl font-semibold mb-4">Quais serão os personagens?</h3>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {characters.map((character, index) => {
          const isLast = index === characters.length - 1;
          const reachedMaxItems = characters.length < 5;

          return (
            <div key={character.id} className="flex items-end gap-2">
              <TextField
                id={`inputCharacterName${character.id}`}
                label={`Personagem ${index + 1}`}
                value={character.name}
                autoFocus
                className="flex-1"
                onChange={event => handleCharacterChange(character, event.target.value)}
              />

              {isLast && reachedMaxItems && (
                <Button onClick={handleAddCharacter}>
                  <Icon icon="mdi:plus" />

                  <span className="sr-only">Adicionar personagem</span>
                </Button>
              )}

              {characters.length > 1 && (
                <Button onClick={() => handleRemoveCharacter(character)} variant="danger">
                  <Icon icon="mdi:close" />

                  <span className="sr-only">Remover</span>
                </Button>
              )}
            </div>
          );
        })}

        <div className="flex gap-4 justify-end">
          <Button type="submit">Avançar</Button>
        </div>
      </form>
    </section>
  );
}
