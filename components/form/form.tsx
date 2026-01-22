"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import FormControl from "./form-control";
import Label from "../label/label";
import Input from "../input/input";
import Textarea from "../textarea/textarea";
import { useCallback, useState } from "react";
import FormCheckbox from "../checkbox/form-checkbox";
import Link from "next/link";
import Button from "../buttons/button";
import { useRef } from "react";
import useSendContacts from "@/api/send-contacts";
import AnimationContainer from "../containers/animation-container";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  company: z.string().nullish(),
  message: z.string().nullish(),
});

export default function Form() {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [isSend, setIsSend] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    name: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | null | undefined;
    company?: string | null | undefined;
    message?: string | null | undefined;
  }>({ name: null, phone: null, email: null, company: null, message: null });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });
  const { sendContacts, data } = useSendContacts(handleSuccess);

  function handleSuccess() {
    setIsSend(true);
  }

  const onSubmit = useCallback(
    (values: z.infer<typeof FormSchema>) => {
      if (values.phone === "" && values.email === "") {
        setFormErrors({
          ...formErrors,
          phone: "Either phone or email is required",
          email: "Either phone or email is required",
        });
        return;
      }
      sendContacts(values);
    },
    [sendContacts, formErrors],
  );

  return (
    <AnimationContainer className="">
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-147.75 flex-col items-center gap-5 rounded-[20px] border border-gray-400 p-5"
      >
        <div className="flex w-full items-center gap-2.5">
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <FormControl error={Boolean(errors.phone)}>
                <Label htmlFor={field.name}>Your phone number*</Label>
                <Input
                  {...field}
                  value={field.value || ""}
                  type="phone"
                  id={field.name}
                  placeholder="Phone"
                />
              </FormControl>
            )}
          />
          <span className="text-base leading-[normal] text-white">or</span>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <Label htmlFor={field.name}>Your email address*</Label>
                <Input
                  {...field}
                  value={field.value || ""}
                  type="email"
                  id={field.name}
                  placeholder="Email"
                />
              </FormControl>
            )}
          />
        </div>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <FormControl error={Boolean(errors.name)}>
              <Label htmlFor={field.name}>How should I address you*</Label>
              <Input
                {...field}
                value={field.value || ""}
                type="name"
                id={field.name}
                placeholder="Name"
              />
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="company"
          render={({ field }) => (
            <FormControl error={Boolean(errors.company)}>
              <Label htmlFor={field.name}>Where are you from</Label>
              <Input
                {...field}
                value={field.value || ""}
                type="company"
                id={field.name}
                placeholder="Company"
              />
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field }) => (
            <FormControl error={Boolean(errors.message)}>
              <Label htmlFor={field.name}>Where are you from</Label>
              <Textarea
                {...field}
                value={field.value || ""}
                id={field.name}
                placeholder="Additional"
              />
            </FormControl>
          )}
        />
        <FormCheckbox
          name="agriement"
          isCheck={isAgreementChecked}
          onChange={setIsAgreementChecked}
        >
          <p>
            Подтверждаю согласие с{" "}
            <Link href={"/privacy"} className="underline underline-offset-2 decoration-1">
              политикой конфиденциальности и обработки персональных данных
            </Link>
          </p>
        </FormCheckbox>
        <Button
          type="submit"
          disabled={!isAgreementChecked || data.isPending}
          className="mt-5 w-full"
        >
          {data.isPending ? "Sending..." : isSend ? "Has been sent" : "Send"}
        </Button>
      </form>
    </AnimationContainer>
  );
}
