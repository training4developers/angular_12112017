export interface Color {
  id?: number;
  name: string;
  hexCode: string;
}

export interface ColorEvent {
  color: Color;
  cb: () => void;
}

