import { Arena } from "./arena";
import { arenaType, DynamicMap, keys } from "./dynamicmap";

type ExtractInstanceType<T> = T extends new() => infer R? R : Arena;

export class ArenaFactory {
  static getArena(k: keys, container: HTMLElement): ExtractInstanceType<arenaType> {
    return new DynamicMap.arenaMap[k](container);
  }
}

export function getArena(index: number, container: HTMLElement): ExtractInstanceType<arenaType> {
  return ArenaFactory.getArena((DynamicMap.indices[index] as keys), container)
}

export function getArenaCount(): number {
  return DynamicMap.indices.length;
}

export function getArenaIndex(): string[] {
  return DynamicMap.indices;
}
