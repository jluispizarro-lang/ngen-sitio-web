"use client";

import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Usuario o contraseña incorrectos.");
      return;
    }

    router.push("/portal");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-sm flex-col gap-5">
      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-charcoal" htmlFor="username">
          Usuario
        </label>
        <input
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="username"
          required
          className="w-full rounded border border-hairline bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-clay"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-charcoal" htmlFor="password">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
          className="w-full rounded border border-hairline bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-clay"
        />
      </div>
      {error && <p className="text-[13px] text-clay-dark">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        {loading ? "Ingresando…" : "Ingresar"}
      </button>
    </form>
  );
}
