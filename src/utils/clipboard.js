import Clipboard from "clipboard";

export const handleClipboard = function(text, event) {
  return new Promise((resolve, reject) => {
    const clipboard = new Clipboard(event.target, {
      text: () => text
    });
    clipboard.on("success", () => {
      clipboard.off("error");
      clipboard.off("success");
      clipboard.destroy();
      resolve("success");
    });
    clipboard.on("error", () => {
      clipboard.off("error");
      clipboard.off("success");
      clipboard.destroy();
      reject("error");
    });
    clipboard.onClick(event);
  });
};
