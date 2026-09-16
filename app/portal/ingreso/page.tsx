import LoginForm from "@/components/portal/LoginForm";

export const metadata = {
  title: "Ingreso — Ngen Servicios de Ingeniería",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <span className="font-serif text-2xl font-semibold tracking-wide text-ink">NGEN</span>
          <p className="mt-2 section-eyebrow">Espacio de clientes</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
