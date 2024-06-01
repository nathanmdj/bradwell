"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { toast } from "./ui/use-toast"

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required"
  }).email('Please enter a valid email'
  ).max(100, { message: "Email must be at most 100 characters" }),
  subject: z.string().min(1, {
    message: "Subject is required",
  }).min(5, {
    message: "Subject must be at least 5 characters",
  }).max(100, {
    message: "Subject must be at most 100 characters",
  }),
  message: z.string().min(1, { message: "Message is required"    
  }).min(10, {
    message: "Message must be at least 10 characters",
  }).max(500, {
    message: "Message must be at most 500 characters",
  }),
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  })
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    toast({
      title: "Message sent!",
      description: "We have received your message and will get back to you shortly.",
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="yourEmail@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Any subject" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message . . ." {...field} rows={8}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg"
          >Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm