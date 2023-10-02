import { create } from "zustand";

interface PlatformStateInterface {
  platformId: number | null;
  onClickingOnPlatform: (id: number|null) => void;
}

const usePlatformState = create<PlatformStateInterface>((setOrUpdateState) => ({
  platformId: null,
  onClickingOnPlatform: (id) => setOrUpdateState(() => ({ platformId: id })),
}));

export default usePlatformState;
