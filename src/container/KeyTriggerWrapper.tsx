import React from "react";
import { TextField, Button } from "@material-ui/core";
import { triggerKeyCodeWithReset } from "../triggers";

const KeyTriggerWrapper = () => {
  const [keyCode, setKeyCode] = React.useState("");
  const [resetKeyCode, setResetKeyCode] = React.useState("");
  const [delay, setDelay] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  const onTrigger = async () => {
    setIsRunning(true);
    await triggerKeyCodeWithReset({
      triggerKeyCode: keyCode,
      delay,
      resetKeyCode
    });
    setIsRunning(false);
  };

  const canTrigger = () => {
    if (isRunning) return false;
    return keyCode !== "" && resetKeyCode !== "" && delay > 0;
  };

  return (
    <div>
      <TextField
        label="KeyCode"
        variant="outlined"
        inputProps={{
          maxLength: 1
        }}
        value={keyCode}
        onChange={event => setKeyCode(event.target.value)}
      />

      <TextField
        label="ResetKeyCode"
        variant="outlined"
        inputProps={{
          maxLength: 1
        }}
        value={resetKeyCode}
        onChange={event => setResetKeyCode(event.target.value)}
      />

      <TextField
        label="Delay"
        variant="outlined"
        type="number"
        value={delay}
        onChange={event => setDelay(Number(event.target.value))}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={onTrigger}
          disabled={!canTrigger()}
        >
          Trigger
        </Button>
      </div>
    </div>
  );
};
export default KeyTriggerWrapper;
