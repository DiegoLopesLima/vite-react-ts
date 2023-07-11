import { FormEvent, useContext, useState } from "react";

import Button from "@/components/Button";
import FormStep from "@/enums/FormStep";

import { FormContext } from "../..";

export default function FormIntro() {
  const { payload, handleUpdatePayload, handleGoToStep } = useContext(FormContext);
  const [intro, setIntro] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleUpdatePayload({ ...payload, intro });
  }

  function handleBack() {
    handleGoToStep(FormStep.Characters);
  }

  return (
    <div className="w-[768px] mx-auto">
      <h3 className="text-xl font-semibold mb-4">Quer adicionar uma introdução sobre os personagens ou a história?</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={intro}
          onChange={event => setIntro(event.target.value)}
          autoFocus
          className="flex w-full py-2 px-4 rounded-md border-0.5 border-neutral-500 text-white bg-white/20 items-center h-24"
        ></textarea>

        <div className="flex justify-end gap-4">
          <Button onClick={handleBack} variant="secondary">Voltar</Button>

          <Button type="submit">Gerar história</Button>
        </div>
      </form>
    </div>
  );
}
