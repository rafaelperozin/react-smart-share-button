export const usePrintAction = () => {
  const printIt = (): void => window.print();

  return { printIt };
};
