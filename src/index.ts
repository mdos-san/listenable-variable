export interface ListenableVarGet<T> {
  (): T;
}

export interface ListenableVarSet<T> {
  (newValue: T): void;
}

export interface ListenableVarListen<T> {
  (callback: ListenableVarCallback<T>): () => void;
}

export interface ListenableVarCallback<T> {
  (newValue: T): void;
}

const ListenableVar = <T>(
  defaultValue: T
): [ListenableVarGet<T>, ListenableVarSet<T>, ListenableVarListen<T>] => {
  let value = defaultValue;
  const listeners = {} as Record<string, ListenableVarCallback<T>>;

  /**
   * Add a new callback to the listeners.
   * It will be called each time the value is updated.
   * The callback is called immediatly with the current value.
   */
  const listen: ListenableVarListen<T> = (callback) => {
    const id = Math.random().toString();

    callback(value);
    listeners[id] = callback;

    return () => {
      delete listeners[id];
    };
  };

  /**
   * Set a new value and call every listeners.
   */
  const set = (newValue: T) => {
    value = newValue;
    Object.values(listeners).forEach((cb) => cb(newValue));
  };

  /**
   * Get the current value.
   */
  const get = (): T => value;

  return [get, set, listen];
};

export default ListenableVar;
