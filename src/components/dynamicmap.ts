import { CubeArena } from "../assets/cube.arena";
import { WorkdeskArena } from '../assets/workdesk.arena';

export class DynamicMap {

  static map = {
    cube: CubeArena,
    workdesk: WorkdeskArena
  };
  static indices = Object.keys(DynamicMap.map);
  static get arenaMap() {
    return DynamicMap.map;
  }
}