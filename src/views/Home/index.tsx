import { createContext, useState } from "react";

import Container from "@/components/Container";
import Character from "@/models/Character";
import FormStep from "@/enums/FormStep";

import * as Form from './components/Form';
import classNames from "classnames";

interface StoryPayload {
  characters: Character[];
  intro?: string;
}

interface FormContextType {
  payload: StoryPayload | null;
  handleUpdatePayload: (partialPayload: Partial<StoryPayload>) => void;
  handleGoToStep: (step: FormStep) => void;
}

export const FormContext = createContext({} as FormContextType);

export default function Home() {
  const [payload, setPayload] = useState<StoryPayload | null>(null);
  const [step, setStep] = useState<FormStep>(FormStep.Characters);

  function handleUpdatePayload(partialPayload: Partial<StoryPayload>) {
    setPayload({ ...payload, ...partialPayload } as StoryPayload);
  }

  function handleGoToStep(step: FormStep) {
    setStep(step)
  }

  return (
    <section className="py-4">
      <Container>
        <h2 className="text-2xl font-semibold mb-4">Crie uma história</h2>

        <FormContext.Provider
          value={{
            payload,
            handleUpdatePayload,
            handleGoToStep
          }}
        >
          <div className={classNames({ hidden: step !== FormStep.Characters })}>
            <Form.Characters />
          </div>

          <div className={classNames({ hidden: step !== FormStep.Intro })}>
            <Form.Intro />
          </div>
        </FormContext.Provider>
      </Container>
    </section>
  );
}
