export const helper = () => {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  console.log(num % 2 == 0);
  return num % 2 == 0;
};
