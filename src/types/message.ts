import { Time } from "@lichtblick/suite";

export enum MovivngObjectEnum {
  TYPE_VEHICLE = 2,
  TYPE_PEDESTRIAN = 3,
}

export interface Identifier {
  value: number;
}

export interface Message {
  host_vehicle_id: Identifier;
  moving_object: { id: Identifier; type: { value: MovivngObjectEnum } }[];
  stationary_object: { id: Identifier }[];
  lane: { id: Identifier }[];
  lane_boundary: { id: Identifier }[];
  traffic_sign: { id: Identifier }[];
  traffic_light: { id: Identifier }[];
}

export interface BaseParam {
  context: string;
  id?: number;
  value: boolean | number | string;
  time: Time;
}

export interface RenderTree {
  id: number;
  name: string;
  value?: number | boolean | null;
  time: Time;
  label: string;
  children?: RenderTree[];
  index: number;
}
