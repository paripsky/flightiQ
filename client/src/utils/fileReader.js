/**
 * reads a file and returns it as text
 * @param {File} file
 * @returns {Promise<string>}
 */
export const readFileToString = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(`couldn't read file ${file.name}`);
    reader.readAsText(file);
  });
};
