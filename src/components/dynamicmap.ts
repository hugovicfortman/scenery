import { CubeArena } from "../assets/cube.arena";
import { WorkdeskArena } from '../assets/workdesk.arena';


export type keys = keyof typeof DynamicMap.arenaMap;
export type arenaType = typeof DynamicMap.arenaMap[keys];

export class DynamicMap {

  static arenaMap = {
    cube: CubeArena,
    workdesk: WorkdeskArena
  };
  static indices = Object.keys(DynamicMap.arenaMap);
}