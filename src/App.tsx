function App() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1rem" }}>
      <section>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Marco Scherillo
        </h1>

        <h2 style={{ fontSize: "1.25rem", fontWeight: 400, color: "#555" }}>
          Computer Science Graduate From NJIT
        </h2>

        <p style={{ marginTop: "1.5rem", fontSize: "1.1rem" }}>
          I’m a computer science student focused on building full-stack
          applications, distributed systems, and data-driven tools.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a href="https://github.com/Marco-Scherillo" target="_blank">GitHub</a>
          {" · "}
          <a href="linkedin.com/in/marco-scherillo-7a7428158" target="_blank">
          LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
