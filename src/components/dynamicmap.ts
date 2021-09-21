import { CubeArena } from "../arenas/cube.arena";
import { WorkdeskArena } from '../arenas/workdesk.arena';


export type keys = keyof typeof DynamicMap.arenaMap;
export type arenaType = typeof DynamicMap.arenaMap[keys];

export class DynamicMap {

  static arenaMap = {
    cube: CubeArena,
    workdesk: WorkdeskArena
  };
  static indices = Object.keys(DynamicMap.arenaMap);
}