export default function tempDecorator(temperature: number): string {
  const roundTemp = Math.round(temperature);
  const decoratedTemp = roundTemp + String.fromCharCode(8451);
  return decoratedTemp;
}