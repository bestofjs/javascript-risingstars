export async function MyServerComponent() {
  await wait()
  return <div>From the server!</div>;
}

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}
