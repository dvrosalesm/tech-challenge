const memoryStorage = new Map<string, string>();

export const MemoryStorage = {
  setItem(key: string, value: object | string | number) {
    memoryStorage.set(key, JSON.stringify(value));
  },
  getItem<T>(key: string): T | null {
    return memoryStorage.has(key)
      ? (JSON.parse(memoryStorage.get(key)) as T)
      : null;
  },
};
