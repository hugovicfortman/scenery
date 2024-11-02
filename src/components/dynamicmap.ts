import { CubeArena } from "../arenas/cube.arena";
import { WorkdeskArena } from '../arenas/workdesk.arena';
import { WorkdeskLiveArena } from '../arenas/workdesk-live.arena';
import { MyNewArena } from '../arenas/mynew.arena';
import { OfficeArena } from '../arenas/office.arena';


export type keys = keyof typeof DynamicMap.arenaMap;
export type arenaType = typeof DynamicMap.arenaMap[keys];

export class DynamicMap {

  static arenaMap = {
    workdesklive: WorkdeskLiveArena,
    officearena: OfficeArena,
    cube: CubeArena,
    workdesk: WorkdeskArena,
    newarena: MyNewArena
  };
  static indices = Object.keys(DynamicMap.arenaMap);
}