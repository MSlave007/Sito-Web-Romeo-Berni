"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Card, CardContent } from "@/components/ui/Card/Card";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <Card className="border-success/50 bg-success/5">
                <CardContent className="flex flex-col items-center text-center py-12">
                    <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-heading mb-2">Messaggio Inviato!</h3>
                    <p className="text-body max-w-md">
                        Grazie per averci contattato. Un nostro tecnico ti risponderà entro 24 ore.
                    </p>
                    <Button
                        className="mt-8"
                        variant="outline"
                        onClick={() => setStatus("idle")}
                    >
                        Invia un altro messaggio
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-gray-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-heading">
                                Nome e Cognome
                            </label>
                            <input
                                id="name"
                                required
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="Mario Rossi"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-heading">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="mario@studio.it"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-heading">
                                Telefono
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="+39 333 1234567"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="type" className="text-sm font-semibold text-heading">
                                Tipologia Struttura
                            </label>
                            <select
                                id="type"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                            >
                                <option value="studio">Studio Dentistico</option>
                                <option value="clinica">Clinica / Poliambulatorio</option>
                                <option value="altro">Altro</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-semibold text-heading">
                            A cosa sei interessato?
                        </label>
                        <select
                            id="service"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        >
                            <option value="valutazione">Valutazione Pre-acquisto</option>
                            <option value="collaudo">Collaudo / Accettazione</option>
                            <option value="controlli">Controlli di Qualità Periodici</option>
                            <option value="audit">Audit & Documentazione</option>
                            <option value="altro">Altro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-heading">
                            Messaggio / Dettagli
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
                            placeholder="Descrivi la tua richiesta (es. marca/modello apparecchiatura, urgenza...)"
                        ></textarea>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted">
                        <input type="checkbox" id="privacy" required className="rounded border-gray-300 text-primary focus:ring-primary" />
                        <label htmlFor="privacy">Accetto la normativa sulla privacy</label>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={status === "submitting"}
                    >
                        {status === "submitting" ? "Invio in corso..." : (
                            <>
                                Invia Richiesta <Send size={18} className="ml-2" />
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
