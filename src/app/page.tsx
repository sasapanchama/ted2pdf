import { StepList, URLForm } from "./components";

export default function Home() {
  return (
    <>
      <main>
        <URLForm />
      </main>
      <aside style={{ position: "fixed", top: "50%", right: "24px", transform: "translateY(-50%)" }}>
        <StepList />
      </aside>
    </>
  );
}
