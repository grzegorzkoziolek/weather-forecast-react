export default function tempDecorator(temperature: number): string {
  const roundTemp = Math.round(temperature);
  const decoratedTemp = roundTemp + String.fromCharCode(176) + "C";
  return decoratedTemp;
}
