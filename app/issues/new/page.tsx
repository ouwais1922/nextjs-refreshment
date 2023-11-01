"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IIssueForm {
  title: string;
  description: string;
}

const page = () => {
  const { register, control, handleSubmit } = useForm<IIssueForm>();
  const router = useRouter();
  return (
    <form
      className="max-w-lg flex flex-col gap-3"
      onSubmit={handleSubmit(async (data) => {
        router.push("/issues");
      })}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Search the docs…"
          {...register("title")}
        />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="start your thoughts.." {...field} />
        )}
      ></Controller>
      <div className="w-1/2">
        <Button>Submit New Issue</Button>
      </div>
    </form>
  );
};

export default page;
