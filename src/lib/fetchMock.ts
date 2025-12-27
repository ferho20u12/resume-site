export async function fetchMock<T>(data: T, delay = 10): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
}
