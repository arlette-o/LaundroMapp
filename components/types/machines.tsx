type Machine = {
  _id: string; // Assuming _id is a string
  ID: string; // Assuming ID is a string
  available: boolean; // Assuming available is a boolean
  unavailable: boolean; // Assuming unavailable is a boolean
  inUse: boolean; // Assuming inUse is a boolean
  reserved: boolean; // Assuming reserved is a boolean
  duration: number | null; // Assuming duration can be a number or null
  reserveTime: Date | null; // Assuming reserveTime can be a Date object or null
};

export default Machine;
