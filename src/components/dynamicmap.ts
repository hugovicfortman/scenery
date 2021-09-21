import { CubeArena } from "../arenas/cube.arena";
import { WorkdeskArena } from '../arenas/workdesk.arena';
import { MyNewArena } from '../arenas/mynew.arena';


export type keys = keyof typeof DynamicMap.arenaMap;
export type arenaType = typeof DynamicMap.arenaMap[keys];

export class DynamicMap {

  static arenaMap = {
    cube: CubeArena,
    workdesk: WorkdeskArena,
    newarena: MyNewArena
  };
  static indices = Object.keys(DynamicMap.arenaMap);
}