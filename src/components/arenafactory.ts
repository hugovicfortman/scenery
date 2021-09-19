import { Arena } from "../arena";
import { DynamicMap } from "./dynamicmap";

type keys = keyof typeof DynamicMap.arenaMap;
type arenaType = typeof DynamicMap.arenaMap[keys];
type ExtractInstanceType<T> = T extends new() => infer R? R : Arena;

export class ArenaFactory {
  static getArena(k: keys, container: HTMLElement): ExtractInstanceType<arenaType> {
    return new DynamicMap.arenaMap[k](container);
  }
}
export function getArena(index: number, container: HTMLElement): ExtractInstanceType<arenaType> {
  return ArenaFactory.getArena(DynamicMap.indices[index], container)
}
