"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

const FormSchema = z.object({
  message: z
    .string()
    .min(15, {
      message: "Die Nachricht muss mindestens 15 Zeichen haben.",
    })
    .max(1200, {
      message: "Die Nachricht ist zu lang.",
    }),
  username: z.string().min(2, {
    message: "Der Name muss mindestens 2 Zeichen haben.",
  }),
  email: z.string().email({
    message: "Ungültige E-Mail-Adresse.",
  }),
  phone: z.string().min(6, {
    message: "Ungültige Telefonnummer.",
  }),
});

export function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      message: "",
      email: "",
      phone: "",
    },
  });

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void },
  ) => {
    const { value } = event.target;
    const regex = /^[0-9+-\s]*$/;

    if (regex.test(value)) {
      field.onChange(event); // tylko jeśli wartość jest prawidłowa, wywołaj onChange
    }
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    const promise = () =>
      new Promise<string>(async (resolve, reject) => {
        try {
          const response1 = await fetch("/api/sendContactForm", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: data.username,
              email: data.email.toLowerCase(),
              message: data.message,
            }),
          });

          const response2 = await fetch("/api/sendConfirmContactForm", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: data.username,
              email: data.email.toLowerCase(),
              phone: data.phone,
              message: data.message,
            }),
          });

          if (!response1.ok || !response2.ok) {
            throw new Error("Failed to send email");
          }

          form.reset();
          setEmailSent(true);
          setIsLoading(false);
          resolve("E-Mail korrekt gesendet");
        } catch (error) {
          console.error("Failed to send email: ", error);
          setEmailSent(false);
          setIsLoading(false);
          reject("Beim Senden der E-Mail ist ein Fehler aufgetreten");
        }
      });

    toast.promise(promise, {
      loading: "Es wird eine Nachricht gesendet...",
      success: (msg) => msg as string,
      error: (msg) => msg as string,
    });
  }

  return (
    <section
      id="contact-form"
      className="items-center justify-items-center px-2 py-4 sm:py-10"
    >
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>Kontaktieren Sie uns</CardTitle>
          <CardDescription>
            Füllen Sie das untenstehende Formular aus, und wir werden uns so
            schnell wie möglich bei Ihnen melden.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full caret-ring"
          >
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Vorname</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Schreiben Sie Ihren Vorname..."
                        {...field}
                        id="username"
                        name="username"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Schreiben Sie Ihren E-mail..."
                        {...field}
                        id="email"
                        name="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="phone">Telefonnummer</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Schreiben Sie Ihren Telefonnummer..."
                        {...field}
                        id="phone"
                        name="phone"
                        onChange={(event) => handlePhoneChange(event, field)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="message">Nachricht</FormLabel>
                    <FormControl>
                      <p className="first-letter:capitalize">
                        <Textarea
                          placeholder="Schreiben Sie Ihren Nachricht..."
                          {...field}
                          id="message"
                          name="message"
                          className="h-36"
                        />
                      </p>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              {emailSent && (
                <div className="inline-flex pl-0.5 text-xs text-green-600">
                  Die E-Mail wurde erfolgreich gesendet. Bitte überprüfen Sie
                  Ihre E-Mail
                </div>
              )}
              <Button disabled={isLoading} type="submit" className="ml-auto">
                Senden
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </section>
  );
}
