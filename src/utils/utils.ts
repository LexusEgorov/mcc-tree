export function generator(start: number) : () => number{
  let generated = ++start;

  return function(): number{
    return generated++;
  }
}