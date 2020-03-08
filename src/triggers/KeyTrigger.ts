import { ipcRenderer as ipc } from "electron-better-ipc";

interface triggerKeyCodeWithResetProps {
  triggerKeyCode: string;
  delay: number;
  resetKeyCode: string;
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const triggerKeyCodeWithReset = async ({
  triggerKeyCode,
  delay,
  resetKeyCode
}: triggerKeyCodeWithResetProps) => {
  await ipc.callMain("trigger-key", triggerKeyCode);
  await timeout(delay * 1000);
  await ipc.callMain("trigger-key", resetKeyCode);
};
