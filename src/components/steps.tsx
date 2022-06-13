import React from "react";
import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

type StepItem = {
  key: React.Key;
  label: React.ReactNode;
  content: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  clickDisabled?: boolean;
};

export interface StepsProps {
  onClickStep?: (key: React.Key) => Promise<void>;
  steps: StepItem[];
  activeStep: React.Key;
  vertical?: boolean;
}

export function Steps({
  activeStep,
  steps,
  vertical,
  onClickStep,
}: StepsProps) {
  const stepsKeys = steps.reduce((keys, { key }, index) => {
    keys[key] = index;
    return keys;
  }, {} as { [key: React.Key]: number });

  return (
    <Box>
      <Stepper
        activeStep={stepsKeys[activeStep]}
        alternativeLabel={!vertical}
        orientation={vertical === true ? "vertical" : "horizontal"}
        style={{
          padding: 0,
        }}
      >
        {steps.map(
          ({ label, content, disabled, clickDisabled, error, key }) => {
            const isCurrentStep = key === activeStep;
            const isNextStep = stepsKeys[key] > stepsKeys[activeStep];
            const allowNextStep = error || disabled === false;
            const isClickNotAllowed =
              clickDisabled ||
              disabled ||
              isCurrentStep ||
              (isNextStep && !allowNextStep);

            const errorProp = disabled || clickDisabled ? undefined : error;
            const onClickProp = isClickNotAllowed
              ? undefined
              : onClickStep && (() => onClickStep(key));

            return (
              <Step key={key} disabled={disabled}>
                <StepLabel
                  error={errorProp}
                  onClick={onClickProp}
                  style={
                    isClickNotAllowed
                      ? undefined
                      : {
                          cursor: "pointer",
                        }
                  }
                >
                  {label}
                </StepLabel>
                {vertical && <StepContent>{content}</StepContent>}
              </Step>
            );
          }
        )}
      </Stepper>

      {!vertical && (
        <Box marginTop={1}>{steps[stepsKeys[activeStep]].content}</Box>
      )}
    </Box>
  );
}
