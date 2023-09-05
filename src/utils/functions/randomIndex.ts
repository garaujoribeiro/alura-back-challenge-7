/**
 * Retorna um index aleatorio de um array
 * @param arr Array que deseja um index aleatorio
 * @returns index aleatorio
 */

export default function randomIndex(arr: unknown[]) {
  return Math.floor(Math.random() * arr.length);
}
