"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    consentimento: false,
  });

  useEffect(() => {
    const fechado = sessionStorage.getItem("lead-popup-fechado");
    if (fechado) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  function updateField(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erro ao enviar.");
        return;
      }

      setSucesso(true);

      setTimeout(() => {
        setOpen(false);
        sessionStorage.setItem("lead-popup-fechado", "true");
      }, 1500);
    } catch (error) {
      alert("Erro ao enviar formulário.");
    } finally {
      setLoading(false);
    }
  }

  function closePopup() {
    setOpen(false);
    sessionStorage.setItem("lead-popup-fechado", "true");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={closePopup}
          className="mb-2 ml-auto block text-sm text-gray-600 hover:text-black"
        >
          Fechar
        </button>

        {sucesso ? (
          <div className="py-8 text-center">
            <h3 className="text-2xl font-semibold text-black">
              Cadastro realizado
            </h3>
            <p className="mt-2 text-gray-700">
              Você entrou para a lista VIP da Digos.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-black">
              Receba ofertas e novidades
            </h2>

            <p className="mt-2 text-sm text-gray-700">
              Cadastre-se para receber lançamentos, promoções e novidades da
              Digos Online.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => updateField("nome", e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-black placeholder-gray-400 outline-none focus:border-black"
                required
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-black placeholder-gray-400 outline-none focus:border-black"
                required
              />

              <input
                type="tel"
                placeholder="Seu telefone"
                value={form.telefone}
                onChange={(e) => updateField("telefone", e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-black placeholder-gray-400 outline-none focus:border-black"
                required
              />

              <label className="flex items-start gap-3 text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={form.consentimento}
                  onChange={(e) =>
                    updateField("consentimento", e.target.checked)
                  }
                  className="mt-1"
                  required
                />
                <span>
                  Concordo em receber ofertas, lançamentos e comunicações da
                  Digos Online.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Quero receber novidades"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}